---
title: "HostOS()"
description: "The HostOS Lua function returns a string with the type of operating system of the device where the plugin is executed (for instance, \"Windows\", \"Linux\", or \"Mac"
product: grandma3
version: "2.3"
lang: en
sourceUrl: "https://help.malighting.com/grandMA3/2.3/HTML/lua_objectfree_hostos.html"
scrapedAt: "2026-06-15T18:25:33.360Z"
pagefind: false
---
## Description

The **HostOS** Lua function returns a string with the type of operating system of the device where the plugin is executed (for instance, "Windows", "Linux", or "Mac").

## Arguments

This function does not accept any arguments.

## Return

- **String**:\
  The returned string is the operating system of the grandMA3 hardware or grandMA3 onPC computer.

## Example

This example prints the operating system of the device in the Command Line History:

|                                                                      |
| -------------------------------------------------------------------- |
| [Copy Code](javascript:void\(0\))Lua                                 |
| ```
return function()
    Printf("The HostOS is "..HostOS())
end
``` |
