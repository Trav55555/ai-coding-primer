---
title: Agentic Development Loop
description: A practical loop for giving coding agents bounded work with clear checks and review.
sidebar:
  order: 6
---

Use this loop when you want a coding agent to do useful repository work without losing scope, quality, or your own understanding of the system.

A coding agent can search files, edit code, run commands, inspect failures, and retry. The developer must define the task boundary, reserve consequential choices for human judgment, and check the evidence before accepting the patch.

:::note[Evidence status]
This page is editorial workflow guidance. No study has validated this exact eight-step loop as a universal optimum.

The 2025 DevOps Research and Assessment (DORA) report finds that artificial intelligence can magnify the surrounding delivery system's strengths and weaknesses. METR's 2025 study measured a slowdown for experienced open-source developers in its setting; its 2026 update explains why task selection and concurrent agent use made later measurement unreliable. GitHub and GitLab practice material documents specs, plans, review, and staged verification. Those sources support parts of this workflow, not this exact sequence.
:::

## The Loop

| Step | Developer owns | Agent can do | Evidence to keep |
|---|---|---|---|
| 1. Define behavior | State behavior, non-goals, constraints, and acceptance evidence | Restate the task and identify ambiguity | Spec, failing test, screenshot, expected output, contract |
| 2. Decide consequential choices | Resolve choices that are expensive or dangerous to reverse | List tradeoffs and affected files | Decision note with rationale |
| 3. Choose a thin slice | Pick the smallest end-to-end behavior that tests the design | Propose slice options and checks | Slice plan and stop point |
| 4. Bound the task | Set allowed scope, forbidden scope, commands, and stop condition | Edit only the requested slice | Prompt or plan entry |
| 5. Run checks | Decide which checks matter | Run tests, type checks, builds, linters, screenshots, or manual scripts | Command output and failures |
| 6. Review result | Read assumptions, risk, diff, and observable behavior | Summarize changes and test results | Diff review notes |
| 7. Save state | Record decisions and evidence needed by the next task | Update `STATE.md`, plan, or issue notes | Current state and remaining work |
| 8. Watch change cost | Notice whether later work requires broad edits or rework | Report unexpected coupling found during follow-up | Follow-up risks and cleanup candidates |

The loop is not a ceremony. For a one-line bug fix, steps 1, 4, 5, and 6 may fit in one prompt. For a migration, public API change, or security boundary, the early decisions need more attention.

## 1. Define Behavior, Non-goals, Constraints, and Acceptance Evidence

Start with the behavior you want, not the files you hope will change.

A usable task definition includes:

- **behavior:** what a user, API client, job, or command should observe
- **non-goals:** what the agent must not build or redesign
- **constraints:** compatibility, privacy, performance, accessibility, migration, or operational limits
- **acceptance evidence:** the test, command, screenshot, log line, contract check, or manual reproduction that proves the behavior

Weak prompt:

```text
Add saved filters to the dashboard.
```

Better feature prompt:

```text
Implement one slice of saved issue filters.

Behavior:
- On the issues page, a signed-in user can save the current status and assignee filters under a name.
- After saving, the named filter appears in the filter dropdown for that user.

Acceptance evidence:
- Add or update a UI/integration test that saves a filter and reloads the page.
- Run `npm test -- issues-filter` and `npm run typecheck`.

Non-goals:
- Do not add filter sharing.
- Do not add bulk management, folders, or analytics.
- Do not redesign the issues page.

Constraints:
- Use existing settings and form patterns.
- Do not store filters for anonymous users.
- Preserve existing issue query URLs.

Stop point:
- Stop after the first end-to-end save-and-reload slice passes checks.
- Report changed files, commands run, and any assumptions.
```

The prompt gives the agent useful work and gives you something concrete to reject if it drifts.

## 2. Resolve Consequential Decisions Before Code

Some choices are cheap to change later. Others spread through data, public contracts, security boundaries, or user behavior. Do not let the agent answer those implicitly by writing code.

Pause before implementation when the task affects:

