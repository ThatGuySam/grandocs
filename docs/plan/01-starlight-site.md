# Phase 1 — Starlight Site

Replace the Next.js 12 boilerplate with Astro + Starlight. Static output, search included, docs-first theming.

## Scaffold

- Nuke-and-pave in place on `starlight-rebuild` (the archive branch preserves everything):
  - Remove: `src/pages/`, `src/layout/`, `src/templates/`, `src/styles/`, `next.config.js`, `next-env.d.ts`, `postcss.config.js`, `tailwind.config.js`, `.eslintrc`/`.eslintignore`, `jsconfig.json`, husky/lint-staged config, `package-lock.json`, `data.json`, `grandma2.context.xml`, repopack configs, `static/`.
  - Keep: `.github/` (workflow gets rewritten in phase 2), `public/` favicons, `LICENSE`, scraped `src/docs/` (until phase 2 re-crawls, then delete).
- `npm create astro@latest -- --template starlight` into a temp dir, merge config into repo root. Pin `astro@^5` and latest `@astrojs/starlight` at implementation time.
- Replace the stock boilerplate `README.md` (it's still the Next.js starter readme) with a real grandocs readme: what it is, install commands for skills/MCP, attribution to MA Lighting, link to PLAN.md.

## Content structure

```
src/content/docs/
  index.mdx                  # landing page (splash template, product cards)
  grandma3/
    2-4/...                  # one dir per upstream version (dots → dashes in slugs)
    2-3/...
  grandma2/...               # latest only (upstream has no version dimension anymore)
  dot2/...
  utility/...
  network/...
  legacy/...                 # converted help2 archive (multi-version MA2/dot2, multi-lang)
  building-with-ai.md        # llms.txt / .md / MCP / skills documentation
```

- Frontmatter per page (written by the pipeline): `title`, `description`, plus custom schema fields `product`, `version`, `lang`, `sourceUrl`, `scrapedAt`. Extend Starlight's schema in `src/content.config.ts` with `docsSchema({ extend: ... })`.

## Sidebar

- One top-level group per product. Within grandMA3, only the **latest** version appears in the sidebar tree; other versions reachable via the version switcher.
- The crawler emits `src/data/sidebar-{product}-{version}.json` preserving the official ToC order; `astro.config.mjs` imports and maps these into Starlight `sidebar` config. Don't hand-maintain ~1000 entries.

## Search

- Pagefind ships with Starlight — zero config for basics.
- Exclude non-current versions and `/legacy/` from the index via `pagefind: false` frontmatter (pipeline sets it for non-latest versions). Revisit later with Pagefind filters (product/version facets) if cross-version search is wanted.
- Quality check: index size after full crawl; if the MA3 manual alone makes builds slow, scope Pagefind to one version and rely on the version switcher.

## Version switcher (grandMA3)

- Custom component overriding a Starlight slot (e.g. `PageTitle` or `Sidebar` top): a `<select>` listing versions from a build-time manifest; navigates to the same topic slug under the other version, falling back to that version's root when the topic doesn't exist (manifest knows).
- Old-version pages get a banner ("You're viewing 2.2 docs — switch to 2.4") via shared component — same pattern Stripe/Vercel use for API versions.
- Decision recorded: `starlight-versions` plugin evaluated and rejected — it archives *authored* docs on release; our versions arrive pre-existing from upstream. Path-based dirs + switcher is simpler and matches the scraper's output shape.

## i18n

- Phase 1 ships `en` only as root locale.
- Starlight's built-in i18n maps cleanly to `/{lang}/` content dirs if/when non-en content is crawled (legacy archive already has es/de/sv/pt pages — keep them under `/legacy/{lang}/...` rather than full i18n to start).

## Theming

- Dark-first default (lighting consoles live in dark venues), MA-ish amber/yellow accent via Starlight CSS custom properties; keep both themes available.
- Landing page: splash hero + card grid per product family + "Building with AI" card.
- Custom favicon/OG branding to finally replace the Next.js starter banner assets.

## URLs & redirects

- New canonical: `/{product}/{version?}/{slug}/` (lowercase, hyphenated).
- Old site URLs (`/{Product}/{Topic}/{lang}/{version}`) get redirects — Netlify `_redirects` (or `astro.config` redirects) generated from the old `public/docs-urls.json` mapping. Keeps 4 years of inbound links alive.
- Trailing-slash policy: pick `always` (Starlight default) and make the `.md` twin routes follow it (`/path/index.md` alias or `/path.md` — see phase 3).

## Hosting

- Output is fully static (`astro build` → `dist/`); `netlify.toml` updated (`publish = "dist"`, `command = "npm run build"`). Staying on Netlify is the no-op default; moving to Vercel or Cloudflare Pages is trivial later and mostly matters for where the MCP worker lives (phase 4).

## Quality gates

- `npm run build` green with full content; Lighthouse (mobile) ≥ 95 on a content page: static HTML, self-hosted images via `astro:assets`, `font-display: swap`, no layout shift from the version banner.
- Spot-check 10 gnarly pages (command syntax tables, images, release notes) against the official site for fidelity.
