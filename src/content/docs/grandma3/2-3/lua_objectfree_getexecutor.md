---
title: "GetExecutor(integer)"
description: "The GetExecutor Lua function returns the handles of the executor and the page based on the executor number."
product: grandma3
version: "2.3"
lang: en
sourceUrl: "https://help.malighting.com/grandMA3/2.3/HTML/lua_objectfree_getexecutor.html"
scrapedAt: "2026-06-15T18:25:31.714Z"
pagefind: false
---
## Description

The **GetExecutor** Lua function returns the handles of the executor and the page based on the executor number.

## Arguments

- **Integer**:\
  The integer number for the executor.

## Return

- **Handle - Executor**:\
  The returned handle to the executor.
- **Handle - Page**:\
  The returned handle to the page.

## Example

This example stores the handles for executor number 201. It then uses the Dump() function to show the data for the two handles.

# Dump()

The **Dump()** function returns a string with information about the object, for instance, the name, class, path of the object, its properties, and children.

Learn more in the [Dump() topic](/grandma3/2-3/lua_object_dump/).

|                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [Copy Code](javascript:void\(0\))Lua                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| ```
return function ()
    -- This saves the handles for executor 201 on the selected page.
    local executorHandle, pageHandle = GetExecutor(201)
    -- exit the function and print an error message if any of the handles are nil.
    if executorHandle == nil or pageHandle == nil then
        ErrPrintf("There is not a valid object on executor 201, please assign something and try again.")
        return
    end
    -- The following prints the dumps of the two handles.
    Printf("============ START OF EXEC DUMP =============")
    executorHandle:Dump()
    Printf("================ END OF DUMP ================")
    Printf("============ START OF PAGE DUMP =============")
    pageHandle:Dump()
    Printf("================ END OF DUMP ================")
end
``` |
