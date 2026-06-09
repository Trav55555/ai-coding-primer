---
title: Workflow Archetypes
description: Four AI coding workflows for common engineering tasks.
sidebar:
  order: 5
---

AI coding workflows should match the task type. A bug fix, a feature build, a refactor, and a codebase exploration need different context and verification.

The four patterns below cover common AI-assisted engineering work.

:::note[Evidence guide]
- `Research-supported principle` - [METR uplift update](https://metr.org/blog/2026-02-24-uplift-update/) and [Veracode GenAI Code Security Report](https://www.veracode.com/blog/genai-code-security-report/) support verification and review discipline.
- `Practitioner-backed workflow` - [Effective Patterns](/ai-coding-primer/learn/intermediate/effective-patterns/) and [Context Engineering](/ai-coding-primer/learn/intermediate/context-engineering/) show how those principles become practice.

The four archetypes on this page are an editorial simplification of recurring workflow patterns, not a formal taxonomy from one source.
:::

## 1. Bug Hunt

Use this when the problem is already visible and you need the smallest safe fix.

1. Reproduce the bug with a failing test, command, or screenshot.
2. Give the agent the error, expected behavior, and relevant files.
3. Ask for root-cause analysis before implementation.
4. Make the smallest fix that resolves the failure.
5. Re-run the original verification signal.

Prompt shape:

```text
Here is the failing test and the relevant files.
Explain the root cause, then fix it without changing unrelated behavior.
```

Common failure mode: asking the model to infer the relevant context from the whole repository.

Full worked example: [Scenario - Fix a Bug](/ai-coding-primer/learn/intermediate/scenario-bug-fix/)

## 2. Feature Build

Use this when you are adding new behavior and the shape of the work still needs decisions.

1. Write a short spec with requirements, constraints, and acceptance criteria.
2. Ask the agent to read the spec and identify open questions.
3. Break execution into small slices: schema, core logic, tests, UI, docs.
4. Verify each slice before moving on.
5. Update the spec when scope changes.

Prompt shape:

```text
Read spec.md. Tell me what questions you have and propose the implementation plan before writing code.
```

Verification logic: the spec converts vague intent into criteria that can be checked slice by slice.

Full worked example: [Scenario - Add a Feature](/ai-coding-primer/learn/intermediate/scenario-feature-build/)

## 3. Refactor

Use this when the code works, but the structure is making future changes harder.

1. Capture current behavior with characterization tests.
2. Set explicit non-goals: no feature changes, no opportunistic fixes.
3. Refactor one seam at a time.
4. Re-run tests after every small step.
5. Stop when readability or maintainability has improved enough for the current goal.

Prompt shape:

```text
This is a refactor. Preserve behavior. Do not change public interfaces unless the test or spec requires it.
```

Common failure mode: mixing bug fixing, cleanup, and feature work into one edit.

Full worked example: [Scenario - Safe Refactor](/ai-coding-primer/learn/intermediate/scenario-safe-refactor/)

## 4. Codebase Explorer

Use this when you do not understand the codebase well enough to modify it.

1. Ask the main agent to map the relevant subsystem.
2. Use subagents to explore the database layer, API layer, and tests in parallel if needed.
3. Ask for file paths, patterns, and conventions instead of broad summaries.
4. Write down the useful findings.
5. Then move into a bug, feature, or refactor workflow.

Prompt shape:

```text
Investigate how X works in this repo.
Report back with entry points, key files, and patterns.
Do not modify anything.
```

## Which Workflow Should You Start With?

| Situation | Start with |
|---|---|
| Broken test or clear bug report | Bug Hunt |
| New endpoint, feature, or UI path | Feature Build |
| Messy code with stable behavior | Refactor |
| Unfamiliar system | Codebase Explorer |

## Shared Requirements

All four workflows need:

- an explicit verification signal
- small enough changes to review
- context limited to the current task
- a recovery path when the model gets stuck
- human review before shipping

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
