---
title: "Sequence"
description: "To get the Sequence keyword in the command line, press Sequ."
product: grandma2
lang: en
sourceUrl: "https://help.malighting.com/grandMA2/en/help/key_keyword_sequence.html"
scrapedAt: "2026-06-12T21:28:01.021Z"
---
To get the Sequence keyword in the command line, press Sequ.

You can also type **Sequence** or the shortcut **Seq** in the command line .

## Description

The default function of the sequence keyword is [SelFix](/grandma2/key_keyword_selfix/).

If the Sequence keyword is used with an ID, all fixtures in the sequence will be selected.\
If the Sequence keyword is used with a function, the function will be passed on to the object child cue.

## Syntax

Sequence \[ID]

Sequence \[Sequence pool].\[ID]

## Example

- Select all fixtures used in sequence 5.

\[Channel]> Sequence 5

 

- Block all cues of sequence 5.

\[Channel]> Block Sequence 5
