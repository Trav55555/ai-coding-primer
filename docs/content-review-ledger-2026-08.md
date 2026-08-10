---
id: ai-coding-primer-content-review-ledger-2026-08
tags:
  - project
  - editorial
  - content-audit
  - information-architecture
type: audit
status: proposed
created: '2026-08-09'
---

# Comprehensive Content Review Ledger — August 2026

## Purpose

Classify every public page before the primer undergoes a broad rewrite. This ledger records editorial disposition, not factual certification. A page marked `keep` may still need source and link maintenance.

Use these sources of truth:

- `PRODUCT.md`
- `docs/NORTH_STAR.md`
- `docs/workflow-first-editorial-scope-policy.md`
- `docs/editorial-writing-smells.md`

## Corpus Baseline

- Public content files: 82
- Approximate words: 50,900
- Learning pages: 22
- Tool pages: 20
- Template pages: 21
- Tool and template pages together: 41 of 82

The main structural risk is catalog shape. The product promises durable workflow guidance, but half the page inventory consists of vendor or template pages.

## Labels

### Tier

- **Core:** durable curriculum or policy needed to use the primer.
- **Durable:** stable decision support, glossary, or interpretation guidance.
- **Appendix:** perishable vendor, benchmark, historical, or implementation-specific reference.

### Disposition

- **Keep:** preserve structure; make only evidence, link, or clarity corrections.
- **Revise:** targeted changes without changing the page's ownership.
- **Rewrite:** rebuild around a clearer reader question or procedure.
- **Merge:** preserve distinct material in a named destination.
- **Relocate:** retain the page but move it out of the main learning path.
- **Archive:** remove from normal navigation and preserve only historical or migration value.

### Priority

- **P0:** misleading, contradictory, weakly sourced, or structurally off-strategy.
- **P1:** high-value consolidation or information-architecture work.
- **P2:** targeted improvement after structural work.
- **P3:** routine maintenance only.

## Page Ledger

### Home and Learning Curriculum

