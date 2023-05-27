---
originalUrl: 'https://help2.malighting.com/Page/grandMA3/rn_v1_3/en/1.6'
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
<option value="42">1.8</option>
<option value="43">1.9</option>
</select></div>
		<input data-val="true" data-val-number="The field Int32 must be a number." data-val-required="The Int32 field is required." id="ProductId" name="ProductId" type="hidden" value="26">
		<input id="CurrentGuid" name="CurrentGuid" type="hidden" value="d18a4646-53e6-48cf-8d24-8ef4c158c24e">
	</span>
</form></div>&nbsp;	</span>
	<span class="pull-right" style="white-space: nowrap;">
			<button class="btn btn-mini" onclick="location.href='/Page/grandMA3/rn_v1_4/en/1.6'; " title="Go to previous page 'Release Notes 1.4'">
				<i class="icon-arrow-left"></i> previous
			</button>

			<button class="btn btn-mini" onclick="location.href='/Page/grandMA3/rn_v1_2/en/1.6';" title="Go to next page 'Release Notes 1.2'">
				next <i class="icon-arrow-right"></i> 
			</button>
	</span>
</div>
<div class="clear-fix" style="margin-bottom: 10px"></div>
</div>

					<div class="infobox"><b>Hint:</b><br><b>New help version</b><br>The help version you selected belongs to an older software version. <a href="/Topic/SetCurrentVersionNumber/43/d18a4646-53e6-48cf-8d24-8ef4c158c24e">You may want to view the latest help version.</a></div>

			<div class="pull-right">
					<button class="btn btn-mini" style="margin-right: 10px; height: 30px;" onclick="location.href = '/Media/TopicPdf/71971/39'; " title="Open/Save this topic as PDF document for viewing or printing">
						<img src="/Content/images/icons/filetype_pdf.png" style="height: 24px;"> Open topic as PDF
					</button>
				<span class="badge badge-info">Version 1.6</span>
			</div>
		<h1>Release Notes 1.3.1.3</h1>

			<div class="topic-table-of-contents">
				<h2>Table of contents of this topic</h2>
				<div class="topic-toc-toggler topic-toc-toggler-hide"><a href="#" onclick="$('.topic-toc-ul').toggle(); $('.topic-toc-toggler-hide').hide(); $('.topic-toc-toggler-show').show(); return false;">hide</a></div>
				<div class="topic-toc-toggler topic-toc-toggler-show" style="display: none;"><a href="#" onclick="$('.topic-toc-ul').toggle(); $('.topic-toc-toggler-hide').show(); $('.topic-toc-toggler-show').hide(); return false;">show</a></div>
				<ul class="topic-toc-ul">
						<li>
							<a href="#toc_header_anchor_1">Features</a>
								<ul>
										<li><a href="#toc_header_anchor_2">Encoder Bar</a></li>
										<li><a href="#toc_header_anchor_3">Backup Menu</a></li>
										<li><a href="#toc_header_anchor_4">Filter</a></li>
										<li><a href="#toc_header_anchor_5">Master Section and Custom Section</a></li>
										<li><a href="#toc_header_anchor_6">Phaser Editor</a></li>
								</ul>
						</li>
						<li>
							<a href="#toc_header_anchor_7">Other Enhancements</a>
						</li>
						<li>
							<a href="#toc_header_anchor_8">What's Changed</a>
						</li>
						<li>
							<a href="#toc_header_anchor_9">Fixed Bugs</a>
								<ul>
										<li><a href="#toc_header_anchor_10">Command Line and Macro</a></li>
										<li><a href="#toc_header_anchor_11">Connections</a></li>
										<li><a href="#toc_header_anchor_12">Patch</a></li>
										<li><a href="#toc_header_anchor_13">Playback</a></li>
										<li><a href="#toc_header_anchor_14">Windows</a></li>
								</ul>
						</li>
						<li>
							<a href="#toc_header_anchor_15">Appendix</a>
						</li>
						<li>
							<a href="#toc_header_anchor_16">Known Limitations</a>
						</li>
				</ul>
			</div>

		<ul>
	<li><a href="#Features">Features</a>
	<ul>
		<li><a href="#EncoderBar">Encoder Bar</a></li>
		<li><a href="#BackupMenu">Backup Menu</a></li>
		<li><a href="#Filter">Filter</a></li>
		<li><a href="#MasterCustomSection">Master Section and Custom Section</a></li>
		<li><a href="#PhaserEditor">Phaser Editor</a></li>
	</ul>
	</li>
	<li><a href="#OtherEnhancements">Other Enhancements</a></li>
	<li><a href="#WhatsChanged">What's Changed</a></li>
	<li><a href="#FixedBugs">Fixed Bugs</a></li>
	<li><a href="#Appendix">Appendix</a></li>
	<li><a href="#KnownLimitations">Known Limitations</a></li>
