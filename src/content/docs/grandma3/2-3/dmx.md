---
title: "DMX In and Out"
description: "There are several ways to get DMX in and out of the grandMA3 system."
product: grandma3
version: "2.3"
lang: en
sourceUrl: "https://help.malighting.com/grandMA3/2.3/HTML/dmx.html"
scrapedAt: "2026-06-15T18:25:19.387Z"
pagefind: false
---
There are several ways to get DMX in and out of the grandMA3 system.

DMX ports on stations can generate DMX as a standalone device.

DMX ports on grandMA3 devices that are part of a session can also be DMX outputs and inputs.

This is set up from the **Output Configuration** menu. Please read about it in the [DMX Port Configuration topic](/grandma3/2-3/dmx_port_config/).

DMX can also be transferred using standard network protocols. This is [Ethernet DMX](/grandma3/2-3/dmx_ethernet/).

There are different rules for the different kinds of DMX.

Generally, each DMX port on a grandMA3 device can be an input or an output.

## DMX Refresh Rate

The DMX standard used by the system (ANSI E1.11 - 2008 (R2018)) supports a wide range of refresh rates, and it is allowed only to send some of the DMX channels.

The grandMA3 system implements DMX using the following rules:

- The entire DMX universe is sent each time.

- The maximum DMX rate is 30 Hz.

- The minimum DMX rate is 1 Hz.

- The default refresh rate is 30 Hz.

- The refresh rate can drop down (not below the minimum) if there are no changes in the DMX values in a universe and the XLR port is to "RDM" or when DMX is output using Art-Net or sACN.

  DMX output can be XLR ports on compatible grandMA3 hardware or via Ethernet DMX. The XLR ports set to "Out" do not slow down the DMX refresh rate. The other methods can slow it down.

- Universes can have different refresh rates. For instance, a universe without any changes can be at 1Hz, and a universe with a running phaser can be at 30Hz.

See more about the used refresh rates in the sub-topics.\
\
Subtopics

- [DMX Port Configuration](/grandma3/2-3/dmx_port_config/)
- [Ethernet DMX](/grandma3/2-3/dmx_ethernet/)
