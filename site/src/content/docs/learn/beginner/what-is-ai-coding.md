---
title: What is AI Coding?
description: Understanding agentic coding and the core loop.
sidebar:
  order: 2
---

Agentic coding means using AI tools that can read files, change code, run commands, and keep going without waiting for every next instruction.

The real shift is not just that AI can write code. More of the job now sits one level up: intent, context, and verification.

## The Core Loop

```
Intent → Plan → Execute → Reflect → Repeat
```

1. **Intent** — You describe what you want ("add a login page")
2. **Plan** — The AI determines which files to read and what changes to make
3. **Execute** — The AI writes code, runs commands, edits files
4. **Reflect** — The AI checks the result (tests, linter, type checker)
5. **Repeat** — If something's wrong, it tries again

That is what makes it agentic. The tool is acting, not just suggesting.

## What Changed

| Era | How It Works | Your Role |
|-----|--------------|-----------|
| **Autocomplete** (2021) | Tab to accept suggestions | Write most code yourself |
| **Chat** (2022) | Copy-paste from ChatGPT | Manually integrate suggestions |
| **Agentic** (2024+) | AI reads, writes, runs, iterates | Review and guide |

## The New Skill Premium

As tools get better at generating code, the valuable skill moves up a level:

| Old center of gravity | New center of gravity |
|-----------------------|-----------------------|
| Writing syntax fast | Designing the workflow and constraints |
| Knowing every API by memory | Knowing how to verify the result |
| Manually doing every implementation step | Delegating safely and reviewing well |

That is why the good workflows always include tests, linters, type checks, or some other feedback loop.

## What These Tools Can Do

- Use context from your codebase
- Write and edit multiple files
- Run terminal commands (build, test, lint)
- Fix errors they detect in their output
- Use external tools (databases, APIs, browsers)

## What They Can't Do (Yet)

- Perfectly interpret your intent on the first try
- Know your organization's conventions without being told
- Reliably handle very large changes (500+ line diffs)
- Replace human judgment on architecture and design

## The Golden Rule

> **Start with tasks you already know how to solve.**

This helps you learn when the AI is right and when it is only sounding right. Once you can spot its mistakes on familiar work, you can trust yourself more on unfamiliar work too.

## Next Steps

Ready to try it? [Choose your first tool →](/ai-coding-primer/learn/beginner/choose-your-tool/)

Then learn the workflows that make these tools useful: [Workflow Archetypes →](/ai-coding-primer/learn/intermediate/workflow-archetypes/)
