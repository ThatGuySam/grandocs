---
originalUrl: 'https://help2.malighting.com/Page/grandMA3/cue_mib/en/1.3'
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
<option selected="selected" value="36">1.3</option>
<option value="37">1.4</option>
<option value="38">1.5</option>
<option value="39">1.6</option>
<option value="40">1.7</option>
<option value="42">1.8</option>
<option value="43">1.9</option>
<option value="44">2.0</option>
</select></div>
		<input data-val="true" data-val-number="The field Int32 must be a number." data-val-required="The Int32 field is required." id="ProductId" name="ProductId" type="hidden" value="16">
		<input id="CurrentGuid" name="CurrentGuid" type="hidden" value="c00678da-dcac-49fe-b195-745f13857780">
	</span>
</form></div>&nbsp;	</span>
	<span class="pull-right" style="white-space: nowrap;">
			<button class="btn btn-mini" onclick="location.href='/Page/grandMA3/cue_playback/en/1.3'; " title="Go to previous page 'Play back cues'">
				<i class="icon-arrow-left"></i> previous
			</button>

			<button class="btn btn-mini" onclick="location.href='/Page/grandMA3/cue_timing/en/1.3';" title="Go to next page 'Cue timing'">
				next <i class="icon-arrow-right"></i> 
			</button>
	</span>
</div>
<div class="clear-fix" style="margin-bottom: 10px"></div>
</div>

					<div class="infobox"><b>Hint:</b><br><b>New help version</b><br>The help version you selected belongs to an older software version. <a href="/Topic/SetCurrentVersionNumber/44/c00678da-dcac-49fe-b195-745f13857780">You may want to view the latest help version.</a></div>

			<div class="pull-right">
					<button class="btn btn-mini" style="margin-right: 10px; height: 30px;" onclick="location.href = '/Media/TopicPdf/60566/36'; " title="Open/Save this topic as PDF document for viewing or printing">
						<img src="/Content/images/icons/filetype_pdf.png" style="height: 24px;"> Open topic as PDF
					</button>
				<span class="badge badge-info">Version 1.3</span>
			</div>
		<h1>Move In Black</h1>

			<div class="topic-table-of-contents">
				<h2>Table of contents of this topic</h2>
				<div class="topic-toc-toggler topic-toc-toggler-hide"><a href="#" onclick="$('.topic-toc-ul').toggle(); $('.topic-toc-toggler-hide').hide(); $('.topic-toc-toggler-show').show(); return false;">hide</a></div>
				<div class="topic-toc-toggler topic-toc-toggler-show" style="display: none;"><a href="#" onclick="$('.topic-toc-ul').toggle(); $('.topic-toc-toggler-hide').show(); $('.topic-toc-toggler-show').hide(); return false;">show</a></div>
				<ul class="topic-toc-ul">
						<li>
							<a href="#toc_header_anchor_1">Cue MIB Settings</a>
						</li>
						<li>
							<a href="#toc_header_anchor_2">Global MIB Settings</a>
						</li>
						<li>
							<a href="#toc_header_anchor_3">Sequence MIB Settings</a>
						</li>
						<li>
							<a href="#toc_header_anchor_4">MIB Color Indicators</a>
						</li>
				</ul>
			</div>

		<p>Move in black (MIB) is a function where tracking sequences look ahead and preposition attributes of fixtures that are fading the dimmer in from zero, to automatically prevent transitions where the fixture would move the attributes into position, while the fixture is fading in.</p>

<p>MIB is enabled on a cue part basis, by giving the MIB-property of the cue part a value which tells the console when and how it should do the prepositioning.</p>

<hr>
<p>There are several options and properties that modify MIB behavior. Two of them are <strong>MIB Fade</strong> and <strong>MIB Delay</strong> timing properties.</p>

<p><strong>MIB Fade</strong> is the fade time of attributes that will be positioned by MIB. It is available in different places. There is an order of importance which MIB fade time to apply:</p>

<ol>
	<li>Per cue part</li>
	<li>Per attribute in a fixture type</li>
	<li>Global in the show file</li>
</ol>

<p>When a MIB fade time is specified in the cue part, the individual attribute MIB fade time will be ignored. When the MIB fade time of the cue is set to default the global MIB fade time will be applied, unless an attribute has an individual MIB fade time set.</p>

<p><strong>MIB Delay</strong> is the delay time the attributes wait from having the dimmer closed until the MIB fade will be performed. The MIB delay time can be specified per cue part or global in the show file. The same ruleset as for MIB fade applies:&nbsp;&nbsp;When the MIB delay time of the cue is set to default the global MIB delay time will be applied.</p>

<p>When the MIB fade and/or MIB delay is performed between cues, the MIB times specified in the (future) cue part where the dimmer opens again will be applied. For example, a fixture is moving in cue 3 to be ready for cue 5. The MIB times specified in cue 5 is used for the MIB.</p>

