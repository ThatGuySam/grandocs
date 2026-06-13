---
title: "Work with RDM parameters"
description: "After the RDM is turned on and an RDM fixture is discovered, you can:"
product: grandma2
lang: en
sourceUrl: "https://help.malighting.com/grandMA2/en/help/key_rdm_setparameter.html"
scrapedAt: "2026-06-12T21:28:23.756Z"
---
After the RDM is turned on and an RDM fixture is discovered, you can:

- Send RDM commands to the RDM fixture see [Set RDM parameter](<#Set RDM parameters>)
- Add RDM parameter used by the fixture see [Add RDM parameter](<#Add RDM parameter>)
- Delete previous added parameters see [Delete RDM parameter](<#Delete RDM parameter>)

---

## Set RDM parameters[]()

The following examples will explain the set parameter function with the example of changing the fixture mode.

There are two ways to set RDM parameter.

**Requirement:** RDM is turned on and at least one RDM fixture is discovered.

Way A:

1. Open the RDM sheet. Tap on an empty space in the user defined area, tap at Sheets and then at RDM.
2. The **RDM sheet** opens.

   ![](/img/grandma2/window_rdm-sheet_v3-2-e87dab.png)

   _RDM sheet_
3. Scroll with the scroll bar to the column DMX PERSONALITY and tap at the cell you like to change the fixture mode. Press the screen encoder.
4. The **Select RDM Mode** pop-up opens.

   ![](/img/grandma2/popup_select-rdm-mode_v3-2-b1505b.png)

   _Select RDM Mode pop-up_
5. Tap at the mode the fixture should use.

A new mode is set and transmitted via RDM to the RDM fixture.

Way B:

1. Open the RDM devices window. Press Setup, and tap under **Show** at Patch & Fixture Schedule.\
   The **Edit Setup** opens.
2. Tap in the lower right corner at RDM devices.\
   The **RDM devices window** opens. In this window, you can set the parameter of the DMX personality and the DMX start address of the RDM fixture.

   ![](/img/grandma2/menu_matched-rdm-devices_v3_2-f25774.png)

   _RDM devices window_
3. To select the fixture type you like set parameters to, tap at under **Discovered RDM FixtureTypes** at the fixture type.\
   The fixtures to the selected fixture type are displayed on the right side of the RDM devices window.
4. To select the fixture, tap at the fixture in the table on the right screen side.
5. Tap in the lower right corner at RDM Info.\
   The **RDM Parameters** window opens. In the title bar, you can choose between **Show only Set**, **Show only Get**, **Show All**, and **FixtureType Messages**.

   ![](/img/grandma2/menu_rdm-parameter_v3_2-6147a7.png)

   _RDM Parameters window_
6. Tap and hold the **value** cell in the row **DMX\_PERSONALITY**.\
   The **Select RDM Mode** pop-up opens.

   ![](/img/grandma2/popup_select-rdm-mode_v3-2-b1505b.png)

   _Select RDM Mode pop-up_
7. Tap at the mode the fixture should use.
8. Double-check if **Yes** is set in the cell of the column **Poll**.\
   Yes means, that the information is collected from the fixture. If Poll is set to No, you can change the parameter but the changes are not visible in the console.\
   If **No** is set, tap and hold in the cell until **Yes** is set.

A new mode is set and transmitted via RDM to the RDM fixture.

---

## Add RDM parameter[]()

If the fixture uses RDM parameters but those parameters are not transmitted, you can add RDM parameter.

1. Open the RDM devices window.\
   \- Press Setup, and tap under **Show** at Patch & Fixture Schedule.\
   \- Tap in the lower right corner at RDM devices.
2. To select the fixture type you like to add parameters to, tap at under **Discovered RDM FixtureTypes** at the fixture type.\
   The fixtures to the selected fixture type are displayed on the right side of the RDM devices window.
3. To select the fixture, tap at the fixture in the table on the right screen side.
4. Tap in the lower right corner at RDM Info.\
   The **RDM Parameters** window opens.
5. Tap Add.\
   The **calculator** opens.

   ![](/img/grandma2/popup_calculator_add-rdm-parameter_v3-2-94c5eb.png)

   _Calculator - Add RDM parameter_
6. Enter the hex value or tap at one of the standard RDM parameters.

The RDM parameter is added and visible in the RDM parameters window.

---

## Delete RDM parameter[]()

**Important:**\
The delete RDM parameters functions is not oopsable.

You can delete previous added RDM parameters.

1. Open the RDM devices window.\
   \- Press Setup, and tap under **Show** at Patch & Fixture Schedule.\
   \- Tap in the lower right corner at RDM devices.
2. To select the fixture type you like to delete parameters from, tap at under **Discovered RDM FixtureTypes** at the fixture type.\
   The fixtures to the selected fixture type are displayed on the right side of the RDM devices window.
3. To select the fixture, tap at the fixture in the table on the right screen side.
4. Tap in the lower right corner at RDM Info.\
   The **RDM Parameters** window opens.
5. Tap at the to be deleted parameter.
6. Tap Delete.

The parameter is deleted.
