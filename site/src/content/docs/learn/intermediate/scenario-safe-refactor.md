---
title: Scenario - Safe Refactor
description: A worked workflow for improving structure while preserving behavior.
sidebar:
  order: 8
---

Use this workflow when code quality is poor but functional behavior should remain stable.

## Outcome

Improve maintainability with behavior-preserving changes and low review risk.

## Inputs You Need

- characterization tests for current behavior
- explicit non-goals (no feature work, no scope expansion)
- target seams or modules to refactor

## Prompt Shape

```
This is a refactor. Preserve behavior.

Non-goals:
- no feature additions
- no public API changes unless required by tests/spec

Target seams:
- path/a
- path/b

Refactor in small steps.
After each step, run tests and report pass/fail.
Stop if tests regress or scope expands.
```

## Context Pack Strategy

Include:
- current tests covering behavior
- modules with duplication, complexity, or naming debt
- style and architecture patterns from nearby stable code

Exclude:
- unrelated bug backlogs
- feature requests not part of refactor intent
- broad repository context not needed for this seam

## Verification Loop

1. Establish baseline tests.
2. Apply one structural change.
3. Re-run tests.
4. Inspect diff for unintended behavior changes.
5. Repeat until target seam is materially cleaner.

## Common Failure Mode

**Failure mode:** blending refactor with feature work and bug fixes creates unreviewable diffs.

**Recovery move:** split the work into separate tracks; finish behavior-preserving refactor first, then open follow-up feature/bug tasks.

## Done Criteria

- behavior remains unchanged under tests
- complexity or readability measurably improves
- diff remains focused on the declared seam
- follow-up work is separated clearly

## Evidence Status

- **Research-backed:** review burden and rework costs increase when change scope balloons.
- **Practitioner-backed:** characterization tests and seam-by-seam refactoring keep AI edits controllable.
- **Synthesis:** this concrete gating workflow.

## Next Scenario

- [Workflow Archetypes](/ai-coding-primer/learn/intermediate/workflow-archetypes/)
