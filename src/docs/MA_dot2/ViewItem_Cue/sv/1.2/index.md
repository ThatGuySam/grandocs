---
originalUrl: 'https://help2.malighting.com/Page/MA_dot2/ViewItem_Cue/sv/1.2'
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
		<input id="CurrentGuid" name="CurrentGuid" type="hidden" value="b8ab1bbb-182d-41d6-9a1e-52f5267922c7">
	</span>
</form></div>&nbsp;	</span>
	<span class="pull-right" style="white-space: nowrap;">
			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/ViewItem_Control/sv/1.2'; " title="Go to previous page 'Control Preset Type'">
				<i class="icon-arrow-left"></i> previous
			</button>

			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/ViewItem_Dimmer/sv/1.2';" title="Go to next page 'Dimmer Preset Type'">
				next <i class="icon-arrow-right"></i> 
			</button>
	</span>
</div>
<div class="clear-fix" style="margin-bottom: 10px"></div>
</div>

			<div class="infobox"><b>Hint:</b><br><b>New English version</b><br>The language you selected is outdated. <a href="/Topic/b8ab1bbb-182d-41d6-9a1e-52f5267922c7/en">You may want to view the more up-to-date English version?</a></div>
		
			<div class="pull-right">
					<button class="btn btn-mini" style="margin-right: 10px; height: 30px;" onclick="location.href = '/Media/TopicPdf/17022/3'; " title="Open/Save this topic as PDF document for viewing or printing">
						<img src="/Content/images/icons/filetype_pdf.png" style="height: 24px;"> Open topic as PDF
					</button>
				<span class="badge badge-info">Version 1.1</span>
			</div>
		<h1>Cue-Vyn</h1>

			<div class="topic-table-of-contents">
				<h2>Table of contents of this topic</h2>
				<div class="topic-toc-toggler topic-toc-toggler-hide"><a href="#" onclick="$('.topic-toc-ul').toggle(); $('.topic-toc-toggler-hide').hide(); $('.topic-toc-toggler-show').show(); return false;">hide</a></div>
				<div class="topic-toc-toggler topic-toc-toggler-show" style="display: none;"><a href="#" onclick="$('.topic-toc-ul').toggle(); $('.topic-toc-toggler-hide').show(); $('.topic-toc-toggler-show').hide(); return false;">show</a></div>
				<ul class="topic-toc-ul">
						<li>
							<a href="#toc_header_anchor_1">Chaser</a>
						</li>
						<li>
							<a href="#toc_header_anchor_2">Funktioner för Encoder-raden</a>
						</li>
				</ul>
			</div>

		<p>För att komma till <strong>Cue-Vyn</strong> för <strong>huvud-executorn</strong> på <strong>skärm 1</strong>: Tryck <span class="hardkey">Cue</span> på ljusbordet.</p>

<p>För att komma till cue-vyn för huvud-executorn på skärm 2: Tryck på <span class="softkey">Cuer</span> i <a href="/Topic/aeb06b87-4def-4d5c-8ccd-fce24793de63">Vy-raden</a>.</p>

<p>För att komma till cue-vyn för någon annan executor: Tryck&nbsp;<span class="hardkey"><img alt="view" src="/Media/Mlg/eye_1.png"></span>&nbsp;och sedan på respektive executor-knapp på ljusbordet.</p>

<p><img alt="" src="/Media/Image/Dot2_ViewsandWindows_CuesView02_1-1-3_1.png"><em>Figur 1: Cye-Vyn</em></p>

<p>I den här vyn kan du se alla cuer och deras inställningar för respektive executor.</p>

<div class="tip"><strong>Information:</strong><br>
Varje "store", "update" eller "copy" gör en automatisk unblock för cue-listan. Värden som är identiska med värdet i föregående cue sparas inte igen i cuelistan. Det ger dig en ren trackinglista. För mer information, se <a href="/Topic/dbf1ee09-43cb-48a1-9e9d-6d0bc5c8feb6">Vad är tracking?</a>&nbsp;&nbsp;</div>

<p>Om det finns en off-tid inställd för den här executorn så visas det i titelraden.<br>
För att ändra off-tid, tryck på <span class="softkey">Off-tid</span> i titelraden. Då öppnas <a href="/Topic/eea17a4c-1b42-406e-86d9-7e61b3a0bfdd">fönstret inställningar för executor</a>.</p>

