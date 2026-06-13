---
title: "UnhookMultiple(function, handle, handle)"
description: "The UnhookMultipleua function unhooks multiple hooks based on an input. This input acts like a filter to identify all the hooks that should be unhooked."
product: grandma3
version: "2.4"
lang: en
sourceUrl: "https://help.malighting.com/grandMA3/2.4/HTML/lua_objectfree_unhookmultiple.html"
scrapedAt: "2026-06-12T21:25:06.742Z"
---
## Description

The **UnhookMultiple** Lua function unhooks multiple hooks based on an input. This input acts like a filter to identify all the hooks that should be unhooked.

The [DumpAllHooks](/grandma3/2-4/lua_objectfree_dumpallhooks/) function can be used to list all the existing hooks in the system.

## Arguments

- **Function** or **nil**:\
  This must be the name of a triggered function or nil.
- **Handle** or **nil**:\
  This must be the handle for the target object or nil.
- **Handle** or **nil**:\
  The must be the handle for the context object or nil.

The target and context names can be seen using the [DumpAllHooks](/grandma3/2-4/lua_objectfree_dumpallhooks/) function.

## Return

- **Integer**:\
  The function returns an integer indicating how many hooks were unhooked.

|                                            |                                                                                                                                                                                                                    |
| ------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| ![](/img/grandma3/2-4/tip_gray-639af3.png) | **Hint:**                                                                                                                                                                                                          |
|                                            | See also these related functions: [DumpAllHooks](/grandma3/2-4/lua_objectfree_dumpallhooks/), [HookObjectChange](/grandma3/2-4/lua_objectfree_hookobjectchange/), [Unhook](/grandma3/2-4/lua_objectfree_unhook/).  |

## Example

This example unhooks all hooked related to the function created in the example for the [HookObjectChange](/grandma3/2-4/lua_objectfree_hookobjectchange/) - please run the example from that topic before running this one.

|                                                                                                                                                                                                                                                                     |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [Copy Code](javascript:void\(0\))Lua                                                                                                                                                                                                                                |
| ```
return function ()
    -- Unhooks all hooks related to the "MySequencePoolCallback" function.
    local amount = UnhookMultiple(MySequencePoolCallback)
    -- Print how many hooks that were unhooked.
    Printf(amount .. " hook(s) were unhooked.")
end
``` |
