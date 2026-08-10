---
title: Scenario - Add a Feature
description: A worked workflow for shipping new behavior with spec-first prompts and staged verification.
sidebar:
  order: 7
---

Use this workflow when you are adding new behavior and want predictable delivery instead of one-shot generation. It is the feature-specific version of the [Agentic Development Loop](/ai-coding-primer/learn/intermediate/agentic-development-loop/).

## Outcome

Ship new functionality that meets explicit acceptance criteria and passes staged verification.

## Example Situation

You are adding email notification preferences to an existing app. Users should be able to opt in or out of product updates from the settings page. The feature touches schema, API, UI, tests, and docs.

The mistake to avoid is asking for the whole feature at once. The safe workflow is spec → consequential decisions → thin slice or foundation step → verification gates.

## Inputs You Need

- a short spec (`spec.md` or equivalent)
- acceptance criteria and non-goals
- constraints: performance, privacy, compatibility, migration rules
- examples of nearby patterns in the codebase
- commands for tests, typecheck, lint, and build

## Step 1: Write the Smallest Useful Spec

```md
# Email notification preferences

## Goal
Users can opt in or out of product update emails from settings.

## Acceptance criteria
- Settings page shows a product updates toggle.
- Current preference loads from the API.
- Saving persists the preference.
- Invalid preference values are rejected.
- Existing users default to opted out.

## Non-goals
- No marketing campaign tooling.
- No email delivery implementation.
- No redesign of the settings page.

## Constraints
- Preserve existing settings API shape where possible.
- Add migration safely for existing users.
- Include tests for API validation and UI save behavior.
```

This spec is not bureaucracy. It prevents the agent from inventing scope.

## Step 2: Ask for Requirements Restatement and Questions

```text
Read `spec.md` and restate:
1. requirements
2. constraints
3. non-goals
4. open questions

Do not implement yet.
Flag any ambiguity that could change database schema, API shape, or user-visible behavior.
```

Answer the open questions before implementation. If you skip this step, the model will answer them for you in code.

## Step 3: Ask for a Slice Plan

```text
Propose an implementation plan in small verifiable slices.

Default preference:
- choose the smallest end-to-end behavior that proves the design, such as one setting loading, saving, and reloading through the real path.

Use a foundation-first slice only if a migration, public contract, permission rule, or other hard-to-reverse decision must be reviewed before behavior can safely use it.

For each slice, list:
- user-visible or system behavior proved by the slice
- files likely touched
- validation command
- risk or rollback note
- explicit stop point

Do not edit yet.
```

Good plans name concrete files, checks, and the behavior each slice proves. Weak plans say "update backend" or "add frontend" without naming boundaries or evidence.

## Step 4: Implement One Slice at a Time

### Slice 1: One End-to-End Preference

```text
Implement only slice 1: one end-to-end product-updates preference.

Behavior to prove:
- A signed-in user can load the current product-updates preference.
- The user can change it from the existing settings page.
- After save and reload, the chosen value remains.

Constraints:
- Use existing settings endpoint and form patterns where possible.
- Do not add email delivery, campaign tooling, or notification categories.
- Do not change unrelated settings fields.

After edits, run the test command from the plan and `npm run typecheck`.
Stop after this slice and report changed files, assumptions, and results.
```

Review the diff before continuing. The first slice may still touch storage, server logic, and UI, but only enough to prove one real behavior.

### Foundation-first exception

If the plan identifies an irreversible migration or public contract decision, split that foundation out first:

```text
Implement only the approved foundation step: add the notification preference storage default.

Constraints:
- Include migration/default handling for existing users.
- Add the migration or model test from the plan.
- Do not expose UI or API behavior yet.

Stop after the migration check and report rollback assumptions.
```

Then return to the smallest end-to-end behavior slice.

## Step 5: Final Integration Pass

```text
Now perform a final integration review.

Check:
- every acceptance criterion in `spec.md`
- non-goals were not touched
- tests cover persistence, API validation, and UI save behavior
- no unrelated files changed
- docs or release notes are updated if needed

Run final checks and produce a handoff summary with changed files and verification results.
```

## Verification Gates

| Gate | What to check | When |
|---|---|---|
| Spec gate | requirements, non-goals, open questions | before code |
| Plan gate | files, slices, commands, risks | before code |
| Slice gate | behavior proved, local tests, focused diff, stop point honored | after each slice |
| Integration gate | acceptance criteria and full checks | before handoff |
| Review gate | human diff review and rollback path | before merge |

## If the Agent Gets Stuck

| Symptom | Recovery move |
|---|---|
| It starts building extra features | Re-anchor on non-goals and revert unrelated files |
| It changes architecture too early | Ask for the smallest slice that fits existing patterns |
| It cannot decide schema/API shape | Stop and write the decision explicitly into the spec |
| Tests are added only after implementation | Ask for acceptance tests before continuing to next slice |
| The conversation gets noisy | Compact into `STATE.md`: decisions, files changed, checks passed, remaining slices |

## Commit Checkpoints

For larger features, prefer small commits:

1. `test:` or `feat:` persistence and defaults
2. `feat:` API/core behavior
3. `feat:` UI integration
4. `docs:` release note or usage docs if needed

Each commit should pass its relevant checks. Do not wait until the entire feature is done to discover the first slice was wrong.

## Done Criteria

- all acceptance criteria are satisfied
- non-goals remain untouched
- checks pass at slice level and final integration level
- spec and implementation are aligned
- changed files match the approved plan or deviations are explained
- rollback path is clear

## Evidence Status

- **Research-backed principle:** verification and human review loops improve downstream quality.
- **Practitioner-backed workflow:** spec-first implementation reduces ambiguity and drift on larger tasks.

This slice sequence and gating pattern are editorial guidance based on those patterns and the canonical [Agentic Development Loop](/ai-coding-primer/learn/intermediate/agentic-development-loop/).

## Choose the Next Path

Return to the [Agentic Development Loop](/ai-coding-primer/learn/intermediate/agentic-development-loop/) for the general procedure. If the next task should change structure without changing behavior, use [Scenario - Safe Refactor](/ai-coding-primer/learn/intermediate/scenario-safe-refactor/).
