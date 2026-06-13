---
title: "Markers"
description: "Markers can be used to mark specific places in a Track Group. This could be used to mark when a specific part of a song or event is happening."
product: grandma3
version: "2.4"
lang: en
sourceUrl: "https://help.malighting.com/grandMA3/2.4/HTML/timecode_markers.html"
scrapedAt: "2026-06-12T21:24:58.963Z"
---
Markers can be used to mark specific places in a **Track Group**. This could be used to mark when a specific part of a song or event is happening.

A vertical line indicates the position of a basic marker through all tracks in the track group.

Markers can be labeled. The name is shown in the track group. An appearance is displayed vertically through all tracks. The marker might need a duration for the appearance to be visible.

![Timecode show with markers.](/img/grandma3/2-4/window_timecode-viewer_markers_v2-2-c01c05.png)

Timecode show with markers

The example above shows three different markers. The first one (at time 0) has a name. The second one is a simple marker with a label. The third one has a range, name, and appearance.

The two M<< and >>M buttons in the playback toolbar jump to the previous and next markers in the timeline.

Notes and Tags on markers are not indicated in the timeline view. They can be seen in text mode. Learn about the different modes in the [Timecode Viewer topic](/grandma3/2-4/timecode_viewer/).

## Add Markers to the Track Group

To add a marker, the Setup mode must be active. Then, follow these steps:

1. Make sure the **Selection Target** is set to **TimeRanges**. This can be done by tapping ![](/img/grandma3/2-4/icon_tc-time-ranges_12_v2-2-f181a9.png) in the toolbar on the left. If the Selection Target is visible in the title bar, tap it to change the target.
2. Select the track group where the marker should be added.
3. Position the cursor at the correct location in the timeline.
4. Tap ![](/img/grandma3/2-4/icon_add_time_marker_15_v1-5-4efdeb.png) in the toolbar. The Edit Name pop-up opens.
5. Enter a name for the new marker and press Please or press Enter on an external keyboard.
6. The new marker is added.​

Watch the following video to see how to add a marker:

[Vimeo video](https://player.vimeo.com/video/1060959468?title=0\&byline=0\&portrait=0\&color=ffeb0f)

A duration can be applied to a Marker using the following methods:

- Timecode encoder bar:

1. Enter edit mode by tapping  Setup in the title bar.
2. Tap ![](/img/grandma3/2-4/icon_tc-time-ranges_12_v2-2-f181a9.png) in the toolbar on the left to set the **Selection Target** to **TimeRanges**.
3. Tap TimeRange in the timecode encoder bar and select the desired time range from the drop-down list.
4. Tap Duration in the timecode encoder bar and enter the duration in the calculator or rotate the outer ring of the encoder wheel to the desired duration.

- A more precise method is through the **Text** view mode. See **View Mode** - Text in the [Timecode Viewer topic](/grandma3/2-4/timecode_viewer/).
- Another option to add a marker is the quick marker tool +M:

1. Make sure the **Selection Target** is set to **TimeRanges**. This can be done by tapping ![](/img/grandma3/2-4/icon_tc-time-ranges_12_v2-2-f181a9.png) in the toolbar on the left. If the Selection Target is visible in the title bar, tap it to change the target.
2. Select the track group where the marker should be added.
3. A marker is added whenever +M is tapped.

This can be useful during recording as it does not prompt for a name during creation.
