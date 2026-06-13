---
title: "Set the IP address in the console"
description: "An IP address in a matching range is needed to be able to connect devices. This page is about setting a static IP address in the console. If you need to set the"
product: grandma2
lang: en
sourceUrl: "https://help.malighting.com/grandMA2/en/help/key_network_set_ip_console.html"
scrapedAt: "2026-06-12T21:28:07.131Z"
---
An IP address in a matching range is needed to be able to connect devices. This page is about setting a static IP address in the console. If you need to set the IP in the onPC, please [follow this link](/grandma2/key_network_set_ip_onpc/).

If you have a network using DHCP, then you can might want to allow a DHCP server to set the IP address in the console. You can read more about this in the [Using DHCP in MA devices topic](/grandma2/key_network_dhcp/).

There are three ways to set the IP address in the console. No matter what way you choose, you will need to reboot the console for the change to take affect.

## Set the IP address using the command line

Use the [SetIP command](/grandma2/key_keyword_setip/) to see and change the IP addresses of the console. This command can be used to change both Ethernet connectors and even set a gateway. Follow the link to read about using the command.

## Set the IP address using MA Network Control

You can change the IP address in the console by pressing Setup and then MA Network Control.

Here it is only possible to change the IP address of Ethernet connector number 1, when the console is **not** connected to a session. In the title bar of the menu you can see the current status of the console. If it says anything other than "Standalone", then you need to tap Leave Session.

When the console is standalone, then tap the green input field next to "Station IP". Then type the new IP address - and reboot.

## Set the IP address using MA Network Configuration

You can change the IP addresses in the console by pressing Setup and then MA Network Configuration.

In this menu you need to select the Consoles tab. Here are all the consoles in your system listed. Selecting a cell with an IP address in the table and pressing the screen encoder will give open an input box that allows changes to the IP address. Each console have two IP addresses - one for each Ethernet connector on the back.

The second IP address should always be an Art-Net address. The Art-Net addresses have two ranges that are allowed - one starting with 2 and one starting with 10. Other manufacturers and networks specifiers often uses the "10" range for their primary address scheme. For this reason it is a good practice to keep the Art-Net in the "2" range. That could avoid problems in networks that are not only MA devices and not completely under your control.

There is a column for activating DHCP. Read more about DHCP in the [Using DHCP in MA devices topic](/grandma2/key_network_dhcp/).
