
<div class="topic-navigation">

<div class="pull-right">
	<span class="pull-left">


<div class="pull-left">
<form action="/Topic/SetCurrentVersionNumber" class="form-inline" id="frmTagSelector" method="post">	<span class="form-mini">
		<div class="input-prepend"><span class="add-on">Select different version</span><select autocomplete="off" id="versionNumberId" name="versionNumberId" onchange="$(this).closest('#frmTagSelector').submit();" style="width: 120px;"><option value="">- latest -</option>
<option selected="selected" value="3">1.1</option>
<option value="7">1.2</option>
<option value="12">1.3</option>
<option value="16">1.5</option>
<option value="29">1.9</option>
</select></div>
		<input data-val="true" data-val-number="The field Int32 must be a number." data-val-required="The Int32 field is required." id="ProductId" name="ProductId" type="hidden" value="7">
		<input id="CurrentGuid" name="CurrentGuid" type="hidden" value="092db22a-d2f1-46ca-9a6e-a7c12c92f284">
	</span>
</form></div>&nbsp;	</span>
	<span class="pull-right" style="white-space: nowrap;">
			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/HT_UseExternalInput/en/1.1'; " title="Go to previous page 'Use external input triggers'">
				<i class="icon-arrow-left"></i> previous
			</button>

			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/HT_UseExternalScreen/en/1.1';" title="Go to next page 'Use the external screen'">
				next <i class="icon-arrow-right"></i> 
			</button>
	</span>
</div>
<div class="clear-fix" style="margin-bottom: 10px"></div>
</div>

					<div class="infobox"><b>Hint:</b><br><b>New help version</b><br>The help version you selected belongs to an older software version. <a href="/Topic/SetCurrentVersionNumber/29/092db22a-d2f1-46ca-9a6e-a7c12c92f284">You may want to view the latest help version.</a></div>

			<div class="pull-right">
					<button class="btn btn-mini" style="margin-right: 10px; height: 30px;" onclick="location.href = '/Media/TopicPdf/12840/3'; " title="Open/Save this topic as PDF document for viewing or printing">
						<img src="/Content/images/icons/filetype_pdf.png" style="height: 24px;"> Open topic as PDF
					</button>
				<span class="badge badge-info">Version 1.1</span>
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
				</ul>
			</div>

		<p>The dot2 can handle different types of MIDI and it can both transmit and receive MIDI.</p>

<p>You can see the incoming and outgoing MIDI data on a console by pressing <span class="hardkey">Tools</span> and then <span class="softkey"><a href="/Topic/ae643503-568f-4073-b26f-223f4f1ae82a">MIDI Monitor</a></span>.</p>

<p>If you are using a dot2 onPC, then you need to setup your MIDI in and outputs. This is also done in Tools menu. Here you can tap <a href="/Topic/6e181799-633c-4b7d-a700-2fb8f6a07d74">MIDI Configuration</a> and select what MIDI devices you use to receive and transmit MIDI.</p>

<a name="toc_header_anchor_1" id="toc_header_anchor_1" class="topic-toc-item"></a><h2>MIDI note remote input</h2>

<p>This is a system to use received MIDI notes to trigger different things in the console. It's all set up in the <a href="/Topic/abf8c6b2-dcd4-4f27-8381-8defa74eec66">Remote Inputs Configuration view</a>.</p>

<p>Her you have the option to map incoming MIDI Note signals to executors or to trigger a command that you write in the configuration.</p>

<p>You can use the MIDI Velocity to set the position of a fader.&nbsp;</p>

<p>MIDI Remote Input only triggers the executors that are currently visible on the console that receives the MIDI signal.</p>

<a name="toc_header_anchor_2" id="toc_header_anchor_2" class="topic-toc-item"></a><h2>MIDI note output</h2>

<p>You can send MIDI notes from cues or directly from the command line.</p>

<p>You can use the <a href="/Topic/bb896543-7a8d-488f-9d67-40c4b3802f4f">MIDI Note command</a> to transmit MIDI Note data. Please read more details about the command in the command description.</p>

<p>The MIDI Note command is transmitted from a standalone console or if you have a session, then it's the session master (the console with the Blue Heart icon&nbsp;<img alt="" src="/Media/Image/Dot2_ViewsandWindows_StatusMessages03_1-0.png"> next to the command line input) that transmit the MIDI.</p>

<a name="toc_header_anchor_3" id="toc_header_anchor_3" class="topic-toc-item"></a><h2>MIDI Show Control (MSC) input</h2>

<p>The console can be controlled by any device that can send MIDI Show Control. There's a lot of settings regarding MSC. You can find them in <span class="hardkey">Setup</span> and then <span class="softkey"><a href="/Topic/9f4a7699-e22f-4316-9316-6b31746634da">MIDI Show Control</a></span>. Her you can change the settings to match the settings in the transmitter (often a Show Control software or some Sound software).</p>

