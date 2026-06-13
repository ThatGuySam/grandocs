---
title: "Work with chasers"
description: "Chasers are cue lists that run in a special mode."
product: dot2
lang: en
sourceUrl: "https://help.malighting.com/dot2/en/help/key_ht_chasers.html"
scrapedAt: "2026-06-12T21:29:37.069Z"
---
Chasers are cue lists that run in a special mode. 

So you'll need a cue list with some cues. If you don't know how to make this please have a look at [How to work with cues](/dot2/key_ht_cues/).

## Setting the executor in Chaser mode

Once you got some cues on an executor, you can put it into chaser mode. This is done by first opening the cue view for the executor you want to change. Press the ![view](/img/dot2/view-5d8039.png) key and then one of the keys associated with the executor with the cue list you want to change. 

This opens the [Cues view](/dot2/key_viewitem_cue/). In the upper right corner of this view there's a Tool icon ![](/img/dot2/dot2_viewsandwindows_controlelements_titlebar05_1-0-900d9a.png) - tap it. This opens the [Settings of Executor](/dot2/key_window_settingsofexecutor/) window. The first setting is the "Is Chaser" setting. Tap the green area next to this until you don't have the stop sign but the checkmark.

Now you have changed the mode of the executor.

A cue list running as a chaser ignores the cues timings and triggers stored in the cue list. So the timing columns are grayed out when the Chaser mode is selected.

In the settings for the executor, you can also set the off time (or tap it in the cue view title bar). If you set this time, then this will be used for fading the chaser off if you use the Off key or [Off command](/dot2/key_keyword_off/).

The Off time also works as an **On time** for chasers. This means that it will fade the stored parameters in using the time you have set when you start the chaser.

## Changing the settings of the chaser

There are different settings that adjust how the chaser is running. These settings can be changed when we again look at the Cues on the executor. So if you close the Settings window by tapping the Esc button in the upper left corner, then you return to the Cues view - if you don't, then press the ![view](/img/dot2/view-5d8039.png) key and then one of the keys associated with the executor.

In the cues view you can now see a different bar at the bottom of the screen and your encoders have some different parameters.

This is the bar at the bottom of the Cues view:

![](/img/dot2/dot2_viewsandwindows_cuesview03_1-0-4d3fd6.png)

And this is the new parameters on the encoders:

![](/img/dot2/dot2_viewsandwindows_cuesview04_1-0-697a2b.png)

With the two center encoders you can control the Fade percent between the chaser steps (cues) and speed of the Chaser. The Fade is the time used to fade from one step to the next. The fade times stored in the cue list is ignored and the Fade is the one controlling if the values fade or snap (change instantly). The higher the number is, the more time is used to fade. It's expressed as a percent number. This is because it's expressed as a time available based on the speed of the chaser. The Speed is a number expressed in BPM (Beats Per Minute). This tells us the number of steps (cues) it runs per minute.

The chaser bar at the bottom of the cues view allows us to control how the chaser is running. The two green areas at the top determines if the chaser is looping and the order it runs the steps. The left setting adjust the direction. Pressing the three white dots opens the menu. You have the following options:

- **Forward** - will run the steps from the one with the lowest number to the one with the highest.
- **Backward** - is run from the one with the highest number to the one with the lowest. 
- **Bounce** - will begins as a forward, then when reaching the highest number it will begin to run backwards. The result is a constant change of direction.
- **Random** - is choosing a random cues/step as the next one.

The right setting decide how the chaser loops. Pressing the three white dots gives you the following options:

- **Endless** - will have the chaser running until you stops it
- **Shoot-Off** - will run the chaser once and then turn off. If the running order is random, then it will run the amount of steps/cues, but not necessarily all the different cues/step! 
- **Shoot-On** - is the same as Shoot-Off but it will pause after the final step/cue.

The bottom half of this gives you controls to play the chaser (for any of the shoot modes) or pause it. There are also three buttons that changes the speed. You can half the speed, double it or reset it to what the encoder below is originally set to.

You can dynamically change the speed of the chaser. Press and hold the Speed key while you tap one of the keys associated with the chaser. This adjust the speed to you tapping. This is a function called "Learn". This can be assigned to one of the keys associated with the chaser. Press and hold the ![ma](/img/dot2/ma_1-85eed0.png) key and then press the Label key (=assign command), release the ![ma](/img/dot2/ma_1-85eed0.png) key and press Speed (notice that your command line says

Assign Learn

Now press the key you want to be Learn. This can also be done using the [Change Function of Executor Buttons window](/dot2/key_window_changefunctionsofexecutor/) or in the [Settings of Executor](/dot2/key_window_settingsofexecutor/) window.

## Running the chaser

You can start the chaser by moving the fader from 0% and above 0%, this will run the chaser. You can also use a [Go](/dot2/key_keyword_go/) or [On](/dot2/key_keyword_on/) command to run it in the direction you have set. If you use the [GoBack](/dot2/key_keyword_goback/) command then the chaser runs, but in the opposite direction. The [Toggle](/dot2/key_keyword_toggle/) command will toggle the current running status of the chaser. [Off](/dot2/key_keyword_off/) command will stop the chaser. The [Flash](/dot2/key_keyword_flash/) command will run the Chaser as long as you keep the key pressed.

You can assign all these commands to keys associated with the chaser or you can use them temporary by pressing the function key on the dot2 and then one of the keys associated with the chaser.
