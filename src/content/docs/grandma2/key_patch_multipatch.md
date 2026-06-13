---
title: "Multipatching"
description: "Multipatching is a function to add extra fixtures to a Fixture ID or Channel ID."
product: grandma2
lang: en
sourceUrl: "https://help.malighting.com/grandMA2/en/help/key_patch_multipatch.html"
scrapedAt: "2026-06-12T21:28:09.437Z"
---
Multipatching is a function to add extra fixtures to a Fixture ID or Channel ID.

Any extra fixture needs its own DMX patch.

Adding multipatch fixtures to the fixture schedule will also add an extra virtual fixture in the stage view and MA 3D.

It does not cost you any parameters to add multipatch fixtures.

You cannot program the multipatched fixtures individually. It is connected to the same ID as the primary fixture. All fixtures, the primary and the multipatched do the same.

Any programming that existed on the primary fixture are also outputted on the multipatched fixtures.

 

This is the first process using the GUI:

1. Press the Setup key and then the Patch & Fixture Schedule button.
2. Select the layer and fixture you want to multipatch.
3. In the lower right corner you will find a button called Create Multipatch - tap it (if the fixture schedule is on screen 1 - and you are on a grandMA2 full-size or grandMA2 light console, then you can also press the X20 key.
4. This opens a calculator pop-up. Enter the amount of multipatched fixtures you want to add the the selected fixture. Confirm by tapping Please.
5. The extra fixtures now have their own line in the list. All the elements with a black background is non-editable.
6. You can change the name and the 3D position and rotation of the extra fixtures.
7. You can add the extra patch address to the extra fixtures.
8. Exit the Fixture schedule and the setup, and change save your changes.

 

The second GUI process involves live patching and the DMX sheet. [Read about it here](/grandma2/key_patch_livepatch/).

 

This is the process using the command line:

\[Channel]> Assign \[DMX-list] At Fixture \[Fixture ID]

Assigning a list of DMX addresses to an existing fixture will create as many multipatch fixtures to your fixture as the list.

You can do the same with Channel ID.

You do not need to type the "At".

### Examples:

Adding an extra multipatched fixture (address 2.1) to Fixture ID 101:

\[Channel]> Assign DMX 2.1 At Fixture 101

Adding five multipatched fixtures (addresses 3.1 thru 3.5) to Fixture ID 201:

\[Channel]> Assign DMX 3.1 Thru 3.5 Fixture 201

Short version:

\[Channel]> as dmx 3.1 t 3.5 f 201

 

Now you have multipatched fixtures.

For more about positioning the fixture in MA 3D or the Stage view, please have look at the [Position fixtures in the 3D stage](/grandma2/key_patch_position_fixtures/) topic.
