---
originalUrl: 'https://help2.malighting.com/Page/MA_dot2/HT_UseMidiAndMSC/en/1.9'
---

<div class="topic-navigation">

<div class="pull-right">
	<span class="pull-left">


<div class="pull-left">
<form action="/Topic/SetCurrentVersionNumber" class="form-inline" id="frmTagSelector" method="post">	<span class="form-mini">
		<div class="input-prepend"><span class="add-on">Select different version</span><select autocomplete="off" id="versionNumberId" name="versionNumberId" onchange="$(this).closest('#frmTagSelector').submit();" style="width: 120px;"><option value="">- latest -</option>
<option value="3">1.1</option>
<option value="7">1.2</option>
<option value="12">1.3</option>
<option value="16">1.5</option>
<option selected="selected" value="29">1.9</option>
</select></div>
		<input data-val="true" data-val-number="The field Int32 must be a number." data-val-required="The Int32 field is required." id="ProductId" name="ProductId" type="hidden" value="7">
		<input id="CurrentGuid" name="CurrentGuid" type="hidden" value="092db22a-d2f1-46ca-9a6e-a7c12c92f284">
	</span>
</form></div>&nbsp;	</span>
	<span class="pull-right" style="white-space: nowrap;">
			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/HT_UseExternalInput/en/1.9'; " title="Go to previous page 'Use external input triggers'">
				<i class="icon-arrow-left"></i> previous
			</button>

			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/HT_UseExternalScreen/en/1.9';" title="Go to next page 'Use the external screen'">
				next <i class="icon-arrow-right"></i> 
			</button>
	</span>
</div>
<div class="clear-fix" style="margin-bottom: 10px"></div>
</div>

		
			<div class="pull-right">
					<button class="btn btn-mini" style="margin-right: 10px; height: 30px;" onclick="location.href = '/Media/TopicPdf/53257/29'; " title="Open/Save this topic as PDF document for viewing or printing">
						<img src="/Content/images/icons/filetype_pdf.png" style="height: 24px;"> Open topic as PDF
					</button>
				<span class="badge badge-info">Version 1.9</span>
			</div>
		<h1>Use MIDI and MIDI Show Control (MSC)</h1>

			<div class="topic-table-of-contents">
				<h2>Table of contents of this topic</h2>
				<div class="topic-toc-toggler topic-toc-toggler-hide"><a href="#" onclick="$('.topic-toc-ul').toggle(); $('.topic-toc-toggler-hide').hide(); $('.topic-toc-toggler-show').show(); return false;">hide</a></div>
				<div class="topic-toc-toggler topic-toc-toggler-show" style="display: none;"><a href="#" onclick="$('.topic-toc-ul').toggle(); $('.topic-toc-toggler-hide').show(); $('.topic-toc-toggler-show').hide(); return false;">show</a></div>
				<ul class="topic-toc-ul">
						<li>
							<a href="#toc_header_anchor_1">MIDI note remote input</a>
						</li>
						<li>
							<a href="#toc_header_anchor_2">MIDI note output</a>
						</li>
						<li>
							<a href="#toc_header_anchor_3">MIDI Show Control (MSC) input</a>
						</li>
						<li>
							<a href="#toc_header_anchor_4">MIDI Show Control (MSC) output</a>
						</li>
						<li>
							<a href="#toc_header_anchor_5">MIDI Time Code (MTC)</a>
						</li>
						<li>
							<a href="#toc_header_anchor_6">The MSC Concept</a>
								<ul>
										<li><a href="#toc_header_anchor_7">Device ID</a></li>
										<li><a href="#toc_header_anchor_8">Command Format</a></li>
										<li><a href="#toc_header_anchor_9">Command</a></li>
										<li><a href="#toc_header_anchor_10">Data</a></li>
										<li><a href="#toc_header_anchor_11">MIDI via Ethernet</a></li>
								</ul>
						</li>
				</ul>
			</div>

		<p>The dot2 can handle different types of MIDI and it can both transmit and receive MIDI.</p>

<p>You can see the incoming and outgoing MIDI data on a console by pressing <span class="hardkey">Tools</span> and then <span class="softkey"><a href="/Topic/ae643503-568f-4073-b26f-223f4f1ae82a">MIDI Monitor</a></span>.</p>

