---
title: "Assign"
description: "This page describes the syntax and how to use thAssignommand."
product: dot2
lang: en
sourceUrl: "https://help.malighting.com/dot2/en/help/key_keyword_assign.html"
scrapedAt: "2026-06-12T21:29:47.726Z"
---
This page describes the syntax and how to use the **Assign** command.

To go to the Assign command press and hold ![ma](/img/dot2/ma-36da5c.png) key and Label on the console.\
Assign is in the [command line](/dot2/key_widget_commandlineinput/), now.

Assign

## Description

With the Assign command, you can create assignments between

- a fixture and a DMX address
- a function and an executor button
- a fade time and cues of an executor

## Syntax

1\. Assign a fixture to a DMX address.

Assign Fixture 21 DMX 2.1

2\. Assign a function to an executor button.

Assign Flash

3\. Assign fade time to cues of an executor.

Assign Fade 10 Cue 2 Exec 1

4\. Assign fade time to the current cue of the main executor.

Assign Fade 10

## Example 1

Let´s assume, you will patch the fixture ID 21 to the DMX address 2.1.

Press ![ma](/img/dot2/ma-36da5c.png) + Label (=Assign) Fixture 2 1 DMX 2 . 1 Please.

The fixture ID 21 is patched to the DMX address 2.1.

Double check the correct patch in the [Patch and Fixture Schedule](/dot2/key_window_patchandfixtureschedule/).

## Example 2

Let´s assume, you will assign a function to an executor.

Press ![ma](/img/dot2/ma-36da5c.png) + Label (=Assign) Flash and the respective executor button e.g. ![go](/img/dot2/go_1-db7d7b.png).

The function flash is assigned to the respective executor button.

Double check the assigned function in the [Change Functions of Executor Buttons View](/dot2/key_window_changefunctionsofexecutor/).

## Example 3

Let´s assume, you will assign a fade time of 10 to the cue 1 of the executor 5.

Press ![ma](/img/dot2/ma-36da5c.png) + Label (=Assign) Time (=Fade) 1 0 Cue 1 Exec 5 Please.

The fade time of 10 is assigned to the cue 1 of the executor 5, now.

Double check the assigned fade time in the respective [Cues View](/dot2/key_viewitem_cue/).

## Example 4

Let´s assume, you will assign the fade time 5 to the current cue of the main executor.

Make sure that the current cue is running.\
If the main executor is off, the fade time will be assigned to each cue of the cue list.

Press ![ma](/img/dot2/ma-36da5c.png) + Label (=Assign) Time (=Fade) 5 Please.

The fade time 5 is assigned to the current cue of the main executor.

## Related Links

- [Label Key](/dot2/key_key_label/)
- [Fade Command](/dot2/key_keyword_fade/)
- [Time Key](/dot2/key_key_time/)
- [Patch and Fixture Schedule](/dot2/key_window_patchandfixtureschedule/)
- [Change Functions of Executor Buttons View](/dot2/key_window_changefunctionsofexecutor/)
- [Cues View](/dot2/key_viewitem_cue/)
