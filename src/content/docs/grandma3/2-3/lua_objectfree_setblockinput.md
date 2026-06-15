---
title: "SetBlockInput(boolean)"
description: "The SetBlockInput function is an internal function used during the system tests. It stops input from USB-connected keyboards and mouse. The built-in keyboard on"
product: grandma3
version: "2.3"
lang: en
sourceUrl: "https://help.malighting.com/grandMA3/2.3/HTML/lua_objectfree_setblockinput.html"
scrapedAt: "2026-06-15T18:25:34.837Z"
pagefind: false
---
## Description

The **SetBlockInput** function is an internal function used during the system tests. It stops input from USB-connected keyboards and mouse. The built-in keyboard on some models is internally connected using a USB connection, which is also blocked by this function. The block affects the station where the function is executed.

|                                                  |                                                                                                                                                                        |
| ------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ![](/img/grandma3/2-3/important_gray-f4dfbc.png) | **Important:**                                                                                                                                                         |
|                                                  | Should the station be blocked and cannot be unblocked using a new Lua command, then pressing the keyboard keys A, S, D, and F simultaneously unblock the input again.  |

## Arguments

- **Boolean**:\
  The boolean indicates if the stations' input should be blocked or unblocked.

  - **true** (or 1): The station input is blocked.
  - **false** (or 0): The station input is unblocked.

## Return

This function does not return anything.

## Example

This example blocks mouse and keyboard input for 10 seconds:

|                                                                                                                                                                                                                                                                      |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [Copy Code](javascript:void\(0\))Lua                                                                                                                                                                                                                                 |
| ```
return function()
    -- Set a variable for yield time in seconds
    yieldTime = 10
    -- Set the block to true
    SetBlockInput(true)
    -- Wait the [yieldtime]
    coroutine.yield(yieldTime)
    -- Unblock the station
    SetBlockInput(false)
end
``` |
