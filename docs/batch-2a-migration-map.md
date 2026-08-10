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

| Existing route | Destination | Batch 2A route state |
|---|---|---|
| `/templates/claude-md-typescript-react/` | `/templates/frontend-context-file/` | retained |
| `/templates/claude-md-nextjs/` | `/templates/frontend-context-file/` | retained |
| `/templates/claude-md-nodejs/` | `/templates/backend-context-files/` | retained |
| `/templates/claude-md-python/` | `/templates/backend-context-files/` | retained |
| `/templates/claude-md-go/` | `/templates/backend-context-files/` | retained |
| `/templates/claude-md-rust/` | `/templates/backend-context-files/` | retained |
| `/templates/claude-md-csharp/` | `/templates/backend-context-files/` | retained |
| `/templates/claude-md-elixir/` | `/templates/backend-context-files/` | retained |
| `/templates/claude-md-bun/` | `/templates/backend-context-files/` | retained |
| `/templates/claude-md-hypermedia/` | `/templates/hypermedia-context-file/` | retained |
| `/templates/cursorrules-typescript/` | `/templates/editor-project-rules/` | retained |
| `/templates/cursorrules-nextjs/` | `/templates/editor-project-rules/` | retained |
| `/templates/cursorrules-nodejs/` | `/templates/editor-project-rules/` | retained |
| `/templates/cursorrules-python/` | `/templates/editor-project-rules/` | retained |
| `/templates/cursorrules-go/` | `/templates/editor-project-rules/` | retained |
| `/templates/cursorrules-rust/` | `/templates/editor-project-rules/` | retained |
| `/templates/cursorrules-csharp/` | `/templates/editor-project-rules/` | retained |
| `/templates/cursorrules-elixir/` | `/templates/editor-project-rules/` | retained |
| `/templates/cursorrules-bun/` | `/templates/editor-project-rules/` | retained |
| `/templates/cursorrules-hypermedia/` | `/templates/editor-project-rules/` | retained |

The `/templates/` route remains in place as the examples hub.

## Tool Routes

| Existing route | Destination | Batch 2A route state |
|---|---|---|
| `/tools/cli/gemini-cli/` | `/reference/retired-and-transitioned-tools/` | production redirect spike |
| `/tools/extensions/supermaven/` | `/reference/retired-and-transitioned-tools/` | retained |
| `/tools/agents/hermes-agent/` | `/reference/agent-platform-boundaries/` | retained |
| `/tools/agents/openclaw/` | `/reference/agent-platform-boundaries/` | retained |

If the Gemini redirect fails locally or on GitHub Pages, restore its source page as a one-release tombstone linking to the destination.

## Internal Link Inventory

Before Batch 2A, public links to stack-specific template routes were concentrated in:

- `site/src/content/docs/templates/index.md`
- `site/src/content/docs/learn/advanced/project-context-files.md`

Batch 2A repoints both pages to the four destinations. Repository references in this migration map and the content-review ledger are records, not public navigation.

## Raw Artifacts

The repository contains 14 downloadable files under `templates/claude-md/` and `templates/cursorrules/`. Batch 2A keeps them unchanged but removes them from the recommended examples hub. They do not have independent public site routes.

Batch 2B should choose one of two outcomes after the consolidated examples are reviewed:

1. replace them with four representative raw artifacts matching the new destinations; or
2. retain selected files as historical examples with explicit maintenance ownership.

Do not leave the 14-file collection as an unowned second catalog.

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
