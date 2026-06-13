---
title: "Network Protocols Configuration"
description: "To open the network protocols configuration, press Setup and tap Network Protocols in the column DMX/Network."
product: dot2
lang: en
sourceUrl: "https://help.malighting.com/dot2/en/help/key_window_networkprotocols.html"
scrapedAt: "2026-06-12T21:29:45.217Z"
---
To open the network protocols configuration, press Setup and tap Network Protocols in the column **DMX/Network**. 

![](/img/dot2/dot2_views-and-windows_network-protocols_art-net_v1-3-24ab6a.png)

_Figure 1: Network Protocols Configuration – Art-Net_

To edit the cells in the columns **Subnet **and **Universe**, tap the cell and press the encoder or tap and hold the cell. The calculator opens displaying the hexadecimal number system – 0 to 9 and A to F. 

![](/img/dot2/dot2_views-and-windows_network-protocols_calculator_v1-3-9c238c.png)

_Figure 2: Network Protocols Configuration – Calculator in Art-Net_

![](/img/dot2/dot2_views-and-windows_network-protocols_sacn_v1-3-bd6c3e.png)

_Figure 3: Network Protocols Configuration – sACN_

To edit the column **sACN Universe**, tap the cell and press the encoder or tap and hold the cell. The calculator opens: 

![](/img/dot2/dot2_views-and-windows_network-protocols_sacn-calculator_v1-3-b76865.png)

_Figure 4: Network Protocols Configuration – Calculator in sACN_

**Session required:**\
To use Art-Net or sACN (=streaming ACN), it is necessary to be in a session. To create a session, tap Sessions in the [Setup](/dot2/key_window_setup/). The [network setup](/dot2/key_window_networksetup/) opens.\
If you are not in a session, Art-Net or sACN is not active.

**Network protocols and dot2 onPC:**\
When using Art-Net or sACN with a dot2 onPC, the first universe is free. If you would like to output more than one universe, you have to add a Node4 with a maximum of 1024 DMX channels. 

**Windows® 8 or Windows® 8.1:**\
To use Art-Net on Windows® 8 or Windows® 8.1, it is necessary to start the application as administrator. If you don´t start the application as administrator, Art-Net is not active.

**Important:**\
Art-Net and sACN addresses must not be assigned to multiple universes. 

If an Art-Net or an sACN address is assigned to multiple universes, the values will be marked in red, meaning that they are invalid.  

![](/img/dot2/dot2_views-and-windows_network-protocols_invalid-vlaue_v1-3-7d38ce.png)

_Figure 5: Invalid Values in Network Protocols Configuration_

In this window, you can enable or disable Art-Net or sACN.\
Art-Net and sACN are an addition to the default network protocol dot2-Net.\
The network protocols transport DMX via wired network connection (Ethernet).

**sACN Priority:**\
The sACN priority in the dot2 is set to 100.

The green check mark symbolizes that this network protocol is enabled.\
The red prohibition sign symbolizes that this network protocol is disabled.\
To enable or disable a network protocol, tap the network protocol type.

The IP address, which sends the network protocol, is displayed below the network protocol.\
The Art-Net IP address is visible as soon as Art-Net has been enabled and a session is active.\
To change the IP address, use the [SetIP command](/dot2/key_keyword_setip/).

The following columns are available:

**Active:**\
Displays if Art-Net or sACN is on or off for the respective universe.\
To turn Art-Net or sACN on or off for the respective universe, tap and hold the cell or press the Scroll Active encoder.

**Mode:**\
Displays the supported mode of the network protocol.\
Art-Net = Output Broadcast (Art-Net 1)\
sACN = Output Multicast

**dot2 Universe:**\
Displays the dot2 universes from 1 to 8.

**Art-Net universe / sACN universe:**\
Displays the Ethernet universe.\
Art-Net = 0:0 - 0:7\
sACN = 1 - 8

## Encoder Bar Functions

![](/img/dot2/dot2_views-and-windows_network-protocols_encoder-bar_v1-3-715353.png)

_Figure 6: Network Protocol – Encoder Bar_

**Network Protocol:**\
To select a network protocol, turn the encoder left or right.\
To enable or disable a network protocol, press the encoder. The current status is displayed in brackets.

**Scroll:**\
To scroll in the white focus frame, turn the encoder left or right.\
To select on or off in the white focus frame or to open the calculator in the column with universes, press the encoder.

**Select:**\
To select multiple cells, press ![ma](/img/dot2/ma_1-85eed0.png) and turn the encoder left or right.\
A blue frame around the cells displays the selected cells.
