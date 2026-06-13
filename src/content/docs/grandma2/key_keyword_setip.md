---
title: "SetIP"
description: "To execute keyword SetIP type SetIP into the command line."
product: grandma2
lang: en
sourceUrl: "https://help.malighting.com/grandMA2/en/help/key_keyword_setip.html"
scrapedAt: "2026-06-12T21:28:01.160Z"
---
To execute keyword SetIP type **SetIP** into the command line.

## Description

The SetIP keyword changes the IP address of the Ethernet interfaces of the console or station.

If SetIP is used standalone, the command line feedback window lists the available Ethernet interfaces with their IP addresses.

A grandMA2 console has two network interfaces, **eth0** and **eth1**, which are on the back of the console labeled as **Ethernet 1** and **Ethernet 2**.

**Important:**\
To apply the changed IP address, a reboot is necessary.

**Hint:**\
Another way to change the IP address of the Ethernet-interfaces of the console or station is, press Setup I tap MA Network Configuration  I column **IP ETHERCON 1(ETH0)** or **IP ETHERCON 2 (ETH1)**. For more information see [Networking - Set the IP address in onPC](/grandma2/key_network_set_ip_onpc/). 

## Syntax

SetIP \[network interface] \[IP address] / \[option] = \[option value]

## Options

To get a list of all available options to the SetIP keyword in the command line feedback window, type in the command line

\[Channel]> SetIP /?

The SetIP keyword has the following options.

| Option    | Shortcut      | Option Value     | Description                                        |
| --------- | ------------- | ---------------- | -------------------------------------------------- |
| mask      | m             | e.g. 255.0.0.0   | Sets the subnet mask of the Ethernet adapter.      |
| dhcp      | not available | no option value  | Enables DHCP for the Ethernet adapter.             |
| gateway   | not available | e.g. 192.168.0.1 | Sets the default gateway for the Ethernet adapter. |
| noconfirm | nc            | no option value  | Suppress the SetIP confirmation pop-up.            |

## Example:

  

\[Channel]> SetIP eth0 192.168.0.5

 Sets the IP address of the first Ethernet interface.

 

\[Channel]> SetIP eth0 /DHCP

Activates DHCP client which takes over the IP address automatically from the server. 

 

\[Channel]> SetIP eth1 2.0.0.10 /mask=255.0.0.0

Sets IP address and network mask for the second Ethernet interface.

 

\[Channel]> SetIP

Lists available Ethernet interfaces along with their IP addresses in the command line feedback window.

 

**Important:**\
Do not use DHCP on eth1, unless you are a skilled network operator. 

 

For more information on what DHCP is see the [Glossary](/grandma2/key_glossary/). 

For more information on how to use DHCP see [Using DHCP in MA devices](/grandma2/key_network_dhcp/).
