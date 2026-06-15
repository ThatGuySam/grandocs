---
title: "GetDMXValue(integer[, integer, boolean])"
description: "The GetDMXValue Lua function returns a number indicating the DMX value of a specified DMX address."
product: grandma3
version: "2.3"
lang: en
sourceUrl: "https://help.malighting.com/grandMA3/2.3/HTML/lua_objectfree_getdmxvalue.html"
scrapedAt: "2026-06-15T18:25:31.647Z"
pagefind: false
---
## Description

The **GetDMXValue** Lua function returns a number indicating the DMX value of a specified DMX address.

## Arguments

- **Integer**:\
  The integer is the DMX address. This value should be from 1 to 512 if a universe integer is provided. If a universe is not provided, this should be the absolute DMX address ranging from 1 to 524 288.

- **Integer** (optional):\
  The integer is the universe number.

- **Boolean** (optional):\
  The boolean indicates if the returned value is in percent or DMX value.

  - True:\
    The returned value is in percent. The range is 0 to 100.
  - False:\
    The returned value is in DMX value. The range is 0 to 255.

## Return

- **Integer** or **nil**:\
  The returned integer value corresponds with the value of the selected DMX address or nil if the DMX address is not granted.

## Example

This example prints the value for DMX address 2 in Universe 1 (if it is granted):

|                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [Copy Code](javascript:void\(0\))Lua                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| ```
return function()
    -- This prints the value of DMX address 2 in universe 1 in a range of 0 to 255
    local address = 2       -- The DMX address
    local universe = 1      -- The DMX universe
    local percent = false   -- Readout in percent or DMX value
    local value = GetDMXValue(address, universe, percent)
    if value == nil then
        Printf("The DMX address did not return a valid value")
    else
        Printf("DMX address %i.%03d has a value of %03d", universe, address, value)
    end
end
``` |
