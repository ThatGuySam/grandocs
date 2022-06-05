---
originalUrl: 'https://help2.malighting.com/Page/grandMA2/patch_dmx_testing/en/3.3'
---

<div class="topic-navigation">

<div class="pull-right">
	<span class="pull-left">


<div class="pull-left">
<form action="/Topic/SetCurrentVersionNumber" class="form-inline" id="frmTagSelector" method="post">	<span class="form-mini">
		<div class="input-prepend"><span class="add-on">Select different version</span><select autocomplete="off" id="versionNumberId" name="versionNumberId" onchange="$(this).closest('#frmTagSelector').submit();" style="width: 120px;"><option value="">- latest -</option>
<option selected="selected" value="6">3.3</option>
<option value="14">3.4</option>
<option value="18">3.5</option>
<option value="21">3.6</option>
<option value="23">3.7</option>
<option value="27">3.8</option>
<option value="31">3.9</option>
</select></div>
		<input data-val="true" data-val-number="The field Int32 must be a number." data-val-required="The Int32 field is required." id="ProductId" name="ProductId" type="hidden" value="11">
		<input id="CurrentGuid" name="CurrentGuid" type="hidden" value="5cae836b-976d-4d14-ab2d-62342a0738b4">
	</span>
</form></div>&nbsp;	</span>
	<span class="pull-right" style="white-space: nowrap;">
			<button class="btn btn-mini" onclick="location.href='/Page/grandMA2/patch_dmx_sheet/en/3.3'; " title="Go to previous page 'DMX sheet'">
				<i class="icon-arrow-left"></i> previous
			</button>

			<button class="btn btn-mini" onclick="location.href='/Page/grandMA2/patch_dmx_parameter_list/en/3.3';" title="Go to next page 'DMX and parameter lists'">
				next <i class="icon-arrow-right"></i> 
			</button>
	</span>
</div>
<div class="clear-fix" style="margin-bottom: 10px"></div>
</div>

					<div class="infobox"><b>Hint:</b><br><b>New help version</b><br>The help version you selected belongs to an older software version. <a href="/Topic/SetCurrentVersionNumber/31/5cae836b-976d-4d14-ab2d-62342a0738b4">You may want to view the latest help version.</a></div>

			<div class="pull-right">
					<button class="btn btn-mini" style="margin-right: 10px; height: 30px;" onclick="location.href = '/Media/TopicPdf/30379/6'; " title="Open/Save this topic as PDF document for viewing or printing">
						<img src="/Content/images/icons/filetype_pdf.png" style="height: 24px;"> Open topic as PDF
					</button>
				<span class="badge badge-info">Version 3.3</span>
			</div>
		<h1>DMX testing in the DMX Sheet</h1>

			<div class="topic-table-of-contents">
				<h2>Table of contents of this topic</h2>
				<div class="topic-toc-toggler topic-toc-toggler-hide"><a href="#" onclick="$('.topic-toc-ul').toggle(); $('.topic-toc-toggler-hide').hide(); $('.topic-toc-toggler-show').show(); return false;">hide</a></div>
				<div class="topic-toc-toggler topic-toc-toggler-show" style="display: none;"><a href="#" onclick="$('.topic-toc-ul').toggle(); $('.topic-toc-toggler-hide').show(); $('.topic-toc-toggler-show').hide(); return false;">show</a></div>
				<ul class="topic-toc-ul">
						<li>
							<a href="#toc_header_anchor_1">Using the DMX tester with the GUI</a>
						</li>
						<li>
							<a href="#toc_header_anchor_2">Using the DMX tester with the command line</a>
						</li>
				</ul>
			</div>

		<p>You can send DMX values to any DMX address. This can be a great tool for you to locate the address of a fixture or even to just turn on a DMX address for work light.</p>

<p>The DMX tester have a higher priority than your programmer, executors, and parked values. A DMX address under the influence of the DMX tester has a white background color behind the value and a white marker. The currently selected DMX address also has a yellow marker. It could look like this:</p>

<figure class="caption"><img alt="" src="/Media/Image/img_dmx-tester_result_v3_2.png">
<figcaption><em>DMX addresses turned on by the DMX tester</em></figcaption>
</figure>

<p>&nbsp;</p>

<p>As usual there are several ways to use the DMX tester.</p>

<a name="toc_header_anchor_1" id="toc_header_anchor_1" class="topic-toc-item"></a><h2>Using the DMX tester with the GUI</h2>

<p>You can use the encoders and the encoder toolbar to test DMX channels.</p>

<p>You'll need to open a <a href="/Topic/b2a17500-13e7-46b2-91e0-10bf3b76eaf1">DMX sheet</a> and make sure the "Link Encoders" option is activated.</p>

<p>Now touch anywhere inside the sheet.</p>

<p>This gives you a new encoder toolbar. It could look like this:</p>

<figure class="caption"><img alt="" src="/Media/Image/img_encoder-toolbar_dmx-tester_v3-3.png">
<figcaption><em>Encoder Toolbar - DMX tester</em></figcaption>
</figure>

<p>The left encoder is used to select the Universe. There is a small button next to the encoder readout where you can change between <strong>Universe </strong>or <strong>Absolute</strong>. If you choose Absolute then you do not need to use this encoder. You can just use the center left encoder.</p>

