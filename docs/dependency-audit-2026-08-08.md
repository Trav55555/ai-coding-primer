---
id: ai-coding-primer-dependency-audit-2026-08-08
tags:
  - project
  - security
  - dependencies
  - audit
type: audit
status: active
created: '2026-08-08'
---

# Dependency Audit — 2026-08-08

## Scope

- Directory: `site/`
- Package manager: npm
- Commands:
  - `npm audit --omit=dev`
  - `npm audit fix`
  - `npm audit --omit=dev`
  - `npm run build`

## Initial result

npm reported 15 vulnerabilities:

- 2 low
- 2 moderate
- 11 high
- 0 critical

The findings came through Astro, Starlight, and transitive build dependencies. The site builds to static files and does not deploy an Astro server, which reduces exposure to server-only findings. Build-time parsing and rendering findings still matter because repository content and dependencies enter the build process.

## Non-breaking remediation

`npm audit fix` updated the lockfile within the existing dependency ranges. It removed findings in transitive packages including `defu`, `devalue`, `h3`, `js-yaml`, `nanoid`, `picomatch`, `postcss`, `rollup`, `smol-toml`, `svgo`, and the older Vite path.

## Residual result

npm reports 5 vulnerabilities:

- 3 low
- 2 high
- 0 critical

Residual findings:

| Package path | Severity | Relevance | Available remediation |
|---|---:|---|---|
| Astro / Starlight chain | high and low advisories | Several advisories concern server rendering or development-server behavior; some XSS findings may affect generated markup if untrusted content reaches affected rendering paths | Upgrade Astro 5 to Astro 7 and Starlight 0.37 to 0.41; major-version migration |
| `sharp` | high | Image processing runs during builds; exposure depends on untrusted image inputs and affected libvips operations | Upgrade `sharp` 0.34 to 0.35; npm marks as major |
| nested `esbuild` | low | Development-server arbitrary file read on Windows; local development here is Linux and production output is static | Resolved through the Astro major upgrade path |

## Decision

Do not run `npm audit fix --force`. It would perform breaking upgrades without reviewing Astro and Starlight migration requirements.

Keep the non-breaking lockfile update. Plan the Astro 7, Starlight 0.41, and Sharp 0.35 upgrades as a separate dependency migration with:

1. release-note and migration-guide review
2. local build
3. navigation and search verification
4. visual smoke test
5. another production-only audit

## Verification

After the non-breaking lockfile update:

- `npm audit --omit=dev` completed with 5 residual findings: 3 low, 2 high, 0 critical.
- `npm run build` passed on 2026-08-08 and generated 83 pages.
- Astro content-cache warnings caused by concurrent local builds disappeared after clearing `site/.astro` and rebuilding.

Run the same checks again after any major-version migration.
