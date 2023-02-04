---
originalUrl: 'https://help2.malighting.com/Page/grandMA2/remote_control_web_remote/en/3.3'
---

<div class="topic-navigation">

<div class="pull-right">
	<span class="pull-left">


<div class="pull-left">
<form action="/Topic/SetCurrentVersionNumber" class="form-inline" id="frmTagSelector" method="post">	<span class="form-mini">
		<div class="input-prepend"><span class="add-on">Select different version</span><select autocomplete="off" id="versionNumberId" name="versionNumberId" onchange="$(this).closest('#frmTagSelector').submit();" style="width: 120px;"><option value="">- latest -</option>
<option selected="selected" value="6">3.3</option>
<option value="14">3.4</option>
<option value="18">3.5</option>
<option value="21">3.6</option>
<option value="23">3.7</option>
<option value="27">3.8</option>
<option value="31">3.9</option>
</select></div>
		<input data-val="true" data-val-number="The field Int32 must be a number." data-val-required="The Int32 field is required." id="ProductId" name="ProductId" type="hidden" value="11">
		<input id="CurrentGuid" name="CurrentGuid" type="hidden" value="fcb1dc46-401e-40c6-998e-cf62e57a65b5">
	</span>
</form></div>&nbsp;	</span>
	<span class="pull-right" style="white-space: nowrap;">
			<button class="btn btn-mini" onclick="location.href='/Page/grandMA2/remote_control_msc/en/3.3'; " title="Go to previous page 'MIDI show control (MSC)'">
				<i class="icon-arrow-left"></i> previous
			</button>

			<button class="btn btn-mini" onclick="location.href='/Page/grandMA2/remote_control_telnet/en/3.3';" title="Go to next page 'Telnet remote'">
				next <i class="icon-arrow-right"></i> 
			</button>
	</span>
</div>
<div class="clear-fix" style="margin-bottom: 10px"></div>
</div>

					<div class="infobox"><b>Hint:</b><br><b>New help version</b><br>The help version you selected belongs to an older software version. <a href="/Topic/SetCurrentVersionNumber/31/fcb1dc46-401e-40c6-998e-cf62e57a65b5">You may want to view the latest help version.</a></div>

			<div class="pull-right">
					<button class="btn btn-mini" style="margin-right: 10px; height: 30px;" onclick="location.href = '/Media/TopicPdf/29546/6'; " title="Open/Save this topic as PDF document for viewing or printing">
						<img src="/Content/images/icons/filetype_pdf.png" style="height: 24px;"> Open topic as PDF
					</button>
				<span class="badge badge-info">Version 3.3</span>
			</div>
		<h1>Web Remote</h1>

			<div class="topic-table-of-contents">
				<h2>Table of contents of this topic</h2>
				<div class="topic-toc-toggler topic-toc-toggler-hide"><a href="#" onclick="$('.topic-toc-ul').toggle(); $('.topic-toc-toggler-hide').hide(); $('.topic-toc-toggler-show').show(); return false;">hide</a></div>
				<div class="topic-toc-toggler topic-toc-toggler-show" style="display: none;"><a href="#" onclick="$('.topic-toc-ul').toggle(); $('.topic-toc-toggler-hide').show(); $('.topic-toc-toggler-show').hide(); return false;">show</a></div>
				<ul class="topic-toc-ul">
						<li>
							<a href="#toc_header_anchor_1">Navigating the remote</a>
						</li>
						<li>
							<a href="#toc_header_anchor_2">CMD 1 and CMD 2</a>
						</li>
						<li>
							<a href="#toc_header_anchor_3">Fixture sheet</a>
						</li>
						<li>
							<a href="#toc_header_anchor_4">Channel Sheet</a>
						</li>
						<li>
							<a href="#toc_header_anchor_5">Group Pool</a>
						</li>
						<li>
							<a href="#toc_header_anchor_6">Preset Pool</a>
						</li>
						<li>
							<a href="#toc_header_anchor_7">Macro Pool</a>
						</li>
						<li>
							<a href="#toc_header_anchor_8">World Pool</a>
						</li>
						<li>
							<a href="#toc_header_anchor_9">Executor Sheet</a>
						</li>
						<li>
							<a href="#toc_header_anchor_10">Playbacks</a>
						</li>
						<li>
							<a href="#toc_header_anchor_11">Main Menu</a>
						</li>
						<li>
							<a href="#toc_header_anchor_12">Wheels</a>
						</li>
				</ul>
			</div>

		<p>The stations can be remote controlled by any browser connected to the system.</p>

