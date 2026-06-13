---
title: "Example"
description: "This topic describes the bitmap fixtures on an example."
product: grandma2
lang: en
sourceUrl: "https://help.malighting.com/grandMA2/en/help/key_bitmapfixture_example.html"
scrapedAt: "2026-06-12T21:28:20.592Z"
---
This topic describes the bitmap fixtures on an example.

This example requires a few basic functions, like [storing cues](/grandma2/key_cues_and_sequences/), [create presets](/grandma2/key_presets_create/), and [assign effects](/grandma2/key_effects_assign_to_executor/). If you are not familiar with these functions, read the manual for these functions first.

**Initial situation:**\
A stage with many fixtures. The task is to create a pan tilt effect for these fixtures.

![](/img/grandma2/window_stage_v3-2-a0a76b.png)

_Stage view_

**Requirement:**

- [An imported bitmap fixture](/grandma2/key_bitmapfixture_import/).
- [A created layout including the fixtures for using the bitmap fixture](/grandma2/key_bitmapfixture_layout/).

**Important:**\
Position presets have to have the values of pan tilt, since the values X, Y and Z are not supported. 

1. Select all the fixtures in the fixture sheet for the pan tilt effect, press At 100 Please, and then Store and press the executor.

2. Draw a **rectangle** around the fixtures in the layout. The **Edit Layout Element** pop-up opens. Tap under Visualization Bitmap.

3. Import an image, which only displays a white bar, in the image pool.

   ![](/img/grandma2/image_white-bar_v3-2-438b61.png)

   _Image white bar_

   **Note:**\
   It is possible to use predefined images and videos also. For more information on how to import predefined images and videos see [Import an image](/grandma2/key_image_import/).

4. Create two position presets in the position preset pool, the first with the lowest pan 0 and tilt 30, the second position preset with pan 0 and tilt -5.

5. Program the bitmap fixture in the programmer with the following values:\
   \- **Dimmer**: 100\
   \- **Images**: The white bar image from the image pool, e.g., 15.\
   \- **Output**: The layout including the bitmap fixture visualization, e.g., Layout 1.\
   \- **Mode**: Position Preset\
   \- **VP1**: Select position preset with low value\
   \- **VP2**: Select position preset with high value

6. Tap in the encoder bar effect layer, tap **VPos** (= Video Position) in the fixture sheet, turn the encoder for the x value and select Ramp Plus 10.

7. To store a sequence with the bitmap fixture, press Store and then another executor button than before.

8. Start both playbacks.

You have a pan tilt effect by using the bitmap fixture.

![](/img/grandma2/window_stage-running-bitmap_v3-2-78fda1.png)

_Stage view with running bitmap fixture_
