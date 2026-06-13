---
title: "Priorities for bitmap effects"
description: "When working with bitmap effects in the programmer and in playbacks attention should be paid to the following priorities:"
product: grandma2
lang: en
sourceUrl: "https://help.malighting.com/grandMA2/en/help/key_bitmapfixture_priorities.html"
scrapedAt: "2026-06-12T21:28:20.633Z"
---
When working with bitmap effects in the programmer and in playbacks attention should be paid to the following priorities:

1. Bitmap effects always have the lowest priority within a level of priorities. \
   Level of priorities are:\
   \- Super\
   \- Swp\
   \- HTP\
   ​- High\
   \- LTP\
   \- Low
2. Bitmap effects are only visible within a sequence – **cue list:**\
   \- When the fixtures, which are running the bitmap effects, have no values and no effect values on the attributes in use.

For more information on priorities in general see [executor options](/grandma2/key_adv_exec_options/). 

## Example:

If a dimmer value is saved in a cue for Fixture 1, the bitmap effect can only be used for Fixture 1 in the following cue when the dimmer value is released.

For more information on how to release see [What is tracking](/grandma2/key_cs_what_is_tracking/). 

**This is a visual explanation of the example by means of illustration for Fixture 1:**

| Tracking cue list | Dimmer     | Explanation                                                                           |
| ----------------- | ---------- | ------------------------------------------------------------------------------------- |
| cue 1             | **––––––** | Bitmap effect operatesFixture 1 (dimmer)                                              |
| cue 2             | 100        | Value overwritesFixture 1 (dimmer)                                                    |
| cue 3             | (R)        | Value is released,thus the bitmap effect from cue 1 or a new bitmap effectis visible  |
|                   |            |                                                                                       |
