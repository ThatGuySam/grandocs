---
originalUrl: 'https://help2.malighting.com/Page/grandMA2/remote_control_input/en/3.3'
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
		<input id="CurrentGuid" name="CurrentGuid" type="hidden" value="e5b0442b-7267-4be7-b7e1-35181dfc5760">
	</span>
</form></div>&nbsp;	</span>
	<span class="pull-right" style="white-space: nowrap;">
			<button class="btn btn-mini" onclick="location.href='/Page/grandMA2/remote_control/en/3.3'; " title="Go to previous page 'Remote Controlling the System'">
				<i class="icon-arrow-left"></i> previous
			</button>

			<button class="btn btn-mini" onclick="location.href='/Page/grandMA2/remote_control_msc/en/3.3';" title="Go to next page 'MIDI show control (MSC)'">
				next <i class="icon-arrow-right"></i> 
			</button>
	</span>
</div>
<div class="clear-fix" style="margin-bottom: 10px"></div>
</div>

					<div class="infobox"><b>Hint:</b><br><b>New help version</b><br>The help version you selected belongs to an older software version. <a href="/Topic/SetCurrentVersionNumber/31/e5b0442b-7267-4be7-b7e1-35181dfc5760">You may want to view the latest help version.</a></div>

			<div class="pull-right">
					<button class="btn btn-mini" style="margin-right: 10px; height: 30px;" onclick="location.href = '/Media/TopicPdf/29541/6'; " title="Open/Save this topic as PDF document for viewing or printing">
						<img src="/Content/images/icons/filetype_pdf.png" style="height: 24px;"> Open topic as PDF
					</button>
				<span class="badge badge-info">Version 3.3</span>
			</div>
		<h1>Remote Inputs</h1>

			<div class="topic-table-of-contents">
				<h2>Table of contents of this topic</h2>
				<div class="topic-toc-toggler topic-toc-toggler-hide"><a href="#" onclick="$('.topic-toc-ul').toggle(); $('.topic-toc-toggler-hide').hide(); $('.topic-toc-toggler-show').show(); return false;">hide</a></div>
				<div class="topic-toc-toggler topic-toc-toggler-show" style="display: none;"><a href="#" onclick="$('.topic-toc-ul').toggle(); $('.topic-toc-toggler-hide').show(); $('.topic-toc-toggler-show').hide(); return false;">show</a></div>
				<ul class="topic-toc-ul">
						<li>
							<a href="#toc_header_anchor_1">Analog Remote</a>
						</li>
						<li>
							<a href="#toc_header_anchor_2">MIDI Remote</a>
						</li>
						<li>
							<a href="#toc_header_anchor_3">DMX Remote</a>
						</li>
				</ul>
			</div>

		<p>The <strong>Remote Input</strong> section can be found by pressing the <span class="hardkey">Setup</span> key and then <span class="softkey">Remote Input Setup</span> in the <strong>Show</strong> tab.</p>

<p>There are three tabs: <strong>Analog Remotes</strong>, <strong>MIDI Remotes</strong>, and <strong>DMX Remotes</strong>.</p>

<p>The three tabs are very similar. The only difference is the remote source. A remote tab could look like this:</p>

<figure class="caption"><img alt="" src="/Media/Image/menu_remote-input-setup_analog_v3-3.png">
<figcaption><em>Remote Input Setup - Analog Remote</em></figcaption>
</figure>

<p>Each row in the table is a remote input.</p>

<p>Each remote type is described below but first is short description of the common columns in the three tabs:</p>

<ul>
	<li><strong>Name</strong>:<br>
	Each remote input can have a custom name.</li>
	<li><strong>Type</strong>:<br>
	Tapping here will open the <strong>Select Type pop-up</strong>:
	<figure class="caption"><img alt="" src="/Media/Image/popup_select-type_v3-3.png">
	<figcaption><em>Select Type pop-up</em></figcaption>
	</figure>
	<br>
	The options are: <strong>None</strong>, <strong>Exec </strong>(executor), <strong>CMD</strong> (command), and <strong>Hardkey</strong>.</li>
	<li><strong>Page </strong>(relevant if Exec type is selected):<br>
	Here the executor page can be set. It can be a specific number or <strong>Current Page on Master</strong>.</li>
	<li><strong>Executor</strong> (relevant if Exec type is selected):<br>
	This is the executor number.</li>
	<li><strong>Button </strong>(relevant if Exec type is selected):<br>
	This is used to set the executor button number or fader. Tapping here opens the <strong>Select Button pop-up</strong>:
	<figure class="caption"><img alt="" src="/Media/Image/popup_select-button_v3-3.png">
	<figcaption><em>Select Button pop-up</em></figcaption>
	</figure>
	<br>
	The options are: <strong>Button 1</strong>, <strong>Fader</strong>, <strong>Button 2</strong>, and <strong>Button 3</strong>.</li>
	<li><strong>Keycode</strong> (relevant if Hardkey type is selected):<br>
	Tapping this cell will open the <strong>Select Keycode pop-up</strong>:
	<figure class="caption"><img alt="" src="/Media/Image/popup_select-keycode_v3-3.png">
	<figcaption><em>Select Keycode pop-up</em></figcaption>
	</figure>
	<br>
	Here the desired key can be selected.</li>
	<li><strong>CMD</strong> (relevant if CMD type is selected):<br>
	Any command typed here will be executed when the the input is triggered.</li>
	<li><strong>Info</strong>:<br>
	This is multi line information that can be written to each row.</li>
