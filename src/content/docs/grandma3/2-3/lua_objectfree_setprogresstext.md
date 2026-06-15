---
title: "SetProgressText(handle, string)"
description: "The SetProgressText Lua function defines a text string to be displayed in a progress bar next to the progress bar title text. The title cannot be changed after "
product: grandma3
version: "2.3"
lang: en
sourceUrl: "https://help.malighting.com/grandMA3/2.3/HTML/lua_objectfree_setprogresstext.html"
scrapedAt: "2026-06-15T18:25:35.009Z"
pagefind: false
---
## Description

The SetProgressText Lua function defines a text string to be displayed in a progress bar next to the progress bar title text. The title cannot be changed after creation, but this text can be changed. It could be used to describe the current step in the progress.

A handle input argument defines which progress bar it defines a text for. The progress bar must exist for it to have a handle. Progress bars can be created using the [StartProgress](/grandma3/2-3/lua_objectfree_startprogress/) function.

See the [ProgressBar topic](/grandma3/2-3/lua_interface_progressbar/) for more info regarding progress bars and links to other related functions.

## Arguments

- **Handle**:\
  The handle for the progress bar.
- **String**:\
  The text string to be displayed.

## Return

This function does not return anything.

## Example

This example sets a text string for the progress bar created using the example in the StartProgress topic (link above):

|                                                                                                                                                            |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [Copy Code](javascript:void\(0\))Lua                                                                                                                       |
| ```
return function()
    -- Sets the text next to progress title
    SetProgressText(progressHandle, "- This is text next to the progress title")
end
``` |
