---
title: "Go"
description: "To get the Go keyword in the command line press Go."
product: grandma2
lang: en
sourceUrl: "https://help.malighting.com/grandMA2/en/help/key_keyword_go.html"
scrapedAt: "2026-06-12T21:27:51.972Z"
---
To get the Go keyword in the command line press Go.

Another way is to type **Go** in the command line.

## Description

Go is a function keyword to activate the next step of an executing object.

If the target object have steps, it will go to the next step. If the object is step-less it will start running forward.

## Syntax

Go \[Object-list] / \[Option] = \[Option Value]

## Options

To get a list of all available options to the Go keyword type in the command line:

\[Channel]> Go /?

The Go keyword has the following options:

| Option      | Option Shortcut | Option Value                             | Option Value Shortcut | Description                                            |
| ----------- | --------------- | ---------------------------------------- | --------------------- | ------------------------------------------------------ |
| cue\_mode   | cm              | Normal                                   | N                     | Normal Go mode.                                        |
| cue\_mode   | cm              | Assert                                   | A                     | Go with assert in the original timing.                 |
| cue\_mode   | cm              | XAssert                                  | XA                    | Go with assert in the cuetiming of current cue.        |
| cue\_mode   | cm              | Release                                  | R                     | Go finishes the fade-in and switches the executor off. |
| userprofile | upr             | "Name of the user profile", e.g. "Klaus" | not available         | Normal Go mode with specified user profile.            |

## Examples

- To go to the next step of executor 3 type in the command line:

\[Channel]> Go Executor 3

 

- To start macro 2 type in the command line:

\[Channel]> Go Macro 2
