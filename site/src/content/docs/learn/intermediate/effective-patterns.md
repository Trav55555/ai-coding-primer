---
title: Effective Patterns
description: Reusable tactics for verifiable AI-assisted development.
sidebar:
  order: 4
---

This page is a compact index of tactics to use inside the [Agentic Development Loop](/ai-coding-primer/learn/intermediate/agentic-development-loop/). It does not replace the loop or the scenario pages. Use the loop for the full task sequence, and use the scenarios for complete worked workflows:

- [Scenario - Fix a Bug](/ai-coding-primer/learn/intermediate/scenario-bug-fix/)
- [Scenario - Add a Feature](/ai-coding-primer/learn/intermediate/scenario-feature-build/)
- [Scenario - Safe Refactor](/ai-coding-primer/learn/intermediate/scenario-safe-refactor/)

## Choose the Verification Signal First

Use this when the task has a concrete success condition: a bug, feature slice, refactor, migration, CLI output, or UI change.

Name the check before implementation. Good signals include a focused test, typecheck, lint rule, build, screenshot, DOM assertion, contract test, migration dry run, or exact command output. Start with the narrowest signal that proves the requested behavior, then run broader checks for the touched area.

```text
Fix the invalid-email bug. The done signal is:
1. `npm test -- user-validation.test.ts`
2. the nearest related route test
3. `npm run typecheck`

Do not change unrelated routes.
```

A verification signal is not the whole review. Passing tests can miss a weakened permission check, a changed public contract, or a bad abstraction. Pair the signal with diff review from the loop's [review step](/ai-coding-primer/learn/intermediate/agentic-development-loop/#6-review-assumptions-risk-diff-and-behavior).

## Review AI-Drafted Tests Against the Requirement

Use this when the agent writes or updates tests. Agent-written tests are useful only if they encode the desired behavior rather than the implementation the agent happened to write.

Before treating a new test as the done signal, read it as a requirement statement:

- Does it fail on the old bug or missing behavior?
- Does it assert user-visible or contract-level behavior, not private implementation details unless those details are the contract?
- Did the agent weaken an existing expectation to make the patch pass?
- Are edge cases from the task still represented?
- Does the test follow nearby project style and helpers?

If the test is wrong, fix the test or clarify the requirement before asking for implementation. Do not let the agent change the expected behavior just because the current patch cannot satisfy it.

This tactic is especially important in the bug-fix and feature scenarios, where regression and acceptance tests are often the strongest evidence.

## Discuss Before Implementation

Use this when the next code change would settle an expensive decision: schema shape, API contract, authentication behavior, permission boundary, migration path, dependency choice, concurrency rule, or user-visible behavior.

Ask for options, affected files, reversal cost, and the smallest safe choice. Then choose explicitly before edits begin.

```text
Before editing, identify the consequential decisions in this feature.
For each decision, list the options, affected files, reversal cost, and the smallest safe default.
Do not implement until I approve the decisions.
```

Do not use long discussion for a small mechanical edit with an obvious check. Extra planning can add noise. The decision rule is whether the code would otherwise make a choice that a reviewer or product owner should own.

## Provide Examples When Style Matters

Use this when correctness includes fitting local conventions: test structure, form components, error handling, naming, data access patterns, accessibility markup, or documentation style.

Point the agent to one or two nearby examples and ask it to match the relevant pattern.

```text
Inspect `tests/settings/*.test.ts` for helper usage and assertion style.
Add the new test using the same structure. Do not introduce a new test helper unless the existing pattern cannot express the case.
```

Examples should be local when possible. External examples can conflict with repository conventions. If no good example exists, ask the agent to state the new convention before applying it broadly.

## Isolate Research From Implementation

Use this when discovery would flood the implementation context: unfamiliar codebase areas, external library behavior, multiple possible entry points, security review, or large pattern searches.

Run research in a separate session or subagent, and keep it read-only unless there is a specific reason to allow edits. Ask for file paths, commands, observed conventions, open questions, and a recommended next workflow.

```text
Research how authentication is implemented in this repository.
Return entry points, relevant files, existing test patterns, risks, and open questions.
Do not modify files.
```

Bring only the findings needed for the next implementation slice into the main context. Subagents add coordination cost, so skip them for small edits where the relevant files are already known. See [Context Engineering](/ai-coding-primer/learn/intermediate/context-engineering/#isolate-research-from-implementation) and [Subagent Architectures](/ai-coding-primer/learn/advanced/subagents/) for the fuller boundary.

## Write a Short Spec for Larger Work

Use this when the task spans more than one prompt, touches several boundaries, or has non-goals that the agent might otherwise invent away.

A useful spec is short. Include behavior, acceptance criteria, non-goals, constraints, likely checks, and any decision already made. Ask the agent to restate the spec and identify open questions before implementation.

```md
## Behavior
Users can save one private issue filter and reload it later.

## Acceptance criteria
- Save current status and assignee filters under a name.
- Reload the page and select the saved filter.
- Existing issue query URLs keep working.

## Non-goals
- No sharing.
- No folders.
- No analytics.

## Checks
- `npm test -- issues-filter`
- `npm run typecheck`
```

Do not turn the spec into a large design document for a tiny change. The spec should reduce ambiguity for the next slice, not become a parallel source of stale requirements. The feature scenario shows this tactic in a complete workflow.

## Save State Outside the Chat for Long Tasks

Use this when work may continue after compaction, reset, handoff, or multiple verification attempts.

Keep small persistent artifacts such as `PLAN.md`, `STATE.md`, a spec, and a command log. Record decisions, touched files, checks run, failed attempts that matter, remaining work, and stop conditions. This lets a fresh session resume from evidence instead of a long transcript.

```md
## State
Done:
- Added regression test for expired-token refresh.

Decisions:
- Refresh happens in auth middleware, not route handlers.

Checks:
- `npm test -- auth` currently fails: middleware does not retry after refresh.

Next:
- Implement retry path without changing login response shape.
```

Persistent state has the same context-budget problem as prompts. Keep it factual and prune obsolete attempts. For the full long-running setup, use [Agent Harness](/ai-coding-primer/learn/advanced/agent-harness/).

## Reset When the Session Degrades

When evidence stops improving, use the reset procedure in [When It's Not Working](/ai-coding-primer/learn/intermediate/troubleshooting/). Carry forward confirmed facts, not the full failed transcript.

## Next Steps

- [Agentic Development Loop](/ai-coding-primer/learn/intermediate/agentic-development-loop/) — canonical bounded-task procedure
- [Context Engineering](/ai-coding-primer/learn/intermediate/context-engineering/) — context selection and isolation
- [Subagent Architectures](/ai-coding-primer/learn/advanced/subagents/) — separate research and review sessions
- [Agent Harness](/ai-coding-primer/learn/advanced/agent-harness/) — persistent state for long-running work
- [When It's Not Working](/ai-coding-primer/learn/intermediate/troubleshooting/) — canonical recovery procedure
