---
title: "What are masks"
description: "Masks are a way to hide fixtures and attributes in some sheets and the Stage window."
product: grandma2
lang: en
sourceUrl: "https://help.malighting.com/grandMA2/en/help/key_wfm_what_are_masks.html"
scrapedAt: "2026-06-12T21:28:18.379Z"
---
Masks are a way to hide fixtures and attributes in some sheets and the Stage window.

Mask can be local to the window, but they can also be in the mask pool. Sheets and Stage can then listen to the selected mask in the pool and apply it to the sheet or stage window.

If you do not know about pools, then it is strongly suggested that you first read the [Pools in General section](/grandma2/key_pools/).

The Mask pool could look like this:

![](/img/grandma2/window_mask-pool_v3-3-11e08f.png)

_Mask pool - pool style_

As with all pools, this can also be changed into Sheet style in the pool options. Then it could look like this:

![](/img/grandma2/window_mask-pool_sheet-style_v3-3-f8024f.png)

_Mask pool - sheet style_

The selected mask is the one with the green background. You can simple select a mask by tapping it in the pool or by using the Mask command followed by the number or name. See more in the [Mask Keyword topic](/grandma2/key_keyword_mask/).

 

Hiding fixtures and attributes in windows does not restrict your access to fixtures or attributes, it just hides it.

There are 6 predefined masks in the pool. The following is a short description of the masks:

- **None:**\
  This does not hide anything.
- **Prog Only:**\
  This hides everything that is not in your programmer.
- **Active Only:**\
  This hides everything that is not active values in your programmer.
- **Parked:**\
  This will hide everything that does not have any parked values.
- **Seq+:**\
  This mask will only show the fixtures and attributes that are stored in the selected sequences - including any default fixture values.
- **Seq-:**\
  This mask will only show the fixtures and attributes that are stored in the selected sequences - but it will also hide any default fixture values stored.

 

Please read the [Create Masks topic](/grandma2/key_wfm_create_mask/) to learn how to create your own and the [Use Masks in sheets topic](/grandma2/key_wfm_use_masks/) to learn about using the masks in the sheets and Stage window.
