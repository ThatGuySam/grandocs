---
title: "Clone"
description: "This page describes the syntax and how to use the Cloneommand."
product: dot2
lang: en
sourceUrl: "https://help.malighting.com/dot2/en/help/key_keyword_clone.html"
scrapedAt: "2026-06-12T21:29:48.048Z"
---
This page describes the syntax and how to use the **Clone** command.

To go to the Clone command press and hold the ![ma](/img/dot2/ma-36da5c.png) key and Copy on the console.\
Clone is in the [command line](/dot2/key_widget_commandlineinput/) now.

## Description

With the Clone command, you copy all values from a fixture to another fixture throughout the entire show file.\
This includes cues, presets, and groups. The clone command works like a batch processing for the [At command](/dot2/key_keyword_at/) along with [Update command](/dot2/key_keyword_update/).

## Syntax

Clone fixture 1 at fixture 2.

Clone Fixture 1 At 2

## Example 1

Let´s assume, you did programming for 2 fixtures (ID 1 and 2) and then you realize you will add three more fixtures at this spot doing the same as the other one.

![](/img/dot2/dot2_commands_clone01_1-2-8158aa.png)

_Figure 1: Fixture 1 and 2 are programmed ready_

Press ![ma](/img/dot2/ma-36da5c.png) + Copy (= Clone) Fixture 1 + 2 At 3 Thru 5 Please.

The console will ask you to [choose the clone method](/dot2/key_window_chooseclonemethod/).

Fixtures 1 and 2 are cloned at fixture 3 thru 5. All fixtures doing exactly the same.

![](/img/dot2/dot2_commands_clone02_1-2-dbd23b.png)

_Figure 2: Fixture 1 and 2 are cloned at fixture 3 thru 5_

## Example 2

Let´s assume, you will clone the fixtures (ID 31 and 32) only on executor 1, because you need one more fixtures for the actors light.

The [If command](/dot2/key_keyword_if/) limited the Clone command, that the cloning work only for the executor 1.

Press ![ma](/img/dot2/ma-36da5c.png) + Copy (= Clone) Fixture 31 + 32 At 33 Thru 35 If and the respective executor button ![go](/img/dot2/go_1-db7d7b.png)  Please.

The console will ask you to [choose the clone method](/dot2/key_window_chooseclonemethod/).

Fixtures 31 and 32 are cloned at fixture 33 thru 35, only on executor 1.