</ul>

<div style="page-break-after: always" class="ck_pagebreak"><span style="display:none">&nbsp;</span></div>

<a name="toc_header_anchor_1" id="toc_header_anchor_1" class="topic-toc-item"></a><h2><a id="Features" name="Features"></a>Features</h2>

<p>The latest release of grandMA3 version <span class="current-version-number">1.3.1.3</span>&nbsp;rolls out several enhancements that enrich your lighting experience. Read on for a quick introduction and find links for more information.</p>

<hr>
<a name="toc_header_anchor_2" id="toc_header_anchor_2" class="topic-toc-item"></a><h3><a id="EncoderBar" name="EncoderBar"></a>Encoder Bar</h3>

<p><img alt="" src="/Media/Image/icon_arrow_up_right_v0-9.png">&nbsp;Improved in this release</p>

<ul>
	<li>A colored indicator stripe was added to guide the user through the available encoder page groups and attributes for the selected fixture(s). The color indicator changes with the selected attribute layer to assist the presentation of the selected layer. Furthermore, the LEDs of the dual encoders change their color, too.</li>
	<li>Added "Select all Steps" button next to the step selection area.</li>
	<li>The MAtricks button and the Align button show now their active status.</li>
</ul>

<p><img alt="" src="/Media/Image/icon_plus_v0-9.png">&nbsp;New in this release</p>

<p>&nbsp;The Encoder Bar is now available as a dedicated window. It is also possible to show/hide the grandmaster section. The encoder bar window is part of the More tab in the <a href="/Topic/695b9b96-a7a6-43f9-a278-1dc420eec05b">add window dialog</a>.</p>

<hr>
<a name="toc_header_anchor_3" id="toc_header_anchor_3" class="topic-toc-item"></a><h3><a id="BackupMenu" name="BackupMenu"></a>Backup Menu</h3>

<p><img alt="" src="/Media/Image/icon_arrow_up_right_v0-9.png">&nbsp;Improved in this release</p>

<p>The backup menu is now completely new structured. On the left side a toolbar provides several functions like&nbsp;<span class="softkey">Load</span>,&nbsp;<span class="softkey">Save</span>,&nbsp;<span class="softkey">Delete</span>&nbsp;and&nbsp;<span class="softkey">Settings</span>.<br>
To execute an action in the sections "Load", "Save" and "Delete", the corresponding button in the down right corner needs to be tapped:</p>

<ul>
	<li>Load Show: Enter a file name of an existing show in the input field or select a show file in the list. Then tap&nbsp;<span class="softkey">Load Show</span>&nbsp;in the bottom right corner.</li>
	<li>New Show: Enter a file name in the input field or leave it blank. Then tap <span class="softkey">New Show</span>&nbsp;in the bottom right corner. When entering the name of an already existing show, a pop-up warns the user if the show shall be overwritten. Leaving it blank creates a new show with an autogenerated show name.</li>
	<li>Save Show: Enter a file name of an existing show in the input field, select a show file in the list, or enter a new show name. Then tap <span class="softkey">SaveShow</span>&nbsp;in the bottom right corner.&nbsp;When entering a new file name in the Save section, the button changes its function from&nbsp;<span class="softkey">Save Show</span>&nbsp;to&nbsp;<span class="softkey">Save Show As</span>.</li>
	<li>Delete Show: Enter a file name of an existing show in the input field or select a show file in the list. Then tap <span class="softkey">Delete Show</span>&nbsp;in the bottom right corner.</li>
</ul>

<p>The list of show files is always visible in order to have an overview across all show files.<br>
The demo show folder and the backup folder are excluded in the new and save sections.</p>

<p><img alt="" src="/Media/Image/icon_plus_v0-9.png">&nbsp;New in this release</p>