- database schema or irreversible data migration
- public API shape, event format, or documented behavior
- authentication, authorization, secrets, billing, or privacy
- concurrency, locking, ordering, retries, or idempotency
- production observability or rollback
- architecture that many future changes will depend on

Prompt for decisions first:

```text
Before editing, list the consequential decisions in this task.
For each one, explain the options, reversal cost, affected files, and the smallest safe choice.
Do not implement until I approve the decisions.
```

Save the answer in the spec, issue, or state file after you choose. Otherwise the next session may repeat or reverse the decision.

## 3. Choose a Thin Vertical Slice

A thin vertical slice is the smallest end-to-end behavior that exercises the real path. It is not a layer-by-layer checklist.

For the saved filters example, a true slice might be:

```text
Slice: save one private issue filter and load it after refresh.

Path:
1. Use the existing authenticated settings storage or minimal new table, depending on the approved decision.
2. Add the smallest server action or endpoint needed to save `{ name, status, assignee }` for the current user.
3. Add the dropdown entry on the issues page using existing form components.
4. Add one integration test: set filters, save as "My open bugs", reload, select it, and confirm the query state returns.

Out of scope for this slice:
- sharing filters
- editing or deleting saved filters
- advanced query syntax
- new design system components
```

This differs from the common but often unsafe default of doing all persistence, then all API, then all UI. Layered sequencing can be right when a foundation must land first, but it can also hide integration mistakes until the end. Prefer an end-to-end slice when the architecture and data contract are already clear enough.

## When Foundation Must Come First

Sometimes a migration or foundation is the smallest safe first step. The point is not to force every task through the UI first; the point is to avoid building a broad layer without proving behavior.

Foundation should precede the slice when:

- existing data cannot represent the behavior
- a migration has to be reviewed or rehearsed before application code can rely on it
- the public contract must be approved before clients are generated
- the task needs a permission boundary before any user-visible path is safe

Example:

```text
Feature: per-organization audit-log retention.

Foundation first:
- Add a nullable `audit_retention_days` column with a safe default.
- Backfill existing organizations to the current global retention value.
- Add a migration test or dry-run command.
- Do not expose UI or API controls yet.

Why:
- The retention job deletes data. A wrong default is irreversible.
- Reviewers need to inspect the migration and rollback plan before behavior uses it.

Next thin slice after approval:
- Allow one organization admin to set the value through the existing admin settings page.
- Verify that the retention job reads the org-level value for that organization only.
```

The foundation step still has a stop point and evidence. It is not permission to build the whole backend in isolation.

## 4. Give a Bounded Task and Stop Point

Agents drift when the task has no edge. A bounded task says what to edit, what not to edit, and when to stop.

```text
Implement only the approved slice.

Allowed:
- files needed for the save-and-reload path
- one integration test for the slice

Not allowed:
- delete/edit saved filters
- sharing
- unrelated issue query refactors
- dependency additions without asking

Checks:
- `npm test -- issues-filter`
- `npm run typecheck`

Stop after checks. Do not continue to the next slice.
```

If the agent discovers a real blocker, the stop point changes from "finish the slice" to "report the blocker with evidence."

## 5. Let the Agent Run Executable Checks

Checks are useful because the agent can observe them and adjust. Name the checks before implementation.

Use the narrowest check first, then broaden:

1. failing or new focused test
2. related module tests
3. typecheck or linter for touched code
4. build or integration test
5. screenshot, browser interaction, contract test, or manual command when automated coverage is incomplete

Do not accept "looks good" as evidence. Keep command output, screenshots, or exact manual steps in the handoff.

## 6. Review Assumptions, Risk, Diff, and Behavior

Review is not only reading whether tests passed. Ask what the agent assumed and what the diff makes more expensive later.

| Risk area | Review question | Stronger evidence |
|---|---|---|
| Security boundary | Did the change alter auth, permissions, secrets, or tenant isolation? | permission tests, threat-model note, reviewer with domain ownership |
| Irreversible data change | Can bad data be restored or migration rolled back? | migration dry run, backup/rollback note, default-value test |
| Public contract | Did API, CLI, event, or config behavior change? | contract test, changelog note, compatibility check |
| Concurrency | Could retries, races, ordering, or idempotency break the behavior? | race/idempotency test, locking rationale, queue semantics review |
| Weak observability | If this fails in production, how will anyone know? | log/metric/alert, dashboard check, manual verification path |

