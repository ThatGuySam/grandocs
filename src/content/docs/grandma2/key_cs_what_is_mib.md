---
title: "What is MIB"
description: "This topic is about the concept of Move In Black (MIB). See the Working with MIB topic for information on how to actually use MIB."
product: grandma2
lang: en
sourceUrl: "https://help.malighting.com/grandMA2/en/help/key_cs_what_is_mib.html"
scrapedAt: "2026-06-12T21:28:14.922Z"
---
This topic is about the concept of Move In Black (MIB). See the [Working with MIB topic](/grandma2/key_adv_seq_mib/) for information on how to actually use MIB.

MIB (Move In Black) is a function which in a tracking sequence will look ahead and preposition attributes of fixtures that are fading the dimmer in from zero, to automatically prevent "ugly" transitions where you would normally see the fixture move the attributes into position, while the fixture is fading in.

MIB is enabled on a cue-per-cue basis, by giving the MIB-property of the cue a value which tells the console when it should do the prepositioning.

- A zero or positive MIB-value indicates an specific cue number from where MIB is allowed
- A negative MIB-value indicates a relative cue number from where MIB is allowed - please read more about this in the [Working with MIB topic](/grandma2/key_adv_seq_mib/).

 

## Example:

Have a look at the following cue sequence:

![](/img/grandma2/window_sequence-tracking-sheet_eight-cues_mib-option_v3-3-267bd9.png)

_Sequence with MIB possibility_

If this cue list is played back not using MIB, there would be a visible fade in color from cue 3 to cue 4 while the fixture was fading up the intensity. MIB can be used to make the fixture preposition the color, before the intensity is faded up.

If cue 4 is given a MIB value of "Early", the console will **as soon as possible**_ _from Cue 2 (from the intensity is faded to 0%) and forward try to preposition fixtures for Cue 4.

If cue 4 is given a MIB value of "Late", the console will try to preposition the values **as late as possible** - when cue 3 is done fading.

If cue 4 is given a MIB value of "1", the console will **as soon as possible**_ _from Cue 1 and forward try to preposition fixtures for Cue 4.

If cue 4 is given a MIB value of "-2", the console will **as soon as possible**_ _from Cue 2.5 and forward try to preposition fixtures for Cue 4. (cue number 4 then 2 cues back in the list equals cue number 2.5).

 

The actual prepositioning of each attribute will not necessarily take place in the cue indicated by the MIB value. "when possible" means that for each attribute, the prepositioning will be put "on hold" if any of the scenarios below is present.

- Dimmer-output is above zero
- Dimmer has a value above zero in any of the cues between the current cue and the cue to prepare for
- The attribute is included in any of the cues between the current cue and the cue to prepare for
