---
title: "DataPool()"
description: "The DataPool Lua function references the currently selected DataPool and is used to read or edit properties within the data pool."
product: grandma3
version: "2.4"
lang: en
sourceUrl: "https://help.malighting.com/grandMA3/2.4/HTML/lua_objectfree_datapool.html"
scrapedAt: "2026-06-12T21:25:01.149Z"
---
## Description

The **DataPool** Lua function references the currently selected DataPool and is used to read or edit properties within the data pool.

## Arguments

This function does not accept any arguments.

## Return

- **Handle**:\
  The function returns a handle to the DataPool object.

## Example

This example uses the [](/grandma3/2-4/lua_object_dump/)Dump() function on the data pool object. Dump lists all the properties and lists the children. Finally, the example also prints the name of the first sequence in the data pool.

# Dump()

The **Dump()** function returns a string with information about the object, for instance, the name, class, path of the object, its properties, and children.

Learn more in the [Dump() topic](/grandma3/2-4/lua_object_dump/).

|                                                                                                                                                                                                                                                                                                                                                  |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| [Copy Code](javascript:void\(0\))Lua                                                                                                                                                                                                                                                                                                             |
| ```
return function()
    -- Dumps information about the datapool object.
    Printf("=============== START OF DUMP ===============")
    DataPool():Dump()
    Printf("================ END OF DUMP ================")
    -- Prints the name of the first sequence.
    Printf("Name of sequence 1: " .. DataPool().Sequences[1].Name)
end
``` |
