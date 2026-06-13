---
title: "/OutputStations"
description: "To enter the /OutputStationsption keyword in the command line, use one of the options:"
product: grandma3
version: "2.4"
lang: en
sourceUrl: "https://help.malighting.com/grandMA3/2.4/HTML/ok_outputstations.html"
scrapedAt: "2026-06-12T21:24:42.494Z"
---
To enter the **/OutputStations **option keyword in the command line, use one of the options:

- Type **/OutputStations**
- Type the shortcut **/Outputs**

## Description

The /OutputStations option keyword is used to overwrite the current output stations with the output stations of the show file that will be loaded. 

## Syntax

\[Function] \["Show\_Name"] /OutputStations

## General Keywords

General keywords that use the /OutputStations option keyword:

- [LoadShow](/grandma3/2-4/keyword_loadshow/)
- [NewShow](/grandma3/2-4/keyword_newshow/)

## Example

- To load the output stations of the show file "A Midsummer Night's Dream" together with its show data, type:

|                                                                    |                                                                           |
| ------------------------------------------------------------------ | ------------------------------------------------------------------------- |
| ![](/img/grandma3/2-4/icon_commandline-input_logo_v2-0-a59235.png) | User name\[Fixture]>LoadShow "A Midsummer Night's Dream" /OutputStations  |
