---
title: "Using CITP"
description: "CITP (Controller Interface Transport Protocol) is a suite of Protocols used to exchange pictures and Video streams through a network. It is developed and mainta"
product: grandma2
lang: en
sourceUrl: "https://help.malighting.com/grandMA2/en/help/key_network_citp.html"
scrapedAt: "2026-06-12T21:28:07.965Z"
---
CITP (Controller Interface Transport Protocol) is a suite of Protocols used to exchange pictures and Video streams through a network. It is developed and maintained by Capture, Sweden - http\://www\.citp-protocol.org/

The protocol suite supports many different things. The grandMA2 console and onPC only supports two elements of the protocol.

Thumbnail exchange from 3rd party media servers and viewing a CITP video stream.

Read about the two different types in the following pages or follow these links: [Streaming CITP](/grandma2/key_network_citp_stream/) and [Thumbnail Exchange](/grandma2/key_network_citp_thumbnail/).

The MA 3D supports one element (streaming CITP video).

 

## Enabling CITP

CITP is enabled in Setup and CITP Network Configuration in the Network tab.

In this menu you can enabled CITP generally by tapping the CITP Enable. This will turn on CITP in your session.

 

## Important Information

There are some things you should be aware of when using CITP.

 

A CITP connection is not possible in MA when running CITP sender and CITP receiver at the same computer.

The CITP Multicast address can be configured by pressing the title bar button in the CITP Network Configuration menu (in Setup). The CITP Multicast address 224.0.0.180 is not forwarded by many switches as soon as IGMP Snooping is enabled. The CITP Multicast address of MA products can be switched to 239.224.0.180 in order to use CITP in combination with IGMP Snooping. Be aware that the alternative multicast address 239.224.0.180 is not yet supported by many other media server manufacturers. Please check the compatibility with the manufacturer of your media server prior to changing the CITP Multicast address and enabling the IGMP Snooping while using CITP.

Changing the multicast address in the CITP Network Config, will change the address for all MA stations (consoles, MA VPU and MA 3D) throughout the session.

Streaming videos via network needs bandwidth. A single CITP video stream of 30fps generates up to 15Mbit/s. Video streams are sent as multicast. Requesting the same video stream from different grandMA2 consoles or MA 3Ds will not generate additional network traffic.

### Some hints to keep network stability when using CITP:

The list below gives a brief overview over the data rate of one 30 Frames per second CITP video stream. When having compressed streams, the data rate varies depending on the compressibility of the video content.

- Uncompressed RGB8 stream: 15Mbit/s
- PNG compressed stream: 7Mbit/s up to 15Mbit/s depending on video content.
- JPG compressed stream: 1Mbit/s up to 8Mbit/s depending on video content.

The minimum network speed is 1000MBit/s. Do not enable CITP in an 100Mbit/s network environment!

The maximum amount of CITP network data rate should not exceed 30Mbit/s per physical network. When exceeding this limit, reduce the video stream quality by choosing a higher compression (jpg) or request less different video streams. Otherwise visualizers and video stream viewers running at computers with installed operating system Microsoft® Windows® may not receive all video stream data resulting in CITP video stream fps dropping below 1 fps.

 

The MA VPU CITP video streams frame rate is limited to 30fps shared by all requested outputs and 10fps shared by all requested layers of CITP video streams. E.g.: When requesting CITP video streams of Output1 and Output2, each stream will have a maximum refresh rate of 15 fps.

The MA VPU reduces CITP video streams frame rate if the CITP network traffic of current connected network exceeds 30Mbit.

## Subtopics

- [Streaming CITP](/grandma2/key_network_citp_stream/)
- [Thumbnail exchange](/grandma2/key_network_citp_thumbnail/)
