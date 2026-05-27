---
title: Agent Harness
description: How to keep long-running AI coding tasks stable across sessions.
sidebar:
  order: 2
---

Long-running agent work usually falls apart for a boring reason: the system loses the thread. A harness is how you stop that from happening.

:::note[Evidence status]
- `Practitioner-backed` - [Anthropic: Effective harnesses for long-running agents](https://www.anthropic.com/engineering/effective-harnesses-for-long-running-agents), [OpenAI: Harness engineering](https://openai.com/index/harness-engineering/), [Context Engineering](/ai-coding-primer/learn/intermediate/context-engineering/)

The exact file set and harness shape here are editorial guidance built from those patterns rather than a single official standard.
:::

## What a Harness Is

A harness is the small amount of structure around the model that keeps the work legible:

- persistent task files
- verification commands
- clear constraints
- a repeatable review loop

If the session resets, compacts, or goes sideways, the harness is what lets the next pass pick the work back up without starting from scratch.

## The Minimal Harness

You do not need much. For most projects, three files are enough:

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

Without a harness, long sessions turn into a pile of stale context, half-finished attempts, and forgotten constraints. With one, the task survives even when the conversation does not.

This matches current harness practice in Anthropic-style long-running agent setups, Codex-style operational harnesses, and open-source agent architecture analyses.

## Examples in the Wild

- **Anthropic long-running agents** - initializer + coding-agent workflow with durable progress artifacts and incremental commits
- **Codex / AGENTS.md** - project instructions and verification commands discovered from the repo itself
- **Cline / implementation plans** - structured planning files used before deep execution
- **GitHub Spec Kit / plan.md** - project metadata and plan artifacts used to keep agent context aligned

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

## Rules That Actually Matter

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
- work you will finish before the context gets messy

## Next Steps

- [Workflow Archetypes](/ai-coding-primer/learn/intermediate/workflow-archetypes/)
- [Subagent Architectures](/ai-coding-primer/learn/advanced/subagents/)

## Supporting Evidence

- [Anthropic: Effective harnesses for long-running agents](https://www.anthropic.com/engineering/effective-harnesses-for-long-running-agents/)
- [OpenAI Codex `AGENTS.md` implementation](https://github.com/openai/codex/blob/main/codex-rs/core/src/agents_md.rs)
- [Cline deep-planning prompt variants](https://github.com/cline/cline/tree/main/apps/vscode/src/core/prompts/commands/deep-planning/variants)
- [GitHub Spec Kit agent configuration module](https://github.com/github/spec-kit/blob/main/src/specify_cli/_agent_config.py)
- [Context Engineering](/ai-coding-primer/learn/intermediate/context-engineering/)
- [Productivity Research](/ai-coding-primer/research/productivity/)

## Bibliography

- [Anthropic: Effective harnesses for long-running agents](https://www.anthropic.com/engineering/effective-harnesses-for-long-running-agents/)
- [OpenAI: Harness engineering](https://openai.com/index/harness-engineering/)
- [OpenAI Codex `AGENTS.md` implementation](https://github.com/openai/codex/blob/main/codex-rs/core/src/agents_md.rs)
- [Cline deep-planning prompt variants](https://github.com/cline/cline/tree/main/apps/vscode/src/core/prompts/commands/deep-planning/variants)
- [GitHub Spec Kit agent configuration module](https://github.com/github/spec-kit/blob/main/src/specify_cli/_agent_config.py)
