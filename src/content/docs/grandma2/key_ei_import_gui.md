---
title: "Import by using user interface"
description: "There is a dedicated GUI for importing Macros, Effects, Masks, MAtricks, Gobo Bitmaps, User Profiles, and DMX Nodes."
product: grandma2
lang: en
sourceUrl: "https://help.malighting.com/grandMA2/en/help/key_ei_import_gui.html"
scrapedAt: "2026-06-12T21:28:25.765Z"
---
There is a dedicated GUI for importing **Macros**, **Effects**, **Masks**, **MAtricks**, **Gobo Bitmaps**, **User Profiles**, and **DMX Nodes.** 

In the following example is a macro that has to be imported from a USB stick. But it is the same procedure for the other objects.  

**Requirement:**

To be able to import an object it is needed to have the object exported to  an .XML file. Please read the [Export by using commandline](/grandma2/key_ei_export_commandline/) to learn how to do this.

If the object is stored on a USB stick, plug the USB stick into the console or onPC.

**Steps:**

1. Open the **Setup menu** and then tap the Import Export button followed by the Import button and then finally the Macro button.

This opens a pop-up like this:

![](/img/grandma2/menu_show_import-export_import_macros_usb_v3-3-81423e.png)

_Import macro pop-up_

2. Select the tab that matches the USB stick.
3. Select the .XML file on the left side, that contains the macro to import.
4. On the right side is a list of the macros that are stored inside the XML file. An XML file may contain one or more macros. Select the ones to import. Select multiple macros by holding the Ctrl key on the keyboard and tapping the macros on the screen. The selected macros get a blue background.
5. \[Optional] Activate Always ask for Name (tap it until the text is yellow) to rename the macros when imported.
6. \[Optional] Activate Confirm (tap it until the text is yellow) to have a confirm pop-up to appear, after the import.
7. \[Optional] Activate Overwrite (tap it until the text is yellow) to overwrite any macros that might already exist on the location where to import to.
8. Select where to place the imported macros in the macro pool. This can be done by specifying a number in the green input field or tap Use to toggle between the **Use Earliest** and **Use Latest** options. Earliest means the first available free macro pool object. Latest means the next available pool object after the last one used.
9. Tap Import 
10. \[Optional] If the "ask for name" button is selected, then a dialog box is now prompted for a new name - for each macro to import.
11. \[Optional] If the "confirm" option is selected, tap Ok in the pop-up that informs about the amount of imported macros.

**Result:**

The selected macros are imported to the selected location in the macro pool.
