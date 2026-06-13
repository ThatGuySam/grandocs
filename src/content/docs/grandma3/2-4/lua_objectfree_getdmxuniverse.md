---
title: "GetDMXUniverse(integer[, boolean])"
description: "The GetDMXUniverseua function returns a table with the DMX channels and their current value."
product: grandma3
version: "2.4"
lang: en
sourceUrl: "https://help.malighting.com/grandMA3/2.4/HTML/lua_objectfree_getdmxuniverse.html"
scrapedAt: "2026-06-12T21:25:02.945Z"
---
## Description

The **GetDMXUniverse** Lua function returns a table with the DMX channels and their current value.

## Arguments

- **Integer**:\
  The integer is the universe number. The valid range is 1 to 1024.

- **Boolean** (optional):\
  The boolean indicates if the returned value is in percent or DMX value.

  - True:\
    The returned value is in percent. The range is 0 to 100.
  - False:\
    The returned value is in DMX value. The range is 0 to 255.

## Return

- **Table**:\
  The returned table lists all the DMX addresses and the corresponding values.

\-- OR --

- **Nil**:\
  Nil is returned if the universe is not granted or the input value is out of range.\
   

## Example

This example prints the table in a list for DMX universe 1 (if it is granted):

|                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [Copy Code](javascript:void\(0\))Lua                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| ```
return function()
    -- This gets a table for universe 1 with the returned value in percent.
    local tableDMXUniverse = GetDMXUniverse(1,true)
    -- Check the returned table and print information if nil.
    if tableDMXUniverse == nil then
        Printf("No value is returned. The univer is not granted or input is out of range")
        return
    end
    -- Prints the table if not nil.
    for addr, value in ipairs(tableDMXUniverse) do
        Printf("DMX Addr: %i - DMX value : %i", addr, value)
    end
end
``` |
