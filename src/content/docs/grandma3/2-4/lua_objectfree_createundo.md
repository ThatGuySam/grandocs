---
title: "CreateUndo(string)"
description: "The CreateUndo Lua function returns a handle to a list of commands and function calls grouped in the same oops action."
product: grandma3
version: "2.4"
lang: en
sourceUrl: "https://help.malighting.com/grandMA3/2.4/HTML/lua_objectfree_createundo.html"
scrapedAt: "2026-06-12T21:25:00.858Z"
---
## Description

The **CreateUndo** Lua function returns a handle to a list of commands and function calls grouped in the same oops action.

Functions can be executed with a reference to the undo handle. This adds the function to the undo list.

Undo lists need to be closed using the [CloseUndo](/grandma3/2-4/lua_objectfree_closeundo/) function.

## Arguments

- **String**:\
  A text string must be added. It can be used to identify the undo list.

## Return

- **Handle**:\
  The function returns the handle to the undo list.

## Example

This example creates an undo list, performs a series of commands being added to the undo list, and closes the undo list. Now, the series of commands can be oopsed with one oops command.

|                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [Copy Code](javascript:void\(0\))Lua                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| ```
return function()
    -- Create the undo group.
    local MyNewUndo = CreateUndo("MySelection")
    -- Make some command line actions linked to the undo.
    Cmd("ClearAll", MyNewUndo)
    Cmd("Fixture 1", MyNewUndo)
    Cmd("Fixture 2", MyNewUndo)
    Cmd("Fixture 5", MyNewUndo)
    Cmd("Fixture 7", MyNewUndo)
    -- Closing the undo group and store it's return in a variable.
    local closeSuccess = CloseUndo(MyNewUndo)
    -- Print the feedback from the closing action - 1 = Success / 0 = Failure.
    if closeSuccess == false then
        ErrPrintf("The CloseUndo was not successful")
    elseif closeSuccess == true then
        Printf("The CloseUndo was successful")
    else
        Printf("The CloseUndo did not return a meaningful result")
    end
end
``` |
