# Research: Best communities to share grandocs with

## SBC4

- `Tease:` Two audiences, two pitches — don't send the same post to both.
- `Lede:` grandocs has two distinct shareable hooks: the **content** (4,242 clean, searchable grandMA/MA2/dot2 pages) for lighting pros, and the **engineering** (MCP server, llms.txt, skills, Starlight rebuild) for the AI/dev crowd. The highest-relevance lighting venues (official MA forum, big Facebook groups) are also the highest IP risk because grandocs mirrors MA's copyrighted docs — lead there with the free/unofficial/attribution framing, or lead with the tooling, not the copied pages.
- `Why it matters:`
  - Posting an unofficial mirror to MA's own forum without care invites takedown attention; PLAN.md already lists MA's stance on mirrors as an open question.
  - Directory listings (MCP, llms.txt, Astro showcase) are durable discovery you set up once — different game from a one-time forum post.
- `Go deeper:`
  - Ranked tiers per audience below; how-to-share notes and source links at the bottom.
  - Confirmed-vs-inference is marked inline; subreddit member counts and the denken.io community list could not be retrieved this pass (gaps noted).

**Date:** 2026-06-15
**Scope:** Where to share grandocs (https://grandocs.samcarlton.com) to reach (1) grandMA/MA2/dot2 lighting professionals who want the docs, and (2) the AI/agent/docs-tooling audience who'd value the MCP + llms.txt + skills + Starlight build. Includes how each venue treats self-promotion and the IP caution unique to a vendor-docs mirror.

## Short answer

Run two parallel pushes:

- **Lighting pros (content):** Start with **r/lightingdesign** and **ControlBooth.com** (both confirmed active with grandMA traffic), then the **grandMA Discords** and the big **grandMA Facebook groups**. Treat the **official MA Lighting forum** as high-relevance but high-risk — share the *tooling* there, with prominent attribution, not "I mirrored your manuals."
- **AI/dev (engineering):** Lead with a **Show HN**, list the MCP server in the **MCP directories** (PulseMCP / Glama / mcp.so / awesome-mcp-servers), post to **r/mcp** and **r/ClaudeAI**, submit to the **Astro/Starlight showcase**, and register in the **llms.txt directories** (low effort, but for human discovery — see the adoption caveat).

The single most important move: **frame it correctly per audience.** Lighting pros care that it's free, complete, searchable, and works offline-ish on a laptop; the dev crowd cares that it's a real niche domain wired up agent-native end to end.

## What the evidence says

### Audience A — lighting professionals (the content)

**Tier 1 — best fit + reach**

- **r/lightingdesign** *(confirmed exists; member count not retrieved — verify before posting)* — the primary lighting-design subreddit and the most natural home for "free, searchable grandMA docs." Reddit's free-resource norm is forgiving *if* you're a participant and there's no paywall/upsell — grandocs (free, unofficial, attribution-first) fits. Read the sidebar rules first.
- **ControlBooth.com** *(confirmed active)* — the dominant English-language technical-theatre forum; the Control/Dimming subforum has live grandMA threads (MA1-in-2016, MA2 macros, console comparisons). Older working-pro + student demographic. A "made a free MA docs mirror" post in the right subforum fits the culture. Confirm their self-promo policy in the rules/with a mod.

**Tier 2 — strong, channel-specific**

- **grandMA Discord servers** *(confirmed they exist)* — programmer-heavy, high-engagement, and the best home for the *MCP/skills* angle. Named in search: the **"Lua for grandMA3"** Discord, **Christian Jackson's** grandMA3 server, **EventLighting365** (Tue Knudsen), and a general **"MA Users"** community. Join, contribute, then drop it in the right channel.
- **grandMA Facebook groups** *(exist; specific groups/sizes not verified this pass)* — where a large share of working touring/concert programmers actually hang out ("grandMA Users", "grandMA3 Programmers" and similar). High value, but Facebook is harder to verify and these groups can be protective of MA's official channels — same IP caution as the official forum.
- **r/techtheatre** and **r/livesound** *(confirmed exist; sizes not retrieved)* — broader adjacent reach; r/techtheatre is large and theatre-tech-focused, r/livesound has concert/touring crossover. Secondary to r/lightingdesign but worth a tailored cross-post.

**Tier 3 — high relevance, handle with care / niche**

- **Official MA Lighting Forum — forum.malighting.com** *(confirmed very active: v2.4 threads, Lua plugins, visualizer)* — the single most relevant audience **and** the highest risk: it's MA's own property and grandocs republishes MA's copyrighted docs. Recommendation (inference): if you post here, lead with the *agent tooling* as a community contribution, keep attribution/canonical links front and center, and be ready to add `noindex` or pull content if asked. Do not frame it as "I copied your manuals."
- **Blue Room (blue-room.org.uk)** *(not verified this pass)* — long-running UK theatre-tech forum; quieter than it once was but still a UK pro audience.
- **YouTube educator communities** — denken.io, Consoletrainer, "From Dark to Light," FACE Academy. These are *partnership* targets, not post-once channels: a creator mentioning grandocs as a reference is worth more than any single forum post.

### Audience B — AI / dev / docs-tooling (the engineering)

**Tier 1**

- **Hacker News — Show HN** — the story ("rebuilt a dead vendor-docs scraper into an agent-native mirror: MCP + llms.txt + per-page `.md` + installable skills") is a strong HN fit; niche real-world domain + current AI-tooling is a combo HN rewards. One shot — write the title and first comment carefully.
- **MCP directories (durable discovery, set-and-forget):** **PulseMCP** (Submit button; hand-reviewed), **Glama** (auto-indexes open-source servers from GitHub — make the repo discoverable), **mcp.so** (Submit / GitHub issue), **awesome-mcp-servers** (PR), and the **official `modelcontextprotocol` registry**. The `mcp-submit` tool reportedly fans out to 10+ directories in one command.
- **r/mcp** and **r/ClaudeAI** *(both active; rules not retrieved — check)* — "free MCP server for a real niche professional domain" is exactly their content. Pair with the skills angle.

**Tier 2**

- **Astro / Starlight showcase** — `astro.build/showcase` accepts submissions, the **Starlight Discord** and **community-content** page welcome links. grandocs (4,242 pages, version switcher, full agent surface) is a genuinely strong Starlight showcase, and the Astro team amplifies good ones.
- **skills.sh / Vercel skills ecosystem** — you already publish here; the leaderboard *is* discovery (installs + 8-week activity). An announcement in the skills community compounds it.
- **llms.txt directories** — **llmstxt.site/submit**, **directory.llmstxt.cloud**, **llms-text.com** — low effort, durable listings. **Caveat:** llms.txt's real consumption is contested (Google's John Mueller, 2026: "No AI system currently uses llms.txt"). So treat these as *human* discovery channels for people browsing for examples, not as a traffic source from LLMs.
- **Lobsters** *(invite-only, more critical)* — the rebuild write-up could land, but niche-domain posts are hit-or-miss there; lower priority than HN.

