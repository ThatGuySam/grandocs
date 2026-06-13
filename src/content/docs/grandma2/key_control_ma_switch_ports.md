---
title: "Configure ports"
description: "This topic describes the different port settings and how to configure the ports."
product: grandma2
lang: en
sourceUrl: "https://help.malighting.com/grandMA2/en/help/key_control_ma_switch_ports.html"
scrapedAt: "2026-06-12T21:28:27.428Z"
---
This topic describes the different port settings and [how to configure the ports](<#Configure ports>).

You can configure the following options:

- [Port description](<#Port description>)
- [Group](#Groups)
- [RSTP](#RSTP) (= Rapid Spanning Tree Protocol)
- [Speed](<#Speed settings>)
- [LAG](#LAG) (= Link Aggregation Group)

---

## []()Port description

To have a better overview about what is connected to what port, you can change the port description of each port.

The port description has a maximum length of 8 characters.

The following characters are allowed.

- Upper case letters A...Z
- Lower case letters a...z
- Numbers 0...9
- Spaces, minus (-), plus (+), underscore (\_)

---

## []()Groups

You can assign one group for each port. Two devices must be part of the same group to communicate.

Groups are a logical segment of network users (= VLAN). With groups it is possible to send different signals in different groups via the same network cable without affect the other signal. For example sound and light signals.

The groups for port 1 through 13 can be manually configured. By default, all groups are managed groups.\
The assigned group is visible at the front end display of the MA Network Switch and indicated by the group LED.

The switch has eight different groups.

1. Group01 (Red)
2. Group02 (Yellow)
3. Group03 (Green)
4. Group04 (Cyan)
5. Group05 (Blue)
6. Group06 (Magenta)
7. Trunk (White)
8. Manage (Gray)

If more than one switch is in a network and more than one group is in use, the Trunk is needed to forward all group packets to the other switches. The Trunk bundles all other groups.

**Important:**\
You need at least one manage group in the network.\
If no manage port is in the network you can not configure the switch anymore. A [factory reset](/grandma2/key_control_ma_switch_reset/) is necessary.

**Hint:**\
Use port 13 on the front panel as management port to connect the PC for switch configuration via the web interface.

---

## []()RSTP

Rapid Spanning Tree Protocol (RSTP) uses point-to-point wiring and provides rapid convergence of the spanning tree.

If there are more than one point-to-point connections between two switches RSTP manages the redundant link unless the original connection fails.

**Important:**\
The MA Network Switch supports an implementation of RSTP that is compatible with the IEEE 802.1w standard and does not support per VLAN RSTP. This means that the MA Network Switch will send out and expect to receive untagged RSTP messages.

By default, RSTP is enabled.

- Disabled\
  The switch does not run RSTP for this port. If RSTP is disabled, LLDP (Link Layer Discovery Protocol) is disabled as well.
- Enabled\
  The switch runs RSTP for this port. If RSTP is enabled, LLDP (Link Layer Discovery Protocol) is enabled as well.

---

## []()Speed settings

You can edit the port speed of each port on the MA Network Switch.\
The selected speed is visible at the status page on the web interface.\
If a port is connected, the link LED is blinking in the speed color. For more information see [MA Network Switch manual](https://help.malighting.com/Page/Network/MA_network_switch/en/3.1).

There are three speed settings available:

- Auto: The port detects automatically the speed of the connected device (default).
- 100Mbit
- 1Gbit 

---

## []()LAG

The Link Aggregation Group (LAG) combines a number of physical ports for them to behave as one connection.

Configure the LAGs via the web interface or in the [MA Network Configuration menu – Edit LAGs](/grandma2/key_control_ma_switch_lags/). For more information see [MA Network Switch](https://help.malighting.com/Page/Network/MA_network_switch/en/3.3). 

Select between 6 LAGs:

- None
- LAG01
- LAG02
- LAG03
- LAG04
- LAG05
- LAG06

**Hint:**\
Set a port to an LAG in the same manner as in setting a group to a port.

**Important:**\
-If a port is set to an LAG, its settings – group, speed etc., – are adjusted to the default settings of the LAG.\
\
-Changing settings on a port that has an LAG membership, changes these settings in other ports of the LAG.

---

## []()Configure ports

**Requirement:** [Added MA Network Switch to the network configuration](/grandma2/key_control_ma_switch_add/).

To configure the ports:

1.  Open the MA Network Configuration.\
   \- Press Setup, and tap under **Network** MA Network Configuration.\
   The MA Network Configuration window opens.
2. Tap at Network Switch.

   ![](/img/grandma2/menu_ma-network-configuration_network-switch_v3_2-2dcf6e.png)

   _MA Network Configuration - Network Switch_
3. Tap and hold in the cell of a port or tap in the cell and press the screen encoder.\
   The Configure Switch Port pop-up opens.

   ![](/img/grandma2/popup_configure-switch-port_v3_2-ac353b.png)

   _Configure Switch Port pop-up_
4. Configure the port.\
   \- Enter in the green edit line a new port description.\
   \- To choose a group tap in the groups field at the arrow down and tap at a group in the drop-down.\
   \- To disable RSTP tap in the RSTP field at the arrow down and tap at disable.\
   \- To change the speed settings tap in the speed setting field at the arrow down and at a speed setting in the drop-down.\
   -To assign an LAG, tap the drop-down in the filed **Assign LAG**. 
5. Press Please or tap Please.

The port is configured and the changes are saved in the startup configuration.
