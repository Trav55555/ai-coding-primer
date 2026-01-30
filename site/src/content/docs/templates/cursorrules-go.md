---
title: "Go .cursorrules"
description: .cursorrules template for Go projects in Cursor.
sidebar:
  order: 13
---

A minimal `.cursorrules` template for Go projects in Cursor IDE.

## Template (27 lines)

```markdown
# Go Project Rules

## Tech Stack
- Go 1.23+
- Chi or Gin router
- PostgreSQL with sqlc

## Commands
- `go run ./cmd/server` - Start server
- `go test ./...` - Run tests
- `go vet ./...` - Vet code
- `go mod tidy` - Clean dependencies
- `golangci-lint run` - Lint
- `sqlc generate` - Generate SQL

## Code Style
- Follow Go idioms (Effective Go)
- Return errors, don't panic
- Use interfaces for dependencies
- Keep functions small and focused

## Gotchas
- [Add your project-specific gotchas]

## File Patterns
- Entry points: `cmd/[app]/main.go`
- Handlers: `internal/handlers/[name].go`
- Services: `internal/services/[name].go`
- Repository: `internal/repository/[name].go`
```

## Usage

1. Copy the template above
2. Save as `.cursorrules` in your project root
3. Review and update the **Tech Stack** to match your project
4. Add your project-specific gotchas
