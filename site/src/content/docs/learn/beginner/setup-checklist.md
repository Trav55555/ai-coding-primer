---
title: Setup Checklist
description: Establish project feedback, permissions, and a clean baseline before an AI-assisted task.
sidebar:
  order: 4
---

Before asking an AI coding tool to change a project, establish how the project reports errors and what the tool may access.

The goal is not a perfect development environment. You need one clean starting point, one relevant check, and boundaries that prevent a small task from becoming an uncontrolled one.

## 1. Start From a Known Working State

Use version control or another reversible snapshot. Before the session:

- inspect the current diff
- separate unrelated work
- record any pre-existing failures
- know how to undo the proposed change

If the repository already has uncommitted work, do not let the agent assume every changed file belongs to its task.

## 2. Find the Project's Existing Checks

Prefer commands already defined by the repository. Look in its README, contribution guide, package scripts, build files, or continuous-integration configuration.

Find the narrowest command that checks the area you plan to change:

- a targeted test
- a type or compile check
- a linter
- a build
- a manual reproduction with an expected result

Run it before the task. A failing baseline makes later results ambiguous.

```text
Baseline:
- `npm test -- parser.test.ts` passes.
- `npm run typecheck` passes.
- Working tree is clean.
```

Use the commands the project actually supports. Do not install unrelated global tools merely to reproduce a generic checklist.

## 3. Confirm Local Feedback

A useful setup normally has:

| Signal | What it catches |
|---|---|
| Language or compiler diagnostics | syntax, type, and symbol errors |
| Targeted test or reproduction | incorrect behavior in the changed area |
| Linter or static analysis | project rules and common defects |
| Diff | accidental scope growth |

Not every project has every signal. Record what is missing and reduce task scope when verification is weak.

## 4. Bound Permissions

Decide what the tool may do before it starts:

- files or directories it may edit
- commands it may run
- whether network access is needed
- whether it may install dependencies
- which actions require approval

Prompt boundaries are task instructions, not access controls. Enforce sensitive file, network, credential, and command boundaries in the tool, shell, repository, or environment where possible.

For a first session, keep writes inside one test file and require approval for package installation, network access, or changes outside the repository.

## 5. Remove Sensitive Authority

Use scoped, non-production credentials only when the task requires them. Prefer no credentials for a first session.

Check for:

- environment files and secrets
- cloud or database credentials inherited by the shell
- package-registry tokens
- deployment commands
- browser sessions connected to sensitive systems

Ignore files reduce accidental context, but they are not a security boundary. Verify actual tool permissions and network behavior.

## 6. Record the Task Baseline

Give the agent facts, not assumptions:

```text
Baseline:
- Working tree is clean.
- The allowed file is `tests/parser.test.ts`.
- `npm test -- parser.test.ts` passes.
- No network access or credentials are required.
- Stop before changing production code or installing packages.
```

## Ready Check

Start only when you can answer yes:

- [ ] Can I identify the existing diff or confirm it is clean?
- [ ] Do I know the narrowest relevant verification command?
- [ ] Have I run that command once?
- [ ] Do I know which files the task may change?
- [ ] Are credentials and external actions absent or explicitly constrained?
- [ ] Can I undo the change?

Ready? Run one bounded task in [Your First Session →](/ai-coding-primer/learn/beginner/first-session/).
