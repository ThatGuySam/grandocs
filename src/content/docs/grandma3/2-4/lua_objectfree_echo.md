---
title: "Echo(string)"
description: "The Echo Lua function prints a string in the System Monitor."
product: grandma3
version: "2.4"
lang: en
sourceUrl: "https://help.malighting.com/grandMA3/2.4/HTML/lua_objectfree_echo.html"
scrapedAt: "2026-06-12T21:25:01.502Z"
---
## Description

The **Echo** Lua function prints a string in the [System Monitor](/grandma3/2-4/si_system_monitor/).

## Argument

- **String**:\
  The string text to be printed to the System Monitor.

## Return

This function does not return anything.

## Example

This example prints "Hello World!" on the System Monitor:

|                                                                                                                            |
| -------------------------------------------------------------------------------------------------------------------------- |
| [Copy Code](javascript:void\(0\))Lua                                                                                       |
| ```
return function()
    -- Prints 'Hellow World!' in the system monitor in yellow text.
    Echo("Hello World!")
end
``` |
