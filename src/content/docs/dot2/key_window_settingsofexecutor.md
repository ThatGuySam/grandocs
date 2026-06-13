---
title: "Settings of Executor"
description: "To get to the Settings of Executor View, tap ! in the title bar of the Cues View or tap an executor in the Executor Bar Window."
product: dot2
lang: en
sourceUrl: "https://help.malighting.com/dot2/en/help/key_window_settingsofexecutor.html"
scrapedAt: "2026-06-12T21:29:46.456Z"
---
To get to the **Settings of Executor View**, tap ![](/img/dot2/dot2_viewsandwindows_controlelements_titlebar05_1-0-900d9a.png) in the title bar of the [Cues View](/dot2/key_viewitem_cue/) or tap an executor in the [Executor Bar Window](/dot2/key_window_playback/).

![](/img/dot2/dot2_vw_settings-of-executor_v1-4-2f3290.png)

_Figure 1: Settings of Executor_

You can set different settings for the executor in this view. 

To select the function of an executor, tap the executor displayed in the view. The [Select Function of Executor Window](/dot2/key_window_selectfunctionofexecutor/) opens.

---

## Chaser

To set the executor to a [chaser](/dot2/key_glossary/), tap the prohibition sign.

**Hint:**\
You identify that an executor is a chaser if the executor in the [executor bar](/dot2/key_widget_executorlabelbar/) is displayed in blue.

For more information about chasers refer to [What are Chasers?](/dot2/key_wi_chasers/)

---

## MIB (Move in black) late

To activate MIB (Move in black) late, tap the prohibition sign.

If MIB is activated, MIB will be preposition attributes of fixtures that are fading in from zero. The preposition will be activated before the dimmer is fading in from zero.

**Example MIB on:**\
There are two cues. Cue 1, fixture 1 is set to full; Cue 2, fixture 2 is set to full with pan/tilt position.\
If you start cue 1, fixture 1 opens the dimmer to 100 % and fixture 2 will be prepositioned. If you start cue 2, only the dimmer of fixture 2 opens to 100 %. 

![](/img/dot2/dot2_viewsandwindows_settingsexecutors02_1-2-158978.png)

_Figure 2: Values of cue 1 with active MIB late_

**Hint:**\
If you want to deactivate MIB late only for several fixtures on the executor, store these fixtures in the previous cue with dimmer values of 1.

---

## Autostart

**Hint:**\
Use autostart and autostop in fader executors only.

To disable autostart, tap the check mark.

If autostart is enabled, the executor turns on as soon as the fader is above 0.\
If autostart is disabled, the executor stays turned off as soon as the fader is above 0. 

---

## Autostop

To activate autostop for the executor, tap the prohibition sign.

If autostop is enabled, the executor turns off when a fader position of 0 is reached.\
If autostop is disabled, the executor stays on when a fader position of 0 is reached.

---

## Use Master Speeds 1-4

To select a master speed for an executor, tap ![](/img/dot2/dot2_viewsandwindows_addnewfixtureswindow01_1-0-b10b1a.png) of Master Speed and a drop-down box opens. 

If an executor uses master speed, the master speed fader controls the speed of effects in cues and chasers for this executor.\
If an executor does not use master speed, the master speed fader does not control this executor. Effects use the stored effect speed.

For more information refer to [Magic Speed View](/dot2/key_viewitem_speed/).

---

## Use Master Rate

To deactivate master rate for an executor, tap the tick mark.

If an executor uses the master rate, the master rate controls the speed of the cue fade and cue delay timings.\
If an executor does not use the master rate, the master rate does not control this executor.

For more information refer to [Magic Speed View](/dot2/key_viewitem_speed/).

---

## Super Priority (!)

To set the priority, tap the prohibition sign. 

- Set priority only if the executor is disabled.

**Important:**\
If at least one attribute of a fixture comes from an executor with the Super Priority (!), the fixtures are displayed with an exclamation mark on the left of the ID numbers in the fixture sheet.

**Important:**\
The Super Priority (!) has a higher priority than that of other playbacks and the programmer. 

![](/img/dot2/dot2_settings-of-executor_super-priority_v1-3-063d06.png)

_Figure 3: __Super __Priority (!) displayed in fixtures_

![](/img/dot2/dot2_settings-of-executor_super-priority_fixture-sheet_v1-3-9c2c1f.png)

_Figure 4: Super __Priority __(!) displayed in the fixture sheet view_

![](/img/dot2/dot2_views-and-windows_settings-executor_exclamation-mark-executor_v1-3-c437c2.png)

