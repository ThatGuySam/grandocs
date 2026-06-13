---
title: "Lua Functions - Object API"
description: "Object API means Lua functions that are functions/methods of an object."
product: grandma3
version: "2.4"
lang: en
sourceUrl: "https://help.malighting.com/grandMA3/2.4/HTML/lua_object.html"
scrapedAt: "2026-06-12T21:25:06.911Z"
---
Object API means Lua functions that are functions/methods of an object.

 

All of the object functions take a handle as an argument. This can often be omitted if the function is used with the colon notation. This is the most common use with object functions.

Syntax with the handle:

object.function(object-handle)

Syntax with colon operator:

object:function()

 

Most examples in the object subtopics use the colon operator notation.

Subtopics

- [Addr(handle\[, handle\[, boolean\]\])](/grandma3/2-4/lua_object_addr/)
- [AddrNative(handle\[, handle\[, boolean\]\])](/grandma3/2-4/lua_object_addrnative/)
- [Children(handle)](/grandma3/2-4/lua_object_children/)
- [Count(handle)](/grandma3/2-4/lua_object_count/)
- [Dump (handle)](/grandma3/2-4/lua_object_dump/)
- [Export(handle, string, string)](/grandma3/2-4/lua_object_export/)
- [Get(handle, string\[, integer\])](/grandma3/2-4/lua_object_get/)
- [GetChildClass(handle)](/grandma3/2-4/lua_object_getchildclass/)
- [GetClass(handle)](/grandma3/2-4/lua_object_getclass/)
- [GetDependencies(handle)](/grandma3/2-4/lua_object_getdependencies/)
- [GetReferences(handle)](/grandma3/2-4/lua_object_getreferences/)
- [GetFaderText(handle, {\[string\], \[integer\]})](/grandma3/2-4/lua_object_getfadertext/)
- [GetUIEditor(handle)](/grandma3/2-4/lua_object_getuieditor/)
- [GetUISettings(handle)](/grandma3/2-4/lua_object_getuisettings/)
- [HasActivePlayback(handle)](/grandma3/2-4/lua_object_hasactiveplayback/)
- [Import(handle, string, string)](/grandma3/2-4/lua_object_import/)
- [Ptr(handle, integer)](/grandma3/2-4/lua_object_ptr/)
- [SetFader(handle, {\[number\], \[boolean\], \[string\]})](/grandma3/2-4/lua_object_setfader/)
- [Set(handle, string, string\[, integer\])](/grandma3/2-4/lua_object_set/)
