---
title: Choose Your Tool
description: Pick the right AI coding tool shape for your workflow.
sidebar:
  order: 3
---

Most people make this harder than it needs to be. There are three tool shapes that matter: **IDEs**, **extensions**, and **CLI tools**. Start with how you like to work, then pick the lightest option that fits.

If you want durable decision criteria first, read [Tool Comparison](/ai-coding-primer/tools/comparison/). If you want vendor-specific details, jump to the [Reference Appendix](/ai-coding-primer/reference/appendix/).

## Quick Recommendations

| If your workflow is... | Start with... | Why |
|---|---|---|
| editor-first and multi-file | IDE | strongest integrated workflow for navigation, edits, and chat |
| existing-editor and lightweight | Extension | adds AI without replacing your current environment |
| terminal-first and verification-heavy | CLI | best fit for explicit plans, tests, and agentic loops |
| local-first or privacy-constrained | Extension or CLI with local/BYOK support | easier to control deployment and data boundaries |
| managed team rollout | IDE or extension with admin controls | easier identity, policy, and compliance integration |

## At a Glance

| Tool shape | Common options | Best when | Good at | Main tradeoff |
|---|---|---|---|---|
| IDE | Cursor, Windsurf, Zed, Kiro | you want one integrated workspace | navigation, edits, chat, multi-file work | more opinionated environment |
| Extension | GitHub Copilot, Continue, Cody, Tabnine | you already like your editor | lightweight adoption, portability, gradual rollout | less integrated workflow |
| CLI | Claude Code, Codex CLI, OpenCode, Aider, Gemini CLI | you already work in the terminal | explicit plans, diffs, scripts, verification loops | steeper learning curve |

These are examples, not endorsements. Pick the category first, then compare the tools inside it.

## Decide by Workflow, Not Price

### IDEs

Choose an IDE if you want one place to handle navigation, editing, and AI help.

Best for:
- integrated chat, edits, and codebase navigation
- editor-first workflows with frequent multi-file changes
- users who want one environment to handle most tasks

Tradeoff:
- more opinionated environment and more product churn than simpler tool shapes

### Extensions

Choose an extension if you already like your editor and do not want a new environment just to add AI.

Best for:
- keeping existing editor habits
- gradual team rollout
- mixing hosted, BYOK, or local-model setups

Tradeoff:
- less integrated than full AI-native IDE workflows

### CLI Tools

Choose a CLI tool if you already think in commands, diffs, and test output.

Best for:
- long-running agentic workflows
- explicit plans, diffs, and verification loops
- automation-heavy or terminal-native development

Tradeoff:
- steeper learning curve for editor-first users

## Access Models

Most tools offer multiple ways to access models:

| Method | How it works | Best for |
|---|---|---|
| Hosted account | the tool manages model access | easiest setup |
| BYOK | you bring provider credentials | flexibility and provider choice |
| Local | models run on your hardware or infrastructure | privacy and controlled environments |

## Decision Flow

```
What workflow fits you best right now?
│
├─► "I want one integrated editor workflow"
│   └─► IDE
│
├─► "I want to keep my editor"
│   └─► Extension
│
├─► "I work in the terminal already"
│   └─► CLI
│
├─► "I need local control or tighter privacy"
│   └─► Extension or CLI with local/BYOK support
│
└─► "I need enterprise policy and rollout controls"
    └─► IDE or extension with managed admin features
```

## Our Recommendation

For most beginners, the right answer is boring:

- use an **IDE** if you want one integrated environment
- use an **extension** if you already like your editor
- use a **CLI** if you already think in commands, tests, and scripts

Do not burn time comparing vendors before you know which workflow shape actually fits.

## What Not to Optimize Too Early

- Do not start with pricing spreadsheets.
- Do not over-configure MCPs or giant rule files on day one.
- Do not pick a vendor before you know whether you prefer editor-first, terminal-first, or local-first work.

## Vendor Details Live in the Appendix

Once you know your preferred tool shape, use the [Reference Appendix](/ai-coding-primer/reference/appendix/) for vendor-specific pages.

## Next Steps

Picked a tool shape? [Set up your environment ->](/ai-coding-primer/learn/beginner/setup-checklist/)

Then learn the workflows that matter: [Workflow Archetypes ->](/ai-coding-primer/learn/intermediate/workflow-archetypes/)
