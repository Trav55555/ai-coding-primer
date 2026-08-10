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
- `Research-backed principle` - productivity, review, and security outcomes depend on feedback loops and task context.
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

## Three Context Jobs

Do not put every helpful-looking fact in the same place. Context does three different jobs, and each job has a different failure mode.

### 1. Retrieved Context

Retrieved context is information gathered for the current task:

- relevant files and symbols
- recent git history
- test results
- error messages
- examples of nearby patterns
- external docs when the repository does not answer the question

Many agent tools gather this by searching the codebase, reading files, and running commands. For large codebases, selective retrieval is usually better than pre-loading a large directory tour. The model can fetch the next relevant file instead of carrying every possible file in the prompt.

Explore the local project before relying on external documentation. External examples may not match the codebase you are editing. That is not a claim that filesystem storage is better than external retrieval in general; a well-maintained docs index, search service, or retrieval system can be the right source when it contains current, task-relevant material.

**Evidence tags:** `Practitioner-backed` ([Workflow Archetypes](/ai-coding-primer/learn/intermediate/workflow-archetypes/)); `Research-backed principle` ([Productivity Research](/ai-coding-primer/research/productivity/)).

### 2. Persistent Instructions

Persistent instructions are project-specific rules loaded across tasks, such as `AGENTS.md`, `CLAUDE.md`, or a tool's current project-rule format.

Useful persistent instructions include:

- commands to run
- non-obvious architecture boundaries
- known gotchas
- code style rules that affect edits
- permission, safety, or review requirements

Keep these files short. For each line, ask whether removing it would cause a likely mistake on representative tasks. If not, remove it.

**Early / uncertain evidence — preprint:** arXiv 2602.11988 reports that generated repository instruction files failed to improve, or slightly reduced, task success in its coding-agent evaluation while raising cost by roughly 20–23 percent. Concise human-written instructions produced a small gain in that setting, also at higher cost. This does not establish the result for every harness or repository. The practical default is to write short human rules for non-obvious constraints, avoid generated directory tours, and test whether the file helps representative tasks.

### 3. Saved Task State

Saved task state records what happened during a task so the next session does not depend on a long transcript:

- decisions made
- files touched
- checks that passed or failed
- remaining work
- unresolved risks

Most tools do not provide reliable project memory by default. You can simulate it with small persistent files such as `PLAN.md`, `STATE.md`, and a spec or scratchpad. Keep saved state factual. Do not carry every failed attempt; record the result and the current hypothesis.

## Push and Pull Context

Push-based project guidance means core rules are loaded automatically, such as with `AGENTS.md`, `CLAUDE.md`, or current tool-specific project rules.

Pull-based context means the model retrieves information when needed, such as by searching the repo, reading docs, querying an index, or inspecting tool output.

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

The safest claim is not that push-based context always wins. The useful rule is that core constraints should not depend on retrieval luck, and large references should not be forced into every task.

**Evidence tags:** `Practitioner-backed` ([Agent Harness](/ai-coding-primer/learn/advanced/agent-harness/)). The push-vs-pull framing here is an editorial judgment built on those patterns.

## Explore-First Ordering

Use this order for most implementation tasks:

1. Explore local files, tests, commands, and patterns.
2. Load only context relevant to the current task.
3. Consult external docs or retrieval systems if local context is insufficient.
4. Execute with a verification signal.

This avoids a common failure mode: applying a clean external example that does not fit the local codebase.

## Context Budget Discipline

There is no strong primary-source basis for a universal context percentage threshold.

The better-supported point is broader: context quality can degrade before the window is full. Long or generated context can also add cost without improving task success. Treat every file, tool output, instruction line, and previous correction as part of a finite attention budget.

Long-running agents need selective retrieval, compaction, and persistent artifacts instead of large prompt dumps.

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

**Evidence tags:** `Research-backed principle` ([Productivity Research](/ai-coding-primer/research/productivity/)); `Practitioner-backed` ([Subagent Architectures](/ai-coding-primer/learn/advanced/subagents/)).

## Minimal-Context Experiment

Before making a large repository instruction file permanent, test it on real work.

1. Pick three to five recent tasks that represent normal edits: a bug fix, a small feature, a test update, and one task with a known local gotcha.
2. Run each task twice in fresh sessions when practical: once with only minimal instructions and retrieval tools, once with the proposed instruction file.
3. Record success, commands run, review fixes, wall-clock time, token or inference cost if available, and whether the agent used the extra instructions correctly.
4. Keep instructions that prevent observed mistakes. Delete rules that were unused, obvious from local files, or caused the agent to inspect the wrong area.
5. Repeat when the repository structure or agent tooling changes.

This is not a laboratory benchmark. It is a cheap check against paying for context that does not change outcomes.

## Common Context Mistakes

| Mistake | Problem | Recovery step |
|---|---|---|
| Dumping the whole codebase | Irrelevant files consume attention | provide search tools and first likely paths |
| Starting with external docs | Examples may not match local code | inspect local files and tests first, then fetch external sources as needed |
| Treating generated instructions as free | Extra tokens can raise cost without improving success | test the file on representative tasks |
| Mixing persistent rules and task state | Old task details become accidental policy | keep `AGENTS.md`-style rules separate from `STATE.md`-style notes |
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

- [Effective Patterns](/ai-coding-primer/learn/intermediate/effective-patterns/) — prevention and verification tactics inside the canonical loop
- [Project Context Files](/ai-coding-primer/learn/advanced/project-context-files/) — context-file examples
- [Agent Harness](/ai-coding-primer/learn/advanced/agent-harness/) — persistent state for long-running tasks

## Bibliography

- [Evaluating AGENTS.md: Are Repository-Level Context Files Helpful for Coding Agents?](https://arxiv.org/abs/2602.11988)
- [METR uplift update](https://metr.org/blog/2026-02-24-uplift-update/)
- [DORA 2025 report](https://dora.dev/research/2025/dora-report/)
- [Anthropic: Effective harnesses for long-running agents](https://www.anthropic.com/engineering/effective-harnesses-for-long-running-agents/)
