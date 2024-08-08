---
originalUrl: 'https://help2.malighting.com/Page/grandMA2/backup_menu_load_show/en/3.9'
---

<div class="topic-navigation">

<div class="pull-right">
	<span class="pull-left">


<div class="pull-left">
<form action="/Topic/SetCurrentVersionNumber" class="form-inline" id="frmTagSelector" method="post">	<span class="form-mini">
		<div class="input-prepend"><span class="add-on">Select different version</span><select autocomplete="off" id="versionNumberId" name="versionNumberId" onchange="$(this).closest('#frmTagSelector').submit();" style="width: 120px;"><option value="">- latest -</option>
<option value="6">3.3</option>
<option value="14">3.4</option>
<option value="18">3.5</option>
<option value="21">3.6</option>
<option value="23">3.7</option>
<option value="27">3.8</option>
<option selected="selected" value="31">3.9</option>
</select></div>
		<input data-val="true" data-val-number="The field Int32 must be a number." data-val-required="The Int32 field is required." id="ProductId" name="ProductId" type="hidden" value="11">
		<input id="CurrentGuid" name="CurrentGuid" type="hidden" value="75dce2a5-ffdd-480d-8719-f89685921552">
	</span>
</form></div>&nbsp;	</span>
	<span class="pull-right" style="white-space: nowrap;">
			<button class="btn btn-mini" onclick="location.href='/Page/grandMA2/backup_menu_new_show/en/3.9'; " title="Go to previous page 'New show'">
				<i class="icon-arrow-left"></i> previous
			</button>

			<button class="btn btn-mini" onclick="location.href='/Page/grandMA2/backup_menu_save_show/en/3.9';" title="Go to next page 'Save show'">
				next <i class="icon-arrow-right"></i> 
			</button>
	</span>
</div>
<div class="clear-fix" style="margin-bottom: 10px"></div>
</div>

		
			<div class="pull-right">
					<button class="btn btn-mini" style="margin-right: 10px; height: 30px;" onclick="location.href = '/Media/TopicPdf/54803/31'; " title="Open/Save this topic as PDF document for viewing or printing">
						<img src="/Content/images/icons/filetype_pdf.png" style="height: 24px;"> Open topic as PDF
					</button>
				<span class="badge badge-info">Version 3.9</span>
			</div>
		<h1>Loading a show</h1>

			<div class="topic-table-of-contents">
				<h2>Table of contents of this topic</h2>
				<div class="topic-toc-toggler topic-toc-toggler-hide"><a href="#" onclick="$('.topic-toc-ul').toggle(); $('.topic-toc-toggler-hide').hide(); $('.topic-toc-toggler-show').show(); return false;">hide</a></div>
				<div class="topic-toc-toggler topic-toc-toggler-show" style="display: none;"><a href="#" onclick="$('.topic-toc-ul').toggle(); $('.topic-toc-toggler-hide').show(); $('.topic-toc-toggler-show').hide(); return false;">show</a></div>
				<ul class="topic-toc-ul">
						<li>
							<a href="#toc_header_anchor_1">Using the GUI</a>
								<ul>
										<li><a href="#toc_header_anchor_2">Show Data</a></li>
										<li><a href="#toc_header_anchor_3">Time Config</a></li>
										<li><a href="#toc_header_anchor_4">Global Settings</a></li>
										<li><a href="#toc_header_anchor_5">Local Settings</a></li>
										<li><a href="#toc_header_anchor_6">Network Protocols</a></li>
										<li><a href="#toc_header_anchor_7">Network Config</a></li>
										<li><a href="#toc_header_anchor_8">User Profiles</a></li>
								</ul>
						</li>
						<li>
							<a href="#toc_header_anchor_9">Example:</a>
						</li>
						<li>
							<a href="#toc_header_anchor_10">Using the Command Line</a>
						</li>
				</ul>
			</div>

		<p>A show can be loaded from any tab in the Backup Menu.</p>

