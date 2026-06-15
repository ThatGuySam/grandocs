---
title: "SelectedFeature()"
description: "The SelectedFeature Lua function returns the handle of the selected feature."
product: grandma3
version: "2.3"
lang: en
sourceUrl: "https://help.malighting.com/grandMA3/2.3/HTML/lua_objectfree_selectedfeature.html"
scrapedAt: "2026-06-15T18:25:34.354Z"
pagefind: false
---
## Description

The **SelectedFeature** Lua function returns the handle of the selected feature.

## Arguments

This function does not accept any arguments.

## Return

- **Handle**:\
  The returned handle for the selected feature.

## Example

This example prints all information about the selected feature in the Command Line History using the Dump() function:

# Dump()

The **Dump()** function returns a string with information about the object, for instance, the name, class, path of the object, its properties, and children.

Learn more in the [Dump() topic](/grandma3/2-3/lua_object_dump/).

|                                                                                                                                                                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [Copy Code](javascript:void\(0\))Lua                                                                                                                                                                                                                     |
| ```
return function ()
    -- The following prints the dump for the selected feature object
    Printf("=============== START OF DUMP ===============")
    SelectedFeature():Dump()
    Printf("================ END OF DUMP ================")
end
``` |
