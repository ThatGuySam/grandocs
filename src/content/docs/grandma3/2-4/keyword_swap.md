---
title: "Swap"
description: "To enter the Swap keyword in the command line, use one of the options:"
product: grandma3
version: "2.4"
lang: en
sourceUrl: "https://help.malighting.com/grandMA3/2.4/HTML/keyword_swap.html"
scrapedAt: "2026-06-12T21:24:37.583Z"
---
To enter the Swap keyword in the command line, use one of the options:

- Type **Swap**
- Type the shortcut **Swa**

## Description

The Swap keyword is a playback keyword that starts the playback of a sequence and pulls down the dimmer of all other fixtures that are not part of the sequence or that are protected against Swap.

For more information on how to assign executors see [Assign Objects to an Executor](/grandma3/2-4/executor_assign/). 

- To disable the executor, release the executor key.

Pressing the executor button plays back the sequence using the swap functionality.\
If you swap sequences that have the same playback master, one will go to zero should it not be swap-protected. 

For more information on Swap Protect see [Sequence Settings](/grandma3/2-4/cue_sequence_settings/). 

## Syntax

Swap (On/Off) \[Object] \["Object\_Name" or Object\_Number]

## Example

- To playback sequence 5 and pull down the dimmers of all other running playbacks to 0, type:

|                                                                    |                                      |
| ------------------------------------------------------------------ | ------------------------------------ |
| ![](/img/grandma3/2-4/icon_commandline-input_logo_v2-0-a59235.png) | User name\[Fixture]>Swap Sequence 5  |
