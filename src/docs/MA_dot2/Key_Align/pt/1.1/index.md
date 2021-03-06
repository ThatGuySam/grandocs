---
originalUrl: 'https://help2.malighting.com/Page/MA_dot2/Key_Align/pt/1.1'
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
		<input id="CurrentGuid" name="CurrentGuid" type="hidden" value="653b1e1b-2bcd-4065-b918-bef12958ceb3">
	</span>
</form></div>&nbsp;	</span>
	<span class="pull-right" style="white-space: nowrap;">
			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/Keys/pt/1.1'; " title="Go to previous page 'Teclas'">
				<i class="icon-arrow-left"></i> previous
			</button>

			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/Key_At/pt/1.1';" title="Go to next page 'At'">
				next <i class="icon-arrow-right"></i> 
			</button>
	</span>
</div>
<div class="clear-fix" style="margin-bottom: 10px"></div>
</div>

					<div class="infobox"><b>Hint:</b><br><b>New help version</b><br>The help version you selected belongs to an older software version. <a href="/Topic/SetCurrentVersionNumber/29/653b1e1b-2bcd-4065-b918-bef12958ceb3">You may want to view the latest help version.</a></div>

			<div class="pull-right">
					<button class="btn btn-mini" style="margin-right: 10px; height: 30px;" onclick="location.href = '/Media/TopicPdf/7957/3'; " title="Open/Save this topic as PDF document for viewing or printing">
						<img src="/Content/images/icons/filetype_pdf.png" style="height: 24px;"> Open topic as PDF
					</button>
				<span class="badge badge-info">Version 1.1</span>
			</div>
		<h1>Tecla Align</h1>


		<p>A tecla <span class="hardkey">Align</span>&nbsp;(Alinhar) ?? usada para espalhar os valores em v??rios fixtures selecionados.&nbsp;</p>

<p>A fun????o&nbsp;Align&nbsp;tem tr??s modelos diferentes:</p>

