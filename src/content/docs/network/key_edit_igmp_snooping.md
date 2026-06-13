---
title: "Edit IGMP Snooping"
description: "IGMP snooping avoids ports to be flooded with undesired multicast packets."
product: network
lang: en
sourceUrl: "https://help.malighting.com/network/en/help/key_edit_igmp_snooping.html"
scrapedAt: "2026-06-12T21:30:27.308Z"
---
IGMP snooping avoids ports to be flooded with undesired multicast packets.\
It is a smart way to manage multicast packets, and forward them to the registered ports.

![](/img/network/igmpsnooping_3_1-3e1972.png)

IGMP snooping is disabled by default.

**Hint:**\
To forward only known multicast network packets, enable IGMP Snooping and IGMP Querier. Disable unknown flooding.

**Requirement:** [Connection to the web interface](/network/key_access_web_interface/).

1. Click **Edit Ports / Groups**.
2. Click in the **IGMP Snooping column**, that box you want to enable or disable.
3. Click **Apply settings and stay where you are** or **Apply settings and leave edit**.

IGMP snooping is enabled or disabled for the selected group, and saved in the startup configuration.
