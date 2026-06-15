---
title: "/Single"
description: "To enter the /Single option keyword in the command line, use one of the options:"
product: grandma3
version: "2.3"
lang: en
sourceUrl: "https://help.malighting.com/grandMA3/2.3/HTML/ok_single.html"
scrapedAt: "2026-06-15T18:25:17.123Z"
pagefind: false
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
| ![](/img/grandma3/2-3/important_gray-f4dfbc.png) | **Important:**                                                                                                                                   |
|                                                  | The combination of the Extract keyword together with the /Single option keyword currently works with presets that are active in the programmer.  |

## Syntax

**\[Function] \[Object] \["Object\_Name" or Object\_Number] /Single**

## General Keywords

General keywords that use the /Single option keyword:

- [AutoCreate keyword](/grandma3/2-3/keyword_autocreate/)
- [Extract keyword](/grandma3/2-3/keyword_extract/)
- [FixtureClass keyword](/grandma3/2-3/keyword_fixture_class/)
- [FixtureLayer keyword](/grandma3/2-3/keyword_fixture_layer/)
- [FixtureType keyword](/grandma3/2-3/keyword_fixturetype/)

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
| ![](/img/grandma3/2-3/icon_commandline-input_logo_v2-0-59d23e.png) | User name\[Fixture]>Extract Selection /Single |
