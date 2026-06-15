---
title: "Version()"
description: "The Version Lua function returns the software version."
product: grandma3
version: "2.3"
lang: en
sourceUrl: "https://help.malighting.com/grandMA3/2.3/HTML/lua_objectfree_version.html"
scrapedAt: "2026-06-15T18:25:35.704Z"
pagefind: false
---
## Description

The Version Lua function returns the software version.

## Arguments

This function does not accept any arguments.

## Return

- **String**:\
  The returned string is the version of the grandMA3 software.

## Example

This example prints the software version in the Command Line History:

|                                                                             |
| --------------------------------------------------------------------------- |
| [Copy Code](javascript:void\(0\))Lua                                        |
| ```
return function()
    Printf("Software version: %s", Version())
end
``` |
