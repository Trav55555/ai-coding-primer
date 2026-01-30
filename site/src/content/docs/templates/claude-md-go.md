---
title: "Go Template"
description: CLAUDE.md template for Go + Chi + PostgreSQL projects.
sidebar:
  order: 4
---

A minimal CLAUDE.md template for Go backend projects using Chi router and sqlc.

## Template (34 lines)

```markdown
# Project Context

## What This Is
[One sentence describing your project]

## Tech Stack
Go 1.22 + Chi router + PostgreSQL + sqlc

## Commands
- `go run ./cmd/server` - Start dev server
- `go test ./...` - Run tests
- `go vet ./...` - Vet code
- `golangci-lint run` - Lint
- `sqlc generate` - Generate type-safe SQL

## Architecture
- `/cmd/` - Application entry points
- `/internal/` - Private application code
- `/internal/handlers/` - HTTP handlers
- `/internal/services/` - Business logic
- `/internal/repository/` - Database queries (sqlc generated)
- `/pkg/` - Public libraries

## Gotchas
- [Add project-specific gotchas here]
- Example: Use context for cancellation and timeouts
- Example: Connection pool configured in /internal/db

## Code Style
- Follow Go idioms (effective Go)
- Error handling: return errors, don't panic
- Use interfaces for dependencies (testability)
- Keep functions small and focused
```

## Usage

1. Copy the template above
2. Save as `CLAUDE.md` in your project root
3. Replace `[One sentence describing your project]` with your description
4. Replace the example gotchas with your project's actual gotchas

## Customization Tips

**Add gotchas when the AI:**
- Panics instead of returning errors
- Forgets context propagation
- Uses global state instead of dependency injection
- Suggests an ORM when you use sqlc

**Remove sections if:**
- You don't use sqlc (remove the generate command)
- Your project doesn't have a `/pkg/` directory
- The architecture is obvious from the folder structure
