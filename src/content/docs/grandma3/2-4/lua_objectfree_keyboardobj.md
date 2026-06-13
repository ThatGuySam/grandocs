---
title: "KeyboardObj()"
description: "The KeyboardObj function returns the handle to the first found keyboard object."
product: grandma3
version: "2.4"
lang: en
sourceUrl: "https://help.malighting.com/grandMA3/2.4/HTML/lua_objectfree_keyboardobj.html"
scrapedAt: "2026-06-12T21:25:04.981Z"
---
## Description

The **KeyboardObj** function returns the handle to the first found keyboard object.

## Arguments

This function does not accept any arguments.

## Return

- **Handle**:\
  The function returns the handle to the keyboard object.

## Example

This example prints the information of the keyboard object. It uses the Dump() function:

# Dump()

The **Dump()** function returns a string with information about the object, for instance, the name, class, path of the object, its properties, and children.

Learn more in the [Dump() topic](/grandma3/2-4/lua_object_dump/).

|                                                                                                                                                                                                                                         |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [Copy Code](javascript:void\(0\))Lua                                                                                                                                                                                                    |
| ```
return function()
    -- Print all informatin about the KeyboardObj object
    Printf("=============== START OF DUMP ===============")
    KeyboardObj():Dump()
    Printf("================ END OF DUMP ================")
end
``` |
