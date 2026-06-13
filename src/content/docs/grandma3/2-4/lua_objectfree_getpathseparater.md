---
title: "GetPathSeparator()"
description: "The GetPathSeparator function returns a string with the path separator for the operating system."
product: grandma3
version: "2.4"
lang: en
sourceUrl: "https://help.malighting.com/grandMA3/2.4/HTML/lua_objectfree_getpathseparater.html"
scrapedAt: "2026-06-12T21:25:03.380Z"
---
## Description

The **GetPathSeparator** function returns a string with the path separator for the operating system.

## Arguments

This function does not accept any arguments.

## Return

- **String**:\
  The string is a single character indicating the path separator based on the operating system.

## Example

This example prints the path separator:

|                                                                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| [Copy Code](javascript:void\(0\))Lua                                                                                                                                                                               |
| ```
return function()
    --- This prints the path seperator. It is different between a Linux and macOS (/) and a Windows (\) operating system.
    Printf("The path seperator is " .. GetPathSeparator())
end
``` |
