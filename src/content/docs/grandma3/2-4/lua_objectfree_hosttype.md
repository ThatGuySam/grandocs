---
title: "HostType()"
description: "The HostType Lua function returns a string with the host type of the device where the plugin is executed (for example, \"Console\" or \"onPC\")."
product: grandma3
version: "2.4"
lang: en
sourceUrl: "https://help.malighting.com/grandMA3/2.4/HTML/lua_objectfree_hosttype.html"
scrapedAt: "2026-06-12T21:25:04.691Z"
---
## Description

The **HostType** Lua function returns a string with the host type of the device where the plugin is executed (for example, "Console" or "onPC").

## Arguments

This function does not accept any arguments.

## Return

- **String**:\
  The returned string is the host type of the device.

## Example

This example prints the host type of the device in the Command Line History:

|                                                                          |
| ------------------------------------------------------------------------ |
| [Copy Code](javascript:void\(0\))Lua                                     |
| ```
return function()
    Printf("The HostType is "..HostType())
end
``` |