<p>The center left encoder is used to select the DMX address. The button next to the encoder readout has two options <strong>Release</strong> or <strong>Retain</strong>. Release means that when you scroll through the DMX address then it is only the selected channel that is affected by the DMX tester. Retain means that the addresses that you pass will keep the Test Output value when you select the next address.</p>

<p>The center right encoder is used to set the Test Output. This is the value that will be sent to the selected DMX address. The button next to it is used to change between a percent (0 to 100) and decimal (0 to 255) value range. If you have not touched the encoder then it has a special "none" value. This means that you are not affecting the DMX address. You can actually also use the DMX tester to set a value of zero. This can be useful if for instance you want to force a rouge shutter channel to stay open. The easiest way to get to the "none" value is to shortly press or tap the encoder and use the Calculator pop-up.</p>

<p>The right most encoder is used to patch a fixture to the selected DMX address. To learn more about this and live patching please <a href="/Topic/5a19bd61-dbba-4986-bb84-c3afa8930cd1">follow this link</a>.</p>

<p>&nbsp;</p>

<p>Above the encoder readout there are several buttons. The following is a short description of each button.</p>

<p><strong>All / Patched / Unpatched:</strong></p>

<p>This button toggles between three different options: All, Patched, and Unpatched.</p>

<p>The selects what DMX address you are allowed to select and affect by the DMX tester.</p>

<p><strong>Select All:</strong></p>

<p>Tapping this button will select all the DMX addresses that you are affecting by the DMX tester.</p>

<p><strong>Release Current:</strong></p>

<p>This will release the currently selected DMX address from being affected by the DMX tester.</p>

<p><strong>Release Others:</strong></p>

<p>This will release all other DMX address but the currently selected DMX address from being affected by the DMX tester.</p>

<p><strong>Release All:</strong></p>

<p>This will release all DMX address from being affected by the DMX tester.</p>

<p><strong>Park Current:</strong></p>

<p>This can be used to park the currently selected DMX address at the current DMX value. Read more about the park function in the <a href="/Topic/c425da4c-5d2c-4361-8075-7b0718eefb23">Park Keyword</a>.</p>

<p><strong>Unpark Current:</strong></p>

<p>This can be used to unpark the currently selected DMX address. Read more about the unpark function in the <a href="/Topic/1a005fb1-2ea9-4c41-a673-4ba5b297432a">Unpark Keyword</a>.</p>

<p>&nbsp;</p>

<a name="toc_header_anchor_2" id="toc_header_anchor_2" class="topic-toc-item"></a><h2>Using the DMX tester with the command line</h2>

<p>You can also do some DMX testing from the command line.</p>

<p>To do this you need to use the <a href="/Topic/ef0143c6-9403-473e-a314-0b0f3e0f0602">DMX keyword</a>.</p>

<p>Please follow the link above to read details about the keyword.</p>

<p>&nbsp;</p>

<p>The general idea is that you type</p>

<p><span class="syntax">DMX [address (range)] At [Value (range)] </span></p>

<p>This will set the DMX address at the value.</p>

<p>To release a channel you type:</p>

<p><span class="syntax">Off DMX [address (range)]</span></p>

<p>to release a single address (range) from the DMX tester.</p>

<p><span class="syntax">Off DMX Thru</span></p>

<p>Will release all DMX addresses.</p>


				<br>
<div class="topic-navigation">

<div class="pull-right">
	<span class="pull-left">


<div class="pull-left">
<form action="/Topic/SetCurrentVersionNumber" class="form-inline" id="frmTagSelector" method="post">	<span class="form-mini">
		<div class="input-prepend"><span class="add-on">Select different version</span><select autocomplete="off" id="versionNumberId" name="versionNumberId" onchange="$(this).closest('#frmTagSelector').submit();" style="width: 120px;"><option value="">- latest -</option>
<option selected="selected" value="6">3.3</option>
<option value="14">3.4</option>
<option value="18">3.5</option>
<option value="21">3.6</option>
<option value="23">3.7</option>
<option value="27">3.8</option>
<option value="31">3.9</option>
</select></div>
		<input data-val="true" data-val-number="The field Int32 must be a number." data-val-required="The Int32 field is required." id="ProductId" name="ProductId" type="hidden" value="11">
		<input id="CurrentGuid" name="CurrentGuid" type="hidden" value="5cae836b-976d-4d14-ab2d-62342a0738b4">
	</span>
</form></div>&nbsp;	</span>
	<span class="pull-right" style="white-space: nowrap;">
			<button class="btn btn-mini" onclick="location.href='/Page/grandMA2/patch_dmx_sheet/en/3.3'; " title="Go to previous page 'DMX sheet'">
				<i class="icon-arrow-left"></i> previous
			</button>

			<button class="btn btn-mini" onclick="location.href='/Page/grandMA2/patch_dmx_parameter_list/en/3.3';" title="Go to next page 'DMX and parameter lists'">
				next <i class="icon-arrow-right"></i> 
			</button>
	</span>
</div>
	<div class="clear-fix"></div>
	<div class="pull-right">
	
			<button class="btn btn-mini" onclick="location.href='/Media/TopicPdf/30379/6';" title="Open/Save this topic as PDF document for viewing or printing">
				<img src="/Content/images/icons/filetype_pdf.png"> Open topic as PDF
			</button>
	</div>
<div class="clear-fix" style="margin-bottom: 10px"></div>
</div>

	
