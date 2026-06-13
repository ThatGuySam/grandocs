---
title: "Live patching"
description: "You can change the patch of fixtures without going into the full setup or \"Edit Setup\"."
product: grandma2
lang: en
sourceUrl: "https://help.malighting.com/grandMA2/en/help/key_patch_livepatch.html"
scrapedAt: "2026-06-12T21:28:09.493Z"
---
You can change the patch of fixtures without going into the full setup or "Edit Setup".

If you have not added any fixtures to your show yet, then you need to read the [Adding fixtures to your show](/grandma2/key_patch_add_fixtures/) topic. This is also a good idea to read if you are in doubt about anything described in this topic.

The problem with the full access to the entire fixture schedule is that you might make structural changes to your show file. So when leaving the fixture schedule the console will do a show upload to all connected devices - this causes a stop in the DMX transmission while the upload is running.

So, the thing that does not concern the fixture structure, can be changed without giving a show upload, this is called "Live editing/patching".

**Important:**\
Be aware that live editing a lot of fixtures at the same time might be distributed with a delay throughout all stations and NPUs in the session. For instance changing the pan or tilt offset for several hundred fixtures with one command will cause a delay in the distribution of the values. The real time DMX output has a higher priority and this needs to be calculated at the same time. If possible then only edit a small amount of fixtures at the same time or use the [EditSetup](/grandma2/key_patch_add_fixtures/) instead.

 

## Live patching using the Setup Menu

You can access this in the Setup menu. Press the Setup key and then tap the Patch Only (Live) button.

Then you get the LiveSetup menu. It could look like this:

![](/img/grandma2/menu_livesetup_v3-3-b5d983.png)

_LiveSetup menu_

This is very similar to the EditSetup menu (Long description in the [Adding fixtures to your show](/grandma2/key_patch_add_fixtures/) topic).

Everything that has a gray background can be edited. Everything with a black background is locked and cannot be edited.

Looking at the layers and their content, shows you what you can change "Live" - without causing a show upload.

This includes the DMX address.

 

## Live patching using the Command Line

If you are looking for multi patching then please read the [Multipatching](/grandma2/key_patch_multipatch/) topic. 

This is the process using the command line:

\[Channel]> Assign Fixture \[Fixture-list] At DMX \[DMX-address]

Assigning a list of fixtures (or just a single fixture) will remove all patch data from the fixtures and assign them DMX addresses beginning from the typed DMX address - without an Offset.

You might get a warning pop-up telling you about any collisions.

You can do the same with Channel IDs.

You do not need to type the "At".

### Examples:

Patching fixture 101 at DMX address 2.1:

\[Channel]> Assign Fixture 101 At DMX 2.1

Assigning fixture 101, 103, 105 DMX address beginning from address 5.61:

\[Channel]> Assign Fixture 101 + 103 + 105 DMX 5.61

 

## Live patching by editing the fixture

If you edit the fixture then there is also have the possibility to change the DMX address.

In the top part of the Edit pop-up you will find the fixture (and any multipatched fixtures) and there is a Patch column. Editing this values will change the address.

 

## Live patching using the DMX Sheet and the DMX Tester

To read details about the **DMX sheet** [please follow this link](/grandma2/key_patch_dmx_sheet/). To read about the **DMX tester** [follow this link](/grandma2/key_patch_dmx_testing/).

You can also patch using the DMX Sheet and the DMX tester.

1. Open the sheet
2. Activate "Link Encoders"
3. Locate the DMX address where you want to patch the fixtures and tap the location
4. Know you can tap the right encoder. It opens a screen like this:

![](/img/grandma2/popup_patch-address-to-fixture-channel_v3-2-45735d.png)

_Patch Address to Fixture/Channel pop-up_

This pop-up shows you all the fixtures in the show. It might look like you can edit the DMX address directly in this pop-up, but you cannot.

You can filter the list by typing a Fixture ID or Channel ID in the respective green input fields at the top. There is also a dropdown list that allow you to filter the list to only show unpatched fixtures.

5. Select the fixture you want to patch to the address

6.  

   1. If you want to patch the selected fixture to the selected address then tap the Patch button 
   2. If you want to add a multipatched fixture to the selected fixture at the selected address, then tap the Add Multipatch button ([Follow this link to read more about ](/grandma2/key_patch_multipatch/)[Multipatchin](/grandma2/key_patch_multipatch/)g)

 

A second option for the DMX sheet is to press the Assign key and the Channel or Fixture key followed by the ID and then directly in the DMX sheet, where you want the selected fixture.

 

 

This was some different ways of editing the DMX address of a fixture without creating a show upload.
