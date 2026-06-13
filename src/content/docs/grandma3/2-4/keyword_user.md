---
title: "User"
description: "To enter the User keyword in the command line, use one of the options:"
product: grandma3
version: "2.4"
lang: en
sourceUrl: "https://help.malighting.com/grandMA3/2.4/HTML/keyword_user.html"
scrapedAt: "2026-06-12T21:24:38.793Z"
---
To enter the User keyword in the command line, use one of the options:

- Type **User**
- Type the shortcut **Us**

## Description

The User keyword is used to log in or to change the user settings.

For more information on users and different settings see [User Setting](/grandma3/2-4/user_settings/).

## Syntax

User \["User\_Name" or User\_Number]

\[Function] User \["User\_Name or User\_Number] (\[Setting] \[Setting\_Value])

## Settings

The User keyword uses a number of settings. Change the settings using the [Set Keyword](/grandma3/2-4/keyword_set/). If a setting has to have a pool object, use the [Assign keyword](/grandma3/2-4/keyword_assign/) to assign an object to the setting.

Here are the settings:

| Setting      | Object/Option/Value                                                  | Description                                                   |
| ------------ | -------------------------------------------------------------------- | ------------------------------------------------------------- |
| Name         | Text                                                                 | The name of the user. This can be used as user ID.            |
| Scribble     | Scribble pool object                                                 | The Scribble assigned to the User object.                     |
| Appearance   | Appearance pool object                                               | The Appearance assigned to the User object.                   |
| Password     | Text                                                                 | The password is not shown in clear text.                      |
| Profile      | UserProfile object                                                   | The assigned User Profile.                                    |
| ScreenConfig | Screen configuration object                                          | The active screen configuration.                              |
| Rights       | "Admin", "Setup", "Program", "Preset", "Playback", "View", or "None" | The access right assigned to the user.                        |
| Language     | "de", "en", "ru", or "dk"                                            | The language assigned to the user.                            |
| Keyboard     | "German", "English", "Russian", or "Danish"                          | The keyboard layout assigned to the user's onscreen keyboard. |

## Example

- To list the details of all users, type: 

|                                                                    |                                |
| ------------------------------------------------------------------ | ------------------------------ |
| ![](/img/grandma3/2-4/icon_commandline-input_logo_v2-0-a59235.png) | User name\[Fixture]>List User  |

 

- To log in as "Admin", type:

|                                                                    |                                 |
| ------------------------------------------------------------------ | ------------------------------- |
| ![](/img/grandma3/2-4/icon_commandline-input_logo_v2-0-a59235.png) | User name\[Fixture]>User Admin  |

Alternatively see the [Login Keyword](/grandma3/2-4/keyword_login/).

 

- To assign appearance number 1 to User 2

|                                                                    |                                                    |
| ------------------------------------------------------------------ | -------------------------------------------------- |
| ![](/img/grandma3/2-4/icon_commandline-input_logo_v2-0-a59235.png) | User name\[Fixture]>Assign Appearance 1 At User 2  |

 

- To change the rights to Playback for user Remote, type:

|                                                                    |                                                            |
| ------------------------------------------------------------------ | ---------------------------------------------------------- |
| ![](/img/grandma3/2-4/icon_commandline-input_logo_v2-0-a59235.png) | User name\[Fixture]>Set User "Remote" "Rights" "Playback"  |
