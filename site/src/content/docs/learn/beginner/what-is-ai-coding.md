---
title: Agentic Engineering
description: What agentic engineering is and how the core loop works.
sidebar:
  order: 2
---

Agentic engineering means using AI tools that can read files, change code, run commands, and continue across multiple steps without a separate instruction for each action.

The operational change is that more work moves into intent, context, constraints, and verification. Code generation is only one part of the workflow.

## The Short Version of the Workflow

```text
Define → Bound → Execute → Verify → Review
```

1. **Define** the behavior and evidence you need.
2. **Bound** files, permissions, non-goals, and the stop condition.
3. Let the tool **execute** only that task.
4. **Verify** with tests, diagnostics, builds, screenshots, or expected output.
5. **Review** the diff, assumptions, and remaining risk.

This is the beginner summary, not a separate procedure. The [Agentic Development Loop](/ai-coding-primer/learn/intermediate/agentic-development-loop/) expands it for consequential choices, thin slices, saved state, recovery, and later change cost.

## What Changed

| Era | How it works | Your role |
|---|---|---|
| **Autocomplete** | accept inline suggestions | write and integrate most code yourself |
| **Chat** | copy code or explanations from a chat window | adapt suggestions manually |
| **Agentic tools** | tool reads, writes, runs, and iterates | set intent, constraints, and verification; review the result |

## Skills That Matter More

As tools become better at generating code, these skills become more important:

| Less central | More central |
|---|---|
| Writing syntax quickly | Designing the workflow and constraints |
| Memorizing every API | Knowing how to verify the result |
| Doing every implementation step manually | Delegating safely and reviewing well |

Usable workflows include tests, linters, type checks, screenshots, expected outputs, or another feedback loop.

## What These Tools Can Do

- Use context from your codebase
- Write and edit multiple files
- Run terminal commands such as build, test, and lint
- Fix errors they detect in their output
- Use external tools such as databases, APIs, or browsers when configured

## Current Limits

- They do not reliably infer intent on the first try.
- They do not know local conventions unless those conventions are visible.
- They often handle large, loosely scoped changes poorly.
- They do not replace human judgment on architecture, design, safety, or product behavior.

## Starting Rule

> **Start with tasks you already know how to solve.**

Familiar tasks make errors easier to detect. Once you can identify mistakes on familiar work, move gradually to less familiar tasks with stronger verification.

## Next Steps

1. Set the data and permission boundary with the [Quick Security Checklist →](/ai-coding-primer/security/checklist/).
2. [Choose a Workflow and Stack →](/ai-coding-primer/learn/beginner/choose-your-tool/).
3. Establish feedback and permissions with the [Setup Checklist →](/ai-coding-primer/learn/beginner/setup-checklist/).

For historical context, see [From Human Computers to Agentic Engineering](/ai-coding-primer/reference/development-practices-timeline/).