<ul>
	<li><strong>Align Off</strong>: Todos os valores s??o os mesmos. Esse ?? o modo padr??o.</li>
	<li><strong>Align &lt;</strong>: Isto manter?? o valor do primeiro fixture selecionado e espalhar?? o valor ao o ??ltimo fixture selecionado.???
	<ul>
		<li>Neste exemplo, os dez fixtures (selecionados de 1 a 10) est??o ajustados em 50% e, ent??o a fun????o de align ?? aplicada e o encoder girado (para baixo). Este ?? o resultado:???<br>
		<img alt="" src="/Media/Image/Dot2_Keys_Align_Left.png"></li>
		<li>Esse resultado tamb??m pode ser obtido usando as teclas:&nbsp;<span class="hardkey">Fixture</span> <span class="hardkey">1</span> <span class="hardkey">Thru</span> <span class="hardkey">1</span> <span class="hardkey">0</span> <span class="hardkey">At</span> <span class="hardkey">5</span> <span class="hardkey">0</span> <span class="hardkey">Thru</span> <span class="hardkey">1</span> <span class="hardkey">Please</span>.</li>
	</ul>
	</li>
	<li><strong>Align &gt;</strong>:&nbsp;Isto manter?? o valor do ??ltimo&nbsp;fixture&nbsp;selecionado e espalhar?? o valor ao o primeiro&nbsp;fixture&nbsp;selecionado.??????
	<ul>
		<li>Neste exemplo, os dez&nbsp;fixtures&nbsp;(selecionados de 1 a 10) est??o ajustados em 50% e, ent??o a fun????o de&nbsp;align&nbsp;?? aplicada e o&nbsp;encoder&nbsp;girado (para baixo). Este ?? o resultado:??????<br>
		<img alt="" src="/Media/Image/Dot2_Keys_Align_Right.png"></li>
		<li>Esse resultado tamb??m pode ser obtido usando as teclas:&nbsp;<span class="hardkey">Fixture</span>&nbsp;<span class="hardkey">1</span>&nbsp;<span class="hardkey">Thru</span>&nbsp;<span class="hardkey">1</span>&nbsp;<span class="hardkey">0</span>&nbsp;<span class="hardkey">At</span>&nbsp;<span class="hardkey">0</span>&nbsp;<span class="hardkey">Thru</span>&nbsp;<span class="hardkey">5</span>&nbsp;<span class="hardkey">0</span> <span class="hardkey">Please</span>.</li>
	</ul>
	</li>
	<li><strong>Align &gt;&lt;</strong>: Isto ir?? manter o valor do meio de sua sele????o e espalhar?? o valor ao o primeiro e o ??ltimo fixtures. Como uma&nbsp;gangorra ou um ponto de piv?? central.???
	<ul>
		<li>Neste exemplo, os dez&nbsp;fixtures&nbsp;(selecionados de 1 a 10) est??o ajustados em 50% e, ent??o a fun????o de&nbsp;align&nbsp;?? aplicada e o&nbsp;encoder&nbsp;girado (para baixo). Este ?? o resultado:?????????<br>
		<img alt="" src="/Media/Image/Dot2_Keys_Align_Center.png"></li>
		<li>Esse resultado tamb??m pode ser obtido usando as teclas: ???<span class="hardkey">Fixture</span>&nbsp;<span class="hardkey">1</span>&nbsp;<span class="hardkey">Thru</span>&nbsp;<span class="hardkey">1</span>&nbsp;<span class="hardkey">0</span>&nbsp;<span class="hardkey">At</span>&nbsp;<span class="hardkey">1</span> <span class="hardkey">0</span>&nbsp;<span class="hardkey">0</span>&nbsp;<span class="hardkey">Thru</span>&nbsp;<span class="hardkey">0</span>&nbsp;<span class="hardkey">Please</span>.</li>
	</ul>
	</li>
	<li><strong>Align &lt;&gt;</strong>: Isto manter?? os valores do primeiro e ??ltimo fixtures&nbsp;de sua sele????o e espalhar?? o valor ao meio da sua sele????o. Como uma flecha.???
	<ul>
		<li>Neste exemplo, os dez&nbsp;fixtures&nbsp;(selecionados de 1 a 10) est??o ajustados em 50% e, ent??o a fun????o de&nbsp;align&nbsp;?? aplicada e o&nbsp;encoder&nbsp;girado (para baixo). Este ?? o resultado:????????????<br>
		<img alt="" src="/Media/Image/Dot2_Keys_Align_Sides.png"></li>
		<li>Esse resultado tamb??m pode ser obtido usando as teclas:&nbsp;<span class="hardkey">Fixture</span>&nbsp;<span class="hardkey">1</span>&nbsp;<span class="hardkey">Thru</span>&nbsp;<span class="hardkey">1</span>&nbsp;<span class="hardkey">0</span>&nbsp;<span class="hardkey">At</span>&nbsp;<span class="hardkey">5</span>&nbsp;<span class="hardkey">0</span>&nbsp;<span class="hardkey">Thru</span>&nbsp;<span class="hardkey">0</span>&nbsp;<span class="hardkey">Thru</span> <span class="hardkey">5</span> <span class="hardkey">0</span>&nbsp;<span class="hardkey">Please</span>.</li>
	</ul>
	</li>
</ul>

<p>Quando voc?? pressiona a tecla <span class="hardkey">Align</span>, voc?? vai alternar entre estes cinco modos. Um pequeno bal??o de informa????es aparece na tela 1 lhe dizendo o modo selecionado.</p>

<p>Se voc?? tiver selecionado algo diferente de "Alinhar Off", ent??o agora voc?? ir?? alinhar o pr??ximo atributo, voc?? muda quando gira os&nbsp;encoders ou usa as Vistas de Tipo de Preset..</p>

<p>Assim que voc?? come??ar a mudar uma coisa nova, a fun????o Align volta para "Alinhar Off".</p>

<div class="important">Essa tecla n??o interage com a entrada da linha de comando.</div>


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
		<input id="CurrentGuid" name="CurrentGuid" type="hidden" value="653b1e1b-2bcd-4065-b918-bef12958ceb3">
	</span>
</form></div>&nbsp;	</span>
	<span class="pull-right" style="white-space: nowrap;">
			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/Keys/pt/1.1'; " title="Go to previous page 'Teclas'">
				<i class="icon-arrow-left"></i> previous
			</button>

			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/Key_At/pt/1.1';" title="Go to next page 'At'">
				next <i class="icon-arrow-right"></i> 
			</button>
	</span>
</div>
	<div class="clear-fix"></div>
	<div class="pull-right">
	
			<button class="btn btn-mini" onclick="location.href='/Media/TopicPdf/7957/3';" title="Open/Save this topic as PDF document for viewing or printing">
				<img src="/Content/images/icons/filetype_pdf.png"> Open topic as PDF
			</button>
	</div>
<div class="clear-fix" style="margin-bottom: 10px"></div>
</div>

	
