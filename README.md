# کالا پلاس (Kala Plus)

فروشگاه آنلاین مدرن با معماری **Monorepo**

---

## تکنولوژی‌ها

### Frontend (`apps/web`)
- **Next.js 16** + **React 19**
- **GraphQL** با Apollo Client و GraphQL Mesh
- **UI**: Radix UI + Tailwind CSS + Lucide Icons
- **Storybook** برای توسعه و تست کامپوننت‌ها
- Feature-based Architecture

### Backend (`apps/api`)
- **NestJS 11** (Modular Architecture)
- **TypeORM** + **PostgreSQL**
- **Redis** + **BullMQ** (کش و صف)
- **JWT + Refresh Token** Authentication
- **Swagger** برای مستندات API
- آپلود فایل با Multer

---

## ساختار پروژه

```
apps/
├── web/     # فرانت‌اند (Feature-based)
└── api/     # بک‌اند (Modular)
```

---

## راه‌اندازی

### ۱. نصب وابستگی‌ها
```bash
pnpm install
```

### ۲. اجرای سرویس‌ها با Docker
```bash
docker compose up -d
```

### ۳. تنظیم Environment
فایل‌های `.env.example` موجود هستن. کافیه کپی کنی و مقادیر رو تنظیم کنی:
```bash
cp apps/api/.env.example apps/api/.env
cp apps/web/.env.example apps/web/.env.local
```

### ۴. بیلد و اجرای GraphQL Mesh (الزامی)
```bash
cd apps/web
pnpm mesh b      # بیلد
pnpm mesh        # اجرا روی پورت 4000
```

### ۵. اجرای پروژه
```bash
# فرانت‌اند
cd apps/web
pnpm dev

# بک‌اند
cd apps/api
pnpm dev
```

---

## آدرس‌ها

| سرویس       | آدرس                          |
|-------------|-------------------------------|
| Frontend    | http://localhost:3000         |
| Backend     | http://localhost:3001         |
| GraphQL     | http://localhost:4000/graphql |
| Swagger     | http://localhost:3001/api     |

---

## اسکریپت‌های مهم

| دستور            | توضیح                     |
|------------------|---------------------------|
| `pnpm mesh b`    | بیلد GraphQL Mesh         |
| `pnpm mesh`      | اجرای Mesh (پورت ۴۰۰۰)    |
| `pnpm dev`       | اجرای فرانت / بک          |
| `pnpm build`     | بیلد production           |
| `pnpm storybook` | اجرای Storybook           |