<p>The settings section in the backup menu offers to set up automatic savings (AutoSave) of the show. Switching&nbsp;<span class="softkey">AutoSaveTimeout</span>&nbsp;from Off to any of the predefined intervals activates this feature. After counting down the defined time, the show will be saved automatically, and the timer starts again. When AutoSave is active, a timer will display the remaining time until the next automatic save in the title bar of the backup menu.</p>

<hr>
<a name="toc_header_anchor_4" id="toc_header_anchor_4" class="topic-toc-item"></a><h3><a id="Filter" name="Filter"></a>Filter</h3>

<p><img alt="" src="/Media/Image/icon_plus_v0-9.png">&nbsp;New in this release</p>

<p>Filters can now be used to filter windows. These windows are the patch, fixture sheet, sequence sheet in track sheet mode and the layout window.<br>
To do so, create a filter, open one of the supported windows, tap <span class="softkey">MA</span> in order to open the context menu of the window, tap <span class="softkey">Mask</span>, tap <span class="softkey">Filter</span>, and select the desired filter in the list.<br>
In addition, the context menu offers the possibility to display the filter toolbar in the fixture sheet and sequence sheet. Tap <span class="softkey">Filter Toolbar</span> in the mask tab. The filter toolbar will be displayed at the bottom of the sheet, surrounded by a blue border. Read more about the filter criteria in the paragraph below.<br>
In the patch menu instead, tap <span class="softkey">Filter</span> in the title bar to select a filter. Furthermore, the known temporary patch filter is still available by tapping the filter symbol in the title bar of the patch.<br>
When a filter is set, the title bar of the window displays a blue filter symbol with the ID and label of the filter: Filter x 'Name'.</p>

<p>In addition to the possibility to filter by attributes, the filter editor is equipped with options to filter by Name, IDType, FixtureType, Layer, and/or Class. To create a filter edit a filter pool object and add a condition to the desired category.<br>
With the <span class="softkey">-</span> right of the header cell of each category, it is possible to change the filter behavior: When it is disabled, the items filtered by this category with all its criteria are displayed. If it is enabled (yellow minus symbol), the items filtered by this category are hidden.<br>
To delete a criterion press <span class="hardkey">Delete</span> and tap the corresponding criterion in the filter editor.</p>

<p>New shows will add predefined filters for the different places where filtering can be applied. They are called Patch, Fixture Sheet, Sequence Sheet and Layout. These filters are already set to their corresponding windows when calling the predefined views in a new show.</p>

<hr>
<div style="page-break-after: always" class="ck_pagebreak"><span style="display:none">&nbsp;</span></div>

<a name="toc_header_anchor_5" id="toc_header_anchor_5" class="topic-toc-item"></a><h3><a id="MasterCustomSection" name="MasterCustomSection"></a>Master Section and Custom Section</h3>

<p><img alt="" src="/Media/Image/icon_plus_v0-9.png">&nbsp;New in this release</p>

<p>A new window is available that represents the <a href="/Topic/e82c0fac-6a52-4d76-b3b0-0cea7f1def1b">Master Section</a>&nbsp;and the <a href="/Topic/f12c8335-7eb0-4728-8e19-74f1067c2976">Custom Section</a>. This window is mainly useful for onPC users who want to have these sections visible on their screens.</p>

<p>This window displays by default the label of the Custom Section Wheels, Custom Section Encoders and the Master Section.<br>
The encoder bar window is part of the other tab in the&nbsp;<a href="/Topic/695b9b96-a7a6-43f9-a278-1dc420eec05b">add window dialog</a>.</p>

<p>By tapping <span class="softkey">MA</span> in the top left corner of the window the context menu opens and allows to display or hide more elements. These are:</p>

<ul>
	<li>Custom Section Encoders: Displays or hides both, labels and hardware area of the custom encoder section.
	<ul>
		<li>Encoders Label:&nbsp;Displays or hides the labels of the custom encoder section.</li>
		<li>Encoders Hardware Area: Displays or hides the hardware area of the custom encoder section.</li>
	</ul>
	</li>
	<li>Custom Section Wheels: Displays or hides both, labels and hardware area of the custom wheel&nbsp;section.
	<ul>
		<li>Wheels Label:&nbsp;Displays or hides the labels of the custom wheel section.</li>
		<li>Wheels Hardware Area: Displays or hides the hardware area of the custom wheel section.</li>
	</ul>
	</li>
	<li>Master Section: Displays or hides both, labels and hardware area of the master section.
	<ul>
		<li>Master Label:&nbsp;Displays or hides the labels of the master section.</li>
		<li>Master Hardware Area: Displays or hides the hardware area of the master section.</li>
		<li>Default Playback Buttons: Displays or hides the default playback buttons of the master section: <span class="softkey">Pause [large]</span>, <span class="softkey">Go- [large]</span> and <span class="softkey">Go+&nbsp;[large]</span>.</li>
	</ul>
	</li>
	<li>Page Section: Displays or hides the page button section with <span class="softkey">Page+</span>, <span class="softkey">Page x</span> and <span class="softkey">Page-</span> that is located on the right side of the executor bars.</li>
