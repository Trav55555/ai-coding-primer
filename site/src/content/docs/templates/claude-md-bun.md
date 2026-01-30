---
title: "Bun Template"
description: CLAUDE.md template for Bun + TypeScript projects.
sidebar:
  order: 9
---

A minimal CLAUDE.md template for Bun projects using TypeScript.

## Template (32 lines)

```markdown
# Project Context

## What This Is
[One sentence describing your project]

## Tech Stack
Bun 1.2 + TypeScript + Hono (or Elysia)

## Commands
- `bun run dev` - Start dev server
- `bun test` - Run tests (built-in test runner)
- `bun run build` - Bundle for production
- `bun run lint` - ESLint + Prettier
- `bunx tsc --noEmit` - Type check

## Architecture
- `/src/index.ts` - Application entry point
- `/src/routes/` - Route handlers
- `/src/services/` - Business logic
- `/src/lib/` - Utilities and helpers
- `/test/` - Test files (*.test.ts)

## Gotchas
- [Add project-specific gotchas here]
- Example: Use `Bun.serve()` not Express
- Example: SQLite via `bun:sqlite`, not better-sqlite3

## Code Style
- Use Bun APIs over Node.js equivalents
- TypeScript strict mode
- Named exports, not default exports
- Prefer `Bun.file()` over `fs` module
```

## Usage

1. Copy the template above
2. Save as `CLAUDE.md` or `AGENTS.md` in your project root
3. Review and update the **Tech Stack** to match your project
4. Replace `[One sentence describing your project]` with your description
5. Add your project-specific gotchas

## Customization Tips

**Add gotchas when the AI:**
- Suggests Node.js APIs when Bun has native equivalents
- Uses npm/yarn commands instead of bun
- Suggests Express when you use Hono/Elysia
- Forgets about Bun's built-in SQLite, test runner, or bundler

**Remove sections if:**
- You're using Bun as a drop-in Node.js replacement
- Your project doesn't use a web framework
- The architecture is obvious from the folder structure

## Bun-Specific APIs

Remind the AI about Bun's native APIs:

```markdown
## Gotchas
- Use `Bun.serve()` for HTTP server, not Express
- Use `Bun.file()` and `Bun.write()` for file I/O
- Use `bun:sqlite` for SQLite (zero dependencies)
- Use `Bun.password.hash()` for password hashing
- Use `Bun.sleep()` instead of setTimeout promisified
```
