---
title: "Elixir/Phoenix Template"
description: CLAUDE.md template for Elixir + Phoenix + Ecto projects.
sidebar:
  order: 8
---

A minimal CLAUDE.md template for Elixir backend projects using Phoenix and Ecto.

## Template (34 lines)

```markdown
# Project Context

## What This Is
[One sentence describing your project]

## Tech Stack
Elixir 1.17 + Phoenix 1.7 + Ecto + PostgreSQL

## Commands
- `mix phx.server` - Start dev server
- `mix test` - Run tests
- `mix format` - Format code
- `mix credo` - Lint (static analysis)
- `mix dialyzer` - Type checking
- `mix ecto.migrate` - Run migrations

## Architecture
- `/lib/app_web/` - Phoenix controllers, views, templates
- `/lib/app/` - Business logic (contexts)
- `/lib/app/repo.ex` - Ecto repository
- `/priv/repo/migrations/` - Database migrations
- `/test/` - ExUnit tests

## Gotchas
- [Add project-specific gotchas here]
- Example: Use contexts for business logic, not controllers
- Example: Background jobs use Oban - check `/lib/app/workers/`

## Code Style
- Follow Elixir formatter conventions
- Use pattern matching over conditionals
- Keep functions small, use pipelines
- Contexts encapsulate business logic
```

## Usage

1. Copy the template above
2. Save as `CLAUDE.md` or `AGENTS.md` in your project root
3. Review and update the **Tech Stack** to match your project
4. Replace `[One sentence describing your project]` with your description
5. Replace `app` with your actual application name
6. Add your project-specific gotchas

## Customization Tips

**Add gotchas when the AI:**
- Puts business logic in controllers instead of contexts
- Forgets about Ecto changesets for validation
- Uses synchronous calls where you need GenServer
- Suggests npm packages instead of Hex packages

**Remove sections if:**
- You don't use Credo or Dialyzer
- Your project doesn't use Phoenix (pure Elixir)
- The architecture is obvious from the folder structure

## LiveView Projects

For Phoenix LiveView projects, update the architecture:

```markdown
## Architecture
- `/lib/app_web/live/` - LiveView modules
- `/lib/app_web/components/` - Function components
- `/lib/app/` - Business logic (contexts)

## Gotchas
- Use `assign/3` and `assign_new/3` for socket assigns
- Handle_event returns `{:noreply, socket}`
- PubSub for real-time updates between clients
```