</ul>

<hr>
<a name="toc_header_anchor_6" id="toc_header_anchor_6" class="topic-toc-item"></a><h3><a id="PhaserEditor" name="PhaserEditor"></a>Phaser Editor</h3>

<p><img alt="" src="/Media/Image/icon_arrow_up_right_v0-9.png">&nbsp;Improved in this release</p>

<p>The phaser editor 1D view mode allows now to manipulate the attribute values and handles (acceleration and deceleration).<br>
To change the attribute value, select the steps you want to manipulate, select the <span class="softkey">Move Points</span> tool, and tap and drag up and down in the corresponding timeline of the desired attribute.<br>
To change the handles, select the Move Handles tool, and tap and drag the desired handles in the timeline. The handles are displayed by a yellow circled dot. It is possible to drag the handles outside of the visible timeline area. To get them back, use the corresponding accel and decel encoders in the phaser encoder bar.</p>

<hr>
<div style="page-break-after: always" class="ck_pagebreak"><span style="display:none">&nbsp;</span></div>

<a name="toc_header_anchor_7" id="toc_header_anchor_7" class="topic-toc-item"></a><h2><a id="OtherEnhancements" name="OtherEnhancements"></a>Other Enhancements</h2>

<p><img alt="" src="/Media/Image/icon_arrow_up_right_v0-9.png">&nbsp;The command "At Speed 60" uses the speed readout specified in the user profile.</p>

<p><img alt="" src="/Media/Image/icon_arrow_up_right_v0-9.png">&nbsp;The MIB mode per cue is set into angle brackets when the cue MIB mode is set to default. The value inside the angle brackets is the MIB mode of the sequence.</p>

<p><img alt="" src="/Media/Image/icon_plus_v0-9.png">&nbsp;Sequence settings offer a new setting called&nbsp;<span class="softkey">Master Go Mode</span>. In combination with&nbsp;<span class="softkey">Auto Start</span>,&nbsp;<span class="softkey">Auto Stop</span>, and&nbsp;<span class="softkey">Restart Mode</span>&nbsp;there are plenty of possibilities to affect the behavior of the master fader.</p>

<p><img alt="" src="/Media/Image/icon_arrow_up_right_v0-9.png">&nbsp;IfOutput supports now also to specify a value or range of values, e.g., IfOutput At 50 selects all fixtures that have an output of 50%.</p>

<p><img alt="" src="/Media/Image/icon_plus_v0-9.png">&nbsp;GDTF import and export support fixture images now.</p>

<p><img alt="" src="/Media/Image/icon_arrow_up_right_v0-9.png">&nbsp;The align mode &gt;&lt; (butterfly) now keeps the center fixtures at their value when turning the encoder.</p>

<p><img alt="" src="/Media/Image/icon_arrow_up_right_v0-9.png">&nbsp;The update menu settings are now always set back to the saved preferences after updating a cue or preset. It is possible to save the current settings as preference by tapping <span class="softkey">Save Preferences</span> in the title bar of the update menu. It is also possible to restore the preferences by tapping <span class="softkey">Load Preferences</span>. The update menu has now the same behavior as the store settings.</p>

<p><img alt="" src="/Media/Image/icon_plus_v0-9.png">&nbsp;Oops settings: The user profile has now two settings to define the oops/undo behavior:</p>

<ul>
	<li>Undo Programmer: Setting this to No blocks oops to undo the changes of the programmer, e.g., setting attribute values.</li>
	<li>Undo General: Changing this setting to No excludes all other executed commands and actions from the possibility to oops them.</li>
</ul>

<p><img alt="" src="/Media/Image/icon_arrow_up_right_v0-9.png">&nbsp;Updated the converted grandMA2 fixture library to Carallon 16.2.</p>

