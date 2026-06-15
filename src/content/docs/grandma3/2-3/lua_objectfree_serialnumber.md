---
title: "SerialNumber()"
description: "The SerialNumber Lua function returns the serial number of the grandMA3 hardware or grandMA3 onPC."
product: grandma3
version: "2.3"
lang: en
sourceUrl: "https://help.malighting.com/grandMA3/2.3/HTML/lua_objectfree_serialnumber.html"
scrapedAt: "2026-06-15T18:25:34.780Z"
pagefind: false
---
## Description

The **SerialNumber** Lua function returns the serial number of the grandMA3 hardware or grandMA3 onPC.

## Arguments

This function does not accept any arguments.

## Return

- **String**:\
  The returned string is the serial number of the grandMA3 hardware or grandMA3 onPC.

## Example

This example prints the serial number in the Command Line History:

|                                                                               |
| ----------------------------------------------------------------------------- |
| [Copy Code](javascript:void\(0\))Lua                                          |
| ```
return function()
    Printf("Serial number: " .. SerialNumber())
end
``` |
