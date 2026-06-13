---
title: "Different fixture types"
description: "The name Fixture Type covers a wide range of different actual fixtures but also elements like Media Servers and virtual elements like Cameras for MA 3D."
product: grandma2
lang: en
sourceUrl: "https://help.malighting.com/grandMA2/en/help/key_basic_fixture_type.html"
scrapedAt: "2026-06-12T21:28:10.270Z"
---
The name Fixture Type covers a wide range of different actual fixtures but also elements like Media Servers and virtual elements like Cameras for MA 3D.

It is important that a Fixture Type definition includes information about the correct type. It has influence on how the fixture is handled by the grandMA2 software - especially MA 3D.

It is called **Class** in the Fixture Types Module Manager.

 

When grandMA2 handles variable color systems it is called MixColor (see [ColorMix vs. MixColor topic](/grandma2/key_basic_fixture_colormix_mixcolor/) for details). Independent on it being a CMY or LED color system in the fixtures, it is still the same attribute defined in the fixture profile. It is the ColorRGB1 to ColorRGB22 - see the [ColorMix vs. MixColor topic](/grandma2/key_basic_fixture_colormix_mixcolor/) for a list of the ColorRGBs.

The difference in how the grandMA2 interprets the ColorRGBs are in physical range the attributes are given. If the light is added then the physical range is set from 0 to 1. If the attribute subtracts color then the physical range is set from 1 to 0.

 

 

 

The following subtopics explains some of the difference between the types.

## Subtopics

- [Conventional](/grandma2/key_basic_fixture_type_conv/)
- [LED](/grandma2/key_basic_fixture_type_led/)
- [Mirror](/grandma2/key_basic_fixture_type_mirror/)
- [Moving lights](/grandma2/key_basic_fixture_type_moving/)
- [Media server](/grandma2/key_basic_fixture_type_server/)
- [Virtual fixtures](/grandma2/key_basic_fixture_type_virtual/)
