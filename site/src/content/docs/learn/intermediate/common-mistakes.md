---
title: Common Mistakes
description: Recognition and prevention guide for recurring AI-assisted development failure modes.
sidebar:
  order: 5
---

Use this page to catch a weak setup before it becomes a failed session. If work is already producing repeated errors or broad diffs, switch to [When It's Not Working](/ai-coding-primer/learn/intermediate/troubleshooting/).

## Early Signals

- You cannot explain or review the task: investigate before implementation.
- The agent responds to old logs or unrelated files: reduce context to current evidence and retrieval targets.
- Checks fail before the change: document the baseline first.
- Tools and permissions exceed the task: remove integrations that lack a concrete need.
- The same approach returns without better evidence: stop appending corrections and use the recovery procedure.
- One session accumulates unrelated goals: separate the tasks and their done signals.
- Acceptance depends on confidence or passing checks alone: review assumptions, diff, risk, and behavior.
- Generated tests mirror generated code: review test intent against the requirement.

## Start With a Problem You Can Evaluate

AI can help explore an unfamiliar area, but implementation becomes risky when you cannot state the expected behavior or recognize a wrong answer. In that situation, ask for entry points, data flow, terminology, and candidate checks first. Keep the first pass read-only.

Before allowing edits, you should be able to name at least one of these:

- a failing example or expected output
- an existing contract or acceptance criterion
- a reviewer who owns the affected behavior
- a check that would expose a wrong result

If none is available, the next task is investigation, not implementation.

## Keep Context Relevant

Large context can hide the evidence that matters. Whole directories, long logs, stale conversation history, and broad architecture notes often compete with the current failure signal and constraints.

Provide the task, relevant paths or search targets, allowed scope, and done signal. Let the agent retrieve secondary files as needed. If a failed attempt established a useful fact, retain that fact; discard the surrounding transcript.

The same rule applies to integrations. Each MCP server, plugin, retrieval source, and broad permission adds state and failure modes. Add one only after a concrete limitation appears and its data and authority boundaries are acceptable.

## Establish the Baseline Before Asking for Change

A pre-existing failure makes later results ambiguous. The agent may chase unrelated errors, weaken a check, or modify extra files merely to quiet noisy output.

Run the narrowest relevant test, build, type check, lint command, or reproduction before the task. If the repository is already failing, record the exact known failures and state which signal this task should change. Keep unrelated work out of the task diff.

Use the [Setup Checklist](/ai-coding-primer/learn/beginner/setup-checklist/) for the complete preparation procedure.

## Keep One Task Boundary

A bug fix, refactor, dependency cleanup, and feature idea need different context and evidence. Combining them makes the diff harder to review and lets decisions from one task leak into another.

State non-goals and allowed files. Record follow-up work separately instead of letting the agent continue opportunistically. A task is not complete merely because the agent found another improvement.

## Stop When Corrections Stop Improving Evidence

Repeated “fix it” prompts can preserve the same bad assumptions while adding failed patches and contradictory instructions to the context. Watch the evidence, not the number of attempts.

Continue only when the next action tests a new hypothesis or produces a stronger signal. If the same failed approach recurs or the evidence stops improving, preserve the useful findings and use the reset procedure in [When It's Not Working](/ai-coding-primer/learn/intermediate/troubleshooting/).

## Review More Than the Check Result

A passing test or build establishes only what that check measures. It may not reveal a weakened permission boundary, accidental API change, unrelated diff, or maintenance problem.

Before accepting a patch:

- inspect the assumptions the implementation depends on
- read the complete diff
- run the relevant focused and broader checks
- compare observable behavior with the requirement
- involve the owner of any affected security, data, API, or operational boundary

The [Agentic Development Loop](/ai-coding-primer/learn/intermediate/agentic-development-loop/) owns the full review sequence.

## Review Generated Tests Independently

AI may draft tests, but code and tests generated from the same mistaken assumption can agree and still be wrong. Review the expected behavior independently before using a generated test as evidence. The checklist in [Effective Patterns](/ai-coding-primer/learn/intermediate/effective-patterns/#review-ai-drafted-tests-against-the-requirement) covers requirement fit, weakened expectations, edge cases, and implementation coupling.

## Next Steps

- [When It's Not Working](/ai-coding-primer/learn/intermediate/troubleshooting/) — recover when evidence stops improving
- [Effective Patterns](/ai-coding-primer/learn/intermediate/effective-patterns/) — reusable tactics inside the canonical loop
- [Context Engineering](/ai-coding-primer/learn/intermediate/context-engineering/) — select files, tools, and instructions for the task
