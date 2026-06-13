---
title: "Phasers"
description: "Use phasers to create dynamic output from a single preset or cue."
product: grandma3
version: "2.4"
lang: en
sourceUrl: "https://help.malighting.com/grandMA3/2.4/HTML/phaser.html"
scrapedAt: "2026-06-12T21:24:57.256Z"
---
Use phasers to create dynamic output from a single preset or cue.

Phasers change the output for attributes using a set of information in two or more steps. A normal, static cue or preset only contains one step of information. Adding additional steps creates a phaser.

### Example

A phaser has two steps with an absolute dimmer value of 100% in step 1 and an absolute dimmer value of 0% in step 2. With all other phaser layers at their default values, the resulting output is a smooth, repeating fade of the dimmer output from 100% to 0% and back to 100%.

---

## Layers

### Value Layers

Each phaser step can include attribute value information. These values can be an absolute value (for instance, a dimmer value of 50%) or a relative value (for instance, a dimmer value of -20%). Steps can contain both absolute and relative values simultaneously.

|                                                  |                                                                                                                                                                                                                |
| ------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ![](/img/grandma3/2-4/important_gray-89eed8.png) | **Important:**                                                                                                                                                                                                 |
|                                                  | The grandMA3 software handles storage, editing, and playback of absolute values and relative values separately. This separation allows the user to combine different absolute and relative values as desired.  |

### Step Layers

Each phaser step also includes additional layers, which define the overall width of the step, the percentage of the step dedicated to transitioning to the new value, and the amount of acceleration and deceleration used when changing to the new value.

- **Width**

![](/img/grandma3/2-4/img_phaser-layer_width_v1-9-bd712f.png)

Phaser Editor showing steps with various widths.

The Width layer defines the total amount of time from the beginning of a step to the beginning of the next step. Width is shown as a percentage of one beat as defined by the Speed layer. The image above shows the first step with 100% width, so the change in value takes place over the time of one beat. The second step has a width of 0%, so the values change instantaneously and the next step begins immediately. The third step has a width of 200%, so the values change over the time of two beats.

- **Transition**

![](/img/grandma3/2-4/img_phaser-layer_transition_v1-9-42359f.png)

Phaser Editor showing steps with various transitions.

The Transition layer defines how much of the step width is used to adjust values to their new levels. The transition of a step is shown as a percentage of the width of that step. The image above shows the first step with a transition of 100%, so the values change during the entire time of the step. The second step has a transition of 10%, so the values change during the first 10% of the width of the step, then remain at the new level until the end of the step. The third step has a transition of 90%, so the values change during the first 90% of the width of the step, then remain at the new level until the end of the step.

- **Accel**

![](/img/grandma3/2-4/img_phaser-layer_acceleration_v1-9-c2e417.png)

Phaser Editor showing steps with various acceleration values.

The **Accel** layer defines how abruptly or gently the attributes begin to change from the value defined by the current step toward the value of the next step (acceleration). In the image above, the first step shows an acceleration of -100%, resulting in a smooth start to the transition away from the value at the end of the step. The second step shows an acceleration of 200%, resulting in an abrupt start to the transition away from the value at the end of the step.

In this example, Spline is set to **Proportional** in the acceleration calculator. This means that the acceleration value is relative and proportional to the difference between the values of two consecutive steps. As a result, the shape of the curve stays similar, even if the step values are changed. When Spline is set to **Free**, the acceleration or deceleration value is absolute and not influenced by the step values.

Whether the spline is set to **Proportional** or **Free** is indicated by **P** or **F** in front of the acceleration value in the fixture sheet.

- **Decel**

![](/img/grandma3/2-4/img_phaser-layer_deceleration_v1-9-16fc26.png)

Phaser Editor showing steps with various deceleration values.

The Decel layer defines how abruptly or gently the attributes reach the value defined by the current step (deceleration). In the image above, the second step shows a deceleration of -100%, resulting in a smooth end to the transition into the value for the step. The third step shows a deceleration of 200%, resulting in an abrupt end to the transition into the value for the step.

In this example, Spline is set to **Proportional** in the acceleration calculator. This means that the acceleration value is relative and proportional to the difference between the values of two consecutive steps. As a result, the shape of the curve stays similar, even if the step values are changed. When Spline is set to **Free**, the acceleration or deceleration value is absolute and not influenced by the step values.

Whether the spline is set to **Proportional** or **Free** is indicated by **P** or **F** in front of the acceleration value in the fixture sheet.

|                                            |                                                                                                                                                                 |
| ------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ![](/img/grandma3/2-4/tip_gray-639af3.png) | **Hint:**                                                                                                                                                       |
|                                            | For linear transitions, keep Accel and Decel values at 0%. For smooth transitions, closely resembling sinus or cosinus waves, Accel and Decel values of -100%.  |

### Phaser Layers

Each phaser additionally includes layers, which affect all steps of the phaser. Each attribute of each fixture can have its own speed, speed master, phase, and measure value in a phaser, but these values will be the same for all steps in a phaser.

- **Speed**

Speed defines the overall rate at which the console plays back the steps of a phaser. The grandMA3 displays speed in units of either BPM (beats per minute), Hz (beats per second), or Seconds (seconds per beat). 

- **SpeedMaster**

