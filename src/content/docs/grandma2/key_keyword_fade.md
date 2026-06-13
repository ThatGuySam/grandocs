---
title: "Fade"
description: "To get the Fade keyword in the command line press Time."
product: grandma2
lang: en
sourceUrl: "https://help.malighting.com/grandMA2/en/help/key_keyword_fade.html"
scrapedAt: "2026-06-12T21:27:50.585Z"
---
To get the Fade keyword in the command line press Time.

Another way is to type **Fade** or the shortcut **Fa** directly in the command line.

## Description

Fade is a helping keyword to indicate fade times.

As a helping keyword for playback functions (for example Goto), this keyword sets the time used to execute the function.

As a helping keyword for programming functions (for example Store), this keyword sets the fade time of an object.

Used as a starting keyword, Fade applies individual timing in the programmer for the current selection and attributes.

**Hint:**\
As long as the command line starts with a function, the fade keyword and value may appear anywhere in the command line.

## Syntax

Fade \[Value-list]

## Examples

- To crossfade to cue 3 in the selected executor in 4 seconds type in the command line:

\[Channel]> Goto Cue 3 Fade 4

 

- To create cue 3 in the selected executor and set its fade time to 4 seconds type in the command line:

\[Channel]> Store Cue 3 Fade 4

 

- To set the fade time of cue 2 in the selected executor to 3 seconds type in the command line:

\[Channel]> Assign Fade 3 Cue 2

 

- To set the individual fade time of 2 seconds to the current selection/attributes type in the command line:

\[Channel]> Fade 2

 

- To set the fixture selection to 50 % and give them an individual fade time of 2 seconds to the selected attributes type in the command line:

\[Channel]> At 50 Fade 2
