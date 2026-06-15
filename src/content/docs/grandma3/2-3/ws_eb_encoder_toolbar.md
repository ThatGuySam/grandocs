---
title: "Encoder Toolbar"
description: "The encoder toolbar represents the largest portion of the encoder bar. The encoder toolbar is context-sensitive and displays different sets of controls as diffe"
product: grandma3
version: "2.3"
lang: en
sourceUrl: "https://help.malighting.com/grandMA3/2.3/HTML/ws_eb_encoder_toolbar.html"
scrapedAt: "2026-06-15T18:24:55.521Z"
pagefind: false
---
The encoder toolbar represents the largest portion of the encoder bar. The encoder toolbar is context-sensitive and displays different sets of controls as different editors become active. The default set of controls in the encoder toolbar provides access to and display of attribute encoder information.

![](/img/grandma3/2-3/img_encoder-bar_encoder-toolbar_v1-9-5c3343.png)

Encoder toolbar

Attribute controls available in the encoder toolbar include:

1. **Encoder Page:** This button displays the name of the current feature. It also indicates the total number of pages available in the current encoder bank. \
   Tap to cycle through features or tap and swipe to open a pop-up with available features. Encoder Pages can be customized, see [Encoder Bar Pool](/grandma3/2-3/ws_eb_encoder_pool/).\
   For more information about features and feature groups, see the [Feature Group](/grandma3/2-3/patch_attribute_feature_group/) topic. 

2. **Channel function of the attribute:** These buttons display the current channel function of the attribute displayed directly to the right. They also display additional channel functions when available.\
   Tap to cycle through subattributes or tap and swipe to open a pop-up with available subattributes.

3. **Attribute encoder display:** These buttons display the names of the attributes currently linked to the encoders, and show the values of those attributes.\
   The center of the encoder icon includes an additional image, which changes depending on the current resolution of the encoder. For more information on encoder resolution, see the [Encoder Resolution](/grandma3/2-3/operate_encoder_resolution_multiplier/) topic.\
   To open the calculator, tap the attribute name field or the attribute value field. For more information about attributes and subattributes, see the [Attribute Definitions](/grandma3/2-3/patch_attribute_definitions/) topic.\
   For more information about the gesture for rotating a virtual encoder, see the [Gestures](/grandma3/2-3/ws_gestures/) topic.

