---
title: "Rust Template"
description: CLAUDE.md template for Rust + Axum + SQLx projects.
sidebar:
  order: 5
---

A minimal CLAUDE.md template for Rust backend projects using Axum and SQLx.

## Template (34 lines)

```markdown
# Project Context

## What This Is
[One sentence describing your project]

## Tech Stack
Rust + Axum + SQLx + Tokio

## Commands
- `cargo run` - Start dev server
- `cargo test` - Run tests
- `cargo clippy` - Lint
- `cargo fmt` - Format code
- `sqlx migrate run` - Run migrations

## Architecture
- `/src/main.rs` - Application entry point
- `/src/routes/` - Axum route handlers
- `/src/services/` - Business logic
- `/src/models/` - Domain types
- `/src/db/` - Database queries
- `/migrations/` - SQL migrations

## Gotchas
- [Add project-specific gotchas here]
- Example: Use `?` for error propagation
- Example: SQLx compile-time query checking requires DATABASE_URL

## Code Style
- No `unsafe` unless absolutely necessary
- Use `thiserror` for custom error types
- Prefer `impl Trait` over `dyn Trait` when possible
- Document public APIs with `///` comments
```

## Usage

1. Copy the template above
2. Save as `CLAUDE.md` or `AGENTS.md` in your project root
3. Review and update the **Tech Stack** to match your project
4. Replace `[One sentence describing your project]` with your description
5. Replace the example gotchas with your project's actual gotchas

## Customization Tips

**Add gotchas when the AI:**
- Uses `unwrap()` instead of proper error handling
- Suggests `unsafe` code unnecessarily
- Forgets about the borrow checker constraints
- Uses blocking I/O in async contexts

**Remove sections if:**
- You don't use SQLx (remove migrations command)
- Your project doesn't have a `/services/` layer
- The architecture is obvious from the folder structure
