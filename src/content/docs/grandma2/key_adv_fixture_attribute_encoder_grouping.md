---
title: "Attribute & Encoder Grouping"
description: "Full access to the Attribute and Encoder Grouping can be by pressing Setup -> Patch & Fixture Schedule -> Fixture Types -> Attribute & Encoder Grouping."
product: grandma2
lang: en
sourceUrl: "https://help.malighting.com/grandMA2/en/help/key_adv_fixture_attribute_encoder_grouping.html"
scrapedAt: "2026-06-12T21:28:26.539Z"
---
Full access to the Attribute and Encoder Grouping can be by pressing Setup -> Patch & Fixture Schedule -> Fixture Types -> Attribute & Encoder Grouping.

It could look like this:

![](/img/grandma2/menu_attribute-encoder-grouping_v3-3-67e6ef.png)

_Attribute & Encoder Grouping menu_

This menu can do a lot of different things. The attribute part is connected to the structure in the console and it is one of the structures behind fixtures.

 

## Attribute Control

The menu is divided into four squares. Top left is the top level it is the **Preset Types**. Top right is the **Features** inside the selected preset type. Bottom left is the **Attributes** inside the selected feature. Bottom right is the **Subattribute** inside the selected attribute.

Each of these four squares has rows and columns. Each row is an element in structure. Rows can be added or deleted, but be very careful since this is the structure all show data is base on. Especially deleting can remove stored data. Rows are added or deleted using the two buttons at the bottom. They change name depending on which square has focus. This help you keep an eye on where you are currently adding or deleting. An element cannot be deleted before there is no other elements inside it. So the lowest level needs to be deleted first.

The two other buttons at the bottom can be used to open the Diagnostics pop-up listing errors or warnings regarding the selected element. The Move button can be used to move elements. An element can be moved within the selected parent element or it can be moved to a different parent element. Moving within the same parent element is fairly safe, but moving to another parent can be more serious. It is best to do this before starting to program values in the show file.

There are three columns that are common for all four squares:

- **Library Name**:\
  This cannot be edited. It is an auto generated name.
- **Screen Name**:\
  This is the name used and displayed places where the preset, feature, attribute, or subattribute names can be seen.
- **Identify As**:\
  This is used internally by the system and cannot be edited.

 

### Preset Types

The preset types are the highest structural level regarding the attributes and the control of fixtures. When something is added to the fixture schedule, then there is automatically created 10 different preset types. Depending on the functions of the fixtures patched and the current world they can be visible in the [Preset Control Bar](/grandma2/key_ws_preset_control_bar/) present most of the time on screen 2.

**[]()**There is a special column in the preset type. It is called **Default Scope**. Each preset type has a default scope to be used when storing values in the preset pools. Read more about it in the [Preset Pool Options](/grandma2/key_presets_pool_options/).

 

### Features

In each preset type there is at least one feature. The features are visible most of the time in the [Encoder Toolbar](/grandma2/key_ws_encoder_toolbar/).

There are no special columns in the feature.

 

### Attributes

In each feature there is at least one attribute. The attributes are often controllable and visible at the bottom of the [Encoder Toolbar](/grandma2/key_ws_encoder_toolbar/). The values can often be changed using the four encoders below screen 2.

There are several special columns in the attributes.

 

**[]()Encoder Grouping**

Encoder grouping is used to activate the values of other attributes if a single attribute becomes active in the programmer. For instance when the pan attribute is activated, the Tilt is also activated in the programmer.

There are are several grouped encoders (attributes) defined from the factory. They can be modified and new ones can be made.

Editing the cell opens the **Select Group pop-up** that lists all the existing groups. The listing shows the encoder group number and the attributes in the group.

At the top of the list is a **\[No Group]** option. Choosing this removes the attribute from any groups.

At the bottom of the list is a **\[New Group]** option. Choosing this adds a new group with the selected attribute in it.

An attribute can only be in one encoder grouping. If a group does not have any attributes, then the group disappears. Attributes can be grouped across features. For instance the gobo attributes can be grouped with the focus attribute.

 

**[]()Encoder Resolution**

Each attribute can have a default encoder resolution. The resolution can always be changed when needed. Changing the resolution in the [Encoder Toolbar](/grandma2/key_ws_encoder_toolbar/) or the [Encoder Settings](/grandma2/key_ws_encoder_settings/#adjust_encoder_resolution) will also change this default setting.

Editing the cell opens the Select Encoder Resolution pop-up. It looks like this:

![](/img/grandma2/popup_select-encoder-resolution_v3-3-076f03.png)

_Select encoder resolution_

Read more about the resolution in the encoder settings - link above.

 

**Universal**

This cannot be edited. Universal presets only works as real Universal preset for attributes with this column switch on. When it is empty then Universal presets will act like Global presets.

 

**Color**

The **MixColor** (COLORRGB) attributes have a color defined as the color of the LED. This color can be edited here.

 

### Subattributes

Every attribute needs at least one subattribute. Some have more than one. For instance a gobo wheel might have a selection subattribute and a rotation subattribute.
