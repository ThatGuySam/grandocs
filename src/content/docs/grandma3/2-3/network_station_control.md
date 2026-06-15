---
title: "Station Control"
description: "The Station Control menu gives quick access to settings regarding the station and session communication."
product: grandma3
version: "2.3"
lang: en
sourceUrl: "https://help.malighting.com/grandMA3/2.3/HTML/network_station_control.html"
scrapedAt: "2026-06-15T18:25:19.402Z"
pagefind: false
---
The Station Control menu gives quick access to settings regarding the station and session communication.

Many of the settings in this menu can be found at other locations in the system.

![This image shows the Station Control menu.](/img/grandma3/2-3/menu_station-control_v2-2-aa242f.png)

Station Control menu

The menu is split into two sides. The left side is settings related to this specific station. The right side is settings that relate to the entire session.

## Station

The station side has two columns: **General** and **Session Data Merge**.

General has the following toggle buttons:

- **Invite**:\
  This is the same as the **Invite** setting in the [Network Menu](/grandma3/2-3/network_session/).
- **Web Remote**:\
  This is the same as the **Web Remote** setting in the [Network Menu](/grandma3/2-3/network_session/).
- **Remote HID**:\
  This is the same as the **Remote HID **setting in the [Network Menu](/grandma3/2-3/network_session/).
- **SFTP Access**:\
  This setting toggles whether this station can be accessed using the SFTP connection. Learn more about SFTP in the [SFTP Connection topic](/grandma3/2-3/fm_sftp/).
- **Send Art-Net If IdleMaster**:\
  This is the same as the **Send Art-Net If IdleMaster** setting in the [Art-Net Menu](/grandma3/2-3/dmx_ethernet_artnet/).
- **Send sACN If IdleMaster**:\
  This is the same as the **Send sACN If IdleMaster** setting in the [sACN Menu](/grandma3/2-3/dmx_ethernet_sacn/).

Session Data Merge only has one toggle button: 

- **Include Playbacks**:

  This defines if the changes of playbacks are to be considered in the Session Data Merge. If it is enabled, the changes made on playbacks will be taken into account.

  Session Data Merge happens when stations connect in a session, and the data from two stations are merged.

   

## Session

The session side has three columns: **General**, **In & Out**, and **DMX Protocols**.

General only has the following buttons:

- **RDM**:\
  This is the same as the **RDM **setting in the [Network Menu](/grandma3/2-3/network_session/).

