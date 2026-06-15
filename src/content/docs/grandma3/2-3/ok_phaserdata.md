---
title: "/PhaserData"
description: "To enter the /PhaserData option keyword in the command line, use one of the options:"
product: grandma3
version: "2.3"
lang: en
sourceUrl: "https://help.malighting.com/grandMA3/2.3/HTML/ok_phaserdata.html"
scrapedAt: "2026-06-15T18:25:16.549Z"
pagefind: false
---
To enter the **/PhaserData **option keyword in the command line, use one of the options:

- Type **/PhaserData**
- Type the shortcut** /Ph**

## Description

The /PhaserData option keyword is used to define if attribute data will be stored in presets. 

## Syntax

Store Preset \["FeatureGroup\_Name" or FeatureGroup\_Number].\["Preset\_Name" or Preset\_Number] /PhaserData \["Option\_Value"]

## General Keywords

General keywords that use the /PhaserData option keyword:

- [Preset keyword](/grandma3/2-3/keyword_preset/)
- [Store keyword](/grandma3/2-3/keyword_store/)

## Example

**Requirement:**

1. Select 10 fixtures.
2. Set XWings to 2.
3. Type in the command line:

|                                                                    |                                    |
| ------------------------------------------------------------------ | ---------------------------------- |
| ![](/img/grandma3/2-3/icon_commandline-input_logo_v2-0-59d23e.png) | User name\[Fixture]>At 0 Thru 100  |

 

- To store all data, except the active programmer data, into the first preset of the third All preset pool, type:

|                                                                    |                                                         |
| ------------------------------------------------------------------ | ------------------------------------------------------- |
| ![](/img/grandma3/2-3/icon_commandline-input_logo_v2-0-59d23e.png) | User name\[Fixture]>Store Preset 23.1 /PhaserData "No"  |
