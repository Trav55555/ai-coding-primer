---
title: Choose a Workflow and Stack
description: Pick a setup that matches how you work, then narrow to current stack options without turning the decision into a shopping spiral.
sidebar:
  order: 3
---

This decision is easier when you start with workflow shape instead of vendor rankings.

Start with how you want to work. Once the workflow shape is right, the stack choice becomes narrower.

## Quick Decision Tree

Use this before reading any vendor page:

| If this describes you | Start with | Why |
|---|---|---|
| "I want the simplest path and do most work in one editor" | integrated AI IDE | lowest setup burden and easiest navigation/edit loop |
| "I already like my editor and do not want to migrate" | AI extension in your current editor | preserves existing habits while adding assistance |
| "I think in tests, scripts, diffs, and terminal commands" | terminal agent workflow | strongest fit for explicit verification and long-running tasks |
| "Code cannot leave a controlled boundary" | private/local version of the workflow above | deployment boundary is a filter on the workflow, not a separate goal |
| "This is for a team" | governed pilot with one or two approved workflow shapes | policy, review, identity, and auditability matter before feature volume |

Then pressure-test the choice with three questions:

1. Can I easily review diffs and run verification?
2. Do the privacy and deployment boundaries fit this codebase?
3. Is the setup light enough that I will actually use it consistently?

If the answer to any question is no, switch workflow shape before comparing tools.

## Step 1: Choose Your Workflow Shape

### Integrated AI IDE

Best when you want navigation, editing, and AI help in one place.

Good fit:
- you want one environment
- you do frequent multi-file work
- you value ease of use over maximum flexibility

### AI Extension in Your Current Editor

Best when you already like your editor and want AI without changing your whole environment.

Good fit:
- you want gradual adoption
- you care about portability
- you want flexibility in model or provider setup

### Terminal Agent Workflow

Best when you think in commands, diffs, plans, and verification loops.

Good fit:
- you already work in the terminal
- you want explicit control
- you want long-running or research-heavy agent workflows

## Step 2: Use a Minimum Viable Setup Shape

After you choose the workflow shape, aim for one safe working setup before comparing extras:

- a local, version-controlled repository
- an AI coding tool scoped to that repository
- no production credentials in the tool's environment
- approval required for network access, package installation, and other external actions
- one existing targeted check you can run before and after the change
- one bounded first task in one file or one small area

For example:

```text
Repository: local checkout with a clean Git diff
Tool access: read the repository; write only `tests/parser.test.ts`
Credentials: none
Approval required: network access, package installation, or other file changes
Baseline and done signal: `npm test -- parser.test.ts`
First task: add one missing test case; stop before production-code edits
```

This is the shape, not the procedure. Replace the command and file with repository-native equivalents. Use the [Setup Checklist](/ai-coding-primer/learn/beginner/setup-checklist/) to establish the baseline, permissions, and verification command.

## Step 3: Apply Your Operating Constraints

Now filter the workflow shape through your real constraints:

- Do you need local or private execution?
- Do you need enterprise identity, policy, or audit controls?
- Do you need screenshots or other multimodal input?
- Do you need easy model switching?

These are filters, not separate workflow shapes.

## Step 4: Pick a Stack Bundle

Here are the only bundles most readers need to consider first:

- integrated AI IDE stack
- current-editor plus AI extension stack
- terminal agent stack
- private or local version of one of the above
- enterprise-managed version of one of the above

The goal is not to find the perfect product. The goal is to pick a setup you can actually operate well.

## Step 5: Compare the Criteria That Matter

Before you commit, compare your short list on:

- verification ergonomics
- privacy and deployment boundary
- setup burden
- switching cost
- team rollout friction

If a tool is impressive but makes verification awkward, it is the wrong fit for serious work.

## Opinionated Defaults

### If you are new

Start with the lightest workflow that fits your existing habits.

### If you are editor-first

Start with an integrated IDE or an extension in the editor you already trust.

### If you are terminal-first

Start with a terminal agent stack and optimize for explicit diffs, tests, and control.

### If privacy is the main constraint

Choose the workflow shape first, then pick the local or tightly controlled version of it.

### If you are evaluating for a team

Prioritize deployment boundary, identity, auditability, and verification ergonomics before feature volume.

## Where Models and Providers Fit

Once you know your workflow shape, use these pages to narrow the stack:

- [Models vs Providers](/ai-coding-primer/models/overview/)
- [Capability Patterns](/ai-coding-primer/models/capabilities/)
- [Billing Models](/ai-coding-primer/models/pricing/)

These pages should support the workflow decision, not replace it.

## What This Page Does Not Do

This page helps you choose a working setup. It does not maintain a giant live market matrix.

For volatile details like benchmark movement, vendor snapshots, and privacy terms, use the [Reference Appendix](/ai-coding-primer/reference/appendix/).

## Next Steps

1. Use the [Stack Evaluation Criteria](/ai-coding-primer/tools/comparison/) only if two workflow shapes still fit.
2. Configure the chosen workflow with the [Setup Checklist →](/ai-coding-primer/learn/beginner/setup-checklist/).
3. Run one bounded task in [Your First Session →](/ai-coding-primer/learn/beginner/first-session/).

If you have not classified the code or account boundary, return to the [Quick Security Checklist](/ai-coding-primer/security/checklist/) before connecting a repository.
