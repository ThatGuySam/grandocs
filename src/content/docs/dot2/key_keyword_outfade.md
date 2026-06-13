---
title: "OutFade"
description: "This page describes the syntax and how to use the OutFade command."
product: dot2
lang: en
sourceUrl: "https://help.malighting.com/dot2/en/help/key_keyword_outfade.html"
scrapedAt: "2026-06-12T21:29:50.085Z"
---
This page describes the syntax and how to use the OutFade command.

To go to the OutFade command it is necessary to press another function key before, e.g. Store and press Time twice (= OutFade).

## Description

With the OutFade command, you can indicate out fade times

- for a new cue with out fade time
- in a existing cue

Indicate out fade times for getting smaller dimmer values.

## Syntax

1\. Store a new cue 1 with an out fade time of 4 seconds.

Store Cue 1 OutFade 4

2\. Assign a out fade time of 5 seconds to the existing cue 3 on executor 1.

Assign OutFade 5 Cue 3 Executor 1

## Example 1

Let´s assume, you will store a new cue on the main executor with an out fade time of 4 seconds.

Press Store 1 (= Cue 1) two times Time (= OutFade) 4 Please.

Cue 1 is stored with an out fade time of 4 seconds.

Double check the cue timing in the [Cues View](/dot2/key_viewitem_cue/).

## Example 2

Let´s assume, you will assign an out fade time of 5 seconds to the existing cue 3 stored on executor 1.

Press ![MA](/img/dot2/ma-36da5c.png) + Label (=Assign) two times Time (= OutFade) 5 Cue 3 Exec 1 Please.

Cue 3 on executor 1 has now an out fade time of 5 seconds.

## Related Links

- [Time Key](/dot2/key_key_time/)
- [Cues View](/dot2/key_viewitem_cue/)
- [Store Command](/dot2/key_keyword_store/)
