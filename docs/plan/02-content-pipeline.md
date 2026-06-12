# Phase 2 — Content Pipeline (crawl → markdown → resync)

Replace the dead Flat Data + Google CSE pipeline with a ToC-driven crawler of the current official help platform, real HTML→markdown conversion, and a scheduled GitHub Action that commits deltas.

## Sources (verified 2026-06-12)

| Product | URL pattern | Versions | Languages |
|---|---|---|---|
| grandMA3 | `help.malighting.com/grandMA3/{ver}/HTML/{topic}.html` | 2.0–2.4 confirmed live; **probe 1.0–1.9** | en only observed (no lang segment) |
| grandMA2 | `help.malighting.com/grandMA2/{lang}/help/{manual}/…` | latest only | en confirmed; probe de/es/fr/pt/sv/ja/zh |
| dot2 | `help.malighting.com/dot2/{lang}/help/…` | latest only | en confirmed; probe others |
| Utilities | `help.malighting.com/utility/en/help/…` | latest | en |
| Network | `help.malighting.com/network/en/help/` | latest | en |

- Manual index listing every entry point: `malighting.com/training-support/online-manuals/` (includes per-device Quick Manuals: consoles, processing units, nodes, DIN-rail, command wings, fader wings, rack units, viz-key, I/O nodes, DMX-key — each is its own root `.html` under the same version path).
- **`help2.malighting.com` is offline.** The old `/Page/{Product}/{Topic}/{lang}/{ver}` content survives only in this repo (`archive/pre-starlight-2026-06-12`). Phase 2 also includes a one-off `legacy-convert` script that runs the same HTML→MD converter over the archived `src/docs/**/index.md` bodies into `src/content/docs/legacy/`.
- `help.malighting.com/robots.txt` is 404 → no crawl rules published; politeness is on us. No sitemap found; the per-manual ToC tree (inline HTML anchor lists, breadcrumb + "Subtopics" sections) is the enumeration source.

## Crawler (`scripts/crawl.ts`, plain Node + TS — drop Deno)

- BFS from each manual root: parse subtopic/ToC anchors, stay within `{product}/{ver}` path prefix, dedupe, record official ordering for sidebar JSON.
- Politeness: concurrency 1–2, ~1 req/s, UA `grandocs-crawler/2.0 (+https://github.com/ThatGuySam/grandocs)`, exponential backoff on 429/5xx, hard cap per run.
- Delta state: `data/manifest/{product}-{ver}.json` mapping `url → { contentHash, path, title, etag? }`. Unchanged hash → skip write; vanished URL → prune file; manifest is also what the version switcher and MCP index consume.
- The old crawler had path-traversal bugs (e.g. `grandMA2/basic_fixture/de/www.ma-dot2.com/en/software-download/`) — sanitize slugs, never derive paths from arbitrary hrefs, allowlist URL prefixes.

## HTML → Markdown conversion

- Pipeline: `rehype-parse` → select main content container (drop breadcrumbs, version badge, "open as PDF" buttons, prev/next nav, ToC togglers) → `rehype-remark` + `remark-gfm` → `remark-stringify`. MDX-escape or fence anything that would break Starlight's MDX/markdown parsing (the MA docs love `<` `>` in command syntax — prefer `.md` over `.mdx` output and escape angle brackets).
- Tables (command syntax, DMX charts, system colors) must survive as GFM tables; where colspan/rowspan defeats GFM, fall back to inline HTML tables inside the markdown (Starlight renders them fine).
- Images: download to `src/assets/{product}/{ver}/…`, rewrite refs relative, let `astro:assets` optimize. Skip re-downloading on matching hash.
- Frontmatter written per page: `title` (from `<h1>`), `description` (first paragraph, truncated), `product`, `version`, `lang`, `sourceUrl`, `scrapedAt`, `pagefind: false` when not latest version.
- Internal links: rewrite `*.html` hrefs to site-relative slugs; external links untouched; dead internal targets logged to a crawl report.

## GitHub Action (`.github/workflows/sync-docs.yml` — replaces `flat.yml`)

- Triggers: `schedule: cron '0 4 * * 1'` (weekly, Mon 04:00 UTC) + `workflow_dispatch` with `product` / `version` inputs for targeted re-crawls.
- Steps: checkout → setup-node → `npm ci` → `node scripts/crawl.ts --changed-only` → `stefanzweifel/git-auto-commit-action` with a human-readable summary (pages added/updated/removed per product) — the old Flat commit messages were JSON noise.
- Optional `pull_request` mode (env flag) for reviewing big deltas (new MA3 version) instead of direct commit.
- Separate light job, monthly: **version probe** — HEAD `…/grandMA3/{next}/HTML/help.html`; on 200, open a GitHub issue "grandMA3 {next} docs are live" (then a human or dispatch run crawls it).
- Note: GitHub disables cron workflows on 60 days of repo inactivity; the weekly commit itself keeps it alive, but add `keepalive-workflow` or a yearly review reminder anyway. The Flat action (`githubocto/flat`) is archived upstream — don't reuse.

## Definition of done

- Full grandMA3 latest crawl converts with zero raw-chrome leakage (grep the output for `pull-right`, `onclick`, `topic-toc` → must be empty).
- Re-running the crawler with no upstream changes produces zero diff (idempotent).
- A simulated upstream edit (fixture test on saved HTML) produces exactly one file diff + correct manifest update.
- Legacy conversion: ≥95% of archived pages convert; failures listed in `data/legacy-convert-report.json`.
