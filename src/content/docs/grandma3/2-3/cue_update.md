---
title: "Update Cues"
description: "The stored values in a cue can always be changed by storing new values in them."
product: grandma3
version: "2.3"
lang: en
sourceUrl: "https://help.malighting.com/grandMA3/2.3/HTML/cue_update.html"
scrapedAt: "2026-06-15T18:25:25.030Z"
pagefind: false
---
The stored values in a cue can always be changed by storing new values in them.

But if there are active cues and active values in the programmer, it is also possible to update the cue or cue part.

The [Update key](/grandma3/2-3/keyword_update/) flashes when this scenario is valid.

Pressing Update opens the **Update Menu**.

![](/img/grandma3/2-3/menu_update_cue_options_v2-2-edafb3.png)

_The Update Menu with possible update locations._

The main update menu is split into a left and right section. The right side displays a list of possible cue update targets. If there are multiple data pools in the show, columns with the data pool information are shown.

To update the cue part with the current settings, just tap the desired cue part on the list on the right side. This immediately updates the stored values in the selected location. 

Entire cues can also be selected as the update target. If values already exist in single parts and are updated with the **Sequence Update Mode** setting to **Add New Content**, the values will be updated in their respective parts.

Some options are relevant to the cue update process. The current selected values for these options are displayed in the dark yellow area on the right side. These settings can be changed by tapping the right-pointing triangle (![](/img/grandma3/2-3/triangle-right-38abb5.png)). This opens the settings - the example image above shows the settings for the cues.

The top row of the cue settings are the tracking settings. These settings define how and if the updated values are tracked through the following cues. Learn more about these settings in the [What is Tracking topic](/grandma3/2-3/cue_tracking/) and its sub-topics.

The two settings on the second row are **Sequence Update Mode** and **Sequence Mode**.

**Sequence Update Mode:**

The mode toggles between two options. **Original Content Only** updates the already existing values at their original location - possibly a previous cue. **Add New Content** updates the active cue with all the programmer values (filter and worlds are still respected), possibly adding new values and new content to the cue. 

**Sequence Mode:**

The sequence mode is a filter that can be used to filter the list of possible cue parts. The options are:

- **All**:\
  This shows all possible cue parts from all active sequences.
- **Selected**:\
  This only shows the cue part from the selected sequence.
- **Last Go**:\
  This shows the latest cue to receive one of the trigger commands (<<<, >>>, Go+, Go-, Goto, Load, On, Select, Top, Temp, Flash, Toggle On, Pause). This includes if the cue is triggered from a running timecode recording. A sequence (and its cues) can be excluded from LastGo - read about the [Sequence Settings](/grandma3/2-3/cue_sequence_settings/). Last Go only shows cues triggered by the same [user profile](/grandma3/2-3/user/).

---

The left side of the **Update Menu** is about presets. Learn more about presets in the [Preset section](/grandma3/2-3/presets/).
