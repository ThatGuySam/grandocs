---
title: "Unhook(integer)"
description: "The Unhookua function removes a hook."
product: grandma3
version: "2.4"
lang: en
sourceUrl: "https://help.malighting.com/grandMA3/2.4/HTML/lua_objectfree_unhook.html"
scrapedAt: "2026-06-12T21:25:06.745Z"
---
## Description

The **Unhook** Lua function removes a hook.

Hooks are an automatically triggered function that activates when a grandMA3 object changes. A hook can be created using the [HookObjectChange](/grandma3/2-4/lua_objectfree_hookobjectchange/) function.

## Arguments

- **Integer**:\
  This must be the integer matching the hook that should be unhooked.

|                                            |                                                                                                                                                                                                                                                                                |
| ------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| ![](/img/grandma3/2-4/tip_gray-639af3.png) | **Hint:**                                                                                                                                                                                                                                                                      |
|                                            | All hooks can be listed using the [DumpAllHooks](/grandma3/2-4/lua_objectfree_dumpallhooks/) function, but this does not reveal the corresponding hook integer ID. Use the [UnhookMultiple](/grandma3/2-4/lua_objectfree_unhookmultiple/) function if the integer is unknown.  |
