---
title: "Create filters"
description: "There are two different ways to create filters in the filter pool. You can edit one of the pool objects. This will give you the Edit Filter pop-up. The other wa"
product: grandma2
lang: en
sourceUrl: "https://help.malighting.com/grandMA2/en/help/key_wfm_create_filters.html"
scrapedAt: "2026-06-12T21:28:18.181Z"
---
There are two different ways to create filters in the filter pool. You can edit one of the pool objects. This will give you the Edit Filter pop-up. The other way is when making a temporary filter using the Store key or the At key, you have the option to store it as a new (first available) filter - read more about the temporary filters in the [Use temporary filters topic](/grandma2/key_wfm_temporary_filters/).

The Edit Filter pop-up could look like this:

![](/img/grandma2/popup_edit-filter_v3-3-8f2922.png)

_Edit Filter pop-up_

This pop-up is almost the same if you make temporary filters or if you are creating filters in the pool.

The idea about this pop-up is that you turn off the elements that you want the filter to block.

The attributes that have a yellow text are the ones that are selected and they will allow information to pass through the filter.

It is a little bit hard to see but there are some columns in this pop-up. The buttons on the left side is all the Preset Types in the system. The column of buttons on the right side of those are the Features in the system. The next (up to) four columns of buttons are all the Attributes in the system.

The elements in this list changes with your fixture setup.

On the right side you have three buttons to filter Value, Value Times and/or Effect data layers.

To learn more about Preset Type, Feature and Attribute, please read the [What are attributes, features and preset types topic](/grandma2/key_basic_fixture_attribute_feature_preset/).

To learn more about the data layers, please read the [Layers in Sheets topic](/grandma2/key_of_layers_in_sheets/).

## Title bar

In the title bar there are several buttons. The first two are for zooming in the window. This will decrease or increase the size of the buttons.

There are also two buttons that allow you to select None or All of the attributes.

The last button closes the pop-up.

## Selecting what to filter

When creating the filter you can turn off the elements you do not want passing through.

If you turn off an preset type then you actually turn off the features and the attributes in the preset type. But if you have turned off one element in a preset type then it shows that the preset type (and feature) is turned off.

### Example

In the "Demo Dimmer and More" demo show you have two attribute in the "Dimmer" Feature. They are "Dim" and "Curve".

If you create a filter without "Curve" then the settings will look like this:

![](/img/grandma2/popup_edit-filter_curve-off_v3-3-f02cd0.png)

_Filter without "Curve" attribute_

"Curve" is turned off this also turns off the indication in both "Dimmer" Preset Type and "Dimmer" Feature. The "Dim" attribute is still On and dimmer values will pass the filter.

Preset Type and Feature buttons are only On if all attributes inside them are On.
