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

## Use Case

Use subagents when the task has a research phase that can be separated from implementation.

Common cases:

- exploring an unfamiliar codebase
- looking up external documentation
- comparing implementation approaches
- mapping tests, APIs, database layers, or dependencies
- gathering file paths and conventions before editing

Do not use subagents just to add parallelism. They add coordination overhead and can make the task harder to review.

## What Subagents Are For

Subagents are useful for:

- codebase exploration
- documentation lookup
- pattern finding across modules
- option comparison before implementation
- summarizing evidence with file paths

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

## Expected Output

A useful subagent report should include:

| Output | Purpose |
|---|---|
| File paths | lets the main agent inspect evidence directly |
| Observed patterns | identifies local conventions |
| Relevant commands | connects findings to verification |
| Risks or unknowns | prevents premature implementation |
| Recommended next workflow | routes to bug fix, feature build, refactor, or further research |

## Orchestrator Pattern

The main agent coordinates the work:

1. define what needs to be discovered
2. send narrow research tasks to subagents
3. collect concise findings with evidence
4. decide whether implementation is ready
5. implement in the main context

Use this pattern when search and implementation are separate jobs.

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
4. Set constraints such as `Do not modify files`.
5. Time-box investigation.
6. Keep implementation in one reviewable context unless there is a reason to split it.

## When Not to Use Subagents

Avoid subagents for:

- tiny one-file edits
- syntax or typo fixes
- tasks where the search space is already clear
- work where coordination overhead exceeds the research benefit

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
