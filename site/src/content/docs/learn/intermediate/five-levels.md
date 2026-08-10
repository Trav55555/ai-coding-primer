---
title: Choose an Autonomy Mode
description: Match agent authority and human review to task risk, feedback quality, and recovery.
sidebar:
  order: 2
---

Autonomy is a task setting, not a developer rank. The same team may use suggestion-only assistance for an authentication change and bounded automation for generated documentation.

This page replaces a numbered maturity ladder with five descriptive modes. Moving toward more autonomous modes is not progress by itself.

:::note[Evidence status]
This is an editorial decision framework. It adapts common descriptions of AI coding autonomy, but no study has validated these five modes as a universal taxonomy.
:::

## Decide on Five Conditions

Before choosing a mode, assess:

| Condition | Question |
|---|---|
| Consequence | What happens if the change is wrong? |
| Feedback | Which fast, relevant checks can detect a bad change? |
| Permissions | Which files, commands, credentials, and services can the agent access? |
| Reversibility | Can the change and any external action be undone? |
| Observability | Can a reviewer reconstruct what the agent read, changed, ran, and reported? |

Weak feedback, broad permissions, or irreversible effects call for less autonomy even when the tool is capable of more.

## Five Modes

### Suggestion Only

The tool explains, completes, or proposes code. A developer integrates each change manually.

Use when:

- expected behavior is still being learned
- verification is weak
- the change affects security, public contracts, or irreversible data

### Bounded Edit

The agent may edit an explicit file set. The developer reviews the complete diff and runs or checks the required verification.

Use when:

- scope is small and reviewable
- the repository has a relevant check
- no external side effect is required

This is a sensible default for many normal coding tasks.

### Verified Task

The agent may inspect, edit, and run approved commands until a stated stop condition. The developer reviews assumptions, evidence, and the final patch.

Use when:

- behavior and non-goals are clear
- checks are fast enough to guide retries
- commands and network access are bounded
- failed attempts can be reverted

The [Agentic Development Loop](/ai-coding-primer/learn/intermediate/agentic-development-loop/) describes this mode in detail.

### Isolated Parallel Work

Several agents handle independent research, review, or isolated worktrees. A human or independent validator integrates the results.

Use when:

- tasks do not share files or unresolved architectural decisions
- each worker has a narrow handoff contract
- coordination cost is smaller than the expected time saved

Do not use this mode to let multiple agents race on the same design.

### Outcome-Verified Automation

A narrowly defined process runs without line-by-line human review and is accepted from conformance checks, observable outcomes, and rollback controls.

Use only when:

- the output contract is stronger than code inspection for that task
- the environment and permissions are tightly constrained
- failures are detectable and reversible
- the organization explicitly accepts the residual risk

Examples may include regenerating derived files or applying a proven mechanical transformation. This mode is not appropriate merely because a test suite exists.

## Choose Per Task

| Task | Likely starting mode | Reason |
|---|---|---|
| Learn an unfamiliar concurrency API | Suggestion Only | The developer needs to form the mental model |
| Add one test to an existing suite | Bounded Edit | Narrow file scope and direct evidence |
| Fix a reproducible application bug | Verified Task | The agent can iterate against a failing check |
| Research independent migration options | Isolated Parallel Work | Outputs can be compared without shared edits |
| Regenerate checked-in API clients | Outcome-Verified Automation | Generated output can have a strict contract and rollback |

These are starting points. Raise or lower autonomy when the actual repository, permissions, or consequences differ.

## Reassess During the Task

Reduce autonomy when:

- the agent leaves the allowed scope
- checks become slow, flaky, or irrelevant
- credentials or network access become necessary
- expected behavior turns out to be ambiguous
- retries accumulate without a better diagnosis

Do not compensate for weak evidence by granting more authority.

## Next Steps

- [Agentic Development Loop](/ai-coding-primer/learn/intermediate/agentic-development-loop/) — run a verified task
- [Subagent Architectures](/ai-coding-primer/learn/advanced/subagents/) — isolate parallel work
- [Governance and Rollout](/ai-coding-primer/team/governance/) — define team permission and approval policy
