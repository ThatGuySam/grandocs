---
title: "GetSubfixtureCount()"
description: "The GetSubfixtureCountua function returns the total number of fixtures that are patched within the show file."
product: grandma3
version: "2.4"
lang: en
sourceUrl: "https://help.malighting.com/grandMA3/2.4/HTML/lua_objectfree_getsubfixturecount.html"
scrapedAt: "2026-06-12T21:25:03.826Z"
---
## Description

The **GetSubfixtureCount** Lua function returns the total number of fixtures that are patched within the show file.

## Arguments

This function does not accept any arguments.

## Return

- **Integer**:\
  The returned integer number represents the total amount of patched fixtures on all the stages in the show file.

## Example

This example prints the total number of patched fixtures in the Command Line History:

|                                                                                                         |
| ------------------------------------------------------------------------------------------------------- |
| [Copy Code](javascript:void\(0\))Lua                                                                    |
| ```
return function ()
    Printf('Total number of patched fixtures: %i', GetSubfixtureCount())
end
``` |
