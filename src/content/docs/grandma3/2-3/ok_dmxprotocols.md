---
title: "/DMXProtocols"
description: "To enter the /DMXProtocols option keyword in the command line, use one of the options:"
product: grandma3
version: "2.3"
lang: en
sourceUrl: "https://help.malighting.com/grandMA3/2.3/HTML/ok_dmxprotocols.html"
scrapedAt: "2026-06-15T18:25:14.653Z"
pagefind: false
---
To enter the **/DMXProtocols **option keyword in the command line, use one of the options:

- Type **/DMXProtocols**
- Type the shortcut **/Dmxp**

## Description

The /DMXProtocols option keyword is used to load the DMX protocol settings (Art-Net and sACN) of the show file. 

## Syntax

\[Function] \["Show\_Name"] /DMXProtocols

## General Keywords

General keywords that use the /DMXProtocols option keyword:

- [LoadShow](/grandma3/2-3/keyword_loadshow/)
- [NewShow](/grandma3/2-3/keyword_newshow/)

## Examples

- To load the DMX protocols of the show file "A Midsummer Night's Dream" and its show data, type:

|                                                                    |                                                                         |
| ------------------------------------------------------------------ | ----------------------------------------------------------------------- |
| ![](/img/grandma3/2-3/icon_commandline-input_logo_v2-0-59d23e.png) | User name\[Fixture]>LoadShow "A Midsummer Night's Dream" /DMXProtocols  |

 

- To create a new show and clear all DMX protocols, type:

|                                                                    |                                                     |
| ------------------------------------------------------------------ | --------------------------------------------------- |
| ![](/img/grandma3/2-3/icon_commandline-input_logo_v2-0-59d23e.png) | User name\[Fixture]>NewShow "Phobos" /DMXProtocols  |
