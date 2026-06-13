---
title: "Masters"
description: "Masters are timing and level overrides. There are six different types of masters that fulfil different purposes. Read more about them in the masters subtopics."
product: grandma3
version: "2.4"
lang: en
sourceUrl: "https://help.malighting.com/grandMA3/2.4/HTML/masters.html"
scrapedAt: "2026-06-12T21:24:56.675Z"
---
Masters are timing and level overrides. There are six different types of masters that fulfil different purposes. Read more about them in the masters subtopics.

Masters can be assigned to fader executors or any of the special executors in the [master section](/grandma3/2-4/do_consoles/#master_section), [custom section](/grandma3/2-4/do_consoles/#custom_section), or the [grand master](/grandma3/2-4/do_control_grand/).\
They can be assigned using the [assign menu](/grandma3/2-4/executor_assign/#h2_420566424). Tap Object in the top-left corner, then Master at the top of the menu to display a tree structure separated into the five groups of masters.\
For more information on assigning objects to executors see [Assign Object to an Executor](/grandma3/2-4/executor_assign/).\
Masters can also be assigned and adjusted using the [Master keyword](/grandma3/2-4/keyword_master/).

Quick access to all of the selected masters and grand masters is available in the master controls menu. For more information on this menu see [Master Controls](/grandma3/2-4/ws_master_controls/).

---

## Master Modes

Masters have a mode that defines how they operate.

There are three available modes:

- **Toggle**:\
  Switch the master **On** or **Off**. The fader value of the master can always be changed and affects the output when the master is on. The indicator colors are gray (Off) and green (On).\
  Masters that are set to toggle can be executed with the button function Temp when they are off. They will then be temp'ed to their current master fader level. For more information about Temp, see [Temp Keyword](/grandma3/2-4/keyword_temp/).
- **Always On**:\
  The master is always On and cannot be switched Off. The fader value of the master can always be changed and affects the output. The indicator color for **Always On** is white.
- **Disabled**:\
  The master is off and its fader value internally uses its default value. For example, the grand master uses 100% and the program time uses 0s. The indicator color for **Disabled** is red.

The modes of all masters can be changed in Menu – Preferences and Timings – Masters.

![](/img/grandma3/2-4/window_masters_01_v3-2-2-9c87b3.png)

Masters settings in Preference and Timings menu

This menu displays the masters separated by their type and their membership in the show file.

Masters can have a global membership which means that these masters are controlled by all users of the show file. Masters with a user membership are located within the user profile which means that every user profile has its own individual set of these masters. Changing one of these masters does not affect the same master in a different user profile.

The section of masters that are controlled by the user profile displays the name of the user behind their type, for example, Selected (Admin) for the masters that control the selected sequence of the Admin user.

Masters of the global membership display (Global) behind their type, for example, Playback (Global).

The mode can be changed by tapping the current mode of the master. This toggles through the three modes.

This menu also shows the current value of each master.

## Subtopics

- [Selected Masters](/grandma3/2-4/masters_selected/)
- [Grand Masters](/grandma3/2-4/masters_grand/)
- [Time Control](/grandma3/2-4/masters_grand_time/)
- [Highlight, Lowlight, Solo](/grandma3/2-4/highlight_lowlight_solo/)
- [Speed Masters](/grandma3/2-4/masters_speed/)
- [Playback Masters](/grandma3/2-4/masters_playback/)
- [Timing Masters](/grandma3/2-4/masters_timing/)
