---
title: "/Recipe"
description: "To enter the /Recipe option keyword in the command line, use one of the options:"
product: grandma3
version: "2.3"
lang: en
sourceUrl: "https://help.malighting.com/grandMA3/2.3/HTML/ok_recipe.html"
scrapedAt: "2026-06-15T18:25:16.833Z"
pagefind: false
---
To enter the **/Recipe **option keyword in the command line, use one of the options:

- Type **/Recipe**
- Type the shortcut** /Rec**

## Description

The /Recipe option keyword can only be used together with the [CleanUp keyword](/grandma3/2-3/keyword_cleanup/) and only if the [/Type option keyword](/grandma3/2-3/ok_type/) is set to **Recipe**.

Using /Recipe allows you to define more precisely which recipes are to be deleted.

## Syntax

CleanUp \[Object] \["Object\_Name" or Object\_Number] /Type "Recipe" (/Recipe "Recipe\_Value")

## General Keywords and Option Keywords

General keywords and option keywords that use the /Recipe option keyword.

- [CleanUp keyword](/grandma3/2-3/keyword_cleanup/)
- [/Type option keyword](/grandma3/2-3/ok_type/)

## Values

The /Recipe option keyword uses these values:

- **NoOutput****:**\
  Recipes that do not generate output are deleted. This combines the following values – NotCooked and CookedButOverwritten. When specifying /Type "Recipe" and not using /Recipe in addition, NoOutput will be applied.
- **NotCooked:**\
  If the assigned preset cannot be used by the selection or if the assigned group is empty, **NotCooked** will remove such non-functional recipes. 
- **CookedButOverwritten:**\
  If a later recipe uses a preset with the values of the same attributes in the same selection, **CookedButOverwritten** will delete all recipes that could have been cooked successfully, but which do not generate output.

## Examples

- To clean up all recipes that do not generate output in cue 2 part 0 of sequence 1, type:

|                                                                    |                                                                    |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| ![](/img/grandma3/2-3/icon_commandline-input_logo_v2-0-59d23e.png) | User name\[Fixture]>CleanUp Sequence 1 Cue 2 Part 0 /Type "Recipe" |

 or:

|                                                                    |                                                                                       |
| ------------------------------------------------------------------ | ------------------------------------------------------------------------------------- |
| ![](/img/grandma3/2-3/icon_commandline-input_logo_v2-0-59d23e.png) | User name\[Fixture]>CleanUp Sequence 1 Cue 2 Part 0 /Type "Recipe" /Recipe "NoOutput" |
