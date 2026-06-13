---
title: "Temp"
description: "To get the Temp keyword in the command line, press Temp."
product: grandma2
lang: en
sourceUrl: "https://help.malighting.com/grandMA2/en/help/key_keyword_temp.html"
scrapedAt: "2026-06-12T21:28:02.901Z"
---
To get the Temp keyword in the command line, press Temp.

You can also type **Temp** in the command line or use the shortcut **Te**.

## Description

The Temp keyword turns an executor on, as long as you hold the executor button.\
The Temp keyword follows cue timing, off timing and the position of the master fader from the executor.

If you keep the hands off from the executor button, the executor is off again. The Temp Off keyword will be executed.

The Temp keyword is a function keyword.

## Syntax

Temp \[Object-list] / \[Option] = \[Option Value]

Temp On \[Object-list] / \[Option] = \[Option Value]

Temp Off \[Object-list] / \[Option] = \[Option Value]

## Options

To get a list of all available options to the Temp keyword, type in the command line:

\[Channel]> Temp /?

The Temp keyword has the following options:

| Option      | Option Shortcut | Option Value                               | Option Value Shortcut | Description                                          |
| ----------- | --------------- | ------------------------------------------ | --------------------- | ---------------------------------------------------- |
| cue\_mode   | cm              | Normal                                     | N                     | Normal temp mode.                                    |
| cue\_mode   | cm              | Assert                                     | A                     | Temp state asserts the original timing.              |
| cue\_mode   | cm              | XAssert                                    | XA                    | Temp state asserts cuetiming of current cue.         |
| cue\_mode   | cm              | Release                                    | R                     | Temp finishes fade-in and switches the executor off. |
| userprofile | upr             | "Name of the user profile", e.g. "Dominik" | not available         | Normal temp mode with specified user profile.        |

## Examples

- To turn executor 1 temporary on, type in the command line:

\[Channel]> Temp On Executor 1

 

- To turn executor 1 temporary off, type in the command line:

\[Channel]> Temp Off Executor 1
