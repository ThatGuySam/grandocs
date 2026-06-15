---
title: "14 - Phasers"
description: "We often desire to have our fixtures move around and possibly change colors or any combination of values changing dynamically. This is often achieved using some"
product: grandma3
version: "2.3"
lang: en
sourceUrl: "https://help.malighting.com/grandMA3/2.3/HTML/qsg_phasers.html"
scrapedAt: "2026-06-15T18:25:41.062Z"
pagefind: false
---
We often desire to have our fixtures move around and possibly change colors or any combination of values changing dynamically. This is often achieved using some kind of effect engine.

The effect engine in grandMA3 is called **Phaser**.

Phasers can be complex, and we are not going into a lot of details, but we are going to look at the basics of Phasers.

A phaser uses **Steps**. The cues and presets we have stored until now have one step. If we do not specify anything else, we store the values in step 1. A step contains a set of values.

Normally, you would need two or more steps to have a Phaser. Each step contains a set of values. We sometimes refer to objects with a Phaser as "multi-step" objects. Phasers can be stored just like cues and presets.

The Phaser plays each step one at a time and loops through the steps during playback.

A **Speed** value defines how fast this loop runs.

If all the fixtures are doing the same steps simultaneously, then we say they have the same **Phase** value. But often, we want to spread the fixtures out so they are in different places in the loop. This is done by giving the fixtures different phase values. Do not confuse the **Phase** value with the concept of **Phasers**.

---

## Create a Dimmer Phaser

To try some of these concepts, let's create a simple dimmer chaser that fades between two values with the Even Blinders.

Clear the programmer.

Select Group 4.

Give them an active dimmer value of 0%.

Notice this small area on the encoder toolbar:

![](/img/grandma3/2-3/qsg_14_step-bar_step-1_v2-3-ba7f40.png)

It is called the "Step Bar". It currently says "1". This shows us that we are working with values for step 1. Everything we have done so far in all the previous chapters has happened in step one.

We need to add another step with a new value.

Click the right-pointing arrow in the step bar.

Now it should say "2/2".

![](/img/grandma3/2-3/qsg_14_step-bar_step-2_v2-3-2e77a1.png)

Since we have not given the fixtures any value yet, we still only have 1 step, but we have selected step 2 and are ready to add some values.

Give the fixtures 100%.

Now, the fixtures are looping between the two steps in the output.

Have a look at the fixture sheet. You can probably not see the value changes because we are looking at a layer called "Absolute". This shows you the values you have requested in the programmer. We are currently looking at the values from step 2.

Different elements, such as a phaser, can affect the output. We can change the fixture sheet to look at the actual output.

We must turn On the **Layer toolbar** in the Fixture sheet if it is not currently visible.

Click the MA logo in the upper right corner of the sheet window to open the settings for the fixture sheet.

Toggle the setting called "Layer Toolbar" On (yellow text).

Close the settings by clicking the X in the upper right corner of the settings pop-up.

Now, a layer toolbar is at the bottom of the fixture sheet.

The layer toolbar can be used to select different layers. We are not going into details about the layer toolbar. But if you click Output, you can see that the values of the fixtures are dynamically changing the output.

![](/img/grandma3/2-3/qsg_14_fixture-sheet-layer-toolbar_v2-3-0de20e.png)

There is a version of the Layer Toolbar included in the Encoder Toolbar:

![](/img/grandma3/2-3/qsg_14_layer-toolbar_v2-1-81f3ae.png)

The layers are organized into three different groupings. The first group (Values and Timings) is currently shown. The two other groups are layers relevant to Phasers.

Phaser layers are marked with a purple bar at the top. The same colored indicator is also displayed in the fixture sheet on the values that a Phaser affects.

The layer toolbar in the encoder bar defines what "layer" the encoders are controlling. The layer toolbar in the fixture sheet defines what layer we are looking at. 

Click Phaser Overall and then Speed in the layer toolbar in the encoder toolbar.

