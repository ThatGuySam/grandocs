---
title: "RdmAutomatch"
description: "To get the RdmAutomatch keyword in the command line, type RdmAutomatch or the shortcut RdmA in it."
product: grandma2
lang: en
sourceUrl: "https://help.malighting.com/grandMA2/en/help/key_keyword_rdmautomatch.html"
scrapedAt: "2026-06-12T21:27:58.962Z"
---
To get the RdmAutomatch keyword in the command line, type **RdmAutomatch** or the shortcut **RdmA** in it.

## Description

**Requirements:**\
\- MA Fixture is not matched\
\- MA Fixture and RDM Fixture have the same DMX address\
\- MA Fixture Type has no or the same RDMFixtureType ID as the RDM Fixture\
\- MA Fixture Type has the same DMX footprint as the RDM Fixture\
\- All Subfixtures of the MA Fixture are in the current World and Filter

The RdmAutomatch keyword automatches RDM Fixtures.

Possible objects are:

- Channel
- Fixture
- FixtureType
- RDMFixtureType
- Group
- Sequence
- Cue
- Executor
- Preset (only selective Presets)
- Selection
- World

If no object is given, the current selection will be used.

RdmAutomatch is a function keyword.

For more information, see [RDM](/grandma2/key_rdm/).

## Syntax

RdmAutomatch \[Object List]

## Examples

- To automatch the selected fixtures, type in the command line:

\[Channel]> RdmAutomatch

---

- To automatch the fixtures used in group 1, type in the command line:

\[Channel]> RdmAutomatch Group 1

---

- To automatch only the fixtures used in group 1 and also used in sequence 2, type in the command line:

\[Channel]> RdmAutomatch Group 1 If Sequence 2