<p>When you use MSC you can only control executors on the first page or the Main Executor.</p>

<p>The MSC data needs to be transmitted to a standalone console or if you have a session, then it's the session master (the console with the Blue Heart icon&nbsp;<img alt="" src="/Media/Image/Dot2_ViewsandWindows_StatusMessages03_1-0.png"> next to the command line input) that&nbsp; reacts to the MIDI.</p>

<a name="toc_header_anchor_4" id="toc_header_anchor_4" class="topic-toc-item"></a><h2>MIDI Show Control (MSC) output</h2>

<p>The dot2 can transmit MSC commands to a device. This can be used to control other devices (like sound samplers). All the settings for this is found in <span class="hardkey">Setup</span> and then <span class="softkey"><a href="/Topic/9f4a7699-e22f-4316-9316-6b31746634da">MIDI Show Control</a></span>. Here you need to set your settings to match the MSC receiver.</p>

<p>The MSC data is transmitted from a standalone console or if you have a session, then it's the session master (the console with the Blue Heart icon&nbsp;<img alt="" src="/Media/Image/Dot2_ViewsandWindows_StatusMessages03_1-0.png"> next to the command line input) that transmit the MIDI.</p>

<a name="toc_header_anchor_5" id="toc_header_anchor_5" class="topic-toc-item"></a><h2>MIDI Time Code (MTC)</h2>

<p>The console can receive MTC and use that to automatically run cues on executors.</p>

<p>The executor you want to be controlled by MTC needs to have "MIDI" selected in the <a href="/Topic/eea17a4c-1b42-406e-86d9-7e61b3a0bfdd">Settings of Executor window</a>. Then you need to have some cues in that executor that uses Timecode as the trigger. When Timecode is the trigger, then you can set a time in the "Trig Time" column. When your incoming MTC reaches the time you have set in the Trig Time column, then the cue is triggered. You don't need to have the cue as the next cue, it'll jump to the cue that have the time that matches the incoming MTC. Just remember to have the fader up.</p>

<p>You can type the times manually or you can tap <span class="softkey">TC Record</span> in the Cues view title bar. This will start a recording function. Then you can do a normal Go to the Timecode cues and it will record the time into the Trig Time column. You can also use the <a href="/Topic/1e90ffd8-ce1f-42a9-bda9-92c8e7bf83a0">Record command</a> to activate this timecode record function. When you have an active recording going on then you'll have a flashing red circle with a white "T" icon&nbsp; next to the Command line input. There'll also be a flashing red circle in the Cues view and in the Executor Bar. You turn off the Record function by tapping the <span class="softkey">TC Record</span> again.</p>

<p>&nbsp;</p>

<p>MTC can be enabled and disabled in the <a href="/Topic/c22188fd-6831-4847-a24a-f9174ed48191">Timecode Configuration window</a> in Setup. If you have turned off all the incoming timecodes then you can't tap the <span class="softkey">TC Record</span> button.</p>

<p>The incoming MTC can come from any console/onPC in the session - not just the master.</p>

<p>&nbsp;</p>


				<br>
<div class="topic-navigation">

<div class="pull-right">
	<span class="pull-left">


<div class="pull-left">
<form action="/Topic/SetCurrentVersionNumber" class="form-inline" id="frmTagSelector" method="post">	<span class="form-mini">
		<div class="input-prepend"><span class="add-on">Select different version</span><select autocomplete="off" id="versionNumberId" name="versionNumberId" onchange="$(this).closest('#frmTagSelector').submit();" style="width: 120px;"><option value="">- latest -</option>
<option selected="selected" value="3">1.1</option>
<option value="7">1.2</option>
<option value="12">1.3</option>
<option value="16">1.5</option>
<option value="29">1.9</option>
</select></div>
		<input data-val="true" data-val-number="The field Int32 must be a number." data-val-required="The Int32 field is required." id="ProductId" name="ProductId" type="hidden" value="7">
		<input id="CurrentGuid" name="CurrentGuid" type="hidden" value="092db22a-d2f1-46ca-9a6e-a7c12c92f284">
	</span>
</form></div>&nbsp;	</span>
	<span class="pull-right" style="white-space: nowrap;">
			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/HT_UseExternalInput/en/1.1'; " title="Go to previous page 'Use external input triggers'">
				<i class="icon-arrow-left"></i> previous
			</button>

			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/HT_UseExternalScreen/en/1.1';" title="Go to next page 'Use the external screen'">
				next <i class="icon-arrow-right"></i> 
			</button>
	</span>
</div>
	<div class="clear-fix"></div>
	<div class="pull-right">
	
			<button class="btn btn-mini" onclick="location.href='/Media/TopicPdf/12840/3';" title="Open/Save this topic as PDF document for viewing or printing">
				<img src="/Content/images/icons/filetype_pdf.png"> Open topic as PDF
			</button>
	</div>
<div class="clear-fix" style="margin-bottom: 10px"></div>
</div>

	