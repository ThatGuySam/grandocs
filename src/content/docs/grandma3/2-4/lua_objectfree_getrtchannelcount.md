---
title: "GetRTChannelCount()"
description: "The GetRTChannelCountua function returns a number indicating the total amount of RT channels."
product: grandma3
version: "2.4"
lang: en
sourceUrl: "https://help.malighting.com/grandMA3/2.4/HTML/lua_objectfree_getrtchannelcount.html"
scrapedAt: "2026-06-12T21:25:03.537Z"
---
## Description

The **GetRTChannelCount** Lua function returns a number indicating the total amount of RT channels.

## Arguments

This function does not accept any arguments.

## Return

- **Integer**:\
  The function returns an integer number depicting the total amount of RT channels.

## Example

This example prints the number of RT channels to the Command Line History:

|                                                                                                  |
| ------------------------------------------------------------------------------------------------ |
| [Copy Code](javascript:void\(0\))Lua                                                             |
| ```
return function()
    Printf("The number of RT channels is " .. GetRTChannelCount())
end
``` |
