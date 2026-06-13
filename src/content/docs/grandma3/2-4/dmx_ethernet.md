---
title: "Ethernet DMX"
description: "There are currently two supported protocols for sending and receiving DMX using the network: sACN and Art-Net."
product: grandma3
version: "2.4"
lang: en
sourceUrl: "https://help.malighting.com/grandMA3/2.4/HTML/dmx_ethernet.html"
scrapedAt: "2026-06-12T21:24:46.043Z"
---
There are currently two supported protocols for sending and receiving DMX using the network: sACN and Art-Net.

The session master station outputs the network DMX. The visual feedback for sending or receiving network DMX can appear differently across stations in the session, so it should be viewed and adjusted on the master station to reflect the actual output/input status.

Both are set up and changed in the **DMX Protocols** menu:

![](/img/grandma3/2-4/menu_dmx-protocols_artnet_v2-4-3beb35.png)

_DMX protocol configuration for Art-Net_

Access the menu by pressing Menu and then tap DMX Protocols.

Tapping the DMX Protocols button opens the menu for the first protocol. The example above is the Art-Net menu.

The menus can also be opened using the command line:

For Art-Net:

|                                                                    |                                   |
| ------------------------------------------------------------------ | --------------------------------- |
| ![](/img/grandma3/2-4/icon_commandline-input_logo_v2-0-a59235.png) | User name\[Fixture]>Menu "ArtNet" |

[![](/img/grandma3/2-4/robot-icon_white-1ac0d2.png)       Paste to Command Line](#ma_cmd?Menu%20%22ArtNet%22)

For sACN:

|                                                                    |                                 |
| ------------------------------------------------------------------ | ------------------------------- |
| ![](/img/grandma3/2-4/icon_commandline-input_logo_v2-0-a59235.png) | User name\[Fixture]>Menu "sACN" |

[![](/img/grandma3/2-4/robot-icon_white-1ac0d2.png)       Paste to Command Line](#ma_cmd?Menu%20%22sACN%22)

On the left side menu, there are two buttons, one for each menu.

See the subtopics for information about the two protocols.

Subtopics

- [Art-Net Menu](/grandma3/2-4/dmx_ethernet_artnet/)
- [sACN (streaming ACN) Menu](/grandma3/2-4/dmx_ethernet_sacn/)
- [Transmit DMX Using Art-Net](/grandma3/2-4/dmx_ethernet_artnet_transmit/)
