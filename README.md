# Augmented Coding Primer

**[Live Site →](https://trav55555.github.io/ai-coding-primer/)**

From your first prompt to production: AI-integrated IDEs, terminal tools, and workflows.

## Documentation

**[Read the full guide →](https://trav55555.github.io/ai-coding-primer/)**

## Quick Links

| Section | Description |
|---------|-------------|
| [Getting Started](https://trav55555.github.io/ai-coding-primer/learn/beginner/introduction/) | First steps with AI coding tools |
| [Choose Your Tool](https://trav55555.github.io/ai-coding-primer/learn/beginner/choose-your-tool/) | Compare IDEs, extensions, and CLI tools |
| [Effective Patterns](https://trav55555.github.io/ai-coding-primer/learn/intermediate/effective-patterns/) | Best practices for working with AI |
| [Security Risks](https://trav55555.github.io/ai-coding-primer/security/risks/) | Prompt injection, supply chain attacks |
| [Templates](https://trav55555.github.io/ai-coding-primer/templates/) | CLAUDE.md and .cursorrules templates |

### Terminal Tools

| Tool | Description |
|------|-------------|
| [Codex CLI](https://trav55555.github.io/ai-coding-primer/tools/cli/codex-cli/) | OpenAI's open-source agent with sandbox mode |
| [OpenCode](https://trav55555.github.io/ai-coding-primer/tools/cli/opencode/) | BYOK terminal agent, full MCP support |
| [Claude Code](https://trav55555.github.io/ai-coding-primer/tools/cli/claude-code/) | Anthropic's official agentic CLI |
| [Aider](https://trav55555.github.io/ai-coding-primer/tools/cli/aider/) | Open-source, git-native pair programmer |
| [Gemini CLI](https://trav55555.github.io/ai-coding-primer/tools/cli/gemini-cli/) | Free tier, 1M context, multimodal |

## Local Development

```bash
cd site
npm install
npm run dev      # Preview at localhost:4321
npm run build    # Build for production
```

## Structure

```
ai-coding-primer/
├── site/                    # Astro Starlight documentation site
│   └── src/content/docs/    # All documentation pages
├── templates/               # Downloadable CLAUDE.md templates
│   ├── claude-md/           # CLAUDE.md by stack
│   └── cursorrules/         # .cursorrules by stack
├── data/                    # Model/tool reference data (YAML)
└── docs/legacy/             # Archived original README
```

## License

MIT
