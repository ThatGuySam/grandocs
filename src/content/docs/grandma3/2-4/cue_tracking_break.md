---
title: "Break"
description: "Tracking and common tracking functions are described in the What is Tracking topic."
product: grandma3
version: "2.4"
lang: en
sourceUrl: "https://help.malighting.com/grandMA3/2.4/HTML/cue_tracking_break.html"
scrapedAt: "2026-06-12T21:24:54.051Z"
---
Tracking and common tracking functions are described in the [What is Tracking topic](/grandma3/2-4/cue_tracking/).

**Breaks** in cues are a filtered version of the **Release** function. Where the release stops all tracking values, the break will stop tracking of attributes based on a selected filter or world.

The main difference between the release function and setting a break, filtering all attributes, is that the release will release currently tracked attributes from the sequence immediately when the release is activated. Setting a break does not affect existing stored and tracking values. An existing break can only affect tracking values added or changed that pass the cues where the break is already set - if the selected filter or world includes the attribute.

Editing the **Break** cell in a cue opens an **Assignment Editor** pop-up.

![](/img/grandma3/2-4/popup_assignment-editor_v2-4-ef0520.png)

Assignment Editor pop-up

This has three tabs: Empty, Filter, and World.

Empty will remove any break setting. Filter and World allow the selection of an existing filter or world. Selecting one of these will stop tracking changes or additions, passing the cue where the break is set based on the content of the selected filter or world. Learn more about filters and worlds in the [Worlds and Filter section](/grandma3/2-4/worldfilter/).

Filters used as break filters must be static filters.

Follow the example below for a better understanding of the break function.

 

### Example

The base sequence for this example looks like this:

![](/img/grandma3/2-4/img_tracking-break_base_v2-1-9e9579.png)

Base sequence for Break example

Here, we have nine cues. Cue number 1 has some stored values (Dimmer, Position, and Color) for fixture 1.

The values stored in cue number 1 are tracked from 1 to the end. The values are released in the **OffCue** because there is a **Yes** in the **Release** column.

Two filters in the **Filters** pool will be used: "All" and "Only Dimmer".

![](/img/grandma3/2-4/img_tracking-break_filter-pool_v2-1-bed4c4.png)

Filter pool with filter objects

There are two filters: one that contains all attributes and layers, and one that contains only the dimmer attributes and all layers.

In this scenario, cue number 4 is a fade out to black, and cue number 7 is used to pre-set fixtures for the second scene in the show.

The break function can protect these two cues from tracking value changes.

Before moving any further with the example, let us explore the release function by editing the **Release** cell for cue 7, so it changes to "Yes".

![](/img/grandma3/2-4/img_tracking-break_release_v2-1-7fafa3.png)

Release is out of the scope of this topic (it is explained in more detail in the [What is Tracking topic](/grandma3/2-4/cue_tracking/)), but it is included here to show that a release stops all existing and future tracking. The tracking values are released from the sequence.

Release is not the goal for cue 7. Remove the "Yes" in the **Release** column again.

Editing the **Break** cell for cue number 7 opens the **Assignment Editor**. Select Filter and then tap All to select it.

Now the sequence looks like this:

![](/img/grandma3/2-4/img_tracking-break-01_v2-1-94dca0.png)

Break is set for cue 7

Notice the difference between this and the release. The existing tracking values are not released but are protected from future changes.

A break adds a white line to indicate the tracking break. If the break affects all attributes - typically by using Filter 1 or world 1 - it will extend across the entire row (just like the release).

Cue 4 is a fade out. The current dimmer value of 0% can be protected by adding a second break in cue 4, but this time using the "Only Dimmer" filter:

![](/img/grandma3/2-4/img_tracking-break-02_v2-1-791b02.png)

A break is set for cue 4

The break in cue 4 looks a bit different. The white line is black in the attribute columns. This indicates that some attributes are filtered. The Feature Group Indicator Bar is visible at the bottom of the break cell. It shows the features active in the filter.

 

Now that all the breaks are set, the values can be changed. A new dimmer, position, and color values for fixture 1 are stored in cue number 2.

![](/img/grandma3/2-4/img_tracking-break-03_v2-1-3d53ce.png)

Result

The result is that the dimmer, and only the dimmer, value is returned to 0% (the previous tracked value) in cue number 4 because the filter in the break stopped the newly added values from tracking past the cue.

All the values in cue 7 were protected from changes by the filter in the break, and the old tracking values are added (if needed) in cue number 7.
