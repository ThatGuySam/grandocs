---
originalUrl: 'https://help2.malighting.com/Page/MA_dot2/WI_Presets/sv/1.2'
---

<div class="topic-navigation">

<div class="pull-right">
	<span class="pull-left">


<div class="pull-left">
<form action="/Topic/SetCurrentVersionNumber" class="form-inline" id="frmTagSelector" method="post">	<span class="form-mini">
		<div class="input-prepend"><span class="add-on">Select different version</span><select autocomplete="off" id="versionNumberId" name="versionNumberId" onchange="$(this).closest('#frmTagSelector').submit();" style="width: 120px;"><option value="">- latest -</option>
<option value="3">1.1</option>
<option selected="selected" value="7">1.2</option>
<option value="12">1.3</option>
<option value="16">1.5</option>
<option value="29">1.9</option>
</select></div>
		<input data-val="true" data-val-number="The field Int32 must be a number." data-val-required="The Int32 field is required." id="ProductId" name="ProductId" type="hidden" value="7">
		<input id="CurrentGuid" name="CurrentGuid" type="hidden" value="740955a8-3b27-4e50-b35c-7a728c1d9c38">
	</span>
</form></div>&nbsp;	</span>
	<span class="pull-right" style="white-space: nowrap;">
			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/WI_Groups/sv/1.2'; " title="Go to previous page 'Groups'">
				<i class="icon-arrow-left"></i> previous
			</button>

			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/WI_Tracking/sv/1.2';" title="Go to next page 'Tracking'">
				next <i class="icon-arrow-right"></i> 
			</button>
	</span>
</div>
<div class="clear-fix" style="margin-bottom: 10px"></div>
</div>

					<div class="infobox"><b>Hint:</b><br><b>New help version</b><br>The help version you selected belongs to an older software version. <a href="/Topic/SetCurrentVersionNumber/29/740955a8-3b27-4e50-b35c-7a728c1d9c38">You may want to view the latest help version.</a></div>

			<div class="pull-right">
					<button class="btn btn-mini" style="margin-right: 10px; height: 30px;" onclick="location.href = '/Media/TopicPdf/15305/7'; " title="Open/Save this topic as PDF document for viewing or printing">
						<img src="/Content/images/icons/filetype_pdf.png" style="height: 24px;"> Open topic as PDF
					</button>
				<span class="badge badge-info">Version 1.2</span>
			</div>
		<h1>Vad är Presets?</h1>

			<div class="topic-table-of-contents">
				<h2>Table of contents of this topic</h2>
				<div class="topic-toc-toggler topic-toc-toggler-hide"><a href="#" onclick="$('.topic-toc-ul').toggle(); $('.topic-toc-toggler-hide').hide(); $('.topic-toc-toggler-show').show(); return false;">hide</a></div>
				<div class="topic-toc-toggler topic-toc-toggler-show" style="display: none;"><a href="#" onclick="$('.topic-toc-ul').toggle(); $('.topic-toc-toggler-hide').show(); $('.topic-toc-toggler-show').hide(); return false;">show</a></div>
				<ul class="topic-toc-ul">
						<li>
							<a href="#toc_header_anchor_1">Relaterade Länkar</a>
						</li>
				</ul>
			</div>

		<p>Presets används för att spara värden för fixturer i olika pooler för varje preset-typ plus en special-pool för alla värden.&nbsp;</p>

<p>Presets är väldigt användbara när du vill återanvända ett värde. Det kan vara en position, färg eller något annat du använder.</p>

<p>Om du använder presets i en cue så sparar du inte värdena som finns i ditt preset, utan du sparar en <em>länk</em>&nbsp;till ditt preset. Om du sedan uppdaterar värdena i ditt preset så kommer dina cuer automatiskt att använda de uppdaterade värdena.&nbsp;</p>

<p>&nbsp;</p>

<p>Tänk på presets som en hel del lådor i en stor byrå. Vi har en byrå för varje preset-typ vi ser på den högra sidan av skärm 1. Varje byrå är märkt "Dimmer", "Position", "Gobo" etc.</p>

<p>Nu kan du stoppa något i dessa lådor. Om du väljer en fixtur och ger den en färg så kan du spara det i en color-låda. Det är som att skriva en lapp och lägga ner i lådan. Det som står på lappen är fixtur-ID's för de aktiva fixturerna och deras aktiva värden.</p>

