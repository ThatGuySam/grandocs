---
originalUrl: 'https://help2.malighting.com/Page/MA_dot2/keyword_black/en/1.1'
---

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
		<input id="CurrentGuid" name="CurrentGuid" type="hidden" value="d7300762-91b3-4980-8e94-2603fa3f36f6">
	</span>
</form></div>&nbsp;	</span>
	<span class="pull-right" style="white-space: nowrap;">
			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/keyword_at/en/1.1'; " title="Go to previous page 'At'">
				<i class="icon-arrow-left"></i> previous
			</button>

			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/keyword_blind/en/1.1';" title="Go to next page 'Blind'">
				next <i class="icon-arrow-right"></i> 
			</button>
	</span>
</div>
<div class="clear-fix" style="margin-bottom: 10px"></div>
</div>

					<div class="infobox"><b>Hint:</b><br><b>New help version</b><br>The help version you selected belongs to an older software version. <a href="/Topic/SetCurrentVersionNumber/29/d7300762-91b3-4980-8e94-2603fa3f36f6">You may want to view the latest help version.</a></div>

			<div class="pull-right">
					<button class="btn btn-mini" style="margin-right: 10px; height: 30px;" onclick="location.href = '/Media/TopicPdf/3115/3'; " title="Open/Save this topic as PDF document for viewing or printing">
						<img src="/Content/images/icons/filetype_pdf.png" style="height: 24px;"> Open topic as PDF
					</button>
				<span class="badge badge-info">Version 1.1</span>
			</div>
		<h1>Black Command</h1>

			<div class="topic-table-of-contents">
				<h2>Table of contents of this topic</h2>
				<div class="topic-toc-toggler topic-toc-toggler-hide"><a href="#" onclick="$('.topic-toc-ul').toggle(); $('.topic-toc-toggler-hide').hide(); $('.topic-toc-toggler-show').show(); return false;">hide</a></div>
				<div class="topic-toc-toggler topic-toc-toggler-show" style="display: none;"><a href="#" onclick="$('.topic-toc-ul').toggle(); $('.topic-toc-toggler-hide').show(); $('.topic-toc-toggler-show').hide(); return false;">show</a></div>
				<ul class="topic-toc-ul">
						<li>
							<a href="#toc_header_anchor_1">Description</a>
						</li>
						<li>
							<a href="#toc_header_anchor_2">Syntax</a>
						</li>
						<li>
							<a href="#toc_header_anchor_3">Example 1</a>
						</li>
						<li>
							<a href="#toc_header_anchor_4">Example 2</a>
						</li>
				</ul>
			</div>

		<p>This page describes the syntax and how to use the<strong> Black </strong>command.</p>

<p>To go to the <strong>Black </strong>command press and hold the <span class="hardkey"><img alt="ma" src="/Media/Mlg/ma.png"></span> key and the <span class="hardkey">&lt;&lt;&lt;</span> <a href="/Topic/2798bfde-65ed-4e26-892d-b5d10c51b364">[GoFastBack] key</a> on the console.</p>

<a name="toc_header_anchor_1" id="toc_header_anchor_1" class="topic-toc-item"></a><h2>Description</h2>

<p>With the black command you set the dimmer attribute of an executor to 0 %</p>

<ul>
	<li>temporary, as long as you press and hold the executor</li>
	<li>with a command</li>
</ul>

<a name="toc_header_anchor_2" id="toc_header_anchor_2" class="topic-toc-item"></a><h2>Syntax</h2>

<p>To set the dimmer attribute of an executor to 0 %.</p>

<div class="cl_input">Black</div>

<a name="toc_header_anchor_3" id="toc_header_anchor_3" class="topic-toc-item"></a><h2>Example 1</h2>

<p>Let´s assume you will temporary set the dimmer attribute of executor 3 to 0 % as long as you press and hold the executor.</p>

<p>Press and hold <span class="hardkey"><img alt="ma" src="/Media/Mlg/ma.png"></span> and <span class="hardkey">&lt;&lt;&lt;</span> [GoFastBack] (=Black) and press and hold the respective executor button <span class="hardkey"><img alt="go" src="/Media/Mlg/go_1.png"></span>.</p>

<p>As long as you hold the executor button, the black command will be executed.</p>

<p>As soon as you leave the executor button, the executor is back in its normal status.</p>

<a name="toc_header_anchor_4" id="toc_header_anchor_4" class="topic-toc-item"></a><h2>Example 2</h2>

<p>Let´s assume you will set the dimmer attributes of executor 3 to 0 %, by a command.</p>

<p>Press and hold <span class="hardkey"><img alt="ma" src="/Media/Mlg/ma.png"></span> and <span class="hardkey">&lt;&lt;&lt;</span> [GoFastBack] (=Black) <span class="hardkey">Exec</span> <span class="hardkey">3</span> <span class="hardkey">Please</span>.</p>

<p>The dimmer values are set to 0 %.</p>

<p>To bring a button executor back in its normal status, press the button executor twice.<br>
To bring a fader executor back in its normal status, move the fader to 0 % and up again.</p>

<a name="toc_header_anchor_5" id="toc_header_anchor_5" class="topic-toc-item"></a><h2>Related Links</h2>

<ul>
	<li><a href="/Topic/204e781e-986f-4c9a-8af9-0022186dc7aa">MA Key</a></li>
	<li><a href="/Topic/2798bfde-65ed-4e26-892d-b5d10c51b364">&lt;&lt;&lt; [GoFastBack] Key</a></li>
	<li><a href="/Topic/f613ca45-9cb0-43e7-bb0d-d75fdc5b0d39">Change Functions of Executor Buttons</a></li>
	<li><a href="/Topic/7cf5839e-a357-48d3-b077-bf7f682606db">Select Functions of Executor Buttons</a></li>
</ul>


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
		<input id="CurrentGuid" name="CurrentGuid" type="hidden" value="d7300762-91b3-4980-8e94-2603fa3f36f6">
	</span>
</form></div>&nbsp;	</span>
	<span class="pull-right" style="white-space: nowrap;">
			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/keyword_at/en/1.1'; " title="Go to previous page 'At'">
				<i class="icon-arrow-left"></i> previous
			</button>

			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/keyword_blind/en/1.1';" title="Go to next page 'Blind'">
				next <i class="icon-arrow-right"></i> 
			</button>
	</span>
</div>
	<div class="clear-fix"></div>
	<div class="pull-right">
	
			<button class="btn btn-mini" onclick="location.href='/Media/TopicPdf/3115/3';" title="Open/Save this topic as PDF document for viewing or printing">
				<img src="/Content/images/icons/filetype_pdf.png"> Open topic as PDF
			</button>
	</div>
<div class="clear-fix" style="margin-bottom: 10px"></div>
</div>

	
