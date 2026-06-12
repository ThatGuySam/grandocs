# Research: Rebuilding grandocs as an agent-native Starlight docs mirror

## SBC4

- `Tease:` The old pipeline can never run again — its source site is dead.
- `Lede:` Research for the grandocs rebuild confirms: help2.malighting.com is offline (this repo holds the only surviving legacy archive), the new help.malighting.com is cleanly crawlable, every Starlight plugin the rebuild needs exists, skills.sh publishing is zero-friction, and nobody anywhere has shipped a grandMA docs MCP or skill yet.
- `Why it matters:`
  - Every phase of [PLAN.md](../../PLAN.md) rests on a claim verified here, with sources.
  - First-mover window: the only existing MA MCP servers do console *control*, not docs search.
- `Go deeper:`
  - Findings by question below; full link list at the bottom.
  - Detail plans: [docs/plan/](../plan/).

**Date:** 2026-06-12
**Scope:** (1) current state of this repo, (2) official MA help site structure for full re-scraping, (3) existing grandMA agent tooling, (4) Starlight plugins for search/versions/llms.txt/copy-buttons, (5) per-page markdown + llms.txt practice, (6) static-ish MCP hosting, (7) skills.sh publishing mechanics.

## Short answer

Rebuild on Astro Starlight (search included), crawl `help.malighting.com` from its inline-HTML ToC trees, convert via rehype→remark, resync weekly with a plain GitHub Action, emit llms.txt + per-page `.md` twins + a MiniSearch JSON index, serve MCP from a stateless Cloudflare Worker over that index, and ship 6 skills from a `skills/` dir installable with `npx skills add ThatGuySam/grandocs`. Nothing here requires inventing anything — every piece has a verified, maintained counterpart.

## What the local workspace says (inspected first)

- Pipeline: `githubocto/flat` action (daily cron) + Deno postprocess → ran 2022-03 to **2025-07-01**, then silence. Targets `help2.malighting.com`, which now answers nothing. Flat itself is archived upstream.
- URL discovery was a Google Custom Search API loop (`fetch-urls-from-google.mjs`, query literally `q: 'en'`) → 604 URLs collected incidentally; full manuals run to thousands of topics.
- "Markdown" files (`src/docs/**/index.md`, 527 local / ~570 on origin) are **raw HTML innerHTML in frontmatter wrappers** — version-picker `<form>`s, prev/next buttons, inline jQuery included. Conversion to markdown never happened.
- Rendering: Next.js 12 `[...slug].js` → `dangerouslySetInnerHTML`, page `<h1>` is the `originalUrl`, site metadata still "Nextjs Starter". No search of any kind.
- Scraper has path bugs (`grandMA2/basic_fixture/de/www.ma-dot2.com/en/software-download/`).
- 2024-09 commit adds `repopack-ma2.config.json` → `grandma2.context.xml`: an early attempt at LLM context bundling. The rebuild's llms-full.txt supersedes it.
- **Irreplaceable asset**: scraped help2 content spans MA2 3.4–3.9, dot2 1.1–1.5, languages en/de/es/pt/sv — content no longer published anywhere. Preserved on `archive/pre-starlight-2026-06-12`.

## Findings by question

### 1. Official help site (scrape target)

- `malighting.com/training-support/online-manuals/` lists the full matrix; it states help2 is offline and redirects exist. Confirmed patterns:
  - grandMA3: `help.malighting.com/grandMA3/{ver}/HTML/{topic}.html` — 2.0/2.1/2.2/2.3/2.4 seen live; 1.x presence unverified (probe).
  - grandMA2 `…/grandMA2/{lang}/help/…`, dot2 `…/dot2/{lang}/help/…`, utility + network similar — latest-only, `en` confirmed.
  - Per-device Quick Manuals (consoles, PUs, nodes, DIN-rail, wings, rack units, viz-key, I/O, DMX-key) are separate roots under the same version path.
- Topic pages: breadcrumb + "Version 2.4" badge + "Subtopics" anchor lists; ToC is **inline HTML**, no JS/JSON nav payload → BFS crawl from each manual root enumerates everything. `robots.txt` 404s; no sitemap found → politeness self-imposed, ToC is the enumeration source.

