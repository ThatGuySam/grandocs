---
title: "Create a Sinus Dimmer Phaser"
description: "This topic details a couple of examples of how to create a sinus dimmer phaser using keys and buttons as well as the phaser editor and encoder bar. There are ma"
product: grandma3
version: "2.4"
lang: en
sourceUrl: "https://help.malighting.com/grandMA3/2.4/HTML/phaser_create_dimmer.html"
scrapedAt: "2026-06-12T21:24:57.376Z"
---
This topic details a couple of examples of how to create a sinus dimmer phaser using keys and buttons as well as the phaser editor and encoder bar. There are many ways to reach the same goal in grandMA3. Many of the steps in the examples below are interchangeable while producing identical results. These examples use a combination of keys and the calculator interface. If you are working with the onPC software, it might be easier to type commands into the command line rather than use the on-screen keys.

It is recommended to read the [Phasers topic](/grandma3/2-4/phaser/) and the [Phaser Editor topic](/grandma3/2-4/phaser_editor/) before this topic.

**Requirements:**

- Have a show with some lights patched.
- An open [Phaser Editor](/grandma3/2-4/phaser_editor/) window with the Step Bar enabled is recommended, though it is also possible to use the temporary Phaser Editor.
- Arranging the fixtures in the 3D window can be useful, but it is not a requirement.
- As it is highly recommended to use presets while programming, an open Dimmer preset pool is recommended with presets for dimmer values of 100% and 0%.

---

## Quickly Create Steps and Apply Adjustments with the Phaser Editor

1. Select the desired fixtures. For example: Fixture Thru Please
2. Choose a dimmer preset for step one: Press and hold Step and tap the preset with the 0% dimmer value.
3. Choose a dimmer preset for step two: While still holding Step, tap the preset with the 100% dimmer value.

This is the base for the phaser. There are now two steps with a dimmer preset of 0% in the first step and a preset of 100% in the second step. All of the fixtures are changing together from step one to two with a linear fade (not yet using a sine curve). The Sheet view mode of the **Phaser Editor** shows:

![](/img/grandma3/2-4/img_phaser_sine-dim_01-linear_v1-7-5fafca.png)

Linear Dimmer Phaser with No Phase Distribution

Adjust the curve of both steps using tools in the Phaser Editor:

4. Select all steps by tapping the ![](/img/grandma3/2-4/icon_step-select-all_15_v1-7-b66932.png) button at the right end of the Step Bar or at the bottom of the left-hand tool bar.
5. Tap to select the Select Form tool (![](/img/grandma3/2-4/icon_phaser_form-saw_15_v1-7-462bd1.png)) in the left-hand tool bar.
6. In the right-hand tool bar, tap the sine wave button (![](/img/grandma3/2-4/icon_phaser_form-sin_15_v1-7-007a2e.png)) to select the sine wave form.

![](/img/grandma3/2-4/img_phaser_sine-dim_02-sine_v1-7-07ac98.png)

Sinus Dimmer Phaser with No Phase Distribution

Adjust the phase of all fixtures using tools in the Phaser Editor:

7. Tap to select the Edit Phase (![](/img/grandma3/2-4/icon_phaser_angle_15_v1-7-763e3a.png)) tool in the left-hand tool bar.
8. In the right-hand tool bar, tap the 360 button to evenly distribute the selected fixtures over the wave form.

![](/img/grandma3/2-4/img_phaser_sine-dim_03-phased_v1-7-222e09.png)

Sinus Dimmer Phaser with Full Phase Distribution

Store the phaser into a preset or a cue. 

[Vimeo video](https://player.vimeo.com/video/941921800?title=0\&byline=0\&portrait=0\&color=ffeb0f)

---

## Alternate Methods to Create a Sinus Dimmer Phaser

Follow these steps to create a sinus dimmer phaser:

1. Select the desired fixtures. For example: Fixture Thru Please.
2. Set them at a dimmer value of 0: At 0 Please.
3. Create step 2 and select it: MA + Next (Next Step).
4. Set the fixtures at full: Full.

This is the base for the phaser. There are now two steps with a dimmer value of 0 in the first step and a value of 100 in the second step. All the fixtures are changing together from step one to two in a linear direction and do not fade using a sine curve. It looks like this in the **Phaser Editor**:

![](/img/grandma3/2-4/img_phaser_sine-dim_small_01-linear_v1-7-e07394.png)

The curve is corrected by adjusting the acceleration and deceleration in both steps.

5. Select both steps: MA + Set (Step Toggle).

6. The steps need to have an accelerate value of -100. This is done using the [Encoder Toolbar](/grandma3/2-4/ws_eb_encoder_toolbar/).

   1. Tap Dimmer to make sure it is selected.
   2. Tap Accel to select the acceleration layer.
   3. Tap the left attribute encoder to open the calculator.
   4. Tap +/- 1 0 0 Please. This gives a known and precise value. If **Handles** are used then it might not be as precise as typing a value.

7. Do the same for the Decel layer.

Now the attribute accelerates out of and decelerates into each step. The curve now looks like this:

![](/img/grandma3/2-4/img_phaser_sine-dim_small_02-sine_v1-7-52b7e1.png)

8. The final thing to do is to spread out the fixtures using the phase value. This is also done from the encoder toolbar.

   1. Tap Phase to select the phase layer.
   2. Tap the left attribute encoder to open the calculator.
   3. Tap 0 Thru 3 6 0 Please.

Now the fixtures are spread out equally over the entire phase of the phaser loop.

![](/img/grandma3/2-4/img_phaser_sine-dim_small_03-phased_v1-7-3d9fc8.png)

This is a sinus phaser that can be stored in a cue or preset.

It is created using a specific selection of fixtures so remember to select the desired **Preset Mode** when [storing a preset](/grandma3/2-4/presets_create/).