<p>The web remote is very flexible. Depending on the screen size and resolution it will try do display as much information as possible. This means that many of the views can show a lot of information - especially on high resolution screens. The images used in the description below are typically show with the minimum size possible.</p>

<p>It needs to be enabled in the Global Settings: <strong>Setup -&gt; Console -&gt; Global Settings -&gt; Remotes</strong></p>

<p>Here is a setting called "Remotes" with two options: <strong>Login Disabled</strong> and <strong>Login Enabled</strong>.</p>

<p>&nbsp;</p>

<p>Simply open a browser on a computer or handheld device and type the IP address of the station that needs to be remote controlled.</p>

<p>Then a login pop-up appears:</p>

<figure class="caption"><img alt="" src="/Media/Image/img_web-remote_login_v3-3.png">
<figcaption><em>Web remote login</em></figcaption>
</figure>

<p>It is not possible to login as the default "Administrator" user.</p>

<p>There is a limit of three remote users logged in at the same time.</p>

<p>After a login with a valid user the web remote interface is accessible.</p>

<p>&nbsp;</p>

<a name="toc_header_anchor_1" id="toc_header_anchor_1" class="topic-toc-item"></a><h2>Navigating the remote</h2>

<p>The <a href="#main_menu">Main Menu</a> gives access to the Settings. Here it is possible to change between two different modes: <strong>Phone</strong> and <strong>Tablet</strong>.</p>

<p>This changes a few of the windows. It also changes the navigation bar at the top.</p>

<p>This is the <strong>Phone</strong> mode:</p>

<figure class="caption"><img alt="" src="/Media/Image/img_web-remote_navigation-phone_v3-3.png">
<figcaption><em>Navigation bar - phone mode</em></figcaption>
</figure>

<p>And this is the <strong>Tablet</strong> mode:</p>

<figure class="caption"><img alt="" src="/Media/Image/img_web-remote_navigation-tablet_v3-3.png">
<figcaption><em>Navigation bar - tablet mode</em></figcaption>
</figure>

<p>Both modes have a Command Line input bar at the top. Tapping this will open the keyboard and allow any typed commands.</p>

<p>On the right side of both versions are a button called Wheels. this gives access to virtual <a href="#wheels">Wheel Control</a>.</p>

<p>&nbsp;</p>

<p>On the phone version there are two buttons with arrows that allows the user to toggle through the different views. The big blue are shows the name of the current view and tapping it opens the <a href="#main_menu">Main Menu</a>.</p>

<p>&nbsp;</p>

<p>On the tablet version the two buttons are replaced by a bar with buttons for the different views. There is a blue are in the left side. tapping this opens the <a href="#main_menu">Main Menu.</a></p>

<p>&nbsp;</p>

<p>At the bottom of almost every window there are three buttons with the <a href="/Topic/ac2ec92f-f903-486a-8e3a-009889c73799">Set</a>, <a href="/Topic/71257e82-a41a-4a51-8ac4-bcb8cde67dfd">Next</a>, and <a href="/Topic/5d6de875-e52c-4f08-95a2-3921ffe67fc7">Previous</a> functions.</p>

<p>&nbsp;</p>

<a name="toc_header_anchor_2" id="toc_header_anchor_2" class="topic-toc-item"></a><h2>CMD 1 and CMD 2</h2>

<p>The CMD or <strong>Command</strong> windows gives access to the most used command keys. In Phone mode it is split up in two windows. In Tablet mode they are on one screen.</p>

