---
title: "NeedShowSave()"
description: "The NeedShowSave Lua function returns a boolean indicating if there are unsaved changes to the showfile."
product: grandma3
version: "2.4"
lang: en
sourceUrl: "https://help.malighting.com/grandMA3/2.4/HTML/lua_objectfree_needshowsave.html"
scrapedAt: "2026-06-12T21:25:05.143Z"
---
## Description

The **NeedShowSave** Lua function returns a boolean indicating if there are unsaved changes to the showfile.

## Arguments

This function does not accept any arguments.

## Return

- **Boolean**:\
  The boolean returns True if there are unsaved changes to the show file. False indicates that the show file has not changed since the last save. These indications do not include changes to the playback state of the show.

## Example

This example prints feedback indicating if the show file should be saved or not.

|                                                                                                                                                                                                                                |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| [Copy Code](javascript:void\(0\))Lua                                                                                                                                                                                           |
| ```
return function ()
    -- Check if the show should be saved.
    if NeedShowSave() then
        Printf("You should save your showfile.")
    else
        Printf("You do not need to save your showfile.")
    end
end
``` |
