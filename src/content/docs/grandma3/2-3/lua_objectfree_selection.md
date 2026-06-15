---
title: "Selection()"
description: "The Selection Lua function returns a handle to the object holding the current selection of fixtures."
product: grandma3
version: "2.3"
lang: en
sourceUrl: "https://help.malighting.com/grandMA3/2.3/HTML/lua_objectfree_selection.html"
scrapedAt: "2026-06-15T18:25:34.557Z"
pagefind: false
---
## Description

The Selection Lua function returns a handle to the object holding the current selection of fixtures.

## Arguments

This function does not accept any arguments.

## Return

- **Handle**:\
  The function returns a handle to the Selection object.

## Example

This example prints the information of the Selection object in the Command Line History using the Dump() function:

# Dump()

The **Dump()** function returns a string with information about the object, for instance, the name, class, path of the object, its properties, and children.

Learn more in the [Dump() topic](/grandma3/2-3/lua_object_dump/).

|                                                                                                                                                                                                                                                     |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [Copy Code](javascript:void\(0\))Lua                                                                                                                                                                                                                |
| ```
return function ()
    -- The following prints the dump for the object for the selection
    Printf("=============== START OF DUMP ===============")
    Selection():Dump()
    Printf("================ END OF DUMP ================")
end
``` |
