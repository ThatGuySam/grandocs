---
title: "SFTP Connection to a Console"
description: "The consoles can be accessed using an SFTP client program."
product: grandma3
version: "2.4"
lang: en
sourceUrl: "https://help.malighting.com/grandMA3/2.4/HTML/fm_sftp.html"
scrapedAt: "2026-06-12T21:25:12.508Z"
---
The consoles can be accessed using an SFTP client program.

One such program could be FileZilla Client from the FileZilla Project ([external link to internet webpage](https://filezilla-project.org/)).

The SFTP client needs to be installed on a computer in the same network as the console.

To access the folder structure of the console, the **IP address** of the device is needed. A username and password are also required. SFTP uses TCP port **22**.

To access the grandMA3 area of the console's hard drive, please use **madata** as both username and password.

|                                            |                                                                                                                                                               |
| ------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ![](/img/grandma3/2-4/tip_gray-639af3.png) | **Hint:**                                                                                                                                                     |
|                                            | The grandMA2 area of the grandMA3 consoles can also be accessed using SFTP. Please use **data** as both username and password to access this part.  |

|                                           |                                                                                                                                                                       |
| ----------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ![](/img/grandma3/2-4/warning-99d629.png) | Be very careful about making any changes in the folders or files. This is direct access to the device. Deleting or moving files may cause serious harm to the device. |

Once the connection is made, it is possible to browse through the folders inside the device. The first level of folders has three folders. The "actual" folder gives access to the current software version. The "gma3\_library" folder contains exported objects, including screenshots. The "installation\_packages" contains zip files with the necessary installation files.

Learn more about the folder structure in the [Folder Structure topic](/grandma3/2-4/fm_folder_structure/). Read more about screenshots in the [Screenshots topic](/grandma3/2-4/screenshot/).
