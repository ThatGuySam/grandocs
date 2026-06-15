# grandocs

**An unofficial, agent-native mirror of MA Lighting's documentation** — grandMA3,
grandMA2, and dot2 — rebuilt as clean, searchable markdown for humans and AI agents.

> Live (workers.dev): <https://grandocs.samcarlton.workers.dev> ·
> MCP: <https://grandocs-mcp.samcarlton.workers.dev/mcp> ·
> Skills: `npx skills add ThatGuySam/grandocs`

Documentation content belongs to [MA Lighting International GmbH](https://www.malighting.com/).
This is a fan-maintained mirror; every page links its canonical source. For
authoritative or safety-relevant information, always consult the
[official help](https://help.malighting.com/).

## Why

The previous MA help platform (`help2.malighting.com`) went offline and the old
scraper (a daily GitHub "Flat Data" job over a Google-indexed URL list) died with
it. grandocs rebuilds the mirror from the current official help site with:

- **Full coverage** crawled from the official table-of-contents trees, not a search index.
- **Real markdown** (not HTML-in-frontmatter), formatted for reading.
- **Search** (Pagefind) across every page.
- **Versioning** — grandMA3 docs by software version with a page-level switcher.
- **Agent-first delivery** — llms.txt, per-page `.md` twins, an MCP server, and skills.

## For AI agents

| Surface | URL |
| --- | --- |
| llms.txt (index + instructions) | `/llms.txt`, `/llms-full.txt`, `/llms-small.txt` |
| Raw markdown of any page | append `.md` to the URL (e.g. `/grandma3/2-4/keyword_store.md`) |
| MCP server | `https://grandocs-mcp.samcarlton.workers.dev/mcp` |
| Skills | `npx skills add ThatGuySam/grandocs` |

MCP tools: `search_docs`, `get_page`, `command_lookup`, `list_products_versions`.
Skills: `grandma3-docs`, `grandma2-dot2-docs`, `grandma-command-syntax`,
`grandma3-lua-api`, `grandma-macro-writer`, `grandma-troubleshooting`.

```bash
# Claude Code
claude mcp add --transport http grandocs https://grandocs-mcp.samcarlton.workers.dev/mcp
```

## How it works

```
scripts/crawl.ts            ToC-driven crawler -> src/content/docs/<product>[/<ver>]/<slug>.md
                            (+ data/manifest/*.json for idempotent delta syncs)
scripts/build-search-index  -> public/agent/search-index.json (MiniSearch, read by the MCP worker)
scripts/build-version-manifest -> src/data/grandma3-versions.json (powers the version switcher)
astro build (Starlight)     -> dist/  (HTML + .md twins + llms*.txt + Pagefind index)
mcp/                        stateless Cloudflare Worker MCP server over the search index
skills/                     six installable agent skills
```

### Develop

```bash
pnpm install
pnpm dev                    # local dev server
pnpm build                  # version manifest + search index + static site
```

### Re-sync docs

```bash
pnpm crawl                  # default set (grandMA3 latest + grandMA2/dot2/utility/network)
node scripts/crawl.ts grandma3:2.3   # a specific source
```

The [`Sync MA docs`](.github/workflows/sync-docs.yml) workflow runs this weekly and
commits deltas; [`version-probe`](.github/workflows/version-probe.yml) opens an issue
when MA ships a new grandMA3 version.

### Deploy

Static output deploys as Cloudflare Workers assets:

```bash
scripts/deploy-snapshot.sh prod      # grandocs.samcarlton.workers.dev
scripts/deploy-snapshot.sh 6         # a frozen per-phase snapshot
```

## Project layout

- [`PLAN.md`](PLAN.md) — the rebuild roadmap.
- [`docs/plan/`](docs/plan/) — per-phase detail.
- [`docs/research/`](docs/research/) — sourced research memo.
- Branch `archive/pre-starlight-2026-06-12` — the frozen pre-rebuild state (the only
  surviving copy of some legacy multi-version grandMA2/dot2 content).

## License & attribution

Project code: ISC. Documentation content © MA Lighting International GmbH, mirrored
unofficially with attribution and canonical links. Not affiliated with or endorsed
by MA Lighting.
