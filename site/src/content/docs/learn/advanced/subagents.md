---
title: Subagent Architectures
description: Using multiple AI instances to keep implementation context clean.
sidebar:
  order: 3
---

Subagents are separate AI instances that handle scoped tasks while your main agent stays focused on implementation.

:::note[Evidence status]
The best-supported claim here is about **context isolation**, not about spawning as many agents as possible.

- **Research-backed:** isolating research and exploration can reduce context pollution
- **Practitioner-backed:** parallel search can help when subtasks are genuinely separate
- **Research-backed:** multi-agent setups can also add orchestration overhead and confusion

So the right takeaway is: use subagents selectively, for distinct jobs.
:::

## Why Subagents

**Problem:** Research pollutes context. Looking up docs, exploring codebases, and investigating options fills your context window with information that is useful once and distracting afterward.

**Solution:** Delegate research to subagents that run in separate contexts.

## When to Use Subagents

- Exploring unfamiliar codebases
- Looking up documentation
- Investigating multiple approaches
- Any task that's "read a lot, summarize a little"

## What They Are Good At

- codebase exploration
- external documentation lookup
- pattern finding across multiple modules
- comparing implementation options before you commit to one

They are usually **bad** at owning the whole task indefinitely. Use them to reduce noise, not to create management overhead.

This caveat matters. Research and architecture writeups both suggest multi-agent systems help most when the agents have genuinely different scopes, tools, or capabilities.

**Evidence tags:** `Research-backed` for orchestration overhead and context-isolation tradeoffs; `Practitioner-backed` for the selective-usage rule.

## Example Usage

### In Claude Code

```
Use subagents to investigate how authentication is implemented 
in this codebase. Report back with file paths and patterns.
```

### In Cursor

Use Background Agents for research tasks. Keep your main Composer session focused on implementation.

## Benefits

| Benefit | Why It Matters |
|---------|----------------|
| Clean main context | No research pollution |
| Parallel investigation | Multiple angles at once |
| Focused summaries | Get answers, not raw exploration |
| Context budget | Each agent gets its own context budget |

## The Orchestrator Pattern

The main agent should act like an orchestrator:

1. decide what needs to be discovered
2. send narrow research tasks to subagents
3. collect concise findings
4. implement in the main context

This works best when search and implementation are different jobs.

## Architecture Patterns

### Research + Implementation

```
Main Agent ─┬─> Subagent: "Research auth patterns"
            │   └─> Returns: "Found JWT in /auth, sessions in /middleware"
            │
            └─> Main continues with focused implementation
```

### Parallel Exploration

```
Main Agent ─┬─> Subagent 1: "Explore database layer"
            ├─> Subagent 2: "Explore API layer"
            └─> Subagent 3: "Explore test patterns"
            
            └─> Main synthesizes findings
```

## Best Practices

1. **Give clear scope** — "Investigate X in these files"
2. **Ask for summary** — "Report back with key findings"
3. **Set constraints** — "Don't modify any files"
4. **Time-box** — Use for investigation, not implementation
5. **Separate research from build** — Let subagents search, let the main agent write code
6. **Request file paths and patterns** — Summaries are better when they point back to evidence

## Supporting Evidence

- [Context Engineering](/ai-coding-primer/learn/intermediate/context-engineering/)
- [Productivity Research](/ai-coding-primer/research/productivity/)
- agent architecture analyses showing orchestration overhead and context-isolation benefits

## When Not to Use Them

- Tiny one-file edits
- Simple syntax or typo fixes
- Tasks where the overhead is larger than the search space

## Next Steps

- [Workflow Archetypes](/ai-coding-primer/learn/intermediate/workflow-archetypes/) — where subagents fit in real workflows
- [Agent Harness](/ai-coding-primer/learn/advanced/agent-harness/) — keeping long-running work stable