<p><img alt="" src="/Media/Image/icon_plus_v0-9.png">&nbsp;Groups containing only one fixture are now marked as single fixture groups. They are labeled with the name of the fixture and have the appearance of the fixture type.</p>

<hr>
<div style="page-break-after: always" class="ck_pagebreak"><span style="display:none">&nbsp;</span></div>

<a name="toc_header_anchor_8" id="toc_header_anchor_8" class="topic-toc-item"></a><h2><a id="WhatsChanged" name="WhatsChanged"></a>What's Changed</h2>

<ul>
	<li>onPC Windows
	<ul>
		<li>onPC taskbar labels changed to "Display [number] onPC [version] [show file name].</li>
		<li>The desktop icon names of the onPC main app and terminal app do no longer include the version number.</li>
	</ul>
	</li>
	<li>Update indicators only appear on objects possible to update if update is entered in the command line. The update hardkey and the button in Command Section remain alternating.</li>
	<li>The button label changed from <span class="softkey">Create</span> to <span class="softkey">Active</span> in the step creator.</li>
	<li>When using the follow function in the 3D window or choosing a new color in the color picker for fixtures that are running a phaser at the same time, the programmer will then switch temporarily into <a href="/Topic/84f71c8c-e6dd-489b-a090-cf16788bb131">Single Step mode</a>. The Single Step mode is only switched on during tapping and holding in the 3D window or the color picker.</li>
	<li>The fallback mechanism for executor configurations changed. When starting with a 1x1 configuration and expanding it, the functions of the new handles are determined by the handles left or below. This is the case as long as the configuration has not stored any dedicated function information for this size and the handle at all.</li>
	<li>The proposed name for new show files is now NewShow_date_timeUTC.</li>
</ul>

<hr>
<div style="page-break-after: always" class="ck_pagebreak"><span style="display:none">&nbsp;</span></div>

<a name="toc_header_anchor_9" id="toc_header_anchor_9" class="topic-toc-item"></a><h2><a id="FixedBugs" name="FixedBugs"></a>Fixed Bugs</h2>

<a name="toc_header_anchor_10" id="toc_header_anchor_10" class="topic-toc-item"></a><h3>Command Line and Macro</h3>

<table border="1" cellpadding="1" cellspacing="1" style="width:500px">
	<thead>
		<tr>
			<th scope="col">Description</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Storing cues using a number beginning with a dot (e.g.&nbsp; .5) did not work properly. This bug is fixed. Storing cue numbers beginning with a dot is working as expected.</td>
		</tr>
		<tr>
			<td>Names that were entered with a leading Z were split up into the Zero command and the rest of the name. E.g.: Fixture "Zorro" was executed as Fixture Zero "orro". This bug is fixed. Names are now executed in the correct way.</td>
		</tr>
		<tr>
			<td>New data pools were missing some default pool objects like an executor configuration and a sequence. This bug is fixed. New data pools have now the same default pool objects as data pool 1 has.</td>
		</tr>
		<tr>
			<td>Backup file names had only one digit days, months, hours, minutes and seconds in the file name, which did not allow a proper sorting. This bug is fixed. Backup file names now contain always 2 digit dates. Backup files are using now this scheme of naming:<br>
			Filename.backup_date_timeUTC.show</td>
		</tr>
		<tr>
			<td>Loading show files from v1.1 discarded individual wait times in macros and did reset them all to follow. This bug is fixed. Macros in show files from v1.1 load their wait times as they were set before.</td>
		</tr>
		<tr>
			<td>SetGlobalVer interpreted decimal numbers as integers. This bug is fixed. Setting a decimal number as a global variable interprets it now as type double.</td>
		</tr>
		<tr>
			<td>When switching from a keyword that was entered via a shortcut with a modifier to a keyword of the same hard key but without a modifier, did the new keyword was not entered into the command line, e.g. <span class="hardkey">MA</span> + <span class="hardkey">Preset</span> and then switching to <span class="hardkey">Preset</span>. This bug is fixed. Keywords of the same key are now always entered correctly into the command line.</td>
		</tr>
		<tr>
			<td>Faders could start to jitter after a long operation time of the grandMA3 software. This bug is fixed. Faders should not jitter anymore.</td>
		</tr>
		<tr>
			<td>xPort nodes and Processing Units did not allow to change the IP address using the UI on the device itself. This bug is fixed. IP addresses of xPort nodes and Processing Units can be changed via UI on the device or remotely within the network using a console or onPC.</td>
		</tr>
	</tbody>
