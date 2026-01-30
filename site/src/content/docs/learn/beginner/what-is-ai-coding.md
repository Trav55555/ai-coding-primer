---
title: What is AI Coding?
description: Understanding agentic coding and the core loop.
sidebar:
  order: 2
---

**Agentic coding** uses AI assistants that read, write, and execute code autonomously. Unlike simple autocomplete, these tools use your project structure as context, run terminal commands, detect errors in their own output, and iterate until the task is complete.

## The Core Loop

```
Intent → Plan → Execute → Reflect → Repeat
```

1. **Intent** — You describe what you want ("add a login page")
2. **Plan** — The AI determines which files to read and what changes to make
3. **Execute** — The AI writes code, runs commands, edits files
4. **Reflect** — The AI checks the result (tests, linter, type checker)
5. **Repeat** — If something's wrong, it tries again

This is what makes it "agentic" — the AI acts autonomously rather than just suggesting completions.

## What Changed

| Era | How It Works | Your Role |
|-----|--------------|-----------|
| **Autocomplete** (2021) | Tab to accept suggestions | Write most code yourself |
| **Chat** (2022) | Copy-paste from ChatGPT | Manually integrate suggestions |
| **Agentic** (2024+) | AI reads, writes, runs, iterates | Review and guide |

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

This builds intuition for when the AI is right vs. hallucinating. Once you can spot its mistakes, you can confidently use it for unfamiliar territory.

## Next Steps

Ready to try it? [Choose your first tool →](/ai-coding-primer/learn/beginner/choose-your-tool/)
