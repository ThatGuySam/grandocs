---
title: "Networking"
description: "Networking allows for the expansion of a single standalone console to a complete system with DMX nodes and extra processing powers."
product: grandma3
version: "2.4"
lang: en
sourceUrl: "https://help.malighting.com/grandMA3/2.4/HTML/network.html"
scrapedAt: "2026-06-12T21:24:44.751Z"
---
Networking allows for the expansion of a single standalone console to a complete system with DMX nodes and extra processing powers.

The rear panel of all the consoles has three Ethernet connectors, which can be used to connect to three different networks.

Networking is used for:

- Connecting several MA3 devices in a session
- Output and input Ethernet-based DMX
- MVR-xchange to link compatible software
- Internet connection 

## MA Session

Sessions are a way to expand a single console. They allow for connecting multiple consoles in a multi-user setup where several programmers can work in the same show. grandMA3 Processing Units can be added to move DMX calculations away from the consoles and into processors located where needed. grandMA3 xPort Nodes listen to a session and function as DMX interfaces, allowing decentralized synchronized DMX distribution.

A session is needed to connect grandMA3 devices. Read about [sessions here](/grandma3/2-4/network_session/).

## Ethernet DMX

grandMA3 can output DMX using Art-Net and sACN. It is possible to set up a specific Ethernet port to output the network DMX. Read more in the [DMX In and Out topics](/grandma3/2-4/dmx/).

## MVR-xchange

MVR-xchange can be used to exchange MVR information in a network. Learn more about this in the [MVR-xchange topic](/grandma3/2-4/remote_inputs_mvr/).

## Internet Connection

The grandMA3 system is designed to connect to the Internet, more specifically, to World Servers. These servers can provide different services to the connected stations.

It is recommended to separate the light network from the Internet and use one of the three Ethernet connectors on the back of the MA hardware stations to connect to a network with Internet access. This will maintain a separation between the Internet and the light network and still provide access to the services on the world server.

For more information, see the [World Server topic](/grandma3/2-4/system_world/) and the [Interfaces and IP topic](/grandma3/2-4/network_interface/).

An Internet connection also makes it possible to see the manual videos in the software version of the manual. 

## Internal Connections

A console uses internal network connections to connect different sections of the internal components. This might be visible at some locations but should never be changed by users.

### []()Enabling or Disabling the Network Connection

The network needs to be enabled to communicate. This includes transmitting DMX using Ethernet.

Turning network On or Off is done from the **Network menu** - read about the network menu in the [Sessions topic](/grandma3/2-4/network_session/).

In the lower right corner of the network menu, there is a button to toggle the network connection.

![](/img/grandma3/2-4/icon_network-enable_v0-91-94165c.png)

_Network enable button_

If the icon is red, the network is turned Off. If it is green, it is On.

Subtopics

- [Interfaces and IP](/grandma3/2-4/network_interface/)
- [Session](/grandma3/2-4/network_session/)
- [Web Remote](/grandma3/2-4/network_webremote/)
- [Network Design](/grandma3/2-4/network_design/)
- [Network Tests](/grandma3/2-4/network_tests/)
- [Regulations and Standards](/grandma3/2-4/network_regulations/)
- [Station Control](/grandma3/2-4/network_station_control/)
