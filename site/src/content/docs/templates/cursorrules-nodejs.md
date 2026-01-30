---
title: "Node.js .cursorrules"
description: .cursorrules template for Node.js projects in Cursor.
sidebar:
  order: 12
---

A minimal `.cursorrules` template for Node.js projects in Cursor IDE.

## Template (27 lines)

```markdown
# Node.js Project Rules

## Tech Stack
- Node.js + Express
- TypeScript (strict mode)
- PostgreSQL with raw SQL or Prisma

## Commands
- `npm run dev` - Development server
- `npm test` - Run tests
- `npm run lint` - ESLint
- `npm run typecheck` - TypeScript
- `npm run db:migrate` - Migrations

## Code Style
- Explicit error handling over throwing
- Dependency injection for services
- Keep route handlers thin
- All functions must have TypeScript types

## Gotchas
- [Add your project-specific gotchas]

## File Patterns
- Routes: `src/routes/[resource].ts`
- Services: `src/services/[Name]Service.ts`
- Repositories: `src/repositories/[Name]Repository.ts`
- Middleware: `src/middleware/[name].ts`
```

## Usage

1. Copy the template above
2. Save as `.cursorrules` in your project root
3. Adjust database/ORM references as needed
4. Add your project-specific gotchas
