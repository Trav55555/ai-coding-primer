---
id: ai-coding-primer-batch-2a-migration-map
tags:
  - project
  - editorial
  - migration
type: plan
status: active
created: '2026-08-09'
---

# Batch 2A Migration Map

## Purpose

Record each consolidation source, destination, and route-preservation state before removing catalog pages. Batch 2A creates destinations and tests one production redirect. Batch 2B owns bulk route migration.

## Template Routes

| Existing route | Destination | Batch 2B state |
|---|---|---|
| `/templates/claude-md-typescript-react/` | `/templates/frontend-context-file/` | redirect configured |
| `/templates/claude-md-nextjs/` | `/templates/frontend-context-file/` | redirect configured |
| `/templates/claude-md-nodejs/` | `/templates/backend-context-files/` | redirect configured |
| `/templates/claude-md-python/` | `/templates/backend-context-files/` | redirect configured |
| `/templates/claude-md-go/` | `/templates/backend-context-files/` | redirect configured |
| `/templates/claude-md-rust/` | `/templates/backend-context-files/` | redirect configured |
| `/templates/claude-md-csharp/` | `/templates/backend-context-files/` | redirect configured |
| `/templates/claude-md-elixir/` | `/templates/backend-context-files/` | redirect configured |
| `/templates/claude-md-bun/` | `/templates/backend-context-files/` | redirect configured |
| `/templates/claude-md-hypermedia/` | `/templates/hypermedia-context-file/` | redirect configured |
| `/templates/cursorrules-typescript/` | `/templates/editor-project-rules/` | redirect configured |
| `/templates/cursorrules-nextjs/` | `/templates/editor-project-rules/` | redirect configured |
| `/templates/cursorrules-nodejs/` | `/templates/editor-project-rules/` | redirect configured |
| `/templates/cursorrules-python/` | `/templates/editor-project-rules/` | redirect configured |
| `/templates/cursorrules-go/` | `/templates/editor-project-rules/` | redirect configured |
| `/templates/cursorrules-rust/` | `/templates/editor-project-rules/` | redirect configured |
| `/templates/cursorrules-csharp/` | `/templates/editor-project-rules/` | redirect configured |
| `/templates/cursorrules-elixir/` | `/templates/editor-project-rules/` | redirect configured |
| `/templates/cursorrules-bun/` | `/templates/editor-project-rules/` | redirect configured |
| `/templates/cursorrules-hypermedia/` | `/templates/editor-project-rules/` | redirect configured |

The `/templates/` route remains in place as the examples hub.

## Tool Routes

| Existing route | Destination | Batch 2B state |
|---|---|---|
| `/tools/cli/gemini-cli/` | `/reference/retired-and-transitioned-tools/` | production redirect verified |
| `/tools/extensions/supermaven/` | `/reference/retired-and-transitioned-tools/` | redirect configured |
| `/tools/agents/hermes-agent/` | `/reference/agent-platform-boundaries/` | redirect configured |
| `/tools/agents/openclaw/` | `/reference/agent-platform-boundaries/` | redirect configured |

If the Gemini redirect fails locally or on GitHub Pages, restore its source page as a one-release tombstone linking to the destination.

## Internal Link Inventory

Before Batch 2A, public links to stack-specific template routes were concentrated in:

- `site/src/content/docs/templates/index.md`
- `site/src/content/docs/learn/advanced/project-context-files.md`

Batch 2A repoints both pages to the four destinations. Repository references in this migration map and the content-review ledger are records, not public navigation.

## Raw Artifacts

Batch 2B replaces the 14 stack-specific downloads with four maintained site assets under `site/public/examples/`:

- `frontend-context.md`
- `backend-context.md`
- `hypermedia-context.md`
- `editor-project-rule.mdc`

Each consolidated public example links to its raw asset under `/ai-coding-primer/examples/`. The old raw GitHub URLs cannot use Astro redirects because they are repository-file URLs rather than site routes; removing them is an intentional end to the unowned second catalog.

## Redirect Evidence to Record

For the Gemini route, record:

- generated file path and redirect markup
- base-prefixed destination
- local preview behavior
- search-index exclusion of the old article
- sitemap treatment
- GitHub Pages status and browser destination
- trailing-slash behavior

A static HTML redirect may return HTTP `200`; the gate tests route preservation, not server-level `301` support.

## Local Redirect Evidence

Reviewed: August 9, 2026.

- Astro generated `site/dist/tools/cli/gemini-cli/index.html`.
- The file contains a zero-delay refresh to `/ai-coding-primer/reference/retired-and-transitioned-tools/` and a base-prefixed canonical URL.
- Local preview returned the redirect page for both `/ai-coding-primer/tools/cli/gemini-cli` and `/ai-coding-primer/tools/cli/gemini-cli/`.
- The destination returned its full page with HTTP `200`.
- The sitemap includes the destination and omits the retired Gemini route.
- Pagefind omits the old Gemini article text.
- Astro documents that static builds emit HTML meta-refresh files when no redirect-capable adapter is present: [Configured Redirects](https://docs.astro.build/en/guides/routing/#configured-redirects).

## Production Redirect Evidence

Verified after deployment of commit `dfd83ff` on August 9, 2026.

- GitHub Pages returned HTTP `200` for both slash and no-slash forms of the old Gemini route.
- The served redirect file retained the base-prefixed refresh and canonical destination.
- A headless browser followed the refresh and rendered the Retired and Transitioned Tools heading and title.
- Both reference destinations, the examples hub, and all four example destinations returned HTTP `200`.
- GitHub Actions run `31345120592` completed successfully.

## Batch 2B Decision

Use Astro's configured static redirects for the remaining merged routes, with these constraints:

1. Create and validate the destination before deleting a source page.
2. Use an explicit `/ai-coding-primer/` prefix in each redirect destination; Astro did not add the configured base automatically in the first local spike.
3. Inspect the generated `index.html`, canonical URL, sitemap, and Pagefind output before deployment.
4. Verify slash and no-slash forms plus browser navigation after deployment.
5. Treat the result as route preservation through an HTML refresh, not an HTTP `301`. Use a one-release tombstone instead if a route needs visible migration context or the redirect fails live validation.

## Batch 2B Local Evidence

Validated: August 9, 2026.

- All 24 configured routes generate redirect `index.html` files with base-prefixed refresh and canonical destinations.
- Local preview serves both slash and no-slash forms for all routes: 48 of 48 checks passed.
- Browser checks covered frontend, backend, hypermedia, editor-rule, retired-tool, and agent-platform destinations.
- The sitemap omits every migrated source route.
- Pagefind omits the retired source articles and indexes the canonical destinations.
- The sidebar exposes one collapsed Tool Snapshots group and four maintained examples; old stack and agent-platform source groups are absent.
- Four downloadable assets exist under `/ai-coding-primer/examples/` and are linked from their maintained pages.
- The build generates 65 content pages and 89 HTML files including redirects, without warnings.
- `npm audit --omit=dev` reports zero vulnerabilities.
- Internal page, redirect, and asset checks pass.
- External link check covered 141 URLs with no 404s; four existing sources returned bot-blocking HTTP `403` responses.
- Responsive, keyboard, and independent migration/editorial reviews passed.

Production verification remains required after commit and deployment.
