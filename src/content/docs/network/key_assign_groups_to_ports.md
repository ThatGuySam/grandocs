---
title: "Assign Groups to Ports"
description: "You can assign one group for each port. Two devices must be part of the same group to communicate."
product: network
lang: en
sourceUrl: "https://help.malighting.com/network/en/help/key_assign_groups_to_ports.html"
scrapedAt: "2026-06-12T21:30:27.030Z"
---
You can assign one group for each port. Two devices must be part of the same group to communicate.

Groups are a logical segment of network users (= VLAN). With groups it is possible to send different signals in different groups via the same network cable without affect the other signal. For example sound and light signals.

The groups for port 1 through 13 can be manually configured at the Edit Ports / Groups Window.\
By default, all groups are managed groups.\
The assigned group has a green dot.

The switch has eight different groups.

1. Group01 (Red)
2. Group02 (Yellow)
3. Group03 (Green)
4. Group04 (Cyan)
5. Group05 (Blue)
6. Group06 (Magenta)
7. Trunk (White)
8. Manage (Gray)

**Important:**\
If more than one switch is in a network and more than one group is in use, use a Trunk to forward all group packets to other switches. The Trunk comprises all groups that are available (1 to 6 and 8). 

**Important:**\
You need at least one manage group in the network.\
If no manage port is in the network, you can not configure the switch anymore. A [factory reset](/network/key_reset_settings/) is necessary.

**Hint:**\
Use port 13 on the front panel as management port to connect the PC for switch configuration via the web interface.

![](/img/network/edit_groups_3_1-691c41.png)

_Assign Groups_

**Requirement:** [Connection to the Web Interface](/network/key_access_web_interface/).

1. Click **Edit Ports / Groups**.
2. Click on the Group you want to assign to the port.\
   The green dot is visible next to the group.
3. Click **Apply settings and stay where you are** or **Apply settings and leave edit**.

The selected group is assigned to the port and saved in the startup configuration.\
The group LED at the front panel indicates the assigned group in the group color.
