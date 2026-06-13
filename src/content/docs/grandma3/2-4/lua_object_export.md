---
title: "Export(handle, string, string)"
description: "The Export object Lua function exports an object into an XML file."
product: grandma3
version: "2.4"
lang: en
sourceUrl: "https://help.malighting.com/grandMA3/2.4/HTML/lua_object_export.html"
scrapedAt: "2026-06-12T21:25:07.260Z"
---
## Description

The **Export** object Lua function exports an object into an XML file.

## Arguments

- **Handle**:\
  The function takes a handle of the type "light\_userdata" as an argument.\
  It can be omitted when using the colon notation on an object.

  The Colon Notation is a way to omit the handle as the first argument when using the Object functions.

  This is the general syntax with the colon notation: object:function()

  This is the general syntax with standard handle notation: object.function(object)

  Learn more in the [Lua Functions - Object API topic](/grandma3/2-4/lua_object/).

- **String**:\
  This is a string with the file path for the exported file.

- **String**:\
  This is a string containing the file name of the exported file.

## Return

- **Boolean**:\
  The function returns a boolean indicating if the export was a success.

## Examples

This example exports the selected sequence into an XML file:

|                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [Copy Code](javascript:void\(0\))Lua                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| ```
return function()
    --SelectedSequence() creates a handle to the selected sequence.
    local selectedSequence = SelectedSequence()
    if selectedSequence == nil then
        ErrPrintf("The selected sequence could not be found.")
        return
    end
    --The path is stored in a variable.
    local exportPath = GetPath(Enums.PathType.UserSequences)
    --The actual export function.
    local success = selectedSequence:Export(exportPath, "mySelectedSequence.xml")
    --Print some feedback. 
    if success then
        Printf("The sequence is exported to: " .. exportPath)
    else
        ErrPrintf("The sequence could not be exported.")
    end
end
``` |

##  Related Object Functions

[Import](/grandma3/2-4/lua_object_import/) - object function used to import an XML table.
