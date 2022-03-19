
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
		<input id="CurrentGuid" name="CurrentGuid" type="hidden" value="a924561a-b1eb-4661-aa5f-99867413e4ea">
	</span>
</form></div>&nbsp;	</span>
	<span class="pull-right" style="white-space: nowrap;">
			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/ViewItem_Help/pt/1.9'; " title="Go to previous page 'Help'">
				<i class="icon-arrow-left"></i> previous
			</button>

			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/window_KeyBacklight/pt/1.9';" title="Go to next page 'Key Backlight'">
				next <i class="icon-arrow-right"></i> 
			</button>
	</span>
</div>
<div class="clear-fix" style="margin-bottom: 10px"></div>
</div>

		
			<div class="pull-right">
					<button class="btn btn-mini" style="margin-right: 10px; height: 30px;" onclick="location.href = '/Media/TopicPdf/8320/29'; " title="Open/Save this topic as PDF document for viewing or printing">
						<img src="/Content/images/icons/filetype_pdf.png" style="height: 24px;"> Open topic as PDF
					</button>
				<span class="badge badge-info">Version 1.9</span>
			</div>
		<h1>Janela Importar Tipo de Fixture</h1>

			<div class="topic-table-of-contents">
				<h2>Table of contents of this topic</h2>
				<div class="topic-toc-toggler topic-toc-toggler-hide"><a href="#" onclick="$('.topic-toc-ul').toggle(); $('.topic-toc-toggler-hide').hide(); $('.topic-toc-toggler-show').show(); return false;">hide</a></div>
				<div class="topic-toc-toggler topic-toc-toggler-show" style="display: none;"><a href="#" onclick="$('.topic-toc-ul').toggle(); $('.topic-toc-toggler-hide').show(); $('.topic-toc-toggler-show').hide(); return false;">show</a></div>
				<ul class="topic-toc-ul">
						<li>
							<a href="#toc_header_anchor_1">Coluna Fabricante</a>
						</li>
						<li>
							<a href="#toc_header_anchor_2">Coluna Nome do Dispositivo</a>
						</li>
						<li>
							<a href="#toc_header_anchor_3">Coluna Modo</a>
						</li>
						<li>
							<a href="#toc_header_anchor_4">Área de Informação</a>
						</li>
						<li>
							<a href="#toc_header_anchor_5">Funções da Barra de Encoder</a>
						</li>
				</ul>
			</div>

		<p>A <strong>Janela Importar Tipo de Fixture</strong>​ está localizada em&nbsp;<a href="/Topic/198599eb-ca20-4e60-b007-bb08cd2ce43b">Setup</a>, <a href="/Topic/272be3c8-e297-4e8a-902a-01916763f043">Menu de Patch</a></p>

<ul>
	<li>toque em&nbsp;<span class="softkey">Adicionar Novos Fixtures</span>, toque em&nbsp;<span class="softkey">Selecionar outro...</span>&nbsp; OU</li>
	<li>pressione e segure a célula de tipo de fixture&nbsp;no menu de patch&nbsp;e toque em&nbsp;<span class="softkey">Importar</span></li>
</ul>

<p><span class="image_gray_border"><img alt="" src="/Media/Image/Dot2_ViewsandWindows_ImportFixtureTypeWindow01_1-0.PNG"></span></p>

<p>Nesta vista , você seleciona o tipo de fixture e importa para o&nbsp;<a href="/Topic/272be3c8-e297-4e8a-902a-01916763f043">Menu de Patch</a>&nbsp;no arquivo de show atual.</p>

<p>Esta vista tem três colunas do tipo de fixture e uma na área de informação.&nbsp;</p>

<p>A barra laranja à esquerda das células mostra a seleção atual.&nbsp;</p>

<p>Para procurar um fabricante específico, nome do dispositivo ou modo: Toque em&nbsp;<img alt="" src="/Media/Image/Dot2_ViewsandWindows_ImportFixtureType01_1-0.PNG">&nbsp;ao lado da barra de edição verde e digite.</p>

<p>Para deletar o conteúdo da linha de edição verde, toque em&nbsp;<img alt="" src="/Media/Image/Dot2_ViewsandWindows_CalculatorView01_1-0.PNG">.</p>

<p>Para confirmar e aplicar a seleção, toque em&nbsp;<img alt="" src="/Media/Image/Dot2_ViewsandWindows_ControlElements_TitleBar13_1-0.PNG">&nbsp;na&nbsp;<a href="/Topic/a9e3dcd7-1fb1-4dab-8e42-03f9e0de3e99">barra de título</a>. A janela importar tipo de fixture irá fechar.</p>

<p>Para sair da <strong>Janela Importar Tipo de Fixture</strong>, toque em&nbsp;<img alt="" src="/Media/Image/Dot2_ViewsandWindows_ControlElements_TitleBar14_1-0.PNG">&nbsp;na&nbsp;<a href="/Topic/a9e3dcd7-1fb1-4dab-8e42-03f9e0de3e99">barra de título</a> ou&nbsp;pressione&nbsp;<span class="hardkey">Esc</span>&nbsp;no&nbsp;console.</p>

<a name="toc_header_anchor_1" id="toc_header_anchor_1" class="topic-toc-item"></a><h2>Coluna Fabricante</h2>

