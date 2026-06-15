---
title: "ErrPrintf(string)"
description: "The ErrPrintf Lua function prints a red error message in the Command Line History and System Monitor."
product: grandma3
version: "2.3"
lang: en
sourceUrl: "https://help.malighting.com/grandMA3/2.3/HTML/lua_objectfree_errprintf.html"
scrapedAt: "2026-06-15T18:25:30.477Z"
pagefind: false
---
## Description

The **ErrPrintf** Lua function prints a red error message in the [Command Line History](/grandma3/2-3/ws_ui_command_line/) and [System Monitor](/grandma3/2-3/si_system_monitor/).

## Argument

- **String**:\
  The string text to be printed to the Command Line History.

## Return

This function does not return anything.

## Example

This example prints "This is a red error message!" in the Command Line History and System Monitor:

|                                                                                                                                                   |
| ------------------------------------------------------------------------------------------------------------------------------------------------- |
| [Copy Code](javascript:void\(0\))Lua                                                                                                              |
| ```
return function()
    -- Prints an error message in the command line feedback in red text.
    ErrPrintf("This is an error message!")
end
``` |
