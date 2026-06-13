---
title: "External Connections"
description: "External connections allow the timecode slots to receive a time source from SMPTE/LTC, MIDI timecode, and ArtTimeCode. It is also possible to transmit SMPTE/LTC"
product: grandma3
version: "2.4"
lang: en
sourceUrl: "https://help.malighting.com/grandMA3/2.4/HTML/timecode_external_connections.html"
scrapedAt: "2026-06-12T21:24:59.264Z"
---
External connections allow the timecode slots to receive a time source from SMPTE/LTC, MIDI timecode, and ArtTimeCode. It is also possible to transmit SMPTE/LTC and MIDI timecode from the timecode slot generator.

When a received signal is correctly configured and accepted, the timecode slots indicate the signal type with a small icon and a play icon.

![The timecode slot pool receiving external timecode signals.](/img/grandma3/2-4/window_timecode_slot_pool-114731.png)

Timecode slot pool receiving three different external timecode signals.

The example above shows the timecode slot pool with an SMPTE signal in slot 1, a MIDI signal in slot 2, and an ArtTimeCode signal in slot 3. The received times are displayed in green at the bottom of the pool objects. 

## Set Up SMPTE/LTC and MIDI Timecode

Physical connections must be made for the time signals to be received or transmitted. Learn how in the [Connect LTC](/grandma3/2-4/fs_connect_smpte_ltc/) and [Connect MIDI](/grandma3/2-4/fs_connect_midi/) topics.

With the connections in place, the next step is to access the **Output Configuration**.

The menu can be opened by tapping the gear icon (![](/img/grandma3/2-4/icon_gear_15px-4a7044.png)) on the Control Bar or by pressing Menu. Then, tap Connector Configuration.

![Update this description text.](/img/grandma3/2-4/img_output-connection_timecode-section_v2-2-caac30.png)

Output Connection menu showing the timecode relevant columns.

Four columns are relevant for the timecode in this menu.

- **SMPTE Mode**:\
  This mode has two possible options that can be toggled:

  - **In**:\
    The 3-pin female XLR connector marked LTC on the station is used to receive a SMTPE timecode signal.
  - **Out**:\
    The 3-pin female XLR connector marked LTC on the station is used to transmit a SMPTE time signal.

- **SMPTE TC**:\
  This is used to select the timecode slot to which the physical port relates.

- **MIDI TC Mode**:\
  This mode has three options that can be edited and selected using the small Select MIDI TC Mode pop-up.

  - **In**:\
    The 5-pin DIN connector marked MIDI In on the station receives the incoming MIDI timecode signal.
  - **Out**:\
     The 5-pin DIN connector marked MIDI Out on the station transmits the outgoing MIDI timecode signal.
  - **In & Out & Thru**:\
    The MIDI In connector can receive a MIDI timecode signal, which is then output on the MIDI Out port. The system can also generate a MIDI timecode signal transmitted from the MIDI Out port.

- **MIDI TC**:\
  This is used to select the timecode slot to which the physical port relates.

Several stations can receive a signal related to the same Timecode Slot. The device receiving the signal first is the one the slot listens to. When multiple stations are in Out mode, the master transmits the time signal.

The [Timecode Slot Settings](/grandma3/2-4/timecode_slots/#h3_681682073) display the station's **Source IP** address that provides the time signal for the slot.

The text "No Cable" in the Source IP button can be an indicator that:

- Indicates that no network cable is connected to the selected MA-Net-Interface.
- No timecode show is currently running on the selected TCSlot.
- The time is running on another timecode slot.

## Set Up ArtTimeCode

ArtNet can be used to transmit timecode using ArtTimeCode. 

This can be set up in the DMX Protocols menu.

The menu can be opened by tapping the gear icon (![](/img/grandma3/2-4/icon_gear_15px-4a7044.png)) on the Control Bar or pressing Menu. Then, tap DMX Protocols and then Art-Net.

![](/img/grandma3/2-4/window_imecode_arttimecode-0acc06.png)

The Art-Net menu with timecode columns.