<p>It provides access to a virtual level wheel on the right hand side of the screen. On CMD 2 or the CMD on the tablet there is access to select the different Preset Types on the left side of the screen.</p>

<p>&nbsp;</p>

<p>There is a special button that toggle between three different keywords. It is the <span class="softkey">Channel / Fixture / DMX</span> button. Tapping it will toggle through the different keywords. Keep an eye on the command line input.</p>

<p><strong>Phone Mode:</strong></p>

<figure class="caption"><img alt="" src="/Media/Image/img_web-remote_cmd1-phone_v3-3.png">
<figcaption><em>CMD 1 - Phone mode</em></figcaption>
</figure>

<figure class="caption"><img alt="" src="/Media/Image/img_web-remote_cmd2-phone_v3-3.png">
<figcaption><em>CMD 2 - Phone mode</em></figcaption>
</figure>

<p>&nbsp;</p>

<p><strong>Tablet Mode:</strong></p>

<figure class="caption"><img alt="" src="/Media/Image/img_web-remote_cmd-tablet_v3-3.png">
<figcaption><em>CMD - Tablet mode</em></figcaption>
</figure>

<p>&nbsp;</p>

<a name="toc_header_anchor_3" id="toc_header_anchor_3" class="topic-toc-item"></a><h2>Fixture sheet</h2>

<p>The fixture sheet displays the fixture information. For details about the <strong>Fixture Sheet</strong> please follow this link to the <a href="/Topic/b8cdf17f-2033-4fc0-a890-5640903a26c1">Fixture Sheet topic</a>.</p>

<p>There are some special buttons at the top of the window in the phone mode and they are added at to bottom on the tablet mode. The following is a show description of them:</p>

<ul>
	<li><strong>Clear:</strong><br>
	This is like the normal <span class="hardkey">Clear</span> key.</li>
	<li><strong>Highlight:</strong><br>
	This toggles the <strong>Highlight</strong> function - just like the normal <span class="hardkey">Highlight</span> key.</li>
	<li><strong>Fixture Sort:</strong><br>
	This is the <strong>Fixture Sort</strong> function in the fixture. Learn about it by following the link above.</li>
	<li><strong>Feature Sort:</strong><br>
	This is the <strong>Feature Sort</strong> function in the fixture. Learn about it by following the link above.</li>
	<li><strong>Prg Only:</strong><br>
	This toggles a <strong>Programmer Only</strong> mask.</li>
	<li><strong>Preset Value selector:</strong><br>
	Tapping this swipe button toggles through the following layers: <strong>Value</strong>, <strong>Fade</strong>, <strong>Delay</strong>, and <strong>Output</strong>. Swiping it opens a small pop-up that allows you to select the desired layer directly. Read about the layers in the <a href="/Topic/f6258bab-f93b-4ac2-817f-14a73cc2e2d1">Layers in Sheets topics</a>.</li>
</ul>

<p>&nbsp;</p>

<p><strong>Phone mode:</strong></p>

<figure class="caption"><img alt="" src="/Media/Image/img_web-remote_fixture-sheet-phone_v3-3.png">
<figcaption><em>Fixture Sheet - Phone mode</em></figcaption>
</figure>

<p><strong>Tablet mode:</strong></p>

<figure class="caption"><img alt="" src="/Media/Image/img_web-remote_fixture-sheet-tablet_v3-3.png">
<figcaption><em>Fixture Sheet - Tablet mode</em></figcaption>
</figure>

<p>The tablet mode provides easy access to change the preset type.</p>

<p>&nbsp;</p>

<a name="toc_header_anchor_4" id="toc_header_anchor_4" class="topic-toc-item"></a><h2>Channel Sheet</h2>

<p>The channel sheet displays the channel information. For details about the <strong>Channel Sheet</strong> please follow this link to the <a href="/Topic/b8a86002-14c2-4a56-ae9c-4a7b1a161a92">Channel Sheet topic</a>.</p>

<p>As described above about the fixture sheet, there are some special buttons also in the channel sheet.</p>

