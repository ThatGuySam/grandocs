---
title: "KnockIn"
description: "To enter the KnockIn keyword in the command line, use one of the options:"
product: grandma3
version: "2.3"
lang: en
sourceUrl: "https://help.malighting.com/grandMA3/2.3/HTML/keyword_knockin.html"
scrapedAt: "2026-06-15T18:25:04.915Z"
pagefind: false
---
To enter the KnockIn keyword in the command line, use one of the options:

- Type **KnockIn**
- Type the shortcut **Kn**

## Description

KnockIn is used to take values that are located for example in sequences or presets actively into the programmer. 

This is useful to the effect that you can actively take values that have already been stored into the programmer. 

## Syntax

Fixture \["Fixture\_Name" or Fixture\_Number] KnockIn** **\["Attribute\_Name" or Attribute\_Number]/\["FeatureGroup\_Name" or FeatureGroup\_Number]

KnockIn Fixture \["Fixture\_Name" or Fixture\_Number]

**Attribute \["Attribute\_Name" or Attribute\_Number] At KnockIn**

## Examples

- To knock in the attribute Color RGB\_R in fixture 1, type:

|                                                                    |                                                               |
| ------------------------------------------------------------------ | ------------------------------------------------------------- |
| ![](/img/grandma3/2-3/icon_commandline-input_logo_v2-0-59d23e.png) | User name\[Fixture]>Fixture 1 KnockIn Attribute "ColorRGB\_R" |

 

- To knock in all attributes of fixture 2, type:

|                                                                    |                                        |
| ------------------------------------------------------------------ | -------------------------------------- |
| ![](/img/grandma3/2-3/icon_commandline-input_logo_v2-0-59d23e.png) | User name\[Fixture]>KnockIn Fixture 2  |

 

- To knock in only the dimmer values of fixtures 11 through 15, type:

|                                                                    |                                                    |
| ------------------------------------------------------------------ | -------------------------------------------------- |
| ![](/img/grandma3/2-3/icon_commandline-input_logo_v2-0-59d23e.png) | User name\[Fixture]> Fixture 11 Thru 15 At KnockIn |
