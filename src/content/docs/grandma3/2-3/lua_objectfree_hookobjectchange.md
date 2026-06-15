---
title: "HookObjectChange(function, handle, handle[, handle])"
description: "The HookObjectChange Lua function automatically calls a function when a grandMA3 object changes."
product: grandma3
version: "2.3"
lang: en
sourceUrl: "https://help.malighting.com/grandMA3/2.3/HTML/lua_objectfree_hookobjectchange.html"
scrapedAt: "2026-06-15T18:25:33.313Z"
pagefind: false
---
## Description

The **HookObjectChange** Lua function automatically calls a function when a grandMA3 object changes.

## Arguments

- **Function**:\
  This must be the name of a function. This function is triggered every time the provided grandMA3 object changes.
- **Handle**:\
  This is the handle for the grandMA3 objects that should be monitored for changes. The triggered function passes this handle on as the first argument.
- **Handle**:\
  The handle must be for the plugin creating this HookObjectChange - it is the handle for "this" plugin.
- **Handle** (optional):\
  This optional handle is for an object that will be passed on to the triggered function (as the third argument).

## Return

- **Integer**:\
  The function returns an integer identifying the hook. This can be saved to unhook the object later.

|                                            |                                                                                                                                                                                                                |
| ------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ![](/img/grandma3/2-3/tip_gray-269535.png) | **Hint:**                                                                                                                                                                                                      |
|                                            | See also these related functions: [DumpAllHooks](/grandma3/2-3/lua_objectfree_dumpallhooks/), [Unhook](/grandma3/2-3/lua_objectfree_unhook/), [UnhookMultiple](/grandma3/2-3/lua_objectfree_unhookmultiple/).  |

## Example

To call a function every time the content of the sequence pool changes, create a plugin with this code:

|                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [Copy Code](javascript:void\(0\))Lua                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| ```
-- Get the handle to this Lua component.
local luaComponentHandle = select(4,...)

function Main()
    -- Get a handle to the sequence pool.
    local hookObject = DataPool().Sequences
    -- Get a handle to this plugin.
    local pluginHandle = luaComponentHandle:Parent()
    -- Create the hook and save the Hook ID.
    SequenceHookId = HookObjectChange(MySequencePoolCallback, hookObject, pluginHandle)
    -- Print the returned Hook ID.
    Printf("HookId: " .. SequenceHookId)
end

-- This function is called when there are changes in the sequence pool.
function MySequencePoolCallback(obj)
    Printf(tostring(obj.name) .. " changed!")
end

return Main
``` |