</table>

<a name="toc_header_anchor_11" id="toc_header_anchor_11" class="topic-toc-item"></a><h3>Connections</h3>

<table border="1" cellpadding="1" cellspacing="1" style="width:500px">
	<thead>
		<tr>
			<th scope="col">Description</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Art-Net poll replies could carry wrong universe information. This bug is fixed. Art-Net poll replies contain correct universe information.</td>
		</tr>
		<tr>
			<td>When several wings (console and extension) used the same WingID not all faders on the wings were moved, when one fader was moved. This bug is fixed. When moving a fader, all faders that represent the same executor on other wings will move, too.</td>
		</tr>
		<tr>
			<td>When a new station joins into a session, the new station downloaded first the show file and then stored it with the old show file name. This bug is fixed. When taking a station into a session, the old show file will be saved first before downloading the new show data.</td>
		</tr>
	</tbody>
</table>

<div style="page-break-after: always" class="ck_pagebreak"><span style="display:none">&nbsp;</span></div>

<a name="toc_header_anchor_12" id="toc_header_anchor_12" class="topic-toc-item"></a><h3>Patch</h3>

<table border="1" cellpadding="1" cellspacing="1" style="width:500px">
	<thead>
		<tr>
			<th scope="col">Description</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Leaving the patch could add attributes to presets when multi-instance fixtures are part of the show. This bug is fixed. Leaving the patch does not add new attributes to existing presets.</td>
		</tr>
		<tr>
			<td>Adding new fixtures to the patch could change the stored values of presets for fixtures that use the same attribute on several channel functions. This bug is fixed. Adding new fixtures to the show does not change preset values anymore to the first channel function.</td>
		</tr>
	</tbody>
</table>

<a name="toc_header_anchor_13" id="toc_header_anchor_13" class="topic-toc-item"></a><h3>Playback</h3>

<table border="1" cellpadding="1" cellspacing="1" style="width:500px">
	<thead>
		<tr>
			<th scope="col">Description</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Outfade and outdelay times were ignored when playing back a cue. This bug is fixed. Outfade and outdelay in cues work again.</td>
		</tr>
		<tr>
			<td>Clearing a programmer with values while another programmer had the same fixtures with its attributes at default values in the programmer created a dimmer output of 100% for these fixtures. This bug is fixed. Clearing a programmer in a multi-user environment does not keep cleared values in the output.</td>
		</tr>
	</tbody>
</table>

<a name="toc_header_anchor_14" id="toc_header_anchor_14" class="topic-toc-item"></a><h3>Windows</h3>

<table border="1" cellpadding="1" cellspacing="1" style="width:500px">
	<thead>
		<tr>
			<th scope="col">Description</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>When recording over an existing timecode show, the prerecorded events were not triggered. This bug is fixed. Prerecorded events are triggered when recording over an existing timecode show.&nbsp;</td>
		</tr>
		<tr>
			<td>Fixture type custom resources were removed from the show file when storing the show file again, while the resource files were not present on the local hard drive. This bug is fixed. Storing a show file that contains custom resources does not make the custom resource file to be discarded.</td>
		</tr>
		<tr>
			<td>Long press on a number in the calculator did cause multiple entries. This bug is fixed. Long press on the calculator does not cause multiple entries.</td>
		</tr>
		<tr>
			<td>The console crashed when scrolling down in the sequence sheet when it was switched into the transposed mode. This bug is fixed. The console does not crash anymore when scrolling in a transposed sequence sheet.</td>
		</tr>
		<tr>
			<td>MAtrick pool objects that had only their default values set, were displayed as empty, and macros that had no macro lines were displayed as not empty. This bug is fixed. All pool objects display now their state of empty/not empty correctly.</td>
		</tr>
		<tr>
			<td>The encoder bar sometimes missed some button labels after a show download. This bug is fixed. The encoder bar now displays the labels of their buttons.</td>
		</tr>
		<tr>
			<td>The on screen keyboard missed the secondary functions on the numeric keys. This bug is fixed. The on screen keyboard has again the secondary functions on the numeric keys when tapping <span class="softkey">Shift</span> or <span class="softkey">CapsLock</span>.</td>
		</tr>
		<tr>
			<td>Scrolling with the cursor, time or duration encoder in the timecode encoder bar changed the times in steps regarding to the scale ratio of the timeline in the editor. This bug is fixed. The cursor, time and duration encoder in the timecode encoder bar now use the defined frame readout of the timecode editor when turning. One click is one frame in the chosen unit, except seconds will always scroll with a resolution of 60 frames (One click is 1/60s).</td>
		</tr>
		<tr>
			<td>The time of the incoming timecode signal was displayed in 1/100s time format on the timecode slot pool objects. This bug is fixed. The timecode slot pool objects display the incoming timecode signal in the format of the signal.</td>
		</tr>
		<tr>
			<td>The command controls overlay displayed the XKeys permanently in the way as would be <span class="hardkey">MA</span> or <span class="hardkey">Shift</span> permanently pressed when <span class="hardkey">Shift</span> was pressed during switching off the shortcuts. This bug is fixed. The command controls display always the correct state of the Keys.</td>
		</tr>
		<tr>
			<td>The console crashed when setting the grid to 0 in the layout window options. This bug is fixed. The allowed range for the grid size in layouts is now limited from 10 to 1000.</td>
		</tr>
		<tr>
			<td>The console could crash when loading a show file with a corrupted layout window. This bug is fixed. The console should not crash anymore when loading a show file with a corrupted layout window.</td>
		</tr>
	</tbody>