| Path | Tier | Reader job | Disposition | Priority | Rationale or destination |
|---|---|---|---|---|---|
| `site/src/content/docs/index.mdx` | Core | Choose an entry point | Keep | P3 | Recently aligned with the beginner path; revise only when target navigation changes. |
| `site/src/content/docs/learn/beginner/introduction.md` | Core | Understand the guide and beginner sequence | Keep | P3 | Clear audience, path, assumptions, and reference boundary. |
| `site/src/content/docs/learn/beginner/what-is-ai-coding.md` | Core | Understand what agentic tools change | Keep | P3 | Uses the canonical loop as owner; consider a route rename only with redirects. |
| `site/src/content/docs/learn/beginner/choose-your-tool.md` | Core | Choose a workflow shape | Revise | P2 | Add one minimum viable vendor-neutral setup; keep product selection out. |
| `site/src/content/docs/learn/beginner/setup-checklist.md` | Core | Establish baseline, checks, permissions, and recovery | Keep | P3 | Recently rewritten; preserve repository-native framing. |
| `site/src/content/docs/learn/beginner/first-session.md` | Core | Complete one bounded verified task | Keep | P3 | Recently rewritten around explicit scope, evidence, and stop conditions. |
| `site/src/content/docs/learn/intermediate/agentic-development-loop.md` | Core | Run consequential repository work | Keep | P3 | Canonical procedure; other workflow pages must point here rather than define competing loops. |
| `site/src/content/docs/learn/intermediate/workflow-archetypes.md` | Core | Select a workflow for the task shape | Keep | P2 | Owns workflow selection; scenarios own execution detail. Trim only duplicated procedure. |
| `site/src/content/docs/learn/intermediate/scenario-bug-fix.md` | Core | Apply the loop to a reproducible defect | Keep | P3 | Strong worked procedure with narrow verification. |
| `site/src/content/docs/learn/intermediate/scenario-feature-build.md` | Core | Apply the loop to new behavior | Keep | P3 | Strong spec, decision, slice, and verification sequence. |
| `site/src/content/docs/learn/intermediate/scenario-safe-refactor.md` | Core | Preserve behavior during structural change | Keep | P3 | Strong non-goals, baseline, seam, and diff discipline. |
| `site/src/content/docs/learn/intermediate/effective-patterns.md` | Durable | Look up reusable prompt and verification patterns | Revise | P2 | Keep as a pattern index; remove procedure duplicated from the canonical loop and scenarios. |
| `site/src/content/docs/learn/intermediate/troubleshooting.md` | Core | Recover when agent work stalls or drifts | Keep | P2 | Owns recovery; link it consistently from scenario pages. |
| `site/src/content/docs/learn/intermediate/common-mistakes.md` | Core | Recognize and correct recurring failure modes | Revise | P2 | Remove cute labels where they obscure the mechanism; deduplicate troubleshooting content. |
| `site/src/content/docs/learn/intermediate/five-levels.md` | Appendix | Use autonomy as an optional descriptive lens | Rewrite and demote in navigation | P0 | Keep the route; replace status/progression framing with task-risk modes or a short optional lens. |
| `site/src/content/docs/learn/intermediate/learning-with-ai.md` | Core | Use assistance without losing comprehension | Revise | P1 | Strong guidance; verify every study claim and separate learning procedure from evidence summary. |
| `site/src/content/docs/learn/intermediate/core-concepts.md` | Durable | Look up shared terminology | Rewrite as glossary and move in navigation | P1 | Keep the route; model/provider, context, MCP, and skills pages own full explanations. |
| `site/src/content/docs/learn/intermediate/context-engineering.md` | Core | Select and test task-relevant context | Keep | P3 | Strong evidence, procedure, experiment, and limits. |
| `site/src/content/docs/learn/advanced/project-context-files.md` | Core | Design and maintain persistent repository instructions | Keep | P2 | Canonical owner for project context files; absorb only distinct template patterns. |
| `site/src/content/docs/learn/advanced/subagents.md` | Core | Decide when to parallelize or isolate work | Keep | P3 | Strong decision rules, handoffs, and coordination-cost boundary. |
| `site/src/content/docs/learn/advanced/agent-harness.md` | Core | Build feedback, permission, state, and recovery around an agent | Keep | P2 | Strong advanced procedure; tighten cross-links to governance and security. |
| `site/src/content/docs/learn/advanced/mcp-deep-dive.md` | Core | Evaluate MCP access and permission costs | Revise | P1 | Qualify token-cost examples and strengthen source/freshness boundaries. |
| `site/src/content/docs/learn/advanced/skills.md` | Core | Design and evaluate reusable agent behavior | Revise | P1 | Align installation guidance with audited local intake and supply-chain controls. |

### Models, Research, Security, Team, and Reference

