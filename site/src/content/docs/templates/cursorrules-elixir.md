---
title: "Elixir .cursorrules"
description: .cursorrules template for Elixir projects in Cursor.
sidebar:
  order: 17
---

A minimal `.cursorrules` template for Elixir projects in Cursor IDE.

## Template (27 lines)

```markdown
# Elixir Project Rules

## Tech Stack
- Elixir 1.17+
- Phoenix 1.7 (or pure Elixir)
- Ecto for database
- ExUnit for tests

## Commands
- `mix phx.server` - Start server
- `mix test` - Run tests
- `mix format` - Format code
- `mix credo` - Lint
- `mix ecto.migrate` - Migrations

## Code Style
- Use pattern matching over conditionals
- Pipe operator for data transformations
- Contexts for business logic
- Small functions, clear names

## Gotchas
- [Add your project-specific gotchas]

## File Patterns
- Controllers: `lib/app_web/controllers/[name]_controller.ex`
- Contexts: `lib/app/[context].ex`
- Schemas: `lib/app/[context]/[schema].ex`
- LiveViews: `lib/app_web/live/[name]_live.ex`
```

## Usage

1. Copy the template above
2. Save as `.cursorrules` in your project root
3. Review and update the **Tech Stack** to match your project
4. Replace `app` with your application name
5. Add your project-specific gotchas
