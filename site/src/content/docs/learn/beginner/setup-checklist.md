---
title: Setup Checklist
description: Configure project feedback loops before using AI coding tools.
sidebar:
  order: 4
---

Before using an AI coding tool on a project, make sure the project can surface errors quickly. The agent needs the same feedback a developer would use: type errors, lint errors, test failures, and build output.

## Required Feedback Signals

| Tool | Purpose | Verification signal |
|---|---|---|
| **Language Server (LSP)** | Real-time type checking and symbol information | inline errors, hover types, go-to-definition |
| **Linter** | Style issues and common bugs | repeatable lint command |
| **Formatter** | Consistent code style | repeatable format command or editor integration |
| **Test or build command** | Behavior and integration checks | command that exits non-zero on failure |

## Language Server Setup

Install or enable the language server for your stack:

| Language | LSP | Install |
|---|---|---|
| TypeScript | typescript-language-server | `npm i -g typescript-language-server typescript` |
| Python | mypy or pyright-compatible tooling | `uv tool install mypy` or install your editor's Python language tooling |
| Go | gopls | `go install golang.org/x/tools/gopls@latest` |
| Rust | rust-analyzer | `rustup component add rust-analyzer` |
| C# | OmniSharp or C# Dev Kit language services | included with common C# editor extensions |

:::note[Language-specific IDEs]
JetBrains IDEs and Visual Studio include language intelligence for their primary ecosystems. You may not need a separate LSP install.
:::

## Linter Setup

| Language | Linter | Common config file |
|---|---|---|
| TypeScript | ESLint | `eslint.config.js` |
| Python | Ruff | `pyproject.toml` or `ruff.toml` |
| Go | golangci-lint | `.golangci.yml` |
| Rust | Clippy | `clippy.toml` |
| C# | dotnet format / analyzers | `.editorconfig` |

## Formatter Setup

| Language | Formatter | Common config file |
|---|---|---|
| TypeScript | Prettier | `.prettierrc` |
| Python | Ruff / Black | `pyproject.toml` |
| Go | gofmt | built in |
| Rust | rustfmt | `rustfmt.toml` |
| C# | dotnet format | `.editorconfig` |

## Baseline Verification Commands

Run the relevant commands before starting an AI session. If the baseline is already failing, record or fix that first. Otherwise the agent may spend time on pre-existing failures rather than the change you asked for.

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

Use the commands your project actually supports. The examples above are starting points, not universal requirements.

## Failure Conditions

Do not start an implementation task until you know:

- which command checks the changed area
- whether that command currently passes
- which files already have known errors
- whether generated or vendored files should be excluded

If the baseline is not clean, include that fact in the prompt:

```text
Baseline note: `npm run lint` currently fails in legacy/admin.ts.
Do not edit that file. For this task, verify with `npm test -- user-form.test.ts`.
```

## Quick Checklist

Before your first AI session:

- [ ] Language intelligence is installed and showing local errors.
- [ ] Linter is configured and you know the command to run.
- [ ] Formatter is configured or intentionally omitted.
- [ ] Relevant test/build command is known.
- [ ] Pre-existing failures are fixed or documented.
- [ ] Sensitive files are excluded from tool access where needed.

## Next Steps

Environment configured? Start with a small verified task: [Your First Session →](/ai-coding-primer/learn/beginner/first-session/)
