---
title: "GetFocus()"
description: "The GetFocus Lua function returns a handle to the object that currently has focus in the UI."
product: grandma3
version: "2.3"
lang: en
sourceUrl: "https://help.malighting.com/grandMA3/2.3/HTML/lua_objectfree_getfocus.html"
scrapedAt: "2026-06-15T18:25:31.782Z"
pagefind: false
---
## Description

The **GetFocus** Lua function returns a handle to the object that currently has focus in the UI.

## Arguments

This function does not accept any arguments.

## Return

- **Handle**:\
  The returned handle to the object.

## Example

This example prints the data connected to the handle. It uses the Dump() function:

# Dump()

The **Dump()** function returns a string with information about the object, for instance, the name, class, path of the object, its properties, and children.

Learn more in the [Dump() topic](/grandma3/2-3/lua_object_dump/).

|                                                                                                                                                                                                                                                                 |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [Copy Code](javascript:void\(0\))Lua                                                                                                                                                                                                                            |
| ```
return function()
    -- This example dumps all information about the object who currently got focus.
    Printf("=============== START OF DUMP ===============")
    GetFocus():Dump()
    Printf("================ END OF DUMP ================")
end
``` |
