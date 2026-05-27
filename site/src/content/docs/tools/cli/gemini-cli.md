---
title: Gemini CLI
description: Deprecated Google terminal agent reference; verify the current replacement path before adopting.
sidebar:
  order: 4
---

:::note[Freshness metadata]
Reviewed: May 2026. Volatile fields: deprecation status, replacement path, exact feature support, pricing, quotas, privacy terms, and enterprise controls. Verify live Google docs before choosing or standardizing on this reference.
:::


[Gemini CLI](https://github.com/google-gemini/gemini-cli) is Google's open-source terminal coding agent.

:::caution[Deprecated]
Gemini CLI is being deprecated. Treat this page as historical/perishable reference, not as a recommendation to adopt it for new team workflows.

Before using it, check Google's current replacement or migration path.
:::

## Overview

| | |
|---|---|
| **Type** | CLI |
| **Open Source** | Yes |
| **Best For** | Large context, multimodal work, Google ecosystem |

## Key Features

- **Flexible Access** — Works with both Google account access and API keys
- **Large Context** — Up to 1M tokens (see caveats below)
- **Agentic** — File editing, terminal commands
- **Google Integration** — Works with Google Cloud
- **Multimodal** — Image understanding

## Installation

```bash
npm install -g @google/gemini-cli
```

## Access Model

Gemini CLI supports both Google account access and API-key-based access. Limits and account terms change often, so check Google's current docs before relying on a specific allowance.

:::caution[Workflow Fit]
Because Gemini CLI is deprecated, do not standardize new workflows on it unless Google documents a supported continuation path.

Use this page to understand the old workflow shape, then verify the current Google-supported terminal option.
:::

## Privacy

| Setting | Value |
|---------|-------|
| Open Source | Yes (client) |
| Training | GCP terms apply |
| Jurisdiction | US (Google) |

## Models Available

- Gemini 3 Pro (up to 1M context)
- Gemini 3 Flash (fast iteration)
- Gemini Deep Think (reasoning)

:::caution[Context Reality]
While Gemini advertises 1M tokens, practical limits vary by account and workflow. Even with the full window available, retrieval quality degrades significantly past ~200k tokens. Don't assume the full window works reliably.
:::

## Getting Started

```bash
# Authenticate with Google
gemini auth login

# Or use API key
export GOOGLE_API_KEY=...

# Start in your project
cd your-project
gemini
```

## Key Commands

| Command | Action |
|---------|--------|
| `/help` | Show commands |
| `/clear` | Reset context |
| `/model <name>` | Switch model |
| `/image <path>` | Add image to context |

## Use Cases

### Large Codebase Analysis

Gemini's large context window helps with codebase-wide tasks:

```
gemini "Analyze this entire codebase and explain the architecture"
```

Note: For very large codebases, results may be inconsistent. Consider chunking or using targeted queries.

### Visual/UI Work

Gemini excels at visual tasks:

```
gemini /image screenshot.png "Improve the UI of this page"
```

### Multimodal Debugging

```
gemini /image error-screenshot.png "What's causing this error?"
```

## Tips

- Do not choose Gemini CLI for new team standards without checking Google's migration guidance
- Use Gemini 3 Pro for larger context needs only if the current supported tool exposes it
- Use Gemini Flash for quick iterations only if available in the current supported tool
- Leverage multimodal for UI/visual tasks where Google's current tooling supports it
- Start with the access path that matches your Google workflow, then verify current limits separately
- Don't rely on full 1M context — quality degrades past ~200k
