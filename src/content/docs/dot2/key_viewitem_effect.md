---
title: "Effects"
description: "To go to the Effects Editor View on screen 1, press Effect on the console or press the loop ! in the title bar of a preset type view."
product: dot2
lang: en
sourceUrl: "https://help.malighting.com/dot2/en/help/key_viewitem_effect.html"
scrapedAt: "2026-06-12T21:29:43.364Z"
---
To go to the Effects Editor View on **screen 1**, press Effect on the console or press the loop ![](/img/dot2/dot2_viewsandwindows_controlelements_titlebar17_1-0-61a72e.png) in the title bar of a preset type view.

![](/img/dot2/dot2_viewsandwindows_effectsview01_1-0-29e759.png)

_Figure 1: Dimmer Effects Editor __View on screen 1_

To open the Effect View on **screen 2**, tap More... in the [view bar](/dot2/key_widget_viewbar/) and then Effects.

![](/img/dot2/dot2_viewsandwindows_effectsview18_1-2-7a5723.png)

_Figure 2: Dimmer Effects __View on screen 2_

The effect view depends on the selected fixtures in the [fixture view](/dot2/key_viewitem_fixture/) and the selected preset type in the [preset type bar](/dot2/key_widget_presettypebar/).

For the following preset types are predefined effects available:

- Dimmer
- Position
- Gobo
- Color
- Beam
- Focus

To go to the **Dimmer Effect View**, select Dimmer in the [preset type bar](/dot2/key_widget_presettypebar/).

The title bar displays in which effect view you are, e.g. Dimmer Effects.

The tiles on the left side of the view, are the available effects for the selected fixture and preset type.\
The effects view on screen 2 displays only the available effects.

The buttons on the right side of the view, are additional options for the effect.

The current selected effect has a white frame around the tile.

In the upper left corner is the object number of the effect.

---

## Off Effects

Every effect view has the Off function.\
Tap off, to discard a running effect from the fixture selection in the programmer.\
If you tap Off in the dimmer effects view, all dimmer effects will be discarded in the programmer.

**Example:**\
Let´s assume, you have a running dimmer effect in the programmer and additional pan tilt values.

![](/img/dot2/dot2_viewsandwindows_effectsview02_1-2-373cb4.png)

_Figure 3: Running dimmer effect_

To discard only the effect values from the selected fixtures, open the **dimmer effect view** and tap Off.

![](/img/dot2/dot2_viewsandwindows_effectsview03_1-2-a53e15.png)

_Figure 4: Dimmer effect is off_

The dimmer effect is discarded from the programmer.

---

## Stomp Effects

Every effect view has the Stomp function.\
Tap stomp, to mute a running effect stored on an executor.

To deactivate Stomp, press Clear.

**Example:**\
Let´s assume, you have stored cue 1 with a dimmer effect and you will mute this effect in cue 2.

1. Select the fixtures in the fixture view that should mute the effect from cue 1.
2. Open the dimmer effects view and tap Stomp.
3. Press Store Cue 2 Please.

Cue 1 starts the dimmer effect and cue 2 mutes the dimmer effect.

---

## Stomp Effect in Position Presets

If you store the Stomp effect in a preset, this effect is displayed as a red exclamation mark in the preset pool. 

![](/img/dot2/dot2_stomp-effect_position-presets_v1-3-c7dc1e.png)

_Stomp effect in position presets_

**Important:**\
To store the Stomp effect, run an effect first. 

---

## Effect Options

The effect options are the seven buttons on the right side of the screen.

**Direction <>:**\
The direction <> button is available if you have fixtures with a running effect in the programmer.\
Tap to change the direction of the effect from left to right or reversed.

**Shuffle Selection:**\
The Shuffle Selection button is available if you have selected fixtures in the programmer.\
Tap to mix-up the order of the fixture selection. This is the same as Macro "Shuffle Selection" in the [Macros Pool](/dot2/key_viewitem_macro/).

**Sync:**\
The Sync button is available if effects are running in the programmer.\
Tap to synchronize effects in the programmer. Refer to, [SyncEffects Command](/dot2/key_keyword_synceffects/).

**Align >:**\
Selects the align mode >. Refer to, [Align Key](/dot2/key_key_align/).

**Align <:**\
Selects the align mode <. Refer to, [Align Key](/dot2/key_key_align/).

**Align ><:**\
Selects the align mode ><. Refer to, [Align Key](/dot2/key_key_align/).

