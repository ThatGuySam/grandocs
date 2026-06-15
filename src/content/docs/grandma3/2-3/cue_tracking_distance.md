---
title: "Tracking Distance"
description: "Tracking and common tracking functions are described in the What is Tracking topic."
product: grandma3
version: "2.3"
lang: en
sourceUrl: "https://help.malighting.com/grandMA3/2.3/HTML/cue_tracking_distance.html"
scrapedAt: "2026-06-15T18:25:24.703Z"
pagefind: false
---
Tracking and common tracking functions are described in the [What is Tracking topic](/grandma3/2-3/cue_tracking/).

Tracking values can have a distance. This can be changed in the **Tracking Distance** column in a [Sequence Sheet](/grandma3/2-3/cue_sequence_sheet/).

There are two types of tracking distances: Normal tracking tracks until a specific cue number. Delta tracks values to a cue number calculated by the cue number, where it is set, plus a number.

Both types release the attribute when the tracking distance ends. This will return the attribute to a previously tracked value or release it from the sequence. See the examples below.

A vertical white line next to the value displays the attributes affected and the number of cues the tracking distance is valid.

A tracking distance affects all values stored in the cue where the distance is set. The tracking distance value does not consider cue parts where the distance ends.

## Tracking Using Cue Number

The tracking distance can be set to track to and include a specific cue number using the tracking distance with a normal number input. See the following example for an explanation.

### Example

The starting point for this example is a simple sequence with nine cues and two fixtures dimmer value set to 50% in the first cue:

![](/img/grandma3/2-3/img_tracking-distance_base-number_v2-1-eaf8d7.png)

Base sequence for Tracking Distance using cue number

Normal tracking rules dictate that the values in cue number 1 are tracked to the end where the **OffCue** releases the value - because **Release** is set to "Yes"

A dimmer value of 70% for fixture 1 is added to cue number 3.

![](/img/grandma3/2-3/img_tracking-distance_number-01_v2-1-e115c2.png)

Value added to cue number 3

A tracking distance is set by editing the Tracking Distance cell for cue number 3.

This opens the **Edit Cue Number** pop-up, where a number can be typed.

![](/img/grandma3/2-3/img_tracking-distance_edit-cue-number_v1-9-2032bf.png)

Edit Cue Number pop-up

The number typed is the cue number, after which the tracking should stop. The cue does not need to exist.

This is the result of the Tracking Distance set to a value of 5:

![](/img/grandma3/2-3/img_tracking-distance_number-02_v2-1-1a7bd1.png)

Tracking Distance set using a cue number

The tracking stops between the existing cues numbers 5 and 6 - notice the white line indicating the tracking distance. It will track to and include cue number 5. The previous tracked value of 50% continues tracking after the distance.

Adding or removing cues in between does not change that it tracks to and including cue 5.

Renumbering cue number 3 also does not change the distance.

![](/img/grandma3/2-3/img_tracking-distance_number-03_v2-1-bf1c60.png)

Tracking still ends after cue 5.

Here, cue number 3 is renumbered to 2.5, and cue 4.5 is added.

The tracking still ends after cue number 5.

## Tracking Delta Distance

Setting a tracking distance with a delta number will track the value to a cue number mathematically higher than the cue where it is set. See the following example for a better understanding.

### Example

The starting point for this example is the same sequence used in the previous example but cleaned up a bit:

![](/img/grandma3/2-3/img_tracking-distance_base-delta_v2-1-bcf7e6.png)

Base sequence

Now cue number 4 is updated with a dimmer value of 80% for fixture 2:

![](/img/grandma3/2-3/img_tracking-distance_delta-01_v2-1-ec3f74.png)

Updated cue number 4

When the Tracking Distance cell for cue number 4 is edited, the **Edit Cue Number** pop-up appears again.

Notice the Δ+ button. Use this to tap Δ+ 2 . 5 Please.

The result is that the value of 80% is tracked from cue number 4 and forward to and including cue number 6.5 (4 + 2.5 = 6.5).

![](/img/grandma3/2-3/img_tracking-distance_delta-02_v2-1-643801.png)

Delta Tracking Distance

Cue number 6.5 does not exist, so the current last cue for the distance is cue number 6.

Any cue added between cue number 3 and cue number 6.5 will have the 80% tracked value, but a cue number higher than 6.5 will have the 50% value.

Make sure the programmer is empty and store empty cues number 6.5 and 6.6 in the sequence.

![](/img/grandma3/2-3/img_tracking-distance_delta-03_v2-1-638dea.png)

Added cues number 6.5 and 6.6

Now, it can be seen that the tracking stops between cues number 6.5 and 6.6.

If cue number 4 is renumbered, this affects the distance. Renumber cue number 4 to number 3.1 by editing the cue number cell.

![](/img/grandma3/2-3/img_tracking-distance_delta-04_v2-1-87cb46.png)

Updated cue number

Now, the tracking stops between cues number 5 and 6. It tracks from cue number 3.1 and up to number 5.6 (3.1 + 2.5 = 5.6). The view might have to be recalled to show the change in tracking distance.
