---
title: MCP Deep Dive
description: When and how to use Model Context Protocol servers.
sidebar:
  order: 2
---

:::note[Freshness metadata]
Reviewed: May 2026. Volatile fields: exact feature support, pricing, quotas, privacy terms, and enterprise controls. Verify live vendor docs before choosing or standardizing on this reference.
:::


MCP (Model Context Protocol) lets AI tools connect to external services such as databases, APIs, browsers, and documentation systems.

It is the connectivity layer, not the judgment layer. MCP tells the agent what it can reach. It does not tell the agent how to use those capabilities well.

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

If the question is "how do I let the agent use GitHub, a browser, or a docs service?" that is probably an MCP question.

If the question is "how should the agent perform code review or release prep?" that is probably a skills question.

## Essential MCP Servers

If you do need MCP, start with these:

| MCP Server | Use Case | Install |
|------------|----------|---------|
| **Context7** | Documentation lookup | `npx -y @context7/mcp` |
| **Filesystem** | Sandboxed file access | `npx -y @anthropic/mcp-filesystem` |
| **GitHub** | Repo management, PRs | `npx -y @anthropic/mcp-github` |
| **Playwright** | Browser automation | `npx -y @anthropic/mcp-playwright` |

These are examples of MCP's core value: one standard protocol, many tools, and less custom integration work per agent client.

## MCP in Practice

The practical pattern is simple:

1. give the agent access to the system it needs
2. keep the tool surface narrow
3. pair the MCP server with a workflow or skill that says how to use it

For example:

- use GitHub MCP to inspect issues or open PRs
- use Playwright MCP to test a UI flow
- use Context7 MCP to fetch current docs

The connection alone is not enough. The workflow around it still matters.

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

## MCP vs Skills

Use MCP when you need external access.

Use skills when you need reusable judgment.

Most serious setups use both: MCP to reach systems, skills to keep behavior consistent.

## Bibliography

- [Model Context Protocol Specification](https://modelcontextprotocol.io/specification/2025-11-25)
- [Model Context Protocol Docs](https://modelcontextprotocol.io/docs/getting-started/intro)
- [Anthropic: Model Context Protocol announcement](https://www.anthropic.com/news/model-context-protocol)
- [Official MCP GitHub Servers](https://github.com/modelcontextprotocol/servers)
