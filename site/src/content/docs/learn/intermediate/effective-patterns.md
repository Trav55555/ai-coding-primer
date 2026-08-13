---
title: Effective Patterns
description: A compact tactics reference for the Agentic Development Loop.
sidebar:
  order: 4
---

Use these prevention signals and tactics inside the [Agentic Development Loop](/ai-coding-primer/learn/intermediate/agentic-development-loop/). This is a lookup page, not another task sequence. If a session is already producing repeated errors, broad diffs, or weaker evidence, switch to [When It's Not Working](/ai-coding-primer/learn/intermediate/troubleshooting/).

## Catch Weak Setup Early

| Signal | Preventive move |
|---|---|
| You cannot explain or review the task | Investigate entry points, data flow, terms, and candidate checks before implementation |
| The agent responds to old logs or unrelated files | Reduce context to current evidence and retrieval targets |
| Checks fail before the change | Record the known baseline and the exact signal this task should change |
| Tools or permissions exceed the task | Remove integrations and authority without a concrete need |
| The same approach returns without better evidence | Stop appending corrections and use the recovery procedure |
| One session accumulates unrelated goals | Split the tasks, non-goals, and done signals |
| Acceptance depends on confidence or passing checks alone | Review assumptions, risk, observable behavior, and the complete diff |
| Generated tests mirror generated code | Review test intent independently against the requirement |

Before edits, name at least one source of truth: a failing example or expected output, an existing contract or acceptance criterion, a reviewer who owns the behavior, or a check that would expose a wrong result. If none exists, keep the next task read-only and investigate.

Use the [Setup Checklist](/ai-coding-primer/learn/beginner/setup-checklist/) to establish the baseline and permissions. Each MCP server, plugin, retrieval source, and broad permission adds state and failure modes; add one only for a concrete limitation after checking its data and authority boundaries. Record worthwhile discoveries as follow-up tasks rather than silently expanding the current one.

## Choose the Verification Signal First

Before implementation, name the narrowest observable result that proves the requested behavior. Depending on the task, that may be a focused test, exact command output, typecheck, build, screenshot, DOM assertion, contract test, or migration dry run.

```text
Fix the invalid-email bug.
Done signals:
1. `npm test -- user-validation.test.ts`
2. the nearest route test
3. `npm run typecheck`
Do not change unrelated routes.
```

Run broader checks after the focused signal passes. Then review the diff: a passing test may still hide a weakened permission check, changed contract, or poor abstraction.

When the request is vague or taste-bearing—such as “improve the feel,” “make it polished,” or “clean up the architecture”—create an inspectable artifact before implementation. Use a failing example, reproduction, screenshot with acceptance criteria, small prototype, fixture, benchmark, or concrete before-and-after target. If a human cannot evaluate the result by running or inspecting something specific, keep the task in exploration.

## Review AI-Drafted Tests Against the Requirement

Treat a generated test as a proposed requirement, not independent evidence. Before accepting it, ask:

- Did it fail on the old bug or missing behavior?
- Does it assert observable behavior or an actual contract?
- Did the patch weaken an existing expectation?
- Are required edge cases still represented?
- Does it follow nearby test style and helpers?

If code and tests share the same false assumption, green checks prove little. Restore the requirement and find an independent signal before continuing.

## Discuss Before Implementation

Pause before code would settle a schema, public API, authentication rule, permission boundary, migration path, dependency, concurrency rule, or other expensive choice. Ask for options, affected files, reversal cost, and the smallest safe default; then choose explicitly.

Skip this tactic for a mechanical edit with an obvious check. Planning earns its cost only when a human-owned decision is at stake.

## Provide Examples When Style Matters

Point to one or two local examples when correctness includes test structure, components, error handling, naming, data access, accessibility markup, or documentation style. Ask the agent to match the relevant pattern without inventing a new abstraction.

Prefer local examples. External examples may conflict with repository conventions. If no suitable pattern exists, state the proposed convention before applying it broadly.

## Isolate Research From Implementation

Use a separate read-only session or subagent when discovery would flood implementation context. Request file paths, commands, observed conventions, risks, open questions, and a recommended next step. Bring only the findings needed for the next slice back into the main task.

Skip the handoff cost when the relevant files are already known. See [Context Engineering](/ai-coding-primer/learn/intermediate/context-engineering/#isolate-research-from-implementation) and [Subagent Architectures](/ai-coding-primer/learn/advanced/subagents/).

## Write a Short Spec for Larger Work

For multi-boundary work, record behavior, acceptance criteria, non-goals, constraints, checks, and unresolved decisions. Ask the agent to restate the spec before editing. The spec should reduce ambiguity for the next slice, not become a second design system. See [Scenario - Add a Feature](/ai-coding-primer/learn/intermediate/scenario-feature-build/) for a worked example.

## Save State Outside the Chat for Long Tasks

When work may survive compaction, reset, or handoff, save decisions, touched files, checks, meaningful failures, remaining work, and stop conditions. Keep the record factual and prune obsolete attempts. Use [Agent Harness](/ai-coding-primer/learn/advanced/agent-harness/) for the full long-running setup.

## Reset When the Session Degrades

When evidence stops improving, use [When It's Not Working](/ai-coding-primer/learn/intermediate/troubleshooting/). Carry forward confirmed facts, not the full failed transcript.
