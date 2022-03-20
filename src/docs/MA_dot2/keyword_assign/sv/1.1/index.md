---
originalUrl: 'https://help2.malighting.com/Page/MA_dot2/keyword_assign/sv/1.1'
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
		<input id="CurrentGuid" name="CurrentGuid" type="hidden" value="ec08034c-3e2a-47b3-a353-50b018990c44">
	</span>
</form></div>&nbsp;	</span>
	<span class="pull-right" style="white-space: nowrap;">
			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/keyword_plus/sv/1.1'; " title="Go to previous page '+ [Plus]'">
				<i class="icon-arrow-left"></i> previous
			</button>

			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/keyword_at/sv/1.1';" title="Go to next page 'At'">
				next <i class="icon-arrow-right"></i> 
			</button>
	</span>
</div>
<div class="clear-fix" style="margin-bottom: 10px"></div>
</div>

					<div class="infobox"><b>Hint:</b><br><b>New help version</b><br>The help version you selected belongs to an older software version. <a href="/Topic/SetCurrentVersionNumber/29/ec08034c-3e2a-47b3-a353-50b018990c44">You may want to view the latest help version.</a></div>

			<div class="pull-right">
					<button class="btn btn-mini" style="margin-right: 10px; height: 30px;" onclick="location.href = '/Media/TopicPdf/15141/3'; " title="Open/Save this topic as PDF document for viewing or printing">
						<img src="/Content/images/icons/filetype_pdf.png" style="height: 24px;"> Open topic as PDF
					</button>
				<span class="badge badge-info">Version 1.1</span>
			</div>
		<h1>Assign Command</h1>

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
							<a href="#toc_header_anchor_7">Relaterade Länkar</a>
						</li>
				</ul>
			</div>

		<p>Den här sidan beskriver syntaxen och användningen av kommandot&nbsp;Assign.</p>

<p>För att kalla upp kommandot Assign, tryck och håll ned&nbsp;<span class="hardkey"><img alt="ma" src="/Media/Mlg/ma.png"></span>&nbsp;-knappen och tryck sedan på knappen&nbsp;<span class="hardkey">Label</span> på ljusbordet.<br>
Assign syns nu i&nbsp;<a href="/Topic/330c5d26-3bcd-4d9c-a448-d89cc7a6d5f1">kommandoraden</a>.</p>

<div class="cl_input">Assign</div>

<a name="toc_header_anchor_1" id="toc_header_anchor_1" class="topic-toc-item"></a><h2>Beskrivning</h2>

<p>Med kommandot Assign kan du skapa kopplingar mellan</p>

<ul>
	<li>en fixtur och en DMX-adress</li>
	<li>en funktion och en executor-knapp</li>
	<li>en fadetid och en cue i en executor</li>
</ul>

<a name="toc_header_anchor_2" id="toc_header_anchor_2" class="topic-toc-item"></a><h2>Syntax</h2>

<p>1. Koppla en fixtur till en DMX-adress.</p>

<div class="cl_input">Assign Fixture 21 DMX 2.1</div>

<p>2. Koppla en funktion till en executor-knapp.</p>

<div class="cl_input">Assign Flash</div>

<p>3. Koppla en fadetid till en cue i en executor.</p>

<div class="cl_input">Assign Fade 10 Cue 2 Exec 1</div>

<p>4. Koppla en fadetid till den nu aktiva cuen i huvud-executorn.</p>

<div class="cl_input">Assign Fade 10</div>

<a name="toc_header_anchor_3" id="toc_header_anchor_3" class="topic-toc-item"></a><h2>Exempel 1</h2>

<p>Låt säga att du vill patcha&nbsp;fixturen med ID 21 till DMX-adress 2.1.</p>

<p>Tryck&nbsp;<span class="hardkey"><img alt="ma" src="/Media/Mlg/ma.png"></span> + <span class="hardkey">Label</span> (=Assign) <span class="hardkey">Fixture</span> <span class="hardkey">2</span> <span class="hardkey">1</span> <span class="hardkey">DMX</span> <span class="hardkey">2</span> <span class="hardkey">.</span> <span class="hardkey">1</span> <span class="hardkey">Please</span>.</p>

<p>Fixturen med ID 21 är nu patchad till DMX-adress 2.1.</p>

<div class="tip">Dubbekolla den korrekta patchen i <a href="/Topic/272be3c8-e297-4e8a-902a-01916763f043">Patch- och fixturtabellen</a>.</div>

<a name="toc_header_anchor_4" id="toc_header_anchor_4" class="topic-toc-item"></a><h2>Exempel 2</h2>

