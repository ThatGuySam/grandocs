---
title: "TouchOSC"
description: "TouchOSC is a modular OSC and MIDI control surface for Windows, macOS, and Android by hexler.net."
product: grandma3
version: "2.3"
lang: en
sourceUrl: "https://help.malighting.com/grandMA3/2.3/HTML/osc_touchosc.html"
scrapedAt: "2026-06-15T18:25:37.697Z"
pagefind: false
---
TouchOSC is a modular OSC and MIDI control surface for Windows, macOS, and Android by [hexler.net](https://hexler.net/).

It supports sending and receiving Open Sound Control and MIDI messages over Wi-Fi and CoreMIDI inter-app communication and compatible hardware.

### Fader

This example will control the fader of Executor 230 of Page 1:

![](/img/grandma3/2-3/img_touchosc_1_v1-5-40543b.png)

Notes:

- Assumes the OSCData line on the console has a prefix of "gma3" configured. If the prefix is empty, this would just be /Page1/Fader230.
- Assumes the "Page" and "Fader" cells in the OSCData line on the console are set to "Page" and "Fader" respectively (this is the default).

 

### Executor Button

This example will press the button for Executor 230 of Page 1:

![](/img/grandma3/2-3/img_touchosc_2_v1-5-e2fd75.png)

Notes:

- Assumes the OSCData line on the console has a prefix of "gma3" configured. If the prefix is empty, this would just be /Page1/Key230.
- Assumes the "Page" and "Key" cells in the OSCData line on the console are set to "Page" and "Key" respectively (this is the default).
- The {Send on Press} and {Send on Release} settings (not pictured above) should both be enabled/checked.
