---
title: "Adding devices to the session"
description: "MA devices can be added to the session. This will expand the system and allow for bigger systems where it is possible to control more lights (more parameters). "
product: grandma2
lang: en
sourceUrl: "https://help.malighting.com/grandMA2/en/help/key_network_session_add_device.html"
scrapedAt: "2026-06-12T21:28:07.434Z"
---
MA devices can be added to the session. This will expand the system and allow for bigger systems where it is possible to control more lights (more parameters). Devices like 3D visualizers, Media servers, Networked dimmers, MA Nodes, and MA Network Switches can also be added.

It is all controlled in MA Network Configuration. This can be found by pressing Setup and then tap MA Network Configuration.

It could look like this:

![](/img/grandma2/menu_ma-network-configuration_v3-3-f987c1.png)

_MA Network Configuration - __The Console tab_

The configuration is divided into sections or tabs. The tabs represent each device type. There are tabs for:

- Consoles
- onPC
- NPU
- 3D
- VPU
- NDP Dimmer
- DMX Nodes (MA Nodes only)
- Network Switch (MA Network Switch only)

Consoles and grandMA2 onPCs are called **Stations** and are connected to a session using the [MA Network Control](/grandma2/key_network_session_create/). They cannot be invited or forced to connect from this interface, but the DMX ports and timecode can be configured. Stations in the session will also appear in the MA Network Configuration.

##  

## Status colors

The devices in the MA Network configuration can have different colors to help identify problems and status of the devices in the network.

### Hostname, Offset and Bridge

The background color of the Hostname, Analog Offset, MIDI Offset and Bridge can have different colors.

- **Red:** The device is not present in the network or it is already connected to a (different) session.
- **Gray / Black:** The device is in the network, but is not in any session. The background is black for Stations - gray for all other devices.
- **Dark green:** The device is in the network and is connected to the same session as you.
- **Bright green:** This is the device you currently using, and it is in a session.

### Version number

The version number has a default white text color and it can have a red color. The red color indicates that the device has an incompatible software version number and it cannot be used in the session.

To add a device to the session, make sure the first three ranges of the version number match the other devices.

## Consoles

The consoles tab offers the possibility to configure the ports on a console that is connected to the network.

[]()At the bottom of the screen there are some buttons:

- **Add** - Pressing this will open a small pop-up that lists all the available consoles in your network. If there are no consoles, that are not already added, then the list will be empty. Not adding any actual consoles, will create an "empty"  console with the 0.0.0.0 IP address.
- **Delete** - Tapping this button will delete the selected console. You cannot delete your own console.
- **Add Present** - This will automatically add all the consoles that are present in the network.
- **Remove Absent** - This will remove the consoles from the list, that are not present in the network.
- **Remove Non-Members** - This will remove the consoles from the list, that are not a member of your session.

When you have added a console to the list, then you get a table where the rows are the different consoles (if there are more than one). The columns are different settings. All the settings with a gray background color can be changed. If the console is not connected to the session, then the changes might not be made in the console.

[]()The columns are:

- **IP ETHERCON 1 (ETH0)** - This is the IP address of the number 1 EtherCon connector on the back of the console. Changing this number will change the IP address on the console and requires a reboot.
- **DHCP ETHERCON 1 (ETH0)** - Editing this cell will give a "Yes". This enables DHCP for Ethernet port 1 and will prompt a reboot. Read more about DHCP in the [Using DHCP in MA devices topic](/grandma2/key_network_dhcp/).
- **IP ETHERCON 2 (ETH1)** - This is the IP address of the number 2 EtherCon connector on the back of the console. This connector is for Art-Net and should have an Art-Net compatible IP address. Changing this number will change the IP address on the console and requires a reboot.
- **Hostname** - This is the hostname of the console. This is only for information. It can only be changed in the MA Network Control.
- **Type** - This displays the type of console.
- **XLR A** to **XLR F** - These are the female DMX connectors on the back of the console. Editing this cell will open a pop-up that allows you to change the settings. It is described in details in the [Getting DMX in and out of the system](/grandma2/key_network_dmx_get_in_out/) topic.
- **XLR In** - This is the male DMX port on the back of the console. Editing, works just as the female connectors - see above.
- **MIDI TC** - Choose which Timecode slot the incoming MIDI timecode should be sent to. Please read the [Timecode](/grandma2/key_timecode/) topic for more details about Timecode slots.
- **SMPTE TC** - Choose which Timecode slot the incoming LTC/SMPTE timecode should be sent to. Please read the [Timecode](/grandma2/key_timecode/) topic for more details about Timecode slots.
- **Version** - This is the software version the console is currently running.
- **Memory Complete/Free** - This displays the amount of memory (RAM) in the console and how much of that is not used. If the console uses all the available memory then it will stop working. You will also need an extra memory capacity to connect to a file server.
- **x64** - Here it is displayed if the console is running the 64 -bit version of Linux or the 32-bit. A "Yes" indicates that it is 64-bit.
- **Analog Offset** - Here remote analog inputs, on the back of the console, can be offset. This can be useful if there are more consoles and you need more analog remote inputs than the 16 a single console offers. The session can handle 64 unique remote inputs. To reach numbers above 16 (the number of inputs on the console) then you will need to offset the input on one or more consoles. An offset of 16 will map physical input number 1 to remote number 17.
- **MIDI Offset** - This is the same as the analog remotes, but for MIDI Notes. Most MIDI systems support 128 notes (0-127). But the MA system can handle 1024 MIDI remote inputs. In combination with the 16 different channels, this allows you to map 16.384 unique MIDI remote inputs!
- **Link Speed** - This is the current connection speed between the console and the switch.
- **Bridge Mode** - The Bridge is not currently implemented.
- **Bridge IP** - The Bridge is not currently implemented.

