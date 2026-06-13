---
title: "Cue zero"
description: "Cue Zero is an automatically created cue containing a link to default values of attributes. Cue Zero cannot be modified manually. A sequence with activated Cue "
product: grandma2
lang: en
sourceUrl: "https://help.malighting.com/grandMA2/en/help/key_adv_seq_cue_zero.html"
scrapedAt: "2026-06-12T21:28:15.684Z"
---
Cue Zero is an automatically created cue containing a link to default values of attributes. Cue Zero cannot be modified manually. A sequence with activated Cue Zero will start at the first cue after Cue Zero. This cue provides default values when starting the sequence and provides the missing default data when moving or copying cues.

Cue Zero is only available in sequences where [Tracking](/grandma2/key_cs_what_is_tracking/) is activated and there needs to be more than one cue.

 

The settings are all made in the **Assign Menu**. This can be opened by pressing the Assign key followed by one of the keys associated with the executor you want to change. In the Assign Menu please tap the Options button on the right side of the menu.

This is the options we will be looking at in this topic:

![](/img/grandma2/img_assign-menu_cue-zero-settings_v3-3-13a477.png)

_Cue Zero options in the Assign Menu_

 

Tapping the Cue Zero button will open a small **Select Cue Zero Mode pop-up** like this:

![](/img/grandma2/popup_select-cue-zero-mode_v3-3-f6a7ea.png)

_Select Cue Zero Mode pop-up_

This pop-up offers the following options:

- **Off**:\
  Cue Zero is turned off and cue zero is not created - if cue zero exist, then it is removed.
- **On**:\
  Cue zero will be created and will contain default values for all attributes used by this sequence.
- **Dimmers Only**:\
  Cue zero will be created and will contain default values for dimmer attributes only.
- **All**:\
  Cue zero will be created and will contain default values for all attributes of fixtures that have any of its attributes stored in the sequence.
- **Effects**:\
  This is like the On option with the addition of a Stomp is added to cue zero for each attribute stored in any cue of the related sequence.

**Restriction:**\
Activating Cue Zero will hide the **Release Firststep** option - except for the **Dimmers Only** option.

When Cue Zero is activated, then it will appear in Sequence Executor Sheets. It could look like this:

![](/img/grandma2/window_sequence-executor-sheet_cue-zero-on_v3-3-61314b.png)

_Sequence Executor Sheet - Cue Zero On_

The cue is locked and cannot the called or edited. Activating the first cue in the sequence will not activate Cue Zero but the first cue made by a user (cue number 1 in the image above).

The only thing that can be edited in the Cue Zero is the timing. These timings will be used for example when GoBack, with option **cuetiming**, is used to fade from a values or effect value back to values tracking from cue zero. Cue Zero timing is also used when using **Autostomp** setting of executors.

 

## CueZero Extract

When Cue Zero is activated then it is possible to activate **CueZero Extract**.

When Extract is not activated then cue zero creates **links** to default values of the attributes. This means that if the default values is changed after the cue is created then Cue Zero will use the new default values without any need to update the sequence.

When CueZero Extract is activated then, Cue Zero will get the actual default values when CueZero Extract or Cue Zero is activated and when new attributes are added. It is not a link to the default values, but the actual default value. This means that changing the default values afterwards will not change the look of the sequence. Deactivating CueZero Extract (or Cue Zero) and activating it again will store the new defaults.
