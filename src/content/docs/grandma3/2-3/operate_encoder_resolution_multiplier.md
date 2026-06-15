---
title: "Encoder Resolution"
description: "Sometimes, precise handling is required, and you may want to change the resolution of an encoder."
product: grandma3
version: "2.3"
lang: en
sourceUrl: "https://help.malighting.com/grandMA3/2.3/HTML/operate_encoder_resolution_multiplier.html"
scrapedAt: "2026-06-15T18:25:21.707Z"
pagefind: false
---
Sometimes, precise handling is required, and you may want to change the resolution of an encoder.

The default encoder resolution of attributes can be defined from the user configuration menu:

1. ​Press Menu, tap Settings, and tap User Configuration. The user configuration menu opens.
2. On the left side of the window, tap Profiles.
3. Tap Edit Encoder Bar. The Default User Attribute Preferences menu opens:

![](/img/grandma3/2-3/window_user_attribute_peeferences-8ae3c2.png)

It is also possible to change the encoder resolution directly on an encoder. For more information, see [Encoder Bar](/grandma3/2-3/ws_encoder_bar/).

To do so:

1. Press and hold MA, this will display the possible resolutions in the channel function area of each encoder.
2. The resolution can be changed for a single feature or a feature group. To toggle between the two options, hold MA and tap Link Resolution.** **Then, tap the resolution area of an encoder; the encoder's selected resolution will change to the next resolution. Read about in [Feature Group](/grandma3/2-3/patch_attribute_feature_group/) and [Attribute Definitions](/grandma3/2-3/patch_attribute_definitions/).
3. When the desired resolution is selected, release MA.

![](/img/grandma3/2-3/window_encoder_bar_resolution-dfea5e.png)\
_Encoder bar attribute resolution_

|                                            |                                                                                                                                                             |
| ------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ![](/img/grandma3/2-3/tip_gray-269535.png) | **Hint:**                                                                                                                                                   |
|                                            | - For one rotation, an encoder has 24 clicks. - 5 rotations of an encoder are needed to cross the whole range of the attribute from its minimum to maximum. |

The possible resolutions are:

1. **Coarse**: One encoder turn click will change the value depending on the readout:

   - Percent: 1
   - PercentFine: 1
   - Physical: (MaxValue-MinValue)/ (24\*5)\
     When multiple fixture types are selected, the smallest physical range of a fixture is taken to determine the size of one click. This allows the same value to change when, for example, turning the tilt encoder.
   - Dec8: 255/(24\*5), therefore 1 click equals 2.125
   - Dec16: 65 535/(24\*5), therefore 1 click equals 546.125
   - Dec24: 1 677 216/(24\*5), therefore 1 click equals 13 976.8
   - Hex8: 255 (=FF)/(24\*5), therefore 1 click equals 2.125
   - Hex16: 65 535 (FFFF)/(24\*5), therefore 1 click equals 546.125
   - Hex24: 1 677 216 (=FFFFFF)/(24\*5), therefore 1 click equals 13 976.

2. **Fine**: Fine has a 10x finer resolution than coarse.

3. **Increment**: When the resolution is set to Increment, one encoder turn click will change the lowest digit of the displayed readout.

4. **Native**: The value Layers absolute and relative offer this mode to directly access the smallest possible value change of the parameter resolution.

|                                            |                                                                                                                                                  |
| ------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| ![](/img/grandma3/2-3/tip_gray-269535.png) | **Hint:**                                                                                                                                        |
|                                            | When Native mode is selected, if a dimmer channel is based on 8/16/24 bit, one encoder turn always results in a one-digit change in DMX output.  |

 An encoder displays the current resolution in the center of the encoder symbol within the encoder bar:

![](/img/grandma3/2-3/img_encoder_resolution_coarse_v1-5_1-258f72.png)

Encoder resolution coarse

![](/img/grandma3/2-3/window_encoder_fine_1-02ef60.png)

Encoder resolution fine

![](/img/grandma3/2-3/img_encoder_resolution_increment_v1-5_1-c35a5f.png)

Encoder resolution increment

![](/img/grandma3/2-3/window_encoder_native_1-6733d1.png)

Encoder resolution native

Furthermore, the factors of value change between turning the inner encoder and all other encoder actions can be defined. See [User Settings](/grandma3/2-3/user_settings/) for more information.

All factors can be selected from a list of predefined factors:

| Predefined Factors | Background Used Factors |
| ------------------ | ----------------------- |
| Div50              | 0.02                    |
| Div25              | 0.04                    |
| Div10              | 0.1                     |
| Div5               | 0.2                     |
| Div2.55            | 0.39                    |
| Div2               | 0.5                     |
| One                | 1                       |
| Mul2               | 2                       |
| Mul2.55            | 2.55                    |
| Mul5               | 5                       |
| Mul10              | 10                      |
| Mul25              | 25                      |
| Mul50              | 50                      |
| Disable            | 0                       |
