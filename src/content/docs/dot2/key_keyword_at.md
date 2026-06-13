---
title: "At"
description: "This page describes the syntax and how to use thAtommand."
product: dot2
lang: en
sourceUrl: "https://help.malighting.com/dot2/en/help/key_keyword_at.html"
scrapedAt: "2026-06-12T21:29:47.798Z"
---
This page describes the syntax and how to use the** At** command.

To go to the At command, press the At key on the console.\
**At** is in the [command line](/dot2/key_widget_commandlineinput/), now.

At

## Description

With the **At** command, you can

- apply values to selected fixtures
- apply presets to selected fixtures
- apply a value from a fixture to another fixture
- apply a value to an executor
- use it as a helping command for e.g. a copy function

## Syntax

1\. Apply values to the selected fixtures:

At 50

2\. Apply presets to selected fixtures:

At Preset 1.2

3\. Apply a value from a fixture to another fixture:

Fixture 1 At Fixture 2

4\. Apply a value to an executor.

Executor 1 At 50

5\. Use the **At** command as a helping command for a e.g. a copy function.

Copy Cue 2 At 3

## Example 1

Let´s assume, you will apply the dimmer value to 50 % to the selected fixtures.

At 5 0 Please

All selected fixtures have the dimmer value 50.

Double check the dimmer value in the [Fixtures Sheet View](/dot2/key_viewitem_fixture/).

If the master fader is not set to 100 %, the values in the Fixture Symbol View are smaller than in the Fixture Sheet View.

## Example 2

Let´s assume, you will apply a dimmer preset object to all selected fixtures.

1\. Go to the [Preset Pool Dimmer](/dot2/key_viewitem_preset/).\
2\. Tap a dimmer preset object.

OR

At Preset 1 . 2 Please

All selected fixtures have the selected dimmer preset objects.

## Example 3

Let´s assume, you will apply the values from fixture 1 to fixture 2.

Select at first the fixture which should get the value and then the fixture where the value comes from.

1\. Select the fixture which should get the value

Fixture 2

2\. Select the fixture where the value comes from.

At Fixture 1 Please

Fixture 2 has the value from fixture 1.

## Example 4

Let´s assume, you will apply the executor 3 to the value 50 %.

The physical fader doesn´t move.

To apply the value to the main executor, do not type in an executor number, just Exec.

Exec 3 At 5 0 Please

The executor 3 has now 50 %.

## Example 5

Let´s assume you will copy the Cue 2 to the Cue 3.\
You need the **At** command as a helping command.

Copy Cue 2 At 3 Please

The system asks you to choose the copy method.

## Related Links

- [At Key](/dot2/key_key_at/)
- [Command Line](/dot2/key_widget_commandlineinput/)
- [Fixtures View](/dot2/key_viewitem_fixture/)
- [Preset Pools](/dot2/key_viewitem_preset/)
