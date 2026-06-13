---
title: "NetworkInfo"
description: "To get the NetworkInfo keyword in the command line, type NetworkInfo or the shortcut Net in the command line."
product: grandma2
lang: en
sourceUrl: "https://help.malighting.com/grandMA2/en/help/key_keyword_networkinfo.html"
scrapedAt: "2026-06-12T21:27:56.525Z"
---
To get the NetworkInfo keyword in the command line, type **NetworkInfo** or the shortcut **Net** in the command line.

## Description

The NetworkInfo keyword is a function keyword to display information about the network in the command line feedback window.

## Syntax

NetworkInfo / \[Option] = \[Option Value]

## Options

To get a list of all available option to the NetworkInfo keyword, type in the command line:

\[Channel]> NetworkInfo /?

| Option | Option Shortcut               | Option Value     | Description                                                      |
| ------ | ----------------------------- | ---------------- | ---------------------------------------------------------------- |
| number | g                             | No option value. | Displays only the devices in my session.                         |
| type   | t                             | Undefined        | Displays only undefined devices.                                 |
| type   | t                             | Console          | Displays only consoles.                                          |
| type   | t                             | NPU              | Displays only MA NPUs (Network Processing Unit).                 |
| type   | t                             | 3D               | Displays only MA 3Ds.                                            |
| type   | t                             | Video            | Displays only MA VPUs (Video Processing Unit).                   |
| type   | t                             | Node             | Displays only MA Nodes.                                          |
| type   | t                             | NDP              | Displays only NDPs (Network Dimmer Processor).                   |
| type   | t                             | Remote           | Displays only MA Remotes.                                        |
| type   | t                             | Bridge           | Displays only bridges.                                           |
| type   | t                             | Switch           | Display only MA Network Switches.                                |
| ipv4   | No option shortcut available. | No option value. | Displays the ipv4 addresses in the command line feedback window. |
| ipv6   | No option shortcut available. | No option value. | Displays the ipv6 addresses in the command line feedback window. |

## Example

- To get information about the network, type in the command line:

\[Channel]> NetworkInfo

The network info is displayed in the command line feedback window.

![](/img/grandma2/window_command-line-feedback_networkinfo_v3-2-1dc638.png)

_Command Line Feedback Window - NetworkInfo_
