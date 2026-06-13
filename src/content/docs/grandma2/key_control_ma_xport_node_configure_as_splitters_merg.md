---
title: "Configure the MA xPort Nodes as splitters or mergers"
description: "It is possible to configure MA xPort Nodes as a splitter or a merger on one universe."
product: grandma2
lang: en
sourceUrl: "https://help.malighting.com/grandMA2/en/help/key_control_ma_xport_node_configure_as_splitters_merg.html"
scrapedAt: "2026-06-12T21:28:28.575Z"
---
It is possible to configure MA xPort Nodes as a splitter or a merger on one universe. 

To do so:

- Configure the node on the console or in a browser first. 

For information on how to configure nodes see [Configure nodes on the console](/grandma2/key_control_ma_xport_node_configure_on_console/) or [Configure nodes in a browser](/grandma2/key_control_ma_xport_node_configure_in_browser/). 

The following example displays how to configure the nodes as splitters or mergers on a console. 

---

## Configure the Node as a Merger

If the node is used as a merger, it is possible to merge one or two DMX inputs into one universe. 

1. To configure the node as a merger:\
   -Add an MA xPort Node to the network configuration.\
    For more information see [Adding devices to your session](/grandma2/key_network_session_add_device/). 
2. Select the same universe for all ports in the pop-up **Configure DMX Port (MA-Net2 Mode)**.\
   For more information see [Configure nodes on the console](/grandma2/key_control_ma_xport_node_configure_on_console/#configureDMX_universe). \
   -Then, set a maximum of 2 ports to the port mode "IN" and 1 port to the port mode "OUT".

![](/img/grandma2/menu_configure-node-as-merger_v3-3-ea4086.png)

_Configure node as a merger_

**Important:**\
If the xPort node is used as a merger, it must not be used in a session or connected to other xPort nodes via the network.

You have successfully configured the node as a merger.  

---

## Configure the Node as a Splitter 

1. To configure the node as a splitter:\
   -Add an MA xPort Node to the network configuration.\
   For more information see [Adding devices to your session](/grandma2/key_network_session_add_device/).
2. Select the same universe for all ports in the pop-up **Configure DMX Port (MA-Net2 Mode)**.\
   For more information see [Configure nodes on the console](/grandma2/key_control_ma_xport_node_configure_on_console/#configureDMX_universe). \
   -Then, set at least 3 ports to the port mode "OUT" and 1 port to the port mode "IN". 

![](/img/grandma2/menu_configure-node-as-splitter_v3-3-9101df.png)

_Configure node as splitter_

You have successfully configured the node as a splitter.
