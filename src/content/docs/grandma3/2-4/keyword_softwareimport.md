---
title: "SoftwareImport"
description: "To enter the SoftwareImport keyword in the command line, use one of the options:"
product: grandma3
version: "2.4"
lang: en
sourceUrl: "https://help.malighting.com/grandMA3/2.4/HTML/keyword_softwareimport.html"
scrapedAt: "2026-06-12T21:24:36.678Z"
---
To enter the SoftwareImport keyword in the command line, use one of the options:

- Type **SoftwareImport**
- Type the shortcut **So**

## Description

The SoftwareImport keyword is a function keyword which is used to import installation packages of a grandMA3 installer permanently to the hard drive of your grandMA3 console or the grandMA3 onPC using a given path. 

## Syntax

SoftwareImport "release\_type\_vx.x.x.x.xml;Path/to/the/location/of/the/installer"

## Example

- To import the installation packages of the grandMA3 stick v1.6.3.7 on the USB drive "Software" that is recognized as drive D on a Windows® computer, and where the files are located within the ma folder, type:

|                                                                    |                                                                                   |
| ------------------------------------------------------------------ | --------------------------------------------------------------------------------- |
| ![](/img/grandma3/2-4/icon_commandline-input_logo_v2-0-a59235.png) | User name\[Fixture]>SoftwareImport "release\_stick\_v1.6.3.7.xml;D:/Software/ma"  |
