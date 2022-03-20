---
originalUrl: 'http://help2.malighting.com/Page/MA_dot2/window_remote/en/1.2'
---

<div class="topic-navigation">

<div class="pull-right">
	<span class="pull-left">


<div class="pull-left">
<form action="/Topic/SetCurrentVersionNumber" class="form-inline" id="frmTagSelector" method="post">	<span class="form-mini">
		<div class="input-prepend"><span class="add-on">Select different version</span><select autocomplete="off" id="versionNumberId" name="versionNumberId" onchange="$(this).closest('#frmTagSelector').submit();" style="width: 120px;"><option value="">- latest -</option>
<option value="3">1.1</option>
<option selected="selected" value="7">1.2</option>
<option value="12">1.3</option>
<option value="16">1.5</option>
<option value="29">1.9</option>
</select></div>
		<input data-val="true" data-val-number="The field Int32 must be a number." data-val-required="The Int32 field is required." id="ProductId" name="ProductId" type="hidden" value="7">
		<input id="CurrentGuid" name="CurrentGuid" type="hidden" value="abf8c6b2-dcd4-4f27-8381-8defa74eec66">
	</span>
</form></div>&nbsp;	</span>
	<span class="pull-right" style="white-space: nowrap;">
			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/ViewItem_Preset/en/1.2'; " title="Go to previous page 'Presets Pools'">
				<i class="icon-arrow-left"></i> previous
			</button>

			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/window_SaveShowAs/en/1.2';" title="Go to next page 'Save Show As...'">
				next <i class="icon-arrow-right"></i> 
			</button>
	</span>
</div>
<div class="clear-fix" style="margin-bottom: 10px"></div>
</div>

					<div class="infobox"><b>Hint:</b><br><b>New help version</b><br>The help version you selected belongs to an older software version. <a href="/Topic/SetCurrentVersionNumber/29/abf8c6b2-dcd4-4f27-8381-8defa74eec66">You may want to view the latest help version.</a></div>

			<div class="pull-right">
					<button class="btn btn-mini" style="margin-right: 10px; height: 30px;" onclick="location.href = '/Media/TopicPdf/16078/7'; " title="Open/Save this topic as PDF document for viewing or printing">
						<img src="/Content/images/icons/filetype_pdf.png" style="height: 24px;"> Open topic as PDF
					</button>
				<span class="badge badge-info">Version 1.2</span>
			</div>
		<h1>Remote Inputs Configuration Window</h1>

			<div class="topic-table-of-contents">
				<h2>Table of contents of this topic</h2>
				<div class="topic-toc-toggler topic-toc-toggler-hide"><a href="#" onclick="$('.topic-toc-ul').toggle(); $('.topic-toc-toggler-hide').hide(); $('.topic-toc-toggler-show').show(); return false;">hide</a></div>
				<div class="topic-toc-toggler topic-toc-toggler-show" style="display: none;"><a href="#" onclick="$('.topic-toc-ul').toggle(); $('.topic-toc-toggler-hide').show(); $('.topic-toc-toggler-show').hide(); return false;">show</a></div>
				<ul class="topic-toc-ul">
						<li>
							<a href="#toc_header_anchor_1">Analog</a>
						</li>
						<li>
							<a href="#toc_header_anchor_2">MIDI</a>
						</li>
						<li>
							<a href="#toc_header_anchor_3">DMX</a>
						</li>
						<li>
							<a href="#toc_header_anchor_4">Encoder Bar Functions</a>
						</li>
				</ul>
			</div>

		<p>The Remote Inputs Configuration Window is located in the <a href="/Topic/198599eb-ca20-4e60-b007-bb08cd2ce43b">Setup</a>, column <strong>Show</strong>, <strong>Remote Inputs</strong>.</p>

<figure class="caption"><img alt="" src="/Media/Image/Dot2_ViewsandWindows_RemoteInputs01_1-2.png">
<figcaption><em>Figure 1: Remote Input Configuration Window</em></figcaption>
</figure>

