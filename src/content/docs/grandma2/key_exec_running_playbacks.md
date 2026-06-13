---
title: "Looking at the active executors"
description: "There are two ways to see all the active executors. They actually display all the \"Playbacks\". This means that they display everything that is currently activel"
product: grandma2
lang: en
sourceUrl: "https://help.malighting.com/grandMA2/en/help/key_exec_running_playbacks.html"
scrapedAt: "2026-06-12T21:28:15.309Z"
---
There are two ways to see all the active executors. They actually display all the "Playbacks". This means that they display everything that is currently actively doing something. So it displays running Sequences, Chaser, Effects, Macros, Timecode shows, Timers, and Plugins.

 

## []()Off Menu

Tapping the Off key twice will open the **Off Menu**. It could look like this:

![](/img/grandma2/menu_off_v3-3-a504dd.png)

_Off Menu_

The main part of this menu is an area with several tabs. Each tab represent one of the different types of playbacks. Each tab has a different color. After the name in the tap there might be a number in parentheses. This number is the amount of playbacks in that category. There is also a tab called "All". This will display all the different playbacks in one list. Each row on the list will have the same color as the tab color. This is to make it easy to distinguish the different types of playbacks in the list.

The columns in the main part will vary depending on what tab is selected. The "All" tab displays all possible columns. They are:

- **Exec**:\
  This is the executors number of the playback. Only relevant for Sequence, Chaser, and Effect.
- **Priority**:\
  This displays the executor priority. Only relevant for Sequence and Chaser.
- **Name**:\
  This is the name of the active playback.
- **Type**:\
  This is only visible in the "All" tab. It tells what kind of playback it is.
- **No.**:\
  This displays the number of the active playback.
- **Cue Number**:\
  This will display the active cue number. This is only relevant for Sequence and Chaser.
- **Cue Name**:\
  This will display the name of the active cue. This is only relevant for Sequence and Chaser.
- **Profile**:\
  This is the name and number of the User Profile that has last activated the playback. Only relevant for Sequence, Chaser, and Effect.

Around the main part, there are several buttons. Assuming this menu is on screen 1, then it is possible to use the X-keys and the U1 through U4 keys to execute various actions. It is also possible to tap the buttons on the screens.

There are two types of buttons. There are "filter" buttons and there are "Off" buttons.

The filter buttons are:

- **Only My Playback**:\
  This will hide playbacks from the list that has been triggered by a different user profile.
- **Only Preview Playbacks**:\
  This will hide playbacks that are not only running in the Previewer. The list will only display the playback running in previewers.
- **Freeze Off Menu**:\
  This is not a filter. When this is deactivated, then a row will disappear when the playback is turned off. Activating the Freeze Off Menu will make the row stay - it becomes empty when the playback is turned off.

The Off buttons are:

- **Off Pool Playbacks**:\
  This will turn off all the playbacks that are running the respective pools - so not running on a Fader Executor or a Button Executor.
- **Off All Buttons**:\
  This will turn off all playbacks running on Button Executors.
- **Off All Faders**:\
  This will turn off all playbacks running on Fader Executors.
- **Everything Off**:\
  This will turn off every running playback and close the Off Menu.
- **Off All \[playback types]**:\
  At the bottom right side of the menu there are seven buttons. Each turn off each of the seven sections. For example Off All Sequences, turns off all the running sequences.

 

## []()Running Playbacks

A window similar to the Off Menu is called **Running Playbacks**. It can be made like any other window - using the [Create Basic Windows pop-up](/grandma2/key_windows/). This window can be found in the **Playbacks** tab. It could look like this:

![](/img/grandma2/window_running-playbacks_v3-3-e5fa5f.png)

_Running Playbacks window_

The main part of this window looks like the **Off Menu** (see above). The difference is the buttons around the window are gone. Instead some of the functions can be added in the Title Bar. This can be changed in the options.

### Options

The options can be accessed by tapping the yellow ball in the upper left corner.

The options have two tabs. One is called **Options**, the other is **Title Buttons**.

The title bar of the options has the options to store the settings as the new default, load the defaults settings, delete the window, and finally close the options pop-up.

### The Options Tab

Here are the different options for the Running Playbacks window.

- **Off Mode**:\
  Activating the Off Mode will change what happens if one of the rows are tapped. When this is active then tapping rows will turn off the tapped playback. This is mutually exclusive with **Link Encoders**.
- **Only My Playbacks**:\
  This is the filter described in the Off Menu above.
- **Only Preview Playbacks**:\
  This is also the filter described in the Off Menu above.
- **Link Encoders**:\
  When this active, then selecting a row will display the relevant Encoder Toolbar. Here it is possible to control the playback. This is mutually exclusive with **Off Mode**.
- **Show Info**:\
  This can add another column to the main part. It will add a Info column to all the tabs.
- **Font**:\
  Here you can selected the font size. Tapping it will open a small **Select Font pop-up**. Here you can select a font size from size 10 through size 22.

### The Title Buttons Tab

Here you can turn On or Off title bar buttons for all the options described above - except the font size.
