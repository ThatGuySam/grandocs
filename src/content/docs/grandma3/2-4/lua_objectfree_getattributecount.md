---
title: "GetAttributeCount()"
description: "The GetAttributeCount Lua function returns the total number of attribute definitions in the show."
product: grandma3
version: "2.4"
lang: en
sourceUrl: "https://help.malighting.com/grandMA3/2.4/HTML/lua_objectfree_getattributecount.html"
scrapedAt: "2026-06-12T21:25:02.649Z"
---
## Description

The **GetAttributeCount** Lua function returns the total number of attribute definitions in the show.

## Arguments

This function does not accept any arguments.

## Return

- **Integer**:\
  The returned integer number represents the total amount of attribute definitions in the show file.

## Example

This example prints the returned number in the Command Line History.

|                                                                                        |
| -------------------------------------------------------------------------------------- |
| [Copy Code](javascript:void\(0\))Lua                                                   |
| ```
return function()
    Printf("Attribute count is %i", GetAttributeCount())
end
``` |
