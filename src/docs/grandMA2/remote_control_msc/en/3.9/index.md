---
originalUrl: 'https://help2.malighting.com/Page/grandMA2/remote_control_msc/en/3.9'
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
		<input id="CurrentGuid" name="CurrentGuid" type="hidden" value="2d79b9d0-6847-4439-8613-3b7b27be78b3">
	</span>
</form></div>&nbsp;	</span>
	<span class="pull-right" style="white-space: nowrap;">
			<button class="btn btn-mini" onclick="location.href='/Page/grandMA2/remote_control_input/en/3.9'; " title="Go to previous page 'Remote input'">
				<i class="icon-arrow-left"></i> previous
			</button>

			<button class="btn btn-mini" onclick="location.href='/Page/grandMA2/remote_control_web_remote/en/3.9';" title="Go to next page 'Web remote'">
				next <i class="icon-arrow-right"></i> 
			</button>
	</span>
</div>
<div class="clear-fix" style="margin-bottom: 10px"></div>
</div>

		
			<div class="pull-right">
					<button class="btn btn-mini" style="margin-right: 10px; height: 30px;" onclick="location.href = '/Media/TopicPdf/89015/31'; " title="Open/Save this topic as PDF document for viewing or printing">
						<img src="/Content/images/icons/filetype_pdf.png" style="height: 24px;"> Open topic as PDF
					</button>
				<span class="badge badge-info">Version 3.9</span>
			</div>
		<h1>MIDI Show Control (MSC)</h1>

			<div class="topic-table-of-contents">
				<h2>Table of contents of this topic</h2>
				<div class="topic-toc-toggler topic-toc-toggler-hide"><a href="#" onclick="$('.topic-toc-ul').toggle(); $('.topic-toc-toggler-hide').hide(); $('.topic-toc-toggler-show').show(); return false;">hide</a></div>
				<div class="topic-toc-toggler topic-toc-toggler-show" style="display: none;"><a href="#" onclick="$('.topic-toc-ul').toggle(); $('.topic-toc-toggler-hide').show(); $('.topic-toc-toggler-show').hide(); return false;">show</a></div>
				<ul class="topic-toc-ul">
						<li>
							<a href="#toc_header_anchor_1">Setting up MSC</a>
						</li>
						<li>
							<a href="#toc_header_anchor_2">The MSC Concept</a>
								<ul>
										<li><a href="#toc_header_anchor_3">Device ID</a></li>
										<li><a href="#toc_header_anchor_4">Command Format</a></li>
										<li><a href="#toc_header_anchor_5">Command</a></li>
										<li><a href="#toc_header_anchor_6">Data</a></li>
								</ul>
						</li>
						<li>
							<a href="#toc_header_anchor_7">MIDI via Ethernet</a>
						</li>
				</ul>
			</div>

		<p><strong>MIDI Show Control (MSC)</strong> is a different way to remote control the system.</p>

<p>It was released in 1991 as an extension to the MIDI protocol. The grandMA2 system is capable of receiving and transmitting MSC.</p>

<p>There are a lot of settings to MSC. Most of these are setting to be able to match the transmitting and receiving devices. Please read below.</p>

<p>Below the settings there is a description of the <a href="#msc_concept">MSC concept</a> and then some words about transporting <a href="#midi_ethernet">MIDI using Ethernet</a>.</p>

<p>&nbsp;</p>

<a name="toc_header_anchor_1" id="toc_header_anchor_1" class="topic-toc-item"></a><h2>Setting up MSC</h2>

<p>To access these settings, press the <span class="hardkey">Setup</span> key and then the <span class="softkey">Midi Show Control button</span> under the <strong>Console </strong>tab.</p>

<p>The settings could look like this:</p>

<figure class="caption"><img alt="" src="/Media/Image/menu_midi-show-control_v3-3.png">
<figcaption><em>MIDI Show Control</em></figcaption>
</figure>

<p>There are four rows with different settings and two monitor fields.</p>

<p>The monitor fields display the incoming and outgoing MSC. They display the data as interpreted data, meaning that it does not show the raw hex data.</p>

<p>The top row has two input fields and one toggle button:</p>

<ul>
	<li><strong>Channel MIDI In:</strong><br>
	There are 16 different channels in MIDI. The number in the In field needs to match the channel number from the transmitter.</li>
	<li><strong>Channel MIDI Out:</strong><br>
	The channel number in this field need to match the channel number of the MSC receiver.</li>
	<li><strong>MIDI Thru:</strong><br>
	This toggle button turn On or Off is any incoming MIDI should also be sent out of the MIDI output.</li>
</ul>

<div class="important"><strong>Important:</strong><br>
If MSC commands are transmitted and received on the same MIDI channel, then a loop will be created.</div>

<p>The next two lines are the same except the first is the settings for any incoming MSC and the second is the outgoing MSC.</p>

