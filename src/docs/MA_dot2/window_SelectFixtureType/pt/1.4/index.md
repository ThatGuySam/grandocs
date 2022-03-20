---
originalUrl: 'https://help2.malighting.com/Page/MA_dot2/window_SelectFixtureType/pt/1.4'
---

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
		<input id="CurrentGuid" name="CurrentGuid" type="hidden" value="96c563e2-9cf8-4ebd-813a-8eead50ca853">
	</span>
</form></div>&nbsp;	</span>
	<span class="pull-right" style="white-space: nowrap;">
			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/window_SelectFixturesIDsWindow/pt/1.9'; " title="Go to previous page 'Select Fixtures ID(s)'">
				<i class="icon-arrow-left"></i> previous
			</button>

			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/window_selectbutton/pt/1.9';" title="Go to next page 'Select Function  for Remote Inputs Configuration'">
				next <i class="icon-arrow-right"></i> 
			</button>
	</span>
</div>
<div class="clear-fix" style="margin-bottom: 10px"></div>
</div>

		
			<div class="pull-right">
					<button class="btn btn-mini" style="margin-right: 10px; height: 30px;" onclick="location.href = '/Media/TopicPdf/17870/29'; " title="Open/Save this topic as PDF document for viewing or printing">
						<img src="/Content/images/icons/filetype_pdf.png" style="height: 24px;"> Open topic as PDF
					</button>
				<span class="badge badge-info">Version 1.9</span>
			</div>
		<h1>Janela Selecionar Tipo de Fixture...</h1>

			<div class="topic-table-of-contents">
				<h2>Table of contents of this topic</h2>
				<div class="topic-toc-toggler topic-toc-toggler-hide"><a href="#" onclick="$('.topic-toc-ul').toggle(); $('.topic-toc-toggler-hide').hide(); $('.topic-toc-toggler-show').show(); return false;">hide</a></div>
				<div class="topic-toc-toggler topic-toc-toggler-show" style="display: none;"><a href="#" onclick="$('.topic-toc-ul').toggle(); $('.topic-toc-toggler-hide').show(); $('.topic-toc-toggler-show').hide(); return false;">show</a></div>
				<ul class="topic-toc-ul">
						<li>
							<a href="#toc_header_anchor_1">Vista de Símbolo</a>
						</li>
						<li>
							<a href="#toc_header_anchor_2">Vista de Folha</a>
						</li>
						<li>
							<a href="#toc_header_anchor_3">Info de Tipo de Fixture</a>
						</li>
						<li>
							<a href="#toc_header_anchor_4">Funções da Barra da Encoder</a>
						</li>
				</ul>
			</div>

		<p>A <strong>Janela Selecionar Tipo de Fixture</strong>... está localizada em&nbsp;<a href="/Topic/198599eb-ca20-4e60-b007-bb08cd2ce43b">Setup</a>, coluna&nbsp;<strong>Show</strong>, <a href="/Topic/272be3c8-e297-4e8a-902a-01916763f043">Menu de Patch</a>, toque <span class="softkey">Alterar Tipo de Fixture</span>&nbsp;ou pressione e segura uma célula de Tipo de Fixture.</p>

<p><img alt="" src="/Media/Image/Dot2_ViewsandWindows_SelectFixtureType01_1-1-3.png"><em>Figura 1: Janela Selecionar Tipo de&nbsp;Fixture</em></p>

<p>Nesta vista, você vê todos os tipos de fixtures do arquivo de show.</p>

<div class="tip"><strong>Dica:</strong><br>
Se você alterar um tipo de fixture&nbsp;Roda de Cor para um tipo de fixture&nbsp;Color Mix, a cor será automaticamente convertida.</div>

<p>Para importar um novo tipo de fixture da biblioteca no arquivo de show, toque no&nbsp;<strong>ícone importar</strong> &nbsp;<img alt="" src="/Media/Image/Dot2_ViewsandWindows_SelectFixtureType08_1-2.png"> na&nbsp;<a href="/Topic/a9e3dcd7-1fb1-4dab-8e42-03f9e0de3e99">barra de título</a>. Isso abre a&nbsp;<a href="/Topic/a924561a-b1eb-4661-aa5f-99867413e4ea">Janela Importar Tipo de Fixture</a>.</p>

<p>Para exportar tipos de&nbsp;fixture&nbsp;para um&nbsp;USB e para a biblioteca de&nbsp;fixture no disco, toque no&nbsp;<strong>ícone exportar</strong> <img alt="" src="/Media/Image/Dot2_ViewsandWindows_SelectFixtureType09_1-2.png">. Um pop-up de informação abre e lhe diz qual tipo de fixture foi exportado. O arquivo .xml de tipo de fixture está no USB na pasta <strong>dot2/biblioteca</strong>. Além disso, o tipo de fixture pode ser importado através da <a href="/Topic/a924561a-b1eb-4661-aa5f-99867413e4ea">janela Importar Tipo de Fixture</a>.</p>