## grandMA2 onPC

grandMA2 onPCs are considered "Stations" and can only be added to a session in the [MA Network Control](/grandma2/key_network_session_create/).

The onPC section has the [same buttons at the bottom as the console section](<#Standard Control Buttons>) - plus two more. They are called **Identify Fader 1** and **Identify Fader 2**. Each grandMA2 onPC can have one MA onPC command wing and two MA onPC fader wings connected. They are all connected through USB connectors. If you connect two MA onPC fader wings, then you need to tell the computer which fader wing is number 1 and which one is number 2.

This is done by tapping one of the Identify buttons and then pressing any button on the corresponding fader wing. Repeat the previous described steps for the second fader wing. It is not needed to do this for the command wing.

When a grandMA2 onPC is added to the network, then you will see that one grandMA2 onPC takes three rows in the table part - one row for each possible wing.

There are not all the same columns in the onPC section as in the console section. Please read the description of the columns in the [Console section above](<#Column Description>). There are some small differences:

There is only one Ethernet column - this is the primary connection used to communicate with other MA devices. Changing the number here won´t change the IP address on the computer. If you want to output Art-Net from your computer, then it is very recommended to add another Ethernet port. This could be done with a USB (3.0/3.1) to Ethernet dongle. Then give this Ethernet adaptor an IP address in the Art-Net range. Your onPC will then use this Ethernet adaptor to transmit the Art-Net.

The MA onPC command wing has a male DMX port labeled "DMX In". This is "XLR C" in the configuration table. Normally it is possible to use any DMX port as input or output but there is a limitation on the Command wing. It is only possible to use the "DMX A" and "DMX In" for **inputting** DMX to your system from the MA onPC command wing.

## MA NPU

The MA NPUs (Network Processing Unit) are added and connected to the session in the MA Network Configuration. At the [bottom of this section you have the same buttons as the Console section](<#Standard Control Buttons>) and you can use these buttons to add MA NPUs that are in the network.

When the MA NPU exists in the table, then you can edit the **Session Member** column. This is a toggle cell. It can be empty or it can be "Yes". If it is yes, then the MA NPU is told to join the session. If a different session also would like the MA NPU to join their session, then the MA NPU will join the session it sees first in the network.

The MA NPU cannot output or receive Art-Net, so there are only columns for one IP address including the DHCP column. Changing the IP number in the IP column, will change the IP address in the MA NPU and it will restart.

The MA NPU has 8 DMX ports. They can all be changed in the table. Here they are called "XLR A" to "XLR H".

Read the description of the columns in the [Console section above](<#Column Description>).

## MA 3D

The MA 3D visualizer is an integrated part of a MA system. It is a visualizer that communicate with the stations and changes made to the setup will automatically be visible in the MA 3D. It has [the same buttons at the bottom of the screen as the console](<#Standard Control Buttons>).

When a MA 3D visualizer is added to the table then you will have the same **Session Member** column as the MA NPU and the process is the same. When connecting a MA 3D it can be chosen which **User** it should follow. The users in the show each have a [Stage view](/grandma2/key_patch_stage/). The MA 3D is connected to the Stage view, so changing the angle or location of the virtual camera in the Stage view or the MA 3D visualizer, they will both follow along. A MA 3D visualizer will also follow the user into Blind and Preview mode and show the blind and preview output instead of the live output.

The MA 3D only have one IP address column and no DHCP column. It is the IP address of the computer running the software. Changing the number here will not change the IP address in the computer.

## MA VPU

The MA VPU (Video Processing Unit) has some extra buttons at the bottom of the screen. Besides the standard buttons, it also got:

- **Edit** - This will open an editor for the selected MA VPU. Here many of the settings in the MA VPU can be changed.
- **Backup Manager** - If a MA VPU is set as a Backup, then tapping this button allows to setup the relationship between the main and backup MA VPU.
- **Content Distribution** - Pressing this button will distribute the content from the MA VPU set as distributor to the MA VPUs set as receivers.
- **Make a Screenshot** - Pressing this button will trigger a screenshot creation in the MA VPU.
- **Global VPU settings** - Tapping this button will open the Global MA VPU settings.

For a short explanation of the other buttons please have look at the[ Console section](<#Standard Control Buttons>).

There are also some special columns in the MA VPU table:

- **Layer** - This is the layer in the Patch and fixture schedule that have the configuration of VPU layers, Masters and Cameras.
- **Content** - Here it can be set if the MA VPU has some special settings regarding the central distribution of content.
- **Backup VPU** - Here it can be toggled if the MA VPU is a backup or main MA VPU.

There is only one IP address column - it is the primary IP address used to communicate with the other MA devices. The MA VPU has a secondary IP address for Art-Net. This can only be set on the MA VPU.

MA VPUs run on windows computers and changing the IP address in the table will not change the IP address in the MA VPU. DHCP is only possible to activate in the MA VPU Network Settings.

For details about the MA VPU or any of the things mentioned above, please have a look the [VPU Manual](https://help.malighting.com/grandMA2/en/help/ma_vpu/index.html).

## MA NDP

MA NDP (Network Dimmer Processors) are the processors in the discontinued dimMA system. They connect like the NPU or VPU. They are invited to be a part of a session in the **Session Member** column.

It has the [standard buttons at the bottom](<#Standard Control Buttons>).

There are some special columns for the MA NDP:

- **Session** - This displays the session number the MA NDP is currently a part of. MA NDPs can run independent from a station created session (using the DMX ports), then this column will display the session ID the NDP created by it self.
- **Rack number** - This is the rack number the MA NDP is controlling. You can set this number and the MA NDP will then use the configuration for that Rack number.
- **XLR A** & **XLR B** - These two DMX ports are the outputs from the MA NDP. Here you can see which universe they are set to output.

**Restriction:**\
Please be careful when changing the settings in your MA NDPs and dimMA system.

## []()DMX Nodes

DMX nodes are the different nodes from MA. There are 2, 4 and 8 port versions in different variations.

**Restriction:**\
If the Node is connected to a managed switch, then the port where the node is connected needs to be set to **Auto-negotiate** for the speed/connection method.

There are two special buttons in this section - besides the [standard buttons at the bottom](<#Standard Control Buttons>):

- **Identify** - Pressing this button will flash the display and LEDs on the grandMA1 era nodes and turn the background color green in the grandMA2 era nodes.
- **2Port SW Update** - The software update process is different for the **grandMA1 era** 2 Port Nodes. To update those they need to be selected in the table and then tap this button.

In the new (grandMA2 era) nodes there are two IP addresses with the option to activate DHCP on the Ethernet port. One will be used for all MA communication. The secondary IP address is the Art-Net address -  it will be used if the mode of the node is changed to Art-Net. The grandMA1 era Nodes only have one IP address that can be defined - It will automatically change the IP address to a valid Art-Net address if the mode is changed.

[]()Speaking of modes. There is a **Mode** column. Here it is possible to select different modes for the node:

- **MA-Net1** (only in the older Nodes) - This will switch the node to connect with the grandMA1 system.
- **MA-Net2** - This is the mode needed to have full control and synchronized DMX output from a MA2 system. This is also needed for the onPC nodes to unlock parameters in an onPC system. Please read more in the [Parameter Expansion topic](/grandma2/key_so_parameter_expansion/).
- **Art-Net** - This will switch the node to Art-Net mode and use the secondary IP address. And a Network number in the Session ID/Network column needs to be assigned. Use the number **1** for Art-Net I and Art-Net II and the first 256 universes in Art-Net III. If you are in doubt, set it to 1.
- **sACN** - This will switch the node to sACN mode.
- **None** - This will disable the node.

Adding DMX Nodes to the session is different then all the other elements we have looked at so far. They are not invited to join what ever session you are currently in, they are assigned to listen to a specific session number - this is done in the **Session ID/Network** column. They hold their own configuration - it is not a part of the show file. It can however be [imported or exported](/grandma2/key_export_and_import/). Please read the [Getting DMX in and out of the system](/grandma2/key_network_dmx_get_in_out/) topics for more about the DMX configuration.

Since it is possible to have up to 8 DMX ports, then there are "XLR A" to "XLR H" columns.

The column called **Light Mode** allows for control of the backlight in the displays (and the Data LEDs in the old grandMA1 nodes).

The **Light Intensity** column is only for the grandMA1 nodes. Three different levels of intensity in the LEDs and display can be set.

There is a column called **Local**. This can turn On or Off (empty cell) the local yellow menu hardware button on the grandMA2 nodes.

The last column is called **Remote**. This can turn On or Off (empty cell) the web remote access to the node. Only available in the grandMA2 nodes.

## Network Switch

MA Network Switches can be added to the system. They are not members of any session. But can be added to allow changing the configuration from a station in the network.

The MA Network Switch has a lot of settings and controlling or configuring it from the console/onPC is all described in the [Control the MA Network Switch](/grandma2/key_control_ma_switch/) section.

## Bridge

The Bridge is not implemented, so there is nothing to do in this tab.
