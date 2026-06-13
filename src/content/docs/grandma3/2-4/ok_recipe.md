---
title: "/Recipe"
description: "To enter the /Recipeption keyword in the command line, use one of the options:"
product: grandma3
version: "2.4"
lang: en
sourceUrl: "https://help.malighting.com/grandMA3/2.4/HTML/ok_recipe.html"
scrapedAt: "2026-06-12T21:24:42.928Z"
---
To enter the **/Recipe **option keyword in the command line, use one of the options:

- Type **/Recipe**
- Type the shortcut** /Rec**

## Description

The /Recipe option keyword can only be used together with the [CleanUp keyword](/grandma3/2-4/keyword_cleanup/) and only if the [/Type option keyword](/grandma3/2-4/ok_type/) is set to **Recipe**.

Using /Recipe allows you to define more precisely which recipes are to be deleted.

## Syntax

\[Function] \[Object] \["Object\_Name" or Object\_Number] (/Type "Recipe")(/Recipe "Recipe\_Value")

## General Keywords and Option Keywords

General keywords and option keywords that use the /Recipe option keyword.

- [CleanUp keyword](/grandma3/2-4/keyword_cleanup/)
- [Store keyword](/grandma3/2-4/keyword_store/)
- [/Type option keyword](/grandma3/2-4/ok_type/)

## Values

The /Recipe option keyword uses these values:

- **NoOutput****:**\
  Recipes that do not generate output are deleted. This combines the following values – NotCooked and CookedButOverwritten. When specifying /Type "Recipe" and not using /Recipe in addition, NoOutput will be applied.
- **NotCooked:**\
  If the assigned preset cannot be used by the selection or if the assigned group is empty, **NotCooked** will remove such non-functional recipes. 
- **CookedButOverwritten:**\
  If a later recipe uses a preset with the values of the same attributes in the same selection, **CookedButOverwritten** will delete all recipes that could have been cooked successfully, but which do not generate output.
- **Normal:**\
  Is only used in combination with the Store keyword. When storing recipes into a preset **Normal** keeps the selection of recipes of the programmer. 
- **NoSelection:\
**Is only used in combination with the Store keyword. **NoSelection** stores recipe presets without selection.
