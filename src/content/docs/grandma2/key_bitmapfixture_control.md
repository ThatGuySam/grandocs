---
title: "Control bitmap fixture"
description: "After you imported a bitmap fixture in your show, you can control the bitmap fixture in the fixture sheet. For more information, see fixture sheet."
product: grandma2
lang: en
sourceUrl: "https://help.malighting.com/grandMA2/en/help/key_bitmapfixture_control.html"
scrapedAt: "2026-06-12T21:28:20.431Z"
---
After you imported a bitmap fixture in your show, you can control the bitmap fixture in the fixture sheet. For more information, see [fixture sheet](/grandma2/key_of_fixture_sheet/).

The following table describes the specific bitmap fixture attributes. For more basic information about control fixtures or channels, see [control channels and fixtures](/grandma2/key_operate_fixtures/).

| Attribute                          | Description                                                                                                                                                                                                                                             |
| ---------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Dimmer                             | Controls the dimmer intensity.                                                                                                                                                                                                                          |
| Mix Color (RGB)                    | Controls red, green, and blue.                                                                                                                                                                                                                          |
| HSB (Hue, Saturation, Brightness)  | Controls hue shift, saturation, and brightness. HSB is a color correction of the selected RGB values.                                                                                                                                                   |
| VObj (= Video Object) Images       | Select the image from the image pool, used for the bitmap fixture. For more information, see [import image](/grandma2/key_image_import/). **Important:** By default are 100 images displayed, even if less images are in the image pool.                |
| VObj Output                        | Select the layout from the layout pool, used for the bitmap fixture. For more information, see [layouts](/grandma2/key_layouts/). **Important:** By default are 100 layouts displayed, even if less layouts are in the layout pool.                     |
| VPos (= Video Position)            | Moves the position of the image on a relative x, y, z axis in the layout view. If you have two images about each other, the one with the lower z axis value is in front.                                                                                |
| VRot (= Video Rotation)            | Rotates the images around the z axis. The combination between CX (= Center X) and CY (= Center Y) moves the rotation midpoint of the z axis relative in the layout view. 0 is the center of the z axis.                                                 |
| VImg (= Video Image)               | Select the video image: (See screenshots below the table for better visualization). **Tile -:** Image will be added behind. Every second image is mirrored. **No Tile:** No image will be added. **Tile +:** Image will be added behind.                |
| VPlayer (= Video Player) Play Mode | Select the video play mode: - **Loop **loops endlessly. - **Play **plays once and stops with the last frame. - **Play and Off** plays once and fades out with the last frame. - **Pause** pauses the video clip.                    |
| VPlayer Speed                      | Controls the speed of playing back videos.                                                                                                                                                                                                              |
| VScale (= Video Scale)             | Scales the image on the x and y axis. - **1:1** - **1:-1** mirrored                                                                                                                                                                                     |
| VPreset (= Video Preset) Mode      | Select the video preset mode: - **Dimmer** (default for only dimmer fixtures) - **RGB + Dim**  - **RGB** (default for fixtures using RGB) - **Preset Types** allows to have the bitmap fixture running between two presets of a preset type VP1 and VP2 |
| VPreset VP1                        | Set the preset pool index of the low value (black), e.g. 1 (= red color).                                                                                                                                                                               |
| VPreset VP2                        | Set the preset pool index of the high value (white), e.g. 2 (= green color).                                                                                                                                                                            |

**Important:**\
If you pause a video clip in the VPlayer and subsequently tap Play or Loop, the clip is played back from the start. 

After you have modified all the attributes, you can store the look in a cue. For more information, see [cues and sequences](/grandma2/key_cues_and_sequences/).

## Examples for VImg Attributes

![](/img/grandma2/window_layout-view-bitmap-no-tile_v3-2-fd8a95.png)

_Layout view with bitmap VImg attribute no tile_

 

![](/img/grandma2/window_layout-view-bitmap-split-x-tile-plus_v3-2-df8b76.png)

_Layout view with bitmap VImg attribute split x tile+_

 

![](/img/grandma2/window_layout-view-bitmap-split-x-tile-_v3-2-fd1712.png)

_Layout view with bitmap VImg attribute split x tile-_

 

![](/img/grandma2/window_layout-view-bitmap-split-x-tile-split-y-tile-_v3-2-8b89fd.png)

_Layout view with bitmap VImg attribute split x tile- split y tile-_

 

![](/img/grandma2/window_layout-view-bitmap-split-y-tile-plus_v3-2-90c503.png)

_Layout view with bitmap VImg attribute split y tile+_

 

![](/img/grandma2/window_layout-view-bitmap-split-y-tile-_v3-2-7641c2.png)

_Layout view with bitmap VImg attribute split y tile-_

 

![](/img/grandma2/window_layout-view-bitmap-split-x-tile-plus-split-y-tile-plus_v3-2-f890a9.png)

_Layout view with bitmap VImg attribute split x tile+ split y tile+_
