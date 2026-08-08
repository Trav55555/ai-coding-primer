---
title: Subagent Architectures
description: Using separate AI sessions to isolate research context from implementation context.
sidebar:
  order: 3
---

Subagents are separate AI instances or sessions assigned to scoped tasks. They are useful when investigation would add too much noise to the main implementation context.

:::note[Evidence status]
- `Research-supported principle` - context pressure and verification overhead affect agent reliability.
- `Practitioner-backed` - subagent isolation patterns from tool docs and production workflows.
:::

## Decision Rules

Choose subagents from the dependency graph, not from the number of agents available.

Use subagents in parallel when work is independent:

- one agent maps the API layer while another maps the database layer
- one agent checks external library docs while another inspects local usage
- one agent reviews security risks while another reviews test coverage
- two implementation agents work in isolated worktrees on changes that do not share files or contracts

Keep work serial when agents would compete for the same decision:

- edits touch the same files or adjacent tests
- the task requires one architecture choice before implementation
- one change defines an interface another change must consume
- production, data, auth, dependency, or migration decisions need a single accountable reviewer

Do not use subagents just to add parallelism. They add inference cost, coordination time, and more handoff material to review. Multi-agent work helps only when the saved search or review time exceeds that overhead.

## What Subagents Are For

Subagents are useful for:

- codebase exploration
- documentation lookup
- pattern finding across modules
- option comparison before implementation
- independent review of a proposed diff
- implementation in isolated worktrees when ownership and merge order are explicit
- summarizing evidence with file paths and commands

They are usually not good owners for the entire task. Keep implementation in the main context unless the workflow explicitly requires isolated execution.

This caveat matters. Research and architecture writeups suggest multi-agent systems help most when agents have different scopes, tools, or capabilities.

**Evidence tags:** `Research-supported principle` via context and verification research; `Practitioner-backed` via [Workflow Archetypes](/ai-coding-primer/learn/intermediate/workflow-archetypes/) and Anthropic-style harness guidance.

## Example Usage

### In Claude Code

```text
Use subagents to investigate how authentication is implemented in this codebase.
Report back with file paths, entry points, conventions, and open questions.
Do not modify files.
```

### In Cursor

Use Background Agents for research tasks. Keep the main Composer session focused on implementation and diff review.

## Structured Handoffs

A useful subagent report should be short enough to review and specific enough to verify.

| Output | Purpose |
|---|---|
| Scope attempted | shows what the report does and does not cover |
| File paths and line ranges | lets the main agent inspect evidence directly |
| Commands run and results | connects findings to verification |
| Changes made, if any | makes isolated worktree output auditable |
| Observed patterns | identifies local conventions |
| Decisions needed | separates facts from recommendations |
| Risks or unknowns | prevents premature implementation |
| Recommended next workflow | routes to bug fix, feature build, refactor, or further research |

For implementation subagents, require the handoff to name the branch or worktree, touched files, tests run, failing checks, unresolved conflicts, and any assumptions that must be accepted before merge.

## Orchestrator Pattern

The main agent coordinates the work:

1. define what needs to be discovered or changed
2. decide which parts are independent and which must be serialized
3. send narrow tasks to subagents with permissions and stop points
4. collect concise findings with evidence
5. inspect the cited files, commands, and diffs directly
6. decide whether implementation is ready
7. implement or merge in one reviewable order

Use this pattern when search, review, and implementation are separable jobs.

## Architecture Patterns

### Research + Implementation

```text
Main Agent ─┬─> Subagent: "Research auth patterns"
            │   └─> Returns: "Found JWT in /auth, sessions in /middleware"
            │
            └─> Main continues with focused implementation
```

### Parallel Exploration

```text
Main Agent ─┬─> Subagent 1: "Explore database layer"
            ├─> Subagent 2: "Explore API layer"
            └─> Subagent 3: "Explore test patterns"

            └─> Main synthesizes findings
```

## Operating Rules

1. Give each subagent a narrow scope.
2. Ask for evidence, not broad summaries.
3. Require file paths and commands when available.
4. Set constraints such as `Do not modify files`, `read-only`, or `isolated worktree only`.
5. Time-box investigation and set a cost or retry budget when the tool exposes one.
6. Keep implementation in one reviewable context unless there is a reason to split it.
7. Serialize shared-file edits and architecture decisions.
8. Use an independent validator for consequential work.

## Independent Validation

For consequential changes, ask a separate reviewer agent or human to validate the result without relying on the implementer's explanation.

A validator should check:

- whether the diff matches the requested behavior and non-goals
- whether tests, builds, scans, or screenshots support the claim
- whether the implementation weakened checks or widened scope
- whether security, data, migration, dependency, or public-contract risks need human approval

Keep the validator read-only unless the workflow explicitly assigns it repair work. Validation is less useful when it merely repeats the implementer's summary.

## When Not to Use Subagents

Avoid subagents for:

- tiny one-file edits
- syntax or typo fixes
- tasks where the search space is already clear
- shared-file edits that need one coherent diff
- architecture decisions where parallel proposals would create unresolved disagreement
- work where coordination overhead and extra inference exceed the research or review benefit

## Supporting Evidence

- [Context Engineering](/ai-coding-primer/learn/intermediate/context-engineering/)
- [Productivity Research](/ai-coding-primer/research/productivity/)
- agent architecture analyses showing orchestration overhead and context-isolation benefits

## Next Steps

- [Workflow Archetypes](/ai-coding-primer/learn/intermediate/workflow-archetypes/) — where subagents fit in common workflows
- [Agent Harness](/ai-coding-primer/learn/advanced/agent-harness/) — keeping long-running work stable

## Bibliography

- [Anthropic: Effective harnesses for long-running agents](https://www.anthropic.com/engineering/effective-harnesses-for-long-running-agents/)
- [METR uplift update](https://metr.org/blog/2026-02-24-uplift-update/)
