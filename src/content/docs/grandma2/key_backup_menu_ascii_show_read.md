---
title: "ASCII show read"
description: "The grandMA2 can currently import shows from Strand, Transtechnik,nd ADBonsoles, that have made an ASCII export of the show."
product: grandma2
lang: en
sourceUrl: "https://help.malighting.com/grandMA2/en/help/key_backup_menu_ascii_show_read.html"
scrapedAt: "2026-06-12T21:28:06.427Z"
---
The grandMA2 can currently import shows from **Strand**, **Transtechnik**,**** and **ADB** consoles, that have made an ASCII export of the show.

The import will read the ASCII file and and create fixture profiles based on the text. It does not import fixture profiles from the library.

ASCII importing does not give you a perfect show. You can get the setup and the show data, but might need to make a lot of adjustments to have a show that look the same.

It is only possible to import an ASCII show from the USB tab in the Backup Menu.

When the ASCII Show Read button is selected in the tab, then a ASCII file needs to be selected.

## The Overview

After a file have been selected, then the ASCII Show Read pop-up is displayed. This pop-up is separated into different tabs. The first one is called **Overview** and could look like this:

![](/img/grandma2/popup_ascii-show-read_overview_v3-2-2c66a6.png)

_ASCII Show Read pop-up - Overview_

 

In the overview the console manufacturer and console type that made the export can been seen. It is also possible see the show file name from the ASCII file.

In the Overview tab it can be decided where the Default Sequence should be. And if should be created and assigned to an Executor and Executor page.

It can be decided if the submasters from the ASCII file are wanted and what page they are desired. It can be chosen from what group number the inhibits from the ASCII file are wanted.

It is also possible to choose the first sequence number from the Effects. And if they should be assigned to Executors and then the first Executor page.

Effects from ASCII shows are imported as sequences.

## Attribute

Before importing any data, you need to make sure the attributes from the ASCII file matches the attributes in the grandMA.

This can be matched and changed in the Attribute tab. It could look like this:

![](/img/grandma2/popup_ascii-show-read_attribute_v3-2-b685da.png)

_ASCII Show Read pop-up - Attribute_

 

If it is empty then you can try to press the Default button.\
Now the attributes from the ASCII file can be matched with the grandMA2 attributes.

If this is not matched correctly show data will be lost.

Selecting one of the MA attribute allows this to be changed to any of the existing attributes in the MA.

Attributes that does not exist can be created in the [Attributes and Encoder Grouping](/grandma2/key_patch_attributes/) window.

## Adjusting the settings

When the attributes matches, then you need to make sure the settings match the ASCII show file.

The settings are the ones in the lower right corner.

### Page Width setting

The first setting is the Page Width - it does not have anything to do with the ASCII file, but it has to do with the console. If you are working on a grandMA2 light or grandMA2 ultra-light, then you might want to set the width to 15. If you are working on a grandMA2 full-size, then you could set the width to 30. Those are the two options.

### Universe size setting

Some older consoles are set to only have 500 DMX channels per Universe. This Universe setting allows you to change if the patch should be regarded as 500 or 512 DMX channels.

### Patch setting

Some consoles allowed an alternative DMX address. This Patch setting allows you to import the primary patch "Patch 1" or the secondary patch "Patch 2". If you are in any doubt, then just leave this setting at "Patch 1".

### Link setting

The Link setting has two options: "Go" or "Toggle". This decides whether the triggered effects gets a Go or Toggle commend in the CMD column in the Default sequence. All Effects are sequences that are executed from the CMD column.

### Effects priority setting

The **Effect Prio.** setting have two options: "LTP" or "High". The imported effects will use the setting chosen here.

Remember that Effects are imported as sequences and depending on your settings in the Overview they are assigned to Executors.

It is always possible to change the priority later if needed.

## Importing the Setup and Data

When the settings are correct then you can import setup and show data.

This can be done all at once by tapping the Complete button. This will load the Setup and the Show Data. This is good if you know that it will work and there are no errors.

It is also possible to do it in two steps. If the Setup Only button is tapped, then the fixture schedule and the patch is displayed. Then you can check that all is there and the patch is ok, simply by opening the setup.

**Restriction:**\
If the Setup is not correct, then the Show Data will not import correctly.

After you have checked the setup, then go back to the ASCII Show Read in the Backup Menu. You might be asked for the show file again. Please select the same file.

Now tap the Data Only button, this imports the Show Data.

 

Using the Setup Only and Data Only buttons also allows you to import the separate parts. For instance if you only need the setup and patch from a show or if you already have everything patched and just need the show data. The Data Only import is looking for the ID numbers when it imports. So if a fixture exists and is correctly patched then the data will import.

## Log files

Importing from the show file will create different log files. These files can be seen in the three remaining tabs. The log files also exists in the "temp" folder in the consoles structure. To get to them a FTP connection is needed. Read about it in the [FTP Connection to Console and NPU topic](/grandma2/key_network_ftp/).
