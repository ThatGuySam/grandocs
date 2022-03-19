
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
		<h1>Guia de Introdução - Adicionando fixtures de LED</h1>


		<p>Agora iremos adicionar mais alguns fixtures&nbsp;ao nosso patch.</p>

<p>Temos quatro fixtures ETC Vivid-R 11 color wash. Nossa nova planta se parece com isso:</p>

<p><span class="image_gray_border"><img alt="" src="/Media/Image/Dot2_GettingStarted_AddingLedFixtures_01_1-0.png"></span></p>

<p>Eles são montados em tubos verticais em cada lado do palco.</p>

<p>Precisamos voltar para o Setup e adicionar esses quatro fixtures. Pressione <span class="hardkey">Setup</span> e selecione <span class="softkey">Menu de Patch</span>.</p>

<p>No lado direito você verá um botão chamado <span class="softkey">Adicionar Novos Fixtures</span>&nbsp;- Isso é o que precisamos.</p>

<p>Quando pressionado, você vai obter a janela <strong>Adicionar novos Fixtures</strong>.</p>

<p>Nesse tipo ainda temos o Dimmer selecionado. Nós temos todos os dimmers que precisamos, por isso precisamos obter um novo tipo de fixture. Pressione o botão próximo a essa área onde se diz <span class="softkey">Selecionar Outro...</span>. Se esta é a primeira vez que isso é feito, então o console precisa atualizar a biblioteca de fixture - Isso pode demorar alguns segundos.</p>

<p>Quando estiver pronto (ou se você não precisou esperar) você pode pressionar o campo de entrada verde e digitar <strong>vivid</strong>.</p>

<p>A busca irá exibir todos os hits possíveis na biblioteca de fixture. A maneira mais fácil para selecionar o fixture certo é usando os encoders.</p>

<p>Precisamos de um do ETC chamado Vivid-R 11. O fixture só tem um modo disponível. Muitas vezes, quando este é o caso, o modo será chamado de "00". É a mesma coisa para os nossos dimmers - lembre-se que eles também têm um 00 no final.</p>

<p>Ok, quando você encontrou-o e a parte inferior da sua tela estiver parecida com esta:</p>

<p><span class="image_gray_border"><img alt="" src="/Media/Image/Dot2_GettingStarted_AddingLedFixtures_02_1-0.png"></span></p>

<p>Então, podemos pressionar o <span class="softkey">OK</span> no canto superior direito.</p>

<p>Agora o nosso tipo de fixture é o correto. Altere a quantidade para 4 e o ID de fixture para 21.</p>

<p>Precisamos também alterar o endereço do primeiro fixture. Queremos patcheá-los&nbsp;do primeiro endereço no segundo universo DMX e nós queremos que eles tenham 10 endereços entre eles&nbsp;(eles apenas usaram 8 canais). Pressione o encoder mais à direita.</p>

<p>Isso abre a janela <strong>Selecionar o Endereço de DMX</strong>. Aqui você pode ver o que está patcheado para os 8 universos disponíveis.</p>

<p>Mais uma vez podemos utilizar os encoders para alterar o endereço de patch. O encoder da esquerda seleciona o universo e a direita seleciona o endereço. O encoder mediano direito é chamado de "Patch Offset" - isso pode ser usado para adicionar automaticamente mais canais entre fixtures. Precisamos do universo 2, endereço 1 e queremos ter 10 canais entre o primeiro endereço de cada fixture, por isso precisamos definir o Patch Offset para 10.&nbsp;&nbsp;Precisamos do universo 2 e do endereço 1. Quando você tiver isso, pode pressionar&nbsp;<span class="softkey">OK</span> no canto superior direito, isso nos leva para fora da janela Selecionar Endereço de DMX.</p>

<p>Mais uma vez, pode pressionar o <span class="softkey">OK</span> no canto superior direito (para fechar a janela Adicionar Novo Fixture). Isso nos leva ao Setup de Fixture &nbsp;- está tudo certo aqui, pressione o <span class="softkey">Ok</span> no canto superior direito e selecione <span class="softkey">Ok, Aplicar Todas as Alterações</span>.</p>

<p>Era isso. Agora você pode ver na vista de Fixture que temos 4 novos fixtures:</p>

<p><span class="image_gray_border"><img alt="" src="/Media/Image/Dot2_GettingStarted_AddingLedFixtures_03_1-0.png"></span></p>

<p>&nbsp;</p>

<p>No próximo capítulo, veremos como controlar esses novos fixtures.</p>


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

	