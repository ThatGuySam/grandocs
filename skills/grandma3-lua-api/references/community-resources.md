# Community grandMA3 Lua / plugin resources

Use these **only to fill gaps** the official grandocs `lua_*` pages leave —
undocumented internals, end-to-end plugin examples, enum dumps. **Cite grandocs
first**, label everything below as unofficial and community-maintained, and
**version-gate**: each was written against a specific MA3 release and the Lua API
shifts between releases (functions added/renamed/removed, enum values change).

| Resource | What it's good for | Watch out for |
|---|---|---|
| [github.com/MacTirney/GrandMA3-API-Documentation](https://github.com/MacTirney/GrandMA3-API-Documentation) | Community-reverse-engineered reference of the MA3 Lua API — functions/objects the official help omits or documents thinly. Good for "is there a function that…". | Reverse-engineered, not official; tied to whatever MA3 version the author ran. Confirm signatures against the live console / official page before relying on them. |
| [github.com/hossimo/GMA3Plugins](https://github.com/hossimo/GMA3Plugins) | Real, working plugin examples — see how `return function()`, handles, `Cmd()`, and UI dialogs fit together in practice. | Example-quality varies; may target an older API. Treat as patterns to learn from, not copy-paste-ready. |
| [github.com/patopesto/GrandMA3-Plugins](https://github.com/patopesto/GrandMA3-Plugins) | More maintained plugin examples and utilities from an active community author. | Same version caveat; check the repo's stated MA3 version. |
| [grandma3.bambinito.net](https://grandma3.bambinito.net) | Community knowledge base / tutorials around grandMA3 plugins and Lua (patopesto's site). | Tutorial content, not a normative API spec. |

## How to use them in an answer

1. Find the function/concept on grandocs first (`lua_*` page). Quote its
   signature/example verbatim.
2. If grandocs is silent (undocumented internal, missing enum, no example),
   reach for a community resource above. **Say explicitly** it's community /
   unofficial and which source it came from.
3. If neither grandocs nor a cited community source documents it, say you can't
   verify it rather than inventing a signature (SKILL.md rule 2).
4. Always state the MA3 version the advice assumes and warn it may differ on the
   user's console software version.

## Related but out of scope

- **MA3 MCP / console-control servers** (e.g. `Pahegi/MA3-MCP-Server`) drive the
  console over the network — they are *not* docs/API references. Don't confuse
  console-control tooling with the grandocs docs MCP (`search_docs`,
  `get_page`, `command_lookup`, `list_products_versions`).
