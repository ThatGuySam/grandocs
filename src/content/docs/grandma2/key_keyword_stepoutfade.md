---
title: "StepOutFade"
description: "To get the StepOutFade keyword, type StepOutFade or the shortcut StepOn the command line."
product: grandma2
lang: en
sourceUrl: "https://help.malighting.com/grandMA2/en/help/key_keyword_stepoutfade.html"
scrapedAt: "2026-06-12T21:28:02.179Z"
---
To get the StepOutFade keyword, type **StepOutFade** or the shortcut **StepO** in the command line.

## Description

With the StepOutFade keyword, you assign executors as a step out fader. A step out fader controls the step out time of each step of a chaser.

For more information, see [executors - assign a function](/grandma2/key_exec_assign/).

The StepOutFade keyword is a function keyword.

## Syntax

StepOutFade \[Executor-list]

StepOutFade \[Percent]

## Examples

- Assign executor 28 as a step out fader.

\[Channel]> Assign StepOutFade Exec 28

 

- Set the step out fader level to 50 % on executor 3.

\[Channel]> StepOutFade 50 Exec 3
