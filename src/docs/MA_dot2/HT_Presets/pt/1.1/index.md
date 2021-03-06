---
originalUrl: 'https://help2.malighting.com/Page/MA_dot2/HT_Presets/pt/1.1'
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
		<input id="CurrentGuid" name="CurrentGuid" type="hidden" value="1d3c4f8d-0d36-44da-9f6d-fa91f0db3024">
	</span>
</form></div>&nbsp;	</span>
	<span class="pull-right" style="white-space: nowrap;">
			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/HT_Groups/pt/1.1'; " title="Go to previous page 'Trabalhar com Grupos'">
				<i class="icon-arrow-left"></i> previous
			</button>

			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/HT_Cues/pt/1.1';" title="Go to next page 'Trabalhar com Cues'">
				next <i class="icon-arrow-right"></i> 
			</button>
	</span>
</div>
<div class="clear-fix" style="margin-bottom: 10px"></div>
</div>

					<div class="infobox"><b>Hint:</b><br><b>New help version</b><br>The help version you selected belongs to an older software version. <a href="/Topic/SetCurrentVersionNumber/29/1d3c4f8d-0d36-44da-9f6d-fa91f0db3024">You may want to view the latest help version.</a></div>

			<div class="pull-right">
					<button class="btn btn-mini" style="margin-right: 10px; height: 30px;" onclick="location.href = '/Media/TopicPdf/12883/3'; " title="Open/Save this topic as PDF document for viewing or printing">
						<img src="/Content/images/icons/filetype_pdf.png" style="height: 24px;"> Open topic as PDF
					</button>
				<span class="badge badge-info">Version 1.1</span>
			</div>
		<h1>Como Trabalhar com Presets</h1>

			<div class="topic-table-of-contents">
				<h2>Table of contents of this topic</h2>
				<div class="topic-toc-toggler topic-toc-toggler-hide"><a href="#" onclick="$('.topic-toc-ul').toggle(); $('.topic-toc-toggler-hide').hide(); $('.topic-toc-toggler-show').show(); return false;">hide</a></div>
				<div class="topic-toc-toggler topic-toc-toggler-show" style="display: none;"><a href="#" onclick="$('.topic-toc-ul').toggle(); $('.topic-toc-toggler-hide').show(); $('.topic-toc-toggler-show').hide(); return false;">show</a></div>
				<ul class="topic-toc-ul">
						<li>
							<a href="#toc_header_anchor_1">Crie alguns&nbsp;presets</a>
						</li>
						<li>
							<a href="#toc_header_anchor_2">Nomeando&nbsp;presets</a>
						</li>
						<li>
							<a href="#toc_header_anchor_3">Call/Use/Selecione um&nbsp;Preset</a>
						</li>
						<li>
							<a href="#toc_header_anchor_4">Fazer o Update de um&nbsp;preset</a>
						</li>
				</ul>
			</div>

		<p>Presets s??o um conjunto de valores que uma sele????o espec??fica de fixtures pode usar. Este conjunto de valores ?? armazenado em um agrupamento de&nbsp;presets especial que permite que voc?? use os mesmos conjuntos de valores v??rias e v??rias vezes. Se voc?? armazenar o preset em um cue, ent??o voc?? armazena um link para alguns atributos para alguns fixtures espec??ficos ao preset. Isso significa que voc?? n??o armazena os valores no cue, mas um link para o preset. Se voc?? ent??o atualizar os valores no preset, a apar??ncia de seus cues&nbsp;ir?? mudar. Se voc?? quiser saber mais sobre o que s??o presets, voc?? pode ler&nbsp;<a href="/Topic/740955a8-3b27-4e50-b35c-7a728c1d9c38">O que s??o Presets</a>.</p>

<p>Agora veremos como realmente trabalhar com eles.</p>

<a name="toc_header_anchor_1" id="toc_header_anchor_1" class="topic-toc-item"></a><h2>Crie alguns&nbsp;presets</h2>

<p>Eu suponho que voc?? tem um show com alguns fixtures que tenham diferentes tipos de atributos.</p>

<p>Existem diferentes tipos de preset. Os tipos de preset mudam dependendo de quais fixtures voc?? tenha adicionado ao seu show. Voc?? pode ver os diferentes tipos de preset no lado direito da tela direita.</p>