<p>För att starta en tidkodsinspelning för executorn, tryck på <span class="softkey">TC Record</span> (=timecode) i titelraden. Inspelnings-ikonen&nbsp;<img alt="" src="/Media/Image/Dot2_ViewsandWindows_CuesView05_1-1-3.png">&nbsp;blinkar då i titelraden för cue-vyn och i executor-raden. Bara tillgängligt om minst en tidkodskälla är påslagen i <a href="/Topic/c22188fd-6831-4847-a24a-f9174ed48191">fönstret tidkodskonfiguration</a>. Om ingen tidkodskälla är påslagen så visas knappen TC Record nedtonad och tidkodstrigger-ikonen visas i rött.</p>

<p><img alt="" src="/Media/Image/Dot2_ViewsandWindows_CuesView06_1-1-3.png"><em>Figur 2: Cue-vyn - Ingen tidkodskälla är påslagen i fönstret tidkodskonfiguration</em></p>

<p>För att öppna executor-inställningarna, tryck på verktygsikonen&nbsp;<img alt="" src="/Media/Image/Dot2_ViewsandWindows_ControlElements_TitleBar05_1-0.PNG">&nbsp;i titelraden. Det öppnar <a href="/Topic/eea17a4c-1b42-406e-86d9-7e61b3a0bfdd">fönstret inställningar för executor</a>.</p>

<p>För att nåla fast vyn och deaktivera det dynamiska vy-läget, tryck på nålen&nbsp;<img alt="" src="/Media/Image/Dot2_ViewsandWindows_ControlElements_TitleBar04_1-0.PNG">&nbsp;i <a href="/Topic/a9e3dcd7-1fb1-4dab-8e42-03f9e0de3e99">titelraden</a>.</p>

<p>Nedanför titelraden är cue-tabellen. I den här tabellen kan du ändra/ställa in</p>

<ul>
	<li>Nummer.&nbsp;<a href="/Topic/55344644-8c65-4e59-ad6b-2aa988a28c88">Fönstret "Ändra cue-nummer"</a> öppnas.</li>
	<li>Cue-namn</li>
	<li>Skydd</li>
	<li>Trig (Trigger).&nbsp;<a href="/Topic/d9c9d91d-b42b-4aae-8a17-58df82b91f46">Fönstret "Välj Trig"</a> öppnas.</li>
	<li>Trigger Time</li>
	<li>Fade</li>
	<li>Out Fade</li>
	<li>Out Delay</li>
	<li>Tider för Preset-typ</li>
	<li>Cmd (Command)</li>
	<li>Snap Percent</li>
</ul>

<p>För att ändra i cellerna i cue-tabellen, tryck och håll i cellen. Motsvarande redigeringsfönster öppnas.</p>

<p>En vald cell i cue-tabellen har blå bakgrund och vit ram runt.</p>

<p>Den aktuella cuen i cue-tabellen har grön bakgrund.<br>
Den blå markeringen i namnkolumnen för en körande cue visar fade-tiden från 0% till 100%.<br>
För mer information om cuer, se även <a href="/Topic/d0a671eb-91c4-45b5-bba6-aa5138f0e343">Vad är en Cue?</a> och <a href="/Topic/511081dd-5ffb-4aaa-8d09-a0859b0d0a19">Hur man arbetar med Cuer</a>.</p>

<p>Om en cue är satt till "skyddad" så visas en vit linje för att se var trackingen slutar. För mer information, se <a href="/Topic/dbf1ee09-43cb-48a1-9e9d-6d0bc5c8feb6">Vad är Tracking?</a></p>

<a name="toc_header_anchor_1" id="toc_header_anchor_1" class="topic-toc-item"></a><h2>Chaser</h2>

<p>Om en executor är inställd att fungera som chaser så är alla funktioner och tider, som inte är aktiva i chaserläge, nedtonade. För mer information om chasers, se <a href="/Topic/19bf97cc-217c-4f8c-83af-134aae3e3aed">Vad är en Chaser?</a> och <a href="/Topic/ec01d7b9-e0db-41e3-8371-b9f45736ed75">Hur man arbetar med Chasers</a>.</p>

<p>Ytterligare visas även chaser-raden.<br>
&nbsp;</p>

<p><img alt="" src="/Media/Image/Dot2_ViewsandWindows_CuesView03_1-0.PNG"><em>Figur 3: Chaser-raden i Cue-vyn</em></p>

