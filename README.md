<div align="center">

# KalaPlus

**A modern, full-stack e-commerce platform built for scalable commerce.**

Next.js · NestJS · PostgreSQL · Redis · GraphQL · Turborepo · shadcn/ui · Storybook

[![Node: 22](https://img.shields.io/badge/Node.js-22-339933?logo=node.js\&logoColor=white)]()
[![pnpm: 11](https://img.shields.io/badge/pnpm-11-F69220?logo=pnpm\&logoColor=white)]()
[![Next.js](https://img.shields.io/badge/Next.js-16-000000?logo=next.js\&logoColor=white)]()
[![NestJS](https://img.shields.io/badge/NestJS-11-E0234E?logo=nestjs\&logoColor=white)]()
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript\&logoColor=white)]()
[![PostgreSQL](https://img.shields.io/badge/PostgreSQL-17-336791?logo=postgresql\&logoColor=white)]()
[![Redis](https://img.shields.io/badge/Redis-8-DC382D?logo=redis\&logoColor=white)]()
[![Turborepo](https://img.shields.io/badge/Turborepo-2-EF4444?logo=turborepo\&logoColor=white)]()
[![shadcn/ui](https://img.shields.io/badge/shadcn%2Fui-000000?logo=shadcnui\&logoColor=white)]()
[![Storybook](https://img.shields.io/badge/Storybook-FF4785?logo=storybook\&logoColor=white)]()


</div>

---

## 📑 Table of Contents

* [✨ Features](#-features)
* [🏗️ Architecture](#️-architecture)
* [🚀 Quick Start](#-quick-start)
* [🧰 Tech Stack](#-tech-stack)
* [🔐 Environment Variables](#-environment-variables)
* [🗄️ Database & Infrastructure](#️-database--infrastructure)
* [🧪 Testing](#-testing)
* [🔍 Code Quality](#-code-quality)
* [⚙️ CI Pipeline](#️-ci-pipeline)
* [🗂️ Project Structure](#️-project-structure)
* [📦 Docker](#-docker)
* [🧭 Roadmap](#-roadmap)
* [🤝 Contributing](#-contributing)
* [🔒 Security](#-security)
* [📄 License](#-license)

---

## ✨ Features

### 🛍️ Commerce

* 🛒 **Product Catalog** — products, categories and product discovery
* 🔥 **Featured Products** — popular, latest and discounted product sections
* 📄 **Pagination** — scalable product listing with backend pagination
* 🖼️ **Image Processing** — server-side image processing with Sharp
* 📱 **Responsive Storefront** — modern responsive shopping experience

### 🔐 Authentication

* 🔑 **Access / Refresh Tokens** — token-based authentication architecture
* 🍪 **HTTP Cookies** — authentication tokens handled through cookies
* 👤 **User Sessions** — authenticated user lifecycle
* 🛡️ **Authorization** — role-aware backend architecture

### ⚡ Backend Infrastructure

* 🚀 **NestJS API** — modular backend architecture
* 🗃️ **PostgreSQL** — relational source of truth
* ⚡ **Redis** — caching and temporary state
* 🔄 **BullMQ** — background and asynchronous jobs
* 🖼️ **Sharp** — image processing pipeline
* 📘 **Swagger** — API documentation
* 🔌 **GraphQL** — unified API consumption layer
* 🌐 **GraphQL Mesh** — API integration layer between frontend and backend

### 🧪 Engineering

* 🧪 **Vitest** — frontend test runner
* 🧩 **React Testing Library** — component behavior testing
* 🔎 **TypeScript** — static type checking
* 🧹 **ESLint** — code quality
* 📖 **Storybook** — component development and documentation
* ⚡ **Turborepo** — monorepo task orchestration
* 🔄 **GitHub Actions** — automated CI validation

---

## 🏗️ Architecture

KalaPlus is a **pnpm + Turborepo monorepo** containing the web application, API and shared tooling.

```text
.
├── apps/
│   ├── web/                 # Next.js storefront
│   └── api/                 # NestJS API
│
├── packages/
│   ├── eslint-config/       # Shared ESLint configurations
│   └── typescript-config/   # Shared TypeScript configurations
│
├── docker/
│   ├── Dockerfile.web       # Production web image
│   ├── Dockerfile.api       # Production API image
│   └── compose.production.yml
│
├── .github/
│   ├── actions/
│   │   └── setup-monorepo/  # Shared GitHub Action
│   │
│   └── workflows/
│       ├── ci.yml
│       └── ci-master.yml
│
├── package.json
├── pnpm-workspace.yaml
└── turbo.json
```

### Frontend

The web application is built with **Next.js** and follows a feature-oriented structure.

```text
apps/web/src/
│
├── core/
│   ├── components/
│   ├── features/
│   ├── hooks/
│   ├── lib/
│   └── ...
│
└── ...
```

The frontend is responsible for:

* Storefront UI
* Product discovery
* Server-side data fetching
* GraphQL consumption
* Authentication UI
* Client-side state
* Reusable UI components
* SEO and rendering
* Frontend testing

### Backend

The API is built as a modular **NestJS** application.

```text
apps/api/src/
│
├── modules/
├── common/
├── config/
├── database/
└── main.ts
```

The backend is responsible for:

* Authentication
* Users
* Products
* Categories
* Database access
* Business logic
* REST / GraphQL integration
* Background jobs
* Image processing
* Authorization

---

## 🔄 Data Flow

```text
                    ┌──────────────────┐
                    │     Browser      │
                    └────────┬─────────┘
                             │
                             ▼
                    ┌──────────────────┐
                    │    Next.js Web   │
                    │                  │
                    │ SSR / RSC / UI   │
                    └────────┬─────────┘
                             │
                             ▼
                    ┌──────────────────┐
                    │  GraphQL Mesh    │
                    └────────┬─────────┘
                             │
                             ▼
                    ┌──────────────────┐
                    │    NestJS API    │
                    └───────┬──────────┘
                            │
                 ┌──────────┼──────────┐
                 ▼          ▼          ▼
          ┌──────────┐ ┌─────────┐ ┌─────────┐
          │PostgreSQL│ │  Redis  │ │ BullMQ  │
          └──────────┘ └─────────┘ └─────────┘
                                      │
                                      ▼
                                  Background
                                     Jobs
```

---

## 🚀 Quick Start

### Prerequisites

| Tool       | Version |
| ---------- | ------: |
| Node.js    |     22+ |
| pnpm       |     11+ |
| PostgreSQL |      17 |
| Redis      |       8 |
| Docker     |  Latest |

### 1. Clone the repository

```bash
git clone https://github.com/Mahdi-Devm/kalaplus.git

cd kalaplus
```

### 2. Install dependencies

```bash
pnpm install
```

### 3. Configure environment variables

Create the required environment files for the API and web applications.

```bash
cp apps/api/.env.example apps/api/.env
```

Then configure your local database, Redis, authentication and application settings.

### 4. Start infrastructure

KalaPlus uses Docker for local PostgreSQL and Redis services.

```bash
docker compose up -d
```

Check services:

```bash
docker compose ps
```

### 5. Start development

Run the monorepo:

```bash
pnpm dev
```

Or run applications individually:

```bash
pnpm --filter web dev
```

```bash
pnpm --filter api start:dev
```

---

## 🧰 Tech Stack

### Frontend

* **Next.js 16**
* **React**
* **TypeScript**
* **Tailwind CSS**
* **shadcn/ui**
* **Apollo**
* **GraphQL**
* **Zustand**
* **React Query**
* **Storybook**
* **Vitest**
* **React Testing Library**

### Backend

* **NestJS**
* **TypeScript**
* **TypeORM**
* **PostgreSQL 17**
* **Redis 8**
* **BullMQ**
* **GraphQL**
* **GraphQL Mesh**
* **Swagger**
* **Sharp**

### Tooling

* **pnpm 11**
* **Turborepo**
* **ESLint**
* **Prettier**
* **Git**
* **GitHub Actions**
* **Docker**

---

## 🔐 Environment Variables

Environment variables are intentionally kept outside the repository.

Typical API configuration includes:

| Variable             | Description             |
| -------------------- | ----------------------- |
| `NODE_ENV`           | Application environment |
| `PORT`               | API port                |
| `DATABASE_URL`       | PostgreSQL connection   |
| `REDIS_URL`          | Redis connection        |
| `JWT_ACCESS_SECRET`  | Access-token secret     |
| `JWT_REFRESH_SECRET` | Refresh-token secret    |
| `CORS_ORIGIN`        | Allowed frontend origin |

> Never commit production secrets, credentials or private API keys.

For the exact variables supported by the current implementation, see the `.env.example` files inside the applications.

---

## 🗄️ Database & Infrastructure

### PostgreSQL

PostgreSQL is the primary persistent datastore.

Local development exposes PostgreSQL through:

```text
localhost:15432
```

### Redis

Redis is used for application-level caching and temporary/fast-access data.

```text
localhost:6379
```

### BullMQ

Background jobs are handled through BullMQ backed by Redis.

Typical asynchronous workloads include operations such as:

* Image processing
* Notifications
* Deferred application tasks

---

## 🧪 Testing

KalaPlus uses **Vitest** and **React Testing Library** for frontend testing.

Run the web test suite:

```bash
pnpm --filter web test
```

Run tests once:

```bash
pnpm --filter web test -- --run
```

The project focuses on testing user-visible behavior rather than implementation details.

Example:

```text
Render component
      │
      ▼
Find element
      │
      ▼
Simulate user interaction
      │
      ▼
Assert visible behavior
```

---

## 🔍 Code Quality

### TypeScript

API:

```bash
pnpm --filter api exec tsc --noEmit
```

Web:

```bash
pnpm --filter web exec tsc --noEmit
```

### ESLint

Run linting:

```bash
pnpm lint
```

The repository uses shared ESLint configurations across applications.

---

## ⚙️ CI Pipeline

Every Pull Request targeting `master` goes through automated validation.

```text
                     Pull Request
                           │
             ┌─────────────┼─────────────┐
             ▼             ▼             ▼
          ┌──────┐   ┌───────────┐   ┌───────┐
          │ Lint │   │ Typecheck │   │ Tests │
          └───┬──┘   └─────┬─────┘   └───┬───┘
              │             │             │
              └─────────────┼─────────────┘
                            ▼
                  ┌──────────────────┐
                  │ Production Build │
                  └────────┬─────────┘
                           │
                    ┌──────┴──────┐
                    ▼             ▼
               ┌─────────┐   ┌─────────┐
               │Web Build│   │API Build│
               └─────────┘   └─────────┘
```

### Current CI checks

* ✅ ESLint
* ✅ API TypeScript check
* ✅ Web TypeScript check
* ✅ Web tests
* ✅ Next.js production build
* ✅ NestJS production build

Docker image building is currently kept outside the Pull Request validation pipeline and will be integrated with the production deployment workflow.

---

## 📦 Docker

Production Dockerfiles are maintained in:

```text
docker/
├── Dockerfile.web
├── Dockerfile.api
└── compose.production.yml
```

The current local development Compose setup intentionally contains only infrastructure services:

```text
Docker Compose
│
├── PostgreSQL
└── Redis
```

Application containers are reserved for the production/VPS deployment setup.

---

## 🗂️ Project Structure

```text
kalaplus/
│
├── apps/
│   │
│   ├── web/
│   │   ├── src/
│   │   │   └── core/
│   │   │       ├── components/
│   │   │       ├── features/
│   │   │       ├── hooks/
│   │   │       └── lib/
│   │   │
│   │   ├── public/
│   │   └── package.json
│   │
│   └── api/
│       ├── src/
│       │   ├── modules/
│       │   ├── common/
│       │   ├── config/
│       │   └── database/
│       │
│       └── package.json
│
├── packages/
│   ├── eslint-config/
│   └── typescript-config/
│
├── docker/
│   ├── Dockerfile.web
│   ├── Dockerfile.api
│   └── compose.production.yml
│
├── .github/
│   ├── actions/
│   │   └── setup-monorepo/
│   └── workflows/
│       ├── ci.yml
│       └── ci-master.yml
│
├── package.json
├── pnpm-lock.yaml
├── pnpm-workspace.yaml
└── turbo.json
```

---

## 🧭 Roadmap

### Commerce

* [x] Product catalog
* [x] Product listing
* [x] Product details
* [x] Product pagination
* [x] Category system
* [x] Featured product sections
* [ ] Shopping cart
* [ ] Checkout
* [ ] Orders
* [ ] Payments
* [ ] Customer order history

### Platform

* [x] Next.js storefront
* [x] NestJS API
* [x] PostgreSQL
* [x] Redis
* [x] GraphQL
* [x] GraphQL Mesh
* [x] Authentication architecture
* [x] Background job infrastructure
* [ ] Notifications
* [ ] Advanced authorization
* [ ] Admin dashboard

### Engineering

* [x] pnpm monorepo
* [x] Turborepo
* [x] ESLint
* [x] TypeScript validation
* [x] Vitest
* [x] React Testing Library
* [x] GitHub Actions CI
* [ ] Expanded test coverage
* [ ] E2E test suite
* [ ] Production monitoring

### Deployment

* [x] Local Docker infrastructure
* [ ] Production Docker images
* [ ] VPS deployment
* [ ] Reverse proxy
* [ ] SSL / HTTPS
* [ ] Automated deployment
* [ ] Production monitoring
* [ ] Backup strategy

---

## 🤝 Contributing

Contributions and improvements are welcome.

Before opening a Pull Request, make sure:

```bash
pnpm lint
```

passes successfully.

Also run:

```bash
pnpm --filter api exec tsc --noEmit
pnpm --filter web exec tsc --noEmit
```

and:

```bash
pnpm --filter web test -- --run
```

For larger changes, keep the existing monorepo boundaries and application responsibilities intact.

---

## 🔒 Security

Do not commit:

* Environment files
* Database credentials
* JWT secrets
* API keys
* Private certificates
* Production credentials

If you discover a security issue, please avoid publishing sensitive details in a public issue.

---

## 👨‍💻 Author

<div align="center">

### Mahdi Bagheri

Frontend-focused full-stack developer building modern applications with **TypeScript, React, Next.js and NestJS**.

[GitHub](https://github.com/Mahdi-Devm)

</div>

---

## 📄 License

This project is currently under active development.

License information will be added before public release.

---

<div align="center">

**Built with TypeScript, Next.js & NestJS.**

</div>
