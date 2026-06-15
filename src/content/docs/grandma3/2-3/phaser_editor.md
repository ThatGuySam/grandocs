---
title: "Phaser Editor"
description: "The Phaser Editor is a diverse tool for manipulating phasers."
product: grandma3
version: "2.3"
lang: en
sourceUrl: "https://help.malighting.com/grandMA3/2.3/HTML/phaser_editor.html"
scrapedAt: "2026-06-15T18:25:26.292Z"
pagefind: false
---
The **Phaser Editor** is a diverse tool for manipulating phasers.

It offers multiple means of visualizing running phasers as well as tools for dynamically creating and editing phasers. It can also be used as a simple trackpad to adjust the position attributes of fixtures.

Open a storable **Phaser Editor** window using the [Add Window pop-up](/grandma3/2-3/wvm_add_window/). Alternatively, open a temporary version of the **Phaser Editor** by tapping the Phaser button in the [Encoder Bar](/grandma3/2-3/ws_encoder_bar/).

![](/img/grandma3/2-3/window_phaser-editor-auto_v1-9a-c18a17.png)

_Create and manipulate phaser steps in the phaser editor_

The image above shows the Phaser Editor in the Auto view mode. Choose between multiple available view modes using the radio buttons in the title bar or the drop-down button in the Window Settings pop-up. Read below for images and descriptions of the other available view modes.

The blue grid on the left represents the entire pan range (horizontally) and the entire tilt range (vertically). This is called the 2D layout.

The smaller blue grids on the right are 1D layouts. Each attribute with more than one step in the phaser is displayed in its own 1D layout. The bold, vertical, blue lines in the 1D layouts represent beats, based on the speed of the phaser. The example above shows pan and tilt attributes, each with two steps.

When fixtures are selected, they are visualized by small yellow cross-hairs. The beams can be represented in the 2D layout by toggling the Show Beams button in the Window Settings pop-up. When Show Beams is enabled, the intensity and color of each fixture are visualized as a larger circle behind the corresponding yellow cross-hair.

Adding points in the 2D layout adds steps to the programmer. The first point moves the fixtures to the specified position. Each subsequent point adds another step to the programmer.

When a step contains both an Absolute point (shown as a yellow or cyan-filled square) and a Relative point (shown as a hollow, yellow or cyan square), a thin red line connects the relative point and the related absolute point. The cyan-colored points show that the value is from a preset. Yellow-colored points are hard values from the programmer.

Selected points have a yellow circle around them.

A green line describes the path of the fixtures.

A row of buttons immediately below the title bar includes one button for each attribute included in the active phaser. These buttons function as a direct link to the [At Filter](/grandma3/2-3/worldfilter_at_filter/). Phaser adjustments apply to any attributes with a yellow bar and yellow text. Attributes with a grey bar and grey text will ignore adjustments. Tap the button immediately to the right of the last attribute button in this bar to enable or disable all attributes in the bar.

|                                            |                                                                                                                                                                                                                                         |
| ------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ![](/img/grandma3/2-3/tip_gray-269535.png) | **Hint:**                                                                                                                                                                                                                               |
|                                            | If any or all attributes in the bar are disabled, the first tap of the button to the right of the attributes enables all displayed attributes. If all displayed attributes are already enabled, tapping this button disables them all.  |

The tool buttons on the left side are mouse or touch tools, and the tool buttons on the right are operational functions and shortcuts - read more below. The right side tool buttons might change depending on the selected tool on the left side.

---

## Step Bar

The Step Bar appears across the bottom of the Phaser Editor. The Step Bar is a quick step selection tool. This element is optional in the Phaser Editor window, and it is enabled by default. Tap the Step Bar button in the Window Settings pop-up to show or hide the Step Bar. A storable window version of the Step Bar is also available in the **More** tab in the [Add Windows pop-up](/grandma3/2-3/wvm_add_window/).

![](/img/grandma3/2-3/window_step-bar_v1-9-f65366.png)

_Step Bar window with step one selected_

Each step has a small square, which displays a status of empty, deselected, or selected.

Empty steps are steps that do not have any values. They have a dark background color.