**Align Off** (default)**:**\
Turns the align mode off. Refer to, [Align Key](/dot2/key_key_align/).

---

## Dimmer Effects

In the dot2 are six predefined dimmer effects available.

**Soft Dimmer** (object number 1):\
Opens and close the dimmer with softness.

![](/img/dot2/dot2_viewsandwindows_effectsview04_1-2-035f39.png)

_Figure 5: Soft dimmer effect_

**Hard Dimmer** (object number 2):\
Opens and close the dimmer without softness.

![](/img/dot2/dot2_viewsandwindows_effectsview05_1-2-194900.png)

_Figure 6: Hard dimmer effect_

**Ramp Up Dimmer** (object number 3):\
Dimmer snaps to 100% and fades slowly to 0%.

![](/img/dot2/dot2_viewsandwindows_effectsview06_1-2-8b3ea4.png)

_Figure 7: Ramp up dimmer effect_

**Ramp Down Dimmer** (object number 4):\
Dimmer snaps to 0% and fades slowly to 100%.

![](/img/dot2/dot2_viewsandwindows_effectsview07_1-2-e136b6.png)

_Figure 8: Ramp down dimmer effect_

**Dim/P/T Ballyhoo** (object number 8):[]()\
Soft dimmer effect and pan tilt movement.\
This effect is in the position effects as well.

![](/img/dot2/dot2_viewsandwindows_effectsview08_1-2-86d0ed.png)

_Figure 9: Dim/P/T Ballyoo_

**Dim/Tilt Flyout** (object number 9):[]()\
Fixtures are moving from position one to position two.\
After they reached position two, dimmer fades to 0% and the fixtures moves back to position one.

![](/img/dot2/dot2_viewsandwindows_effectsview09_1-2-083d37.png)

_Figure 10: Dim/Tilt Flyout_

---

## Position Effects

In the dot2 are eight predefined position effects available.

**Circle** (object number 5):\
Fixtures moving in a circle.

**Pan Sinus** (object number 6):\
Soft pan effect. Pan of the fixture moves around the current position, for example beginning from the current position 0 the pan moves from - 15 till 15. 

**Tilt Sinus** (object number 7)\
Soft tilt effect. Tilt of the fixture moves around the current position, for example beginning from the current position 0 the tilt moves from - 15 till 15. 

