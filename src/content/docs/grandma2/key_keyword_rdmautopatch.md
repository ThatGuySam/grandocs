---
title: "RdmAutopatch"
description: "To get the RdmAutopatch keyword in the command line, type RdmAutopatch in the command line or use the shortcut RdmAutop."
product: grandma2
lang: en
sourceUrl: "https://help.malighting.com/grandMA2/en/help/key_keyword_rdmautopatch.html"
scrapedAt: "2026-06-12T21:27:59.008Z"
---
To get the RdmAutopatch keyword in the command line, type **RdmAutopatch** in the command line or use the shortcut **RdmAutop**.

## Description

**Requirements:**\
\- MA Fixture is matched\
\- MA Fixture is patched\
\- MA Fixture and RDM Fixture have the same universe

The RdmAutopatch keyword patches the RDM fixtures to the DMX address in the setup.

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

RdmAutopatch is a function keyword.

For more information about, see [RDM](/grandma2/key_rdm/).

## Syntax

RdmAutopatch \[Object List]

## Examples

- To autopatch the selected fixtures, type in the command line:

\[Channel]> RdmAutopatch

---

- To autopatch the fixtures used in group 1, type in the command line: 

\[Channel]> RdmAutopatch Group 1 

---

- To autopatch only the fixtures used in group 1 and also used in sequence 2, type in the command line: 

\[Channel]> RdmAutopatch Group 1 If Sequence 2
