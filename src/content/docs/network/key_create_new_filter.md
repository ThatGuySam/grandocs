---
title: "Create New Filter"
description: "You can create 85 new filters, additional to the 43 predefined filters."
product: network
lang: en
sourceUrl: "https://help.malighting.com/network/en/help/key_create_new_filter.html"
scrapedAt: "2026-06-12T21:30:27.748Z"
---
You can create 85 new filters, additional to the 43 predefined filters.

**Important:**\
The combination of filter name, data type and addressing must be unique for each filter. If this data are not unique, it is not possible to create a new filter.

## []()Open Edit Filters pop-up

**Requirement:** [Connection to the Web Interface](/network/key_access_web_interface/).

1. Click **Edit Presets**.
2. Click at the bottom right corner **Extended filter and preset config**.
3. Click at the bottom right corner **Custom filters**.\
   The Edit filter pop-up opens.\
   \
   ![](/img/network/create_filter_3_1-d15602.png)\
   _Figure 1: Edit filters pop-up_

The edit filters pop-up is open.

---

## Create Ethernet Filter

To create an Ethernet filter:

1. Open the Edit Filters pop-up.
2. Enter the **Filter name**.\
   Each filter name must be unique. The filter name contain letters, numbers, and hyphens (-).
3. Select the **Data type Ethernet**.
4. Select in the drop down if the **Addressing** is\
   \- Any\
   \- Unicast\
   \- Multicast\
   \- Broadcast
5. Enter the **Ethertype**.\
   Valid Ethertypes are\
   \- 0x600 - 0x7ff\
   \- 0x801 - 0x805\
   \- 0x807 - 0x86dc\
   \- 0x86de - 0xfff
6. Click **Create filter**.

The Ethernet filter is created and visible the end of the filter tables. The filter is saved in the startup configuration.

---

## Create IPv4 UDP Filter or IPv4 TCP Filter

**Information:**\
The mask is used to determine the range of the IP destination.\
**Example 1:**\
IP destination: 192.168.1.129\
IPv4 mask: 255.255.255.255\
All packets send to IP address 192.168.1.129 match the filter.\
**Example 2:**\
IP destination: 192.168.1.129\
IPv4 mask: 255.255.255.0\
All packets send to IP address 192.168.1.0 - 192.168.1.255 match the filter.

To create an IPv4 UDP filter or IPv4 TCP filter:

1. Open the Edit Filters pop-up.
2. Enter the **Filter name**.\
   Each filter name must be unique. The filter name contain letters, numbers, and hyphens (-).
3. Select the **Data type**. IPv4 UDP or IPv4 TCP.
4. Select in the drop down if the **Addressing** is\
   \- Any\
   \- Unicast\
   \- Multicast\
   \- Broadcast
5. Select the **DPort type** (= destination port type). Choose between **Single Port** or **Port Range**.
6. Enter the **DPort** (= destination port number). Valid port numbers are between 0 - 65535.
7. Enter the **IPv4 destination**.
8. Enter the **IPv4 mask**.
9. Click **Create filter**.

The IPv4 UDP or TCP filter is created and visible the end of the filter tables. The filter is saved in the startup configuration.

---

## Create IPv6 UDP Filter or IPv6 TCP Filter

To create an IPv6 UDP filter or IPv6 TCP filter:

1. Open the Edit Filters pop-up.
2. Enter the **Filter name**.\
   Each filter name must be unique. The filter name contain letters, numbers, and hyphens (-).
3. Select the **Data type**. IPv6 UDP or IPv6 TCP.
4. Select in the drop down if the **Addressing** is\
   \- Any\
   \- Unicast\
   \- Multicast\
   \- Broadcast
5. Select the **DPort type** (= destination port type). Choose between **Single Port** or **Port Range**.
6. Enter the **DPort** (= destination port number). Valid port numbers are between 0 - 65535.
7. Click **Create filter**.

The IPv6 UDP or TCP filter is created and visible the end of the filter tables. The filter is saved in the startup configuration.

---

## Create ARP Filter

To create an ARP filter:

1. Open the Edit Filters pop-up.
2. Enter the **Filter name**.\
   Each filter name must be unique. The filter name contain letters, numbers, and hyphens (-).
3. Select the **Data type ARP**.
4. Select in the drop down if the **Addressing** is\
   \- Any\
   \- Unicast\
   \- Multicast\
   \- Broadcast
5. Click **Create filter**.

The ARP filter is created and visible the end of the filter tables. The filter is saved in the startup configuration.

---

## Paste Filter Configuration

If you already have a filter configuration for a new filter, you can paste the configuration data into the field.

**Important:**\
You have to use the same style as it is displayed in the configuration data field. Write the configuration in one row. If you are using new lines, the configuration can not be applied.

**Requirement:** [Open edit filters pop-up](<#Open Edit Filters pop-up>).

1. Paste the configuration data into the field.
2. Click **Create filter**.

The filter is created and visible at the end of the filter tables. The filter is saved in the startup configuration.
