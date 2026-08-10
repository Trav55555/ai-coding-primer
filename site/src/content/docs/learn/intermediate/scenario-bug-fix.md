---
title: Scenario - Fix a Bug
description: A worked workflow for fixing bugs with tight verification and safe scope.
sidebar:
  order: 6
---

Use this workflow when behavior is already broken and you need a reliable fix with minimal collateral changes. It is the bug-fix version of the [Agentic Development Loop](/ai-coding-primer/learn/intermediate/agentic-development-loop/).

## Outcome

Ship a small, verified patch that fixes the bug and preserves unrelated behavior.

## Example Situation

A TypeScript API endpoint returns `200` for invalid input. The expected behavior is `400` with a validation error. You have one failing integration test and a short stack trace.

The workflow is the same for frontend, backend, CLI, or data bugs: reproduce, localize, explain, patch, verify, review.

## Inputs You Need

- one reproducible failure signal: failing test, command output, screenshot, or exact manual reproduction steps
- expected behavior in one to three lines
- smallest relevant file set
- one nearby test file or example of similar behavior
- the command that proves the bug exists

## Step 1: Reproduce Before Asking for a Fix

Run the smallest command that demonstrates the bug.

```bash
npm test -- user-validation.test.ts
```

Capture only the useful output:

```text
Expected status 400, received 200
Route: POST /api/users
Payload: { email: "not-an-email" }
```

Do not begin with "fix this repo." Begin with a concrete failing signal.

## Step 2: Give a Focused Context Pack

Include:

- failing test or reproducible command output
- files at the failure boundary: route, handler, parser, service, query, serializer, or component
- one adjacent test file that shows local testing style
- relevant schema or validation definition

Exclude:

- unrelated modules
- broad architecture docs unless directly relevant
- stale conversation history that is not tied to this bug
- previous failed fix attempts unless they reveal a constraint

## Step 3: Ask for Root Cause Before Code

```text
Here is the failing signal and expected behavior.

Failing signal:
Expected status 400, received 200 for POST /api/users with payload:
{ email: "not-an-email" }

Expected behavior:
Invalid email should return 400 with a validation error. Valid payloads should still return 201.

Relevant files:
- src/routes/users.ts
- src/validation/userSchema.ts
- tests/user-validation.test.ts

First, reproduce the failure mentally from these files and explain the likely root cause with file-level evidence.
Do not edit yet.
```

Good answer shape:

- names the specific file and branch that mishandles the case
- distinguishes symptom from cause
- states the smallest likely fix
- names the verification command to run after editing

If the explanation is vague, stop and ask it to inspect narrower code. Vague diagnosis usually leads to broad speculative edits.

## Step 4: Implement the Smallest Fix

```text
Implement the smallest fix for that root cause.

Constraints:
- Do not change the public API shape except the invalid-input status code.
- Do not rewrite validation generally.
- Do not touch unrelated routes.

After edits:
1. run `npm test -- user-validation.test.ts`
2. run the nearest related test file if different
3. report the diff summary and test results
```

Watch for scope creep:

- new helper libraries
- broad refactors
- renamed functions outside the bug boundary
- changes to unrelated tests
- snapshot updates that hide behavior changes

## Step 5: Verify in Layers

1. Re-run the exact failing command.
2. Add or update a regression test if one does not already exist.
3. Run related tests for the touched module.
4. Run typecheck/lint/build used by that area.
5. Review the diff manually.

A good bug fix has a tiny causal story:

```text
The route called parse() but ignored parse.success. Invalid payloads fell through to createUser().
The patch returns 400 when parse.success is false. Added regression coverage for invalid email.
```

## If the Agent Gets Stuck

| Symptom | Recovery move |
|---|---|
| It keeps editing more files | Stop, reset context, restate the failing signal and allowed files |
| It cannot reproduce the bug | Ask for the exact command and environment assumptions before further edits |
| It changes the test to pass | Revert test change; state that the test encodes expected behavior |
| It proposes a broad refactor | Split refactor into a follow-up; fix the bug first |
| It loops on the same failed fix | Start a fresh session with current findings and failed attempts summarized in five bullets |

## Commit Checkpoint

Commit when:

- the regression test fails before the fix or clearly captures the bug
- the minimal fix passes the failing test
- related checks pass
- the diff is explainable in one paragraph

Suggested commit message:

```text
fix: reject invalid user email payloads
```

## Done Criteria

- original failure is resolved
- regression coverage exists or the original failing test is preserved
- related tests and checks pass
- no unrelated behavior changed
- patch is easy to explain in one paragraph

## Evidence Status

- **Research-backed principle:** executable feedback and verification loops improve reliability.
- **Practitioner-backed workflow:** root-cause-first prompts reduce churn versus immediate broad edits.

The exact wording and sequence in this scenario are editorial guidance based on those patterns and the canonical [Agentic Development Loop](/ai-coding-primer/learn/intermediate/agentic-development-loop/).

## Choose the Next Path

Return to the [Agentic Development Loop](/ai-coding-primer/learn/intermediate/agentic-development-loop/) for the general procedure. If the next task adds behavior rather than restoring expected behavior, use [Scenario - Add a Feature](/ai-coding-primer/learn/intermediate/scenario-feature-build/).
