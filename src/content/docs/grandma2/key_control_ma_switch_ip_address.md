---
title: "Change IP address"
description: "You can change the IP address of the MA Network Switch from a connected grandMA2 console or a connected grandMA2 onPC."
product: grandma2
lang: en
sourceUrl: "https://help.malighting.com/grandMA2/en/help/key_control_ma_switch_ip_address.html"
scrapedAt: "2026-06-12T21:28:27.006Z"
---
You can change the IP address of the MA Network Switch from a connected grandMA2 console or a connected grandMA2 onPC.\
The IP address will be used to reach the web interface and to reach the connected grandMA2 console or the connected grandMA2 onPC.\
The current IP address is displayed in the IP ETHERCON 1(ETH0) or in the IP ETHERCON 1(ETH0.1) column, depending on the used Ethernet connector.

**Important:**\
If you change the IP address and the new IP address is within another subnet, it is necessary to set the IP address on your computer or grandMA2 console to connect to the web interface. For more information about how to change the IP address see [Networking](/grandma2/key_network/).\
If the computer or the grandMA2 console and the switch are in different subnet, the connection is not possible.

**Important:**\
Make sure that every device in the network has its unique IP address. If two devices have the same IP address in a network the devices might not be reachable.

**Requirement:** [Added MA Network Switch in the network configuration](/grandma2/key_control_ma_switch_add/).

1.  Open the MA Network Configuration.\
   \- Press Setup, and tap under **Network** MA Network Configuration.\
   The MA Network Configuration window opens.
2. Tap at Network Switch.

   ![](/img/grandma2/menu_ma-network-configuration_network-switch_v3_2-2dcf6e.png)

   _MA Network Configuration - Network Switch_
3. Navigate to the cell with the IP address you like to change and press the screen encoder or tap and hold in the cell.\
   The **Edit IP ETHERCON 1 pop-up** opens.
4. Type the new IP address in the green edit line. Tap at the **plus **![](/img/grandma2/icon_plus_small_v3-2-ae05d9.png) to open the virtual keyboard.
5. Press Please.

The IP address is changed and saved in the startup configuration.
