---
title: "Network Design"
description: "Creating a robust network for a grandMA3 system can be complex as the system scales."
product: grandma3
version: "2.4"
lang: en
sourceUrl: "https://help.malighting.com/grandMA3/2.4/HTML/network_design.html"
scrapedAt: "2026-06-12T21:24:45.680Z"
---
Creating a robust network for a grandMA3 system can be complex as the system scales.

Small systems might not require expensive switches and infrastructure to work, but pushing the grandMA3 system also pushes the network infrastructure.

## General Control System Requirements

- The output of an MA Lighting control system only changes by intention (of the user).

- The output of an MA Lighting control system complies with the standards, proprietary open standards, and protocols (see a complete list in the [Regulations and Standards topic](/grandma3/2-4/network_regulations/)):

  - DMX512-A.
  - sACN.
  - SMPTE Timecode.
  - Open Sound Control (OSC).
  - DIN SPEC 15800 (GDTF).
  - Art-Net.
  - PSN.
  - MVR.

- The output of an MA Lighting control system is synchronized for all physical output ports over all attached MA devices and all transmitted protocols.

- The output of an MA Lighting control system is considered to be “real-time” (The term “real-time” can be defined by: All latencies between input events and output reactions are determined and known.)

- Show files are upward compatible, and exceptions shall be announced. (This might not always be possible due to rare technical reasons. If so, MA will state this with the release notes of the software update as ‘known limitations’!)

The list above defines a set of rules that must be true within a correctly configured network.

---

## Network Speed

The amount of data transmitted over a grandMA3 network varies with the number of grandMA3 devices and configured parameters.

A grandMA3 system is always defined based on one (1) maximum utilized session in a network. This maximum is defined in the [Session topic](/grandma3/2-4/network_session/).

With this in mind, a network speed of 1 Gbit/s is required for the MA-Net3 protocol. This means that the ports on the switches should be configured as "Access" ports and have a minimum capacity of 1 Gbit/s. The switches should be "non-blocking".

The maximum latency on the "broadcast domain" should be 2 milliseconds or less.

The MA-Net3 protocol uses multicast, and all grandMA3 devices support IGMP membership requests.

All devices should use the same bandwidth capacity. This means that if there is an older network node translating a DMX streaming protocol (like Art-Net) only capable of 100 Mbit/s speed, this protocol should be separated to a different VLAN (or network) limited to this speed.

In a Gigabit network, the average bandwidth reserved for MA-Net3 is 200 Mbit/s. MA-Net3 does not allow for traffic shaping.

## Cable Quality and Lengths

Since the network speed is defined as 1 Gbit/s, the quality of the copper cabling should be Cat.5e or better.

The cable length is defined in a set of standards for fixed installations (EN 50173). These specify a set of rules for installations that should be followed.

For “flying installations” or "one-offs", a different type of cable is used (stranded core / "patch" cables). This type does not support the same lengths as a proper fixed installation (using solid core cables). Using a maximum length of 75 meters / 246 feet between devices is recommended for these systems. This length is tested by MA Lighting using new quality cables. If the cable is damaged, it should not be used.

These lengths are about the distance between devices, such as a grandMA3 console and the switch.

Connecting switches can have higher demands. The speed between the switches might be higher than 1 Gbit/s and thus have higher quality demands on the cabling.

## Switch Settings

If more than one switch is used, and the switches are used for more than MA-Net3, then it is recommended to separate the MA-Net3 into a different VLAN.

Please consider that the MA-Net3 should have 1 Gbit/s available, so if the switches do other things as well, there needs to be more than 1 Gbit/s connection between the switches.

When using multiple switches, please ensure the switches support Protocol Independent Multicast (PIM) to route the multicast correctly between the switches.

Switches should have all ports go online simultaneously after a reboot. Delayed port-by-port reboot behavior is not supported at this time.

The IP addresses used in a MA system should follow the recommendation RFC-1918 about address allocation in private internets.

If the MA Worldserver is desired, then a VLAN (or separate network) should be used. This network segment should be routed to the Internet.

## EEE or Green Ethernet

