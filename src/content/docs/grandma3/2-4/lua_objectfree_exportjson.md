---
title: "ExportJson(filename, export_data)"
description: "The object-free ExportJson Lua function exports a Lua table in JSON format."
product: grandma3
version: "2.4"
lang: en
sourceUrl: "https://help.malighting.com/grandMA3/2.4/HTML/lua_objectfree_exportjson.html"
scrapedAt: "2026-06-12T21:25:01.932Z"
---
## Description

The object-free **ExportJson** Lua function exports a Lua table in JSON format.

|                                                    |                                                              |
| -------------------------------------------------- | ------------------------------------------------------------ |
| ![](/img/grandma3/2-4/restriction_gray-968e2d.png) | **Known Limitation:**                                        |
|                                                    | The JSON file might not be formatted in proper JSON format.  |

## Arguments

- **Filename**:\
  This is a string containing the file name of the exported file. It should contain the file name, including the entire path. See the example below.
- **Export\_data**:\
  This is the data that is going to be exported. It should be a table object.

## Return

- **Boolean**:\
  This function returns a boolean.

  - **True**:\
    The export was a success.
  - **False**:\
    The export failed.

## Example

To export the build details table, create a plugin with this code:

|                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [Copy Code](javascript:void\(0\))Lua                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| ```
return function()
    -- 'BuildDetails()' creates a table with information about the software build.
    local build = BuildDetails()
    --The path and filename is stored in a variable.
    local exportPath = GetPath(Enums.PathType.Library) .. "/BuildDetails.json"
    --The actual export (in JSON format) using the path and the table - the result boolean stored in a variable.
    local success = ExportJson(exportPath, build)
    --Print feedback about the export path.
    if success then
        Printf("The export was stored at: " .. exportPath)
    else
        Printf("The export failed.")
    end
end
``` |
