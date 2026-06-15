---
title: "SelectionCount()"
description: "The SelectionCount Lua function returns a number indicating the total amount of currently selected fixtures."
product: grandma3
version: "2.3"
lang: en
sourceUrl: "https://help.malighting.com/grandMA3/2.3/HTML/lua_objectfree_selectioncount.html"
scrapedAt: "2026-06-15T18:25:34.639Z"
pagefind: false
---
## Description

The **SelectionCount** Lua function returns a number indicating the total amount of currently selected fixtures.

## Arguments

This function does not accept any arguments.

## Return

- **Integer**:\
  The function returns an integer number depicting the total amount of fixtures in the current selection.\
  If there is no selection, then it returns 0.

## Example

This example prints the number of fixtures in the current selection to the Command Line History:

|                                                                                                               |
| ------------------------------------------------------------------------------------------------------------- |
| [Copy Code](javascript:void\(0\))Lua                                                                          |
| ```
return function()
    Printf('Number of fixtures in the current selection: %i', SelectionCount())
end
``` |
