---
id: ai-coding-primer-design-system
tags:
  - project
  - ai-coding
  - design
  - editorial
type: design-system
status: active
created: '2026-06-08'
name: Agentic Engineering Primer
description: A matter-of-fact documentation system for accurate, useful AI-assisted engineering guidance.
colors:
  reasoning-indigo: "#4f46e5"
  reasoning-indigo-soft: "#eef2ff"
  reasoning-indigo-deep: "#312e81"
  field-note-cream: "#fbfaf7"
  ink-slate: "#1f2430"
  tempered-slate: "#5f6675"
  rule-slate: "#d9dce5"
  evidence-green: "#dcfce7"
  evidence-green-text: "#166534"
  caution-amber: "#fef3c7"
  caution-amber-text: "#92400e"
  risk-red: "#fee2e2"
  risk-red-text: "#991b1b"
typography:
  display:
    fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif"
    fontSize: "clamp(2.5rem, 7vw, 4.5rem)"
    fontWeight: 750
    lineHeight: 0.98
    letterSpacing: "-0.04em"
  headline:
    fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif"
    fontSize: "clamp(1.75rem, 4vw, 2.75rem)"
    fontWeight: 720
    lineHeight: 1.08
    letterSpacing: "-0.03em"
  body:
    fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.7
  label:
    fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif"
    fontSize: "0.78rem"
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: "0.04em"
rounded:
  sm: "0.375rem"
  md: "0.625rem"
  lg: "0.875rem"
spacing:
  xs: "0.375rem"
  sm: "0.75rem"
  md: "1rem"
  lg: "1.5rem"
  xl: "2.25rem"
components:
  button-primary:
    backgroundColor: "{colors.reasoning-indigo}"
    textColor: "{colors.field-note-cream}"
    rounded: "{rounded.sm}"
    padding: "0.65rem 1.2rem"
  note-freshness:
    backgroundColor: "{colors.reasoning-indigo-soft}"
    textColor: "{colors.ink-slate}"
    rounded: "{rounded.md}"
    padding: "1rem"
  newsletter-panel:
    backgroundColor: "{colors.ink-slate}"
    textColor: "{colors.field-note-cream}"
    rounded: "{rounded.lg}"
    padding: "2rem"
---

# Design System: Agentic Engineering Primer

## 1. Overview

**Interface North Star: "The Field Manual Desk"**

The interface should feel like a well-used engineering field manual on a clean desk: practical, calm, annotated, and built for repeated consultation.

It rejects hype surfaces and leaderboard theater. Visual choices should make information easier to scan, compare, and verify.

Key Characteristics:

- document-first, with enough craft to signal authority
- restrained color, used to classify meaning
- high readability for long-form technical guidance
- visible distinction between durable guidance and perishable reference
- simple components that never feel like a generic SaaS landing page

## 2. Colors

The palette is restrained: tinted paper neutrals, slate ink, one reasoning-indigo accent, and semantic evidence colors.

### Primary

