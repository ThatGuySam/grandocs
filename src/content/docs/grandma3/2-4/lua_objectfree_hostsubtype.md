---
title: "HostSubType()"
description: "The HostSubType Lua function returns a string with the host sub type of the station where the plugin is executed (for example, \"FullSize\", \"Light\", \"RPU\", \"onPC"
product: grandma3
version: "2.4"
lang: en
sourceUrl: "https://help.malighting.com/grandMA3/2.4/HTML/lua_objectfree_hostsubtype.html"
scrapedAt: "2026-06-12T21:25:04.551Z"
---
## Description

The **HostSubType** Lua function returns a string with the host sub type of the station where the plugin is executed (for example, "FullSize", "Light", "RPU", "onPCRackUnit", "Undefined").

## Arguments

This function does not accept any arguments.

## Return

- **String**:\
  The returned string is the host sub-type of the device.

## Example

This example prints the host sub-type of the station in the Command Line History:

|                                                                                |
| ------------------------------------------------------------------------------ |
| [Copy Code](javascript:void\(0\))Lua                                           |
| ```
return function()
    Printf("The HostSubType is "..HostSubType())
end
``` |