<p>There are two that are different that ones in the fixture sheet. They are:</p>

<ul>
	<li><strong>Hide name:</strong><br>
	This toggle button will hide or show the name of the channels.</li>
	<li><strong>Channel Sort:</strong><br>
	This will sort the sheet to display the selected channels at the top.</li>
</ul>

<p>&nbsp;</p>

<p><strong>Phone mode:</strong></p>

<figure class="caption"><img alt="" src="/Media/Image/img_web-remote_channel-sheet-phone_v3-3.png">
<figcaption><em>Channel Sheet - Phone mode</em></figcaption>
</figure>

<p><strong>Tablet mode:</strong></p>

<figure class="caption"><img alt="" src="/Media/Image/img_web-remote_channel-sheet-tablet_v3-3.png">
<figcaption><em>Channel Sheet - Tablet mode</em></figcaption>
</figure>

<p>&nbsp;</p>

<a name="toc_header_anchor_5" id="toc_header_anchor_5" class="topic-toc-item"></a><h2>Group Pool</h2>

<p>The group pool displays the groups. Read details about it in the <a href="/Topic/024d3c31-f074-49e3-9bf6-4b0e7be4cdba">Groups topics</a>.</p>

<p>There are two special buttons here: <span class="softkey">Clear</span> and <span class="softkey">Highlight</span>. They have the same functions as the real hard keys.</p>

<p><strong>Phone mode:</strong></p>

<figure class="caption"><img alt="" src="/Media/Image/img_web-remote_group-pool-phone_v3-3.png">
<figcaption><em>Group Pool - Phone mode</em></figcaption>
</figure>

<p><strong>Tablet mode:</strong></p>

<figure class="caption"><img alt="" src="/Media/Image/img_web-remote_group-pool-tablet_v3-3.png">
<figcaption><em>Group Pool - Tablet mode</em></figcaption>
</figure>

<p>&nbsp;</p>

<a name="toc_header_anchor_6" id="toc_header_anchor_6" class="topic-toc-item"></a><h2>Preset Pool</h2>

<p>This is the different preset pools. The windows works as the <strong>Dynamic</strong> pool in the console - read about it in the <a href="/Topic/16ab249d-edfa-443b-90d0-fba0e201c5fb">Dynamic preset topic</a>. The preset types can be selected on the left hand side in both modes.</p>

<p>There is currently no access to the <strong>All Presets</strong>.</p>

<p><strong>Phone mode:</strong></p>

<figure class="caption"><img alt="" src="/Media/Image/img_web-remote_preset-pool-phone_v3-3.png">
<figcaption><em>Preset Pools - Phone mode</em></figcaption>
</figure>

<p><strong>Tablet mode:</strong></p>

<figure class="caption"><img alt="" src="/Media/Image/img_web-remote_preset-pool-tablet_v3-3.png">
<figcaption><em>Preset Pools - Tablet mode</em></figcaption>
</figure>

<p>&nbsp;</p>

<a name="toc_header_anchor_7" id="toc_header_anchor_7" class="topic-toc-item"></a><h2>Macro Pool</h2>

<p>This is the macro pool - read about it in the <a href="/Topic/2d95f23d-4ee9-4891-973b-9d5e70e9bd13">Macro topics</a>. It displays all the macros. It is not possible to edit macros using the remote.</p>

<p><strong>Phone mode:</strong></p>

<figure class="caption"><img alt="" src="/Media/Image/img_web-remote_macro-pool-phone_v3-3.png">
<figcaption><em>Macro Pool - Phone mode</em></figcaption>
</figure>

<p><strong>Tablet mode:</strong></p>

<figure class="caption"><img alt="" src="/Media/Image/img_web-remote_macro-pool-tablet_v3-3.png">
<figcaption><em>Macro Pool - Tablet mode</em></figcaption>
</figure>

<p>&nbsp;</p>

<a name="toc_header_anchor_8" id="toc_header_anchor_8" class="topic-toc-item"></a><h2>World Pool</h2>

