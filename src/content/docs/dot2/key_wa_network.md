---
title: "Network"
description: "Network can be a lot of things. In our world, network is when you connect at least one device with another using the RJ45 Ethernet connectors."
product: dot2
lang: en
sourceUrl: "https://help.malighting.com/dot2/en/help/key_wa_network.html"
scrapedAt: "2026-06-12T21:29:36.378Z"
---
Network can be a lot of things. In our world, network is when you connect at least one device with another using the RJ45 Ethernet connectors. 

If you only have a console and nothing else then you do not need to worry about anything that has to do with network, but at some point you might want to add something to your system.

The simplest network is connecting a Wing or a dot2 node with the core or XL console.

The MA devices support the defined standard segment length for fixed installations – 90 m plus 2x 5 m. In order to avoid problems caused by different specifications of patching and installation cables, the cable length is restricted to not more than 75 m. 

**Important:**\
dot2 devices are to be operated in a separate network – in VLAN at least.\
In general, MA devices are to be connected by cable and not by wireless LAN. 

Each device has an Ethernet connector on the back. Connect an Ethernet cable of Cat.5.E or higher to the device.

dot2 devices use IPv6. This is a unique number each dot2 device has and uses to speak to each other - it is similar to an address that makes it possible for the devices to know where to send messages.

Since each device has one Ethernet connector only, you need to add a network switch if you want to connect more than two devices. This needs to be a good switch that can handle IPv6 and multicast. Multicast is like a language the devices use to talk to each other. The switch should be able to handle network speed of at least 100 Mbit/s or more. An average network speed of 30 Mbit/s has to be reserved for dot2 devices. Be aware that if you have a managed switch you might need to activate IPv6 in the switch.

**Important:**\
Dynamic link aggregation (LACP) is prohibited in the dot2 network. However, you are permitted to use static link aggregation. 

The delay tolerance is a maximum of 2 ms. 

Next, connect each device to the switch.

The consoles and onPCs are the brains of the operation. You can connect dot2 Wings, dot2 Node4s and dot2 3D to a console or onPC. You can also connect consoles and onPCs for redundancy.

If you need to connect a computer with dot2 onPC or dot2 3D, then you should make sure that your computer can use IPv6. Most recent computers usually use IPv6.

A dot2 core can be connected to a maximum of 4 external wings. A dot2 XL already has a built-in wing so it can be connected to a maximum of 3 external wings. Wings are connected to a specific console (real dot2 console or dot2 onPC).

Other network devices are connected together in a session. Each session can handle 5 dot2 consoles (real consoles or dot2 onPC), 5 dot2 3Ds, 10 dot2 Node4s outputting DMX.

It is possible to run 4 different sessions in the same network.

 

## Related links

[How to connect nodes, wings, onPC and 3D](/dot2/key_ht_wingsnodes3donpc/) 

[What is IPv6](/dot2/key_wa_ipv6/)
