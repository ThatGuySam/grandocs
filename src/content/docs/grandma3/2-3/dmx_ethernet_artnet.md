---
title: "Art-Net Menu"
description: "Art-Net is a royalty-free protocol developed by Artistic Licence (<https://artisticlicence.com/>)."
product: grandma3
version: "2.3"
lang: en
sourceUrl: "https://help.malighting.com/grandMA3/2.3/HTML/dmx_ethernet_artnet.html"
scrapedAt: "2026-06-15T18:25:19.558Z"
pagefind: false
---
Art-Net is a royalty-free protocol developed by Artistic Licence (<https://artisticlicence.com/>).

grandMA3 supports Art-Net 4.

|                                            |                                                                                                                                                      |
| ------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| ![](/img/grandma3/2-3/tip_gray-269535.png) | **Hint:**                                                                                                                                            |
|                                            | The DMX output via Art-Net can vary in refresh rates. It follows the rules specified in the [DMX In and Out topic](/grandma3/2-3/dmx/#h2_49605550).  |

It is configured in the Art-Net menu:

![](/img/grandma3/2-3/menu_dmx-protocols_artnet_v2-2-d0fcb7.png)

_Art-Net configuration menu_

See the [Ethernet DMX topic](/grandma3/2-3/dmx_ethernet/) for information on how to open this menu.

See the [Transmit DMX using Art-Net topic](/grandma3/2-3/dmx_ethernet_artnet_transmit/) for an explanation of the steps needed to transmit Art-Net.

## Config Buttons

There are some buttons at the top of the menu:

- **Preferred IP**:\
  This is the preferred IP address or address range used by the Art-Net protocol. The Interface can be set to **Auto**, allowing this setting to select the interface that matches the preferred setting. Tap this input button to open a small number input pop-up. The preferred number has to be input as an IP address with the subnet mask written in CIDR notation. For instance, 10.0.0.0/8 tells the system that it prefers an IP address that starts with 10. The rest of the numbers do not matter (the "/8" is the same as the subnet mask 255.0.0.0). This setting is individual for each station.
- **Interface**:\
  Tap this button to open the Select Interface pop-up to select the desired network interface. This interface will be used for all Art-Net in and out. The **Auto** option can be used to allow the **Preferred IP** setting to select the interface. The interface is written inside "<" and ">" when it is selected by the preferred setting. This setting is individual for each station.
- **Enable Output**:\
  This On/Off button must be On for Art-Net to be transmitted. Data also needs to be configured for output - read more below.
- **Enable Input**:\
  This On/Off button must be On for Art-Net to be received. Data also needs to be configured for input - read more below.
- **Broadcast Threshold**:\
  This input button sets the amount of Art-Net receivers for a universe before the master starts to send the universe as broadcast. This is only valid if the mode is set to **Auto**. If the number of receivers is below the threshold, the universe is sent as Unicast. If it is above, then the universe is sent as Broadcast.
- **ArtPollRate**:\
  This input sets the time between each ArtPollRequest packet sent by the master station.
- **Setup Mode**:\
  This On/Off button is used to toggle the setup mode. This mode can be used to transmit and receive configuration data only. If the output and input are turned Off, only the configuration data is transmitted and received.
- **Send Art-Net If IdleMaster**:\
  This On/Off button defines if the station transmits Art-Net data when it is Idle Master. In a session, the Global master transmits the network DMX. If the station is not in a session with other devices, it is Idle Master. Turning this setting On will make the station output network DMX when it is Idle Master. This must be On if a single station is to output networked DMX. Learn more about standalone devices and networked devices in the [System Overview section](/grandma3/2-3/system/). This setting is individual for each station.
- **Output Delay**:\
  This can set an output delay between 0ms and 30ms. This delays the entire Art-Net output compared to the outputs coming from MA-Net devices.

|                                                  |                                                                                                                                                                                                                                                                                                                                |
| ------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| ![](/img/grandma3/2-3/important_gray-f4dfbc.png) | **Important:**                                                                                                                                                                                                                                                                                                                 |
|                                                  | * Enabling Setup Mode allows Art-Net configuration data to be sent and received even when **Enable Output** and **Enable Input** is Off.
* When Setup Mode is Off, and output is enabled, DMX and configuration data are transmitted.
* When Setup Mode is Off, and input is enabled, DMX and configuration data are received. |

There are two tabs below the buttons. They are **Data** and **Nodes**. Data is used to set up output and input. Nodes can be used to see the discovered nodes in the network. If the nodes support it, this can also be used to configure the ports on the node.

## Data Tab

The data tab is a grid of rows and columns. Each row is an Art-Net configuration.

The text on the entire row is red if the row is not valid or not enabled.

The name text is flashing green when data is transmitted. It can appear solid green if the output is constantly changing.

The name text color is flashing orange when data is received. It can appear solid orange if the input is constantly changing.

This is a short description of the columns:

- **Lock**:\
  The row can be locked to prevent changes.

- **No**:\
  This is the row number.

- **Name**:\
  Each row can have a name. This can be used as short info for the row.

- **Note**:\
  A note can be added to each row for information purposes.

- **Tags**:\
  A tag can be added to each row. Learn more about tags in the [Tags topic](/grandma3/2-3/tags/).

- **Enabled**:\
  This **Yes** or **No** field is used to enable the row transmitting or receiving Art-Net. No is the default.

- **Mode**:\
  The mode defines what the row is doing. There are four options:

  - **Broadcast**:\
    This transmits Art-Net using broadcast.

  - **Unicast**:\
    This transmits Art-Net using unicast.

  - **Auto**:\
    This transmits Art-Net. It uses the **Broadcast Threshold** number to determine if universes should be transmitted using broadcast or unicast. If the number of universe subscribers (determined by ArtPollRequests) are below the threshold, then it is sent using unicast. Is it above the threshold, then it is broadcasted.

  - **Input**:\
    The row receives Art-Net and merges it into the defined universe.

    |                                                    |                                                                          |
    | -------------------------------------------------- | ------------------------------------------------------------------------ |
    | ![](/img/grandma3/2-3/restriction_gray-3bb57e.png) | **Restriction:**                                                         |
    |                                                    | The total input count (Art-Net and sACN) must not exceed 128 Universes.  |

- **Destination IP**:\
  This field is only active if the unicast mode is selected. This is the IPv4 address of the receiving device.

- **Subscribed Nodes**:\
  This field provides information about the number of subscribing devices. This is determined using ArtPollRequests.

- **Local Universe**:\
  This is the grandMA3 universe to be transmitted or the universe that should receive incoming Art-Net DMX. This is the first universe in the range if the amount is more than one.

- **Amount**:\
  This is the amount of grandMA3 universes to be transmitted or received.

- **Net**:\
  The net number is a value between 0 and 127. There are 128 different nets since Art-Net III. Each net is a complete group of **Sub-Nets** and **Universes**. This allows for addressing a total of 32 768 Art-Net universes. To be compatible with Art-Net I and Art-Net II devices, please use net 0.

- **Art-Net Sub-Net**:\
  There are 16 sub-nets in Art-Net. They can be input in decimal numbers from 0 to 15 or 0 to F in hex numbers.

- **Universe**:\
  There are 16 universes in each sub-net. They can be input in decimal numbers from 0 to 15 or 0 to F in hex numbers.

- **Art-Net Absolute**:\
  This is the absolute universe number. It is calculated based on the net, sub-net, and universe numbers. It can also work the other way. A universe number can be input here, and then the net, sub-net, and universe numbers are calculated based on the input.

- **Packet Delay**:\
  A delay can be set up between each transmitted universe. This can be helpful for older nodes with slower network cards. Sending many universes at once can flood the node. Adding a small delay helps. This setting is only available for outputting modes.

- **Merge Mode**:\
  The Merge Mode defines how incoming sACN merges into universes. When changing the Merge Mode for a configuration line, all universes defined by Local Universe and Amount are changed together. In the DMX Universes-tab of the Patch and Live Patch menu or by editing a universe in the universe pool, it is still possible to independently change the Merge Mode for single universes. As soon as two or more universes of a configuration line have different Merge Modes, the Merge Mode cell will display **...** to indicate this. The Merge Mode and Input Priority are described in the [DMX Port Configuration topic](/grandma3/2-3/dmx_port_config/).

- **Input Priority**:\
  This is the priority of the received Art-Net. This can only be changed when the mode is input. Follow the link above to learn more.

- **Timecode Slot**:\
  Any received ArtTimeCode is sent to the timecode slot number defined here. The mode does not need to be set to Input to receive the timecode, but Input needs to be enabled. This setting can only be changed when the mode is input. There are a total of 8 timecode slots. Read more about them in the [What are timecode slots topic](/grandma3/2-3/timecode_slots/).

- **Enable RDM**:\
  RDM via Art-Net can be enabled for the Art-Net universes specified in the row.

## Nodes Tab

Each node detected is a row. Each node has one or more sub-rows with "binds". Each bind can only have 4 ports. If a device has more than 4 ports, then the device has multiple binds.

- **Lock**:\
  The row can be locked to prevent changes.
- **No**:\
  This is the row number.
- **Name**:\
  Each row gets a name from the device. The name can be edited if the device supports it. The name text turns red if a node has been online but is now inactive.
- **IP**:\
  The IP address of the device. The address can be edited if the device supports it.
- **Net**:\
  Each bind has a net number. The number can be edited if the device supports it.
- **Sub-Net**:\
  Each bind has a sub-net number. The number can be edited if the device supports it.
- **Output Port**:\
  This is the universe number of output ports on the device. The number can be edited if the device supports it.
- **Input Port**:\
  This is the universe number of input ports on the device. The number can be edited if the device supports it.
