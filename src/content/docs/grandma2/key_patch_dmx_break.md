---
title: "DMX break"
description: "DMX breaks is a term used when a fixture needs more than one DMX start address."
product: grandma2
lang: en
sourceUrl: "https://help.malighting.com/grandMA2/en/help/key_patch_dmx_break.html"
scrapedAt: "2026-06-12T21:28:09.090Z"
---
DMX breaks is a term used when a fixture needs more than one DMX start address.

It has nothing to do with how many address a fixture uses, just if it needs more than one start address.

For example some fixtures have moved the dimmer out of the moving head. So the moving head needs to have one DMX address and the lamp inside is connected to an external dimmer in a rack in Dimmer City. The rack mounted dimmer have a different DMX address (might even be a different universe). In the grandMA2 we only look at this fixture as one device. It only have on ID number. To make this possible we have a fixture that uses two DMX breaks. We have broken the DMX range into two parts.

There can be many examples of combining several devices and wanting to just use one ID number. It could be a color scroller and a mechanical dimmer unit on a big HMI fresnell with a DMX controlled ballast. So three separate units that each need a DMX address but we want to handle all of them using just one ID number.

The grandMA2 can handle fixtures with up to 8 DMX breaks.

Each DMX break have their own input field in the Fixture Wizard and their own column in the patch windows. It might be combined into one column in the Fixture Schedule.

![](/img/grandma2/img_dmx-break_wizard_v3_2-d8c1b9.png)

_DMX Break in the Fixture Wizard_

![](/img/grandma2/img_dmx-break_edit-setup_v3_2-255f49.png)

_DMX break in the Fixture Schedule window_

![](/img/grandma2/img_dmx-break_dmx-patch_v3_2-173449.png)

_DMX break in the DMX patch window_
