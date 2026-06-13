---
title: "/HighPrecision"
description: "To enter the /HighPrecisionption keyword in the command line, use one of the options:"
product: grandma3
version: "2.4"
lang: en
sourceUrl: "https://help.malighting.com/grandMA3/2.4/HTML/ok_highprecision.html"
scrapedAt: "2026-06-12T21:24:40.992Z"
---
To enter the **/HighPrecision **option keyword in the command line, use one of the options:

- Type **/HighPrecision**
- Type the shortcut** /H**

## Description

The /HighPrecision option keyword is used to increase the precision of metrics in fixture types during their export. 

Beam exported **without using** /HighPrecision: 

\<Beam Name="H1\_ColorPixel1" Model="CenterPixel" PosZ="-0.0730"\[...]  

Same beam exported **using /HighPrecision**: 

\<Beam Name="H1\_ColorPixel1" Model="CenterPixel" PosZ="-0.072999998927116"\[...]\
 

## Syntax

Export \["FixtureType\_Name" or FixtureType\_Number] /HighPrecision

## General Keywords

General keywords that use the /HighPrecision option keyword:

- [Export keyword](/grandma3/2-4/keyword_export/)

## Example

- To export fixture type 3 with a higher precision, type:

|                                                                    |                                                                         |
| ------------------------------------------------------------------ | ----------------------------------------------------------------------- |
| ![](/img/grandma3/2-4/icon_commandline-input_logo_v2-0-a59235.png) | User name\[Fixture]>Export FixtureType 3 /HighPrecision                 |
