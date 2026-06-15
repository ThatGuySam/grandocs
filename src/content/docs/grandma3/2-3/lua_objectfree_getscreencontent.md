---
title: "GetScreenContent(handle)"
description: "The GetScreenContent Lua function returns a handle to the screen content based on a provided handle to a screen configuration."
product: grandma3
version: "2.3"
lang: en
sourceUrl: "https://help.malighting.com/grandMA3/2.3/HTML/lua_objectfree_getscreencontent.html"
scrapedAt: "2026-06-15T18:25:32.505Z"
pagefind: false
---
## Description

The **GetScreenContent** Lua function returns a handle to the screen content based on a provided handle to a screen configuration.

## Arguments

- **Handle**:\
  This must be a handle to a screen configuration.

## Return

- **Handle**:\
  The returned handle to the screen content.

## Example

This example prints the data connected to the screen content handle. It uses the CurrentScreenConfig() and Dump() functions:

The **CurrentScreenConfig** Lua function returns a handle to the current users' screen configuration. Learn more in the [CurrentScreenConfig topic](/grandma3/2-3/lua_objectfree_currentscreenconfig/).

# Dump()

The **Dump()** function returns a string with information about the object, for instance, the name, class, path of the object, its properties, and children.

Learn more in the [Dump() topic](/grandma3/2-3/lua_object_dump/).

|                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [Copy Code](javascript:void\(0\))Lua                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| ```
return function()
    -- Create a handle for the current screen configuration.
    local myCurrentScreenConfig = CurrentScreenConfig()
    -- Create a handle for the screen content based on the screen configuration.
    local myScreenContent = GetScreenContent(myCurrentScreenConfig)
    -- Print the Dump of the handle.
    Printf("=============== START OF DUMP ===============")
    myScreenContent:Dump()
    Printf("================ END OF DUMP ================")
end
``` |
