---
title: "Change VLAN ID"
description: "All groups of the switch have a default VLAN ID, except Trunk."
product: network
lang: en
sourceUrl: "https://help.malighting.com/network/en/help/key_change_vlan_id.html"
scrapedAt: "2026-06-12T21:30:27.456Z"
---
All groups of the switch have a default VLAN ID, except Trunk.\
If you implement the switch in an existing network, it can be necessary to change the VLAN ID of the groups.\
You can change the VLAN ID of group 1 through group 6. The VLAN ID of group 8 (= manage group) is 1 and fixed.\
Possible VLAN IDs are from 1 to 4095.

| Group | Default VLAN ID |
| ----- | --------------- |
| 1     | 100             |
| 2     | 200             |
| 3     | 300             |
| 4     | 400             |
| 5     | 500             |
| 6     | 600             |

**Important:**\
It is possible to use a single VLAN ID per group. As changing IDs is sequentially handled, changing the IDs from 100, 200, 300, 400, 500, 600 to 200, 300, 400, 500, 600, 700 only changes the last group. Therefore, the remaining groups have at least dual VLAN IDs for a short period of time. 

**Important:**\
If you change the VLAN ID of a group, you need to change the VLAN ID of each switch using this group.\
The VLAN IDs of the groups which should communicate with each other, have to be the same.\
If the VLAN IDs of groups are not the same, they do not communicate with each other.

**Requirement:** [Connection to the web interface](/network/key_access_web_interface/).

1. Click **Edit Ports / Groups**.
2. Click **edit** right beside VLAN ID.\
   The VLAN IDs are editable.
3. In the **VLAN ID column**, delete the old VLAN ID of the group you want to change, and type in a new VLAN ID.
4. Click **Apply settings and stay where you are** or **Apply settings and leave edit**.

The new VLAN ID for the group is applied and saved in the startup configuration.
