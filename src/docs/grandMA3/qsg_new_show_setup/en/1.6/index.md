---
originalUrl: 'https://help2.malighting.com/Page/grandMA3/qsg_new_show_setup/en/1.6'
---

<div class="topic-navigation">

<div class="pull-right">
	<span class="pull-left">


<div class="pull-left">
<form action="/Topic/SetCurrentVersionNumber" class="form-inline" id="frmTagSelector" method="post">	<span class="form-mini">
		<div class="input-prepend"><span class="add-on">Select different version</span><select autocomplete="off" id="versionNumberId" name="versionNumberId" onchange="$(this).closest('#frmTagSelector').submit();" style="width: 120px;"><option value="">- latest -</option>
<option value="10">1.0</option>
<option value="32">1.1</option>
<option value="35">1.2</option>
<option value="36">1.3</option>
<option value="37">1.4</option>
<option value="38">1.5</option>
<option selected="selected" value="39">1.6</option>
<option value="40">1.7</option>
</select></div>
		<input data-val="true" data-val-number="The field Int32 must be a number." data-val-required="The Int32 field is required." id="ProductId" name="ProductId" type="hidden" value="25">
		<input id="CurrentGuid" name="CurrentGuid" type="hidden" value="3e99ee4a-f736-47d3-b30e-b3f765ac309c">
	</span>
</form></div>&nbsp;	</span>
	<span class="pull-right" style="white-space: nowrap;">
			<button class="btn btn-mini" onclick="location.href='/Page/grandMA3/qsg_welcome/en/1.6'; " title="Go to previous page '00 Welcome'">
				<i class="icon-arrow-left"></i> previous
			</button>

			<button class="btn btn-mini" onclick="location.href='/Page/grandMA3/qsg_first_patch/en/1.6';" title="Go to next page '02 First Patch'">
				next <i class="icon-arrow-right"></i> 
			</button>
	</span>
</div>
<div class="clear-fix" style="margin-bottom: 10px"></div>
</div>

					<div class="infobox"><b>Hint:</b><br><b>New help version</b><br>The help version you selected belongs to an older software version. <a href="/Topic/SetCurrentVersionNumber/40/3e99ee4a-f736-47d3-b30e-b3f765ac309c">You may want to view the latest help version.</a></div>

			<div class="pull-right">
					<button class="btn btn-mini" style="margin-right: 10px; height: 30px;" onclick="location.href = '/Media/TopicPdf/73042/39'; " title="Open/Save this topic as PDF document for viewing or printing">
						<img src="/Content/images/icons/filetype_pdf.png" style="height: 24px;"> Open topic as PDF
					</button>
				<span class="badge badge-info">Version 1.6</span>
			</div>
		<h1>Create a New Show and Initial Setup</h1>

			<div class="topic-table-of-contents">
				<h2>Table of contents of this topic</h2>
				<div class="topic-toc-toggler topic-toc-toggler-hide"><a href="#" onclick="$('.topic-toc-ul').toggle(); $('.topic-toc-toggler-hide').hide(); $('.topic-toc-toggler-show').show(); return false;">hide</a></div>
				<div class="topic-toc-toggler topic-toc-toggler-show" style="display: none;"><a href="#" onclick="$('.topic-toc-ul').toggle(); $('.topic-toc-toggler-hide').show(); $('.topic-toc-toggler-show').hide(); return false;">show</a></div>
				<ul class="topic-toc-ul">
						<li>
							<a href="#toc_header_anchor_1">A Fresh Start</a>
						</li>
						<li>
							<a href="#toc_header_anchor_2">Log in as Admin</a>
						</li>
						<li>
							<a href="#toc_header_anchor_3">Recap</a>
						</li>
				</ul>
			</div>

		<a name="toc_header_anchor_1" id="toc_header_anchor_1" class="topic-toc-item"></a><h2>A Fresh Start</h2>

<p>There might be a running show when you start it the onPC or console. It always boots up with the last loaded show. We are going to build our show from scratch.</p>

