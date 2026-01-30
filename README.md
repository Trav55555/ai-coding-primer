# AI Coding Tools Primer (January 2026)

*From your first prompt to enterprise deployment: AI-integrated IDEs, terminal tools, and workflows.*

## Quick Navigation

| Category | Sections |
|----------|----------|
| **Getting Started** | [What is Agentic Coding?](#what-is-agentic-coding), [Step-by-Step Setup](#getting-started), [Core Concepts](#core-concepts) |
| **Understanding** | [Context Engineering](#context-engineering-beyond-prompt-engineering), [Five Levels of AI Coding](#the-five-levels-of-ai-assisted-coding) |
| **Working Effectively** | [Effective Patterns](#effective-patterns-for-agentic-coding) (Verification, Close the Loop, Subagents), [Common Mistakes](#common-mistakes-and-how-to-avoid-them), [When It's Not Working](#when-its-not-working) |
| **Practical** | [Good vs Bad Prompts](#good-vs-bad-prompts), [Project Context Files](#project-context-files), [CLAUDE.md Examples](#example-claudemd-file-nodejs) |
| **Tools** | [IDEs](#ai-native-ides) (Cursor, Zed, Antigravity, Kiro), [Extensions](#vs-code-extensions) (Copilot, Windsurf, Continue.dev), [CLI](#terminalcli-tools) (Claude Code, OpenCode, Gemini, Codex) |
| **Models** | [Providers](#models-vs-providers), [Capabilities](#capabilities-matrix), [Pricing](#api-pricing-per-million-tokens), [Selection Guide](#model-selection-guide), [Benchmark Resources](#staying-current-benchmark--pricing-resources) |
| **Security** | [Slopsquatting](#slopsquatting-package-hallucination), [Normalization of Deviance](#normalization-of-deviance), [Privacy Matrix](#quick-comparison-matrix), [Deep Dive](#privacy-deep-dive) |

---

## What is Agentic Coding?

**Agentic coding** uses AI assistants that read, write, and execute code autonomously. Unlike simple autocomplete, these tools understand your project structure, run terminal commands, detect errors in their own output, and iterate until the task is complete.

**The core loop**: Intent → Plan → Execute → Reflect → Repeat. The AI parses your request, determines which files to read/edit, makes changes, verifies the result, and adjusts if needed.

---

## Getting Started

### Step 1: Choose a Tool

| If you want... | Start with | Install |
|----------------|------------|---------|
| Easiest setup (VS Code-like) | [Cursor](https://cursor.com) | Download from website |
| Free + open source | [Zed](https://zed.dev) | Download from website |
| Free + Google account | [Antigravity](https://antigravity.google) | Download from website |
| Keep your current editor | [Continue.dev](https://continue.dev) | VS Code/JetBrains extension |
| Terminal-based | [Claude Code](https://claude.ai/code) | `curl -fsSL https://claude.ai/install.sh \| bash` |
| Terminal + OpenAI | [Codex CLI](https://github.com/openai/codex-cli) | `npm install -g @openai/codex` |
| Terminal + BYOK | [OpenCode](https://github.com/sst/opencode) | `npm install -g opencode` |
| 100% local | [Continue.dev](https://continue.dev) + [Ollama](https://ollama.com) | Local install |

**Authentication options**: Some tools offer multiple ways to access AI models:
- **Subscription/OAuth**: Use your existing subscription (Cursor Pro, Claude Pro, ChatGPT Plus) to authenticate without managing API keys
- **BYOK (Bring Your Own Key)**: Use API keys from providers directly—you pay per token, but have more control
- **Local models**: Run models on your own hardware with Ollama or LM Studio—no account needed

### Step 2: Set Up Your Development Environment

AI agents perform better with immediate feedback. Before you start prompting, ensure your project has:

**Language Server (LSP)** — Provides real-time type checking, error detection, go-to-definition.

| Language | LSP | Install |
|----------|-----|---------|
| TypeScript | typescript-language-server | `npm i -g typescript-language-server typescript` |
| Python | Pyright | `pip install pyright` or `npm i -g pyright` |
| C# | OmniSharp | Included with C# extension |
| Go | gopls | `go install golang.org/x/tools/gopls@latest` |
| Rust | rust-analyzer | `rustup component add rust-analyzer` |

**Linter** — Catches style issues and common bugs instantly.

| Language | Linter | Config File |
|----------|--------|-------------|
| TypeScript | ESLint | `eslint.config.js` |
| Python | Ruff | `pyproject.toml` or `ruff.toml` |
| C# | dotnet format | `.editorconfig` |
| Go | golangci-lint | `.golangci.yml` |
| Rust | Clippy | `clippy.toml` |

**Formatter** — Consistent style so the AI doesn't fight your preferences.

| Language | Formatter | Config File |
|----------|-----------|-------------|
| TypeScript | Prettier | `.prettierrc` |
| Python | Ruff / Black | `pyproject.toml` |
| C# | dotnet format | `.editorconfig` |
| Go | gofmt | (built-in, no config) |
| Rust | rustfmt | `rustfmt.toml` |

**Verification**: Run your linter/type-checker before starting AI work. If it fails, fix those errors first—agents struggle with pre-existing broken environments.

```bash
# Examples - run before AI session
npm run lint && npm run typecheck    # TypeScript
ruff check . && pyright              # Python
dotnet build                         # C#
go vet ./... && golangci-lint run    # Go
cargo clippy                         # Rust
```

### Step 3: Create a Project Context File

AI tools read markdown files in your project root to understand context, conventions, and gotchas. Create one:

| Tool | File | Notes |
|------|------|-------|
| Claude Code | `CLAUDE.md` | Official convention |
| Cursor | `.cursorrules` | Or `.cursor/rules/*.mdc` |
| Zed | `AGENTS.md` | Also reads `CLAUDE.md` |
| Continue.dev | `AGENTS.md` | Also reads `CLAUDE.md` |
| Copilot | `.github/copilot-instructions.md` | GitHub convention |
| Any tool | `AGENTS.md` | Widely recognized fallback |

**What to include:**

```markdown
# Project Context

## What This Is
[One sentence describing the project]

## Tech Stack
[Languages, frameworks, key libraries]

## Quick Commands
Use a `justfile` for the most interoperable command interface:

```just
# justfile
dev:
    npm run dev

test:
    npm test

lint:
    npm run lint && npm run typecheck

build:
    npm run build
```

Or list commands in markdown:
- `[command]` - [what it does]
- `[command]` - [what it does]

## Architecture
- `/path/` - [what's here]
- `/path/` - [what's here]

## Gotchas (Things the AI Gets Wrong)
- [Common mistake and correction]
- [Another gotcha]

## Code Style
- [Preference the AI should follow]
- [Another preference]
```

See [Practical Examples](#practical-examples) for full templates by language/stack.

### Step 4: Define a Spec Before Coding

Don't jump straight to "build X." Start with a specification:

**For new features**, create a spec file first:

```markdown
# Feature: CSV Data Export

## Requirements
- Export search results as CSV download
- Support filtering by date range and status
- Handle large datasets (100k+ rows) without timeout
- Include column headers matching UI table

## Technical Approach
- Stream CSV generation (don't load all into memory)
- Use existing `SearchService` for query logic
- Add `ExportController` endpoint returning `text/csv`
- Background job for exports > 10k rows

## Out of Scope
- Excel format (future)
- Scheduled/recurring exports (future)
- Custom column selection (future)

## Acceptance Criteria
- [ ] User can export current search results as CSV
- [ ] Export completes in < 30s for 50k rows
- [ ] Large exports (> 10k) trigger background job + email
- [ ] Tests cover streaming, filtering, and edge cases
```

**Then prompt the AI with the spec:**

```
Read the spec in docs/export-spec.md. Let's discuss the implementation 
approach before writing any code. What questions do you have?
```

This prevents the AI from making assumptions and building the wrong thing.

### Step 5: Your First Prompt

Open the AI panel in your tool:

| Tool | Shortcut |
|------|----------|
| Cursor | `Cmd+I` / `Ctrl+I` |
| Zed | `Cmd+Shift+A` / `Ctrl+Shift+A` |
| Antigravity | `Cmd+I` / `Ctrl+I` |
| Continue.dev | `Cmd+L` / `Ctrl+L` |
| Claude Code | Just type in terminal |
| Codex CLI | Just type in terminal |
| OpenCode | Just type in terminal |
| Copilot | `Cmd+I` / `Ctrl+I` |

Start with exploration, not commands:

```
Look at this codebase and explain:
1. What is the main entry point?
2. How is the code organized?
3. What patterns and conventions are used?
```

**Why this works**: You're asking about something you can verify. This builds your intuition for when the AI is right vs. hallucinating.

> **Golden Rule**: Start with tasks you already know how to solve. This builds intuition for the AI's capabilities and limitations before you rely on it for unfamiliar territory.

---

## Core Concepts

| Term | What It Means |
|------|---------------|
| **Model** | The AI itself (e.g., GPT-5.2, Claude Opus 4.5). Determines capability and quality |
| **Provider** | Company hosting the model's API (e.g., OpenAI, Anthropic). Determines pricing and terms |
| **Agentic** | AI that acts autonomously: reads files, runs commands, iterates on errors |
| **Context Window** | How much text the AI can "see" at once (measured in tokens). More ≠ better—focused context wins |
| **40% Rule** | Keep context below 40% of window capacity. Beyond this threshold, model quality degrades measurably. ([Source: Dex Horthy](https://www.dexhorthy.com/blog/no-vibes-allowed)) |
| **Context Engineering** | Building dynamic systems to provide the right information, tools, and format so the model can plausibly accomplish the task. Supersedes "prompt engineering." ([Source: Harrison Chase](https://blog.langchain.dev/context-engineering/)) |
| **MCP** | Model Context Protocol. A standard for connecting AI tools to external services (databases, APIs) |
| **BYOK** | Bring Your Own Key. Use your own API keys instead of the tool's subscription |
| **Prompt** | Your instruction to the AI. Quality of prompt = quality of output |
| **Composer/Agent Mode** | Multi-file editing mode (vs. single-file autocomplete) |
| **Context Rot** | When too much irrelevant context makes the AI "dumber." Starts around 40% of context window. |
| **Subagent** | A separate AI instance launched to investigate a question, keeping your main context clean |

---

## Context Engineering (Beyond Prompt Engineering)

> "Context engineering is building **dynamic systems** to provide the right information and tools in the right format such that the LLM can plausibly accomplish the task." — Harrison Chase, LangChain

**Prompt engineering** is crafting a single good instruction. **Context engineering** is designing the entire system that feeds information to the model.

### The Context Engineering Framework

Ask yourself: **"Can the model plausibly accomplish this task with the context I'm providing?"**

If the answer is no, the problem is context, not the model.

| Component | What It Means | Example |
|-----------|---------------|---------|
| **Right Information** | Model has what it needs to succeed | Relevant files, not entire codebase |
| **Right Tools** | Model can look things up and take actions | grep, file read, test runner |
| **Right Format** | Information is structured for consumption | Short error messages, not raw JSON blobs |
| **Plausibility Check** | Could a human succeed with this context? | If you couldn't do it, neither can the AI |

### Practical Context Engineering

**1. Static Context (CLAUDE.md, .cursorrules)**
- Project-specific gotchas
- Commands to run
- Architecture overview
- Keep ruthlessly short

**2. Dynamic Context (Retrieved at Runtime)**
- Relevant files based on the task
- Recent git history
- Test results
- Error messages

**3. Tool Context (MCP, CLI)**
- Give the model tools to look things up
- Better than stuffing everything into the prompt
- Let it grep, read files, run commands

**4. Memory Context (Across Sessions)**
- What worked before
- Decisions made
- Patterns established

### The 40% Rule in Practice

> "As context usage grows, model quality degrades. Empirically, this begins around 40% of the context window." — Dex Horthy

| Context Window | 40% Threshold | Practical Limit |
|----------------|---------------|-----------------|
| 128k tokens | ~51k tokens | ~40 files |
| 200k tokens | ~80k tokens | ~65 files |
| 1M tokens | ~400k tokens | ~325 files |

**Stay under 40%.** If you're over, you're in the "Dumb Zone" where quality degrades.

**Compaction strategies when over 40%:**
1. Summarize what you've learned so far
2. Clear context and restart with summary
3. Use subagents for investigation, keep main context focused
4. Be more selective about which files to include

---

## The Five Levels of AI-Assisted Coding

Understanding where you are helps you know what to learn next. This model is adapted from Dan Shapiro's framework (Jan 2026), inspired by the levels of autonomous driving.

| Level | Name | Description | Your Role | Prerequisites |
|-------|------|-------------|-----------|---------------|
| **0** | Spicy Autocomplete | Copy-paste from ChatGPT, basic tab completion | Write most code yourself | None |
| **1** | The Coding Intern | AI writes boilerplate and unimportant snippets | Full review of every line | Basic prompting |
| **2** | The Junior Developer | Pair programming with AI, real-time collaboration | Review every line, guide direction | Good prompts, context files |
| **3** | The Developer | Most code is AI-generated, you're a full-time reviewer | Code review, architecture decisions | Strong verification, TDD |
| **4** | The Engineering Team | You're the PM/manager—specs and plans, agents do work | Define specs, review outcomes | Robust test suites, CI/CD |
| **5** | The Dark Factory | No human code review—only system verification | Design verification systems | Mature conformance suites |

### Where to Start

**If you're new to AI coding:** Start at Level 1-2. Use AI for tasks you already know how to solve. Build intuition for when it's right vs. wrong.

**If you're experienced:** Most professionals operate at Level 2-3. Level 4+ requires significant infrastructure investment (test suites, CI, monitoring).

**Level 5 Warning:** 
> "Nobody reviews AI-produced code, ever. They don't even look at it. The goal of the system is to prove that the system works." — Simon Willison, describing a team doing Level 5

Level 5 is real but rare. It requires:
- Comprehensive conformance test suites
- Continuous verification systems
- 20+ years of engineering experience to design the verification
- Acceptance that you're trusting the tests, not the code

**Most readers of this document should aim for Level 3** with strong verification practices.

---

## Effective Patterns for Agentic Coding

### 0. Verification First (The #1 Pattern)

> "Give Claude a way to verify its work. This is the **single highest-leverage thing** you can do." — Anthropic Claude Code Documentation

**Verification is not optional.** It's the foundation everything else builds on.

**Why verification matters:**
- AI produces plausible-looking code that may be subtly wrong
- Without verification, you're trusting output you can't validate
- Verification closes the loop—the agent can see and fix its own mistakes

**Ways to provide verification:**

| Method | Example | Best For |
|--------|---------|----------|
| **Tests** | "Run `pytest` after changes" | Logic correctness |
| **Type checker** | "Run `pyright` / `tsc`" | Type safety |
| **Linter** | "Run `eslint` / `ruff`" | Style, common bugs |
| **Build** | "Run `cargo build`" | Compilation |
| **Screenshot** | "Take a screenshot of the result" | UI work |
| **REPL/CLI** | "Run the function with test input" | Quick validation |
| **Expected output** | "The result should be [X]" | Specific behavior |

**The TDD Pattern** (most reliable):
```
1. Write the test first (or have the AI write it)
2. Commit the test
3. Prompt: "Make this test pass. Don't modify the test."
```

This forces the AI to produce code that demonstrably works.

**Treat AI as an Untrusted Junior Developer:**
- 100% of AI-generated code gets human review
- Never merge without running tests
- If you don't understand it, don't ship it

---

### 1. Close the Loop

> "The big secret is always close the loop. The model needs to be able to debug and test itself." — Peter Steinberger

Design your workflow so the agent can verify its own work:

- Have it run tests, not just write them
- Use linters that catch errors immediately
- Build CLIs for common operations

> **Why LSPs and Linters Matter**
>
> **LSP (Language Server Protocol)** provides real-time intelligence: type checking, autocomplete, go-to-definition, and error detection. When the AI writes code, the LSP immediately flags type mismatches, missing imports, and syntax errors—before you even run the code.
>
> **Linters** (ESLint, Pylint, Clippy, etc.) enforce code style and catch common bugs. They give the agent instant feedback on whether its changes are valid.
>
> Together, they "close the loop"—the agent can see its own mistakes and fix them without your intervention. A project without LSP/linter support forces the agent to guess whether its code is correct.
>
> | Language | LSP | Linter |
> |----------|-----|--------|
> | TypeScript | `typescript-language-server` | ESLint |
> | Python | Pyright, Pylsp | Ruff, Pylint |
> | C# | OmniSharp, csharp-ls | dotnet format |
> | Go | gopls | golangci-lint |
> | Rust | rust-analyzer | Clippy |
>
> **Setup tip**: Most AI coding tools auto-detect LSPs. If errors aren't showing in real-time, check that the LSP is running (`Cmd+Shift+P` → "Restart Language Server" in VS Code-based editors).

### 2. Start with Conversation, Not Commands

Instead of: `"Build a login system"`

Try: `"Let's discuss how authentication should work in this app. What are my options?"`

This prevents premature building and surfaces better solutions.

### 3. Small Iterations (Micro-Commit Rule)

Never ask the AI to "build the whole app." Break it down:

1. "Define the data structures in `models.py`"
2. "Implement the repository pattern for these models"
3. "Write unit tests for the business logic"

### 4. Context is King (But Less is More)

- **Don't** dump your entire codebase into context
- **Do** provide only relevant files
- **Do** use `CLAUDE.md` or `.cursorrules` for project-specific "gotchas"

> "The more the model knows, the dumber it gets." — Theo (t3.gg)

### 5. Human-in-the-Loop Verification

- Run linters immediately after AI edits
- Use TDD: write the test first, then prompt "make this test pass"
- Review diffs before accepting—never blindly trust

### 6. Clone and Imitate (For Tests and Patterns)

> "Clone datasette/datasette-enrichments from GitHub to /tmp and imitate the testing patterns it uses." — Simon Willison

The fastest way to get consistent, high-quality output is to show the AI an example.

```
Clone [repo-url] to /tmp and imitate the testing patterns it uses.
```

**When to use this:**
- Setting up test patterns for a new project
- Adopting a library's conventions
- Replicating a coding style you admire

**Example prompt:**
```
Clone https://github.com/simonw/datasette to /tmp.
Look at how tests are structured in tests/.
Now write tests for my new plugin following the same patterns.
```

This works because:
- The AI sees real, working examples
- Patterns are demonstrated, not described
- You get consistency with established codebases

### 7. Use Subagents for Investigation

**Problem:** Research pollutes your main context. Looking up docs, exploring codebases, and investigating options fills your context window with irrelevant information.

**Solution:** Delegate research to subagents that run in separate contexts.

**In Claude Code:**
```
Use subagents to investigate how authentication is implemented 
in this codebase. Report back with file paths and patterns.
```

**In Cursor:**
- Use Background Agents for research tasks
- Keep your main Composer session focused on implementation

**Benefits:**
- Main context stays clean and focused
- Research happens in isolation
- You get a summary, not raw exploration

**When to use subagents:**
- Exploring unfamiliar codebases
- Looking up documentation
- Investigating multiple approaches
- Any task that's "read a lot, summarize a little"

---

## Common Mistakes (and How to Avoid Them)

### 1. Using AI as a Safety Net

**Mistake**: Only using AI when you're completely stuck and have exhausted all options.

**Why it fails**: If you don't understand the problem, you can't give good context or verify the output.

**Fix**: Use AI to speed up tasks you *already know how to solve*. This builds intuition for its capabilities and limitations.

### 2. Context Rot (Information Overload)

**Mistake**: Dumping entire codebases into context, thinking "more info = better results."

**Why it fails**: Too much context increases distraction and "context rot." The model gets confused.

**Fix**:

- Give the model *search tools* (grep, file view) instead of raw code
- Provide only relevant files
- Keep context focused and minimal

### 3. Broken Environments

**Mistake**: Trying to prompt-engineer around a broken dev environment (e.g., pre-existing type errors, misconfigured linters).

**Why it fails**: Agents have no long-term memory. They rediscover the "ghost error" every session, try to fix it, fail, and get confused.

**Fix**: Fix your environment first. If `typecheck` or `lint` fails before you start, the agent will struggle too.

### 4. MCP Hell (Over-Configuration)

**Mistake**: Loading dozens of MCP servers, complex plugins, and massive rule files.

MCP (Model Context Protocol) lets AI tools connect to external services—databases, APIs, browsers, etc. Useful for advanced workflows, but beginners don't need any of it.

**Why it fails**: Adds complexity and failure points without solving the core issue (bad context/prompting).

**Fix**: Keep it simple. Stock configurations often outperform "tool maximalist" setups. Start with zero plugins. Add only what you need after hitting a specific limitation.

**If you do need MCP**, start with these essentials:

#### Tier 1: Essential (Start Here)

| MCP Server | Use Case | Install |
|------------|----------|---------|
| **Context7** | Documentation injection, prevents hallucination | `npx -y @context7/mcp` |
| **Filesystem** | Local file access (sandboxed) | `npx -y @anthropic/mcp-filesystem` |
| **GitHub** | Repo management, PR automation, issue triage | `npx -y @anthropic/mcp-github` |
| **Playwright** | Browser automation, web scraping, testing | `npx -y @anthropic/mcp-playwright` |

#### Tier 2: Productivity (Add as Needed)

| MCP Server | Use Case | Install |
|------------|----------|---------|
| **Docker** | Container management, image builds | `npx -y @anthropic/mcp-docker` |
| **Postgres/SQLite** | Database queries, schema inspection | `npx -y @anthropic/mcp-postgres` |
| **Sequential Thinking** | Step-by-step reasoning for complex tasks | `npx -y @anthropic/mcp-sequential-thinking` |
| **Memory** | Knowledge graph persistence across sessions | `npx -y @anthropic/mcp-memory` |
| **Slack/Notion** | Workspace integration | Various community servers |
| **Firecrawl** | Web scraping, content extraction | `npx -y @anthropic/mcp-firecrawl` |
| **Perplexity** | Real-time web search | `npx -y @anthropic/mcp-perplexity` |

#### Token Consumption Warning

MCP tools can consume massive amounts of your context window. Be aware of costs:

| MCP Tool | Typical Token Cost | Notes |
|----------|-------------------|-------|
| **Playwright screenshot** | 15,000+ tokens | A single screenshot can exhaust hours of allocation |
| **Full DOM snapshot** | 10,000-50,000 tokens | Depends on page complexity |
| **Accessibility tree** | 5,000-20,000 tokens | Every element with all properties |
| **File read (large)** | 1,000-10,000 tokens | Scales with file size |
| **Database query result** | Variable | Large result sets are expensive |

**From Playwright MCP GitHub issues:**
> "Users report single screenshots consuming over 15,000 tokens. Some exhausted their entire five-hour token allocation in just a few automation steps." — Playwright MCP GitHub Issues

**Mitigation strategies:**
- Disable verbose output modes where possible
- Use targeted selectors instead of full page captures
- Limit result set sizes in database queries
- Monitor token usage during MCP-heavy workflows
- Consider whether you need the MCP or if a simpler approach works

#### Security Note

MCP servers run with your permissions. Use container isolation for untrusted servers:

```bash
# Docker MCP Toolkit provides sandboxed execution
docker run --rm -it mcp/playwright  # Isolated browser automation
```

**Registries**:
- [Docker MCP Catalog](https://hub.docker.com/mcp) — Verified, containerized servers (recommended)
- [mcp.so](https://mcp.so) — Community registry (2000+ servers, verify before use)

### 5. The Append Trap

**Mistake**: When AI fails, repeatedly asking "fix it" and appending to the conversation history.

**Why it fails**: The context now contains bad instructions and broken code. Autocomplete is biased by the failed attempts. Each failed attempt pollutes the context further.

**From Anthropic's Claude Code documentation:**
> "Correcting Over and Over: Failed approaches accumulate → Solution: After 2 corrections, `/clear` and rewrite prompt" — Anthropic Claude Code Documentation

**Fix**:

1. **Clear context** (`/clear` in Claude Code, new chat in Cursor, `Cmd+K` in Zed)
2. **Revert** the changes (`git checkout .` or undo)
3. **Rewrite your prompt** with better context—don't just append "fix it"
4. If the same failure happens **more than twice**, stop and rethink your approach entirely

**The Kitchen Sink Anti-Pattern**: Mixing unrelated tasks in one session pollutes context. Clear between tasks:
```
Task 1: Fix the auth bug
/clear
Task 2: Add the export feature
/clear
Task 3: Refactor the database layer
```

**When to clear context:**
- Switching to an unrelated task
- After 2+ failed fix attempts
- When the AI starts "forgetting" earlier instructions
- When responses become repetitive or circular

---

## When It's Not Working

Signs the AI is struggling:

| Signal | What's Happening | What to Do |
|--------|------------------|------------|
| Same error 3+ times | Context is polluted with failed attempts | Revert all changes, start fresh session |
| "I'll try a different approach" repeatedly | AI is guessing, not understanding | Stop. Provide more context or simplify the task |
| Changes unrelated files | AI misunderstood scope | Be explicit: "Only modify `auth.ts`, nothing else" |
| Output looks plausible but wrong | Hallucination | Test immediately. Don't trust code you can't verify |
| Takes 10+ iterations for simple task | Wrong tool or wrong problem | Do it yourself. Some tasks are faster by hand |

**When to give up and code it yourself:**

- You've explained the same thing 3 different ways with no improvement
- The fix would take you 5 minutes but the AI has burned 20
- The AI keeps "fixing" things that weren't broken
- You don't understand the AI's solution well enough to maintain it

**Recovery pattern:**

```
1. git stash or git checkout .     # Revert everything
2. Close the chat/session          # Fresh context
3. Simplify the task               # Smaller scope
4. Add explicit constraints        # "Don't touch X, only modify Y"
5. Try again with one specific ask # Not "build feature", but "add function signature"
```

---

## Practical Examples

### Good vs. Bad Prompts

| Bad Prompt | Why It Fails | Better Prompt |
|------------|--------------|---------------|
| "Build me a login system" | Too vague, no constraints | "Let's discuss auth options for this Express app. I need email/password login with JWT tokens." |
| "Fix this error" | No context about what you tried | "I'm getting [error]. I tried [X]. The relevant code is in [file]. What's wrong?" |
| "Make it better" | Subjective, no criteria | "Refactor this function to reduce cyclomatic complexity. Extract the validation logic." |
| "Add tests" | Which tests? What coverage? | "Add unit tests for the `calculateTotal` function. Cover the edge cases: empty cart, negative quantities, discount codes." |

### Effective Prompt Patterns

**The Explorer**: Start sessions with understanding

```
Look at the codebase structure and explain:
1. What is the main entry point?
2. How is the code organized?
3. What patterns/frameworks are used?
```

**The Discusser**: Prevent premature building

```
Before we implement anything, let's discuss the options for [feature].
What are the tradeoffs between [approach A] vs [approach B]?
```

**The Verifier**: Use tests as specification

```
Here's the test file: @tests/auth.test.ts
Make these tests pass. Don't modify the tests.
```

**The Iterator**: Small, focused changes

```
Step 1: Add the database schema for users (just the schema, no logic yet)
```

### Project Context Files

Different tools use different files for project-specific instructions. Create the one(s) that match your tools:

> **Keep it short.** From Anthropic: "For each line, ask: 'Would removing this cause Claude to make mistakes?' If not, cut it."
>
> Long context files get ignored. Include only what the agent can't infer from the code itself.

| Tool | Context File | Location |
|------|--------------|----------|
| Cursor | `.cursorrules` or `.cursor/rules/*.mdc` | Project root |
| Claude Code | `CLAUDE.md` | Project root |
| Zed | `.zed/settings.json` + `AGENTS.md` | Project root |
| Continue.dev | `.continue/config.json` + `AGENTS.md` | Project root |
| Copilot | `.github/copilot-instructions.md` | Project root |
| Any tool | `AGENTS.md` or `AI.md` | Project root (widely recognized) |

### Example Project Context (TypeScript/React)

Adapt this template for your stack and save as the appropriate file for your tool:

```markdown
# Project Rules

## Tech Stack
- TypeScript with strict mode
- React 18 with hooks (no class components)
- TailwindCSS for styling (no inline styles or CSS modules)
- Vitest for testing

## Code Style
- Use named exports, not default exports
- Prefer `const` arrow functions for components
- All functions must have JSDoc comments
- Error handling: use Result types, not try/catch

## Gotchas (Things the AI Gets Wrong)
- Don't run `pnpm dev` - use `pnpm start:dev` instead
- The database schema is in `/prisma/schema.prisma`, not `/db`
- We use `date-fns`, not `moment` - don't suggest moment
- Auth tokens are in cookies, not localStorage

## File Patterns
- Components: `src/components/[Name]/[Name].tsx`
- Hooks: `src/hooks/use[Name].ts`
- API routes: `src/api/[resource]/route.ts`
```

### Example CLAUDE.md File (Node.js)

For Claude Code CLI, create `CLAUDE.md` in your project root:

```markdown
# Project Context

## What This Is
A REST API for a bookstore inventory system. Node.js + Express + PostgreSQL.

## Quick Commands
- `npm run dev` - Start development server
- `npm test` - Run tests (must pass before committing)
- `npm run db:migrate` - Run database migrations
- `npm run db:seed` - Seed test data

## Architecture
- `/src/routes/` - Express route handlers
- `/src/services/` - Business logic (no HTTP concerns)
- `/src/repositories/` - Database queries (raw SQL, no ORM)
- `/src/middleware/` - Auth, logging, error handling

## Known Issues
- The `inventory` table has a trigger that auto-updates `updated_at` - don't set it manually
- Tests use a separate test database - never point tests at dev/prod
- The legacy `/v1/` routes are deprecated but still in use - don't modify them

## Style Preferences
- Prefer explicit error handling over throwing
- Use dependency injection for services
- Keep route handlers thin - delegate to services
```

### Example CLAUDE.md File (Python)

```markdown
# Project Context

## What This Is
ML pipeline for fraud detection. Python 3.12 + FastAPI + SQLAlchemy + scikit-learn.

## Quick Commands
- `uv run uvicorn app.main:app --reload` - Start dev server
- `uv run pytest` - Run tests
- `uv run alembic upgrade head` - Run migrations
- `uv run python -m scripts.train` - Retrain model

## Architecture
- `/app/api/` - FastAPI route handlers
- `/app/services/` - Business logic
- `/app/models/` - SQLAlchemy ORM models
- `/app/ml/` - ML model training and inference
- `/scripts/` - One-off scripts (training, data prep)

## Known Issues
- Model artifacts are in `/models/` - don't commit them (use DVC)
- The `predict` endpoint loads the model on first request - expect cold start
- Legacy endpoint `/v1/score` uses old feature schema - don't modify

## Style Preferences
- Type hints on all functions
- Use Pydantic for request/response validation
- Async for I/O-bound operations, sync for CPU-bound
- Tests use pytest fixtures, not unittest
```

### Example CLAUDE.md File (C# / .NET)

```markdown
# Project Context

## What This Is
Microservices backend for e-commerce platform. .NET 8 + ASP.NET Core + Entity Framework + SQL Server.

## Quick Commands
- `dotnet run --project src/Api` - Start API server
- `dotnet test` - Run all tests
- `dotnet ef database update --project src/Infrastructure` - Apply migrations
- `dotnet build --configuration Release` - Build for production

## Architecture
- `/src/Api/` - ASP.NET Core controllers, middleware
- `/src/Application/` - Use cases, CQRS handlers (MediatR)
- `/src/Domain/` - Entities, value objects, domain events
- `/src/Infrastructure/` - EF Core, external services, repositories

## Known Issues
- Don't use `DateTime.Now` - use `IDateTimeProvider` for testability
- The `Orders` aggregate has complex invariants - read domain tests before modifying
- Legacy `OrdersController` uses repository directly - new code should use MediatR

## Style Preferences
- Clean Architecture (dependencies point inward)
- CQRS with MediatR for commands/queries
- FluentValidation for input validation
- xUnit + FluentAssertions for tests
- No `async void` except event handlers
```

---

## Tool Reference

*You now know the fundamentals. Everything below is reference material—specific tools, models, pricing, and privacy deep dives. Use this section when you need to choose a tool or evaluate privacy implications. Not required reading.*

> **Quick recommendations by priority**:
> - **Easiest start**: Cursor or Zed (free tiers, work out of the box)
> - **Privacy-first**: Continue.dev + Ollama (100% local)
> - **Already use VS Code**: Continue.dev or Copilot extension
> - **Terminal workflow**: Claude Code or OpenCode

---

## AI-Native IDEs

### Cursor

| Website | <https://cursor.com> |
|---------|---------------------|

VS Code fork, closed-source. **Key features:** Composer Mode (`Cmd+I`), Agent Mode, Tab Completions, Background Agents, `.cursorrules`.

**Models:** GPT-5.2, Claude Sonnet/Opus 4.5, Gemini 3 Pro, Grok 4.1

| Plan | Price | Notes |
|------|-------|-------|
| Hobby | Free | Limited requests |
| Pro | $20/mo | Unlimited tab completions |
| Pro+ | $60/mo | 3x usage |
| Ultra | $200/mo | 20x usage, priority features |
| Teams | $40/user/mo | SSO, RBAC |
| Enterprise | Custom | SCIM, audit logs |

---

### Zed

| Website | <https://zed.dev> | GitHub | <https://github.com/zed-industries/zed> (74k+ ⭐) |
|---------|-----------------|--------|------------------------------------------------|

Rust-based, GPU-accelerated (120fps), open source. **Key features:** Agent Panel, Edit Prediction (Zeta model), ACP/MCP support, multiplayer, BYOK support.

**Models:** Claude Opus/Sonnet 4.5, GPT-5.2, Gemini 3 Pro, Grok 4.1 (hosted) + Ollama, LM Studio, any OpenAI-compatible

| Plan | Price | Notes |
|------|-------|-------|
| Personal | **$0 forever** | Full editor + AI with own keys |
| Pro | $10/mo | Unlimited predictions, $5 tokens included |
| Enterprise | Contact | SSO, analytics, security guarantees |

---

### Antigravity (Google)

<https://antigravity.google>

VS Code fork, launched Nov 2025 (public preview, free). **Key features:** Agent Manager, browser automation, terminal control, artifacts system.

**Models:** Gemini 3 Pro/Flash/Deep Think (free tier), Claude Sonnet/Opus 4.5, GPT-OSS-120B (open-source variant, not OpenAI's GPT-5.2)

> **Note:** Agents get real write/execute permissions. Use Secure Mode for untrusted projects.

---

### Kiro (AWS)

**Spec-driven development** | <https://kiro.dev>

Amazon's agentic IDE (July 2025), VS Code compatible. **Key features:** Spec-driven development, automated tests/docs, agentic chat, MCP support.

**Models:** Claude Sonnet/Opus 4.5 | **AWS Integration:** Q Developer CLI, Builder ID auth | **Pricing:** Free preview

---

## VS Code Extensions

### GitHub Copilot

<https://github.com/features/copilot>

| Plan | Price | Key Features |
|------|-------|--------------|
| Free | $0 | 50 req/mo, 2000 completions |
| Pro | $10/mo | Unlimited, coding agent |
| Business | $19/user/mo | Policy controls, IP indemnity |
| Enterprise | $39/user/mo | Codebase indexing, audit logs, SCIM |

---

### Codeium/Windsurf

<https://windsurf.com>

| Plan | Price | Deployment Options |
|------|-------|-------------------|
| Free | $0 | Cloud (US) |
| Pro | $15/mo | Cloud (US/EU) |
| Teams | $30/user/mo | + Hybrid option |
| Enterprise | Custom | Self-hosted available |

---

### Continue.dev

<https://github.com/continuedev/continue> (31k+ ⭐) | Apache 2.0

Open source VS Code/JetBrains extension. Supports Ollama, LM Studio, or any OpenAI-compatible endpoint. 100% local option available.

---

### Amazon Q Developer

<https://aws.amazon.com/q/developer/> | Free tier, Pro $19/user/mo

**Key features:** 200k context, native AWS integration, IP indemnity, code transformation, security scanning.

---

## Terminal/CLI Tools

### Claude Code

<https://claude.ai/code> | `curl -fsSL https://claude.ai/install.sh | bash`

Anthropic's official terminal agent. Works with Claude Pro/Max subscription or API key. Enterprise/Team tiers available.

---

### OpenCode

<https://github.com/anomalyco/opencode> (92k+ ⭐) | `npm install -g opencode`

Open source, BYOK. **Your API keys = your privacy terms.** No data sent to OpenCode.

---

### Gemini CLI

<https://github.com/google/gemini-cli> | `npm install -g @google/gemini-cli`

Free tier: 60 req/min, 1000 req/day. Open source.

---

### OpenAI Codex CLI

<https://github.com/openai/codex-cli> | Open source (Apr 2025)

Available with ChatGPT Plus/Pro/Business/Enterprise. 74.9% SWE-bench.

---

### Kimi K2.5 CLI

<https://kimi.com> | <https://huggingface.co/moonshotai/Kimi-K2.5>

> **Jurisdiction Note:** Moonshot AI is China-based. Open weights available for local deployment.

256k context, 1T params (32B active). Strong frontend code generation.

---

## Quick Comparison Matrix

| Tool | Type | Open Source | Privacy Mode | Self-Host | Jurisdiction | Free Tier | Enterprise |
|------|------|-------------|--------------|-----------|--------------|-----------|------------|
| **Cursor** | IDE | No | Yes (all tiers)* | No | US (CLOUD Act) | Yes (limited) | Yes |
| **Zed** | IDE | Yes | Yes (opt-in) | BYOK | US (mitigated) | Yes (full) | Yes |
| **Antigravity** | IDE | No | Yes (GCP terms) | No | US (CLOUD Act) | Yes (preview) | Yes |
| **Kiro** | IDE | No | Yes (AWS terms) | No | US (CLOUD Act) | Yes (preview) | Coming |
| **GitHub Copilot** | Extension | No | Yes | No | US (CLOUD Act) | Yes (limited) | Yes |
| **Continue.dev** | Extension | Yes (Apache 2) | Yes (100% local) | Yes | **None** | Yes (full) | Self-manage |
| **Windsurf** | IDE/Ext | No | Yes (ZDR) | Yes (hybrid) | US / EU option | Yes (limited) | Yes (FedRAMP) |
| **Claude Code** | CLI | No | Yes (enterprise)** | No | US (CLOUD Act) | Via subscription | Yes |
| **OpenCode** | CLI | Yes | Yes (BYOK) | Yes | **None** | Yes (full) | Self-manage |
| **Gemini CLI** | CLI | Yes | Yes (GCP terms) | N/A | US (CLOUD Act) | Yes (generous) | Yes (GCP) |
| **Codex CLI** | CLI | Yes | Yes (OpenAI terms) | N/A | US (CLOUD Act) | Via subscription | Yes |
| **Kimi CLI** | CLI | Partial | Via API | Local weights | **China** | Yes | Via API |

*\* Cursor: 30-day retention caveat for non-Business plans*
*\*\* Claude Code: Consumer accounts default to training ON since Aug 2025*

### Truly Private Options (No Cloud Dependency)

| Setup | Privacy Level | Trade-offs |
|-------|---------------|------------|
| **Continue.dev + Ollama + DeepSeek-V3.2** | Maximum | ~85-90% cloud quality, requires 24GB+ VRAM |
| **Zed + Ollama** | Maximum | ~85-90% cloud quality |
| **OpenCode + local LLM** | Maximum | ~85-90% cloud quality |
| **Tabnine Enterprise (self-hosted)** | Maximum | ~80-90% cloud quality, enterprise pricing |
| **VS Code + LM Studio** | Maximum | Manual setup, ~70-85% quality |

---

## Foundation Models (January 2026)

*Capabilities and pricing for models commonly used in AI coding tools.*

> **Live Benchmarks:** [artificialanalysis.ai](https://artificialanalysis.ai) — Independent benchmarks, speed tests, and pricing comparisons updated in real-time. See [Benchmark & Pricing Resources](#staying-current-benchmark--pricing-resources) for a comprehensive list.

### Models vs. Providers

**Models** are the AI systems themselves—they determine capability, speed, and output quality. **Providers** are companies that host and serve models via API—they determine pricing, privacy terms, and legal jurisdiction.

| Provider | Models | API Access | Notes |
|----------|--------|------------|-------|
| **OpenAI** | GPT-5.2, Codex 5, o3 | [platform.openai.com](https://platform.openai.com) | Also available via Azure |
| **Anthropic** | Claude Opus/Sonnet 4.5 | [console.anthropic.com](https://console.anthropic.com) | Also via AWS Bedrock, GCP Vertex |
| **Google** | Gemini 3 Pro/Flash | [aistudio.google.com](https://aistudio.google.com) | Also via Vertex AI |
| **xAI** | Grok 4.1 | [console.x.ai](https://console.x.ai) | 2M context window |
| **DeepSeek** | DeepSeek-V3.2 | [platform.deepseek.com](https://platform.deepseek.com) | China jurisdiction, open weights available |
| **Moonshot** | Kimi K2.5 | [kimi.ai](https://kimi.ai) | China jurisdiction, open weights available |
| **Zhipu** | GLM-4.7 | [open.bigmodel.cn](https://open.bigmodel.cn) | China jurisdiction, budget option |

**Aggregators** provide unified access to multiple providers through one API:

| Aggregator | Models | Why Use It |
|------------|--------|------------|
| **[OpenRouter](https://openrouter.ai)** | 200+ models | One API key for all providers. Compare models easily. Fallback routing. |
| **[AWS Bedrock](https://aws.amazon.com/bedrock/)** | Claude, Llama, Mistral, Titan | Enterprise. AWS billing. Private endpoints. |
| **[Azure OpenAI](https://azure.microsoft.com/en-us/products/ai-services/openai-service)** | GPT, DALL-E | Enterprise. EU regions. Compliance certifications. |
| **[GCP Vertex AI](https://cloud.google.com/vertex-ai)** | Gemini, Claude, Llama | Enterprise. Google Cloud integration. |

### Capabilities Matrix

| Model | Provider | Context | AAII Score | SWE-bench | AIME 2025 | GPQA Diamond |
|-------|----------|---------|------------|-----------|-----------|--------------|
| **GPT-5.2** | OpenAI | 256k | 50 | 80% | 100% | 92.4% |
| **Claude Opus 4.5** | Anthropic | 200k | 49 | 80.9% | — | — |
| **Gemini 3 Pro** | Google | 1M | 48 | 76.2% | 100%* | 91.9% |
| **Kimi K2.5** | Moonshot | 256k | 46 | 76.8% | — | — |
| **Codex 5** | OpenAI | 400k | 46 | 78% | — | — |
| **Grok 4.1** | xAI | 2M | 45 | 72% | — | — |
| **MiniMax M2.1** | MiniMax | 200k | 44 | 74.0% | — | — |
| **GLM-4.7** | Zhipu | 205k | 44 | 73.8% | 95.7% | 85.7% |
| **DeepSeek-V3.2** | DeepSeek | 128k | 44 | 68% | 85% | 80% |
| **Claude Sonnet 4.5** | Anthropic | 200k | 42 | 77% | — | — |
| **Gemini 3 Flash** | Google | 1M | 38 | 78% | 80% | 90.4% |
| **GLM-4.7 FlashX** | Zhipu | 200k | 36 | 68% | — | — |

*\* with code execution* | *DeepSeek, Moonshot, Zhipu, MiniMax = China jurisdiction (see [Privacy Deep Dive](#jurisdiction-risk-matrix))*

**Benchmark Key:**

- **AAII**: Artificial Analysis Intelligence Index (aggregated score, 50 = top tier)
- **SWE-bench**: Real-world GitHub issue resolution
- **AIME 2025**: High school math competition
- **GPQA Diamond**: PhD-level science questions

### API Pricing (per million tokens)

| Model | Input | Output | Cached Input | Speed (tok/s) |
|-------|-------|--------|--------------|---------------|
| **GPT-5.2** | $1.75 | $14.00 | $0.175 | 101 |
| **Claude Opus 4.5** | $5.00 | $25.00 | $0.50 | 45 |
| **Gemini 3 Pro** | $2.00 | $12.00 | $0.50 | 85 |
| **Codex 5** | $1.25 | $10.00 | $0.125 | 90 |
| **Kimi K2.5** | $0.60 | $3.00 | $0.10 | 50 |
| **Grok 4.1** | $3.00 | $15.00 | — | 120 |
| **Claude Sonnet 4.5** | $3.00 | $15.00 | $0.30 | 80 |
| **MiniMax M2.1** | $0.27 | $1.12 | — | 65 |
| **GLM-4.7** | $0.60 | $2.20 | — | 55 |
| **Gemini 3 Flash** | $0.50 | $3.00 | $0.125 | 200 |
| **DeepSeek-V3.2** | $0.27 | $1.10 | $0.028 | 60 |
| **GLM-4.7 FlashX** | $0.07 | $0.40 | — | 150 |
| **Grok 4.1 Fast** | $0.20 | $0.50 | $0.05 | 250 |

**Cost Tiers:**

- **Budget**: DeepSeek-V3.2, MiniMax M2.1, GLM-4.7 FlashX, Grok Fast — lowest cost
- **Balanced**: GPT-5.2, Codex 5, Gemini Pro/Flash, Claude Sonnet, Kimi K2.5 — quality/cost sweet spot
- **Premium**: Claude Opus — maximum capability, agentic workflows

> **China-hosted models**: DeepSeek, Kimi, GLM, MiniMax offer excellent value but have jurisdiction risks (see [Privacy Deep Dive](#jurisdiction-risk-matrix)). Use open weights locally for sensitive work.

### Model Selection Guide

| Use Case | Recommended | Why |
|----------|-------------|-----|
| **Agentic coding** | Claude Opus 4.5, GPT-5.2 | Best at multi-step reasoning, tool use |
| **Code generation** | Codex 5, GLM-4.7 | Optimized for code, 400k context |
| **Fast completions** | GLM-4.7 FlashX, Grok Fast, Gemini 3 Flash | Sub-100ms latency, low cost |
| **Long context** | Gemini 3 Pro (1M), Grok 4.1 (2M), Codex 5 (400k) | Entire codebase in context |
| **Cost-sensitive** | DeepSeek-V3.2, MiniMax M2.1 | 90% quality at 10% cost |
| **Balanced** | Claude Sonnet 4.5, GPT-5.2 | Best overall quality/speed/cost |

### Staying Current: Benchmark & Pricing Resources

Model capabilities and pricing change frequently. Use these resources to track performance:

**Comprehensive Leaderboards:**

| Resource | URL | Tracks | Update Frequency |
|----------|-----|--------|------------------|
| **Artificial Analysis** | [artificialanalysis.ai](https://artificialanalysis.ai) | Intelligence scores, speed, pricing, API provider comparison | Real-time |
| **Chatbot Arena (LMSYS)** | [lmarena.ai](https://lmarena.ai) | Crowdsourced Elo ratings from human preference votes | Continuous |
| **Hugging Face Open LLM** | [huggingface.co/spaces/open-llm-leaderboard](https://huggingface.co/spaces/open-llm-leaderboard) | Open-source models, MMLU, GPQA, MATH benchmarks | Weekly |
| **Vellum AI** | [vellum.ai/llm-leaderboard](https://vellum.ai/llm-leaderboard) | SOTA models, reasoning, context length, cost | Updated on new releases |
| **LiveBench** | [livebench.ai](https://livebench.ai) | Contamination-free benchmarks, monthly new questions | Monthly |

**Coding-Specific Benchmarks:**

| Resource | URL | Focus |
|----------|-----|-------|
| **SWE-bench** | [swebench.com](https://swebench.com) | Real GitHub issue resolution (the gold standard for coding) |
| **Aider Leaderboard** | [aider.chat/docs/leaderboards](https://aider.chat/docs/leaderboards) | Code editing polyglot benchmark across languages |

**Pricing Trackers:**

| Resource | URL | Features |
|----------|-----|----------|
| **Price Per Token** | [pricepertoken.com](https://pricepertoken.com) | 300+ models, historical pricing, weekly newsletter |
| **LLM PriceCheck** | [llmpricecheck.com](https://llmpricecheck.com) | Real-time calculator, daily updates, smart recommendations |
| **OpenRouter** | [openrouter.ai/models](https://openrouter.ai/models) | Side-by-side pricing for 200+ models, fallback routing |
| **YourGPT Calculator** | [yourgpt.ai/tools/llm-api-pricing](https://yourgpt.ai/tools/llm-api-pricing) | Cost estimator for major providers |

**When to Check:**
- Before starting a new project (model selection)
- Monthly (pricing often drops 10-20%)
- When a new model launches (benchmark comparisons stabilize after ~2 weeks)

---

## Security Recommendations

*Guidance for privacy-conscious developers who need cloud-based tools.*

### Best Cloud Options (Non-Self-Hosted)

For developers who can't or don't want to run local models but still care about privacy:

| Rank | Tool | Price | Notes |
|------|------|-------|----------------------|
| **1** | **Cursor Teams/Enterprise** | $40/user/mo | True zero-retention, SOC 2, org-wide privacy enforcement |
| **2** | **Windsurf EU Cloud** | $30/user/mo | EU data residency, FedRAMP available, zero-data-retention default |
| **3** | **GitHub Copilot Business** | $19/user/mo | No training, IP indemnity, Microsoft security backing |
| **4** | **Zed Pro + BYOK** | $10/mo + API | Open source client, auditable, your provider's terms apply |
| **5** | **Amazon Q Pro** | $19/user/mo | AWS-native, Bedrock security, 200k context |

### Decision Matrix by Priority

| Your Priority | Best Choice | Runner-Up |
|---------------|-------------|-----------|
| **Maximum cloud privacy** | Cursor Enterprise | Windsurf Enterprise |
| **EU/GDPR compliance** | Windsurf EU Cloud | Azure OpenAI (EU regions) |
| **Lowest cost** | Zed Pro ($10/mo) | Copilot Free (limited) |
| **Best AI quality** | Cursor Ultra ($200/mo) | Cursor Pro+ ($60/mo) |
| **AWS integration** | Amazon Q + Kiro | Bedrock direct |
| **Auditable client code** | Zed (open source) | Continue.dev (with cloud provider) |
| **US Government/FedRAMP** | Windsurf FedRAMP | AWS GovCloud |
| **Budget enterprise** | Copilot Business ($19) | Amazon Q Pro ($19) |

### Privacy Considerations by Tool

| Tool/Tier | Issue | Severity |
|-----------|-------|----------|
| **Claude Code (Consumer Free/Pro/Max)** | Training ON by default since Aug 2025 | High |
| **Cursor Free/Pro (non-Business)** | 30-day retention with OpenAI/Anthropic for "trust & safety" | Medium |
| **Kimi API** | China jurisdiction, cited for excessive data collection | High |
| **Any free tier** | Weaker privacy guarantees, often training-eligible | Medium |
| **Antigravity (preview)** | New product, policies may change, less battle-tested | Low |

### Recommended Configurations

#### For Startups (Budget-Conscious + Privacy)

```
Tool: Zed Pro ($10/mo) + Anthropic API (BYOK)
Total: ~$30-50/mo depending on usage

Why:
- Open source client (auditable)
- Anthropic has strong privacy stance
- Your API agreement governs data
- Full-featured editor for $0 base
```

#### For Enterprise (Compliance Required)

```
Tool: Cursor Enterprise or Windsurf Enterprise
Total: Custom pricing (typically $50-100/user/mo)

Requirements:
- Demand signed DPA before onboarding
- Verify subprocessor list
- Enable audit logging
- Configure content exclusions
- Require SSO/SCIM integration
- Annual security review of vendor
```

#### For Regulated Industries (Healthcare, Finance, Government)

```
Tool: Windsurf FedRAMP or Tabnine Enterprise (self-hosted)
Total: Enterprise pricing

Requirements:
- FedRAMP authorization (for US gov)
- HIPAA BAA (for healthcare)
- SOC 2 Type II report review
- Penetration test results
- Self-hosted option for maximum control
- Air-gapped deployment capability
```

#### For Individual Developers (Pragmatic Privacy)

```
Tool: Cursor Pro ($20/mo) + Privacy Mode ON
Total: $20/mo

Mitigations:
- Enable Privacy Mode immediately after install
- Add comprehensive .cursorignore
- Don't use for client code under NDA
- Consider Zed for truly sensitive projects
```

### Slopsquatting (Package Hallucination)

AI models suggest non-existent packages **5-22% of the time**. Attackers register these hallucinated package names with malware.

| Model Type | Hallucination Rate | Risk |
|------------|-------------------|------|
| Commercial (GPT, Claude) | ~5% | Medium |
| Open-source | ~22% | High |

**How it works:**
1. AI suggests `npm install fast-json-parser-v2` (doesn't exist)
2. Attacker registers `fast-json-parser-v2` on npm with malicious code
3. You run the install command, malware executes

**Mitigation:**
- **Never blindly run AI-suggested install commands**
- Use SCA (Software Composition Analysis) tools: Snyk, Dependabot, Socket.dev
- Verify packages exist and have legitimate maintainers before installing
- Check download counts and GitHub stars

([Source: Digital Applied Security Research, Jan 2026](https://digitalapplied.com/ai-coding-security))

---

### Normalization of Deviance

**The psychological trap**: Running AI agents with elevated permissions repeatedly without incident leads to false confidence.

> "I think so many people, myself included, are running these coding agents practically as root. And every time I do it, my computer doesn't get wiped. I'm like, 'oh, it's fine'." — Simon Willison, Jan 2026

**The "Lethal Trifecta"** (from Simon Willison):
When an agent has access to all three, exfiltration becomes possible:
1. **Private Data** (your files, credentials, code)
2. **Untrusted Content** (the web, user input, external APIs)
3. **External Communication** (network access, email, APIs)

**Reality check**: One day, it *will* delete your home directory or exfiltrate secrets. The question is when, not if.

**Mitigations:**
- Run agents in containers or VMs, not on your host machine
- Use `--sandbox` flags where available
- Never run `--dangerously-skip-permissions` outside isolated environments
- Review tool permissions before granting
- Assume every agent session could be compromised

---

### Minimum Security Checklist (Any Tool)

Before using any AI coding tool with real code:

- [ ] **Enable privacy/ghost mode** (if available)
- [ ] **Create `.cursorignore` / exclusion rules** for:
  - `.env*` files
  - `secrets/`, `credentials/` directories
  - `*.pem`, `*.key` files
  - Client-specific code directories
- [ ] **Disable telemetry** where possible
- [ ] **Use unique API keys** (not your production keys)
- [ ] **Review privacy policy** for training/retention terms
- [ ] **Check subprocessor list** for unexpected parties
- [ ] **Verify jurisdiction** is acceptable for your data
- [ ] **Document in security policy** which AI tools are approved

### Cost vs Privacy Trade-off

```
More Privacy ────────────────────────────────────► Less Privacy

$0          $10         $20         $40         $200
│           │           │           │           │
│           │           │           │           │
▼           ▼           ▼           ▼           ▼
Continue    Zed Pro     Cursor Pro  Cursor      Cursor Ultra
+Ollama     +BYOK       +Privacy    Teams       (max features,
(local,     (auditable, (good but   (true       same privacy
max         your API    30-day      zero-       as Teams)
privacy)    terms)      caveat)     retention)
```

**The $40/user/mo jump from Cursor Pro to Teams is the most important privacy upgrade** — it's the difference between "probably private" and "contractually guaranteed zero-retention."

---

## Privacy Deep Dive

*Detailed analysis for security-conscious enterprises.*

### Jurisdiction Risk Matrix

All cloud-based AI tools are subject to the legal jurisdiction of their headquarters. This affects government access to your data.

| Tool | HQ Location | Legal Risks | Mitigation |
|------|-------------|-------------|------------|
| **Cursor** | US (San Francisco) | CLOUD Act, FISA 702 | Privacy Mode, enterprise DPA |
| **GitHub Copilot** | US (Microsoft) | CLOUD Act, FISA 702 | Business/Enterprise tier |
| **Anthropic/Claude** | US (San Francisco) | CLOUD Act, FISA 702 | Enterprise tier, AWS Bedrock |
| **OpenAI/Codex** | US (San Francisco) | CLOUD Act, FISA 702 | Enterprise tier, Azure OpenAI |
| **Google/Gemini** | US | CLOUD Act, FISA 702 | Vertex AI with EU regions |
| **Zed** | US | CLOUD Act (mitigated by BYOK) | Use own API keys, open source |
| **Windsurf** | US | CLOUD Act | EU Cloud, FedRAMP, self-hosted |
| **Kimi (Moonshot)** | **China** | **PIPL, Cybersecurity Law, gov access** | **Avoid API; use open weights locally** |
| **Continue.dev** | N/A (open source) | None (local execution) | Use with local models |
| **OpenCode** | N/A (open source) | Depends on provider | Use with local models |

> **For EU Enterprises:** Consider Schrems II implications. US tools may not satisfy GDPR adequacy requirements. Prefer: EU-hosted options (Windsurf EU, Azure EU regions), self-hosted solutions, or tools with Standard Contractual Clauses (SCCs).

> **US CLOUD Act:** Allows US government to compel disclosure of data stored by US companies anywhere globally, potentially without user notification.

---

### Legal Documents & Compliance Links

Before using any tool with sensitive code, verify these documents exist:

| Provider | DPA | Subprocessors | Privacy Policy | Trust Center |
|----------|-----|---------------|----------------|--------------|
| **Cursor** | [Request](https://cursor.com/contact) | Not published | [Link](https://cursor.com/privacy) | [Link](https://trust.cursor.com) |
| **GitHub** | [Link](https://github.com/customer-terms/github-data-protection-agreement) | [Link](https://github.com/github-subprocessors-list) | [Link](https://docs.github.com/en/site-policy/privacy-policies) | [Link](https://copilot.github.trust.page) |
| **Anthropic** | [Link](https://anthropic.com/legal/dpa) | [Trust Dashboard](https://claude.com/trust) | [Link](https://anthropic.com/legal/privacy) | [Link](https://anthropic.com/trust) |
| **OpenAI** | [Link](https://openai.com/policies/data-processing-addendum) | [Link](https://openai.com/policies/subprocessor-list) | [Link](https://openai.com/policies/privacy-policy) | [Link](https://trust.openai.com) |
| **Google Cloud** | [Link](https://cloud.google.com/terms/data-processing-addendum) | [Link](https://cloud.google.com/terms/subprocessors) | [Link](https://policies.google.com/privacy) | [Link](https://cloud.google.com/security) |
| **Microsoft/Azure** | [Link](https://www.microsoft.com/licensing/docs/view/Microsoft-Products-and-Services-Data-Protection-Addendum-DPA) | [Link](https://learn.microsoft.com/en-us/compliance/assurance/assurance-subprocessor-list) | [Link](https://privacy.microsoft.com/) | [Link](https://servicetrust.microsoft.com/) |
| **AWS** | [Link](https://aws.amazon.com/compliance/data-processing-addendum/) | [Link](https://aws.amazon.com/compliance/sub-processors/) | [Link](https://aws.amazon.com/privacy/) | [Link](https://aws.amazon.com/compliance/) |
| **Windsurf** | [Enterprise](https://windsurf.com/enterprise) | [Enterprise](https://windsurf.com/security) | [Link](https://windsurf.com/privacy) | [Link](https://trust.windsurf.com) |

**Key Subprocessors for AI Inference:**

- GitHub Copilot uses: AWS, Anthropic, Fireworks AI, GCP, Azure, OpenAI, xAI
- Anthropic uses: GCP, AWS, Cloudflare, Stripe
- OpenAI uses: Azure, AWS

---

### Hidden Retention Gotchas

Policies that aren't obvious from marketing materials:

| Tool | Gotcha | Who's Affected |
|------|--------|----------------|
| **Cursor** | 30-day retention with OpenAI/Anthropic for "trust & safety" even with Privacy Mode | Non-Business plans |
| **Claude Code** | Training ON by default since Aug 2025; 5-year retention if you allow | Consumer (Free/Pro/Max) |
| **Anthropic** | Must opt-out within 30 days or data used for training | New consumer users |
| **Azure OpenAI** | 30-day abuse monitoring retention (waivable via application) | All users by default |
| **GitHub Copilot** | User engagement data retained 2 years | All plans |
| **Cursor** (post-Oct 2025 accounts, Privacy Mode OFF) | Prompts shared directly with OpenAI | New accounts |

---

### Verification Methods

**Tools:** mitmproxy, Charles Proxy (traffic inspection) | Pi-hole, NextDNS, Little Snitch (DNS monitoring) | Wireshark (packet capture)

```bash
# Block telemetry at DNS, monitor connections, exclude sensitive files
sudo lsof -i -n | grep cursor  # Monitor outbound
echo -e "*.env\nsecrets/\n*.pem" >> .cursorignore  # Exclude sensitive files
# Verify privacy mode: check for x-ghost-mode: true in request headers via proxy
```

**What you CAN verify:** Network destinations, payload contents, local file access. **What you CANNOT verify:** Server-side retention, training exclusion (must trust vendor).

**Fully auditable (open source):** Zed, Continue.dev, OpenCode, Ollama, llama.cpp

---

### API Key Security

| Practice | Recommendation |
|----------|----------------|
| **Storage** | System keychain (macOS Keychain, GNOME Keyring), NOT plain text env vars |
| **Rotation** | Quarterly minimum; immediately if suspected exposure |
| **Scope** | Use separate keys for AI tools vs production services |
| **Git hygiene** | Pre-commit hooks with gitleaks, git-secrets, trufflehog |

```bash
# macOS: Store/retrieve from Keychain
security add-generic-password -a "$USER" -s "openai-api-key" -w "sk-..."
export OPENAI_API_KEY=$(security find-generic-password -s "openai-api-key" -w)

# Linux: Use secret-tool (GNOME Keyring)
secret-tool store --label="OpenAI API Key" service openai username apikey
export OPENAI_API_KEY=$(secret-tool lookup service openai username apikey)
```

---

### Incident History & Red Flags

| Tool/Company | Incident | Date | Severity |
|--------------|----------|------|----------|
| **Kimi (Moonshot)** | Cited by Chinese government for excessive data collection | 2024 | High |
| **Anthropic** | Default training ON for consumer accounts | Aug 2025 | Medium |
| **GitHub Copilot** | Class-action lawsuits re: training on copyrighted code | 2022-ongoing | Legal |
| **Various** | Prompt injection exfiltration attacks demonstrated | Ongoing | Security |

**Acquisition risk:** Cursor (startup, higher risk) > Anthropic/OpenAI (VC-backed, medium) > Zed (open source mitigates) > Continue.dev (Apache 2.0, lowest)

---

### Air-Gapped & Offline Solutions

For maximum security environments (defense, healthcare, financial):

| Solution | Model | VRAM | Quality | Setup |
|----------|-------|------|---------|-------|
| **Continue.dev + Ollama** | DeepSeek-V3.2 (671B MoE, 37B active) | 24GB+ | Excellent | Low |
| **Zed + Ollama** | Qwen3-Coder-32B | 24GB+ | Excellent | Low |
| **OpenCode + Ollama** | Qwen2.5-Coder-32B | 24GB+ | Excellent | Low |
| **LM Studio + editor** | DeepSeek-Coder-7B | 8GB | Good | Low |
| **Tabnine Enterprise** | Proprietary | N/A | 80-90% | High |
| **vLLM/TGI self-hosted** | Any | 48GB+ | 95%+ | High |

**Air-Gap Checklist:** Download models via secure transfer → Verify SHA256 checksums → Disable update checks → Block all outbound → Test with network disconnected

---

### Telemetry & Data Flow

**What gets sent:** Current file, recent history, codebase embeddings (if indexed), file paths, your prompt, git diff, terminal output.

**Minimize telemetry:**

- Cursor: Privacy Mode + `.cursorignore` + disable telemetry in settings
- VS Code: `"telemetry.telemetryLevel": "off"`
- Copilot: Disable data collection in GitHub settings
- Zed/Continue.dev/OpenCode: Minimal or no telemetry (open source)

---

*Last updated: 2026-01-29*
