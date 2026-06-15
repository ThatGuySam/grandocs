# grandMA3 plugin authoring — structure, paths, lint checklist

Patterns for assembling and shipping a grandMA3 Lua plugin. All version-gated to
**grandMA3 v2.4** (the grandocs default); confirm against the user's console
software version. Quote actual function usage from grandocs `lua_*` pages — the
shapes here are scaffolding, not invented API.

## Plugin execution model

- A grandMA3 plugin's runnable component returns a function the console invokes:

  ```lua
  return function()
      -- plugin body runs here
  end
  ```

  This `return function() ... end` wrapper is shown verbatim in official
  examples (e.g. `lua_object_get`, `lua_interface_progressbar`). The returned
  function is what the console calls when the plugin runs.

- Inside the body you typically combine:
  - **Command-line calls:** `Cmd("Store Cue 1")` — the most robust way to make
    the desk do something. For the *syntax* of the command string, defer to the
    `grandma-command-syntax` skill and the `keyword_*` pages; don't invent it.
  - **Object API via handles:** acquire a handle (`Root()`, `CurrentUser()`,
    `SelectedSequence()`, `DataPool()`, …), then call methods —
    `handle:Get("Name")`, `handle:Set("Tracking", "Yes")`, `handle:Children()`.
  - **Feedback:** `Printf(...)` for normal output, `ErrPrintf(...)` for errors —
    both write to the command-line history.
  - **Long work / loops:** `coroutine.yield(...)` to stay responsive (required
    for progress bars and anything that iterates).

- **Nil-check handles.** Handle-returning functions can return `nil` (nothing
  selected, object missing). Official examples guard with
  `if handle == nil then ErrPrintf("...") return end` — follow that pattern.

## UI from a plugin

- Simple yes/no: `Confirm(...)` (`lua_objectfree_confirm`).
- Rich dialogs: `MessageBox(table)` (`lua_objectfree_messagebox`) — table-driven;
  fetch the page for the exact table fields, don't guess key names.
- Text entry: `TextInput([...])` (`lua_objectfree_textinput`).
- Progress feedback: the progress-bar function set
  (`lua_interface_progressbar` shows all six used together).

## Where plugins and showfiles live

> Confirm exact, current paths on the official `help.malighting.com` page for
> the user's version and platform (console vs onPC, Windows/macOS/Linux) — these
> move between releases and OSes. Treat the following as orientation, not gospel,
> and tell the user to verify before relying on a path in a script.

- **Plugins** are stored in the **showfile** (travels with the show) or imported
  to/exported from the **user/library** location on disk. Import/export of
  plugin XML uses the `Import`/`Export` family.
- **Showfiles, user profiles, macros, and exports** each have their own
  directory under the grandMA3 data folder; the precise location differs between
  a physical console and grandMA3 onPC.
- Plugin files are XML wrappers around the Lua; the console can also export a
  plugin's Lua. If the user is hand-editing plugin XML, have them confirm the
  schema on the official plugins/Macros help pages for their version.

## Lint-by-checklist (run before presenting any plugin)

1. **Wrapper present** — the runnable body is `return function() ... end`.
2. **Every API call traced to a doc page** — each `Cmd`, object method, global
   function maps to a grandocs `lua_*` page (or a clearly-labeled community
   source). No invented function names, argument orders, or return shapes.
3. **No invented enums/roles** — e.g. `Enums.Roles.Edit` appears in
   `lua_object_get`; only use enum paths you can cite.
4. **Handles nil-checked** before use.
5. **Loops yield** — `coroutine.yield(...)` in any long loop / progress flow.
6. **Command strings deferred** — command-line syntax inside `Cmd("...")` quoted
   from the relevant `keyword_*` page, not improvised.
7. **Version stated** — say which MA3 version the plugin targets and warn the API
   may differ on other versions.
8. **Attribution** — name the grandocs page(s) used + canonical `sourceUrl`, and
   restate the unofficial-mirror / verify-safety caveat.

## Discovery surfaces (remind the user)

grandocs is agent-native: `/llms.txt` (+ `/llms-full.txt`), a `.md` twin for
every page (append `.md` to the URL), and an MCP server with `search_docs`,
`get_page`, `command_lookup`, and `list_products_versions`. Prefer fetching the
`.md` twin or MCP `get_page` over scraping HTML.