<p>This is the world pool - learn about worlds in the <a href="/Topic/2dfa3700-7c99-4a19-a608-55cb169fb659">What are Worlds topic</a>.</p>

<p><strong>Phone mode:</strong></p>

<figure class="caption"><img alt="" src="/Media/Image/img_web-remote_world-pool-phone_v3-3.png">
<figcaption><em>World Pool - Phone mode</em></figcaption>
</figure>

<p><strong>Tablet mode:</strong></p>

<figure class="caption"><img alt="" src="/Media/Image/img_web-remote_world-pool-tablet_v3-3.png">
<figcaption><em>World Pool - Tablet mode</em></figcaption>
</figure>

<p>&nbsp;</p>

<a name="toc_header_anchor_9" id="toc_header_anchor_9" class="topic-toc-item"></a><h2>Executor Sheet</h2>

<p>The Executor Sheet displays the <a href="/Topic/4b30f6a3-1cea-433f-9a8d-272ead4150c6">Sequence Executor Sheet</a>.</p>

<p>There is no playback control in this window. It only shows the sequence status of the selected executor (remember this can be different for each user).</p>

<p>There are four predefined masks for this window: <strong>All</strong>, <strong>Info</strong>, <strong>CMD</strong>, and <strong>Time</strong>. They cannot be edited.</p>

<p><strong>Phone mode:</strong></p>

<figure class="caption"><img alt="" src="/Media/Image/img_web-remote_executor-phone_v3-3.png">
<figcaption><em>Executor Sheet - Phone mode</em></figcaption>
</figure>

<p><strong>Tablet mode:</strong></p>

<figure class="caption"><img alt="" src="/Media/Image/img_web-remote_executor-tablet_v3-3.png">
<figcaption><em>Executor Sheet - Tablet mode</em></figcaption>
</figure>

<p>&nbsp;</p>

<a name="toc_header_anchor_10" id="toc_header_anchor_10" class="topic-toc-item"></a><h2>Playbacks</h2>

<p>This windows shows the virtual executors - read more about it in the <a href="/Topic/c64ed60f-10a7-4fe2-8ab8-e71449d5f36d">Executors on the Screens topic</a>.</p>

<p>On the left hand side there are some special buttons:</p>

<ul>
	<li><strong>Previous:</strong><br>
	This is used to change to the previous set of executors on the current page.</li>
	<li><strong>Next:</strong><br>
	Tapping this will change the next set of executors on the current page.</li>
	<li><strong>Previous page:</strong><br>
	Tapping this will change to the previous executor page.</li>
	<li><strong>Next page:</strong><br>
	This will change to the next executor page.</li>
	<li><strong>Fader:</strong><br>
	This is connected with the last button (<span class="softkey">Button</span>) - only one of them can be selected. Tapping this will display <strong>Fader Executors. </strong></li>
	<li><strong>Button:</strong><br>
	This is connected with the button above - only one of them can be selected. Tapping this will display <strong>Button Executors</strong>.</li>
</ul>

<p><strong>Phone mode:</strong></p>

<figure class="caption"><img alt="" src="/Media/Image/img_web-remote_playback-phone_v3-3.png">
<figcaption><em>Playbacks / Executors - Phone mode</em></figcaption>
</figure>

<p><strong>Tablet mode:</strong></p>

<figure class="caption"><img alt="" src="/Media/Image/img_web-remote_playback-tablet_v3-3.png">
<figcaption><em>Playbacks / Executors - Tablet mode</em></figcaption>
</figure>

<p>&nbsp;</p>

<a name="toc_header_anchor_11" id="toc_header_anchor_11" class="topic-toc-item"></a><h2><a id="main_menu" name="main_menu"></a>Main Menu</h2>

<p>The <strong>Main Menu</strong> can be used select a specific window to jump to.</p>

<p>There are three buttons called <strong>Additional operations</strong> - they are:</p>