Now, the first encoder controls the speed. The default readout for the speed is BPM - Beats Per Minute. Each beat is a single step. So, if we had a Phaser with 60 steps running at 60 BPM, it would take one minute to run through all the steps.

The speed encoder is currently empty. This means a speed is not defined, and the Phaser currently uses the default value (60 BPM).

The fixture sheet shows that the blinders are currently moving together. We can change this by giving them different values in the **Phase** layer.

Click Phase in the encoder toolbar. Then, click or short-press the encoder to open the calculator.

In the "Specials" section, click 0 thru 360.

Now, the fixtures are spread out equally over the entire loop.

You can see this by selecting the "Phase" layer in the fixture sheet.

If you cannot see the 'Phase' button, you can scroll the layer toolbar in the fixture sheet by clicking and holding both the left and right mouse buttons while moving the bar to the side. On the console, you must touch the layer bar with two fingers and scroll sideways.

![](/img/grandma3/2-3/qsg_14_phase-layer_v2-3-3f37f8.png)

Notice that the values assigned are not actually from 0 to 360. This is because the phase value is defined as a degree on a circle.

Imagine all the steps looping as a circle. On a circle, the values of 0 degrees and 360 degrees are the same location. So if the console literally did 0 to 360, then the first and last fixture would do the same.

The phase values we have now look like this on a circle:

![](/img/grandma3/2-3/qsg_14_phase_destribution_v1-8-2b536a.png)

## Store and Use the Phaser

Store this in a new All Preset in preset pool 22 on the first preset.

![](/img/grandma3/2-3/qsg_14_phaser-preset_v2-3-b5387e.png)

Click the preset to have the reference to it active in your programmer.

Press/Click Store and then click executor 103.

Now we get a new pop-up:

![](/img/grandma3/2-3/qsg_14_store-popup_v2-3-18a64f.png)

We want to store the Phaser as cue number 2. We could have been precise with our store command, but then you would not have seen this pop-up.

It asks this question because we can store the values in the existing cue, or we can create a second cue. The default store settings have an option called "If not empty". The default action when storing is set to "Ask". This pop-up is the question.

Click Create second cue.

Now, you can use the "Go+" button on executor 203 to toggle between the two cues.

## Create Second Phaser

Here is a little more explanation about the controls for how a value changes from one step to another.

Two Phaser (step) layers are called **Accel** (Acceleration) and **Decel** (Deceleration). These control if there is a curve to the fade to and from a step.

The **Transition** layer defines how much of the available time between different steps should be used on the value transition.

These three sets of values define how the value gets from one step to the next.

The default values give us a linear fade using all of the available time.

 

We will make a third cue with a similar phaser but where the values snap from one step to the other instead of fading between the values.

Turn off the executor if it is active (Off and then executor 103) and clear the programmer.

Many of the values we stored in the All Preset can be reused. Click it twice to call the phaser into the programmer.

We did nothing to make the blinders fade from one step to the other. The default values make this happen.

 

We could achieve our goal by using the phaser layers as we did with the phase value, but let us look at the **Phaser Editor**.

The encoder bar has a button that opens a temporary version of the Phaser Editor, but it can also be created as a window.

Click Phaser in the encoder bar.

![](/img/grandma3/2-3/qsg_14_phaser-editor_2d-linear_v2-3-ab9c82.png)

This is the Phaser Editor. It is outside the scope of this quick start guide to explain all the elements and options in this editor. There is a link to the phaser topics in the recap if you want to learn all the details about the editor.

The big green "V" in the editor is the path between the two steps for the dimmer values. Step 1 is at the bottom of the "V" (0%), and step 2 is at the top left. You can see the numbers at the bottom blue line. The fixtures' different dimmer values are the yellow markers moving along the green line.

The square on the left side (with the white frame) can be used when creating position phasers. It represents pan and tilt. For now, we are going to concentrate on the dimmer.

We want to change the shape of the green line. Currently, the values are fading in a straight line between the two values.

A button in the tools on the left-hand side can help us with this.

Click the **Select Form** button.

![](/img/grandma3/2-3/qsg_14_phaser-editor_select-form_v1-8-ff5b48.png)

