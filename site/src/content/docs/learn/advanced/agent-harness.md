---
title: Agent Harness
description: How to keep long-running AI coding tasks stable across sessions.
sidebar:
  order: 2
---

Long-running AI work fails when the agent loses the task, not when it loses syntax. A harness keeps the task stable.

:::note[Evidence status]
- `Practitioner-backed` - [Anthropic: Effective harnesses for long-running agents](https://www.anthropic.com/engineering/effective-harnesses-for-long-running-agents), [OpenAI: Harness engineering](https://openai.com/index/harness-engineering/), [Context Engineering](/ai-coding-primer/learn/intermediate/context-engineering/)
- `Synthesis`
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

- [Anthropic: Effective harnesses for long-running agents](https://www.anthropic.com/engineering/effective-harnesses-for-long-running-agents/)
- [OpenAI Codex `AGENTS.md` project-doc implementation](https://github.com/openai/codex/blob/main/codex-rs/core/src/project_doc.rs)
- [Cline deep-planning `implementation_plan.md` prompt](https://github.com/cline/cline/blob/main/src/core/prompts/commands/deep-planning/variants/generic.ts)
- [GitHub Spec Kit agent-context update script](https://github.com/github/spec-kit/blob/main/scripts/bash/update-agent-context.sh)
- [Context Engineering](/ai-coding-primer/learn/intermediate/context-engineering/)
- [Productivity Research](/ai-coding-primer/research/productivity/)
- `03-resources/ai-ml/harness-engineering-principles.md`
- `03-resources/ai-ml/agents/agent-harness-systems-software-maintenance.md`
