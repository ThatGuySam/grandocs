---
title: "DMX In and Out"
description: "There are several ways to get DMX in and out of the grandMA3 system."
product: grandma3
version: "2.4"
lang: en
sourceUrl: "https://help.malighting.com/grandMA3/2.4/HTML/dmx.html"
scrapedAt: "2026-06-12T21:24:45.959Z"
---
There are several ways to get DMX in and out of the grandMA3 system.

All DMX ports on all devices can be configured as DMX inputs or outputs.

DMX behavior varies depending on whether it is transmitted via physical ports or network protocols, and how those outputs are configured.

This is configured in the **Output Configuration** menu. For more information see [DMX Port Configuration](/grandma3/2-4/dmx_port_config/).

DMX can also be transferred using standard network protocols, referred to as [Ethernet DMX](/grandma3/2-4/dmx_ethernet/).

## DMX Refresh Rate

The DMX standard used by the system (ANSI E1.11 - 2008 (R2018)) supports a wide range of refresh rates and does not require all channels to be transmitted every time.

However, the grandMA3 system implements DMX using the following rules:

- The entire DMX universe is sent each time.

- The maximum DMX rate is 30 Hz.

- The minimum DMX rate is 1 Hz.

- The default refresh rate is 30 Hz.

- The refresh rate can drop, but not below the minimum, in universes without value changes. This can occur on XLR ports set to "RDM" and when DMX is output using Art-Net or sACN.

  DMX output can be XLR ports on compatible grandMA3 hardware or via Ethernet DMX. The XLR ports set to "Out" do not slow down the DMX refresh rate. The other methods can slow it down.

- Universes can have different refresh rates. For instance, a universe without any changes can be at 1 Hz, and a universe with a running phaser can be at 30 Hz.

See the subtopics for more information about refresh rates.\
\
Subtopics

- [DMX Port Configuration](/grandma3/2-4/dmx_port_config/)
- [Ethernet DMX](/grandma3/2-4/dmx_ethernet/)
- [DMX Priorities](/grandma3/2-4/dmx_priorities/)
