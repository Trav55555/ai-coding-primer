---
title: Workflow Archetypes
description: Choose a workflow shape for a bug, feature, refactor, or codebase investigation.
sidebar:
  order: 5
---

Use this page to select a task shape. It does not define another implementation procedure. After choosing, run the [Agentic Development Loop](/ai-coding-primer/learn/intermediate/agentic-development-loop/) and use the matching scenario when one exists.

The four shapes are an editorial simplification. A task can change shape as evidence improves: exploration may reveal a bug, and a feature may expose a prerequisite refactor.

## Bug Fix

Choose this when behavior is visibly wrong and you can reproduce the failure.

Start with the failing test, command, screenshot, or exact observed output. The main risk is treating a plausible symptom as the root cause or broadening a small fix into unrelated cleanup.

Use [Scenario — Fix a Bug](/ai-coding-primer/learn/intermediate/scenario-bug-fix/) for the worked application.

## Feature Build

Choose this when the requested behavior does not exist and implementation still requires product or technical decisions.

Start with acceptance criteria, non-goals, consequential decisions, and the smallest end-to-end behavior that can be checked. The main risk is letting generated code settle unclear requirements or expand the feature before the first slice works.

Use [Scenario — Add a Feature](/ai-coding-primer/learn/intermediate/scenario-feature-build/) for the worked application.

## Behavior-Preserving Refactor

Choose this when current behavior should remain stable while structure changes.

Start with characterization tests or another reliable baseline. Name explicit non-goals and the seam to change. The main risk is mixing cleanup with behavior changes, bug fixes, or public-interface redesign.

Use [Scenario — Safe Refactor](/ai-coding-primer/learn/intermediate/scenario-safe-refactor/) for the worked application.

## Codebase Exploration

Choose this when you do not yet understand the relevant system well enough to propose a change.

Keep the first pass read-only. Ask for entry points, relevant files, data flow, existing checks, local conventions, and unresolved questions. The useful output is a small evidence pack for the next task—not a broad repository summary.

Exploration should end by selecting a concrete bug, feature, or refactor workflow, or by deciding that no change is justified. Use [Context Engineering](/ai-coding-primer/learn/intermediate/context-engineering/) when retrieval scope is the main problem and [Subagent Architectures](/ai-coding-primer/learn/advanced/subagents/) when parallel investigation is worth the coordination cost.

## Choose From the Evidence

- Reproducible failure with expected behavior: **bug fix**.
- New behavior with acceptance decisions: **feature build**.
- Stable behavior with a structural goal: **behavior-preserving refactor**.
- Missing understanding or unknown entry points: **codebase exploration**.

If the evidence does not fit one shape, reduce the task until it does. Do not combine a feature, refactor, and cleanup merely because they touch nearby files.

## Next Step

Run the [Agentic Development Loop](/ai-coding-primer/learn/intermediate/agentic-development-loop/) with the evidence and risks for the selected shape. Open a scenario page when you need a complete worked example.
