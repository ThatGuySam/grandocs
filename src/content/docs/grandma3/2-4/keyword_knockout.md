---
title: "KnockOut"
description: "To enter the Off keyword in the command line, use one of the options:"
product: grandma3
version: "2.4"
lang: en
sourceUrl: "https://help.malighting.com/grandMA3/2.4/HTML/keyword_knockout.html"
scrapedAt: "2026-06-12T21:24:30.129Z"
---
To enter the Off keyword in the command line, use one of the options:

- Type **KnockOut**
- Type the shortcut **Knocko**

|                                            |                                                                |
| ------------------------------------------ | -------------------------------------------------------------- |
| ![](/img/grandma3/2-4/tip_gray-639af3.png) | **Hint:**                                                      |
|                                            | The KnockOut keyword is used as a synonym of the Off keyword.  |

## Description

The KnockOut keyword is used as a function and value keyword to:

- Knock out selections in the programmer
- Knock out active attributes in the programmer

## Syntax

Fixture \["Fixture\_Name" or Fixture\_Number] KnockOut \["Attribute\_Name" or Attribute\_Number]/\["FeatureGroup\_Name" or FeatureGroup\_Number]

KnockOut Fixture \["Fixture\_Name" or Fixture\_Number]

Attribute \["Attribute\_Name" or Attribute\_Number] At KnockOut

## Examples

- To knock out the parameters of fixture 2 and 4 in the programmer, type:

|                                                                    |                                            |
| ------------------------------------------------------------------ | ------------------------------------------ |
| ![](/img/grandma3/2-4/icon_commandline-input_logo_v2-0-a59235.png) | User name\[Fixture]>KnockOut Fixture 2 + 4 |

 

- To knock out the attribute Color RGB\_R in the selected fixtures, type:

|                                                                    |                                                          |
| ------------------------------------------------------------------ | -------------------------------------------------------- |
| ![](/img/grandma3/2-4/icon_commandline-input_logo_v2-0-a59235.png) | User name\[Fixture]>Attribute "ColorRGB\_R"  At KnockOut |

 

- To knock out the dimmer attribute in fixture 5, type:

|                                                                    |                                           |
| ------------------------------------------------------------------ | ----------------------------------------- |
| ![](/img/grandma3/2-4/icon_commandline-input_logo_v2-0-a59235.png) | User name\[Fixture]>Fixture 5 At KnockOut |
