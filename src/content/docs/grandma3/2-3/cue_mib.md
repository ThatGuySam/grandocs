---
title: "Move In Black"
description: "Move in black (MIB) is a function where tracking sequences look ahead and preposition attributes of fixtures that are fading the dimmer in from zero to automati"
product: grandma3
version: "2.3"
lang: en
sourceUrl: "https://help.malighting.com/grandMA3/2.3/HTML/cue_mib.html"
scrapedAt: "2026-06-15T18:25:25.349Z"
pagefind: false
---
Move in black (MIB) is a function where tracking sequences look ahead and preposition attributes of fixtures that are fading the dimmer in from zero to automatically prevent transitions where the fixture would move the attributes into position while the fixture is fading in.

MIB is enabled on a cue part basis by giving the MIB property of the cue part a value that tells the console when and how it should do the prepositioning.

MIB settings are applied to cues and affect all fixtures stored in the cue. A special **Hold** value can be stored on the Dimmer attribute to prevent a MIB action for specific fixtures. **Hold** is similar to giving the dimmer attribute a value of 0%, but it does not trigger the MIB function for the fixture.

Hold can found in the calculator for the dimmer attribute, in the **Specials** tab.

It can also be applied using the [Hold Keyword](/grandma3/2-3/keyword_hold/).

While the MIB is in progress, the MIB indicator in the Fixture Sheet indicates this:

- Fast flashing: Fixtures intensity fade to 0% in order to do an MIB.
- Slow flashing: Fixtures do the MIB.

When a fixture has moved in black, it has a deep-sea green background color (see more at the bottom of this topic).

