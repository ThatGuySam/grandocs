---
title: "Work with effects"
description: "Effects are the dynamic transition from one value to another. It always moves between two values - and only two. We can control how it should get from one value"
product: dot2
lang: en
sourceUrl: "https://help.malighting.com/dot2/en/help/key_ht_effects.html"
scrapedAt: "2026-06-12T21:29:37.086Z"
---
## Effect theory

Effects are the dynamic transition from one value to another. It always moves between two values - and only two. We can control how it should get from one value to the other, we can control the speed and whether all fixtures should do this at the same point on time or if they should be spread out over the looping time.

Each of the different Preset Types have some predefined effects that you can modify. 

All the different effects values are programmer values that you can store in cues. This is the only place we can playback effects. 

Let's examine some of these settings. Let's begin with the two values. In the purple effect title bar you'll find two buttons called Low Value and High Value. These are used to access and change those values.

Some effects can use a Width and Softness.

To learn more about what effects are, please have a look at the [What are Effects](/dot2/key_wa_effects/) and the [Effects view](/dot2/key_viewitem_effect/) help pages.

## Build an effect in your programmer

To build an effect in your programmer you need to select the fixtures you want to use the effect, and you need to select the Preset Type you want the effect to use. Then in the title bar of the preset type tap the effects icon ![](/img/dot2/dot2_viewsandwindows_controlelements_titlebar17_1-0-61a72e.png) - or press the Effect key.

This opens the effects view for the selected Preset Type.

Now you can select one of the predefined effect templates for the preset type you have selected (not "Off" or "Stomp") - there isn't any effects for the Control, Shaper and Video preset types, so please select something else.

The left encoder can be used to adjust the "High" and "Low" value. You can also adjust these by tapping the respective buttons in the title bar. You can use presets as the values.

The center left encoder controls the Speed of the effect. A higher number makes the effect run faster.

The center right encoder controls the Phase. This is the spreading of the fixtures over the time of the effect cyclic loop. If there's one value here, then all your fixture are at the same time in the looping cycle. and the result is that they are all changing together. Even if you now turn the encoder, then nothing really seems to happen. This is because all the fixtures are still at the same point in the loop, we are just moving where in the loop. If you want to spread all the fixtures out evenly in the cycle, then they need to have a phase from 0 to 360 degrees. If you press the encoder, then you can see some predefined spreads. One is called 0..360 and there is one called 0..-360. You can use these two to spread your fixtures evenly in the loop. The difference is the direction of the effect. A third predefined phase is the Mirror (0...360...0), This will split you selection in two and make the effect run in a wing or mirror style. You can also type your own e.g. 0 Thru 180 or -360 thru 0 thru -360. These spreads can also be made using the different modes of the Align key in combination with turning the encoder. Play around with it and also try to exceed the 360 number.

There's often effects called something like "Soft" or "Hard". These effects will change between the high and low values with either a soft (sinus) or hard (PWM) curve. You can often adjust this by using the right encoder while you press the ![ma](/img/dot2/ma_1-85eed0.png) key. 

Dimmer and color effects can often be adjusted in width. The width control how many of your selected fixtures are using the "High" value and how many are using the "Low" value. Width can be adjusted on the right encoder (without pressing the ![ma](/img/dot2/ma_1-85eed0.png) key). Tapping the encoder gives you access to some predefined values called One, Two or Three. These can be used to set the amount of fixtures using the high value.

When a fixture is under the influence of an effect, then there's a magenta marker next to the Fixture ID.

## Store an effect

Once you have build your effect to your liking, then you can store it. You can store it in an existing cue or you can store it in a new cue or even in a preset.

The effects will begin when you run the cue, and it will fade in using the fade time of the cue. 

Note that effects are solely templates in presets. Changes that were subsequently made to the effect do not change the cues which contain this very effect. 

## Stop an effect

You can stop an effect that is running in a cue by stopping the executor or you can program a cue where it stops.

To program a cue where the effects stops you need to have some active "stop" values in your programmer. We use a special effect called "Stomp" to stop effects values.

Select the fixture you want to stop running an effect and select the Preset Type of the running effect. Now open the effects editor by pressing the Effect key. Here you can tap the Stomp button. Don't tap the Off button. This will just take values out of your programmer. It doesn't stop your effect. You need to have the Stomp value in your programmer and store this as a cue after the one where the effect is started. 

If you don't have any fixtures selected when you tap Stomp then you are stopping all fixtures using an effect in that Preset Type.

Effects will stop using the fade time in the cue.

## Grab running effects

If you need to grab an effect from a cue and store it in a new cue, then you need to have the "source" cue running - could be in preview ([What are Preview and Blind](/dot2/key_wa_previewandblind/)) - select the fixtures running the effect and activate the preset type that's running the effect. Now you have these effect values in your programmer and can store it somewhere else.

One of the advantages of storing your effects in presets and then use the (effect) preset in the cue is that it's a lot easier to grab the value. Simply tap the preset.
