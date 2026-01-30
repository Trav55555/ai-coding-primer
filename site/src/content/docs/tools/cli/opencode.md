---
title: OpenCode
description: Open-source BYOK terminal agent.
sidebar:
  order: 3
---

[OpenCode](https://github.com/sst/opencode) is an open-source terminal coding agent with BYOK (Bring Your Own Key).

## Overview

| | |
|---|---|
| **Type** | CLI |
| **Open Source** | Yes |
| **Best For** | BYOK, customization, self-hosting |

## Key Features

- **BYOK** — Use any API provider
- **Agentic** — File editing, terminal commands
- **MCP Support** — External tool integration
- **Customizable** — Extensive configuration options
- **Session Management** — Resume conversations

## Installation

```bash
# npm
npm install -g opencode

# Or run directly
npx opencode
```

## Pricing

| Option | Cost |
|--------|------|
| OpenCode | Free (open source) |
| API | Your provider's rates |

No subscription — you only pay your API provider.

## Privacy

| Setting | Value |
|---------|-------|
| Open Source | Yes (auditable) |
| Training | None (BYOK) |
| Data Storage | Local only |
| Jurisdiction | Your API provider |

:::tip[Maximum Privacy]
OpenCode sends nothing to any server except your chosen API. Fully auditable source code.
:::

## Supported Providers

- OpenAI
- Anthropic
- Google (Gemini)
- AWS Bedrock
- Azure OpenAI
- Ollama (local)
- Any OpenAI-compatible endpoint

## Getting Started

```bash
# Set API key
export ANTHROPIC_API_KEY=sk-...

# Start in your project
cd your-project
opencode

# Or with specific provider
opencode --provider anthropic --model claude-sonnet-4-5
```

## Configuration

Create `opencode.config.json`:

```json
{
  "provider": "anthropic",
  "model": "claude-sonnet-4-5-20250514",
  "mcpServers": {
    "filesystem": {
      "command": "npx",
      "args": ["-y", "@anthropic/mcp-filesystem"]
    }
  }
}
```

## MCP Integration

OpenCode supports MCP servers for extended capabilities:

```bash
# Add GitHub integration
opencode --mcp github

# Add database access
opencode --mcp postgres
```

## Key Commands

| Command | Action |
|---------|--------|
| `/clear` | Clear context |
| `/session list` | Show saved sessions |
| `/session load <id>` | Resume session |
| `/compact` | Summarize and compress context |

## Tips

- Use Ollama for 100% local, offline operation
- Configure MCP servers for extended capabilities
- Use `/compact` to manage long conversations
- Session management enables pausing/resuming work
