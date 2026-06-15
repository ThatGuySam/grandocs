---
title: "Markers"
description: "Markers can be used to mark specific places in a Track Group. This could be used to mark when a specific part of a song or event is happening."
product: grandma3
version: "2.3"
lang: en
sourceUrl: "https://help.malighting.com/grandMA3/2.3/HTML/timecode_markers.html"
scrapedAt: "2026-06-15T18:25:27.795Z"
pagefind: false
---
Markers can be used to mark specific places in a **Track Group**. This could be used to mark when a specific part of a song or event is happening.

A vertical line indicates the position of a basic marker through all tracks in the track group.

Markers can be labeled. The name is shown in the track group. An appearance is displayed vertically through all tracks. The marker might need a duration for the appearance to be visible.

![Timecode show with markers.](/img/grandma3/2-3/window_timecode-viewer_markers_v2-2-0afc5b.png)

Timecode show with markers.

The example above shows three different markers. The first one (at time 0) has a name. The second one is a simple marker with a label. The third one has a range, name, and appearance.

The two M<< and >>M buttons in the playback toolbar jump to the previous and next marker in the timeline.

Notes and Tags on markers are not indicated in the timeline view. They can be seen in text mode. Learn about the different modes in the [Timecode Viewer topic](/grandma3/2-3/timecode_viewer/).

## Add Markers to the Track Group

To add a marker, the Setup mode must be active. Then, follow these steps:

1. Make sure the **Selection Target** is set to **TimeRanges**. This can be done by tapping ![](/img/grandma3/2-3/icon_tc-time-ranges_12_v2-2-f95ad8.png) in the toolbar on the left. If the Selection Target is visible in the title bar, it can be tapped to change the target.
2. Select the track group where the marker should be added.
3. Position the cursor at the correct location in the timeline.
4. Tap ![](/img/grandma3/2-3/icon_add_time_marker_15_v1-5-c46f60.png) in the toolbar. The Edit Name pop-up opens.
5. Enter a name for the new marker and press Please or tap Enter.
6. The new marker is added.​

Another option is the quick marker tool.

1. Make sure the **Selection Target** is set to **TimeRanges**. This can be done by tapping ![](/img/grandma3/2-3/icon_tc-time-ranges_12_v2-2-f95ad8.png) in the toolbar on the left. If the Selection Target is visible in the title bar, it can be tapped to change the target.
2. Select the track group where the marker should be added.
3. A marker is added every time the +M is tapped.

This can be useful during recording as it does not prompt for a name during creation.
