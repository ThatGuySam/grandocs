---
title: "FindTexture(string)"
description: "The FindTixture Lua function returns a handle to the texture matching the input text string - if the texture exists."
product: grandma3
version: "2.3"
lang: en
sourceUrl: "https://help.malighting.com/grandMA3/2.3/HTML/lua_objectfree_findtexture.html"
scrapedAt: "2026-06-15T18:25:30.769Z"
pagefind: false
---
## Description

The **FindTixture** Lua function returns a handle to the texture matching the input text string - if the texture exists.

## Arguments

- **String**:\
  The text string must be the name of the texture without the file type. See the example below.

## Return

- **Handle** | **nil**:\
  The function returns the texture handle or nil if it does not exist. 

## Example

This example prints the information about the "button" texture. The example uses the Dump() function.

# Dump()

The **Dump()** function returns a string with information about the object, for instance, the name, class, path of the object, its properties, and children.

Learn more in the [Dump() topic](/grandma3/2-3/lua_object_dump/).

|                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [Copy Code](javascript:void\(0\))Lua                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| ```
return function ()
    -- Set a texture name.
    local textureName = "button"
    -- Get the handle of the texture.
    local textureHandle = FindTexture(textureName)
    -- Check if textureHandle returned something and provide feedback.
    if textureHandle == nil then
        ErrPrintf("Texture does not exist.")
    else
        Printf("=============== START OF DUMP ===============")
        FindTexture(textureName):Dump()
        Printf("================ END OF DUMP ================")
    end
end
``` |
