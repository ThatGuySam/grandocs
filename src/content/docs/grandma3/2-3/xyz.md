---
title: "XYZ"
description: "Fixtures can be programmed using XYZ values instead of PanTilt values."
product: grandma3
version: "2.3"
lang: en
sourceUrl: "https://help.malighting.com/grandMA3/2.3/HTML/xyz.html"
scrapedAt: "2026-06-15T18:25:26.585Z"
pagefind: false
---
Fixtures can be programmed using XYZ values instead of PanTilt values.

This offers some advantages over standard PanTilt programming. For instance, when fixtures move from one position to another, they do it in a straight line from position A to B when using XYZ values. When using PanTilt, the fixtures fade from DMX value A to B, this means that two fixtures often do not follow the same path.

XYZ values can, just like PanTilt, be relative and absolute.

PanTilt values can be mixed with XYZ values in a sequence.

All combinations of PanTilt and XYZ, and absolute and relative, are supported.

When XYZ position parameters are added, a Distance attribute is also added. Distance is connected to Pan and Tilt. Pan and Tilt values can, in combination with a Distance (from the fixture) and the fixture's known position, be calculated into XYZ position information. And vice versa. 

|                                                  |                                                                                                                                                                                       |
| ------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ![](/img/grandma3/2-3/important_gray-f4dfbc.png) | **Important:**                                                                                                                                                                        |
|                                                  | When mixing absolute PanTilt with relative XYZ, the value of the Distance attribute in the PanTilt feature is important. This value defines where the relative XYZ values are added.  |

Calling XYZ presets with absolute values or hard values in the absolute layer knocks out absolute PanTilt values. The same is true with relative values. Absolute PanTilt values can be combined with relative XYZ values and vice versa.

When knocking in attributes of one position type (PanTilt or XYZ) while the other one has active values in the programmer or is played back, the values will be converted to the knocked-in position type and converted to match the same position on stage.

If several playbacks with values for both positioning systems run, Pan, Tilt, and Distance will be knocked in.

If the position feature group is knocked in while a transition from one system to the other is happening, Pan, Tilt, and Distance will be knocked in.

On FeatureGroup "Position"."XYZ" knocks in all XYZ attributes, while On EncoderPage "Position".2 will knock in only the attributes that are currently on this encoder page (in most cases, this will be X, Y, Z, and Flip).

The **OffWhenOverriden** setting of sequences turns off playbacks with relative PanTilt when relative XYZ is played back, and vice versa.

## XYZ Attribute Range

The absolute XYZ attributes range from 0 to 100 % of the space they use.

The relative XYZ attributes range from -100 to 100% of the space they use.

The default space for the absolute values is the default stage space volume. Read about stage spaces in the [Stages topic](/grandma3/2-3/patch_stage/).

The physical readout of the XYZ attributes displays the values in meters of the stage (when MArker is set to 0) or of the size of the target space of the selected MArker fixture.

Turning the encoders of the XYZ attributes by one click in the encoder resolution Coarse changes the value in physical readout and natural readout by 1 meter. The other encoder resolutions and encoder factors are also based on this size.

When a MArker fixture is set up on the relative layer for the MArker attribute, the relative XYZ values are relative to the movement space of the MArker fixture.

When a fixture does not have XYZ values active in the programmer or played back, activating the MArker attribute will set the values for XYZ in the programmer to 0.

When the value of the MArker attribute on the relative layer is 0, the absolute MArker value will be used.

|                                                  |                                                                                                                                                                                      |
| ------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| ![](/img/grandma3/2-3/important_gray-f4dfbc.png) | **Important:**                                                                                                                                                                       |
|                                                  | XYZ needs to be activated for fixtures that want to use MArker fixtures. See the [MArker Fixture topic](/grandma3/2-3/xyz_marker/) for more information about this special fixture.  |

## Subtopics

- [Activating XYZ for Fixture Types](/grandma3/2-3/xyz_activate/)
- [MArker Fixture](/grandma3/2-3/xyz_marker/)
