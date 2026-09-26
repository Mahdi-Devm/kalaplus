# KalaPlus CI/CD

Branch اصلی پروژه: **`master`** (همه workflowها بر همین اساس طراحی شده‌اند).

## Workflows

| Workflow | Trigger | فایل |
|---|---|---|
| CI (Pull Request) | `pull_request -> master` | `.github/workflows/ci.yml` |
| Master Production Validation | `push -> master` + اجرای دستی | `.github/workflows/ci-master.yml` |
| Dependabot | زمان‌بندی هفتگی | `.github/dependabot.yml` |

## معماری Pipeline

```
PR / push به master
        │
        ▼
┌─────────────────────────────────────────────┐
│  Phase 1 - موازی (fast fail)                │
│   lint ──┐                                  │
│   typecheck ──┼──▶ (همزمان اجرا می‌شوند)    │
│   test ──┘                                  │
└─────────────────────────────────────────────┘
        │ همه سبز
        ▼
┌─────────────────────────────────────────────┐
│  Phase 2 - build (موازی)                    │
│   build-web (Next.js)                       │
│   build-api (NestJS)                        │
└─────────────────────────────────────────────┘
        │
        ▼
┌─────────────────────────────────────────────┐
│  Phase 3 - validation                       │
│   PR:    build ایمیج‌های Docker + audit     │
│   master: production-readiness (Docker)     │
│           + security audit                  │
│           + deploy-placeholder (TODO)       │
└─────────────────────────────────────────────┘
```

## Jobها

### PR (`ci.yml`)

- **lint** – `pnpm lint` (فعلاً non-blocking؛ توضیح در بخش «وضعیت فعلی»)
- **typecheck** – `tsc --noEmit` برای api (blocking) و web (فعلاً advisory)
- **test** – vitest برای web و jest برای api (`--passWithNoTests` چون api تست واحد ندارد)
- **build-web / build-api** – بیلد production هر دو اپ (بعد از سبز شدن Phase 1)
- **security** – `pnpm audit --audit-level=high` (advisory؛ فعلاً 35 vulnerability وجود دارد)
- **docker** – build ایمیج `docker/Dockerfile.web` و `docker/Dockerfile.api` با cache نوع `gha`

### master (`ci-master.yml`)

همان gateهای PR به‌علاوه:

- **production-readiness** – build موفق ایمیج‌های Docker production (PR-tagged با `github.sha`)
- **security** – audit بعد از readiness
- **deploy-placeholder** – گزارش وضعیت؛ جای‌گذاری برای job واقعی deploy

## Monorepo optimization

- **pnpm** با `--frozen-lockfile` + cache داخلی `setup-node` (کلید بر اساس هش `pnpm-lock.yaml`)
- **تک‌اپ‌ها با `pnpm --filter <name> <script>`** اجرا می‌شوند؛ هر job فقط کاری که به آن مربوط است را انجام می‌دهد
- turborepo داخل خود buildها (`nest build` / `next build`) دخالتی ندارد؛ از فیلتر pnpm استفاده شده تا نصب/اجرای غیرضروری حذف شود
- Docker buildها از `turbo prune` داخل Dockerfileها استفاده می‌کنند و با `cache-from/cache-to: type=gha` کش می‌شوند
- `concurrency` روی PRها اجرای‌های قدیمی را cancel می‌کند

## وضعیت فعلی (برای تبدیل شدن به gate سخت‌گیرانه)

CI فعلی تفاوت‌های موجود ریپو را منعکس می‌کند. هر مورد با کامنت `TEMPORARY` در خود workflow مشخص شده:

1. **lint**: `apps/api` به `@repo/eslint-config` وابستگی ندارد (خطای import در eslint.config.mjs) و web دارای 47 warning است. lint فعلاً non-blocking است؛ پس از تمیز شدن، `|| true` را حذف کنید.
2. **typecheck web**: دارای ۱۲ خطای TypeScript موجود (ماژول‌های گمشده و type mismatch)؛ `continue-on-error: true` موقت است.
3. **build web (next build)**: به‌خاطر همان خطاهای TypeScript fail می‌شود؛ موقتاً `continue-on-error: true` است.
4. **build Docker**: `Dockerfile.api` در مرحله `pnpm install --frozen-lockfile` شکست می‌خورد چون pnpm نمی‌تواند `pnpm-lock.yaml` را بخواند (lockfile پروژه pnpm است ولی Dockerfileها pnpm هستند). با رفع Dockerfileها این خط hard gate می‌شود.
5. **pnpm audit**: 35 vulnerability (19 high، 2 critical) در وابستگی‌ها؛ audit فعلاً advisory است تا وابستگی‌ها به‌روز شوند.

Gateهای قطعی (blocking) فعلی: **typecheck api**، **test web (vitest)**، **build api (nest build)**.

## Secrets

هیچ secret واقعی در ریپو وجود ندارد و نباید داشته باشد. فعلاً **هیچ secret لازم نیست** چون deployment خودکار نداریم. در آینده:

| Secret | استفاده |
|---|---|
| `DEPLOY_HOST` / `DEPLOY_USER` / `DEPLOY_SSH_KEY` | SSH به سرور production |
| `REGISTRY_USERNAME` / `REGISTRY_TOKEN` | push ایمیج‌های Docker |
| `POSTGRES_PASSWORD` / `POSTGRES_USER` / `POSTGRES_DB` | تنها در صورت اضافه شدن integration test با Postgres سرویس |

## TODO: Deployment

پروژه یک فرآیند deploy دستی دارد (`docker/compose.production.yml` + `docker/install.sh`) اما هیچ provider CI-integrated (Vercel، SSH server، registry و…) پیکربندی نشده. تا مشخص شدن مقصد deploy:

- build و validation production در `ci-master.yml` انجام می‌شود
- deployment به‌صورت `TODO(deployment)` داخل `ci-master.yml` مستند شده
- پس از انتخاب provider، job `deploy` را با گیت `needs: [production-readiness, security]` و فقط روی `refs/heads/master` اضافه کنید

## Branch protection پیشنهادی برای master

- Require status checks: `Lint (web + api)`, `Typecheck (web + api)`, `Tests (web)`, `Build (web / Next.js)`, `Build (api / NestJS)`
- Require 1 approval
- جلوگیری از force-push و حذف branch
