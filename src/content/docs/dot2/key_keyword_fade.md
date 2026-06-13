---
title: "Fade"
description: "This page describes the syntax and how to use the fade command."
product: dot2
lang: en
sourceUrl: "https://help.malighting.com/dot2/en/help/key_keyword_fade.html"
scrapedAt: "2026-06-12T21:29:48.717Z"
---
This page describes the syntax and how to use the fade command.

To go to the fade command it is necessary to press another function key before, e.g. Store Time (=Fade).

## Description

With the fade command, you indicate fade times

- to go to a cue with a fade time
- for a new created cue with fade time
- in a existing cue

## Syntax

1\. Go to cue 2 with a fade time of 3 seconds.

Goto Cue 2 Fade 3

2\. Create a new cue 1 with a fade time of 3 seconds.

Store Cue 1 Fade 3

3\. Assign a fade time of 5 seconds to the existing cue 3 on executor 1.

Assign Fade 3 Cue 1 Executor 1

## Example 1

Let´s assume, you will go to cue 2 on executor 1 with a fade time of 3 seconds.

Press Goto Cue 2 Exec 1 Time (=Fade) 3 Please.

The console goes to cue 2 on executor 1 with a fade time of 3 seconds.

## Example 2

Let´s assume, you will store a new cue 1 on the main executor with a fade time of 3 seconds.

Press Store 1  (= Cue 1) Time (=Fade) 3 Please.

Cue 1 is stored on the main executor with a fade time of 3 seconds.

## Example 3

Let´s assume, you will assign the existing cue 3 on executor 1 with a fade time of 5 seconds.

Press ![MA](/img/dot2/ma-36da5c.png) + Label (=Assign) Time (=Fade) 5 Cue 3 Exec 1 Please.

Double check the fade time in the [cues view](/dot2/key_viewitem_cue/).

## Related Links

- [Time Key](/dot2/key_key_time/)
- [Cues View](/dot2/key_viewitem_cue/)
- [Store Command](/dot2/key_keyword_store/)
- [Assign Command](/dot2/key_keyword_assign/)
