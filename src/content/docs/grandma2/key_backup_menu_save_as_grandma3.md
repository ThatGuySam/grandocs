---
title: "grandMA2 to grandMA3 show file converter"
description: "A grandMA2 show file saved as a grandMA3 show file exports the following elements:"
product: grandma2
lang: en
sourceUrl: "https://help.malighting.com/grandMA2/en/help/key_backup_menu_save_as_grandma3.html"
scrapedAt: "2026-06-12T21:28:06.340Z"
---
A grandMA2 show file saved as a grandMA3 show file exports the following elements:

1. Patch (Setup).
2. DMX Profiles.
3. DMX Universes.
4. Presets with values that include timings.
5. Sequences, Cues, and Cue Timings.
6. Groups, Worlds and Filters.
7. Timecodes.
8. Layouts.
9. Macros.
10. DMX-, MIDI-, and Analog Remotes.
11. Special Masters are converted into Masters in grandMA3.
12. Object appearances are converted into the grandMA3 appearance pool.
13. Executors and Pages are converted.
14. Effect pool objects are converted into preset pool 22 (All 2). This pool will be renamed to Effects. grandMA2 effects will be converted into acceleration and deceleration values. Stomp will be converted to a hard value of 0 with a single step on the relative layer. After this conversion, the user will see instances where the relative layer contains a 0 value and can then decide how to proceed with the absolute layer.
15. Barndoor attributes are converted to shaper attributes in grandMA3 for visualization.
16. Infos in objects are converted to notes in grandMA3.

## Known Limitations

- Only the simple predefined forms of effects in grandMA2 are convertible, yet.
- Effect data in presets and presets that contain only timings without values are not convertible, yet.
- Only executors that have sequences or selective effects assigned are converted.
- Fixture types with more than 8 192 channel sets in an attribute do not convert the channel sets after the 8 192th channel set.
- The grandMA2 Xkeys X5, X6, X15, and X16 are not converted.
- The option "Save to grandMA3" is not supported on grandMA2 onPC running in the Parallels Desktop application.
- Macro commands can not be converted. Macro syntax have to be verified manually by the user in grandMA3.
- Type and target of remotes are not converted.

 

## Save as grandMA3

**Important:**\
The option "Save as grandMA3" works only on a grandMA2 onPC or in Mode2 on a grandMA3 console. For more information, see [Mode2](https://help.malighting.com/Page/grandMA2/mode2_introduction/en).\
If the button Save as grandMA3 x.x.x is not visible, the system requirements for this feature are not fulfilled. For more information, see [system requirements](/grandma2/key_introduction_system_requirements_grandma2_onpc/).

**Requirements:** A created grandMA2 show file.

To save the currently open grandMA2 show file as a grandMA3 show file, follow the steps below:

1. Open the Backup menu, tap Backup or press Backup. The **Backup menu** opens.

   ![](/img/grandma2/window_save_as_grandma3-0f9724.png)

   Backup
2. Tap Save as grandMA3 x.x.x (x.x.x is a place holder for the installed grandMA3 version number). A pop-up opens.

   ![](/img/grandma2/popup_showconverter_3_9-08f5f4.png)

   Pop-up

3) Tap Ok to confirm the pop-up.

The current grandMA2 show file is saved in **C:\ProgramData\MALightingTechnology\gma3\_x.x.x\shared\shows**.

When saving on an USB stick, the grandMA2 show file is saved in **D:\grandMA3\shared\shows**.

Now, this show file can be opened in the grandMA3 software.
