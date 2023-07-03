---
originalUrl: 'https://help2.malighting.com/Page/grandMA3/phaser_create_dimmer/en/1.8'
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
<option value="43">1.9</option>
</select></div>
		<input data-val="true" data-val-number="The field Int32 must be a number." data-val-required="The Int32 field is required." id="ProductId" name="ProductId" type="hidden" value="16">
		<input id="CurrentGuid" name="CurrentGuid" type="hidden" value="24b7702a-9e2b-4a63-b60a-d829a4f20898">
	</span>
</form></div>&nbsp;	</span>
	<span class="pull-right" style="white-space: nowrap;">
			<button class="btn btn-mini" onclick="location.href='/Page/grandMA3/phaser_editor/en/1.8'; " title="Go to previous page 'Phaser editor'">
				<i class="icon-arrow-left"></i> previous
			</button>

			<button class="btn btn-mini" onclick="location.href='/Page/grandMA3/phaser_create_circle/en/1.8';" title="Go to next page 'Create circle phaser'">
				next <i class="icon-arrow-right"></i> 
			</button>
	</span>
</div>
<div class="clear-fix" style="margin-bottom: 10px"></div>
</div>

					<div class="infobox"><b>Hint:</b><br><b>New help version</b><br>The help version you selected belongs to an older software version. <a href="/Topic/SetCurrentVersionNumber/43/24b7702a-9e2b-4a63-b60a-d829a4f20898">You may want to view the latest help version.</a></div>

			<div class="pull-right">
					<button class="btn btn-mini" style="margin-right: 10px; height: 30px;" onclick="location.href = '/Media/TopicPdf/80249/42'; " title="Open/Save this topic as PDF document for viewing or printing">
						<img src="/Content/images/icons/filetype_pdf.png" style="height: 24px;"> Open topic as PDF
					</button>
				<span class="badge badge-info">Version 1.8</span>
			</div>
		<h1>Create a Sinus Dimmer Phaser</h1>

			<div class="topic-table-of-contents">
				<h2>Table of contents of this topic</h2>
				<div class="topic-toc-toggler topic-toc-toggler-hide"><a href="#" onclick="$('.topic-toc-ul').toggle(); $('.topic-toc-toggler-hide').hide(); $('.topic-toc-toggler-show').show(); return false;">hide</a></div>
				<div class="topic-toc-toggler topic-toc-toggler-show" style="display: none;"><a href="#" onclick="$('.topic-toc-ul').toggle(); $('.topic-toc-toggler-hide').show(); $('.topic-toc-toggler-show').hide(); return false;">show</a></div>
				<ul class="topic-toc-ul">
						<li>
							<a href="#toc_header_anchor_1">Quickly Create Steps and Apply Adjustments with the Phaser Editor</a>
						</li>
						<li>
							<a href="#toc_header_anchor_2">Alternate Methods to Create a Sinus Dimmer Phaser</a>
						</li>
				</ul>
			</div>

		<p>This topic details a couple of examples of how to create a sinus dimmer phaser using keys and buttons as well as the phaser editor and encoder bar. There are many ways to reach the same goal in grandMA3. Many of the steps in the examples below are interchangeable while producing identical results. These examples uses a combination of keys and the calculator interface. If you are working with the onPC software, it might be easier to type commands into the command line rather than use the on-screen keys.</p>

<p>It is recommended to read the <a href="/Topic/b1a2f8ac-0809-4528-95de-16ba0b209092">Phasers topic</a> and the <a href="/Topic/df459f63-eb66-4174-8247-d9dc0714345e">Phaser Editor topic</a> before this topic.</p>

<p><strong>Requirements:</strong></p>

<ul>
	<li>Have a show with some lights patched.</li>
	<li>An open <a href="/Topic/df459f63-eb66-4174-8247-d9dc0714345e">Phaser Editor</a> window with the Step Bar enabled is recommended, though it is also possible to use the temporary Phaser Editor.</li>
	<li>Arranging the fixtures in the 3D window can be useful, but it is not a requirement.</li>
	<li>As it is highly recommended to use presets while programming, an open Dimmer preset pool is recommended with presets for dimmer values of 100% and 0%.</li>