4. **Link button:** In cases where the same value, timing, phaser, or resolution adjustments should apply to multiple attributes, the link button offers a few options for defining multiple, simultaneous attribute destinations. For more information about the link button, see the section [below](/grandma3/2-3/ws_eb_encoder_toolbar/#h2__786220226).

5. **Layer toolbar:** The default layer is absolute. Tap any layer button in the toolbar to access the desired layer on the attribute encoders. For more information about the layer toolbar, see the [section below](/grandma3/2-3/ws_eb_encoder_toolbar/#LayerToolbar).

6. **Screen encoder:** If the screen encoder is enabled in the user profile settings of the current user, this area displays the basic functionality of the screen encoder. If the screen encoder is disabled in the current user profile, the functionality of the fifth dual encoder will be similar to that of the other four, and the display in this area will also be similar to the displays above the other four encoders. For more information about the screen encoder, see the [User Settings](/grandma3/2-3/user_settings/) topic.

   |                                            |                                                                                                                   |
   | ------------------------------------------ | ----------------------------------------------------------------------------------------------------------------- |
   | ![](/img/grandma3/2-3/tip_gray-269535.png) | **Hint:**                                                                                                         |
   |                                            | Setting Screen Encoder to **No** in the User Profile settings enables a fifth encoder for controlling attributes. |

7. **Step bar:** The left and right arrows allow navigation between phaser steps in the programmer. The step number button displays the current phaser step in the programmer. Tap the step number button to open a calculator to choose a specific step. Tap the button to the right (![](/img/grandma3/2-3/img_phaser_select_reset_15px-ab995c.png)) of the right-arrow to select all phaser steps. For more information about phaser steps, see the [Phasers](/grandma3/2-3/phaser/) topic.

---

## Link Button

The link button maintains different link settings for the different types of layers found in the layer toolbar as well as encoder resolution. The text in the link button will update automatically to show the link setting of the current layer type. The available link settings are:

- **Single:\
**Adjustments made on one encoder apply only to the attribute on that encoder.
- **Feature:**\
  Adjustments made to one encoder within a feature apply simultaneously to all attributes in the feature.
- **AtFilter:** Adjustments made to one encoder apply simultaneously to all attributes currently enabled in the at filter.
- **Active Only (**![](/img/grandma3/2-3/icon_active_15px-827034.png))**:\
**If enabled, only attributes with active values in the programmer will get new values.
- **MultiStep Only (**![](/img/grandma3/2-3/iocn_multi_step_15px-3989f0.png))**:**\
  If enabled, new values are only applied to attributes with two or more active steps.

### Link Values

Value layers include:

- Absolute
- Relative

When a value layer is selected, tap Link Values to cycle through the link options or tap and swipe to open a pop-up with all of the available link options. The available link options for value layers include:

- Single
- Feature

### Link Timing

Timing layers include:

- Fade
- Delay

When a timing layer is selected, tap Link Timing to cycle through the link options or tap and swipe to open a pop-up with all of the available link options. The available link options for timing layers include:

- Single
- Feature
- AtFilter

---

## Link Phasers

### Overall

The overall phaser layers include:

- Speed
- SpeedMaster
- Phase
- Measure

### Steps

The phaser step related layers include:

- Accel
- Decel
- Transition
- Width

## Phaser Overall and Phaser Steps

When a phaser layer is selected, tap Link Phaser to cycle through the link options or tap and swipe to open a pop-up with all of the available link options. The available link options for phaser layers include:

- Single
- Feature
- AtFilter
- Active Only 
- MultiStep Only

## Link Resolution

While the MA key is pressed and held, tap Link Resolution to cycle through the link options or tap and swipe to open a pop-up with all of the available link options. The available link options for encoder resolution include:

- Single
- FeatureGroup

---

## []()Layer Toolbar

Presets and cues can store and recall multiple layers of data for each attribute. The layer toolbar provides access to all available layers. Layers are color-coded. Markers and text backgrounds using matching colors in the attribute encoder displays, encoder bank buttons, fixture sheet, and sequence sheet denote active or stored data for the corresponding layer. For more information about colors, see the [Colors](/grandma3/2-3/ws_colors/) topic.

Tap a button in the layer toolbar to access data for the desired layer. The attribute encoders and any sheet with a layer selection set to auto will display the desired layer. For more information about value and timing layers, see the [What is the Programmer](/grandma3/2-3/operate_programmer/) topic. For more information about phaser layers, see the [Phasers](/grandma3/2-3/phaser/) topic. For more information about using GridPosition to create MAgic presets, see the [Create New Presets](/grandma3/2-3/presets_create/#magic) topic.

When the programmer is clear, the bars across the top of the attribute encoder and the channel function displays are gray. The selected layer group returns to **Values and Timings** and the **Absolute** layer. The layer selection in Phaser Overall and Phaser Steps stays as selected after clearing the programmer. As the selection changes, the bars across the top of any attributes and channel functions available in the current selection change color. The color coordinates with the color of the current layer in the layer toolbar.\
The lights under the dual-encoders also follow the same behavior.

|                                            |                                                                                                                                                                                          |
| ------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ![](/img/grandma3/2-3/tip_gray-269535.png) | **Hint:**                                                                                                                                                                                |
|                                            | The colors for each phaser-related layer can be changed in the color theme in the ColorGroup "ProgLayer". For more information, see [color theme](/grandma3/2-3/ws_colors_color_theme/). |