</table>

<hr>
<div style="page-break-after: always" class="ck_pagebreak"><span style="display:none">&nbsp;</span></div>

<a name="toc_header_anchor_15" id="toc_header_anchor_15" class="topic-toc-item"></a><h2><a id="Appendix" name="Appendix"></a>Appendix</h2>

<ul>
	<li>It is recommended to use a dedicated and a separate physical network for each grandMA3 session.</li>
	<li>When using DMX protocols it is recommended to use a dedicated physical network for each protocol.</li>
	<li>The recommended workflow for executor configurations that are different compared with the default executor configuration is to create a new executor configuration, do the changes in the new configuration and save the changes.</li>
</ul>

<hr>
<div style="page-break-after: always" class="ck_pagebreak"><span style="display:none">&nbsp;</span></div>

<a name="toc_header_anchor_16" id="toc_header_anchor_16" class="topic-toc-item"></a><h2><a id="KnownLimitations" name="KnownLimitations"></a>Known Limitations</h2>

<div class="warning">The grandMA3 system supports at the moment only one external DMX source per universe for merging DMX into the system.</div>

<div class="warning">Software update via network to onPC stations requires confirmation during the install process at the destination system.</div>

<div class="warning">When deleting a preset that is referenced by a cue the reference cannot be restored when oopsing the deletion.</div>

<div class="warning">Show files saved with versions prior to v1.0.0.3 cannot be loaded using this version.</div>

<div class="warning">When multiple GlobalMasters exist on the network, each having the same session and location name, the station with the higher priority takes over without user input. If all stations are of the same priority, then the station with the longest Online Time becomes the GlobalMaster for all stations.</div>


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
<option value="42">1.8</option>
<option value="43">1.9</option>
</select></div>
		<input data-val="true" data-val-number="The field Int32 must be a number." data-val-required="The Int32 field is required." id="ProductId" name="ProductId" type="hidden" value="26">
		<input id="CurrentGuid" name="CurrentGuid" type="hidden" value="d18a4646-53e6-48cf-8d24-8ef4c158c24e">
	</span>
</form></div>&nbsp;	</span>
	<span class="pull-right" style="white-space: nowrap;">
			<button class="btn btn-mini" onclick="location.href='/Page/grandMA3/rn_v1_4/en/1.6'; " title="Go to previous page 'Release Notes 1.4'">
				<i class="icon-arrow-left"></i> previous
			</button>

			<button class="btn btn-mini" onclick="location.href='/Page/grandMA3/rn_v1_2/en/1.6';" title="Go to next page 'Release Notes 1.2'">
				next <i class="icon-arrow-right"></i> 
			</button>
	</span>
</div>
	<div class="clear-fix"></div>
	<div class="pull-right">
	
			<button class="btn btn-mini" onclick="location.href='/Media/TopicPdf/71971/39';" title="Open/Save this topic as PDF document for viewing or printing">
				<img src="/Content/images/icons/filetype_pdf.png"> Open topic as PDF
			</button>
	</div>
<div class="clear-fix" style="margin-bottom: 10px"></div>
</div>

	