<p>Voc?? pode ter uma vista de Preset em uma das outras telas usando a Barra de Vista, ou voc?? pode abri-la na tela da direita, pressionando a tecla <span class="hardkey">Preset</span>. Talvez fa??a mais sentido abrir &nbsp;a vista de Preset em uma tela que n??o seja a da direita. Fa??a isso e depois veja a barra de t??tulo da vista de preset mudar quando voc?? selecionar diferentes tipos de Presets no lado direito da tela da direita. Cada Tipo de Preset tem seu pr??prio agrupamento de preset. Isto tamb??m significa que voc?? s?? pode armazenar valores de Dimmer em um agrupamento de Preset de Dimmer.&nbsp;A exce????o a isso ?? o tipo de preset All. O tipo All pode armazenar todos os valores entre os diferentes outros tipos de Presets.</p>

<p>Vamos tentar fazer alguns presets de dimmer (eu suponho que voc?? j?? tenha adicionado alguns fixtures que t??m um canal de dimmer). Selecione alguns dos seus fixtures, d?? a eles um valor de dimmer em seu programador (se voc?? n??o sabe o que o programador ?? ent??o voc?? deve primeiro aprender sobre isso -&nbsp;<a href="/Topic/e740a39c-ef36-4081-9014-59e0a288711c">siga esse link</a>). Agora pressione a tecla <span class="hardkey">Store</span> e, em seguida, um agrupamento de objetos vazio no agrupamento de Preset de Dimmer. Agora voc?? pode ver que voc?? criou um Preset de Dimmer.</p>

<p>Voc?? pode fazer o mesmo com qualquer um de seus tipos de Preset dispon??veis. Lembre-se de que voc?? s?? pode armazenar valores de Dimmer em um Preset de Dimmer. O mesmo ?? v??lido para cada um dos diferentes Tipos de Preset -&nbsp;&nbsp;exceto os presets&nbsp;All.</p>

<p>Tente ter valores de dimmer e cor em seu programador. Em seguida, toque em <span class="softkey">All</span> no menu na tela ?? direita. Pressione <span class="hardkey">Store</span> e, em seguida, um dos Presets All. Agora voc?? armazenou um preset que tem tanto valores de dimmer como de cor.&nbsp;</p>

<p>Repare que tocando no bot??o All abre-se o agrupamento de presets All na tela 1. Voc?? tamb??m pode abrir este agrupamento de presets All pressionando&nbsp;<span class="hardkey"><img alt="ma" src="/Media/Mlg/ma_1.png" style="height:auto"></span>&nbsp;+&nbsp;<span class="hardkey">0</span>.</p>

<a name="toc_header_anchor_2" id="toc_header_anchor_2" class="topic-toc-item"></a><h2>Nomeando&nbsp;presets</h2>

<p>Se voc?? come??ar a digitar em um teclado externo diretamente depois de armazenar um preset, ent??o voc?? est?? etiquetando/nomeando o preset. Voc?? tamb??m pode notar um pop-up para etiquetar quando voc?? armazenar um preset. Tocando nisso voc?? abrir?? a janela de nomea????o. Se voc?? precisa nomear um preset depois de muito tempo dele ter sido armazenado, voc?? pode pressionar a tecla Label e, em seguida, o preset que deseja nomear. Isso tamb??m abre a janela de nomea????o.</p>

<p>A dot2 tentar?? etiquetar o preset com base em seu melhor palpite. Isso n??o funciona se n??o h?? um valor definido. Um exemplo ?? com presets de posi????o. A dot2 simplesmente n??o sabe para onde os fixtures est??o apontados, ent??o auto-nome??-los n??o faz sentido</p>

<a name="toc_header_anchor_3" id="toc_header_anchor_3" class="topic-toc-item"></a><h2>Call/Use/Selecione um&nbsp;Preset</h2>

<p>Se voc?? armazenar um preset, voc?? obt??m o link para o preset diretamente em seu programador. Isso permite que voc?? armazene um cue diretamente depois e ter o preset no cue.</p>

<p>Se voc?? precisa usar um preset depois de t??-lo criado, ent??o voc?? tem as seguintes op????es. Se voc?? n??o tem nenhum fixture selecionado, voc?? pode tocar no preset &nbsp;que deseja usar. O primeiro toque seleciona todos os fixtures que podem usar o preset. Voc?? vai precisar tocar novamente para realmente ter o preset em seu programador.</p>

