---
title: "01 - New Show and Setup"
description: "There might be a running show when you open the onPC or console. It always boots up with the last loaded show. We are going to build our show from scratch."
product: grandma3
version: "2.4"
lang: en
sourceUrl: "https://help.malighting.com/grandMA3/2.4/HTML/qsg_new_show_setup.html"
scrapedAt: "2026-06-12T21:25:15.336Z"
---
## A Fresh Start

There might be a running show when you open the onPC or console. It always boots up with the last loaded show. We are going to build our show from scratch.

This starts with the **Backup Menu**. This is where we store, load, or delete show files. 

Locate and tap the gear ![](/img/grandma3/2-4/icon_gear_24_v1-9-17627a.png) icon in the left menu (the Command Bar) on the onPC. This menu is not visible by default on the consoles. On the console, you need to press the Menu button. Another way to access this menu in the future is to press the 'F2' key on the keyboard.

Now, the menu pop-up appears. This gives access to several essential menus and settings. We will come back to some of them in later chapters. It is an important pop-up that gives you access to many menus and system settings.

We need the backup menu now, so click the Backup button.

This opens the backup menu. This is used to create, load, and save shows. It refers to a selected drive (hard drive, USB, or another external storage device). The drive can be changed by tapping the drive button in the title bar (at the top-right corner of the window). The default drive is "Internal". This is where you can select a USB flash drive as the selected drive.

Select the internal drive or a flash drive (if you have one). Now tap or click the New Show button. The software gives a suggested name that includes the current date and time.

The name pop-up can be expanded to include an on-screen keyboard. This might be useful on some devices, such as Compact consoles. Tap the keyboard icon (![](/img/grandma3/2-4/icon_keyboard_24_v1-9_1-e99f85.png)) in the right corner of the name input field. This opens a new small "Edit NameInput" pop-up. Now click the keyboard icon in the upper left corner of the new pop-up to show or hide the keyboard - try it out.

When you are happy with the look of the name pop-up, name the show QuickStart.

If you are on a console or computer that you share with others, it might be a good idea to add your name before the show name. This ensures that you create a new show and do not modify others' show files.

|                                            |                                                                                                                                                                                                                                                                                                                                                                              |
| ------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ![](/img/grandma3/2-4/tip_gray-639af3.png) | **Hint:**                                                                                                                                                                                                                                                                                                                                                                    |
|                                            | It is always a good idea to store your show in multiple locations. For instance, keep a USB flash drive with your show files, and always remember to have it with you. Then you have the original file, and if it is changed in the console, you can always load the original. Hardware might also be destroyed or stolen. But that should not mean that your show is lost.  |

Create a new, completely empty show by clicking Check All and then clicking New Show.

Now, you might be asked if you want to save any changes to the currently active show file. The options are **Save** or **Do Not Save** - selecting **Cancel** will cancel the new show creation.

I do not know the answer to this question in your case. But if I am in doubt, I often choose not to save. It is the programmer's responsibility to store their show before leaving it. If you are employed in a company, there might be a policy regarding this. If not, then this might be an excellent opportunity to get one.

Select the option you are most comfortable with.

You might be asked if you want to create a new show - we want this, so please click New Show.

Now, we have created a new, completely empty show.

## Log in as Admin

We might be logged in as a guest user. But we need to have administrative rights to make any changes to the show. So, the first thing we might need to do is log in as the Admin.

The current user can be seen in the Command Line input. It could look like this:

|                                                                    |                  |
| ------------------------------------------------------------------ | ---------------- |
| ![](/img/grandma3/2-4/icon_commandline-input_logo_v2-0-a59235.png) | Guest\[Fixture]> |

This example shows that the user is **Guest,** and the default keyword is **Fixture**. The default keyword is the one the console assumes we will use if we do not specify anything else. More on this later.

The grandMA3 is a command line console. This means that most things can be done using commands entered at the command line. This might not be the most useful method, but simple operations can be faster to type on a keyboard. Especially when working with the onPC. The command line system also gives us very powerful macro and plugin tools - more on this in later chapters. It is very helpful to know the most common commands and their short versions. A short version means that you do not have to type (and correctly spell) the entire command. There is often a shorter version of the command.

Now, we will log in as Admin. This user exists in all shows, and the username and password should not be changed. We need to use the **Login** keyword, followed by the username and password. Login is a short word, so I prefer to write the entire word, but the short version is **Log**.

Type and execute the following command:

|                                                                    |                             |
| ------------------------------------------------------------------ | --------------------------- |
| ![](/img/grandma3/2-4/icon_commandline-input_logo_v2-0-a59235.png) | Guest\[Fixture]>Login Admin |

If a user has a password, it needs to be added after the login name, and be aware that the password is case-sensitive.

Now, we should have the following command line input:

|                                                                    |                  |
| ------------------------------------------------------------------ | ---------------- |
| ![](/img/grandma3/2-4/icon_commandline-input_logo_v2-0-a59235.png) | Admin\[Fixture]> |

---

## Recap

In this chapter, we created a new, empty show and logged in as the default administrator. It lays the foundation for everything following.

It is not necessary in order to proceed to the next topic, but if you want to read details on some of the things we did, then these are some suggestions:

The backup menu is described in the [Show File Handling topic](/grandma3/2-4/show_file_management/).

Every keyword in the console is described in more detail. Here is a link to the [Login](/grandma3/2-4/keyword_login/) keyword. Any keyword can be found by searching for it. If you want to browse through the keywords, then have a look at the [General Keywords topic](/grandma3/2-4/csk_general_keywords/).

The grandMA3 is made to accommodate multiple users working together in the same show. This is one of the reasons for having different users. Read more about users and how to create them in the [Single User and Multi User Systems topics](/grandma3/2-4/user/).

When you are happy, then move on to the [next chapter](/grandma3/2-4/qsg_first_patch/).
