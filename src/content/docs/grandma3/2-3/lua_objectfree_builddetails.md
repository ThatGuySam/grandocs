---
title: "BuildDetails()"
description: "The BuildDetails function returns a table with key-value pairs about the software build."
product: grandma3
version: "2.3"
lang: en
sourceUrl: "https://help.malighting.com/grandMA3/2.3/HTML/lua_objectfree_builddetails.html"
scrapedAt: "2026-06-15T18:25:28.997Z"
pagefind: false
---
## Description

The BuildDetails function returns a table with key-value pairs about the software build.

## Arguments

This function does not accept any arguments.

## Return

- **Build details**:\
  This is the table with key-value pairs. These are the possible keys in the table:

  - **GitDate**: String with the date for the repository branch of the software.
  - **GitHead**: String with the branch of the repository.
  - **GitHash**: String with the hash for the repository.
  - **CompileDate**: String with the date for the compile.
  - **CompileTime**: String with the time for the compile.
  - **BigVersion**: String indicating the software version.
  - **SmallVersion**: String with the small version number of the software. Devices that only listen to a DMX data stream need to have this version to "understand" the streaming data.
  - **HostType**: String with the host type, for instance, "Console" or "onPC".
  - **HostSubType**: String with the host sub-type, for instance, "FullSize" or "Light".
  - **CodeType**: String showing the type of code, for instance, "Release".
  - **IsRelease**: Boolean indicating if the software is a release version.

## Example

This example prints the content of the BuildDetails table:

|                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [Copy Code](javascript:void\(0\))Lua                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| ```
return function()
    --Store the build detials table
    local myBuild = BuildDetails()
    --Print the content of the table
    Printf("GitDate: " .. myBuild.GitDate)
    Printf("GitHead: " .. myBuild.GitHead)
    Printf("GitHash: " .. myBuild.GitHash)
    Printf("CompileDate: " .. myBuild.CompileDate)
    Printf("CompileTime: " .. myBuild.CompileTime)
    Printf("BigVersion: " .. myBuild.BigVersion)
    Printf("SmallVersion: " .. myBuild.SmallVersion)
    Printf("HostType: " .. myBuild.HostType)
    Printf("HostSubType: " .. myBuild.HostSubType)
    Printf("CodeType: " .. myBuild.CodeType)
    Printf("IsRelease: " .. tostring(myBuild.IsRelease))
end
``` |

### Related Lua Functions

- [Version()](/grandma3/2-3/lua_objectfree_version/)
- [HostType()](/grandma3/2-3/lua_objectfree_hosttype/)
- [HostSubType()](/grandma3/2-3/lua_objectfree_hostsubtype/)