<p>This starts with the <strong>Backup Menu</strong>. This is where we store, load, or delete show files.&nbsp;</p>

<p>Locate and tap the gear&nbsp;<img alt="" src="/Media/Image/icon_gear.png"> icon in the left menu (the Command Bar) on the onPC. This menu is not visible as a default on the consoles. On the console, you need to press the <span class="hardkey">Menu</span> button. Another way to get to this menu in the future is by pressing the 'F2' key on the keyboard.</p>

<p>Now the menu pop-up appears. This gives access to several important menus and settings. We will come back to some of them in later chapters. It is an important pop-up that gives you access to many menus and system settings.</p>

<p>For now, we need the backup menu, so click the <span class="softkey">Backup</span> button.</p>

<p>This opens the backup menu in the <strong>Save</strong> tab. This lists all the current shows stored on the selected drive. The drive can be changed by tapping the drive button in the title bar. The default drive is "Internal". This is where you can select a USB flash drive as the selected drive.</p>

<p>Select the internal drive or a flash drive (if you got one). Now tap or click the <span class="softkey">New</span> tab on the left of the menu. The software gives a suggested name that includes the current date and time.</p>

<p>The name pop-up can be expanded to include an on-screen keyboard. This might be useful on some devices, for instance, the Compact consoles. Tap the keyboard icon (<img alt="" src="/Media/Image/icon_virtual_keyboard.png">) in the left corner of the name input to show or hide the keyboard - try it out.</p>

<p>When you are happy with the name pop-up, name the show <span class="syntax">QuickStart</span>.</p>

<p>If you are on a console or computer that you share with others, then it might be a good idea to add your name in front of the show name. This makes sure you are creating a new show and do not mess with others' show files.</p>

<div class="tip"><strong>Hint:</strong><br>
It is always a good idea to store your show in multiple locations. For instance, having a USB flash drive with the show file, and remember to always have the drive with you. Then you have the original file and if it is changed in the console, then you can always load the original. Hardware might also be destroyed or stolen. But that should not mean that your show is lost.</div>

<p>Create the show by tapping the <span class="softkey">New Show</span> button.</p>

<p>Now you might be asked if you want to save any changes to the currently active show file. The options are <strong>Save</strong> or <strong>Do Not Save</strong> - selecting <strong>Cancel</strong> will cancel the new show creation.</p>

<p>I do not know the answer to this question in your case. But if I am in doubt I often choose not to save. It must be the responsibility of the programmer to store their show before leaving it. If you are employed in a company then there might be a policy regarding this. If not, then this might be a good opportunity to get one.</p>

<p>Select the option you are most comfortable with.</p>

<p>Now we have created a new completely empty show.</p>

<a name="toc_header_anchor_2" id="toc_header_anchor_2" class="topic-toc-item"></a><h2>Log in as Admin</h2>

<p>We might be logged in as guest user. But we need to have administrative rights to do any changes to the show. So the first thing we need to do is log in as the Admin.</p>

<p>The current user can be seen in the Command Line input. It could look like this:</p>

<p><img alt="" src="/Media/Image/qsg_01_command-line.png"></p>

<p>In this example, we can see that the user is <strong>Guest </strong>and the default keyword is <strong>Fixture</strong>. The default keyword is the one the console assumes we will use if we do not specify anything else. More on this later.</p>

<p>The grandMA3 is a command line console. This means that most things can be done using commands written in the command line input. This might not be the most useful method, but simple operations can be faster to type on a keyboard. Especially when working with the onPC. The command line system also gives us very powerful macro and plugin tools - more on this in later chapters. It is very helpful to know the most common commands and their short versions. A short version means that you do not have to type (and correctly spell) the entire command. There is often a shorter version of the command.</p>

<p>Now we are going to log in as Admin. This is a user that exists in all shows and the username and password cannot be changed. We need to use the <strong>Login </strong>keyword followed by the user name and the password. Login is a short word so I prefer to write the entire word but the short version is <strong>Log</strong>.</p>