<p>Informationen är sedan nedstoppad i lådan och lådan namnges. Om det var en röd färg så namnges lådan "Röd". Inte alla lådor namnges automatiskt så här fiffigt. dot2 vet inte vilka de olika positionerna är, så de namnges helt enkelt "Position".&nbsp;</p>

<p>Du kan stoppa ner flera lappar i samma låda, men det kan vara finnas en lapp per fixtur. En fixtur kan inte ha en lapp som lyder "Röd" och en annan som lyder "Blå". Men fixtur 1 kan vara "Röd" och fixtur 2 kan vara "Blå".</p>

<p>Om vi nu väljer en fixtur och sedan ett preset och sparar det i en cue. Då sparar vi egentligen att cuen ska gå och kika i lådan för värdet. Det som sparas är en referens för fixturen du har sparat i cuen. Det betyder att om du senare stoppar ner fler lappar för andra fixturer i samma låda så ändrar inte det i cuen. Cuen tittar bara efter lappen för den specifika fixturen/fixturerna som sparats i cuen.</p>

<p>Om du ändrar värdena som skrivits på lappen för fixturerna du använder så kommer dina cuer använda dessa uppdaterade värden. Du kanske behöver ändra värdena på lappan om färgen inte såg bra ut, eller om positionen för sångaren i bandet ändrats, eller för en miljon andra orsaker.</p>

<p>&nbsp;</p>

<p>Den speciella typen av presets som kallas "All" sparar alla aktiva värden till en preset.</p>

<p>&nbsp;</p>

<a name="toc_header_anchor_1" id="toc_header_anchor_1" class="topic-toc-item"></a><h2>Relaterade Länkar</h2>

<p><a href="/Topic/d0a671eb-91c4-45b5-bba6-aa5138f0e343">Vad är cuer?</a></p>

<p><a href="/Topic/1d3c4f8d-0d36-44da-9f6d-fa91f0db3024">Hur man arbetar med presets</a></p>

<p><a href="/Topic/c8e38ca3-4da4-4a62-b631-099908716e53">Knappen Preset</a></p>

<p><a href="/Topic/4e726532-88c5-4bb8-ac83-85baaa66e3f3">Kommandot Preset</a></p>

<p><a href="/Topic/c3fb198e-9577-4dae-981c-601829997529">Preset-Pool Vyn</a></p>

<p>&nbsp;</p>


				<br>
<div class="topic-navigation">

<div class="pull-right">
	<span class="pull-left">


<div class="pull-left">
<form action="/Topic/SetCurrentVersionNumber" class="form-inline" id="frmTagSelector" method="post">	<span class="form-mini">
		<div class="input-prepend"><span class="add-on">Select different version</span><select autocomplete="off" id="versionNumberId" name="versionNumberId" onchange="$(this).closest('#frmTagSelector').submit();" style="width: 120px;"><option value="">- latest -</option>
<option value="3">1.1</option>
<option selected="selected" value="7">1.2</option>
<option value="12">1.3</option>
<option value="16">1.5</option>
<option value="29">1.9</option>
</select></div>
		<input data-val="true" data-val-number="The field Int32 must be a number." data-val-required="The Int32 field is required." id="ProductId" name="ProductId" type="hidden" value="7">
		<input id="CurrentGuid" name="CurrentGuid" type="hidden" value="740955a8-3b27-4e50-b35c-7a728c1d9c38">
	</span>
</form></div>&nbsp;	</span>
	<span class="pull-right" style="white-space: nowrap;">
			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/WI_Groups/sv/1.2'; " title="Go to previous page 'Groups'">
				<i class="icon-arrow-left"></i> previous
			</button>

			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/WI_Tracking/sv/1.2';" title="Go to next page 'Tracking'">
				next <i class="icon-arrow-right"></i> 
			</button>
	</span>
</div>
	<div class="clear-fix"></div>
	<div class="pull-right">
	
			<button class="btn btn-mini" onclick="location.href='/Media/TopicPdf/15305/7';" title="Open/Save this topic as PDF document for viewing or printing">
				<img src="/Content/images/icons/filetype_pdf.png"> Open topic as PDF
			</button>
	</div>
<div class="clear-fix" style="margin-bottom: 10px"></div>
</div>

	