- **DSCP**:\
  DSCP settings define the Quality of Service (QoS) setting for the data packages. This is information added to the package, and the network switches have settings defining the prioritization of the data packages. Read more [below](/grandma3/2-3/network_station_control/#h2_1932358400).

- **Data Merge Default Mode**:\
  This defines the default data merge mode. This is the preselected option in the Session Data Merge pop-up. This option will be selected when the timeout (read below) expires unless the user manually selects an option. The options are:

  - **Cancel**:\
    The connecting stations will not join the session of the Master side and be made Standalone. Then, it can be investigated which show file is correct, back up each show file, etc.
  - **Merge All Data**:\
    Merges the changes of all connecting stations into one show file.
  - **Keep Only Master Data**:\
    The changes in the show file data of the connecting devices are ignored. The show file of the Master side is maintained. Before overriding the show file of the connecting devices, the show file will be saved automatically on the connecting stations.

  This pop-up allows the user to select how data is merged between the session and connecting stations. It is described in the [Join a Session topic](/grandma3/2-3/network_session_join/).

- **Data Merge Default Timeout**:\
  This defines the timeout time for the Session Data Merge pop-up. **Unlimited** is an option. This disables the timeout, and the user must make a manual selection. If the time is set to 0, then the pop-up will not appear and the default mode (see above) is used. 

  This pop-up allows the user to select how data is merged between the session and connecting stations. It is described in the [Join a Session topic](/grandma3/2-3/network_session_join/).

- **TTL** (Time To Live):

  The TTL value specifies the lifespan of an IP packet. Each time the packet passes the next hop (for example, a router or gateway), its TTL is reduced by one, and the packet is discarded when the value reaches zero. Tap TTL and set a value using the calculator. The Default value is "8".

|                                            |                                                                                                        |
| ------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| ![](/img/grandma3/2-3/tip_gray-269535.png) | **Hint:**                                                                                              |
|                                            | Admin rights are needed to change DSCP, Data Merge Default Mode, Data Merge Default Timeout, and TTL.  |

In & Out has the following toggle buttons:

- **DC Remotes**:\
  This is the same as the **Enable Input** setting in the [DC Remotes menu](/grandma3/2-3/remote_inputs_dc/).
- **MIDI Remotes**:\
  This is the same as the **Enable Input** setting in the [MIDI Remotes menu](/grandma3/2-3/remote_inputs_midi/).
- **DMX Remotes**:\
  This is the same as the **Enable Input** setting in the [DMX Remotes menu](/grandma3/2-3/remote_inputs_dmx/).
- **OSC Input**:\
  This is the same as the **Enable Input** setting in the [OSC menu](/grandma3/2-3/remote_inputs_osc/).
- **OSC Output**:\
  This is the same as the **Enable Output** setting in the [OSC menu](/grandma3/2-3/remote_inputs_osc/).
- **PSN**:\
  This is the same as the **Enable Input** setting in the [PSN menu](/grandma3/2-3/remote_inputs_psn/).
- **MVR-xchange**:\
  This is the same as the **Enable** setting in the [MVR menu](/grandma3/2-3/remote_inputs_mvr/).

DMX Protocols has the following toggle buttons:

- **Art-Net Input**:\
  This is the same as the **Art-Net Input** setting in the [Art-Net Menu](/grandma3/2-3/dmx_ethernet_artnet/).
- **Art-Net Output**:\
  This is the same as the **Art-Net Output** setting in the [Art-Net Menu](/grandma3/2-3/dmx_ethernet_artnet/).
- **Art-Net Setup**:\
  This is the same as the **Art-Net Setup** setting in the [Art-Net Menu](/grandma3/2-3/dmx_ethernet_artnet/).
- **sACN Input**:\
  This is the same as the **sACN Input** setting in the [sACN Menu](/grandma3/2-3/dmx_ethernet_sacn/).
- **sACN Output**:\
  This is the same as the **sACN Output** setting in the [sACN Menu](/grandma3/2-3/dmx_ethernet_sacn/).
- **sACN Setup**:\
  This is the same as the **sACN Setup** setting in the [sACN Menu](/grandma3/2-3/dmx_ethernet_sacn/).

## DSCP

The network data packages from a session are divided into five different categories. Each category has a setting defining the DSCP value. The higher the value, the higher the priority.

Read about the setting above. Editing the DSCP setting opens the **Edit DSCP Configuration pop-up**.

![Example of the DSCP Configuration Editor.](/img/grandma3/2-3/popup_edit-dscp-configuration_v2-2-8bc5a0.png)

Edit DSCP Configuration pop-up.

The five categories are:

- MA-Net DMX
- MA-Net Data
- Network Update
- DMX Protocols
- In/Out Protocols

The different options for each category are:

| DSCP Name    | DSCP Value  |
| ------------ | ----------- |
| CS0          | 0           |
| CS1          | 8           |
| AF11         | 10          |
| AF12         | 12          |
| AF13         | 14          |
| CS2          | 16          |
| AF21         | 18          |
| AF22         | 20          |
| AF23         | 22          |
| CS3          | 24          |
| AF31         | 26          |
| AF32         | 28          |
| AF33         | 30          |
| CS4          | 32          |
| AF41         | 34          |
| AF42         | 36          |
| AF43         | 38          |
| CS5          | 40          |
| Voice-Admit  | 44          |
| EF           | 46          |
| CS6          | 48          |
| CS7          | 56          |

It is recommended that the default value be changed only if there is a specific need to do so. 

Learn more about DSCP on [Wikipedia (external link)](https://en.wikipedia.org/wiki/Differentiated_services) or [iana.org (external link)](https://www.iana.org/assignments/dscp-registry/dscp-registry.xhtml).

|                                                    |                                                                                            |
| -------------------------------------------------- | ------------------------------------------------------------------------------------------ |
| ![](/img/grandma3/2-3/restriction_gray-3bb57e.png) | **Restriction:**                                                                           |
|                                                    | On grandMA3 onPC for Windows® the DSCP values are overwritten with the default value CS0.  |
