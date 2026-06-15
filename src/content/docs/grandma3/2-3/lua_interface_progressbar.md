---
title: "Progress Bar"
description: "The Progress Bar is a Lua function that can create a moving progress bar on the screens."
product: grandma3
version: "2.3"
lang: en
sourceUrl: "https://help.malighting.com/grandMA3/2.3/HTML/lua_interface_progressbar.html"
scrapedAt: "2026-06-15T18:25:28.839Z"
pagefind: false
---
The Progress Bar is a Lua function that can create a moving progress bar on the screens.

There are several Lua functions that are connected to creating and running a progress bar. See links to the topics below the example.

## Example

This example uses all the progress bar functions:

|                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [Copy Code](javascript:void\(0\))Lua                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| ```
return function()
    -- create the progress bar
    local progressBarHandle = StartProgress("myProgressTitle")

    -- set start index and end index of the progress bar
    local progressRangeStart, progressRangeEnd = 1, 10

    -- Define the range of the progress bar
    SetProgressRange(progressBarHandle, progressRangeStart, progressRangeEnd)
    -- Define the text of the progress bar
    SetProgressText(progressBarHandle, "This is my ProgressBar Text")
    -- Set the progress bar value to the start of range
    SetProgress(progressBarHandle, progressRangeStart)

    -- Loop that goes through the progress bar
    for i = progressRangeStart, progressRangeEnd do
        -- Add a yield to allow other functions and delay the progress
        coroutine.yield(1)
        -- Increment the progress state of the progress bar
        IncProgress(progressBarHandle, 1)
    end

    -- remove the progress bar:
    StopProgress(progressBarHandle)

end
``` |

### Related Functions

- [StartProgress](/grandma3/2-3/lua_objectfree_startprogress/)
- [SetProgressRange](/grandma3/2-3/lua_objectfree_setprogressrange/)
- [SetProgress](/grandma3/2-3/lua_objectfree_setprogress/)
- [SetProgressText](/grandma3/2-3/lua_objectfree_setprogresstext/)
- [IncProgress](/grandma3/2-3/lua_objectfree_incprogress/)
- [StopProgress](/grandma3/2-3/lua_objectfree_stopprogress/)
