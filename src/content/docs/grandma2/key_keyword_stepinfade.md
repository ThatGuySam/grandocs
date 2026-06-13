---
title: "StepInFade"
description: "To get the StepInFade keyword, type StepInFader the shortcut StepIn the command line."
product: grandma2
lang: en
sourceUrl: "https://help.malighting.com/grandMA2/en/help/key_keyword_stepinfade.html"
scrapedAt: "2026-06-12T21:28:02.140Z"
---
To get the StepInFade keyword, type **StepInFade **or the shortcut **StepI** in the command line.

## Description

The StepInFade keyword assigns executors as a step in fader. A step in fader controls the step in time of each step of a chaser.

For more information, see [executors - assign a function](/grandma2/key_exec_assign/).

## Syntax

StepInFade \[Executor-list]

StepInFade \[Percent]

## Examples

- Assign existing executor 28 as a step in fader.

\[Channel]> Assign StepInFade Exec 28

- Set the step in fade level to 50 % on executor 3.

\[Channel]> StepInFade 50 Executor 3
