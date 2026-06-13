---
title: "UserProfile"
description: "To execute the keyword UserProfile, type UserProfile or the shortcut UPR into the command line."
product: grandma2
lang: en
sourceUrl: "https://help.malighting.com/grandMA2/en/help/key_keyword_userprofile.html"
scrapedAt: "2026-06-12T21:28:04.391Z"
---
To execute the keyword UserProfile, type **UserProfile** or the shortcut **UPR** into the command line.

## Description

The keyword UserProfile displays the user profiles in the command line feedback.

- Number
- Name
- Used
- LoggedIn
- Info
- Subtrees in parantheses

UserProfile is an object keyword.

![](/img/grandma2/window_commandline-feedback-user-profile_v3-2-31eb66.png)

_Keyword UserProfile_

For more information see [create user profiles](/grandma2/key_single_multi_systems_create/).

## Syntax

UserProfile \[ID]

## Examples

- Lists all user profiles that are available.

\[Channel]> List UserProfile

 

- Lists user profile 1.

\[Channel]> List UserProfile 1

 

**Hint:**\
User profiles can be limited to a specific world.

There are three commands that generate the same result:

- Assigns the user profile 2 to world 1. 

\[Channel]> Assign UserProfile 2 At World 1

\[Channel]>  Assign World 1 UserProfile 2

 \[Channel]> Assign UserProfile 2/World=1
