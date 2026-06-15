# AGENTS.md

Instructions for AI agents working on **grandocs** — an unofficial, agent-native
Astro 6 + Starlight mirror of MA Lighting documentation (grandMA3, grandMA2, dot2,
utility, network). See [`PLAN.md`](PLAN.md) for the roadmap and
[`docs/plan/`](docs/plan/) for per-phase detail.

## Credentials (Cloudflare)

Deploys and custom-domain attachment use a Cloudflare API token in **`.env.local`**
(git-ignored) as `CLOUDFLARE_API_TOKEN`.

- **Account:** Sam Carlton Creative — `8d4ef8fe891f53e5658d3fdd5a4c7630`
- **Zone:** `samcarlton.com` — `2601bf36012e64482012f58664e5ebf3`
- **Required token scopes:** Workers Scripts:Edit, Workers Routes:Edit, Zone:Read
  on `samcarlton.com`. Must **not** be IP-restricted (this is enough to deploy a
  worker *and* attach its `samcarlton.com` custom domain).
- Never print, log, or commit the token value. `.env*.local` is git-ignored —
  reference the file, not the secret.

```bash
export CLOUDFLARE_API_TOKEN=$(grep ^CLOUDFLARE_API_TOKEN= .env.local | cut -d= -f2- | tr -d '"')
export CLOUDFLARE_ACCOUNT_ID=8d4ef8fe891f53e5658d3fdd5a4c7630
```

## Build & deploy

```bash
pnpm install
pnpm dev                         # local dev
pnpm build                       # version manifest + search index + astro build -> dist/
scripts/deploy-snapshot.sh prod  # deploy + attach grandocs.samcarlton.com
scripts/deploy-snapshot.sh 6     # frozen per-phase snapshot -> grandocs-phase-6.samcarlton.com
cd mcp && npx wrangler deploy    # MCP worker (export the token first)
```

`deploy-snapshot.sh` reads the token from `.env.local` and attaches the custom
domain by default (`ATTACH_DOMAIN=0` to skip and stay on workers.dev).

## Live surface

| What | URL |
| --- | --- |
| Site | <https://grandocs.samcarlton.com> |
| MCP | <https://grandocs-mcp.samcarlton.com/mcp> |
| Phase snapshots | `grandocs-phase-{1..6}.samcarlton.com` (+ `grandocs-phase-4-mcp`) |

## Repo conventions

- **Content** lives in `src/content/docs/<product>[/<verDir>]/<slug>.md`, generated
  by `scripts/crawl.ts` from `help.malighting.com`. Do not hand-edit converted
  pages — re-crawl instead. grandMA3 is versioned (`2-4`, `2-3`); other products
  are flat.
- **Re-sync:** `node scripts/crawl.ts` (default set) or `node scripts/crawl.ts grandma3:2.3`.
  The `sync-docs.yml` workflow runs it weekly; `version-probe.yml` files an issue
  when MA ships a new grandMA3 version. Add a new version by appending it to
  `ALL_SOURCES` in `scripts/crawl.ts`, crawling, and rebuilding.
- **Build steps** (`pnpm build`): `build-version-manifest.mjs` →
  `src/data/grandma3-versions.json` (version switcher); `build-search-index.mjs` →
  `public/agent/search-index.json` (read by the MCP worker). Both run before
  `astro build`. `public/agent/` is git-ignored (regenerated each build).
- **Search-index ↔ MCP contract:** `scripts/build-search-index.mjs` and
  `mcp/src/index.ts` must agree on MiniSearch `idField`/`fields`/`storeFields`
  (currently `path` / `[title,headings,excerpt]` / `[title,path,product,version,lang,excerpt]`).
  Change them together.
- **MCP fetches** the site via a `SITE` service binding (a Worker can't fetch the
  same-account site over workers.dev — loopback 404). `SITE_ORIGIN` var controls
  the cited URLs.
- **Agent-facing invariants:** unofficial mirror — always cite the canonical
  `help.malighting.com` page; never invent grandMA command syntax (quote the
  page's syntax block); default grandMA3 2.4 but the user's console version wins.

## Branches

- `master` / `starlight-rebuild` — the rebuilt site (kept in sync).
- `archive/pre-starlight-2026-06-12` — **frozen, do not modify.** The only
  surviving copy of some legacy multi-version grandMA2/dot2 content.

## Limits to respect

- Cloudflare Workers static assets: **20,000 files** max. The site is at ~16.3k
  with two grandMA3 versions; adding more versions approaches the cap.
- Cloudflare `_redirects`: **100 dynamic (wildcard) rules** max — keep
  `public/_redirects` to broad catch-alls.