| Path | Tier | Reader job | Disposition | Priority | Rationale or destination |
|---|---|---|---|---|---|
| `site/src/content/docs/models/overview.md` | Durable | Distinguish model capability from provider boundary | Keep | P3 | Canonical owner for model/provider governance. |
| `site/src/content/docs/models/capabilities.md` | Durable | Match capability class to task | Revise | P2 | Add concrete task examples and keep classes workflow-bound. |
| `site/src/content/docs/models/selection-guide.md` | Durable | Choose a model class after workflow selection | Merge | P1 | Merge distinct checklist material into `tools/comparison.md` and `models/capabilities.md`; avoid a second chooser. |
| `site/src/content/docs/models/pricing.md` | Durable | Understand billing and access mechanisms | Revise and demote in navigation | P2 | Keep the route; preserve billing-model explanation and remove overlap with fast-changing information. |
| `site/src/content/docs/models/benchmarks.md` | Appendix | Interpret benchmark claims | Keep | P3 | Strong no-score-table boundary; maintain live links and caveats. |
| `site/src/content/docs/research/overview.md` | Durable | Understand evidence categories and claim map | Keep | P2 | Evidence taxonomy owner; add review metadata during evidence sprint. |
| `site/src/content/docs/research/productivity.md` | Durable | Interpret mixed productivity research | Keep | P3 | Best model for scoped claims and limitations. |
| `site/src/content/docs/research/code-quality-security.md` | Durable | Interpret quality and security evidence | Revise | P1 | Add review metadata and preserve vendor/preprint distinctions. |
| `site/src/content/docs/research/learning-impacts.md` | Durable | Understand learning and dependency evidence | Rewrite | P0 | Strong claims rely on mixed education and coding studies with incomplete source detail. Rebuild as 3–5 scoped claims. |
| `site/src/content/docs/research/adoption-trends.md` | Durable | Decide what adoption signals affect governance | Rewrite and retitle | P1 | Keep the route; retitle the page “Adoption Signals” and replace market-trend framing with operational implications. |
| `site/src/content/docs/security/checklist.md` | Core | Set first-use data, credential, and action boundaries | Keep | P3 | Security entry point and hub. |
| `site/src/content/docs/security/privacy-comparison.md` | Durable | Run a privacy and procurement review | Rename and revise | P1 | Content is a framework, not a comparison. Proposed title: Privacy Review Framework. |
| `site/src/content/docs/security/deep-dive.md` | Durable | Verify technical data paths and control limits | Rewrite | P1 | Become canonical technical home for data-path inspection, exclusion testing, and deeper threat mechanics. |
| `site/src/content/docs/team/governance.md` | Core | Define policy, autonomy, rollout, and approvals | Keep | P2 | Add one minimum viable governed pilot; preserve autonomy-as-risk framing. |
| `site/src/content/docs/team/security-risks.md` | Core | Build a team threat and response model | Rewrite and transfer detail | P0 | Keep the route as a shorter team decision page; transfer reusable technical mechanics to `security/deep-dive.md`. |
| `site/src/content/docs/reference/development-practices-timeline.md` | Durable | Place agentic engineering in historical practice | Revise | P2 | Preserve non-inevitable history; move current productivity claims to research and trim repeated thesis. |
| `site/src/content/docs/reference/fast-changing-info.md` | Durable | Maintain perishable material | Keep | P3 | Freshness-policy owner and monthly maintenance procedure. |
| `site/src/content/docs/reference/appendix.md` | Appendix | Understand what perishable reference contains | Rewrite | P1 | Expand into the appendix hub for tool snapshots, retired products, benchmarks, and examples. |

### Templates and Examples

| Path | Tier | Reader job | Disposition | Priority | Rationale or destination |
|---|---|---|---|---|---|
| `site/src/content/docs/templates/index.md` | Appendix | Find a context-file example | Rewrite and retitle in place | P0 | Keep the route; replace the catalog overview with a small examples hub organized by instructional pattern. |
| `site/src/content/docs/templates/claude-md-typescript-react.md` | Appendix | Adapt a frontend context file | Merge | P0 | Merge into new `templates/frontend-context-file.md`. |
| `site/src/content/docs/templates/claude-md-nextjs.md` | Appendix | Adapt a full-stack frontend context file | Merge | P0 | Merge distinct server/client boundaries into new `templates/frontend-context-file.md`. |
| `site/src/content/docs/templates/claude-md-nodejs.md` | Appendix | Adapt a backend context file | Merge | P0 | Merge distinct commands and boundary notes into new `templates/backend-context-files.md`. |
| `site/src/content/docs/templates/claude-md-python.md` | Appendix | Adapt a backend context file | Merge | P0 | Merge distinct environment and test notes into new `templates/backend-context-files.md`. |
| `site/src/content/docs/templates/claude-md-go.md` | Appendix | Adapt a backend context file | Merge | P0 | Merge distinct module and command notes into new `templates/backend-context-files.md`. |
| `site/src/content/docs/templates/claude-md-rust.md` | Appendix | Adapt a backend context file | Merge | P0 | Merge distinct Cargo and safety notes into new `templates/backend-context-files.md`. |
| `site/src/content/docs/templates/claude-md-csharp.md` | Appendix | Adapt a backend context file | Merge | P0 | Merge distinct solution/project notes into new `templates/backend-context-files.md`. |
| `site/src/content/docs/templates/claude-md-elixir.md` | Appendix | Adapt a backend context file | Merge | P0 | Merge distinct OTP and test notes into new `templates/backend-context-files.md`. |
| `site/src/content/docs/templates/claude-md-bun.md` | Appendix | Adapt a runtime-specific context file | Merge | P0 | Preserve only Bun-specific command/runtime cautions in new `templates/backend-context-files.md`. |
| `site/src/content/docs/templates/claude-md-hypermedia.md` | Appendix | Adapt a server-rendered hypermedia context file | Merge | P0 | Preserve as new `templates/hypermedia-context-file.md` because the interaction model is distinct. |
| `site/src/content/docs/templates/cursorrules-typescript.md` | Appendix | Adapt editor project rules | Merge | P0 | Merge into new `templates/editor-project-rules.md`; verify modern format before publication. |
| `site/src/content/docs/templates/cursorrules-nextjs.md` | Appendix | Adapt editor project rules | Merge | P0 | Preserve only distinct server/client constraints in new `templates/editor-project-rules.md`. |
| `site/src/content/docs/templates/cursorrules-nodejs.md` | Appendix | Adapt editor project rules | Merge | P0 | Merge distinct backend constraints into new `templates/editor-project-rules.md`. |
| `site/src/content/docs/templates/cursorrules-python.md` | Appendix | Adapt editor project rules | Merge | P0 | Merge distinct Python commands into new `templates/editor-project-rules.md`. |
| `site/src/content/docs/templates/cursorrules-go.md` | Appendix | Adapt editor project rules | Merge | P0 | Merge distinct Go commands into new `templates/editor-project-rules.md`. |
| `site/src/content/docs/templates/cursorrules-rust.md` | Appendix | Adapt editor project rules | Merge | P0 | Merge distinct Cargo constraints into new `templates/editor-project-rules.md`. |
| `site/src/content/docs/templates/cursorrules-csharp.md` | Appendix | Adapt editor project rules | Merge | P0 | Merge distinct solution/project constraints into new `templates/editor-project-rules.md`. |
| `site/src/content/docs/templates/cursorrules-elixir.md` | Appendix | Adapt editor project rules | Merge | P0 | Merge distinct OTP constraints into new `templates/editor-project-rules.md`. |
| `site/src/content/docs/templates/cursorrules-bun.md` | Appendix | Adapt editor project rules | Merge | P0 | Merge distinct runtime commands into new `templates/editor-project-rules.md`. |
| `site/src/content/docs/templates/cursorrules-hypermedia.md` | Appendix | Adapt editor project rules | Merge | P0 | Merge distinct rule syntax into new `templates/editor-project-rules.md`; keep workflow detail in `templates/hypermedia-context-file.md`. |

