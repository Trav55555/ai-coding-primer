---
title: Skills Deep Dive
description: What skills are, how they differ from MCP, and when to create them.
sidebar:
  order: 3
---

:::note[Freshness metadata]
Reviewed: May 2026. Volatile fields: exact feature support, pricing, quotas, privacy terms, and enterprise controls. Verify live vendor docs before choosing or standardizing on this reference.
:::

Skills are reusable instructions for recurring work. They describe how an agent should approach a class of tasks.

## What a Skill Is

A skill is usually one of these:

- a `SKILL.md` file that packages a repeatable workflow
- a project instruction file such as `AGENTS.md`, `CLAUDE.md`, or `.cursorrules`
- a command pack or slash command for a recurring task
- a procedure that describes how to use tools in a specific domain

The common property is reuse. A skill should change behavior on recurring tasks.

## Skills vs MCP

| Concept | What it gives the agent | Typical artifact | Example |
|---|---|---|---|
| MCP | access to data or external actions | server config, tool schema | GitHub MCP server, Playwright MCP, Context7 |
| Skill | a repeatable way to do work | `SKILL.md`, `AGENTS.md`, `.cursorrules`, command pack | code-review checklist, release workflow, debugging procedure |

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

## Project Instruction Files

`AGENTS.md`, `CLAUDE.md`, and `.cursorrules` are the simplest skills for many teams.

They are useful for:

- commands the agent should run
- project gotchas
- code style rules that are not obvious from the code
- boundaries such as `never touch generated files`
- verification requirements

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

Different tools package skills differently:

- project root instruction files
- tool-specific rules files
- dedicated `skills/` directories
- slash command configs
- internal docs the agent is told to consult

The packaging matters less than the behavior. If it changes how the agent performs a recurring task, it is functioning as a skill.

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

- OpenAI Codex discovers `AGENTS.md` files from the repo and uses them as project instructions.
- Cline uses planning prompts and command workflows to standardize deeper tasks.
- LangChain's skills model frames skills as reusable instructions loaded only when needed.
- Microsoft's agent framework treats skills as portable expertise packages rather than raw tool access.

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

- [LangChain: Skills](https://blog.langchain.com/langchain-skills/)
- [Microsoft Agent Framework Overview](https://learn.microsoft.com/en-us/agent-framework/overview/)
- [llms.txt](https://llmstxt.org/)
- [Stripe llms.txt](https://docs.stripe.com/llms.txt)
- [OpenAI Codex `AGENTS.md` implementation](https://github.com/openai/codex/blob/main/codex-rs/core/src/agents_md.rs)
