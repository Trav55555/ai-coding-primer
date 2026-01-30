---
title: Context Engineering
description: The key skill for effective AI-assisted development.
sidebar:
  order: 3
---

> "Context engineering is building **dynamic systems** to provide the right information and tools in the right format such that the LLM can plausibly accomplish the task." — Harrison Chase, LangChain

**Prompt engineering** is crafting a single good instruction. **Context engineering** is designing the entire system that feeds information to the model.

## The Framework

Ask yourself: **"Can the model plausibly accomplish this task with the context I'm providing?"**

If the answer is no, the problem is context, not the model.

| Component | What It Means | Example |
|-----------|---------------|---------|
| **Right Information** | Model has what it needs | Relevant files, not entire codebase |
| **Right Tools** | Model can look things up | grep, file read, test runner |
| **Right Format** | Structured for consumption | Short errors, not raw JSON blobs |
| **Plausibility Check** | Could a human succeed? | If you couldn't, neither can the AI |

## Types of Context

### 1. Static Context (CLAUDE.md, .cursorrules)

Project-specific information that doesn't change per-task:

- Project architecture overview
- Commands to run (dev, test, lint)
- Known gotchas
- Code style preferences

**Keep ruthlessly short.** For each line, ask: "Would removing this cause the AI to make mistakes?" If not, cut it.

### 2. Dynamic Context (Retrieved at Runtime)

Information the AI gathers based on the current task:

- Relevant files based on the task
- Recent git history
- Test results
- Error messages

**Good AI tools do this automatically.** They read files, grep for patterns, check git status.

### 3. Tool Context (MCP, CLI)

Give the model tools to look things up rather than stuffing everything in the prompt:

- Let it grep the codebase
- Let it read files on demand
- Let it run commands

**Tools > pre-loaded context** for large codebases.

### 4. Memory Context (Across Sessions)

What the AI should remember between sessions:

- Decisions made
- Patterns established
- What worked before

**Most tools don't have this yet.** You simulate it with context files.

## The 40% Rule in Practice

> "As context usage grows, model quality degrades. Empirically, this begins around 40% of the context window." — Dex Horthy

| Context Window | 40% Threshold | Practical Limit |
|----------------|---------------|-----------------|
| 128k tokens | ~51k tokens | ~40 files |
| 200k tokens | ~80k tokens | ~65 files |
| 1M tokens | ~400k tokens | ~325 files |

### When You're Over 40%

**Compaction strategies:**

1. **Summarize** — "Here's what we've learned so far: [summary]"
2. **Clear and restart** — Start fresh with only essential context
3. **Use subagents** — Delegate research to separate AI instances
4. **Be selective** — Include only files relevant to current task

## Practical Tips

### Do

- Give the model search tools instead of pre-loading everything
- Keep context files short and focused
- Include only relevant files for the current task
- Provide verification methods (run this test, check this file)

### Don't

- Dump your entire codebase into context
- Include verbose documentation in context files
- Expect the AI to remember previous sessions
- Fight over 40% context utilization

## Example: Good vs Bad Context

**Bad context file (too verbose):**
```markdown
# Project Context

This is a web application built with React and Node.js. We started 
this project in 2023 and it has grown significantly over time. The 
team consists of 5 developers and we follow agile methodology...

[500 more lines of background]
```

**Good context file (actionable):**
```markdown
# Project Context

TypeScript + React + Express. Tests with Vitest.

## Commands
- `npm run dev` - Start dev server
- `npm test` - Run tests

## Gotchas
- Auth tokens in cookies, not localStorage
- Use `date-fns`, not moment
```

## Next Steps

- [Learn Effective Patterns](/ai-coding-primer/learn/intermediate/effective-patterns/) — apply context engineering in practice
- [Create Project Context Files](/ai-coding-primer/learn/advanced/project-context-files/) — templates for your stack
