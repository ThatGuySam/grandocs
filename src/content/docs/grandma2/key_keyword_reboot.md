---
title: "Reboot"
description: "To go to the Reboot keyword, type Rebootn the command line or use the shortcut R."
product: grandma2
lang: en
sourceUrl: "https://help.malighting.com/grandMA2/en/help/key_keyword_reboot.html"
scrapedAt: "2026-06-12T21:27:59.442Z"
---
To go to the Reboot keyword, type **Reboot** in the command line or use the shortcut **R**.

## Description

The Reboot keyword, shutdown the station and boot it up again.

If the station is a session member, the reboot a confirmation pop-up opens on the local station.\
If the confirmation is missing, after 10 seconds the reboot function will be executed.

The Reboot keyword is a function keyword.

## Syntax

Reboot / \[option]

Reboot \[station-list] / \[option]

## Options

To get the list of the available options to the reboot keyword in the command line feedback window, type in the command line.

\[Channel]> Reboot /?

The reboot keyword has the following options.

| Option    | Option Shortcut | Description                               |
| --------- | --------------- | ----------------------------------------- |
| save      | s               | Saves the show file before reboot.        |
| nosave    | ns              | Do not saves the show file before reboot. |
| noconfirm | nc              | Suppress reboot confirmation pop-up.      |
| force     | f               | Forces a reboot.                          |

## Examples

- Reboot the current console.

\[Channel]> Reboot

 

- Reboot a station with the IP address 192.168.0.32 in the network.

\[Channel]> Reboot 192.168.0.32

**Hint:**\
To be faster, type only the part of the IP address in the command line what is differently.\
If the console which sends the command has the IP address 192.168.0.11, the command Reboot 32 is enough.
