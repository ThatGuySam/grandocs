---
title: "Edit RSTP"
description: "Rapid Spanning Tree Protocol (RSTP) uses point-to-point wiring and provides rapid convergence of the spanning tree."
product: network
lang: en
sourceUrl: "https://help.malighting.com/network/en/help/key_edit_rstp.html"
scrapedAt: "2026-06-12T21:30:27.167Z"
---
Rapid Spanning Tree Protocol (RSTP) uses point-to-point wiring and provides rapid convergence of the spanning tree.

If there are more than one point-to-point connections between two switches, RSTP manages the redundant link unless the original connection fails.

**Important:**\
The MA Network Switch supports an implementation of RSTP that is compatible with the IEEE 802.1w standard and that does not support RSTP per VLAN. This means that the MA Network Switch sends and expects to receive untagged RSTP messages.

![](/img/network/img_rstp_v3-3-da3f53.png)

_Edit RSTP_

By default, RSTP is enabled.

- Disabled = Red dot\
  The switch does not run RSTP for this port. If RSTP is disabled, LLDP (Link Layer Discovery Protocol) is disabled as well.
- Enabled = Green dot\
  The switch runs RSTP for this port. If RSTP is enabled, LLDP (Link Layer Discovery Protocol) is enabled as well.

If RSTP is enabled, it either displays:

- **active**:\
  The MA Network Switch uses the connection.

-or-

- **blocking**:\
  The MA Network Switch blocks the connection.

**Hint:**\
If the original connection (active) is interrupted, the redundant link (blocking) is set to active.

**Requirement:** [Connection to the web interface](/network/key_access_web_interface/).

1. Click **Edit Ports / Groups**.
2. To enable or disable RSTP, click the **RSTP** box of the corresponding port.
3. Click **Apply settings and stay where you are** or **Apply settings and leave edit**.

RSTP is enabled (no icon) or disabled (indicated by a **red R** in the Groups View, Name View, LAG View) in the port you have selected and its settings are saved in the startup configuration.

## Example

If you accidentally have connected two MA Network Switches with two Trunk ports. And you have more than one connection between two devices, then RSTP is required. If you then disable RSTP, there is no connection.
