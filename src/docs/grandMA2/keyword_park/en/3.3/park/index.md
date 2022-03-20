---
originalUrl: 'https://help2.malighting.com/Page/grandMA2/keyword_park/en/3.3/park'
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
		<input id="CurrentGuid" name="CurrentGuid" type="hidden" value="c425da4c-5d2c-4361-8075-7b0718eefb23">
	</span>
</form></div>&nbsp;	</span>
	<span class="pull-right" style="white-space: nowrap;">
			<button class="btn btn-mini" onclick="location.href='/Page/grandMA2/keyword_parentheses/en/3.3'; " title="Go to previous page 'Parentheses ( )'">
				<i class="icon-arrow-left"></i> previous
			</button>

			<button class="btn btn-mini" onclick="location.href='/Page/grandMA2/keyword_part/en/3.3';" title="Go to next page 'Part'">
				next <i class="icon-arrow-right"></i> 
			</button>
	</span>
</div>
<div class="clear-fix" style="margin-bottom: 10px"></div>
</div>

					<div class="infobox"><b>Hint:</b><br><b>New help version</b><br>The help version you selected belongs to an older software version. <a href="/Topic/SetCurrentVersionNumber/31/c425da4c-5d2c-4361-8075-7b0718eefb23">You may want to view the latest help version.</a></div>

			<div class="pull-right">
					<button class="btn btn-mini" style="margin-right: 10px; height: 30px;" onclick="location.href = '/Media/TopicPdf/28241/6'; " title="Open/Save this topic as PDF document for viewing or printing">
						<img src="/Content/images/icons/filetype_pdf.png" style="height: 24px;"> Open topic as PDF
					</button>
				<span class="badge badge-info">Version 3.3</span>
			</div>
		<h1><span class="highlight">Park</span> Keyword</h1>

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
							<a href="#toc_header_anchor_3">Examples</a>
						</li>
				</ul>
			</div>

		<p>To get the <span class="highlight">Park</span> keyword in the command line, press <span class="hardkey">Pause</span> <span class="hardkey">Pause</span> (= <span class="highlight">Park</span>).</p>

<p>You can also type <strong><span class="highlight">Park</span> </strong>in the command line.</p>

<a name="toc_header_anchor_1" id="toc_header_anchor_1" class="topic-toc-item"></a><h2>Description</h2>

<p>The <span class="highlight">Park</span> keyword is a function keyword to lock DMX output values of attributes. You can also lock DMX output values of a fixture selection, or group of attributes for the current selection.</p>

<p>If no value is given, the attribute is <span class="highlight">park</span>ed at current value.</p>

<div class="tip"><strong>Hint:</strong><br>
<span class="highlight">Park</span>ed DMX channels are indicated by a blue marker. For more information, see <a href="/Topic/230b73af-6f5e-42f6-b2bd-b2f07de29a70">marker colors</a>.</div>

<div class="tip"><strong>Hint:</strong><br>
To un<span class="highlight">park</span> previous <span class="highlight">park</span>ed values, use the <a href="/Topic/1a005fb1-2ea9-4c41-a673-4ba5b297432a">Un<span class="highlight">park</span> keyword</a>.</div>

<a name="toc_header_anchor_2" id="toc_header_anchor_2" class="topic-toc-item"></a><h2>Syntax</h2>

<p><span class="syntax"><strong><span class="highlight">Park</span> </strong>[Selection-list] (<strong>At </strong>[Value] )</span></p>

<p><span class="syntax"><strong><span class="highlight">Park</span> </strong>[Attribute-list] (<strong>At </strong>[Value] )</span></p>

<p><span class="syntax"><strong><span class="highlight">Park</span>&nbsp;</strong><strong>[DMX-list] (</strong><strong>At&nbsp;</strong><strong>[Value] )</strong></span></p>

<a name="toc_header_anchor_3" id="toc_header_anchor_3" class="topic-toc-item"></a><h2>Examples</h2>

<ul>
	<li>To <span class="highlight">park</span> the current values of fixture 5, type in the command line:</li>
</ul>

<div class="cl_input">[Channel]&gt; <span class="highlight">Park</span> Fixture 5</div>

<p>&nbsp;</p>

<ul>
	<li>To <span class="highlight">park</span> the pan attributes of the fixture selection, type in the command line:</li>
</ul>

<div class="cl_input">[Channel]&gt; <span class="highlight">Park</span> Attribute "pan"</div>

<p>&nbsp;</p>

<ul>
	<li>To <span class="highlight">park</span> channel 1 through 10 at 100 %, type in the command line:</li>
</ul>

<div class="cl_input">[Channel]&gt; <span class="highlight">Park</span> Channel 1 Thru 5 At 100</div>

<p>&nbsp;</p>

<ul>
	<li>To <span class="highlight">park</span> DMX channel 1.2 type in the command line:</li>
</ul>

<div class="cl_input">[Channel]&gt; <span class="highlight">Park</span> DMX 1.2</div>

<p>&nbsp;</p>


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
		<input id="CurrentGuid" name="CurrentGuid" type="hidden" value="c425da4c-5d2c-4361-8075-7b0718eefb23">
	</span>
</form></div>&nbsp;	</span>
	<span class="pull-right" style="white-space: nowrap;">
			<button class="btn btn-mini" onclick="location.href='/Page/grandMA2/keyword_parentheses/en/3.3'; " title="Go to previous page 'Parentheses ( )'">
				<i class="icon-arrow-left"></i> previous
			</button>

			<button class="btn btn-mini" onclick="location.href='/Page/grandMA2/keyword_part/en/3.3';" title="Go to next page 'Part'">
				next <i class="icon-arrow-right"></i> 
			</button>
	</span>
</div>
	<div class="clear-fix"></div>
	<div class="pull-right">
	
			<button class="btn btn-mini" onclick="location.href='/Media/TopicPdf/28241/6';" title="Open/Save this topic as PDF document for viewing or printing">
				<img src="/Content/images/icons/filetype_pdf.png"> Open topic as PDF
			</button>
	</div>
<div class="clear-fix" style="margin-bottom: 10px"></div>
</div>

	
