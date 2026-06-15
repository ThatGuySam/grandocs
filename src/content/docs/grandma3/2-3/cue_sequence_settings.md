---
title: "Sequence Settings"
description: "Each sequence has a lot of different settings. The settings can be accessed from the title bar of each sequence sheet or the executor assign menu. Each of these"
product: grandma3
version: "2.3"
lang: en
sourceUrl: "https://help.malighting.com/grandMA3/2.3/HTML/cue_sequence_settings.html"
scrapedAt: "2026-06-15T18:25:24.889Z"
pagefind: false
---
Each sequence has a lot of different settings. The settings can be accessed from the title bar of each [sequence sheet](/grandma3/2-3/cue_sequence_sheet/) or the [executor assign menu](/grandma3/2-3/executor_assign/). Each of these two locations has a button called Edit Settings or Settings. Tap this to open the settings.

![](/img/grandma3/2-3/popup_sequence-settings_v2-3-5df6ec.png)

_Sequence settings pop-up_

The settings are divided into different sections. Label, Start, Playback, Speed, Protect, and MIB. Read about the different settings in each section below.

Each user profile has default sequence settings. These settings are used when a new sequence is created. The default can be loaded and stored from this pop-up.

The title bar has two relevant buttons. The left one is Load from Default. Tapping this loads the stored sequence defaults. Next to this is Save as Default. Tapping this stores the current settings as the new default.

## []()Label

This group is about the name and look of the sequence.

**Name**

Edit this input field to change the name of the sequence.

**Scribble**

This scribble field can be used to select or create a scribble for the sequence. This scribble is visible in the sequence pool and on the executor label.

**Appearance**

This appearance field can be used to select or create an appearance for the sequence. This appearance is visible in the sequence pool and on the executor label.

**Tags**

A tag can be added to the sequence. Learn more about tags in the [Tags topic](/grandma3/2-3/tags/).

**Note**

This input field can be used to add a note to the sequence.

**Prefer Cue Appearance**

When this option is enabled, and the current cue has an appearance, the cue appearance will be displayed on the executor or in the layout instead of the sequence appearance.

**Executor Display Mode**

The executor display mode defines how the sequence will be displayed on an executor:

- **Data only**:\
  Only the cues with their appearances will be displayed. The cue appearance is only displayed in the line of the cue and not in the background.
- **Appearance only**:\
  Only the sequence or cue appearance will be displayed. No cue names, fade bar, etc., will be displayed. This can be handy for sequences with only one cue, color cues, or gobo cues.
- **Both**:\
  Each cue line displays its cue appearance, and the sequence appearance or the appearance of the current cue will be displayed in the background of the executor.

## []()Start

The settings in this section are about starting and stopping the sequence.

**Auto Start**

The **Auto Start** feature switches the executor 'On' when the master is moved from zero.

**Auto Stop**

The **Auto Stop** feature switches the executor 'Off' when the master is moved down to zero.

**Master Go Mode**

The **Master Go** function is active if auto stop is turned Off. Tapping this button opens the **Select Master Go Mode** pop-up.

There are four options here. They all take effect when the master fader is moved from zero and up. The options are:

- **None**:\
  The cue is still running.
- **Go**:\
  It executes a Go.
- **On**:\
  The current cue is reloaded (fading in again).
- **Top**:\
  The first cue is activated.

**Auto Fix**

The **Auto Fix** feature can be activated for each executor. It will automatically [Fix](/grandma3/2-3/keyword_fix/) active executors and keep them visible even when pages are changed. The executor is automatically unfixed when it is switched off.

**Cue Zero Mode**

This setting defines what is automatically stored in Cue Zero. There are three options:

- **Off**:\
  No attributes are automatically stored in the cue. This is the default option.
- **All Used Attributes**:\
  This adds default values for all attributes of the fixtures used in the sequence.
- **Only Used Dimmers**:\
  This adds default dimmer attributes of the fixtures used in the sequence.

**Auto Stomp**

If auto stomp is On, an **absolute** value from a cue will stomp a phaser running from a different playback.

## []()Playback

The playback settings are about running the cues. Running or playing back cues is described in the [Play Back Cues topic](/grandma3/2-3/cue_playback/).

**Tracking**

This turns On or Off value tracking in the sequence. Read more in the [What is Tracking topic](/grandma3/2-3/cue_tracking/).

**Wrap Around**

Wrap around allows the sequence to return to the top/first cue if a Go (forward) command is performed after the last cue in the sequence is reached. This is automatically disabled if the "Off Cue" has a trigger.

