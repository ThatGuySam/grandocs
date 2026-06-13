---
title: "Telnet"
description: "To go to the Telnet keyword, type Telnet in the command line or use the shortcut Tel."
product: grandma2
lang: en
sourceUrl: "https://help.malighting.com/grandMA2/en/help/key_keyword_telnet.html"
scrapedAt: "2026-06-12T21:28:02.802Z"
---
To go to the Telnet keyword, type **Telnet** in the command line or use the shortcut **Tel**.

## Description

**Important:**\
The telnet receiver needs to read the commands without a telnet login.\
If the telnet receiver asks for a login, the command can not be processed.

The Telnet keyword sends Telnet commands via grandMA2 command line directly to a telnet receiver.

The Telnet keyword is a function keyword.

For more information, see [What is Telnet remote?](/grandma2/key_remote_control_telnet/).

## Syntax

Telnet \[IP address] : \[Port] "String"

## Example

The telnet receiver starts an specific function, if the receiver gets the command "Artist1".

\[Channel]> Telnet 192.168.0.1 : 23 "Artist1"
