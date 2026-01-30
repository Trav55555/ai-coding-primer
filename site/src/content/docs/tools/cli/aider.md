---
title: Aider
description: Open-source terminal pair programmer.
sidebar:
  order: 2
---

[Aider](https://aider.chat) is an open-source AI pair programming tool for the terminal.

## Overview

| | |
|---|---|
| **Type** | CLI |
| **Open Source** | Yes (Apache 2.0) |
| **Best For** | BYOK, polyglot projects, benchmarking |

## Key Features

- **Git-native** — Auto-commits with descriptive messages
- **BYOK** — Any OpenAI-compatible API
- **Multi-file Editing** — Handles large refactors
- **Voice Input** — Speak your prompts
- **Leaderboard** — Public benchmarks for model comparison

## Installation

```bash
# pip
pip install aider-chat

# pipx (recommended)
pipx install aider-chat

# homebrew
brew install aider
```

## Pricing

| Option | Cost |
|--------|------|
| Aider | Free (open source) |
| API | Your provider's rates |

You bring your own API key — no subscription to Aider itself.

## Privacy

| Setting | Value |
|---------|-------|
| Open Source | Yes (auditable) |
| Training | Depends on API provider |
| Data Storage | Local only |
| Jurisdiction | Your API provider |

:::tip[Privacy Advantage]
Aider is fully open source. No data goes to Aider — only to your chosen API provider.
:::

## Models

Works with any OpenAI-compatible API:
- OpenAI (GPT-5.2, Codex 5)
- Anthropic (Claude Opus/Sonnet 4.5)
- DeepSeek, Mistral, Ollama
- Any OpenAI-compatible endpoint

## Getting Started

```bash
# Set API key
export OPENAI_API_KEY=sk-...

# Start in your project
cd your-project
aider

# Or specify files to edit
aider src/main.py src/utils.py
```

## Key Commands

| Command | Action |
|---------|--------|
| `/add <file>` | Add file to context |
| `/drop <file>` | Remove file from context |
| `/undo` | Undo last change |
| `/diff` | Show pending changes |
| `/commit` | Commit current changes |
| `/clear` | Clear conversation |
| `/help` | Show all commands |

## Aider Conventions File

Create `.aider.conf.yml` for project settings:

```yaml
# .aider.conf.yml
model: claude-3-5-sonnet-20241022
auto-commits: true
gitignore: true

# Files to always include
read:
  - README.md
  - docs/architecture.md
```

## The Aider Leaderboard

Aider maintains a [public leaderboard](https://aider.chat/docs/leaderboards/) comparing models on real coding tasks. Useful for model selection.

## Tips

- Use `/add` to bring relevant files into context
- Enable auto-commits for automatic git history
- Check the leaderboard before choosing a model
- Use with Ollama for 100% local operation
