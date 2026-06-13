---
title: "RdmUnmatch"
description: "To get the RdmUnmatch keyword in the command line, type RdmUnmatchr the shortcut Rdmn the command line."
product: grandma2
lang: en
sourceUrl: "https://help.malighting.com/grandMA2/en/help/key_keyword_rdmunmatch.html"
scrapedAt: "2026-06-12T21:27:59.383Z"
---
To get the RdmUnmatch keyword in the command line, type **RdmUnmatch** or the shortcut **Rdm** in the command line.

## Description

The RdmUnmatch keyword unmatches previous matched RDM devices in the show file. If no object is given, the current selection will be used.

Possible objects are:

- Channel
- Fixture
- FixtureType
- RDMFixtureType
- Group
- Sequence
- Cue
- Executor
- Preset (only selective Presets)
- Selection
- World

The RdmUnmatch keyword is a function keyword.

## Syntax

RDMUnmatch \[Object-List]

## Examples

- To unmatch the selected fixtures, type in the command line:

\[Channel]> RdmUnmatch

 

- To unmatch the fixtures used in group 1, type in the command line:

\[Channel]> RdmUnmatch Group 1

 

- To unmatch the fixtures used in group 1 and in sequence 2, type in the command line:

\[Channel]> RdmUnmatch Group 1 If Sequence 2