**Release First Cue**

This setting defines if the first cue releases tracking values. These tracking values can come from the last cue if **Wrap Around** is active. If **Release First Cue** is On then it adds a **\<Yes>** to the **Release** column in the first cue of the sequence. Learn more about the different columns in the [Look at Cue and Sequences topic](/grandma3/2-3/cue_sequence_sheet/). The first cue can manually be set to release by editing the field in the sequence.

**Restart Mode**

There are three different restart modes:

- **First Cue**:\
  This always restarts the sequence with the first cue.
- **Current Cue**:\
  This restarts the sequence with the cue where it was when the sequence was turned Off.
- **Next Cue**:\
  This restarts the sequence with the next cue based on where it was when the executor was turned Off.

**Cue Command**

This option defines how the cue commands can be executed. It can be set to follow the value set for each cue in the sequence's **Command** column, or it can force the execution or disable the execution of the commands in the **Command** column in a sequence. The stored commands are not deleted or removed; they are just disabled.

- **Enabled**:\
  Each cue command can be enabled or disabled in the **Command Enabled** column. Disabling the command does not delete or remove the command. They are just disabled.
- **Force No**:\
  The cue command execution is disabled for the entire sequence. The **Command Enabled** column header will display "Force No" if this option is selected. The user-defined settings in the Command Enabled column are not changed to show "No". It shows the user-set value with exclamation marks before and after.
- **Force Yes**:\
  The cue command execution is forced to be enabled for the entire sequence. The **Command Enabled** column header will display "Force Yes" if this option is selected. The user-defined settings in the Command Enabled column are not changed to show "Yes". It shows the user-set value with exclamation marks before and after.

**XFade Reload**

When this option is enabled, the Xfader needs to be pulled back to 0 after completing a crossfade to do the next crossfade.

**Output Filter  **

The output filter can have a [Filter or World](/grandma3/2-3/worldfilter/) assigned. Tapping the button opens the **Assignment Editor** pop-up:

![The assignment editor is used to select a filter for a sequence.](/img/grandma3/2-3/popup_assignment-editor_v2-1-7d8c97.png)

_Tap a world or filter in the list to apply an output filter_

The editor has three tabs. **Empty** can be used to select no filtering. **Filter** and **World** are lists of each type. Each lists the possible choices of their type. Tap the desired filter or world to apply it.

The fixtures and attributes in the world or filter are allowed to pass the output filter and be output from the sequence. The same sequence can be played back from several executors, and each executor shares the output filter settings. If different output filters are needed, the sequence should be linked or shared with another. The other sequence can have different output filter settings. Read about linked sequences in the [Cues and Sequences topic](/grandma3/2-3/cue_sequence/).

If the sequence has an output filter applied, there is a small output filter icon (![](/img/grandma3/2-3/icon_output-filter_12_v1-7-72432b.png)) in the sequence pool button.

**Priority**

This is the priority of the sequence. The priorities are described in the [Play Back Cue topic](/grandma3/2-3/cue_playback/).

**Soft LTP**

The Soft LTP function is described in the [Play Back Cue topic](/grandma3/2-3/cue_playback/).

**Playback Master**

Here it is possible to select a [Playback Master](/grandma3/2-3/masters_playback/). It functions as a sub-master that multiple sequences can share.

**XFade Mode**

This is used to set how the two CrossfadeA/XFadeA and CrossfadeB/XFadeB faders work. There are two crossfade modes:

- **Split**:\
  The dual crossfaders work as masters for the current/next cue.
- **AB**:\
  The dual crossfaders work as crossfaders for increasing/decreasing values.

**Object Action**

The sequence can have an action assigned. This action can be used when the sequence is tapped in the pool. The pool option **Use Object Action** must be active for the sequence object action to take effect. The pool object actions are shown with a big icon on the pool objects.

![](/img/grandma3/2-3/img_sequence-pool_object-actions-overlay_v2-3-358e48.png)

It has the following options:

- **None**:\
  Tapping the object does not trigger an action.
- **Pool Default**:\
  The action set for the pool is used.
- **Select**:\
  This action selects the sequence.
- **Flash**:\
  This performs a flash action on the sequence while it is tapped.
- **Go+**:\
  This will perform a Go+ action on the sequence.
- **Temp**:\
  This performs a temp action on the sequence while it is tapped.
- **Toggle**:\
  This action toggles the sequence On or Off.