<p>If you are using a dot2 onPC, then you need to setup your MIDI in and outputs. This is also done in Tools menu. Here you can tap <a href="/Topic/6e181799-633c-4b7d-a700-2fb8f6a07d74">MIDI Configuration</a> and select what MIDI devices you use to receive and transmit MIDI.</p>

<a name="toc_header_anchor_1" id="toc_header_anchor_1" class="topic-toc-item"></a><h2>MIDI note remote input</h2>

<p>This is a system to use received MIDI notes to trigger different things in the console. It's all set up in the <a href="/Topic/abf8c6b2-dcd4-4f27-8381-8defa74eec66">Remote Inputs Configuration view</a>.</p>

<p>Her you have the option to map incoming MIDI Note signals to executors or to trigger a command that you write in the configuration.</p>

<p>You can use the MIDI Velocity to set the position of a fader.&nbsp;</p>

<p>MIDI Remote Input only triggers the executors on the console that receives the MIDI signal.</p>

<a name="toc_header_anchor_2" id="toc_header_anchor_2" class="topic-toc-item"></a><h2>MIDI note output</h2>

<p>You can send MIDI notes from cues or directly from the command line.</p>

<p>You can use the <a href="/Topic/bb896543-7a8d-488f-9d67-40c4b3802f4f">MIDI Note command</a> to transmit MIDI Note data. Please read more details about the command in the command description.</p>

<p>The MIDI Note command is transmitted from a standalone console or if you have a session, then it's the session master (the console with the Blue Heart icon&nbsp;<img alt="" src="/Media/Image/Dot2_ViewsandWindows_StatusMessages03_1-0.png"> next to the command line input) that transmit the MIDI.</p>

<a name="toc_header_anchor_3" id="toc_header_anchor_3" class="topic-toc-item"></a><h2>MIDI Show Control (MSC) input</h2>

<p>The console can be controlled by any device that can send MIDI Show Control. There's a lot of settings regarding MSC. You can find them in <span class="hardkey">Setup</span> and then <span class="softkey"><a href="/Topic/9f4a7699-e22f-4316-9316-6b31746634da">MIDI Show Control</a></span>. Her you can change the settings to match the settings in the transmitter (often a Show Control software or some Sound software).</p>

<p>When you use MSC you can only control executors on the first page or the Main Executor.</p>

<p>The MSC data needs to be transmitted to a standalone console or if you have a session, then it's the session master (the console with the Blue Heart icon&nbsp;<img alt="" src="/Media/Image/Dot2_ViewsandWindows_StatusMessages03_1-0.png"> next to the command line input) that&nbsp; reacts to the MIDI.</p>

<p>Read more about the MSC concept <a href="#msc_concept">below</a>.</p>

<a name="toc_header_anchor_4" id="toc_header_anchor_4" class="topic-toc-item"></a><h2>MIDI Show Control (MSC) output</h2>

<p>The dot2 can transmit MSC commands to a device. This can be used to control other devices (like sound samplers). All the settings for this is found in <span class="hardkey">Setup</span> and then <span class="softkey"><a href="/Topic/9f4a7699-e22f-4316-9316-6b31746634da">MIDI Show Control</a></span>. Here you need to set your settings to match the MSC receiver.</p>

<p>The MSC data is transmitted from a standalone console or if you have a session, then it's the session master (the console with the Blue Heart icon&nbsp;<img alt="" src="/Media/Image/Dot2_ViewsandWindows_StatusMessages03_1-0.png"> next to the command line input) that transmit the MIDI.</p>

<p>Read more about the MSC concept <a href="#msc_concept">below</a>.</p>

<a name="toc_header_anchor_5" id="toc_header_anchor_5" class="topic-toc-item"></a><h2>MIDI Time Code (MTC)</h2>

<p>The console can receive MTC and use that to automatically run cues on executors.</p>

<p>The executor you want to be controlled by MTC needs to have "MIDI" selected in the <a href="/Topic/eea17a4c-1b42-406e-86d9-7e61b3a0bfdd">Settings of Executor window</a>. Then you need to have some cues in that executor that uses Timecode as the trigger. When Timecode is the trigger, then you can set a time in the "Trig Time" column. When your incoming MTC reaches the time you have set in the Trig Time column, then the cue is triggered. You don't need to have the cue as the next cue, it'll jump to the cue that have the time that matches the incoming MTC. Just remember to have the fader up.</p>