Deselected steps have values in them, but they are not selected and are not affected by step-specific adjustments. Deselected steps have a light gray background color and an On/Off toggle icon in the upper-right corner.

Selected steps have values in them and are affected by step-specific adjustments. Selected steps have yellow text and a yellow On/Off toggle icon in the upper-right corner.

Tapping any of the steps toggles the selected status.

Additional controls appear on the right side of the Step Bar. These controls include left and right arrows used to change between single steps. An informative field appears between the arrows, showing which step is currently selected and the number of steps that contain values in the active phaser. If multiple steps are selected, the first selected step is shown with two dots after it (for example, 1../3). If all steps are selected, the first number is replaced with an asterisk (for example, \*/3).

Tap the ![](/img/grandma3/2-3/icon_step-select-all_15_v1-7-58df2e.png) button to the right of the right arrow in the Step Bar to select all steps. Tapping this selects all not-empty steps if only one step is currently selected. If more than one step is already selected, then only step 1 is selected. Tapping the button executes this command: Step Toggle Executor.

The Step Bar in the Phaser Editor window includes three radio buttons. Tap one of these buttons to call up the desired encoder toolbar. The Preset Bar opens the standard attribute [Encoder Toolbar](/grandma3/2-3/ws_eb_encoder_toolbar/) with access to all layers and all attributes. See below for Images and descriptions of the 2D Bar and Phaser Bar.

|                                                    |                                                                                                  |
| -------------------------------------------------- | ------------------------------------------------------------------------------------------------ |
| ![](/img/grandma3/2-3/restriction_gray-3bb57e.png) | **Restriction:**                                                                                 |
|                                                    | The storable window version of the Step Bar does not include the encoder toolbar radio buttons.  |

---

## 2D View Mode

![](/img/grandma3/2-3/window_phaser-editor-2d_v1-9-30cd73.png)

Phaser Editor in 2D View Mode

The 2D view mode removes other layout elements and expands the 2D layout to cover the main area of the window. This view mode is helpful when working with position phasers.

The Values button in the title bar allows or prevents the display and editing of absolute points or relative points. Tap to cycle through the available options or tap and swipe to open a list of available options. Options include:

- Absolute - Displays and allows editing of absolute points and their handles.
- Relative - Displays and allows editing of relative points and their handles.
- Abs+Rel - Displays and allows editing of absolute and relative points, as well as their handles.

---

## 1D View Mode

![](/img/grandma3/2-3/window_phaser-editor-1d_v1-9-cbf063.png)

Phaser Editor in 1D View Mode showing Values

The 1D view mode removes other layout elements and expands the 1D layouts to cover the main area of the window. This view mode displays a layout for every attribute included in the active phaser.

To change the height of the attribute lines, tap the MA logo in the upper-left corner of the window, then tap LineHeight in the **Window Settings** menu, enter the desired height, and press Please.

The checkboxes to the left of the attribute lines represent the status of those attributes in the **At Filter**. These checkboxes relate directly to the attribute buttons across the top of the Phaser Editor. A yellow checkmark indicates that adjustments are allowed on the corresponding attribute. An empty, grey box indicates that adjustments are not allowed.

Tap the 1D Mode button at the right end of the title bar to toggle between the two available 1D drawing modes. These modes change the vertical scale of the 1D layouts.

- Value - In this mode, the vertical scale of each 1D layout equals the full range of values available for the displayed attribute.
- Transition - In this mode, the bottom of the vertical axis represents the beginning value for each step, and the top represents the ending value for the step.

![](/img/grandma3/2-3/window_phaser-editor-1d-transition_v1-9-ce472d.png)

Phaser Editor in 1D View Mode showing Transitions

---

## Sheet View Mode

![](/img/grandma3/2-3/window_phaser-editor-sheet_v1-9-f28e4d.png)

Phaser Editor displayed using Sheet View Mode

The sheet view mode displays phaser steps using a configurable spreadsheet format similar to the fixture sheet. Beneath all of the relevant spreadsheet data, this mode also includes 1D layouts for each attribute included in the phaser.

