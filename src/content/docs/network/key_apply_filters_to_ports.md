---
title: "Apply Filters to Ports"
description: "Instead of apply presets to ports you can also apply filters to ports."
product: network
lang: en
sourceUrl: "https://help.malighting.com/network/en/help/key_apply_filters_to_ports.html"
scrapedAt: "2026-06-12T21:30:27.602Z"
---
Instead of [apply presets to ports](/network/key_assign_presets_to_ports/) you can also apply filters to ports.

If a filter is set to allow, all other network packets not matching this filter, will be blocked**.**

**Requirement:** [Connection to the Web Interface](/network/key_access_web_interface/).

1\. Click **Edit Presets**.

2\. Scroll down to the end of the page and click in the bottom right corner **Extended filter and preset config**.\
\
![](/img/network/extended_mode_access_3_1-028143.png)\
_Figure 1: Access Extended Mode_\
\
   The extended mode opens.\
\
![](/img/network/extended_mode_3_1-e2d784.png)\
_Figure 2: Extended Mode_

**Information:**\
To change the filter status from blocked to allow or vice versa, change the preset status.

**Hint:**\
If allow is selected, all network packets matching the filter port will be forwarded. If a protocol needs more than one port, you have to apply multiple filters.

3\. To change the status of the filter (allowed= displayed by a green color) (blocked= displayed by a red color), click the **preset number** or **preset name** in the header.

![](/img/network/manual_preset_3_1-0b56c0.png)\
_Figure 3: Filters Applied_

4\. Select the filters for the port by clicking. If a preset was assigned to the port, the preset changes to **filters applied**.

5\. Click **Apply settings and stay where you are** or **Apply settings and leave edit**.

The selected filters are applied and saved in the startup configuration. A filter icon is visible right beside the group name on the front display.

To create new filter, see [Create New Filter](/network/key_create_new_filter/).
