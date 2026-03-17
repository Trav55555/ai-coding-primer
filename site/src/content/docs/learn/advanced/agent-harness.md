---
title: Agent Harness
description: How to keep long-running AI coding tasks stable across sessions.
sidebar:
  order: 2
---

Long-running AI work fails when the agent loses the task, not when it loses syntax. A harness keeps the task stable.

:::note[Evidence status]
Harnesses are grounded primarily in practitioner practice and agent-architecture analysis, not in a single definitive controlled study.

What is well-supported:
- long-running agent work degrades when state lives only in chat history
- persistent artifacts reduce session-reset and compaction failures
- verification commands and explicit constraints improve continuity

What is convention rather than law:
- the exact filenames used here
- Markdown versus JSON for task state
- the precise minimal harness for every team
:::

## What a Harness Is

A harness is the environment around the model:

- persistent task files
- verification commands
- clear constraints
- a repeatable review loop

Think of it as the scaffolding that lets the agent keep working even after the chat history gets compacted or reset.

## The Minimal Harness

For most projects, three files are enough:

### `spec.md`

The source of truth for what should be built.

- requirements
- acceptance criteria
- out of scope

### `PLAN.md`

The executable task list.

- current step
- remaining steps
- blockers
- verification needed

### `STATE.md`

The compact memory of what already happened.

- decisions made
- files touched
- important constraints
- unresolved risks

## Why This Matters

Without a harness, a long AI session slowly fills with failed attempts, dead ends, and stale context. With a harness, the agent can restart from a stable state and continue.

This matches current harness practice in Anthropic-style long-running agent setups, Codex-style operational harnesses, and open-source agent architecture analyses.

## Example Pattern

```markdown
# PLAN.md

- [x] Define API contract
- [x] Add tests for auth middleware
- [ ] Implement token refresh flow
- [ ] Update docs

## Current focus
Implement token refresh flow without changing login behavior.

## Verification
- `npm test -- auth`
- `npm run build`
```

## Harness Rules That Matter Most

1. Keep files short enough to reread quickly.
2. Update the harness when the task changes, not hours later.
3. Put constraints in writing so the next session cannot forget them.
4. Store the verification commands next to the plan.
5. Treat specs and plans like code: review them, tighten them, and keep them current.

## When to Use a Harness

- multi-session feature work
- long refactors
- parallel subagent research
- tasks where verification has several steps

## When You Can Skip It

- small one-file edits
- typo fixes
- work you can finish before the context gets messy

## Next Steps

- [Workflow Archetypes](/ai-coding-primer/learn/intermediate/workflow-archetypes/)
- [Subagent Architectures](/ai-coding-primer/learn/advanced/subagents/)

## Supporting Evidence

- [Context Engineering](/ai-coding-primer/learn/intermediate/context-engineering/)
- [Productivity Research](/ai-coding-primer/research/productivity/)
- Anthropic-style harness patterns and recent agent architecture analyses