<p>Type and execute the following command:</p>

<div class="cl_input">Guest[Fixture]&gt; Login Admin administrator</div>

<p>Please be aware that the password is case sensitive and it all needs to be lower case letters.</p>

<p>Now we should have the following command line input:</p>

<div class="cl_input">Admin[Fixture]&gt;</div>

<hr>
<a name="toc_header_anchor_3" id="toc_header_anchor_3" class="topic-toc-item"></a><h2>Recap</h2>

<p>In this chapter, we created a new empty show and logged in as the default administrator user. It lays the foundation for everything following it.</p>

<p>It is not necessary in order to proceed to the next topic, but if you want to read details on some of the things we did, then these are some suggestions:</p>

<p>The backup menu is described in the <a href="/Topic/6633b1c0-5d7d-46ac-9cc1-b7ab0bfcca07">Show File Management topic</a>.</p>

<p>Every keyword in the console is described in more detail. Here is a link to the <a href="/Topic/bfdc08da-0f6a-4be2-a71e-adaa51dd1f17">Login</a> keyword. Any keyword can be found by searching for it. If you want to browse through the keywords then have a look at the <a href="/Topic/500335d8-271f-4a14-b965-f71702cee50d">All Keywords topic</a>.</p>

<p>The grandMA3 is made to accommodate multiple users working together in the same show. This is one of the reasons to have different users. Read more about users and how to create them in the <a href="/Topic/3ae0030b-f908-4804-b2f2-1a7951f3d713">Single User and Multi User Systems topics</a>.</p>

<p>When you are happy, then move on to the <a href="/Topic/77fdb9a4-e3b5-49c7-a6a6-d194df7ad1c8">next chapter</a>.</p>


				<br>
<div class="topic-navigation">

<div class="pull-right">
	<span class="pull-left">


<div class="pull-left">
<form action="/Topic/SetCurrentVersionNumber" class="form-inline" id="frmTagSelector" method="post">	<span class="form-mini">
		<div class="input-prepend"><span class="add-on">Select different version</span><select autocomplete="off" id="versionNumberId" name="versionNumberId" onchange="$(this).closest('#frmTagSelector').submit();" style="width: 120px;"><option value="">- latest -</option>
<option value="10">1.0</option>
<option value="32">1.1</option>
<option value="35">1.2</option>
<option value="36">1.3</option>
<option value="37">1.4</option>
<option value="38">1.5</option>
<option selected="selected" value="39">1.6</option>
<option value="40">1.7</option>
</select></div>
		<input data-val="true" data-val-number="The field Int32 must be a number." data-val-required="The Int32 field is required." id="ProductId" name="ProductId" type="hidden" value="25">
		<input id="CurrentGuid" name="CurrentGuid" type="hidden" value="3e99ee4a-f736-47d3-b30e-b3f765ac309c">
	</span>
</form></div>&nbsp;	</span>
	<span class="pull-right" style="white-space: nowrap;">
			<button class="btn btn-mini" onclick="location.href='/Page/grandMA3/qsg_welcome/en/1.6'; " title="Go to previous page '00 Welcome'">
				<i class="icon-arrow-left"></i> previous
			</button>

			<button class="btn btn-mini" onclick="location.href='/Page/grandMA3/qsg_first_patch/en/1.6';" title="Go to next page '02 First Patch'">
				next <i class="icon-arrow-right"></i> 
			</button>
	</span>
</div>
	<div class="clear-fix"></div>
	<div class="pull-right">
	
			<button class="btn btn-mini" onclick="location.href='/Media/TopicPdf/73042/39';" title="Open/Save this topic as PDF document for viewing or printing">
				<img src="/Content/images/icons/filetype_pdf.png"> Open topic as PDF
			</button>
	</div>
<div class="clear-fix" style="margin-bottom: 10px"></div>
</div>

	
