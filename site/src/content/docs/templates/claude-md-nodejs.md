---
title: "Node.js/Express Template"
description: CLAUDE.md template for Node.js + Express + PostgreSQL projects.
sidebar:
  order: 1
---

A minimal CLAUDE.md template for Node.js backend projects using Express and PostgreSQL.

## Template (34 lines)

```markdown
# Project Context

## What This Is
[One sentence describing your project]

## Tech Stack
Node.js + Express + PostgreSQL

## Commands
- `npm run dev` - Start development server
- `npm test` - Run tests (must pass before committing)
- `npm run lint` - Run ESLint
- `npm run typecheck` - Run TypeScript compiler
- `npm run db:migrate` - Run database migrations
- `npm run db:seed` - Seed test data

## Architecture
- `/src/routes/` - Express route handlers
- `/src/services/` - Business logic (no HTTP concerns)
- `/src/repositories/` - Database queries
- `/src/middleware/` - Auth, logging, error handling
- `/src/types/` - TypeScript type definitions

## Gotchas
- [Add project-specific gotchas here]
- Example: The `inventory` table has a trigger that auto-updates `updated_at`
- Example: Tests use a separate test database - never point at dev/prod

## Code Style
- Prefer explicit error handling over throwing
- Use dependency injection for services
- Keep route handlers thin - delegate to services
- All functions must have TypeScript types
```

## Usage

1. Copy the template above
2. Save as `CLAUDE.md` or `AGENTS.md` in your project root
3. Replace `[One sentence describing your project]` with your description
4. Replace the example gotchas with your project's actual gotchas
5. Adjust commands if your project uses different scripts

## Customization Tips

**Add gotchas when the AI:**
- Suggests the wrong database connection pattern
- Uses an ORM when you use raw SQL (or vice versa)
- Puts business logic in route handlers
- Forgets about your authentication middleware

**Remove sections if:**
- Your project doesn't use TypeScript (remove typecheck command)
- You don't have database migrations
- The architecture is obvious from the folder structure