- **Goto**:\
  Tapping this performs a Goto action on the sequence. This opens a pop-up where a cue can be selected to complete the goto command.
- **Load**:\
  Tapping this performs a Load action on the sequence. This opens a pop-up where a cue can be selected to complete the load command.
- **Top**:\
  Tapping this performs a Top action on the sequence. This is similar to an automatic Goto action to the first cue (after CueZero) in the sequence.

## []()Speed

Speed and rate can be used to adjust the stored times without reprogramming the show. For instance, a cue can have a fade time of 5 seconds. A rate master can adjust the fade time live while playing it back. All sequences have their own individual rate and speed, but they can be linked to a global master. This master can then adjust the timing for multiple sequences simultaneously. Read more details in the [Speed Masters topic](/grandma3/2-3/masters_speed/).

**Rate Master**

The sequence has a rate master. It can be linked to a shared global speed master, or it can have an individual rate master. Tapping this button will open the **Select Rate Master pop-up**.

In the pop-up, it is possible to select the **None** option for having an individual rate master for the sequence or select one of the global speed masters.

**Rate Scale**

Enabling this binds the rate to defined steps instead of a variable value. Tapping this button opens the **Select Rate Scale pop-up**.

Choosing one of the steps in the pop-up, selects the multiplier or divider. This multiplies or divides the rate by the selected factor.

**Speed Master**

The sequence has a speed master. It can be linked to a shared global speed master, or it can have an individual speed master. Tapping this button will open the **Select Speed Master pop-up**.

In this pop-up, it is possible to select the **None** option for having an individual speed master for the sequence or select one of the global speed masters.

**Speed Scale**

If a sequence is assigned to a global speed master (read above), it can be useful to adjust a speed scale. Tapping this button will open the **Select Speed Scale pop-up**.

In the pop-up, selecting one of the multipliers or dividers is possible. This multiplies or divides the speed by the selected factor.

**Speed from Rate**

This links the speed to follow the rate.

## []()Protect

This group of settings is used to protect the sequence from different actions.

**Input Filter**

The playback filter is described in a little bit more detail in the [Cues and Sequences topic](/grandma3/2-3/cue_sequence/). Tapping this button opens the **Assignment Editor pop-up**: See above about the output filter.

The fixtures and attributes in the world or filter are allowed to pass the filter and can be stored in the sequence.

**Swap Protect**

Activating this option protects this sequence from the Swap playback action.  Learn more about this action in the [Swap Keyword topic](/grandma3/2-3/keyword_swap/).

**Kill Protect**

Activating this option protects this sequence from the Kill playback action. Learn more about this action in the [Kill Keyword topic](/grandma3/2-3/keyword_kill/).

**Include Link Last Go**

This setting is On as default. When it is set to Off, playing back a sequence will not trigger the LinkLastGo functionality in the [sequence sheet](/grandma3/2-3/cue_sequence_sheet/).

**Use Executor Time**

This makes the executor playback cues using the stored timing. If this is turned on, it is affected by the **Exec Time** master fader, who overwrites the timing.

**Off when Overridden**

The Off when Overridden function allows a sequence to be automatically turned Off if another sequence has taken control with all the attributes in the sequence = this executor does not control any attributes.

**Lock Sequence**

The sequence is locked against changes when this is On. It can still be played back.

## []()MIB

This group is about MIB settings for the sequence. Read more about MIB in the [Move In Black topic](/grandma3/2-3/cue_mib/).

**MIB**

Enable, disable, or force MIB for the sequence. The options are:

- **Enabled**:\
  MIB will be performed according to the cue and cue part MIB settings.
- **Never**:\
  MIB will never be performed for this sequence. All cue and cue part-specific MIB settings will be ignored.
- **Force Early**:\
  Forces the early MIB for all cues that can perform MIB as soon as the dimmer is closed. Further MIB settings specified per cue or cue part will be ignored.
- **Force UponGo**:\
  MIB is forced to be executed with the next cue transition after the dimmer is closed. For all cues that can perform MIB. Further MIB settings specified per cue or cue part will be ignored.
- **Force Late**:\
  Forces the MIB latest in the cue before the dimmer opens again. For all cues that can perform MIB. Further MIB settings specified per cue or cue part will be ignored.

**MIB Mode**

This setting defines which MIB mode will be executed when doing a MIB. The **MIB Mode** per cue or cue part needs to be set to **Default**. The options are:

- **None**
- **Early**
- **UponGo**
- **Late**

Learn about the mode types in the MIB topic (link above).
