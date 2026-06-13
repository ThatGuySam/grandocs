---
title: "sACN (streaming ACN) Menu"
description: "ACN (and streaming ACN) is an ANSI/ESTA international standard. Further readings: <https://en.wikipedia.org/wiki/ArchitectureforControlNetworks>."
product: grandma3
version: "2.4"
lang: en
sourceUrl: "https://help.malighting.com/grandMA3/2.4/HTML/dmx_ethernet_sacn.html"
scrapedAt: "2026-06-12T21:24:46.125Z"
---
ACN (and streaming ACN) is an ANSI/ESTA international standard. Further readings: <https://en.wikipedia.org/wiki/Architecture_for_Control_Networks>.

ACN (Architecture for Control Networks) is a suite of protocols. It uses a lot of elements that are currently not supported by grandMA3. However, the ACN protocols also have a version that transports DMX data. It is called 'Lightweight streaming protocol for transport of DMX512 using ACN' or more popular "streaming ACN" or "sACN". It is the international standard number E1.31.

|                                            |                                                                                                                                                   |
| ------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------- |
| ![](/img/grandma3/2-4/tip_gray-639af3.png) | **Hint:**                                                                                                                                         |
|                                            | The DMX output via sACN can vary in refresh rates. It follows the rules specified in the [DMX In and Out topic](/grandma3/2-4/dmx/#h2_49605550).  |

It is configured in the sACN menu:

![](/img/grandma3/2-4/menu_dmx-protocols_sacn_v2-4-e6d1d1.png)

_sACN menu_

See the [Ethernet DMX topic](/grandma3/2-4/dmx_ethernet/) for information on how to open this menu.

## Config Buttons

There are some buttons at the top of the menu:

- **Preferred IP**:\
  This is the preferred IP address or address range used by the sACN protocol. The Interface can be set to Auto, allowing this setting to select the interface that matches the preferred setting. Tap this input button to open a small number input pop-up. The preferred number has to be input as an IP address with the subnet mask written in CIDR notation. For instance, 192.168.1.0/24 tells the system that it prefers an IP address that starts with 192.168.1. The last number does not matter (the "/24" is the same as the subnet mask 255.255.255.0). This setting is individual for each station.
- **Interface**:\
  Tap this button to open the **Select Interface pop-up** to select the desired network interface. This interface will be used for all sACN in and out. The **Auto** option can be used to allow the **Preferred IP** setting to select the interface. The interface is written inside "<" and ">" when the preferred setting selects it. This setting is individual for each station.
- **Enable Output**:\
  This On/Off button must be On for the master to transmit sACN. Data also needs to be configured for output - read more below.
- **Enable Input**:\
  This On/Off button must be On for the master to receive sACN. Data also needs to be configured for input - read more below.
- **Setup Mode**:\
  This On/Off button is used to toggle the setup mode for nodes. This allows configuration data to set up the nodes without sending sACN DMX data into the network.
- **Send sACN If Idle Master**:\
  This On/Off button defines if the station transmits sACN data when it is Idle Master. In a session, the Global Master transmits the network DMX. If the station is not in a session with other devices, it is Idle Master. Turning this setting On will make the station output network DMX when it is Idle Master. This must be On if a single station is to output networked DMX. Learn more about standalone devices and networked devices in the [System Overview section](/grandma3/2-4/system/). This setting is individual for each station.
- **Output Delay:**\
  This can set an output delay between 0ms and 30ms. This delays the entire sACN output compared to the outputs coming from MA-Net devices.

|                                                  |                                                                                                                                                                                                                                                                                                                                     |
| ------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ![](/img/grandma3/2-4/important_gray-89eed8.png) | **Important:**                                                                                                                                                                                                                                                                                                                      |
|                                                  | * Enabling Setup Mode allows sACN configuration data to be sent and received even when **Enable Output** and **Enable Input** is Off.
* When Setup Mode is Off and output is enabled, then DMX and configuration data are transmitted.
* When Setup Mode is Off and input is enabled, then DMX and configuration data are received. |

Below the buttons, there are two tabs: **Data **and **Discovery**. Data is used to set up output and input, while Discovery can be used to see the transmitting nodes in the network.

## Data Tab

The data tab is a grid of rows and columns. Each row is an sACN configuration. The text color of the name field indicates the status of the row.

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

- **Note:**\
  A note can be added to each row for multiline information.

- **Tags**:\
  Tags can be added to each row. Learn more about tags in the [Tags topic](/grandma3/2-4/tags/).

- **Enabled**:\
  This Yes or No field enables the row to transmit or receive sACN. Yes is the default.

- **Mode**:\
  The mode defines what the row is doing. There are four options:

  - **Output Multicast**:\
    When choosing Output Multicast, sACN will be sent as multicast to the relevant multicast addresses.

  - **Output Unicast**:\
    When choosing Output Unicast, a valid IP address has to be entered in the **Destination IP** column. Universes configured in this row will be sent as unicast to this IP address.

  - **Input Multicast**:\
    Input Multicast will join the Multicast group of the relevant DMX Input Universe.\
    Input Multicast is limited to max. 20 Universes. A warning pop-up appears if more than 20 rows are configured as Input Multicast, and all rows beyond multicast input row 20 will be invalid.

  - **Input Unicast**:\
    Input Unicast is not limited and receives sACN data for the relevant universe without joining any multicast group.

    |                                                    |                                                                          |
    | -------------------------------------------------- | ------------------------------------------------------------------------ |
    | ![](/img/grandma3/2-4/restriction_gray-968e2d.png) | **Restriction:**                                                         |
    |                                                    | The total input count (sACN and Art-Net) must not exceed 128 Universes.  |

- **Destination IP**:\
  This field is only active if the output unicast mode is selected. This is the IPv4 address of the receiving device.

- **Local Universe**:\
  This is the grandMA3 universe to be transmitted or the universe that should receive incoming sACN DMX. If the amount is more than one, then this is the first universe in the range.

- **Amount**:\
  This is the amount of grandMA3 universes to be transmitted or received.

- **sACN Universe**:\
  This is the sACN universe number the grandMA3 universes is transmitted to or the universe number that is listened to if Input is selected. If the amount is more than one, then this is the first universe in the range.

- **Priority**:\
  The allowed value is 0 to 200. The highest number has the highest priority. The default value is 100. This priority is used for transmitted sACN.

- **Preview Only**:\
  sACN data can be sent as preview data. This can, for instance, be used to send DMX to visualizers. 

- **TTL** (Time To Live):\
  Time To Live is a number used to tell routers and some switches how far through the network the sACN data should be transmitted. This is only relevant for output modes. The default value is 8 and this should usually not be changed.

- **Delay**:\
  A delay can be set up between each transmitted universe. This can be helpful for older nodes with slower network cards. Sending many universes at once can flood the node. Adding a small delay helps.

- **Merge Mode**:\
  The Merge Mode defines how incoming sACN merges into universes. When changing the Merge Mode for a configuration line, all universes defined by Local Universe and Amount are changed together. In the DMX Universes-tab of the Patch and Live Patch menu or by editing a universe in the universe pool, it is still possible to change the Merge Mode for single universes independently. As soon as two or more universes of a configuration line have different Merge Modes, the Merge Mode cell will display **...** to indicate this. The Merge Mode and Input Priority are described in the [DMX Port Configuration topic](/grandma3/2-4/dmx_port_config/).

- **Input Priority**:\
  This is the priority of the received sACN. sACN input of grandMA3 ignores sACN priorities and uses this priority instead.

## Discovery Tab

This tap displays the transmitting nodes in the network. Each node detected is a row, and each node has one or more sub-rows with "pages".

- **Lock**:\
  The row can be locked to prevent changes.
- **No**:\
  This is the row number.
- **Name**:\
  Each row gets a name from the device. The name cannot be edited.
- **Universe List**:\
  This is a list of the universes the node transmits.
