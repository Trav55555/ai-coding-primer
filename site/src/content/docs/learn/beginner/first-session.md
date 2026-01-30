---
title: Your First Session
description: Write your first AI-assisted code with confidence.
sidebar:
  order: 5
---

You've picked a tool and set up your environment. Let's write some code.

## Step 1: Open the AI Panel

| Tool | Shortcut |
|------|----------|
| Cursor | `Cmd+I` / `Ctrl+I` |
| Zed | `Cmd+Shift+A` / `Ctrl+Shift+A` |
| Continue.dev | `Cmd+L` / `Ctrl+L` |
| Copilot | `Cmd+I` / `Ctrl+I` |
| Claude Code | Just type in terminal |
| Aider | Just type in terminal |

## Step 2: Start with Exploration

Don't command — explore. Your first prompt should be something you can verify:

```
Look at this codebase and explain:
1. What is the main entry point?
2. How is the code organized?
3. What patterns and conventions are used?
```

**Why this works:** You're asking about something you already know (or can quickly verify). This builds intuition for when the AI is right vs. hallucinating.

## Step 3: Ask for a Small Change

Pick something simple that you know how to do manually:

```
Add a utility function to src/utils.ts that validates email addresses.
Use the same style as the other functions in that file.
```

**Good first tasks:**
- Add a utility function
- Write a test for an existing function
- Add TypeScript types to an untyped function
- Refactor a function to be more readable

**Bad first tasks:**
- "Build me a login system"
- "Refactor the entire codebase"
- Anything you couldn't do yourself

## Step 4: Review the Output

Before accepting any changes:

1. **Read the diff** — Understand what changed
2. **Check for errors** — Does the LSP show problems?
3. **Run tests** — Do existing tests still pass?
4. **Verify behavior** — Does it do what you asked?

:::caution[Never blindly accept]
If you don't understand the code, don't ship it. Ask the AI to explain, or reject the change.
:::

## Step 5: Iterate

If something's wrong, be specific:

```
The email validation doesn't handle plus signs in the local part.
Update it to allow addresses like user+tag@example.com.
```

**Good correction:**
> "The function doesn't handle X. Fix it by doing Y."

**Bad correction:**
> "Fix it" (too vague)
> "That's wrong" (not actionable)

## The Golden Rule in Practice

You asked for email validation because you know what correct email validation looks like. This lets you:

- Spot if the regex is wrong
- Notice if edge cases are missing
- Verify the code actually works

Once you can reliably spot mistakes on familiar tasks, you're ready for unfamiliar territory.

## Common First-Session Mistakes

| Mistake | Fix |
|---------|-----|
| Too big a first ask | Start smaller — one function, not a feature |
| Accepting without reading | Always review diffs before accepting |
| No verification | Run linter/tests after every change |
| Giving up too fast | Try 2-3 iterations before abandoning |

## What's Next

You've completed your first AI-assisted coding session. To work more effectively:

- [Learn the core concepts](/ai-coding-primer/learn/intermediate/core-concepts/) — terminology and mental models
- [Study effective patterns](/ai-coding-primer/learn/intermediate/effective-patterns/) — what actually works
- [Avoid common mistakes](/ai-coding-primer/learn/intermediate/common-mistakes/) — save yourself pain
