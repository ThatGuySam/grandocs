---
title: "Programmer Layers"
description: "Values for the selected layer can be displayed in the Sequence Sheet, the Content Sheet, and the Fixture Sheet."
product: grandma3
version: "2.4"
lang: en
sourceUrl: "https://help.malighting.com/grandMA3/2.4/HTML/fixture-sheet-dmx-layer.html"
scrapedAt: "2026-06-12T21:24:48.623Z"
---
Values for the selected layer can be displayed in the [Sequence Sheet](/grandma3/2-4/cue_sequence_sheet/), the [Content Sheet](/grandma3/2-4/cue_content_sheet/), and the [Fixture Sheet](/grandma3/2-4/operate_fixture_sheet/).

Layers can be set from the Encoder Bar, the Layer Toolbar, or by typing the corresponding layer keyword. For more information, see [General Keywords](/grandma3/2-4/csk_general_keywords/).

To enable the **Layer Toolbar** in the fixture sheet, see [Fixture Sheet Settings](/grandma3/2-4/fixture-sheet-settings/).

![](/img/grandma3/2-4/window_layer_toolbar-203dc0.png)\
_Fixture sheet layer toolbar_

The CueAbs layer displays each attribute's sequence, cue, and part numbers, with absolute values derived from a running playback. The displayed information refers to the playback that defines the current output value for the attribute. For more information, see [CueAbsolute](/grandma3/2-4/keyword_cueabsolute/) keyword. Typical values, such as a selected static position, are displayed in the **absolute** value layer. 

The CueRel layer displays each attribute's sequence, cue, and part numbers, along with a relative value derived from the running playback. The displayed information refers to the playback that defines the current output value for the attribute. For more information, see [CueRelative](/grandma3/2-4/keyword_cuerelative/) keyword. A mauve marker indicates relative values. 

The** Fade** layer can be used to adjust and see individual fade times. Individual fade times are indicated with a green marker.

The **Delay** layer can be used to adjust and see individual delay times indicated by an orange marker. The [Sequence Sheet]() in Track Sheet mode is best for viewing these values. Learn more about [Individual Attribute Timing](/grandma3/2-4/cue_timing/) in the [Cues and Sequences](/grandma3/2-4/cue_sequence/) topic.

The fixture sheet DMX layer provides valuable information.

Open a fixture sheet and tap DMX in the Layer Toolbar. For more information, see [Fixture Sheet Settings](/grandma3/2-4/fixture-sheet-settings/).

The fixture name cells for fixtures/attributes with active values from the DMX tester are highlighted in white on the fixture sheet. For more information, see the [DMX Sheet](/grandma3/2-4/patch_dmx_sheet/).

The DMX values are shown in the same color as the DMX tester background.

![](/img/grandma3/2-4/window_fixture-sheet_dmx_layer-8c2fff.png)\
_Fixture sheet with DMX layer selected_

## Subtopics

- [Sheet Masking](/grandma3/2-4/worldfilter_filter_rules/)
- [Fixture Sheet Settings](/grandma3/2-4/fixture-sheet-settings/)
