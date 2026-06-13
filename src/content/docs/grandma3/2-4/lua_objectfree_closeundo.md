---
title: "CloseUndo(handle)"
description: "The CloseUndo Lua function closes an open undo list. The function returns a boolean indicating if the function succeeds."
product: grandma3
version: "2.4"
lang: en
sourceUrl: "https://help.malighting.com/grandMA3/2.4/HTML/lua_objectfree_closeundo.html"
scrapedAt: "2026-06-12T21:25:00.462Z"
---
## Description

The **CloseUndo** Lua function closes an open undo list. The function returns a boolean indicating if the function succeeds.

Undo lists need to be created to be closed. See more about this in the [CreateUndo](/grandma3/2-4/lua_objectfree_createundo/) function.

## Arguments

- **Handle**:\
  The handle of a created undo list.

## Return

- **Boolean**:

  - True: The undo list was closed.
  - False: The undo list is still in use and cannot be closed.

## Example

This example creates an undo list, performs a series of commands that are added to the undo list, and closes the undo list. Now the series of commands can be oopsed with one oops command.

|                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [Copy Code](javascript:void\(0\))Lua                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| ```
return function()
    --Create the undo object 
    local MyNewUndo = CreateUndo("MySelection")
    --Create command actions connected to the undo object
    Cmd("ClearAll", MyNewUndo)
    Cmd("Fixture 1", MyNewUndo)
    Cmd("Fixture 2", MyNewUndo)
    Cmd("Fixture 5", MyNewUndo)
    Cmd("Fixture 7", MyNewUndo)
    --Close the undo group and store it's return in a variable
    local closeSuccess = CloseUndo(MyNewUndo)
    --Print the feedback from the closing action - 1 = Success / 0 = Failure.
    if closeSuccess == false then
        ErrPrintf("The CloseUndo was not successful")
    elseif closeSuccess == true then
        Printf("The CloseUndo was successful")
    else
        Printf("The CloseUndo did not return a meaningful result")
    end
end
``` |
