---
title: Effective Patterns
description: High-signal approaches for AI-assisted development.
sidebar:
  order: 4
---

These are the patterns that keep showing up when AI-assisted development actually goes well.

:::note[Evidence guide]
Not every pattern here has the same evidence level.

- `Research-backed` - [METR uplift update](https://metr.org/blog/2026-02-24-uplift-update/), [Veracode GenAI Code Security Report](https://www.veracode.com/blog/genai-code-security-report/)
- `Practitioner-backed` - [Workflow Archetypes](/ai-coding-primer/learn/intermediate/workflow-archetypes/), [Context Engineering](/ai-coding-primer/learn/intermediate/context-engineering/)
- `Synthesis`
:::

## Verification First

> "Give Claude a way to verify its work. This is the **single highest-leverage thing** you can do." — Anthropic

**Verification is not optional.** It's the foundation everything else builds on.

### Why Verification Matters

- AI produces plausible-looking code that may be subtly wrong
- Without verification, you're trusting output you can't validate
- Verification closes the loop. The agent can see its own mistakes and respond to them.

### Ways to Provide Verification

| Method | Example | Best For |
|--------|---------|----------|
| **Tests** | "Run `pytest` after changes" | Logic correctness |
| **Type checker** | "Run `mypy` / `tsc`" | Type safety |
| **Linter** | "Run `eslint` / `ruff`" | Style, common bugs |
| **Build** | "Run `cargo build`" | Compilation |
| **Screenshot** | "Take a screenshot" | UI work |
| **Expected output** | "Result should be X" | Specific behavior |

### A Simple TDD Loop

One reliable version looks like this:

```
1. Write the test first (or have the AI write it)
2. Commit the test
3. Prompt: "Make this test pass. Don't modify the test."
```

This forces the AI to produce code that demonstrably works.

See [Veracode GenAI Code Security Report](https://www.veracode.com/blog/genai-code-security-report/) and [METR uplift update](https://metr.org/blog/2026-02-24-uplift-update/) for why verification matters so consistently even when the raw productivity results are mixed.

:::caution[If AI writes the test]
Review AI-generated tests critically. Ask yourself: "Does this test encode MY requirements, or just the AI's assumptions?" Tests should specify what the code *should* do, not describe what the code *does*. See [Lazy Testing](/ai-coding-primer/learn/intermediate/common-mistakes/#mistake-8-lazy-testing) for the full danger.
:::

## Close the Loop

> "The big secret is always close the loop. The model needs to be able to debug and test itself." — Peter Steinberger

Set the workflow up so the agent can check its own work:

- Have it **run** tests, not just write them
- Use linters that catch errors immediately
- Build CLIs for common operations

## Talk Before You Build

**Instead of:** "Build a login system"

**Try:** "Let's discuss how authentication should work in this app. What are my options?"

This prevents premature building and surfaces better solutions.

## Small Iterations

Never ask the AI to "build the whole app." Break it down:

1. "Define the data structures in `models.py`"
2. "Implement the repository pattern for these models"
3. "Write unit tests for the business logic"

Each step is verifiable before moving to the next.

## Less Context, Better Results

> "The more the model knows, the dumber it gets." — Theo (t3.gg)

- **Don't** dump your entire codebase into context
- **Do** provide only relevant files
- **Do** give tools to search rather than pre-loading

See [Context Engineering](/ai-coding-primer/learn/intermediate/context-engineering/) for the evidence and caveats behind this claim.

## Clone and Imitate

> "Clone datasette/datasette-enrichments from GitHub to /tmp and imitate the testing patterns it uses." — Simon Willison

The fastest way to get consistent output is to show an example:

```
Clone https://github.com/simonw/datasette to /tmp.
Look at how tests are structured in tests/.
Now write tests for my new plugin following the same patterns.
```

Use this when you need:
- Setting up test patterns
- Adopting library conventions
- Replicating a coding style

## Use Subagents for Research

If research lives in the same context as implementation, the main thread gets noisy fast. Let a subagent do the reading and come back with file paths and patterns.

```
Use subagents to investigate how authentication is implemented 
in this codebase. Report back with file paths and patterns.
```

What you get:
- Main context stays clean
- Research happens in isolation
- You get a summary, not raw exploration

Best fit:
- Exploring unfamiliar codebases
- Looking up documentation
- Investigating multiple approaches
- Any task that's "read a lot, summarize a little"

## Start with a Spec

Loose prompts are fine for tiny changes. They break down on real feature work.

Before a larger task, write a small spec with:

- requirements
- acceptance criteria
- out-of-scope items
- constraints or non-negotiables

Then prompt the model to read the spec and discuss the plan before writing code.

This is the easiest step up from improvising.

## Use a Harness for Long Tasks

When work spans multiple sessions, keep a tiny set of persistent artifacts:

- `PLAN.md` — what remains to be done
- `STATE.md` — current status and decisions
- `spec.md` or equivalent — the source of truth for intent

This keeps the task stable even when the model's conversational context gets compacted or cleared.

## Anti-Patterns to Avoid

| Anti-Pattern | Problem | Fix |
|--------------|---------|-----|
| **No verification** | Can't tell if code works | Always include test/lint step |
| **Giant prompts** | Context rot | Break into smaller asks |
| **"Fix it" loops** | Failed attempts pollute context | Clear and rewrite prompt |
| **Skipping review** | Shipping code you don't understand | Always read diffs |

## Next Steps

- [Workflow Archetypes](/ai-coding-primer/learn/intermediate/workflow-archetypes/): common end-to-end workflows
- [Learn Common Mistakes](/ai-coding-primer/learn/intermediate/common-mistakes/): avoid the pitfalls
- [Troubleshooting](/ai-coding-primer/learn/intermediate/troubleshooting/): when things go wrong
- [Research Overview](/ai-coding-primer/research/overview/): empirical studies and caveats

## Bibliography

- [METR uplift update](https://metr.org/blog/2026-02-24-uplift-update/)
- [Veracode GenAI Code Security Report](https://www.veracode.com/blog/genai-code-security-report/)
- [DORA 2025 report](https://dora.dev/research/2025/dora-report/)
