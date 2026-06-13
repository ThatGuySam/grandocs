---
title: "/PhaserData"
description: "To enter the /PhaserDataption keyword in the command line, use one of the options:"
product: grandma3
version: "2.4"
lang: en
sourceUrl: "https://help.malighting.com/grandMA3/2.4/HTML/ok_phaserdata.html"
scrapedAt: "2026-06-12T21:24:42.721Z"
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

- [Preset keyword](/grandma3/2-4/keyword_preset/)
- [Store keyword](/grandma3/2-4/keyword_store/)

## Example

**Requirement:**

1. Select 10 fixtures.
2. Set XWings to 2.
3. Type in the command line:

|                                                                    |                                    |
| ------------------------------------------------------------------ | ---------------------------------- |
| ![](/img/grandma3/2-4/icon_commandline-input_logo_v2-0-a59235.png) | User name\[Fixture]>At 0 Thru 100  |

 

- To store all data, except the active programmer data, into the first preset of the third All preset pool, type:

|                                                                    |                                                         |
| ------------------------------------------------------------------ | ------------------------------------------------------- |
| ![](/img/grandma3/2-4/icon_commandline-input_logo_v2-0-a59235.png) | User name\[Fixture]>Store Preset 23.1 /PhaserData "No"  |