<p>Esta é a primeira coluna nessa janela.&nbsp;</p>

<p>Nesta coluna estão listados todos os fabricante disponível.&nbsp;</p>

<p>Existem duas linhas em uma célula.&nbsp;</p>

<p>A primeira linha exibe o nome do fabricante.&nbsp;<br>
Os itens da segunda linha exibem todos os modos de fabricantes disponíveis na coluna modo.</p>

<a name="toc_header_anchor_2" id="toc_header_anchor_2" class="topic-toc-item"></a><h2>Coluna Nome do Dispositivo</h2>

<p>Esta é a segunda coluna desta janela.&nbsp;</p>

<p>Nesta coluna estão todos os dispositivos disponíveis em relação ao fabricante selecionado.&nbsp;</p>

<p>Existem duas linhas em uma célula.&nbsp;</p>

<p>A primeira linha exibe o nome do dispositivo.&nbsp;<br>
Os itens da segunda linha exibem todos os modos dos dispositivos disponíveis na coluna modo.</p>

<a name="toc_header_anchor_3" id="toc_header_anchor_3" class="topic-toc-item"></a><h2>Coluna Modo</h2>

<p>Esta é a terceira coluna desta janela.&nbsp;</p>

<p>Nesta coluna estão todos os fixtures em relação ao fabricante e ao dispositivo selecionados.&nbsp;</p>

<p>Há três linhas em uma célula.&nbsp;</p>

<p>A primeira linha exibe o nome do modo.&nbsp;<br>
A segunda linha exibe o <strong>DMX Footprint</strong>, isso é, o número de canais de DMX que o modo possui.&nbsp;<br>
A terceira linha exibe as <strong>instâncias</strong>, isto é, quantos elementos diferentes, com controles individuais o tipo de fixture tem.</p>

<a name="toc_header_anchor_4" id="toc_header_anchor_4" class="topic-toc-item"></a><h2>Área de Informação</h2>

<p>A área de informação está localizada na tela 2.</p>

<p><span class="image_gray_border"><img alt="" src="/Media/Image/Dot2_ViewsandWindows_ImportFixtureTypeWindow03_1-0.PNG"></span></p>

<p>Ele mostra a primeira, fabricante, nome do dispositivo e modo em suportes, do tipo de fixture selecionado.&nbsp;</p>

<p>Abaixo do nome estão todos os canais de DMX, juntamente com seus atributos.&nbsp;</p>

<p>Se o tipo de fixture tem canais virtuais, eles são exibidos abaixo dos canais reais.</p>

<a name="toc_header_anchor_5" id="toc_header_anchor_5" class="topic-toc-item"></a><h2>Funções da Barra de Encoder</h2>

<p><img alt="" src="/Media/Image/Dot2_ViewsandWindows_ImportFixtureTypeWindow02_1-0.PNG"></p>

<p><strong>Drive:</strong><br>
Para selecionar o <strong>Drive </strong>ara a importação de um tipo de fixture, gire o encoder para a esquerda ou direita.<br>
Drives disponíveis:&nbsp;Internal, Demoshows, Templates, e se inserido um USB.</p>

<p><strong>Fabricante:</strong><br>
Para rolar pela coluna&nbsp;<strong>Fabricante&nbsp;</strong>para cima e para baixo, gire o encoder para esquerda ou direita.</p>

<p><strong>Tipo de Fixture:</strong><br>
Para rolar pela coluna <strong>Nome do Dispositivo</strong> para cima e para baixo, gire o&nbsp;encoder&nbsp;para esquerda ou direita.</p>

<p><strong>Modo:</strong><br>
Para rolar pela coluna <strong>Modo</strong> para cima e par abaixo, gire o&nbsp;encoder&nbsp;para esquerda ou direita.</p>

<a name="toc_header_anchor_6" id="toc_header_anchor_6" class="topic-toc-item"></a><h2>Links Relacionados</h2>

<ul>
	<li><a href="/Topic/198599eb-ca20-4e60-b007-bb08cd2ce43b">Janela de Setup</a></li>
	<li><a href="/Topic/272be3c8-e297-4e8a-902a-01916763f043">Menu de Patch</a></li>
	<li><a href="/Topic/dce789eb-89d8-49f1-aedc-bd9fbd45afa0">Janela Adicionar Novos Fixtures</a></li>
</ul>


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
		<input id="CurrentGuid" name="CurrentGuid" type="hidden" value="a924561a-b1eb-4661-aa5f-99867413e4ea">
	</span>
</form></div>&nbsp;	</span>
	<span class="pull-right" style="white-space: nowrap;">
			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/ViewItem_Help/pt/1.9'; " title="Go to previous page 'Help'">
				<i class="icon-arrow-left"></i> previous
			</button>

			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/window_KeyBacklight/pt/1.9';" title="Go to next page 'Key Backlight'">
				next <i class="icon-arrow-right"></i> 
			</button>
	</span>
</div>
	<div class="clear-fix"></div>
	<div class="pull-right">
	
			<button class="btn btn-mini" onclick="location.href='/Media/TopicPdf/8320/29';" title="Open/Save this topic as PDF document for viewing or printing">
				<img src="/Content/images/icons/filetype_pdf.png"> Open topic as PDF
			</button>
	</div>
<div class="clear-fix" style="margin-bottom: 10px"></div>
</div>

	