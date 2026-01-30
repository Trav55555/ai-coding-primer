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
