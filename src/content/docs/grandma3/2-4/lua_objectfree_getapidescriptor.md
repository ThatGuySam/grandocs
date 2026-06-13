---
title: "GetApiDescriptor()"
description: "The GetApiDescriptor Lua function returns a table with a description of all the object-free Lua functions. These are descriptions only. The function does not ha"
product: grandma3
version: "2.4"
lang: en
sourceUrl: "https://help.malighting.com/grandMA3/2.4/HTML/lua_objectfree_getapidescriptor.html"
scrapedAt: "2026-06-12T21:25:02.227Z"
---
## Description

The **GetApiDescriptor** Lua function returns a table with a description of all the object-free Lua functions. These are descriptions only. The function does not have any actual functions. The table is not sorted.

## Arguments

This function does not accept any arguments.

## Return

- **Table**:\
  The returned table contains elements with other tables.

  - **String**:\
    This is the Api function name.
  - **String**:\
    This is the description of the Api arguments.
  - **String**:\
    This is the description of the Api returns.

## Example

This example prints the content of the returned table.

|                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| [Copy Code](javascript:void\(0\))Lua                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| ```
return function ()
    -- This returns information about all the Lua "object-free" functions.
    -- GetApiDescriptor() returns a table with all the functions. 
    -- Each table element is another table with the name, argument description, and return description.
      for key,value in ipairs(GetApiDescriptor()) do
        if value[1] ~= nil then
          Printf("Api " .. key .. " is: " .. value[1])
        end
        if value[2] ~= nil then
          Printf("Arguments: " .. value[2])
        end
        if value[3] ~= nil then
          Printf("Returns: " .. value[3])
        end
        Printf("---------------------------------------")
      end
  end
``` |
