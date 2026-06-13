---
title: "SetIP"
description: "This page describes the syntax and the use of thSetIPommand."
product: dot2
lang: en
sourceUrl: "https://help.malighting.com/dot2/en/help/key_keyword_setip.html"
scrapedAt: "2026-06-12T21:29:50.873Z"
---
This page describes the syntax and the use of the **SetIP** command.

To use the SetIP command, type **SetIP** into the [command line](/dot2/key_widget_commandlineinput/).

## Description

**Important:**\
Before using the SetIP command, save the show file. To save the show file, press Backup Backup.Reboot the console after executing the SetIP command. This is very important for the console to apply the new IP address. 

**Important:**\
The Art-Net IP address has to start with 2.x.x.x. or 10.x.x.x. .

With the SetIP command, you can:

- Change the Art-Net IP address
- Change the sACN IP / Web remote address
- See the available Ethernet interfaces along with their IP address in the [command line window](/dot2/key_view_commandline/).

After changing the IP address, reboot the console.

## Syntax

1\. Changes the Art-Net IP address.

SetIP eth0:1 2.2.3.5

2\. Changes the sACN IP / Web remote address.

SetIP eth0 192.168.0.5

3\. Displays the available Ethernet interfaces along with their IP address in the [command line window](/dot2/key_view_commandline/).

SetIP

## Example

Let´s assume you change the Art-Net IP address in your network.

1\. To save the show file, press Backup Backup.

2\. Open the [command line window](/dot2/key_view_commandline/) to use the virtual keyboard and type:

SetIP eth0:1 2.2.3.5

3\. Press Please.\
The console asks if you want to reboot now.

4\. Tap Reboot Now.

The console reboots and the new IP address is applied.
