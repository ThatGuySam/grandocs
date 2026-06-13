---
title: "Use variables"
description: "It is possible to use variables in your macros and in any command line entry in the show."
product: grandma2
lang: en
sourceUrl: "https://help.malighting.com/grandMA2/en/help/key_macro_create_variables.html"
scrapedAt: "2026-06-12T21:28:22.454Z"
---
It is possible to use variables in your macros and in any command line entry in the show.

Variables are containers of text that may be reused.

Variables may be used to store phrases of text, for later reuse by command line and macros, similar to what Presets are for Attributes.

 

## SetVar

Variables are defined using the [SetVar keyword](/grandma2/key_keyword_setvar/) and the [$ character](/grandma2/key_keyword_dollar/):

SetVar $nameofvariable="content of variable"

Whenever the variable is later referenced in the command line, the variable is replaced by its content.

The variables can contain text strings - like names. They should be put in quotation marks. That makes the grandMA2 interpret that as a text string and it can contain a space in the name.

If you do not put it in quotation marks, then the text would be interpreted as commands.

For instance, if you want to create a variable containing **This is Us** and write:

\[Channel]> SetVar $song\_name = This is us

Then the grandMA2 would interpret it as you defining a variable containing the text "This" and then the commands **InviteStation User**

\[time] : Executing : SetVar $song\_name = This InviteStation User

This is not what you wanted and it is not even a valid command.

So remember the quotation marks.

Variables can also contain numbers. If you create the variable and the content is a number then it is defined as an integer (whole number) or fixed-point number (a whole number with 6 decimals after the point). If a number has become a fixed-point number then you cannot convert it back to an integer. That was a little bit of technical math, that you most likely do not have to worry about.

### Example

This is an example of using a variable in a cue list. See the [Example macros topic](/grandma2/key_macro_examples/) for more examples of using variables in macros.

A common way to program lighting for a song is to create a sequence of cues holding the base looks and major changes for each verse and chorus, and additionally trigger different chasers on and off via the command (CMD) column in the main sequence:

- ...
- Cue 5:"Chorus": CMD:Go Executor 201
- Cue 6:"Verse 2": CMD:Off Executor 201
- etc.

If only one chaser needs to be triggered, this simple syntax usually does the job.

By using variables, triggering of multiple chaser may be easily managed:

- Cue 1:"Intro": CMD:SetVar $chorus\_Chasers="Executor 201 + 204 + 205"
- ...
- Cue 5:"Chorus":CMD:Go $chorus\_Chasers
- Cue 6:"Verse2":CMD:Off $chorus\_Chasers
- etc.

\[Channel]> SetVar $chorus\_Chasers="Executor 201 + 204 + 205"

\[time] : Executing : SetVar $chorus\_Chasers="Executor 201 + 204 + 205"

\[Channel]> Go $chorus\_Chasers

\[time] : Executing : Go Executor 201 + 204 + 205

**Hint:**\
Your console will only process valid commands. If none of the Executors exist, the console will not bother to process the command, and you will not see this last line

## SetUserVar

Similar to the SetVar keyword is the [SetUserVar keyword](/grandma2/key_keyword_setuservar/).

The only difference is that a variable defined with the SetVar is a global variable for all users, while variables defined with SetUserVar applies to the current user only.

 

---

## ListVar and ListUserVar

With the keyword ListVar and ListUserVar, the command line feedback window will list current variables and their content.

\[Channel]> ListVar

\[time] : Global : $CHORUS\_CHASERS = Executor 201 + 204 + 205

The list is longer. ListVar shows both user and global variables. ListUserVar only shows the variables for the current user.

Notice that the variables are stored with capital letters. This means that the grandMA2 does not distinguish between two variables called $thisISgreat and $thisisGREAT. For the grandMA2 it will just be $THISISGREAT.

## Predefined Variables

If you try the ListVar command then you will see the list of all the variables. There are a lot of predefined variables in the grandMA2 that automatically gets updated.

Some of the most useful are:

**$SELECTEDEXEC:**

This is the number of the currently selected executor.

**$SELECTEDEXECCUE:**

This is the current active cue on the selected executor.

**$FADERPAGE:**

This is the page number of the Executor Fader page.

**$BUTTONPAGE:**

This is the page number for the Executors without faders.

**$SHOWFILE:**

This is the name of the show.

**$USER:**

This is the currently logged in user.

 

Even though these are listed as "Global" some are actually user variables. Two different users in the same session will not get the same result in some of these - for instance, the $USER will be different and they can also be on different pages and have different executors selected.

---

## Additions with Variables

There are two commands that allow you to do a little addition with variables: [AddVar](/grandma2/key_keyword_addvar/) and [AddUserVar](/grandma2/key_keyword_adduservar/).

You can do math with numbers and you can append text to text or numbers (this will convert a number to text).

This is the possible syntax:

AddVar $variable = number

AddVar $variable = "text"

AddVar $variable = $variable

The only difference between AddVar and AddUserVar is that the first is used with the global variables and the second is for the current users' own variables.

The variable needs to exist before you use AddVar/AddUserVar on it.

### Examples

Adding numbers:

SetVar $my\_number = 1

AddVar $my\_number = 1

Result is that the variable $my\_number is the number **2**.

 

Adding text:

SetVar $my\_executor = "Executor 10"

AddVar $my\_executor = " + 11"

Result is the text in the variable $my\_executor is **Executor 10 + 11**.

 

Adding variables:

SetVar $date\_time = $DATE

AddVar $date\_time = "\_"

AddVar $date\_time = $TIME

Result of $date\_time is a text string and is off coarse based on when you do this, but it could look like this: **12.8.2016\_12h31m37.963s** notice that for better readability we added an underscore between the date and the time.

 

Adding a number to text:

SetVar $num\_text = 23

AddVar $num\_text = " bananas"

The result is converted to text and it will be: **23 bananas**.

 

Adding a text to a number:

SetVar $text\_num = "The answer is "

AddVar $text\_num = 42

The result is a text that reads: **The answer is 42**.

 

For more practical examples please read the [Example macros topic](/grandma2/key_macro_examples/).
