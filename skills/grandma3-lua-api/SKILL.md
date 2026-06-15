---
name: grandma3-lua-api
description: Write, debug, and reason about grandMA3 Lua plugins and scripting — the Object API and Object-Free API (Cmd, Printf, Get/Set, handles, UI dialogs, progress bars), plugin XML/structure, and showfile paths. Use when a user asks to write a grandMA3 plugin or Lua script, automate a console task with Lua, fix a `.lua`/plugin error, or look up a grandMA3 Lua function. grandMA2/dot2 have only macros, not this Lua API — redirect those to macros.
---

# grandMA3 Lua API helper

Help users write and debug grandMA3 Lua plugins and scripts, grounded in the
grandocs mirror. grandMA3 is the only MA generation with this Lua API —
grandMA2 and dot2 use macros (command-line sequences), not Lua.

## HARD RULES — read before answering

1. **grandocs is an UNOFFICIAL mirror.** For anything authoritative, legal, or
   safety-relevant (conformity, electrical, rigging, network safety), tell the
   user to confirm on the canonical page at `help.malighting.com` (every
   grandocs page carries its `sourceUrl`). Lua that drives moving lights, DMX
   output, or patch changes can move real fixtures — flag that.
2. **NEVER invent grandMA3 syntax or function signatures.** Quote the doc's
   signature and example code blocks verbatim. If you can't find a function in
   grandocs or a cited community source, say so — do not guess argument order,
   return types, or enum names. The MA3 Lua API is large and idiosyncratic;
   plausible-looking invented calls fail silently or crash the plugin.
3. **Version-gate every answer.** The Lua API changes between MA3 releases:
   functions are added, renamed, and removed; enum values shift. grandocs
   mirrors **grandMA3 v2.4** by default. Ask the user which console software
   version they run; if it differs, warn that signatures/availability may
   differ and point them at the matching `help.malighting.com` version.
4. **Cite grandocs `lua_*` pages first.** Lead with the official function page;
   use community resources only to fill gaps the official docs leave (see
   `references/community-resources.md`), and always label community info as
   unofficial.

## How to look things up (cite as you go)

grandMA3 Lua pages live under `/grandma3/2-4/lua_*` on grandocs. Resolve in this
order:

1. **MCP (if connected).** grandocs ships an MCP server with tools
   `search_docs`, `get_page`, `command_lookup`, and `list_products_versions`.
   Use `search_docs` (query + `product: grandma3`) to find the function, then
   `get_page` for its full markdown.
2. **Markdown twins.** Append `.md` to any grandocs page URL for raw markdown,
   e.g. `https://grandocs.samcarlton.com/grandma3/2-4/lua_object_get.md`. Same
   convention as Stripe docs.
3. **llms.txt.** Fetch `/llms.txt` (index) or `/llms-full.txt` to discover the
   Lua section, then fetch the relevant `.md` twin.

Slug convention — match the function to its page slug:
- **Object-Free API** (global functions called directly): `lua_objectfree_<name>`
  — e.g. `Cmd` → `lua_objectfree_cmd`, `GlobalVars` → `lua_objectfree_globalvars`.
  Note: `Printf`/`ErrPrintf` appear in examples; the table-dialog and progress
  helpers are object-free too.
- **Object API** (methods called on a handle, usually colon notation):
  `lua_object_<name>` — e.g. `Get` → `lua_object_get`, `Set` → `lua_object_set`,
  `Addr` → `lua_object_addr`.
- Index/concept pages: `lua_object`, `lua_objectfree`, `lua_handle`,
  `lua_interface`, `lua_interface_progressbar`.

`references/function-index.md` lists the high-traffic functions with their
verbatim signatures and grandocs slugs so you can jump straight to the page.

## Writing a plugin (workflow)

1. **Confirm version** (rule 3) and what the user is automating.
2. **Find the real functions** via lookup above. A grandMA3 plugin's executable
   body is `return function() ... end`; the console calls that returned
   function. Inside it you mix:
   - `Cmd("...")` to run command-line syntax (the most reliable way to make the
     desk do things — for the command syntax itself, defer to the
     `grandma-command-syntax` skill / `keyword_*` pages).
   - Object API via handles: get a handle (`Root()`, `SelectedSequence()`,
     `CurrentUser()`, …), then `handle:Get(...)`, `handle:Set(...)`,
     `handle:Children()`, etc.
   - `Printf(...)` / `ErrPrintf(...)` for feedback to the command-line history.
   - `coroutine.yield(...)` to stay responsive in loops (required for progress
     bars and long work).
3. **Quote example code verbatim** from the function's grandocs page, then adapt
   variable names — don't synthesize calls the docs don't show.
4. **Lint before presenting** (`references/plugin-authoring.md` checklist):
   `return function()` wrapper present, every API call traced to a doc page,
   handles nil-checked, no invented enums, version stated.
5. **Tell the user where it goes** — plugin/showfile paths in
   `references/plugin-authoring.md`. Plugins live in the showfile or the user
   library; the Lua API surface differs from onPC to console only in hardware
   functions.

## When it's NOT this skill

- **grandMA2 / dot2 plugins or "Lua":** those generations have macros, not this
  API. Redirect to macros / the command syntax skill; don't apply MA3 Lua here.
- **Pure command-line syntax** ("what's the syntax for Store / Assign / If"):
  that's the `grandma-command-syntax` skill and `keyword_*` pages. Use `Cmd()`
  to call such syntax from Lua, but quote the syntax from the keyword page.

## Source attribution (always)

End answers by naming the grandocs page(s) you used and their canonical
`help.malighting.com` `sourceUrl`, and restate that grandocs is an unofficial
mirror — verify safety/conformity-relevant details on the official page.