The default configuration of the sheet view mode arranges phaser steps as columns and layers as rows. Layers that affect all steps of the phaser appear only under step 1. Each cell in the sheet displays an overview of all values for the layer in that step. In cases where the cell includes multiple values or presets, the sheet displays the lowest and highest values in the cell separated by two dots.

---

## Tools

The tool buttons on the left side are:

![](/img/grandma3/2-3/window_phaser-editor_tools_v1-7-8b4415.png)

Phaser Editor left side toolbar

 

- **1 - Move Area**:\
  Moves the entire blue pan/tilt square to show relative values that can be outside the position range.

- **2 - Select**:\
  Selects single steps or uses lasso selection for multiple steps. The selection can be filtered to **Absolute** and **Relative** steps by toggling the respective buttons in the title bar.

- **3 - Add Absolute**:\
  Adds a step using absolute value. The encoder bar follows the absolute layer. A filled rectangle represents absolute values. The **Single Step Mode** is automatically activated as long as you hold a finger or the mouse cursor in the editor while adding an absolute point.

- **4 - Add Relative**:\
  Adds a step using a relative value. The encoder bar follows the relative layer. An empty rectangle represents relative values. The **Single Step Mode** is automatically activated as long as you hold a finger or the mouse cursor in the editor while adding a relative point.

- **5 - Move Point**:\
  Moves selected steps. It is also possible to use the Align function. The **Single Step Mode** is automatically activated as long as you hold a finger or the mouse cursor in the editor while moving a single point.

- **6 - Move Handles (The yellow highlight shows this is the current tool.)**:\
  Move handles of selected steps. It is also possible to use the **Align** function. Each point/step has two handles to influence acceleration and deceleration at the same time. Each handle has a cyan line connected to the point it controls. Move both handles of a point by touching the point and dragging in the desired direction. A handle can be moved individually by touching and moving the handle (small yellow circle).

- **7 - Change Size**:\
  Enlarges/reduces all selected steps evenly from the center point of the selection. It is also possible to use the **Align** function.\
  Pressing MA while changing the size enlarges/reduces all selected steps from the center point of the selection on the horizontal or vertical axis.

- **8 - Change Rotation**:\
  Rotates the selected steps around the center of the selection. It is also possible to use the **Align** function.\
  Pressing MA while changing the rotation, rotates the selected steps around the center of the selection in 5-degree increments.

- **9 - Change Phase**:\
  Opens an overlay with yellow dots symbolize the value of the phase for each fixture. Here the phase value can be shifted independently from the selected steps for the selected fixtures. The **At** filter can be used to move phases for individual attributes. It is also possible to use the **Align** and the **Transition** mode functions. If several attributes are displayed along with different phases, the selected feature groups are displayed in a brighter color. If the fixtures are allocated to grid positions, the values of the phases can be vertically or diagonally aligned. Selecting this also changes the functions on the right side to quick selections for alignment. This changes the tool buttons on the right side to give quick access to standard phase values and a Reset and Invert button.

- **10 - Change Width:**\
  The width can be changed with this tool. It changes the functions on the right side to shortcuts of different percentages. If all steps are selected and the Speed shortcut is tapped, then the movement speed is equalized between the steps. Default is that each step has the same width with no regard to the distance the fixtures are moving in the step. Equalizing the step width makes the fixture move at the same speed by adjusting the width. There is a Reset shortcut that resets the width. Default is a width of 100%. This means that each step has the same width with no regard to the travel distance of the fixtures in each step.

- **11 - Select Form:**\
  Selecting a form overwrites the values of the transition layer, accel layer, and decel layer to create the desired effect. Available forms are listed in the toolbar on the right side and include Rectangle, Sawtooth, Sine, and Circle.

- **12 - Change Speed:**\
  Tap to display various speed tools in the right side toolbar. Available speed tools include functions which multiply or divide the current speed of the phaser by a given amount. Special speed options include:

  - **Loop:** Tap Loop to multiply the current phaser speed by the number of steps currently in the phaser.
  - **Fixture:** Tap Fixture to divide the current phaser speed by the number of fixtures in the current selection.

- **13 - Select all Steps**:\
  This is not a tool like the others. Tapping this toggles between all steps selected or the selection of single steps. It keeps the previously selected tool active.

