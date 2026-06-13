---
title: "SwopGo"
description: "To go to the SwopGo keyword, type SwopGo in the command line or use the shortcut SwopG."
product: grandma2
lang: en
sourceUrl: "https://help.malighting.com/grandMA2/en/help/key_keyword_swopgo.html"
scrapedAt: "2026-06-12T21:28:02.579Z"
---
To go to the SwopGo keyword, type **SwopGo** in the command line or use the shortcut **SwopG**.

## Description

The SwopGo keyword temporary overrides the master level of executors to full and all other master levels to zero, and goes to the next cue.

If SwopGo is assigned as an executor button function, pressing the executor button is SwopGo On, release the executor button is SwopGo Off.\
The executor stays tuned on.

If SwopGo is used standalone, it toggles between SwopGo On and SwopGo Off.

To protect an executor from the swop function, assign Swop Protect in the [Assign Menu](/grandma2/key_exec_assign/). 

The SwopGo keyword do not react to any assigned timing.

 

## Syntax

SwopGo \[Executor-list]

SwopGo On \[Executor-list]

SwopGo Off \[Executor-list]

 

## Options

To get a list of all options of the keyword SwopGo, type the following into the command line:

\[Channel]> SwopGo /?

The keyword SwopGo has the exact same options as the keyword Goto. 

For further information see keyword [Goto](/grandma2/key_keyword_goto/). 

##  

## Example

1\. Step to the next cue, override master level of executor 1 to full and all other master levels to zero.

SwopGo Executor 1

2.  Returns the master level to the master fader position. The executor stays on after releasing the executor button.

SwopGo Off Executor 1
