---
title: "Export"
description: "To get the Export keyword in the command line type Exportr the shortcut Expn the command line."
product: grandma2
lang: en
sourceUrl: "https://help.malighting.com/grandMA2/en/help/key_keyword_export.html"
scrapedAt: "2026-06-12T21:27:50.462Z"
---
To get the Export keyword in the command line type **Export **or the shortcut **Exp** in the command line.

## Description

Export is a function keyword to transfer data from the show file to the libraries in the console.

If no filename is entered to the keyword, one .xml file will be created for each object in object list, with file names generated based on object name/properties.

The Export keyword writes to the current selected hard drive. For export to an USB stick select it at the Backup Menu, or type "selectdrive 4" in the command line - 4 is for the first USB stick.

For commonly exported object types, the files will be organized in folders according to object type, e.g. Effect-folder, Macro-folder, FixtureType (library-folder). Object types without a dedicated folder will be placed in the importexport folder.

## Syntax

Export \[Object-list] \["filename"] / \[option] = \[option value]

## Options

To get a list of all available options to the Export keyword in the command line feedback window, type in the command line:

\[Channel]> Export /?

The Export keyword has the following options.

| Option    | Shortcut      | Option Value                                                                                             | Description                                              |
| --------- | ------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------- |
| condition | cnd           | See [messages keyword](/grandma2/key_keyword_messages/).                                                 | See [messages keyword](/grandma2/key_keyword_messages/). |
| noconfirm | nc            | no option value                                                                                          | Suppress the confirmation pop-up.                        |
| overwrite | o             | no option value                                                                                          | Replaces existing file in the folder.                    |
| path      | p             | for example "/data/ma/actual/gma2/ImportExport"                                                          | Specifies the path for the to be exported file.          |
| schema    | not available | no option value                                                                                          | Exports MA .xml schema definition.                       |
| style     |               | html, csv, default (= xml with style sheet for timecode, messages, sequence, fixture, layer, and layers) | Specifies the style of the exported file.                |
| transform | t             | no option value                                                                                          | Transforms the file into the defined style.              |

## Examples

- To create an .xml file labeled mymacros in the macro folder with macro 1 thru 10, type in the command line:

\[Channel]> Export Macro 1 Thru 10 "MyMacros"

 

- To create an .xml file labeled based on Effectname in the effect directory with effect 1, type in the command line:

\[Channel]> Export Effect 1
