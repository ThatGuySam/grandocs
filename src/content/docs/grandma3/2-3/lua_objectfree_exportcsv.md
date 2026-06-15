---
title: "ExportCSV(filename, export_data)"
description: "The object-free ExportCSV Lua function exports a Lua table in CSV format."
product: grandma3
version: "2.3"
lang: en
sourceUrl: "https://help.malighting.com/grandMA3/2.3/HTML/lua_objectfree_exportcsv.html"
scrapedAt: "2026-06-15T18:25:30.623Z"
pagefind: false
---
## Description

The object-free **ExportCSV** Lua function exports a Lua table in CSV format.

|                                                    |                                                     |
| -------------------------------------------------- | --------------------------------------------------- |
| ![](/img/grandma3/2-3/restriction_gray-3bb57e.png) | **Known Limitation:**                               |
|                                                    | The output CSV file might not formatted correctly.  |

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

|                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [Copy Code](javascript:void\(0\))Lua                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| ```
return function()
    -- 'BuildDetails()' creates a table with information about the software build.
    local build = BuildDetails()
    --The path and filename is stored in a variable.
    local exportPath = GetPath(Enums.PathType.Library) .. "/BuildDetails.csv"
    --The actual export (in csv format) using the path and the table - the result boolean stored in a variable.
    local success = ExportCSV(exportPath, build)
    --Print feedback about the export path.
    if success then
        Printf("The export was stored at: " .. exportPath)
    else
        Printf("The export failed.")
    end
end
``` |
