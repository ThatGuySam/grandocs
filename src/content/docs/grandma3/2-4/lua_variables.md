---
title: "Variable Functions"
description: "This topic is not about local variables in Lua plugins. This is about interactions with variables outside the plugins. For instance, the same user and global va"
product: grandma3
version: "2.4"
lang: en
sourceUrl: "https://help.malighting.com/grandMA3/2.4/HTML/lua_variables.html"
scrapedAt: "2026-06-12T21:25:00.012Z"
---
This topic is not about local variables in Lua plugins. This is about interactions with variables outside the plugins. For instance, the same user and global variables can be used in macros and the regular command line. Read more about these in the [Variables](/grandma3/2-4/macro_variables/) topic in the Macro section.

There are two different sets of variables.

The sets are:

- [UserVars()](/grandma3/2-4/lua_objectfree_uservars/) - These are the variables stored as User variables.
- [GlobalVars()](/grandma3/2-4/lua_objectfree_globalvars/) - These are the variabels stored as Global variabels.

There are three functions regarding interaction with variables in a set:

- [GetVar()](/grandma3/2-4/lua_objectfree_getvar/) - Gets the value from a specific variable in one of the sets.
- [SetVar()](/grandma3/2-4/lua_objectfree_setvar/) - Sets a value in a specific variable in one of the sets. This also creates the variable if it does not exist.
- [DelVar()](/grandma3/2-4/lua_objectfree_delvar/) - Deletes a specific variable in a set of variables.

Common for the three functions is a need to know the variable's name. The user and global variables can be listed using the [GetUserVariable](/grandma3/2-4/keyword_getuservariable/) and [GetGlobalVariable](/grandma3/2-4/keyword_getglobalvariable/) keywords combined with an asterisk wildcard.
