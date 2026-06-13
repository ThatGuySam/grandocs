---
title: "/AutoStart"
description: "To enter the /AutoStartption keyword in the command line, use one of the options:"
product: grandma3
version: "2.4"
lang: en
sourceUrl: "https://help.malighting.com/grandMA3/2.4/HTML/ok_autostart.html"
scrapedAt: "2026-06-12T21:24:39.981Z"
---
To enter the **/AutoStart **option keyword in the command line, use one of the options:

- Type **/AutoStart**
- Type the shortcut** /Autos**

## Description

The /AutoStart option keyword is used to define which sequences will start if you enter the preview mode.       

Syntax

Preview Sequence \["Sequence\_Name" or Sequence\_Number] /AutoStart ("Option Value")

## General Keywords

General keywords that use the /AutoStart option keyword:

- [Preview keyword](/grandma3/2-4/keyword_preview/)
- [Sequence keyword](/grandma3/2-4/keyword_sequence/)

## Values

The /AutoStart option keyword uses these values:

- Off  – if several sequences are selected, using "Off"** **starts none of the sequences. 
- Single – if several sequences are selected, using "Single" starts the last sequence.
- Multi – If several sequences are selected, all of them will be started.

## Example

- To load sequences 1 to 3 into preview mode and start the last sequence, type:

|                                                                    |                                                                                            |
| ------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| ![](/img/grandma3/2-4/icon_commandline-input_logo_v2-0-a59235.png) | User name\[Fixture]>Preview Sequence 1 Thru 3 /AutoStart "Single"                          |
