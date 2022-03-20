---
originalUrl: 'https://help2.malighting.com/Page/grandMA2/timecode_record/en/3.9'
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
		<input id="CurrentGuid" name="CurrentGuid" type="hidden" value="f6c56d6f-09a3-4ddb-a2c6-66138a5cb801">
	</span>
</form></div>&nbsp;	</span>
	<span class="pull-right" style="white-space: nowrap;">
			<button class="btn btn-mini" onclick="location.href='/Page/grandMA2/timecode_what_is/en/3.9'; " title="Go to previous page 'What is timecode and timecode shows'">
				<i class="icon-arrow-left"></i> previous
			</button>

			<button class="btn btn-mini" onclick="location.href='/Page/grandMA2/timecode_editor/en/3.9';" title="Go to next page 'Edit a timecode show'">
				next <i class="icon-arrow-right"></i> 
			</button>
	</span>
</div>
<div class="clear-fix" style="margin-bottom: 10px"></div>
</div>

		
			<div class="pull-right">
					<button class="btn btn-mini" style="margin-right: 10px; height: 30px;" onclick="location.href = '/Media/TopicPdf/55024/31'; " title="Open/Save this topic as PDF document for viewing or printing">
						<img src="/Content/images/icons/filetype_pdf.png" style="height: 24px;"> Open topic as PDF
					</button>
				<span class="badge badge-info">Version 3.9</span>
			</div>
		<h1>Record a Timecode Show</h1>

			<div class="topic-table-of-contents">
				<h2>Table of contents of this topic</h2>
				<div class="topic-toc-toggler topic-toc-toggler-hide"><a href="#" onclick="$('.topic-toc-ul').toggle(); $('.topic-toc-toggler-hide').hide(); $('.topic-toc-toggler-show').show(); return false;">hide</a></div>
				<div class="topic-toc-toggler topic-toc-toggler-show" style="display: none;"><a href="#" onclick="$('.topic-toc-ul').toggle(); $('.topic-toc-toggler-hide').show(); $('.topic-toc-toggler-show').hide(); return false;">show</a></div>
				<ul class="topic-toc-ul">
						<li>
							<a href="#toc_header_anchor_1">Use timecode as cue trigger</a>
						</li>
						<li>
							<a href="#toc_header_anchor_2">Record a Timecode Show</a>
						</li>
				</ul>
			</div>

		<p>There are two ways a timecode signal can trigger cues. One is to set "Timecode" as the trigger for the cues and then add a time in the "Trig Time column". The other is to record a timecode show.</p>

<p>&nbsp;</p>

<a name="toc_header_anchor_1" id="toc_header_anchor_1" class="topic-toc-item"></a><h2>Use timecode as cue trigger</h2>

<p>A simple way to trigger cues using a&nbsp; timecode signal is the <strong>Timecode</strong> trigger in the <a href="/Topic/4b30f6a3-1cea-433f-9a8d-272ead4150c6">Sequence Executor Sheet</a>. Read about the triggers in the <a href="/Topic/f07df390-5a1c-4f69-b608-49cb054133ba">Playing Back Cues topic</a>.</p>

<p>Each sequence can be assigned a timecode slot - see how in the <a href="/Topic/76c36951-983b-4ce4-a79b-046770e1ab84">What are Cues and Sequences topic</a>.</p>

<p>The time is then set in the "Trig Time" column in the <strong>Sequence Executor Sheet</strong>. When the assigned timecode slot reaches the time then the cue is triggered - it does not matter if the executor is active or not.</p>

<p>&nbsp;</p>

<p>The time can be typed manually or it can be recorded.</p>

<p>To do a recording the trigger needs to be set to <strong>Timecode</strong> and the executor needs to set in record mode. Even though the time is recorded into the sequence, it is still the executor that needs to be set into record mode:</p>

<p>Press <span class="hardkey"><img alt="ma" src="/Media/Mlg/ma_1.png"></span>+<span class="hardkey">Store</span> to get the <a href="/Topic/ac5efd08-b755-4171-aec9-7ed6e0079192">Record keyword</a>, then press any of the keys associated with the executor where the sequence is assigned. It can also be typed as a command: <span class="syntax">Record Executor [number]</span></p>

