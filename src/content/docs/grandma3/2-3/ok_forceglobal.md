---
title: "/ForceGlobal"
description: "To enter the /ForceGlobal option keyword in the command line, use one of the options:"
product: grandma3
version: "2.3"
lang: en
sourceUrl: "https://help.malighting.com/grandMA3/2.3/HTML/ok_forceglobal.html"
scrapedAt: "2026-06-15T18:25:14.801Z"
pagefind: false
---
To enter the **/ForceGlobal **option keyword in the command line, use one of the options:

- Type **/ForceGlobal**
- Type the shortcut** /Forceg**

## Description

The /ForceGlobal option keyword adds global data to a preset already containing selective data. Selective data which is not used will be removed in the preset of fixtures of the same fixture type. /ForceGlobal removes selective data when updating or storing using the merge option.

## Syntax

\[Function] Preset \["FeatureGroup\_Name" or FeatureGroup\_Number].\["Preset\_Name" or Preset\_Number] /ForceGlobal

## General Keywords

General keywords that use the /ForceGlobal option keyword:

- [Preset keyword](/grandma3/2-3/keyword_preset/)
- [Store keyword](/grandma3/2-3/keyword_store/)
- [Update keyword](/grandma3/2-3/keyword_update/)

## Example

- To replace the selective data by global data in all fixtures of the same fixture type in the second dimmer preset, type:

|                                                                    |                                                   |
| ------------------------------------------------------------------ | ------------------------------------------------- |
| ![](/img/grandma3/2-3/icon_commandline-input_logo_v2-0-59d23e.png) | User name\[Fixture]>Store Preset 1.2 /ForceGlobal |
