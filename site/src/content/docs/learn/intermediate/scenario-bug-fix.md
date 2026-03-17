---
title: Scenario - Fix a Bug
description: A worked workflow for fixing bugs with tight verification and safe scope.
sidebar:
  order: 6
---

Use this workflow when behavior is already broken and you need a reliable fix with minimal collateral changes.

## Outcome

Ship a small, verified patch that fixes the bug and preserves unrelated behavior.

## Inputs You Need

- one reproducible failure signal (failing test, command output, or screenshot)
- expected behavior in one to three lines
- smallest relevant file set

## Prompt Shape

```
Here is the failing signal and expected behavior.

Failing signal:
<paste test failure, command output, or screenshot notes>

Expected behavior:
<one to three lines>

Relevant files:
- path/a
- path/b

First: explain likely root cause with file-level evidence.
Then: implement the smallest fix.
Do not change unrelated behavior.
After edits: run tests/lint/typecheck for this area and report results.
```

## Context Pack Strategy

Include:
- failing test or reproducible command output
- files at the failure boundary (handler, service, parser, query, serializer)
- one adjacent test file

Exclude:
- unrelated modules
- broad architecture docs unless directly relevant
- stale conversation history that is not tied to this bug

## Verification Loop

1. Reproduce the failure before any edits.
2. Apply the smallest plausible fix.
3. Re-run the exact failing signal.
4. Run related tests.
5. Run project type/lint checks used by that module.
6. Review diff for scope creep.

## Common Failure Mode

**Failure mode:** broad "fix it" prompts push the model into speculative multi-file edits.

**Recovery move:** reset to a fresh session, restate expected behavior and relevant files only, require root-cause explanation before code changes.

## Done Criteria

- original failure is resolved
- related tests and checks pass
- no unrelated behavior changed
- patch is easy to explain in one paragraph

## Evidence Status

- **Research-backed:** explicit verification loops and executable feedback improve reliability.
- **Practitioner-backed:** root-cause-first prompts reduce churn versus immediate broad edits.
- **Synthesis:** exact wording and sequence in this scenario.

## Next Scenario

- [Scenario - Add a Feature](/ai-coding-primer/learn/intermediate/scenario-feature-build/)
