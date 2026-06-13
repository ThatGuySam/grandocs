---
title: "Edit presets"
description: "It is useful to apply presets to ports for a higher network performance or for safety reasons, e.g. to block Telnet."
product: grandma2
lang: en
sourceUrl: "https://help.malighting.com/grandMA2/en/help/key_control_ma_switch_presets.html"
scrapedAt: "2026-06-12T21:28:27.625Z"
---
It is useful to apply presets to ports for a higher network performance or for safety reasons, e.g. to block Telnet.

A preset contains collection of filters. For more information about filter see the [MA Network Switch manual](https://help.malighting.com/Page/Network/MA_network_switch/en/3.1).

Presets are used to allow or to block the selected output.

If a preset is set to allow (= green), the network packets matching the filters in the preset are allowed. All other network packets not matching the filters of this preset, will be blocked.\
If a preset is set to block (= red), the network packets matching the filters in the presets are blocked. All other network packets not matching the filters of this preset, will be allowed.

**Important:**\
Presets are applied in the outbound as well as in the inbound network traffic of the specific physical connector.

There are seven predefined presets available:

- MA-Net2
- dot2-Net
- Art-Net
- MA-Remote
- MA-Net1
- grandMA2
- sACN

**Requirement:** [Added MA Network Switch to the network configuration](/grandma2/key_control_ma_switch_add/).

To edit presets:

**Important:**\
If manual filters are assigned to a port an assigned preset will delete the previous assigned filter from the port.

1.  Open the MA Network Configuration.\
   \- Press Setup, and tap under **Network** MA Network Configuration.\
   The MA Network Configuration window opens.
2. Tap at Network Switch.

   ![](/img/grandma2/menu_ma-network-configuration_network-switch_v3_2-2dcf6e.png)

   _MA Network Configuration - Network Switch_
3. Tap at a cell in the row of the MA Network Switch you like to edit and tap Edit Preset.\
   The **Set Switch Presets pop-up** opens.

   ![](/img/grandma2/popup_set-switch-presets_v3_2-72e43b.png)

   _Set Switch Presets pop-up_
4. Navigate to the to be edited port.\
   To block the preset press the screen encoder once until the background of the preset cell is red.\
   To allow the preset only press the screen encoder twice until the background of the preset cell is green.
5. Press Please or tap Please.

The preset is assigned to the port and saved in the startup configuration. The **filter icon** ![](/img/grandma2/icon_filter_small_v3-2-a5501b.png) is visible in the port cell and on the front end display of the MA Network Switch.
