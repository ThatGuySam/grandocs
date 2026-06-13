---
title: "LoadPrev"
description: "To execute the keyword LoadPrev, type LoadPrevr the shortcut LoadPnto the command line."
product: grandma2
lang: en
sourceUrl: "https://help.malighting.com/grandMA2/en/help/key_keyword_loadprev.html"
scrapedAt: "2026-06-12T21:27:54.718Z"
---
To execute the keyword LoadPrev, type **LoadPrev** or the shortcut **LoadP** into the command line.

## Description

LoadPrev is a function keyword. If an executor stands in a cue, LoadPrev loads the previous cue.

If a cue was already loaded, LoadPrev loads the preceding cue of the one that was already loaded.  

## Syntax

LoadPrev

## Examples

\[Channel]> LoadPrev Executor 2

If the executor 2 stands in cue 5, LoadPrev loads cue 4. "Loaded 4" starts flashing in red at the bottom of the mini executor.

If cue 4 was loaded on the executor 2, LoadPrev loads cue 3. "Loaded 3" starts flashing in red at the bottom of the mini executor.

For more information see the [keyword Load](/grandma2/key_keyword_load/) and the [keyword LoadNext](/grandma2/key_keyword_loadnext/).
