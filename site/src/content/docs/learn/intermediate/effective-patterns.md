---
title: Effective Patterns
description: High-signal approaches for AI-assisted development.
sidebar:
  order: 4
---

These are the patterns that keep showing up when AI-assisted development actually goes well.

:::note[Evidence guide]
Not every pattern here has the same evidence level.

- `Research-supported principle` - [METR uplift update](https://metr.org/blog/2026-02-24-uplift-update/) and [Veracode GenAI Code Security Report](https://www.veracode.com/blog/genai-code-security-report/) support verification and review discipline.
- `Practitioner-backed workflow` - [Workflow Archetypes](/ai-coding-primer/learn/intermediate/workflow-archetypes/) and [Context Engineering](/ai-coding-primer/learn/intermediate/context-engineering/) show how those principles become practice.

The exact pattern framing is editorial guidance drawn from those sources and practitioner convergence.
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

Verification matters even when raw productivity results are mixed.

For the evidence, see the [Veracode GenAI Code Security Report](https://www.veracode.com/blog/genai-code-security-report/) and [METR uplift update](https://metr.org/blog/2026-02-24-uplift-update/).

:::caution[If AI writes the test]
Review AI-generated tests critically.

Ask: "Does this test encode my requirements, or just the AI's assumptions?"

Tests should specify what the code *should* do, not describe what the code *does*. See [Lazy Testing](/ai-coding-primer/learn/intermediate/common-mistakes/#mistake-8-lazy-testing).
:::

## Worked Example: Fix One Bug Without Losing the Thread

Here is what these patterns look like together.

### Situation

A settings form saves successfully, but the updated value disappears after refresh. You have a failing test command and one likely UI file.

### 1. Give the agent a narrow job

```text
We are fixing one bug: the settings page appears to save timezone changes,
but after refresh the old timezone returns.

Known signal:
- `npm test -- settings-timezone.test.ts` fails with:
  Expected "Europe/Paris", received "UTC"

Relevant files:
- src/settings/SettingsForm.tsx
- src/settings/settingsApi.ts
- tests/settings-timezone.test.ts

First explain the likely root cause from these files. Do not edit yet.
```

Good output names a specific boundary: form state, API payload, persistence response, or reload path. If the answer is generic, ask it to inspect narrower code before editing.

### 2. Ask for the smallest patch and verification

```text
Implement the smallest fix for that root cause.

Constraints:
- Do not redesign the settings page.
- Do not change unrelated settings fields.
- Do not update the test expectation unless the test is clearly wrong.

After edits, run:
1. `npm test -- settings-timezone.test.ts`
2. the nearest related settings test if different

Then report changed files, test results, and the exact behavior fixed.
```

### 3. Review the diff before continuing

Do not just read the agent's summary. Check whether the diff matches the causal story:

- Did it change the persistence path that caused the bug?
- Did it leave unrelated settings fields alone?
- Did it preserve or add regression coverage?
- Can you explain the fix in one paragraph?

A good handoff sounds like this:

```text
Root cause: the form updated local state but sent `timezoneLabel` instead of
`timezone` to the API. The server ignored the unknown field, so refresh loaded
the old value. The patch sends the expected key and keeps the existing response
shape. The regression test now passes.
```

### 4. Recovery if the loop goes bad

| Symptom | Stop and do this |
|---|---|
| Agent edits unrelated settings | Re-anchor on allowed files and revert unrelated diff |
| Agent changes the failing test first | Restore the test; it is the done signal |
| Root cause is still vague | Ask for file-level evidence before code |
| The fix requires API/schema change | Pause and write the decision into a small spec |
| The conversation gets polluted by failed attempts | Start fresh with current findings, failed fixes, and remaining signal in five bullets |

This is the core loop: narrow context, root-cause explanation, smallest edit, executable verification, human diff review, and a clean recovery path.

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
