---
title: "Store"
description: "The Store key is used when you need to store something."
product: dot2
lang: en
sourceUrl: "https://help.malighting.com/dot2/en/help/key_key_store.html"
scrapedAt: "2026-06-12T21:29:40.777Z"
---
The Store key is used when you need to store something.

You store the content of your programmer, what you store depends on what you press or tap after Store. 

Here are some examples:

Store Cue 1 Please

This will store the active values in your programmer in cue number one on the main executor.

Store Color Pool Button 1

This will store your active color values in color preset number 1

Store Preset 4 . 1 Please

Will store preset number one in preset type four (often color when using moving fixtures). 

 

Often when you store something on a location that already have content, you are asked what to do. There are often the same options:

Merge will add the values to your location.

Remove will not store your active values, but instead delete any already existing values from the location. 

Overwrite will store your active values and delete all other values.

Create second cue will store your active values in a new second cue (only an option when you a store something into a cue list with only one cue).

## Advanced functionality

Pressing and holding the ![ma](/img/dot2/ma-36da5c.png) key and then the Store key will give you the [StoreLook command](/dot2/key_keyword_storelook/). When you store a cue with StoreLook then you store the current dimmer values for all your fixtures in the console. It also stores all attributes for the fixtures with a dimmer value above 0. So not just your active programmer values, but every dimmer value and all attribute value for fixtures with dimmer output.

![ma](/img/dot2/ma-36da5c.png)+Store (this will give you the StoreLook command) Cue 1 Please

Creates a cue number one with every attribute from fixtures with dimmer value above 0 and all dimmer values (even the ones with 0%) on the main executor.

When you store a cue using StoreLook. then you'll also get a Protected cue - read more about protected cues in the [How to work with Cues](/dot2/key_ht_cues/). 

## Related links

[Store Command](/dot2/key_keyword_store/)

[What is The Programmer](/dot2/key_wa_programmer/)

[StoreLook Command](/dot2/key_keyword_storelook/)
