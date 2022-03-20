---
originalUrl: 'https://help2.malighting.com/Page/MA_dot2/Key_Preset/pt/1.1'
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
		<input id="CurrentGuid" name="CurrentGuid" type="hidden" value="c8e38ca3-4da4-4a62-b631-099908716e53">
	</span>
</form></div>&nbsp;	</span>
	<span class="pull-right" style="white-space: nowrap;">
			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/Key_Plus/pt/1.1'; " title="Go to previous page '[Mais] +'">
				<i class="icon-arrow-left"></i> previous
			</button>

			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/Key_Prev/pt/1.1';" title="Go to next page 'Prev (Previous)'">
				next <i class="icon-arrow-right"></i> 
			</button>
	</span>
</div>
<div class="clear-fix" style="margin-bottom: 10px"></div>
</div>

					<div class="infobox"><b>Hint:</b><br><b>New help version</b><br>The help version you selected belongs to an older software version. <a href="/Topic/SetCurrentVersionNumber/29/c8e38ca3-4da4-4a62-b631-099908716e53">You may want to view the latest help version.</a></div>

			<div class="pull-right">
					<button class="btn btn-mini" style="margin-right: 10px; height: 30px;" onclick="location.href = '/Media/TopicPdf/4954/3'; " title="Open/Save this topic as PDF document for viewing or printing">
						<img src="/Content/images/icons/filetype_pdf.png" style="height: 24px;"> Open topic as PDF
					</button>
				<span class="badge badge-info">Version 1.1</span>
			</div>
		<h1>Tecla Preset</h1>

			<div class="topic-table-of-contents">
				<h2>Table of contents of this topic</h2>
				<div class="topic-toc-toggler topic-toc-toggler-hide"><a href="#" onclick="$('.topic-toc-ul').toggle(); $('.topic-toc-toggler-hide').hide(); $('.topic-toc-toggler-show').show(); return false;">hide</a></div>
				<div class="topic-toc-toggler topic-toc-toggler-show" style="display: none;"><a href="#" onclick="$('.topic-toc-ul').toggle(); $('.topic-toc-toggler-hide').show(); $('.topic-toc-toggler-show').hide(); return false;">show</a></div>
				<ul class="topic-toc-ul">
						<li>
							<a href="#toc_header_anchor_1">Vistas de Preset</a>
						</li>
						<li>
							<a href="#toc_header_anchor_2">Comando de Preset</a>
						</li>
						<li>
							<a href="#toc_header_anchor_3">Funcionalidade avançada</a>
						</li>
				</ul>
			</div>

		<p>Quando você pressiona a tecla&nbsp;<span class="hardkey">Preset</span>&nbsp;você tem a&nbsp;<a href="/Topic/c3fb198e-9577-4dae-981c-601829997529">vista do Grupo de Presets</a>&nbsp;na tela 1 e ela lhe da o&nbsp;<a href="/Topic/4e726532-88c5-4bb8-ac83-85baaa66e3f3">comando de Preset</a>&nbsp;na linha de comando.</p>

<div class="tip">Se você precisa aprender sobre presets, por favor, siga os links para as páginas &nbsp;<a href="/Topic/740955a8-3b27-4e50-b35c-7a728c1d9c38">O que são Presets</a>&nbsp;e&nbsp;<a href="/Topic/1d3c4f8d-0d36-44da-9f6d-fa91f0db3024">Como Trabalhar com Presets</a>​.</div>

<a name="toc_header_anchor_1" id="toc_header_anchor_1" class="topic-toc-item"></a><h2>Vistas de Preset</h2>

<p>Esta vista muda de acordo com o tipo de preset secionado. Por exemplo, se você selecionar Cor na barra do tipo de Preset do lado direito da tela 1, a vista de Preset lhe mostrará todos os presets de cor, se você selecionar Posição, serão mostrados os presets de posição.</p>

<p>A vista de Preset permite que você toque os presets na tela para carregar os valores. Por favor, leia&nbsp;<a href="/Topic/1d3c4f8d-0d36-44da-9f6d-fa91f0db3024">Como Trabalhar com Presets</a>&nbsp;para ter mais detalhes deste processo.</p>

<a name="toc_header_anchor_2" id="toc_header_anchor_2" class="topic-toc-item"></a><h2>Comando de Preset</h2>

