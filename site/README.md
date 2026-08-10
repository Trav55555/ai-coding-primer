# Agentic Engineering Primer Site

Astro Starlight site for the Agentic Engineering Primer.

## Commands

Run from this directory:

```bash
npm ci
npm run dev
npm run build
npm run preview
```

## Structure

- `src/content/docs/` — documentation source pages
- `src/styles/` — site-specific styles
- `public/examples/` — maintained downloadable examples
- `astro.config.mjs` — navigation, redirects, base path, and Starlight configuration

The production site uses the `/ai-coding-primer/` base path. Redirect destinations in `astro.config.mjs` must include that prefix explicitly.
