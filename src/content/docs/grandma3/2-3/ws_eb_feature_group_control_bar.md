---
title: "Default Feature Group Control Bar"
description: "The default feature group control bar appears along the top of the encoder bar. Each feature group used in the show file appears in the form of a radio button."
product: grandma3
version: "2.3"
lang: en
sourceUrl: "https://help.malighting.com/grandMA3/2.3/HTML/ws_eb_feature_group_control_bar.html"
scrapedAt: "2026-06-15T18:24:55.515Z"
pagefind: false
---
The default feature group control bar appears along the top of the encoder bar. Each feature group used in the show file appears in the form of a radio button.

The feature group control bar is the MA default encoder bar. To create a customized Encoder bar, see the [Encoder Bar Pool](/grandma3/2-3/ws_eb_encoder_pool/) topic.

![](/img/grandma3/2-3/img_feature-group-control-bar_v1-0-7905b7.png)

_Feature group control bar with Dimmer selected_

Adding fixtures, which use additional feature groups, to the patch automatically adds the necessary feature groups to the feature group control bar.

When the programmer is clear, the bars across the top of the feature group buttons are grey. As the selection changes, the bars across the top of any feature groups available in the current selection change color. The color coordinates with the color of the current layer in the layer toolbar.

---

## Select a Feature Group 

To select a feature group in the control bar, tap the desired feature group. The radio button is enabled, and the encoder toolbar adjusts to display the attributes of the selected feature group.

To change the feature group using a shortcut, press and hold Preset + press one of the numbers from 1 to 9 on the numeric keypad. For example, to change to the color feature group, press Preset + 4.

---

## Active Programmer Values

To activate the attributes of a feature group in the programmer, tap twice on the desired feature group. The information activates and a colored marker appears on the feature group button. To deactivate, tap the feature group once again.

|                                                  |                                                                                                                                                                                                                                  |
| ------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ![](/img/grandma3/2-3/important_gray-f4dfbc.png) | **Important:**                                                                                                                                                                                                                   |
|                                                  | The color of the marker or markers on the feature group button corresponds to the active layer or layers of information. These markers will appear as long as there are active values, no matter how the values were activated.  |

|                                            |                                                                                                                                                      |
| ------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| ![](/img/grandma3/2-3/tip_gray-269535.png) | **Hint:**                                                                                                                                            |
|                                            | To activate information in a specific layer, tap the desired layer in the layer control bar in the encoder toolbar before tapping the feature group. |

---

## Feature Group as the Object of a Command

Many function keywords (including On, Off, Park, Unpark, Remove, Release, Stomp, and Default) can execute their commands using feature groups as their destination objects.

### Example

To remove all dimmer values within the current selection from the programmer:

- Press Off and tap Dimmer.

The dimmer values of the current selection are removed from the programmer.
