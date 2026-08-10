# Agentic Engineering Primer

**[Live Site →](https://trav55555.github.io/ai-coding-primer/)**

A practical guide to AI-assisted engineering workflows, tool boundaries, context control, verification, and security.

## Documentation

**[Read the full guide →](https://trav55555.github.io/ai-coding-primer/)**

## Quick Links

| Section | Description |
|---------|-------------|
| [Getting Started](https://trav55555.github.io/ai-coding-primer/learn/beginner/introduction/) | First steps with AI coding tools |
| [Choose a Workflow and Stack](https://trav55555.github.io/ai-coding-primer/learn/beginner/choose-your-tool/) | Pick an initial workflow shape without turning it into a vendor ranking |
| [Effective Patterns](https://trav55555.github.io/ai-coding-primer/learn/intermediate/effective-patterns/) | Verification, context, and review patterns |
| [Security Risks](https://trav55555.github.io/ai-coding-primer/team/security-risks/) | Prompt injection, supply chain, permissions, and autonomous-agent risks |
| [Templates](https://trav55555.github.io/ai-coding-primer/templates/) | Reusable project context files |

### Terminal Tools

| Tool | Description |
|------|-------------|
| [Codex CLI](https://trav55555.github.io/ai-coding-primer/tools/cli/codex-cli/) | OpenAI terminal coding agent |
| [OpenCode](https://trav55555.github.io/ai-coding-primer/tools/cli/opencode/) | BYOK terminal agent |
| [Claude Code](https://trav55555.github.io/ai-coding-primer/tools/cli/claude-code/) | Anthropic terminal agent |
| [Aider](https://trav55555.github.io/ai-coding-primer/tools/cli/aider/) | Git-oriented pair-programming CLI |
| [Retired and Transitioned Tools](https://trav55555.github.io/ai-coding-primer/reference/retired-and-transitioned-tools/) | Migration checks for changed or sunset tool workflows |
| [Pi Coding Agent](https://trav55555.github.io/ai-coding-primer/tools/cli/pi/) | Minimal extensible harness with skills, extensions, and packages |

### Agent Platforms

| Tool | Description |
|------|-------------|
| [Agent Platform Boundaries](https://trav55555.github.io/ai-coding-primer/reference/agent-platform-boundaries/) | Evaluate gateways, memory, skills, schedules, and execution authority |

## Local Development

```bash
cd site
npm install
npm run dev      # Preview at localhost:4321
npm run build    # Build for production
```

## Structure

```text
ai-coding-primer/
├── site/                    # Astro Starlight documentation site
│   └── src/content/docs/    # All documentation pages
├── templates/               # Downloadable project context templates
│   ├── claude-md/           # CLAUDE.md by stack
│   └── cursorrules/         # .cursorrules by stack
├── data/                    # Model/tool reference data (YAML)
└── docs/legacy/             # Archived original README
```

## License

MIT
