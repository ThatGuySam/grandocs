---
title: "GetTopOverlay()"
description: "The GetTopOverlay Lua function returns a handle for the overlay at the top of the display with the provided index number. Overlay is the internal name for what "
product: grandma3
version: "2.4"
lang: en
sourceUrl: "https://help.malighting.com/grandMA3/2.4/HTML/lua_objectfree_gettopoverlay.html"
scrapedAt: "2026-06-12T21:25:04.111Z"
---
## Description

The **GetTopOverlay** Lua function returns a handle for the overlay at the top of the display with the provided index number. Overlay is the internal name for what is called pop-ups or menus in the rest of this manual.

## Argument

This function does not have any arguments.

## Return

- **Handle** | **nil**:\
  The function returns a handle to the top overlay UI object if there is one.

## Example

This example uses the D[](/grandma3/2-4/lua_object_dump/)ump() function to show information about the MenuSelector pop-up - it is the one opening when pressing the [Menu key](/grandma3/2-4/key_menu/).

# Dump()

The **Dump()** function returns a string with information about the object, for instance, the name, class, path of the object, its properties, and children.

Learn more in the [Dump() topic](/grandma3/2-4/lua_object_dump/).

|                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| [Copy Code](javascript:void\(0\))Lua                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| ```
return function()
    -- Open the MenuSelector overlay.
    Cmd('Menu "MenuSelector')
    -- Add a small delay.
    coroutine.yield(0.5)
    -- Get the handle for the overlay on the display with index 1.
    local overlayHandle = GetTopOverlay(1)
    -- Add a small delay.
    coroutine.yield(0.5)
    -- Close the MenuSelector overlay.
    Cmd('Menu "MenuSelector')
    -- Check if there is a handle and print appropriate feedback.
    if overlayHandle ~= nil then
        Printf("=============== START OF DUMP ===============")
        overlayHandle:Dump()
        Printf("================ END OF DUMP ================")
    else
        ErrPrintf("The Overlay UI object could not be found.")
    end
end
``` |
