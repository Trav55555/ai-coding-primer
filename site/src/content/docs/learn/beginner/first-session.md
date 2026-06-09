---
title: Your First Session
description: Run a small AI-assisted coding task with verification.
sidebar:
  order: 5
---

Use the first session to test the workflow on a small, reviewable task.

## Step 1: Open Your Tool's AI Surface

- in an IDE or extension, open the chat, command palette, or edit panel
- in a CLI tool, start the tool in your terminal and type your prompt directly

If you need product-specific shortcuts, use the vendor pages in the [Reference Appendix](/ai-coding-primer/reference/appendix/).

## Step 2: Start with Exploration

Start by asking the tool to describe something you can check quickly:

```text
Look at this codebase and explain:
1. What is the main entry point?
2. How is the code organized?
3. What patterns and conventions are used?
```

**Verification logic:** this prompt asks about information you can inspect. It gives you a first signal about whether the tool is reading the project accurately.

## Step 3: Ask for a Small Change

Pick something simple that you know how to do manually:

```text
Add a utility function to src/utils.ts that validates email addresses.
Use the same style as the other functions in that file.
```

**Useful first tasks:**
- Add a utility function
- Write a test for an existing function
- Add TypeScript types to an untyped function
- Refactor a function to be more readable

**Avoid for the first session:**
- "Build me a login system"
- "Refactor the entire codebase"
- Anything you could not review yourself

## Step 4: Review the Output

Before accepting any changes:

1. **Read the diff** — understand what changed
2. **Check for errors** — inspect editor or language-server warnings
3. **Run tests** — confirm relevant tests still pass
4. **Verify behavior** — check the output against what you asked for

:::caution[Review before shipping]
If you do not understand the code, do not ship it. Ask for an explanation, narrow the task, or reject the change.
:::

## Step 5: Iterate

If the result is wrong, state the mismatch and the required correction:

```text
The email validation does not handle plus signs in the local part.
Update it to allow addresses like user+tag@example.com.
```

**Useful correction:**
> "The function does not handle X. Fix it by doing Y."

**Not useful:**

> "Fix it"
> "That's wrong"

## Why Familiar Tasks Come First

You asked for email validation because you know what correct email validation should include. That lets you:

- spot an incorrect regex
- notice missing edge cases
- verify that the code behaves as requested

After familiar tasks, move to less familiar work only when you have a verification signal: a test, build, screenshot, expected output, or review checklist.

## Common First-Session Mistakes

| Mistake | Fix |
|---|---|
| Too big a first ask | Start with one function, one test, or one small refactor |
| Accepting without reading | Review diffs before accepting |
| No verification | Run linter, tests, or another relevant check after the change |
| Giving up too fast | Try two or three specific corrections before abandoning |

## What's Next

- [Learn the core concepts](/ai-coding-primer/learn/intermediate/core-concepts/): terminology and mental models
- [Study effective patterns](/ai-coding-primer/learn/intermediate/effective-patterns/): common workflow patterns and examples
- [Avoid common mistakes](/ai-coding-primer/learn/intermediate/common-mistakes/): failure modes and corrections
