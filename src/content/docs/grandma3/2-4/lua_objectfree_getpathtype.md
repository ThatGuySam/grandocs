---
title: "GetPathType(handle[, integer])"
description: "The GetPathType Lua function returns a string with a name for the path type. This function can be useful when importing objects."
product: grandma3
version: "2.4"
lang: en
sourceUrl: "https://help.malighting.com/grandMA3/2.4/HTML/lua_objectfree_getpathtype.html"
scrapedAt: "2026-06-12T21:25:03.384Z"
---
## Description

The **GetPathType** Lua function returns a string with a name for the path type. This function can be useful when importing objects.

## Argument

- **Handle**:\
  The handle should match the object type for which the path type is needed.
- **Integer** (optional):\
  The optional integer can be used to specify if the returned string should match the user path type or the system path type. See the example below.\
  The Enums.PathContentType can be used, or just use **0** for the system path and **1** for the user path.

## Return

- **String**:\
  The returned string is the name of the path type.

## Example

This example prints the path type name for the first macro object - if it exists:

|                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [Copy Code](javascript:void\(0\))Lua                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| ```
return function ()
    -- Get a handle to the first Macro.
    local myMacro = DataPool().Macros[1]
    if myMacro == nil then
        ErrPrintf("An error occurred, possibly because the first macro does not exist.")
        ErrPrintf("Please create one and try again.")
        return
    end
    -- Get the user name of the path type.
    local myPathTypeNameUser = GetPathType(myMacro, Enums.PathContentType.User)
    if myPathTypeNameUser ~= nil then
        Printf("The user name of the path type is: " .. myPathTypeNameUser)
    else
        ErrPrintf("There was an error getting the path type.")
    end

    -- Get the system name of the path type.
    local myPathTypeNameSystem = GetPathType(myMacro, Enums.PathContentType.System)
    if myPathTypeNameSystem ~= nil then
        Printf("The system name of the path type is: " .. myPathTypeNameSystem)
    else
        ErrPrintf("There was an error getting the path type.")
    end
end
``` |
