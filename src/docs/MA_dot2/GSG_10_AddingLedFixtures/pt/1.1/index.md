---
originalUrl: 'https://help2.malighting.com/Page/MA_dot2/GSG_10_AddingLedFixtures/pt/1.1'
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
		<input id="CurrentGuid" name="CurrentGuid" type="hidden" value="009e1ef0-6b40-4d3d-808c-628d1af0a82c">
	</span>
</form></div>&nbsp;	</span>
	<span class="pull-right" style="white-space: nowrap;">
			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/GSG_09_MakingMoreCues/pt/1.1'; " title="Go to previous page '9 - Fazendo mais cues na lista de cue'">
				<i class="icon-arrow-left"></i> previous
			</button>

			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/GSG_11_WorkingWithColors/pt/1.1';" title="Go to next page '11 - Trabalhando com cores'">
				next <i class="icon-arrow-right"></i> 
			</button>
	</span>
</div>
<div class="clear-fix" style="margin-bottom: 10px"></div>
</div>

					<div class="infobox"><b>Hint:</b><br><b>New help version</b><br>The help version you selected belongs to an older software version. <a href="/Topic/SetCurrentVersionNumber/29/009e1ef0-6b40-4d3d-808c-628d1af0a82c">You may want to view the latest help version.</a></div>

			<div class="pull-right">
					<button class="btn btn-mini" style="margin-right: 10px; height: 30px;" onclick="location.href = '/Media/TopicPdf/12311/3'; " title="Open/Save this topic as PDF document for viewing or printing">
						<img src="/Content/images/icons/filetype_pdf.png" style="height: 24px;"> Open topic as PDF
					</button>
				<span class="badge badge-info">Version 1.1</span>
			</div>
		<h1>Guia de Introdu????o - Adicionando fixtures de LED</h1>


		<p>Agora iremos adicionar mais alguns fixtures&nbsp;ao nosso patch.</p>

<p>Temos quatro fixtures ETC Vivid-R 11 color wash. Nossa nova planta se parece com isso:</p>

<p><span class="image_gray_border"><img alt="" src="/Media/Image/Dot2_GettingStarted_AddingLedFixtures_01_1-0.png"></span></p>

<p>Eles s??o montados em tubos verticais em cada lado do palco.</p>

<p>Precisamos voltar para o Setup e adicionar esses quatro fixtures. Pressione <span class="hardkey">Setup</span> e selecione <span class="softkey">Menu de Patch</span>.</p>

<p>No lado direito voc?? ver?? um bot??o chamado <span class="softkey">Adicionar Novos Fixtures</span>&nbsp;- Isso ?? o que precisamos.</p>

<p>Quando pressionado, voc?? vai obter a janela <strong>Adicionar novos Fixtures</strong>.</p>

<p>Nesse tipo ainda temos o Dimmer selecionado. N??s temos todos os dimmers que precisamos, por isso precisamos obter um novo tipo de fixture. Pressione o bot??o pr??ximo a essa ??rea onde se diz <span class="softkey">Selecionar Outro...</span>. Se esta ?? a primeira vez que isso ?? feito, ent??o o console precisa atualizar a biblioteca de fixture - Isso pode demorar alguns segundos.</p>

<p>Quando estiver pronto (ou se voc?? n??o precisou esperar) voc?? pode pressionar o campo de entrada verde e digitar <strong>vivid</strong>.</p>

<p>A busca ir?? exibir todos os hits poss??veis na biblioteca de fixture. A maneira mais f??cil para selecionar o fixture certo ?? usando os encoders.</p>

<p>Precisamos de um do ETC chamado Vivid-R 11. O fixture s?? tem um modo dispon??vel. Muitas vezes, quando este ?? o caso, o modo ser?? chamado de "00". ?? a mesma coisa para os nossos dimmers - lembre-se que eles tamb??m t??m um 00 no final.</p>

<p>Ok, quando voc?? encontrou-o e a parte inferior da sua tela estiver parecida com esta:</p>

<p><span class="image_gray_border"><img alt="" src="/Media/Image/Dot2_GettingStarted_AddingLedFixtures_02_1-0.png"></span></p>

<p>Ent??o, podemos pressionar o <span class="softkey">OK</span> no canto superior direito.</p>

<p>Agora o nosso tipo de fixture ?? o correto. Altere a quantidade para 4 e o ID de fixture para 21.</p>

<p>Precisamos tamb??m alterar o endere??o do primeiro fixture. Queremos patche??-los&nbsp;do primeiro endere??o no segundo universo DMX e n??s queremos que eles tenham 10 endere??os entre eles&nbsp;(eles apenas usaram 8 canais). Pressione o encoder mais ?? direita.</p>

<p>Isso abre a janela <strong>Selecionar o Endere??o de DMX</strong>. Aqui voc?? pode ver o que est?? patcheado para os 8 universos dispon??veis.</p>

<p>Mais uma vez podemos utilizar os encoders para alterar o endere??o de patch. O encoder da esquerda seleciona o universo e a direita seleciona o endere??o. O encoder mediano direito ?? chamado de "Patch Offset" - isso pode ser usado para adicionar automaticamente mais canais entre fixtures. Precisamos do universo 2, endere??o 1 e queremos ter 10 canais entre o primeiro endere??o de cada fixture, por isso precisamos definir o Patch Offset para 10.&nbsp;&nbsp;Precisamos do universo 2 e do endere??o 1. Quando voc?? tiver isso, pode pressionar&nbsp;<span class="softkey">OK</span> no canto superior direito, isso nos leva para fora da janela Selecionar Endere??o de DMX.</p>

<p>Mais uma vez, pode pressionar o <span class="softkey">OK</span> no canto superior direito (para fechar a janela Adicionar Novo Fixture). Isso nos leva ao Setup de Fixture &nbsp;- est?? tudo certo aqui, pressione o <span class="softkey">Ok</span> no canto superior direito e selecione <span class="softkey">Ok, Aplicar Todas as Altera????es</span>.</p>

<p>Era isso. Agora voc?? pode ver na vista de Fixture que temos 4 novos fixtures:</p>

<p><span class="image_gray_border"><img alt="" src="/Media/Image/Dot2_GettingStarted_AddingLedFixtures_03_1-0.png"></span></p>

<p>&nbsp;</p>

<p>No pr??ximo cap??tulo, veremos como controlar esses novos fixtures.</p>


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
		<input id="CurrentGuid" name="CurrentGuid" type="hidden" value="009e1ef0-6b40-4d3d-808c-628d1af0a82c">
	</span>
</form></div>&nbsp;	</span>
	<span class="pull-right" style="white-space: nowrap;">
			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/GSG_09_MakingMoreCues/pt/1.1'; " title="Go to previous page '9 - Fazendo mais cues na lista de cue'">
				<i class="icon-arrow-left"></i> previous
			</button>

			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/GSG_11_WorkingWithColors/pt/1.1';" title="Go to next page '11 - Trabalhando com cores'">
				next <i class="icon-arrow-right"></i> 
			</button>
	</span>
</div>
	<div class="clear-fix"></div>
	<div class="pull-right">
	
			<button class="btn btn-mini" onclick="location.href='/Media/TopicPdf/12311/3';" title="Open/Save this topic as PDF document for viewing or printing">
				<img src="/Content/images/icons/filetype_pdf.png"> Open topic as PDF
			</button>
	</div>
<div class="clear-fix" style="margin-bottom: 10px"></div>
</div>

	
