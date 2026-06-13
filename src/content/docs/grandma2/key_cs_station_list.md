---
title: "Station list"
description: "Syntax"
product: grandma2
lang: en
sourceUrl: "https://help.malighting.com/grandMA2/en/help/key_cs_station_list.html"
scrapedAt: "2026-06-12T21:28:05.392Z"
---
Syntax

\[IP-address]

\[IP-address] Thru \[IP-address]

\[Host-ID]

\[Host-ID] Thru \[Host-ID]

 

**Important:**\
The **IP address** is a 32-bit dotted decimal notation consisting of four numbers ranging from 0 to 255 and separated by dots, for example 192.168.0.101.

 

- The **host ID** is a unique part of the IP address within a network. The host ID usually comprises the last three decimal numbers of the IP address. The host ID of the IP address 192.168.0.101 is 101 and the network ID is 192.168.0. 
- If the beginning or the end of the command **Thru** is missing, the first or the last occurrence will be used. 

 

### Example:

\[Channel]> SetIP ethO **192.168.0.101**

Sets the IP address. 

 \[Channel]> **Shutdown** 1 **Thru** 4

 Shuts down all the devices with the host IDs 1, 2, 3, and 4. 

 

For more information on how to set the IP address see [SetIP](/grandma2/key_keyword_setip/).
