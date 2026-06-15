---
title: "Ethernet DMX"
description: "There are currently two supported protocols for sending and receiving DMX using the network: sACN and Art-Net."
product: grandma3
version: "2.3"
lang: en
sourceUrl: "https://help.malighting.com/grandMA3/2.3/HTML/dmx_ethernet.html"
scrapedAt: "2026-06-15T18:25:19.550Z"
pagefind: false
---
There are currently two supported protocols for sending and receiving DMX using the network: sACN and Art-Net.

It is the session master station that outputs the network DMX. The visual feedback regarding sending or receiving network DMX can look different on the stations in the session, so it should be viewed and changed on the master station to see the actual output/input status.

Both are set up and changed in the **DMX Protocols** menu:

![](/img/grandma3/2-3/menu_dmx-protocols_artnet_v2-2-d0fcb7.png)

_DMX protocol configuration for Art-Net_

Access the menu by pressing Menu and then tap DMX Protocols.

Tapping the DMX Protocols button opens the menu for the first protocol. The example above is the Art-Net menu.

The menus can also be opened using the command line:

For Art-Net:

|                                                                    |                                   |
| ------------------------------------------------------------------ | --------------------------------- |
| ![](/img/grandma3/2-3/icon_commandline-input_logo_v2-0-59d23e.png) | User name\[Fixture]>Menu "ArtNet" |

[![](/img/grandma3/2-3/robot-icon_white-274940.png)       Paste to Command Line](#ma_cmd?Menu%20%22ArtNet%22)

For sACN:

|                                                                    |                                 |
| ------------------------------------------------------------------ | ------------------------------- |
| ![](/img/grandma3/2-3/icon_commandline-input_logo_v2-0-59d23e.png) | User name\[Fixture]>Menu "sACN" |

[![](/img/grandma3/2-3/robot-icon_white-274940.png)       Paste to Command Line](#ma_cmd?Menu%20%22sACN%22)

On the left side menu, there are two buttons, one for each menu.

See the subtopics for information about the two protocols.

Subtopics

- [Art-Net Menu](/grandma3/2-3/dmx_ethernet_artnet/)
- [sACN (streaming ACN) Menu](/grandma3/2-3/dmx_ethernet_sacn/)
- [Transmit DMX Using Art-Net](/grandma3/2-3/dmx_ethernet_artnet_transmit/)
