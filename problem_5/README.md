## 99Tech Code Challenge - Backend

Code challenge of 99Tech

## Description server

Solve the problem 5 via link: https://99tech.notion.site/Problem-5-A-Crude-Server-b2978984b3c64b7dae6451f1c215bef7. Using ExpressJs (NodeJs runtime) to handle RESTful API with resource Task and Prisma ORM connect with PostgreSQL (Supabase).

## Description resource

-   Task: The resource storing tasks of employees.

## Clone locally

1. Clone the server.

```bash
$ git clone https://github.com/DinhQuocDat1310/DinhQuocDat.git
```

2. Move to `problem_5` directory.

```bash
$ cd problem_5
```

## Environment variables

To run this project, you need to create `.env` file in root directory and add the following environment variables in `.env.example`.

## Installation dependencies

```bash
$ yarn install
```

## Sync Database with `migrations` folder when pull server and `seed` data

```bash
$ yarn migrate:dev
```

## 🚀 Start the server

```bash
# watch mode
$ yarn start:dev
```

## 🔗 Manage API with Swagger

-   Swagger URL: http://localhost:4000/api-docs

## 🚀 Manage Database with Prisma Studio

-   Run this Bash in another Terminal.
-   View and Edit data directly with Prisma Studio.
-   After running Bash, you can access the database with Default URL: http://localhost:5555

```bash
$ yarn prisma:studio
```

## Manually seed data

```bash
$ yarn prisma:seed
```

## Manually reset data (Force reset)

```bash
$ yarn prisma:reset
```

## Tech

**Server**:

-   Node version: 20.11.0
-   Express version: 4.19.2

## Used for

This server used for the 99Tech Code Challenge - Backend.
