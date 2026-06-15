---
title: "Attribute Definitions"
description: "Attributes are the building blocks of fixture types. The same building blocks are used throughout the console, and they are what is controlled using the Encoder"
product: grandma3
version: "2.3"
lang: en
sourceUrl: "https://help.malighting.com/grandMA3/2.3/HTML/patch_attribute_definitions.html"
scrapedAt: "2026-06-15T18:25:20.812Z"
pagefind: false
---
Attributes are the building blocks of [fixture types](/grandma3/2-3/fixture_types/). The same building blocks are used throughout the console, and they are what is controlled using the [Encoder bar](/grandma3/2-3/ws_encoder_bar/) when [operating fixtures](/grandma3/2-3/operate_fixtures/).

Each show file has a limitation of 1 024 different attributes.

Attribute definitions describe the relation between Main Attributes and sub-attributes. Attributes are organized in [Activation Groups](/grandma3/2-3/patch_attribute_activation_group/), [Feature Groups](/grandma3/2-3/patch_attribute_feature_group/), and [Deactivation Groups](/grandma3/2-3/patch_attribute_deactivation_group/).

There is a set of 366 predefined attributes with a complete setup and relations. They can be edited, and custom attributes can be created.

It is all done from the sub menus in the patch menu.

![](/img/grandma3/2-3/menu_patch_attribute-definitions_v2-2-5f6e67.png)

_Attribute Definitions_

The attribute definitions have the following columns:

- **Lock**:\
  This column can be used to lock the rows and protect them from editing.
- **No**:\
  This is an auto-generated row number.
- **Name**:\
  This name needs to be a unique identifier. When it is typed, it is locked and cannot be edited.
- **Pretty**:\
  This is the name displayed above the encoders. This input accepts local country characters if typed using grandMA3 onPC.
- **Main Attribute**:\
  This is used to define a hierarchy between the attributes. Editing a cell in this column opens a small **Select Main Attribute** pop-up. Selecting the main attribute makes this attribute a subattribute of the main attribute.
- **Activation Group**:\
  Activation groups are used to activate a group of attributes as soon as one of the members in the group is activated. Read more in the [Activation Group topic](/grandma3/2-3/patch_attribute_activation_group/).
- **Feature**:\
  Features are part of the hierarchy system. Attributes need to be a part of a feature. Read more in the [Feature Group topic](/grandma3/2-3/patch_attribute_feature_group/).
- **Special**:\
  This is information only. It shows how the attribute is visualized in the [3D window](/grandma3/2-3/patch_3d_viewer/).
- **Special Index**:\
  This is information about the index number for the special value.
- **Physical Unit**:\
  The physical units describe the physical properties of the attribute. Read more [below](/grandma3/2-3/patch_attribute_definitions/#physical_unit).
- **Geometry Type**:\
  This can be used as a standard geometry type when using the attribute in new Fixture Types. Read more about geometry types in the [Fixture Types topic](/grandma3/2-3/fixture_types/).
- **Color**:\
  Any attribute can have a color but it is only relevant for the attributes that use "ColorComponent" as the physical unit. Here the color information defines the color of the LED emitter.
- **Intensity**:\
  The intensity value can be used to define the relationship between the Color Components. It is used by the color engine to compensate if, for instance, the blue emitters are much brighter than the green. This intensity information can also be defined in the fixture types. The information in the attribute definition is used if nothing is defined in the fixture type.
- **Natural Readout**:\
  This is the readout type used when **Natural** readout is selected.
- **Encoder Resolution**:\
  This defines the resolution of the encoder controlling the attribute.
- **Log Channels**:\
  This is information only. It shows how often the attribute is used in logical channels of fixture types added to the show.
- **Channel Functions**:\
  This is information only. It shows how often the attribute is used in channel functions of fixture types added to the show.
- **Hide**:\
  This can be used to hide the attribute on the interface. It will not be visible on encoder bars or on any sheets. If the attribute is matched with a DMX channel then it will still be visible in the DMX sheet.
- **MIB**:\
  This can be used to deactivate MIB for an attribute. Edit the cell to set it to Disabled to exclude this attribute. Learn more about MIB in the [Move In Black topic](/grandma3/2-3/cue_mib/).

## []()Add an Attribute Definition

It is recommended to use one of the factory-defined attributes, if possible.

Custom attribute definitions can be created following these steps:

1. Press Menu.
2. Tap Patch.
3. Tap Attribute Definitions on the left side.
4. Select the line in the list, where the new definition should be above.
5. Tap Insert New Attribute at the bottom.
6. Fill in all the relevant cells.
7. Close all the menus and tap Ok to accept the changes to the setup.

Now the definition exists and can be used to create new custom devices.

## []()Physical Units

The physical units are used to describe the physical part of the attribute - if relevant.

For some attributes, this is not relevant. For instance, the selection of a Gobo is linked to an image of the gobo projected, but it is not defined as a physical unit (it is a wheel slot information). Physical unit information is relevant for the attributes that define the rotation of the selected gobo. So the attribute defining the gobo position (index) uses **Angle** as a physical unit. The attribute defining the continuous rotation of the gobo uses **AngularSpeed** as the physical unit.

Editing the cells for physical units (see the column descriptions above) opens the **Select Physical Unit** pop-up.

There are many physical units available on the list. Select the one matching the needed unit.

Subtopics

- [Activation Group](/grandma3/2-3/patch_attribute_activation_group/)
- [Feature Group](/grandma3/2-3/patch_attribute_feature_group/)
- [Deactivation Group](/grandma3/2-3/patch_attribute_deactivation_group/)