_Figure 5: Super __Priority __(!) displayed in an executor_

---

## Off on Overwritten 

To enable this function, tap the prohibition sign. 

This function automatically deactivates the executor if another executor took over the control with all attributes. This means that the executor no longer has control over any of the attributes. 

---

## Swop Protect

To turn swop protect on, tap the tick mark.

If swop protect is on, the dimmer values of this executor are not set to zero when an other swop executor is on.

---

## Restart Mode

To select the restart mode, tap ![](/img/dot2/dot2_viewsandwindows_addnewfixtureswindow01_1-0-b10b1a.png).

There are three different restart modes there:

- **First** (default): The executor restarts the sequence using the first cue.
- **Current:** The executor restarts the sequence using the current cue.
- **Next:** The executor restarts the sequence using the next cue – depending on where the sequence stopped before.  

---

## Cue Zero

To activate cue zero for the executor, tap the prohibition sign.

If cue zero is on, the dot2 creates an invisible cue zero on this executor.\
The cue zero stores the default values of any attributes which are used in any cue on this executor.

If cue zero is on, any attributes which are used in any cue on this executor will have their default values in addition to the values of the current cue.

For more information about tracking refer to [What is Tracking?](/dot2/key_wi_tracking/)

**Example Cue Zero On:**\
Let´s assume you have stored fixture 1 thru 3 in blue at executor 1.\
In cue 1 of executor 2, fixture 1 is stored in red.\
In cue 2 of executor 2, fixture 2 is stored in green.\
In cue 3 of executor 2, fixture 3 is stored in green.\
Cue zero is on for executor 2.

Starting executor 1 will display three fixtures in blue.

![](/img/dot2/dot2_viewsandwindows_settingsexecutors03_1-2-4b59bc.png)

_Figure 5: Fixture 1 thru 3 blue_

Starting cue 1 of executor 2 will display fixture 1 in red.\
Fixture 2 and 3 have their default values since they are used on executor 2 in cue 2 and cue 3.

![](/img/dot2/dot2_viewsandwindows_settingsexecutors04_1-2-b532ea.png)

_Figure 6: Fixture 1 red – cue zero on_

**Example Cue Zero Off:**\
This is the same initial situation as in example cue zero on.

Starting cue 1 of executor 2 will display fixture 1 in red.\
Fixture 2 and 3 keep the values from executor 1.

![](/img/dot2/dot2_viewsandwindows_settingsexecutors05_1-2-420a36.png)

_Figure 7: Fixture 1 red – fixture 2 and 3 blue_

**Example Cue Zero On - Copy with Status:**\
Let´s assume you copy cue 1 at cue 4 in its original state and without tracking values from cue 3.\
Turn cue zero on and [choose copy method](/dot2/key_window_choosecopymethod/) with status.

Copy Exec 1.2 Cue 1 At Exec 1.2 Cue 4

Cue 4 is exactly the same as cue 1, since it additionally copies the values from cue zero.

![](/img/dot2/dot2_viewsandwindows_settingsexecutors04_1-2-b532ea.png)

_Figure 8: Copied cue 1 to cue 4 with cue zero and status_

**Example Cue Zero On – Copy no Status:**\
Let´s assume you copy cue 1 at cue 4 with cue zero on, but you copy without status.

The values from cue 3 are tracked to cue 4.

![](/img/dot2/dot2_viewsandwindows_settingsexecutors06_1-2-cadb69.png)

_Figure 9: Copied cue 1 to cue 4 with cue zero and no status_

---

## Use Exec Time

To disable this function, tap the check mark. 

Exec Time is used to overwrite the fade timing previously stored in a cue, and to set the delay times to zero. 

For more information see [What are executors](/dot2/key_wi_executors/). 

---

## Wrap Around

To disable this function, tap the check mark. 

Wrap Around allows the sequence to return to the first cue when executing Go after played back the last cue of a sequence. 

---

## Off Time

To set the off time in seconds, use the plus or minus or the numbered keys on the console.

If an executor has an off time and you turn the executor off by using Off and pressing the executor button ![go](/img/dot2/go_1-db7d7b.png), the executor turns off in the selected off time.\
If an executor has an off time and you turn the executor off by using the **fader**, all attributes expect for the dimmer turns off in the selected off time after you reached the 0 % status of the fader.\
If an executor is a **chaser** and an off time is selected, the off time changes into an on and off time. The chasers start in the selected off time and end in the selected off time.

---

## Timecode

To select the timecode signal for this executor, tap the green timecode field.

There are three timecode signal options there:

- Off = No timecode signal
- SMPTE
- MIDI
