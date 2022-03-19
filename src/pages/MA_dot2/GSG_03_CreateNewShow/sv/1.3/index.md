
<div class="topic-navigation">

<div class="pull-right">
	<span class="pull-left">


<div class="pull-left">
<form action="/Topic/SetCurrentVersionNumber" class="form-inline" id="frmTagSelector" method="post">	<span class="form-mini">
		<div class="input-prepend"><span class="add-on">Select different version</span><select autocomplete="off" id="versionNumberId" name="versionNumberId" onchange="$(this).closest('#frmTagSelector').submit();" style="width: 120px;"><option value="">- latest -</option>
<option value="3">1.1</option>
<option value="7">1.2</option>
<option selected="selected" value="12">1.3</option>
<option value="16">1.5</option>
<option value="29">1.9</option>
</select></div>
		<input data-val="true" data-val-number="The field Int32 must be a number." data-val-required="The Int32 field is required." id="ProductId" name="ProductId" type="hidden" value="28">
		<input id="CurrentGuid" name="CurrentGuid" type="hidden" value="6ef557dd-b66e-43b6-b2d8-1d109056f96d">
	</span>
</form></div>&nbsp;	</span>
	<span class="pull-right" style="white-space: nowrap;">
			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/GSG_02_PhysicalSetupAndLayout/sv/1.3'; " title="Go to previous page '2 - Physical setup and layout'">
				<i class="icon-arrow-left"></i> previous
			</button>

			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/GSG_04_PatchDimmers/sv/1.3';" title="Go to next page '4 - Adding and patching dimmers'">
				next <i class="icon-arrow-right"></i> 
			</button>
	</span>
</div>
<div class="clear-fix" style="margin-bottom: 10px"></div>
</div>

			<div class="infobox"><b>Hint:</b><br><b>New English version</b><br>The language you selected is outdated. <a href="/Topic/6ef557dd-b66e-43b6-b2d8-1d109056f96d/en">You may want to view the more up-to-date English version?</a></div>
		
			<div class="pull-right">
					<button class="btn btn-mini" style="margin-right: 10px; height: 30px;" onclick="location.href = '/Media/TopicPdf/17407/3'; " title="Open/Save this topic as PDF document for viewing or printing">
						<img src="/Content/images/icons/filetype_pdf.png" style="height: 24px;"> Open topic as PDF
					</button>
				<span class="badge badge-info">Version 1.1</span>
			</div>
		<h1>Kom igång... - Skapa en ny show och spara den</h1>

			<div class="topic-table-of-contents">
				<h2>Table of contents of this topic</h2>
				<div class="topic-toc-toggler topic-toc-toggler-hide"><a href="#" onclick="$('.topic-toc-ul').toggle(); $('.topic-toc-toggler-hide').hide(); $('.topic-toc-toggler-show').show(); return false;">hide</a></div>
				<div class="topic-toc-toggler topic-toc-toggler-show" style="display: none;"><a href="#" onclick="$('.topic-toc-ul').toggle(); $('.topic-toc-toggler-hide').show(); $('.topic-toc-toggler-show').hide(); return false;">show</a></div>
				<ul class="topic-toc-ul">
						<li>
							<a href="#toc_header_anchor_1">Skapa en ny show</a>
						</li>
						<li>
							<a href="#toc_header_anchor_2">Spara Show</a>
						</li>
				</ul>
			</div>

		<a name="toc_header_anchor_1" id="toc_header_anchor_1" class="topic-toc-item"></a><h2>Skapa en ny show</h2>

<p>Vi bör starta med en ny tom show bara för att säkerställa att vi startar från samma ställe. Nu är det dags att slå igång ljusbordet (om du inte redan gjort det).</p>

<p>När det har startat upp så ska du tryck på knappen <span class="hardkey">Backup</span>. Det öppnar Backup-menyn:</p>

<p><img alt="" src="/Media/Image/Dot2_GettingStarted_CreateNewShow_01_1-0.png"></p>

<p>Tryck nu på knappen <span class="softkey">Ny Show</span>. Det kommer att skapa en ny och tom show.</p>

<p>Nästa sak som händer är att ett pop-up fönster ber dig att namnge din nya show. Skriv in: <span class="syntax">Kom Igång 01</span></p>

