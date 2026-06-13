---
title: "Create Appearances"
description: "Edit an empty pool object in the appearances pool to create a new appearance."
product: grandma3
version: "2.4"
lang: en
sourceUrl: "https://help.malighting.com/grandMA3/2.4/HTML/appear_create.html"
scrapedAt: "2026-06-12T21:24:49.835Z"
---
Edit an empty pool object in the **appearances pool** to create a new appearance.

To edit a pool object, use one of the following options:

- Press Edit and then tap an appearance in the pool.
- Open the [swipey commands](/grandma3/2-4/wvm_pool/#h2__1144791563) on the pool object and select Edit.
- Use the command line: **Edit Appearance \["Appearance\_Name" or Appearance\_Number]**.

Editing a pre-existing pool object opens the editor to the current state of the appearance.

This is the **Appearance Editor**:

![](/img/grandma3/2-4/pop-up_create-20appearances_01_v3-2-2-5e9354.png)

There are six input boxes, two sets of faders with a color picker and a hex color code to adjust the color, and a preview area showing the appearance.

---

### Set a Background Color

The **Background Color** fader and color picker can be used to change the appearance's background. The default background is transparent (**Alpha** fader at 0%, **B** fader at 0%).

Increase the Alpha value, then use the R (red), G (green), and B (blue) faders to mix any color within the RGB range. You can also tap in the color picker area to select a color or edit the hex color code above the color picker.

 

---

### Label the Appearance

To edit the name, use the [Label keyword](/grandma3/2-4/keyword_label/) or tap Name in the appearance editor.

Appearances can be labeled like any [other pool object](/grandma3/2-4/wvm_pool/#label_pool_object).



---

### Add an Image to the Appearance

Appearances can use an image. The image is placed in front of the background but behind the label.

1. Tap the **Image** input box to add an image. The **Select Image dropdown** opens with a list of all images.
2. Tap ImageSource in the title bar to display different objects stored in the images, videos, gobos, or symbols pool.
3. Tap the desired image in the pop-up.

|                                            |                                                                                                                                |
| ------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ |
| ![](/img/grandma3/2-4/tip_gray-639af3.png) | **Hint:**                                                                                                                      |
|                                            | Appearances that use an image will not display the name on the appearance object in the pool if the name is the default name.  |

Media objects (images, videos, symbols, and gobos) can be **assigned** to an appearance. Assigning images to an empty appearance will create a new object in the appearances pool. 

|                                            |                                                                                |
| ------------------------------------------ | ------------------------------------------------------------------------------ |
| ![](/img/grandma3/2-4/tip_gray-639af3.png) | **Hint:**                                                                      |
|                                            | Assigning an appearance to another one creates a copy of the first appearance. |

The images have different modes. Their modes define how the image is adapted to the aspect ratio.

These are the different modes:

- **Stretch**\
  The image is stretched to fit the appearance area.

  \[+] [Show Image](javascript:void\(0\))

  \[-] [Hide Image](javascript:void\(0\))

  ![Update this description text.](/img/grandma3/2-4/pop-up_create-20appearances_stretch_04_v3-2-2-fa1de3.png)

  Fixture sheet with stretched appearance

- **Bar**\
  The entire image is displayed and scaled to fit the appearance area without changing its aspect.

  \[+] [Show Image](javascript:void\(0\))

  \[-] [Hide Image](javascript:void\(0\))

  ![Update this description text.](/img/grandma3/2-4/pop-up_create-20appearances_bar_05_v3-2-2-566f3c.png)

  Fixture sheet with appearance set to Bar

- **Crop**\
  The image is fitted to fill the entire appearance area. The aspect of the image is kept, but it is cropped.

  \[+] [Show Image](javascript:void\(0\))

  \[-] [Hide Image](javascript:void\(0\))

  ![Update this description text.](/img/grandma3/2-4/pop-up_create-20appearances_crop_02_v3-2-2-7da34c.png)

  Fixture sheet with a cropped appearance

- **Tile**\
  The image is tiled. This means that the image is repeated in its original size to fill the entire appearance area. The aspect of the image is kept.

  \[+] [Show Image](javascript:void\(0\))

  \[-] [Hide Image](javascript:void\(0\))

  ![Update this description text.](/img/grandma3/2-4/pop-up_create-20appearances_tile_03_v3-2-2-62aa4f.png)

  Fixture sheet with tiled appearance

- **Center**\
  The image is displayed in its original size with the center of the image aligned with the center of the appearance area. The aspect of the image is kept.

  \[+] [Show Image](javascript:void\(0\))

  \[-] [Hide Image](javascript:void\(0\))

  ![Update this description text.](/img/grandma3/2-4/pop-up_create-20appearances_center_03_v3-2-2-c77f53.png)

  Fixture sheet with a centered appearance

To change the mode:

1. Tap the **Image****Mode** button. This toggles through the different modes. You can also swipe the button to open the **Select ImageMode dropdown**.
2. Select a mode in the dropdown.

---

## Change the Image Color and Orientation

Adjust the image color using the top set of faders and the color picker in the appearance editor. It is also possible to edit the hex color code directly.\
To edit the hex color code, tap the input field above the color picker and adjust the hex code in the Edit ImageRGBA pop-up.

This means that the same image can be used across different appearances with different color hues and transparency levels.

|                                                    |                                                                                                                                               |
| -------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| ![](/img/grandma3/2-4/restriction_gray-968e2d.png) | **Restriction:**                                                                                                                              |
|                                                    | Color can only be added to an image, not removed from it. This means that black areas in an image cannot be changed, but white areas can be.  |

To rotate the image, tap ImageRotation in the appearance editor. The image can be rotated by 90°, 180°, or 270°.

To mirror the image, tap ImageMirror in the appearance editor. The image can be mirrored vertically or horizontally or both.

Tap the video below to see the example.

[Vimeo video](https://player.vimeo.com/video/936310066?title=0\&byline=0\&portrait=0\&color=ffeb0f)

---

### Revert Changes

To revert the changes made in the latest editing process:

1. Tap Revert. A pop-up opens.
2. Tap OK. The changes are reverted.