<a name="toc_header_anchor_1" id="toc_header_anchor_1" class="topic-toc-item"></a><h2>Cue MIB Settings</h2>

<p>The sequence sheet can display several columns for the different MIB settings. All MIB related columns can be displayed or hidden by the <span class="softkey">MIB Settings</span> mask within the <strong>Sequence Sheet Settings</strong>. Read more about the sequence sheet in the <a href="/Topic/9162bb01-5f29-4ea3-a26d-ef742fbbe529">Look at Cues and Preferences</a>.</p>

<ul>
	<li><strong>MIB Preference</strong>:<br>
	This is a specification of the&nbsp;suitability of a cue for MIB. The MIB modes Early, UponGo, and Late will prioritize the cue which has the highest rated suitability and will choose this cue for executing the MIB. MIB mode Defined does not respect the MIB preference.<br>
	Edit the cell to get the following preference options:
	<ul>
		<li><strong>Never</strong>:<br>
		An MIB will never be performed.</li>
		<li><strong>Worst</strong>:<br>
		If no other options, then this cue will be used.</li>
		<li><strong>Bad</strong>:<br>
		It is not optimal but better than the two others.</li>
		<li><strong>Normal</strong>:<br>
		This is the default value.</li>
		<li><strong>Good</strong>:<br>
		This is a better cue than normal.</li>
		<li><strong>Best</strong>:<br>
		This is the optimal cue to perform the MIB.</li>
	</ul>
	</li>
	<li><strong>MIB Mode</strong>:<br>
	Defines how early or late the MIB shall be performed per cue part.
	<ul>
		<li><strong>Default</strong>:<br>
		Performs MIB corresponding to the MIB mode setting of the sequence setting <strong>MIB Mode</strong>.</li>
		<li><strong>None</strong>:<br>
		MIB will not be performed for this cue.</li>
		<li><strong>Defined</strong>:<br>
		A specific cue can be defined in the <strong>MIB Target</strong> column where the MIB is to be performed. The MIB is performed when the specified cue is active.</li>
		<li><strong>Early</strong>:<br>
		Performs the MIB as soon as the dimmer is closed. Typically after the cue transition has finished.</li>
		<li><strong>UponGo</strong>:<br>
		Performs the MIB with the next cue transition after the dimmer has closed. The MIB executes with the cue after <strong>Early</strong> would have triggered the MIB.</li>
		<li><strong>Late</strong>:<br>
		Performs the MIB latest in the cue before the dimmer opens again.</li>
	</ul>
	</li>
	<li><strong>MIB Target</strong>:<br>
	A specific cue where MIB is performed for this cue part, see MIB Mode above. When setting an MIB target the <strong>MIB Mode</strong> will be changed to <strong>Defined</strong>, and vice versa when changing an MIB Mode that is not <strong>Defined</strong> will remove the <strong>MIB Target</strong>.</li>
	<li><strong>MIB Fade</strong>:<br>
	The MIB fade time per cue part. It can be a set time or default. Default takes the global show file MIB fade time or the attribute MIB fade time.</li>
	<li><strong>MIB Delay</strong>:<br>
	The MIB delay time per cue part. It can be a set time or default. Default takes the global show file MIB delay time or the attribute MIB delay time.</li>
	<li><strong>MIB Dynamic</strong>:<br>
	It is possible to decide whether a phaser where the fixtures are already prepositioned, shall keep running with the closed dimmer, or if they shall be paused. This can prevent unwanted noise and movement of stepper motors for prepositioned fixtures that are running a phaser, especially when it would be disturbing for the audience. The two options are:
	<ul>
		<li><strong>Running</strong>:<br>
		A phaser is running with a closed dimmer.</li>
		<li><strong>Paused</strong>:<br>
		A phaser will be prepositioned but does not start running until opening the dimmer.</li>
	</ul>
	</li>
</ul>

<p>The sequence sheet hides those MIB cells, that are not considered for the different combinations of MIB settings or if a cue or cue part is not suitable for MIB.</p>

<a name="toc_header_anchor_2" id="toc_header_anchor_2" class="topic-toc-item"></a><h2>Global MIB Settings</h2>

<p>To change the global MIB Preferences go to&nbsp;<span class="hardkey">Menu</span>&nbsp;-&nbsp;<span class="softkey">Preferences and Timing</span>.</p>

<p>In the <span class="softkey">Timing</span> tab, there is a section called MIB Timing.</p>

<p>This defines the default <strong>MIB Fade</strong> and <strong>MIB Delay</strong> times. This value is input as time. For more information about MIB fade and MIB delay, please read above.</p>

