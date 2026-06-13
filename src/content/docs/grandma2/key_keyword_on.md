---
title: "On"
description: "To get the On keyword in the command line press On or type On in the command line."
product: grandma2
lang: en
sourceUrl: "https://help.malighting.com/grandMA2/en/help/key_keyword_on.html"
scrapedAt: "2026-06-12T21:27:57.109Z"
---
To get the On keyword in the command line press On or type **On** in the command line.

## Description

The On keyword can be a function keyword or a helping keyword.

With the On keyword as a function keyword you can:

- Start or restart an executor.
- Activate parameters in the programmer.
- Activate selections in the programmer.
- Activate attributes in the programmer.

With the On keyword as a helping keyword you indicate the start of a temporary function, or the enabled state of a toggling function.

## Syntax

**On** \[Object-list] / \[Option] = \[Option Value] (function keyword)

\[Function] **On** \[Object-list] / \[Option] = \[Option Value]  (helping keyword)

\[Function] **On** (helping keyword)

## Options

To get a list of all available options to the On keyword, type in the command line:

\[Channel]> On /?

The On keyword has the following options:

| Option      | Option Shortcut | Option Value                               | Option Value Shortcut | Description                                            |
| ----------- | --------------- | ------------------------------------------ | --------------------- | ------------------------------------------------------ |
| cue\_mode   | cm              | Normal                                     | N                     | Normal on mode.                                        |
| cue\_mode   | cm              | Assert                                     | A                     | On asserts the original timing.                        |
| cue\_mode   | cm              | XAssert                                    | XA                    | On asserts the cuetiming of current cue.               |
| cue\_mode   | cm              | Release                                    | R                     | On finishes the fade-in and switches the executor off. |
| userprofile | upr             | "Name of the user profile", e.g. "Dominik" | not available         | Normal On mode with specified user profile.            |

## Examples

- To activate the parameters of cue 1 from the selected executor, type in the command line:

\[Channel]> On Cue 1

---

- To activate the parameter of fixture 1 and 3 in the programmer, type in the command line:

\[Channel]> On Fixture 1 + 3

---

- To flash executor 1.2.4, type in the command line:

\[Channel]> Flash On Executor 1.2.4

---

- To turn highlight on, type in the command line:

\[Channel]> Highlight On
