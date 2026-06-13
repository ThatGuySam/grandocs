---
title: "Use filters when programming"
description: "The active filter is used when you store values and data. It is also used when you use the At command."
product: grandma2
lang: en
sourceUrl: "https://help.malighting.com/grandMA2/en/help/key_wfm_use_filter.html"
scrapedAt: "2026-06-12T21:28:18.205Z"
---
The active filter is used when you store values and data. It is also used when you use the [At command](/grandma2/key_keyword_at/).

If your active filter is the first one, called "All", then it does not filter any data and you do not notice the filter is there. 

As mentioned in the [What are filters topic](/grandma2/key_wfm_what_are_filters/), The filters can be selected and applied. The selected one is the one with the green background and the applied one is the one with a green line above the name.

## When Storing

When you store something, then the Applied filter is used and the Selected filter will become the Applied filter, ready for your next action.

When you do Store actions then both the Attributes and data Layer parts of the filters are used.

### Example

In the following example we are going to look at a practical situation where filters can help you work more efficient.

1. Use the "Demo Dimmer and more" demo show or a show with some fixtures and some filters.
2. If you do not have it, then create a filter that blocks the dimmer attributes but allows everything else including all Layers.
3. Make sure the Selected filter is the "All" filter.
4. Select a fixture and give it values on several attributes including Dimmer and maybe an effect.

So now we imagine that this is the look we want in a cue - it is going to be cue number 2.

We do not want to use the move in black function but we want the fixture to already be pre-positioned when we run cue number 2. So we are going to store all data except the dimmer in cue number 1 and then the dimmer value in cue number 2.

5. Tap the no-dimmer filter making it the Applied filter.
6. Press Store and then an empty executor button - creating a new cue 1 in a new sequence and executor.

Now you have stored only the values the filter allow in cue number 1 (everything but dimmer). You still have the dimmer values active in your programmer, but the rest is stored. Also now the selected "All" filter is Applied filter.

7. Press Store and then the same executor button.
8. In the pop-up select Create Second Cue.

That was the second cue. Clear your programmer and try to run the cues.

---

## When using the At command

When you use the At command to get values from one object to another, then the Applied filter is also used, and it jumps back to the Selected filter after use.

### Example

In the following example we are going to grab only the color values from one fixture and apply it to another.

1. Use the "Demo Dimmer and more" demo show or a show with some fixtures and some filters.
2. If you do not have it, then create a filter that only contains the color attributes and all layers.
3. Make sure the Selected filter is the "All" filter.
4. Select a fixture and give it values on several attributes including Dimmer, Position, and use the MixColor attributes to blend a new color.
5. Select a different fixture and give it another position and dimmer values.

Now we would like to grab the color values only from the first fixture. We do not want to grab the position and dimmer values from the fixture, only the color.

6. Tap the Color Only filter - making it the Applied filter.
7. Press the At key.
8. Tap the first fixture on the screens (or use the keys - Fixture \[number] Please).

Now both fixtures have the same color values.

 

---

Please also have a look at the [Use temporary filters topic](/grandma2/key_wfm_temporary_filters/) and the [Apply worlds and filters to executors and sequences topic](/grandma2/key_wfm_apply_to_exec_seq/).
