---
title: "ShowData()"
description: "ShowData is an object-free function that returns a handle to the object at position Root/ShowData."
product: grandma3
version: "2.3"
lang: en
sourceUrl: "https://help.malighting.com/grandMA3/2.3/HTML/lua_objectfree_showdata.html"
scrapedAt: "2026-06-15T18:25:35.141Z"
pagefind: false
---
## Description

ShowData is an object-free function that returns a handle to the object at position Root/ShowData.

## Arguments

This function does not accept any arguments.

## Return

- **Handle**:\
  The function returns a handle to the ShowData object.

Example

This simple example prints the information of the ShowData object in the Command Line History using the Dump() function:

# Dump()

The **Dump()** function returns a string with information about the object, for instance, the name, class, path of the object, its properties, and children.

Learn more in the [Dump() topic](/grandma3/2-3/lua_object_dump/).

|                                                                                                                                                                                                                                                    |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [Copy Code](javascript:void\(0\))Lua                                                                                                                                                                                                               |
| ```
return function ()
    -- The following prints the dump for the object for the show data
    Printf("=============== START OF DUMP ===============")
    ShowData():Dump()
    Printf("================ END OF DUMP ================")
end
``` |
