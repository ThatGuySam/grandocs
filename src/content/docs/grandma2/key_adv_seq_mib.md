---
title: "Working with MIB"
description: "This topic is about some of the details concerning MIB (Move In Black). The What is MIB topic might be a good place to start if MIB is new to you."
product: grandma2
lang: en
sourceUrl: "https://help.malighting.com/grandMA2/en/help/key_adv_seq_mib.html"
scrapedAt: "2026-06-12T21:28:15.606Z"
---
This topic is about some of the details concerning MIB (Move In Black). The [What is MIB topic](/grandma2/key_cs_what_is_mib/) might be a good place to start if MIB is new to you.

## MIB values

The MIB value is assigned in the MIB column in the [Sequence Executor Sheet](/grandma2/key_cs_cue_sequence/).

An asterisk "\*" in the MIB cell indicates that a cue is capable of MIB, but no MIB value is given. A MIB value in red, indicates that a MIB value is given, but the cue is not capable to MIB. "MIB capability" is defined as a cue with one or more fixtures with dimmer-value above zero, and previous state of dimmer-value not above zero (= fixture is fading up) - and one or more other additional attributes (= something to preposition).

Editing the MIB cell, will open a pop-up like this:

![](/img/grandma2/popup_select-mib_v3-3-2ec50d.png)

_Select MIB pop-up_

This provide three options at the top, and then a list of all the previous cues. This list of cues only displays the cues that are before the cue being edited.

There are more options than this pop-up displays. This is a complete list:

- **None** / **Off** / **O** (the letter "o" - not number) :\
  Same as no value, do not preposition.
- **Late** / **L** :\
  Same as the numeric value "-1", preposition 1.000 Cue-numbers before.
- **Early** / **E :**\
  Same as numeric value "0" (zero), preposition as early as possible.
- **\[x.xxx] :**\
  Preposition from Cue number x.xxx.
- **-\[x.xxx] :**\
  Preposition x.xxx Cue-numbers before. This option can only be set using the command line - keep reading.

 

## Setting MIB via Command line

MIB is a property of cues and its value may be assigned with standard syntax:

\[Channel]> Assign Cue /MIB=late

Assign MIB value "Late" to current cue and all its parts.

 

\[Channel]> Assign Cue 101 /MIB=99

Assign cue 99 as MIB value for cue 101.

 

\[Channel]> Assign Cue 1 Thru 10 / MIB=Off

Removes MIB from Cue 1 thru 10.

 

\[Channel]> Assign Cue 15  / MIB=-4

Assign MIB value "-4" to cue 15. This will make the prepositioning to cue 15 happen in cue 11 - assuming cue 11 through 15 exist.

 

A useful MIB macro could be something like this:

Assign Cue /mib=off

SetVar $mibvalue=("Please enter MIB")

Assign Cue /mib=$mibvalue

Pressing the macro and the Please key, will disable MIB for the current cue, while pressing the macro, then a number followed by Please, will set the MIB value for the current cue.

 

## MIB timing

MIB uses two general time settings: **MIB Delay** and **MIB Fade**.

**MIB Delay** is the time to wait from a fixture have faded out until it starts to MIB, while **MIB fade** is the actual time used to preposition.

Increasing MIB Delay may be useful for fixtures with slow dimmer or afterglow. Increasing MIB Fade may be useful for noisy fixtures, or if the movement of the fixture body is visually disturbing for the audience.

These two settings can be found in Setup -> Show -> Playback  MIB Timing.

 

In addition to the general MIB timing, it is also possible via the **Fixture Types Editor** to set individual MIB Fade and it is possible to disable MIB per Attribute per Fixture Type. It is also possible to disable MIB for each fixture. This can be set in the **Fixture Editor pop-up**.

It is possible to set a MIB Delay for each "module definition" per Fixture Type.

 

## MIB feedback

When MIB Delay is active, or MIB is "put on hold" the backlight of the executor keys will blink fast.

When MIB Fade is active (fixtures are moving to preposition), the backlight of the executor keys will blink slowly

Attributes which have positioned using MIB will be displayed in the ExecutorID and SequenceID layer of the Fixture Sheet with a slightly paler shade of the usual background color (green for selected Executor, yellow for others), to indicate that the source of the value is from a future cue. Please read more about the colors in the [System Colors topic](/grandma2/key_ws_colors_system/).

 

## Pitfalls

When using MIB, the desk is not only tracking values from earlier cues, it is also tracking forward and outputting values from future, non-executed cues. This is sort of "Back to the Future", with dilemmas you find in time-travel-theory.

Looking at the example above the fixture is turned on in cue 1 in a blue color, then it turns off in cue 2. In cue 4 it is back on in a red color.

As we do not want to see the scroll to red in cue 4, we mark this cue as MIB Early.

- everything is fine, fixture 1 preposition after fading out in cue 2

Now we might be in cue 2.5 and want to make some changes...

- We turn On fixture 1, - it is red - looks good
- update the cue using Cue Only

Next time we play back the sequence, cue 2.5 does not look the same!

Last time we played back the sequence, fixture 1 was red because it had prepositioned to cue 4, however as it is now used in cue 2.5 it cannot preposition until after the fade out in cue 3. Thus is will be blue when it is faded up in cue 2.5.

These issues may be minimized by not prepositioning too early, or by activating "MIB Never" in the Executor options, if you are to make major changes to your cues - Executor Options are described in the [Executor Options topic](/grandma2/key_adv_exec_options/).
