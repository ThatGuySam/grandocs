---
title: "StoreLook"
description: "This page describes the syntax and how to use the StoreLook command."
product: dot2
lang: en
sourceUrl: "https://help.malighting.com/dot2/en/help/key_keyword_storelook.html"
scrapedAt: "2026-06-12T21:29:51.188Z"
---
This page describes the syntax and how to use the StoreLook command.

To go to the StoreLook command, press and hold ![ma](/img/dot2/ma-36da5c.png) and Store on the console.

## Description

With the StoreLook command, you can store your actual look as a cue on an executor.

The StoreLook command stores all dimmer values from all fixtures in the show.\
If the dimmer value is bigger than 0 it stores additional all further attributes.\
If the dimmer value is 0, it stores only the dimmer value because there is no further actual output of the fixture.

A cue stored with the StoreLook command is automatically set to protected. Previous tracked values does not affect a cue stored with StoreLook. For more information about protected, refer to [Cues View](/dot2/key_viewitem_cue/) or [How to work with cues](/dot2/key_ht_cues/). For more information about tracking, refer to [What is Tracking?](/dot2/key_wi_tracking/)

## Syntax

Store the actual look from all fixtures in the show.

StoreLook

## Example

Let´s assume you will store the actual look from all fixtures in the show as a cue on executor 1.

![](/img/dot2/dot2_commands_storelook01_1-2-dd93a1.png)

_Figure 1: Fixtures Sheet before store with StoreLook_

![](/img/dot2/dot2_commands_storelook02_1-2-267b3e.png)

_Figure 2: Fixtures Sheet after store with StoreLook_

Press ![ma](/img/dot2/ma-36da5c.png) + Store (=StoreLook) and the respective executor button ![go](/img/dot2/go_1-db7d7b.png) .

All dimmer values are stored.\
All attributes are stored if the dimmer value was bigger than 0.

For more information about the colors in the [fixtures sheet](/dot2/key_viewitem_fixture/), refer to [System Colors - Values.](/dot2/key_systemcolors_values/)