### 2. Existing grandMA agent tooling (gap check)

- MCP servers exist for **console control only**: Pahegi/MA3-MCP-Server (Lua file-bridge, experimental) and thisis-romar/ma2-onPC-MCP (telnet command bridge). No docs-search MCP anywhere.
- No grandMA skill on skills.sh or GitHub (searched; zero hits).
- Community doc efforts are Lua-API-focused: MacTirney/GrandMA3-API-Documentation, hossimo/GMA3Plugins, patopesto/GrandMA3-Plugins (+ bitfocus Companion module). Good references for the `grandma3-lua-api` skill; none mirror the manuals.

### 3. Starlight building blocks

- Search: Pagefind ships with Starlight by default — phase 1 gets search "for free".
- Versions: `starlight-versions` plugin exists but is early-dev and built around archiving *authored* docs at release time — poor fit for a scraped mirror whose versions arrive from upstream. Path-segment dirs + custom switcher recommended instead.
- llms.txt: `delucis/starlight-llms-txt` (Starlight maintainer) emits `llms.txt` + `llms-full.txt` + `llms-small.txt` with exclude/customization options.
- Copy/LLM buttons: `starlight-copy-button` (single copy button) and Starlight Page Actions (copy/view markdown + open-in-ChatGPT/Claude/Cursor dropdown). The awesome-starlight list tracks more.

### 4. Per-page markdown + llms.txt practice

- Stripe is the reference implementation: append `.md` to any docs URL for plain markdown; `/llms.txt` includes an *instructions section* telling agents how to behave (Apideck analysis calls this out as the notable move). Claude Code plugin + MCP complete their stack.
- Astro pattern for the same: build-time static endpoint (`[...slug].md.ts`) returning `entry.body` — pre-rendered to static files, CDN-served; optional Accept-header content negotiation via edge middleware (LaRocque writeup).
- Counter-signal: **Astro deleted its llms.txt (2026-05)** citing ~44 s build cost and little measured traffic, leaning on their MCP server instead. Carey's rebuttal: agent fetches don't look like pageviews, MCP excludes casual/zero-config clients, both can coexist cheaply with in-page discovery (`<link rel="alternate" type="text/markdown">`). Conclusion for grandocs: ship llms.txt lean + discoverable, don't treat it as the whole strategy.

### 5. MCP hosting ("static MCP" reality)

- Streamable HTTP MCP requires answering POSTs → cannot be purely static files. Nearest pattern, and what Cloudflare's own docs MCP demonstrates: stateless edge worker + prebuilt index (theirs uses Vectorize; ours can start with MiniSearch over build-emitted JSON).
- Cloudflare authless remote MCP template: `npm create cloudflare@latest -- … --template=cloudflare/ai/demos/remote-mcp-authless`; deploys to `*.workers.dev/mcp`.
- Verified dead end: Pagefind's search cannot be invoked server-side (maintainer: "not the goal of the project", discussion #175); its Node API only *builds* indexes. Hence the separate JSON index for MCP.
- Local/offline variant matters for this domain: show networks are routinely air-gapped; a stdio npm package with a bundled index serves consoles-without-internet use cases.

### 6. skills.sh publishing

- Format: directory + `SKILL.md` (frontmatter `name`, `description`, body instructions; optional `references/`, `scripts/`). `npx skills init` scaffolds.
- Publishing is implicit: public GitHub repo → `npx skills add owner/repo` → listed on skills.sh automatically as installs happen. Leaderboard = installs + 8-week activity. Multi-skill repos supported (picker).

## What works (adopt)

- ToC-driven BFS crawl + content-hash manifest → idempotent weekly delta commits.
- rehype-parse → rehype-remark → remark-stringify with GFM tables; inline-HTML fallback for colspan-heavy tables.
- `.md` twin URLs + llms.txt family + Page Actions buttons (one source of truth: the twin).
- Stateless Worker MCP over static MiniSearch index; stdio variant for offline.
- Skills co-located in this repo; descriptions written for auto-trigger quality.