<p>You can type the times manually or you can tap <span class="softkey">TC Record</span> in the Cues view title bar. This will start a recording function. Then you can do a normal Go to the Timecode cues and it will record the time into the Trig Time column. You can also use the <a href="/Topic/1e90ffd8-ce1f-42a9-bda9-92c8e7bf83a0">Record command</a> to activate this timecode record function. When you have an active recording going on then you'll have a flashing red circle with a white "T" icon&nbsp; next to the Command line input. There'll also be a flashing red circle in the Cues view and in the Executor Bar. You turn off the Record function by tapping the <span class="softkey">TC Record</span> again.</p>

<p>&nbsp;</p>

<p>MTC can be enabled and disabled in the <a href="/Topic/c22188fd-6831-4847-a24a-f9174ed48191">Timecode Configuration window</a> in Setup. If you have turned off all the incoming timecodes then you can't tap the <span class="softkey">TC Record</span> button.</p>

<p>The incoming MTC can come into the system from any console/onPC in the session - not just the master.</p>

<p>&nbsp;</p>

<a name="toc_header_anchor_6" id="toc_header_anchor_6" class="topic-toc-item"></a><h2><a id="msc_concept" name="msc_concept"></a>The MSC Concept</h2>

<p>The MSC command structure and syntax is based on the general SysEx structure defined by MMA (MIDI Manufacturers Association). It was released in 1991 as an extension to the general MIDI.</p>

<p>The raw MIDI information is written in hex octets (two hexadecimal numbers). Different software manufacturers might present the MSC in an interpreted way and show the data in a more human readable form. This can of course be nice, but since we cannot describe every way this can be presented, this manual is looking at the raw data.</p>

<p>The message format looks like this:</p>

<table border="1" cellpadding="1" cellspacing="1" style="width:500px">
	<thead>
		<tr>
			<th scope="col">F0 7F</th>
			<th scope="col">Device ID</th>
			<th scope="col">02</th>
			<th scope="col">Command Format</th>
			<th scope="col">Command</th>
			<th scope="col">Data</th>
			<th scope="col">F7</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>&nbsp;</td>
			<td>&nbsp;</td>
			<td>&nbsp;</td>
			<td>&nbsp;</td>
			<td>&nbsp;</td>
			<td>&nbsp;</td>
			<td>&nbsp;</td>
		</tr>
	</tbody>
</table>

<ul>
	<li><strong>F0 7F</strong> is the header that identifies the message as "universal system exclusive" and a "real time" message.</li>
	<li><strong>Device ID</strong> is the device or group number.</li>
	<li><strong>02</strong> is a hex octet specifying that the message is MSC.</li>
	<li><strong>Command Format</strong> is an octet that specifies the equipment type.</li>
	<li><strong>Command</strong> is an octet that defines the command type</li>
	<li><strong>Data</strong> is the actual data. This might change depending on the command type.</li>
	<li><strong>F7</strong> is a closing octet finishing the message.</li>
</ul>

<a name="toc_header_anchor_7" id="toc_header_anchor_7" class="topic-toc-item"></a><h3>Device ID</h3>

<p>The device ID is an octet actually divided into three different sections:</p>

<ul>
	<li><strong>00 to 6F</strong>:<br>
	This is the 112 different specific devices that can be identified.</li>
	<li><strong>70 to 7E</strong>:<br>
	This is the 15 group numbers.</li>
	<li><strong>7F</strong>:<br>
	This is a broadcast ID that all devices listen to.</li>
</ul>

<p>In dot2 the device ID and group ID can be set for both incoming and outgoing messages.</p>

<p>For transmitting MSC it can only transmit one octet in the <strong>Device ID</strong> location. The <strong>Send to</strong> setting (described above) selects which one of the three different sections ID that should be transmitted.&nbsp;</p>

<a name="toc_header_anchor_8" id="toc_header_anchor_8" class="topic-toc-item"></a><h3>Command Format</h3>

<p>The command format octet denotes the type of equipment that should receive the message (or at least respond). dot2 only transmit and respond to three different formats:</p>