**Dim/P/T Ballyhoo** (object number 8):\
Refer to, [Dim/P/T Ballyhoo](<#Dim/P/T Ballyhoo>) in the dimmer effects.

**Dim/Tilt Flyout** (object number 9):\
Refer to, [Dim/Tilt Flyout](<#Dim/Tilt Flyout>) in the dimmer effects.\
\
**Pan Half Sinus** (object number 22):\
Soft pan effect. Pan of the fixture uses the current position as starting position, for example beginning from the current position 0 the pan moves till 30 and back to 0.\
\
**Tilt Half Sinus** (object number 23):\
Soft tilt effect. Tilt of the fixture uses the current position as starting position, for example beginning from the current position 0 the tilt moves till 30 and back to 0.​\
\
**Figure 8** (object number 24):\
Fixture moves like an eight. The center is the current position.

---

## Gobo Effects

In the dot2 are three predefined gobo effects available.

**2 Gobo** (object number 10):\
Changes between two gobos on the gobowheel.\
Select the gobos with high value and low value in the [gobo preset type view](/dot2/key_viewitem_gobo/), effect mode.

![](/img/dot2/dot2_viewsandwindows_effectsview10_1-2-0ec000.png)

_Figure 11: 2 Gobo effect_

**Gobo <>** (object number 11):\
Gobo rotation speed effect.

**Gobo Index** (object number 12):\
Gobo position effect.

---

## Color Effects

In the dot2 are four predefined color effects available.

**2 Color Soft** (object number 13):\
Changes between two colors with softness.\
This is a mix color effect.

![](/img/dot2/dot2_viewsandwindows_effectsview11_1-2-87028d.png)

_Figure 12: 2 Color Soft effect_

**2 Color Hard** (object number 14):\
Changes between two colors without softness.\
This is a mix color effect.

![](/img/dot2/dot2_viewsandwindows_effectsview12_1-2-7f335c.png)

_Figure 13: 2 Color Hard effect_

**RGB Rainbow** (object number 15):\
A red green blue rainbow effect with softness.\
This is a mix color effect.

![](/img/dot2/dot2_viewsandwindows_effectsview13_1-2-ebe14e.png)

_Figure 14: RGB Rainbow effect_

**Colorwheel 2 color** (object number 16):\
Changes between two colors.\
This is a color wheel effect.

---

## Beam Effects

In the dot2 are three predefined beam effects available.

**Iris** (object number 17):\
Opens and close the iris.

![](/img/dot2/dot2_viewsandwindows_effectsview14_1-2-67ba77.png)

_Figure 15: Iris effect_

**Shutter** (object number 18):\
Opens and close the shutter.

![](/img/dot2/dot2_viewsandwindows_effectsview16_1-2-e69055.png)

_Figure 16: Shutter effect_

**Strobe** (object number 19):\
Changes between fast and slow strobe.

![](/img/dot2/dot2_viewsandwindows_effectsview15_1-2-b7152c.png)

_Figure 17: Strobe effect_

---

## Focus Effects

In the dot2 are two predefined focus effects available.

**Zoom** (object number 20):\
Changes between wide and narrow.

**Focus** (object number 21):\
Changes between minimum and maximum focus.

---

## Encoder Bar Functions

The default encoder speed is without decimal place.\
To change the encoder speed to slow, press the encoder key ![encoder](/img/dot2/encoder-36b017.png) . The encoder speed is with decimal place.\
To change the encoder speed to ultra slow, press and hold the ![ma](/img/dot2/ma-36da5c.png) key and press the encoder key ![encoder](/img/dot2/encoder-36b017.png). The encoder speed equals one DMX step.

![](/img/dot2/dot2_views-and-windows_effect-view_encoder-bar_v1-3-092870.png)

_Figure 18: Effect encoder bar_

To use the second function of an encoder, press and hold the ![ma](/img/dot2/ma-36da5c.png) key.\
To open the [calculator](/dot2/key_view_calculator/), press the encoder.

For detailed information about the settings, refer to [What are Effects?](/dot2/key_wa_effects/).

**High Value or Low Value:**\
To select the high or low value, turn the encoder left or right.

**Speed:**\
To select the speed in BPM (beats per minute), turn the encoder left or right.

**Phase:**\
To select the phase, turn the encoder left or right.

**Width or Softness:**\
To select the width or softness, turn the encoder left or right.

## Groups  and Blocks

It is possible to enable **Groups** and **Blocks** in the effect encoder bar.

**Important:**\
To make **Groups** and **Blocks** visible, press MA. 

![](/img/dot2/dot2_groups-blocks-wings_v1-3-94300b.png)

_Figure 19: Effect encoder bar – groups and blocks_

- To enter numbers in the calculator, tap **Groups** or **Blocks**. 

**Groups:**

Groups divide selected fixtures into groups that move in the same direction.

**Example:**

If you create 2 groups:

- The first fixture will be added to the first group. 
- The second fixture will be added to the second group. 
- The third fixture will be added to the first group. 
- The fourth fixture will be added to the second group and so forth. 

**Blocks:**

Blocks divide selected fixtures into small groups which work as an entity.

**Example:**

 If you created a simple dimmer chase containing 10 fixtures:

- Set the block value to 2. 
- You will then see that the fixtures one and two are moving together in the same direction. 
- The same principle applies to fixtures 3 and 4. 

**None**:

The effects runs through all fixtures. 

**Important:**\
The shaded background symbolizes that **Groups** and **Blocks** are not taken over into the effect editor when editing cues or presets. 

## Wings

Wings divide selected fixtures into smaller groups. These groups are mirrored. 

**Example:**

If you have created a simple dimmer chase containing 10 fixtures. They move from left to right:

- Set the wing to 2. 
- The first 5 fixtures move from left to right. 
- The next 5 fixtures move from right to left. 
- The fixtures move in sync to one another. 

1. Select fixtures. 
2. Press Effect. 
3. Choose an effect. 
4. Tap Phase and the calculator EffectPhase opens.

![](/img/dot2/dot2_effect-phase-calculator_v1-3-d1ddb8.png)

_Figure 20: Calculator effect phase_

To use the wings, tap one of the six predefined wing buttons with the following numbers:

**0...360:**

The effect starts in the middle and moves toward each side in a parallel way. 

**-360...0:**

The effect starts on each side and moves toward the middle in a parallel way. 

---

## Related Links

- [What is the Programmer?](/dot2/key_wa_programmer/)
- [Macros Pool](/dot2/key_viewitem_macro/)
- [Gobo Preset Type View](/dot2/key_viewitem_gobo/)
- [How to work with Effects?](/dot2/key_ht_effects/)
