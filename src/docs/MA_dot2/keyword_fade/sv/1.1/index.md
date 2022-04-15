---
originalUrl: 'https://help2.malighting.com/Page/MA_dot2/keyword_fade/sv/1.1'
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
		<input id="CurrentGuid" name="CurrentGuid" type="hidden" value="96b21ed2-804c-42e6-9765-5f101405945d">
	</span>
</form></div>&nbsp;	</span>
	<span class="pull-right" style="white-space: nowrap;">
			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/keyword_executor/sv/1.1'; " title="Go to previous page 'Executor'">
				<i class="icon-arrow-left"></i> previous
			</button>

			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/keyword_fix/sv/1.1';" title="Go to next page 'Fix'">
				next <i class="icon-arrow-right"></i> 
			</button>
	</span>
</div>
<div class="clear-fix" style="margin-bottom: 10px"></div>
</div>

					<div class="infobox"><b>Hint:</b><br><b>New help version</b><br>The help version you selected belongs to an older software version. <a href="/Topic/SetCurrentVersionNumber/29/96b21ed2-804c-42e6-9765-5f101405945d">You may want to view the latest help version.</a></div>

			<div class="pull-right">
					<button class="btn btn-mini" style="margin-right: 10px; height: 30px;" onclick="location.href = '/Media/TopicPdf/14071/3'; " title="Open/Save this topic as PDF document for viewing or printing">
						<img src="/Content/images/icons/filetype_pdf.png" style="height: 24px;"> Open topic as PDF
					</button>
				<span class="badge badge-info">Version 1.1</span>
			</div>
		<h1>Kommandot Fade</h1>

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
							<a href="#toc_header_anchor_6">Relaterade Länkar</a>
						</li>
				</ul>
			</div>

		<p>Den här sidan beskriver syntaxen och användningen av kommandot&nbsp;Fade.</p>

<p>För att&nbsp;kalla upp&nbsp;kommandot fade är det nödvändigt att trycka på en annan funktionsknapp före<br>
t.ex <span class="hardkey">Store</span> <span class="hardkey">Time</span>&nbsp;(=Fade).</p>

<a name="toc_header_anchor_1" id="toc_header_anchor_1" class="topic-toc-item"></a><h2>Beskrivning</h2>

<p>Med kommandot Fade kan du sätta fadetider</p>

<ul>
	<li>för att gå till en cue med en fadetid</li>
	<li>för nyskapade cuer</li>
	<li>i redan existerande cuer</li>
</ul>

<a name="toc_header_anchor_2" id="toc_header_anchor_2" class="topic-toc-item"></a><h2>Syntax</h2>

<p>1. Gå till cue 2 med en fade på 3 sekunder.</p>

<div class="cl_input">Goto Cue 2 Fade 3</div>

<p>2. Skapa en ny cue 1 med en fadetid på 3 sekunder.</p>

<div class="cl_input">Store Cue 1 Fade 3</div>

<p>3. Ange en fadetid på 3 sekunder i den redan existerade cuen 1 i executor 1.</p>

<div class="cl_input">Assign Fade 3 Cue 1 Executor 1</div>

<a name="toc_header_anchor_3" id="toc_header_anchor_3" class="topic-toc-item"></a><h2>Exempel 1</h2>

<p>Låt säga att du vill gå till cue 2 på executor 1 med en fadetid på 3 sekunder.</p>

<p>Tryck&nbsp;<span class="hardkey">Goto</span> <span class="hardkey">Cue</span> <span class="hardkey">2</span> <span class="hardkey">Exec</span> <span class="hardkey">1</span> <span class="hardkey">Time</span> (=Fade) <span class="hardkey">3</span> <span class="hardkey">Please</span>.</p>

<p>Ljusbordet går till cue 2 i executor&nbsp;1 på 3 sekunder.</p>

<a name="toc_header_anchor_4" id="toc_header_anchor_4" class="topic-toc-item"></a><h2>Exempel 2</h2>

<p>Du vill spara en ny cue 1 med en fadetid på 3 sekunder på huvud-executorn.</p>

<p>Tryck&nbsp;<span class="hardkey">Store</span> <span class="hardkey">1</span>&nbsp; (= Cue 1) <span class="hardkey">Time</span> (=Fade) <span class="hardkey">3</span> <span class="hardkey">Please</span>.</p>

<p>Cue 1 sparas med en fadetid på 3 sek i huvud-executorn.</p>

<a name="toc_header_anchor_5" id="toc_header_anchor_5" class="topic-toc-item"></a><h2>Exempel 3</h2>

<p>Låt säga att du vill sätta en fadetid på 5 sekunder på cue 3 i executor 1.</p>

<p>Tryck&nbsp;<span class="hardkey"><img alt="MA" src="/Media/Mlg/ma.png"></span> + <span class="hardkey">Label</span> (=Assign) <span class="hardkey">Time</span> (=Fade) <span class="hardkey">5</span> <span class="hardkey">Cue</span> <span class="hardkey">3</span> <span class="hardkey">Exec</span> <span class="hardkey">1</span> <span class="hardkey">Please</span>.</p>

<div class="tip">Dubbelkolla tiderna i&nbsp;<a href="/Topic/b8ab1bbb-182d-41d6-9a1e-52f5267922c7">Cue-Vyn</a>.</div>

<a name="toc_header_anchor_6" id="toc_header_anchor_6" class="topic-toc-item"></a><h2>Relaterade Länkar</h2>

<ul>
	<li><a href="/Topic/fc47e5b3-2597-4b3f-ad85-c1690440e399">Knappen Time</a></li>
	<li><a href="/Topic/b8ab1bbb-182d-41d6-9a1e-52f5267922c7">Cue-Vyn</a></li>
	<li><a href="/Topic/97af99ef-e454-442e-9abc-5b71bf8cc974">Kommandot Store</a></li>
	<li><a href="/Topic/ec08034c-3e2a-47b3-a353-50b018990c44">Kommandot Assign</a></li>
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
		<input id="CurrentGuid" name="CurrentGuid" type="hidden" value="96b21ed2-804c-42e6-9765-5f101405945d">
	</span>
</form></div>&nbsp;	</span>
	<span class="pull-right" style="white-space: nowrap;">
			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/keyword_executor/sv/1.1'; " title="Go to previous page 'Executor'">
				<i class="icon-arrow-left"></i> previous
			</button>

			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/keyword_fix/sv/1.1';" title="Go to next page 'Fix'">
				next <i class="icon-arrow-right"></i> 
			</button>
	</span>
</div>
	<div class="clear-fix"></div>
	<div class="pull-right">
	
			<button class="btn btn-mini" onclick="location.href='/Media/TopicPdf/14071/3';" title="Open/Save this topic as PDF document for viewing or printing">
				<img src="/Content/images/icons/filetype_pdf.png"> Open topic as PDF
			</button>
	</div>
<div class="clear-fix" style="margin-bottom: 10px"></div>
</div>

	