<ul>
	<li><strong>01</strong>:<br>
	This is the <strong>General Lighting</strong> format</li>
	<li><strong>02</strong>:<br>
	This is <strong>Moving Lights</strong> format.</li>
	<li><strong>7F</strong>:<br>
	This is an <strong>All</strong> format that all equipment should respond to.</li>
</ul>

<a name="toc_header_anchor_9" id="toc_header_anchor_9" class="topic-toc-item"></a><h3>Command</h3>

<p>The command octet denotes the type of command in the message. The command type will dictate the data information.</p>

<p>dot2 supports 7 different command types:</p>

<ul>
	<li><strong>01 (Go)</strong>:<br>
	This is the same as a Goto command in dot2. It needs to be followed by a cue number.</li>
	<li><strong>02 (Stop)</strong>:<br>
	This is the same as a Pause command in dot2. This can be followed by a cue number.</li>
	<li><strong>03 (Resume)</strong>:<br>
	This will "un-plause" a cue. If a specific cue has been paused, then the cue number needs to be specified with this command.</li>
	<li><strong>04 (Timed_Go)</strong>:<br>
	This can be used to perform a Goto with a specific fade time. It needs both the time and the cue number - in that order.</li>
	<li><strong>06 (Set)</strong>:<br>
	Set can be used to set the position of faders. It needs the fader number and page followed by the position.</li>
	<li><strong>07 (Fire)</strong>:<br>
	This can be used to trigger macros. The macro number needs to follow the command. Only macro 1 to 255 can be triggered.</li>
	<li><strong>0B (Go_Off)</strong>:<br>
	This command can be used "Off" executors. This needs to followed by a cue number.</li>
</ul>

<a name="toc_header_anchor_10" id="toc_header_anchor_10" class="topic-toc-item"></a><h3>Data</h3>

<p><strong>01 (Go):</strong></p>

<p>As stated above: This is interpreted as a GOTO command. A cue number needs to be specified. The cue number also needs to be transmitted in hex octets and the complete cue number including the decimals needs to be transmitted. If cue number 4 is to be triggered then the complete number is <strong>4.000</strong> - the number with all decimal numbers separated by a dot (Hex value 2E). Decimal numbers in hex is some of the easiest to convert. It needs a "3" in front. This means that decimal <strong>4</strong> becomes <strong>34</strong> in hex. The complete cue number including the dot is then: <strong>34 2E 30 30 30</strong>.</p>

<p>If the station is set to <strong>Default Only</strong> in the Send MSC In Exec option, then this all that needs to be added after the command.</p>

<p><strong>Example:</strong> Triggering cue number <strong>21.5</strong> on the default executor (<strong>All Devices</strong>,<strong> All Format</strong>, and <strong>Default Only</strong> setting):</p>

<table border="1" cellpadding="1" cellspacing="1">
	<tbody>
		<tr>
			<th scope="col" style="width:10%">F0 7F</th>
			<th scope="col">Device ID</th>
			<th scope="col">02</th>
			<th scope="col">Command Format</th>
			<th scope="col">Command</th>
			<th scope="col" style="width:40%">Data</th>
			<th scope="col">F7</th>
		</tr>
		<tr>
			<td>F0 7F</td>
			<td>7F</td>
			<td>02</td>
			<td>7F</td>
			<td>01</td>
			<td>32 31 2E 35 30 30</td>
			<td>F7</td>
		</tr>
	</tbody>
</table>

<p>If the setting is not Default Only, then an executor and page needs to be specified. There are two options for separating the executor number and the page number. It can be separated by a dot (hex = 2E) or by a space (hex = 20). The cue number and the executor/page data needs to be separated by a hex value <strong>00</strong>.</p>

<p><strong>Example:</strong> Triggering cue number <strong>37.2</strong> on executor 5 on page 1 (<strong>All Devices</strong>,<strong> All Format</strong>, and <strong>Exec.Page</strong> setting):</p>

<table border="1" cellpadding="1" cellspacing="1">
	<tbody>
		<tr>
			<th scope="col" style="width:10%">F0 7F</th>
			<th scope="col">Device ID</th>
			<th scope="col">02</th>
			<th scope="col">Command Format</th>
			<th scope="col">Command</th>
			<th scope="col" style="width:40%">Data</th>
			<th scope="col">F7</th>
		</tr>
		<tr>
			<td>F0 7F</td>
			<td>7F</td>
			<td>02</td>
			<td>7F</td>
			<td>01</td>
			<td>33 37 2E 32 30 30 00 35 2E 31</td>
			<td>F7</td>
		</tr>
	</tbody>