<p>In this window, you can set what the dot2 should do with the connected remote inputs.</p>

<p>On the left side of the screen are the three different remote inputs displayed:</p>

<ul>
	<li>Analog</li>
	<li>MIDI</li>
	<li>DMX</li>
</ul>

<p>The green tick displays, that this type of remote control is enabled.<br>
The red prohibition sign displays, that this type of remote control is disabled.<br>
To enable or disable a type of remote control, press the <strong>Input Type </strong>encoder.</p>

<p>The selected remote input has an orange bar on the left side of the cell.</p>

<p>If an input activity is receiving, it is displayed by a green indicator.</p>

<p>For all remote control inputs are the following four columns available:</p>

<p><strong>Type:</strong><br>
Displays the type of action what the console should do when the contact is activated.<br>
To select the type, press and hold the cell or select the cell and press the scroll encoder. The <a href="/Topic/9130c375-4f54-4a2d-b9a7-ac1690794ab3">Select Type Window</a> opens.</p>

<p><strong>Page:</strong><br>
Displays the selected page.<br>
To change the page, press and hold the cell or select the cell and press the scroll encoder. The <a href="/Topic/014d961b-8de1-4f48-92de-e6da3cc6a15f">Calculator</a> opens.</p>

<p><strong>Executor</strong> (only if the selected type is executor)<strong>:</strong><br>
Displays the assigned executor number from the selected page to the input.</p>

<div class="tip"><strong>Hint:</strong><br>
To see the executor numbers in the executor bar, press and hold the <span class="hardkey"><img alt="ma" src="/Media/Mlg/ma.png"></span> key.</div>

<p>To select an executor, press and hold the cell or select the cell and press the scroll encoder. The <a href="/Topic/014d961b-8de1-4f48-92de-e6da3cc6a15f">Calculator</a> opens.<br>
If you typed in an invalid executor number, the executor cell is displayed with a red background.</p>

<p><strong>Function</strong> (only if the selected type is executor):<br>
Displays the assigned button or fader.<br>
To select a button or fader, press and hold the cell or select the cell and press the scroll encoder. The <a href="/Topic/4698b425-2f1b-43e9-a87d-bd0b345da15b">Select Function Window</a> opens.</p>

<p><strong>CMD</strong> (= command, only if the selected type is CMD):<br>
Displays the assigned command to the input.<br>
To type in a command, press and hold the cell or select the cell and press the scroll encoder. The virtual keyboard opens. Enter the command which should be executed.</p>

<hr>
<a name="toc_header_anchor_1" id="toc_header_anchor_1" class="topic-toc-item"></a><h2>Analog</h2>

<p>For using the analog remote you have to connect e.g. a light barrier or a push button, on the DC Remote Control at the back of the console.<br>
Refer to, <a href="/Topic/f05738f2-0e05-46c2-8a20-88c0852321e8">physical setup and layout</a>.</p>

<p>Additional to the four standard columns, the analog remote control has the Input column.</p>

<p><strong>Input:</strong><br>
Displays the input in from the connected DC Remote Control.<br>
The pin layout is displayed next to the connector on the back of the console.<br>
Pin 1 - 6 =&nbsp;Input 1,3,5,7,9,11&nbsp;<br>
Pin 9 - 14 =&nbsp;Input 2,4,6,8,10,12<br>
There are twelve different inputs available to assign.<br>
This column is read only.</p>

<hr>
<a name="toc_header_anchor_2" id="toc_header_anchor_2" class="topic-toc-item"></a><h2>MIDI</h2>

<p>For using the MIDI remote, you have to connect a MIDI remote on the MIDI In connector at the back of the console.<br>
Refer to, <a href="/Topic/f05738f2-0e05-46c2-8a20-88c0852321e8">physical setup and layout</a>.</p>

<p>If you assigned in the column type an executor, and in the column button a fader, the velocity controls the fader level.</p>

<p>Additional to the four standard columns, the MIDI remote control has the Note column.</p>