<p>A função primária do comando de preset é atribuir presets para os fixtures. Isso pode ser mais fácil de ser feito usando as telas, mas você também pode fazer isso usando as teclas e, portanto, os comandos.</p>

<p>Se você precisa usar a posição de preset número 1 no fixture 1, então você pode digitar o seguinte (a partir de um programador vazio):</p>

<p><span class="hardkey">Fixture</span>&nbsp;<span class="hardkey">1</span>&nbsp;<span class="hardkey">At</span>&nbsp;<span class="hardkey">Preset</span>&nbsp;<span class="hardkey">2</span>&nbsp;<span class="hardkey">&nbsp;.&nbsp;</span>&nbsp;<span class="hardkey">1</span>&nbsp;<span class="hardkey">Please</span></p>

<p>Neste exemplo, usamos o "2.1" para dizer ao console que esse é o primeiro preset no tipo de preset de Posição. O número 2 neste comando diz ao console que é uma posição. O 1 lhe diz que ele é o primeiro.</p>

<p>No lado direito da tela 1 você pode ver todos os diferentes tipos de presets. A de cima é o número 1, então a segunda é o número 2 e assim por diante. Esta não é uma lista fixa. Isso muda dependendo de seus fixtures patcheados. Ele geralmente segue uma ordem específica. Por exemplo, o Dimmer é sempre antes de Posição. Assim, no exemplo anterior, podemos ver que a Posição é o segundo tipo de preset.</p>

<a name="toc_header_anchor_3" id="toc_header_anchor_3" class="topic-toc-item"></a><h2>Funcionalidade avançada</h2>

<p>Quando você pressionar e segurar a tecla&nbsp;<span class="hardkey"><img alt="ma" src="/Media/Mlg/ma.png"></span>&nbsp;e, em seguida, pressione a tecla <span class="hardkey">Preset</span>,&nbsp; você obtém o&nbsp;<a href="/Topic/b1effa05-c848-4eff-8844-e06a3cd1ebb4">comando TipoDePreset</a>.</p>

<p>Isto pode ser usado para ativar os diferentes tipos de preset. É o mesmo que tocar os diferentes botões na tela.</p>

<p>Uma vez que o número pode mudar dependendo de seus fixtures patcheados, é preferível usar o nome do tipo de Preset. Mas então você precisa escrevê-lo na linha de comando.</p>

<p><span class="hardkey"><img alt="ma" src="/Media/Mlg/ma.png"></span>+<span class="hardkey">Preset</span>&nbsp;<span class="hardkey">1</span>&nbsp;é quese sempre o mesmo que <span class="syntax">TipoDePreset "Dimmer"</span>.</p>

<a name="toc_header_anchor_4" id="toc_header_anchor_4" class="topic-toc-item"></a><h2>Links Relacionados</h2>

<p><a href="/Topic/740955a8-3b27-4e50-b35c-7a728c1d9c38">O que são Presets</a></p>

<p><a href="/Topic/1d3c4f8d-0d36-44da-9f6d-fa91f0db3024">Como Trabalhar com Presets</a></p>

<p><a href="/Topic/c3fb198e-9577-4dae-981c-601829997529">Vista do Grupo de Presets</a></p>

<p><a href="/Topic/4e726532-88c5-4bb8-ac83-85baaa66e3f3">Comando de Preset</a></p>

<p><a href="/Topic/b1effa05-c848-4eff-8844-e06a3cd1ebb4">Comando TipoDePreset</a></p>


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
		<input id="CurrentGuid" name="CurrentGuid" type="hidden" value="c8e38ca3-4da4-4a62-b631-099908716e53">
	</span>
</form></div>&nbsp;	</span>
	<span class="pull-right" style="white-space: nowrap;">
			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/Key_Plus/pt/1.1'; " title="Go to previous page '[Mais] +'">
				<i class="icon-arrow-left"></i> previous
			</button>

			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/Key_Prev/pt/1.1';" title="Go to next page 'Prev (Previous)'">
				next <i class="icon-arrow-right"></i> 
			</button>
	</span>
</div>
	<div class="clear-fix"></div>
	<div class="pull-right">
	
			<button class="btn btn-mini" onclick="location.href='/Media/TopicPdf/4954/3';" title="Open/Save this topic as PDF document for viewing or printing">
				<img src="/Content/images/icons/filetype_pdf.png"> Open topic as PDF
			</button>
	</div>
<div class="clear-fix" style="margin-bottom: 10px"></div>
</div>

	
