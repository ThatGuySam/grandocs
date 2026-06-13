---
title: "Edit Unknown Flooding"
description: "Unknown flooding is for multicasted frames destined for an address for which the switch has not seen a join."
product: network
lang: en
sourceUrl: "https://help.malighting.com/network/en/help/key_edit_unknown_flooding.html"
scrapedAt: "2026-06-12T21:30:27.339Z"
---
Unknown flooding is for multicasted frames destined for an address for which the switch has not seen a join.\
In that case the switch uses the flooding mask to forward that frame to every port.

Unknown flooding can be global enabled or disabled for all groups.\
By default, unknown flooding is enabled.

![](/img/network/unknownflooding_3_1-9091e0.png)

- Yes = All unknown packages will be forwarded
- No = All unknown packages will be dropped

**Hint:**\
To forward only known multicast network packets, enable IGMP Snooping and IGMP Querier. Disable unknown flooding.

**Requirement:** [Connection to the web interface](/network/key_access_web_interface/).

1. Click **Edit Ports / Groups**.
2. Click in the column **unknown flooding** at the gray box.
3. Click **Apply settings and stay where you are** or **Apply settings and leave edit**.

Unknown flooding is enabled or disabled and saved in the startup configuration.
