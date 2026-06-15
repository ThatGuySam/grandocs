---
title: "Import(handle, string, string)"
description: "The Import object Lua function imports an object written in XML format."
product: grandma3
version: "2.3"
lang: en
sourceUrl: "https://help.malighting.com/grandMA3/2.3/HTML/lua_object_import.html"
scrapedAt: "2026-06-15T18:25:36.557Z"
pagefind: false
---
## Description

The Import object Lua function imports an object written in XML format.

|                                                    |                                                           |
| -------------------------------------------------- | --------------------------------------------------------- |
| ![](/img/grandma3/2-3/restriction_gray-3bb57e.png) | **Restriction:**                                          |
|                                                    | The imported files need to exist already to be imported.  |

|                                                  |                                                                                                         |
| ------------------------------------------------ | ------------------------------------------------------------------------------------------------------- |
| ![](/img/grandma3/2-3/important_gray-f4dfbc.png) | **Important:**                                                                                          |
|                                                  | The Lua import will merge the content of the XML file into the object without any confirmation pop-up.  |

## Arguments

- **Handle**:\
  The function takes a handle of the type "light\_userdata" as an argument.\
  It can be omitted when using the colon notation on an object.

  The Colon Notation is a way to omit the handle as the first argument when using the Object functions.

  This is the general syntax with the colon notation: object:function()

  This is the general syntax with standard handle notation: object.function(object)

  Learn more in the [Lua Functions - Object API topic](/grandma3/2-3/lua_object/).

- **String**:\
  This is a string with the path to the file location.

- **String**:\
  This is a string containing the file name of the desired file.

## Return

- **Boolean**:\
  The function returns a boolean indicating if the import was a success.

## Example

This example imports the content of an XML file into the selected sequence. The file is called "MySelectedSequence", and it is located at "../gma3\_library/datapools/sequences". The file can be created using the example in the [Export object function](/grandma3/2-3/lua_object_export/).

|                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| [Copy Code](javascript:void\(0\))Lua                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| ```
return function()
    --SelectedSequence() creates a handle to the selected sequence.
    -- The imported object will be merged into this sequence.
    local selectedSequence = SelectedSequence()
    -- Check if there is a selected sequence - if not then exit the function.
    if selectedSequence == nil then
        ErrPrintf("The selected sequence could not be found.")
        return
    end
    --The path is stored in a variable.
    local path = GetPath(Enums.PathType.UserSequences)
    --The actual import function.
    local success = selectedSequence:Import(path, "mySelectedSequence.xml")
    --Print some feedback. 
    if success then
        Printf("The sequence is imported from: " .. path .. GetPathSeparator() .. "mySelectedSequence.xml")
    else
        ErrPrintf("The object could not be imported.")
    end
end
``` |

## Related Object Function

[Export](/grandma3/2-3/lua_object_export/) - object function used to export an XML table.
