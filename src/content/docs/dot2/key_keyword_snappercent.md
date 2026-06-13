---
title: "SnapPercent"
description: "This page describes the syntax and how to use the SnapPercent command."
product: dot2
lang: en
sourceUrl: "https://help.malighting.com/dot2/en/help/key_keyword_snappercent.html"
scrapedAt: "2026-06-12T21:29:50.966Z"
---
This page describes the syntax and how to use the SnapPercent command.

To go to the SnapPercent command, it is necessary to press another function key before, e.g. Store and then five times Time.

## Description

With the SnapPercent command, you set a snap time.\
The snap time is a delay time for non fading parameters, eg. gobo or colorwheel.

## Syntax

1\. Store a cue with a snap percent of 4 %.

Store Cue 1 SnapPercent 4

2\. Assign a snap percent to an existing cue.

Assign Cue 1 SnapPercent 4

## Example 1

Let´s assume, you will store a new cue 1 on executor 4 with a snap percent of 2.

There are three ways to do this:

a) Press Store 1 (= Cue 1) Exec 4 five times Time (= SnapPercent) 2 Please.

b) Press Store 1 (= Cue 1) five times Time (= SnapPercent) 2 and press the respective executor button ![Go](/img/dot2/go_1-db7d7b.png).

c) Press Store 1 (= Cue 1) five times Time (= SnapPercent) 2 and tap on executor 4 in the [executor bar view](/dot2/key_window_playback/).

Cue 1 is stored on executor 4 along with a snap percent of 2.

## Example 2

Let´s assume, you have stored cue 1 on the main executor and now you will add a snap percent of 2.

Press  ![ma](/img/dot2/ma-36da5c.png) + Label (= Assign ) 1 (= Cue 1) five times Time (= SnapPercent) 2 Please.

The snap percent of 2 is assigned at cue 1 on the main executor.

Double check the assigned snap percent in the [cues view](/dot2/key_viewitem_cue/).

## Related Links

- [Time Key](/dot2/key_key_time/)
- [Cues View](/dot2/key_viewitem_cue/)
