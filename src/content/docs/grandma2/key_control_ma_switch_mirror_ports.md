---
title: "Mirror ports"
description: "In port mirroring, the entire traffic that arrives at a port is mirrored onto a mirror port of the MA Network Switch."
product: grandma2
lang: en
sourceUrl: "https://help.malighting.com/grandMA2/en/help/key_control_ma_switch_mirror_ports.html"
scrapedAt: "2026-06-12T21:28:27.810Z"
---
In port mirroring, the entire traffic that arrives at a port is mirrored onto a mirror port of the MA Network Switch. 

Port mirroring is most commonly used in debugging or for the analysis of the network traffic such as the network load. 

**Important:**\
The MA Network Switch mirrors several source ports to one destination port. Vice versa, it is possible to set a single destination port at a time. 

**Requirement:**

- [Add MA Network Switch to the network configuration](/grandma2/key_control_ma_switch_add/)​

To mirror ports:

1. Open the **MA Network Configuration**:\
   -Press Setup and tap **Network** MA Network Configuration.\
   -The window **MA Network Configuration** opens.

![](/img/grandma2/menu_ma-network-configuration_network-switch_v3_2-2dcf6e.png)

_MA Network Configuration – Network Switch_

2. Tap Network Switch.
3. Tap a cell in the row of the MA Network Switch you would like to edit and tap Port Mirror.\
   -The **pop-up Configure MA Network Switch Port Mirrors** opens. 

![](/img/grandma2/popup_configure-ma-network-switch-port-mirrors_v3-3-06cc96.png)

_Mirror ports_

4. Select destination port:\
   -Tap the button in the field **Destination Port** and select a port.
5.  Select source ports:\
   -Check the checkboxes corresponding to the source ports.
6. After checking one or several source ports tap Please.
7. The ports are now mirrored. 

**Hint:**\
A port is never destination and source at the same time.
