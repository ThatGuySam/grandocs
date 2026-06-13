---
title: "Block"
description: "Blocks a function used to add data to prevent tracking. Tracking values (magenta colored) are converted to stored values (white colored)."
product: grandma2
lang: en
sourceUrl: "https://help.malighting.com/grandMA2/en/help/key_keyword_block.html"
scrapedAt: "2026-06-12T21:27:46.018Z"
---
**Block** is a function used to add data to prevent tracking. Tracking values (magenta colored) are converted to stored values (white colored).

To execute this keyword type **Block** or the shortcut **Blo** into the command line. 

## Syntax

Block \[Object-list] If \[Selection-list] If \[Attribute-list]

 

## Options

To get a list of all available options for the keyword Block in the command line feedback window type the following into the command line:

\[Channel]> Block /?

The keyword Block has the following options:

| Option         | Shortcut | Option value    | Description              |
| -------------- | -------- | --------------- | ------------------------ |
| defaultvalues  | dv       | no option value | Removes default values.  |
| trackingshield | ts       | no option value | Uses tracking shield.    |

If the object list does not contain any references to any cues, the Block function is applied to the current cue of the selected executor.

If syntax does not contain any selection list filter, all fixtures will be used.

If syntax does not contain any attribute list filter, all attributes will be used.

 

## Examples

\[Channel]> ​Block

Blocks all parameters in current cue of the selected executor.

 

\[Channel]> ​Block Cue 5 If Fixture 4 If Feature "Position"

Blocks pan and tilt of Fixture 4 in cue 5 of the selected executor.
