---
title: "SetProgressRange(handle, integer, integer)"
description: "The SetProgressRange Lua function defines a range for a progress bar."
product: grandma3
version: "2.3"
lang: en
sourceUrl: "https://help.malighting.com/grandMA3/2.3/HTML/lua_objectfree_setprogressrange.html"
scrapedAt: "2026-06-15T18:25:35.003Z"
pagefind: false
---
## Description

The SetProgressRange Lua function defines a range for a progress bar.

A handle input argument defines which progress bar it defines a range for. The progress bar must exist to have a handle. Progress bars can be created using the [StartProgress](/grandma3/2-3/lua_objectfree_startprogress/) function.

See the [ProgressBar topic](/grandma3/2-3/lua_interface_progressbar/) for more info regarding progress bars and links to other related functions.

## Arguments

- **Handle**:\
  The handle for the progress bar.
- **Integer**:\
  The start value for the range.
- **Integer**:\
  The end value for the range.

## Return

This function does not return anything.

## Example

This example sets a range for the progress bar created using the example in the StartProgress topic (link above):

|                                                                                                                                            |
| ------------------------------------------------------------------------------------------------------------------------------------------ |
| [Copy Code](javascript:void\(0\))Lua                                                                                                       |
| ```
return function()
    -- Sets the range of a progress bar with the matching handle
    SetProgressRange(progressHandle, 1, 10)
end
``` |