</ul>

<hr>
<a name="toc_header_anchor_1" id="toc_header_anchor_1" class="topic-toc-item"></a><h2>Quickly Create Steps and Apply Adjustments with the Phaser Editor</h2>

<ol>
	<li>Select the desired fixtures. For example: <span class="hardkey">Fixture</span> <span class="hardkey">Thru</span> <span class="hardkey">Please</span></li>
	<li>Choose a dimmer preset for step one: Press and hold <span class="hardkey">Step</span> and tap the preset with the 0% dimmer value.</li>
	<li>Choose a dimmer preset for step two: While still holding <span class="hardkey">Step</span>, tap the preset with the 100% dimmer value.</li>
</ol>

<p>This is the base for the phaser. There are now two steps with a dimmer preset of 0% in the first step and a preset of 100% in the second step. All of the fixtures are changing together from step one to two with a linear fade (not yet using a sine curve). The Sheet view mode of the <strong>Phaser Editor</strong> shows:</p>

<figure class="caption"><img alt="" src="/Media/Image/img_phaser_sine-dim_01-linear_v1-7.png">
<figcaption>Linear Dimmer Phaser with No Phase Distribution</figcaption>
</figure>

<p>Adjust the curve of both steps using tools in the Phaser Editor:</p>

<ol start="4">
	<li>Select all steps by tapping the&nbsp;<img alt="" src="/Media/Image/icon_step-select-all_15_v1-7.png"> button at the right end of the Step Bar or at the bottom of the left-hand tool bar.</li>
	<li>Tap to select the Select Form tool (<img alt="" src="/Media/Image/icon_phaser_form-saw_15_v1-7.png">) in the left-hand tool bar.</li>
	<li>In the right-hand tool bar, tap the sine wave button (<img alt="" src="/Media/Image/icon_phaser_form-sin_15_v1-7.png">) to select the sine wave form.</li>
</ol>

<figure class="caption"><img alt="" src="/Media/Image/img_phaser_sine-dim_02-sine_v1-7.png">
<figcaption>Sinus Dimmer Phaser with No Phase Distribution</figcaption>
</figure>

<p>Adjust the phase of all fixtures using tools in the Phaser Editor:</p>

<ol start="7">
	<li>Tap to select the Edit Phase (<img alt="" src="/Media/Image/icon_phaser_angle_15_v1-7.png">) tool in the left-hand tool bar.</li>
	<li>In the right-hand tool bar, tap the <span class="softkey">360</span> button to evenly distribute the selected fixtures over the wave form.</li>
</ol>

<figure class="caption"><img alt="" src="/Media/Image/img_phaser_sine-dim_03-phased_v1-7.png">
<figcaption>Sinus Dimmer Phaser with Full Phase Distribution</figcaption>
</figure>

<p>Store the phaser into a preset or a cue.</p>

<hr>
<a name="toc_header_anchor_2" id="toc_header_anchor_2" class="topic-toc-item"></a><h2>Alternate Methods to Create a Sinus Dimmer Phaser</h2>

<p>Follow these steps to create a sinus dimmer phaser:</p>

<ol>
	<li>Select the desired fixtures. For example: <span class="hardkey">Fixture</span> <span class="hardkey">Thru</span> <span class="hardkey">Please</span>.</li>
	<li>Set them at a dimmer value of 0: <span class="hardkey">At</span> <span class="hardkey">0</span> <span class="hardkey">Please</span>.</li>
	<li>Create step 2 and select it: <span class="hardkey">MA</span> + <span class="hardkey">Next</span> (Next Step).</li>
	<li>Set the fixtures at full: <span class="hardkey">Full</span>.</li>
</ol>

<p>This is the base for the phaser. There are now two steps with a dimmer value of 0 in the first step and a value of 100 in the second step. All the fixtures are changing together from step one to two in a linear direction and do not fade using a sine curve. It looks like this in the <strong>Phaser Editor</strong>:</p>

