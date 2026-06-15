---
title: "GetDebugFPS()"
description: "The GetDebugFPS Lua function returns a float number with the frames per second."
product: grandma3
version: "2.3"
lang: en
sourceUrl: "https://help.malighting.com/grandMA3/2.3/HTML/lua_objectfree_getdebugfps.html"
scrapedAt: "2026-06-15T18:25:31.366Z"
pagefind: false
---
## Description

The **GetDebugFPS** Lua function returns a float number with the frames per second.

## Arguments

This function does not accept any arguments.

## Return

- **Number**:\
  The returned number indicates the current frames per second.

## Example

This example prints the FPS number:

|                                                                                                                          |
| ------------------------------------------------------------------------------------------------------------------------ |
| [Copy Code](javascript:void\(0\))Lua                                                                                     |
| ```
return function ()
    -- Prints the current frames per second.
    Printf("Current FPS: " .. GetDebugFPS())
end
``` |
