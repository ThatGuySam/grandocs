---
title: "RdmFixtureType"
description: "To get the RdmFixtureType keyword in the command line, type RdmFixtureType or the shortcut Rd in the command line."
product: grandma2
lang: en
sourceUrl: "https://help.malighting.com/grandMA2/en/help/key_keyword_rdmfixturetype.html"
scrapedAt: "2026-06-12T21:27:59.054Z"
---
To get the RdmFixtureType keyword in the command line, type **RdmFixtureType** or the shortcut **Rd** in the command line.

## Description

The RdmFixtureType is an object keyword to access Rdm fixtures with a Rdm fixture type ID.

To get the RdmFixtureType ID, go to **Setup -> Patch & Fixture Schedule -> RDM Devices**. The RdmFixtureType ID is displayed in the information field.

**Hint:**\
To get the RdmFixtureType ID you can also enter in the command line, CD RDM\_Data.RDM\_Fixture\_Types. Then enter in the command line List, press Please, and open the command line feedback window.

For more information, see [RDM](/grandma2/key_rdm/).

## Syntax

\[RDM Function] RdmFixtureType \[ID]

## Examples

- To automatch RDM fixture type 1, type in the command line:

\[Channel]> RdmAutomatch RdmFixtureType 1

---

-  To unmatch RDM fixture type 1, type in the command line:

\[Channel]> RdmUmatch RdmFixtureType 1
