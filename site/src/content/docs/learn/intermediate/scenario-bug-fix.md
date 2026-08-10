---
title: Scenario - Fix a Bug
description: A worked example of diagnosis, minimal repair, and regression evidence.
sidebar:
  order: 6
---

This example adapts the [Agentic Development Loop](/ai-coding-primer/learn/intermediate/agentic-development-loop/) to broken behavior. The task-specific lesson is simple: establish the failure, explain its cause, and make the smallest patch that changes that causal story.

## Situation and Outcome

A TypeScript endpoint returns `200` for invalid input. It should return `400` with a validation error while valid requests continue to return `201`.

The outcome is a focused patch with regression evidence and no unrelated behavior change.

## 1. Establish the Failure

Run the narrowest reproducible signal before asking for a fix:

```bash
npm test -- user-validation.test.ts
```

Preserve the useful facts:

```text
Expected status 400, received 200
Route: POST /api/users
Payload: { email: "not-an-email" }
```

Supply the expected behavior, failure output, boundary files, one nearby test example, and the command. Exclude unrelated modules, broad architecture tours, and failed attempts that reveal no constraint.

## 2. Ask for a Causal Explanation

```text
Expected behavior:
Invalid email returns 400 with a validation error. Valid payloads still return 201.

Observed failure:
POST /api/users returns 200 for { email: "not-an-email" }.

Relevant files:
- src/routes/users.ts
- src/validation/userSchema.ts
- tests/user-validation.test.ts

Explain the likely root cause with file-level evidence.
Name the smallest likely fix and the verification command.
Do not edit yet.
```

A useful diagnosis names the branch or boundary that mishandles the case, distinguishes cause from symptom, and predicts what evidence should change. If it remains vague, inspect a smaller code path before editing.

## 3. Apply the Smallest Repair

```text
Implement only the fix for the identified root cause.

Constraints:
- Preserve the public API except for the invalid-input status.
- Do not rewrite validation generally.
- Do not touch unrelated routes or weaken tests.

Run the focused test, the nearest related test, and typecheck.
Report changed files, results, and remaining risk.
```

Reject new dependencies, broad refactors, unrelated renames, and snapshot changes that hide behavior differences. Put worthwhile cleanup in a follow-up task. If you checkpoint the repair, name the behavior precisely—for example, `fix: reject invalid user email payloads`.

## 4. Review the Evidence

A strong result has a short causal account:

```text
The route called parse() but ignored parse.success, so invalid payloads reached createUser().
The patch returns 400 when parse.success is false. The regression test now covers invalid email.
```

Check that the original signal changed for the expected reason, valid behavior still passes, related checks pass, and the diff is explainable without trusting the agent's summary.

## If the Attempt Fails

| Symptom | Next move |
|---|---|
| The failure cannot be reproduced | Record the exact command, environment, and missing assumption before more edits |
| More files keep changing | Reset and restate the failing signal plus allowed files |
| The test changes to fit the patch | Restore the requirement and revert the weakened assertion |
| The same repair fails again | Carry confirmed facts and failed hypotheses into a fresh, smaller task |

Use the full reset procedure in [When It's Not Working](/ai-coding-primer/learn/intermediate/troubleshooting/).

## Done Check

You should be able to answer:

- What exact behavior was broken?
- Which branch or boundary caused it?
- Which regression signal fails without the patch?
- What unrelated behavior proves the scope stayed narrow?

**Evidence status:** executable feedback is research-backed as a reliability control; the root-cause-first prompt shape is practitioner-backed editorial guidance, not a universally validated sequence.

If the next task adds behavior rather than restoring it, continue with [Scenario - Add a Feature](/ai-coding-primer/learn/intermediate/scenario-feature-build/).
