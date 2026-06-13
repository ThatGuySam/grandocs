---
title: "Remote input"
description: "The Remote Input section can be found by pressing the Setup key and then Remote Input Setup in the Show tab."
product: grandma2
lang: en
sourceUrl: "https://help.malighting.com/grandMA2/en/help/key_remote_control_input.html"
scrapedAt: "2026-06-12T21:28:21.196Z"
---
The **Remote Input** section can be found by pressing the Setup key and then Remote Input Setup in the **Show** tab.

There are three tabs: **Analog Remotes**, **MIDI Remotes**, and **DMX Remotes**.

The three tabs are very similar. The only difference is the remote source. A remote tab could look like this:

![](/img/grandma2/menu_remote-input-setup_analog_v3-3-68c71a.png)

_Remote Input Setup - Analog Remote_

Each row in the table is a remote input.

Each remote type is described below but first is short description of the common columns in the three tabs:

- **Name**:\
  Each remote input can have a custom name.
- **Type**:\
  Tapping here will open the **Select Type pop-up**:

  ![](/img/grandma2/popup_select-type_v3-3-0ebdde.png)

  _Select Type pop-up_

  The options are: **None**, **Exec** (executor), **CMD** (command), and **Hardkey**.
- **Page** (relevant if Exec type is selected):\
  Here the executor page can be set. It can be a specific number or **Current Page on Master**.
- **Executor** (relevant if Exec type is selected):\
  This is the executor number.
- **Button** (relevant if Exec type is selected):\
  This is used to set the executor button number or fader. Tapping here opens the **Select Button pop-up**:

  ![](/img/grandma2/popup_select-button_v3-3-5f8278.png)

  _Select Button pop-up_

  The options are: **Button 1**, **Fader**, **Button 2**, and **Button 3**.
- **Keycode** (relevant if Hardkey type is selected):\
  Tapping this cell will open the **Select Keycode pop-up**:

  ![](/img/grandma2/popup_select-keycode_v3-3-069b69.png)

  _Select Keycode pop-up_

  Here the desired key can be selected.
- **CMD** (relevant if CMD type is selected):\
  Any command typed here will be executed when the the input is triggered.
- **Info**:\
  This is multi line information that can be written to each row.

There are five buttons at the bottom of the menus. They can be tapped on the screen or maybe by using the X-Keys if the menu is on screen 1 (depending on "Xkeys" setting the [User settings](/grandma2/key_single_multi_systems_user_settings/)). This is a short description of the buttons:

- **Add**:\
  This will add one more row in the table.
- **Add Multiple**:\
  This will add multiple rows in the table.
- **Delete**:\
  Tapping this deletes the selected row.
- **Enable**:\
  This toggle button will enable or disable the remote input for the entire tab. Yellow text is active (enabled).
- **CLI on Master**:\
  This toggle button will enable or disable the input actions interaction with the command line input. Yellow text is active.

Each input can have multiple lines doing different actions.

 

## Analog Remote

The **Analog Remotes** tab is used to configure the DC Remote Control input on the back of grandMA2 consoles, grandMA2 replay units (RPU), and MA onPC command wings. The consoles and the RPUs has 16 contact closure inputs. The MA onPC command wings has 12 contact closure inputs.

The input triggers when the pin receives between 5 volt and 15 volt DC (direct current). It is not a variable input. If enough voltage is there, then the input is triggered. If the input receives more than 15 volts, then it could be damaged.

Please read the [Connect Analog Remote Control topic](/grandma2/key_fs_connect_analog_remote_control/) to learn more about the hardware part of the input.

The Analog Remotes tab has a column called **Input**. Here the input number is written.

 

## MIDI Remote

The **MIDI Remotes** tab used received MIDI notes as the input. There are two special columns in this tab. They are called **Note** and **Channel**. These are used to set the MIDI note and channel.

If the **Type** is set to **Exec** and the **Button** is set to **Fader**, then the velocity of the MIDI note is used to set the position of the executor fader. All other inputs are simple triggers.

 

## DMX Remote

The **DMX Remotes** tab uses DMX channels as remote triggers. The DMX source can be the console itself.

The remote input has a special column called **DMX**. Here a DMX universe and channel is defined.

If the DMX value is 128 and above then the input is triggered. If it triggers a **Fader** then the DMX values is used to position the fader.
