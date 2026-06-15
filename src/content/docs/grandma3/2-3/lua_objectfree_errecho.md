---
title: "ErrEcho(string)"
description: "The ErrEcho Lua function prints a red error message on the System Monitor."
product: grandma3
version: "2.3"
lang: en
sourceUrl: "https://help.malighting.com/grandMA3/2.3/HTML/lua_objectfree_errecho.html"
scrapedAt: "2026-06-15T18:25:30.475Z"
pagefind: false
---
## Description

The **ErrEcho** Lua function prints a red error message on the [System Monitor](/grandma3/2-3/si_system_monitor/).

## Argument

- **String**:\
  The string text is to be printed to the System Monitor.

## Return

This function does not return anything.

## Example

This prints "This is a red error message!" on the system monitor:

|                                                                                                                                          |
| ---------------------------------------------------------------------------------------------------------------------------------------- |
| [Copy Code](javascript:void\(0\))Lua                                                                                                     |
| ```
return function()
    -- Prints an error message in the system monitor in red text.
    ErrEcho("This is an error message!")
end
``` |
