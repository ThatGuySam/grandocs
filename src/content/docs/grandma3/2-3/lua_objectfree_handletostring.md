---
title: "HandleToStr(handle)"
description: "The HandleToStr Lua function converts a handle into a string in a hexadecimal number format."
product: grandma3
version: "2.3"
lang: en
sourceUrl: "https://help.malighting.com/grandMA3/2.3/HTML/lua_objectfree_handletostring.html"
scrapedAt: "2026-06-15T18:25:33.270Z"
pagefind: false
---
## Description

The **HandleToStr** Lua function converts a handle into a string in a hexadecimal number format.

See the [Handle topic](/grandma3/2-3/lua_handle/) for more info regarding handles and links to other related functions.

## Arguments

- **Handle**:\
  The handle of the object.

## Return

- **String**:\
  The returned string is the handle number converted to a hexadecimal format.

## Example

This example prints the handle hex number for the selected sequence. It also converts the string back to a handle and uses this to print the name of the sequence:

|                                                                                                                                                                       |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [Copy Code](javascript:void\(0\))Lua                                                                                                                                  |
| ```
return function()
    Printf("The string (in hex format with 'H#' in front) for the handle of the selected sequence: %s",HandleToStr(SelectedSequence()))
end
``` |
