---
title: "Enable DHCP client"
description: "If the network is equipped with a DHCP server enable the DHCP client of the switch for it to receive automatically an IP address from the DHCP server."
product: grandma2
lang: en
sourceUrl: "https://help.malighting.com/grandMA2/en/help/key_control_ma_switch_dhcp.html"
scrapedAt: "2026-06-12T21:28:27.781Z"
---
If the network is equipped with a DHCP server enable the DHCP client of the switch for it to receive automatically an IP address from the DHCP server.

The previous assigned IP address will be used if there is no DHCP server available.

**Requirement:** [Added MA Network Switch to the network configuration](/grandma2/key_control_ma_switch_add/).

1. Open the MA Network Configuration.\
   \- Press Setup, and tap under **Network** MA Network Configuration.\
   The MA Network Configuration window opens.
2. Tap at Network Switch.

![](/img/grandma2/menu_ma-network-configuration_network-switch_v3_2-2dcf6e.png)

_MA Network Configuration - Network Switch_

3. Tap and hold the cell in the column DHCP client enabled until **Yes** is displayed.

The DHCP client is enabled. The DHCP settings are saved in the startup configuration.

![](/img/grandma2/menu_ma-network-configuration_network-switch_dhcp-yes_v3_3-5e519b.png)

_MA Network Configuration - Network Switch - DHCP yes_

The column IP ETHERCON 1(ETH0) displays the used DHCP IP address. The column IP ETHERCON 1(ETHO.1) displays the default IP address of the MA Network Switch.

If DHCP is on, the MA Network Switch is reachable only with the DHCP IP address.

**Hint:**\
You can also enable the DHCP client by using the command line.\
\- Change the destination of the command line to NetConfig/Network Switch 8. For more information see [ChangeDest keyword](/grandma2/key_keyword_changedest/).\
\- Type in the command line Assign 1 / DHCPclientenabled = "Yes".\
The DHCP client of the NetworkSwitch 1 is enabled.
