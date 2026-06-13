---
title: "Wheel manager"
description: "If you have arrived at this topic from a link without reading the previous topic, then please read Anatomy of a Fixture Type first."
product: grandma2
lang: en
sourceUrl: "https://help.malighting.com/grandMA2/en/help/key_adv_fixture_anatomy_wheel.html"
scrapedAt: "2026-06-12T21:28:26.414Z"
---
If you have arrived at this topic from a link without reading the previous topic, then please read [Anatomy of a Fixture Type](/grandma2/key_adv_fixture_anatomy/) first.

The **Wheel Manager** lists the different wheels for the fixture. It can be color wheels, gobo wheels, but also scrollers are defined as a wheel.

The wheel manager could look like this:

![](/img/grandma2/menu_fixture-editor_wheel-manager_v3-3-b17c05.png)

_Wheel manager_

There are some buttons at the bottom that add or delete rows in the manager. The Diagnostic button will open a pop-up that list the errors and warnings for the selected row.

The Edit Row button will open an editor where the selected wheel can be defined. Read more [below](#edit_wheel).

Each row is a wheel. The wheels needs to be connected to a subattribute. This is also the only column that can be edited. The **No.** column auto generates a number for the row. The **Name** columns auto generates a name based in the selected subattribute. Editing the **SubAttrib** column opens the Select Subattribute pop-up. It lists all the defined subattributes.

 

## []()Editing wheels

The wheels contain slots. These slots contain a color or a gobo. The editor could look like this:

![](/img/grandma2/img_edit-fixture_wheel-manager_edit-row_v3-3-752db4.png)

_Wheel editor_

There are two buttons at the bottom that adds or delete rows or slots in the wheel.

This is a short description of the columns in the editor:

- **No.**:\
  This is an auto generated number for the row. It cannot be edited. It is this number that is reference when editing the [Channel Sets](/grandma2/key_adv_fixture_anatomy/#edit_channelsets) as the **Slot** number.
- **Media Name**:\
  A name can be added to the row. This name is not used anywhere else.
- **Media Filename**:\
  This cell can be edited if a gobo image needs to be added. Editing this cell opens the **Open File pop-up** browser. It can be used to browse trough the folders and select an image. If a color is selected in the Color column, then a color image is auto generated.
- **Color**:\
  This cell can be edited to add a color to the slot. Editing this cell opens the **Select Color pop-up** where a color can be selected.

Close the editor when the wheel is correct.
