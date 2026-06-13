---
title: "Cue"
description: "Cues an object type holding a look on stage."
product: grandma2
lang: en
sourceUrl: "https://help.malighting.com/grandMA2/en/help/key_keyword_cue.html"
scrapedAt: "2026-06-12T21:27:47.653Z"
---
**Cue** is an object type holding a look on stage.

To execute this keyword type **Cue** or the shortcut **Cu** into the command line. 

## Syntax

Cue \[ID.ID]

**Important:**\
Cue is the only object type that accepts numerical ID as decimal fractions. The ID allowed for cues ranges from 0.001 to 9999.999. In all other objects a dot indicates the ID of a parent or a child object.

The default function for cue objects is SelFix. This means that calling cues without any specific function selects the fixtures of the cue.

For more information on the default function for cue objects see [SelFix](/grandma2/key_keyword_selfix/).

Cues are arranged in sequences and are divided in parts. If only cue ID is entered, you are applying functions to all parts of cues of the sequence assigned to the selected executor.

For more information see [Sequence](/grandma2/key_keyword_sequence/).

To access cues of unselected sequences/executors add a parent object to the syntax, i.e., Cue 3.001 Executor 1 or Sequence 5 Cue 3.999

**Hint:**\
The object_ _order in the command line is irrelevant: Sequence 1 Cue 2 is the same as Cue 2 Sequence 1

## Example:

 

\[Channel]> Cue 3

 

Selects fixtures in cue 3 of sequence assigned to selected executor.