### Tool References

All individual product pages belong in the appendix. Their purpose is to illustrate current workflow and authority boundaries, not recommend products.

| Path | Tier | Reader job | Disposition | Priority | Rationale or destination |
|---|---|---|---|---|---|
| `site/src/content/docs/tools/comparison.md` | Durable | Compare workflow and governance criteria | Keep | P2 | Canonical tool-selection criteria; absorb distinct material from model selection. |
| `site/src/content/docs/tools/cli/aider.md` | Appendix | Evaluate a Git-oriented terminal client | Keep route; demote in navigation | P2 | Keep as a perishable snapshot under a collapsed tool appendix. |
| `site/src/content/docs/tools/cli/claude-code.md` | Appendix | Evaluate a hosted terminal agent | Revise; demote in navigation | P2 | Keep the route; add source-specific data and permission boundaries during reference pass. |
| `site/src/content/docs/tools/cli/codex-cli.md` | Appendix | Evaluate sandbox and approval controls | Revise; demote in navigation | P2 | Keep the route; preserve sandbox/approval distinction and verify current docs. |
| `site/src/content/docs/tools/cli/gemini-cli.md` | Appendix | Understand a product transition | Archive and merge | P1 | Merge into `reference/retired-and-transitioned-tools.md`; redirect after the feasibility gate or keep a one-release tombstone. |
| `site/src/content/docs/tools/cli/opencode.md` | Appendix | Evaluate a configurable provider client | Keep route; demote in navigation | P2 | Keep provider-boundary lesson; hide from primary navigation. |
| `site/src/content/docs/tools/cli/pi.md` | Appendix | Evaluate a programmable coding-agent harness | Revise; demote in navigation | P1 | Keep the route; add direct implementation-doc links and trim length. |
| `site/src/content/docs/tools/extensions/amazon-q.md` | Appendix | Evaluate AWS-native assistance and transformation | Keep route; demote in navigation | P2 | Keep surface-specific data-boundary and migration controls. |
| `site/src/content/docs/tools/extensions/cody.md` | Appendix | Evaluate enterprise Sourcegraph assistance | Keep route; demote in navigation | P2 | Keep enterprise-only status clear; not a primary chooser. |
| `site/src/content/docs/tools/extensions/continue-dev.md` | Appendix | Evaluate configurable editor assistance | Keep route; demote in navigation | P2 | Preserve complete-data-path lesson. |
| `site/src/content/docs/tools/extensions/copilot.md` | Appendix | Evaluate GitHub-integrated assistance | Revise; demote in navigation | P2 | Keep the route; verify current repository instruction and data-hosting sources. |
| `site/src/content/docs/tools/extensions/supermaven.md` | Appendix | Understand a retired product | Archive and merge | P1 | Merge into `reference/retired-and-transitioned-tools.md`; redirect after the feasibility gate or keep a one-release tombstone. |
| `site/src/content/docs/tools/extensions/tabnine.md` | Appendix | Distinguish private from air-gapped deployment | Keep route; demote in navigation | P2 | Keep because the deployment distinction is durable. |
| `site/src/content/docs/tools/ides/antigravity.md` | Appendix | Evaluate Google agent IDE/CLI authority | Revise; demote in navigation | P2 | Keep the route; keep product status and security controls source-bound. |
| `site/src/content/docs/tools/ides/cursor.md` | Appendix | Evaluate integrated and background-agent workflows | Revise; demote in navigation | P1 | Keep the route; use vendor-stated language for retention and remote execution. |
| `site/src/content/docs/tools/ides/kiro.md` | Appendix | Evaluate spec-driven development tooling | Keep route; demote in navigation | P2 | Keep distinct spec-workflow example without static model lists. |
| `site/src/content/docs/tools/ides/windsurf.md` | Appendix | Evaluate integrated agent and deployment surfaces | Keep route; demote in navigation | P2 | Preserve feature-specific data-flow warning. |
| `site/src/content/docs/tools/ides/zed.md` | Appendix | Evaluate hosted, BYOK, local, and external-agent paths | Keep route; demote in navigation | P2 | Preserve multiple-authority-boundary lesson. |
| `site/src/content/docs/tools/agents/hermes-agent.md` | Appendix | Evaluate a broad agent platform | Archive and merge | P1 | Merge distinct persistence and authority lessons into `reference/agent-platform-boundaries.md`; redirect or tombstone the old route per the migration gate. |
| `site/src/content/docs/tools/agents/openclaw.md` | Appendix | Evaluate a messaging-connected agent platform | Archive and merge | P1 | Merge gateway, messaging, installer, and external-action risks into `reference/agent-platform-boundaries.md`; redirect or tombstone the old route per the migration gate. |

