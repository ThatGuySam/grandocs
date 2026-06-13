---
title: "What is tracking"
description: "Tracking is the principle to only store the changes in the cues."
product: grandma2
lang: en
sourceUrl: "https://help.malighting.com/grandMA2/en/help/key_cs_what_is_tracking.html"
scrapedAt: "2026-06-12T21:28:14.720Z"
---
Tracking is the principle to only store the **changes** in the cues.

If a fixture is turned on in a blue color, it will stay like this until it is told to change. It does not matter how many cues that are between it is told to turn On and the cue where it is told to turn Off.

Instead of each cue between turning it On and Off having the information that the fixture should be On in a blue color, we only have to store it once - from there it is tracked.

Quite simply, tracking is the idea that once a parameter is set to a level, it stays there until it is told to go somewhere else.

 

### Example

Fixture number 1 is stored in a blue color, at 100 percent dimmer value in cue number 1. If the are 8 cues and fixture number 1 does not get any new information then it will stay at 100% in blue color in all 8 cues.

The best way to see this information is the [Tracking Sheet](/grandma2/key_cs_cue_content/#tracking_sheet). It would look like this:

![](/img/grandma2/window_sequence-tracking-sheet_eight-cues_cue-1_v3-3-47e164.png)

_Sequence with 8 cues - fixture 1 stored values in cue 1_

Notice the difference in text color between the values in cue 1 and the others. The magenta color indicates that the values are not actually stored in the cues, but it is a tracked value from a previous cue.

Now we change the color of the fixture to red and the dimmer is set to 100% again.

We store this as cue 4 (using Merge), it would look like this:

![](/img/grandma2/window_sequence-tracking-sheet_eight-cues_cue-4-blocked_v3-3-164b89.png)

_Sequence with 8 cues - fixture 1 has a new color in cue 4 - blocked dimmer_

The text color of the dimmer value is now white. This shows us that the values is stored here, but it is the same value as the tracked value. This is called a "Blocked" value. This would mean that if we change the value in any of the previous cues, then it would still be 100% in cue number 4. It is currently blocking the tracked value from cue 1 (the same value) and the value stored in cue 4 is tracking to the end.

Notice that the text color for the new RGB values in cue 4 are now cyan. This means that the value is stored here, it is a new value, and it will track the changed value into the rest of the cues.

If we remove the redundant stored value, then we remove the dimmer data from the cue - this is also called to "unblock".

![](/img/grandma2/window_sequence-tracking-sheet_eight-cues_cue-4_v3-3-8d778e.png)

_Sequence with 8 cues - fixture 1 has a new color in cue 4 - unblocked dimmer_

There are several way to do this. One would be to simply edit the value in tracking sheet - follow the link above to read details about the tracking sheet.

Another way is to have the dimmer value for fixture number 1 as active value in your programmer and then store cue 4 with the "Remove" option. This would remove the dimmer value from the cue.

A third option could be using a command like this:

\[Channel]> Unblock Sequence 9

This would remove all redundant white values from the entire sequence number 9.

 

## []()Cue Only

When tracking is turned on and a value is stored in a cue, then the values tracks to the following cues. Just described above.

If a value is stored using **Cue Only**, the new values is not tracked if the attribute has previous tracking values. The old tracking values are automatically stored in the cue after the new values.

## Example

Have a look at the following sequence:

![](/img/grandma2/window_sequence-tracking-sheet_five-cue_before-change_v3-3-bec551.png)

_Sequence before any changes_

Now fixture number 2 gets a new intensity value and a new position. This is stored in cue number 1 using **Cue Only**.

This is the result:

![](/img/grandma2/window_sequence-tracking-sheet_five-cue_cue-only-change_v3-3-054a26.png)

_New values stored using Cue Only_

The new values are stored in cue 1. Notice that cue 2 and the following cues are not changed. This is the cue only function that stores the previous tracked intensity and position values for fixture 2 in cue 2.

If we had stored the values without Cue Only, it would have look like this: 

![](/img/grandma2/window_sequence-tracking-sheet_five-cue_change-without-cueonly_v3-3-bfcc96.png)

_Sequence changed without using Cue Only_

Now number 2 looks different, and all the following cues uses the new position stored in cue 1.

 

## []()Release

It is possible to store using the **Release** option. This will put an **(R)** in the Sequence Tracking Sheet

When an attribute is released in the sequence then it is the same as the sequence no longer sending any information to the attribute.

If a different sequence is sending values to the attribute then these values are now used. Sequence priority can be important in this case - read about priorities in the [Playing back Cues topic](/grandma2/key_cs_playback/#priority). 

 

## []()Release First Step

There is an option in the [Executor Options](/grandma2/key_adv_exec_options/) that is called **Release Firststep**. This becomes relevant if another option called **Wrap Around** is active. 

You can enter the Executor options by pressing the Assign key and then one of the keys associated with an executor using a sequence - this opens the **Assign Menu**. Tap the Options button on the right side of the menu.

Wrap Around allows the sequence to return to the top/first cue if you perform a Go (forward) command after you have reached the last cue in the sequence.

Release First Step controls what should happen with tracked values. They can track from the last cue to the first (Release First Step Off) or any tracked values can be released when the sequence is started from the top (Release First Step On).

Release first step is an option that effects the sequence. This means that this option is synchronized on all executors that uses the same sequence. Wrap around is a setting of the executor - so executors with the same sequence can have different options regarding Wrap Around.

 

## Turning Tracking On or Off

Also in the Executor Options there is the option to turn On or Off the tracking function.

This option belongs to the sequence, meaning that it will be synchronized across all executors that uses the sequence.

When Tracking is Off, the tracked values are gone and where the value was tracked it will be released instead.

If you look at the sequence used in the Cue Only example, it would look like this without Tracking:

![](/img/grandma2/window_sequence-tracking-sheet_five-cue_no-tracking_v3-3-097e5d.png)

_Sequence with Tracking turned Off_

Fixtures 1 and 3 would only be On in cue 2. Fixture 2 would be On and in a position in cue 1. In cue 2 it would turn Off and the position would be released and go back to the default for the fixture. Fixture 2 would turn On again in cue 3 and Off in cue 4. You would not need to store the Off (closed) values, unless other sequences might also try to control the same fixtures and you want to make sure they turn Off.
