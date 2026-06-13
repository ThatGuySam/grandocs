---
title: "ExecButton2"
description: "To get the ExecButton2 keyword in the command line type ExecButton2n the command line."
product: grandma2
lang: en
sourceUrl: "https://help.malighting.com/grandMA2/en/help/key_keyword_execbutton2.html"
scrapedAt: "2026-06-12T21:27:50.193Z"
---
To get the ExecButton2 keyword in the command line type **ExecButton2** in the command line.

## Description

ExecButton2 is an object keyword for the second button of an executor.

If you apply a function or reference a property not supported by the ExecButton2 object, the command will be passed on to the parent Executor object.

**Hint:**\
For Fader Executors, the buttons are numbered from the bottom and upwards; 1 is right below fader, 2 is right above fader, 3 is on the top.

## Syntax

ExecButton2 \[Executor]

ExecButton2 \[Page].\[Executor]

ExecButton2 \[Pagepool].\[Page].\[Executor]

## Examples

- To assign the toggle function to the second button of executor 5 type in the command line:

\[Channel]> Assign Toggle At ExecButton2 5

 

- To delete executor 5 type in the command line:

\[Channel]> Delete ExecButton2 5