## Planned Merge Destinations

Create and validate these pages before removing any source route:

| Page | New path | Reader job | Sources absorbed | Batch |
|---|---|---|---|---|
| Frontend context example | `site/src/content/docs/templates/frontend-context-file.md` | Adapt one context-file pattern for browser and full-stack frontend work | TypeScript/React and Next.js context templates | 2 |
| Backend context examples | `site/src/content/docs/templates/backend-context-files.md` | Compare a small number of backend context-file patterns | Bun, Node.js, Python, Go, Rust, C#, and Elixir context templates | 2 |
| Hypermedia context example | `site/src/content/docs/templates/hypermedia-context-file.md` | Preserve server-rendered interaction boundaries | Hypermedia context and relevant rule templates | 2 |
| Editor project rules | `site/src/content/docs/templates/editor-project-rules.md` | Adapt a current editor-rules format without stack catalog sprawl | All `.cursorrules` variants after current-format verification | 2 |
| Retired and transitioned tools | `site/src/content/docs/reference/retired-and-transitioned-tools.md` | Understand migration lessons from retired products | Gemini CLI and Supermaven | 2 |
| Agent platform boundaries | `site/src/content/docs/reference/agent-platform-boundaries.md` | Evaluate coding-relevant authority risks in broad agent platforms | Distinct Hermes Agent and OpenClaw lessons | 2 |

`templates/index.md` remains the route for the examples hub and is retitled in place.

## Duplication and Ownership Map