</table>

<p>Same example but with a space separated executor and page:</p>

<table border="1" cellpadding="1" cellspacing="1">
	<tbody>
		<tr>
			<th scope="col" style="width:10%">F0 7F</th>
			<th scope="col">Device ID</th>
			<th scope="col">02</th>
			<th scope="col">Command Format</th>
			<th scope="col">Command</th>
			<th scope="col" style="width:40%">Data</th>
			<th scope="col">F7</th>
		</tr>
		<tr>
			<td>F0 7F</td>
			<td>7F</td>
			<td>02</td>
			<td>7F</td>
			<td>01</td>
			<td>33 37 2E 32 30 30 00 35 20 31</td>
			<td>F7</td>
		</tr>
	</tbody>
</table>

<p>&nbsp;</p>

<p><strong>02 (Stop):</strong></p>

<p>This is like hitting the pause button. Please read the section above for a better understanding of the hex cue numbering system.</p>

<p>With the <strong>Default Only</strong> option there does not need to be any extra data since it is the executor that is paused.</p>

<p><strong>Example:</strong> Stopping the default executor (<strong>All Devices</strong>,<strong> All Format</strong>, and <strong>Default Only</strong> setting):</p>

<table border="1" cellpadding="1" cellspacing="1">
	<tbody>
		<tr>
			<th scope="col" style="width:10%">F0 7F</th>
			<th scope="col">Device ID</th>
			<th scope="col">02</th>
			<th scope="col">Command Format</th>
			<th scope="col">Command</th>
			<th scope="col" style="width:40%">Data</th>
			<th scope="col">F7</th>
		</tr>
		<tr>
			<td>F0 7F</td>
			<td>7F</td>
			<td>02</td>
			<td>7F</td>
			<td>02</td>
			<td>&nbsp;</td>
			<td>F7</td>
		</tr>
	</tbody>
</table>

<p>If the station is transmitting MSC, then it will transmit a cue number <strong>0.000</strong>. This is like sending a “pause running cue” command.</p>

<p>If the settings are not <strong>Default Only</strong> but one of the two Exec/Page options, then the cue 0 also needs to be transmitted.&nbsp;</p>

<p><strong>Example:</strong> Stopping executor 5 on page 1 (<strong>All Devices</strong>,<strong> All Format</strong>, and <strong>Exec.Page</strong> setting):</p>

<table border="1" cellpadding="1" cellspacing="1">
	<tbody>
		<tr>
			<th scope="col" style="width:10%">F0 7F</th>
			<th scope="col">Device ID</th>
			<th scope="col">02</th>
			<th scope="col">Command Format</th>
			<th scope="col">Command</th>
			<th scope="col" style="width:40%">Data</th>
			<th scope="col">F7</th>
		</tr>
		<tr>
			<td>F0 7F</td>
			<td>7F</td>
			<td>02</td>
			<td>7F</td>
			<td>02</td>
			<td>30 2E 30 30 30 00 35 2E 31</td>
			<td>F7</td>
		</tr>
	</tbody>
</table>

<p>&nbsp;</p>

<p><strong>03 (Resume):</strong></p>

<p>This is the only way to continue a paused cue. The only difference between the Stop and Resume commands are the “02” and “03”.</p>

<p><strong>Example:</strong> Continuing the fade paused above (<strong>All Devices</strong>,<strong> All Format</strong>, and <strong>Exec.Page</strong> setting):</p>

<table border="1" cellpadding="1" cellspacing="1">
	<tbody>
		<tr>
			<th scope="col" style="width:10%">F0 7F</th>
			<th scope="col">Device ID</th>
			<th scope="col">02</th>
			<th scope="col">Command Format</th>
			<th scope="col">Command</th>
			<th scope="col" style="width:40%">Data</th>
			<th scope="col">F7</th>
		</tr>
		<tr>
			<td>F0 7F</td>
			<td>7F</td>
			<td>02</td>
			<td>7F</td>
			<td>03</td>
			<td>30 2E 30 30 30 00 35 2E 31</td>
			<td>F7</td>
		</tr>
	</tbody>