Also inspect the ordinary diff:

- Are changed files limited to the slice?
- Did tests encode the requirement or the implementation accident?
- Did the agent weaken validation or broaden permissions to pass a test?
- Can you explain the call path and failure mode?
- Did the change increase future coupling or make the next slice harder?

## 7. Save Decisions and Evidence

For work that spans more than one prompt, save state outside the conversation. A short `STATE.md`, issue comment, or plan entry is enough.

```md
## Saved filters slice state

Done:
- Added private saved-filter create/load path.
- Test `issues-filter` covers save, reload, and select.

Decisions:
- Filters are private to the user for now.
- Existing issue query URLs remain the source of filter state.

Checks:
- `npm test -- issues-filter` passed.
- `npm run typecheck` passed.

Risks / follow-up:
- No edit/delete UI yet.
- Need product decision before sharing filters.
```

This makes the next agent session cheaper and safer. It also gives reviewers a compact record of why the diff looks the way it does.

## 8. Watch Later Change Cost

A slice can pass and still be a poor direction. Watch the next task.

Warning signs:

- the next small behavior requires broad rewrites
- each slice touches many unrelated files
- tests need repeated rewriting because boundaries are unstable
- the agent keeps rediscovering the same constraints
- reviewers cannot explain why a layer exists

When that happens, stop adding features and pay down the design problem. The evidence is not a slogan about architecture; it is the observed cost of the next change.

## Recover From Polluted Context

Long sessions can accumulate failed patches, stale assumptions, and contradictions. When the agent repeats the same failed fix or starts arguing with old context, stop the session instead of adding another correction.

Recovery prompt for a fresh session:

```text
We are restarting after polluted context. Do not rely on previous chat.

Task:
- Implement the saved issue-filter save-and-reload slice.

Current facts:
- The approved behavior, non-goals, and constraints are in `spec.md`.
- Attempt 1 wrongly added shared filters; reverted.
- Attempt 2 changed issue query URL semantics; reverted.
- The remaining likely files are `src/issues/Filters.tsx`, `src/issues/filterActions.ts`, and `tests/issues-filter.test.ts`.
- Required checks: `npm test -- issues-filter` and `npm run typecheck`.

First read the spec and those files. Then propose a narrow plan.
Do not edit until the plan is approved.
```

Keep only facts that change the next attempt. Do not paste the whole failed transcript.

## How This Connects to the Scenario Pages

- [Scenario - Fix a Bug](/ai-coding-primer/learn/intermediate/scenario-bug-fix/) applies the loop to a known failure signal.
- [Scenario - Add a Feature](/ai-coding-primer/learn/intermediate/scenario-feature-build/) applies the loop to new behavior with acceptance criteria and slice gates.
- [Scenario - Safe Refactor](/ai-coding-primer/learn/intermediate/scenario-safe-refactor/) applies the loop when behavior should not change.
- [Effective Patterns](/ai-coding-primer/learn/intermediate/effective-patterns/) lists reusable prompt and verification patterns used inside the loop.
- [Agent Harness](/ai-coding-primer/learn/advanced/agent-harness/) shows how to preserve state for long-running work.

## Bibliography

- [DORA 2025 report](https://dora.dev/dora-report-2025/)
- [DORA: Working in Small Batches](https://dora.dev/capabilities/working-in-small-batches/)
- [METR early-2025 experienced open-source developer study](https://metr.org/blog/2025-07-10-early-2025-ai-experienced-os-dev-study/)
- [METR 2026 uplift update](https://metr.org/blog/2026-02-24-uplift-update/)
- [GitHub: Spec-driven development using Markdown as a programming language](https://github.blog/ai-and-ml/generative-ai/spec-driven-development-using-markdown-as-a-programming-language-when-building-with-ai/)
- [GitLab AI-Assisted Development Playbook](https://handbook.gitlab.com/handbook/engineering/workflow/ai-assisted-development/)
