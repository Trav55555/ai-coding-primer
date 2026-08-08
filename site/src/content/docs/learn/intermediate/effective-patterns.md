---
title: Effective Patterns
description: Procedures for verifiable AI-assisted development.
sidebar:
  order: 4
---

These patterns are reusable moves inside the [Agentic Development Loop](/ai-coding-primer/learn/intermediate/agentic-development-loop/). Use them to improve verification, context control, and diff review without restating the full loop on every task.

:::note[Evidence guide]
Not every pattern here has the same evidence level.

- `Research-supported principle` - [METR uplift update](https://metr.org/blog/2026-02-24-uplift-update/) and [Veracode GenAI Code Security Report](https://www.veracode.com/blog/genai-code-security-report/) support verification and review discipline.
- `Practitioner-backed workflow` - [Agentic Development Loop](/ai-coding-primer/learn/intermediate/agentic-development-loop/), [Workflow Archetypes](/ai-coding-primer/learn/intermediate/workflow-archetypes/), and [Context Engineering](/ai-coding-primer/learn/intermediate/context-engineering/) show how those principles become practice.

The exact pattern framing is editorial guidance drawn from those sources and practitioner convergence.
:::

## Require Verification

AI output should be checked against an observable signal.

Useful verification signals include:

| Method | Example | Best for |
|---|---|---|
| **Tests** | `pytest`, `npm test`, `cargo test` | behavior and logic |
| **Type checker** | `mypy`, `tsc`, `cargo check` | type and interface errors |
| **Linter** | `eslint`, `ruff`, `clippy` | common bugs and style rules |
| **Build** | `npm run build`, `cargo build` | compilation and bundling |
| **Screenshot** | browser screenshot after UI change | visual UI checks |
| **Expected output** | command output equals a known value | CLIs and data transforms |

A useful prompt names the check:

```text
Make the smallest change that fixes this bug.
After editing, run `npm test -- user-validation.test.ts` and report the result.
```

### Test-first loop

One reliable test-first sequence is:

```text
1. Write or confirm the failing test.
2. Keep the test fixed unless the requirement is wrong.
3. Ask the agent to make the test pass.
4. Run the targeted test and then a broader related check.
5. Review the diff before accepting the change.
```

If the agent writes the test, review the test before using it as the done signal.

:::caution[AI-generated tests]
Ask whether the test encodes the requirement or only the agent's assumption.

Tests should specify what the code should do. They should not merely describe the current implementation. See [Lazy Testing](/ai-coding-primer/learn/intermediate/common-mistakes/#mistake-8-lazy-testing).
:::

## Worked Example: Bug Fix With Verification

### Situation

A settings form saves successfully, but the updated value disappears after refresh. You have a failing test command and one likely UI file.

### 1. Start with a narrow diagnosis

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

A useful diagnosis names a specific boundary: form state, API payload, persistence response, or reload path. If the explanation is generic, ask for narrower file-level evidence before editing.

### 2. Ask for the smallest patch

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

### 3. Review the diff

Check whether the diff matches the diagnosis:

- Did it change the persistence path that caused the bug?
- Did it leave unrelated settings fields alone?
- Did it preserve or add regression coverage?
- Can you explain the fix in one paragraph?

A concise handoff should look like this:

```text
Root cause: the form updated local state but sent `timezoneLabel` instead of
`timezone` to the API. The server ignored the unknown field, so refresh loaded
the old value. The patch sends the expected key and keeps the existing response
shape. The regression test now passes.
```

### 4. Recover if the loop degrades

| Symptom | Recovery step |
|---|---|
| Agent edits unrelated settings | Re-anchor on allowed files and revert unrelated diff |
| Agent changes the failing test first | Restore the test; it is the done signal |
| Root cause is still vague | Ask for file-level evidence before code |
| The fix requires API/schema change | Pause and write the decision into a small spec |
| Failed attempts pollute the session | Start fresh with findings, failed fixes, and remaining signal in five bullets |

This example is the bug-fix version of the canonical loop: define the failure, bound the task, run checks, review the diff, and reset context if the session degrades.

## Close the Verification Loop

Set the workflow up so the agent can observe failure and success:

- have it run tests, not only write tests
- use linters and type checkers that produce immediate errors
- provide expected output for commands or data transformations
- use screenshots or DOM checks for UI work

## Discuss Before Implementation

Use discussion before code when the design is still ambiguous.

```text
Before implementing, explain the viable authentication approaches for this app.
List tradeoffs, required files, and the smallest implementation path.
```

This separates design choices from implementation. It also exposes assumptions before they become code.

## Use Small Iterations

Avoid asking for an entire feature in one prompt. Break the work into verifiable slices with a stop point and a validation command. Prefer a thin end-to-end slice when it can test the real behavior; use a foundation-first slice only when a migration, contract, or safety boundary must be settled before user-visible work.

See [Agentic Development Loop](/ai-coding-primer/learn/intermediate/agentic-development-loop/#3-choose-a-thin-vertical-slice) for the full slicing rule.

## Limit Context to the Task

Large context is not automatically useful context.

- Provide relevant files and failure signals.
- Give the agent search tools for secondary files.
- Exclude unrelated logs, history, and documents.

See [Context Engineering](/ai-coding-primer/learn/intermediate/context-engineering/) for evidence and caveats.

## Provide Examples When Style Matters

If output needs to match a project style, provide a nearby example or ask the agent to inspect one.

```text
Look at how tests are structured in tests/settings/*.test.ts.
Write the new test using the same style and helper functions.
```

Use examples for:

- test patterns
- library conventions
- naming style
- error handling
- file organization

## Isolate Research From Implementation

Research-heavy tasks can pollute the implementation context. Use a separate session or subagent for exploration.

```text
Investigate how authentication is implemented in this codebase.
Report back with file paths, patterns, and open questions.
Do not modify files.
```

Useful outputs from research sessions:

- entry points
- relevant files
- observed conventions
- risks and unknowns
- recommended next workflow

## Start Larger Work With a Spec

Loose prompts are acceptable for tiny changes. Larger tasks need a short source of truth.

A useful spec includes:

- requirements
- acceptance criteria
- out-of-scope items
- constraints and non-negotiables
- verification commands

Ask the model to read the spec and discuss the plan before writing code.

## Use a Harness for Long Tasks

When work spans multiple sessions, keep a small set of persistent artifacts:

- `PLAN.md` — remaining work
- `STATE.md` — current status and decisions
- `spec.md` or equivalent — source of truth for intent

These artifacts preserve task state when conversation context is compacted or cleared.

## Anti-Patterns

| Anti-pattern | Problem | Correction |
|---|---|---|
| **No verification** | Result cannot be checked | Include a test, lint, build, screenshot, or expected output |
| **Giant prompts** | Irrelevant context reduces output quality | Break work into bounded asks with explicit stop points |
| **Repeated `fix it` loops** | Failed attempts pollute context | Start fresh with facts, failed attempts, and remaining evidence |
| **Skipping review** | Code may be wrong or unmaintainable | Review assumptions, risk, diff, and behavior before accepting |

## Next Steps

- [Agentic Development Loop](/ai-coding-primer/learn/intermediate/agentic-development-loop/): canonical bounded-task procedure
- [Workflow Archetypes](/ai-coding-primer/learn/intermediate/workflow-archetypes/): common end-to-end workflows
- [Common Mistakes](/ai-coding-primer/learn/intermediate/common-mistakes/): failure modes to avoid
- [Troubleshooting](/ai-coding-primer/learn/intermediate/troubleshooting/): recovery steps
- [Research Overview](/ai-coding-primer/research/overview/): empirical studies and caveats

## Bibliography

- [METR uplift update](https://metr.org/blog/2026-02-24-uplift-update/)
- [Veracode GenAI Code Security Report](https://www.veracode.com/blog/genai-code-security-report/)
- [DORA 2025 report](https://dora.dev/research/2025/dora-report/)
