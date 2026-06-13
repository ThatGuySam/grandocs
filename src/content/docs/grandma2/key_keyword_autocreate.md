---
title: "AutoCreate"
description: "To execute the keyword AutoCreate, type AutoCreater the shortcut Aunto the command line."
product: grandma2
lang: en
sourceUrl: "https://help.malighting.com/grandMA2/en/help/key_keyword_autocreate.html"
scrapedAt: "2026-06-12T21:27:45.353Z"
---
To execute the keyword AutoCreate, type **AutoCreate** or the shortcut **Au** into the command line. 

## Description

The keyword **AutoCreate** automatically creates preset objects. 

**Important:**\
To auto create presets, create preset reference first. 

For more information on AutoCreate in the Setup see [Auto create presets](/grandma2/key_presets_auto_create/).

## Syntax

AutoCreate \[Object]

 

## Options

To get a list of all options of the keyword AutoCreate, type the following into the command line:

\[Channel]> AutoCreate /?

The keyword AutoCreate has the following options:

| Option | Shortcut    | Description                     |
| ------ | ----------- | ------------------------------- |
| Add    | No shortcut | Adds new objects.               |
| Merge  | m           | Adds data to existing content.  |

 

## Example

\[Channel]> AutoCreate FixtureType 2. "PresetReferences"

Generates all presets with preset references of fixture type 2 and merges them with the existing presets.
