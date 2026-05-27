---
title: Workflow Archetypes
description: Four durable AI coding workflows that hold up better than ad hoc prompting.
sidebar:
  order: 5
---

Most AI coding frustration is not about model quality. It is about using the wrong workflow for the job. These four patterns cover most of the work people actually do.

:::note[Evidence guide]
- `Research-supported principle` - [METR uplift update](https://metr.org/blog/2026-02-24-uplift-update/) and [Veracode GenAI Code Security Report](https://www.veracode.com/blog/genai-code-security-report/) support verification and review discipline.
- `Practitioner-backed workflow` - [Effective Patterns](/ai-coding-primer/learn/intermediate/effective-patterns/) and [Context Engineering](/ai-coding-primer/learn/intermediate/context-engineering/) show how those principles become practice.

The four archetypes on this page are an editorial simplification of recurring workflow patterns, not a formal taxonomy from one source.
:::

## 1. The Bug Hunt

Use this when the problem is already visible and you want the smallest safe fix.

1. Reproduce the bug with a failing test, command, or screenshot.
2. Give the agent the error, the expected behavior, and only the relevant files.
3. Ask for root-cause analysis before implementation.
4. Make the smallest fix that resolves the failure.
5. Re-run the verification signal.

A good prompt sounds like: "Here is the failing test and the relevant files. Explain the root cause, then fix it without changing unrelated behavior."

The usual mistake is throwing the whole repo at the model and hoping it guesses right.

Full worked example: [Scenario - Fix a Bug](/ai-coding-primer/learn/intermediate/scenario-bug-fix/)

## 2. The Feature Build

Use this when you are adding new behavior and the shape of the work is still easy to change.

1. Write a short spec with requirements, constraints, and acceptance criteria.
2. Ask the agent to read the spec and discuss the approach first.
3. Break execution into small slices: schema, core logic, tests, UI, docs.
4. Verify each slice before moving on.
5. Update the spec when scope changes.

A good opening prompt is: "Read `spec.md`. Tell me what questions you have and propose the implementation plan before writing code."

**Why it works:** it turns vague intent into a sequence the model can follow and you can check.

Full worked example: [Scenario - Add a Feature](/ai-coding-primer/learn/intermediate/scenario-feature-build/)

## 3. The Refactor

Use this when the code works, but living with it is getting expensive.

1. Capture current behavior with characterization tests.
2. Set explicit non-goals: no feature changes, no opportunistic fixes.
3. Refactor one seam at a time.
4. Re-run tests after every small step.
5. Stop when readability or maintainability improves enough.

A good prompt is: "This is a refactor. Preserve behavior. Do not change public interfaces unless the test or spec requires it."

The trap here is mixing bug fixing, cleanup, and feature work into one big edit.

Full worked example: [Scenario - Safe Refactor](/ai-coding-primer/learn/intermediate/scenario-safe-refactor/)

## 4. The Codebase Explorer

Use this when you do not understand the codebase well enough to touch it confidently.

1. Ask the main agent to map the relevant subsystem.
2. Use subagents to explore the database layer, API layer, and tests in parallel if needed.
3. Ask for file paths, patterns, and conventions, not broad summaries.
4. Write down the useful findings.
5. Only then move into a bug, feature, or refactor workflow.

A good prompt is: "Investigate how X works in this repo. Report back with entry points, key files, and patterns. Do not modify anything."

## Which Workflow Should You Start With?

| Situation | Start With |
|-----------|------------|
| A broken test or clear bug report | Bug Hunt |
| New endpoint, feature, or UI path | Feature Build |
| Messy code with stable behavior | Refactor |
| Unfamiliar system | Codebase Explorer |

## What These Workflows Have in Common

- verification matters more than confidence
- smaller steps are easier to review than giant prompts
- selective context works better than maximal context
- when the model gets stuck, a fresh session usually beats another long rescue attempt

## Next Steps

- [Effective Patterns](/ai-coding-primer/learn/intermediate/effective-patterns/)
- [Scenario - Fix a Bug](/ai-coding-primer/learn/intermediate/scenario-bug-fix/)
- [Scenario - Add a Feature](/ai-coding-primer/learn/intermediate/scenario-feature-build/)
- [Scenario - Safe Refactor](/ai-coding-primer/learn/intermediate/scenario-safe-refactor/)
- [When It's Not Working](/ai-coding-primer/learn/intermediate/troubleshooting/)
- [Agent Harness](/ai-coding-primer/learn/advanced/agent-harness/)

## Bibliography

- [METR uplift update](https://metr.org/blog/2026-02-24-uplift-update/)
- [Veracode GenAI Code Security Report](https://www.veracode.com/blog/genai-code-security-report/)
- [Anthropic: Effective harnesses for long-running agents](https://www.anthropic.com/engineering/effective-harnesses-for-long-running-agents/)