<p><strong>Framåt</strong>&nbsp;(chaser-riktning):<br>
Tryck på&nbsp;<img alt="" src="/Media/Image/Dot2_ViewsandWindows_AddNewFixturesWindow01_1-0.PNG"> för att välja riktning på chasern.<br>
Det finns fyra olika inställningar för riktning</p>

<ul>
	<li>Framåt</li>
	<li>Bakåt</li>
	<li>Studsa (t.ex startar med cue 1 till 4 och sedan gå tillbaka från cue 4 till 1 osv.)</li>
	<li>Slumpmässigt</li>
</ul>

<p><strong>Ändlös&nbsp;</strong>(Chaserns kör-läge):<br>
Tryck på&nbsp;<img alt="" src="/Media/Image/Dot2_ViewsandWindows_AddNewFixturesWindow01_1-0.PNG">&nbsp;för att välja kör-läge för chasern.<br>
Det finns tre olika kör-lägen att välja på.</p>

<ul>
	<li>Ändlös</li>
	<li>Shoot-Off<br>
	Chasern startar på den valda cuen, t.ex cue 1 och stannar på slutet av cue 5. Executorn stängs av efter sista cuen.</li>
	<li>Shoot-On<br>
	Chasern startar på den valda cuen, t.ex cue 1 och stannar på slutet av cue 5. Executorn förblir på efter sista cuen.</li>
</ul>

<p><strong>Play:</strong><br>
Tryck för att starta chasern.</p>

<p><strong>Pause:</strong><br>
Tryck för att pausa chasern.</p>

<p><strong>Halva Tempot:</strong><br>
Tryck för att ställa tempot på chasern till halva nuvarande tempot.</p>

<p><strong>1:1 tempo:</strong><br>
Tryck för att ställa tempot till det justerade tempot. För att justera tempot, använd encodern.</p>

<p><strong>Dubbla tempot:</strong><br>
Tryck för att ställa tempot till det dubbla nuvarande.</p>

<p>&nbsp;</p>

<a name="toc_header_anchor_2" id="toc_header_anchor_2" class="topic-toc-item"></a><h2>Funktioner för Encoder-raden</h2>

<p><img alt="" src="/Media/Image/Dot2_ViewsandWindows_CuesView04_1-0.PNG"><em>Figur 4: Encoder-raden på skärm 1 om executorn är en chaser</em></p>

<p><strong>Fade</strong> (bara tillgängligt om executorn är en chaser):<br>
Med den här encodern ställer du in fade-procenten från en cue till en annan cue.<br>
Standardinställnig är 0% och max är 400%.<br>
För att ställa fade-procent utan decimaler,&nbsp;vrid encodern åt höger eller vänster.<br>
För att ställa fade-procent med decimaler, tryck på&nbsp;<span class="hardkey"><img alt="encoder" src="/Media/Mlg/encoder.png"></span>&nbsp;och vrid sedan encodern åt höger eller vänster. Encoderhastigheten är långsam.</p>

<p><strong>Tempo</strong> (bara tillgängligt om executorn är en chaser):<br>
För att ställa tempot för chasern långsammare eller snabbare, vrid encodern åt höger eller vänster.</p>

<p><strong>Scrolla:</strong><br>
För att scrolla upp eller ner i cue-vyn, vrid encodern åt höger eller vänster.<br>
För att scrolla höger eller vänster i cue-vyn, tryck och vrid encodern åt höger eller vänster.</p>

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
		<input id="CurrentGuid" name="CurrentGuid" type="hidden" value="b8ab1bbb-182d-41d6-9a1e-52f5267922c7">
	</span>
</form></div>&nbsp;	</span>
	<span class="pull-right" style="white-space: nowrap;">
			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/ViewItem_Control/sv/1.2'; " title="Go to previous page 'Control Preset Type'">
				<i class="icon-arrow-left"></i> previous
			</button>

			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/ViewItem_Dimmer/sv/1.2';" title="Go to next page 'Dimmer Preset Type'">
				next <i class="icon-arrow-right"></i> 
			</button>
	</span>
</div>
	<div class="clear-fix"></div>
	<div class="pull-right">
	
			<button class="btn btn-mini" onclick="location.href='/Media/TopicPdf/17022/3';" title="Open/Save this topic as PDF document for viewing or printing">
				<img src="/Content/images/icons/filetype_pdf.png"> Open topic as PDF
			</button>
	</div>
<div class="clear-fix" style="margin-bottom: 10px"></div>
</div>

	
