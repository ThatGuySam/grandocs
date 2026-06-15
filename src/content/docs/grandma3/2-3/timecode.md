---
title: "Timecode Show"
description: "Timecode shows can execute events and move faders to a timed recording or at specific points in time based on a running time counter. This running time counter "
product: grandma3
version: "2.3"
lang: en
sourceUrl: "https://help.malighting.com/grandMA3/2.3/HTML/timecode.html"
scrapedAt: "2026-06-15T18:25:27.643Z"
pagefind: false
---
Timecode shows can execute events and move faders to a timed recording or at specific points in time based on a running time counter. This running time counter can be an internal timecode from the session master or an external timecode source.

The timecode show is organized in **Tracks**, and they exist inside a **Track Group**.

There can be multiple timecode shows that all live in the **Timecode** pool.

![The Timecode pool with two shows](/img/grandma3/2-3/window_tiemcode-pool_v2-2-30d6d2.png)

The timecode pool with a selected show and a running show.

One of the timecode shows is the selected timecode show, which is indicated by a yellow frame.

There is another connected pool called **Timecode Slots**. These can be used as the source for the running time counter. There are eight timecode slots. This is a fixed number of slots.

![Timecode Slots pool](/img/grandma3/2-3/window_timecode-slots-pool_v2-2-c707a6.png)

The Timecode Slots pools with a selected slot and a running time.

A slot can be connected to an SMPTE audio timecode, MIDI timecode, and Art-Net timecode input to allow an external source to control the running time. The slots can also generate a running time that can be used to run a timecode show. The Clock Viewer can show the time of a timecode slot. Learn more in the [What are Timecode Slots topic](/grandma3/2-3/timecode_slots/).

The Clock Viewer shows the time. It can be the system time, the time of a timezone, the timer of a timer, or timecode slot.\
Learn more in the [Clock viewer topic](/grandma3/2-3/si_clock/).

icked.

The content of a timecode show can be seen in the **[Timecode Viewer](/grandma3/2-3/timecode_viewer/)**.

![Timecode Viewer Window.](/img/grandma3/2-3/window_timecode-viewer_v2-2-8e9d38.png)

The Timecode Viewer window shows the content of the timecode show.

The viewer can also be in a setup mode where the events can be added, edited, and deleted. The viewer can be a window in a view or a temporary pop-up.

## Subtopics

- [Timecode Viewer](/grandma3/2-3/timecode_viewer/)
- [Track Groups](/grandma3/2-3/timecode_track_groups/)
- [Markers](/grandma3/2-3/timecode_markers/)
- [Tracks](/grandma3/2-3/timecode_tracks/)
- [Time Ranges](/grandma3/2-3/timceode_time_ranges/)
- [Events](/grandma3/2-3/timecode_events/)
- [Timecode Slots](/grandma3/2-3/timecode_slots/)
- [Timecode Settings](/grandma3/2-3/timecode_settings/)
- [Create a Timecode Show](/grandma3/2-3/timecode_create/)
- [External Connections](/grandma3/2-3/timecode_external_connections/)
