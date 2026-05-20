---
title: Scenario - Add a Feature
description: A worked workflow for shipping new behavior with spec-first prompts and staged verification.
sidebar:
  order: 7
---

Use this workflow when you are adding new behavior and want predictable delivery instead of one-shot generation.

## Outcome

Ship new functionality that meets explicit acceptance criteria and passes staged verification.

## Example Situation

You are adding email notification preferences to an existing app. Users should be able to opt in or out of product updates from the settings page. The feature touches schema, API, UI, tests, and docs.

The mistake to avoid is asking for the whole feature at once. The safe workflow is spec → plan → slices → verification gates.

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

Use this slice structure unless the codebase suggests a better one:
1. data/schema or persistence
2. API/core logic
3. tests for core behavior
4. UI integration
5. docs or release notes

For each slice, list:
- files likely touched
- validation command
- risk or rollback note

Do not edit yet.
```

Good plans name concrete files and checks. Weak plans say "update backend" or "add frontend" without naming boundaries.

## Step 4: Implement One Slice at a Time

### Slice 1: Persistence

```text
Implement only slice 1: persistence for notification preference.

Constraints:
- Do not touch UI yet.
- Do not change unrelated settings fields.
- Add migration or default handling for existing users.

After edits, run the persistence/API test command from the plan and report results.
Stop after this slice.
```

Review the diff before continuing. Then repeat for the next slice.

### Slice 2: API/Core Logic

```text
Implement only slice 2: API/core logic.

Use the existing settings endpoint patterns.
Reject invalid preference values.
Add or update tests that prove load and save behavior.
Run the relevant API tests and typecheck.
Stop after this slice.
```

### Slice 3: UI Integration

```text
Implement only slice 3: settings UI integration.

Use existing form/toggle patterns in the settings page.
Show save success and failure states consistent with nearby controls.
Run UI tests or build checks listed in the plan.
Stop after this slice.
```

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
| Slice gate | local tests and focused diff | after each slice |
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

- **Research-supported principle:** verification and human review loops improve downstream quality.
- **Practitioner-backed workflow:** spec-first implementation reduces ambiguity and drift on larger tasks.

This slice sequence and gating pattern are editorial guidance based on those patterns.

## Next Scenario

- [Scenario - Safe Refactor](/ai-coding-primer/learn/intermediate/scenario-safe-refactor/)
