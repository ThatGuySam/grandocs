---
title: "LED"
description: "The LED fixture type is for static (non moving) fixture with LED light sources."
product: grandma2
lang: en
sourceUrl: "https://help.malighting.com/grandMA2/en/help/key_basic_fixture_type_led.html"
scrapedAt: "2026-06-12T21:28:10.405Z"
---
The LED fixture type is for static (non moving) fixture with LED light sources.

The fixture type is a fixture that has a surface that emits light in MA 3D. There is no beam of light coming out of the fixture.

The LED fixture is usually set up with different colored LEDs.

The grandMA2 will expect it to be colored LEDs and have their default value at 100%. If the fixture do not have an intensity attribute, then it is customary to add a virtual dimmer to the fixture. The Virtual dimmer will make the color attribute fade up and down when the dimmer attribute is changed.

Having only the red, green, and blue MixColor attributes and no (virtual or real) intensity attribute makes the color attributes fade up and down. This is not the behavior most users expect. Read about adding virtual attributes in the [Anatomy of a Fixture Type](/grandma2/key_adv_fixture_anatomy/#virtual_attributes) topic.
