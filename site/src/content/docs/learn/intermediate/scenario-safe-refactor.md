---
title: Scenario - Safe Refactor
description: A worked workflow for improving structure while preserving behavior.
sidebar:
  order: 8
---

Use this workflow when code quality is poor but functional behavior should remain stable. It is the refactor version of the [Agentic Development Loop](/ai-coding-primer/learn/intermediate/agentic-development-loop/).

## Outcome

Improve maintainability with behavior-preserving changes and low review risk.

## Example Situation

A service has one 250-line function that validates input, queries the database, applies business rules, and formats a response. It works, but every change is risky. You want to extract seams and improve names without changing behavior.

The workflow is not "make this cleaner." The workflow is characterize → choose seam → refactor one step → verify → repeat.

## Inputs You Need

- characterization tests for current behavior
- explicit non-goals: no feature work, no behavior changes, no opportunistic bug fixes
- target seam or module to improve
- examples of nearby clean code patterns
- baseline test command

## Step 1: Declare Non-Goals

```text
This is a behavior-preserving refactor.

Non-goals:
- no feature additions
- no public API changes
- no schema changes
- no opportunistic bug fixes
- no broad formatting-only churn outside touched code

Target seam:
- src/billing/calculateInvoice.ts

Goal:
Extract validation and formatting helpers so the core calculation is easier to read.
```

This matters because AI agents often "improve" behavior while refactoring. That turns a reviewable cleanup into an unreviewable mixed change.

## Step 2: Establish a Baseline

Run existing tests first.

```bash
npm test -- billing
npm run typecheck
```

If coverage is weak, add characterization tests before refactoring.

```text
Before refactoring, inspect current behavior and propose characterization tests for:
- valid invoice with discount
- invalid line item
- tax-exempt customer
- rounding behavior

Do not change implementation yet.
```

Characterization tests do not prove the behavior is ideal. They prove the refactor preserves the behavior you currently have.

## Step 3: Ask for a Refactor Plan With Seams

```text
Inspect `src/billing/calculateInvoice.ts` and nearby tests.

Propose a behavior-preserving refactor plan with 3-5 small steps.
For each step, list:
- exact change
- why it is behavior-preserving
- files touched
- test command to run

Do not edit yet.
```

A good plan says:

1. extract `validateLineItems()` with no logic changes
2. extract `applyDiscount()` preserving current rounding
3. extract `formatInvoiceResponse()` preserving output shape
4. rename local variables for clarity

A bad plan says:

- "modernize billing module"
- "improve architecture"
- "fix edge cases"

Those may be useful later, but they are not a safe refactor plan.

## Step 4: Execute One Mechanical Step

```text
Perform only step 1: extract `validateLineItems()`.

Rules:
- preserve behavior exactly
- do not change public exports except adding the helper if necessary
- do not modify tests unless the move requires import path updates
- run `npm test -- billing` afterward
- stop after this step and report the diff summary
```

After the step:

- inspect the diff
- check that code moved more than it changed
- confirm tests passed
- decide whether to continue

## Step 5: Repeat With Diff Discipline

For each next step, keep the prompt narrow:

```text
Perform only step 2 from the approved plan.
Preserve behavior exactly.
Run the same baseline tests afterward.
Stop after reporting results.
```

If the agent discovers a real bug during refactor, do not let it fix it inline. Capture it as a follow-up.

```text
Potential existing bug discovered: tax-exempt customers with discounts appear to round differently.
Do not fix in this refactor. Add a TODO or create a follow-up issue after the behavior-preserving change is merged.
```

## Verification Loop

1. Establish baseline tests.
2. Add characterization tests if coverage is weak.
3. Apply one structural change.
4. Re-run tests.
5. Inspect diff for behavior changes.
6. Commit or checkpoint.
7. Repeat until the target seam is cleaner.

## Review Checklist

Before merge, ask:

- Did public behavior change?
- Did test expectations change? If yes, why?
- Are there unrelated formatting changes?
- Are renamed symbols local to the seam?
- Can the reviewer understand the refactor step-by-step?
- Were bug fixes or feature changes split into follow-ups?

## If the Agent Gets Stuck

| Symptom | Recovery move |
|---|---|
| It rewrites the whole module | Revert and ask for one extract-method step only |
| It changes tests to match new behavior | Revert test changes and restate preservation rule |
| It finds a bug | Log follow-up; do not mix with refactor |
| The diff is too big to review | Split by seam or helper extraction |
| It keeps arguing for architecture changes | Ask for local readability improvements only |

## Commit Checkpoints

Use commits that preserve reviewability:

```text
refactor: extract invoice line item validation
refactor: isolate invoice discount calculation
refactor: separate invoice response formatting
```

Avoid:

```text
refactor: improve billing
```

The reviewer should know exactly what behavior-preserving move happened.

## Done Criteria

- behavior remains unchanged under tests
- characterization tests cover important current behavior
- complexity or readability measurably improves
- diff remains focused on the declared seam
- feature work and bug fixes are separated clearly
- reviewer can follow the sequence without trusting the agent

## Evidence Status

- **Research-supported principle:** review burden and rework costs increase when change scope balloons.
- **Practitioner-backed workflow:** characterization tests and seam-by-seam refactoring keep AI edits controllable.

This concrete gating workflow is editorial guidance based on those patterns and the canonical [Agentic Development Loop](/ai-coding-primer/learn/intermediate/agentic-development-loop/).

## Next Scenario

- [Agentic Development Loop](/ai-coding-primer/learn/intermediate/agentic-development-loop/)
- [Workflow Archetypes](/ai-coding-primer/learn/intermediate/workflow-archetypes/)