<p><img alt="" src="/Media/Image/Dot2_GettingStarted_CreateNewShow_02_1-1-3.png"></p>

<p>Om det redan finns en show laddad (vilket är väldig troligt), så kommer bordet fråga dig om du vill spara den innan du skapar en ny show. Att spara kan vara en bra idé.</p>

<p>Du kan också bli meddelad med ett fönster som talar om att det redan finns en show med detta namn. Då kan du välja om du vill skriva över den existerande showfilen eller trycka avbryt för att ge den ett annat namn.</p>

<p>Nu kommer ljusbordet att skapa den nya showen.</p>

<a name="toc_header_anchor_2" id="toc_header_anchor_2" class="topic-toc-item"></a><h2>Spara Show</h2>

<p>Om vi ignorerar allt på skärmarna för en stund och fokuserar på att spara din nya (men fortfarande tomma) show.</p>

<p>Det hanteras också från Backup-menyn. Tryck på <span class="hardkey">Backup</span> en gång till.</p>

<p>Utöver <span class="softkey">Ny Show</span> finns det tre andra alternativ. Ett av dem är att <span class="softkey">Spara Show</span>.</p>

<p><span class="softkey">Spara Show Som...</span>&nbsp;används om vi vill spara showen med ett nytt namn.</p>

<p>Men som du också kan läsa i texten i knappen <span class="softkey">Spara Show</span>, så kunde du bara tryckt på <span class="hardkey">Backup</span> -knappen så som du dubbelklickar med en mus. Vi kan inte göra detta när Backup-menyn är öppen. Så nu har du två val. Tryck på knappen Spara Show eller tryck på <span class="hardkey">Backup</span> -knappen tre gånger (en gång för att stänga menyn och sedan två gånger för att utför kommandot spara show.).</p>

<p>Kom ihåg att spara din show ofta. Det finns ingen inbyggd ström-backup i ljusbordet och om du slår av bordet eller om du tappar strömemn så stängs bordet av utan att spara.</p>

<p>Du borde också spara din show på en extern enhet så som ett USB-minne. Anslut ett USB-minne i en av USB-anslutningarna och spara sedan showen. Nu är den sparad både på USB-minnet och i ljusbordet.</p>

<p>Ok? Då går vi vidare till nästa kapitel.</p>


				<br>
<div class="topic-navigation">

<div class="pull-right">
	<span class="pull-left">


<div class="pull-left">
<form action="/Topic/SetCurrentVersionNumber" class="form-inline" id="frmTagSelector" method="post">	<span class="form-mini">
		<div class="input-prepend"><span class="add-on">Select different version</span><select autocomplete="off" id="versionNumberId" name="versionNumberId" onchange="$(this).closest('#frmTagSelector').submit();" style="width: 120px;"><option value="">- latest -</option>
<option value="3">1.1</option>
<option value="7">1.2</option>
<option selected="selected" value="12">1.3</option>
<option value="16">1.5</option>
<option value="29">1.9</option>
</select></div>
		<input data-val="true" data-val-number="The field Int32 must be a number." data-val-required="The Int32 field is required." id="ProductId" name="ProductId" type="hidden" value="28">
		<input id="CurrentGuid" name="CurrentGuid" type="hidden" value="6ef557dd-b66e-43b6-b2d8-1d109056f96d">
	</span>
</form></div>&nbsp;	</span>
	<span class="pull-right" style="white-space: nowrap;">
			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/GSG_02_PhysicalSetupAndLayout/sv/1.3'; " title="Go to previous page '2 - Physical setup and layout'">
				<i class="icon-arrow-left"></i> previous
			</button>

			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/GSG_04_PatchDimmers/sv/1.3';" title="Go to next page '4 - Adding and patching dimmers'">
				next <i class="icon-arrow-right"></i> 
			</button>
	</span>
</div>
	<div class="clear-fix"></div>
	<div class="pull-right">
	
			<button class="btn btn-mini" onclick="location.href='/Media/TopicPdf/17407/3';" title="Open/Save this topic as PDF document for viewing or printing">
				<img src="/Content/images/icons/filetype_pdf.png"> Open topic as PDF
			</button>
	</div>
<div class="clear-fix" style="margin-bottom: 10px"></div>
</div>

	