<ul>
	<li><strong>Device</strong>:<br>
	There are 112 different devices in MSC. MSC also specifies an "All" option. This is set in the <strong>Send to</strong> button at the lower left corner - read about it below. This input accepts values from 0 to 111.</li>
	<li><strong>Group</strong>:<br>
	The MSC standard has the option to organize the devices in 15 different groups. Here it is possible to set a group number from 1 to 15. Please read about the <strong>Send to</strong> setting below.</li>
	<li><strong>Port</strong>:<br>
	If MSC is to be sent using an Ethernet connection, then there needs to be an IP port number. This can be set here. The default number is 6004. The port number needs to be between 6000 and 6100.</li>
	<li><strong>Mode</strong>:<br>
	Tapping here opens a Select MSC Mode pop-up:
	<figure class="caption"><img alt="" src="/Media/Image/popup_select-msc-in-mode_v3-3.png">
	<figcaption><em>Select MSC (In) Mode pop-up</em></figcaption>
	</figure>
	<br>
	There are three options here:
	<ul>
		<li><strong>Disabled</strong> - this is the same turning off the MSC input or output.</li>
		<li><strong>Ethernet</strong> - This will use MSC via Ethernet - Please read more about MSC via Ethernet <a href="#midi_ethernet">below</a>.</li>
		<li><strong>MIDI</strong> - This will use the MIDI ports on the station to transmit or receive MSC.</li>
	</ul>
	</li>
	<li><strong>Exec</strong>:<br>
	Tapping here opens the Select MSC Exec pop-up:
	<figure class="caption"><img alt="" src="/Media/Image/popup_select-msc-in-exec_v3-3.png">
	<figcaption><em>Select MSC (In) Exec pop-up</em></figcaption>
	</figure>
	<br>
	There are three options here:
	<ul>
		<li><strong>Default Only</strong> - This option will make the MSC commands go to and from the selected executors on the <strong>Master</strong> station only.</li>
		<li><strong>Exec.Page</strong> - This option can be used if the commands should be sent to a specific executor. The page and executor number must be separated by a "period" character (Hex = 2E).</li>
		<li><strong>Exec Page</strong> - This option can be used if the commands should be sent to a specific executor. The page and executor number must be separated by a "NULL" character (Hex = 00).</li>
	</ul>
	</li>
	<li><strong>Command</strong>:<br>
	Tapping here opens the Select MSC Command pop-up:
	<figure class="caption"><img alt="" src="/Media/Image/popup_select-msc-in-command_v3-3.png">
	<figcaption><em>Select MSC (In) Command pop-up</em></figcaption>
	</figure>
	<br>
	There are three options here:
	<ul>
		<li><strong>Moving Light</strong> - This option will select moving light command format (hex 02).</li>
		<li><strong>General Light</strong> - This option will select the general lights command format (hex 01).</li>
		<li><strong>All</strong> - This will use the all type format (hex 7F).</li>
	</ul>
	</li>
</ul>

<p>&nbsp;</p>

<p>The button in the fourth row is called <strong>Send to</strong>. Tapping it open a <strong>Select Send to pop-up</strong> like this:</p>

<figure class="caption"><img alt="" src="/Media/Image/popup_select-send-to_v3-3.png">
<figcaption><em>Select Send to pop-up</em></figcaption>
</figure>

<p>There are three options:</p>

<ul>
	<li><strong>Group</strong>:<br>
	Selecting this will make the station transmit MSC to the specified group number (1 to 15).</li>
	<li><strong>Device</strong>:<br>
	Selecting this will make the station transmit MSC to the specific device number (0 to 111).</li>
	<li><strong>All</strong>:<br>
	This option will transmit the the MSC to all connected devices.</li>
</ul>

<p>&nbsp;</p>

<a name="toc_header_anchor_2" id="toc_header_anchor_2" class="topic-toc-item"></a><h2><a id="msc_concept" name="msc_concept"></a>The MSC Concept</h2>

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

<a name="toc_header_anchor_3" id="toc_header_anchor_3" class="topic-toc-item"></a><h3>Device ID</h3>

<p>The device ID is an octet actually divided into three different sections:</p>

<ul>
	<li><strong>00 to 6F</strong>:<br>
	This is the 112 different specific devices that can be identified.</li>
	<li><strong>70 to 7E</strong>:<br>
	This is the 15 group numbers.</li>
	<li><strong>7F</strong>:<br>
	This is a broadcast ID that all devices listen to.</li>
</ul>

<p>In grandMA2 the device ID and group ID can be set for both incoming and outgoing messages.</p>

<p>For transmitting MSC it can only transmit one octet in the <strong>Device ID</strong> location. The <strong>Send to</strong> setting (described above) selects which one of the three different sections Id that should be transmitted.&nbsp;</p>

<p>&nbsp;</p>

<a name="toc_header_anchor_4" id="toc_header_anchor_4" class="topic-toc-item"></a><h3>Command Format</h3>

