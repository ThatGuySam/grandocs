---
originalUrl: 'https://help2.malighting.com/Page/grandMA3/remote_inputs/en/1.8'
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
<option value="39">1.6</option>
<option value="40">1.7</option>
<option selected="selected" value="42">1.8</option>
</select></div>
		<input data-val="true" data-val-number="The field Int32 must be a number." data-val-required="The Int32 field is required." id="ProductId" name="ProductId" type="hidden" value="16">
		<input id="CurrentGuid" name="CurrentGuid" type="hidden" value="a3ad6ec6-c7dc-4261-95dc-09f96f58639a">
	</span>
</form></div>&nbsp;	</span>
	<span class="pull-right" style="white-space: nowrap;">
			<button class="btn btn-mini" onclick="location.href='/Page/grandMA3/sound_window/en/1.8'; " title="Go to previous page 'Sound Window'">
				<i class="icon-arrow-left"></i> previous
			</button>

			<button class="btn btn-mini" onclick="location.href='/Page/grandMA3/remote_inputs_dc/en/1.8';" title="Go to next page 'DC remotes'">
				next <i class="icon-arrow-right"></i> 
			</button>
	</span>
</div>
<div class="clear-fix" style="margin-bottom: 10px"></div>
</div>

		
			<div class="pull-right">
					<button class="btn btn-mini" style="margin-right: 10px; height: 30px;" onclick="location.href = '/Media/TopicPdf/79938/42'; " title="Open/Save this topic as PDF document for viewing or printing">
						<img src="/Content/images/icons/filetype_pdf.png" style="height: 24px;"> Open topic as PDF
					</button>
				<span class="badge badge-info">Version 1.8</span>
			</div>
		<h1>Remote In and Out</h1>


		<p>Remote Inputs are handled through the In &amp; Out menu: DC Remotes, MIDI Remotes, DMX Remotes, OSC, and PSN.</p>

<ul>
	<li>To open the&nbsp;<strong>In &amp; Out</strong> window, press <span class="hardkey">Menu</span> and then tap <span class="softkey">In &amp; Out</span>.</li>
</ul>

<figure class="caption" style="display:block">
<figure class="caption"><img alt="" src="/Media/Image/window_remote_input_setup_v1-5.png">
<figcaption>In &amp; Out<em> window</em></figcaption>
</figure>

<p>There are five tabs: <a href="/Topic/d5f319bb-e057-4047-8f5b-d400236481d7">DC Remotes</a>,&nbsp;<a href="/Topic/86d4e424-75f2-4a31-be71-d30ab6122ea8">MIDI Remotes</a>, <a href="/Topic/21582494-a7cc-47db-af62-1f05382afb9b">DMX Remotes</a>, <a href="/Topic/f954833d-9213-4031-81e2-5db0dbb4944c">OSC</a>, and <a href="/Topic/6e1a18c6-90e2-4d8d-83e4-1ec48138e2fb">PSN</a>.</p>
</figure>

<figure class="caption" style="display:block">
<div class="tip"><strong>Hint:</strong><br>
The different readout options take effect on the Trigger On/Off,&nbsp; In From/To, Out From/To values.</div>

<p>The common procedure and pop-ups throughout the three tabs DC Remotes, MIDI Remotes, and DMX Remotes are described as follows:</p>

<p>&nbsp;</p>

<ul>
	<li>To add a new element, for example DC Remote, tap <span class="softkey">Insert new DCRemote</span>.</li>
</ul>

<figure class="caption"><img alt="" src="/Media/Image/window_DC_remote_1_v1-5.png">
<figcaption><em>New DC Remote</em></figcaption>
</figure>
</figure>

<ul>
	<li>To enable or disable the Remote Input, right-click or tap and hold <span class="softkey">Enabled</span> to toggle between Yes and No.</li>
</ul>

<p>&nbsp;</p>

<figure class="caption" style="display:block">
<ul>
	<li>To assign the target, right-click or tap and hold <span class="softkey">Target</span>.</li>
</ul>
</figure>

<p>The Assignment Editor window opens:</p>

<figure class="caption"><img alt="" src="/Media/Image/window_analog_remote_2_v1-5.png">
<figcaption><em>Assignment Editor</em></figcaption>
</figure>

<p>&nbsp;</p>

<p>&nbsp;</p>

<ul>
	<li>Select the target, for example a sequence.<br>
	<img alt="" src="/Media/Image/window_analog_remote_3_v1-5.png"></li>
</ul>

<ul>
	<li>To select a fader function, right-click or tap and hold <span class="softkey">Fader</span>.<br>
	The Select Fader pop-up opens.
	<figure class="caption"><img alt="" src="/Media/Image/window_analog_remote_4_v1-5.png">
	<figcaption><em>Select Fader pop-up</em></figcaption>
	</figure>
	</li>
</ul>

<p>&nbsp;</p>

<ul>
	<li>To select a key function, right-click or tap and hold <span class="softkey">Key</span>.<br>
	The Select Key pop-up opens.<br>
	<img alt="" src="/Media/Image/window_analog_remote_10_v1-5.png"></li>
</ul>

<p>&nbsp;</p>

<p>The Trigger On and Trigger Off values define the range of the key reaction.</p>

<p>If the Trigger On, for example, is set to 75 %, the Remote reacts as soon as the incoming signal exceeds this value.</p>

