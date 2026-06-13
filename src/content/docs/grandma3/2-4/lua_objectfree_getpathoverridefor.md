---
title: "GetPathOverrideFor(string|integer, string[, boolean])"
description: "The GetPathOverrideFor Lua function delivers a string with the path of a grandMA3 folder. The function is relevant when the path should be on a removable drive "
product: grandma3
version: "2.4"
lang: en
sourceUrl: "https://help.malighting.com/grandMA3/2.4/HTML/lua_objectfree_getpathoverridefor.html"
scrapedAt: "2026-06-12T21:25:03.234Z"
---
## Description

The **GetPathOverrideFor** Lua function delivers a string with the path of a grandMA3 folder. The function is relevant when the path should be on a removable drive connected to a console.

## Argument

- **String**:\
  A text string with the folder name.
- **String**:\
  The base path in a string format.
- **Boolean** (optional with string):\
  If this boolean is true, then the folder at the path is created if it does not exist.\
  \
  \- OR -\
   
- **Integer**:\
  An integer identifying an index in the "Enum.PathType" table.
- **String**:\
  The base path in a string format.
- **Boolean**:\
  If this boolean is true, then the folder at the path is created if it does not exist.

## Return

- **String**:\
  The returned string is the _first found_ full path related to the provided argument.

## Example

This example prints the override path of the macro folder on the system monitor. It should be run on a console with a removable drive connected.

|                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [Copy Code](javascript:void\(0\))Lua                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| ```
return function ()
    -- Set a path for the first removable media.
    -- Set the initial value to nil.
    local myBasePath = nil
    -- Itereate the drives and find the first 'Removeable' drive and store the path.
    for _, value in ipairs(Root().Temp.DriveCollect) do
        local driveType = value.drivetype
        if driveType == "Removeable" then
            myBasePath = value.path
            break
        end
    end
    -- If no removeable drive was found, then provide feedback and exit the function.
    if myBasePath == nil then
        ErrPrintf("No removeable drive could be found. Please insert one and try again")
        return
    end

    -- Get the integer for the UserMacros path type.
    local myPathType = Enums.PathType.UserMacros

    -- Gey the string for the path override.
    local myOverridePath = GetPathOverrideFor(myPathType, myBasePath)
    -- Print the returned string.
    Printf("The path is: " .. myOverridePath)
end
``` |
