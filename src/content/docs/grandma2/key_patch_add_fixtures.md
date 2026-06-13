---
title: "Adding fixtures to the show"
description: "Quick steps:"
product: grandma2
lang: en
sourceUrl: "https://help.malighting.com/grandMA2/en/help/key_patch_add_fixtures.html"
scrapedAt: "2026-06-12T21:28:09.248Z"
---
**Quick steps:**

1. Press Setup and Patch & Fixture Schedule to enter the EditSetup menu.

2. Add a new or select an existing layer.

3. In the layer, Add new fixture.

4. Follow the Fixture Wizard.

   1. Import a fixture from library (internal or from USB) or select already imported fixtures from the list.
   2. Change the quantity.
   3. Set a Fixture ID and/or Channel ID.
   4. Set the start address for the first fixture.
   5. Tap Apply.

5. Check that the result is correct.

6. Exit the EditSetup menu.

7. Tap Yes to confirm the changes.

This was the quick steps - Keep reading for more details.

 

Adding fixtures to the show is done from the **EditSetup menu** - also called Patch & Fixture Schedule. This can be found by pressing the Setup key and then Patch & Fixture Schedule.

It could look like this:

![](/img/grandma2/menu_editsetup_v3-3-c74c3e.png)

_EditSetup menu_

This is one of the essential access points for everything that has to do with your entire fixture setup structure. A very important menu.

It main part is divided into a left and a right side. There is a lot of buttons on the bottom and three important one on the right most side.

The left side is **Layers** and the right side is the list of fixtures in the selected layer. In the picture above it is the "Dimmer" layer and all the Dimmer fixtures.

## Layers

Read more details about Layers in the [Working with Layers topic](/grandma2/key_patch_layers/).

The left side of the main window is a list of Layers. Any fixture added to the show needs to be put in a layer.

You can decide how you want to organize the layers. All fixtures can be put in the same layer or organized in multiple layers - by fixture type or location. It is completely up to you. But you need at least one layer.

When you have a layer then select it by tapping it. Then you can see all the list of fixtures in the layer on the right side of the menu. At the bottom there is a lot of buttons. We are going to use some of them. Please notice that the text on them changes depending on what side was tapped last - the layer list or the fixture list. The function is the same it is just a matter of affecting layers or fixtures.

## Create a Layer to put fixtures in it

You can add a layer by tapping in the layer part of the screen. You could tap where it says "New".

Then tap where it says Add Layer. Now opens the Enter Name pop-up where you can give the new layer a name.

Type a name and finish by pressing Please (Enter).

When you create an empty layer, then the console will help you to the next logical step - to add fixtures in the layer. So the next thing you are presented with is the Fixture Wizard.

## Adding fixtures to an existing layer

If you already have layers, then you can add new fixtures in them. Select the layer on the left side and then tap somewhere in the fixture list (the right side).

Now you can tap the button that says Add Fixtures. If the menu is on screen 1 then you can also press the X1 key.

This opens the Fixture Wizard.

## Using the Fixture Wizard - Part 1

When you add a fixture to your layers you are guided by the Fixture Wizard.

If you are not already presented with the wizard then you can get to it by tapping on the layer, tap new in the fixture list and then tap the Add Fixture button.

The wizard could look like this:

![](/img/grandma2/popup_fixture_wizard_v3-3-9f24c4.png)

_Fixture Wizard_

This pop-up is also divided into a left and right side.

The left side is all the fields we need to fill out for the grandMA2 to add and be able to use the fixture.

The right side is an area that changes depending on what input field you currently have selected on the left side.

The first thing you need to select is what fixture type you want to add to your show.

To make sure you are working with the correct input field, please tap where it says Please select fixturetype. The right side now shows you a three structure with minimum two objects: "From Library" and "Dimmer 00 (DMX1)".

The general idea is that the console have a large library of fixture types. You then import a fixture type into the show file. That is a copy from the library. It can then be modify this copied fixture type in your show file without it affecting the original fixture type in the library. You can of course export the fixture type from your show file back into library if you think you need the modified fixture type again in a different show file.

The library does not have to be the one in the console - it can be a library on a USB stick.

