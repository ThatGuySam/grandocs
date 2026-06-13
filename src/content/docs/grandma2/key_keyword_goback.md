---
title: "GoBack"
description: "To get the GoBack keyword in the command line press Go -."
product: grandma2
lang: en
sourceUrl: "https://help.malighting.com/grandMA2/en/help/key_keyword_goback.html"
scrapedAt: "2026-06-12T21:27:52.028Z"
---
To get the GoBack keyword in the command line press Go -.

Another way is to type **GoBack** or the shortcut **GoB** in the command line.

## Description

GoBack is a function keyword to activate previous step of an executing object.

If the target object has steps, it will go to the previous step. If the object is stepless, it will start running backwards.

Set the default fade time for GoBack in the **Setup I Show I Playback & MIB Timing I GoBack**.

## Syntax

GoBack \[Object-list] / \[Option] = \[Option Value]

## Options

To get a list of all available options to the GoBack keyword type in the command line:

\[Channel]> GoBack /?

The GoBack keyword has the following options:

| Option      | Option Shortcut | Option Value                             | Option Value Shortcut | Description                                                |
| ----------- | --------------- | ---------------------------------------- | --------------------- | ---------------------------------------------------------- |
| cue\_mode   | cm              | Normal                                   | N                     | Normal GoBack mode.                                        |
| cue\_mode   | cm              | Assert                                   | A                     | GoBack with assert in the original timing.                 |
| cue\_mode   | cm              | XAssert                                  | XA                    | GoBack with assert in the cuetiming of current cue.        |
| cue\_mode   | cm              | Release                                  | R                     | GoBack finishes the fade-in and switches the executor off. |
| userprofile | upr             | "Name of the user profile", e.g. "Klaus" | not available         | Normal GoBack mode with specified user profile.            |

## Example

To go to the previous step of executor 3 type in the command line:

\[Channel]> GoBack Executor 3
