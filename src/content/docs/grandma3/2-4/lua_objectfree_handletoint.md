---
title: "HandleToInt(handle)"
description: "The HandleToInt Lua function converts a handle into an integer format."
product: grandma3
version: "2.4"
lang: en
sourceUrl: "https://help.malighting.com/grandMA3/2.4/HTML/lua_objectfree_handletoint.html"
scrapedAt: "2026-06-12T21:25:04.405Z"
---
## Description

The **HandleToInt** Lua function converts a handle into an integer format.

See the [Handle topic](/grandma3/2-4/lua_handle/) for more info regarding handles and links to other related functions.

## Arguments

- **Handle**:\
  The handle of the object.

## Return

- **Integer**:\
  The returned integer is the handle converted to an integer.

## Example

This example prints the handle integer number for the selected sequence. It also converts the integer back to a handle and uses this to print the name of the sequence:

|                                                                                                                                             |
| ------------------------------------------------------------------------------------------------------------------------------------------- |
| [Copy Code](javascript:void\(0\))Lua                                                                                                        |
| ```
return function()
    Printf("The integer number for the handle of the selected sequence: %i", HandleToInt(SelectedSequence()))
end
``` |
