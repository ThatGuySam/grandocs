---
title: "AutoStore"
description: "To enter the AutoStore keyword in the command line, use one of the options:"
product: grandma3
version: "2.4"
lang: en
sourceUrl: "https://help.malighting.com/grandMA3/2.4/HTML/keyword_autostore.html"
scrapedAt: "2026-06-12T21:24:22.116Z"
---
To enter the AutoStore keyword in the command line, use one of the options:

- Type **AutoStore**
- Type the shortcut **Autos**

## Description

The AutoStore keyword is used to directly store presets in a fixture type. This can be useful, for example, when you have to use a fixture type in a different show file, and want to save time by creating your own standard set of presets.

Syntax

AutoStore FixtureType \["FixtureType\_Name" or FixtureType\_Number]

AutoStore Fixture \["Fixture\_Name" or Fixture\_Number] 

AutoStore Preset \["FeatureGroup\_Name" or FeatureGroup\_Number].\["Preset\_Name" or Preset\_Number] At FixtureType \["FixtureType\_Name" or FixtureType\_Number] 

## Option Keywords

The AutoStore keyword uses the following option keywords:

- [/Merge](/grandma3/2-4/ok_merge/)
- [/NoConfirmation](/grandma3/2-4/ok_noconfirmation/)
- [/Overwrite](/grandma3/2-4/ok_overwrite/)

## Examples

- To store your presets into the fixture type Mac Aura XB, type:

|                                                                    |                                                         |
| ------------------------------------------------------------------ | ------------------------------------------------------- |
| ![](/img/grandma3/2-4/icon_commandline-input_logo_v2-0-a59235.png) | User name\[Fixture]>AutoStore FixtureType "Mac Aura XB" |