<p>The command format octet denotes the type of equipment that should receive the message (or at least respond). grandMA2 only transmit and respond to three different formats:</p>

<ul>
	<li><strong>01</strong>:<br>
	This is the <strong>General Lighting</strong> format</li>
	<li><strong>02</strong>:<br>
	This is <strong>Moving Lights</strong> format.</li>
	<li><strong>7F</strong>:<br>
	This is an <strong>All</strong> format that all equipment should respond to.</li>
</ul>

<p>&nbsp;</p>

<a name="toc_header_anchor_5" id="toc_header_anchor_5" class="topic-toc-item"></a><h3>Command</h3>

<p>The command octet denotes the type of command in the message. The command type will dictate the data information.</p>

<p>grandMA2 supports 7 different command types:</p>

<ul>
	<li><strong>01 (Go)</strong>:<br>
	This is the same as a Goto command in grandMA2. It needs to be followed by a cue number.</li>
	<li><strong>02 (Stop)</strong>:<br>
	This is the same as a Pause command in grandMA2. This can be followed by a cue number.</li>
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

<p>&nbsp;</p>

<a name="toc_header_anchor_6" id="toc_header_anchor_6" class="topic-toc-item"></a><h3>Data</h3>

<p><strong>01 (Go):</strong></p>

<p>As stated above: This is interpreted as a GOTO command. A cue number needs to be specified. The cue number also needs to be transmitted in hex octets and the complete cue number including the decimals needs to be transmitted. If cue number 4 is to be triggered then the complete number is <strong>4.000</strong> - the number with all decimal numbers separated by a dot (Hex value 2E). Decimal numbers in hex is some of the easiest to convert. It needs a "3" in front. This means that decimal <strong>4</strong> becomes <strong>34</strong> in hex. The complete cue number including the dot is then: <strong>34 2E 30 30 30</strong>.</p>

<p>See <a href="/Topic/ecf72bcf-b2c0-4840-90cd-7e16e0c2af85">this table</a> for a complete decimal to hex translation.</p>

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

<p>If the setting is not Default Only, then an executor and page needs to be specified. There are two options for separating the executor number and the page number. It can be separated by a "period" character (hex = 2E) or by a "NULL" character (hex = 00). The cue number and the executor/page data needs to be separated by a "NULL" character (hex = 00).</p>

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

<p>Same example but with a "Null" separated executor and page:</p>

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
			<td>33 37 2E 32 30 30 00 35 00 31</td>
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

<p><strong>Example</strong>: Triggering macro number 64 (<strong>All Devices</strong> and <strong>All Format</strong> setting):</p>

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
			<td>40</td>
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

<p>&nbsp;</p>

<a name="toc_header_anchor_7" id="toc_header_anchor_7" class="topic-toc-item"></a><h2><a id="midi_ethernet" name="midi_ethernet"></a>MIDI via Ethernet</h2>

<p>MSC can sent using Ethernet. It is transmitted as a UDP message.</p>

<p>The MSC message is the same as described above, but the MSC message needs a header for the date to be accepted by the grandMA2.</p>

<p>The header separated into two parts. The first is identifying the message as a grandMA2 MSC message: <strong>47 4D 41 00 4D 53 43 00 </strong>- it translates to GMA MSC.</p>

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
<option value="6">3.3</option>
<option value="14">3.4</option>
<option value="18">3.5</option>
<option value="21">3.6</option>
<option value="23">3.7</option>
<option value="27">3.8</option>
<option selected="selected" value="31">3.9</option>
</select></div>
		<input data-val="true" data-val-number="The field Int32 must be a number." data-val-required="The Int32 field is required." id="ProductId" name="ProductId" type="hidden" value="11">
		<input id="CurrentGuid" name="CurrentGuid" type="hidden" value="2d79b9d0-6847-4439-8613-3b7b27be78b3">
	</span>
</form></div>&nbsp;	</span>
	<span class="pull-right" style="white-space: nowrap;">
			<button class="btn btn-mini" onclick="location.href='/Page/grandMA2/remote_control_input/en/3.9'; " title="Go to previous page 'Remote input'">
				<i class="icon-arrow-left"></i> previous
			</button>

			<button class="btn btn-mini" onclick="location.href='/Page/grandMA2/remote_control_web_remote/en/3.9';" title="Go to next page 'Web remote'">
				next <i class="icon-arrow-right"></i> 
			</button>
	</span>
</div>
	<div class="clear-fix"></div>
	<div class="pull-right">
	
			<button class="btn btn-mini" onclick="location.href='/Media/TopicPdf/89015/31';" title="Open/Save this topic as PDF document for viewing or printing">
				<img src="/Content/images/icons/filetype_pdf.png"> Open topic as PDF
			</button>
	</div>
<div class="clear-fix" style="margin-bottom: 10px"></div>
</div>

	
