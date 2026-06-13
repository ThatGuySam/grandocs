---
title: "SelectedTimecode()"
description: "The SelectedTimecodeua function returns the handle of the selected timecode object."
product: grandma3
version: "2.4"
lang: en
sourceUrl: "https://help.malighting.com/grandMA3/2.4/HTML/lua_objectfree_selectedtimecode.html"
scrapedAt: "2026-06-12T21:25:05.718Z"
---
## Description

The **SelectedTimecode** Lua function returns the handle of the selected timecode object.

The selected timecode object is the Timecode show currently selected in the Timecodes pool. Learn more in the [Timecodes topics](/grandma3/2-4/timecode/).

## Arguments

This function does not accept any arguments.

## Return

- **Handle**:\
  The returned handle for the selected timecode object.

## Example

This example prints all information about the selected timecode show in the Command Line History using the Dump() function:

# Dump()

The **Dump()** function returns a string with information about the object, for instance, the name, class, path of the object, its properties, and children.

Learn more in the [Dump() topic](/grandma3/2-4/lua_object_dump/).

|                                                                                                                                                                                                                                                                                                                                                            |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [Copy Code](javascript:void\(0\))Lua                                                                                                                                                                                                                                                                                                                       |
| ```
return function ()
    -- The following prints the dump for the selected timecode object
    local myTimecodeShow = SelectedTimecode()
    if myTimecodeShow ~= nil then
        Printf("=============== START OF DUMP ===============")
        myTimecodeShow:Dump()
        Printf("================ END OF DUMP ================")
    end
end
``` |