- **Reasoning Indigo** (#4f46e5): primary accent for active links, focus, and rare calls to action.
- **Reasoning Indigo Soft** (#eef2ff): low-pressure background for guidance notes and reference framing.
- **Reasoning Indigo Deep** (#312e81): high-contrast accent text or deep UI accents.

### Neutral

- **Field Note Cream** (#fbfaf7): preferred light surface when the system needs warmth beyond Starlight defaults.
- **Ink Slate** (#1f2430): primary text and dark-panel background.
- **Tempered Slate** (#5f6675): secondary text and metadata.
- **Rule Slate** (#d9dce5): dividers, table rules, and quiet borders.

### Tertiary

- **Evidence Green** (#dcfce7 / #166534): use for supported or fresh states.
- **Caution Amber** (#fef3c7 / #92400e): use for expiring, volatile, or verify-live states.
- **Risk Red** (#fee2e2 / #991b1b): use for outdated, dangerous, or security-critical warnings.

### Named Rules

**The Meaning Before Decoration Rule.** Color must classify state, evidence, risk, or navigation. Do not add color just to make the page feel designed.

**The Perishable Edge Rule.** Fast-changing reference material gets visible semantic treatment. Core workflow pages stay calmer.

## 3. Typography

**Display Font:** system-ui with native platform fallbacks

**Body Font:** system-ui with native platform fallbacks

**Label/Mono Font:** inherit Starlight's code font for code only

**Character:** The system uses a single practical sans family. Authority comes from spacing, weight, and hierarchy rather than decorative font pairing.

### Hierarchy

- **Display** (750, fluid clamp, tight line-height): homepage title and rare top-level orientation headings.
- **Headline** (720, fluid clamp, compact line-height): major section headings and page titles.
- **Title** (650, 1.125rem to 1.35rem): component headings, callouts, and newsletter titles.
- **Body** (400, 1rem, 1.7 line-height): primary reading text, capped near 65 to 75 characters.
- **Label** (700, 0.78rem, slight tracking): metadata, freshness labels, and evidence markers.

### Named Rules

**The Manual, Not Poster Rule.** Type should help readers work. Avoid decorative display treatments unless they make hierarchy or scanning clearer.

## 4. Elevation

The system is mostly flat. Depth comes from tonal layering, borders, and spacing. Shadows should be rare and soft, used only for active overlays or focused interactive states.

### Shadow Vocabulary

- **Interactive Lift** (`box-shadow: 0 16px 40px rgba(31, 36, 48, 0.12)`): reserved for focused panels or future interactive previews.

### Named Rules

**The Flat-By-Default Rule.** Documentation surfaces rest flat. Use borders, tone, and hierarchy before reaching for shadow.

## 5. Components

### Buttons

- **Shape:** compact rectangle with modest radius (`0.375rem`).
- **Primary:** reasoning indigo background, field-note cream text, strong weight.
- **Hover / Focus:** use opacity or tonal shift plus a visible focus outline. Never remove keyboard focus.
- **Secondary / Ghost:** prefer text links unless a real action needs button affordance.

### Chips

- **Style:** small, semantic badges with tinted backgrounds and high-contrast text.
- **State:** green for fresh/supported, amber for volatile/verify, red for outdated/risk.

### Cards / Containers

- **Corner Style:** modest radius (`0.625rem` to `0.875rem`).
- **Background:** tinted neutral or semantic tint, not pure white or pure black.
- **Shadow Strategy:** flat by default.
- **Border:** one-pixel rule in Rule Slate or Starlight gray tokens.
- **Internal Padding:** use `1rem`, `1.5rem`, or `2rem` depending on density.

### Inputs / Fields

- **Style:** clear border, tinted dark or light surface, modest radius.
- **Focus:** two-pixel reasoning-indigo outline with enough contrast.
- **Error / Disabled:** semantic color plus text. Do not rely on color alone.

### Navigation

Navigation should feel like a map, not a menu dump. Labels should be action-oriented and grouped by reader intent.

Active states need clear contrast. Reference groups should feel secondary to workflow groups.

### Newsletter Panel

The email signup is a compact subscription panel, not a sales surface. Keep the copy plain, the spacing generous, and the action unambiguous.

## 6. Do's and Don'ts

### Do:

- **Do** keep long-form body text readable at 65 to 75 characters.
- **Do** use semantic color for evidence, freshness, risk, and verification states.
- **Do** keep workflow pages calmer than reference pages.
- **Do** make evidence caveats visible without turning every page into a warning box.
- **Do** use restrained borders and tonal backgrounds instead of nested cards.
- **Do** preserve keyboard focus and reduced-motion friendliness.

### Don't:

- **Don't** make the site feel like a SaaS hype page.
- **Don't** make it an AI-bro tool directory.
- **Don't** make it an academic whitepaper.
- **Don't** make it a vendor comparison spreadsheet.
- **Don't** let it collapse into a generic docs template.
- **Don't** chase leaderboard aesthetics or model-rank drama.
- **Don't** use metric-first landing-page patterns, gradient text, glassmorphism, colored side-stripe borders, or endless identical card grids.
- **Don't** use color without semantic purpose.
