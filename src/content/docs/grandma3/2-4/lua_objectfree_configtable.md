---
title: "ConfigTable()"
description: "The ConfigTable Lua function returns a table with some configuration information. This is information only. The function does not have any actual functions. The"
product: grandma3
version: "2.4"
lang: en
sourceUrl: "https://help.malighting.com/grandMA3/2.4/HTML/lua_objectfree_configtable.html"
scrapedAt: "2026-06-12T21:25:00.710Z"
---
## Description

The **ConfigTable** Lua function returns a table with some configuration information. This is information only. The function does not have any actual functions. The table is not sorted.

## Arguments

This function does not accept any arguments.

## Return

- **Table**:\
  The returned table contains key value pairs with configuration information. See the example below.

## Example

This example prints the content of the returned table.

|                                                                                                                                                                        |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [Copy Code](javascript:void\(0\))Lua                                                                                                                                   |
| ```
return function ()
    -- Prints the content of the ConfigTable
    for key,value in pairs(ConfigTable()) do
        Printf(key .. " : " .. value)
    end
end
``` |
