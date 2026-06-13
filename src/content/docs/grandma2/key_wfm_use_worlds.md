---
title: "Use worlds when programming"
description: "Worlds are a great tool when programming."
product: grandma2
lang: en
sourceUrl: "https://help.malighting.com/grandMA2/en/help/key_wfm_use_worlds.html"
scrapedAt: "2026-06-12T21:28:18.010Z"
---
Worlds are a great tool when programming.

The point about the worlds is to apply a limitation to what fixtures and attributes you are affecting.

This can be very useful if you have a lot of different values in your programmer, but you only want to store some of the values. For instance if you want to store a color preset for some of your fixtures before storing all values in a cue.

Let us have a closer look at this example. Make sure you have a show with some different fixtures - you could load the "demo dimmer and more" show from the Demo shows.

Create a world for each of the different fixture types. Name the worlds: Spot, LED, Blinder, Par

This is the setup needed for all the following examples.

### Preset example

1. Make sure you are in the "Full" world.
2. Give your spots a dimmer value, a position value, and a color (do not use an existing color preset).
3. Give some of the other fixtures some colors and dimmer values.

This is our look on the stage that everyone is happy about. But you want to be a cool and organized programmer, so instead of just storing these values in the cue, you want to make color presets for the spots and use the preset in the cue.

4. Select your "Spots" world.

Notice that now you can only see your sports in the Fixture Sheet and in the Stage View. But a DMX Sheet will show you that you are still outputting all the other values as well.

5. Store a color preset.
6. If you do not use the "Keep activation" setting, then apply the preset, so you have preset link in your programmer.
7. Select the "Full" world

Now you are back to where you where. The output to the stage never changed! Entering a world do not change the output.

You can now store a cue that uses the color preset for the spots.

 

### Delete example

Using the same setup as mentioned above.

In the demo show there is a sequence called "Look". In this sequence there is something programmed for the Blinders.

The Look only contains one cue, but let us imagine that it was a bigger sequence and we wanted to remove the Blinders from this sequence.

1. Select the "Blinder" world
2. Delete the "Look" sequence - Del Sequ 3 Please
3. Confirm the deletion in the pop-up
4. Select the "Full" world

You did not actually delete the entire Sequence 3 ("Look"). You only deleted the fixtures and attributes that you could control. The Blinders are no longer in the "Look" sequence.

 

### Unwanted attributes example

Most of the time it is not desired to program fixture control channel information in a cue list. It is not fun when a fixture suddenly turns off the lamp or resets because it accidentally was programmed in the cues.

Worlds can be used to avoid this.

1. Select all your fixtures.
2. Make sure you have some values in your programmer for all attributes except the Control preset type.
3. Store a new world.
4. Select this world.

Now the Control Preset Type disappeared from the Preset Control Bar above your encoders. And you cannot accidentally get those attributes in your programmer and store it somewhere.

 

### Multi User example

In bigger shows it can be very useful and efficient to have multiple programmers working in the same show file. Often each programmer will have responsibility to program a smaller section of all the lights.

To avoid interfering with each other it is a good idea to create worlds with the sections of the rig for each programmer and then the programmers can comfortably work with their fixtures and not be disturbed by each other.

They still share the executors, so there is not a complete separation.

 

---

There are many other situations where worlds can help you work better.

There are two predefined macros called "World is Full" and "World is Selection". The first one selects world number one ("Full"). The second one creates a world based on your current selection (world number 999) and enters this world. This can be a very nice tool if you want to do something where a worlds would be nice and you do not have one that matches. Each time you use "World is Selection" then world number 999 is overwritten.

If you use a different default world then number one then you might want to edit the "World is Full" macro to select the world you use (remember macros are shared among all Users).

 

Remember that the world you select only affects your programmer and what is displayed on some windows. Executors and already programmed elements are not affected by the worlds you have selected.

But you can assign a world to an executor or a sequence. Read more about that in the [Apply worlds or filters to executors and sequences topic](/grandma2/key_wfm_apply_to_exec_seq/).
