---
title: Skills Deep Dive
description: What skills are, how they differ from MCP, and when to create them.
sidebar:
  order: 3
---

:::note[Freshness metadata]
Reviewed: August 2026. Volatile fields: skill discovery paths, package formats, tool support, and installation behavior. Verify the current tool and skill-format documentation before installing or standardizing.
:::

Skills are reusable instructions for recurring work. They describe how an agent should approach a class of tasks.

## What a Skill Is

In tools that support the Agent Skills pattern, a skill is usually a directory containing `SKILL.md` plus optional scripts, references, or assets. Other products use “skill” more loosely, so verify the format the target tool actually discovers.

A project instruction file, slash command, and skill can all influence recurring work, but they are different artifacts:

- project instructions provide repository-wide context and constraints
- commands provide a named entry point
- skills package a task-specific procedure that can be discovered or loaded when needed

Keep those boundaries explicit so a short project file does not grow into a library of unrelated procedures.

## Skills vs MCP

| Concept | What it gives the agent | Typical artifact | Example |
|---|---|---|---|
| MCP | access to data or external actions | server config, tool schema | GitHub MCP server, Playwright MCP, Context7 |
| Skill | a repeatable way to do work | `SKILL.md` plus reviewed resources | code-review checklist, release workflow, debugging procedure |

MCP answers: **What can the agent connect to?**

Skills answer: **How should the agent perform this recurring task?**

Many systems use both: MCP for access, skills for procedure.

## When Skills Are Useful

Without reusable instructions, agents may rediscover the same workflow in each session.

A skill is useful when a task is:

1. recurring
2. important enough to standardize
3. error-prone without explicit steps
4. easier to review when the output has a fixed shape

Examples:

- code review
- incident writeups
- migration planning
- test generation
- release prep
- evidence-led research

## Project Instructions Are Related but Distinct

`AGENTS.md`, `CLAUDE.md`, and current tool-specific rule files provide repository context. They are useful for commands, gotchas, non-obvious conventions, boundaries, and verification requirements that apply across tasks.

Use a skill when a particular recurring task needs its own inputs, procedure, output shape, or stop conditions. See [Project Context Files](/ai-coding-primer/learn/advanced/project-context-files/) for the context-file boundary.

## Task-Specific Skills

Task-specific skills should specify:

- when to use the skill
- inputs to gather first
- steps to follow
- tools allowed or expected
- output format
- stop conditions or failure checks

## Command Packs

A command pack is a stable entry point for common work. Slash commands or command packs are appropriate when the task is common enough that people should not rewrite the prompt each time.

## Skill Contents

A useful skill is short, specific, and operational.

It usually includes:

- trigger conditions
- required inputs
- allowed tools
- procedure
- output format
- failure conditions
- what to avoid

If the skill becomes long reference material, split it or reduce it to the procedure that changes behavior.

## Minimal Skill Shape

```md
# Review Pull Request

Use this when reviewing a medium or large code change.

## Gather first
- changed files
- test results
- user-facing impact

## Check
- correctness
- scope creep
- missing verification
- risky edge cases

## Output
- 3-5 findings max
- group by severity
```

The goal is consistency on recurring work, not a complete operating manual.

## How Skills Evolve

Start with one repeated failure.

Examples:

- the agent keeps missing the same review step
- it forgets a deployment command
- it uses the wrong framework pattern
- it produces output in an unusable format

When that happens more than once, write the smallest skill that prevents the repeated failure.

## Where Skills Live

Discovery paths differ by tool. A tool may load skills from a dedicated project or user directory, a package, or an explicitly configured path. Check the current documentation before choosing a shared location.

Keep the reviewed source in one controlled directory or repository when possible. Tool-specific installs can point to that source instead of creating several copies that drift.

## Installing Third-Party Skills

Treat skill installation as a supply-chain operation. A skill can change agent behavior, ask the model to run commands, or reference scripts and assets outside the main instruction file.

Avoid unpinned remote installers for real projects. Commands such as `npx skills`, `npx add-skill`, `npx skills@latest`, and `npx add-skill@latest` can execute package code before the skill has been reviewed.

Use this intake process instead:

1. clone or download the candidate skill source
2. inspect `SKILL.md`, scripts, package metadata, and referenced assets
3. check for network calls, package installs, shell commands, and writes outside the intended skills directory
4. pin the approved version or commit
5. copy or symlink the reviewed skill into the controlled skills directory
6. test it in a low-risk repository before using it on sensitive code

For teams, maintain an approved skills directory or private registry. Do not let tools install third-party skills directly into each developer's agent directory without review.

## Examples

Good candidates include:

- a pull-request review procedure with severity and evidence requirements
- a release check that gathers version, changelog, tests, and rollback evidence
- a database-migration review with explicit prohibited actions
- a source-audit procedure that records claim, source, date, and limitation

Each example has a trigger, a repeatable procedure, and a reviewable output. A collection of general tips does not need to become a skill.

## Common Mistakes

- writing skills that are too long to use in practice
- putting general documentation where a short procedure would work better
- confusing a tool connection with a skill
- creating a new skill before identifying the repeated failure it should prevent

## When Not to Create a Skill

Do not create a skill for a one-off task.

Do not create a skill only because the tool supports skills.

Create one when the work is recurring, error-prone, and important enough to standardize.

## Next Steps

- [Project Context Files](/ai-coding-primer/learn/advanced/project-context-files/)
- [MCP Deep Dive](/ai-coding-primer/learn/advanced/mcp-deep-dive/)
- [Agent Harness](/ai-coding-primer/learn/advanced/agent-harness/)

## Bibliography

- [Agent Skills specification](https://agentskills.io/)
- [Project Context Files](/ai-coding-primer/learn/advanced/project-context-files/)