Energy-Efficient Ethernet (IEEE 802.2az) or Green Ethernet is a system supported by some network switches. The idea is to save some energy on the network ports that do not have a lot of traffic. This includes some negotiations between the switch and the connected device. Unfortunately, this does not always result in a successful setting, and the network port could be disabled and enabled when the negotiation fails. This is not good in a MA-Net3 setup.

Disabling any energy-saving functions in the network switch is highly recommended.

If the switch is unmanaged with EEE enabled, it is recommended not to use it.

## Bandwidth Calculation for Best Practise Networks

The DMX output of MA devices needs a refresh rate of 30Hz. Therefore all “real-time” data needs to be present within 33ms.

To avoid any visible jitter, the synchronization data packet is allowed to have a maximum latency over the whole system of 2ms.

Within each refresh of 33ms, all necessary data must be transferred to the end devices.

The maximum possible number of parameters will be 262 144 with 24-bit DMX data. Only a mixed calculation is possible with a 1 024 DMX universe limit. The maximum for 262 144 parameters each of 16bit will end up in 1024 DMX universes and therefore:

1 024 Universes \* 512 packets \* 10 bit \* 30 Hz = 158 MBit/s

This will be the average bandwidth needed to allow the “real-time” traffic (as described in the requirements above) to pass through. At the same time, the latency cannot be more than 2ms. This is a worst-case scenario with the maximum possible DMX data.

There is more data to be transmitted than just the DMX data; therefore, the average bandwidth for Gigabit systems is set to 200 MBit/s.

Higher bandwidth for faster show upload might be required, especially in bigger installations.

More bandwidth is needed if additional DMX-over-Ethernet protocols are used in parallel and/or Web-Remote(s).

The calculation will be the same, and the bandwidth of additional DMX-over-Ethernet data must be added.

## DSCP and QoS

The different types of grandMA3 network traffic is divided into five categories. Each category can have its own setting defining how the switches should prioritize the network packages for this category. These settings can alter the traffic flow and should only be done if a specific need exists. Learn more in the [Station Control topic](/grandma3/2-4/network_station_control/).

## Testing the Network Environment

A grandMA3 network system will be recognized as a smooth operating system if there are no data retransmissions and no DMX dropouts on any device in the session.

Any retransmission of data packages in the overall system will be shown in the System Monitor of every device within the session. Session stability and reliability are measures of network quality and vice versa.

The Network Menu has columns showing the number of negative acknowledgments (NACKS) for each connected station in the system. NACKS are indicators of packages being dropped or not getting through to the recipient.

The **Network Menu** is used to see all the stations and sessions in a network. Learn more in the [Session topic](/grandma3/2-4/network_session/).

Retransmission means a data package has not reached its destination in order or at all. The question arises of which retransmission count is acceptable. In other words, when to worry about network stability.

The answer cannot be a quantity – the answer is a situation-dependent measure.

Here are some guidelines for quality insurance of the network session handling:

- A few Retransmissions (0 – 50) on a regular or irregular basis – The system is considered stable.
- Multiple Retransmissions (> 50) on an irregular basis – The system has issues.
- Multiple Retransmissions (>100) on a regular basis – The system needs investigations!
- High number of Retransmissions (> 200) on an irregular basis – The system needs investigations!

|                                                  |                                                                                                                                                                                                     |
| ------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ![](/img/grandma3/2-4/important_gray-89eed8.png) | **Important:**                                                                                                                                                                                      |
|                                                  | During a show upload, the number of retransmissions can be very high due to the heavy use of communication on all layers, and retransmissions are expected. The system is considered to be stable.  |

A network speed test can be performed to test the network speed. This will test the connections between the station activating the test and the selected stations. The result will show if the connection has issues. Do not perform this test while in a show. Learn more in the [NetworkSpeedTest keyword topic](/grandma3/2-4/keyword_networkspeedtest/).

**DMX dropouts are not allowed within the session at any time.**

Subtopics

- [Protocol Details](/grandma3/2-4/network_design_protocols/)
- [Wireless Networks WLAN - WiFi](/grandma3/2-4/network_design_wlan/)