<p>Se voc?? tem uma sele????o de fixtures e voc?? toca em um preset, ent??o s??o apenas os fixtures que podem realmente usar o preset que recebem o preset no programador.</p>

<p>Uma vez que voc?? tenha os valores de preset em seu programador, voc?? pode: armazenar um cue, um novo preset ou tirar os valores de seu programador novamente.</p>

<a name="toc_header_anchor_4" id="toc_header_anchor_4" class="topic-toc-item"></a><h2>Fazer o Update de um&nbsp;preset</h2>

<p>Se voc?? precisa fazer um&nbsp;update&nbsp;(atualizar) os valores no&nbsp;preset, ent??o voc?? precisa selecionar os&nbsp;fixtures&nbsp;que voc?? deseja atualizar e dar o valor que voc?? deseja. Pressione a tecla&nbsp;<span class="hardkey">Update</span>&nbsp;e toque no preset que voc?? deseja atualizar.</p>

<p>Isso ?? o mesmo que pressionar&nbsp;<span class="hardkey">Store</span>&nbsp;seguido do&nbsp;preset&nbsp;que voc?? deseja atualizar e depois escolher&nbsp;<span class="softkey">Merge</span>&nbsp;na&nbsp;<a href="/Topic/662173f7-aa38-4f78-b6da-7d357eace37d">janela Escolha o M??todo de Store</a>.</p>

<p>Agora, os valores em seu&nbsp;preset&nbsp;mudaram. Se voc?? usar o&nbsp;preset&nbsp;em um&nbsp;cue&nbsp;em algum lugar, esse&nbsp;cue&nbsp;estar?? diferente - ele usar?? os valores atualizados.</p>

<p>Se voc?? j?? usou um&nbsp;preset&nbsp;em um&nbsp;cue&nbsp;e voc?? adiciona novos valores (n??o alterando os j?? existentes) ou adiciona mais&nbsp;fixtures&nbsp;no&nbsp;preset, ent??o esta nova informa????o n??o ?? adicionada em seu novo&nbsp;cue&nbsp;salvo anteriormente.&nbsp;Cues s?? procuram pelos valores que foram originalmente armazenados no&nbsp;cue.</p>

<p>Delete um preset.</p>

<p>Voc?? pode deletar um preset pressionando <span class="hardkey">Delete</span> e, em seguida, o preset que deseja excluir. Se o preset est?? sendo usado em algum lugar, ent??o voc?? obt??m uma janela de aviso perguntando se voc?? realmente deseja apagar o preset.</p>

<p>Se voc?? optar por excluir um preset usado, os valores atuais no preset s??o copiados para os cues onde s??o usados. Assim, seus cues continuam funcionando.</p>

<p>Se voc?? pressionar <span class="hardkey">Oops</span> ap??s deletar, voc?? ter?? o preset de volta, mas link entre o cue e o preset estar?? quebrado e isso voc?? n??o ter?? de volta.</p>

<p>&nbsp;</p>

<p>&nbsp;</p>

<a name="toc_header_anchor_5" id="toc_header_anchor_5" class="topic-toc-item"></a><h2>Links Relacionados</h2>

<p><a href="/Topic/740955a8-3b27-4e50-b35c-7a728c1d9c38">O que s??o Presets</a></p>

<p><a href="/Topic/e740a39c-ef36-4081-9014-59e0a288711c">O que ?? o Programador</a></p>


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
		<input id="CurrentGuid" name="CurrentGuid" type="hidden" value="1d3c4f8d-0d36-44da-9f6d-fa91f0db3024">
	</span>
</form></div>&nbsp;	</span>
	<span class="pull-right" style="white-space: nowrap;">
			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/HT_Groups/pt/1.1'; " title="Go to previous page 'Trabalhar com Grupos'">
				<i class="icon-arrow-left"></i> previous
			</button>

			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/HT_Cues/pt/1.1';" title="Go to next page 'Trabalhar com Cues'">
				next <i class="icon-arrow-right"></i> 
			</button>
	</span>
</div>
	<div class="clear-fix"></div>
	<div class="pull-right">
	
			<button class="btn btn-mini" onclick="location.href='/Media/TopicPdf/12883/3';" title="Open/Save this topic as PDF document for viewing or printing">
				<img src="/Content/images/icons/filetype_pdf.png"> Open topic as PDF
			</button>
	</div>
<div class="clear-fix" style="margin-bottom: 10px"></div>
</div>

	