<p>Låt säga att du vill koppla en funktion till en executorknapp.</p>

<p>Tryck&nbsp;<span class="hardkey"><img alt="ma" src="/Media/Mlg/ma.png"></span> + <span class="hardkey">Label</span>&nbsp;(=Assign) <span class="hardkey">Flash</span> och sedan respektive executorknapp, t.ex&nbsp;<span class="hardkey"><img alt="go" src="/Media/Mlg/go_1.png"></span>.</p>

<p>Funktionen flash är nu kopplad till den executorknappen.</p>

<div class="tip">Dubbelkolla den inställda funktionen i&nbsp;<a href="/Topic/f613ca45-9cb0-43e7-bb0d-d75fdc5b0d39">Vyn "Ändra funktion för executor"</a>.</div>

<a name="toc_header_anchor_5" id="toc_header_anchor_5" class="topic-toc-item"></a><h2>Exempel 3</h2>

<p>Låt säga att du vill sätta en fadetid på 10sek i cue 1 under executor 5.</p>

<p>Tryck&nbsp;<span class="hardkey"><img alt="ma" src="/Media/Mlg/ma.png"></span> + <span class="hardkey">Label</span> (=Assign) <span class="hardkey">Time</span> (=Fade) <span class="hardkey">1</span> <span class="hardkey">0</span> <span class="hardkey">Cue</span> <span class="hardkey">1</span> <span class="hardkey">Exec</span> <span class="hardkey">5</span> <span class="hardkey">Please</span>.</p>

<p>Fade tiden 10sek är nu satt på cue 1 i executor 5.</p>

<div class="tip">Dubbelkolla fadetiderna i respektive&nbsp;<a href="/Topic/b8ab1bbb-182d-41d6-9a1e-52f5267922c7">Cue-vy</a>.</div>

<a name="toc_header_anchor_6" id="toc_header_anchor_6" class="topic-toc-item"></a><h2>Exempel 4</h2>

<p>Låt säga att du vill sätta en fadetide på 5 sekunder på den nuvarande cuen i huvudexecutorn.</p>

<div class="important">Försäkra dig om att den nuvarande cuen körs.<br>
Om huvud-executorn är av så kommer fadetiden sättas på alla cuer i huvud-cuelistan.</div>

<p>Tryck&nbsp;<span class="hardkey"><img alt="ma" src="/Media/Mlg/ma.png"></span> + <span class="hardkey">Label</span> (=Assign) <span class="hardkey">Time</span> (=Fade) <span class="hardkey">5</span> <span class="hardkey">Please</span>.</p>

<p>Fadetiden 5 sekunder är nu satt på den nuvarande cuen i huvud-executorn.</p>

<a name="toc_header_anchor_7" id="toc_header_anchor_7" class="topic-toc-item"></a><h2>Relaterade Länkar</h2>

<ul>
	<li><a href="/Topic/6bc37c47-2874-4a54-9cfa-b6f825b40b69">Knappen Label</a></li>
	<li><a href="/Topic/96b21ed2-804c-42e6-9765-5f101405945d">Kommandot Fade</a></li>
	<li><a href="/Topic/fc47e5b3-2597-4b3f-ad85-c1690440e399">Knappen Time</a></li>
	<li><a href="/Topic/272be3c8-e297-4e8a-902a-01916763f043">Patch- and Fixturtabellen</a></li>
	<li><a href="/Topic/f613ca45-9cb0-43e7-bb0d-d75fdc5b0d39">Vyn "Ändra funktion på executor"</a></li>
	<li><a href="/Topic/b8ab1bbb-182d-41d6-9a1e-52f5267922c7">Cue-vyn</a></li>
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
		<input id="CurrentGuid" name="CurrentGuid" type="hidden" value="ec08034c-3e2a-47b3-a353-50b018990c44">
	</span>
</form></div>&nbsp;	</span>
	<span class="pull-right" style="white-space: nowrap;">
			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/keyword_plus/sv/1.1'; " title="Go to previous page '+ [Plus]'">
				<i class="icon-arrow-left"></i> previous
			</button>

			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/keyword_at/sv/1.1';" title="Go to next page 'At'">
				next <i class="icon-arrow-right"></i> 
			</button>
	</span>
</div>
	<div class="clear-fix"></div>
	<div class="pull-right">
	
			<button class="btn btn-mini" onclick="location.href='/Media/TopicPdf/15141/3';" title="Open/Save this topic as PDF document for viewing or printing">
				<img src="/Content/images/icons/filetype_pdf.png"> Open topic as PDF
			</button>
	</div>
<div class="clear-fix" style="margin-bottom: 10px"></div>
</div>

	
