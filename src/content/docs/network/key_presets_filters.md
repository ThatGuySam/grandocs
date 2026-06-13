---
title: "Presets / Filters"
description: "This chapter provides information about the preset and filter options provided trough the web interface."
product: network
lang: en
sourceUrl: "https://help.malighting.com/network/en/help/key_presets_filters.html"
scrapedAt: "2026-06-12T21:30:27.459Z"
---
This chapter provides information about the preset and filter options provided trough the web interface.

## What are presets?

It is useful to apply presets or filters to ports for a higher network performance or for safety reasons, e.g. to block Telnet.

A preset contains collection of filters.

Presets are used to allow or to block the protocol you have selected.

If a preset is set to allow (= green), the network packets matching the filters in the preset are allowed. All other network packets not matching the filters of this preset, will be blocked.\
If a preset is set to block (= red), the network packets matching the filters in the presets are blocked. All other network packets not matching the filters of this preset, will be allowed.

**Important:**\
Filters are applied in the outbound and the inbound network traffic of the specific physical connector.

There are seven predefined presets available:

- MA-Net2
- dot2-Net
- Art-Net
- MA-Remote
- MA-Net1
- grandMA2
- sACN

**Important:**\
Use presets only if a filter function is required. If you use the MA Network Switch in a MA System it is not mandatory to use the grandMA2 preset.

For more information, see [apply presets](/network/key_assign_presets_to_ports/).

For more information about the predefined presets, see [factory defaults](/network/key_factory_defaults/).

## What are filters?

Instead of using presets, you can use filters. For more information, see [apply filters](/network/key_apply_filters_to_ports/).

Filters are objects consisting of:

- data type
- addressing
- further parameters depending on the data type

There are 43 predefined filters available. To get an overview about the predefined filters, go to the extended mode in the web interface. For more information about the predefined filters, see [factory defaults](/network/key_factory_defaults/).

If you are a network configuration expert, you can create new presets and new filters. For more information, see [create new preset](/network/key_create_new_presets/) and [create new filter](/network/key_create_new_filter/).

The following table displays the always forwarded filters to provide basic network functionality. These filter cannot be blocked.

| Filter      | Frame Match               |
| ----------- | ------------------------- |
| IPMCv6      | IPv6 next-header 58       |
| IPMCv4      | IPv4 protocol nr 1 (ICMP) |
| IGMP        | IPv4 protocol nr 2 (IGMP) |
| DHCP client | IPv4 UDP port 68          |
| DHCP        | IPv4 UDP port 67          |
| ARP         | arp                       |

## Subtopics

- [Assign Presets to Ports](/network/key_assign_presets_to_ports/)
- [Apply Filters to Ports](/network/key_apply_filters_to_ports/)
- [Create New Presets](/network/key_create_new_presets/)
- [Update Presets](/network/key_update_presets/)
- [Create New Filter](/network/key_create_new_filter/)
- [View Filters](/network/key_view_filters/)
- [Delete Presets](/network/key_delete_presets/)
- [Delete Filter](/network/key_delete_filter/)
