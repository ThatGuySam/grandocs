---
title: "If"
description: "To get the If keyword into the command line as a starting function, press If If If If (= If)."
product: grandma2
lang: en
sourceUrl: "https://help.malighting.com/grandMA2/en/help/key_keyword_if.html"
scrapedAt: "2026-06-12T21:27:52.552Z"
---
To get the If keyword into the command line as a starting function, press If If If If (= If).

To get the If keyword into the command line as a helping keyword, press If or type **If** or the shortcut **I** in the command line.

## Description

The If keyword as a function keyword deselects fixtures not in the entered selection list.

As a helping keyword keyword to the Clone function, If sets the scope of the cloning. For more information see [clone keyword](/grandma2/key_keyword_clone/) and [clone or replace fixtures](/grandma2/key_clone/).

As a helping keyword keyword to other operational functions, If sets a filter for the operation.

To end an if statement in the middle of a longer syntax, use the [EndIf keyword](/grandma2/key_keyword_endif/).

## Syntax

If \[Selection-list]

Clone \[Selection-list] At \[Selection-list] If \[Object-list]

\[General syntax] If \[Object-list]

## Examples

- To deselect fixtures not in group 5 type in the command line:

\[Channel]> If Group 5

 

- To select fixtures which are a part of group 3 and group 5 type in the command line:

\[Channel]> Group 3 If Group 5

 

- To delete channel 4 from cue 3 type in the command line:

\[Channel]> Delete Cue 3 If Channel 4

 

- To delete fixture 4 and attribute "pan" from cue 3 type in the command line:

\[Channel]> Delete Cue 3 If Fixture 4 Attribute "pan"

 

- To delete attribute "pan" of fixture 4 from cue 3 type in the command line:

\[Channel]> Delete Cue 3 If Fixture 4 If Attribute "pan"
