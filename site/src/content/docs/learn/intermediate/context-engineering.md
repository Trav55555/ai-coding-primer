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

In 2025-2026, this stopped being a prompt-writing trick and became an operational discipline. Teams now treat context like a system design problem: what to include, what to hide, what to retrieve on demand, and what to isolate in subagents.

:::note[Evidence status]
- `Research-backed` - [Productivity Research](/ai-coding-primer/research/productivity/), [Code Quality & Security](/ai-coding-primer/research/code-quality-security/)
- `Practitioner-backed` - [Workflow Archetypes](/ai-coding-primer/learn/intermediate/workflow-archetypes/), [Subagent Architectures](/ai-coding-primer/learn/advanced/subagents/)
- `Synthesis`
:::

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

The best static context is usually a list of **gotchas**, not a full project handbook.

### 2. Dynamic Context (Retrieved at Runtime)

Information the AI gathers based on the current task:

- Relevant files based on the task
- Recent git history
- Test results
- Error messages

**Good AI tools do this automatically.** They read files, grep for patterns, check git status.

Explore the project first, then consult external docs. Recent workflow research and practitioner reports show that reversing that order often anchors the model on generic docs instead of the real codebase in front of it.

**Evidence tags:** `Practitioner-backed` ([Workflow Archetypes](/ai-coding-primer/learn/intermediate/workflow-archetypes/)); `Research-backed` ([Productivity Research](/ai-coding-primer/research/productivity/)).

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

The more robust version is a small harness: `PLAN.md`, `STATE.md`, and a spec or scratchpad that can survive session resets and compaction.

## Push Beats Pull for Core Guidance

Push-based project guidance such as `AGENTS.md`, `CLAUDE.md`, or `.cursorrules` often works better than hoping the model retrieves the right skill or doc at the right moment.

This is grounded partly in eval evidence and partly in practitioner convergence. The safest claim is not that push-based context always wins, but that core rules and gotchas should be present without relying on retrieval luck.

**Evidence tags:** `Practitioner-backed` ([Agent Harness](/ai-coding-primer/learn/advanced/agent-harness/)); `Synthesis`.

Why:

- Core rules stay visible every turn
- The model does not need to remember to ask for the rule
- You control instruction ordering and reduce retrieval misses

Use push-based files for rules and gotchas. Use tools and retrieval for everything else.

## Explore-First Ordering

The sequence matters:

1. **Explore the local project** — files, patterns, tests, commands
2. **Load only relevant context** — not the whole repo
3. **Consult external docs if needed** — only after the codebase frame is clear
4. **Execute with verification**

This avoids a common failure mode where the model applies a clean documentation example that does not match your actual codebase.

## The 40% Rule in Practice

There does not appear to be a strong primary-source citation for an exact `40%` threshold. Treat it as a practitioner heuristic, not a measured law.

The better-supported point is broader: context quality degrades before the window is "full," and long-running agents need compaction, selective retrieval, and persistent artifacts rather than giant prompt dumps.

If you want a more defensible working rule, think in terms of budget discipline rather than a magic cutoff. For example, the local context-engineering playbook uses a practical target range of roughly `60-85%` utilization depending on model size and task shape.

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

For long logs and large command output, keep the beginning and end, not the full middle. Many teams now use "head-tail" compaction because it preserves setup and failure context without flooding the model with noise.

## Isolation Beats Contamination

Subagents are not just a convenience feature. They are a context hygiene tool.

Use them when:

- You need to search a large codebase from multiple angles
- You need external documentation or examples
- You want one agent exploring while another stays focused on implementation

The main benefit is not just parallelism. It is protecting the implementation context from search noise.

That claim is stronger than "multi-agent is always better." In fact, research and tool practice both suggest orchestration overhead can erase gains unless the subagents have clearly separated jobs.

**Evidence tags:** `Research-backed` ([Productivity Research](/ai-coding-primer/research/productivity/)); `Practitioner-backed` ([Subagent Architectures](/ai-coding-primer/learn/advanced/subagents/)).

## Practical Tips

### Do

- Give the model search tools instead of pre-loading everything
- Keep context files short and focused
- Include only relevant files for the current task
- Provide verification methods (run this test, check this file)
- Put non-obvious repo rules in `AGENTS.md`, `CLAUDE.md`, or equivalent
- Use a persistent plan file for multi-session work

### Don't

- Dump your entire codebase into context
- Include verbose documentation in context files
- Expect the AI to remember previous sessions
- Fight over 40% context utilization
- Start with external docs before the agent has explored your project
- Mix research and implementation in one giant context when subagents would keep it clean

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
- [Agent Harness](/ai-coding-primer/learn/advanced/agent-harness/) — persist state across long-running tasks
