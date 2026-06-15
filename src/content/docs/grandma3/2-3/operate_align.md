---
title: "Align"
description: "A dedicated Align key, an Align Keyword, and an Align Bar can be created as a window. Align is accessible on the left side of the encoder bar."
product: grandma3
version: "2.3"
lang: en
sourceUrl: "https://help.malighting.com/grandMA3/2.3/HTML/operate_align.html"
scrapedAt: "2026-06-15T18:25:22.017Z"
pagefind: false
---
A dedicated Align key, an [Align Keyword](), and an **Align Bar** can be created as a window. Align is accessible on the left side of the encoder bar.

Align is used to distribute attribute values between two or more values. There are five different align modes. Read about them below.

This is a convenient window if align is used frequently. Read the descriptions below to understand the different modes.

The default is a linear transition between the values, which can also be adjusted. There are four different **Align Transition** options:

- **Linear** (default):\
  Spreads the values with the same spacing.
- **Sinus**:\
  Spreads the values as if the fixtures were placed on a sine curve. The values themselves will not represent the sinus form. Depending on the Align mode, this results in smaller value gaps at the beginning and end of the range and more significant gaps towards the center of the range, or vice versa.
- **Slow**:\
  The gaps between the values will be small at the beginning of the range and increase toward the end of the range.
- **Fast**:\
  The gaps between the values will be big at the beginning of the range and decrease toward the end of the range.

These can be accessed using the [AlignTransition keyword](/grandma3/2-3/keyword_aligntransition/), the **Align key**, or the **Align Bar**.

The Align function can be used for different attributes. Dimmer, position, and color are the most common. The examples below use tilt or dimmer attributes.

By default, the align mode is set to Off, and the transition is Linear. The result is that the encoder will adjust all the selected fixtures equally.

|                                                  |                                                                                                                        |
| ------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------- |
| ![](/img/grandma3/2-3/important_gray-f4dfbc.png) | **Important:**                                                                                                         |
|                                                  | The selected order of the fixtures is important. The attribute will be adjusted proportionally to the selected order.  |

The align mode is active until a new attribute is adjusted.

## []()Align Bar

The **Align Bar Window** gives fast access to all the align functions. It has both the align modes and the align transitions.

It can be created like any other window using the [Add Window pop-up](/grandma3/2-3/wvm_add_window/). It is located in the More tab.

![](/img/grandma3/2-3/window_align_bar-7d1e31.png)\
_Align Bar window_
