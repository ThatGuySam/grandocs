---
title: "Top"
description: "To go to the Top keyword, press Top or type Topn the command line."
product: grandma2
lang: en
sourceUrl: "https://help.malighting.com/grandMA2/en/help/key_keyword_top.html"
scrapedAt: "2026-06-12T21:28:03.676Z"
---
To go to the Top keyword, press Top or type **Top** in the command line.

## Description

The Top keyword jumps to the beginning of the cue list or sets the timecode marker at the beginning of the timecode show.

The Top keyword is a function keyword.

## Syntax

Top \[Executor-list] / \[Option] = \[Option Value]

Top \[Timecode-list]

## Options

To get a list of all available options to the top keyword, type in the command line

\[Channel]> Top /?

The top keyword has the following options.

**Important:**\
The cue mode options along with the top keyword are only necessary if the cue zero mode is set to on, all, dimmers only, or effects. For more information, see [Using cue modes](/grandma2/key_adv_seq_cue_modes/).

| Option      | Option Shortcut | Option Value                               | Option Value Shortcut | Description                                                                               |
| ----------- | --------------- | ------------------------------------------ | --------------------- | ----------------------------------------------------------------------------------------- |
| cue\_mode   | cm              | Normal                                     | N                     | Goes to the top of the sequence and calls the first cue normal.                           |
| cue\_mode   | cm              | Assert                                     | A                     | Goes to the top of the sequence and calls the first cue with an assert.                   |
| cue\_mode   | cm              | XAssert                                    | XA                    | Goes to the top of the sequence and calls the first cue with a xassert.                   |
| cue\_mode   | cm              | Release                                    | R                     | Goes to the top of the sequence and calls the first cue and release it.                   |
| cue\_mode   | cm              | Break                                      | B                     | Goes to the top of the sequence and calls the first cue and sets a break before the cue.  |
| cue\_mode   | cm              | XBreak                                     | XB                    | Goes to the top of the sequence and calls the first cue and sets a xbreak before the cue. |
| userprofile | upr             | "Name of the user profile", e.g. "Dominik" | not available         | Goes to the top of the sequence and calls the first cue with specified user profile.      |

## Examples

- Go to the top of the cue list on executor 5.

\[Channel]> Top Executor 5

 

- Go to the top of the cue list on executor 5 in 3 seconds.

\[Channel]> Top Executor 5 Fade 3
