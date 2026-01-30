---
title: Subagent Architectures
description: Using multiple AI instances for complex workflows.
sidebar:
  order: 3
---

Subagents are separate AI instances that handle specific tasks, keeping your main context clean.

## Why Subagents

**Problem:** Research pollutes context. Looking up docs, exploring codebases, and investigating options fills your context window.

**Solution:** Delegate research to subagents that run in separate contexts.

## When to Use Subagents

- Exploring unfamiliar codebases
- Looking up documentation
- Investigating multiple approaches
- Any task that's "read a lot, summarize a little"

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
| Context budget | Each agent has full context window |

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
