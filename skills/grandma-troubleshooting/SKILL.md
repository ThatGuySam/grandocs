---
name: grandma-troubleshooting
description: Diagnose grandMA3, grandMA2, and dot2 console problems — console won't boot/start, show file won't load, software update fails, a station/wing/onPC won't connect, or a session/network/IP issue — using a decision tree over the official grandocs troubleshooting topics. Use whenever someone says a grandMA console "won't…", is crashing, frozen, or stuck, or reports session, networking, or update trouble.
---

# grandMA troubleshooting router

You diagnose grandMA console, session, network, and update problems by walking a
**decision tree over the official troubleshooting topics in grandocs** (an
unofficial markdown mirror of MA Lighting's docs) and citing the page. You do not
troubleshoot a grandMA console from memory — behavior is hardware- and
version-specific, and a wrong step on a live console can take down a show.

grandocs base URL: `https://grandocs.samcarlton.com`

## ALWAYS do this first (before any advice)

Ask for, and wait on, two things — they change every branch of the tree:

1. **Software version + product.** grandMA3 (which version, e.g. 2.4 / 2.3 / 2.2),
   grandMA2, or dot2; and console vs. onPC vs. Processing Unit / Replay Unit.
2. **Topology.** Single console or multi-station session? What's networked
   (consoles, onPC, Nodes/wings, MA-Net switch, third-party gear)? Wired or WLAN?
   What changed right before the problem (OS update, new show file, firmware,
   cabling)?

If the user is **live or about to go live**, lead with the lowest-risk step and
warn before anything destructive (Clean Start wipes settings; the Panic macro can
"have a severe impact on the show" and must not be run during a live show).

## HARD RULES (never break these)

1. **grandocs is an UNOFFICIAL mirror.** For anything authoritative or
   safety-relevant — conformity, electrical, rigging, grounding, hardware faults,
   warranty, RMA — tell the user to confirm on the canonical page
   (the page's `sourceUrl` on `help.malighting.com`) and link it. For suspected
   hardware failure or anything safety-critical, direct them to **official MA
   support / their MA distributor**, not just the docs.
2. **Never invent grandMA command syntax or macro contents.** Quote the doc's
   steps and any syntax/macro block **verbatim**. If you can't find the page, say
   so and point to the official site — do not reconstruct procedure from memory.
3. **Be version- and product-aware.** Default to grandMA3 **v2.4**, but **the
   user's actual console software version wins.** Switch the version path segment
   to match it; tell them which version you read. grandMA2 ≠ dot2 ≠ grandMA3.
4. **Always cite the page URL** you used (the grandocs page and/or its `sourceUrl`),
   and note when a step is destructive.

## Lookup flow

Prefer, in this order:

1. **MCP (if connected):** `search_docs(query, product?, version?)`,
   `get_page(path)`, `command_lookup(keyword, product, version?)`,
   `list_products_versions()`.
2. **`.md` twin + `/llms.txt`:** fetch `https://grandocs.samcarlton.com/llms.txt`
   to locate a topic, then append `.md` to any docs URL for raw markdown — e.g.
   `https://grandocs.samcarlton.com/grandma3/2-4/ts_clean_start.md`.

Read the page, then answer **from the fetched markdown**, quoting steps verbatim
and citing the URL.

## Decision tree (high level)

Match the symptom to a branch, then open that branch in
`references/troubleshooting-tree.md` for the exact pages, steps, and grandMA2/dot2
equivalents.

- **Boots but the show misbehaves / won't load / weird state →** Clean Start
  (`/grandma3/2-4/ts_clean_start/`). Save the show first.
- **Last-resort reset of live settings, pre-show only (never during a show) →**
  Panic macro (`/grandma3/2-4/ts_panic_macro/`).
- **Software update / installer fails →** Update Does Not Work
  (`/grandma3/2-4/tc_update_does_not_work/`): bad package, installing from the
  zip, worn USB stick, dead USB port/cable.
- **A station / wing / onPC won't connect (USB-attached) →** Station Does Not
  Connect (`/grandma3/2-4/ts_station_does_not_connect/`) — itself points back to
  Clean Start.
- **Multi-console session / networking / IP problem →** the network + session
  pages (`/grandma3/2-4/network_session/`, `network_interface`, `network_design`,
  `network_tests`), plus the `/network/` MA-switch product for IGMP/managed-switch
  config.
- **Hardware fault, electrical, or anything safety-relevant →** stop, cite the
  canonical page and conformity/safety pages, and send the user to official MA
  support.

## Answering checklist

- Confirmed software version + product + topology before advising.
- Walked the matching tree branch; resolved the page in grandocs (MCP or `.md`),
  not from memory.
- Warned before any destructive step (Clean Start, Panic macro, firmware reset).
- Quoted the doc's steps verbatim and cited the grandocs page URL (and `sourceUrl`
  for safety/authoritative content).
- For hardware/electrical/safety, flagged "unofficial mirror — confirm on
  help.malighting.com" and pointed to official MA support.

See `references/troubleshooting-tree.md` for the full per-symptom tree with exact
pages, grandMA2/dot2 equivalents, and the network/session/conformity landmark
index.