<a name="toc_header_anchor_1" id="toc_header_anchor_1" class="topic-toc-item"></a><h2>Using the GUI</h2>

<p>When Load Show is tapped in the Backup Menu then it will open a pop-up like this:</p>

<figure class="caption"><img alt="" src="/Media/Image/popup_load-show_v3-2.png">
<figcaption>Load Show pop-up</figcaption>
</figure>

<p>Here is a list of the shows in the selected tab.</p>

<p>On the right side it is possible to choose what data that will be loaded from the selected show.</p>

<p>The idea is that it is possible to load just a small part of a different show into the currently loaded show.</p>

<a name="toc_header_anchor_2" id="toc_header_anchor_2" class="topic-toc-item"></a><h3>Show Data</h3>

<p>This is activated as a default. The show data is the patch and fixture schedule, stored sequences, presets, groups, effects, and so on. Basically everything that is in a pool somewhere and the imported 3D elements and their location in the 3D stage.</p>

<p>If the Show Data is loaded and <strong>not</strong> the User Profiles (read below), then the existing <strong>User Profiles</strong> will be overwritten with the ones from the show being loaded and it will add the additional User Profiles from the show. It will not add <strong>Users</strong>.</p>

<a name="toc_header_anchor_3" id="toc_header_anchor_3" class="topic-toc-item"></a><h3>Time Config</h3>

<p>The time configuration is the time, location, daylight savings settings and NTP&nbsp;(Network Time Protocol) setup.</p>

<a name="toc_header_anchor_4" id="toc_header_anchor_4" class="topic-toc-item"></a><h3>Global Settings</h3>

<p>The global settings are the ones found in Setup -&gt; Console -&gt; Global Settings. The settings here are shared in the session and includes enabling and disabling the Remote and Telnet, RDM, WYSIWYG, and so on.</p>

<a name="toc_header_anchor_5" id="toc_header_anchor_5" class="topic-toc-item"></a><h3>Local Settings</h3>

<p>The local settings are the ones found in Setup -&gt; Console -&gt; Local Settings. These settings only affects the local console and not all consoles in a session. It includes settings like the console language and LED background light settings.</p>

<a name="toc_header_anchor_6" id="toc_header_anchor_6" class="topic-toc-item"></a><h3>Network Protocols</h3>

<p>Network protocols are the settings for outputting DMX via an Ethernet connection. It includes ArtNet, sACN, ETC-Net2, KiNet1, Pathport and Shownet. These are found in Setup -&gt; Network -&gt; Network Protocols.</p>

<a name="toc_header_anchor_7" id="toc_header_anchor_7" class="topic-toc-item"></a><h3>Network Config</h3>

<p>Network configuration is the settings for what devices should be in the session and the DMX port settings on the Consoles, onPC Wings and NPU's.</p>

<a name="toc_header_anchor_8" id="toc_header_anchor_8" class="topic-toc-item"></a><h3>User Profiles</h3>

<p>User Profiles keep all the data that is connected to the Users. Loading this data will delete all the Users and User Profiles in the current show and load all the Users and User Profiles from the show file being loaded.</p>

<p>&nbsp;</p>

<p>There is a <span class="softkey">Check All</span> button that selects all the above boxes.</p>

<p>&nbsp;</p>

<p>As a default only the main show files are displayed, but it is possible to also choose to load data from a backup version of the show.</p>

<p>In the picture above there is a button called "Viewing Shows". This is a button with three different modes:</p>

<ul>
	<li><strong>Viewing Shows</strong>:<br>
	This only shows a list of the main show files.</li>
	<li><strong>Viewing Shows &amp; Backups</strong>:<br>
	This shows the main show files and the backup files.</li>
	<li><strong>Viewing Backups only</strong>:<br>
	This only shows the backup files.</li>
</ul>

