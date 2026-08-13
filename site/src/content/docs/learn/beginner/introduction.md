---
title: Curriculum
description: A practical learning path through safe and reliable AI-assisted engineering.
sidebar:
  order: 1
---

This primer is organized as a short self-study curriculum. It teaches one operating model for AI-assisted engineering, then applies it to common tasks, context control, and team use.

The curriculum is not a certification or a survey of every product. Complete the modules that match your work. Use tool, model, research, and benchmark pages as reference when a lesson points to them.

## Before You Start

You should be able to:

- open and inspect a small code repository
- run one project check, such as a test, type check, build, or preview
- inspect changed files with version control or an editor
- undo a local change

If these are unfamiliar, practice them without an AI tool first. Verification is weak when you cannot inspect the result yourself.

## Module 1: Start Safely

**Outcome:** run one bounded AI-assisted task with a known baseline, limited authority, and reviewable evidence.

1. [Agentic Engineering](/ai-coding-primer/learn/beginner/what-is-ai-coding/) — understand what changes when a tool can read, edit, and execute.
2. [Quick Security Checklist](/ai-coding-primer/security/checklist/) — classify the code and restrict data, credentials, and actions.
3. [Choose a Workflow and Stack](/ai-coding-primer/learn/beginner/choose-your-tool/) — choose an operating surface without starting from vendor rankings.
4. [Setup Checklist](/ai-coding-primer/learn/beginner/setup-checklist/) — establish a baseline, relevant check, and permission boundary.
5. **Practice:** [Your First Session](/ai-coding-primer/learn/beginner/first-session/) — add one bounded test and review the evidence.

**Complete this module when you can show:** the task boundary, baseline command, allowed file, stop condition, final diff, and command result.

Do not skip directly to a large feature. The first task is intentionally small enough to review without trusting the agent's judgment.

## Module 2: Work Reliably

**Outcome:** use the same operating model for bug fixes, features, and behavior-preserving refactors.

1. [Agentic Development Loop](/ai-coding-primer/learn/intermediate/agentic-development-loop/) — learn the sole complete implementation procedure in this primer.
2. [Workflow Archetypes](/ai-coding-primer/learn/intermediate/workflow-archetypes/) — choose the task shape before prompting.
3. [Effective Patterns](/ai-coding-primer/learn/intermediate/effective-patterns/) — use prevention and verification tactics inside the loop.
4. [When It's Not Working](/ai-coding-primer/learn/intermediate/troubleshooting/) — diagnose degraded work, reset, or switch to manual implementation.

Apply the loop through at least one worked practice:

- [Fix a Bug](/ai-coding-primer/learn/intermediate/scenario-bug-fix/) — preserve a failing signal, explain the cause, and prove the repair.
- [Add a Feature](/ai-coding-primer/learn/intermediate/scenario-feature-build/) — settle consequential choices and prove one thin slice.
- [Safe Refactor](/ai-coding-primer/learn/intermediate/scenario-safe-refactor/) — characterize behavior and change one structural seam.

**Complete this module when you can explain:** the expected behavior, non-goals, allowed scope, evidence, assumptions, and reason every changed file belongs in the task.

## Module 3: Control Context and Autonomy

**Outcome:** decide what information and authority the task needs without expanding the workflow unnecessarily.

1. [Core Concepts](/ai-coding-primer/learn/intermediate/core-concepts/) — use the primer's terms consistently.
2. [Context Engineering](/ai-coding-primer/learn/intermediate/context-engineering/) — select task-relevant files, instructions, tools, and saved state.
3. [Choose an Autonomy Mode](/ai-coding-primer/learn/intermediate/five-levels/) — tie autonomy to consequence, feedback, permissions, reversibility, and observability.
4. [Learning with AI](/ai-coding-primer/learn/intermediate/learning-with-ai/) — preserve recall, explanation, and debugging skill.

Use advanced material only when a recurring limitation appears:

- [AGENTS.md and Project Instructions](/ai-coding-primer/learn/advanced/project-context-files/) for stable repository-wide commands, gotchas, and boundaries
- [Skills](/ai-coding-primer/learn/advanced/skills/) for a recurring task that needs its own procedure, inputs, output, and stop conditions
- [MCP](/ai-coding-primer/learn/advanced/mcp-deep-dive/) when the agent needs approved access to external data or actions
- [Subagent Architectures](/ai-coding-primer/learn/advanced/subagents/) for isolated parallel work
- [Agent Harness](/ai-coding-primer/learn/advanced/agent-harness/) for longer-running tasks and durable state

Keep one-task objectives and stop points in the task prompt. Put mandatory controls in permissions, scripts, hooks, or CI rather than relying on instruction prose.

**Complete this module when you can state:** what the agent needs to know, what it may do, what persists after the session, and which signal should stop or narrow the work.

## Module 4: Govern Team Use

**Outcome:** decide whether one team workflow is safe and ready for a bounded pilot.

1. [Governance and Rollout](/ai-coding-primer/team/governance/) — define approved workflows, evidence, owners, and pilot gates.
2. [Team Threat Model](/ai-coding-primer/team/security-risks/) — map workflow threats to controls.
3. [Privacy Review Framework](/ai-coding-primer/security/privacy-comparison/) — review procurement and data use.
4. [Technical Security and Data Paths](/ai-coding-primer/security/deep-dive/) — inspect technical access, storage, execution, and containment.

**Complete this module when your pilot record names:** the repository and data class, approved authority, required evidence, responsible reviewers, task cap, review date, and conditions to stop, modify, or expand.

## Use Reference Material After the Workflow Is Clear

The [Reference Appendix](/ai-coding-primer/reference/appendix/) links to tool snapshots and other fast-changing material. The [Research Overview](/ai-coding-primer/research/overview/) explains the evidence categories used by the primer. Model, billing, benchmark, template, and historical pages support decisions; they are not required curriculum.

## Operating Rules to Retain

After completing any module, you should still be able to recall these rules without looking:

- Unverified output is not evidence.
- Tool access should match the task, not the tool's maximum capability.
- Expected behavior must be clear before implementation.
- Changes must remain small enough for a human to explain and maintain.
- Stop when evidence stops improving or a consequential decision lacks an owner.
