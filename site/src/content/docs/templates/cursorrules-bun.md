---
title: "Bun .cursorrules"
description: .cursorrules template for Bun projects in Cursor.
sidebar:
  order: 18
---

A minimal `.cursorrules` template for Bun projects in Cursor IDE.

## Template (27 lines)

```markdown
# Bun Project Rules

## Tech Stack
- Bun 1.2+
- TypeScript (strict mode)
- Hono or Elysia for HTTP

## Commands
- `bun run dev` - Development
- `bun test` - Tests (built-in)
- `bun run build` - Bundle
- `bunx tsc --noEmit` - Type check

## Code Style
- Use Bun APIs over Node.js equivalents
- Prefer `Bun.file()` over `fs`
- Prefer `Bun.serve()` over Express
- Named exports only

## Gotchas
- [Add your project-specific gotchas]

## File Patterns
- Entry: `src/index.ts`
- Routes: `src/routes/[name].ts`
- Services: `src/services/[name].ts`
- Tests: `test/[name].test.ts`
```

## Usage

1. Copy the template above
2. Save as `.cursorrules` in your project root
3. Review and update the **Tech Stack** to match your project
4. Add your project-specific gotchas

## Key Bun APIs to Remember

```markdown
## Gotchas
- `Bun.serve()` for HTTP server
- `Bun.file()` / `Bun.write()` for file I/O
- `bun:sqlite` for SQLite (built-in)
- `Bun.password.hash()` for passwords
- `bun test` uses built-in test runner (Jest-compatible)
```
