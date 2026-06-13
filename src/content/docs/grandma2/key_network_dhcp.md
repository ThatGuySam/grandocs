---
title: "Using DHCP in MA devices"
description: "The grandMA2 supports the use of DHCP (Dynamic Host Configuration Protocol). Use the normal procedure for setting static IP addresses in your devices, if you do"
product: grandma2
lang: en
sourceUrl: "https://help.malighting.com/grandMA2/en/help/key_network_dhcp.html"
scrapedAt: "2026-06-12T21:28:07.115Z"
---
The grandMA2 supports the use of DHCP (Dynamic Host Configuration Protocol). Use the normal procedure for setting static IP addresses in your devices, if you do not know what DHCP is.

 

DHCP is enabled as a default when you do a full install. It can also be enabled on Consoles, NPU, and DMX Nodes from the Setup->Network->MA Network Configuration. Read more about this in the [Adding devices to your session topic](/grandma2/key_network_session_add_device/).

The device will look for a DHCP server in the network during the boot process. If a DHCP server is not found, then the device will assign an IP address in the APIPA (Automatic Private IP Addressing) range. This address will begin with 169.254.x.y.

DHCP can also be used to define a gateway address. This can also be done with static address, but only when using the [SetIP keyword](/grandma2/key_keyword_setip/) in the command line.
