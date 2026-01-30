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
