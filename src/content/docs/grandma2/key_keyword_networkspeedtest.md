---
title: "NetworkSpeedTest"
description: "To get the NetworkSpeedTest keyword in the command line, type NetworkSpeedTest or the shortcut NetworkS in the command line."
product: grandma2
lang: en
sourceUrl: "https://help.malighting.com/grandMA2/en/help/key_keyword_networkspeedtest.html"
scrapedAt: "2026-06-12T21:27:56.712Z"
---
To get the NetworkSpeedTest keyword in the command line, type **NetworkSpeedTest** or the shortcut **NetworkS** in the command line.

## Description

**Important:**\
Do not use the NetworkSpeedTest keyword in show situations.The NetworkSpeedTest keyword blocks all other network traffic and DMX traffic for some seconds.

The NetworkSpeedTest keyword checks the current network performance in the network of the following MA devices in the session:

- grandMA2 consoles
- grandMA2 replay unit
- grandMA2 onPC
- MA 3D
- MA VPU (Video Processing Unit)
- MA NPU (Network Processing Unit)

Use the NetworkSpeedTest keyword as a troubleshooting tool. NetworkSpeedTest UDP (=User Datagram Protocol) packets will be send at port 29998.

The result of the NetworkSpeedTest is displayed in the MAnet Speed Test pop-up.

![](/img/grandma2/popup_manet-speed-test_v3-2-951fd7.png)

_MAnet SpeedTest pop-up_

The console what sends the command is not listed in the MAnet SpeedTest pop-up.

In the MAnet SpeedTest pop-up are five columns:

**IP:**\
Displays the IP address of the tested network device.

**Time:**\
Displays the duration between sending and receiving the packets. In a 1000 Mbit network the time for a console should be 0.1 s.

**Sequence Errors:**\
Displays of how many packets the order was swapped.

**Data Errors**:\
Displays how many packets are damaged.

**Packets Received:**\
Displays the percentage of correctly delivered packages. In a 1000 Mbit network the received packets should be 100%. If this is not the case, the reason could be a bad network connection or an overloaded device.

## Syntax

NetworkSpeedTest / \[Option]

## Options

To get a list of all available option to the NetworkSpeedTest keyword, type in the command line:

\[Channel]> NetworkSpeedTest /?

| Option    | Option Shortcut | Description                             |
| --------- | --------------- | --------------------------------------- |
| noconfirm | nc              | Suppress the danger and warning pop-up. |
| data      | d               | Network speed test at UDP port 29999.   |

## Example

To perform a network speed test of the MA devices in the network for troubleshooting:

1\. Type in the command line:

\[Channel]> NetworkSpeedTest

    A danger pop-up asks if you really want to perform the network test.

2\. Tap Ok.\
    A continue pop-up asks that the network traffic will disrupt for some seconds.

3\. Tap Ok.

The network speed test will be performed and the MAnet SpeedTest pop-up displays the result.