| Concept or reader job | Canonical owner | Pages that should defer, merge, or link |
|---|---|---|
| Beginner sequence | `learn/beginner/introduction.md` | homepage and beginner next links |
| Canonical implementation procedure | `learn/intermediate/agentic-development-loop.md` | archetypes, scenarios, effective patterns, harness |
| Workflow selection | `learn/intermediate/workflow-archetypes.md` | choose-tool and scenario introductions |
| Tool/stack decision criteria | `tools/comparison.md` | choose-tool and model selection |
| Model/provider distinction | `models/overview.md` | core concepts and tool pages |
| Capability classes | `models/capabilities.md` | model selection and vendor pages |
| Benchmark interpretation | `models/benchmarks.md` | vendor pages and research overview |
| Context selection | `learn/intermediate/context-engineering.md` | core concepts, harness, context-file pages |
| Persistent repository instructions | `learn/advanced/project-context-files.md` | templates/examples and tool snapshots |
| First-use security | `security/checklist.md` | setup, tool pages, governance |
| Privacy/procurement review | `security/privacy-comparison.md` (retitled in place) | vendor pages and governance |
| Technical data paths and threat mechanics | `security/deep-dive.md` or approved replacement | security risks and tool pages |
| Team policy and autonomy | `team/governance.md` | five-levels, security risks, tool pages |
| Evidence taxonomy | `research/overview.md` | all research and evidence tags |
| Productivity evidence | `research/productivity.md` | timeline and workflow evidence notes |
| Perishable maintenance | `reference/fast-changing-info.md` | all appendix pages |
| Tool snapshot entry point | `reference/appendix.md` | individual tool pages |

## High-Risk Clusters

### Evidence

1. `research/learning-impacts.md`: rebuild from verified primary sources.
2. `learn/intermediate/learning-with-ai.md`: verify quantitative and causal claims.
3. `research/adoption-trends.md`: remove trend prediction that does not change a decision.
4. `reference/development-practices-timeline.md`: move current productivity evidence out of history.
5. `learn/advanced/mcp-deep-dive.md`: qualify tool-dependent token examples.
6. Vendor privacy claims: use “vendor states” and current primary documentation.

### Contradictions

1. `five-levels.md` implies autonomy progression; Governance says autonomy follows risk and controls.
2. The product rejects catalogs; templates and vendor snapshots make up half the inventory.
3. `privacy-comparison.md` promises comparison but provides a framework.
4. `core-concepts.md` appears as curriculum while duplicating canonical owners.

### Repeated Page Molds

- Twenty stack templates repeat the same context-file headings with nouns changed.
- Tool pages repeatedly use Workflow Fit → Data Boundary → Adoption Check.
- Several model pages independently guide selection.
- Security guidance is fragmented across checklist, privacy, deep dive, security risks, and governance.

The rewrite should preserve decision elements while varying structure according to the reader's actual task.

## Target Information Architecture

### Start Safely

- Introduction
- Agentic Engineering
- Quick Security Checklist
- Choose a Workflow and Stack
- Setup Checklist
- Your First Session

### Do the Work

- Agentic Development Loop
- Workflow Archetypes
- Scenario — Fix a Bug
- Scenario — Add a Feature
- Scenario — Safe Refactor
- Troubleshooting
- Common Mistakes
- Effective Patterns (optional index)

### Control the Agent

- Context Engineering
- Project Context Files
- Subagents
- Agent Harness
- MCP
- Skills

### Choose Tools and Models

- Workflow and Stack Criteria
- Models vs Providers
- Capability Patterns
- Billing Models

### Security and Team Use

- Security Checklist (entry link, not duplicate page)
- Privacy Review Framework
- Technical Security and Data Paths
- Governance and Rollout
- Team Threat Model

### Evidence and History

- Research Overview
- Productivity
- Code Quality and Security
- Learning Impacts
- Adoption Signals
- Benchmark Interpretation
- Development Practices Timeline

### Appendix

- Fast-Changing Information
- Tool Snapshots (collapsed)
- Retired and Transitioned Tools
- Agent Platform Boundaries
- Examples (four or five pages, collapsed)

## Migration and Preservation Rules

