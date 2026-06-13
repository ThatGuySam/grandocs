---
title: "Edit IGMP Querier"
description: "Important:"
product: network
lang: en
sourceUrl: "https://help.malighting.com/network/en/help/key_edit_igmp_querier.html"
scrapedAt: "2026-06-12T21:30:27.314Z"
---
**Important:**\
IGMP snooping requires at least one switch in a group (VLAN) to act as a querier, to ensure IGMP snooping functionality.

Querier register the multicast packets to the corresponding ports.\
If more than one querier is activated per group, the switch with the lowest IP address will be elected as querier.\
This election process is automated.

![](/img/network/igmpquerier_3_1-ac344f.png)

IGMP querier is disabled by default.

**Requirement:** [Connection to the web interface](/network/key_access_web_interface/).

1. Click **Edit Ports / Groups**.
2. Click in the **IGMP Querier column**, that box you want to enable or disable.
3. Click **Apply settings and stay where you are** or **Apply settings and leave edit**.

IGMP querier is enabled or disabled for the selected group and saved in the startup configuration.
