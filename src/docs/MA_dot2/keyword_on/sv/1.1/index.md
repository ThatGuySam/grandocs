---
originalUrl: 'https://help2.malighting.com/Page/MA_dot2/keyword_on/sv/1.1'
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
		<input id="CurrentGuid" name="CurrentGuid" type="hidden" value="d85eba0d-711b-4b27-87a5-0e1c05148074">
	</span>
</form></div>&nbsp;	</span>
	<span class="pull-right" style="white-space: nowrap;">
			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/keyword_off/sv/1.1'; " title="Go to previous page 'Off'">
				<i class="icon-arrow-left"></i> previous
			</button>

			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/keyword_outdelay/sv/1.1';" title="Go to next page 'OutDelay'">
				next <i class="icon-arrow-right"></i> 
			</button>
	</span>
</div>
<div class="clear-fix" style="margin-bottom: 10px"></div>
</div>

					<div class="infobox"><b>Hint:</b><br><b>New help version</b><br>The help version you selected belongs to an older software version. <a href="/Topic/SetCurrentVersionNumber/29/d85eba0d-711b-4b27-87a5-0e1c05148074">You may want to view the latest help version.</a></div>

			<div class="pull-right">
					<button class="btn btn-mini" style="margin-right: 10px; height: 30px;" onclick="location.href = '/Media/TopicPdf/14302/3'; " title="Open/Save this topic as PDF document for viewing or printing">
						<img src="/Content/images/icons/filetype_pdf.png" style="height: 24px;"> Open topic as PDF
					</button>
				<span class="badge badge-info">Version 1.1</span>
			</div>
		<h1>Kommandot On</h1>

			<div class="topic-table-of-contents">
				<h2>Table of contents of this topic</h2>
				<div class="topic-toc-toggler topic-toc-toggler-hide"><a href="#" onclick="$('.topic-toc-ul').toggle(); $('.topic-toc-toggler-hide').hide(); $('.topic-toc-toggler-show').show(); return false;">hide</a></div>
				<div class="topic-toc-toggler topic-toc-toggler-show" style="display: none;"><a href="#" onclick="$('.topic-toc-ul').toggle(); $('.topic-toc-toggler-hide').show(); $('.topic-toc-toggler-show').hide(); return false;">show</a></div>
				<ul class="topic-toc-ul">
						<li>
							<a href="#toc_header_anchor_1">Beskrivning</a>
						</li>
						<li>
							<a href="#toc_header_anchor_2">Syntax</a>
						</li>
						<li>
							<a href="#toc_header_anchor_3">Exempel 1</a>
						</li>
						<li>
							<a href="#toc_header_anchor_4">Exempel 2</a>
						</li>
						<li>
							<a href="#toc_header_anchor_5">Exempel 3</a>
						</li>
						<li>
							<a href="#toc_header_anchor_6">Exempel 4</a>
						</li>
						<li>
							<a href="#toc_header_anchor_7">Exempel 5</a>
						</li>
						<li>
							<a href="#toc_header_anchor_8">Relaterade Länkar</a>
						</li>
				</ul>
			</div>

		<p>Den här sidan beskriver syntaxen och användningen av kommandot On.</p>

<p>För at kalla upp kommandot, tryck på knappen&nbsp;<span class="hardkey">On</span>&nbsp;på ljusbordet.</p>

<a name="toc_header_anchor_1" id="toc_header_anchor_1" class="topic-toc-item"></a><h2>Beskrivning</h2>

<p>Med kommandot On kan du</p>

<ul>
	<li>aktivera (slå igång) en executor</li>
	<li>aktivera en executor&nbsp;på en fade-tid</li>
	<li>aktivera alla normala executors associerade med en cuelista</li>
	<li>aktivera alla värden i en fixtur&nbsp;i programmeraren</li>
	<li>aktivera alla värden i en viss preset-typ för de valda fixturerna i programmeraren</li>
</ul>

<a name="toc_header_anchor_2" id="toc_header_anchor_2" class="topic-toc-item"></a><h2>Syntax</h2>

<p>1. Aktivera en executor.</p>

<div class="cl_input">On</div>

<p>2. Aktivera en executor med fade-tid.</p>

<div class="cl_input">On Executor 1 Fade 2</div>

<p>3. Aktivera alla normala executors med en cuelista.</p>

<div class="cl_input">On Thru</div>

<p>4. Aktivera alla värden på alla parametrar för en fixtur i programmeraren.</p>

<div class="cl_input">On Fixture 1</div>

<p>5. Aktivera alla värden från en preset-typ i de valda fixturerna i programmeraren.</p>

<div class="cl_input">On PresetType 1</div>

<a name="toc_header_anchor_3" id="toc_header_anchor_3" class="topic-toc-item"></a><h2>Exempel 1</h2>

<p>Låt säga att du vill aktivera (slå igång) executor 1.</p>

<p>Det finns tre sätt att göra detta:</p>

<p>a) Tryck&nbsp;<span class="hardkey">On</span>, och sedan på respektive executor-knapp&nbsp;<span class="hardkey"><img alt="go" src="/Media/Mlg/go_1.png"></span>.</p>

