---
title: "GetUIObjectAtPosition(integer, table)"
description: "The GetUIObjectAtPosition Lua function returns the handle of the UI Object at a specified position on a specified display."
product: grandma3
version: "2.3"
lang: en
sourceUrl: "https://help.malighting.com/grandMA3/2.3/HTML/lua_objectfree_getuiobjectatposition.html"
scrapedAt: "2026-06-15T18:25:33.073Z"
pagefind: false
---
## Description

The **GetUIObjectAtPosition** Lua function returns the handle of the UI Object at a specified position on a specified display.

## Argument

- **Integer**:\
  The integer should be the index number of the display with the UI object.

- **Table**:\
  The table must have two elements with the following keys:

  - x: This is the X position on the display. The value must be a number indicating the desired pixel position. It is counted from the left side of the display.
  - y: This is the Y position on the display. The value must be a number indicating the desired pixel position. It is counted from the top of the display.

## Return

- **Handle** | **nil**:\
  If a UI object is at the provided position, then the handle to the object is returned. Otherwise, it returns nil.

## Example

This example prints the Dump of the UIObject at a specific position on display 1. It also uses the DrawPointer function to draw a red pointer at the position.

# Dump()

The **Dump()** function returns a string with information about the object, for instance, the name, class, path of the object, its properties, and children.

Learn more in the [Dump() topic](/grandma3/2-3/lua_object_dump/).

The DrawPointer function draws a red pointer at a display. Learn more about it in the [DrawPointer() topic](/grandma3/2-3/lua_objectfree_drawpointer/).

|                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [Copy Code](javascript:void\(0\))Lua                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| ```
return function()
    -- Get the index number for "Display 1"
    local displayIndex = GetDisplayCollect()["Display 1"].INDEX
    -- Create a table with X and Y position
    local positionTable = {}
    positionTable.x = 1000
    positionTable.y = 500
    -- Get the UI object handle
    local uiObjectAtPositionHandle = GetUIObjectAtPosition(displayIndex,positionTable)
    -- Dump all information about the display with the index number if not nil
    if uiObjectAtPositionHandle == nil then
        Printf("The returned value was not a valid handle.")
        return
    end
    -- Draw a pointer at the posiiton for 5 seconds
    DrawPointer(displayIndex,positionTable,5000)
    --Dump of the UIObject
    Printf("=============== START OF DUMP ===============")
    uiObjectAtPositionHandle:Dump()
    Printf("================ END OF DUMP ================")
end
``` |
