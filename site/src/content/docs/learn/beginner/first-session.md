---
title: Your First Session
description: Run one bounded AI-assisted task with explicit scope, checks, and a stop condition.
sidebar:
  order: 5
---

Use your first session to test the workflow, not the model's maximum capability.

The exercise changes one test file. It teaches the same boundary-and-verification habits used for larger agentic work without asking you to trust unfamiliar production code.

## Before You Start

Complete the [Quick Security Checklist](/ai-coding-primer/security/checklist/) and [Setup Checklist](/ai-coding-primer/learn/beginner/setup-checklist/).

You need:

- a repository with version control
- an existing pure function with nearby tests
- a clean or understood working tree
- the narrowest command that runs those tests
- no production credentials or external actions

If the project has no tests, choose a small documentation correction with a build or preview check instead. Do not invent a test framework for this exercise.

## 1. Establish the Baseline

Run the existing targeted test before asking the agent to edit anything.

```text
Baseline:
- `npm test -- parser.test.ts` passes.
- Working tree is clean.
- No credentials or network access are required.
```

Use the repository's real command. The example command is only a shape.

## 2. Ask the Agent to Inspect

Ask for a short report before edits:

```text
Read the existing parser function and its test file.

Report:
1. the behavior the current tests establish
2. one plausible edge case not covered
3. the exact test file you would change
4. the narrowest command that verifies it

Do not edit yet. Stop if expected behavior is unclear.
```

Check the report against the code. If the agent names the wrong file, invents behavior, or cannot find a verification command, correct the context or choose another task.

## 3. Give One Bounded Task

After you approve the edge case, use a prompt with explicit boundaries:

```text
Task:
Add one test for the approved edge case.

Allowed scope:
- Edit only `tests/parser.test.ts`.

Non-goals:
- Do not change production code.
- Do not refactor unrelated tests.
- Do not add or update dependencies.

Acceptance evidence:
- Run `npm test -- parser.test.ts`.
- Show the final diff and command result.

Stop condition:
If the expected behavior is ambiguous, the test exposes a production bug,
or the command fails for an unrelated reason, stop and report what you found.
Do not fix production code in this task.
```

Replace the path and command with the values from your repository.

## 4. Review the Evidence

Do not accept “done” as evidence. Check:

1. **Scope:** Did only the allowed file change?
2. **Test value:** Does the new case assert meaningful behavior rather than copy an existing case?
3. **Readability:** Does it follow nearby naming and setup patterns?
4. **Command:** Did the requested test run, and did it pass for the stated reason?
5. **Diff:** Is every changed line required by the task?

If the agent changed production code or dependencies, reject the patch or restore the baseline.

## 5. Handle Each Outcome

### The new test passes

Review it and keep the change only if it adds useful coverage. A passing test can still be redundant or incorrectly asserted.

### The new test fails because behavior is wrong

The stop condition worked. Save the failing command and expected behavior, then start a separate bug-fix task. Do not silently expand this test-only task.

### The behavior is ambiguous

Ask a maintainer, inspect documentation, or choose a better-understood function. Do not let the agent choose product behavior merely to make a test pass.

### The agent left scope

Revert the out-of-scope changes and restate the allowed file. If it repeats the drift, end the session.

## 6. Record the Result

Keep a short record:

```text
Changed:
- Added one parser edge-case test in `tests/parser.test.ts`.

Checked:
- `npm test -- parser.test.ts` passed.
- Final diff contains only the approved test.

Follow-up:
- None, or link the separate bug report.
```

## What You Practiced

This small task exercised the durable parts of agentic engineering:

- establish a baseline
- inspect before editing
- define behavior and non-goals
- bound files and permissions
- require observable evidence
- stop rather than expand scope
- review the diff yourself

The [Agentic Development Loop](/ai-coding-primer/learn/intermediate/agentic-development-loop/) applies the same controls to bug fixes, features, refactors, migrations, and longer work.

## Next Steps

1. Read the [Agentic Development Loop →](/ai-coding-primer/learn/intermediate/agentic-development-loop/) to see how this exercise maps to the complete procedure.
2. Apply it to a real failure with [Scenario - Fix a Bug →](/ai-coding-primer/learn/intermediate/scenario-bug-fix/).
3. Use [Learning with AI](/ai-coding-primer/learn/intermediate/learning-with-ai/) when practicing unfamiliar concepts so assistance does not replace comprehension.
