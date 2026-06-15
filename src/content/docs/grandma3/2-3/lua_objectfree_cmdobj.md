---
title: "CmdObj()"
description: "The CmdObj Lua function returns information about the command line object."
product: grandma3
version: "2.3"
lang: en
sourceUrl: "https://help.malighting.com/grandMA3/2.3/HTML/lua_objectfree_cmdobj.html"
scrapedAt: "2026-06-15T18:25:29.445Z"
pagefind: false
---
## Description

The **CmdObj** Lua function returns information about the command line object.

## Argument

This function does not have any arguments.

## Return

- **Handle**:\
  The function returns a handle to the command line object.

## Example

This example uses the D[](/grandma3/2-3/lua_object_dump/)ump() function on the command object. It lists all the properties and lists the children and some extra examples of how the command line object can be used:

# Dump()

The **Dump()** function returns a string with information about the object, for instance, the name, class, path of the object, its properties, and children.

Learn more in the [Dump() topic](/grandma3/2-3/lua_object_dump/).

|                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| [Copy Code](javascript:void\(0\))Lua                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| ```
return function()
    --Store the handle to the command object
    local cmd = CmdObj()
    --Print all information about the command object
    Printf("=============== START OF DUMP ===============")
    cmd:Dump()
    Printf("================ END OF DUMP ================")
    --Print some selected elements from the command object - this is currently not in the online manual
    Printf("Current text in the command line: " ..cmd.cmdtext)
    Printf("Current cmd edit object: " ..tostring(cmd.editobject and cmd.editobject:ToAddr()))
    Printf("Current cmd destination: " ..tostring(cmd.destination and cmd.destination:ToAddr()))
    Printf("Current user of the command line: " ..tostring(cmd.user and cmd.user:ToAddr()))
    Printf("Current profile of the command line: " ..tostring(cmd.profile and cmd.profile:ToAddr()))
    Printf("Current DMX readout: " ..cmd.dmxreadout)
    Printf("Current amount steps: " ..cmd.maxstep)
    Printf("Current selected object: " ..tostring(cmd:GetSelectedObject() and cmd:GetSelectedObject():ToAddr()))
end
``` |
