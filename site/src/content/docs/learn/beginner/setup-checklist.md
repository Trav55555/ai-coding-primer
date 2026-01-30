---
title: Setup Checklist
description: Configure your environment for AI-assisted development.
sidebar:
  order: 4
---

AI agents perform better with immediate feedback. Before you start prompting, ensure your project has proper tooling configured.

## The Three Pillars

| Tool | Purpose | Why It Matters |
|------|---------|----------------|
| **Language Server (LSP)** | Real-time type checking, error detection | AI sees mistakes instantly |
| **Linter** | Style issues, common bugs | Immediate feedback on quality |
| **Formatter** | Consistent style | AI doesn't fight your preferences |

## Language Server Setup

Install the LSP for your language:

| Language | LSP | Install |
|----------|-----|---------|
| TypeScript | typescript-language-server | `npm i -g typescript-language-server typescript` |
| Python | mypy | `uv tool install mypy` or `pip install mypy` |
| Go | gopls | `go install golang.org/x/tools/gopls@latest` |
| Rust | rust-analyzer | `rustup component add rust-analyzer` |
| C# | OmniSharp | Included with C# extension |

:::note[Language-Specific IDEs]
If you use IntelliJ, PyCharm, GoLand, or other JetBrains IDEs, language intelligence is built-in — no LSP setup needed. Same for Visual Studio (not VS Code) with C#/.NET.
:::

## Linter Setup

| Language | Linter | Config File |
|----------|--------|-------------|
| TypeScript | ESLint | `eslint.config.js` |
| Python | Ruff | `pyproject.toml` or `ruff.toml` |
| Go | golangci-lint | `.golangci.yml` |
| Rust | Clippy | `clippy.toml` |
| C# | dotnet format | `.editorconfig` |

## Formatter Setup

| Language | Formatter | Config File |
|----------|-----------|-------------|
| TypeScript | Prettier | `.prettierrc` |
| Python | Ruff / Black | `pyproject.toml` |
| Go | gofmt | (built-in, no config) |
| Rust | rustfmt | `rustfmt.toml` |
| C# | dotnet format | `.editorconfig` |

## Verification Commands

Run these **before** starting an AI session. If they fail, fix them first — agents struggle with pre-existing broken environments.

```bash
# TypeScript
npm run lint && npm run typecheck

# Python
uv run ruff check . && uv run mypy .

# Go
go vet ./... && golangci-lint run

# Rust
cargo clippy

# C#
dotnet build
```

## Why This Matters

> "Agents have no long-term memory. They rediscover 'ghost errors' every session, try to fix them, fail, and get confused."

A broken environment before you start = a confused AI that wastes your time.

## Quick Checklist

Before your first AI session:

- [ ] LSP installed and working (hover shows types, errors appear inline)
- [ ] Linter configured and passing
- [ ] Formatter configured (optional but recommended)
- [ ] No pre-existing errors in files you'll be editing

## Next Steps

Environment ready? [Start your first session →](/ai-coding-primer/learn/beginner/first-session/)
