# Phase 5 — Agent Skills (+ skills.sh publishing)

A set of grandMA skills any agent can install. Verified gap: **no grandMA/MA-Lighting skill exists on skills.sh or GitHub today** — these would be first.

## Mechanics (verified)

- A skill = directory with `SKILL.md` (YAML frontmatter `name` + `description`, then instructions), optional `references/` and `scripts/`. Scaffold: `npx skills init <name>`.
- Publishing = nothing: skills in a **public GitHub repo** are installable via `npx skills add ThatGuySam/grandocs` and appear on skills.sh automatically once people install them. Leaderboard ranks by installs + 8-week activity.
- Layout: `skills/<skill-name>/SKILL.md` in this repo (CLI auto-discovers; multi-skill repos get a picker). One repo = one install command = one star/issue target.

## Core skill set

| Skill | Triggers on | Core instruction sketch |
|---|---|---|
| `grandma3-docs` | any grandMA3 question | Resolve via grandocs: fetch `/llms.txt` → locate section → fetch page `.md` twin (or MCP `search_docs` if connected). Default to latest version; **the user's console version wins** — switch the version path segment. Always cite the page URL. Never invent command syntax: quote the syntax block verbatim. |
| `grandma2-dot2-docs` | grandMA2 / dot2 questions | Same flow; notes that MA2 line is EOL-era, official legacy help (help2) is offline, and grandocs `/legacy/` holds the multi-version archive (3.5–3.9). |
| `grandma-command-syntax` | "what's the syntax for…", command-line errors | Map keyword → `keyword_{name}` page (`Store`, `Assign`, `If`, `MAtricks`, …). Explain MA syntax notation (`[]` optional, `<>` placeholders, `|` alternatives). Includes `references/syntax-notation.md` + the keyword index per product. |
| `grandma3-lua-api` | MA3 plugin/Lua development | grandocs Lua section first; cross-reference community API docs (MacTirney/GrandMA3-API-Documentation, hossimo/GMA3Plugins, patopesto/GrandMA3-Plugins) for undocumented internals; version-gate advice (Lua API shifts between MA3 releases). |
| `grandma-macro-writer` | writing/fixing MA2 macros, MA3 macros/plugins | XML formats for both generations, import paths, showfile locations, common quoting pitfalls; lint-by-checklist before presenting a macro. |
| `grandma-troubleshooting` | "console won't…", session/network issues | Decision-tree over the official troubleshooting topics (Clean Start, Update Does Not Work, Station Does Not Connect, Panic Macro) + network/conformity pages; asks for software version + topology first. |

Shared rules baked into each: prefer grandocs `.md` fetches over HTML scraping; state the doc version used; this is an unofficial mirror — link malighting.com when the user needs authoritative/legal answers (conformity, safety).

## Suggested additional skills (backlog)

- `gdtf-mvr-helper` — GDTF fixture building / MVR exchange (GDTF is native to MA3; gdtf-share.com workflows).
- `ma2-to-ma3-migrator` — Mode2 mapping, keyword equivalences, release-note diffs for show migration.
- `ma3-release-notes` — "what changed between 2.2 and 2.4?" backed by release-note pages + crawl manifests.
- `grandocs-contributor` — meta-skill for working on this repo (pipeline conventions, how to add a product).
- `ma-showfile-paths` — where things live on console/onPC filesystems (backups, plugins, macros, exports).

## Rollout

1. Build `grandma3-docs` + `grandma-command-syntax` first (highest value, purely doc-grounded).
2. Eval harness: per skill, ~10 real questions (from MA forum threads) → answer must cite a correct grandocs URL. Run with and without the skill; keep only skills that measurably beat baseline.
3. README + Building-with-AI page get the install command; post once in the MA community forum / r/lightingdesign with transparent unofficial-mirror framing.
4. Watch skills.sh listing appear after first external installs; iterate descriptions (they drive agent auto-triggering).