This gives us a new toolset on the right-hand side:

![](/img/grandma3/2-3/qsg_14_phaser-editor_form-tools_v1-8-bb9bb2.png)

Click the top button.

Now, the form has changed to this:

![](/img/grandma3/2-3/qsg_14_phaser-editor_square-form_v2-1-c2d2cb.png)

Here, we can see that the green line is straight vertical. This means that the value jumps or snaps to the new value. We have actually turned the **Transition** value to 0% for both steps.

The transition values can differ for each step to make very creative Phasers.

Close the Phaser Editor by clicking the ![](/img/grandma3/2-3/icon_cross_v0-1_1-12bd41.png) in the upper right corner.

## Store and Use the Second Phaser

Store this as a new All Preset in the 22 preset pool. You should label the two presets with useful names. I have called them "Even Blind Soft" and "Even Blind Snap".

![](/img/grandma3/2-3/qsg_14_phaser-editor_preset-pool_v2-3-86ba63.png)

Click the second preset so it is active in your programmer, and press/click Store and then executor 103.

This time, it does not ask us what we want to do. When there are at least two cues in a sequence, and we just store in the sequence, the system assumes we want to store a new cue using the next whole number as the cue number. If we want something else, we need to specify it.

Great, clear the programmer and try out the three different cues on the executor. The best way to experience it is in the 3D window.

## Modify the Executor

There are some things we should adjust to make this better. Right now, the sequence resets when we turn the master all the way down. It might be better if it stayed at the last cue we selected. And maybe we would like to be able to control the speed dynamically. Let us make these two changes.

We need to open the **Assign Menu**. Click Assign and then one of the executor buttons for the Even Blinder sequence.

We need to be on the **Handle** page in the menu. If it is not already active, click Handle on the left side.

We want to expand the executor even further upwards. Click and move one of the upper corners up to include the next row above.

The key assignment might have changed (because we changed the size). Again, we want the lower executor button to be "Flash". We want the key for the 300 button to be "Speed1" and the Encoder for the 300 knob to be "Speed". The handle assignment should look like this:

![](/img/grandma3/2-3/qsg_14_executor-handle_v2-3-ddd05f.png)

Now, we need to adjust the executor's settings. Click Edit Setting on the left side to open the settings for the sequence.

There are many different settings. The one we want to change is "Restart Mode", which is near the middle of the menu.

This setting has three options. Click the button until it says "Current Cue".

![](/img/grandma3/2-3/qsg_14_restart-mode_v2-3-c0c941.png)

This means the sequence will restart on the cue where we left it.

Finally, close the **Assign Menu**.

Play around with the new speed knob and the fader in combination with the three cues. The button below the rotating knob resets the speed back to 60 BPM. The knobs on the onPC can be turned like the encoders. Be aware that this is the speed of the entire sequence, not the Phasers - although since the Phasers are in the sequence, they will be affected by the sequence speed.

## Create Phasers for the Odd Blinders

Now, repeat everything we just did, but this time for the Odd Blinders, and set up their executor the same way.

Store the Phasers in new All Presets. When you have done all that, continue to the next chapter.

---

## Recap

In this chapter, we looked at simple dimmer Phasers. There is an entire section in the manual called [Phaser](/grandma3/2-3/phaser/) - this gives you all the details about Phaser creation, and there are some examples of more advanced Phasers. You can use this show to try the examples.

We also looked at the layer toolbar in the fixture sheet. This has a little bit more description - [Fixture sheet layer toolbar](/grandma3/2-3/ws_eb_encoder_toolbar/). We often keep the Auto layer selected in the fixture sheet unless we want to see something specific. This means it follows the selected layer in the encoder toolbar.

We also briefly touched the Store Settings. We will not talk more about them in this quick start guide. You can learn more about the Store Setting in the [Store Settings and Store Preferences](/grandma3/2-3/cue_store_settings_preferences/) topic.

In the [next chapter](/grandma3/2-3/qsg_multicue_sequence/), we are going to create a new sequence.
