# Phase 3 — Agentic Discovery (llms.txt, .md twins, robots, buttons)

Make every page consumable by agents three ways — llms.txt family, raw-markdown twin URLs, and in-page actions — without hurting Lighthouse/SEO.

## llms.txt family

- Plugin: [`starlight-llms-txt`](https://github.com/delucis/starlight-llms-txt) (by a Starlight maintainer) → emits `/llms.txt`, `/llms-full.txt`, `/llms-small.txt` at build.
- Stripe-style **instructions preamble** in llms.txt (via plugin `details`/config): tell agents the `.md` suffix convention, the MCP endpoint, version semantics ("default to grandMA3 {latest}; the user's console version wins"), and citation expectation (link canonical page).
- Scope control: llms-full.txt = latest versions only (full corpus would be enormous with all MA3 versions + legacy); exclude `/legacy/` and old versions via plugin `exclude`.
- Eyes open: Astro removed its llms.txt (May 2026; ~44 s build cost, little measured traffic). Counter-practice (Carey): keep it, keep it cheap, make it discoverable in-page, and measure agent fetches in server logs instead of pageviews. Our corpus ≪ Astro's; cost is acceptable.

## Raw markdown twin per page

- Build-time static endpoint `src/pages/[...slug].md.ts`: `getStaticPaths` over the docs collection, return `entry.body` (plus a small generated header: title, canonical URL, version note) as `text/markdown; charset=utf-8`.
- URL convention: append `.md` to any docs URL — exact Stripe parity (`docs.stripe.com/...page.md`). With trailing-slash `always`, also emit `/path/index.md` so both guesses work.
- Discovery: `<link rel="alternate" type="text/markdown" href="…/page.md">` in head (Starlight `head` config/route middleware), and a `Link` response header via hosting config for the HTML routes.

## Page actions (humans + agents meet)

- [`Starlight Page Actions`](https://starlight-page-actions.dlcastillop.com/) plugin: Copy as Markdown / View as Markdown / Open in ChatGPT, Claude, Perplexity, Cursor… One dropdown, matches the Vercel/Mintlify pattern. (Simpler fallback if it fights our theme: [`starlight-copy-button`](https://github.com/dionysuzx/starlight-copy-button).)
- Wire "View as Markdown" to the `.md` twin URLs so there's one source of truth.

## robots.txt (Lighthouse-clean, AI-friendly)

```
# grandocs — unofficial mirror of MA Lighting documentation
# Agents: see /llms.txt and /building-with-ai/ for markdown + MCP access

User-agent: *
Allow: /

Sitemap: https://{domain}/sitemap-index.xml
```

- Explicitly **no** `Disallow` lines that could shadow `/llms.txt` or `*.md` routes; comments are legal and double as agent hints.
- If individual AI crawlers ever need different rules, add named `User-agent` groups (GPTBot, ClaudeBot, Claude-User, PerplexityBot, Google-Extended) — default stance: all allowed; that's the point of the site.
- Lighthouse "robots.txt is valid" audit: valid directives only, served 200, `text/plain` — static file in `public/`.

## Sitemap & SEO

- `@astrojs/sitemap` (Starlight wires it when `site` is set) → `sitemap-index.xml`; canonical URLs on every page; old-version pages get `<meta name="robots" content="noindex">`? **No** — keep indexable but canonical→ latest version of same topic where it exists (Stripe pattern), to avoid duplicate-content dilution while keeping old versions reachable.
- JSON-LD: `BreadcrumbList` + `TechArticle` per page (head config); OG title/description from frontmatter; generated OG images later (satori) — nice-to-have.

## "Building with AI" page (`/building-with-ai/`)

- One page documenting: llms.txt URLs, `.md` suffix trick, MCP endpoint + client config snippets (Claude Code, Cursor, ChatGPT), `npx skills add ThatGuySam/grandocs`, politeness/attribution notes, and that this is an unofficial mirror with canonical links to malighting.com. Mirrors `docs.stripe.com/building-with-llms`.

## Verification

- `curl` matrix in CI smoke test: `/llms.txt`, `/llms-full.txt`, a `.md` twin, robots, sitemap → all 200 with right content-type.
- Lighthouse SEO category 100 on a sample page (valid robots, canonical, meta description present).
- Paste a `.md` URL into Claude/ChatGPT and confirm clean render (manual, once).