<ul>
	<li><strong>Login:</strong><br>
	Tapping this button will open the Login pop-up</li>
	<li><strong>Connected... - Disconnected:</strong><br>
	Tapping this will disconnect or reconnect the remote to the console. This can be useful if moving outside the reach of the WiFi.</li>
	<li><strong>Settings:</strong><br>
	This will open the setting that allows to change between the two modes: <strong>Phone</strong> and <strong>Tablet</strong>.</li>
</ul>

<p><strong>Phone mode:</strong></p>

<figure class="caption"><img alt="" src="/Media/Image/img_web-remote_main-menu-phone_v3-3.png">
<figcaption><em>Main Menu - Phone mode</em></figcaption>
</figure>

<p><strong>Tablet mode:</strong></p>

<figure class="caption"><img alt="" src="/Media/Image/img_web-remote_main-menu-tablet_v3-3.png">
<figcaption><em>Main Menu - Tablet mode</em></figcaption>
</figure>

<p>&nbsp;</p>

<p>&nbsp;</p>

<a name="toc_header_anchor_12" id="toc_header_anchor_12" class="topic-toc-item"></a><h2><a id="wheels" name="wheels"></a>Wheels</h2>

<p>This window displays virtual wheels that function as the encoders. It can be used to change values in the selected fixtures. It is possible to select the different preset types on the right hand side. There is also a <strong>Feature</strong> swipe button - this can be used to change between the different features in the preset type.&nbsp;</p>

<p><strong>Phone mode:</strong></p>

<figure class="caption"><img alt="" src="/Media/Image/img_web-remote_wheels-phone_v3-3.png">
<figcaption><em>Wheels - Phone mode</em></figcaption>
</figure>

<p><strong>Tablet mode:</strong></p>

<figure class="caption"><img alt="" src="/Media/Image/img_web-remote_wheels-tablet_v3-3.png">
<figcaption><em>Wheels - Tablet mode</em></figcaption>
</figure>

<p>&nbsp;</p>


				<br>
<div class="topic-navigation">

<div class="pull-right">
	<span class="pull-left">


<div class="pull-left">
<form action="/Topic/SetCurrentVersionNumber" class="form-inline" id="frmTagSelector" method="post">	<span class="form-mini">
		<div class="input-prepend"><span class="add-on">Select different version</span><select autocomplete="off" id="versionNumberId" name="versionNumberId" onchange="$(this).closest('#frmTagSelector').submit();" style="width: 120px;"><option value="">- latest -</option>
<option selected="selected" value="6">3.3</option>
<option value="14">3.4</option>
<option value="18">3.5</option>
<option value="21">3.6</option>
<option value="23">3.7</option>
<option value="27">3.8</option>
<option value="31">3.9</option>
</select></div>
		<input data-val="true" data-val-number="The field Int32 must be a number." data-val-required="The Int32 field is required." id="ProductId" name="ProductId" type="hidden" value="11">
		<input id="CurrentGuid" name="CurrentGuid" type="hidden" value="fcb1dc46-401e-40c6-998e-cf62e57a65b5">
	</span>
</form></div>&nbsp;	</span>
	<span class="pull-right" style="white-space: nowrap;">
			<button class="btn btn-mini" onclick="location.href='/Page/grandMA2/remote_control_msc/en/3.3'; " title="Go to previous page 'MIDI show control (MSC)'">
				<i class="icon-arrow-left"></i> previous
			</button>

			<button class="btn btn-mini" onclick="location.href='/Page/grandMA2/remote_control_telnet/en/3.3';" title="Go to next page 'Telnet remote'">
				next <i class="icon-arrow-right"></i> 
			</button>
	</span>
</div>
	<div class="clear-fix"></div>
	<div class="pull-right">
	
			<button class="btn btn-mini" onclick="location.href='/Media/TopicPdf/29546/6';" title="Open/Save this topic as PDF document for viewing or printing">
				<img src="/Content/images/icons/filetype_pdf.png"> Open topic as PDF
			</button>
	</div>
<div class="clear-fix" style="margin-bottom: 10px"></div>
</div>

	
