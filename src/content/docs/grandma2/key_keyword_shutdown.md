---
title: "Shutdown"
description: "To go to the Shutdown keyword, type Shutdownn the command line or use the shortcut Sh."
product: grandma2
lang: en
sourceUrl: "https://help.malighting.com/grandMA2/en/help/key_keyword_shutdown.html"
scrapedAt: "2026-06-12T21:28:01.603Z"
---
To go to the Shutdown keyword, type **Shutdown** in the command line or use the shortcut **Sh**.

## Description

The shutdown keyword switches the grandMA2 console off or close the grandMA2 onPC.

A shutdown needs a confirmation at the local station.

The shutdown can be canceled on a remote station within 10 seconds.

## Syntax

Shutdown

Shutdown \[station-list] / \[option]

## Options

To get the list of the available options to the shutdown keyword in the command line feedback window, type in the command line.

\[Channel]> Shutdown /?

The shutdown keyword has the following options.

| Option    | Option Shortcut | Description                            |
| --------- | --------------- | -------------------------------------- |
| save      | s               | Saves the show file.                   |
| nosave    | ns              | Do not saves the show file.            |
| noconfirm | nc              | Suppress shutdown confirmation pop-up. |
| force     | f               | Forces a shutdown.                     |

## Examples

1\. Switch station off, by using the IP address.

\[Channel]> Shutdown 192.168.0.10

2\. Switch station off, by using the host ID of the network.

\[Channel]> Shutdown 10

3\. Switch current console off.

\[Channel]> Shutdown
