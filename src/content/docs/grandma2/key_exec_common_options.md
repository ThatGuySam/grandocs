---
title: "Common executor options"
description: "The executors most common options, and their associated options, are explained in this topic. The rest are explained in the Executor Options topic."
product: grandma2
lang: en
sourceUrl: "https://help.malighting.com/grandMA2/en/help/key_exec_common_options.html"
scrapedAt: "2026-06-12T21:28:15.406Z"
---
The executors most common options, and their associated options, are explained in this topic. The rest are explained in the [Executor Options topic](/grandma2/key_adv_exec_options/).

There are many options available for executors - especially sequences assigned to executors. They are accessed using the Assign Menu. One way to open the menu is to press the Assign key followed by a key associated with the executor you want to change.

On the right side of the menu there are a button called Options. Tapping this opens the options part of the Assign Menu. This is what it looks like with a sequence assigned to the executor:

![](/img/grandma2/menu_assign_options_sequence_v3-3-33f903.png)

_Assign Menu - Options_

The options look different depending on what is assigned to the executor.

 

## Auto Start and Auto Stop

The **Auto Start** feature switches the executor 'On' when master is moved above zero.

The **Auto Stop** feature switches the executor 'Off' when master is moved down to zero.

There are some other options that are relevant for Auto Start and Auto Stop:

### []()Auto Stop Off Time

If Auto Stop is active, then this option is visible. When **Auto Stop Off Time** is active, then performing the auto stop will use the Off time for the Executor.

### Master Go

The **MasterGo** function is active if Auto Stop is turned Off. Tapping this button will open the Select Master Go pop-up. It looks like this:

![](/img/grandma2/popup_select-master-go_v3-3-073f67.png)

_Small Select Master Go pop-up_

There are four options here. They all take effect when the master fader is moved from zero and up. The options are:

- **No Master Go**:\
  The cue is still running.
- **Master Go**:\
  It executes a Go.
- **Master On**:\
  The current cue is reloaded (fading in again).
- **Master Top**:\
  The first cue is activated.

### Restart

Restart is used when the executor has been Off and is turned On again.

Tapping the button will open the small Select Restart Mode pop-up. It looks like this:

![](/img/grandma2/popup_select-restart-mode_v3-3-0b1141.png)

_Small Select Restart Mode pop-up_

There are three options here:

- **First Cue**:\
  This always restarts the sequence with the first cue.
- **Current Cue**:\
  This restarts the sequence with the cue where it was when the sequence was turned Off.
- **Next Cue**:\
  This restarts the sequence with the next cue based on where it was when the executor was turned Off.

 

## Priority

The priorities are one of the common options to change. The description of the priorities are found in the [Playing Back Cues topic](/grandma2/key_cs_playback/#priority).

 

## Tracking

Explanations about tracking and how to turn it On or Off is found in the [What is Tracking topic](/grandma2/key_cs_what_is_tracking/). Here are also the explanations about **Release Firststep** and **Wrap Around**.

 

## []()Off On Overwritten

The **Off On Overwritten** function will allow that an executor is turned Off if another executor has taken control with all the attributes = this executor has no longer control of any attributes.

### Example

There are two sequences. Sequence one have values for fixture 1 at 100% and using a red color. Sequence two has the same fixture also at 100% and in a blue color.

Both sequences are assigned to executors with Off On Overwritten, AutoStart, and AutoStop active.

1. Moving up the fader on the first executor will turn the fixture to 100% and in a red color.
2. Fading in the second executor will make the fixture turn blue.\
   When the second fader is completely faded in (at the top), then it has control of all the attributes stored in the first sequence.
3. The first executor is then turned Off by **Off On Overwritten**.
4. Taking the second fader down will make the fixture fade out.

If **Off On Overwritten** is _not_ active then the same scenario would be:

1. Moving up the fader for the first executor will turn the fixture On in a red color.
2. Moving up the second fader will make the fixture turn blue.
3. Moving down the second fader will make the fixture red (when the fader is at 0) because the first executor is still active.
