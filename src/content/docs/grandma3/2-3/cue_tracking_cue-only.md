---
title: "Cue Only"
description: "Cue Only is a store option for cues. When stored in a cue with Cue Only, the tracked values will be blocked in the next cue or cue part to preserve the previous"
product: grandma3
version: "2.3"
lang: en
sourceUrl: "https://help.malighting.com/grandMA3/2.3/HTML/cue_tracking_cue-only.html"
scrapedAt: "2026-06-15T18:25:24.554Z"
pagefind: false
---
Cue Only is a [store option](/grandma3/2-3/cue_store_settings_preferences/) for cues. When stored in a cue with Cue Only, the tracked values will be blocked in the next cue or cue part to preserve the previous look on stage. The programmer's actual values will only be stored in the target cue or cue part.

Cue Only can be used when storing into existing cues - except the last cue. There is no hard key for cue only, so it needs to be activated otherwise. These are the following options:

- As command line option keyword [/CueOnly](/grandma3/2-3/ok_cueonly/) or /CO after the normal [Store keyword](/grandma3/2-3/keyword_store/).
- In the store options: To open the store options, press and hold Store for at least 2 seconds. Then turn On cue only by tapping Cue Only.
- In the **Store Cue pop-up**. When storing onto an existing cue, the Store Cue pop-up will appear and ask whether to Overwrite, Merge, Remove, Release, or Cancel the current store operation. It is also possible to decide if the cue is to be stored with active cue only within the pop-up. Remove and Release can be used for Cue Only. The pop-up only appears if the desired cue is not the last one in the sequence.

When storing cue only, the grandMA3 software decides, based on the 3 following rules, which cue part will block the original values:

1. The default cue part is cue part 0.
2. If the next cue already contains a part with the same name as the cue part from which the original value is coming, the blocked value will be used in this part.
3. If the cue already contains attributes of the same feature group, the previous values will be blocked in this cue.

If none of the rules are true for phaser values, a new cue part will be created where the previous values will be blocked.

### Example

In this example, we have a sequence with the following cues and values:

Fixture 1 is at 80% in cue 1. Fixture 2 is stored at 100% in cue 2. Cues 4 and 5 exist, but they are empty. The values for fixtures 1 and 2 track into the other cues.

![Update this description text.](/img/grandma3/2-3/img_cue-only_example-01_v2-1-5686f6.png)

The starting sequence without cue 3.

Now, fixture 1 gets an active dimmer value of 50%. This is stored into cue 3.