<p>All columns in this pop-up can be sorted in ascending or descending order. This can be done by pressing the <span class="hardkey">Edit</span> key and then the column title. If a mouse or trackball is connected, then it is also possible to right click the column title.</p>

<p>In the title bar it is possible to toggle the information button. It looks like this (active): <img alt="" src="/Media/Image/icon_info_v3-2.png">.</p>

<p>When it is active then the information about the selected show are displayed at the bottom. It is information about the different software versions it has been through and when it was last saved in those versions.</p>

<p>It is also possible to see the information that has been saved into the show by the users. Read more about this in <a href="/Topic/434ee56a-9f5a-4f23-83d3-807cfa139ae2">Save Show topic</a>.</p>

<p>&nbsp;</p>

<p>When the desired show file and the wanted data type is selected, then tap the <span class="softkey">Load Show</span> button.</p>

<p>It is possible to cancel the load process by tapping the <span class="softkey">Cancel</span> button or the big <span class="softkey">X</span> in the upper right corner on the pop-up.</p>

<div class="tip"><strong>Hint:</strong><br>
Executing onPC.exe with parameter -s allows to specify a show file for loading.</div>

<a name="toc_header_anchor_9" id="toc_header_anchor_9" class="topic-toc-item"></a><h2>Example:</h2>

<p>&lt;path&gt;/gma2onpc.exe -s:my_showfile</p>

<p>​Loads the show file my_showfile.show.gz from the gma2/shows folder of the corresponding software version.&nbsp;</p>

<a name="toc_header_anchor_10" id="toc_header_anchor_10" class="topic-toc-item"></a><h2>Using the Command Line</h2>

<p>Show files can be loaded using the command line. The command is called <span class="syntax">LoadShow</span>. Read more about it <a href="/Topic/c3fb1fe6-c408-4549-aa93-33098925374f">here</a>.</p>


				<br>
<div class="topic-navigation">

<div class="pull-right">
	<span class="pull-left">


<div class="pull-left">
<form action="/Topic/SetCurrentVersionNumber" class="form-inline" id="frmTagSelector" method="post">	<span class="form-mini">
		<div class="input-prepend"><span class="add-on">Select different version</span><select autocomplete="off" id="versionNumberId" name="versionNumberId" onchange="$(this).closest('#frmTagSelector').submit();" style="width: 120px;"><option value="">- latest -</option>
<option value="6">3.3</option>
<option value="14">3.4</option>
<option value="18">3.5</option>
<option value="21">3.6</option>
<option value="23">3.7</option>
<option value="27">3.8</option>
<option selected="selected" value="31">3.9</option>
</select></div>
		<input data-val="true" data-val-number="The field Int32 must be a number." data-val-required="The Int32 field is required." id="ProductId" name="ProductId" type="hidden" value="11">
		<input id="CurrentGuid" name="CurrentGuid" type="hidden" value="75dce2a5-ffdd-480d-8719-f89685921552">
	</span>
</form></div>&nbsp;	</span>
	<span class="pull-right" style="white-space: nowrap;">
			<button class="btn btn-mini" onclick="location.href='/Page/grandMA2/backup_menu_new_show/en/3.9'; " title="Go to previous page 'New show'">
				<i class="icon-arrow-left"></i> previous
			</button>

			<button class="btn btn-mini" onclick="location.href='/Page/grandMA2/backup_menu_save_show/en/3.9';" title="Go to next page 'Save show'">
				next <i class="icon-arrow-right"></i> 
			</button>
	</span>
</div>
	<div class="clear-fix"></div>
	<div class="pull-right">
	
			<button class="btn btn-mini" onclick="location.href='/Media/TopicPdf/54803/31';" title="Open/Save this topic as PDF document for viewing or printing">
				<img src="/Content/images/icons/filetype_pdf.png"> Open topic as PDF
			</button>
	</div>
<div class="clear-fix" style="margin-bottom: 10px"></div>
</div>

	
