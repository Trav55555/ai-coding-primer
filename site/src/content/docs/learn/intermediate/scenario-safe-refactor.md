---
title: Scenario - Safe Refactor
description: A worked example of characterization tests and seam-by-seam structural change.
sidebar:
  order: 8
---

This example adapts the [Agentic Development Loop](/ai-coding-primer/learn/intermediate/agentic-development-loop/) to structural work. The task-specific lesson is to preserve observed behavior while changing one reviewable seam at a time.

## Situation and Outcome

A 250-line invoice function validates input, queries data, applies business rules, and formats a response. It works, but changes are risky.

The outcome is clearer structure under characterization tests, without feature work, contract changes, opportunistic bug fixes, or broad formatting churn.

## 1. Declare the Boundary

```text
This is a behavior-preserving refactor.

Target:
- src/billing/calculateInvoice.ts

Goal:
- Extract validation and response formatting so the calculation is easier to read.

Non-goals:
- no feature, API, schema, or behavior changes
- no opportunistic bug fixes
- no unrelated formatting churn
```

“Make this cleaner” gives the agent permission to mix design, behavior, and style. A named seam and explicit non-goals keep the change reviewable.

## 2. Characterize Current Behavior

Run the existing focused tests and typecheck. If coverage is weak, add characterization cases before structural edits:

- valid invoice with discount
- invalid line item
- tax-exempt customer
- current rounding behavior

Characterization tests do not claim that existing behavior is ideal. They establish the behavior this refactor must preserve.

## 3. Plan Mechanical Steps

Ask for three to five small steps. Each step should name the exact move, why it preserves behavior, files touched, and the check to run.

A useful plan looks like:

1. extract `validateLineItems()` without logic changes
2. extract `applyDiscount()` while preserving rounding
3. extract `formatInvoiceResponse()` while preserving output shape
4. rename local variables inside the seam

“Modernize the billing module,” “improve architecture,” and “fix edge cases” are not behavior-preserving steps.

## 4. Change One Seam at a Time

```text
Perform only step 1: extract validateLineItems().
Preserve behavior and public exports.
Do not change test expectations.
Run `npm test -- billing` and stop with a diff summary.
```

After each step:

1. inspect whether code moved more than it changed
2. compare the diff with the declared seam
3. re-run the same baseline
4. checkpoint only if the move is independently reviewable; name the move precisely, such as `refactor: extract invoice line item validation`

If the agent discovers a bug, record a follow-up instead of repairing it inside the refactor. Mixing a real behavior change with structural movement destroys the evidence that the refactor preserved behavior.

## If the Attempt Fails

| Symptom | Next move |
|---|---|
| The whole module is rewritten | Revert and request one extract-method step |
| Tests change to match new behavior | Restore the characterization boundary |
| A bug appears | Record a separate bug task; do not mix it into this diff |
| The diff is hard to review | Split by seam or helper extraction |
| The agent argues for a new architecture | Return to local readability and the approved target |

Use [When It's Not Working](/ai-coding-primer/learn/intermediate/troubleshooting/) when a smaller restart is required.

## Done Check

You should be able to show:

- the before-and-after seam
- the characterization evidence that stayed stable
- that public behavior and test expectations did not change
- that feature and bug work moved to follow-ups
- that each step is understandable without trusting the agent

**Evidence status:** smaller diffs reduce review and rework risk; characterization testing and seam-by-seam refactoring are practitioner-backed guidance rather than a universally validated sequence.

If the next task type is unclear, use [Workflow Archetypes](/ai-coding-primer/learn/intermediate/workflow-archetypes/) as the selector.