<div class="important"><strong>Importante:</strong><br>
Depois de uma atualização de software ou um reset de fábrica, a biblioteca de fixture na janela Importar Tipo de Fixture também será resetada. Tipos de fixture exportados serão deletados.</div>

<p>Para deletar tipos de fixture exportados do disco interno, uma atualização de software ou um reset de fábrica são necessários. Consulte, <a href="/Topic/1771b6fb-3f46-4840-a159-69db6fc031bc">Como fazer o update do console?</a>&nbsp;e <a href="/Topic/f181c34c-b7a8-48df-a99d-c53f96cac5a7">Como fazer o reset do console?</a>.</p>

<p>Para mudar da&nbsp;<strong>vista de símbolo</strong>&nbsp;<img alt="" src="/Media/Image/Dot2_ViewsandWindows_SelectFixtureType05_1-1-3.png">&nbsp;para&nbsp;<strong>vista de folha​&nbsp;<img alt="" src="/Media/Image/Dot2_ViewsandWindows_SelectFixtureType06_1-1-3.png"></strong>, toque no ícone&nbsp;respectivo&nbsp;na&nbsp;<a href="/Topic/a9e3dcd7-1fb1-4dab-8e42-03f9e0de3e99">barra de título</a>.</p>

<p>Para deletar&nbsp;um fixture&nbsp;não utilizado do arquivo de show, toque na&nbsp;<strong>lata de lixo&nbsp;<img alt="" src="/Media/Image/Dot2_ViewsandWindows_SelectFixtureType07_1-1-3.png"></strong>.</p>

<p>Para confirmar as alterações clique <strong>OK </strong><img alt="" src="/Media/Image/Dot2_ViewsandWindows_ControlElements_TitleBar13_1-0.PNG">.</p>

<p>Para sair da <strong>Janela Selecionar Tipo de Fixture...</strong><strong>,</strong>&nbsp;toque em&nbsp;<img alt="" src="/Media/Image/Dot2_ViewsandWindows_ControlElements_TitleBar14_1-0_1.PNG">.</p>

<p>Para mais informações sobre adicionar e patchear fixtures, veja&nbsp;<a href="/Topic/713c4cc8-7221-428e-a635-f3eca1f59635">como adicionar e patchear fixtures?</a></p>

<p>&nbsp;</p>

<a name="toc_header_anchor_1" id="toc_header_anchor_1" class="topic-toc-item"></a><h2>Vista de Símbolo</h2>

<p>Para ir para a vista de símbolo, toque no&nbsp;<strong>ícone da vista de símbolo</strong>&nbsp;<img alt="" src="/Media/Image/Dot2_ViewsandWindows_SelectFixtureType05_1-1-3.png">&nbsp;na barra de título.</p>

<p>Os tipos de fixture&nbsp;estão alinhados em quadrados.</p>

<p>Um tipo de fixture selecionado tem uma moldura branca em torno dele.</p>

<p>O número no canto superior esquerdo do bloco, exibe o número do tipo de fixture&nbsp;no arquivo show atual.<br>
Na fonte branca em negrito é exibido o tipo de fixture.<br>
Abaixo do tipo de fixture, o fabricante é exibido.</p>

<p>&nbsp;</p>

<a name="toc_header_anchor_2" id="toc_header_anchor_2" class="topic-toc-item"></a><h2>Vista de Folha</h2>

<p>Para ir para a vista de tabela, toque no <strong>ícone da vista de folha&nbsp;<img alt="" src="/Media/Image/Dot2_ViewsandWindows_SelectFixtureType06_1-1-3.png"></strong>&nbsp;na barra de título.</p>

<p><img alt="" src="/Media/Image/Dot2_ViewsandWindows_SelectFixtureType02_1-1-3.png"><em>Figura 2: Janela Selecionar Tipo de&nbsp;Fixture...&nbsp;- Vista de Folha</em></p>

<p>A tabela tem nove colunas com informações para o tipo de fixture.</p>

<p>As células com um plano de fundo cinza mais claro são editáveis.<br>
As células com um plano de fundo fundo cinza mais escuro são apenas para leitura.</p>

<p><strong>1. No</strong><br>
Exibe o número do tipo de fixture no arquivo de show atual.</p>

<p><strong>2. NomeLongo</strong><br>
Exibe o nome completo do tipo de fixture.<br>
Para editá-lo, pressione e segure a célula. Isso abrirá a <strong>Janela Editar&nbsp;NomeLongo</strong>.​</p>

