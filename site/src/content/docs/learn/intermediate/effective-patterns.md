---
title: Effective Patterns
description: High-signal approaches for AI-assisted development.
sidebar:
  order: 4
---

These patterns show up repeatedly in reliable AI-assisted development workflows.

:::note[How to read this page]
Not every pattern here has the same evidence level.

- `Research-backed` - [Productivity Research](/ai-coding-primer/research/productivity/), [Code Quality & Security](/ai-coding-primer/research/code-quality-security/)
- `Practitioner-backed` - [Workflow Archetypes](/ai-coding-primer/learn/intermediate/workflow-archetypes/), [Context Engineering](/ai-coding-primer/learn/intermediate/context-engineering/)
- `Synthesis`
:::

## Pattern 0: Verification First

> "Give Claude a way to verify its work. This is the **single highest-leverage thing** you can do." — Anthropic

**Verification is not optional.** It's the foundation everything else builds on.

### Why Verification Matters

- AI produces plausible-looking code that may be subtly wrong
- Without verification, you're trusting output you can't validate
- Verification closes the loop — the agent can see and fix its own mistakes

### Ways to Provide Verification

| Method | Example | Best For |
|--------|---------|----------|
| **Tests** | "Run `pytest` after changes" | Logic correctness |
| **Type checker** | "Run `mypy` / `tsc`" | Type safety |
| **Linter** | "Run `eslint` / `ruff`" | Style, common bugs |
| **Build** | "Run `cargo build`" | Compilation |
| **Screenshot** | "Take a screenshot" | UI work |
| **Expected output** | "Result should be X" | Specific behavior |

### The TDD Pattern

The most reliable verification approach:

```
1. Write the test first (or have the AI write it)
2. Commit the test
3. Prompt: "Make this test pass. Don't modify the test."
```

This forces the AI to produce code that demonstrably works.

See [Code Quality & Security](/ai-coding-primer/research/code-quality-security/) and [Productivity Research](/ai-coding-primer/research/productivity/) for why verification is the consistent lever even when raw productivity results are mixed.

**Evidence tags:** `Research-backed` ([Code Quality & Security](/ai-coding-primer/research/code-quality-security/), [Productivity Research](/ai-coding-primer/research/productivity/)).

:::caution[If AI writes the test]
Review AI-generated tests critically. Ask yourself: "Does this test encode MY requirements, or just the AI's assumptions?" Tests should specify what the code *should* do, not describe what the code *does*. See [Lazy Testing](/ai-coding-primer/learn/intermediate/common-mistakes/#mistake-8-lazy-testing) for the full danger.
:::

---

## Pattern 1: Close the Loop

> "The big secret is always close the loop. The model needs to be able to debug and test itself." — Peter Steinberger

Design your workflow so the agent can verify its own work:

- Have it **run** tests, not just write them
- Use linters that catch errors immediately
- Build CLIs for common operations

---

## Pattern 2: Conversation Before Commands

**Instead of:** "Build a login system"

**Try:** "Let's discuss how authentication should work in this app. What are my options?"

This prevents premature building and surfaces better solutions.

**Evidence tags:** `Practitioner-backed` ([Workflow Archetypes](/ai-coding-primer/learn/intermediate/workflow-archetypes/)).

---

## Pattern 3: Small Iterations

Never ask the AI to "build the whole app." Break it down:

1. "Define the data structures in `models.py`"
2. "Implement the repository pattern for these models"
3. "Write unit tests for the business logic"

Each step is verifiable before moving to the next.

**Evidence tags:** `Research-backed` ([Productivity Research](/ai-coding-primer/research/productivity/)); `Practitioner-backed` ([Workflow Archetypes](/ai-coding-primer/learn/intermediate/workflow-archetypes/)).

---

## Pattern 4: Less Context is More

> "The more the model knows, the dumber it gets." — Theo (t3.gg)

- **Don't** dump your entire codebase into context
- **Do** provide only relevant files
- **Do** give tools to search rather than pre-loading

See [Context Engineering](/ai-coding-primer/learn/intermediate/context-engineering/) for the evidence and caveats behind this claim.

---

## Pattern 5: Clone and Imitate

> "Clone datasette/datasette-enrichments from GitHub to /tmp and imitate the testing patterns it uses." — Simon Willison

The fastest way to get consistent output is to show an example:

```
Clone https://github.com/simonw/datasette to /tmp.
Look at how tests are structured in tests/.
Now write tests for my new plugin following the same patterns.
```

**When to use:**
- Setting up test patterns
- Adopting library conventions
- Replicating a coding style

**Evidence tags:** `Practitioner-backed` ([Workflow Archetypes](/ai-coding-primer/learn/intermediate/workflow-archetypes/)).

---

## Pattern 6: Use Subagents

**Problem:** Research pollutes your main context. Looking up docs, exploring codebases, and investigating options fills your context window.

**Solution:** Delegate research to subagents that run in separate contexts.

```
Use subagents to investigate how authentication is implemented 
in this codebase. Report back with file paths and patterns.
```

**Benefits:**
- Main context stays clean
- Research happens in isolation
- You get a summary, not raw exploration

**When to use:**
- Exploring unfamiliar codebases
- Looking up documentation
- Investigating multiple approaches
- Any task that's "read a lot, summarize a little"

**Evidence tags:** `Research-backed` ([Productivity Research](/ai-coding-primer/research/productivity/)); `Practitioner-backed` ([Subagent Architectures](/ai-coding-primer/learn/advanced/subagents/)).

---

## Pattern 7: Start with a Spec

Loose prompts are fine for tiny changes. They break down on real feature work.

Before a larger task, write a small spec with:

- requirements
- acceptance criteria
- out-of-scope items
- constraints or non-negotiables

Then prompt the model to read the spec and discuss the plan before writing code.

This is the simplest upgrade from "vibe coding" to production-ready AI-assisted work.

**Evidence tags:** `Practitioner-backed` ([Workflow Archetypes](/ai-coding-primer/learn/intermediate/workflow-archetypes/)); `Synthesis`.

---

## Pattern 8: Use a Harness for Long Tasks

When work spans multiple sessions, keep a tiny set of persistent artifacts:

- `PLAN.md` — what remains to be done
- `STATE.md` — current status and decisions
- `spec.md` or equivalent — the source of truth for intent

This keeps the task stable even when the model's conversational context gets compacted or cleared.

**Evidence tags:** `Practitioner-backed` ([Agent Harness](/ai-coding-primer/learn/advanced/agent-harness/)); `Synthesis`.

---

## Anti-Patterns to Avoid

| Anti-Pattern | Problem | Fix |
|--------------|---------|-----|
| **No verification** | Can't tell if code works | Always include test/lint step |
| **Giant prompts** | Context rot | Break into smaller asks |
| **"Fix it" loops** | Failed attempts pollute context | Clear and rewrite prompt |
| **Skipping review** | Shipping code you don't understand | Always read diffs |

## Next Steps

- [Workflow Archetypes](/ai-coding-primer/learn/intermediate/workflow-archetypes/) — common end-to-end workflows
- [Learn Common Mistakes](/ai-coding-primer/learn/intermediate/common-mistakes/) — avoid the pitfalls
- [Troubleshooting](/ai-coding-primer/learn/intermediate/troubleshooting/) — when things go wrong
- [Research & Evidence](/ai-coding-primer/research/overview/) — empirical studies and caveats
