---
title: "Kill"
description: "To get the Kill keyword in the command line press Top Top (= Kill)."
product: grandma2
lang: en
sourceUrl: "https://help.malighting.com/grandMA2/en/help/key_keyword_kill.html"
scrapedAt: "2026-06-12T21:27:53.376Z"
---
To get the Kill keyword in the command line press Top Top (= Kill).

You can also type **Kill** or the shortcut **K** in the command line.

## Description

Kill is a Go+ function that additionally will turn off all other executor objects. Kill works as an ordinary Go+ function on the executors it is applied, but will additionally send an Off command to all other executors - if they are not protected by kill protect - function (see Assign executor menu).

## Syntax

Kill \[Executor-list] /\[Option] = \[Option Value]

## Options

To get a list of all available options to the Kill keyword type in the command line:

\[Channel]> Kill /?

The Kill keyword has the following options:

| Option      | Option Shortcut | Option Value                             | Option Value Shortcut | Description                                              |
| ----------- | --------------- | ---------------------------------------- | --------------------- | -------------------------------------------------------- |
| cue\_mode   | cm              | Normal                                   | N                     | Normal Kill mode.                                        |
| cue\_mode   | cm              | Assert                                   | A                     | Kill with assert in the original timing.                 |
| cue\_mode   | cm              | XAssert                                  | XA                    | Kill with assert in the cuetiming of current cue.        |
| cue\_mode   | cm              | Release                                  | R                     | Kill finishes the fade-in and switches the executor off. |
| userprofile | upr             | "Name of the user profile", e.g. "Klaus" | not available         | Normal Kill mode with specified user profile.            |

## Example

To go to next cue on executor 1 and turn off other executors type in the command line:

\[Channel]> Kill Executor 1
