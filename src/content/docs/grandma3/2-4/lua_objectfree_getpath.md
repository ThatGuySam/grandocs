---
title: "GetPath(string[, boolean] | integer)"
description: "The GetPath Lua function returns a string with the path of a grandMA3 folder."
product: grandma3
version: "2.4"
lang: en
sourceUrl: "https://help.malighting.com/grandMA3/2.4/HTML/lua_objectfree_getpath.html"
scrapedAt: "2026-06-12T21:25:03.237Z"
---
## Description

The **GetPath** Lua function returns a string with the path of a grandMA3 folder.

The function has two possible argument types - use one of them with each function call.

## Argument

- **String**:\
  A text string with the folder name.
- **Boolean** (optional with string):\
  If this boolean is true, then the folder at the path is created if it does not exist.\
  \
  \- OR -\
   
- **Integer**:\
  An integer identifying an index in the "Enum.PathType" table.

|                                                    |                                                    |
| -------------------------------------------------- | -------------------------------------------------- |
| ![](/img/grandma3/2-4/restriction_gray-968e2d.png) | **Restriction:**                                   |
|                                                    | Folder creation only works with string arguments.  |

## Return

- **String**:\
  The returned string is the _first found_ full path related to the provided argument.

## Example

This example prints the paths of the show folder on the system monitor twice. It demonstrates the two different input types:

|                                                                                                                                                                                                                                                                                                                                                                                                     |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [Copy Code](javascript:void\(0\))Lua                                                                                                                                                                                                                                                                                                                                                                |
| ```
return function()
    -- This prints a path based on a string input and it creates the folder if it does not exists.
    Printf("Path of show files (string) is: " .. GetPath("shows", true))
    -- This prints the path based on an integer. The integer is looked-up using the 'PathType' enum.
    Printf("Path of show files (integer) is: " .. GetPath(Enums.PathType.Showfiles))
end
``` |
