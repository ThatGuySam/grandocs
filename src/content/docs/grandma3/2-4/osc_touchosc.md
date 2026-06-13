---
title: "TouchOSC"
description: "TouchOSC is a modular OSC and MIDI control surface for Windows, macOS, and Android by hexler.net."
product: grandma3
version: "2.4"
lang: en
sourceUrl: "https://help.malighting.com/grandMA3/2.4/HTML/osc_touchosc.html"
scrapedAt: "2026-06-12T21:25:09.394Z"
---
TouchOSC is a modular OSC and MIDI control surface for Windows, macOS, and Android by [hexler.net](https://hexler.net/).

It supports sending and receiving Open Sound Control and MIDI messages over Wi-Fi, CoreMIDI inter-app communication, and compatible hardware.

For detailed information about TouchOSC, refer to their manual [Getting Started · OSC](https://hexler.net/touchosc/manual/getting-started-osc).

### Fader

This example will control the fader of Executor 230 of Page 1:

![](/img/grandma3/2-4/img_touchosc_1_v1-5-de2c3a.png)

Notes:

- Assumes the OSCData line on the console is configured with a "gma3" prefix. If the prefix is empty, this would just be /Page1/Fader230.
- Assumes the "Page" and "Fader" cells in the OSCData line on the console are set to "Page" and "Fader" respectively (this is the default).

 

### Executor Button

This example will press the button for Executor 230 of Page 1:

![](/img/grandma3/2-4/img_touchosc_2_v1-5-1fca9d.png)

Notes:

- Assumes the OSCData line on the console is configured with a "gma3" prefix. If the prefix is empty, this would just be /Page1/Key230.
- Assumes the "Page" and "Key" cells in the OSCData line on the console are set to "Page" and "Key" respectively (this is the default).
- The {Send on Press} and {Send on Release} settings (not pictured above) should both be enabled/checked.
