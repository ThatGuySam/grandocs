---
title: "RDM"
description: "Requirements:"
product: grandma2
lang: en
sourceUrl: "https://help.malighting.com/grandMA2/en/help/key_rdm.html"
scrapedAt: "2026-06-12T21:28:23.427Z"
---
**Requirements:**\
A Remote Device Management (= RDM) directly connected to one of the devices of the following grandMA2 series:\
\- grandMA2 consoles\
\- MA onPC command wing\
\- MA onPC fader wing\
\- MA NPU\
​- MA 8Port Node, MA 8Port Node onPC\
​- MA 4Port Node, MA 4Port Node onPC, MA 4Port WM\
​- MA 2Port Node, MA 2Port Node onPC 2K, MA 2Port Node onPC 1K, MA 2Port WM

**Restriction:**\
RDM does not support the following devices of the grandMA1 series:\
\- MA 2Port Node\
\- MA 2Port Node PRO\
\- MA 2Port Node Flush-mounted\
\- MA NSP in 4Port Node Mode

RDM is a protocol that allows bi-directional communication between the grandMA2 and RDM-ready devices attached to it (= RDM-ready fixtures) over a standard DMX line. ANSI E1.20 - 2010 by PLASA specifies the RDM standard as an extension of the DMX512 protocol.

Manual settings, such as adjusting the DMX starting address, are no longer needed. This is especially useful for devices installed in a remote area.

RDM is integrated in DMX without influencing the connections. The RDM data is transmitted via the standard XLR-poles – new DMX cables are not required. RDM-ready devices and conventional DMX devices can be operated in one DMX line. The RDM protocol sends its own data packages in the DMX512 data feed and does not influence conventional devices.

Furthermore, RDM works simultaneously via Art-Net and MA-Net2. This allows configuration, status monitoring, and management of these devices.

RDM can provide the following uses, depending on the RDM device:

- Identification of the connected devices
- Addressing of devices controllable by DMX512
- Status reporting of fixtures (alerts and warnings)
- Configuration of fixtures by setting RDM parameters

RDM starts a discovery (= search) for the RDM device every six seconds. If an RDM device is offline, a timeout will be reported after three unsuccessful discoveries for RDM (= 18 seconds).

## Subtopics

- [Turn RDM on](/grandma2/key_rdm_turn_on/)
- [Match RDM devices](/grandma2/key_rdm_match/)
- [Auto patch RDM devices](/grandma2/key_rdm_auto_patch/)
- [Work with RDM parameters](/grandma2/key_rdm_setparameter/)
- [Work with RDM sensors](/grandma2/key_rdm_sensors/)
- [Configure RDM notifications](/grandma2/key_rdm_notifications/)
- [Use the RDM sheet](/grandma2/key_rdm_rdm_sheets/)
- [Unmatch RDM devices](/grandma2/key_rdm_unmatch/)
- [Splitters and mergers that support RDM](/grandma2/key_rdm_list_of_splitters_mergers/)
- [Turn RDM off](/grandma2/key_rdm_turn_off/)
- [RDM specific keywords](/grandma2/key_rdm_keywords/)