<p>b) Tryck&nbsp;<span class="hardkey">On</span> <span class="hardkey">Exec</span> <span class="hardkey">1</span> <span class="hardkey">Please</span>.</p>

<p>c) Tryck&nbsp;<span class="hardkey">On</span>, och sedan på respektive executor i&nbsp;<a href="/Topic/d8ca000e-cf13-448d-ac3e-129272e731d8">executor-rads vyn</a>.</p>

<p>Executor 1 är aktiv.</p>

<a name="toc_header_anchor_4" id="toc_header_anchor_4" class="topic-toc-item"></a><h2>Exempel 2</h2>

<p>Låt säga att du vill aktivera executor 1 med en fadetid&nbsp;på 2 sekunder.</p>

<p>Tryck&nbsp;<span class="hardkey">On</span> <span class="hardkey">Exec</span> <span class="hardkey">1</span> <span class="hardkey">Time</span> (=Fade) <span class="hardkey">2</span> <span class="hardkey">Please</span>.</p>

<p>Executor 1 aktiveras med en fadetid på 2 sekunder.&nbsp;</p>

<a name="toc_header_anchor_5" id="toc_header_anchor_5" class="topic-toc-item"></a><h2>Exempel 3</h2>

<p>Anta att du vill aktivera alla normala executors med en cuelista, på den nuvarande sidan.</p>

<p>Tryck&nbsp;<span class="hardkey">On</span> <span class="hardkey">Thru</span> <span class="hardkey">Please</span>.</p>

<p>Alla normala executors, innehållandes en cuelista, är aktiverade.</p>

<a name="toc_header_anchor_6" id="toc_header_anchor_6" class="topic-toc-item"></a><h2>Exempel 4</h2>

<p>Låt säga att du vill aktivera alla värden i fixtur&nbsp;1 till 10 i programmeraren.&nbsp;</p>

<p>Det finns två sätt att göra detta.</p>

<p>a) Tryck&nbsp;<span class="hardkey">On</span> <span class="hardkey">Fixture</span> <span class="hardkey">1</span> <span class="hardkey">Thru</span> <span class="hardkey">10</span> <span class="hardkey">Please</span>.</p>

<p>b) Välj fixtur 1 till 10 i fixturvyn och tryck två gånger på&nbsp;<span class="hardkey">Please</span>.</p>

<p>Alla värden i fixtur 1 till 10 är aktiva i programmeraren.</p>

<a name="toc_header_anchor_7" id="toc_header_anchor_7" class="topic-toc-item"></a><h2>Exempel 5</h2>

<p>Låt säga att du vill aktivera alla dimmervärden för de valda fixturerna i programmeraren.</p>

<p>Det finns tre sätt att göra det på.</p>

<p>a) Tryck&nbsp;<span class="hardkey">On</span>&nbsp; <span class="hardkey"><img alt="MA" src="/Media/Mlg/ma.png"></span> + <span class="hardkey">Preset</span> (= PresetType) <span class="hardkey">1</span> <span class="hardkey">Please</span>.</p>

<p>b) Tryck&nbsp;<span class="hardkey">On</span>&nbsp; <span class="hardkey"><img alt="MA" src="/Media/Mlg/ma.png"></span> + <span class="hardkey">Preset</span> (= PresetType) <span class="syntax">Dimmer</span> <span class="hardkey">Please</span>.</p>

<p>c) Dubbeltryck på &nbsp;<span class="softkey">Dimmer</span>&nbsp;i&nbsp;<a href="/Topic/60e350ef-d825-4072-a644-ed2430d82522">preset-typ raden</a>.</p>

<p>Dimmervärdena&nbsp;i de valda fixturerna är nu aktiva i programmeraren.</p>

<a name="toc_header_anchor_8" id="toc_header_anchor_8" class="topic-toc-item"></a><h2>Relaterade Länkar</h2>

<ul>
	<li><a href="/Topic/959124b6-21e1-4fce-8b54-921cd18f232a">Knappen On</a></li>
	<li><a href="/Topic/d8ca000e-cf13-448d-ac3e-129272e731d8">Executor-rad vyn</a></li>
	<li><a href="/Topic/b22280c5-a31f-40a8-8e8d-fe1e91df2214">Knappen Please</a></li>
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
		<input id="CurrentGuid" name="CurrentGuid" type="hidden" value="d85eba0d-711b-4b27-87a5-0e1c05148074">
	</span>
</form></div>&nbsp;	</span>
	<span class="pull-right" style="white-space: nowrap;">
			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/keyword_off/sv/1.1'; " title="Go to previous page 'Off'">
				<i class="icon-arrow-left"></i> previous
			</button>

			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/keyword_outdelay/sv/1.1';" title="Go to next page 'OutDelay'">
				next <i class="icon-arrow-right"></i> 
			</button>
	</span>
</div>
	<div class="clear-fix"></div>
	<div class="pull-right">
	
			<button class="btn btn-mini" onclick="location.href='/Media/TopicPdf/14302/3';" title="Open/Save this topic as PDF document for viewing or printing">
				<img src="/Content/images/icons/filetype_pdf.png"> Open topic as PDF
			</button>
	</div>
<div class="clear-fix" style="margin-bottom: 10px"></div>
</div>

	
