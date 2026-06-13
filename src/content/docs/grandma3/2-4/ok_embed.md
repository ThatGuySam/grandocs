---
title: "/Embed"
description: "To enter the /Embedption keyword in the command line, use one of the options:"
product: grandma3
version: "2.4"
lang: en
sourceUrl: "https://help.malighting.com/grandMA3/2.4/HTML/ok_embed.html"
scrapedAt: "2026-06-12T21:24:40.478Z"
---
To enter the **/Embed **option keyword in the command line, use one of the options:

- Type **/Embed**
- Type the shortcut** /E **or **/EB**

## Description

The /Embed option keyword is used to store presets that are active in the programmer into a preset. The values in the new preset reference the preset that was active in the programmer. 

## Syntax

Store Preset \["FeatureGroup\_Name" or FeatureGroup\_Number].\["Preset\_Name" or Preset\_Number] /Embed

## General Keywords

General keywords that use the /Embed option keyword:

- [Preset keyword](/grandma3/2-4/keyword_preset/)
- [Store keyword](/grandma3/2-4/keyword_store/)

## Example

**Requirement: **Presets are activated in the programmer. 

 

- To store the preset values that are currently active in the programmer together with the reference of these values into the second dimmer preset, type:

|                                                                    |                                              |
| ------------------------------------------------------------------ | -------------------------------------------- |
| ![](/img/grandma3/2-4/icon_commandline-input_logo_v2-0-a59235.png) | User name\[Fixture]>Store Preset 1.2 /Embed  |
