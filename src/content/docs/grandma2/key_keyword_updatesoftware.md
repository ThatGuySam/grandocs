---
title: "UpdateSoftware"
description: "To go to the UpdateSoftware keyword, type UpdateSoftware in the command line or use the shortcut UpdateS."
product: grandma2
lang: en
sourceUrl: "https://help.malighting.com/grandMA2/en/help/key_keyword_updatesoftware.html"
scrapedAt: "2026-06-12T21:28:04.199Z"
---
To go to the UpdateSoftware keyword, type **UpdateSoftware** in the command line or use the shortcut **UpdateS**.

You can also update the software in the Setup. For more information, see [update the software](/grandma2/key_update/).

## Description

**Requirement:**\
An inserted USB stick with a .update file for the appropriate device or program in the root directory.\
Download the latest software on www\.malighting.com.

With the UpdateSoftware keyword, you can update the software of every MA device or program in the network.

The UpdateSoftware keyword is a function keyword.

## Syntax

UpdateSoftware \[IP address]

## Example

Update the MA 4Port Node with the IP address 192.168.0.32 in the network.

\[Channel]> UpdateSoftware 192.168.0.32

**Hint:**\
To be faster, type only the part of the IP address in the command line what is differently.\
If the console which sends the command has the IP address 192.168.0.11, then type UpdateSoftware 32.
