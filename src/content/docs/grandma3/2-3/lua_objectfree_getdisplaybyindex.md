---
title: "GetDisplayByIndex(integer)"
description: "The GetDisplayByIndex Lua function returns a handle to the display object matching the provided index number."
product: grandma3
version: "2.3"
lang: en
sourceUrl: "https://help.malighting.com/grandMA3/2.3/HTML/lua_objectfree_getdisplaybyindex.html"
scrapedAt: "2026-06-15T18:25:31.427Z"
pagefind: false
---
## Description

The **GetDisplayByIndex** Lua function returns a handle to the display object matching the provided index number.

## Arguments

- **Integer**:\
  This function needs an index number for one of the displays.

## Return

- **Handle**:\
  The returned handle to the display object.

## Example

This example prints the data connected to the handle. It uses the Dump() function:

# Dump()

The **Dump()** function returns a string with information about the object, for instance, the name, class, path of the object, its properties, and children.

Learn more in the [Dump() topic](/grandma3/2-3/lua_object_dump/).

|                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [Copy Code](javascript:void\(0\))Lua                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| ```
return function()
    -- Get the index number for "Display 1"
    local displayIndex = GetDisplayCollect()["Display 1"].INDEX
    -- return error text in case the index number is nil
    if displayIndex == nil then
        ErrPrintf('Something went wrong. It appears that there is no "display 1"')
        return
    end
    -- Dump all information about the display with the index number
    Printf("=============== START OF DUMP ===============")
    GetDisplayByIndex(displayIndex):Dump()
    Printf("================ END OF DUMP ================")
end
``` |

## Subtopics

- [GetDisplayCollect() topic](/grandma3/2-3/lua_objectfree_getdisplaycollect/)