## What works

- **Two messages, not one.** Lighting pros want free/complete/searchable; devs want the agent-native plumbing. Same link, different lede.
- **Lead with "free + unofficial + attribution."** It defuses both the self-promo reflex and the IP concern in one move.
- **Participate before posting.** Reddit, Discord, ControlBooth, and the MA forum all reward members over drive-by promoters.
- **Directories are leverage.** MCP / llms.txt / Astro-showcase listings are one-time setup that keep surfacing the site — do these regardless of how the forum posts go.
- **Recruit educators.** A mention from a known grandMA YouTuber/trainer outperforms any single post.

## What to avoid

- **Don't dump the mirror on forum.malighting.com or the FB groups as "I copied your docs."** Highest relevance, highest takedown risk. Tooling-first, attribution-loud, or skip.
- **Don't oversell llms.txt** as if LLMs are consuming it — adoption is disputed; it's discovery + future-proofing.
- **Don't cross-post identical text** to r/lightingdesign + r/techtheatre + r/livesound; mods and overlapping users notice. Tailor each.
- **Don't post to subreddits/forums without reading their self-promo rules first** — several auto-remove unflaired or first-post promo. (I could not retrieve the specific rules for r/lightingdesign, r/techtheatre, r/mcp, or r/ClaudeAI this pass — check each before posting.)

