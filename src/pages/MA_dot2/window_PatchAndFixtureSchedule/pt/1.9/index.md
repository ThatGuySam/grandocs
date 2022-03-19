
<div class="topic-navigation">

<div class="pull-right">
	<span class="pull-left">


<div class="pull-left">
<form action="/Topic/SetCurrentVersionNumber" class="form-inline" id="frmTagSelector" method="post">	<span class="form-mini">
		<div class="input-prepend"><span class="add-on">Select different version</span><select autocomplete="off" id="versionNumberId" name="versionNumberId" onchange="$(this).closest('#frmTagSelector').submit();" style="width: 120px;"><option value="">- latest -</option>
<option value="3">1.1</option>
<option value="7">1.2</option>
<option value="12">1.3</option>
<option value="16">1.5</option>
<option selected="selected" value="29">1.9</option>
</select></div>
		<input data-val="true" data-val-number="The field Int32 must be a number." data-val-required="The Int32 field is required." id="ProductId" name="ProductId" type="hidden" value="7">
		<input id="CurrentGuid" name="CurrentGuid" type="hidden" value="272be3c8-e297-4e8a-902a-01916763f043">
	</span>
</form></div>&nbsp;	</span>
	<span class="pull-right" style="white-space: nowrap;">
			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/ViewItem_page/pt/1.9'; " title="Go to previous page 'Page Pool'">
				<i class="icon-arrow-left"></i> previous
			</button>

			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/viewitem_position/pt/1.9';" title="Go to next page 'Position Preset Type'">
				next <i class="icon-arrow-right"></i> 
			</button>
	</span>
</div>
<div class="clear-fix" style="margin-bottom: 10px"></div>
</div>

		
			<div class="pull-right">
					<button class="btn btn-mini" style="margin-right: 10px; height: 30px;" onclick="location.href = '/Media/TopicPdf/40637/29'; " title="Open/Save this topic as PDF document for viewing or printing">
						<img src="/Content/images/icons/filetype_pdf.png" style="height: 24px;"> Open topic as PDF
					</button>
				<span class="badge badge-info">Version 1.9</span>
			</div>
		<h1>Janela Menu de Patch</h1>

			<div class="topic-table-of-contents">
				<h2>Table of contents of this topic</h2>
				<div class="topic-toc-toggler topic-toc-toggler-hide"><a href="#" onclick="$('.topic-toc-ul').toggle(); $('.topic-toc-toggler-hide').hide(); $('.topic-toc-toggler-show').show(); return false;">hide</a></div>
				<div class="topic-toc-toggler topic-toc-toggler-show" style="display: none;"><a href="#" onclick="$('.topic-toc-ul').toggle(); $('.topic-toc-toggler-hide').show(); $('.topic-toc-toggler-show').hide(); return false;">show</a></div>
				<ul class="topic-toc-ul">
						<li>
							<a href="#toc_header_anchor_1">Colunas no Menu de Patch</a>
						</li>
						<li>
							<a href="#toc_header_anchor_2">Botões no Menu de Patch</a>
						</li>
						<li>
							<a href="#toc_header_anchor_3">Funções da Barra de Encoder</a>
						</li>
				</ul>
			</div>

		<p>A Janela Menu de Patch&nbsp;está localizada em&nbsp;<a href="/Topic/198599eb-ca20-4e60-b007-bb08cd2ce43b">Setup</a>, coluna&nbsp;<strong>Show</strong>, toque em&nbsp;<span class="softkey">Menu de Patch</span>.</p>

<p><img alt="" src="/Media/Image/Dot2_ViewsandWindows_PatchAndFixtureSchedule01_1-2.png"><em>Figura 1: Menu de&nbsp;Patch</em></p>

<p>Nesta vista, você tem uma visão geral de todos os fixtures importados no arquivo de show.</p>

<p>Você também pode inverter os valores de DMX e os encoders.</p>

<p>Os fixtures selecionados tem um fundo azul e uma moldura branca.</p>

<p>Para&nbsp;confirmar as configurações clique em <strong>Ok</strong>&nbsp;na <a href="/Topic/a9e3dcd7-1fb1-4dab-8e42-03f9e0de3e99">barra de título</a>.<br>
Isso abre a&nbsp;<a href="/Topic/f219df9d-fe29-4b69-b856-17313e466884">janela Abandonando o Menu de Patch...</a>.</p>

<a name="toc_header_anchor_1" id="toc_header_anchor_1" class="topic-toc-item"></a><h2>Colunas no Menu de Patch</h2>

<p>O menu&nbsp;tem nove colunas.</p>

<p><img alt="" src="/Media/Image/colunas_menu_patch.PNG"><em>Figura 2: Colunas do Menu de&nbsp;Patch</em></p>

<p><strong>FixId:</strong><br>
Exibe o Id de fixture. Esta coluna tem uma função de classificação.<br>
Para editar Id de fixture, pressione e segure a célula ou pressione o encoder. A janela&nbsp;<a href="/Topic/01949542-9b01-4052-b2c5-ac718d5dbdfe">Selecione o(s) ID(s) de Fixture</a>&nbsp;se abre.</p>

