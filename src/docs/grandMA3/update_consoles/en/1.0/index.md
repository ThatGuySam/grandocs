---
originalUrl: 'https://help2.malighting.com/Page/grandMA3/update_consoles/en/1.0'
---

<div class="topic-navigation">

<div class="pull-right">
	<span class="pull-left">


<div class="pull-left">
<form action="/Topic/SetCurrentVersionNumber" class="form-inline" id="frmTagSelector" method="post">	<span class="form-mini">
		<div class="input-prepend"><span class="add-on">Select different version</span><select autocomplete="off" id="versionNumberId" name="versionNumberId" onchange="$(this).closest('#frmTagSelector').submit();" style="width: 120px;"><option value="">- latest -</option>
<option selected="selected" value="10">1.0</option>
<option value="32">1.1</option>
<option value="35">1.2</option>
<option value="36">1.3</option>
<option value="37">1.4</option>
<option value="38">1.5</option>
<option value="39">1.6</option>
<option value="40">1.7</option>
<option value="42">1.8</option>
<option value="43">1.9</option>
<option value="44">2.0</option>
</select></div>
		<input data-val="true" data-val-number="The field Int32 must be a number." data-val-required="The Int32 field is required." id="ProductId" name="ProductId" type="hidden" value="16">
		<input id="CurrentGuid" name="CurrentGuid" type="hidden" value="81218edf-4c0e-4061-8d3a-8ca28e7d93ce">
	</span>
</form></div>&nbsp;	</span>
	<span class="pull-right" style="white-space: nowrap;">
			<button class="btn btn-mini" onclick="location.href='/Page/grandMA3/update/en/1.0'; " title="Go to previous page 'Update the Software'">
				<i class="icon-arrow-left"></i> previous
			</button>

			<button class="btn btn-mini" onclick="location.href='/Page/grandMA3/update_xports/en/1.0';" title="Go to next page 'Update grandMA3 xport nodes'">
				next <i class="icon-arrow-right"></i> 
			</button>
	</span>
</div>
<div class="clear-fix" style="margin-bottom: 10px"></div>
</div>

					<div class="infobox"><b>Hint:</b><br><b>New help version</b><br>The help version you selected belongs to an older software version. <a href="https://help.malighting.com/grandMA3/latest/?p=help.html">You may want to view the latest help version.</a></div>

			<div class="pull-right">
					<button class="btn btn-mini" style="margin-right: 10px; height: 30px;" onclick="location.href = '/Media/TopicPdf/52576/10'; " title="Open/Save this topic as PDF document for viewing or printing">
						<img src="/Content/images/icons/filetype_pdf.png" style="height: 24px;"> Open topic as PDF
					</button>
				<span class="badge badge-info">Version 1.0</span>
			</div>
		<h1>Update grandMA3 Consoles</h1>


		<ol>
	<li>Insert the USB flash drive into your PC.</li>
	<li>Open it.</li>
	<li>Extract the entire data from the zip. file onto the USB flash drive.<br>
	The folders&nbsp;EFI, ma, and other data included are extracted.</li>
</ol>

<div class="important"><strong>Important:</strong><br>
- The folders&nbsp;EFI, ma, and other data included have to be directly accessible on the flash drive and must not be located in an extra folder.<br>
- The USB flash drive's data system has to be FAT32.&nbsp;</div>

<ol start="4">
	<li>Insert the USB flash drive containing the unzipped files into the console.&nbsp;</li>
	<li>Press the power button.</li>
	<li>Press the key&nbsp;<span class="hardkey">8/F8</span> on the integrated or the external keyboard several times.<br>
	<strong>Boot Manager</strong> opens.</li>
	<li>Scroll down to EFI USB Device 'name of USB flash drive' using the arrow keys.</li>
	<li>Press <span class="hardkey">Please</span>.&nbsp;<br>
	The console starts to boot.</li>
</ol>

<div class="important"><strong>Important:</strong><br>
If the USB flash drive contains more than 1 version, select the version you would like to install first.</div>

<p><strong>Install Selector</strong> dialog appears.</p>

<figure class="caption"><img alt="" src="/Media/Image/img_installer-dialog_v0-9_3.png">
<figcaption><em>Install software</em></figcaption>
</figure>

<ol start="9">
	<li>Select one of the options.&nbsp;</li>
	<li>Press <span class="hardkey">Please</span>.</li>
	<li>Wait for completion.&nbsp;<br>
	The grandMA3 console starts to reboot.</li>
	<li>Remove the USB flash drive.&nbsp;</li>
</ol>

<p>The Mode Selection dialog appears.&nbsp;</p>

<figure class="caption"><img alt="" src="/Media/Image/img_select-mode_v0-9_3.png">
<figcaption><em>Select mode</em></figcaption>
</figure>

<ol start="13">
	<li>Select one of the modes.&nbsp;&nbsp;</li>
</ol>

<ul>
	<li>Screens 1, 2, 3 are initializing.</li>
	<li>The letterbox screens and the commands screens stay black.&nbsp;</li>
	<li>It can take several seconds for them to start initializing.&nbsp;</li>
</ul>

<p>The mode you selected is installed on the grandMA3 console.&nbsp;</p>

<p>&nbsp;</p>


				<br>
<div class="topic-navigation">

<div class="pull-right">
	<span class="pull-left">


<div class="pull-left">
<form action="/Topic/SetCurrentVersionNumber" class="form-inline" id="frmTagSelector" method="post">	<span class="form-mini">
		<div class="input-prepend"><span class="add-on">Select different version</span><select autocomplete="off" id="versionNumberId" name="versionNumberId" onchange="$(this).closest('#frmTagSelector').submit();" style="width: 120px;"><option value="">- latest -</option>
<option selected="selected" value="10">1.0</option>
<option value="32">1.1</option>
<option value="35">1.2</option>
<option value="36">1.3</option>
<option value="37">1.4</option>
<option value="38">1.5</option>
<option value="39">1.6</option>
<option value="40">1.7</option>
<option value="42">1.8</option>
<option value="43">1.9</option>
<option value="44">2.0</option>
</select></div>
		<input data-val="true" data-val-number="The field Int32 must be a number." data-val-required="The Int32 field is required." id="ProductId" name="ProductId" type="hidden" value="16">
		<input id="CurrentGuid" name="CurrentGuid" type="hidden" value="81218edf-4c0e-4061-8d3a-8ca28e7d93ce">
	</span>
</form></div>&nbsp;	</span>
	<span class="pull-right" style="white-space: nowrap;">
			<button class="btn btn-mini" onclick="location.href='/Page/grandMA3/update/en/1.0'; " title="Go to previous page 'Update the Software'">
				<i class="icon-arrow-left"></i> previous
			</button>

			<button class="btn btn-mini" onclick="location.href='/Page/grandMA3/update_xports/en/1.0';" title="Go to next page 'Update grandMA3 xport nodes'">
				next <i class="icon-arrow-right"></i> 
			</button>
	</span>
</div>
	<div class="clear-fix"></div>
	<div class="pull-right">
	
			<button class="btn btn-mini" onclick="location.href='/Media/TopicPdf/52576/10';" title="Open/Save this topic as PDF document for viewing or printing">
				<img src="/Content/images/icons/filetype_pdf.png"> Open topic as PDF
			</button>
	</div>
<div class="clear-fix" style="margin-bottom: 10px"></div>
</div>

	
