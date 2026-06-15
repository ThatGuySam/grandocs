---
title: "GetShowFileStatus()"
description: "The GetShowFileStatus Lua function returns a string with the current device's show file status, for example, \"NoShow\", \"ShowLoaded\", \"ShowDownloaded\", \"ShowSavi"
product: grandma3
version: "2.3"
lang: en
sourceUrl: "https://help.malighting.com/grandMA3/2.3/HTML/lua_objectfree_getshowfilestatus.html"
scrapedAt: "2026-06-15T18:25:32.615Z"
pagefind: false
---
## Description

The **GetShowFileStatus** Lua function returns a string with the current device's show file status, for example, "NoShow", "ShowLoaded", "ShowDownloaded", "ShowSaving", and "DataNegotiationActive".

## Arguments

This function does not accept any arguments.

## Return

- **String**:\
  The returned string is the enum string from "Enums.ShowFileStatus" that matches the current status.

## Example

This example prints the current device's show file status in the Command Line History:

|                                                                                                                              |
| ---------------------------------------------------------------------------------------------------------------------------- |
| [Copy Code](javascript:void\(0\))Lua                                                                                         |
| ```
return function ()
    -- Prints the current showfile status
    Printf("ShowfileStatus: "..GetShowFileStatus())
end
``` |