</table>

<p>If the Default Only setting is chosen then the command is <strong>F0 7F 7F 02 7F 03 F7</strong> to continue the fade.</p>

<p>&nbsp;</p>

<p><strong>04 (Timed_Go):</strong></p>

<p>This is the same as the <strong>01 (Go)</strong> command but with a specified time. Please read (and understand) about the <strong>01 (GO)</strong> command and data above. Just to make this a bit simpler we are going to pretend that the “Default Only” option is turned on in the MSC options in Setup.</p>

<p>To transmit a timed Goto the time needs to be specified first and then the cue number. The time is specified by five hex octets. They represent (in order) <strong>Hour</strong>,<strong> Minute</strong>,<strong> Second</strong>,<strong> Frame</strong>,<strong> </strong>and<strong> Fraction</strong>.</p>

<p>The hour, minute, and second sections are very strait forward. The number needs to be transmitted in hex numbers. It is possible to transmit a value above the normal limit for example 64 seconds (hex = 40). The station will transmit this as 1 minute and 4 seconds.</p>

<p>Right now the console will not accept any time specified in the Frame and Fraction sections. But it transmit values below a second in the Frame section. The console divides the second into 24 frames. So 0.5 seconds is 12 Frames and the received hex number would be <strong>0C</strong>.</p>

<p><strong>Example:</strong> Goto cue 75 with the fade time of 20 seconds (<strong>All Devices</strong>,<strong> All Format</strong>, and <strong>Default Only</strong> setting):</p>

<table border="1" cellpadding="1" cellspacing="1">
	<tbody>
		<tr>
			<th scope="col" style="width:10%">F0 7F</th>
			<th scope="col">Device ID</th>
			<th scope="col">02</th>
			<th scope="col">Command Format</th>
			<th scope="col">Command</th>
			<th scope="col" style="width:40%">Data</th>
			<th scope="col">F7</th>
		</tr>
		<tr>
			<td>F0 7F</td>
			<td>7F</td>
			<td>02</td>
			<td>7F</td>
			<td>04</td>
			<td>00 00 14 00 00 37 35 2E 30 30 30</td>
			<td>F7</td>
		</tr>
	</tbody>
</table>

<p><strong>Example:</strong> Goto cue 5.4 with the fade time of 1 minute on executor 3 on page 1 (<strong>All Devices</strong>,<strong> All Format</strong>, and <strong>Exec.Page</strong> setting):</p>

<table border="1" cellpadding="1" cellspacing="1">
	<tbody>
		<tr>
			<th scope="col" style="width:10%">F0 7F</th>
			<th scope="col">Device ID</th>
			<th scope="col">02</th>
			<th scope="col">Command Format</th>
			<th scope="col">Command</th>
			<th scope="col" style="width:40%">Data</th>
			<th scope="col">F7</th>
		</tr>
		<tr>
			<td>F0 7F</td>
			<td>7F</td>
			<td>02</td>
			<td>7F</td>
			<td>04</td>
			<td>00 01 00 00 00 35 2E 34 30 30 00 33 2E 31</td>
			<td>F7</td>
		</tr>
	</tbody>
</table>

<p>&nbsp;</p>

<p><strong>06 (Set):</strong></p>

<p>The set command is used to move a fader to specific position. The 06 command is followed by two hex octets that indicates the fader and then two more octets that dictates the position.</p>

<p>&nbsp;</p>

<p>The first of the two numbers for the fader is the fader number (on a page). The fader number 1 is hex number <strong>00</strong>, the second is <strong>01</strong> and so on. Remember that this is a hex number so fader 16 have hex number <strong>0F</strong> and decimal 17 is hex <strong>10</strong>.</p>

<p>The second of the two numbers for the faders are the page number. This is a little different page 1 is hex number <strong>01</strong>and page 2 is hex <strong>02</strong> and so on.</p>

<p>So executor 1 on page 1 is <strong>00 01</strong>.</p>

<p>&nbsp;</p>

<p>Calculating the position in hex numbers is a bit more tricky. The faders position is defined by a coarse and fine value. The scale for both values is 128 steps (most MIDI is in 128 steps). The fine value is transmitted first followed by the coarse value.</p>