</ul>

<p>There are five buttons at the bottom of the menus. They can be tapped on the screen or maybe by using the X-Keys if the menu is on screen 1 (depending on "Xkeys" setting the <a href="/Topic/d7fbabad-bd0e-467b-9f8b-7942b3a27437">User settings</a>). This is a short description of the buttons:</p>

<ul>
	<li><strong>Add</strong>:<br>
	This will add one more row in the table.</li>
	<li><strong>Add Multiple</strong>:<br>
	This will add multiple rows in the table.</li>
	<li><strong>Delete</strong>:<br>
	Tapping this deletes the selected row.</li>
	<li><strong>Enable</strong>:<br>
	This toggle button will enable or disable the remote input for the entire tab. Yellow text is active (enabled).</li>
	<li><strong>CLI on Master</strong>:<br>
	This toggle button will enable or disable the input actions interaction with the command line input. Yellow text is active.</li>
</ul>

<p>Each input can have multiple lines doing different actions.</p>

<p>&nbsp;</p>

<a name="toc_header_anchor_1" id="toc_header_anchor_1" class="topic-toc-item"></a><h2>Analog Remote</h2>

<p>The <strong>Analog Remotes</strong> tab is used to configure the DC Remote Control input on the back of consoles, RPU, and onPC Command Wings. The consoles and the RPU has 16 contact closure inputs. The onPC Command Wings has 12 contact closure inputs.</p>

<p>The input needs between 5 and 15 volts to be triggered. It is not a variable input. If enough voltage is there, then the input is triggered.</p>

<p>Please read the <a href="/Topic/53b2cf0a-e1b6-4e7f-b521-8ea8554d64b1">Connect Analog Remote Control topic</a> to learn more about the hardware part of the input.</p>

<p>The Analog Remotes tab has a column called <strong>Input</strong>. Here the input number is written.</p>

<p>&nbsp;</p>

<a name="toc_header_anchor_2" id="toc_header_anchor_2" class="topic-toc-item"></a><h2>MIDI Remote</h2>

<p>The <strong>MIDI Remotes</strong> tab used received MIDI notes as the input. There are two special columns in this tab. They are called <strong>Note</strong> and <strong>Channel</strong>. These are used to set the MIDI note and channel.</p>

<p>If the <strong>Type</strong> is set to <strong>Exec</strong> and the <strong>Button</strong> is set to <strong>Fader</strong>, then the velocity of the MIDI note is used to set the position of the executor fader. All other inputs are simple triggers.</p>

<p>&nbsp;</p>

<a name="toc_header_anchor_3" id="toc_header_anchor_3" class="topic-toc-item"></a><h2>DMX Remote</h2>

<p>The <strong>DMX Remotes</strong> tab uses DMX channels as remote triggers. The DMX source can be the console itself.</p>

<p>The remote input has a special column called <strong>DMX</strong>. Here a DMX universe and channel is defined.</p>

<p>If the DMX value is 128 and above then the input is triggered. If it triggers a <strong>Fader </strong>then the DMX values is used to position the fader.</p>


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
		<input id="CurrentGuid" name="CurrentGuid" type="hidden" value="e5b0442b-7267-4be7-b7e1-35181dfc5760">
	</span>
</form></div>&nbsp;	</span>
	<span class="pull-right" style="white-space: nowrap;">
			<button class="btn btn-mini" onclick="location.href='/Page/grandMA2/remote_control/en/3.3'; " title="Go to previous page 'Remote Controlling the System'">
				<i class="icon-arrow-left"></i> previous
			</button>

			<button class="btn btn-mini" onclick="location.href='/Page/grandMA2/remote_control_msc/en/3.3';" title="Go to next page 'MIDI show control (MSC)'">
				next <i class="icon-arrow-right"></i> 
			</button>
	</span>
</div>
	<div class="clear-fix"></div>
	<div class="pull-right">
	
			<button class="btn btn-mini" onclick="location.href='/Media/TopicPdf/29541/6';" title="Open/Save this topic as PDF document for viewing or printing">
				<img src="/Content/images/icons/filetype_pdf.png"> Open topic as PDF
			</button>
	</div>
<div class="clear-fix" style="margin-bottom: 10px"></div>
</div>

	
