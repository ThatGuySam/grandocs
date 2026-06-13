---
title: "Presets"
description: "Presets are used to store values for fixtures in nice pools for each preset type plus a special pool for all values."
product: dot2
lang: en
sourceUrl: "https://help.malighting.com/dot2/en/help/key_wi_presets.html"
scrapedAt: "2026-06-12T21:29:35.951Z"
---
Presets are used to store values for fixtures in nice pools for each preset type plus a special pool for all values.

It's very useful when you want to reuse a value. It could be a position, color or something else that you use.

If you use a preset in a cue then you don't store the values stored in the preset, but you store a_ link_ to the preset. If you then update the values in the preset, then your cues will automatically use the updated values.  

 

Think of presets as a lot of drawers in a big chest of drawers. We have a chest for each of the preset types we see on the right side of screen 1. So each chest is labeled "Dimmer", "Position", "Gobo" etc.

Now you can put something in these drawers. If you select a fixture and give it a color, you can store this in a color drawer. It's like writing a small note and putting it in the drawer. What you write is the ID number of the active fixture(s) and the(ir) active values.

This information is then put in the drawer and the drawer is labeled. If it was a red color then it would be labeled "Red". Not all drawers are labeled this smart. The dot2 doesn't know what the different positions are, so they are just labeled "Position".

You can put other notes in the same drawer, but there can only be one note for each fixture. The same fixture can't have a note that says "Red" and one that says "Blue". But fixture 1 can be "Red" and fixture 2 can be "Blue".

Now if we select a fixture and then a preset and store this in a cue, then we actually store that the cue should go look in the drawer for the value. It only stores this reference for the fixture you have stored in that cue. This means that if you later add more notes for other fixtures in the same drawer, then this doesn't change the cue. The cue is still only looking in the drawer for the notes to the specific fixtures stored in the cue.

If you change the values written on the note for the fixtures you use, then your cues will use the updated values. You might need to change the values on the note if the color wasn't right or if the position changes for the singer or for a million other reasons.

 

The special group of presets called "All" will store all the possible values in an all preset.

 

## Related links

[What are Cues](/dot2/key_wi_cues/)

[How to Work with Presets](/dot2/key_ht_presets/)

[Preset Key](/dot2/key_key_preset/)

[Preset Command](/dot2/key_keyword_preset/)

[Preset Pools view](/dot2/key_viewitem_preset/)
