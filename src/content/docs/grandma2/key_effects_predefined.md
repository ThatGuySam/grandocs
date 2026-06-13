---
title: "Use predefined effects"
description: "The simplest way to use effects in the grandMA2 is to work with predefined effects."
product: grandma2
lang: en
sourceUrl: "https://help.malighting.com/grandMA2/en/help/key_effects_predefined.html"
scrapedAt: "2026-06-12T21:28:19.439Z"
---
The simplest way to use effects in the grandMA2 is to work with predefined effects. 

**Requirement:**

- Apply fixtures in the **Patch & Fixture Schedule**.\
  For more information on patching see [Adding fixtures to your show](/grandma2/key_patch_add_fixtures/).
- Import predefined effects.\
  For more information on how to import effects see [Import via user interface](/grandma2/key_ei_export_gui/). 

To apply the predefined effects:

1. Select fixtures in the fixture sheet.
2. Tap anywhere in the **user-defined area**. 
3. []()The pop-up **Create Basic Window** opens. 
4. Next, tap Pools. 
5. Then, tap Effects. 
6. The pool with predefined effects opens. 

![](/img/grandma2/window_predefined-effect-pool_v3-3-54ed21.png)

_Predefined effect pool_

7. Tap an effect in the effect pool.
8. The effect has successfully been applied to the fixtures that were selected.

**Hint:**\
It is also possible to add single predefined effects to the pool.

To do so:

1. Press Edit and tap an empty cell in the pool with predefined effects.
2. An empty effect editor opens.

![](/img/grandma2/popup_empty-effect-editor_v3-3-81dcbc.png)

_Empty effect editor_

3. Tap Load Predefined on the right of the window and the pop-up **Select Predefined Effect** opens.

![](/img/grandma2/popup_select-predefined-effect_v3-3-1536b2.png)

_Pop-up – select predefined effect_

