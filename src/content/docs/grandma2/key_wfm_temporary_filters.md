---
title: "Use temporary filters"
description: "Besides the filter pool with the defined or prepared filters, you can also use temporary filters."
product: grandma2
lang: en
sourceUrl: "https://help.malighting.com/grandMA2/en/help/key_wfm_temporary_filters.html"
scrapedAt: "2026-06-12T21:28:18.265Z"
---
Besides the filter pool with the defined or prepared filters, you can also use temporary filters.

They are used in the same actions as the filters from the filter pool.

The following text describes how to open a temporary filter pop-up. But you can also have the [Command Filter window](/grandma2/key_wfm_create_filters/#command_filter) on one of your screens and use this.

In the following text we are going to explore the temporary filters using the same examples as in the [Use Filters when programming topic](/grandma2/key_wfm_use_filter/). If you have not read that, it is a strong suggestion to do that first.

## Temporary Store Filter

You can access the temporary Store filter by pressing the Store key. Now you got the [Store Encoder Toolbar](/grandma2/key_cs_store_options_default/) visible at the bottom of screen 2. In this toolbar you will find a button called Store Filter. Tapping this will open a filter editor pop-up. It works just as explained in the [Create filters topic](/grandma2/key_wfm_create_filters/). There are two extra buttons on the right side of the pop-up. They are called "Reset Filter on Clear" and "Store Filter and Select".

**Reset Filter on Clear:**

Usually the filter will reset back to the selected filter when you do the (store) action, but if you want to keep the filter. then you can activate this button. Then it is only the Clear(All) command that will reset to the selected filter.

**Store Filter and Select:**

Tapping this button will store the current filter settings as the next free available filter and you are prompted for a name. Also be aware that this new filter will be the Selected one. Not just the Applied filter.

### Example of the temporary store filter

The following example is the same as the one used in the [Use filters when programming topic](/grandma2/key_wfm_use_filter/).

We are going to look at a practical situation where filters can help you work more efficient.

1. Use the "Demo Dimmer and more" demo show or a show with some fixtures.
2. Make sure the Selected filter is the "All" filter so nothing is filtered already.
3. Select a fixture and give it values on several attributes including Dimmer.

So now we imagine that this is the look we want in a cue - it is going to be cue number 2.

We do not want to use the move in black function but we want the fixture to already be pre-positioned when we run cue number 2. So we are going to store all data except the dimmer in cue number 1 and then the dimmer value in cue number 2.

4. Press Store and then the Store Filter button in the Encoder Toolbar.
5. Turn off the "Dim" attribute in the Store filter pop-up.
6. Press an empty executor button - creating a new cue 1 in a new sequence and executor.

Now you have stored all values except the dimmer in cue number 1. You still have the dimmer values active in your programmer, the rest is stored. The temporary filter is now gone and noting is filtered anymore.

7. Press Store and then the same executor button.
8. In the pop-up select Create Second Cue.

That was the second cue. Clear your programmer and try to run the cues.

---

## Temporary At Filter

The temporary At filter works just like the filter used as if you had it in a Filter pool.

Keeping the At key pressed for about 1 second will open the filter pop-up.

This pop-up also have the two extra buttons described in the temporary store filter above.

And at the bottom you will find three extra buttons. They are color transform buttons. They are used to select how to transform the color if the source and destination fixtures do not have the same color attributes.

**MixColor:**

This will use the MixColor system. Depending on your settings it will also set an Open value in any color wheels.

**Color Wheel:**

This will use the nearest color on the color wheels. Depending on your settings it will also set an Open value to the MixColor system.

**MixColor + Col Wheel:**

This will use both the MixColor and the Color Wheels to create the best result.

### Example

The following example is the same as the one used in the [Use filters when programming topic](/grandma2/key_wfm_use_filter/).

In this example we are going to grab only the color values from one fixture and apply it to another.

1. Use the "Demo Dimmer and more" demo show or a show with some fixtures and some filters.
2. Make sure the Selected filter is the "All" filter.
3. Select a fixture and give it values on several attributes including Dimmer, Position, and use the MixColor attributes to blend a new color.
4. Select a different fixture and give it another position and dimmer values.

Now we would like to grab the color values only from the first fixture. We do not want to grab the position and dimmer values from the fixture, only the color.

5. Press and hold the At key until the filter pop-up appears.
6. Tap the None button on the title bar so no attributes are selected.
7. Tap the Color preset type so it turns on. This will allow all color information to pass the filter.
8. Tap the first fixture on the screens (or use the keys - Fixture \[number] Please).

Now both fixtures have the same color values.

---

## Temporary filtering using the If key

While storing or using the At command you can include an encapsulated condition. The condition can be almost anything and can include many different elements.

The condition is encapsulated using the If key. You can keep the key pressed if you are making a complex condition or press it shortly if it is a more simple condition.

The encapsulation is between the [If command](/grandma2/key_keyword_if/) and the [EndIf command](/grandma2/key_keyword_endif/). EndIf is available as a command using the If key after you have typed the first If command. Sometimes the software will automatically add the EndIf command.

The condition is usually made by pressing different elements on the screens, but it can just as well be written commands. The condition can be positive or negative. For example: If you want to only have position values then you can simply tap the Position button in the Preset Control Bar. If you want everything except the position values, then you can press the - key and then the Position button to get the following command: If - PresetType "POSITION" EndIf in the command line.

 

### Examples

The two examples used above can also be achieved using the If key.

1. Use the "Demo Dimmer and more" demo show or a show with some fixtures.
2. Make sure the Selected filter is the "All" filter so nothing is filtered already.
3. Select a fixture and give it values on several attributes including Dimmer.

So now we imagine that this is the look we want in a cue - it is going to be cue number 2.

We do not want to use the move in black function but we want the fixture to already be pre-positioned when we run cue number 2. So we are going to store all data except the dimmer in cue number 1 and then the dimmer value in cue number 2.

4. Press Store.
5. Press If and then -. Now the filtering is active and we have already selected that we want to exclude something.
6. We want to exclude the dimmer so now you can tap the Dimmer button in the [Preset Control Bar](/grandma2/key_ws_preset_control_bar/).
7. Finish the temporary filter by pressing the If key again. Now the command line should read: Store If - PresetType "DIMMER" EndIf.
8. Press an empty executor button - creating a new cue 1 in a new sequence and executor.

Now you have stored all values except the dimmer in cue number 1. You still have the dimmer values active in your programmer, the rest is stored. The temporary filter is now gone and noting is filtered anymore.

9. Press Store and then the same executor button.
10. In the pop-up select Create Second Cue.

This was an example on  how to use the If command to exclude an attribute - actually an entire preset type.

 

The next example is about allowing some attributes to pass the filter.

In this example we are going to grab only the color values from one fixture and apply it to another.

1. Use the "Demo Dimmer and more" demo show or a show with some fixtures and some filters.
2. Make sure the Selected filter is the "All" filter.
3. Select fixture 1 and give it values on several attributes including Dimmer, Position, and use the MixColor attributes to blend a new color.
4. Select a different fixture and give it another position and dimmer values.

Now we would like to grab the color values only from the first fixture. We do not want to grab the position and dimmer values from the fixture, only the color.

5. Press At Fixture 1 If. Now you can select the filter you want to use.
6. We need all the color information so tap the Color button in the Preset Control Bar. The "EndIf" command is automatically added when a single thing is tapped after pressing the If key
7. Press the Please keys to execute the command.

Now both fixtures have the same color values.
