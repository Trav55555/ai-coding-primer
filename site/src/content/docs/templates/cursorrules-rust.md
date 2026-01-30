---
title: "Rust .cursorrules"
description: .cursorrules template for Rust projects in Cursor.
sidebar:
  order: 14
---

A minimal `.cursorrules` template for Rust projects in Cursor IDE.

## Template (27 lines)

```markdown
# Rust Project Rules

## Tech Stack
- Rust (latest stable)
- Axum or Actix-web
- SQLx for database
- Tokio runtime

## Commands
- `cargo run` - Start server
- `cargo test` - Run tests
- `cargo clippy` - Lint
- `cargo fmt` - Format
- `sqlx migrate run` - Migrations

## Code Style
- No `unsafe` unless absolutely necessary
- Use `thiserror` for custom errors
- Prefer `impl Trait` over `dyn Trait`
- Document public APIs with `///`

## Gotchas
- [Add your project-specific gotchas]

## File Patterns
- Entry: `src/main.rs`
- Routes: `src/routes/[name].rs`
- Services: `src/services/[name].rs`
- Models: `src/models/[name].rs`
```

## Usage

1. Copy the template above
2. Save as `.cursorrules` in your project root
3. Adjust framework/database references as needed
4. Add your project-specific gotchas