<p><strong>3. Nome Curto</strong><br>
Exibe a abreviação do nome completo do tipo de&nbsp;fixture.<br>
Para editá-lo, pressione e segure a célula. Isso abrirá a <strong>Janela Editar&nbsp;NomeCurto</strong>.</p>

<p><strong>4. Fabricante</strong><br>
Exibe o fabricante do tipo de&nbsp;fixture.<br>
Para editá-lo, pressione e segure a célula. Isso abrirá a <strong>Janela Editar Fabricante</strong>.​</p>

<p><strong>5. FornCurto</strong><br>
Exibe a abreviação do fabricante (fornecedor) do tipo de&nbsp;fixture.<br>
Para editá-lo, pressione e segure a célula. Isso abrirá a&nbsp;<strong>Janela Editar FornCurto</strong>.​​</p>

<p><strong>6. DMX Footprint</strong><br>
Exibe quantos canais de DMX os tipos de fixture&nbsp;precisam.</p>

<p><strong>7. Instâncias</strong><br>
Exibe quantos elementos diferentes com controles individuas o tipo de fixture&nbsp;tem.</p>

<p><strong>8. Modo</strong><br>
Exibe o modo do tipo de fixture.<br>
Para editar o modo, pressione e segura a célula. Isso abrirá a Janela Editar Modo.</p>

<p><strong>9. Usados</strong><br>
&nbsp;Exibe a frequência com a qual um tipo de fixture&nbsp;é importado ao&nbsp;<a href="/Topic/272be3c8-e297-4e8a-902a-01916763f043">Menu de Patch</a>.</p>

<p>&nbsp;</p>

<a name="toc_header_anchor_3" id="toc_header_anchor_3" class="topic-toc-item"></a><h2>Info de Tipo de Fixture</h2>

<p>Abaixo da vista de símbolo ou folha está a área de informação.</p>

<p><img alt="" src="/Media/Image/Dot2_ViewsandWindows_SelectFixtureType03_1-1-3.png"><em>Figura 3: Info&nbsp;de Tipo de&nbsp;Fixture&nbsp;na tela 2</em></p>

<p>Ela mostra em primeiro lugar, o fabricante, o nome do dispositivo e modo, do tipo de fixture selecionado.</p>

<p>Abaixo do nome estão todos os canais de&nbsp;DMX, juntamente com seus atributos.<br>
Se o tipo de fixture tem canais virtuais, ele é exibido abaixo dos canais reais.&nbsp;Se estão disponíveis notas para o tipo de fixture selecionado, elas também são exibidos nessa área, juntamente com as revisões.</p>

<p>&nbsp;</p>

<a name="toc_header_anchor_4" id="toc_header_anchor_4" class="topic-toc-item"></a><h2>Funções da Barra da Encoder</h2>

<p><img alt="" src="/Media/Image/Dot2_ViewsandWindows_SelecFixtureType04_1-0.PNG"><em>Figura 4: Funções da Barra de&nbsp;Encoder&nbsp;- Janela Selecionar Tipo de&nbsp;Fixture...</em></p>

<p><strong>Scroll Info:</strong><br>
Para se deslocar pela área de informação para cima ou para baixo, gire o encoder para a esquerda ou direita.</p>

<p>&nbsp;</p>

<p><strong>Scroll Tipo de Fixture:</strong><br>
Para se deslocar pela área de fixture selecionada para cima ou para baixo, gire o encoder para a esquerda ou direita.<br>
Para se deslocar pela área de fixture&nbsp;selecionada para esquerda ou direita, pressione o encoder e gire-os para a esquerda ou direita.</p>


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
		<input id="CurrentGuid" name="CurrentGuid" type="hidden" value="96c563e2-9cf8-4ebd-813a-8eead50ca853">
	</span>
</form></div>&nbsp;	</span>
	<span class="pull-right" style="white-space: nowrap;">
			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/window_SelectFixturesIDsWindow/pt/1.9'; " title="Go to previous page 'Select Fixtures ID(s)'">
				<i class="icon-arrow-left"></i> previous
			</button>

			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/window_selectbutton/pt/1.9';" title="Go to next page 'Select Function  for Remote Inputs Configuration'">
				next <i class="icon-arrow-right"></i> 
			</button>
	</span>
</div>
	<div class="clear-fix"></div>
	<div class="pull-right">
	
			<button class="btn btn-mini" onclick="location.href='/Media/TopicPdf/17870/29';" title="Open/Save this topic as PDF document for viewing or printing">
				<img src="/Content/images/icons/filetype_pdf.png"> Open topic as PDF
			</button>
	</div>
<div class="clear-fix" style="margin-bottom: 10px"></div>
</div>

	
