---
title: "Patch and Fixture Schedule"
description: "The Patch and Fixture Schedule Window is located in the Setup, column Show, tap Patch & Fixture Schedule."
product: dot2
lang: en
sourceUrl: "https://help.malighting.com/dot2/en/help/key_window_patchandfixtureschedule.html"
scrapedAt: "2026-06-12T21:29:45.193Z"
---
The Patch and Fixture Schedule Window is located in the [Setup](/dot2/key_window_setup/), column **Show**, tap Patch & Fixture Schedule.

![](/img/dot2/dot2_viewsandwindows_patchandfixtureschedule01_1-2-87c138.png)

_Figure 1: Patch and Fixture Schedule_

In this view, you have an overview about all imported fixtures in the show file.

You can also invert DMX values and encoders.

A selected fixtures has a blue background and a white frame around.

To confirm the settings tap **Done **![](/img/dot2/dot2_viewsandwindows_patchandfixtureschedule_1-0-ab6d78.png) in the [title bar](/dot2/key_title_bar/).\
It opens the [Leaving Patch & Fixture Schedule... Window](/dot2/key_window_leavingpatchandfixtureschedule/).

## Columns in the Schedule

The schedule has nine columns.

![](/img/dot2/dot2_viewsandwindows_patchandfixtureschedule02_1-2-8d8c99.png)

_Figure 2: Patch and Fixture Schedule columns_

**FixId:**\
Displays the fixture Id. This column has a sort function.\
To edit the fixture Id, press and hold the cell or press the scroll encoder. The [Select Fixture ID(s)](/dot2/key_window_selectfixturesidswindow/) Window opens.

**Name:**\
Displays the fixture name. This column has a sort function.\
To edit the name, press and hold the cell or press the scroll encoder. The [Edit Name Window](/dot2/key_window_enternameforwindow/) opens.

**Fixture Type:**\
Displays the fixture type inclusive the fixture type number at the beginning and the mode.\
This column has a sort function.\
To edit the fixture type, tap at Change Fixture Type, or press and hold the cell, or press the scroll encoder. The [Select Fixture Type...](/dot2/key_window_selectfixturetype/) Window opens.

**Patch:**\
Displays the patch address (DMX address). If a fixture has no patch it is displayed as a dash in brackets.\
To edit the patch address, press and hold the cell or press the scroll encoder. The [Select DMX Address...](/dot2/key_window_selectdmxaddress/) Window opens.

**Pan DMX Invert:**\
Displays if pan DMX invert is on or off (= nothing is displayed).\
To change the status, press and hold the cell or press the scroll encoder.

**Tilt DMX Invert:**\
Displays if tilt DMX invert is on or off (= nothing is displayed).\
To change the status, press and hold the cell or press the scroll encoder.

**Pan Enc. (=Encoder) Invert:**\
Display if pan encoder invert is on or off (= nothing is displayed).\
To change the status, press and hold the cell or press the scroll encoder.

**Tilt Enc. Invert:**\
Display if tilt encoder invert is on or off (= nothing is displayed).\
To change the status, press and hold the cell or press the scroll encoder.

**Visualization Color:**\
The visualization color, helps to display the actual color of the light in the dot2 3D or the [Fixtures View](/dot2/key_viewitem_fixture/), e.g. for dimmer using a gel.\
To change the visualization color, press and hold the cell or press the scroll encoder. The Edit Visualization color window opens.\
The Edit Visualization window is basically the same as the [Color Preset Type view](/dot2/key_viewitem_color/).

**React to Master:**\
As default React to Master is always enabled.\
Whenever it is enabled, the dimmer attributes of fixtures are affected by the Grand Master and Solo. If React to Master is disabled, the intensity will not be affected by these.\
The fixtures turn olive green in the Fixture Schedule. For more information see [System Colors – Background](/dot2/key_background_colors/). 

## Buttons in the Schedule

Rightmost of the window are five buttons.

![](/img/dot2/dot2_viewsandwindows_patchandfixtureschedule03_1-2-37c254.png)

_Figure 3: Patch and Fixture Schedule buttons_

**Add New Fixture Window:**\
Tap to open the [Add New Fixtures Window](/dot2/key_window_addnewfixtures/).

**Create Multipatch:**\
Tap to open the [Calculator](/dot2/key_view_calculator/). Enter the amount of multipatch fixtures.\
Multipatch create additional row to patch several DMX addresses for the selected fixture in the Patch and Fixture Schedule. It is used to control several DMX addresses by using one fixture ID in the console. The multipatch fixtures are doing all the same, indicated by the same fixture ID. The multipatched fixtures are visualized in the dot2 3D. For more information see [dot2 3D - 3D objects](https://help.malighting.com/dot2/en/help/dot2_3d/key_3dobjects.html).

**Change Fixture Type:**\
Tap to change the selected fixture type. The [Select Fixture Type... Window](/dot2/key_window_selectfixturetype/) opens.

**Important:**\
Changing fixture types to fixture types that have more DMX channels does not delete the old patch, instead it displays the invalid patch addresses in red. For more information see [Add, patch, change, and delete fixtures](/dot2/key_ht_addandpatchfixtures/). 

**Unpatch Selected:**\
Tap to unpatch the selected fixtures.

**Delete Selected:**\
Tap to delete the selected fixture from the Patch & Fixture Schedule.

## Encoder Bar Functions

![](/img/dot2/dot2_viewsandwindows_patchandfixtureschedule04_1-1-3-ce4a26.png)

_Figure 4: Encoder Bar Functions - Patch and Fixtures Schedule_

**Scroll:**\
To scroll up or down, turn the encoder left or right.\
To scroll left or right, press and turn the encoder left or right.\
To edit a selected cell, press the encoder. The respective window opens.

**Select:**\
To select fixture types, press the ![ma](/img/dot2/ma-36da5c.png) key and turn the encoder left or right.\
To cancel a selection of fixture types, press the ![ma](/img/dot2/ma_1-85eed0.png) key and press the encoder.
