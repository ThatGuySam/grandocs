---
originalUrl: 'https://help2.malighting.com/Page/grandMA2/networking_dmx_output/en/3.9'
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
		<input id="CurrentGuid" name="CurrentGuid" type="hidden" value="74e69deb-b43d-470d-98ff-153b1fe09544">
	</span>
</form></div>&nbsp;	</span>
	<span class="pull-right" style="white-space: nowrap;">
			<button class="btn btn-mini" onclick="location.href='/Page/grandMA2/network_dmx_protocols/en/3.9'; " title="Go to previous page 'Network DMX protocols'">
				<i class="icon-arrow-left"></i> previous
			</button>

			<button class="btn btn-mini" onclick="location.href='/Page/grandMA2/network_citp/en/3.9';" title="Go to next page 'Using CITP'">
				next <i class="icon-arrow-right"></i> 
			</button>
	</span>
</div>
<div class="clear-fix" style="margin-bottom: 10px"></div>
</div>

		
			<div class="pull-right">
					<button class="btn btn-mini" style="margin-right: 10px; height: 30px;" onclick="location.href = '/Media/TopicPdf/54831/31'; " title="Open/Save this topic as PDF document for viewing or printing">
						<img src="/Content/images/icons/filetype_pdf.png" style="height: 24px;"> Open topic as PDF
					</button>
				<span class="badge badge-info">Version 3.9</span>
			</div>
		<h1>What affects my DMX output?</h1>

			<div class="topic-table-of-contents">
				<h2>Table of contents of this topic</h2>
				<div class="topic-toc-toggler topic-toc-toggler-hide"><a href="#" onclick="$('.topic-toc-ul').toggle(); $('.topic-toc-toggler-hide').hide(); $('.topic-toc-toggler-show').show(); return false;">hide</a></div>
				<div class="topic-toc-toggler topic-toc-toggler-show" style="display: none;"><a href="#" onclick="$('.topic-toc-ul').toggle(); $('.topic-toc-toggler-hide').show(); $('.topic-toc-toggler-show').hide(); return false;">show</a></div>
				<ul class="topic-toc-ul">
						<li>
							<a href="#toc_header_anchor_1">The following affects the DMX output:</a>
								<ul>
										<li><a href="#toc_header_anchor_2">What happens to the fixtures?</a></li>
										<li><a href="#toc_header_anchor_3">What is a DMX hold?</a></li>
										<li><a href="#toc_header_anchor_4">How does the output behave in case of a single console?</a></li>
										<li><a href="#toc_header_anchor_5">How do I create backup?</a></li>
								</ul>
						</li>
				</ul>
			</div>

		<a name="toc_header_anchor_1" id="toc_header_anchor_1" class="topic-toc-item"></a><h2>The following affects the DMX output:</h2>

<ul>
	<li>A crash or a failure – this discontinues&nbsp;DMX output.</li>
	<li>Show upload – this&nbsp;stops&nbsp;DMX&nbsp;output.</li>
	<li>Changing the value of a fixture <strong>– </strong>this&nbsp;changes the DMX&nbsp;output.</li>
</ul>

<div class="important"><strong>Important:</strong><br>
In case of a failure or crash, the DMX&nbsp;lines should go off. This is called High-Z.&nbsp;</div>

<a name="toc_header_anchor_2" id="toc_header_anchor_2" class="topic-toc-item"></a><h3>What happens to the fixtures?</h3>

<p>Fixtures have a function called the DMX hold.</p>

<a name="toc_header_anchor_3" id="toc_header_anchor_3" class="topic-toc-item"></a><h3>What is a DMX hold?</h3>

<p>The end-device physically emits the latest value, e.g., the fixture is on or off.</p>

<div class="important"><strong>Note:&nbsp;</strong><br>
DMX hold&nbsp;is the function of the end-device only, e.g., a fixture.</div>

<p>How do I set the DMX hold on my end-device?&nbsp;</p>

<ul>
	<li>Set it either individually on your end-device <strong>–</strong>&nbsp;on or off.</li>
	<li>The end-device goes back to default automatically&nbsp;<strong>–&nbsp;</strong>off.</li>
	<li>If you have two individual inputs in your end-device, the DMX input automatically chooses the second input in case of a crash or failure.&nbsp;</li>
</ul>

<div class="tip"><strong>Note:</strong><br>
If your end-device does not support the feature DMX hold, add a DMX booster or splitter featuring DMX hold.</div>

<a name="toc_header_anchor_4" id="toc_header_anchor_4" class="topic-toc-item"></a><h3>How does the output behave in case of a single console?</h3>

<p>If a problem occurs, the console´s DMX outputs should go High-Z.&nbsp;</p>

<a name="toc_header_anchor_5" id="toc_header_anchor_5" class="topic-toc-item"></a><h3>How do I create backup?</h3>

<p>With the&nbsp;grandMA2 system you have a seamless switch between the transmitting console (master) and the back-up console (connected) in case of a failure or crash.&nbsp;</p>

<p>Here are three examples on how to create backup:</p>

<ul>
	<li>Use the grandMA2 console as master and the grandaMA2 onPC&nbsp;software version as connected, and DMX nodes for emission of the signal.&nbsp;</li>
	<li>Use the grandMA2 console as master with a second grandMA2 console as connected, and DMX nodes for emission of the signal.&nbsp;</li>
	<li>Use the grandMA2 replay unit (RPU) as master together with the grandMA2 onPC software as connected, and DMX nodes for emission of the signal.&nbsp;</li>
</ul>


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
		<input id="CurrentGuid" name="CurrentGuid" type="hidden" value="74e69deb-b43d-470d-98ff-153b1fe09544">
	</span>
</form></div>&nbsp;	</span>
	<span class="pull-right" style="white-space: nowrap;">
			<button class="btn btn-mini" onclick="location.href='/Page/grandMA2/network_dmx_protocols/en/3.9'; " title="Go to previous page 'Network DMX protocols'">
				<i class="icon-arrow-left"></i> previous
			</button>

			<button class="btn btn-mini" onclick="location.href='/Page/grandMA2/network_citp/en/3.9';" title="Go to next page 'Using CITP'">
				next <i class="icon-arrow-right"></i> 
			</button>
	</span>
</div>
	<div class="clear-fix"></div>
	<div class="pull-right">
	
			<button class="btn btn-mini" onclick="location.href='/Media/TopicPdf/54831/31';" title="Open/Save this topic as PDF document for viewing or printing">
				<img src="/Content/images/icons/filetype_pdf.png"> Open topic as PDF
			</button>
	</div>
<div class="clear-fix" style="margin-bottom: 10px"></div>
</div>

	
