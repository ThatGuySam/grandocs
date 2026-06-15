---
title: "SoftwareUpdate"
description: "To enter the SoftwareUpdate keyword in the command line, use one of the options:"
product: grandma3
version: "2.3"
lang: en
sourceUrl: "https://help.malighting.com/grandMA3/2.3/HTML/keyword_softwareupdate.html"
scrapedAt: "2026-06-15T18:25:11.098Z"
pagefind: false
---
To enter the SoftwareUpdate keyword in the command line, use one of the options:

- Type **SoftwareUpdate** 
- Type the shortcut **Softwareu**

## Description

The SoftwareUpdate keyword is a function keyword which is used to update the software of every MA device or program in the network.

For more information on how to update the software and requirements see [Update grandMA3 Consoles](/grandma3/2-3/update_consoles/).

## Syntax

SoftwareUpdate \[StationType] \[ID/"Name"] "release\_type\_x.y.z.a.xml;/Path/to/MALightingTechnology/installation\_packages"

## Example

**Requirement:**

1. The grandMA3 onPC runs on Windows®
2. Copy the files of the ma folder of the grandMA3\_stick\_v1.6.3.7.zip file to C:\ProgramData\MALightingTechnology\installation\_packages

- To update the first console within your network to grandMA3 v1.6.3.7, type:

|                                                                    |                                                                                                                                        |
| ------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------- |
| ![](/img/grandma3/2-3/icon_commandline-input_logo_v2-0-59d23e.png) | User name\[Fixture]>SoftwareUpdate Console 1 "release\_stick\_1.6.3.7.xml;C:/ProgramData/MAlightingTechnology/installation\_packages"  |
