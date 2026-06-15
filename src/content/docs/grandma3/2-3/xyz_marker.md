---
title: "MArker Fixture"
description: "A fixture type called MArker from the manufacturer MA Lighting is part of the fixture library for the MA source."
product: grandma3
version: "2.3"
lang: en
sourceUrl: "https://help.malighting.com/grandMA3/2.3/HTML/xyz_marker.html"
scrapedAt: "2026-06-15T18:25:26.738Z"
pagefind: false
---
A fixture type called **MArker** from the manufacturer MA Lighting is part of the fixture library for the MA source.

A MArker is a virtual fixture, that allows operating (for instance, moving around or rotating) objects such as fixtures, actors, or stage props in the 3D stage environment. Learn more about this in the [3D window](/grandma3/2-3/patch_3d_viewer/).

It can also function as a target for XYZ-enabled fixtures. Learn how to activate XYZ in the [Activating XYZ for Fixture Types topic](/grandma3/2-3/xyz_activate/).

MArker fixtures have a **Target Space** in the Stage. The **Space** defines the volume around the MArker. This space is also the boundary for X, Y, and Z attribute values for the fixtures pointing to the MArker. For instance, if the target space is 2 meters wide on the X-axis, then a fixture pointing to this maker can move inside this 2-meter wide space volume. Setting the X attribute to 0 will move the fixture to the minimum X position in the MArkers target space. The default size for a target space is 200 meters on the X and Z axes (very much bigger than the default stage space).

Moving MArker fixture also has a Movement Space. This defines the space volume in which the MArker fixture can be moved. The default values for this space are also 200 meters in X, Y, and Z.

Read more about the spaces in the [Stage topic](/grandma3/2-3/patch_stage/).

## MArker as an Object Mover

For each object or group of objects that shall be moved separately, a MArker fixture needs to be added to the patch in the **Moving** mode.

As soon as a MArker fixture is patched, other patched fixtures can be added as children of the MArker. After applying these changes to the patch, the MArker fixture can be operated like any other fixture in the show.

The MArker fixture provides these attributes:

- X, Y, and Z are used to move the MArker and all its children together along the corresponding axes.
- Rot X, Rot Y, and Rot Z rotate the MArker and all its children together around the corresponding axes.

These attributes are located within the features XYZ and Rotation within the feature group Position in the encoder bar.

Select the MArker fixture and turn the encoders for the described attributes in order to see the MArker and its children moving around in the 3D window. The children of a MArker are always moved around relative to the position set up of the MArker itself.

This means that if the fixtures are already at a height of 5 meters and then attached to a MArker that is at a height of 0 meters, then the MArker needs to move below zero to move the fixtures below 5 meters.

|                                                  |                                                                                                                    |
| ------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ |
| ![](/img/grandma3/2-3/important_gray-f4dfbc.png) | **Important:**                                                                                                     |
|                                                  | A MArker fixture needs to have a DMX address patched in order to be able to see its changes within the 3D window.  |

## MArker as a Target

The MArker fixtures can be a target for other fixtures that are XYZ enabled. Read about activation in the [Activate XYZ for Fixture Types topic](/grandma3/2-3/xyz_activate/).

The MArker fixtures need to have the MArker IDType in the patch and a CID number.

The MArker fixtures can be of the Moving or Still mode. Still markers can be positioned using the patch or any other method described in the [Position Fixtures in the 3D Space](/grandma3/2-3/patch_position_fixtures/) topic. Still MArkers are meant to be used for positions in the 3D space that do not move around. Moving MArkers are meant to be used with positions that can move in the 3D space.

The fixtures with XYZ enabled have a MArker attribute. Giving this attribute a number makes the fixture point to the MArker fixture with the matching number.

Moving the MArker, makes the light fixtures pointing at the MArker move the beams to match the MArker fixtures' position.

If the light fixtures pointing to MArker fixture, are be moved using a different MArker fixture while pointing to a MArker, then the light fixture will try to keep the light beam pointing to the MArker.

## Moving the MArkers by a Tracking System

The input of PSN trackers can be linked to moving MArkers. This allows moving around the MArker and its children via an external tracking system.

To do so, set up the number of markers needed, and add the desired children to them within the grandMA3 software.

Then set up the PSN system and configure the [PSN input](/grandma3/2-3/remote_inputs_psn/) within the grandMA3 software. Within the PSN menu, the columns called IDType and ID allows entering the MArker IDType and ID of the MArker fixture that shall be linked to the input of each tracker.

The column DMX Priority defines at which level of the grandMA3 playback priorities the PSN data shall be processed. This allows overwriting the input of the PSN system by using a sequence with a higher priority if needed.

|                                                  |                                                                                                                                                                              |
| ------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ![](/img/grandma3/2-3/important_gray-f4dfbc.png) | **Important:**                                                                                                                                                               |
|                                                  | The DMX universes the marker fixtures are patched to which are receiving data from PSN trackers need to be set to the [merge mode Prio](/grandma3/2-3/patch_dmx_universe/).  |
