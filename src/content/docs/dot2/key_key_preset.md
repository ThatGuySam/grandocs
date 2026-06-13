---
title: "Preset"
description: "When you press the Preset key then you see the Preset Pools view on screen 1 and gives you the Preset command in the command line."
product: dot2
lang: en
sourceUrl: "https://help.malighting.com/dot2/en/help/key_key_preset.html"
scrapedAt: "2026-06-12T21:29:40.282Z"
---
When you press the Preset key then you see the [Preset Pools view](/dot2/key_viewitem_preset/) on screen 1 and gives you the [Preset command](/dot2/key_keyword_preset/) in the command line.

If you need to learn about presets, please follow the links to the [What is Presets](/dot2/key_wi_presets/) and the [How to Work with Presets](/dot2/key_ht_presets/) pages.

## Preset Views

This view changes according to the selected preset type. E.g. if you select the Color in the Preset type bar on the right side of screen 1 then the Preset view will show you all the color presets, if you select Position then it shows you the position presets.

The Preset view allows you to tap the presets on the screen to load the values. Please read the [How to Work with Presets](/dot2/key_ht_presets/) to learn details about this process.

## Preset Command

The preset command primary function is to assign presets to fixtures. This might be easier to do using the screens, but you can also do this using the keys and thus the commands.

If you need to use the position preset number 1 on fixture 1, then you can type the following (from an empty programmer):

Fixture 1 At Preset 2  .  1 Please

In this example we use the "2.1" to tell the console that its's the first preset in the Position preset type. The number 2 in this command tells the console that it's a Position. The 1 tells it that it's the first one. 

On the right side of screen 1 you can see all the different preset types. The top one is number 1, then second is number 2 and so on. This is not a fixed list. This changes depending of your patched fixtures. It does usually follow a specific order. For instance is Dimmer always before Position. So in the example from before we can see that the Position is the second preset type.  

## Advanced functionality

When you press and hold the ![ma](/img/dot2/ma-36da5c.png) key and then press the Preset key then you get the [PresetType command](/dot2/key_keyword_presettype/). 

This can be used to activate the different preset types. It's the same as tapping the different buttons on the screen.

Since the number can change depending on your patched fixtures, then it's preferred to use the preset type name. But then you need to write it in the command line.

![ma](/img/dot2/ma-36da5c.png)+Preset 1 is often the same as PresetType "Dimmer".

## Related links

[What is Presets](/dot2/key_wi_presets/)

[How to Work with Presets](/dot2/key_ht_presets/)

[Preset Pools view](/dot2/key_viewitem_preset/)

[Preset command](/dot2/key_keyword_preset/)

[PresetType Command](/dot2/key_keyword_presettype/)
