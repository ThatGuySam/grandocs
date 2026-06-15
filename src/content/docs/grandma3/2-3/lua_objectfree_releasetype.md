---
title: "ReleaseType()"
description: "The ReleaseType Lua function returns a string with the type of release for the MA software. All the software versions available from MA Lighting will return \"Re"
product: grandma3
version: "2.3"
lang: en
sourceUrl: "https://help.malighting.com/grandMA3/2.3/HTML/lua_objectfree_releasetype.html"
scrapedAt: "2026-06-15T18:25:34.273Z"
pagefind: false
---
## Description

The ReleaseType Lua function returns a string with the type of release for the MA software. All the software versions available from MA Lighting will return "Release". Internally and during development, there can be other release types.

## Arguments

This function does not accept any arguments.

## Return

- **String**:\
  The returned string is the release type of the grandMA3 software.

## Example

This example prints the release type in the Command Line History:

|                                                                                |
| ------------------------------------------------------------------------------ |
| [Copy Code](javascript:void\(0\))Lua                                           |
| ```
return function()
    Printf("The ReleaseType is "..ReleaseType())
end
``` |