1. Do not delete or rename a route until internal links and repository references are inventoried.
2. Prefer keeping the stronger existing route as the merge destination.
3. Preserve distinct examples, commands, caveats, and source links before deleting duplicate pages.
4. Before removing any route, run a redirect-feasibility spike with one representative page. Verify Astro's static output, the `/ai-coding-primer/` base path, local preview behavior, and GitHub Pages behavior. Until that spike passes, a short tombstone page is the default.
5. After the feasibility gate passes, redirect historical tool routes to `reference/retired-and-transitioned-tools.md`; otherwise keep tombstones for one release cycle.
6. After the same gate, redirect merged template routes to the appropriate frontend, backend, hypermedia, or editor-rules example; otherwise keep tombstones.
7. Keep individual active tool snapshots at their current routes. “Demote in navigation” means remove primary-sidebar prominence, not move the route.
8. Do not set a page-count target. Remove pages only when a canonical owner absorbs their distinct value.
9. Record every route move in a migration table and verify the built output under `/ai-coding-primer/`.
10. Update sidebar, sitemap, search, internal links, and live smoke checks in the same slice as each move.

## Ordered Rewrite Batches

### Batch 1 — Correct P0 Evidence and Contradictions

- Rewrite Learning Impacts from verified sources.
- Reframe or retire Five Levels.
- Split Security Risks and assign technical material to its canonical owner.

**Gate:** no broad claim lacks source, setting, date, and interpretation-changing limitation; autonomy is never presented as status.

**Stop:** pause if source verification cannot support a public recommendation.

### Batch 2 — Remove Catalog Shape

1. Create the four named template/example destinations.
2. Create `reference/retired-and-transitioned-tools.md` and `reference/agent-platform-boundaries.md`.
3. Run the redirect-feasibility spike; choose redirects or one-release tombstones from evidence.
4. Replace the 21-page template catalog only after destinations exist.
5. Update `site/astro.config.mjs` before removal so autogenerated tool/template groups do not continue surfacing retired pages.
6. Demote active product snapshots into a collapsed appendix without moving their routes.
7. Verify redirects or tombstones, sidebar, search, sitemap, and internal links together.

**Gate:** every removed route has a built destination or tombstone; core navigation works without vendor or template browsing.

**Stop:** pause if static redirect behavior or inbound-link preservation is unresolved.

### Batch 3 — Core Curriculum Coherence

- Convert Core Concepts into a compact glossary.
- Reconcile Effective Patterns, Common Mistakes, and Troubleshooting with the canonical loop.
- Add the minimum viable setup example to workflow selection.
- Verify progression and next links.

**Gate:** each core page has one reader job, a concrete decision or procedure, limits, and a purposeful next step.

**Stop:** pause if a merge would erase a distinct procedure or create another canonical workflow.

### Batch 4 — Security and Team Architecture

- Rename Privacy Comparison.
- Rebuild the technical deep dive.
- Finalize the shorter Team Threat Model.
- Add the governed-pilot example to Governance.

**Gate:** checklist, privacy, technical threat mechanics, and governance each have distinct ownership; no legal shorthand acts as a risk score.

**Stop:** pause if legal or contractual claims cannot be verified or security ownership remains ambiguous.

### Batch 5 — Models, Tools, and Reference

- Merge the model selection guide into canonical owners.
- Tighten capability and billing pages.
- Source-check active product snapshots.
- Trim current research from the historical timeline.

**Gate:** no core decision depends on a vendor page; all perishable claims have freshness boundaries.

**Stop:** pause if verification requires ongoing comprehensive market tracking or inaccessible contractual data.

### Batch 6 — Whole-Site Editorial Pass

- Run source, terminology, duplication, and page-mold audits.
- Review opening questions, examples, caveats, endings, and next links.
- Run writing-quality lint without flattening justified voice.
- Validate accessibility, responsive layout, sidebar, search, sitemap, routes, and deployment.

**Gate:** every retained page passes the contributor gate in the editorial scope policy.

**Stop:** do not publish while a P0 evidence issue, broken migration route, or contradictory canonical owner remains unresolved.

## Definition of Done for the Rewrite Program

- Every retained page has a distinct reader job and canonical owner.
- Core curriculum works without vendor pages.
- The Agentic Development Loop remains the single canonical implementation procedure.
- Research claims expose their evidence type and limits.
- Security guidance follows one path from first-use controls to technical and team review.
- Templates teach distinct patterns rather than framework substitutions.
- Vendor snapshots are visibly perishable and secondary.
- Redirects preserve removed routes.
- Build, search, sitemap, links, responsive layout, keyboard navigation, and live deployment pass.
