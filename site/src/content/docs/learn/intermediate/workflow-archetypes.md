---
title: Workflow Archetypes
description: Four durable AI coding workflows that hold up better than ad hoc prompting.
sidebar:
  order: 5
---

Most AI coding frustration comes from using the wrong workflow for the job. These four cover many of the most common kinds of work.

:::note[Evidence status]
- `Research-backed` - [METR uplift update](https://metr.org/blog/2026-02-24-uplift-update/), [Veracode GenAI Code Security Report](https://www.veracode.com/blog/genai-code-security-report/)
- `Practitioner-backed` - [Effective Patterns](/ai-coding-primer/learn/intermediate/effective-patterns/), [Context Engineering](/ai-coding-primer/learn/intermediate/context-engineering/)
- `Synthesis`
:::

## 1. The Bug Hunt

Use this when the problem is already visible and you need a reliable fix.

1. Reproduce the bug with a failing test, command, or screenshot.
2. Give the agent the error, the expected behavior, and only the relevant files.
3. Ask for root-cause analysis before implementation.
4. Make the smallest fix that resolves the failure.
5. Re-run the verification signal.

**Best prompt shape:** "Here is the failing test and the relevant files. Explain the root cause, then fix it without changing unrelated behavior."

**Failure mode to avoid:** dumping the entire repo into context and saying "fix this bug."

Full worked example: [Scenario - Fix a Bug](/ai-coding-primer/learn/intermediate/scenario-bug-fix/)

**Evidence tags:** `Research-backed` ([METR uplift update](https://metr.org/blog/2026-02-24-uplift-update/), [Veracode GenAI Code Security Report](https://www.veracode.com/blog/genai-code-security-report/)); `Synthesis`.

## 2. The Feature Build

Use this when you are adding new behavior.

1. Write a short spec with requirements, constraints, and acceptance criteria.
2. Ask the agent to read the spec and discuss the approach first.
3. Break execution into small slices: schema, core logic, tests, UI, docs.
4. Verify each slice before moving on.
5. Update the spec when scope changes.

**Best prompt shape:** "Read `spec.md`. Tell me what questions you have and propose the implementation plan before writing code."

**Why it works:** it turns ambiguous intent into something the model can actually execute.

Full worked example: [Scenario - Add a Feature](/ai-coding-primer/learn/intermediate/scenario-feature-build/)

**Evidence tags:** `Practitioner-backed` ([Effective Patterns](/ai-coding-primer/learn/intermediate/effective-patterns/)); `Synthesis`.

## 3. The Refactor

Use this when behavior should stay the same but structure should improve.

1. Capture current behavior with characterization tests.
2. Set explicit non-goals: no feature changes, no opportunistic fixes.
3. Refactor one seam at a time.
4. Re-run tests after every small step.
5. Stop when readability or maintainability improves enough.

**Best prompt shape:** "This is a refactor. Preserve behavior. Do not change public interfaces unless the test or spec requires it."

**Failure mode to avoid:** mixing bug fixing, cleanup, and feature work into one large edit.

Full worked example: [Scenario - Safe Refactor](/ai-coding-primer/learn/intermediate/scenario-safe-refactor/)

**Evidence tags:** `Research-backed` ([METR uplift update](https://metr.org/blog/2026-02-24-uplift-update/)); `Practitioner-backed` ([Effective Patterns](/ai-coding-primer/learn/intermediate/effective-patterns/)).

## 4. The Codebase Explorer

Use this when you do not understand the codebase well enough to implement safely.

1. Ask the main agent to map the relevant subsystem.
2. Use subagents to explore the database layer, API layer, and tests in parallel if needed.
3. Ask for file paths, patterns, and conventions, not broad summaries.
4. Synthesize findings before making changes.
5. Move into a feature, bug, or refactor workflow only after the map is clear.

**Best prompt shape:** "Investigate how X works in this repo. Report back with entry points, key files, and patterns. Do not modify anything."

**Evidence tags:** `Research-backed` ([Veracode GenAI Code Security Report](https://www.veracode.com/blog/genai-code-security-report/)); `Practitioner-backed` ([Context Engineering](/ai-coding-primer/learn/intermediate/context-engineering/)).

## Which Workflow Should You Start With?

| Situation | Start With |
|-----------|------------|
| A broken test or clear bug report | Bug Hunt |
| New endpoint, feature, or UI path | Feature Build |
| Messy code with stable behavior | Refactor |
| Unfamiliar system | Codebase Explorer |

## Shared Rules Across All Four

- verification beats confidence
- smaller steps beat giant prompts
- context should be selective, not maximal
- fresh sessions beat long fix-it loops when the model gets stuck

## Sources and Provenance

**Empirical support:**
- [Productivity Research](/ai-coding-primer/research/productivity/)
- [Code Quality & Security](/ai-coding-primer/research/code-quality-security/)
- [Learning Impacts](/ai-coding-primer/research/learning-impacts/)

**Practitioner and architecture support:**
- [Context Engineering](/ai-coding-primer/learn/intermediate/context-engineering/)
- Mitchell Hashimoto's always-on agent workflow
- Anthropic and open-source coding-agent harness patterns

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