SpeedMaster defines per attribute to which master of the type speed the phaser adapts its speed to. Phasers speeds can be assigned to executors by using speed masters. For more information, see [SpeedMaster keyword](/grandma3/2-4/keyword_speedmaster/).

- **Phase**

![](/img/grandma3/2-4/img_phaser-layer_phase_v1-8-e5ba48.png)

Phaser editor showing a range of phase offsets.

Phase defines the timing offset of each fixture's attributes within a phaser. Phase is displayed in degrees (º). The image above shows a selection of fixtures in a circle phaser with phase offsets ranging from 0 to 90 degrees. The Phaser Editor displays this offset in both the 2D and 1D layouts.

- **Measure**

The optional Measure layer defines the number of beats in the repeating phaser loop. In combination with the speed layer it defines the length of time of a phaser. For example, a phaser with a measure of 4 beats and a speed of 120 BPM will repeat every 2 seconds.

Knocking in the measure layer without specifying a value will take the number of steps of the running phaser as the value while keeping the same speed. For example, if a phaser has four steps and you knock in the measure layer, the measure will be 4 beats.

All phaser layers, as well as a step selection tool, appear in the [Encoder Toolbar](/grandma3/2-4/ws_eb_encoder_toolbar/) any time attributes are mapped to the encoders. Phaser layers are indicated by a dark purple color. Phaser layers behave just like other attribute layers when activating, deactivating, storing, and clearing. For more information about attribute encoders and layers see [Encoder Toolbar](/grandma3/2-4/ws_eb_encoder_toolbar/). The phaser editor provides a graphical view and powerful manipulation of phaser layer information.

---

## Steps

The grandMA3 offers multiple tools and methods for creating, selecting, and deleting phaser steps.

One intuitive method to quickly create steps based on presets involves the Step key. To create steps using this method, press and hold the Step key, then tap a preset for each desired step.

### Example

To create a 3-step color phaser from white to red to blue:

1. Select the desired fixtures.
2. Press and hold the Step key.
3. Tap the white color preset.
4. Tap the red color preset.
5. Tap the blue color preset.
6. Release the Step key.

When using this method, the software will only create the next step when tapping a new preset, which contains any of the same attributes as the current step. This behavior allows each step to reference multiple presets as long as those presets apply to different attributes.

### Example

To create a 2-step phaser, where each step contains both color and position presets:

1. Select the desired fixtures.
2. Press and hold the Step key.
3. Tap the desired color preset for step 1.
4. Tap the desired position preset for step 1. This preset is added to step 1.
5. Tap the desired color preset for step 2. Step 2 is automatically created.
6. Tap the desired position preset for step 2. This preset is added to step 2.
7. Release the Step key.

The Step key can also quickly change which preset is referenced by a step.

### Example

Start with the 3-step color example above, but afterward, change the blue step to yellow:

1. Follow all directions in the 3-step color example above.
2. Press and release Step.
3. Press and release 3.
4. Tap the yellow color preset.

Delete specific steps from the programmer using standard syntax with the Delete keyword. For example, to delete step 3, type:

|                                                                    |                                   |
| ------------------------------------------------------------------ | --------------------------------- |
| ![](/img/grandma3/2-4/icon_commandline-input_logo_v2-0-a59235.png) | User name\[Fixture]>Delete Step 3 |

Alternatively, delete specific steps from the programmer by selecting the steps in the Step Bar and deleting the [programmer](/grandma3/2-4/keyword_programmer/).

|                                                                    |                                       |
| ------------------------------------------------------------------ | ------------------------------------- |
| ![](/img/grandma3/2-4/icon_commandline-input_logo_v2-0-a59235.png) | User name\[Fixture]>Delete Programmer |

An easy way to access this command (especially on grandMA3 onPC) is to tap Delete Steps in the [At Filter Pop-Up](/grandma3/2-4/ws_ui_control_bar/#h2__206276703) in the control bar.

---

## Stomp

The stomp function stops a phaser, running either in the programmer or from a playback, and resolves the stomped attributes to a single, static step. The console calls and activates the last static output value for each stomped attribute into step 1 of the programmer. All other steps of the stomped phaser are discarded.

With the programmer in step 1, calling a static preset onto any attributes currently running in a phaser automatically uses the stomp function to stop the phaser and output only the static look from the preset. Phasers follow this behavior whether the static preset is called directly in the programmer or as part of a recipe.

---

## Sync

The Sync option ensures that phasers recall with predictable timing and phase offsets.

When calling phasers into the programmer, the Sync option is available in the [Encoder Bar](/grandma3/2-4/ws_encoder_bar/).

When recalling phasers stored in cues, the Sync option is available as a setting for each cue part in the Sequence Sheet. For more information about settings in cues and cue parts, see the [Look at Cues and Sequences](/grandma3/2-4/cue_sequence_sheet/) topic.

Subtopics

- [Phaser Editor](/grandma3/2-4/phaser_editor/)
- [Create a Sinus Dimmer Phaser](/grandma3/2-4/phaser_create_dimmer/)
- [Create a Circle Phaser](/grandma3/2-4/phaser_create_circle/)
- [Create a Circle Phaser Around a Position Preset](/grandma3/2-4/phaser_create_circle_preset/)
- [Create Color Rainbow Phaser](/grandma3/2-4/phaser_create_rainbow/)
