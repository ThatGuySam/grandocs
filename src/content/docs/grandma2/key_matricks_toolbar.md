---
title: "MAtricks toolbar"
description: "Use the MAtricks toolbar to control the MAtricks."
product: grandma2
lang: en
sourceUrl: "https://help.malighting.com/grandMA2/en/help/key_matricks_toolbar.html"
scrapedAt: "2026-06-12T21:28:18.665Z"
---
Use the MAtricks toolbar to control the MAtricks. 

**Requirement:**

- Activate MAtricks in the toolbar. 

1. Select the fixtures or channels you would like to apply the MAtricks to. 

2. Open the encoder bar. For more information see [Encoder toolbar](/grandma2/key_ws_encoder_toolbar/).\
   For information on how to open the encoder bar via the **Create Basic Window** see [Encoder bar](/grandma2/key_ws_encoder_bar/). 

3. To enable MAtricks, press the Set key.\
   For more information on the Set key see [Set](/grandma2/key_key_set/). \
   -or-\
   -Tap an object in the MAtricks pool.\
   For more information see [MAtricks pool](/grandma2/key_matricks_pool/).\
   -or-\
   -Tap MAtricks in the encoder toolbar and the MAtricks toolbar opens.

   ![](/img/grandma2/img_matricks-toolbar_v3-3-7108fe.png)

   _Open the MAtricks toolbar_

   -Tap MAtricks Active.\
   -MAtricks Active turns green. This indicates that MAtricks have been activated.

   ![](/img/grandma2/img_matricks-toolbar_activated_v3-3-b49902.png)

   _Activate MAtricks_

4. To adjust the settings, tap the button displayed on the left of the ![](/img/grandma2/icon_minus_v3-2-0401ec.png) sign. \
   -Depending on the setting, a calculator opens or a pop-up appears.\
   -Enter or select a value.

5. If you have adjusted the settings, the corresponding button turns green and the settings are instantly applied.

**Important:**\
Only settings with a green background can be saved in the MAtricks pool. 

6. Store the settings you have just made in the MAtricks toolbar:\
   -Press Store and tap an empty object in the MAtricks pool.\
   For more information on the MAtricks pool see [MAtricks pool](/grandma2/key_matricks_pool/). 
7. Close the MAtricks toolbar:\
   Tap ![](/img/grandma2/icon_close_small_v3-2-1c8fff.png) in the upper right corner of the toolbar.   

---

## MAtricks Settings

**Hint:**\
Adjust settings using ![](/img/grandma2/icon_minus_v3-2-0401ec.png) or ![](/img/grandma2/icon_plus_v3-2-e7bd93.png) in the MAtricks toolbar. 

**Important:**\
Settings that can be made on the y-axis – **Single Y, Block Y, Align Group Y** – are enabled only if the interleave is applied. 

**Interleave:**

Sets the interval.

1. To increase the interval of the MAtricks, press and hold Set and press Next.
2. To decrease the interval of the MAtricks, press and hold Set and press Prev. \
    

**MAtricks Filter:**

Sets the filters Off, OddID, EvenID.

Off: No filter.\
OddID: Selects fixtures with an odd number.\
EvenID: Selects fixtures with an even number. 

1. To set a filter, tap MAtricks Filter and the **pop-up Select Input** opens.

![](/img/grandma2/popup_select-input_matricks_v3-3-a2edc0.png)

_Select filter_

2. Tap to select the filter.

**Single X:**

Selects the MAtricks in the vertical order.

- To move through the selection, use Prev or Next. 

**Single Y:**

Selects the MAtricks in the horizontal order. 

- To move through the selection, press and hold ![ma](/img/grandma2/ma_1-290dfd.png) and press Prev or Next. 

**Block X:**

Creates blocks in the vertical order.

**Block Y: **

Creates blocks in the horizontal order. 

- To move through the selection of Block X or Block Y, press and hold ![ma](/img/grandma2/ma_1-290dfd.png) and Set and simultaneously press Prev or Next. 

**Align Group X:**

Aligns groups of the selection in the vertical order – for example creating a fan. 

**Align Group Y:**

Aligns groups of the selection in the horizontal order – creating a fan. 

### []()Example:

Align selection in four groups.

1. Set the **Align Group X** to 4.
2. Type into the command line:

\[Channel]> At 10 Thru 100

This command created a fan function culminating in every fourth fixture. 

![](/img/grandma2/img_matricks_example_fan-function_v3-3_1-a327c9.png)

_Set the fan function using LEDs displayed in the Layout View_

**Wing:**

Creates wings in the selection.

- To move through the selection, press Prev or Next.  

**Wingstyle:**

Sets the following styles –

None: No style.\
Pan: The wing affects fixtures with pan values. \
Tilt: The wing affects fixtures with tilt values. \
PanTilt: The wing affects fixtures with pan and tilt values. \
X: The wing affects fixtures with X values. \
Y: The wing affects fixtures with Y values. \
Z: The wing affects fixtures with Z values. \
XY: The wing affects fixtures with X and Y values. 

1. To set a wing style, tap Wingstyle and the **pop-up Select Input** opens. 

![](/img/grandma2/popup_select-input_wingstyle_matricks_v3-3-12d2ea.png)

_Select wing style_

2. Tap to select a wing style. 

**Reset:**

Resets the MAtricks settings.

- To reset the MAtricks, tap Reset.

**Hint:**\
It is also possible to reset the MAtricks using the [ClearAll](/grandma2/key_keyword_clearall/) or the [MAtricksReset](/grandma2/key_keyword_matricksreset/) keyword. 

**[]()Circular Copy:**

Copies values in a circular manner in the MAtricks. For more information see [CircularCopy](/grandma2/key_keyword_circularcopy/) keyword. 

- To move through the selection downward, tap the arrow pointing to the right. 
- To move through the selection upward, tap the arrow pointing to the left. 

**Shuffle Selection:**

Applies the function Shuffle to the selection in the MAtricks. For more information see [ShuffleSelection](/grandma2/key_keyword_shuffleselection/) keyword. 

- To apply this function, tap Shuffle Selection. 

**Hint:**\
Settings stored in the MAtricks pool can be assigned to the User keys. For more information see [User 1](/grandma2/key_key_user1/) key and [User 2](/grandma2/key_key_user2/) key.
