---
title: "/Selection"
description: "To enter the /Selectionption keyword in the command line, use one of the options:"
product: grandma3
version: "2.4"
lang: en
sourceUrl: "https://help.malighting.com/grandMA3/2.4/HTML/ok_selection.html"
scrapedAt: "2026-06-12T21:24:43.072Z"
---
To enter the **/Selection **option keyword in the command line, use one of the options:

- Type **/Selection**
- Type the shortcut** /Selectio**

## Description

The /Selection option keyword defines if the current selection will be stored in a recipe. 

For more informtion on how recipes work see [Recipes](/grandma3/2-4/recipes/). 

## Syntax

Store Preset \["FeatureGroup\_Name" or FeatureGroup\_Number].\["Preset\_Name" or Preset\_Number].\["Recipe\_Name" or Recipe\_Number] /Selection \["Option\_Value"]

Store Sequence \["Sequence\_Name" or Sequence\_Number] Cue \["Cue\_Name" or Cue\_Number] Part \["Part\_Name" or Part\_Number].\["Recipe\_Name" or Recipe\_Number] /Selection \["Option\_Value"]

## General Keywords

General keywords that use the /Selection option keyword:

- [Preset keyword](/grandma3/2-4/keyword_preset/)
- [Sequence keyword](/grandma3/2-4/keyword_sequence/)
- [Store keyword](/grandma3/2-4/keyword_store/)

## Example

- In order not to store the current selection into the recipe, type:

|                                                                    |                                                         |
| ------------------------------------------------------------------ | ------------------------------------------------------- |
| ![](/img/grandma3/2-4/icon_commandline-input_logo_v2-0-a59235.png) | User name\[Fixture]>Store Preset 3.2.1 /Selection "No"  |
