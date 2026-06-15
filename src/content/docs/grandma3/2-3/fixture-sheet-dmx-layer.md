---
title: "Programmer Layers"
description: "Values for the selected layer can be displayed in the Sequence Sheet, the Content Sheet, and the Fixture Sheet."
product: grandma3
version: "2.3"
lang: en
sourceUrl: "https://help.malighting.com/grandMA3/2.3/HTML/fixture-sheet-dmx-layer.html"
scrapedAt: "2026-06-15T18:25:21.406Z"
pagefind: false
---
Values for the selected layer can be displayed in the [Sequence Sheet](/grandma3/2-3/cue_sequence_sheet/), the [Content Sheet](/grandma3/2-3/cue_content_sheet/), and the [Fixture Sheet](/grandma3/2-3/operate_fixture_sheet/).

Layers can be set from the Encoder Bar, the Layer Toolbar, or by typing the corresponding layer keyword. For more information, see [General Keywords](/grandma3/2-3/csk_general_keywords/).

To enable the **Layer Toolbar** in the fixture sheet, see [Fixture Sheet Settings](/grandma3/2-3/fixture-sheet-settings/).

![](/img/grandma3/2-3/window_layer_toolbar-deac25.png)\
_Fixture sheet layer toolbar_

The CueAbs layer displays each attribute's sequence, cue, and part numbers with an absolute value originating from a running playback. The displayed information refers to the playback that defines the current output value for the attribute. For more information, see [CueAbsolute](/grandma3/2-3/keyword_cueabsolute/) keyword. Typical values, such as a selected static position, are displayed in the **absolute** value layer. 

The CueRel layer displays each attribute's sequence, cue, and part numbers with a relative value originating from a running playback. The displayed information refers to the playback that defines the current output value for the attribute. For more information, see [CueRelative](/grandma3/2-3/keyword_cuerelative/) keyword. A mauve marker indicates relative values. 

The** Fade** layer can be used to adjust and see individual fade times. Individual fade times are indicated with a green marker.

The **Delay** layer can be used to adjust and see individual delay times indicated by an orange marker. The [Sequence Sheet]() in Track Sheet mode best looks at these values. Learn more about [Individual Attribute Timing](/grandma3/2-3/cue_timing/) in the [Cues and Sequences](/grandma3/2-3/cue_sequence/) topic.

The fixture sheet DMX layer provides valuable information.

Open a fixture sheet and tap DMX in the Layer Toolbar. For more information, see [Fixture Sheet Settings](/grandma3/2-3/fixture-sheet-settings/).

The fixture name cells for fixtures/attributes with active values from the DMX tester are displayed with a white marker in the fixture sheet. For more information, see the [DMX Sheet](/grandma3/2-3/patch_dmx_sheet/).

The DMX values are indicated by the same color as the DMX tester background color.

![](/img/grandma3/2-3/window_fixture-sheet_dmx_layer-fa43c4.png)\
_Fixture sheet with DMX layer selected_

## Subtopics

- [Sheet Masking](/grandma3/2-3/worldfilter_filter_rules/)
- [Fixture Sheet Settings](/grandma3/2-3/fixture-sheet-settings/)
