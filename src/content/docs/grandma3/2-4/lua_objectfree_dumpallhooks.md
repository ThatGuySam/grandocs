---
title: "DumpAllHooks()"
description: "The DumpAllHooks function prints a list of the hooks in the system. The list is only shown in the System Monitor."
product: grandma3
version: "2.4"
lang: en
sourceUrl: "https://help.malighting.com/grandMA3/2.4/HTML/lua_objectfree_dumpallhooks.html"
scrapedAt: "2026-06-12T21:25:01.499Z"
---
## Description

The **DumpAllHooks** function prints a list of the hooks in the system. The list is only shown in the [System Monitor](/grandma3/2-4/si_system_monitor/).

## Arguments

This function does not accept any arguments.

## Return

The function does not return anything. It does print a list in the system monitor.

|                                            |                                                                                                                                                                                                                        |
| ------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ![](/img/grandma3/2-4/tip_gray-639af3.png) | **Hint:**                                                                                                                                                                                                              |
|                                            | See also these related functions: [HookObjectChange](/grandma3/2-4/lua_objectfree_hookobjectchange/), [Unhook](/grandma3/2-4/lua_objectfree_unhook/), [UnhookMultiple](/grandma3/2-4/lua_objectfree_unhookmultiple/).  |

## Example

This example prints the list of hooks in the system monitor.

The system monitor shows what is happening at the station. This includes feedback on user commands. It logs the different things happening in the background. It also shows warnings, errors, and changes to the system. Learn more in the [System Monitor topic](/grandma3/2-4/si_system_monitor/).

|                                                                                                                                                                                                                                                |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [Copy Code](javascript:void\(0\))Lua                                                                                                                                                                                                           |
| ```
return function()
    -- Dumps a list of all the hooks in the System Monitor.
    Printf("=============== START OF HOOK DUMP ===============")
    DumpAllHooks()
    Printf("================ END OF HOOK DUMP ================")
end
``` |
