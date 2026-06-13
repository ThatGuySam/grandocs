---
title: "Wireless Networks WLAN - WiFi"
description: "A wireless connection should only be used with the web remote."
product: grandma3
version: "2.4"
lang: en
sourceUrl: "https://help.malighting.com/grandMA3/2.4/HTML/network_design_wlan.html"
scrapedAt: "2026-06-12T21:24:45.745Z"
---
A wireless connection should only be used with the web remote.

Do not try to run a session on a WiFi connection. Please read the [Network Design topic](/grandma3/2-4/network_design/) and understand why it is not possible.

Wireless networks (WiFi) manipulate the data packets to optimize the wireless network. This works for standard HTTP and HTTPS traffic, but not for MA-Net3.

Please use proper access points for the wireless network.

The access points shall be connected to a port on a network switch, and all access points should be in a separate VLAN. This ensures that all multicast traffic can be filtered out of the wireless network.

The access points must be filtered to only allow MA Web Remote traffic “on air” to avoid delays caused by too much traffic between the wireless device used for MA Web Remote and the rest of the MA System. This filtering could be done in the switch or the access points.

In the software, the maximum resolution transmitted for the Web Remote can be set (and limited) to allow for better performance in a slow wireless network - see the [Web Remote topic](/grandma3/2-4/network_webremote/).
