---
title: "Cues"
description: "To go to the Cues View for thmain executor on screen 1: Press Cue on the console."
product: dot2
lang: en
sourceUrl: "https://help.malighting.com/dot2/en/help/key_viewitem_cue.html"
scrapedAt: "2026-06-12T21:29:43.116Z"
---
To go to the **Cues View** for the **main executor on screen 1**: Press Cue on the console.

To go to the cues view**** for the **main executor on screen 2**: Tap Cues on the [view bar](/dot2/key_widget_viewbar/).

To go to the cues view for any other **executors**: Press ![view](/img/dot2/eye_1-352bc0.png) and then the respective executor button on the console.

![](/img/dot2/dot2_viewsandwindows_cuesview02_1-2-338a70.png)

_Figure 1: Cues View_

In this view, you see all cues of the respective executors and their settings.

**Information:**\
Every store, update, or copy function makes an automatically unblock for the cue list. The values being identical with the value of the previous cue will not be stored again in the cue list. This provides a clean tracking list. For more information, refer to [What is Tracking?](/dot2/key_wi_tracking/).

If an off time is set for this executor, it is displayed in the title bar.\
To change the off time, tap at Off Time in the title bar. The [settings of executor window](/dot2/key_window_settingsofexecutor/) opens.

If a certain cue is edited, it is displayed in a red frame in the view. Furthermore, the title bar of the view is displayed in a red and bold font. The corresponding executor is also displayed in a red frame. For more information see [Executor Bar](/dot2/key_widget_executorlabelbar/#red_frame).

![](/img/dot2/dot2_views-and-windows_cues-view_v1-3-55832d.png)

_Figure 2: Cue In Edit Mode_

To start a timecode record for the executor, tap at TC Record (= timecode) in the title bar. The **record icon** ![](/img/dot2/dot2_viewsandwindows_cuesview05_1-1-3-09e4f1.png) is flashing in the title bar of the cues view and in the [executor bar](/dot2/key_widget_executorlabelbar/). Only available if at least one timecode source is turned on in the [timecode configuration window](/dot2/key_window_timecode/). If no timecode source is turned on, the TC Record button is showed grayed out and the timecode trigger icon is displayed in red.

![](/img/dot2/dot2_viewsandwindows_cuesview06_1-2-5f0834.png)

_Figure 3: Cues View - No timecode source is turned on in the Timecode Configuration Window_

To open the executor settings, tap the **tool** ![](/img/dot2/dot2_viewsandwindows_controlelements_titlebar05_1-0-900d9a.png) in the title bar. It opens the [settings of executor window](/dot2/key_window_settingsofexecutor/).

To pin the view and deactivate the dynamic view mode, tap on the **pin** ![](/img/dot2/dot2_viewsandwindows_controlelements_titlebar04_1-0-798179.png) in the [title bar](/dot2/key_title_bar/).

Below the title bar is the cue table. In this table you can edit the

- Number. The [edit cue number(s) window](/dot2/key_window_editcuenumbers/) opens.
- Cue Name
- Protected
- Trig (Trigger). The [select trig window](/dot2/key_viewitem_selecttrig/) opens.
- Trigger Time
- Fade
- Delay
- Out Fade
- Out Delay
- Preset Type Timings
- Cmd (Command)
- Snap Percent
- Info

To edit the cells of the cue table, press and hold the cell. The corresponding edit window opens.

A selected cell in the cue table has blue background with a white frame around.

The current executed cue in the cue table has a green background.\
The blue bar in the name column of a running cue displays the fade time from 0% to 100%.\
For more information about cues, refer to [What is a Cue?](/dot2/key_wi_cues/) and [How to work with Cues?](/dot2/key_ht_cues/).

If a cue is set to protected, a white line is displayed to see where the tracking stops. For more information, refer to [What is Tracking?](/dot2/key_wi_tracking/)

If the assigned fade or delay time is overwritten by the exec time master, it is indicated by an equal sign in front of the fade or delay time.

![](/img/dot2/dot2_viewsandwindows_cuesview07_1-2-6c9bc4.png)

_Figure 4: Cues View - Overwritten fade time_

## Chaser

If the executor is set to a chaser, all cue functions and timings which are not active in the chaser mode are shown gray out. For more information about chasers, refer to [What is a Chaser?](/dot2/key_wi_chasers/) and [How to work with Chasers?](/dot2/key_ht_chasers/).

Additional is the chaser bar visible.

![](/img/dot2/dot2_viewsandwindows_cuesview03_1-0-4d3fd6.png)

_Figure 5: Chaser Bar in the Cues View_

**Forward** (chaser direction mode):\
Tap at ![](/img/dot2/dot2_viewsandwindows_addnewfixtureswindow01_1-0-b10b1a.png) to select the direction mode of the chaser.\
There are four directions modes available

- Forward
- Backward
- Bounce (e.g. starts with cue 1 to 4 and goes back from 4 to 1)
- Random

**Endless** (chaser run mode):\
Tap at ![](/img/dot2/dot2_viewsandwindows_addnewfixtureswindow01_1-0-b10b1a.png) to select the run mode of the chaser.\
There are three run modes available.

- Endless
- Shoot-Off\
  The chaser starts at the selected cue, e.g cue 1, and stops at the end of cue 5. The executor is off after the last cue.
- Shoot-On\
  The chaser starts at the selected cue, e.g. cue 1, and stops at the end of cue 5. The executor is on after the last cue.

**Play:**\
Tap to start the chaser.

**Pause:**\
Tap to set the chaser to pause.

**Half Speed:**\
Tap to set the chaser to half of the current speed.

**1:1 Speed:**\
Tap to set the speed to the adjusted speed. To adjust the speed, use the encoder.

**Double Speed:**\
Tap to set the speed to the double of the entered speed.

## Encoder Bar Functions

![](/img/dot2/dot2_viewsandwindows_cuesview04_1-0-697a2b.png)

_Figure 6: Encoder Bar Function on Screen 1 if Executor is a Chaser_

**Fade** (only available if the executor is a chaser):\
With this encoder you set the fade percent from one cue to another cue.\
The default is 0% and it goes up to 400%.\
To set the fade percent without decimal places, turn the encoder left or right.\
To set the fade percent with decimal places, press ![encoder](/img/dot2/encoder-36b017.png) and then turn the encoder left or right. The encoder speed is slow.

**Speed** (only available if the executor is a chaser):\
To set the speed of the chaser higher or lower, turn the encoder left or right.

**Scroll:**\
To scroll in the cues view up or down, turn the encoder left or right.\
To scroll in the cues view left or right, press and turn the encoder left or right.
