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
