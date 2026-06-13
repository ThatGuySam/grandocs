---
title: "Protocol"
description: "To go to the Protocol keyword, type Protocol in the command line or use the shortcut Prot."
product: grandma2
lang: en
sourceUrl: "https://help.malighting.com/grandMA2/en/help/key_keyword_protocol.html"
scrapedAt: "2026-06-12T21:27:58.463Z"
---
To go to the Protocol keyword, type **Protocol** in the command line or use the shortcut **Prot**.

## Description

The Protocol keyword is an object keyword to access the network protocols.

You can store or delete network protocols and assign parameters.

For more information, see [Network DMX Protocols](/grandma2/key_network_dmx_protocols/).

## Syntax

\[Function] Protocol \[Network Protocol ID] . \[Row ID]

Assign Protocol \[Network Protocol ID] / \[Parameter] = \[Parameter Value]

Assign Protocol \[Network Protocol ID] . \[Row ID] / \[Parameter] = \[Parameter Value]

The following table displays the available network protocol along with their ID.

| Network Protocol | ID |
| ---------------- | -- |
| Art-Net          | 1  |
| ETC Net2         | 2  |
| Pathport         | 3  |
| sACN             | 4  |
| Shownet          | 5  |
| Kinet1           | 6  |

## Parameter

The following table displays the assignable parameter by use the command Assign Protocol \[Network Protocol ID] / \[Parameter] = \[Parameter Value].

| Network Protocol                                   | Parameter   | Parameter Value                                                 | Description                                                                                                                                                                                                                                                                                                                                                          |
| -------------------------------------------------- | ----------- | --------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Art-Net, sACN, Kinet1                              | OutActive   | "On", "Off"                                                     | Assign if the output is set to on or off.                                                                                                                                                                                                                                                                                                                            |
| Art-Net, sACN, Kinet1                              | InActive    | "On", "Off"                                                     | Assign if the input is set to on or off.                                                                                                                                                                                                                                                                                                                             |
| Art-Net                                            | MaxUnicast  | 0...10                                                          | **Only if the mode is OutputAuto:** Assign the maximal amount of members until Art-Net switches from unicast to broadcast.                                                                                                                                                                                                                                           |
| Art-Net, ETC Net2, Pathport, sACN, Shownet, Kinet1 | Info        | "Information text"                                              | Assign additional information.                                                                                                                                                                                                                                                                                                                                       |
| ETC Net2, Pathport, Shownet                        | Active      | "On", "Off"                                                     | Assign if the console transmit or hide the network protocol.                                                                                                                                                                                                                                                                                                         |
| ETC Net2, Pathport, Shownet                        | LocalStart  | 1...256                                                         | Assign the DMX universe to transmit or receive the network protocol.                                                                                                                                                                                                                                                                                                 |
| ETC Net2, Pathport, Shownet                        | Amount      | **ETC Net2 and Pathport:** 1...64**Shownet:** 1...256 or "None" | Assign the amount of DMX universes to transmit the network protocol.                                                                                                                                                                                                                                                                                                 |
| ETC Net2, Pathport, Shownet                        | ExternStart | 1...64                                                          | Assign the transmitted or received DMX universe.                                                                                                                                                                                                                                                                                                                     |
| ETC Net2                                           | Groups      | 1...6                                                           | ETC Net2 uses multicast groups to simplify and optimize the transmission. Assign the group to transmit to.                                                                                                                                                                                                                                                           |
| ETC Net2, Shownet,                                 | Priority    | **ETC Net2:** 1...20**Shownet:** 0...16               | Assign the priority to decide who a node should listen to in a conflict. **ETC Net2:** The lowest number has the highest priority. **Shownet:** A DMX512 slot can be patched to multiple Netslots with each Netslot assigned to a different priority. The DMX512 slot outputs the level of the Netslot with the highest priority if HTP is not selected.             |
| ETC Net2, Pathport                                 | TTL         | 0...255                                                         | TTL = Time to live Assign the number of routers (hops) that multicast traffic is permitted to pass through before expiring on the network. For each router (hop), the original specified TTL is decremented by one (1). When its TTL reaches a value of zero (0), each multicast datagram expires and is no longer forwarded through the network to other subnets.   |

 

