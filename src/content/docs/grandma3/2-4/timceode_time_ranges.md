---
title: "Time Ranges"
description: "Time Ranges can be used to mark a specific area in a Track. This could indicate a specific grouping of Events in the track."
product: grandma3
version: "2.4"
lang: en
sourceUrl: "https://help.malighting.com/grandMA3/2.4/HTML/timceode_time_ranges.html"
scrapedAt: "2026-06-12T21:24:59.047Z"
---
Time Ranges can be used to mark a specific area in a **Track**. This could indicate a specific grouping of **Events** in the track.

When a track is created, a Time Range is automatically created. This range automatically has the duration of the timecode show.

![Timecode show with multiple time ranges.](/img/grandma3/2-4/window_timecode-viewer_time-ranges_v2-2-5b1da9.png)

An example image with multiple time ranges in the timecode show

A track can have multiple time ranges, and they can overlap. Events are children of the time range. 

This is useful if there is a group of events that repeats. Then, the events can be stored in their time range, and this range can be copied to multiple locations. The events' **Time** value is relative to the beginning of the time range. Moving the time range changes an event's calculated (Event Time + Time Range Start) **Absolute Time**, but not the **Time**.

A time range can be added to a track by tapping **+** followed by tapping the track when the setting **Selection Target** is **TimeRanges**. Tapping and dragging in the track will add the time range and the duration based on the range dragged.

Watch the video to see how to add a time range:

[Vimeo video](https://player.vimeo.com/video/1061560921?title=0\&byline=0\&portrait=0\&color=ffeb0f)

The move tool (![](/img/grandma3/2-4/icon_move-15_v0-1-644ef1.png)) can move the start time for the time range.

The resize tool (![](/img/grandma3/2-4/icon_resize_15_v1_5-aacfe0.png)) can adjust the duration for the time range.

Time ranges can be copied or cut and then pasted into tracks using the tools in the toolbar on the left.

Deleting the time range by pressing Delete or tapping **-** followed by the time range also deletes the events in the time range.

Time ranges can have a label. The timeline view shows the name and appearance on the track and subtracks. Notes and tags can only be seen in the text view. Learn about the different views in the [Timecode Viewer topic](/grandma3/2-4/timecode_viewer/).
