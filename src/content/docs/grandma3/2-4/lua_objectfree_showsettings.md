---
title: "ShowSettings()"
description: "ShowSettings is an object-free function that returns a handle to the object at Root/ShowData/ShowSettings."
product: grandma3
version: "2.4"
lang: en
sourceUrl: "https://help.malighting.com/grandMA3/2.4/HTML/lua_objectfree_showsettings.html"
scrapedAt: "2026-06-12T21:25:06.323Z"
---
## Description

ShowSettings is an object-free function that returns a handle to the object at Root/ShowData/ShowSettings.

## Arguments

This function does not accept any arguments.

## Return

- **Handle**:\
  The function returns a handle to the ShowSettings object.

## Example

This simple example prints the information of the ShowSettings object using the Dump() function:

# Dump()

The **Dump()** function returns a string with information about the object, for instance, the name, class, path of the object, its properties, and children.

Learn more in the [Dump() topic](/grandma3/2-4/lua_object_dump/).

|                                                                                                                                                                                                                                                            |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [Copy Code](javascript:void\(0\))Lua                                                                                                                                                                                                                       |
| ```
return function ()
    -- The following prints the dump for the object for the show settings
    Printf("=============== START OF DUMP ===============")
    ShowSettings():Dump()
    Printf("================ END OF DUMP ================")
end
``` |