The following table displays the assignable parameter by use the command Assign Protocol \[Network Protocol ID] . \[Row ID] / \[Parameter] = \[Parameter Value].

Only available for:

- Art-Net
- sACN
- Kinet1

 

| Network Protocol      | Parameter     | Parameter Value                                                                                                                                       | Description                                                                                                                                                                                                                                                                                                                                                          |
| --------------------- | ------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Art-Net, sACN         | Mode          | **Art-Net:** "OutputBroadcast", "OutputUnicast", "OutputAuto", "Input" **sACN:** "OutputMulticast", "OutputUnicast", "InputMulticast", "InputUnicast" | Assign the output or input mode.                                                                                                                                                                                                                                                                                                                                     |
| Art-Net, sACN         | DestinationIP | "1.2.3.4"                                                                                                                                             | **Only if the mode is OutputUnicast.** Assign the the destination IP address.                                                                                                                                                                                                                                                                                        |
| Art-Net, sACN, Kinet1 | LocalStart    | 1...256                                                                                                                                               | Assign the DMX universe to transmit or receive the network protocol.                                                                                                                                                                                                                                                                                                 |
| Art-Net, sACN, Kinet1 | Amount        | 1...256                                                                                                                                               | Assign the amount of DMX universes to transmit or receive the network protocol.                                                                                                                                                                                                                                                                                      |
| Art-Net               | Network       | 1...128                                                                                                                                               | Assign the network.                                                                                                                                                                                                                                                                                                                                                  |
| Art-Net               | Subnet        | 0...15                                                                                                                                                | Assign the subnet.                                                                                                                                                                                                                                                                                                                                                   |
| Art-Net               | Universe      | 0...15                                                                                                                                                | Assign the universe.                                                                                                                                                                                                                                                                                                                                                 |
| Art-Net, sACN         | Delay(ms)     | 0.000...5.000                                                                                                                                         | **Only if the mode is an output mode.** Assign the milliseconds between the packets.                                                                                                                                                                                                                                                                                 |
| sACN                  | sACNUniverse  |  1...64000                                                                                                                                            | Assign the sACN universe.                                                                                                                                                                                                                                                                                                                                            |
| sACN                  | Priority      | 0...200 or "None"                                                                                                                                     | Assign the priority to decide who a node should listen to in a conflict. The highest number has the highest priority.                                                                                                                                                                                                                                                |
| sACN                  | Protocol      | "Final" or "Draft"                                                                                                                                    | Assign a sACN protocol. Some equipment have implemented the draft version of sACN before the final release.                                                                                                                                                                                                                                                          |
| sACN                  | TTL           | 0...255                                                                                                                                               | TTL = Time to live Assign the number of routers (hops) that multicast traffic is permitted to pass through before expiring on the network. For each router (hop), the original specified TTL is decremented by one (1). When its TTL reaches a value of zero (0), each multicast datagram expires and is no longer forwarded through the network to other subnets.   |
| sACN, Kinet1          | Info          | "Information text"                                                                                                                                    | Assign additional information.                                                                                                                                                                                                                                                                                                                                       |
| Kinet1                | ExternStart   | 0...255 or "None"                                                                                                                                     | Assign the transmitted universe number.                                                                                                                                                                                                                                                                                                                              |
| Kinet1                | IPAddress     | "1.2.3.4"                                                                                                                                             | Assign the IP address.                                                                                                                                                                                                                                                                                                                                               |

## Example

- Set the sACN output to active.

\[Channel]> Assign Protocol 4 /outactive=on

 

-  Send grandMA2 universe 10 to Art-Net universe 9.

  **Important:**\
  Art-Net universe 0 is the first Art-Net universe.

  \[Channel]> Assign Protocol 1.1 /mode=outputauto /localstart=10 /amount=1 /network=1 /subnet=0 /universe=9
