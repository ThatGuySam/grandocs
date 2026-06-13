---
title: "DMX"
description: "The DMX key gives you access to different functions."
product: dot2
lang: en
sourceUrl: "https://help.malighting.com/dot2/en/help/key_key_dmx.html"
scrapedAt: "2026-06-12T21:29:38.023Z"
---
The DMX key gives you access to different functions.

## DMX View

Pressing the DMX key will open the [DMX view](/dot2/key_viewitem_dmx/) on screen 1.

This is used to display your current DMX output. 

## DMX tester

The [DMX command](/dot2/key_keyword_dmx/) can be used to turn on specific DMX channels directly with out having to patch fixtures to the DMX address - This is called DMX Tester. DMX channels that are controlling by the DMX Tester have a high priority in the output. This means that it "locks" the channel while the DMX Tester have the control. You need to release the DMX channel from the Tester before it acts normal again.

**For example:**

DMX 1 At 100

Will turn DMX channel at 100% = a DMX value of 255.

Off DMX 1

Will release the DMX channel from the DMX Tester.

## Select a Fixture

It can also be used to select a fixture that uses a DMX channel.

**For example:**

DMX 2.40

Selects the fixture that uses DMX channel number 40 on the second DMX universe.

## Direct patching

You can use the DMX key, and the [DMX command](/dot2/key_keyword_dmx/), to patch fixtures.

**For example:**

Assign Fixture 5 at DMX 2.1

This will patch fixture 5 to DMX address 1 in the second universe.

Delete DMX 3.1

This will unpatch whatever fixture is patched to the first DMX address in the third universe.

## Advanced functionality

The DMX key can also give you access to the [DmxUniverse command](/dot2/key_keyword_dmxuniverse/). If you press and hold the ![ma](/img/dot2/ma_1-85eed0.png) key while you press the DMX key, then you get the command.

This can be used unpatch entire DMX universe (Delete DmxUnivese 1) - be careful doing that. It can be oops'ed, but it's generally not a good idea in a live situation!

Besides deleting an universe, you can also move the entire universe using the [move command](/dot2/key_keyword_move/). 

You can also park and unpark entire universes. Please follow the link above to read more.
