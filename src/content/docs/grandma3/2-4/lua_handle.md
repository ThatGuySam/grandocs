---
title: "Handle - light_userdata"
description: "Many functions require a handle as an argument or return a handle."
product: grandma3
version: "2.4"
lang: en
sourceUrl: "https://help.malighting.com/grandMA3/2.4/HTML/lua_handle.html"
scrapedAt: "2026-06-12T21:24:59.868Z"
---
Many functions require a handle as an argument or return a handle.

The handle is a custom data type called "light\_userdata".

The handle is a unique identifier that refers to a grandMA3 object, for instance, a specific sequence, cue, preset, or fixture.

The object the handle refers to has some properties. Some can be changed, and some are read-only. The object might also have child objects. The object always has **Name**, **Class**, and **Path** information.

The path is the same as an **address** that identifies where the object exists in the structure of the showfile.

## Related Functions

- [Addr()](/grandma3/2-4/lua_object_addr/) - Converts a handle into a numbered address path.
- [AddrNative()](/grandma3/2-4/lua_object_addrnative/) - Converts a handle into a named address path.
- [FromAddr()](/grandma3/2-4/lua_objectfree_fromaddr/) - Converts a numbered or named address into a handle.
- [HandleToStr()](/grandma3/2-4/lua_objectfree_handletostring/) - Converts a handle into a string with a hexadecimal number.
- [HandleToInt()](/grandma3/2-4/lua_objectfree_handletoint/) - Converts a handle into an integer.
- [StrToHandle()](/grandma3/2-4/lua_objectfree_strtohandle/) - Converts a hexadecimal number string into a handle.
- [IntToHandle()](/grandma3/2-4/lua_objectfree_inttohandle/) - Converts an integer into a handle.
- [ToAddr()](https://malighting.clickhelp.co/smart/grandma3-user-manual-publication/lua_objectfree_toaddr) - Object-free version - Converts a handle into an address string.
- [ToAddr()](https://malighting.clickhelp.co/smart/grandma3-user-manual-publication/lua_object_toaddr) - Object version - Converts a handle into an address string.
