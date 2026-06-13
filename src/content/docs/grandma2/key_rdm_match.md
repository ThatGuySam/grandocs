---
title: "Match RDM devices"
description: "After RDM (= Remote Device Management Protocol) is turned on the grandMA2 starts to discover RDM devices. The discovered RDM devices are displayed in the RDM de"
product: grandma2
lang: en
sourceUrl: "https://help.malighting.com/grandMA2/en/help/key_rdm_match.html"
scrapedAt: "2026-06-12T21:28:23.594Z"
---
After RDM (= Remote Device Management Protocol) is turned on the grandMA2 starts to discover RDM devices. The discovered RDM devices are displayed in the RDM devices window. On the left hand side there are the fixture types, on the right hand side the fixtures.

When working with parameters only you can skip the match RDM devices topic and continue with the topic [work with RDM parameters](/grandma2/key_rdm_setparameter/).

To work with sensors or notifications the RDM devices have to match to the patch. That means you have to select which fixture of the patch belongs to which RDM fixture. Footprint and DMX address have to be the same.

There are two ways to match RDM devices:

- [Match to Fixture manually](<#Match to Fixture manually>)
- [Auto-Match by Patch](<#Auto-Match by Patch>) 

---

## Match to fixture manually[]()

The match to fixture manually is the preferred way when you are not sure if the MA Fixture and RDM Fixture have the same DMX address and the same DMX footprint. If you already double-checked the DMX address and the DMX footprint use the [auto-match by patch](<#Auto-Match by Patch>) function.

![](/img/grandma2/menu_discovered-rdm-devices_v3_2-da67e4.png)

_Discovered RDM devices_

**Requirement:** RDM is turned on.

1. To open the RDM devices window press Setup and tap under **Show** at Patch & Fixture Schedule.\
   The **Edit Setup** opens.
2. Tap in the lower right corner at RDM devices.\
   The **RDM devices window** opens.
3. To select the fixture type you like to match tap at the corresponding fixture type under **Discovered RDM FixtureTypes**.\
   The fixtures of the selected fixture type are displayed on the right side of the RDM devices window.
4. To select the fixture tap at the fixture in the table on the right screen side.
5. If you want to identify this fixture in the lighting-rig tap at Identify.\
   The identify mode of the selected fixture starts. For more information about the identify mode see the fixtures manual.
6. If you have the to be matched fixture selected in the table tap at Match to Fixture.\
   The **Match to MA Fixture** pop-up opens. This pop-up displays all fixtures in your patch.\
   For a better overview you can:\
   \- Search in the green search field for fixture or channel ID.\
   \- Select in the title bar one of the patched layers.\
   \- Choose in the title bar if you want to see **All** fixtures, **Unmatched** fixtures or **Current FixtureType only**.

   ![](/img/grandma2/menu_match-to-ma-fixture_v3_2-25550a.png)

   _Match to MA fixture pop-up_
7. Tap in the table at the fixture you like to match and tap Match.

**Important:**\
RDM universe and DMX universe has to be the same. If they are not the same, double-check the network configuration under **Setup -> Network -> MA Network Configuration** and / or the DMX wiring.

The patch of the selected fixtures matches to the RDM device. A successful match is indicated by green check marks in the field below the fixture table.

![](/img/grandma2/menu_matched-rdm-devices_v3_2-f25774.png)

_Matched RDM devices_

The fixtures are matched.

---

## Auto-Match by Patch[]()

**Important:**\
Make sure that the MA Fixture and RDM Fixture have the same DMX address and the same DMX footprint. If they are not the same [match the fixture manually](<#Match to Fixture manually>).

The auto-match by patch is a fast way to match fixtures.

1. To open the RDM devices window press Setup and tap under **Show** at Patch & Fixture Schedule.\
   The **Edit Setup** opens.
2. Tap in the lower right corner at RDM devices.\
   The **RDM devices window** opens.
3. To select the fixture type you like to match tap under **Discovered RDM FixtureTypes** at the fixture type.\
   The fixtures to the selected fixture type are displayed on the right side of the RDM devices window.
4. To select the fixture tap at the fixture in the table on the right screen side.
5. If you want to identify this fixture in the lighting-rig tap at Identify.\
   The identify mode of the selected fixture starts. For more information about the identify mode see the fixtures manual.
6. Tap Auto-Match by Patch.

The software checks if there is a matched MA fixture with the same DMX address and DMX footprint available. If a matched fixture is found the auto-match is successful. A successful match is indicated by green check marks in the field below the fixture table.

![](/img/grandma2/menu_matched-rdm-devices_v3_2-f25774.png)

_Matched RDM devices_

**Hint:**\
You can also use the [keyword RdmAutomatch](/grandma2/key_keyword_rdmautomatch/) to auto-match RDM devices by using the command line.