|                                            |                                                                                                                                                                                                                                                                                |
| ------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| ![](/img/grandma3/2-3/tip_gray-269535.png) | **Hint:**                                                                                                                                                                                                                                                                      |
|                                            | Some tools don’t require the user to precisely touch points in the 2D and 1D layouts to adjust them. Instead, make sure the desired steps are enabled in the **Step Bar**, and use the blue grid areas in the **Phaser Editor** as trackpads to make the desired adjustments.  |

The standard operational functions on the right side are:

![](/img/grandma3/2-3/window_phaser-editor_functions_v1-5-b91756.png)

- **1 - Reset**:\
  Reset spline of the selected steps.
- **2 - Delete**\
  Deletes the selected steps.
- **3 - Cut Programmer**:\
  Removes all programmer values in the currently selected fixtures and moves them to the clipboard.
- **4 - Copy Programmer**:\
  Copies all programmer values in the currently selected fixtures and moves them to the clipboard.
- **5 - Paste Programmer**:\
  Inserts all values from the clipboard to the currently selected fixtures in the programmer.
- **6 - Mirror X**:\
  Mirrors all selected points on the x-axis.
- **7 - Mirror Y**:\
  Mirrors all selected points on the y-axis.
- **8 - Mirror Time**:\
  Swaps the order of the steps. Select all steps first. This is the same as reversing the direction of the movement.
- **9 - Swap XY**:\
  Swaps the X and Y axes of the selected steps.
- **10 - Flip**:\
  Flips the position of the selected fixtures.
- **11 - Reset Zoom**:\
  Resets the area with the blue square. 

---

## Phaser Encoder Toolbar

Depending upon the type of encoder toolbar selected with the radio buttons in the bottom-right corner of the **Phaser Editor**, the encoder toolbar changes to display helpful tools, which are specific to the manipulation of Phaser data.

### 2D Bar

To enable the 2D Bar, tap 2D Bar in the bottom-right corner of the Phaser Editor.

![](/img/grandma3/2-3/img_encoder-bar_encoder-toolbar_2d_v1-7-9004d8.png)

2D Phaser Encoder Bar

This encoder toolbar includes the following encoder controls:

- **MoveX:** Turn the inner encoder to adjust the X position in the 2D Phaser grid of all steps currently enabled in the **Step Bar**.
- **MoveY:** Turn the inner encoder to adjust the Y position in the 2D Phaser grid of all steps currently enabled in the **Step Bar**.
- **Size:** Turn the inner encoder to adjust size of all steps currently enabled in the **Step Bar**. This allows encoder access to the **Change Size** tool mentioned above.
- **Handle:** Turn the outer encoder to adjust the handle length of all steps currently enabled in the **Step Bar**. This allows encoder access to the **Move Handles** tool mentioned above.
- **Rotate:** Turn the outer encoder to rotate all steps currently enabled in the **Step Bar**. This allows encoder access to the **Change Rotation** tool mentioned above.
- **Aspect:** Turn the outer encoder to adjust the aspect ratio of all steps currently enabled in the **Step Bar**. This tool simultaneously adjusts positions of points as well as length and direction of handles in order to create a wider or taller version of the current 2D form.
- **Select Step:** Turn the inner or outer encoder to select individual steps. Press the inner encoder or the outer encoder key to toggle between selecting all steps and a single step.

### Phaser Bar

To enable the Phaser Bar, tap Phaser Bar in the bottom-right corner of the Phaser Editor.

![](/img/grandma3/2-3/img_encoder-bar_encoder-toolbar_1d_v1-7-765c16.png)

Phaser Bar

This encoder toolbar allows for adjustment of **Speed**, **Phase**, **Transition**, **Width**, and **Measure**, based upon the current fixture and step selection, as well as the current status of the **At Filter**.

---

## Window Settings

The Window Settings pop-up includes some [Common Window Settings](/grandma3/2-3/wvm_settings/) as well as some that are specific to the Phaser Editor.

![](/img/grandma3/2-3/popup_phaser-display-settings_v1-9-d240e5.png)

Display tab of the Phaser Window Settings Pop-up

