---
title: "How to do a PSR"
description: "This topic illustrates the steps needed to perform a Partial Show Read."
product: grandma2
lang: en
sourceUrl: "https://help.malighting.com/grandMA2/en/help/key_psr_how_to.html"
scrapedAt: "2026-06-12T21:28:23.398Z"
---
This topic illustrates the steps needed to perform a Partial Show Read.

**Hint:**\
It is a good idea to save the show before doing PSR. This makes it possible to return to the initial state before the PSR.

## Prepare the PSR

The Partial Show Read (PSR) is initiated from the **Backup Menu**.

1. To access the menu, press the Backup key.
2. Load the show where you would like to import these elements to – Destination Show.
3. Open the Backup Menu again and tap Partial Show Read Initialize.\
   A window opens.
4. Select the show that has the elements you would like to import – Source Show.
5. The window Partial Show Read Prepare opens.

![](/img/grandma2/popup_psr-prepare_v3-3-719874.png)

_Prepare PSR_

The window consists of two parts:

- **Left side:**\
  Displays the current patch. 
- **Gray column – Match to ID**:\
  Is used to match the source fixture to a different (or new) fixture ID.
- **Right side:**\
  Displays the patch in the source show. 

**Hint:**\
The green background color indicates the patch that will be used after the prepare.

6. To change the patch, right-click the desired fixture on the corresponding side.
7. To change the patch of two fixtures, select a line and tap Use Mine or Use Other.
8. The green background is shifted.

**Important**:\
A Partial Show Read can cause double patched addresses. If this is the case, a warning pop-up appears advising to check the patch.

---

## Buttons

1. To select the source information regarding the 3D position of the fixtures, tap Use My 3D Position or Use Other 3D Position. 
2. To select which 3D stage setup is to be used, tap Use My Stage or Use Other Stage. 
3. To filter or mask the fixture list in the main part, tap Filter. 
4. To do an initial selection of the patch, tap Wizard. 

-Tapping the Filter opens the pop-up **Select Display Filter.**

![](/img/grandma2/popup_select-display-filter_v3-3-23af55.png)

_Select filter_

- **All:**\
  Displays all fixtures in the two shows.
- **Matched**:\
  Displays the fixtures that are matched in the two shows.
- **Unmatched**:\
  Displays fixtures that only exist in one of the shows.
- **New**:\
  Displays new fixtures (from the source show).
- **Ignored**:\
  Displays the fixtures that have been ignored.

 

-Tapping Wizard opens the pop-up **Select Wizard**. 

![](/img/grandma2/popup_select-wizard_psr_v3-3-8f5847.png)

_Select fixtures_

Select fixtures that are to be used in the Partial Show Read. 

There are three options:

- **Use Mine**:\
  Uses fixtures in the destination show.
- **Merge Other**:\
  Merges fixtures from the source show in the current show. If there is an overlap of two fixtures, the fixtures in the destination show are used.
- **Use Other**:\
  Uses fixtures from the source show.

5. To prepare the patch and close the window **Partial Show Read**, tap Prepare!

**Important:**\
Data of fixtures matched by ID numbers is used in the current Partial Show Read.

6. The two shows are now prepared.  

---

## PSR Menu

After preparing the two shows, the Backup Menu opens.

1. Tap Partial Show Read.

**Important:**\
If the station is in a session, leave the session to do the PSR. 

2. The window **Partial Show Read** opens.
3. To display the details of filters, tap **Filters (13)**.\
   The tables **My Filters** and **Other Filters** open. 

![](/img/grandma2/popup_psr_v3-3-899075.png)

_Open the window Partial Show Read_

- Left side:\
  Displays a menu that shows all the elements which can be imported.\
   
- Green font:\
  Indicate new elements in the source show.\
   
- Red font:\
  Indicate new elements in the destination show. 

* White font:\
  Indicate the same elements.\
   
* Table "My..":\
  ​Displays the elements of the current destination show.\
   
* Table "Other...":\
  Displays the elements of the source show. 

**Important:**\
The two lists exactly match the pools. It is possible to select one or more elements in the "Other" table. Elements selected are displayed in background.

4. To move the elements selected, tap arrows on the right side of the window.  
5. To move the elements selected to the next location, tap Move At.
6. To match the tables by the numbers of the pool, tap Match By Number. 
7. To match the elements from the column **Other Filters** by name, tap Match By Name. 

**Important:**\
In case multiple elements are used with the same name, data from **Other Filters** is matched to the first matching element in **My Filters**.

8. To automatically search for matching names and numbers and match the elements, tap Match Automatically. 
9. To import the elements, tap Add Selected Items.\
   ​The elements have been imported. 
10. To remove the elements that have already been matched from the structure menu, tap Clean Up. 

After the import close the **window Partial Show Read**:\
-Tap ![](/img/grandma2/icon_close_small_v3-2-1c8fff.png) in the upper right corner of the window. 

**Hint:**\
If there is a match between the content in the source show and the destination show, the font of the element changes to white in the menu structure.

---

## Location Occupied When Importing

If you import to a location that is occupied, the **pop-up Please Confirm** appears.

![](/img/grandma2/popup_please-confirm_psr_v3-3-9ec8ca.png)

_Select PSR mode_

It has three options:

- **Cancel:**\
  Cancels the import.
- **Merge:**\
  Merges the content in the element.
- **Overwrite:**\
  Deletes the existing content and imports the new content.

**Hint:**\
If the show has not been structurally changed or has not been reloaded, it is possible to open the Partial Show Read again without preparing it first. For example, entering **Patch & Fixture Schedule** forces a new PSR Prepare.
