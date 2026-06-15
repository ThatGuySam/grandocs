---
title: "16 - Network and How to Output DMX"
description: "This chapter is only information. We are not going to add anything to the show."
product: grandma3
version: "2.3"
lang: en
sourceUrl: "https://help.malighting.com/grandMA3/2.3/HTML/qsg_output_dmx.html"
scrapedAt: "2026-06-15T18:25:41.136Z"
pagefind: false
---
This chapter is only information. We are not going to add anything to the show.

It is possible to connect multiple grandMA3 hardware devices on a network.

This allows multiple operators to work together on the same showfile.

It also offers backup in case some hardware stops working.

There are two directions to go in a grandMA3 network.

The first direction is a grandMA3 onPC solution where the computing hardware is a Windows or Mac computer running the grandMA3 onPC software.

We are not permitted to output anything from the grandMA3 onPC software unless we have some grandMA3 hardware that unlocks parameters/attributes for us. If we have an onPC solution, there is a limit of 4 096 parameters. We can patch these parameters in any of the 1 024 universes available to the system. We need something that can convert the DMX in the network into actual physical DMX universe outputs if we need to control fixtures without an Ethernet port.

The other direction is using grandMA3 consoles as the primary computing hardware. This can be combined with grandMA3 onPC.

The console system gives you some parameters from the beginning. The way to expand the parameters in a console system is by adding grandMA3 processing units - this is the only way to add more parameters when there is a console in the system. Much of the grandMA3 hardware has physical DMX ports. These can (as a general rule) be used as a DMX input or an output.

## Session

The grandMA3 devices need to be connected to a network switch and have IP addresses. We are not going into details on how to do this.

Then, a **Session** needs to be set up. There is always a master device in a session - this needs to be what we call a station. A **Station** is any grandMA3 device that can create and run a session. Other grandMA3 hardware in the network can join the session.

This is controlled from the **Network Menu**.

Click the gear icon ![](/img/grandma3/2-3/icon_gear_15_v1-9-bd0337.png) in the control bar or press the Menu key, and then click Network.

![](/img/grandma3/2-3/qsg_16_network-menu_onpc_v2-3-8fbeef.png)

Other grandMA3 hardware on the network will appear in this menu and can be selected and invited into the session.

## Configuring a DMX Port on grandMA3 Hardware

The DMX ports on any connected grandMA3 hardware can be configured from any station.

Open the menu pop-up again, and this time, click Connector Configuration.

![](/img/grandma3/2-3/qsg_16_output-configuration_v2-2-682cdf.png)

In the example image above, you can see a full-size console with DMX ports. The onPC has ports that match a grandMA3 onPC command wing and a connected grandMA3 onPC fader wing. Up to two grandMA3 onPC fader wings can be connected to each grandMA3 onPC station. Their ports appear as children of the onPC station.

A (not connected) Network Node with a port configuration also exists.

Editing the fields for any port allows you to select which universe it should output or input DMX into.

## Network DMX

Another option is to output (or input) DMX using Art-Net or sACN. To do this, open the menu pop-up again and then click DMX Protocols.

There are two options on the left side where you can select Art-Net or sACN.

![](/img/grandma3/2-3/qsg_16_dmx-protocols_sacn_v2-3-5d765d.png)

It is outside the scope of this Quick Starts Guide to describe this in detail. There is a link below to learn details about the Art-Net and sACN.

But generally, you can set up the grandMA3 system to output any combination of universes. Then, you will need a DMX node from any manufacturer that can understand Art-Net or sACN, and remember that you need some grandMA3 hardware to unlock the parameters even when using Art-Net or sACN to output DMX.

---

## Recap

In this chapter, we looked at what is needed to output DMX. A session, unlocked parameters, grandMA3 DMX ports, or DMX via a network.

Learn more about unlocking parameters in the [Parameters](/grandma3/2-3/system_parameter/) topic and the sub-topics.

You can see the grandMA3 hardware lineup on MA Lighting's website ([External Web Link](https://www.malighting.com/grandma3/products/)).

The Network menu is described in detail in the [Networking](/grandma3/2-3/network/) section.

Details about setting up output from the grandMA3 hardware can be found in the [DMX Port Configuration topic](/grandma3/2-3/dmx_port_config/).

The [Ethernet DMX](/grandma3/2-3/dmx_ethernet/) and its sub-topics describe DMX output via the network.

This was the final chapter in the original version of the Quick Start Guide. Since then, we have added a new chapter about recipes. Future chapters might also get added as new chapters at the end of the guide. The idea is to allow users to not go through the entire quick start guide again but just load their "old" quick start showfile and continue learning about the new stuff. This does not mean that the previous chapters do not contain new information (for instance, Quickeys was added), but these new functions that deserve a chapter will be added at the end.

So, the [next chapter](/grandma3/2-3/qsg_recipes/) is about Recipes.
