---
title: "SetProgress(handle, integer)"
description: "The SetProgress Lua function defines a value on the range for a progress bar. A handle input argument defines the progress bar. The progress bar needs have been"
product: grandma3
version: "2.3"
lang: en
sourceUrl: "https://help.malighting.com/grandMA3/2.3/HTML/lua_objectfree_setprogress.html"
scrapedAt: "2026-06-15T18:25:34.919Z"
pagefind: false
---
## Description

The SetProgress Lua function defines a value on the range for a progress bar. A handle input argument defines the progress bar. The progress bar needs have been created using the [StartProgress](/grandma3/2-3/lua_objectfree_startprogress/) function.

See the [ProgressBar topic](/grandma3/2-3/lua_interface_progressbar/) for more info regarding progress bars and links to other related functions.

## Arguments

- **Handle**:\
  The handle for the progress bar.
- **Integer**:\
  The desired value indicating the current status or position of the progress bar.

## Return

This function does not return anything.

## Example

This example sets a range value for the progress bar created using the example in the StartProgress topic (link above):

|                                                                                                                                                 |
| ----------------------------------------------------------------------------------------------------------------------------------------------- |
| [Copy Code](javascript:void\(0\))Lua                                                                                                            |
| ```
return function()
    -- Sets the current value to 5 for a progress bar with the matching handle
    SetProgress(progressHandle, 5)
end
``` |