<p>The desired fader position (in decimal) need to be multiplied by 1.28. The resulting integer is the coarse value. The remainder (everything on the right side of the separator) should be multiplied by 128 to get the fine value. The two decimal numbers then needs to be converted to hex.</p>

<p><strong>Example:</strong></p>

<p>The fader 3 on page 2 needs to be moved to 45%. First convert the position.</p>

<ol>
	<li>Multiply 45 by 1.28 = 57.6</li>
	<li>Coarse value is 57.</li>
	<li>Multiply 0.6 by 128 = 76.8</li>
	<li>Fine value is 76.</li>
	<li>Convert decimal 57 to hex = 39.</li>
	<li>Convert decimal 76 to hex = 4C.</li>
	<li>Fine is transmitted before coarse so the position is: 4C 39</li>
</ol>

<p>The MSC message is (<strong>All Devices</strong> and <strong>All Format</strong> setting):</p>

<table border="1" cellpadding="1" cellspacing="1">
	<tbody>
		<tr>
			<th scope="col" style="width:10%">F0 7F</th>
			<th scope="col">Device ID</th>
			<th scope="col">02</th>
			<th scope="col">Command Format</th>
			<th scope="col">Command</th>
			<th scope="col" style="width:40%">Data</th>
			<th scope="col">F7</th>
		</tr>
		<tr>
			<td>F0 7F</td>
			<td>7F</td>
			<td>02</td>
			<td>7F</td>
			<td>06</td>
			<td>02 02 4C 39</td>
			<td>F7</td>
		</tr>
	</tbody>
</table>

<p>&nbsp;</p>

<p>A fade time can be added after the fader and position data. The time format explained in the 04 command is used.</p>

<p><strong>Example: </strong>Moving fader 15 on page 1 to 100% in 5 seconds (<strong>All Devices</strong> and <strong>All Format</strong> setting):</p>

<table border="1" cellpadding="1" cellspacing="1">
	<tbody>
		<tr>
			<th scope="col" style="width:10%">F0 7F</th>
			<th scope="col">Device ID</th>
			<th scope="col">02</th>
			<th scope="col">Command Format</th>
			<th scope="col">Command</th>
			<th scope="col" style="width:40%">Data</th>
			<th scope="col">F7</th>
		</tr>
		<tr>
			<td>F0 7F</td>
			<td>7F</td>
			<td>02</td>
			<td>7F</td>
			<td>06</td>
			<td>0E 01 7F 7F 00 00 05 00 00</td>
			<td>F7</td>
		</tr>
	</tbody>
</table>

<p>&nbsp;</p>

<p>The console only transmit the position of some faders - executors with sequences and all the green colored special masters (for the selected executor), but it accepts positions for all faders that have something assigned.</p>

<p>&nbsp;</p>

<p><strong>07 (Fire):</strong></p>

<p>Macros can be fired by this command. It needs to be followed by a single octet specifying the macro number.</p>

<p>Macro number 1 is hex number <strong>01</strong>. Hex number <strong>FF</strong> is macro number 255.</p>

<p><strong>Example</strong>: Triggering macro number 24 (<strong>All Devices</strong> and <strong>All Format</strong> setting):</p>

<table border="1" cellpadding="1" cellspacing="1">
	<tbody>
		<tr>
			<th scope="col" style="width:10%">F0 7F</th>
			<th scope="col">Device ID</th>
			<th scope="col">02</th>
			<th scope="col">Command Format</th>
			<th scope="col">Command</th>
			<th scope="col" style="width:40%">Data</th>
			<th scope="col">F7</th>
		</tr>
		<tr>
			<td>F0 7F</td>
			<td>7F</td>
			<td>02</td>
			<td>7F</td>
			<td>07</td>
			<td>18</td>
			<td>F7</td>
		</tr>
	</tbody>
</table>

<p>&nbsp;</p>

<p><strong>0B (Go_Off):</strong></p>

<p>Executors can be turned off using the <strong>0B</strong> command. A cue number needs to be transmitted - cue 0 can be used.</p>

<p><strong>Example</strong>: Send an Off command to executor 9 on page 5 (<strong>All Devices</strong>, <strong>All Format</strong>, and <strong>Exec.Page</strong> setting):</p>

