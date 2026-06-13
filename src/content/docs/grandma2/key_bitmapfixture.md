---
title: "Bitmap Fixture"
description: "The MA Lighting Bitmap fixture replaces the previous bitmap effects. The bitmap fixture is a virtual fixture and available in the fixture library."
product: grandma2
lang: en
sourceUrl: "https://help.malighting.com/grandMA2/en/help/key_bitmapfixture.html"
scrapedAt: "2026-06-12T21:28:20.227Z"
---
The MA Lighting Bitmap fixture replaces the previous bitmap effects. The bitmap fixture is a virtual fixture and available in the fixture library.

The bitmap fixture allows to use images and videos from the image pool and map these images or videos to the patched fixtures. The visualization of the bitmap fixtures is realized in the layout view. Use the grandMA2 effect engine to animate bitmap fixtures.

**Hint:**\
There are predefined BMP (= Bitmap) effects provided in the effect editor.

The bitmap fixture has its own dimmer and color attributes, like an MA VPU layer fixture.

The playback priority of the bitmap fixture is always the lowest priority in one priority range. Attribute values will overwrite bitmap fixture attribute values, if the same fixtures are used.

If you want to use a video for the bitmap fixture here´s what it takes:

- Minimum of 30 frames per second
- Resolution double of the output. E.g. If you have an output of a pixel raster of 200 x 200, the video should have a minimum resolution of 400 x 400.\
  Recommended are triple fold to four fold of the output.
- Only video data without audio data
- Constant bit rate (= CBR)

Make sure to use the supported image and video formats only. For more details see [supported file formats](/grandma2/key_image_supported_file_formats/).

We recommend to test the videos during the show preparation before using them in a show situation.

## Subtopics

- [Import bitmap fixture](/grandma2/key_bitmapfixture_import/)
- [Apply bitmap fixture in the layout](/grandma2/key_bitmapfixture_layout/)
- [Control bitmap fixture](/grandma2/key_bitmapfixture_control/)
- [Edit bitmap fixture](/grandma2/key_bitmapfixture_edit/)
- [Example](/grandma2/key_bitmapfixture_example/)
- [Priorities for bitmap effects](/grandma2/key_bitmapfixture_priorities/)
- [Disable bitmap for fixtures](/grandma2/key_bitmapfixture_disable/)
