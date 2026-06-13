---
title: "Extract"
description: "To get the extract keyword in the command line type Extractr the shortcut Extn the command line."
product: grandma2
lang: en
sourceUrl: "https://help.malighting.com/grandMA2/en/help/key_keyword_extract.html"
scrapedAt: "2026-06-12T21:27:50.538Z"
---
To get the extract keyword in the command line type **Extract** or the shortcut **Ext** in the command line.

## Description

Extract is a function that applies hard values in the programmer and breaks any referenced links.

The Extract function used the same syntax as the At keyword. For more information see [At keyword](/grandma2/key_keyword_at/).

Extract works recursively and breaks references also in subobjects, for example, a preset in a cue in an extracted sequence.

Extract will obey the At filter and the program time.

## Syntax

Extract \[Object list]

## Examples

- To set the fixture selection to the preset "drummer". later changes to preset "drummer" will update the values, type in the command line:

\[Channel]> At Preset "drummer"

 

 

- To set the fixture selection to hard values of preset "drummer". later changes to preset "drummer" will not affect the values, type in the command line:

\[Channel]> Extract Preset "drummer"

 

- To break the references (converts attributes to hard values in the programmer) for the fixture selection type in the command line:

\[Channel]> Extract Selection

 

- To set the fixture selection to the hard values of Cue 4 type in the command line:

\[Channel]> Extract Cue 4