## Recommendation

1. **Week 1 — dev launch:** Show HN + submit to MCP directories + r/mcp/r/ClaudeAI + Astro showcase + llms.txt directories. Lower IP sensitivity, builds initial signal/stars.
2. **Week 1–2 — lighting launch:** r/lightingdesign and ControlBooth first (tailored posts), then the grandMA Discords and FB groups.
3. **Official MA forum:** only after the above, tooling-first and attribution-loud — or hold until MA's stance on the mirror is clearer (PLAN.md open question).
4. **Ongoing:** pitch grandMA educators/YouTubers to reference it.

**Before posting, fill the gaps:** confirm r/lightingdesign / r/techtheatre / r/mcp / r/ClaudeAI member counts + self-promo rules, identify the specific largest grandMA FB groups, and retrieve the denken.io grandMA3-resources list (it 500'd this pass) for any community hubs missed here.

## Source links

**grandMA / lighting communities (fetched 2026-06-15):**
- https://forum.malighting.com/forum/ — official MA Lighting forum (active: v2.4, Lua plugins, visualizer threads)
- https://forum.malighting.com/forum/thread/68448-lua-for-grandma3-youtube-tutorials-discord/ — "Lua for grandMA3" YouTube + Discord
- https://www.controlbooth.com/ — technical-theatre forum; active grandMA threads e.g. https://www.controlbooth.com/threads/grandma2.7241/ and https://www.controlbooth.com/threads/lighting-consoles-for-20k.40855/
- https://denken.io/2025/01/04/grandma3-learning-resources/ — curated grandMA3 learning-resources list incl. Discords/communities (HTTP 500 on fetch 2026-06-15 — retry; high-value)
- https://consoletrainer.com/grandma3-for-grandma2-programmers/ — Consoletrainer (educator/partnership target)
- Reddit (confirm rules/sizes before posting): r/lightingdesign, r/techtheatre, r/livesound, r/stagecraft
- grandMA Discords named in search: "Lua for grandMA3", Christian Jackson's grandMA3 server, EventLighting365 (Tue Knudsen), "MA Users"
- grandMA Facebook groups (identify largest before posting; not verified this pass)
- https://www.blue-room.org.uk/ — UK theatre-tech forum (activity not verified)

**AI / dev / docs-tooling channels (fetched 2026-06-15):**
- https://www.pulsemcp.com/servers — PulseMCP directory (Submit in nav)
- https://glama.ai/mcp/servers — Glama (auto-indexes open-source servers from GitHub)
- https://mcpservers.org/ — awesome-mcp-servers (PR to list)
- https://dynomapper.com/blog/ai/mcp-server-directories/ — complete list of MCP directories + submission methods
- https://mcpblog.dev/blog/2026-03-17-mcp-registry-guide — MCP registry landscape + auto-publish (mentions `mcp-submit`)
- https://astro.build/showcase/ — Astro showcase (open submissions)
- https://starlight.astro.build/resources/community-content/ — Starlight community content page (PR to add)
- https://llmstxt.site/submit — llms.txt directory submission
- https://directory.llmstxt.cloud/ — llms.txt directory (by industry)
- https://github.com/krish-adi/llmstxt-site — llms.txt directory repo
- https://www.mintlify.com/blog/what-is-llms-txt — llms.txt skepticism / adoption context (Mueller "no AI system currently uses llms.txt")
- https://skills.sh — skills leaderboard (installs + 8-week activity = discovery)
