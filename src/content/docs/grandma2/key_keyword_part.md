---
title: "Part"
description: "To get the Part keyword in the command line, press Cue Cue (= Part)."
product: grandma2
lang: en
sourceUrl: "https://help.malighting.com/grandMA2/en/help/key_keyword_part.html"
scrapedAt: "2026-06-12T21:27:57.634Z"
---
To get the Part keyword in the command line, press Cue Cue (= Part).

You can also type **Part** or the shortcut **P** in the command line.

## Description

The Part keyword is an object keyword to segment cues in parts.

Parts are useful to assign and edit different timings of groups of fixture parameters.

## Syntax

**\[Function] Part** \[ID]

## Example

- To create a second part of cue 3 for the selected executor, type in the command line:

\[Channel]> Store Cue 3 Part 2

 

- To move part 2 of cue 2 at part 3 of cue 2 for the selected executor, type in the command line:

\[Channel]> Move Cue 2 Part 2 At Cue 2 Part 3

 

- To delete part 2 of cue 1 for the selected executor, type in the command line:

\[Channel]> Delete Cue 1 Part 2

          The choose delete cue part method pop-up opens.

![](/img/grandma2/popup_choose-delete-cue-part-method_v3-2-e9b42e.png)

_Choose delete cue part method pop-up_

To move the fixture or channel values to the main cue tap, move values to default cue part.\
Timings will be deleted.

To delete the part with all values tap, delete values of cue part.

The part is deleted.
