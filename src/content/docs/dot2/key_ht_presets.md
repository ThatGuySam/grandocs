---
title: "Work with presets"
description: "Presets are a set of values that a specific selection of fixtures can use. This value set is stored in a special preset pool that allows you to use the same val"
product: dot2
lang: en
sourceUrl: "https://help.malighting.com/dot2/en/help/key_ht_presets.html"
scrapedAt: "2026-06-12T21:29:36.922Z"
---
Presets are a set of values that a specific selection of fixtures can use. This value set is stored in a special preset pool that allows you to use the same value sets again and again. If you store the preset in a cue, then you store a link for some attributes for some specific fixtures to the preset. This means that you don't actually store the values in the cue, but a link to the preset. If you then update the values in the preset, then the look of your cues will change. If you want to learn more generally about what the presets are, then you can read the [What are Presets](/dot2/key_wi_presets/) help page.

Now we'll look at how to actually work with them.

## Create some presets

I assume you have a show with some fixtures that have different types of attributes.

There are different preset types. The preset types change depending on what fixtures you have added to your show. You can see the different preset types on the right side of the right screen.

You can make a Preset view on one the other screens using the view bar or you can open it on the right screen by pressing the Preset key. It might make more sense to open the preset view on a screen that isn't the right one. Do this and then see the title bar of the preset view change when you select the different Presets Types on the right side of the right screen. Each Preset Type have it's own preset pool. This also means that you can only store Dimmer values in a Dimmer Preset pool. The exception to this is the All preset type. The All type can store all values across the different other Preset types.

Let's try to make some dimmer presets (I assume you have added some fixtures that have a dimmer channel). Select some of your fixtures, give them a dimmer value in your programmer (if you don't know what the programmer is then you should first learn about this - [follow this link](/dot2/key_wa_programmer/)). Now press the Store key and then an empty pool object in the Dimmer Preset pool. Now you can see that you have created a Dimmer Preset. 

You can do the same with any of your available Preset types. Remember that you can only store Dimmer values in a Dimmer Preset. The same is valid for each of the different Preset Types - except the All presets.

Try to have dimmer and color values in your programmer. Then tap All on the menu on the right screen. Press Store and then one of the All Presets. Now you have stored a preset that have both dimmer and color values.

Notice that tapping the All button opens the All preset pool on screen 1. You can also open this All preset pool by pressing ![ma](/img/dot2/ma_1-85eed0.png) + 0.

## Naming presets

If you start to type on an external keyboard directly after storing a preset, then you are labeling the preset. You might also notice a label pop-up when you store a preset. Tapping this will open the naming window. If you need to label a preset long after it's stored then you can press the Label key and then the preset you want to label. This also opens the Naming window.

The dot2 will try to name the preset based on it's best guess. This doesn't work if there's no definite value. An example is position presets. The dot2 simply doesn't know what the fixtures are pointed at, so auto-naming them doesn't make sense.

## Call/Use/Select a Preset

If you store a preset, then you get the link to the preset directly in your programmer. This allows you to store a cue directly afterwards and have the preset in the cue.

If you need to use a preset, after you have created them, then you have the following options. If you don't have any fixture selected, then you can tap the preset you want to use. The first tap selects all the fixtures that can use the preset. You'll need to tap it again to actually get the preset in your programmer.

If you have a selection of fixture and you tap a preset then it's only the fixtures that can actually use the preset that gets the preset in the programmer.

Once you have the preset values in your programmer, then you can store a cue, a new preset or take the values out of your programmer again. 

## Update a preset

If you need to update the values in the preset then you need to select the fixtures you want to update and give them the value you want, then press the Update key and tap the preset you want to update.

This is the same as pressing Store followed by the preset you want to update and then choose Merge in the [Choose Store Method window](/dot2/key_window_choosestoremethod/).

Now the values in your preset have changed. If you use the preset in a cue somewhere then this cue will now look different - it uses the updated values.

If you have used a preset in a cue and you add new values (not changing the existing ones) or add more fixtures to the preset, then this new information isn't added in your previous saved cue. Cues only looks for the values that was originally stored in the cue.

## Delete a preset

You can delete a preset by pressing Delete and then the preset you want to delete. If the preset is used somewhere, then you get a warning window, asking if you really want to delete the preset.

If you choose to delete a used preset, then the values currently in the preset are copied to the cues where it's used. So your cues still works.

If you Oops this deletion, then you get the preset back but the link between the cue and preset is still broken and you won't get that back.

 

 

## Related links

[What are Presets](/dot2/key_wi_presets/)

[What is the Programmer](/dot2/key_wa_programmer/)
