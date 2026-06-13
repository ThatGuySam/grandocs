---
title: "GetUIChannelCount()"
description: "The GetUIChannelCountua function returns a number indicating the total amount of UI channels."
product: grandma3
version: "2.4"
lang: en
sourceUrl: "https://help.malighting.com/grandMA3/2.4/HTML/lua_objectfree_getuichannelcount.html"
scrapedAt: "2026-06-12T21:25:04.113Z"
---
## Description

The **GetUIChannelCount** Lua function returns a number indicating the total amount of UI channels.

## Arguments

This function does not accept any arguments.

## Return

- **Integer**:\
  The function returns an integer number depicting the total amount of UI channels.

## Example

This example prints the number of UI channels to the Command Line History:

|                                                                                                  |
| ------------------------------------------------------------------------------------------------ |
| [Copy Code](javascript:void\(0\))Lua                                                             |
| ```
return function()
    Printf("The number of UI channels is " .. GetUIChannelCount())
end
``` |
