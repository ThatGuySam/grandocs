---
title: "RdmList"
description: "To get the RdmList keyword in the command line, type RdmList or the shortcut RdmL in the command line."
product: grandma2
lang: en
sourceUrl: "https://help.malighting.com/grandMA2/en/help/key_keyword_rdmlist.html"
scrapedAt: "2026-06-12T21:27:59.198Z"
---
To get the RdmList keyword in the command line, type **RdmList** or the shortcut **RdmL** in the command line.

## Description

The RdmList keyword generates a list of the received RDM data. The list is displayed in the command line feedback window.

If no fixture or channel ID is given, all RDM data will be listed.

The RdmList keyword is a function keyword.

## Syntax

RdmList \[Channel / Fixture] \[ID] / \[Option] = \[Option value]

## Options

To get a list all available options to the RdmList keyword, type in the command line:

\[Channel]> RdmList /?

The RdmList has the following options:

| Option     | Option shortcut       | Option value        | Description                                                                                                         |
| ---------- | --------------------- | ------------------- | ------------------------------------------------------------------------------------------------------------------- |
| filename   | f                     | e.g. "data"         | Generates the RDM list in the temp folder called data.txt. If no filename is given, the filename is called RDM.txt. |
| multipatch | m                     | e.g. 3              | Generates the RDM list only for the third multipatch fixture.                                                       |
| UID        | no shortcut available | e.g. "43500F019FCB" | Generates the RDM list for this specific UID.                                                                       |

## Examples

- To get the RDM list of fixture 3 in the command line feedback window, type in the command line:

 \[Channel]> RdmList Fixture 3

 

- To get the RDM list of fixture 3 in the command line feedback window and as a .txt file called **RDM Fixture 3** in the temp folder, type in the command line:

  \[Channel]> RdmList Fixture 3 / filename = "RDM Fixture 3"
