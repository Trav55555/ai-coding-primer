---
title: When It's Not Working
description: Diagnostic and recovery steps for AI-assisted development.
sidebar:
  order: 6
---

Use this page when an AI-assisted coding session is producing repeated errors, broad diffs, weak evidence, or output you cannot review. The goal is not to keep trying until a fixed number of attempts has passed. Stop when evidence is not improving or the same failed approach recurs.

This page is the recovery page. Use it after a session is already producing repeated errors, broad diffs, weak evidence, or output you cannot review. For prevention habits before or during normal work, see [Effective Patterns](/ai-coding-primer/learn/intermediate/effective-patterns/#catch-weak-setup-early) and [Context Engineering](/ai-coding-primer/learn/intermediate/context-engineering/).

## Match the Symptom to an Action

- **The same failed approach returns:** stop the session, preserve confirmed evidence, and restart with a smaller task.
- **Checks fail differently after each retry:** revert unrelated changes and require diagnosis before more edits.
- **Unrelated files are modified:** reject the diff and restate allowed files and non-goals in a fresh context.
- **Tests change before the requirement is established:** restore the prior expectation and review intended behavior before continuing.
- **Generated tests pass but behavior remains uncertain:** return to requirement-level evidence and use the test-review checklist in [Effective Patterns](/ai-coding-primer/learn/intermediate/effective-patterns/#review-ai-drafted-tests-against-the-requirement).
- **The agent invents APIs, packages, or flags:** inspect installed types, local examples, lockfiles, and current official documentation.
- **A small task produces broad abstractions:** ask for the smallest patch and reject unjustified dependencies or layers.
- **The baseline was already noisy:** document known failures and the exact signal expected to change.
- **You cannot explain the proposed fix:** pause implementation for a file-level explanation or switch to manual work.
- **Credentials, permissions, migration, or deployment appear unexpectedly:** stop and require a human decision before further edits.

## One Reset Procedure

Use this when the session is no longer producing better evidence.

1. **Stop edits.** Do not add another correction to the same degraded context.
2. **Inspect and preserve evidence.** Save only what helps the next attempt: changed files, failing command, relevant error, and any confirmed finding.
3. **Return to a known state.** Revert unwanted changes using your normal version-control or editor workflow. Keep intentional work only if you understand and can review it.
4. **Write a fresh task pack.** Include the task, expected behavior, relevant files or search target, constraints, allowed files, known failed approaches, and verification command.
5. **Restart smaller.** Ask for diagnosis or a narrow plan before implementation. If the same approach recurs, switch to manual fallback or change the task framing.

Example restart prompt:

```text
We are restarting after a failed attempt. Do not rely on the previous chat.

Task:
Expected behavior:
Current evidence:
Known failed approaches:
Relevant files or search target:
Allowed files:
Do not change:
Verification command:

First explain the likely root cause from the files. Do not edit until the plan is clear.
```

## Specific Diagnostics

### Broken Baseline

Run or identify the check that establishes the starting state before evaluating the agent's change.

Look for:

- tests, type checks, linters, or builds that failed before the task
- uncommitted changes unrelated to the task
- missing dependencies, environment variables, services, or migrations
- generated files that are out of date

If the baseline cannot be made clean, record the known failures and the exact signal expected to improve.

### Scope Drift

Inspect the diff before allowing more edits.

Ask:

- Which files changed?
- Which changes are unrelated to the requested behavior?
- Did the agent alter public contracts, tests, generated files, dependencies, or configuration?
- Can the task be reduced to fewer files or one behavior?

Reject broad diffs when the task did not require them.

### Weak or Circular Evidence

If generated tests and code share the same assumption, passing results may not establish the requirement. Return to the expected behavior, restore any weakened assertion, and find an independent signal such as an existing regression test, manual reproduction, contract check, screenshot, log, or command output. Use the full test-review checklist in [Effective Patterns](/ai-coding-primer/learn/intermediate/effective-patterns/#review-ai-drafted-tests-against-the-requirement).

### Hallucinated API or Dependency

Before installing or coding against a suggested API, verify it.

Check:

- installed package version and lockfile
- local examples in the repository
- type definitions, generated clients, or official documentation
- package provenance and security policy before adding dependencies

Do not let the agent solve a missing API by inventing an adapter, weakening types, or adding an unreviewed package.

### Misread Local Convention

When the agent contradicts project style or architecture, provide evidence from the repository rather than a vague correction.

Use:

- one nearby file that shows the desired pattern
- the relevant project context file rule, if one exists
- the specific boundary being preserved, such as routing, data access, auth, generated code, or server/client separation

If the same local convention is missed repeatedly, update the appropriate project context file after the task, keeping the rule short and specific.

### Consequential Boundary Triggered

Stop implementation when the diff touches:

- authentication, authorization, secrets, or tenant isolation
- irreversible data migration or deletion
- public API, CLI, event, or configuration contract
- billing, deployment, messaging, or external side effects
- concurrency, retries, locking, ordering, or idempotency

Write the decision and review requirement before continuing. Do not let the agent resolve these choices implicitly by writing code.

## Manual Fallback

Manual work is the right recovery path when it produces a clearer result with less review risk.

Switch to manual implementation when:

- you can make the fix faster than reviewing another broad attempt
- the same approach recurs without better evidence
- the agent keeps changing working code outside the task boundary
- the proposed solution relies on APIs or requirements you cannot verify
- a consequential boundary requires judgment or verification the current workflow cannot provide
- you cannot explain or maintain the resulting code

Manual fallback does not mean abandoning AI entirely. You can still use it to summarize files, explain an error, draft a checklist, or propose test cases while you make and review the actual change.

## Diagnostic Prompts

Use these before allowing more edits:

```text
Before making changes, explain:
1. What the current code does.
2. What behavior I am asking for.
3. Which files need to change and why.
4. Which files should not change.
5. What evidence will show the task is complete.
```

```text
List the assumptions you are making. Mark each one as verified or unverified, and name the file, command, or source that verifies it.
```

```text
What could go wrong with this approach? List the failure modes and the checks that would catch them.
```

## Prevention Link

After recovery, prevent recurrence by tightening the next task pack:

- [Effective Patterns](/ai-coding-primer/learn/intermediate/effective-patterns/#catch-weak-setup-early) — early warnings, verification, and bounded-task tactics
- [Context Engineering](/ai-coding-primer/learn/intermediate/context-engineering/) — relevant context, tools, and constraints
- [Project Context Files](/ai-coding-primer/learn/advanced/project-context-files/) — short persistent rules for local conventions
