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

MCP is a connectivity layer. It defines what the agent can reach. It does not define how the agent should use that access, what permissions are appropriate, or how results should be verified.

## When MCP Is Needed

MCP is usually unnecessary when:

- you are starting with basic AI coding workflows
- the task is local code editing plus tests
- built-in tool configuration already provides the needed access

MCP may be useful for:

- browser automation and testing
- database queries and schema inspection
- current documentation lookup
- custom internal integrations
- issue tracker or repository workflows

If the question is "how do I let the agent use GitHub, a browser, or a docs service?" it is likely an MCP question.

If the question is "how should the agent perform code review or release prep?" it is likely a skills or workflow question.

## Common MCP Server Categories

| Server type | Use case | Example install pattern |
|---|---|---|
| Documentation lookup | retrieve current library docs | Context7-style documentation server |
| Filesystem | sandboxed file access | filesystem server with explicit directory scope |
| Repository hosting | inspect issues, PRs, and repo metadata | GitHub or GitLab server |
| Browser automation | test UI flows and collect screenshots | Playwright-style server |
| Database | inspect schemas or query data | database-specific server with read limits |

Install commands change and should be checked against current official docs before use.

## MCP in Practice

The practical pattern is:

1. identify the external system the agent needs
2. choose the narrowest server and permission scope
3. pair the server with a workflow or skill that defines how to use it
4. define verification and logging expectations
5. remove or disable access when the task no longer needs it

Examples:

- use repository MCP to inspect issues or draft PR notes
- use browser MCP to test a UI flow
- use documentation MCP to fetch current API docs

The connection alone is not sufficient. The workflow around it still determines safety and quality.

## Token Cost

MCP tools can add large amounts of context:

| MCP tool output | Typical cost |
|---|---|
| Playwright screenshot | 15,000+ tokens |
| Full DOM snapshot | 10,000-50,000 tokens |
| Database query result | variable |

Large tool outputs can crowd out task-relevant context.

Mitigations:

- use targeted selectors instead of full page captures
- limit database result sizes
- summarize long outputs before continuing
- monitor token usage when the tool supports it
- keep raw logs outside the main prompt when possible

## Security Note

MCP servers run with the permissions granted to them. Treat each server as software with a trust boundary.

Minimum checks:

- verify the source and maintainer
- prefer official or audited servers
- pin versions where possible
- run untrusted servers in containers or sandboxes
- limit filesystem and network access
- review command logs for high-permission workflows

Example sandboxing shape:

```bash
# Sandboxed execution for untrusted servers
docker run --rm -it mcp/playwright
```

## Registries

- [Docker MCP Catalog](https://hub.docker.com/mcp) — containerized server catalog
- [mcp.so](https://mcp.so) — community registry; verify source and behavior before use

## MCP vs Skills

Use MCP when the agent needs external access.

Use skills when the agent needs a repeatable procedure.

A typical governed setup uses MCP for access and skills or workflow rules for behavior.

## Bibliography

- [Model Context Protocol Specification](https://modelcontextprotocol.io/specification/2025-11-25)
- [Model Context Protocol Docs](https://modelcontextprotocol.io/docs/getting-started/intro)
- [Anthropic: Model Context Protocol announcement](https://www.anthropic.com/news/model-context-protocol)
- [Official MCP GitHub Servers](https://github.com/modelcontextprotocol/servers)
