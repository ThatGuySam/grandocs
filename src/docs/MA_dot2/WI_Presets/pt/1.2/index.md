---
originalUrl: 'https://help2.malighting.com/Page/MA_dot2/WI_Presets/pt/1.2'
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
			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/WI_Groups/pt/1.2'; " title="Go to previous page 'Groups'">
				<i class="icon-arrow-left"></i> previous
			</button>

			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/WI_Tracking/pt/1.2';" title="Go to next page 'Tracking'">
				next <i class="icon-arrow-right"></i> 
			</button>
	</span>
</div>
<div class="clear-fix" style="margin-bottom: 10px"></div>
</div>

					<div class="infobox"><b>Hint:</b><br><b>New help version</b><br>The help version you selected belongs to an older software version. <a href="/Topic/SetCurrentVersionNumber/29/740955a8-3b27-4e50-b35c-7a728c1d9c38">You may want to view the latest help version.</a></div>

			<div class="pull-right">
					<button class="btn btn-mini" style="margin-right: 10px; height: 30px;" onclick="location.href = '/Media/TopicPdf/12806/7'; " title="Open/Save this topic as PDF document for viewing or printing">
						<img src="/Content/images/icons/filetype_pdf.png" style="height: 24px;"> Open topic as PDF
					</button>
				<span class="badge badge-info">Version 1.2</span>
			</div>
		<h1>O que são Presets</h1>


		<p>Presets são usados para armazenar valores para fixtures em agrupamentos para cada tipo de preset e mais um agrupamento especial para todos os valores.</p>

<p>É muito útil quando você quer reutilizar um valor. Pode também ser uma posição, cor ou qualquer outra coisa que você use.</p>

<p>Se você usar um preset em um cue, então você não armazena os valores armazenados no preset, mas você armazena um<em> link</em>&nbsp;ao&nbsp;preset. Se você atualizar os valores no preset, então seus cues usarão automaticamente os valores atualizados.</p>

<p>&nbsp;</p>

<p>Pense em&nbsp;presets como um monte de gavetas em uma grande cômoda. Nós temos uma cômoda para cada um dos tipos de presets que vemos do lado direito da tela 1. Assim, cada cômoda é nomeada de "Dimmer", "Posição", "Gobo" etc.</p>

<p>Agora você pode colocar algo nestas gavetas. Se você selecionar um fixture e lhe dar uma cor, você pode armazená-lo em uma gaveta da cor. É como escrever uma pequena nota e colocá-la na gaveta. O que você escreve é o número de ID do(s) fixture(s) ativo(s) e seu(s) valores ativos.</p>

<p>Esta informação é então colocada na gaveta e a gaveta é etiquetada. Se fosse uma cor vermelha, então ela seria etiquetada “Vermelho”. Nem todas as gavetas são nomeadas com esta inteligência. A dot2 não sabe as diferentes posições, por isso, elas estão apenas etiquetadas como "Posição".</p>

<p>Você pode colocar outras notas na mesma gaveta, mas só pode haver uma nota para cada fixture. O mesmo fixture não pode ter uma nota que diz "Vermelho" e uma que diz "Azul". Mas o fixture 1 pode ser "Vermelho" e o fixture 2 pode ser "Azul".</p>

<p>Agora, nós selecionamos um fixture e, então, um preset e armazenamos em um cue. Então nós armazenamos que o cue deve ir na gaveta para procurar o valor. Ele armazena apenas esta referência para o fixture que você tem armazenado naquele cue. Isso significa que, se mais tarde você adicionar mais notas para outros cues na mesma gaveta, isso não altera o cue. O cue ainda está na gaveta só procurando pelas notas para os fixtures específicos armazenados no cue.</p>

<p>Se você alterar os valores escritos sobre a nota para os fixtures que você usa, seus cues usarão os valores atualizados. Pode ser necessário alterar os valores na nota se: a cor não era certa, pela mudança de posição para o cantor ou por um milhão de outras razões</p>

<p>O grupo especial de presets&nbsp;chamado&nbsp;"All" irá armazenar todos os valores possíveis em um preset&nbsp;All.</p>

<a name="toc_header_anchor_1" id="toc_header_anchor_1" class="topic-toc-item"></a><h2>Links Relacionados</h2>

<p><a href="/Topic/d0a671eb-91c4-45b5-bba6-aa5138f0e343">O que são Cues</a></p>

<p><a href="/Topic/1d3c4f8d-0d36-44da-9f6d-fa91f0db3024">Como trabalhar com Presets</a></p>

<p><a href="/Topic/c8e38ca3-4da4-4a62-b631-099908716e53">Tecla Preset</a></p>

<p><a href="/Topic/4e726532-88c5-4bb8-ac83-85baaa66e3f3">Comando Preset</a></p>

<p><a href="/Topic/c3fb198e-9577-4dae-981c-601829997529">Vista do Agrupamento de Presets</a></p>

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
			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/WI_Groups/pt/1.2'; " title="Go to previous page 'Groups'">
				<i class="icon-arrow-left"></i> previous
			</button>

			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/WI_Tracking/pt/1.2';" title="Go to next page 'Tracking'">
				next <i class="icon-arrow-right"></i> 
			</button>
	</span>
</div>
	<div class="clear-fix"></div>
	<div class="pull-right">
	
			<button class="btn btn-mini" onclick="location.href='/Media/TopicPdf/12806/7';" title="Open/Save this topic as PDF document for viewing or printing">
				<img src="/Content/images/icons/filetype_pdf.png"> Open topic as PDF
			</button>
	</div>
<div class="clear-fix" style="margin-bottom: 10px"></div>
</div>

	
