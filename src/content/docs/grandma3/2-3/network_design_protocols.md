---
title: "Protocol Details"
description: "The grandMA3 system supports different network protocols."
product: grandma3
version: "2.3"
lang: en
sourceUrl: "https://help.malighting.com/grandMA3/2.3/HTML/network_design_protocols.html"
scrapedAt: "2026-06-15T18:25:19.245Z"
pagefind: false
---
The grandMA3 system supports different network protocols.

|                                            |                                                                                                        |
| ------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| ![](/img/grandma3/2-3/tip_gray-269535.png) | **Hint:**                                                                                              |
|                                            | See a list of protocols in the [Regulations and Standards topic](/grandma3/2-3/network_regulations/).  |

The following are some details about each protocol that might be useful for setting up rules in network switches and routers.

## MA-Net3

### General Traffic

**Transport layer:** UDP - Multicast

**Port number:** 30020

**IP addresses (default Base address):**

- 236.4.1.0 - Administration group for all devices and sessions
- 236.4.1.1 - General communication (session data)
- 236.4.1.2 - Extended communication (session data)
- 236.4.1.3 - Extended DMX (session data)
- 236.4.1.4 - Reserved (session data)

**Additional Information:**

The IP addresses mentioned above belonging to the session are for session index number 1. Subsequent session indexes use different addresses using the formula "BaseIP+4\*X" where "X" is the session index number, and "IP" is the address mentioned above. This only changes the last octet of the address.

So the default IP addresses specific for session index 3 are:

- 236.4.1.13
- 236.4.1.14
- 236.4.1.15
- 236.4.1.16

This allows for 32 sessions in a network.

### Alternate Multicast Base

The default multicast base address (236.4.1.X) is within an IANA reserved block (according to RFC5771 - IANA Guidelines for IPv4 Multicast Address Assignments).

If this causes any problem in the network environment, then an alternative multicast base address can be selected in the [Network Menu](/grandma3/2-3/network_session/). 

The option called **Alternative** uses the 239.4.1.X address as a base. The fourth number is the same as described above.

### Alternate Traffic

**Transport layer:** TCP - Unicast

**Port number:** 30022+

**Additional Information:**

This is used when a station needs to send a lot of information to a different station, for instance, with a network update.

### MA Worldserver

**Transport layer:** TCP - Unicast

**Port number:** 30021

**Additional Information:**

This must be routed to the Internet to access the official worldserver from MA Lighting.

### MA Web-Remote - HTTP

**Transport layer:** TCP - Unicast

**Port number:** 80

### MA Web-Remote - Websocket

**Transport layer:** TCP - Unicast

**Port number:** 8080

## Art-Net (revision 1.4db)

**Transport layer:** UDP - Broadcast

**Port number:** 6454

and

**Transport layer:** TCP - Unicast

**Port number:** 6454

**Additional Information:**

In Auto-Mode, grandMA3 Art-Net will be sent as Unicast unless there are more than five receivers (default value in Broadcast Threshold) of the same DMX universe in the network. Then the protocol switches automatically to Broadcast.

The default Broadcast Threshold is set to five but can be changed in the [Art-Net menu](/grandma3/2-3/dmx_ethernet_artnet/).

## sACN

**Transport layer:** UDP - Multicast

**Port number:** 5568

**IP addresses:** 239.255.x.y

and

**Transport layer:** TCP - Unicast

**Port number:** 5568

**Additional Information:**

The default uses a Multicast address for each sACN DMX universe corresponding to a specific universe. The first two numbers in the IPv4 address are fixed. The two following numbers are calculated to match the universe number.

For instance, sACN universe 1 is on IP 239.255.0.1, and sACN universe 256 is on IP 239.255.1.0

## PSN - PosiStageNet

**Transport layer:** UDP - Multicast

**Port number:** 65565

**IP addresses:** 236.10.10.10

**Additional Information:**

The Multicast address and port number can be changed in the [PSN menu](/grandma3/2-3/remote_inputs_psn/).

## OSC - OpenSoundControl

**Transport layer:** TCP / UDP

**Port number:** 8000

**Additional Information:**

The transport layer protocol, address, and port number can be changed in the [OSC menu](/grandma3/2-3/remote_inputs_osc/).

## NDI - Network Device Interface

### mDNS communication

**Transport layer:** UDP - Multicast

**Port number:** 5353

**IP addresses:** 224.0.0.251

### Alternate Discovery

**Transport layer:** TCP - Unicast

**Port number:** 5959

### Base TCP Connection for Stream

**Transport layer:** TCP - Unicast

**Port number:** 5961+

### UDP Shared with TCP Connections

**Transport layer:** UDP - Multicast

**Port number:** 5960+

### UDP / TCP Receiving

**Transport layer:** UDP / TCP

**Port number:** 6960+

### UDP / TCP Sending

**Transport layer:** UDP / TCP

**Port number:** 7960+

## MVR-xchange

### mDNS communication for discovery

**Transport layer:** UDP - Multicast

**Port number:** 5353

**IP addresses:** 224.0.0.251

### MVR-xchange

**Transport layer:** TCP

**Port number:** 42424

**Additional Information:**

Only TCP exchange is supported at the moment. Learn more about MVR-xchange in the [MVR-xchange topic](/grandma3/2-3/remote_inputs_mvr/).

## SFTP

**Transport layer:** TCP - Unicast

**Port number:** 22

## SNMP

**Transport layer:** UDP - Multicast

**Port number:** 161 and 162

**Additional Information:**

SNMP v1 and v2c. Public community.

## AVAHI

**Transport layer:** UDP - Multicast

**Port number:** 5353
