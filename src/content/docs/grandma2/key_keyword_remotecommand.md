---
title: "RemoteCommand"
description: "To go to the RemoteCommand keyword, type RemoteCommandn the command line or use the shortcut RemoteC."
product: grandma2
lang: en
sourceUrl: "https://help.malighting.com/grandMA2/en/help/key_keyword_remotecommand.html"
scrapedAt: "2026-06-12T21:27:59.776Z"
---
To go to the RemoteCommand keyword, type **RemoteCommand** in the command line or use the shortcut **RemoteC**.

## Description

The RemoteCommand keyword executes commands at a specific console.

RemoteCommand is a function keyword.

## Syntax

RemoteCommand \[IP address] "Command"

## Examples

- Call view 3 at the station with the IP address 192.168.0.4.

\[Channel]> RemoteCommand 192.168.0.4 "View 3"

 

- Start macro 4 only on a specific console.

\[Channel]> RemoteCommand 192.168.0.4 "Macro 4"
