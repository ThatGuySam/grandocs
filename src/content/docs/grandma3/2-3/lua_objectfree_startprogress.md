---
title: "StartProgress(string)"
description: "The StartProgress Lua function creates and displays a progress bar on all screens. A string input argument creates a title for the progress bar. The function re"
product: grandma3
version: "2.3"
lang: en
sourceUrl: "https://help.malighting.com/grandMA3/2.3/HTML/lua_objectfree_startprogress.html"
scrapedAt: "2026-06-15T18:25:35.208Z"
pagefind: false
---
## Description

The StartProgress Lua function creates and displays a progress bar on all screens. A string input argument creates a title for the progress bar. The function returns a handle that is used to further interact with the progress bar.

Executing the function displays the progress bar on the screens. It only disappears using the [StopProgress](/grandma3/2-3/lua_objectfree_stopprogress/) function - which needs the handle. So it is highly recommended to store the returned handle from the start function.

See the [ProgressBar topic](/grandma3/2-3/lua_interface_progressbar/) for more info regarding progress bars and links to other related functions.

## Arguments

- **String**:\
  The string is used as the title for the progress bar.

## Return

- **Handle**:\
  The returned handle is the identifier for the progress bar.

## Example

This creates and displays a progress bar on all screens. The progress bar does not disappear using this example - see the example in the StopProgress (link above) function to remove:

|                                                                                                                                                                                                                                                            |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [Copy Code](javascript:void\(0\))Lua                                                                                                                                                                                                                       |
| ```
return function()
    -- Create and display a progress bar with a title
    -- IMPORTANT: The Lua variable 'progressHandle' is needed to remove the progressbar again - StopProgress()
    progressHandle = StartProgress("ProgressBar Title")
end
``` |
