---
title: Context Engineering
description: How to provide relevant information, tools, and constraints to an AI coding model.
sidebar:
  order: 3
---

> "Context engineering is building **dynamic systems** to provide the right information and tools in the right format such that the LLM can plausibly accomplish the task." — Harrison Chase, LangChain

**Prompt engineering** is writing an instruction. **Context engineering** is deciding what information the model sees, what tools it can use, and what should remain outside the task context.

## Plausibility Check

Ask: **Could the model plausibly complete this task with the context and tools available?**

If not, change the context, tools, or task scope before asking for implementation.

:::note[Evidence status]
- `Research-supported principle` - productivity, review, and security outcomes depend on feedback loops and task context.
- `Practitioner-backed workflow` - selective context, compaction, and subagent isolation are common patterns in agent tooling.

The framework on this page is an editorial working model built from those sources and recurring practice.
:::

## The 60-Second Context Checklist

Before any non-trivial AI coding task, answer these questions:

1. **What is the task?** State the desired behavior or decision in one or two sentences.
2. **What is the done signal?** Name the test, build, screenshot, diff review, or output that proves success.
3. **Which files are likely relevant?** Provide paths or ask the agent to find them with search.
4. **Which local rules must be visible?** Include only rules that would change the implementation.
5. **What should be fetched on demand?** Let tools retrieve docs, examples, and secondary files instead of pre-loading them.
6. **What should stay out of context?** Exclude unrelated history, failed attempts, logs, and architecture notes.

A useful context pack:

```text
Task:
Constraints / non-goals:
Relevant files or search target:
One nearby example pattern:
Current failure signal or desired output:
Verification command:
```

If you cannot name the verification command or done signal, ask the agent to help define the check before implementation.

| Component | Meaning | Example |
|---|---|---|
| **Relevant information** | Model has the files or facts needed for the task | Relevant files, not the entire codebase |
| **Tools** | Model can look up missing information | grep, file read, test runner |
| **Format** | Context is concise and structured | Short error output, not raw logs with no summary |
| **Plausibility check** | A human could complete the task from the same inputs | If the task is ambiguous for a human, clarify it first |

## Types of Context

### 1. Static Context

Static context is project-specific information that does not change per task, such as `AGENTS.md`, `CLAUDE.md`, or `.cursorrules`.

Useful static context includes:

- project architecture summary
- commands to run
- known gotchas
- code style preferences
- permission or safety rules

Keep static context short. For each line, ask whether removing it would cause a likely mistake. If not, remove it.

### 2. Dynamic Context

Dynamic context is information gathered for the current task:

- relevant files
- recent git history
- test results
- error messages
- examples of nearby patterns

Many agent tools gather this automatically by reading files, searching the codebase, and running commands.

Explore the local project before relying on external documentation. External examples may not match the codebase you are editing.

**Evidence tags:** `Practitioner-backed` ([Workflow Archetypes](/ai-coding-primer/learn/intermediate/workflow-archetypes/)); `Research-supported principle` ([Productivity Research](/ai-coding-primer/research/productivity/)).

### 3. Tool Context

Tool context is access to commands and external data sources.

Common examples:

- code search
- file reads
- tests and build commands
- browser or screenshot tools
- MCP servers

For large codebases, tool access is usually better than pre-loading large amounts of text. The model can retrieve the next relevant file instead of carrying every possible file in context.

### 4. Memory Context

Memory context is information carried across sessions:

- decisions made
- patterns established
- checks that passed or failed
- remaining work

Most tools do not provide reliable project memory by default. You can simulate it with small persistent files such as `PLAN.md`, `STATE.md`, and a spec or scratchpad.

## Push and Pull Context

Push-based project guidance means core rules are loaded automatically, such as with `AGENTS.md`, `CLAUDE.md`, or `.cursorrules`.

Pull-based context means the model retrieves information when needed, such as by searching the repo or reading docs.

Use push-based context for:

- safety rules
- commands
- non-obvious gotchas
- review requirements
- conventions that frequently affect implementation

Use pull-based context for:

- secondary files
- external docs
- examples
- logs
- large references

The safest claim is not that push-based context always wins. The useful rule is that core constraints should not depend on retrieval luck.

**Evidence tags:** `Practitioner-backed` ([Agent Harness](/ai-coding-primer/learn/advanced/agent-harness/)). The push-vs-pull framing here is an editorial judgment built on those patterns.

## Explore-First Ordering

Use this order for most implementation tasks:

1. Explore local files, tests, commands, and patterns.
2. Load only context relevant to the current task.
3. Consult external docs if local context is insufficient.
4. Execute with a verification signal.

This avoids a common failure mode: applying a clean external example that does not fit the local codebase.

## Context Budget Discipline

There is no strong primary-source basis for a universal context percentage threshold.

The better-supported point is broader: context quality can degrade before the window is full. Long-running agents need selective retrieval, compaction, and persistent artifacts instead of large prompt dumps.

Treat every file, tool output, and previous correction as part of a finite attention budget.

### When Context Gets Noisy

Use these compaction strategies:

1. **Summarize** — keep decisions, evidence, and remaining tasks.
2. **Restart** — begin a fresh session with only essential context.
3. **Isolate research** — use a separate session or subagent for investigation.
4. **Select files** — include only files relevant to the current task.

For long logs and large command output, keep the beginning and end plus a short summary. This preserves setup and failure context without flooding the model with repeated lines.

## Isolate Research From Implementation

Subagents and separate sessions are useful when research and implementation have different context needs.

Use them when:

- you need to search a large codebase from multiple angles
- you need external documentation or examples
- you want one session to explore while another stays focused on the patch

The main benefit is context isolation. It prevents search noise from entering the implementation session.

This does not mean multi-agent workflows are always better. Orchestration overhead can erase the benefit unless each subagent has a clearly separated job.

**Evidence tags:** `Research-supported principle` ([Productivity Research](/ai-coding-primer/research/productivity/)); `Practitioner-backed` ([Subagent Architectures](/ai-coding-primer/learn/advanced/subagents/)).

## Common Context Mistakes

| Mistake | Problem | Recovery step |
|---|---|---|
| Dumping the whole codebase | Irrelevant files consume attention | provide search tools and first likely paths |
| Starting with external docs | Examples may not match local code | inspect local files and tests first |
| Carrying old failed attempts | Stale corrections bias the next plan | summarize findings and restart |
| Treating context-window size as quality | More tokens can still reduce relevance | prefer task-specific files and compact state |
| Mixing research and implementation | Search noise buries the patch context | use a separate session or subagent |
| Hiding the done signal | The agent cannot close the loop | provide or create the test, build, screenshot, or expected output |

## Example: Good vs Bad Context

**Bad context file:**

```markdown
# Project Context

This is a web application built with React and Node.js. We started
this project in 2023 and it has grown significantly over time. The
team consists of 5 developers and we follow agile methodology...

[500 more lines of background]
```

**Good context file:**

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

- [Effective Patterns](/ai-coding-primer/learn/intermediate/effective-patterns/) — procedures for verifiable work
- [Project Context Files](/ai-coding-primer/learn/advanced/project-context-files/) — context-file examples
- [Agent Harness](/ai-coding-primer/learn/advanced/agent-harness/) — persistent state for long-running tasks

## Bibliography

- [METR uplift update](https://metr.org/blog/2026-02-24-uplift-update/)
- [DORA 2025 report](https://dora.dev/research/2025/dora-report/)
- [Anthropic: Effective harnesses for long-running agents](https://www.anthropic.com/engineering/effective-harnesses-for-long-running-agents/)
