---
title: "DefaultDisplayPositions()"
description: "The DefaultDisplayPositions Lua function returns the handle of the conventional default display positions, which contains the first seven screens as children."
product: grandma3
version: "2.3"
lang: en
sourceUrl: "https://help.malighting.com/grandMA3/2.3/HTML/lua_objectfree_defaultdisplaypositions.html"
scrapedAt: "2026-06-15T18:25:30.030Z"
pagefind: false
---
## Description

The **DefaultDisplayPositions** Lua function returns the handle of the conventional default display positions, which contains the first seven screens as children.

For example, whether the command line, view bar, and encoder/playback bar are displayed.

## Argument

This function does not have any arguments.

## Return

- **Handle**:\
  The function returns a handle to the command line object.

## Examples

This example prints all the information about display 1 (child 1 of the default displays) using the [](/grandma3/2-3/lua_object_dump/)Dump()**** function:

# Dump()

The **Dump()** function returns a string with information about the object, for instance, the name, class, path of the object, its properties, and children.

Learn more in the [Dump() topic](/grandma3/2-3/lua_object_dump/).

|                                                                                                                                                                                                                                                                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [Copy Code](javascript:void\(0\))Lua                                                                                                                                                                                                                                                                                                                     |
| ```
return function()
    -- Store a handle to display 1 (child 1 of the default displays).
    local display1 = DefaultDisplayPositions():Children()[1]
    -- Dumps information about the display.
    Printf("=============== START OF DUMP ===============")
    display1:Dump()
    Printf("================ END OF DUMP ================")
end
``` |

 This example toggles the [Control Bar](/grandma3/2-3/ws_ui_control_bar/) for display 1 with the help of the DefaultDisplayPositions object:

|                                                                                                                                                                                                                                                                   |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [Copy Code](javascript:void\(0\))Lua                                                                                                                                                                                                                              |
| ```
return function()
    -- Store a handle to display 1 (child 1 of the default displays).
    local display1 = DefaultDisplayPositions():Children()[1]
    -- Toggles the 'ShowMainMenu' setting.
    display1.ShowMainMenu = not display1.ShowMainMenu
end
``` |
