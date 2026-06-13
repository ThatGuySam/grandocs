---
title: "SelectedTimer()"
description: "The SelectedTimerua function returns the handle of the selected timer object."
product: grandma3
version: "2.4"
lang: en
sourceUrl: "https://help.malighting.com/grandMA3/2.4/HTML/lua_objectfree_selectedtimer.html"
scrapedAt: "2026-06-12T21:25:05.720Z"
---
## Description

The **SelectedTimer** Lua function returns the handle of the selected timer object.

The selected timer object is the Timer currently selected in the Timers pool. Timers are stopwatch and timers that can be used to measure time. Learn more in the [Timers topics](/grandma3/2-4/timers/).

## Arguments

This function does not accept any arguments.

## Return

- **Handle**:\
  The returned handle for the selected timer object.

## Example

This example prints all information about the selected timer in the Command Line History using the Dump() function:

# Dump()

The **Dump()** function returns a string with information about the object, for instance, the name, class, path of the object, its properties, and children.

Learn more in the [Dump() topic](/grandma3/2-4/lua_object_dump/).

|                                                                                                                                                                                                                                                                                                                                 |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [Copy Code](javascript:void\(0\))Lua                                                                                                                                                                                                                                                                                            |
| ```
return function ()
    -- The following prints the dump for the selected timer object
    local myTimer = SelectedTimer()
    if myTimer ~= nil then
        Printf("=============== START OF DUMP ===============")
        myTimer:Dump()
        Printf("================ END OF DUMP ================")
    end
end
``` |
