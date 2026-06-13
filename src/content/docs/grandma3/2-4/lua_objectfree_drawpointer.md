---
title: "DrawPointer(integer,table[,integer])"
description: "The DrawPointerunction draws a red pointer on the display. There can only be one pointer at a time on each station."
product: grandma3
version: "2.4"
lang: en
sourceUrl: "https://help.malighting.com/grandMA3/2.4/HTML/lua_objectfree_drawpointer.html"
scrapedAt: "2026-06-12T21:25:01.707Z"
---
## Description

The **DrawPointer** function draws a red pointer on the display. There can only be one pointer at a time on each station.

## Arguments

- **Integer**:\
  This integer is the display index where the pointer should be drawn.
- **Table**:\
  This key-value table must have 'x' and 'y' keys with values indicating a position on the display. See the example below.
- **Integer** (optional):\
  This optional integer defines a duration for the pointer in milliseconds. It fades out. If a duration is not set, then it stays visible.

## Return

This function does not return anything.

## Example

This example draws a pointer on display 1 for 5 seconds:

|                                                                                                                                                                                                                                                                                                                                                           |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [Copy Code](javascript:void\(0\))Lua                                                                                                                                                                                                                                                                                                                      |
| ```
return function()
    --Set a display index
    local displayIndex = 1
    --Create and set the position in a table
    local position = {}
    position.x = 150
    position.y = 25
    --Set a 5 seconds duration - in milliseconds
    local duration = 5000
    --Draw the actual pointer
    DrawPointer(displayIndex,position,duration)
end
``` |