<p>If the Trigger Off, for example, is set to 25 %, the Remote stops reacting as soon as the incoming signal has fallen below this value.</p>

<p><img alt="" src="/Media/Image/window_DC_remote_1_v1-5.png"></p>

<p>&nbsp;</p>

<p>The In From and In To values define the range of the input signal reaction for the defined fader.</p>

<p>DC Remotes and DMX Remotes thresholds are defined in percent, while MIDI Remotes thresholds are defined between 1 and 127 MIDI velocity.</p>

<ul>
	<li>To set the In From value to a new value, tap <span class="softkey">In From</span>.<br>
	The In From pop-up opens.
	<figure class="caption"><img alt="" src="/Media/Image/window_analog_remote_5_v1-5.png">
	<figcaption><em>In From pop-up</em></figcaption>
	</figure>
	</li>
</ul>

<ul>
	<li>To set the In To value to a new value, tap <span class="softkey">In To</span>.<br>
	The In To pop-up opens.
	<figure class="caption"><img alt="" src="/Media/Image/window_analog_remote_6_v1-5.png">
	<figcaption><em>In To pop-up</em></figcaption>
	</figure>
	</li>
</ul>

<p>The Out From and Out To values recalculate the input signal range to match up the output signal range. The output singal range defines the range to use of a fader.</p>

<p>If a fader, for example, should not be moved to 100 %, restrict the Out To value to for example 90 %.</p>

<ul>
	<li>Example 1
	<ul>
		<li>In From/To: 20-80%</li>
		<li>Out From/To: 0-100%
		<ul>
			<li>When the incoming signal is 10%, the fader is at 0 %.</li>
			<li>When the incoming signal is 20%, the fader is at 0 %.</li>
			<li>When the incoming signal is 30%, the fader is at 17 %.</li>
			<li>When the incoming signal is 50%, the fader is at 50 %.</li>
			<li>When the incoming signal is 80%, the fader is at 100 %.</li>
			<li>When the incoming signal is 90%, the fader is at 100 %.</li>
		</ul>
		</li>
	</ul>
	</li>
	<li>Example 2
	<ul>
		<li>In From/To: 20-80 %.</li>
		<li>Out From/To: 10-90 %.
		<ul>
			<li>When the incoming signal is 0%, the fader is at 10 %.</li>
			<li>When the incoming signal is 20%, the fader is at 10 %.</li>
			<li>When the incoming signal is 30%, the fader is at 23 %.</li>
			<li>When the incoming signal is 50%, the fader is at 50 %.</li>
			<li>When the incoming signal is 80%, the fader is at 90 %.</li>
			<li>When the incoming signal is 100%, the fader is at 90 %.</li>
		</ul>
		</li>
	</ul>
	</li>
</ul>

<p>&nbsp;</p>

<p>The In and Out columns at the end of the sheet display the signal value of the incoming signal (In) and the resulting value for the selected fader function (Out).</p>

<p>For detailed information about the values, read the <a href="/Topic/73b99ae7-b314-4817-bcaf-d40ff2a53111">Remote keyword</a> topic.</p>


				<br>
<div class="topic-navigation">
	<br>
	<hr>
	<h4>Sub topics</h4>
	<ul>
				<li><a href="/Page/grandMA3/remote_inputs_dc/en/1.8">DC remotes</a></li>
				<li><a href="/Page/grandMA3/remote_inputs_midi/en/1.8">MIDI remotes</a></li>
				<li><a href="/Page/grandMA3/remote_inputs_dmx/en/1.8">DMX remotes</a></li>
				<li><a href="/Page/grandMA3/remote_inputs_osc/en/1.8">OSC</a></li>
				<li><a href="/Page/grandMA3/remote_inputs_psn/en/1.8">PSN</a></li>
				<li><a href="/Page/grandMA3/remote_inputs_mid/en/1.8">MIDI</a></li>
	</ul>

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
<option value="39">1.6</option>
<option value="40">1.7</option>
<option selected="selected" value="42">1.8</option>
</select></div>
		<input data-val="true" data-val-number="The field Int32 must be a number." data-val-required="The Int32 field is required." id="ProductId" name="ProductId" type="hidden" value="16">
		<input id="CurrentGuid" name="CurrentGuid" type="hidden" value="a3ad6ec6-c7dc-4261-95dc-09f96f58639a">
	</span>
</form></div>&nbsp;	</span>
	<span class="pull-right" style="white-space: nowrap;">
			<button class="btn btn-mini" onclick="location.href='/Page/grandMA3/sound_window/en/1.8'; " title="Go to previous page 'Sound Window'">
				<i class="icon-arrow-left"></i> previous
			</button>

			<button class="btn btn-mini" onclick="location.href='/Page/grandMA3/remote_inputs_dc/en/1.8';" title="Go to next page 'DC remotes'">
				next <i class="icon-arrow-right"></i> 
			</button>
	</span>
</div>
	<div class="clear-fix"></div>
	<div class="pull-right">
	
			<button class="btn btn-mini" onclick="location.href='/Media/TopicPdf/79938/42';" title="Open/Save this topic as PDF document for viewing or printing">
				<img src="/Content/images/icons/filetype_pdf.png"> Open topic as PDF
			</button>
	</div>
<div class="clear-fix" style="margin-bottom: 10px"></div>
</div>

	
