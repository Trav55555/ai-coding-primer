---
title: Choose Your Tool
description: Pick the right AI coding tool for your situation.
sidebar:
  order: 3
---

There are three categories of AI coding tools: **IDEs**, **Extensions**, and **CLI tools**. Start with one that matches your current workflow.

## Quick Recommendations

| If you want... | Start with | Why |
|----------------|------------|-----|
| Easiest setup | [Cursor](https://cursor.com) | VS Code-based, works out of the box |
| Free + open source | [Zed](https://zed.dev) | Full-featured, fast, $0 |
| Keep your current editor | [Continue.dev](https://continue.dev) | VS Code/JetBrains extension |
| Terminal workflow | [Claude Code](https://claude.ai/code) or [Codex CLI](https://github.com/openai/codex) | Agentic CLI tools |
| Free terminal | [Gemini CLI](https://github.com/google-gemini/gemini-cli) | Generous free tier, large context |
| 100% local/private | [Continue.dev](https://continue.dev) + [Ollama](https://ollama.com) | No data leaves your machine* |
| Enterprise compliance | [Cursor Teams](https://cursor.com) | Zero-retention, SOC 2 |

## IDEs (Full Environments)

These are complete editors with AI built in.

| Tool | Price | Best For |
|------|-------|----------|
| **[Cursor](https://cursor.com)** | Free / $20+ | Easiest start, most polished |
| **[Zed](https://zed.dev)** | Free | Speed, open source, BYOK |
| **[Windsurf](https://windsurf.com)** | Free / $15+ | Privacy, EU hosting option |
| **[Antigravity](https://antigravity.dev)** | Free (preview) | Free Gemini, visual/UI work |
| **[Kiro](https://kiro.dev)** | Free (preview) | Spec-driven, AWS integration |

## Extensions (Add to Existing Editor)

Add AI to VS Code, JetBrains, or Neovim.

| Tool | Price | Best For |
|------|-------|----------|
| **[GitHub Copilot](https://github.com/features/copilot)** | Free / $10+ | Microsoft ecosystem, enterprise |
| **[Continue.dev](https://continue.dev)** | Free | Open source, local models |
| **[Supermaven](https://supermaven.com)** | Free / $10+ | Ultra-fast completions |
| **[Amazon Q](https://aws.amazon.com/q/developer/)** | Free / $19+ | AWS integration, large context |
| **[Cody](https://sourcegraph.com/cody)** | Free / $9+ | Multi-repo, code search |
| **[Tabnine](https://tabnine.com)** | Free / $12+ | Self-hosted, air-gapped |

## CLI Tools (Terminal)

For developers who prefer working in the terminal.

| Tool | Price | Best For |
|------|-------|----------|
| **[Claude Code](https://claude.ai/code)** | Via subscription | Agentic workflows, MCP |
| **[Codex CLI](https://github.com/openai/codex)** | Via subscription | Sandbox mode, open source |
| **[Gemini CLI](https://github.com/google-gemini/gemini-cli)** | Free tier | Large context, multimodal |
| **[OpenCode](https://github.com/sst/opencode)** | Free (BYOK) | Multi-provider, MCP support |
| **[Aider](https://aider.chat)** | Free (BYOK) | Git integration, benchmarks |

## Authentication Options

Most tools offer multiple ways to access AI models:

| Method | How It Works | Best For |
|--------|--------------|----------|
| **Subscription** | Pay monthly, unlimited use | Predictable costs |
| **BYOK** | Bring your own API key, pay per token | Control, flexibility |
| **Local** | Run models on your hardware | Privacy, offline use |

## Decision Flowchart

```
What's your #1 priority?
│
├─► "Just works" (easiest setup)
│   └─► Cursor — works out of the box, free tier
│
├─► Free / minimize cost
│   ├─► Want a GUI editor? → Zed (fully free, open source)
│   ├─► Terminal workflow? → Gemini CLI (generous free tier)
│   └─► BYOK flexibility? → OpenCode or Aider (pay only API costs)
│
├─► 100% local / maximum privacy
│   └─► Continue.dev + Ollama (needs 16GB+ RAM, GPU recommended)
│
├─► Terminal-first workflow
│   ├─► Have Claude subscription? → Claude Code
│   ├─► Want free tier? → Gemini CLI
│   └─► Want BYOK flexibility? → OpenCode or Aider
│
├─► Keep my current editor
│   ├─► VS Code → Continue.dev or GitHub Copilot
│   └─► JetBrains → Continue.dev
│
└─► Enterprise / compliance requirements
    └─► Cursor Teams, GitHub Copilot Business, or Windsurf Enterprise
```

## Our Recommendation

**For most developers:** Start with **Cursor** (easiest) or **Zed** (free + fast). Both have free tiers and work out of the box.

**For privacy-conscious:** **Continue.dev + Ollama** gives you 100% local AI coding with no data leaving your machine. (*Requires capable hardware—16GB+ RAM, ideally GPU with 8GB+ VRAM.*)

**For teams:** **Cursor Teams** or **GitHub Copilot Business** offer enterprise features and compliance guarantees.

## Next Steps

Picked a tool? [Set up your environment →](/ai-coding-primer/learn/beginner/setup-checklist/)
