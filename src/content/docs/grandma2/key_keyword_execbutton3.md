---
title: "ExecButton3"
description: "To get the ExecButton3 keyword in the command line type ExecButton3n the command line."
product: grandma2
lang: en
sourceUrl: "https://help.malighting.com/grandMA2/en/help/key_keyword_execbutton3.html"
scrapedAt: "2026-06-12T21:27:50.267Z"
---
To get the ExecButton3 keyword in the command line type **ExecButton3** in the command line.

## Description

ExecButton3 is an object keyword for the third button of an executor.

If you apply a function or reference a property not supported by the ExecButton3 object, the command will be passed on to the parent Executor object.

**Hint:**\
For Fader Executors, the buttons are numbered from the bottom and upwards; 1 is right below fader, 2 is right above fader, 3 is on the top.

## Syntax

ExecButton3 \[Executor]

ExecButton3 \[Page].\[Executor]

ExecButton3 \[Pagepool].\[Page].\[Executor]

## Examples

- To assign the toggle function to the third button of executor 5 type in the command line:

\[Channel]> Assign Toggle At ExecButton 3 5

 

- To delete executor 5 type in the command line:

\[Channel]> Delete ExecButton 3 5
