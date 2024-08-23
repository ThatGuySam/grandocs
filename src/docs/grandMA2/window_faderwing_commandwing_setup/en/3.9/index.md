---
originalUrl: >-
  https://help2.malighting.com/Page/grandMA2/window_faderwing_commandwing_setup/en/3.9
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
		<input id="CurrentGuid" name="CurrentGuid" type="hidden" value="3fc4fdce-1127-407e-94bd-01b8e5ba5605">
	</span>
</form></div>&nbsp;	</span>
	<span class="pull-right" style="white-space: nowrap;">
			<button class="btn btn-mini" onclick="location.href='/Page/grandMA2/local_settings/en/3.9'; " title="Go to previous page 'Local settings'">
				<i class="icon-arrow-left"></i> previous
			</button>

			<button class="btn btn-mini" onclick="location.href='/Page/grandMA2/date_time/en/3.9';" title="Go to next page 'Date &amp; Time'">
				next <i class="icon-arrow-right"></i> 
			</button>
	</span>
</div>
<div class="clear-fix" style="margin-bottom: 10px"></div>
</div>

		
			<div class="pull-right">
					<button class="btn btn-mini" style="margin-right: 10px; height: 30px;" onclick="location.href = '/Media/TopicPdf/55133/31'; " title="Open/Save this topic as PDF document for viewing or printing">
						<img src="/Content/images/icons/filetype_pdf.png" style="height: 24px;"> Open topic as PDF
					</button>
				<span class="badge badge-info">Version 3.9</span>
			</div>
		<h1>Wing &amp; Monitor Setup</h1>

			<div class="topic-table-of-contents">
				<h2>Table of contents of this topic</h2>
				<div class="topic-toc-toggler topic-toc-toggler-hide"><a href="#" onclick="$('.topic-toc-ul').toggle(); $('.topic-toc-toggler-hide').hide(); $('.topic-toc-toggler-show').show(); return false;">hide</a></div>
				<div class="topic-toc-toggler topic-toc-toggler-show" style="display: none;"><a href="#" onclick="$('.topic-toc-ul').toggle(); $('.topic-toc-toggler-hide').show(); $('.topic-toc-toggler-show').hide(); return false;">show</a></div>
				<ul class="topic-toc-ul">
						<li>
							<a href="#toc_header_anchor_1">Table Mode</a>
						</li>
				</ul>
			</div>

		<p>Assign wings to an executor or assign external displays to internal screens in Wing &amp; Monitor Setup.&nbsp;</p>

<p><strong>Requirements:</strong></p>

<ul>
	<li>The resolution of the external screen has to be set to 1280 x 800 before assigning the internal screen to it.</li>
	<li>The external screen has to be calibrated before assigning the internal screen.&nbsp;</li>
</ul>

<p>For more information on how to set the resolution see <a href="/Topic/725a8a7a-b185-464c-80aa-43042f9be942#resolution_external_screen">Change Screen Resolution for External Screens</a>.</p>

<p>Open the Wing &amp; Monitor Setup:</p>

<ol>
	<li>Press <span class="hardkey">Setup</span>.</li>
	<li>Tap <span class="softkey">Wing &amp; Monitor Setup</span> in the column <span class="softkey">Console</span>.</li>
	<li>The menu <strong>FaderWing and CommandWing</strong>&nbsp;<strong>Setup</strong> opens in the graphic mode.&nbsp;</li>
</ol>

<figure class="caption"><img alt="" src="/Media/Image/menu_console-settings_wing-monitor_console_v3-3.png">
<figcaption><em>Display of a current surface in grandMA2 – graphic mode</em></figcaption>
</figure>

