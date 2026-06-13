---
title: "FileExists(string)"
description: "The FileExists Lua function checks if a file exists and returns a boolean with the result."
product: grandma3
version: "2.4"
lang: en
sourceUrl: "https://help.malighting.com/grandMA3/2.4/HTML/lua_objectfree_fileexists.html"
scrapedAt: "2026-06-12T21:25:01.993Z"
---
## Description

The FileExists Lua function checks if a file exists and returns a boolean with the result.

## Arguments

- **String**:\
  The string must include the path and filename for the file that should be checked.

## Return

- **Boolean**:

  - True / 1: The file exists.
  - False / 0: The file does not exist.

## Example

This example returns feedback for the first file in the show file folder. The example uses the GetPath() and DirList() functions.

The **GetPath** Lua function delivers a string with the path of a grandMA3 folder.

Learn more in the [GetPath() topic](/grandma3/2-4/lua_objectfree_getpath/).

The **DirList** Lua function returns a table of files at a specified path.

Learn more in the [DirList() topic](/grandma3/2-4/lua_objectfree_dirlist/).

|                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [Copy Code](javascript:void\(0\))Lua                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| ```
return function ()
    -- Get the path to the show files.
    local path = GetPath(Enums.PathType.Showfiles)
    -- Get a table of files at the path.
    local dirTable = DirList(path)
    -- Get the file name for the first file.
    local firstFile = dirTable[1]['name']
    -- Create a string with the path and filename.
    local filepath = string.format("%s%s%s", path, GetPathSeparator(), firstFile)

    -- Check if the file exist and return useful feedback.
    if FileExists(filepath) then
        Printf('The file "' .. firstFile .. '" exist at path "' .. path .. '"')
    else
        Printf('The file "' .. firstFile .. '" does not exist')
    end
end
``` |
