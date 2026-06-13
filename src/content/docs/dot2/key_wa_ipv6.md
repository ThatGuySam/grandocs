---
title: "IPv6"
description: "IPv6 is the network address and language system used in the dot2 system."
product: dot2
lang: en
sourceUrl: "https://help.malighting.com/dot2/en/help/key_wa_ipv6.html"
scrapedAt: "2026-06-12T21:29:36.429Z"
---
IPv6 is the network address and language system used in the dot2 system.

All the devices from MA lighting have a unique IPv6 address - a big number. This means that you don't have to worry about setting an address on you equipment.

## Using a computer

But you might need to worry about your computers IPv6 address. Normally your computer will create it's own address. It's a number that is written in 8 blocks separated by colons. Each block have 4 hexadecimal numbers. So an IPv6 address could look like this:

```
2001:0db8:4545:0000:0000:00ff:fe21:67cf 
```

It could also look like this (the same address):

```
2001:db8:4545::ff:fe21:67cf
```

All computers who supports IPv6 have something called a Local Link Address. This is an address that begins with "fe80". Data from and to a local link address is only being transmitted in your local network It will not be transmitted through a router or the internet. 

Your computer should already have an Local Link Address.

## How to check this?

### Windows 10

Left click on the search icon (magnifying glass) - default in the toolbar left side.

Search for cmd, this will find the command prompt - run it.

Here you can type ipconfig. This will list the current settings for you network interfaces. Here you should find something called Link-local IPv6 Address. And hopefully you'll have an address here that begins with "fe80".

### Windows 8

Right click the windows start icon - the default position is in the lower left corner.

In the menu select "run" and then type cmd in the dialog that opens 

This opens the command line interface for windows.

Here you can type ipconfig. This will list the current settings for you network interfaces. Here you should find something called Link-local IPv6 Address. And hopefully you'll have an address here that begins with "fe80".

### Windows 7

Click on the windows start icon - the default position is in the lower left corner.

In the menu click in the search field and type cmd. 

This opens the command line interface for windows.

Here you can type ipconfig. This will list the current settings for you network interfaces. Here you should find something called Link-local IPv6 Address. And hopefully you'll have an address here that begins with "fe80".

 

If your computer does not have an IPv6 address, you'll need to look in the manual of your computer or operating system - alternative go to windows webpage and search for IPv6.

 

Your network needs to be able to handle the IPv6 address and language. Please make sure you are using network switches that supports IPv6.

 

## Related links

[What is Network](/dot2/key_wa_network/)

[How to connect nodes, wings, 3D and onPC ](/dot2/key_ht_wingsnodes3donpc/)
