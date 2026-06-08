---
title: Templates Overview
description: Starter CLAUDE.md and .cursorrules examples for common tech stacks.
sidebar:
  order: 0
---

:::note[Freshness metadata]
Reviewed: May 2026. Volatile fields: exact feature support, pricing, quotas, privacy terms, and enterprise controls. Verify live vendor docs before choosing or standardizing on this reference.
:::


Use these as starter examples, not as a configuration catalog to copy blindly. Each template is designed to be minimal—under 35 lines—following the [best practices](/ai-coding-primer/learn/advanced/project-context-files/) for context files.

If your stack is not listed, adapt the closest example. The important pattern is not the stack name; it is short commands, local gotchas, verification rules, and boundaries the agent would otherwise miss.

## Template Growth Rule

Do not add a new template just because a framework exists. Add one only when it teaches a meaningfully different context-file pattern.

Prefer improving the canonical [Project Context Files](/ai-coding-primer/learn/advanced/project-context-files/) guide over expanding this list. A smaller set of accurate examples is better than a broad catalog that quietly goes stale.

## CLAUDE.md Templates

For Claude Code, Zed, Continue.dev, and tools that read `CLAUDE.md`:

| Stack | Lines | Download |
|-------|-------|----------|
| [Node.js/Express](/ai-coding-primer/templates/claude-md-nodejs/) | 34 | [Raw](https://raw.githubusercontent.com/Trav55555/ai-coding-primer/main/templates/claude-md/nodejs.md) |
| [Python/FastAPI](/ai-coding-primer/templates/claude-md-python/) | 33 | [Raw](https://raw.githubusercontent.com/Trav55555/ai-coding-primer/main/templates/claude-md/python.md) |
| [TypeScript/React](/ai-coding-primer/templates/claude-md-typescript-react/) | 33 | [Raw](https://raw.githubusercontent.com/Trav55555/ai-coding-primer/main/templates/claude-md/typescript-react.md) |
| [Next.js](/ai-coding-primer/templates/claude-md-nextjs/) | 27 | [Raw](https://raw.githubusercontent.com/Trav55555/ai-coding-primer/main/templates/claude-md/nextjs.md) |
| [C#/.NET](/ai-coding-primer/templates/claude-md-csharp/) | 28 | [Raw](https://raw.githubusercontent.com/Trav55555/ai-coding-primer/main/templates/claude-md/csharp.md) |
| [Go](/ai-coding-primer/templates/claude-md-go/) | 34 | [Raw](https://raw.githubusercontent.com/Trav55555/ai-coding-primer/main/templates/claude-md/go.md) |
| [Rust](/ai-coding-primer/templates/claude-md-rust/) | 34 | [Raw](https://raw.githubusercontent.com/Trav55555/ai-coding-primer/main/templates/claude-md/rust.md) |

## .cursorrules Templates

For Cursor IDE (save as `.cursorrules` in project root):

| Stack | Lines | Download |
|-------|-------|----------|
| [TypeScript](/ai-coding-primer/templates/cursorrules-typescript/) | 27 | [Raw](https://raw.githubusercontent.com/Trav55555/ai-coding-primer/main/templates/cursorrules/typescript.mdc) |
| [Python](/ai-coding-primer/templates/cursorrules-python/) | 28 | [Raw](https://raw.githubusercontent.com/Trav55555/ai-coding-primer/main/templates/cursorrules/python.mdc) |
| [Node.js](/ai-coding-primer/templates/cursorrules-nodejs/) | 27 | [Raw](https://raw.githubusercontent.com/Trav55555/ai-coding-primer/main/templates/cursorrules/nodejs.mdc) |
| [Next.js](/ai-coding-primer/templates/cursorrules-nextjs/) | 26 | [Raw](https://raw.githubusercontent.com/Trav55555/ai-coding-primer/main/templates/cursorrules/nextjs.mdc) |
| [C#/.NET](/ai-coding-primer/templates/cursorrules-csharp/) | 27 | [Raw](https://raw.githubusercontent.com/Trav55555/ai-coding-primer/main/templates/cursorrules/csharp.mdc) |
| [Go](/ai-coding-primer/templates/cursorrules-go/) | 27 | [Raw](https://raw.githubusercontent.com/Trav55555/ai-coding-primer/main/templates/cursorrules/go.mdc) |
| [Rust](/ai-coding-primer/templates/cursorrules-rust/) | 27 | [Raw](https://raw.githubusercontent.com/Trav55555/ai-coding-primer/main/templates/cursorrules/rust.mdc) |

## How to Use

1. **Choose** the closest example for your workflow and stack
2. **Rename** to `CLAUDE.md` (or `.cursorrules` for Cursor)
3. **Delete irrelevant lines** before adding anything new
4. **Customize** the `[placeholders]` with your project details
5. **Add gotchas** only after you see the AI make repeatable mistakes

## Template Philosophy

These templates follow three principles:

1. **Minimal** — Under 35 lines. Only include what causes mistakes.
2. **Actionable** — Commands, gotchas, and conventions. Not documentation.
3. **Evolvable** — Start small, add when the AI makes mistakes, remove when redundant.

See [Project Context Files](/ai-coding-primer/learn/advanced/project-context-files/) for the full best practices guide.
