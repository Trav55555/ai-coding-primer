---
id: ai-coding-primer-beginner-path-validation-2026-08-10
tags:
  - project
  - ai-coding
  - validation
  - beginner
  - editorial
type: report
status: complete
created: '2026-08-10'
---

# Beginner Path Validation — 2026-08-10

## Question

Can a reader follow the condensed beginner path and identify the prerequisites, first task, stop conditions, and acceptable evidence without extra instruction?

## Evidence Boundary

This was not user testing. It used:

- two independent agent-assisted cognitive walkthroughs with different review frames
- one procedural dry run in a temporary toy repository
- maintainer adjudication against the published pages and project North Star

The walkthroughs test consistency and discoverability. The dry run tests whether the written procedure can be executed literally in one controlled setting. Neither establishes how real beginners learn, where they hesitate, or whether they retain the workflow.

## Material Reviewed

The walkthroughs followed the published sequence:

1. Introduction
2. Agentic Engineering
3. Quick Security Checklist
4. Choose a Workflow and Stack
5. Setup Checklist
6. Your First Session
7. Agentic Development Loop
8. Scenario — Fix a Bug

One walkthrough used a developer-new-to-agents frame. The other used a skeptical senior-engineer-teaching-a-junior frame.

## Acceptance Results

| Question | Walkthrough result | Dry-run result | Assessment |
|---|---|---|---|
| What happens before repository use? | Both identified classification, data-use, credential, permission, baseline, and undo checks | No network or credentials; clean baseline established | Pass |
| What is the first task? | Both identified one test in one existing test file, with documentation as the no-test fallback | Exactly one test was added | Pass |
| What should stop the task? | Both named ambiguity, production-bug discovery, unrelated command failure, and scope drift | Four stop conditions declared; none triggered | Pass |
| What counts as evidence? | Both rejected an agent assertion and required command output plus diff review | Targeted command output and final diff retained | Pass |
| What authority is forbidden? | Both identified production credentials, unapproved network/package/external actions, production edits, and implicit product decisions | No network, credentials, dependencies, or production edits | Pass |
| Does the first session connect to the full loop? | Both mapped baseline, inspection, scope, checks, review, and recordkeeping to the canonical loop | The procedure exercised those controls | Pass |

## Dry Run

A temporary Node project was created at `/tmp/primer-first-session-dry-run` with:

- one pure parser function
- nearby tests using the built-in `node:test` runner
- a local Git baseline commit
- no downloaded dependencies

Baseline:

```text
Working tree: clean
Command: npm test -- tests/parser.test.js
Result: 3 tests passed
Network and credentials: absent
```

The inspection step identified one documented but uncovered behavior: whitespace-only input returns an empty list. The bounded task allowed edits only to `tests/parser.test.js`.

Result:

```text
Changed: tests/parser.test.js
Production files changed: none
Command: npm test -- tests/parser.test.js
Result: 4 tests passed
Diff: one test added
```

The complete local evidence record is `/tmp/primer-first-session-dry-run/EVIDENCE.md`. It is a temporary validation artifact and is not part of the repository.

## Supported Corrections

Three small ambiguities warranted edits.

### 1. Prompt rules versus access controls

The curriculum described permission boundaries but did not state directly that an instruction such as “edit only this file” does not technically prevent broader access.

Correction: Setup Checklist now distinguishes prompt rules from controls enforced by the tool, shell, repository, or environment.

### 2. Baseline versus acceptance evidence

Examples made the timing visible, but the distinction was not named in one sentence.

Correction: Your First Session now states that baseline evidence is captured before edits and acceptance evidence afterward.

### 3. Pure function

The first-session prerequisite used “pure function” without a local definition.

Correction: the prerequisite now gives a short operational definition based on stable output and absence of external side effects.

## Findings Not Promoted to Edits

One walkthrough proposed a new consolidated “before connecting” gate and a boxed list of forbidden authority. The existing ordered path, Quick Security Checklist, Setup Checklist, and first-session prerequisites already provide those gates, and both walkthroughs answered the related questions correctly. Repeating them would add another summary without resolving an observed failure.

Another proposal added Core Concepts to the beginner path. The terms required for the first exercise are explained where used, both walkthroughs distinguished them, and the dry run completed. Adding another prerequisite would lengthen the path without demonstrated need.

Ecosystem-specific verification commands were also rejected. The existing instruction to use repository-supported commands is safer than examples that may not match a reader's stack.

## Remaining Risk

The tests used agent reviewers and a maintainer-controlled fixture. They do not reveal real-reader hesitation, reading time, mistaken navigation, or retention after the session.

A stronger follow-up would recruit three people with limited coding-agent experience and ask them to complete the first-session exercise while thinking aloud. Results must be reported as reader observations, not as proof that the workflow is universally effective.

## Decision

The condensed beginner path is procedurally coherent enough to retain. Make the three narrow terminology and boundary corrections, then stop. Do not begin another broad rewrite based on these heuristic results.
