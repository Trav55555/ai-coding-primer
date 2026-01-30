---
title: MCP Deep Dive
description: When and how to use Model Context Protocol servers.
sidebar:
  order: 2
---

MCP (Model Context Protocol) lets AI tools connect to external services — databases, APIs, browsers, etc.

## When You Need MCP

**You probably don't need MCP if:**
- You're just starting with AI coding
- Your workflow is code editing + tests
- Stock tool configuration works fine

**You might need MCP for:**
- Browser automation and testing
- Database queries and schema inspection
- Real-time documentation lookup
- Custom integrations

## Essential MCP Servers

If you do need MCP, start with these:

| MCP Server | Use Case | Install |
|------------|----------|---------|
| **Context7** | Documentation lookup | `npx -y @context7/mcp` |
| **Filesystem** | Sandboxed file access | `npx -y @anthropic/mcp-filesystem` |
| **GitHub** | Repo management, PRs | `npx -y @anthropic/mcp-github` |
| **Playwright** | Browser automation | `npx -y @anthropic/mcp-playwright` |

## Token Cost Warning

MCP tools can consume massive context:

| MCP Tool | Typical Cost |
|----------|--------------|
| Playwright screenshot | 15,000+ tokens |
| Full DOM snapshot | 10,000-50,000 tokens |
| Database query result | Variable |

A single screenshot can exhaust hours of token allocation.

**Mitigations:**
- Use targeted selectors, not full page captures
- Limit result set sizes
- Monitor token usage

## Security Note

MCP servers run with your permissions. Use caution:

```bash
# Sandboxed execution for untrusted servers
docker run --rm -it mcp/playwright
```

## Registries

- [Docker MCP Catalog](https://hub.docker.com/mcp) — Verified, containerized (recommended)
- [mcp.so](https://mcp.so) — Community registry (verify before use)
