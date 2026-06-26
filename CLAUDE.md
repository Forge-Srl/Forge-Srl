# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev-mode    # local dev server with live reload
npm run generate    # one-shot static build → ./_site/
npm run lint        # Biome check + auto-fix
```

## Architecture

This is an [Eleventy (11ty)](https://www.11ty.dev/) static site for [forge.srl](https://forge.srl).

**Pages** are `.11ty.js` files at the root (e.g. `index.11ty.js`, `servizi.11ty.js`). Each exports a class with:
- `data()` — returns Eleventy front-matter (layout, page title/description, navigation key)
- `render(data)` — returns the full HTML string for the page body

**Layout** (`_includes/layout.11ty.js`) wraps every page with the `<html>` shell, `<head>` meta tags, GTM, lazy CSS loading, and pulls in `header.js` / `footer.js` components.

**Components** (`_includes/components/`) are plain JS modules that export functions returning HTML strings. They are `require()`'d by layout and pages.

**Global data** (`_data/forge.js`) exposes site-wide constants (domain, contacts, social links, VAT). Available as `data.forge` in all templates. `_data/form.js` handles the contact form data.

**Assets** (`assets/css/`, `assets/js/`) are passed through as-is during build, then post-processed: CSS is minified with `csso`, JS with `terser` (with source maps). Images are processed via `@11ty/eleventy-img` (converted to WebP, SVGs preserved) through the `image` filter.

**Eleventy config** (`.eleventy.js`) registers plugins (navigation, sitemap), the `image` async filter, HTML/CSS/JS minification transforms, and a `beforeWatch` hook that clears the `require` cache so component changes reload correctly in dev mode.

**Deployment** — CI (`/.github/workflows/`) builds on push to `main` and deploys `_site/` to GitHub Pages with CNAME `forge.srl`. A separate workflow deploys Firebase Cloud Functions from `serverless/`.

## Linting / Code style

Biome enforces formatting and linting (see `biome.json`). Key style rules:
- Single quotes, no semicolons, trailing commas, 2-space indent, 120-char line width
- `noDefaultExport` is enforced — use named exports
- Filenames must be kebab-case (or match the export name)
