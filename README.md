```markdown
# کالا پلاس (Kala Plus)

فروشگاه آنلاین با معماری Monorepo

- **Frontend**: Next.js + GraphQL (Apollo + Mesh) + Tailwind + Radix UI
- **Backend**: NestJS + TypeORM + PostgreSQL + Redis + BullMQ

---

## ساختار

- **Backend**: ماژولار (هر ماژول مستقل)
- **Frontend**: Feature-based

```
apps/
├── web/     # فرانت‌اند (Feature-based)
└── api/     # بک‌اند (Modular)
```

---

## راه‌اندازی

```bash
pnpm install
```

### Environment

**apps/api/.env**
```env
DATABASE_HOST=localhost
DATABASE_PORT=5432
DATABASE_USER=postgres
DATABASE_PASSWORD=your_password
DATABASE_NAME=kala_plus
REDIS_HOST=localhost
REDIS_PORT=6379
JWT_SECRET=your_secret
PORT=3001
```

**apps/web/.env.local**
```env
NEXT_PUBLIC_API_URL=http://localhost:3001
NEXT_PUBLIC_GRAPHQL_URL=http://localhost:3001/graphql
```

### اجرا

```bash
# اول Mesh رو بیلد کن (الزامی)
cd apps/web
pnpm mesh b

# بعد اجرا
pnpm mesh          # GraphQL Mesh
pnpm dev           # Next.js

# بک‌اند
cd apps/api
pnpm dev
```

- Frontend → http://localhost:3000
- Backend → http://localhost:3001
- Swagger → http://localhost:3001/api

---

## اسکریپت‌های مهم

| دستور           | توضیح                    |
|-----------------|--------------------------|
| `pnpm mesh b`   | بیلد GraphQL Mesh        |
| `pnpm mesh`     | اجرای Mesh               |
| `pnpm dev`      | اجرای فرانت / بک         |
| `pnpm build`    | بیلد production          |
| `pnpm storybook`| اجرای Storybook          |
````
