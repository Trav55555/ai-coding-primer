---
title: Scenario - Add a Feature
description: A worked example of specification, consequential decisions, and thin-slice delivery.
sidebar:
  order: 7
---

This example adapts the [Agentic Development Loop](/ai-coding-primer/learn/intermediate/agentic-development-loop/) to new behavior. The task-specific lesson is to settle expensive choices, then prove the design with the smallest useful end-to-end slice.

## Situation and Outcome

Users need to opt in or out of product-update emails from an existing settings page. The change may touch storage, API behavior, UI, tests, and documentation.

The outcome is one working preference that meets explicit acceptance criteria without expanding into a notification platform.

## 1. Write the Smallest Useful Spec

```md
# Email notification preferences

## Acceptance criteria
- Settings shows a product-updates toggle.
- The current preference loads from the API.
- Saving persists the preference.
- Invalid values are rejected.
- Existing users default to opted out.

## Non-goals
- No campaign tooling or email delivery.
- No additional notification categories.
- No settings-page redesign.

## Constraints
- Preserve the existing settings API where possible.
- Handle migration safely for existing users.
- Test API validation and UI save behavior.
```

Ask the agent to restate requirements, constraints, non-goals, and open questions. Resolve anything that could change schema, public API, permissions, migration, or user-visible behavior before code makes the choice for you.

## 2. Choose the First Proof

Default to the smallest end-to-end behavior: one signed-in user can load, change, save, and reload the product-updates preference through the real path.

Ask the plan to name:

- behavior proved by each slice
- likely files
- validation command
- risk or rollback note
- explicit stop point

A plan such as “update backend, then frontend” names layers but proves no behavior.

### Foundation-first exception

Start with a foundation only when an irreversible migration, public contract, or permission boundary must be reviewed before behavior can safely depend on it. For example, approve and test the storage default and rollback assumptions before exposing it through the API. Then return to the smallest end-to-end slice.

## 3. Implement One Slice

```text
Implement only one product-updates preference.

Prove that a signed-in user can load it, change it on the existing settings page,
and see the value persist after reload.

Use existing endpoint and form patterns.
Do not add delivery, campaigns, categories, or unrelated settings changes.
Run the slice tests and typecheck, then stop.
Report changed files, assumptions, results, and rollback risk.
```

Review the slice before continuing. Touching storage, server logic, and UI is acceptable when each change is necessary to prove this one behavior.

## 4. Integrate Against the Spec

After approved slices are complete, check every acceptance criterion and non-goal. Run focused checks first, then the broader checks for affected areas. Review human-owned decisions, unexpected files, documentation needs, and rollback—not only green tests.

The gates are:

1. **Spec:** requirements, non-goals, and open questions are explicit.
2. **Plan:** each slice names behavior, files, evidence, and a stop point.
3. **Slice:** focused checks pass and the diff proves only the intended behavior.
4. **Integration:** all acceptance criteria and affected-area checks pass.
5. **Review:** a human accepts assumptions, contracts, permissions, and rollback.

## If the Attempt Fails

| Symptom | Next move |
|---|---|
| Extra features appear | Re-anchor on non-goals and revert unrelated files |
| Architecture changes before behavior is proved | Ask for the smallest slice that fits existing patterns |
| Schema or API shape remains ambiguous | Stop and record the decision in the spec |
| Tests appear only after implementation | Add acceptance evidence before starting the next slice |
| Context becomes noisy | Save decisions, files, checks, and the next slice; restart from that state |

Use [When It's Not Working](/ai-coding-primer/learn/intermediate/troubleshooting/) when evidence stops improving. If checkpointing, align commits with independently verified slices rather than waiting until the entire feature is complete.

## Done Check

You should be able to show:

- which slice first proved the design
- how each acceptance criterion was verified
- that non-goals remain untouched
- where the implementation deviated from the plan and why
- how the change can be reversed

**Evidence status:** verification and human review are research-backed controls; this spec-and-slice teaching sequence is practitioner-backed editorial guidance.

For structural work that should preserve behavior, continue with [Scenario - Safe Refactor](/ai-coding-primer/learn/intermediate/scenario-safe-refactor/).