As a default you will always have the standard "Dimmer" fixture type imported when you create a new show. If this is all you need please jump directly to [Using the Fixture Wizard - Part 2](#fixture_wizard_part_2). Keep reading if you need to add other fixture types.

## Importing a fixture type from the library

When you tap the From Library button you get the **Import Fixture Type** pop-up. It looks like this:

![](/img/grandma2/popup_import-fixture-type_v3-3-136d85.png)

_Import Fixture Type_

The library is basically one big long list of fixture types. This list can sorted and it can be filtered by manufacturer and/or fixture name.

At the top of the list you can select what library you are using - it is the "Select Drive" drop down.

For the grandMA2 to be able to see the fixture types they need to be in the correct folder. If you insert a USB stick and open the [Backup menu,](/grandma2/key_backup_menu/) then it automatically create the folder structure needed.

Fixture types need to be in the folder called "library". This folder need to be inside a folder called "gma2".

![](/img/grandma2/img_usb-file-structure_library_v3_2-76dd72.png)

_USB file structure_

When you have selected the drive then you will see all the fixture types in one list.

The two green input fields are the two filters that you can apply. These can be used to filter on a manufacturer name and/or the name of the fixture.

It is a good idea that you might type (some part of) the manufacturer name. You do not need to write the entire name, just a unique part of it. If for instance you want to find a fixture from Clay Paky, you only need to write "clay" or "paky". Now the list only shows Clay Paky fixtures. The filter will show all manufacturers with the letters you write, in any part of their name. So if you write "ma" then you get a long list. The first manufacturer might be "Altman" - the letters "ma" are in it. Uppercase letters are not distinguished.

Same goes for the fixture filter. This filters on the fixture name. Try not to be more specific then you need to be. If you are looking for a Clay Paky Alpha Spot QWO 800, they you just need a manufacturer filter "clay" and a fixture filter "qwo". Since no one else currently have a fixture with "qwo" in the fixture name, we do not really need the manufacturer filter.

On the right side of the two filters you will find a Clear Filter button. This will remove any input you have typed in your filters.

Below the filters you have the list of fixtures.

There are several columns in this list:

- **Manufacturer:**\
  This is the name of the manufacturer of the fixture.
- **Fixture Name:**\
  This is the name of the fixture.
- **Mode:**\
  Many fixtures have several different modes. This can be a way a LED bar might be separated into different sections or different operational modes in a moving head. If a fixture types doesn't have a mode then it often have a "00" mode. The default Dimmer fixture type is an example of this.
- **DMX Footprint:**\
  Close connected to the Mode is the amount of DMX channels a fixture uses.
- **Instances:**\
  Some fixtures might be separated into different sections called Instances. This could be a LED bar with six individually controllable sections. It can also be a fixture like the Martin Aura where the fixture have two different color systems in the same moving head.
- **Info:**\
  Here you can see any relevant info text.
- **Filename:**\
  This is the actual name of the fixture type file.
- **Filedate:**\
  This is the date the file was saved.
- **FileSize:**\
  This is the size of the fixture type file.

You can choose the display information about the DMX channels below the list. If you tap the ![](/img/grandma2/icon_info_v3-2-71421d.png) in the title bar then you will see the list of DMX channels and what function they have.

When you have found the fixture you need to tap it in the list and the tap the Import button in the lower right corner.

If you do not want to import any fixture type anyway, then you can close the pop-up by tapping the X in the upper right corner.

## []()Using the Fixture wizard - Part 2

If you have just imported a fixture type then this is automatically selected. If you have not, then you need to tap the, already imported, fixture type you want to add.

Now the cursor jumps to the **Quantity** input field. This is where you set the amount of fixtures you want to add.

 

You can see the top two input fields are the fixture type you selected and the second is the **Name** of the fixture. The suggested name comes from the fixture type definition. And it adds a space and a number (1) to the name. The result of this added space and number is that all the fixtures added will be enumerated from this number. You can of course change the name.

 

After you have typed the quantity. You need to type the ID numbers.

There are two types of ID number: The **Fixture ID** and the **Channel ID**.

To use the fixture you need to give it at least one of the ID numbers. You can give it both a Fixture ID and Channel ID. It can be the same number but it does not have to be the same.

The difference between the two are whether or not the fixture is visible in the Channel Sheet and the Fixture Sheet.

A fixture with a Fixture ID is visible in the Fixture Sheet (This sheet displays all attributes for the fixture).

A fixture with a Channel ID is visible in the Channel Sheet (This sheet only shows the Dimmer attributes for the fixture).

The console also have a default beginning keyword. This is usually "Fixture" or "Channel". This is what the console assume you are addressing if you do not specify something else.

You can see it in your command line. It could look like these two examples:

\[Channel]>

\[Fixture]>

**Hint:**\
If you want to change what the default keyword is, then you can press the key followed by Please.

If you do not want to give the fixtures an ID number then you need to type "0" in the input field. But remember that you need to give them at least one ID number to be able to select and control them.

 

Depending on what fixture type you have selected, you might have up to 8 different [Patch Breaks](/grandma2/key_patch_dmx_break/). Most fixture only need one, but some multi instance fixtures needs several DMX start addresses.

You can type in the DMX address using the following pattern \[Universe].\[DMX address] - so if you need the fixture to have start address 1 in universe 2, then you need to write 2.1

You can also choose to type the absolute DMX address. In the same example as above you could also type 513 - this is because there are 512 possible DMX addresses in one universe, so the first number in the second universe will be 513.

If you do not want to give the fixtures a DMX address now, then you can type "0" (zero) in the Patch Break.

 

When you are happy with your input then you can tap the Apply button. This takes you back to the EditSetup menu.

## []()A closer look at the fixture list

When you have added fixtures using the Fixture Wizard and tapped Apply, then you are back in the EditSetup. Here you can see the fixture you have added in the fixture list (right side of the screen).

The fixture list shows us a lot of information and we can edit almost all of it. The following is a short description of the columns in the list.

**FixID:**\
This is the Fixture ID number. If the fixture does not have an ID the there is a "-" instead of the number.

**ChaID:**\
This is the Channel ID number. If the fixture does not have an ID the there is a "-" instead of the number.

**Name:**\
This is the name if the fixture. Remember that if you are naming multiple fixtures at once, then you can add a space and a number to automatically enumerate the fixtures from that number.

**Fixture Type:**\
This is the fixture type. If you edit this then you will get the Select Fixture type pop-up. It could look like this:

![](/img/grandma2/popup_select-fixture-type_v3-2-cb4172.png)

_Select Fixture Type_

Here you can select an existing fixture type or you can import a new one (From Library).

If you change the Fixture Type for an already used fixture then you are asked how colors should be transformed:

![](/img/grandma2/popup__color-transform-options_v3-3-91a681.png)

_Color Transform Options_

Here are three buttons that selects how the colors should be transformed from one fixture to the other.

The three options are:

- **Prefer MIXColor:**\
  This will prefer MIXColor and set all color wheels to open white.
- **Prefer Color Wheel:**\
  This will prefer the color wheels and set all MIXColors to open white.
- **MIXColor + Col.Wheel:**\
  This will do a combination of both MIXColors and color wheels.

When you have selected the options you like then you can tap the Transform button or you can choose to not transform the colors by tapping the Do not transform button.

[]()**Patch:**

This is the patch address of the fixture. If a fixture is unpatched then there is a "(-)" here.

Editing the patch cell opens the DMX Patch window. [Read below for more info on this](#dmx_patch_window).

There are two ways you can have the patch address displayed. Below the list is a button called "Patch Readout". This button has two different modes: "Univ.Address" or "Abs. Address".

The first one (Universe) will separate the DMX address into universes. First number is the universe, second number is the DMX address. They are separated by a dot.

The other option (Absolute) will add the address and only display one number. So the first DMX address in the second universe will be displayed as "513". This can be useful with equipment that are subsequently patched. For instance some network dimmer systems are patched using a single absolute DMX number for the address.

The readout is a User setting and can also be changed in Setup -> User -> Settings. Here it is called "Patch Column Readout is absolute DMX address" and it is an On/Off setting.

**React to Master:**

This is "On" as a default. When it is on then the dimmer attribute of the fixture will be affected by the Grand Master, Group Masters and Solo. Turning this off makes sure the intensity is not affect by any such masters. This is great for power relays, blue lights and other stuff you do not want to accidently turn down.

**Pan DMX Invert:**

When this is "On", then the console inverts the DMX values on the Pan attribute.

**Tilt DMX Invert:**

When this is "On", then the console inverts the DMX values on the Tilt attribute.

**Pan Enc. (Encoder) Invert:**

This will invert the direction of the Pan movement when using the encoders. This will make it easier to match the 3D and real world pan movement with the encoder rotation.

**Tilt Enc. (Encoder) Invert:**

This will invert the direction of the Tilt movement when using the encoders. This will make it easier to match the 3D and real world tilt movement with the encoder rotation.

**Pan Offset:**

This can be used to offset the programmed Pan values. This can be very useful if the show has been preprogrammed or it is a touring show, and the fixtures are not hung the way they were planned to be. The offset value is not visible in the Fixture Sheet, but it can be seen in the DMX Sheet. It is a nice function as long the fixtures do not come all the way out to their endpoints in the programming. The number entered here is a degree number and can be a negative value.

**Important:**\
The Pan and Tilt Offset values can also be edited with live output to the fixtures. This can be done in the [Live patching](/grandma2/key_patch_livepatch/), when editing fixtures, or via command line. When this is done for several hundred fixtures at the same time, then this information is distributed live to all stations and NPUs in the session and this is distributed with a small delay in the system. A progress bar is displayed. Please wait until the distribution is done before continuing working. If this is done live for a small group of fixtures, then there should be no delay. If the value is changed in the EditSetup then the values are updated with the show upload.

**Tilt Offset:**

This can be used to offset the programmed Tilt values. This can be very useful if the show has been preprogrammed or it is a touring show, and the fixtures are not hung the way they were planned to be. The offset value is not visible in the Fixture Sheet, but it can be seen in the DMX Sheet. It is a nice function as long the fixtures do not come all the way out to their endpoints in the programming. The number entered here is a degree number and can be a negative value.

**Swap:**

This will swap the Pan and Tilt DMX output.

**Bitmap Disable:**

Turning this "On" will exclude this fixture from being affected by any Bitmap Fixtures.

**Color:**

Here you can add a color to the light from your fixture. This is nice for dimmers, but does not make sense for any fixture with a color mixing system. It is like placing a color gel in front of the fixture. This color is visible in the Stage view, Layout view, the MA 3D and can be visible in Fixture and Channel Sheets. Editing this cell opens the Select Color pop-up:

![](/img/grandma2/popup_select-color_v3-2-1e5034.png)

_Select color_

Here you can use what ever method you like to select the color and tap Please when you are happy or you could tap Reset to White if you do not want any color.

**Pos X, Pos Y, Pos Z:**

This the XYZ position of the fixture in the 3D space. Read more about positioning fixtures in the [Position fixtures in the 3D stage topic](/grandma2/key_patch_position_fixtures/).

**Rot X, Rot Y, Rot Z:**

This the XYZ rotation of the fixture in the 3D space. Read more about positioning fixtures in the [Position fixtures in the 3D stage topic](/grandma2/key_patch_position_fixtures/).

**No Parameter:**

This is for use with MA VPU (= video processing unit) pixel mapping. If this column is set to "Yes", all the programming for this fixture **is lost**, it does not consume any parameters any more in the grandMA2 and the MA VPU will send out the default values defined in the fixture profile additional to the Color RGB 1-3 values. **The idea:** if this flag has been set (No Parameter), the fixtures can still be selected, but only controlled by the MA VPU, not the console. Additionally the set default values for this fixture are transmitted. These values can be changed (for example Dimmer to 100%) in the grandMA2 / Patch & Fixture Schedule / Fixture Types.

**RDM ID:**

This will display the RDM ID of the fixture when it matched in the [RDM Devices](/grandma2/key_rdm_match/).

 

This was all the different columns in the Fixture list.

 

## []()The DMX Patch pop-up

When you edit one or several patch address in the fixture list, then the DMX Patch pop-up. It could look like this:

![](/img/grandma2/popup_dmx-patch_v3-3-c858cf.png)

_DMX Patch_

Again a window that is divided into two sides.

The left side is the fixture you chose to edit. In the picture above it is four spots that was selected and the patch fields where edited.

The right side displays the DMX universe and the DMX addresses.

The Encoder Toolbar have changed to allow you to select a DMX address and actually text the DMX channel.

At the bottom there is several buttons.

### The left side

The left side shows you the fixtures. You can see the ID numbers, Fixture Type, Name and current DMX Address. If it is unpatched then there is a "-" instead of a number.

Below the fixtures you have a button to change if you want the DMX address to be written in Universe or Absolute readout ([follow this link to read details further up on this page](#readout_mode)).

The fixtures here are the ones you selected before editing the patch. The only thing we can change here is the DMX address. The pop-up might close when you have given all your fixtures a DMX address.

The workflow is that you select the"DMX Address" cell for the fixtures you want to give a new patch so the field is blue. Then you can use the right side to find the DMX address.

### The right side

The right side shows you the DMX addresses in the selected universe. On the top right side (just below the yellow "X") you will find a green input field. This shows you the currently selected universe. If you tap it then you can use the calculator to change the universe.

Any DMX addresses that have something patched will have a frame around them. Inside the frame you will see the Fixture ID and Channel ID and maybe the fixture name (if the space allows it).

Below the list of DMX addresses you have a button called **Skip Patched**. If this is active then you cannot select already patched DMX addresses. You are only allowed to select empty one. You can scroll the list using the vertical scroll bar or the encoder (read more about that below).

When you have found the address you want, then you can tap it and this will assign it to the selected fixture (on the left side).

If you have more than one fixture selected, then you will automatically patch all the fixtures starting from the address you selected - There might be a gap between them (see "Offset" below).

 

There are three other buttons below the right side:

- **Unpatch:**\
  Tapping this button will remove any patch information from the selected fixtures.
- **Patch to...:**\
  You can tap this button if you know what DMX address your fixture should have.
- **Offset:**\
  This button can be used to set an offset. Offsets are used when you patch more than one fixture at a time and you want to add a gap between the fixtures. The number you define by tapping the button needs to be bigger, than the amount of DMX channels the fixture uses. If the number is lower than the amount of channels used, then the fixtures will be patched as close as possible. For example if you patch some fixtures that uses 12 DMX channel and you patch then from address 1 with the Offset at 20, then the fixtures will be patched at address 1, 21, 41, 61, and so on.

### The encoders

The Encoder Toolbar have changed when you enter the DMX Patch window. It could look like this:

![](/img/grandma2/img_encoder-toolbar_dmx-patch_v3-3-a02021.png)

_The DMX Patch Encoder Toolbar_

The four encoders can be used to help you patch fixtures.

The left encoder is used to select the fixtures - if you have selected more than one fixture going into the DMX patch window.

The left center encoder is used to select the Universe.

The right center encoder is used to select or scroll through the DMX addresses.

The right encoder is a DMX tester. It can be used to test the DMX address. You can turn it to output a DMX value on the selected address. There is a button used to toggle between percent (0-100) or decimal (0-255) scale. This function is especially nice with dimmers and fixtures where the first channel is the dimmer.

---

## []()The Diagnostics

At the bottom of the EditSetup menu, you will find a button called "Diagnostic". You will find this button on other menus and windows as well.

This opens the Diagnostic pop-up. It could look like this:

![](/img/grandma2/popup_diagnosic_v3-2-b8b033.png)

_Diagnostic_

There are two types of messages: Errors and Warnings. Errors are more severe than warnings, but none of them prevents you from leaving the setup.

The warnings and errors explain the problem.

The warning might not be a problem at all. Often a narrow beam fixture, might be reported as a warning even though it is not a problem (The beam angle is very small).

 

There is only one button for this pop-up. The "Update" button runs the diagnostics again and check if there are still warnings and errors.

---

### []()Leaving the Setup and save your changes

When you are happy with your added fixtures, then you can leave the setup and save the changes. You do this by closing the EditSetup menu by tapping the yellow "X" in the upper right corner.

This gives you a pop-up warning asking you what to do.

There are always three options and if the Diagnostics got warnings or error then you have four options. It could look like this:

![](/img/grandma2/menu_editsetup-warning_v3-2-01d6d3.png)

_Leaving Setup warning_

- **Yes:**\
  This will close the EditSetup and save your changes.
- **No:**\
  This will trough away what you have changed and keep the old settings.
- **Cancel:**\
  This will cancel the exit and you are returned to the EditSetup.
- **Open Diagnostic and Cancel:**\
  This will cancel the exit and return you to the Diagnostics pop-up.

If you tap yes and you have made changes, then your console will upload the changes to the system. This is called a "show upload".

**Important:**\
The system will stop all DMX output while the show upload is running.

 

## Further readings

[Fixture types](/grandma2/key_basic_fixture/)

[Fixture position](/grandma2/key_patch_position_fixtures/)

[DMX profiles](/grandma2/key_dmx_profiles/)

[DMX List](/grandma2/key_patch_dmx_parameter_list/)

[Live patching](/grandma2/key_patch_livepatch/)

[Multipatch](/grandma2/key_patch_multipatch/)

[Export/Import](/grandma2/key_export_and_import/)

[Layers](/grandma2/key_patch_layers/)

[RDM devices](/grandma2/key_rdm/)