<p><strong>Nome:</strong><br>
Exibe o&nbsp;nome de&nbsp;fixture. Esta coluna tem uma função de classificação.<br>
Para editar o nome do&nbsp;fixture, pressione e segure a célula ou pressione o&nbsp;encoder. A&nbsp;<a href="/Topic/26701109-1218-40c5-a9bc-26913cd9cb54">janela Inserir Nome</a> se abre.</p>

<p><strong>Tipo de Fixture:</strong><br>
Exibe o tipo de fixture, incluindo o número do tipo de fixture no início e o modo.<br>
Esta coluna tem uma função de classificação.<br>
Para editar o tipo de fixture, toque em&nbsp;<span class="softkey">Alterar Tipo de&nbsp;Fixture</span>, ou pressione e segure a célula ou pressione o encoder. A Janela&nbsp;<a href="/Topic/96c563e2-9cf8-4ebd-813a-8eead50ca853">Selecionar o Tipo de Fixture...</a>&nbsp;se abre.</p>

<p><strong>Patch:</strong><br>
Exibe o endereço de&nbsp;patch (endereço de&nbsp;DMX). Se um fixture&nbsp;não possui&nbsp;patch, ele é exibido como um traço entre parênteses.<br>
Para editar o endereço de&nbsp;patch, pressione e segure a célula ou pressione o encoder de rolagem. A janela&nbsp;<a href="/Topic/bfc8868e-9fe1-4364-be83-5f81994da9e8">Selecione o Endereço de DMX...</a>&nbsp;se abre.</p>

<p><strong>Pan DMX Invertido:</strong><br>
Exibe se o&nbsp;pan DMX invertido está ligado ou desligado (= nada é exibido).<br>
Para alterar o status, pressione e segure a célula ou pressione o encoder de rolagem.</p>

<p><strong>Tilt DMX Invertido:</strong><br>
Exibe se o tilt&nbsp;DMX&nbsp;invertido está ligado ou desligado (= nada é exibido).<br>
Para alterar o status, pressione e segure a célula ou pressione o&nbsp;encoder&nbsp;de&nbsp;rolagem.</p>

<p><strong>Pan Enc. (=Encoder) Invertido:</strong><br>
Exibe se o&nbsp;pan encoder&nbsp;DMX&nbsp;invertido está ligado ou desligado (= nada é exibido).<br>
Para alterar o status, pressione e segure a célula ou pressione o&nbsp;encoder&nbsp;de&nbsp;rolagem.</p>

<p><strong>Tilt Enc. Invert:</strong><br>
Exibe se o tilt&nbsp;encoder&nbsp;DMX&nbsp;invertido está ligado ou desligado (= nada é exibido).<br>
Para alterar o status, pressione e segure a célula ou pressione o&nbsp;encoder&nbsp;de&nbsp;rolagem.&nbsp;</p>

<p><strong>Cor de Visualização:&nbsp;</strong><br>
A cor de visualização, ajuda a exibir a cor real da luz no dot2 3D ou na Vista de Fixtures, por exemplo, para dimmer usando um gel.&nbsp;<br>
Para alterar a cor de visualização, pressione e segure a célula ou pressione o encoder de deslocamento.&nbsp;<br>
A janela Editar Cor de Visualização se abre.&nbsp;<br>
A janela Editar Visualização é basicamente o mesmo que a vista de <a href="/Topic/0fd235c9-f6a5-4c9b-a2c0-b7f90045a63a">Visualização Color Preset Type.</a></p>

<p><strong>React to Master:</strong><br>
Como padrão, React to Master está sempre ativado.<br>
Sempre que é ativado, os atributos do dimmer de fixtures são afetados pelo Grand Master e pelo Solo. Se o React to Master estiver desativado, a intensidade não será afetada por eles.<br>
Os fixtures ficam verde oliva no Fixture Schedule, para mais informações toque em&nbsp;<a href="/Topic/0c3935ea-3e3f-4781-bc57-572da5b50c1c">Cores do sistema&nbsp; – Plano de fundo.&nbsp;</a></p>

<a name="toc_header_anchor_2" id="toc_header_anchor_2" class="topic-toc-item"></a><h2>Botões no Menu de Patch</h2>

<p>Na direita da janela há&nbsp;cinco botões.</p>

<p><em><img alt="" src="/Media/Image/menu_de_patch.PNG"><br>
Figura 3:&nbsp;Botões do Menu de Patch</em></p>

<p><strong>Adicionar Novos Fixtures:</strong></p>

<p>Toque para abrir a <a href="/Topic/dce789eb-89d8-49f1-aedc-bd9fbd45afa0">Janela Adicionar Novos Fixtures</a>.</p>