<p>The property <strong>MIB Transition</strong> defines which transition type will be applied to the fade of MIB. Read more about the different types of transitions in the <a href="/Topic/9523e90b-61aa-4e54-8e2c-e3de65aaa151">Cue Timing topic</a>.</p>

<p>The MIB Transition can only be defined for all MIB fades globally in the show file. It is not possible to define a different transition type for a single MIB fade per cue or cue part.</p>

<p>In the <span class="softkey">Cue</span> tab, there is a section called <strong>MIB Preferences</strong>.</p>

<p>Here it is possible to change the defaults that will be set to a new cue when it is stored.</p>

<ul>
	<li><strong>MIB Mode</strong>:<br>
	The MIB Mode used when storing a new cue that is able to execute MIB.</li>
	<li><strong>MIB Fade</strong>:<br>
	The MIB fade time used when storing a new cue that is able to execute MIB. Default uses the time set in the timing tab.</li>
	<li><strong>MIB Delay</strong>:&nbsp;<br>
	The MIB delay time used when storing a new cue that is able to execute MIB. Default uses the time set in the timing tab.</li>
	<li><strong>MIB Dynamic</strong>:&nbsp;<br>
	The MIB dynamic mode used when storing a new cue that is able to execute MIB.</li>
</ul>

<p>For more information about these settings, read above.</p>

<a name="toc_header_anchor_3" id="toc_header_anchor_3" class="topic-toc-item"></a><h2>Sequence MIB Settings</h2>

<p>There are sequence-wide MIB settings within the sequence settings. Read more about the settings in the <a href="/Topic/072545a2-0965-4ff4-ac47-7ee0938d79af">Sequence Settings topic</a>.</p>

<p>The purpose of the sequence MIB settings is to have the option to overwrite the cue-based MIB settings with the MIB Force settings.</p>

<p>When setting the MIB Force to any option except Enabled, the sequence sheet displays the corresponding setting in the MIB Mode column extended by an exclamation mark, for instance, Never!</p>

<p>The MIB Mode setting is used to select the default MIB mode used&nbsp;when doing an MIB. The MIB Mode per cue or cue part needs to be set to Default.</p>

<p>For more information about the different MIB Mode types per sequence, please read above.</p>

<a name="toc_header_anchor_4" id="toc_header_anchor_4" class="topic-toc-item"></a><h2>MIB Color Indicators</h2>

<p>Attribute values will be displayed with special colors within the sequence sheet in track mode to show when the MIB is performed.</p>

<p>In this example, the tracking sheet view shows when the MIB is performed.</p>

<figure class="caption"><img alt="" src="/Media/Image/img_mib-tracksheet_v1-2.png">
<figcaption>Caption</figcaption>
</figure>

<p>The fixtures need to be ready for cue 5. In cue 5 the MIB Mode is set to "UponGo". This means that when the fixtures fade to 0% in cue 2, they are ready to MIB with the next cue trigger. When cue 3 is activated they will perform the MIB for cue 5.</p>

<p>The default color indicators are a deep sea green background and black text color. Read more about the MIB colors in the fixture sheet and other different grandMA3 colors in the <a href="/Topic/6a1f04c9-6ed1-43af-b876-3e05f46c57a6">Colors topics</a>.</p>


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
<option selected="selected" value="36">1.3</option>
<option value="37">1.4</option>
<option value="38">1.5</option>
<option value="39">1.6</option>
<option value="40">1.7</option>
<option value="42">1.8</option>
<option value="43">1.9</option>
<option value="44">2.0</option>
</select></div>
		<input data-val="true" data-val-number="The field Int32 must be a number." data-val-required="The Int32 field is required." id="ProductId" name="ProductId" type="hidden" value="16">
		<input id="CurrentGuid" name="CurrentGuid" type="hidden" value="c00678da-dcac-49fe-b195-745f13857780">
	</span>
</form></div>&nbsp;	</span>
	<span class="pull-right" style="white-space: nowrap;">
			<button class="btn btn-mini" onclick="location.href='/Page/grandMA3/cue_playback/en/1.3'; " title="Go to previous page 'Play back cues'">
				<i class="icon-arrow-left"></i> previous
			</button>

			<button class="btn btn-mini" onclick="location.href='/Page/grandMA3/cue_timing/en/1.3';" title="Go to next page 'Cue timing'">
				next <i class="icon-arrow-right"></i> 
			</button>
	</span>
</div>
	<div class="clear-fix"></div>
	<div class="pull-right">
	
			<button class="btn btn-mini" onclick="location.href='/Media/TopicPdf/60566/36';" title="Open/Save this topic as PDF document for viewing or printing">
				<img src="/Content/images/icons/filetype_pdf.png"> Open topic as PDF
			</button>
	</div>
<div class="clear-fix" style="margin-bottom: 10px"></div>
</div>

	
