---
title: Agent Harness
description: How to keep long-running AI coding tasks stable across sessions.
sidebar:
  order: 2
---

Long-running agent work needs persistent state. A harness is the small set of files, checks, and rules that lets work continue after context compaction, session reset, or handoff.

:::note[Evidence status]
- `Practitioner-backed` - [Anthropic: Effective harnesses for long-running agents](https://www.anthropic.com/engineering/effective-harnesses-for-long-running-agents), [OpenAI: Harness engineering](https://openai.com/index/harness-engineering/), [Context Engineering](/ai-coding-primer/learn/intermediate/context-engineering/)

The exact file set and harness shape here are editorial guidance built from those patterns rather than a single official standard.
:::

## What a Harness Is

A harness is structure around the model that keeps work legible:

- persistent task files
- verification commands
- explicit constraints
- review checkpoints
- handoff notes

If the session resets or context is compacted, the harness lets the next session recover the task state without relying on chat history.

## Minimal Harness

For many projects, three files are enough.

### `spec.md`

Source of truth for the intended behavior:

- requirements
- acceptance criteria
- non-goals
- constraints

### `PLAN.md`

Executable task list:

- current step
- remaining steps
- blockers
- verification needed

### `STATE.md`

Compact record of what happened:

- decisions made
- files touched
- important constraints
- checks run
- unresolved risks

## Failure Mode Addressed

Without a harness, long sessions accumulate stale context, partial attempts, and forgotten constraints. With a harness, the task state is stored in files that can be reread and reviewed.

This matches current harness practice in Anthropic-style long-running agent setups, Codex-style operational harnesses, and open-source agent architecture analyses.

## Examples in Current Tools

- **Anthropic long-running agents** - initializer and coding-agent workflows with durable progress artifacts and incremental commits
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

## Operating Rules

1. Keep files short enough to reread quickly.
2. Update the harness when the task changes.
3. Put constraints in writing.
4. Store verification commands next to the plan.
5. Review specs and plans like code.
6. Record unresolved risks before handoff.

## When to Use a Harness

Use a harness for:

- multi-session feature work
- long refactors
- parallel subagent research
- tasks with multiple verification steps
- work that may be handed to another agent or developer

## When to Skip It

A harness is usually unnecessary for:

- small one-file edits
- typo fixes
- tasks completed before context becomes noisy

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
