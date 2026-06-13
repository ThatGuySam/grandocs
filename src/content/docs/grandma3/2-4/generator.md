---
title: "Generator - Random"
description: "Generators are objects that allow a dynamic absolute value generation for special purposes, like the randomization of absolute values on attributes."
product: grandma3
version: "2.4"
lang: en
sourceUrl: "https://help.malighting.com/grandMA3/2.4/HTML/generator.html"
scrapedAt: "2026-06-12T21:24:57.649Z"
---
Generators are objects that allow a dynamic absolute value generation for special purposes, like the randomization of absolute values on attributes.

# Random

The generator type **Random** allows randomization of absolute values of attributes in different ways. Randoms are organized in the **Generator** pool. The **Generator** pool is part of the data pools. To address the generator pool objects, use the [Generator keyword](/grandma3/2-4/keyword_generator/).

![The generator pool contains objects og the type Random](/img/grandma3/2-4/window_generator-pool_v2-0-396957.png)

Generator pool

The key to randoms are the different **variance** values. Without the variance, it would be a very simple phaser, but the variance allows the different values to vary between each "loop" of the random.

Randoms are called into the programmer and affect the defined attributes for the selected fixtures. This programmer information can be stored in presets or cues.

Randoms can only affect the values on the absolute layer.

The random generators have many settings that affect how the attribute output is randomized. This is a short description of all the different settings:

- **Attribute**:\
  This is the attribute affected by the random generator.
- **Speed Master**:\
  One of the 15 speed masters or the BPM master can be assigned as a speed controller. 
- **Speed**:\
  Defines the speed at which the attribute values are randomized.
- **Speed Variance**:\
  Defines how big the **Speed** value may differ through the selection.
- **Phase**:\
  Sets the phase of the random between 0° and 360°.
- **Phase Variance**:

  Defines the size of variance of the **Phase** value. If the selected fixtures use the random feature and this value is not 0%, their behavior will change.
- **Low**:\
  Defines the lowest value the random can reach.
- **Low Variance**:

  Defines the degree of variation of the **Low** value. This adds some variation through the selected fixtures for the Low value. This variance acts only on the positive side of the Low value.
- **High**:\
  Defines the highest value the random can reach.
- **High Variance**:

  Defines the size of value variance of the **High** value. This adds some variation through the selected fixtures for the High value. This variance acts only on the negative side of the High value.
- **Attack**:

  Defines the size of the linear transition towards the **High** value.
- **Decay**:

  Defines the size of the linear transition towards the **Low** value.
- **Ratio**:\
  Defines the ratio of how long fixtures will use the **Low** or **High** value. 
- **Ratio Variance**:\
  Defines the amount of variance in the **Ratio** value.
- **Speed Once**:

  When **Speed Once** is set to No, speed changes are applied immediately to the running random. When it is set to Yes, the random must be called again to see the change.
- **Phase Once**:

  When **Phase Once** is set to No, changes to the phase parameters are applied immediately. By default, this setting is set to Yes.
- **Random Start**:

  When **Random Start** is set to No, the random will always start the same way each time Random is started. This might be useful for environments that need a predictable start. When Random Start is set to Yes, the Random will start differently every time it is started.

These settings are applied to a **Random Channel**. A Random can have multiple Random Channels. 

## Create a Random Generator

Randoms can be created by editing an empty pool object. This opens the **Generator Random Editor**.

![This is the Generator Random editor](/img/grandma3/2-4/popup_edit-generator-random_v2-2-2abf79.png)

Generator Random Editor

The top part of the editor contains a sheet area where the Random Channels are rows, and the different settings are columns.

The bottom part has on-screen faders that can be used to edit the selected rows. 

The values can be edited on the sheet and the fader parts.

There are buttons at the bottom for normal actions like Cut, Copy, Paste, etc. This includes an At button, which can be used to apply the random values to the current selection.

There is a special encoder bar when the editor has focus.

![Encoderbar for the Generator Random.](/img/grandma3/2-4/img_encoder-bar_generator-random_v2-1-2fbe03.png)

Generator Random Encoderbar

This encoder bar also allows editing the generator values.

The editor's title bar has a button called Revert. Tapping this discards all current changes to the valid values when the Generator editor was opened.

## Using a Random

Random Generators are not dependent on specific fixtures. They affect attributes. Having a fixture selection and tapping a Random pool object applies the Random object's values to the attributes of the fixtures on the absolute layer. These are programmer values that can be stored or used as live playback.

The [Generator keyword](/grandma3/2-4/keyword_generator/) can also be used to apply Random Generators.