<p><strong>Criar Multipatch:</strong><br>
Toque para abrir a <a href="/Topic/014d961b-8de1-4f48-92de-e6da3cc6a15f">Calculadora</a>. Insira a quantidade de&nbsp;multipatch fixtures.<br>
Multipatch cria uma&nbsp;linha adicional para&nbsp;patchear vários endereços&nbsp;de DMX para o&nbsp;fixture selecionado no Menu de Patch. Isso é usado para controlar vários endereços de DMX usando um ID de&nbsp;fixture no console. Multipatch fixtures estão fazendo todos a mesma coisa, indicados pelo mesmo ID de fixture. Multipatch fixtures&nbsp;são visualizados na dot2 3D. Para mais informações, consulte <a href="/Topic/514b6d60-900a-43cb-b26e-11771352d26e">dot2 3D - 3D objetos</a></p>

<p>&nbsp;</p>

<p><strong>Alterar Tipo de&nbsp;Fixture:</strong></p>

<p>Toque para alterar o tipo de fixture&nbsp;selecionado. A&nbsp;<a href="/Topic/96c563e2-9cf8-4ebd-813a-8eead50ca853">janela Selecionar Tipo de Fixture...</a>&nbsp;se abre.</p>

<p>&nbsp;</p>

<div class="important"><strong>Importante:</strong><br>
Alterar os tipos de fixtures para os tipos de fixtures que têm mais canais DMX não exclui o patch antigo, em vez disso, exibe os endereços de patch inválidos em vermelho. Para mais informações, veja​&nbsp;<a href="/Topic/713c4cc8-7221-428e-a635-f3eca1f59635">Adicionar, patch,alterar, e excluir&nbsp;fixtures.&nbsp;</a></div>

<p><strong>Despatchear Seleção:</strong><br>
Toque para despatchear&nbsp;os fixtures selecionados.</p>

<p><strong>Deletar Seleção:</strong><br>
Toque para deletar&nbsp;os fixtures selecionados do Menu de Patch.</p>

<a name="toc_header_anchor_3" id="toc_header_anchor_3" class="topic-toc-item"></a><h2>Funções da Barra de Encoder</h2>

<p><em><img alt="" src="/Media/Image/barra_de_encoder_1.PNG">Figura 4: Funções da Barra de&nbsp;Encoder&nbsp;- Menu de&nbsp;Patch</em></p>

<p><strong>Scroll:</strong><br>
Para rolar para cima ou para baixo, gire o encoder para a esquerda ou direita.<br>
Para rolar para a esquerda ou direita, pressione e gire o encoder para a esquerda ou direita.<br>
Para editar uma célula selecionada, pressione o encoder. A respectiva janela é aberta.</p>

<p><strong>Selecionar:</strong><br>
Para selecionar tipos de fixture, pressione a tecla&nbsp;<span class="hardkey"><img alt="ma" src="/Media/Mlg/ma.png"></span>&nbsp;e gire o encoder para a esquerda ou direita.<br>
Para cancelar uma seleção de tipos de fixture, pressione a tecla&nbsp;<span class="hardkey"><img alt="ma" src="/Media/Mlg/ma_1.png"></span>&nbsp;e pressione o encoder.</p>


				<br>
<div class="topic-navigation">

<div class="pull-right">
	<span class="pull-left">


<div class="pull-left">
<form action="/Topic/SetCurrentVersionNumber" class="form-inline" id="frmTagSelector" method="post">	<span class="form-mini">
		<div class="input-prepend"><span class="add-on">Select different version</span><select autocomplete="off" id="versionNumberId" name="versionNumberId" onchange="$(this).closest('#frmTagSelector').submit();" style="width: 120px;"><option value="">- latest -</option>
<option value="3">1.1</option>
<option value="7">1.2</option>
<option value="12">1.3</option>
<option value="16">1.5</option>
<option selected="selected" value="29">1.9</option>
</select></div>
		<input data-val="true" data-val-number="The field Int32 must be a number." data-val-required="The Int32 field is required." id="ProductId" name="ProductId" type="hidden" value="7">
		<input id="CurrentGuid" name="CurrentGuid" type="hidden" value="272be3c8-e297-4e8a-902a-01916763f043">
	</span>
</form></div>&nbsp;	</span>
	<span class="pull-right" style="white-space: nowrap;">
			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/ViewItem_page/pt/1.9'; " title="Go to previous page 'Page Pool'">
				<i class="icon-arrow-left"></i> previous
			</button>

			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/viewitem_position/pt/1.9';" title="Go to next page 'Position Preset Type'">
				next <i class="icon-arrow-right"></i> 
			</button>
	</span>
</div>
	<div class="clear-fix"></div>
	<div class="pull-right">
	
			<button class="btn btn-mini" onclick="location.href='/Media/TopicPdf/40637/29';" title="Open/Save this topic as PDF document for viewing or printing">
				<img src="/Content/images/icons/filetype_pdf.png"> Open topic as PDF
			</button>
	</div>
<div class="clear-fix" style="margin-bottom: 10px"></div>
</div>

	