<table border="1" cellpadding="1" cellspacing="1">
	<tbody>
		<tr>
			<th scope="col" style="width:10%">F0 7F</th>
			<th scope="col">Device ID</th>
			<th scope="col">02</th>
			<th scope="col">Command Format</th>
			<th scope="col">Command</th>
			<th scope="col" style="width:40%">Data</th>
			<th scope="col">F7</th>
		</tr>
		<tr>
			<td>F0 7F</td>
			<td>7F</td>
			<td>02</td>
			<td>7F</td>
			<td>0B</td>
			<td>30 2E 30 30 30 00 39 2E 35</td>
			<td>F7</td>
		</tr>
	</tbody>
</table>

<a name="toc_header_anchor_11" id="toc_header_anchor_11" class="topic-toc-item"></a><h3>MIDI via Ethernet</h3>

<p>MSC can sent using Ethernet. It is transmitted as a UDP message.</p>

<p>The MSC message is the same as described above, but the MSC message needs a header for the date to be accepted by the dot2.</p>

<p>The header is separated into two parts. The first is identifying the message as a dot2 MSC message: <strong>47 4D 41 00 4D 53 43 00 </strong>- it translates to GMA MSC.</p>

<p>The second part is four octets describing the length of the message - including the header. It is written as little endian byte format (least significant first).</p>

<p>This is calculated by counting the number of octets and then convert the decimal number into hex. Usually we only needs the first octet (it allows for messages up to 255 octets) although all four needs to be sent.</p>

<p>&nbsp;</p>

<p><strong>Examples:</strong></p>

<p>Send a go command to cue 35. The MSC message is: <strong>F0 7F 7F 02 7F 01 33 35 2E 30 30 30 F7</strong>.</p>

<p>This is 13 octets. The header is always 12 octets. So the combined length is 25 octets. Decimal 25 is <strong>18</strong> in hex. The entire message is:</p>

<p><strong>47 4D 41 00 4D 53 43 00 18 00 00 00 F0 7F 7F 02 7F 01 33 35 2E 30 30 30 F7</strong></p>

<p>&nbsp;</p>

<p>Trigger macro 1 is: <strong>F0 7F 7F 02 7F 07 01 F7</strong> - 8 octets.</p>

<p>Plus the 12 from the header is decimal 20 = 13 hex.</p>

<p>The message is:</p>

<p><strong>47 4D 41 00 4D 53 43 00 13 00 00 00 F0 7F 7F 02 7F 07 01 F7</strong></p>


				<br>
<div class="topic-navigation">

<div class="pull-right">
	<span class="pull-left">


<div class="pull-left">
<form action="/Topic/SetCurrentVersionNumber" class="form-inline" id="frmTagSelector" method="post">	<span class="form-mini">
		<div class="input-prepend"><span class="add-on">Select different version</span><select autocomplete="off" id="versionNumberId" name="versionNumberId" onchange="$(this).closest('#frmTagSelector').submit();" style="width: 120px;"><option value="">- latest -</option>
<option value="3">1.1</option>
<option value="7">1.2</option>
<option value="12">1.3</option>
<option value="16">1.5</option>
<option selected="selected" value="29">1.9</option>
</select></div>
		<input data-val="true" data-val-number="The field Int32 must be a number." data-val-required="The Int32 field is required." id="ProductId" name="ProductId" type="hidden" value="7">
		<input id="CurrentGuid" name="CurrentGuid" type="hidden" value="092db22a-d2f1-46ca-9a6e-a7c12c92f284">
	</span>
</form></div>&nbsp;	</span>
	<span class="pull-right" style="white-space: nowrap;">
			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/HT_UseExternalInput/en/1.9'; " title="Go to previous page 'Use external input triggers'">
				<i class="icon-arrow-left"></i> previous
			</button>

			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/HT_UseExternalScreen/en/1.9';" title="Go to next page 'Use the external screen'">
				next <i class="icon-arrow-right"></i> 
			</button>
	</span>
</div>
	<div class="clear-fix"></div>
	<div class="pull-right">
	
			<button class="btn btn-mini" onclick="location.href='/Media/TopicPdf/53257/29';" title="Open/Save this topic as PDF document for viewing or printing">
				<img src="/Content/images/icons/filetype_pdf.png"> Open topic as PDF
			</button>
	</div>
<div class="clear-fix" style="margin-bottom: 10px"></div>
</div>

	