<p><strong>Note:</strong><br>
Displays the available MIDI notes from 0 - 127.</p>

<hr>
<a name="toc_header_anchor_3" id="toc_header_anchor_3" class="topic-toc-item"></a><h2>DMX</h2>

<p>For using the DMX remote, you have to connect a DMX remote at the DMX In connector at the back of the console.<br>
Refer to, <a href="/Topic/f05738f2-0e05-46c2-8a20-88c0852321e8">physical setup and layout</a>.</p>

<p>To trigger a button or command by DMX in, a DMX value between 128 and 255 is necessary.<br>
The green indicator is only visible if a DMX value above 0 is sent to trigger faders, or above 127 is sent to trigger buttons or commands.</p>

<p>Additional to the four standard columns, the DMX remote control has the DMX column.</p>

<p><strong>DMX:</strong><br>
Displays the DMX address.&nbsp;This column is read only.</p>

<hr>
<a name="toc_header_anchor_4" id="toc_header_anchor_4" class="topic-toc-item"></a><h2>Encoder Bar Functions</h2>

<figure class="caption"><img alt="" src="/Media/Image/Dot2_ViewsandWindows_RemoteInputs02_1-0.PNG">
<figcaption><em>Figure 2: Encoder Bar Functions - Remote Inputs Configuration Window</em></figcaption>
</figure>

<p><strong>Input Type:</strong><br>
To select a remote input type, turn the encoder left or right.<br>
To enable or disable a remote input type, press the encoder. The current status is displayed in brackets.</p>

<p><strong>Scroll:</strong><br>
To scroll up or down, turn the encoder left or right.<br>
To scroll left or right, press and turn the encoder left or right.<br>
To edit a selected cell, press the encoder. The respective window opens.</p>

<p><strong>Select</strong>:<br>
To select more than one cell, press the&nbsp;<span class="hardkey"><img alt="ma" src="/Media/Mlg/ma.png"></span> key and turn the encoder up or down.<br>
A blue frame around the cells displays the selected cell.</p>

<p>&nbsp;</p>


				<br>
<div class="topic-navigation">

<div class="pull-right">
	<span class="pull-left">


<div class="pull-left">
<form action="/Topic/SetCurrentVersionNumber" class="form-inline" id="frmTagSelector" method="post">	<span class="form-mini">
		<div class="input-prepend"><span class="add-on">Select different version</span><select autocomplete="off" id="versionNumberId" name="versionNumberId" onchange="$(this).closest('#frmTagSelector').submit();" style="width: 120px;"><option value="">- latest -</option>
<option value="3">1.1</option>
<option selected="selected" value="7">1.2</option>
<option value="12">1.3</option>
<option value="16">1.5</option>
<option value="29">1.9</option>
</select></div>
		<input data-val="true" data-val-number="The field Int32 must be a number." data-val-required="The Int32 field is required." id="ProductId" name="ProductId" type="hidden" value="7">
		<input id="CurrentGuid" name="CurrentGuid" type="hidden" value="abf8c6b2-dcd4-4f27-8381-8defa74eec66">
	</span>
</form></div>&nbsp;	</span>
	<span class="pull-right" style="white-space: nowrap;">
			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/ViewItem_Preset/en/1.2'; " title="Go to previous page 'Presets Pools'">
				<i class="icon-arrow-left"></i> previous
			</button>

			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/window_SaveShowAs/en/1.2';" title="Go to next page 'Save Show As...'">
				next <i class="icon-arrow-right"></i> 
			</button>
	</span>
</div>
	<div class="clear-fix"></div>
	<div class="pull-right">
	
			<button class="btn btn-mini" onclick="location.href='/Media/TopicPdf/16078/7';" title="Open/Save this topic as PDF document for viewing or printing">
				<img src="/Content/images/icons/filetype_pdf.png"> Open topic as PDF
			</button>
	</div>
<div class="clear-fix" style="margin-bottom: 10px"></div>
</div>

	
