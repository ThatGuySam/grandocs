---
title: "RdmSetpatch"
description: "To get the RdmSetPatch keyword in the command line, type RdmSetPatch or the shortcut RdmSetPat in it."
product: grandma2
lang: en
sourceUrl: "https://help.malighting.com/grandMA2/en/help/key_keyword_rdmsetpatch.html"
scrapedAt: "2026-06-12T21:27:59.349Z"
---
To get the RdmSetPatch keyword in the command line, type **RdmSetPatch** or the shortcut **RdmSetPat** in it.

## Description

With the RdmSetPatch keyword you set the DMX address of a RDM fixture by using the command line.

If no Unique ID is given, the fixture selection will be used.

The RdmSetPatch keyword is a function keyword.

For more information, see [RDM](/grandma2/key_rdm/).

## Syntax

RdmSetPatch \[DMX address] / \[Option] = \[Option Value]

## Options

To get a list all available options to the RdmSetPatch keyword, type in the command line:

\[Channel]> RdmSetPatch /?

The RdmSetpatch has the following options:

| Option     | Option shortcut       | Option value                                                                                       | Description                                           |
| ---------- | --------------------- | -------------------------------------------------------------------------------------------------- | ----------------------------------------------------- |
| multipatch | m                     | 0 = for all multipatches and the fixture 1 = multipatch for the first multipatch fixture and so on | Sets the multipatch index.                            |
| UID        | No shortcut available | e.g. "43500F019FCB"                                                                                | Sets the RDM UID to send RDM Parameter to the device. |

## Examples

- To set the fixtures of the current fixture selection to the DMX address 25, type in the command line:

\[Channel]> RdmSetPatch 25

 

- To set the fifth multipatch fixture of the current fixture selection to the DMX address 25, type in the command line:

 \[Channel]> RdmSetPatch 25 / multipatch = 5

 

- To set the DMX address of the fixture with the UID 43500F019FCB to 25, type in the command line:

 \[Channel]> RdmSetPatch 25 / UID = 43500F019FCB
