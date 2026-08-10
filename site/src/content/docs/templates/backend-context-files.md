---
title: "Backend Context Files"
description: Starter context file for backend services where API boundaries, data safety, migrations, and operational checks matter.
sidebar:
  order: 21
---

Use this page when an agent needs backend-specific operating rules: how to run the service, how to test it safely, where business logic belongs, and which data or infrastructure boundaries it must not cross.

This page provides a compact destination template. The durable guidance for context-file design belongs to [Project Context Files](/ai-coding-primer/learn/advanced/project-context-files/).

A useful backend context file stops predictable mistakes: putting business logic in transport handlers, editing generated clients, running migrations against the wrong database, or ignoring authorization and data boundaries. Preserve commands and boundaries, not a copied framework guide.

## Starter Template

Use the example below or [download the raw backend context file](/ai-coding-primer/examples/backend-context.md). Save it as `CLAUDE.md`, `AGENTS.md`, or the instruction-file name supported by your tool.

```markdown
# Backend Project Context

## What This Is
[One sentence describing the service and its main responsibility]

## Commands
- `[dev command]` - Start the local service
- `[test command]` - Run backend tests
- `[lint command]` - Run lint or static analysis
- `[typecheck/build command]` - Run type checks or compile the service
- `[migration command]` - Apply local database migrations
- `[seed command]` - Seed local or test data, if safe

## Architecture
- `[entrypoint directory]` - Service entry point and bootstrapping
- `[routes/controllers directory]` - HTTP, RPC, or message handlers
- `[services/use-cases directory]` - Business logic
- `[data/repository directory]` - Database queries, ORM models, or generated data access
- `[migrations directory]` - Database migrations
- `[tests directory]` - Test suites and fixtures

## Backend Boundaries
- Never run migrations, seed commands, or destructive scripts against production data
- Keep business rules in `[service/use-case layer]`, not in transport handlers
- Validate inputs at the service boundary
- Do not log secrets, tokens, PII, or full credentials
- Do not edit generated files; update the source schema or generator input instead

## Gotchas
- [Project-specific data, auth, queue, migration, or deployment rule]
- [Legacy path or compatibility constraint the agent must notice]

## Verification
- Run `[test command]` for behavior changes
- Run `[lint/static command]` for changed backend code
- Run `[typecheck/build command]` before calling the change complete
- For migration or data changes, describe rollback and test-database verification before applying outside local development
```

## Translate the Command Slots

Use commands from the repository, not from this table. These examples show what the verification slots may contain.

| Boundary pattern | Useful command and constraint details |
|---|---|
| Package-managed service | name the selected package or environment runner; do not let the agent substitute another one |
| Compiled service | include the build plus the repository's configured lint, vet, or static-analysis command |
| Migration-backed service | identify the schema location, local migration command, safe target, and rollback expectation |
| Generated-code service | name the generator command and source input; prohibit edits to generated output |
| Async or concurrent service | record the project's cancellation, timeout, supervision, and error-propagation convention |
| Runtime-specific service | name native APIs or framework boundaries only when replacing them would create a real compatibility or operations problem |

Do not add every possible command. Keep the smallest set needed to reproduce and verify work in this service.

## Adapt the Example

1. Replace bracketed commands with real repository commands. If a command can touch shared infrastructure, label the safe environment explicitly.
2. Name the architectural boundary that the agent commonly violates. Examples: controllers versus services, handlers versus domain logic, generated SQL versus hand-written queries, or sync versus async work.
3. Keep database and migration rules concrete. State where schemas live and what command is safe locally.
4. Add security boundaries only when they affect implementation: secrets, PII, tenancy rules, authorization checks, audit logs, or network calls.
5. Link to longer architecture or runbook documents instead of embedding them.

## Check the Result

The context file does not replace tests, review, or environment controls.

Before trusting the adapted file:

- run each safe command listed in it
- confirm destructive commands are either absent or clearly marked as local-only
- test one small backend change and check whether the agent stays inside the intended layer
- review generated-file and secret-handling boundaries manually

The template is failing if it makes the agent overfit to a generic framework structure, hides production-safety risks, encourages broad migrations without review, or duplicates long architecture documents that should be linked.

For general context-file theory, length limits, and maintenance rules, return to [Project Context Files](/ai-coding-primer/learn/advanced/project-context-files/).
