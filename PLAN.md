# grandocs — Rebuild Plan

**Goal:** the agent-native, searchable mirror of all MA Lighting docs (grandMA3, grandMA2, dot2, utilities, network) in clean markdown, with Stripe/Vercel-grade docs UX — plus an MCP server and published agent skills.

Detail docs live in [docs/plan/](docs/plan/). Research with sources: [docs/research/grandma-docs-rebuild-2026-06-12.md](docs/research/grandma-docs-rebuild-2026-06-12.md).

## Why rebuild (state as of 2026-06-12)

- **The scrape source is gone.** `help2.malighting.com` is offline; everything moved to `help.malighting.com` with a new URL scheme. The Flat Data pipeline made its last commit 2025-07-01 and can never run again as-is.
- The "markdown" files are raw HTML wrapped in frontmatter — version-picker forms, prev/next buttons, inline jQuery and all.
- Coverage came from a Google Custom Search hack: ~600 incidental URLs out of thousands of topics, random languages/versions.
- The site is a stock Next.js 12 boilerplate: no search, `originalUrl` as page title, `dangerouslySetInnerHTML` rendering, "Nextjs Starter" metadata.
- Silver lining: this repo now holds the **only surviving copy** of legacy help2 content (multi-version MA2 3.5–3.9, dot2 1.1–1.5, multiple languages).

## Branches

- `archive/pre-starlight-2026-06-12` — frozen at the last Flat commit (`d33d0ed`). Reference + legacy-content vault. Don't touch.
- `starlight-rebuild` — this plan and all rebuild work.
- `master` — fast-forwarded to origin (was 276 commits behind locally).

## Phases — all shipped (2026-06-15)

- [x] **1. Starlight scaffold** — Astro 6 + Starlight, Pagefind search, amber dark theme → [docs/plan/01-starlight-site.md](docs/plan/01-starlight-site.md)
- [x] **2. Content pipeline** — ToC crawler of `help.malighting.com`, rehype→remark conversion, 4,242 pages (grandMA3 2.4 + 2.3, grandMA2, dot2, utility, network), weekly sync Action + version probe → [docs/plan/02-content-pipeline.md](docs/plan/02-content-pipeline.md)
- [x] **3. Agentic discovery** — llms.txt/full/small, `.md` twin per page, robots.txt + sitemap, copy/open-in-LLM buttons → [docs/plan/03-agentic-discovery.md](docs/plan/03-agentic-discovery.md)
- [x] **4. MCP server** — stateless Cloudflare Worker over a MiniSearch index (service-binding to the site), live → [docs/plan/04-mcp-server.md](docs/plan/04-mcp-server.md)
- [x] **5. Skills** — `skills/` with 6 grandMA skills; installable via `npx skills add ThatGuySam/grandocs` **once merged to master** → [docs/plan/05-skills.md](docs/plan/05-skills.md)
- [x] **6. Polish** — grandMA3 version switcher + old-version banner, legacy redirects, README, production deploy.

### Live URLs (workers.dev; custom domains pending token perms — see below)

- Production site: <https://grandocs.samcarlton.workers.dev>
- MCP: <https://grandocs-mcp.samcarlton.workers.dev/mcp>
- Per-phase snapshots: `grandocs-phase-{1..6}.samcarlton.workers.dev` (+ `grandocs-phase-4-mcp`)

### Known follow-ups

- **Custom domains** (`grandocs.samcarlton.com`, `grandocs-phase-N…`): blocked — the only DNS+Routes-capable Cloudflare token is IP-allowlisted and this machine's egress IP isn't on it. Set `ATTACH_DOMAIN=1` with a capable, non-IP-locked token to attach. Worker deploys themselves work via the vumbnail-white token.
- **Skills install** needs the rebuild on `master` (the CLI clones the default branch). Clean fast-forward; archive branch preserves the old state.
- **More grandMA3 versions** (2.0–2.2) via `node scripts/crawl.ts grandma3:2.2` etc. Watch the ~20k-file Workers asset cap (currently ~16.3k with two versions).
- Lua command-fence warnings (`language "|"`), sidebar DOM weight on huge pages — cosmetic/perf, deferred.

## Feature list

**Search & navigation**
- Full-text search (Pagefind, ships with Starlight; current-version pages indexed, old versions excluded by default)
- Cmd+K search modal, keyboard navigation (Starlight built-in)
- Sidebar per product family, auto-generated from the scraped ToC order
- Breadcrumbs + prev/next links
- Version switcher on grandMA3 pages (path-based, Stripe-style), "you're viewing an old version" banner

**Content**
- Real markdown (rehype→remark conversion), tables and MA command-syntax notation preserved
- Full coverage: every topic crawled from the official ToC tree, not Google's index
- All grandMA3 versions (2.0–2.4 confirmed live; probe 1.x), MA2/dot2/utility/network latest
- `/legacy/` section serving the irreplaceable help2 archive
- Images downloaded and self-hosted, optimized via astro:assets

**Agent-facing**
- llms.txt with Stripe-style instructions preamble + llms-full.txt + llms-small.txt
- Append `.md` to any page URL → raw markdown (Stripe parity)
- `<link rel="alternate" type="text/markdown">` in-page discovery
- Copy-page-as-markdown + open-in-ChatGPT/Claude buttons (Starlight Page Actions)
- Remote MCP server (`search_docs`, `get_page`, `command_lookup`, `list_versions`)
- Published skill set on skills.sh (first grandMA skills anywhere — verified gap)
- "Building with AI" docs page tying it all together

**Infrastructure & SEO**
- Weekly scrape-and-resync GitHub Action (replaces dead Flat Data action), manual dispatch per product/version
- New-version detection → auto-opened GitHub issue
- Valid robots.txt (AI crawlers explicitly allowed, sitemap declared, Lighthouse-clean)
- Sitemap, canonical URLs, JSON-LD breadcrumbs, OG tags
- Redirects from the old `/{Product}/{Topic}/{lang}/{version}` URLs
- Lighthouse ~100 (static output, optimized images/fonts)

## Defaults chosen (flag if you disagree)

- **Versions as path segments + small custom switcher**, not the `starlight-versions` plugin — the plugin's "archive current docs" workflow fits authored docs, not a scraped mirror.
- **MCP on Cloudflare Workers** (authless remote template), site hosting stays put (Netlify config exists; static output runs anywhere). Vercel both-on-one-platform is the documented alternative.
- **Weekly cron, not daily** — MA ships a handful of releases per year; deltas are rare.
- **Skills live in this repo** (`skills/`) rather than a separate repo — one install command, one star target.
- **Keep llms.txt lean** — Astro dropped theirs (May 2026) over cost/low-hits; counter-practice is keep-both-but-cheap with in-page discovery.

## Open questions

- Do grandMA3 1.x docs exist on the new domain? (Probe `help.malighting.com/grandMA3/1.9/HTML/help.html` etc.)
- Which languages besides `en` exist on the new platform? (Path scheme allows them for MA2/dot2.)
- Custom domain situation — site currently Netlify; pick final domain before MCP/skills hardcode URLs.
- MA Lighting's stance on mirrors — content is theirs; keep attribution + canonical links prominent, be ready to add `noindex` if asked.

## Next session quick start

1. Read [docs/plan/01-starlight-site.md](docs/plan/01-starlight-site.md), scaffold Starlight, delete Next.js remnants.
2. Then [docs/plan/02-content-pipeline.md](docs/plan/02-content-pipeline.md) — crawler first, Action second.
3. Verify with `npm run build` + Pagefind index sanity check before phases 3–5.