<div class="tip"><strong>Hint:</strong><br>
Executing the Record command without a reference to a specific executor will toggle the record mode of the selected executor.</div>

<p>Now trigger the cues using a normal <strong>GO</strong> command and then the current received time is stored in the Trig Time column.</p>

<p>The recording mode is turned off by another <strong>Record</strong> command to the executor.</p>

<p>&nbsp;</p>

<hr>
<a name="toc_header_anchor_2" id="toc_header_anchor_2" class="topic-toc-item"></a><h2>Record a Timecode Show</h2>

<p>This can do a lot more than just trigger cues.</p>

<p>A timecode show will store information as when different actions was performed on executors, this includes fader movement and position. A timecode show can run with an external time source or using "internal" time. This means that each timecode show can run on its own or follow an external synced source. See more about running the timecode show in the <a href="/Topic/16c419d7-1c80-4931-9e10-b0217dee1641">Playing Back a Timecode Show topic</a>.</p>

<p>The best way to record a new timecode show is to open the timecode pool on one of the screens and press the <span class="hardkey">Store</span> key then tap one of the empty pool objects. This creates the new show. Now tap it again so it gets a green background. Now it is the selected timecode show. The <strong>Encoder Toolbar</strong> changes to the timecode version. It could look like this:</p>

<figure class="caption"><img alt="" src="/Media/Image/img_encoder-toolbar_timecode-show_v3-3.png">
<figcaption><em>Timecode Encoder Toolbar</em></figcaption>
</figure>

<p>Now it is possible to control the playback of the timecode show. To start the recording tap the <strong>Record</strong> (Red circle) button on the right side.</p>

<p>If the timecode show uses an internal time source, the the time will start running. Internal time source is the default. If the time source is external, then the time is only running if the assigned timecode slot has a running time.</p>

<p>The source can be changed in the options for the timecode show or if the timecode show pool is in "Sheet Style". The options are explained in the <a href="/Topic/4c964c89-4cab-4fc1-a1fb-35e7ae93c36a">Edit a Timecode Show topic</a>.</p>

<p>&nbsp;</p>

<p>When the recording is running then all executor actions are recorded.</p>

<div class="important"><strong>Important:</strong><br>
The timecode show is recording a <strong>Goto</strong> command and the cue number when running a <strong>Go</strong> command to the executor. This is to make sure the actual cue is triggered when the show is played back. The difference between a Go and the Goto is that a Goto is actually a jump in the cue list (even though it might be the next cue), which might look different then a Go. Please read about the difference in the description of the <a href="/Topic/b5b3a231-6fb8-427c-9d49-ae49db472354">Go command</a> and the <a href="/Topic/0fc48789-611e-4f8a-9997-8fbd14188b9f">Goto command</a>.</div>

<p>When the recording is done then tap the <strong>Stop</strong> (yellow square) button in the timecode encoder bar.</p>

<p>&nbsp;</p>

<p>All these action can of cause also be done from the command line. Please see the <a href="/Topic/8adcbfce-84c6-49f7-ae62-dc4907184f4f">Timecode Keyword</a> description for examples of all of the actions mentioned regarding the timecode show.</p>


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
		<input id="CurrentGuid" name="CurrentGuid" type="hidden" value="f6c56d6f-09a3-4ddb-a2c6-66138a5cb801">
	</span>
</form></div>&nbsp;	</span>
	<span class="pull-right" style="white-space: nowrap;">
			<button class="btn btn-mini" onclick="location.href='/Page/grandMA2/timecode_what_is/en/3.9'; " title="Go to previous page 'What is timecode and timecode shows'">
				<i class="icon-arrow-left"></i> previous
			</button>

			<button class="btn btn-mini" onclick="location.href='/Page/grandMA2/timecode_editor/en/3.9';" title="Go to next page 'Edit a timecode show'">
				next <i class="icon-arrow-right"></i> 
			</button>
	</span>
</div>
	<div class="clear-fix"></div>
	<div class="pull-right">
	
			<button class="btn btn-mini" onclick="location.href='/Media/TopicPdf/55024/31';" title="Open/Save this topic as PDF document for viewing or printing">
				<img src="/Content/images/icons/filetype_pdf.png"> Open topic as PDF
			</button>
	</div>
<div class="clear-fix" style="margin-bottom: 10px"></div>
</div>

	
