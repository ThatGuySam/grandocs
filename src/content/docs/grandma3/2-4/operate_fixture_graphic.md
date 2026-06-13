---
title: "Graphics"
description: "Graphics can be set for features and fixtures."
product: grandma3
version: "2.4"
lang: en
sourceUrl: "https://help.malighting.com/grandMA3/2.4/HTML/operate_fixture_graphic.html"
scrapedAt: "2026-06-12T21:24:48.269Z"
---
Graphics can be set for features and fixtures.

### Feature Graphic

The attributes of the features **Dimmer**, **PanTilt**, **Gobo**, **RGB, and Color1** can have a small symbol displaying a graphic representation of the attribute values: 

![](/img/grandma3/2-4/window_feature_graphic-457194.png)

- Tapping Feature Graphic in the Fixture Sheet settings window, the Content Sheet settings window and the Sequence Sheet settings window will show or hide these symbols in the corresponding sheet.

![](/img/grandma3/2-4/window_fixture_sheet_settings_v2-1-98194a.png)

###

---

### Fixture Graphic

A graphic representation of different output values can be displayed in all sheet modes except Channel Sheet Mode:

![](/img/grandma3/2-4/window_fixture_graphic-53c92b.png)

Open the fixture sheet settings and tap Fixture Graphics.

There are four values:

1. **None**: No icon will be displayed.
2. **Flip**: Only the flip indicator bar will be displayed.
3. **Simple**: A square icon will display the intensity and color output combination.
4. **Gobo**: The intensity, color output, and the used gobo are displayed. Only the gobo of one gobo wheel is displayed at a time. For example, when gobo 1 is set to open, gobo 2 is displayed.

The flip indicator bar is visible except when **None** is selected. It is displayed as a vertical bar with a white rectangle. The rectangle's position indicates the flip area (combination of pan and tilt values) where the fixture is located. More significant is the range of pan and tilt; the more combinations of pan and tilt are possible that point to the same position on stage.

Tap Fixture Graphic Source to define which values to visualize.

These are the different values:

- **Auto**: The values are visualized according to the selected layer of the Layer Toolbar.
- **Value**: The icon displays the output of the Absolute Layer and the Relative Layer.
- **Output**: The values are visualized according to the Output Layer.
- **DMX**: The values are visualized as the resulting DMX values.
