---
title: Scenario - Add a Feature
description: A worked workflow for shipping new behavior with spec-first prompts and staged verification.
sidebar:
  order: 7
---

Use this workflow when you are adding new behavior and want predictable delivery instead of one-shot generation.

## Outcome

Ship new functionality that meets explicit acceptance criteria and passes staged verification.

## Inputs You Need

- a short spec (`spec.md` or equivalent)
- acceptance criteria and non-goals
- constraints (performance, privacy, compatibility)

## Prompt Shape

```
Read `spec.md` and restate requirements, constraints, and open questions.
Propose an implementation plan before coding.

Implement in slices:
1) data/schema
2) core logic
3) tests
4) integration/UI
5) docs

After each slice, run relevant checks and report results.
Do not proceed to the next slice until current checks pass.
```

## Context Pack Strategy

Include:
- spec with acceptance criteria
- files that define existing patterns for the feature area
- integration boundaries (API contracts, component interfaces)

Exclude:
- low-relevance files not touched by the plan
- broad tool or model comparisons
- old prompt drafts that conflict with the current spec

## Verification Loop

1. Confirm requirements and unresolved questions first.
2. Implement one slice at a time.
3. Run checks per slice (tests, typecheck, lint, build as needed).
4. Update spec or plan when scope changes.
5. Run final end-to-end checks before handoff.

## Common Failure Mode

**Failure mode:** skipping planning causes hidden assumptions and rework late in the task.

**Recovery move:** stop implementation, update spec and acceptance criteria, then resume with a fresh slice plan.

## Done Criteria

- all acceptance criteria are satisfied
- non-goals remain untouched
- checks pass at slice level and final integration level
- spec and implementation are aligned

## Evidence Status

- **Research-backed:** verification and human review loops improve downstream quality.
- **Practitioner-backed:** spec-first workflow reduces ambiguity and drift on larger tasks.

This slice sequence and gating pattern are editorial guidance based on those patterns.

## Next Scenario

- [Scenario - Safe Refactor](/ai-coding-primer/learn/intermediate/scenario-safe-refactor/)
