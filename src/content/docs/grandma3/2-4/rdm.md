---
title: "RDM (Remote Device Management)"
description: "Remote Device Management is a protocol that allows bi-directional communication between a grandMA3 device and RDM-ready devices attached to it (= RDM-ready fixt"
product: grandma3
version: "2.4"
lang: en
sourceUrl: "https://help.malighting.com/grandMA3/2.4/HTML/rdm.html"
scrapedAt: "2026-06-12T21:25:10.224Z"
---
Remote Device Management is a protocol that allows bi-directional communication between a grandMA3 device and RDM-ready devices attached to it (= RDM-ready fixtures) over a standard DMX line. RDM protocol allows grandMA3 devices to send commands and receive messages from specific moving lights for device configuration and status monitoring. For example adjusting the DMX starting address. This is especially useful for devices installed in a remote area. The [parameters](/grandma3/2-4/rdm/#h2_1163065709) of each fixture determine which commands can be send and which messages can be received between the fixture and the grandMA3 device.

ANSI E1.20 - 2010 by PLASA specifies the RDM standard as an extension of the DMX 512-A protocol (ANSI E1.11).

RDM is integrated in DMX without influencing the connections. The RDM data is transmitted via the standard XLR-poles – new DMX cables are not required. RDM-ready and conventional DMX devices can be operated in one DMX line. The RDM protocol sends its own data packages in the DMX512 data feed and does not influence conventional devices.

---

## Enable RDM

To use RDM, it has to be enabled in two different spots:

1. Globally within the show file: 

- Press Menu - Network: Enable the RDM button in the **[Stations](/grandma3/2-4/network_session/#h3_1753514110) **tab.
- Or Press Menu - Network: Enable the RDM button in the **[Station Control](/grandma3/2-4/network_station_control/)** tab. 
- Or press Menu - Live Patch: Enable the RDM button in the **RDM** tab.
- Or press Menu - Connector Configuration: Enable the RDM button on the bottom right.

All four RDM buttons are linked to each other and RDM is enabled globally. 

2. Per XLR port that shall use RDM. Therefore, the mode of an XLR Port in the Connector Configuration needs to be set from Out to RDM. Tap and hold in the cell of the desired Port. An editor opens:

![](/img/grandma3/2-4/window_device_rdm_v2-1-f85fd2.png)

Tap Mode A and change it to RDM. Confirm the changes by tapping Apply. The background color of the port turns to turquoise: 

![Connector Configuration options with Port A in RDM mode and RDM activated globally in the bottom right.](/img/grandma3/2-4/menu_output_config_rdm_v2-1-ae9fe4.png)

Connector Configuration options with Port A in RDM mode and RDM activated globally in the bottom right.

In RDM mode, DMX data is only sent when there are changes of DMX values. In addition, every 500ms a refreshing packet will be sent so that DMX fixtures will not switch into DMX fail mode.

This RDM output mode allows more time on the DMX line for RDM configuration.

---

## RDM Devices Window

Open the RDM devices window via the [Add Window](/grandma3/2-4/wvm_add_window/) dialog in the Tools tab.

The RDM Devices window lists all devices that are discovered through RDM. The same list is also displayed in Menu - Live Patch - RDM.

[![](/img/grandma3/2-4/robot-icon_white-1ac0d2.png)       Paste to Command Line](#ma_cmd?Store%20ScreenContent%20Default%20%22WindowRDM%22%20%2FAutoFit)

When an RDM device is detected on an XLR port, a section called RDMPorts will be included in the list of RDM devices. Within each RDMPort, all fixtures that are detected via RDM on this physical XLR port are listed. An RDM port is labeled with the IP of the device and the XLR port of the device, e.g., 192.168.0.4 - XLR D. If the device is not detected anymore, the font color turns red.

The RDM devices window with **RDMFixtureTypes** and **RDMPorts** detected could look like this:

![RDM devices window with RDMPorts in expanded mode. ](/img/grandma3/2-4/menu_rdm_devices_v2-1-fa4c6a.png)

RDM devices window with RDMPorts in expanded mode. 

For every fixture type identified by RDM, a new child will be added to the **RDMFixtureTypes** in the RDM Devices window. Each RDMFixtureType contains general information of the RDM fixtures, that is similar to all fixtures of the same product, e.g., the parameter description, or the available DMX personalities.

Expanding with ![](/img/grandma3/2-4/triangle_right_15_1-d9ca8a.png) next to the RDM fixture shows all the different parameters of the fixture:

![RDM devices window with one active RDM fixture in a expanded view.](/img/grandma3/2-4/window_rdm_devices_v2-1-acfde9.png)

RDM devices window with one active RDM fixture in a expanded view.

---

## RDM Parameters

The grandMA3 creates RDMFixtureTypes by itself depending on these three parameters: ManufacturerID, DeviceModelID, and SoftwareID.\
As soon as the same physical type of lighting fixtures have different software IDs due to different firmware versions, different RDMFixtureTypes are created.

Only the cells of properties that an RDM fixture provides as set-able can be edited in the RDM devices window. Not all RDM parameters can be set by the user.

There are three different kinds of commands for each Parameter:

- Set: Parameters that are adjustable on the console.
- Get: Parameters that are only receivable.
- Set and Get: Parameters that can be sent and also received by a device.

|                                            |                                                                                                                                                       |
| ------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| ![](/img/grandma3/2-4/tip_gray-639af3.png) | **Hint:**                                                                                                                                             |
|                                            | The RDM devices window also displays all Parameters individual commands under a specific column called [Command](/grandma3/2-4/rdm/#h2__469026232).   |

The following RDM parameters are supported by grandMA3:
