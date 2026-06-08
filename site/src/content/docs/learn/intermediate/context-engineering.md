---
title: Context Engineering
description: The key skill for effective AI-assisted development.
sidebar:
  order: 3
---

> "Context engineering is building **dynamic systems** to provide the right information and tools in the right format such that the LLM can plausibly accomplish the task." — Harrison Chase, LangChain

**Prompt engineering** is writing a good instruction. **Context engineering** is deciding what the model sees, what tools it gets, and what stays out of view.

## The Framework

Ask yourself: **"Can the model plausibly accomplish this task with the context I'm providing?"**

If the answer is no, the problem is context, not the model.

This stopped being a prompt-writing trick a while ago. Good teams now treat context like a systems problem: what to include, what to leave out, what to fetch on demand, and what to isolate in another agent.

:::note[Evidence status]
- `Research-supported principle` - productivity, review, and security outcomes depend on feedback loops and task context.
- `Practitioner-backed workflow` - selective context, compaction, and subagent isolation are common patterns in agent tooling.

The framework on this page is an editorial working model built from those sources and recurring practice.
:::

## The 60-Second Context Checklist

Before any non-trivial AI coding task, answer these six questions:

1. **What is the task?** State the desired behavior or decision in one or two sentences.
2. **What is the done signal?** Name the test, build, screenshot, diff review, or output that proves success.
3. **Which files are probably relevant?** Provide paths or ask the agent to find them with search.
4. **Which local rules must be visible?** Include only the gotchas that would change the implementation.
5. **What should be fetched on demand?** Let tools retrieve docs, examples, and secondary files instead of pre-loading them.
6. **What should stay out of context?** Exclude unrelated history, failed attempts, logs, and architecture notes that do not affect this task.

A strong default context pack is:

```text
Task:
Constraints / non-goals:
Relevant files or search target:
One nearby example pattern:
Current failure signal or desired output:
Verification command:
```

If you cannot name the verification command or done signal yet, do not ask for implementation. Ask the agent to help define the check first.

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

Explore the project first. Then reach for the docs. If you reverse that order, the model often latches onto the clean example from the docs instead of the mess in front of it.

**Evidence tags:** `Practitioner-backed` ([Workflow Archetypes](/ai-coding-primer/learn/intermediate/workflow-archetypes/)); `Research-supported principle` ([Productivity Research](/ai-coding-primer/research/productivity/)).

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

Push-based project guidance such as `AGENTS.md`, `CLAUDE.md`, or `.cursorrules` often works better than hoping the model remembers to fetch the right rule at the right time.

This is grounded partly in eval evidence and partly in practitioner convergence. The safest claim is not that push-based context always wins, but that core rules and gotchas should be present without relying on retrieval luck.

**Evidence tags:** `Practitioner-backed` ([Agent Harness](/ai-coding-primer/learn/advanced/agent-harness/)). The push-vs-pull framing here is an editorial judgment built on those patterns.

Why:

- Core rules stay visible every turn
- The model does not need to remember to ask for the rule
- You control instruction ordering and reduce retrieval misses

Use push-based files for rules and gotchas. Use tools and retrieval for everything else.

## Explore-First Ordering

The order matters:

1. **Explore the local project** — files, patterns, tests, commands
2. **Load only relevant context** — not the whole repo
3. **Consult external docs if needed** — only after the codebase frame is clear
4. **Execute with verification**

This avoids a common failure mode: the model grabs a neat doc example that does not match your codebase at all.

## Context Budget Discipline

There is no strong primary-source basis for a universal context percentage threshold.

The better-supported point is broader: context quality degrades before the window is "full." Long-running agents need compaction, selective retrieval, and persistent artifacts rather than giant prompt dumps.

A more defensible rule is budget discipline. Treat every file, tool output, and previous correction as spending from a finite attention budget.

### When Context Gets Noisy

**Compaction strategies:**

1. **Summarize** — "Here's what we've learned so far: [summary]"
2. **Clear and restart** — Start fresh with only essential context
3. **Use subagents** — Delegate research to separate AI instances
4. **Be selective** — Include only files relevant to current task

For long logs and large command output, keep the beginning and end, not the full middle. Many teams now use "head-tail" compaction because it preserves setup and failure context without flooding the model with noise.

## Isolation Beats Contamination

Subagents are not just a convenience feature. They are a way to keep your main context from turning into a junk drawer.

Use them when:

- You need to search a large codebase from multiple angles
- You need external documentation or examples
- You want one agent exploring while another stays focused on implementation

The main benefit is not just parallelism. It is protecting the implementation context from search noise.

That claim is stronger than "multi-agent is always better." In fact, research and tool practice both suggest orchestration overhead can erase gains unless the subagents have clearly separated jobs.

**Evidence tags:** `Research-supported principle` ([Productivity Research](/ai-coding-primer/research/productivity/)); `Practitioner-backed` ([Subagent Architectures](/ai-coding-primer/learn/advanced/subagents/)).

## Common Context Mistakes

| Mistake | Why it hurts | Recovery move |
|---|---|---|
| Dumping the whole codebase | the model spends attention on irrelevant files | give search tools and only the first likely paths |
| Starting with external docs | clean examples can override local reality | explore local files and tests first, then consult docs |
| Carrying old failed attempts forever | stale corrections pollute the next plan | summarize findings in five bullets and restart |
| Treating context-window size as quality | more tokens can still mean worse attention | prefer task-specific files, head-tail logs, and compact state |
| Mixing research and implementation | search noise buries the actual patch | send research to a subagent or separate session |
| Hiding the done signal | the agent cannot close the loop | provide or create the test, build, screenshot, or expected output |

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

## Bibliography

- [METR uplift update](https://metr.org/blog/2026-02-24-uplift-update/)
- [DORA 2025 report](https://dora.dev/research/2025/dora-report/)
- [Anthropic: Effective harnesses for long-running agents](https://www.anthropic.com/engineering/effective-harnesses-for-long-running-agents/)
