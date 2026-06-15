---
title: "Count(handle)"
description: "The Count function returns an integer number indicating the number of child objects."
product: grandma3
version: "2.3"
lang: en
sourceUrl: "https://help.malighting.com/grandMA3/2.3/HTML/lua_object_count.html"
scrapedAt: "2026-06-15T18:25:35.984Z"
pagefind: false
---
## Description

The **Count** function returns an integer number indicating the number of child objects.

## Arguments

- **Handle:**\
  The function takes a handle of the type "light\_userdata" as an argument.\
  It can be omitted when using the colon notation on an object.

  The Colon Notation is a way to omit the handle as the first argument when using the Object functions.

  This is the general syntax with the colon notation: object:function()

  This is the general syntax with standard handle notation: object.function(object)

  Learn more in the [Lua Functions - Object API topic](/grandma3/2-3/lua_object/).

## Return

- **Integer**:\
  The function returns an integer indicating the number of children of the object.

## Examples

This example prints the selected sequence's number of children (cues).

|                                                                                                                                                            |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [Copy Code](javascript:void\(0\))Lua                                                                                                                       |
| ```
return function()
    local numberChildren = SelectedSequence():Count()
    Printf("The selected Sequence has " .. numberChildren .. " cues.")
end
``` |
