---
title: "Change Subnet Mask"
description: "You can change the subnet mask of the MA Network Switch."
product: network
lang: en
sourceUrl: "https://help.malighting.com/network/en/help/key_change_subnet_mask.html"
scrapedAt: "2026-06-12T21:30:28.181Z"
---
You can change the subnet mask of the MA Network Switch.\
The subnet mask is used to determine where the network number in an IP address ends and the device number in and IP address begins.

**Example:**\
IP address: 192.168.1.129\
Subnet mask: 255.255.255.0

The network number is 192.168.1. The device number is 129.\
All devices in the network need to have the same first three blocks, 192.168.1. and the last block needs to be different.

**Requirement:** [Connection to the web interface](/network/key_access_web_interface/).

1. Click **Tools /** **Edit General Settings**.
2. Type the subnet mask in the **subnet mask field**.
3. Click **Apply settings and stay where you are** or **Apply settings and leave edit**.

The new subnet mask is applied and saved in the startup configuration.
