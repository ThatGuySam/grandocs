---
originalUrl: 'https://help2.malighting.com/Page/grandMA2/Change_Modes/en/3.9'
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
		<input data-val="true" data-val-number="The field Int32 must be a number." data-val-required="The Int32 field is required." id="ProductId" name="ProductId" type="hidden" value="27">
		<input id="CurrentGuid" name="CurrentGuid" type="hidden" value="2763e2bb-6e82-4994-ba73-7091c1e5797e">
	</span>
</form></div>&nbsp;	</span>
	<span class="pull-right" style="white-space: nowrap;">
			<button class="btn btn-mini" onclick="location.href='/Page/grandMA2/mode2_version_specification/en/3.9'; " title="Go to previous page 'Version Specification'">
				<i class="icon-arrow-left"></i> previous
			</button>

			<button class="btn btn-mini" onclick="location.href='/Page/grandMA2/gMA2_QuickStartGuide/en/3.9';" title="Go to next page 'grandMA2 Quick Start Guide'">
				next <i class="icon-arrow-right"></i> 
			</button>
	</span>
</div>
<div class="clear-fix" style="margin-bottom: 10px"></div>
</div>

		
			<div class="pull-right">
					<button class="btn btn-mini" style="margin-right: 10px; height: 30px;" onclick="location.href = '/Media/TopicPdf/87348/31'; " title="Open/Save this topic as PDF document for viewing or printing">
						<img src="/Content/images/icons/filetype_pdf.png" style="height: 24px;"> Open topic as PDF
					</button>
				<span class="badge badge-info">Version 3.9</span>
			</div>
		<h1>Change Modes</h1>


		<a name="toc_header_anchor_1" id="toc_header_anchor_1" class="topic-toc-item"></a><h3><a id="ModeSelection" name="ModeSelection"></a>Change from Mode2 to grandMA3 on Consoles</h3>

<p>To change from Mode2 to grandMA3:</p>

<ol>
	<li>Restart the console by using the <a href="/Topic/fece2234-7513-4dc5-b039-4dbf13d6d319">Restart Keyword</a>. A pop-up opens:</li>
</ol>

<figure class="caption"><img alt="" src="/Media/Image/popup_restart.png">
<figcaption>Restart pop-up</figcaption>
</figure>

<ol start="3">
	<li>Confirm the pop-up. The Mode2 application closes and the console restarts.</li>
	<li>The Mode Selection pop-up appears. Tap <span class="softkey">3</span>.</li>
</ol>

<figure class="caption"><img alt="" src="/Media/Image/img_select-mode_v0-9_3_3.png">
<figcaption>Mode Selection Dialog</figcaption>
</figure>

<a name="toc_header_anchor_2" id="toc_header_anchor_2" class="topic-toc-item"></a><h3>SwitchTograndMA3Software Keyword</h3>

<p><strong>Requirements:</strong> A grandMA3 station running in Mode2.</p>

<ul>
	<li>To switch from Mode2 to grandMA3, use the&nbsp;<a href="/Page/grandMA3/keyword_switchtograndma3software/en">SwitchTograndMA3Software</a>&nbsp;keyword described in the grandMA3 User Manual.</li>
</ul>

<a name="toc_header_anchor_3" id="toc_header_anchor_3" class="topic-toc-item"></a><h3>Reboot Processing Unit from Mode2 to grandMA3</h3>

<p>To change the application for the processing unit:</p>

<ol>
	<li>Tap <span class="softkey">Reboot</span>&nbsp;on the left side of the processing unit main screen. A pop-up opens.</li>
</ol>

<figure class="caption"><img alt="" src="/Media/Image/Overlay_reboot_1_resize.png">
<figcaption>Processing Unit</figcaption>
</figure>

<ol start="2">
	<li>
	<p>Tap <span class="softkey">Yes</span>. The processing unit reboots.</p>
	</li>
</ol>

<figure class="caption"><img alt="" src="/Media/Image/Overlay_reboot_resize_2.png">
<figcaption>Pop-up&nbsp;</figcaption>
</figure>

<ol start="3">
	<li>
	<p>&nbsp;Continue as described in <a href="#ModeSelection">Change from Mode2 to grandMA3 on Consoles</a>.</p>
	</li>
</ol>

<a name="toc_header_anchor_4" id="toc_header_anchor_4" class="topic-toc-item"></a><h3>xPort Node from Mode2 to grandMA3</h3>

<ul>
	<li>To change the xPort Node from Mode2 to grandMA3, follow these instructions:</li>
</ul>

<p>Mode2 screen:</p>

<p><img alt="" src="/Media/Image/01_xPort_Mode_Wechsel.png"></p>

<ul>
	<li>To switch to grandMA3, press and hold the rotary knob. The display cycles through the following screens:</li>
</ul>

<p><img alt="" src="/Media/Image/01b_xPort_Mode_Wechsel.png"></p>

<p><img alt="" src="/Media/Image/02_xPort_Mode_Wechsel.png"></p>

<p><img alt="" src="/Media/Image/03_xPort_Mode_Wechsel.png"></p>

<p><img alt="" src="/Media/Image/04_xPort_Mode_Wechsel.png"></p>

<p><img alt="" src="/Media/Image/05_xPort_Mode_Wechsel.png"></p>

<ul>
	<li>Release the rotary knob at the following screen:</li>
</ul>

<p><img alt="" src="/Media/Image/06_xPort_Mode_Wechsel.png"></p>

<ul>
	<li>Press the rotary knob to confirm.</li>
</ul>

<p>The xPort Node reboots into grandMA3 mode.</p>

<p>For more information about changing from grandMA3 mode to Mode2, read the topic <a href="/Page/grandMA3/comad_xport_nodes/en" target="_blank">Control other MA devices</a> in the <a href="/Page/grandMA3/grandMA3/en" target="_blank">grandMA3 User Manual</a>.</p>


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
		<input data-val="true" data-val-number="The field Int32 must be a number." data-val-required="The Int32 field is required." id="ProductId" name="ProductId" type="hidden" value="27">
		<input id="CurrentGuid" name="CurrentGuid" type="hidden" value="2763e2bb-6e82-4994-ba73-7091c1e5797e">
	</span>
</form></div>&nbsp;	</span>
	<span class="pull-right" style="white-space: nowrap;">
			<button class="btn btn-mini" onclick="location.href='/Page/grandMA2/mode2_version_specification/en/3.9'; " title="Go to previous page 'Version Specification'">
				<i class="icon-arrow-left"></i> previous
			</button>

			<button class="btn btn-mini" onclick="location.href='/Page/grandMA2/gMA2_QuickStartGuide/en/3.9';" title="Go to next page 'grandMA2 Quick Start Guide'">
				next <i class="icon-arrow-right"></i> 
			</button>
	</span>
</div>
	<div class="clear-fix"></div>
	<div class="pull-right">
	
			<button class="btn btn-mini" onclick="location.href='/Media/TopicPdf/87348/31';" title="Open/Save this topic as PDF document for viewing or printing">
				<img src="/Content/images/icons/filetype_pdf.png"> Open topic as PDF
			</button>
	</div>
<div class="clear-fix" style="margin-bottom: 10px"></div>
</div>

	
