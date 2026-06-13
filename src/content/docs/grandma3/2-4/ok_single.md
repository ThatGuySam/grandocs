---
title: "/Single"
description: "To enter the /Singleption keyword in the command line, use one of the options:"
product: grandma3
version: "2.4"
lang: en
sourceUrl: "https://help.malighting.com/grandMA3/2.4/HTML/ok_single.html"
scrapedAt: "2026-06-12T21:24:43.220Z"
---
To enter the **/Single **option keyword in the command line, use one of the options:

- Type **/Single**
- Type the shortcut **/Si**

## Description

The /Single option keyword is used when extracting presets or when autocreating single fixture groups. 

When extracting embedded presets or phaser presets where presets are integrated in the steps, Extract will call directly the values of the source presets.

Using the **/Single** option keyword together with the Extract keyword makes it possible to extract one level down in the hierarchy of presets.

|                                                  |                                                                                                                                                  |
| ------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| ![](/img/grandma3/2-4/important_gray-89eed8.png) | **Important:**                                                                                                                                   |
|                                                  | The combination of the Extract keyword together with the /Single option keyword currently works with presets that are active in the programmer.  |

## Syntax

**\[Function] \[Object] \["Object\_Name" or Object\_Number] /Single**

## General Keywords

General keywords that use the /Single option keyword:

- [AutoCreate keyword](/grandma3/2-4/keyword_autocreate/)
- [Extract keyword](/grandma3/2-4/keyword_extract/)
- [FixtureClass keyword](/grandma3/2-4/keyword_fixture_class/)
- [FixtureLayer keyword](/grandma3/2-4/keyword_fixture_layer/)
- [FixtureType keyword](/grandma3/2-4/keyword_fixturetype/)

## Examples

### Extract Example

**Requirement:**

1. Create 2 color presets.
2. Embed these color presets into a different color preset:\
   Embed the second color preset into the All preset 21.1.
3. Select fixtures and apply the All preset on them.

- To call the embedded color preset into the programmer, type once:

|                                                                    |                                               |
| ------------------------------------------------------------------ | --------------------------------------------- |
| ![](/img/grandma3/2-4/icon_commandline-input_logo_v2-0-a59235.png) | User name\[Fixture]>Extract Selection /Single |