4. To add an effect, tap a name in the pop-up.
5. The [effect editor opens](#effect_editor) and the effect is now displayed in the pool.

---

## Edit a Predefined Effect

To edit a predefined effect:

1. Press Edit and then tap an effect in the effect pool.\
   -or-\
    Use the command line entering for example:

\[Channel]> Edit Effect 1

2. []()The **Effect Editor** opens.

![](/img/grandma2/popup_effect-editor_v3-3-ad7068.png)

_Pop-up – effect editor_

---

## Columns in the Effect Editor

The effect editor contains the following columns and buttons:

- **QTY:**\
  The column **QTY** stands for quantity. \
  []()If it is set to **None**, it is a template effect.

[]()To set the mode:

1. Select fixtures in the fixtures sheet.
2. Tap Take Selection.
3. This template effect is now a selective effect.\
   To turn the selective effect back to a template effect:\
   Press Clear and tap Take selection. 

**Important:**\
The following columns are all edited a similar manner, except for tapping different columns.

- **Interleave:**\
  Defines the fixtures that are to use the effect. Interleave only works in selective effects. 

[]()To set the interleave:

1. Press Edit and tap a cell or tap and hold a cell in the column **Interleave**. 
2. The pop-up **Select Interleave** opens. 

![](/img/grandma2/popup_select-interleave_predefined-effects_v3-3-aeade2.png)

_Pop-up – select interleave_

3. Now, select the interval in which the effect is to run.

- **Attrib:**\
  Displays which attribute is used in the effect line.

1. To change the attribute, tap the corresponding column.
2. The pop-up **Select Effect Attribute** opens.

![](/img/grandma2/popup_select-effect-attributes_v3-3-4a6e4f.png)

_Pop-up – select effect attribute_

3. Tap an attribute and then tap Confirm. 
4. The effect lines now have the selected attribute.

- **Mode:**\
  The column mode corresponds to the effect [modes absolute and relative](/grandma2/key_effects/#effect_modes).

It is also possible to change the mode in the column via the button Line Absolute:\
To toggle the button to Line Relative, tap Line Absolute and vice versa.

- **Form:**\
  Displays all 23 forms of predefined effects. 

To apply a form:

1. Tap the corresponding column.
2. The pop-up **Select Form** opens. 

![](/img/grandma2/popup_select-form_predefined-effects_v3-3-a7b551.png)

_Pop-up – select form_

4. To take over the form automatically into the editor, tap a form.
5. The fixtures now run in an effect that was selected. 

**Important:**\
Both, rate and speed set the speed of an effect.

- **Rate:**\
  Rate represents the factor of  speed. \
  The default setting is Rate 1 which corresponds to 60.0 BPM.
- **Speed:**\
  Speed represents the unit of the speed in BPM, hertz or seconds. 

**Hint:**\
Set the default of the unit of speed in Setup – User – Settings – Speed Mode. 

Apply rate and speed:

1. Tap the corresponding column.
2. The calculator opens. 
3. Set the rate or speed and tap Please. 
4. The value is now applied.

**​Important:**\
It is sufficient to set either rate or speed, since the modes adjust to each other. 

- **Speed Group:**\
  Links an effect to rate or the speed master.

**Important:**\
Using the effect on a speed master overwrites the speed set in an executor. For more information on the speed in an executor see [Advanced Executor Functionality – Speed masters](/grandma2/key_adv_exec_spec_master_speed/). 

To set a speed group:

1. Tap the corresponding column.
2. The pop-up **Select Speed / Rate Master** opens.

![](/img/grandma2/popup_select-speed-rate-master_effects_v3-3-a3aa06.png)

_Pop-up – select speed / rate master_

4. Select the speed group. 
5. The group is now applied. 

- **Dir:**\
  Dir displays the direction of the effect. 

To select the direction:

1. Tap the corresponding column.
2. The pop-up **Select Dir** opens. 

![](/img/grandma2/popup_select-dir_effects_v3-3-a43d9d.png)

_Pop-up – select direction_

4. To apply the direction, select one. 
5. The direction is now applied. 

It is also possible to change the direction of an effect by tapping the button Direction Forward. To toggle between the directions, tap the button accordingly. 

- **Low Value:**\
  Sets the lowest point an effect reaches.
- **High Value:**\
  Sets the highest point an effect reaches. 

To set the low and the high values:

1. Tap the corresponding column.
2. The calculator opens.

![](/img/grandma2/popup_calculator_low-values_effects_v3-3-3f8fa7.png)

_Calculator – low values_

4. Set the value or tap a preset on the right of the calculator and then tap Please. 
5. The value is now set. 

**Hint:**\
It is also possible to set a range of values in **Low Value** and **High Value**.\
1\. Type in the calculator the value starting the range.\
2\. Tap Thru.\
3\. Then type the second value ending the range.

- **Phase:**\
  Displays the time setting that single fixtures use within an effect. \
  Phase is distributed among the number of fixtures. 

To set the phase:

1. Tap the corresponding column.
2. The calculator **Edit EffectLine Phase** opens.

![](/img/grandma2/popup_calculator_phase_effect_v3-3-992592.png)

_Pop-up – phase_

4. Set the degrees in the numeric pad or tap the buttons on the right of the calculator.
5. The phase is now applied. 

- **Width:**\
  Sets the width of an effect.

**Important:**\
Width is not applied with the form Chase. 

**Example:**

If you set the width of the form Pwm to 20 %, this percentage is displayed as the high value and the residual 80 % display the low value.

To set the width:

1. Tap the corresponding column.
2. []()The calculator opens.

![](/img/grandma2/popup_calculator_edit-width_effects_v3-3-0f57eb.png)

_Pop-up – edit width_

4. Set the value and tap Please.
5. The value set is now applied to the effect.

- **Attack:**\
  Appears quickly and outfades the values.

[]()To set the attack:

1. Tap the corresponding column.
2. The [same calculator](#width_calculator) as in editing the width opens.
3. Set the value and tap Please. 
4. The value is now applied to the effect.

- **Decay:**\
  Appears quickly and infades the values. 

Set the decay in the same manner as the [attack](#set_attack). 

Both, Attack and Decay display fade in and fade out times. 

**Important:**\
It is possible to apply **Attack** and **Decay** for the forms Random, Pwm and Chaser.

- **Groups:**\
  Phases are divided corresponding the number of groups. 

To set the number of groups:

1. Tap the corresponding column.\
   -or-\
   Tap 0 Groups at the bottom of the effect editor. 
2. []()The calculator opens.

![](/img/grandma2/popup_calculator_edit-groups_effects_v3-3-4c5d22.png)

_Pop-up – edit groups_

3. []()Set the number of groups and tap Please.
4. The number set is applied to the effect.

- **Blocks:**\
  Blocks collaborate with Phase. Fixtures next to each other execute the same phase. 

To set the number of blocks:

1. Tap the corresponding column.\
   -or-\
   Tap 0 Blocks at the bottom of the effect editor. 
2. The same calculator as in **[Groups](#groups_calculator)** opens. 
3. To proceed see numbers [3 and 4](#groups) in **Groups**. 

- **Wings:**\
  The Phase is applied starting outwards and moving inwards. 

To set the number of wings:

1. Tap the corresponding column.\
   -or-\
   Tap O Wings at the bottom of the effect editor.
2. To proceed see numbers [3 and 4](#groups) in **Groups**. 

**Important:**\
There is an exception to the cycle of wings. In Pan effects which consist of 2 wings, one of the wings is inverted. Hence, fixtures run towards each other. 

- **Single Shot:**\
  Displays one execution of effects.

To set a single execution of an effect:

1. Tap the corresponding column.
2. The cell now displays **Yes** and the button Single Shot is enabled (highlighted in yellow).\
   -or-\
   To disable the single execution, tap the button Single Shot at the bottom of the effect editor.
3. To disable the single execution, tap and hold the cell displaying **Yes** or tap the button Single Shot. 

---

## Buttons in the Effect Editor

This paragraph deals with buttons contained in the effect editor and their corresponding functions:

1. Add an new attribute to an effect, tap New in the column **QTY** and then tap Add.\
   -or-\
   Tap Add in the lower left corner of the effect editor and the pop-up **Select Effect Attribute** opens.

![](/img/grandma2/popup_select-effect-attributes_v3-3-4a6e4f.png)

_Pop-up – select effect attribute_

2. Select the attribute you would like to add to the effect line. 
3. Then, tap Confirm.\
   A new attribute is now applied to the effect line.
4. To delete effect lines, tap Delete.
5. Display all fixtures that are assigned to an effect line.\
   To do so, tap Show Selection.\
    If fixtures are selected, this button is enabled. If it is a template effect, it is grayed out.
6. To randomly rearrange the execution of an effect, tap Shuffle Selection.\
   The succession of the effect changes every time you tap the button.\
   This button is enabled if fixtures were selected in the effect.
7. To take over the current MAtricks settings into an effect line, tap Take MAtricks.
8. Then, select the display of the values.\
   To display the the values for relative values in the effect line, tap Val. Readout Low/High to toggle it to Val. Readout Center/Size.\
   To set the readout of values automatically so it adjust to the values, tap to toggle to Val. Readout Auto.\
   Relative effects are then automatically readout as Center/Size and absolute effects as high and low values.
9. To remove effects that deviate from the majority of the effects in an effect line, tap Remove Individuals.

For more information on the keyword see [RemoveIndividuals](/grandma2/key_keyword_removeindividuals/).

### []()Example:

1. Select 10 fixtures in the fixture sheet.
2. Apply the effect cosine to 8 of the fixtures. 
3. Then apply the effect sinus to the residual fixtures.

If you create two different effects in the programmer and store them into the effect pool, they are displayed in a dusky pink in the effect editor.

![](/img/grandma2/popup_effect-editor_remove-individuals_v3-3-6c89aa.png)

_Effect editor displaying individual values_

If you tap Remove Individuals, a warning appears.

![](/img/grandma2/popup_warning-remove-individuals_effects_v3-3-bbb35d.png)

_Warning pop-up – remove individuals_

To close the pop-up, tap Cancel or ![](/img/grandma2/icon_close_small_v3-2-1c8fff.png) in the upper right corner of the pop-up. 

To remove the individual settings, tap Ok. 

**Important:**\
Removing the individual settings modifies the effect.

10. Label the effect:\
    -Tap Label on the right of the editor.\
    -The calculator opens.\
    -Type the name and press Please.\
    -The effect is now labeled. 
11. Edit the effect line:\
    -Select an effect line in the effect editor.\
    -Tap Edit Effect Line.\
    -The **Effect Line Editor** opens.

![](/img/grandma2/popup_effect-line-editor_v3-3-e884aa.png)

_Pop-up – effect line editor_

**Hint:**\
It is also possible to select and deselect the attributes on the right of the effect line editor, right below the ![](/img/grandma2/icon_close_small_v3-2-1c8fff.png). 

- To deselect the effect line, tap the button.
- To select it, tap the button once again.

**Form:**\
Displays the graphic representation of the form in an effect. 

**Attack and Decay:**\
Modifies the form of the effect with the help of faders. 

- To modify the form of the effect, tap and move the faders in the columns **Attack** or **Decay** accordingly. 

The faders on the right of **Form**, **Attack** and **Decay** represent the values of **Low**, **High**, **Speed**, **Phase** and **Width**. 

- To set the values, tap and move the faders in the corresponding columns accordingly.

It is also possible to set the values via a calculator:

1. Tap a heading, for example **Low**.
2. The calculator opens. 
3. Type the value and tap Please. 
4. The values have been set via the calculator.

**Align:**\
Sets the range of a value. 

1. To define the range of a value, tap Align below the corresponding fader. 
2. The fader divides into two.
3. Set the range by moving the faders that were divided. 
4. To select a preset, tap Align once more. 
5. The button is now toggled to Preset. For more information on effects that use presets see [Create an effect that uses presets](/grandma2/key_effects_effect_using_presets/#effect_preset). 
6. Tap Preset to toggle the button back to Align. 

To close the effect line editor, tap ![](/img/grandma2/icon_close_small_v3-2-1c8fff.png) in the upper right corner. 

##
