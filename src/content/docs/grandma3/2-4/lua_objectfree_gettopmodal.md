---
title: "GetTopModal()"
description: "The GetTopModal Lua function returns a handle for the modal at the top. Modal is the internal name for pop-ups that interrupt the system's normal operation. A m"
product: grandma3
version: "2.4"
lang: en
sourceUrl: "https://help.malighting.com/grandMA3/2.4/HTML/lua_objectfree_gettopmodal.html"
scrapedAt: "2026-06-12T21:25:03.973Z"
---
## Description

The **GetTopModal** Lua function returns a handle for the modal at the top. Modal is the internal name for pop-ups that interrupt the system's normal operation. A modal blocks other UI elements from being used while it is open.

For example, when opening a window's settings pop-up, it is not possible to use the command line. The settings pop-up is a modal. Modals can also be identified by the rest of the UI, which darkens a bit when it is open.

## Argument

This function does not have any arguments.

## Return

- **Handle** | **nil**:\
  The function returns a handle to the top modal UI object if there is one.

## Example

This example uses the D[](/grandma3/2-4/lua_object_dump/)ump() function to show information about the StagePopup selection pop-up.

# Dump()

The **Dump()** function returns a string with information about the object, for instance, the name, class, path of the object, its properties, and children.

Learn more in the [Dump() topic](/grandma3/2-4/lua_object_dump/).

|                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [Copy Code](javascript:void\(0\))Lua                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| ```
return function()
    -- Open a Modal / Pop-up.
    Cmd('Menu "StagePopup"')
    -- Add a small wait.
    coroutine.yield(0.5)
    -- Get the handle for the modal / pop-up. 
    local modalHandle = GetTopModal()
    -- If there is a handle then dump all information else print en error feedback.
    if modalHandle ~= nil then
        Printf("=============== START OF DUMP ===============")
        modalHandle:Dump()
        Printf("================ END OF DUMP ================")
    else
        ErrPrintf("The Modal UI object could not be found.")
    end
    -- Close the modal / pop-up by pressing the Escape key.
    Keyboard(1,'press','Escape')
    Keyboard(1,'release','Escape')
end
``` |