<p><img alt="" src="/Media/Image/img_phaser_sine-dim_small_01-linear_v1-7.png"></p>

<p>The curve is corrected by adjusting the acceleration and deceleration in both steps.</p>

<ol start="5">
	<li>Select both steps: <span class="hardkey">MA</span> + <span class="hardkey">Set</span> (Step Toggle).</li>
	<li>The steps need to have an accelerate value of -100. This is done using the <a href="/Topic/fca96ff3-d1c4-4f2c-b63d-7c9204dbaebe">Encoder Toolbar</a>.
	<ol>
		<li>Tap <span class="softkey">Dimmer</span> to make sure it is selected.</li>
		<li>Tap <span class="softkey">Accel</span> to select the acceleration layer.</li>
		<li>Tap the left attribute encoder to open the calculator.</li>
		<li>Tap <span class="softkey">+/-</span> <span class="softkey">1</span> <span class="softkey">0</span> <span class="softkey">0</span> <span class="softkey">Please</span>. This gives a known and precise value. If <strong>Handles</strong> are used then it might not be as precise as typing a value.</li>
	</ol>
	</li>
	<li>Do the same for the <span class="softkey">Decel</span> layer.</li>
</ol>

<p>Now the attribute accelerates out of and decelerates into each step. The curve now looks like this:</p>

<p><img alt="" src="/Media/Image/img_phaser_sine-dim_small_02-sine_v1-7.png"></p>

<ol start="8">
	<li>The final thing to do is to spread out the fixtures using the phase value. This is also done from the encoder toolbar.
	<ol>
		<li>Tap <span class="softkey">Phase</span> to select the phase layer.</li>
		<li>Tap the left attribute encoder to open the calculator.</li>
		<li>Tap <span class="softkey">0</span> <span class="softkey">Thru</span> <span class="softkey">3</span> <span class="softkey">6</span> <span class="softkey">0</span> <span class="softkey">Please</span>.</li>
	</ol>
	</li>
</ol>

<p>Now the fixtures are spread out equally over the entire phase of the phaser loop.</p>

<p><img alt="" src="/Media/Image/img_phaser_sine-dim_small_03-phased_v1-7.png"></p>

<p>This is a sinus phaser that can be stored in a cue or preset.</p>

<p>It is created using a specific selection of fixtures so remember to select the desired <strong>Preset Mode</strong> when <a href="/Topic/e4399825-89c2-4524-bde7-4d8cabf185b6">storing a preset</a>.</p>


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
<option value="36">1.3</option>
<option value="37">1.4</option>
<option value="38">1.5</option>
<option value="39">1.6</option>
<option value="40">1.7</option>
<option selected="selected" value="42">1.8</option>
<option value="43">1.9</option>
</select></div>
		<input data-val="true" data-val-number="The field Int32 must be a number." data-val-required="The Int32 field is required." id="ProductId" name="ProductId" type="hidden" value="16">
		<input id="CurrentGuid" name="CurrentGuid" type="hidden" value="24b7702a-9e2b-4a63-b60a-d829a4f20898">
	</span>
</form></div>&nbsp;	</span>
	<span class="pull-right" style="white-space: nowrap;">
			<button class="btn btn-mini" onclick="location.href='/Page/grandMA3/phaser_editor/en/1.8'; " title="Go to previous page 'Phaser editor'">
				<i class="icon-arrow-left"></i> previous
			</button>

			<button class="btn btn-mini" onclick="location.href='/Page/grandMA3/phaser_create_circle/en/1.8';" title="Go to next page 'Create circle phaser'">
				next <i class="icon-arrow-right"></i> 
			</button>
	</span>
</div>
	<div class="clear-fix"></div>
	<div class="pull-right">
	
			<button class="btn btn-mini" onclick="location.href='/Media/TopicPdf/80249/42';" title="Open/Save this topic as PDF document for viewing or printing">
				<img src="/Content/images/icons/filetype_pdf.png"> Open topic as PDF
			</button>
	</div>
<div class="clear-fix" style="margin-bottom: 10px"></div>
</div>

	
