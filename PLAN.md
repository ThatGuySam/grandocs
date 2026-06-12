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

## Phases

- [ ] **1. Starlight scaffold** — replace Next.js with Astro + Starlight; Pagefind search out of the box → [docs/plan/01-starlight-site.md](docs/plan/01-starlight-site.md)
- [ ] **2. Content pipeline** — ToC-driven crawler of `help.malighting.com`, real HTML→markdown conversion, weekly resync GitHub Action with delta commits → [docs/plan/02-content-pipeline.md](docs/plan/02-content-pipeline.md)
- [ ] **3. Agentic discovery** — llms.txt / llms-full.txt / llms-small.txt, `.md` twin for every page, robots.txt + sitemap, copy-as-markdown / open-in-LLM buttons → [docs/plan/03-agentic-discovery.md](docs/plan/03-agentic-discovery.md)
- [ ] **4. MCP server** — near-static: thin stateless Cloudflare Worker over a build-emitted search index; local stdio variant for air-gapped lighting networks → [docs/plan/04-mcp-server.md](docs/plan/04-mcp-server.md)
- [ ] **5. Skills** — `skills/` directory, 6 core grandMA skills, published via `npx skills add ThatGuySam/grandocs` (auto-listed on skills.sh) → [docs/plan/05-skills.md](docs/plan/05-skills.md)
- [ ] **6. Polish** — version switcher, redirects from old URLs, landing page, feedback widget, OG images.

Order matters only for 1 → 2 (site before content fills it). 3–5 are parallelizable once 2 produces clean markdown.

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
