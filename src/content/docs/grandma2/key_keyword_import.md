---
title: "Import"
description: "To get the Import keyword in the command line type Importr the shortcut Imn the command line."
product: grandma2
lang: en
sourceUrl: "https://help.malighting.com/grandMA2/en/help/key_keyword_import.html"
scrapedAt: "2026-06-12T21:27:52.887Z"
---
To get the Import keyword in the command line type **Import** or the shortcut **Im** in the command line.

## Description

Import is a function keyword to bring data from external .xml and .xmlp libraries into the show file. 

The Import command loads data into the current command line destination after the existing objects, if no destination object is given.

The Import command will look for files on the currently selected hard-drive.

**Important:**\
Importing FixtureTypes is only allowed in the Edit Setup.

## Syntax

Import "filename" \[destination-object] / \[option] = \[option value]

## Options

To get a list of all available options to the Import keyword in the command line feedback window, type in the command line

\[Channel]> Import /?

The Import keyword has the following options.

| Option    | Shortcut | Option Value                                    | Description                                                                |
| --------- | -------- | ----------------------------------------------- | -------------------------------------------------------------------------- |
| noconfirm | nc       | no option value                                 | Suppresses the confirmation pop-up of the import.                          |
| quiet     | q        | no option value                                 | Suppresses the feedback of the import in the command line feedback window. |
| path      | p        | for example "/data/ma/actual/gma2/importexport" | Specifies the path for the to be imported file.                            |

## Examples

- To import a generic dimmer as a new fixture type in the show file type in the command line:

EditSetup/FixtureTypes 3> Import "generic\@dimmer\@00"

 

- To import macros from the file MyMacros.xml after the last used macro ID type in the command line:

Macros/Global 1> Import "MyMacros"

 

- To import macros from files with names starting with "macr" type in the command line:

Macros/Global 1> Import "macr\*"

 

- To import the effect MyCoolEffect.xml as Effect 101 type in the command line:

\[Channel]> Import "MyCoolEffect" Effect 101

 

- To import "MyMacro" as Macro 20 from the importexport folder of a gma2 console type in the command line:

\[Channel]> Import "MyMacro" At Macro 20 /path = "/data/ma/actual/gma2/importexport"