<ol start="4">
	<li>To remove the write protection and to add a new screen, tap <span class="softkey">Add Surface</span>.</li>
	<li>Assign the internal screen to an external screen:<br>
	-Tap and hold an external screen displayed in the menu above.<br>
	-A pop-up opens displaying the screens.&nbsp;
	<figure class="caption"><img alt="" src="/Media/Image/popup_edit-screen_wing_monitor_setup_v3-3.png">
	<figcaption><em>Assign a screen to an external screen</em></figcaption>
	</figure>
	<br>
	-Tap for example Screen 1.<br>
	-The internal screen 1 is now assigned to an external screen.</li>
	<li>Tap and move an external screen to a favored position in menu.<br>
	-If en external screen is moved to the side, using the tracking ball or a mouse moves the cursor to the side.<br>
	-If an external screen is moved to the top, using the tracking ball or a mouse moves the cursor to the top.<br>
	-When operating a console move an external screen using a wing. Use the encoder of the wing to navigate in the screen.</li>
	<li>Configure an internal or external wing:<br>
	-Edit the command wing displayed at the bottom of the current surface.<br>
	-A pop-up opens displaying the configuration.
	<figure class="caption"><img alt="" src="/Media/Image/popup_select-fader-config_v3-3.png">
	<figcaption><em>Configuration of wings</em></figcaption>
	</figure>
	<br>
	-Tap to select a wing.</li>
	<li>To label the surface, tap <span class="softkey">Label</span> on the right of the menu.</li>
	<li>Change surfaces:<br>
	-To return to the previous surface, tap <span class="softkey">Previous Surface</span>.<br>
	-To jump to the next surface, tap <span class="softkey">Next Surface</span>.</li>
</ol>

<p>You can also call a surface using the command line. For more information see the <a href="/Topic/659644aa-8ba0-4d61-a9ec-07722b23549c">Surface keyword</a>.&nbsp;</p>

<ol start="10">
	<li>To delete a surface, tap <span class="softkey">Delete Surface</span>.</li>
</ol>

<p>The settings are now applied.</p>

<hr>
<a name="toc_header_anchor_1" id="toc_header_anchor_1" class="topic-toc-item"></a><h2>Table Mode</h2>

<ol>
	<li>To display the settings in a table, tap <span class="softkey">Table Mode</span> on the right of the menu.</li>
	<li>The menu opens.</li>
</ol>

<figure class="caption"><img alt="" src="/Media/Image/menu_wing-monitor-setup_table-mode_v3-3.png">
<figcaption><em>Wing &amp; monitor setup – table mode</em></figcaption>
</figure>

<ol start="3">
	<li>Add a surface:<br>
	-Tap <span class="softkey">Add Surface</span> or tap and hold the cell <strong>New </strong>in the column <strong>No.</strong> or an empty cell in the column <strong>Name</strong>.&nbsp;</li>
	<li>Label the surface:<br>
	-After adding a surface, tap the cell <strong>Surface</strong>.<br>
	-A pop-up <strong>Edit Name</strong> opens.&nbsp;<br>
	-Enter the name.<br>
	-The surface is now labeled.</li>
	<li>Apply a surface:<br>
	-Tap <span class="softkey">Select Surface</span>. The cell you have tapped is now applied.&nbsp;</li>
	<li>Edit cells:<br>
	-To edit single cells, tap and hold the cell.<br>
	-A pop-up opens displaying the wings.<br>
	-Tap to select a wing.<br>
	-The wing you have selected is now applied.&nbsp;</li>
	<li>To revert to the graphic mode, tap <span class="softkey">Graphic Mode</span>.&nbsp;</li>
</ol>

<p>All settings are now applied.&nbsp;</p>

<p>&nbsp;</p>


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
		<input id="CurrentGuid" name="CurrentGuid" type="hidden" value="3fc4fdce-1127-407e-94bd-01b8e5ba5605">
	</span>
</form></div>&nbsp;	</span>
	<span class="pull-right" style="white-space: nowrap;">
			<button class="btn btn-mini" onclick="location.href='/Page/grandMA2/local_settings/en/3.9'; " title="Go to previous page 'Local settings'">
				<i class="icon-arrow-left"></i> previous
			</button>

			<button class="btn btn-mini" onclick="location.href='/Page/grandMA2/date_time/en/3.9';" title="Go to next page 'Date &amp; Time'">
				next <i class="icon-arrow-right"></i> 
			</button>
	</span>
</div>
	<div class="clear-fix"></div>
	<div class="pull-right">
	
			<button class="btn btn-mini" onclick="location.href='/Media/TopicPdf/55133/31';" title="Open/Save this topic as PDF document for viewing or printing">
				<img src="/Content/images/icons/filetype_pdf.png"> Open topic as PDF
			</button>
	</div>
<div class="clear-fix" style="margin-bottom: 10px"></div>
</div>

	
