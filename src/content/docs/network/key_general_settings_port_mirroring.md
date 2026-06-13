---
title: "Edit Port Mirroring"
description: "In Port Mirroring, the entire traffic that arrives at a port is mirrored onto a mirror port of the MA Network Switch."
product: network
lang: en
sourceUrl: "https://help.malighting.com/network/en/help/key_general_settings_port_mirroring.html"
scrapedAt: "2026-06-12T21:30:28.479Z"
---
In Port Mirroring, the entire traffic that arrives at a port is mirrored onto a mirror port of the MA Network Switch. 

It is most commonly used in debugging or for the analysis of the network traffic such as the network load. 

**Important:**\
The MA Network Switch mirrors several source ports to one destination port. Vice versa, it is possible to set a single destination port at a time. 

## Use the Web Interface

Requirement:

- [Connection to the web interface](/network/key_access_web_interface/)

1. Click **Tools / Edit General Settings**. 
2. Click **Edit Port Mirroring**. 
3. The editor opens.

![](/img/network/img_edit-port-mirroring_v3-3-087b27.png)

_Edit port mirroring_

4. To select a destination port, click the corresponding port in the upper column of the editor. 
5. Select the source ports:\
   -Click the corresponding ports in the lower column of the editor. 
6. Click **Apply settings and stay where your are** or **Apply settings and leave edit**. 

Settings have been adjusted and are saved in the startup configuration. 

**Hint:**\
A port is never destination and source at the same time.
