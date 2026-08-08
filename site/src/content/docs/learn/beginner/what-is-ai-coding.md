---
title: Agentic Engineering
description: What agentic engineering is and how the core loop works.
sidebar:
  order: 2
---

Agentic engineering means using AI tools that can read files, change code, run commands, and continue across multiple steps without a separate instruction for each action.

The operational change is that more work moves into intent, context, constraints, and verification. Code generation is only one part of the workflow.

## The Core Loop

```text
Intent → Plan → Execute → Reflect → Repeat
```

1. **Intent** — state the desired change or question
2. **Plan** — identify relevant files, constraints, and verification steps
3. **Execute** — write code, edit files, or run commands
4. **Reflect** — check tests, lint, types, build output, screenshots, or expected results
5. **Repeat** — revise based on the verification signal

That is what makes the workflow agentic. The tool can act in the environment instead of only suggesting text.

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

See how these tools fit into earlier programming practice: [From Human Computers to Agentic Engineering →](/ai-coding-primer/reference/development-practices-timeline/)

Choose a workflow and stack: [Choose a workflow and stack →](/ai-coding-primer/learn/beginner/choose-your-tool/)

Then review the main workflow patterns: [Workflow Archetypes →](/ai-coding-primer/learn/intermediate/workflow-archetypes/)

For a practical bounded-task procedure, use the [Agentic Development Loop →](/ai-coding-primer/learn/intermediate/agentic-development-loop/)