## What to avoid

- Reusing the Flat action (archived), the Google CSE discovery hack, or Deno-flavored scripts.
- `starlight-versions` for scraped content (workflow mismatch).
- Counting on Pagefind for MCP-side search (#175).
- llms-full.txt over the *entire* multi-version + legacy corpus (size blowup; Astro's lesson).
- Daily crons and JSON-blob commit messages (the old repo's noise).

## Recommendation

Execute [PLAN.md](../../PLAN.md) phases in order; 1–2 are the unlock (everything agent-facing consumes phase 2's clean markdown + manifests). Re-verify the MA3 1.x version probe and language matrix during phase 2 — they're the only material unknowns left.

## Source links

**Local:** `package.json`, `.github/workflows/flat.yml`, `scripts/flat-postprocessing.mjs`, `src/utils/download-site.mjs`, `src/utils/fetch-urls-from-google.mjs`, `src/pages/[...slug].js`, `public/docs-urls.json`, `repopack-ma2.config.json`, git history (2022-03-17 → 2025-07-01).

**MA Lighting (all fetched 2026-06-12):**
- https://www.malighting.com/training-support/online-manuals/ — full manual matrix; help2-offline notice
- https://help.malighting.com/grandMA3/2.4/HTML/help.html — inline-HTML ToC structure
- https://help.malighting.com/grandMA3/2.4/HTML/troubleshooting.html — topic page anatomy (breadcrumb, version badge, subtopics)
- https://help.malighting.com/robots.txt — 404 (no crawl rules, no sitemap)

**grandMA agent ecosystem:**
- https://github.com/Pahegi/MA3-MCP-Server — MA3 control MCP (experimental)
- https://github.com/thisis-romar/ma2-onPC-MCP — MA2 telnet control MCP
- https://github.com/MacTirney/GrandMA3-API-Documentation — community Lua API docs
- https://github.com/hossimo/GMA3Plugins — unofficial Lua docs + plugins
- https://github.com/patopesto/GrandMA3-Plugins — plugins, docs (grandma3.bambinito.net)
- https://github.com/bitfocus/companion-module-malighting-grandma3 — Companion integration

**Starlight:**
- https://starlight.astro.build/resources/plugins/ — official plugin directory
- https://starlight-versions.vercel.app/ — versions plugin (early dev caveat on its own docs)
- https://github.com/delucis/starlight-llms-txt — llms.txt/llms-full.txt/llms-small.txt
- https://github.com/dionysuzx/starlight-copy-button — copy page as markdown
- https://starlight-page-actions.dlcastillop.com/ — copy/view/open-in-LLM dropdown
- https://github.com/trueberryless-org/awesome-starlight — plugin tracking list

**llms.txt / markdown-for-agents practice:**
- https://docs.stripe.com/building-with-llms — `.md` suffix convention, llms.txt
- https://www.apideck.com/blog/stripe-llms-txt-instructions-section — analysis of Stripe's instructions preamble
- https://dacharycarey.com/2026/05/04/astro-removed-llms-txt/ — Astro's removal + keep-both rebuttal (2026-05-04)
- https://www.larocque.dev/projects/content-negotiation-project-pages/ — Astro build-time `.md` endpoints + content negotiation

**MCP hosting:**
- https://developers.cloudflare.com/agents/guides/remote-mcp-server/ — authless Worker template
- https://developers.cloudflare.com/agents/model-context-protocol/mcp-servers-for-cloudflare/ — CF's own docs-search MCP (Vectorize-backed)
- https://github.com/Pagefind/pagefind/discussions/175 — server-side search out of scope
- https://pagefind.app/docs/node-api/ — Node API = indexing only

**Skills:**
- https://github.com/vercel-labs/skills — `npx skills` CLI
- https://vercel.com/kb/guide/agent-skills-creating-installing-and-sharing-reusable-agent-context — format + implicit publishing
- https://vercel.com/changelog/introducing-skills-the-open-agent-skills-ecosystem — launch announcement
- https://skills.sh — leaderboard mechanics (installs, 8W activity)
- https://github.com/anthropics/skills — SKILL.md format reference