If the fixture is selected and an absolute dimmer value above 0 is given, then there is a [User Profile Setting](/grandma3/2-3/user_settings/#h2_989550839) called **KnockIn MIB** defining what happens.

- **Off**:\
  Only the actively changed attributes are activated in the programmer. The moved in black attributes stay in the MIB'ed state and are not automatically active values in the programmer. The result can be that what is seen in the output is not what is stored in the cue, so when the cue is played back, it will not look like it did when it was stored.
- **Post**:\
  The attributes that have been moved in black are activated in the programmer to ensure the fixture's current state is active. This means that if the cue is stored or updated and played back, it will look like it did when it is played back. This function only regards absolute values.

---

Several options and properties modify MIB behavior. Two of them are **MIB Fade** and **MIB Delay** timing properties.

**MIB Fade** is the fade time of attributes that will be positioned by MIB. It is available in different places. There is an order of importance in which MIB fade time to apply:

1. Per cue part
2. Per attribute in a fixture type
3. Global in the show file

When a MIB fade time is specified in the cue part, the individual attribute MIB fade time will be ignored. When the MIB fade time of the cue is set to default, the global MIB fade time will be applied unless an attribute has an individual MIB fade time set.

**MIB Delay** is the delay time the attributes wait from having the dimmer closed until the MIB fade is performed. The MIB delay time can be specified per cue part or global in the show file. The same ruleset as for MIB fade applies:  When the MIB delay time of the cue is set to default, the global MIB delay time will be applied.

When the MIB fade and/or MIB delay is performed between cues, the MIB times specified in the (future) cue part where the dimmer opens again will be applied. For example, a fixture is moving in cue 3 to be ready for cue 5. The MIB times specified in cue 5 is used for the MIB.

## Cue MIB Settings

The sequence sheet can display several columns for the different MIB settings. Read more about the sequence sheet in the [Look at Cues and Preferences](/grandma3/2-3/cue_sequence_sheet/).

- **MIB Preference**:\
  This specifies a cue's suitability for MIB. It is a percentage number from 0(never) to 100(best). The MIB modes Early, UponGo, and Late prioritize the cue with the highest rated suitability and choose this cue for executing the MIB. The MIB mode Defined does not respect the MIB preference.\
  Edit the cell to type a number or select one of the following preference options:

  - **Never(0)**:\
    An MIB will never be performed.
  - **Worst(1)**:\
    If there are no other options, then this cue will be used.
  - **Bad(25)**:\
    It is not optimal, but it is better than the two others.
  - **Normal(50)**:\
    This is the default value.
  - **Good(75)**:\
    This is a better cue than normal.
  - **Best(100)**:\
    This is the optimal cue to perform the MIB.

- **MIB Mode**:\
  Defines how early or late the MIB shall be performed per cue part.

  - **Default**:\
    Performs MIB corresponding to the MIB mode setting of the sequence setting **MIB Mode**.
  - **None**:\
    MIB will not be performed for this cue.
  - **Defined**:\
    A specific cue can be defined in the **MIB Target** column where the MIB is to be performed. The MIB is performed when the specified cue is active.
  - **Early**:\
    Performs the MIB as soon as the dimmer is closed. Typically, after the cue transition has finished.
  - **UponGo**:\
    Performs the MIB with the next cue transition after the dimmer has closed. The MIB executes with the cue after **Early** would have triggered the MIB.
  - **Late**:\
    Performs the MIB latest in the cue before the dimmer opens again.

- **MIB Target**:\
  A specific cue where MIB is performed for this cue part, see MIB Mode above. When setting an MIB target, the **MIB Mode** will be changed to **Defined**, and vice versa. When changing an MIB Mode that is not **Defined, **the **MIB Target** will be removed.

- **MIB MultiStep**:\
  It is possible to decide whether a phaser where the fixtures are already prepositioned shall keep running with the closed dimmer or if they shall be paused. This can prevent unwanted noise and movement of stepper motors for prepositioned fixtures running a phaser, especially when it would disturb the audience. The two options are:

  - **Running**:\
    A phaser is running with a closed dimmer.
  - **Paused**:\
    A phaser will be prepositioned but does not start running until opening the dimmer.

- **MIB Fade**:\
  The MIB fade time per cue part. It can be a set time or default. Default takes the global show file MIB fade time, or the attribute MIB fade time.

- **MIB Delay**:\
  The MIB delay time per cue part. It can be a set time or default. Default takes the global show file MIB delay time or the attribute MIB delay time.

The sequence sheet hides those MIB cells that are not considered for the different combinations of MIB settings or if a cue or cue part is not suitable for MIB.

## Global MIB Settings

To change the global MIB Preferences, go to Menu - Preferences and Timings.

In the Timings tab, there is a section called MIB Timings.

This defines the default **MIB Fade** and **MIB Delay** times. This value is input as time. For more information about MIB fade and MIB delay, please read above.

The property **MIB Transition** defines which transition type will be applied to the fade of MIB. Read more about the different types of transitions in the [Cue Timing topic](/grandma3/2-3/cue_timing/).

The MIB Transition can only be defined for all MIB fades globally in the show file. It is not possible to define a different transition type for a single MIB fade per cue or cue part.

In the Cues tab, there is a section called **MIB Preferences**.

Here, it is possible to change the defaults that will be set to a new cue when it is stored.

- **MIB Mode**:\
  The MIB Mode is used when storing a new cue that can execute MIB.
- **MIB Fade**:\
  The MIB fade time is used when storing a new cue that can execute MIB. Default uses the time set in the timing tab.
- **MIB Delay**: \
  The MIB delay time is used when storing a new cue that can execute MIB. Default uses the time set in the timing tab.
- **MIB MultiStep**: \
  The MIB MultiStep settings are described above.

For more information about these settings, read above.

## Sequence MIB Settings

There are sequence-wide MIB settings within the sequence settings. Read more about the settings in the [Sequence Settings topic](/grandma3/2-3/cue_sequence_settings/).

The purpose of the sequence MIB settings is to have the option to overwrite the cue-based MIB settings with the MIB settings.

When setting the MIB to any option except Enabled, the sequence sheet displays the corresponding setting in yellow in the MIB Mode column header. It also adds exclamation marks before and after the mode set in the cues, for instance, !Late!, to indicate that the set value is overwritten.

The MIB Mode setting selects the default MIB mode used when doing a MIB. The MIB Mode per cue or cue part must be set to Default.

For more information about the different MIB Mode types per sequence, please read the above.

## MIB Color Indicators

Attribute values will be displayed with special colors within the fixture sheet and the sequence sheet in track mode to show when the MIB is performed.

The tracking sheet view shows when the MIB is performed in this example.

![](/img/grandma3/2-3/img_mib-tracksheet_v2-1-7a956c.png)

Two versions of the sequence sheet showing MIB data and the Track Sheet

The fixtures need to be ready for cue 5. In cue 5, the MIB Mode is set to "UponGo". This means that when the fixtures fade to 0% in cue 2, they are ready to MIB with the next cue trigger. When cue 3 is activated, they will perform the MIB for cue 5.

The default color indicators are a deep-sea green background and black text color. Read more about the MIB colors in the fixture sheet and other grandMA3 colors in the [Colors topics](/grandma3/2-3/ws_colors/).
