---
title: "DirList(string[, string])"
description: "The DirList Lua function returns a table of files at a specified path. The returned list can be filtered using an optional filter argument."
product: grandma3
version: "2.3"
lang: en
sourceUrl: "https://help.malighting.com/grandMA3/2.3/HTML/lua_objectfree_dirlist.html"
scrapedAt: "2026-06-15T18:25:30.182Z"
pagefind: false
---
## Description

The **DirList** Lua function returns a table of files at a specified path. The returned list can be filtered using an optional filter argument.

## Arguments

- **String**:\
  The desired path in a string format.
- **String** (optional):\
  The optional filter string. The \* can be used as a wildcard in the string. See the example below.

## Return

- **Table**:\
  The returned table has elements of other tables. Each of these table elements has the following keys:

  - name: The name of the file. The value of name is returned as a string.
  - size: The size of the file in bytes. The value of size is returned as a number.
  - time: The timestamp for the file. The value of time is returned as a number.

## Example

This example prints the show files in the showfile directory. It uses the GetPath() function.

The GetPath Lua function delivers a string with the path of a grandMA3 folder. Learn more in the [GetPath() topic](/grandma3/2-3/lua_objectfree_getpath/ "GetPath(string\[, boolean]) help topic.").

|                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [Copy Code](javascript:void\(0\))Lua                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| ```
return function ()
    -- Get the path to the show files.
    local path = GetPath(Enums.PathType.Showfiles)
    -- Make a filter to only list .show files.
    local filter = "*show"
    -- Use the DirList function to get a table of the files.
    local returnTable = DirList(path, filter)

    -- Print the information of the files in the returned table.
    for _, value in pairs(returnTable) do
        Printf(value['name'] .. " - Size: " .. value['size'] .. " bytes - Time: " .. os.date("%c", value['time']))
    end
end
``` |