- View Mode - The view mode defines how the different data and information are displayed in the view. The view mode can be changed in the settings or the title bar of the window.

  - **Auto:**\
    Displays the 2D and 1D layouts.
  - **2D:**\
    Displays the 2D layout.
  - **1D:**\
    Displays a 1D layout for every attribute included in the active phaser. 
  - **Sheet:**\
    Displays phaser steps in a spreadsheet format and the 1D layouts for the phaser attributes.

- Line Height - Defines the height of the 1D layouts. Valid options range from 50 to 500. **Auto** adjusts the lines to the size of the Phaser Editor within this range. 

- Appearance - Tapping this button opens a **Select Appearance** pop-up that lists all the defined appearances and the possibility of creating a new appearance. Selecting one will apply that appearance to the window.

- Font Size - This selects the font size in the window. It is a swipe button that opens a list of sizes from 10 to 32. There is also a **Default** property. The default is the same as size 18.

- Show Beams - Tap to show or hide the beams in the 2D layout.

- 1D Mode - Tap to toggle between the two 1D drawing modes. These modes change the vertical scale of the 1D layouts.

  - **Value:**\
    The vertical scale of each 1D layout equals the full range of values available for the displayed attribute.
  - **Transition:**\
    The bottom of the vertical axis represents the beginning value for each step, and the top represents the ending value for the step.

- Attributes -  Defines which position attributes are used when creating a position phaser. Tap to toggle between PanTilt, XY, XZ, and YZ.

- Step Bar - Tap to show or hide the Step Bar.

- Layer Bar - Tap to show or hide the Layer Bar.

- EncoderBar - Defines which encoder bar is displayed in addition to the step bar. Tap to toggle between 2D Bar, Phaser Bar and Preset Bar.

![](/img/grandma3/2-3/popup_phaser-window-settings_v1-9-afb192.png)

Sheet Tab of the Phaser Window Settings Pop-up

- Readout - This selects the value readout for fixture attributes. It is a swipe button that opens a list of readout types with the following options:

  - **Auto**:\
    This makes the sheet follow the selected readout in the [Encoder Bar](/grandma3/2-3/ws_encoder_bar/).
  - **Natural**:\
    Each attribute has a defined Natural readout. This is defined in the [Attribute Definition](/grandma3/2-3/patch_attribute_definitions/). Selecting this option will show the different readouts defined for the attributes.
  - **Percent**:\
    This is a range from 0 to 100.
  - **PercentFine**:\
    This is a range from 0.00 to 100.00.
  - **Physical**:\
    This uses the physical range defined in the fixture type definition.
  - **Decimal8**:\
    This is a decimal range from 0 to 255.
  - **Decimal16**:\
    This is a decimal range from 0 to 65 535.
  - **Decimal24**:\
    This is a decimal range from 0 to 16 777 215.
  - **Hex8**:\
    This is a hexadecimal range from 00 to FF.
  - **Hex16**:\
    This is a hexadecimal range from 0000 to FFFF.
  - **Hex24**:\
    This is a hexadecimal range from 000000 to FFFFFF.

- Speed -  It sets how the speed value is displayed. It has the following options: Auto (following the User Profile setting), Hertz, BPM (Beats Per Minute), and Seconds.

- Preset - This defines how the preset information is displayed in the sheets. There are six properties which are different combinations of these three elements:

  - **ID**:\
    Shows the ID number of the preset.
  - **Name**:\
    Shows the name of the preset.
  - **Value**:\
    Shows the values stored in the preset.

- Color Mode - This switches the color readout between Auto (following the User Profile setting), RGB and CMY. The default value is to follow the setting in the [User Profile](/grandma3/2-3/user_settings/#h2_989550839). The user profile setting is shown between "<>".

- Attribute Sheet - Tap to show or hide individual rows for each attribute included in the phaser. If Layer Sheet is enabled, each layer will include all of these individual layers.

- Layer Sheet - Tap either show all layers simultaneously or hide most layers, showing only the layer that is currently accessible on the attribute encoders.

- Transpose - This On/Off button flips the columns and rows in windows.

- Show Empty Rows - Tap to show or hide empty rows.
