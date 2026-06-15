---
title: "Time()"
description: "The Time function returns the time (in seconds) the station has been on, as a number (float). It is basically a stopwatch that starts when the grandMA3 applicat"
product: grandma3
version: "2.3"
lang: en
sourceUrl: "https://help.malighting.com/grandMA3/2.3/HTML/lua_objectfree_time.html"
scrapedAt: "2026-06-15T18:25:35.420Z"
pagefind: false
---
## Description

The **Time** function returns the time (in seconds) the station has been on, as a number (float). It is basically a stopwatch that starts when the grandMA3 application starts. It is not the current time of day or the session online time.

## Arguments

This function does not accept any arguments.

## Return

- **Number**:\
  The returned number (float) is the on-time for the station.

## Example

This example finds, formats, and prints the time.

|                                                                                                                                                                                                                                                                                                                                                                                                                   |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [Copy Code](javascript:void\(0\))Lua                                                                                                                                                                                                                                                                                                                                                                              |
| ```
return function()
    -- Get the current time
    local time = Time()

    --Calculate the different elements
    local days = math.floor(time/86400)
    local hours = math.floor((time % 86400)/3600)
    local minutes = math.floor((time % 3600)/60)
    local seconds = math.floor(time % 60)

    --Print the result
    Printf("The time is %d:%02d:%02d:%02d", days, hours, minutes, seconds)
end
``` |
