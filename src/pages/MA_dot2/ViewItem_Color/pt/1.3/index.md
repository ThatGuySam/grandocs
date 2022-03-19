
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
		<input data-val="true" data-val-number="The field Int32 must be a number." data-val-required="The Int32 field is required." id="ProductId" name="ProductId" type="hidden" value="7">
		<input id="CurrentGuid" name="CurrentGuid" type="hidden" value="0fd235c9-f6a5-4c9b-a2c0-b7f90045a63a">
	</span>
</form></div>&nbsp;	</span>
	<span class="pull-right" style="white-space: nowrap;">
			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/window_chooseupdatemethod/pt/1.3'; " title="Go to previous page 'Choose Update Method'">
				<i class="icon-arrow-left"></i> previous
			</button>

			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/view_commandline/pt/1.3';" title="Go to next page 'Command Line'">
				next <i class="icon-arrow-right"></i> 
			</button>
	</span>
</div>
<div class="clear-fix" style="margin-bottom: 10px"></div>
</div>

					<div class="infobox"><b>Hint:</b><br><b>New help version</b><br>The help version you selected belongs to an older software version. <a href="/Topic/SetCurrentVersionNumber/29/0fd235c9-f6a5-4c9b-a2c0-b7f90045a63a">You may want to view the latest help version.</a></div>

			<div class="pull-right">
					<button class="btn btn-mini" style="margin-right: 10px; height: 30px;" onclick="location.href = '/Media/TopicPdf/18390/12'; " title="Open/Save this topic as PDF document for viewing or printing">
						<img src="/Content/images/icons/filetype_pdf.png" style="height: 24px;"> Open topic as PDF
					</button>
				<span class="badge badge-info">Version 1.3</span>
			</div>
		<h1>Vista do Tipo de Preset Color</h1>

			<div class="topic-table-of-contents">
				<h2>Table of contents of this topic</h2>
				<div class="topic-toc-toggler topic-toc-toggler-hide"><a href="#" onclick="$('.topic-toc-ul').toggle(); $('.topic-toc-toggler-hide').hide(); $('.topic-toc-toggler-show').show(); return false;">hide</a></div>
				<div class="topic-toc-toggler topic-toc-toggler-show" style="display: none;"><a href="#" onclick="$('.topic-toc-ul').toggle(); $('.topic-toc-toggler-hide').show(); $('.topic-toc-toggler-show').hide(); return false;">show</a></div>
				<ul class="topic-toc-ul">
						<li>
							<a href="#toc_header_anchor_1">Vista do Picker</a>
						</li>
						<li>
							<a href="#toc_header_anchor_2">Vista do&nbsp;Fader</a>
						</li>
						<li>
							<a href="#toc_header_anchor_3">Vista do Catálogo de Gelatinas</a>
						</li>
						<li>
							<a href="#toc_header_anchor_4">Vista de Cores Raw</a>
						</li>
						<li>
							<a href="#toc_header_anchor_5">Funções da Barra de&nbsp;Encoder</a>
								<ul>
										<li><a href="#toc_header_anchor_6">Barra de Encoder&nbsp;do&nbsp;Picker de Cor e do&nbsp;Fader de Cor</a></li>
										<li><a href="#toc_header_anchor_7">Barra de Encoder do Catálogo de Gelatinas</a></li>
								</ul>
						</li>
				</ul>
			</div>

		<p>Para ir para a Vista do Tipo de Preset Color, toque em&nbsp;<span class="softkey">Color</span><strong>&nbsp;</strong>na&nbsp;<a href="/Topic/60e350ef-d825-4072-a644-ed2430d82522">Barra de Tipo de Preset</a>.<br>
- ou -<br>
Pressione e segure&nbsp;<span class="hardkey"><img alt="ma" src="/Media/Mlg/ma_1.png"></span>&nbsp; e pressione&nbsp;<span class="hardkey">4</span>, para o tipo de preset 4 (= Color).</p>

<p>A vista do tipo de&nbsp;preset&nbsp;color&nbsp;só é ativada se o fixture selecionado possui atributos de cor.</p>

<p>A vista do tipo de&nbsp;preset&nbsp;color tem três abas: a <strong>Vista do Picker</strong>, a <strong>Vista de Fader</strong>&nbsp;e a <strong>Vista do Catálogo de Gelatinas</strong>.<br>
Dependendo do tipo de fixture, há também a aba <strong>Vista de Cores&nbsp;Raw</strong>.</p>

<div class="important"><strong>Importante:</strong><br>
O picker de cores e os sliders de cores funcionam absolutamente. Um toque no picker de cores ou no slider de cores define um novo valor de cor e não segue os valores de cor já definidas.Os encoders respectivos funcionam em relação aos valores de cor já definidos.</div>

<p>Para abrir a&nbsp;<a href="/Topic/0e539790-291a-4be0-be05-8f3e8d81c0eb">vista de efeitos</a>&nbsp;de cor na tela 1, toque em&nbsp;<img alt="" src="/Media/Image/Dot2_ViewsandWindows_ControlElements_TitleBar17_1-0.PNG">&nbsp;na barra de título.<br>
Se um efeito está sendo executado em um fixture selecionado, a&nbsp;vista do tipo de&nbsp;preset&nbsp;color muda para o modo de efeito e obtém uma&nbsp;<a href="/Topic/a9e3dcd7-1fb1-4dab-8e42-03f9e0de3e99">barra de título no modo de efeito</a>&nbsp;azul.</p>

<a name="toc_header_anchor_1" id="toc_header_anchor_1" class="topic-toc-item"></a><h2>Vista do Picker</h2>

<p>A vista do picker&nbsp;é a primeira aba da vista do tipo de preset&nbsp;color.</p>

<p><img alt="" src="/Media/Image/Dot2_ViewsandWindows_ColorPresetTypeView01_1-0.PNG"><em>Figura 1: Vista do&nbsp;picker&nbsp;de cor</em></p>

<p>Nessa vista, você seleciona a cor no picker (seletor de cores).&nbsp;</p>

<p>Você tem acesso a todos os atributos do sistema de mistura de cores ou as rodas de cores.&nbsp;</p>

<p>O eixo-x do picker, exibe a tonalidade de 0 a 360 graus.&nbsp;<br>
O eixo-y do picker, exibe a saturação de 0% a 100%.&nbsp;</p>

<p>A cruz exibe qual cor é selecionada.&nbsp;</p>

<p>Para selecionar o brilho, mova o <strong>Fader de Brilho</strong> para cima ou para baixo.&nbsp;</p>

<p>Para selecionar a partir de qual atributo de cor a cor selecionada deve ser misturada na maior parte, deslize o <strong>Q-Fader</strong> para cima ou para baixo.&nbsp;<br>
<strong>Primary =</strong> A cor selecionada será misturada apenas de atributos RGB.&nbsp;<br>
<strong>Max =</strong> A cor selecionada será misturada de atributos RGB e, se disponível, de atributos adicionais, por exemplo, branco ou âmbar.&nbsp;<br>
<strong>Pure =</strong> A cor selecionada será principalmente misturada de atributos de cores adicionais.</p>

<a name="toc_header_anchor_2" id="toc_header_anchor_2" class="topic-toc-item"></a><h2>Vista do&nbsp;Fader</h2>

<p>A vista de fader é a segunda aba da vista do tipo de&nbsp;preset&nbsp;color.</p>

<p><img alt="" src="/Media/Image/Dot2_ViewsandWindows_ColorPresetTypeView02_1-0.PNG"><em>Figura 2: Vista do&nbsp;Fader​</em></p>

<p>Nessa vista, você seleciona a cor dos faders de cores.&nbsp;<br>
Existem três maneiras diferentes de mistura de cores, cada um com três faders.&nbsp;</p>

<p><strong>1. Hue - Sat. - Brilho.</strong>&nbsp;<br>
Primeiro fader mostra a tonalidade em graus.&nbsp;<br>
Segundo fader mostra a saturação em porcentagem.&nbsp;<br>
Terceiro fader exibe o brilho em porcentagem.&nbsp;</p>

<p><strong>2. Ciano - Magenta - Amarelo</strong>&nbsp;<br>
Primeiro fader mostra a relação de ciano em porcentagem.&nbsp;<br>
Segundo fader mostra a relação de magenta em porcentagem.&nbsp;<br>
Terceiro fader mostra a relação de amarelo em porcentagem.&nbsp;</p>

<p><strong>3. Vermelho - Verde - Azul&nbsp;</strong><br>
Primeiro fader mostra a relação de vermelho em porcentagem.&nbsp;<br>
Segundo fader mostra a relação de verde em porcentagem.&nbsp;<br>
Terceiro fader mostra a relação de azul em porcentagem.&nbsp;</p>

<p>Para selecionar a partir de quais atributos de cor a cor selecionada deve ser misturada, deslize o <strong>Q-Fader</strong> para cima ou para baixo.</p>

<a name="toc_header_anchor_3" id="toc_header_anchor_3" class="topic-toc-item"></a><h2>Vista do Catálogo de Gelatinas</h2>

<p>A vista do catálogo de gelatinas é a terceira aba da vista do tipo de&nbsp;preset&nbsp;color.</p>

<p><img alt="" src="/Media/Image/Dot2_ViewsandWindows_ColorPresetTypeView03_1-0.PNG"><em>Figura 3: Vista do Catálogo de gelatinas</em></p>

<p>Nessa vista, você seleciona a cor de um catálogo de gelatinas.&nbsp;</p>

<p>Existem duas tabelas nesta visão: a <strong>Tabela Mostruário</strong> e a <strong>Tabela Cores</strong>.<br>
&nbsp;<br>
<strong>1. Tabela Mostruário</strong>&nbsp;<br>
Esta tabela tem duas colunas: <strong>No. e Nome</strong>.&nbsp;<br>
A coluna <strong>No.</strong> exibe o número do mostruário.&nbsp;<br>
A coluna <strong>Nome</strong> exibe o nome do mostruário.&nbsp;</p>

<p><strong>2. Tabela Cores</strong>&nbsp;<br>
Esta tabela tem quatro colunas: <strong>No., Nome, Tecla e Cor</strong>.&nbsp;<br>
A coluna <strong>No.</strong> exibe o número da linha.&nbsp;<br>
A coluna <strong>Nome</strong> exibe o nome da cor.&nbsp;<br>
A coluna <strong>Tecla</strong> exibe a tecla da cor do mostruário.&nbsp;<br>
A coluna <strong>Cor</strong> exibe a cor junto com o código RGB.</p>

<a name="toc_header_anchor_4" id="toc_header_anchor_4" class="topic-toc-item"></a><h2>Vista de Cores Raw</h2>

<p>A vista de cores raw&nbsp;está localizada depois da terceira aba da vista de preset color, dependendo do tipo de fixture.</p>

<p><img alt="" src="/Media/Image/Dot2_ViewsandWindows_ColorPresetTypeView03_1-0_1.PNG"><em>Figura 4: Vista de cores&nbsp;Raw</em></p>

<p>Na vista cor raw, você controla os valores dos canais de cores raw em porcentagem dos fixtures selecionadas.&nbsp;</p>

<p>Todos os tipos de Fixture com CMY são exibidos como RGB invertido.&nbsp;</p>

<p>Para selecionar os valores de DMX do canal de cor, mova o cursor para cima e para baixo.</p>

<a name="toc_header_anchor_5" id="toc_header_anchor_5" class="topic-toc-item"></a><h2>Funções da Barra de&nbsp;Encoder</h2>

<p>A vista do&nbsp;preset do tipo color de cor tem diferentes barras de encoder, dependendo da vista selecionada.</p>

<a name="toc_header_anchor_6" id="toc_header_anchor_6" class="topic-toc-item"></a><h3>Barra de Encoder&nbsp;do&nbsp;Picker de Cor e do&nbsp;Fader de Cor</h3>

<p>A velocidade padrão do&nbsp;encoder&nbsp;é sem casa decimal.<br>
Para alterar a velocidade do&nbsp;encoder&nbsp;para devagar, pressione a tecla&nbsp;encoder​&nbsp;<span class="hardkey"><img alt="encoder" src="/Media/Mlg/encoder.png"></span>&nbsp;. A velocidade do&nbsp;encoder&nbsp;está com casa decimal.<br>
Para alterar a velocidade do&nbsp;encoder&nbsp;para​ ultra devagar, pressione e segure a tecla&nbsp;<span class="hardkey"><img alt="ma" src="/Media/Mlg/ma.png"></span>&nbsp;e pressione a tecla&nbsp;encoder&nbsp;<span class="hardkey"><img alt="encoder" src="/Media/Mlg/encoder.png"></span>. A velocidade do&nbsp;encoder&nbsp;é igual a um passo de&nbsp;DMX.</p>

<p><img alt="" src="/Media/Image/Dot2_ViewsandWindows_ColorPresetTypeView05_1-0.PNG"></p>

<p>Para usar a segunda função de um encoder, pressione e segure a tecla&nbsp;<span class="hardkey"><img alt="ma" src="/Media/Mlg/ma.png"></span>.<br>
Para abrir a&nbsp;<a href="/Topic/014d961b-8de1-4f48-92de-e6da3cc6a15f">calculadora</a>, pressione o&nbsp;encoder.</p>

<p><strong>Hue ou Vermelho:</strong><br>
Para selecionar o hue ou vermelho de uma cor, gire o encoder para a esquerda ou direita.</p>

<p><strong>Saturação ou Verde: </strong><br>
Para selecionar a saturação ou o verde de uma cor, gire o&nbsp;encoder&nbsp;para a esquerda ou direita.</p>

<p><strong>Brilho ou Azul:</strong><br>
Para selecionar o brilho ou o azul de uma cor, gire o&nbsp;encoder&nbsp;para a esquerda ou direita.</p>

<p><strong>Q:</strong><br>
Para controlar o Q-Fader, gire o&nbsp;encoder&nbsp;para a esquerda ou direita.</p>

<a name="toc_header_anchor_7" id="toc_header_anchor_7" class="topic-toc-item"></a><h3>Barra de Encoder do Catálogo de Gelatinas</h3>

<p>Se o catálogo de gelatinas estiver selecionado como vista de&nbsp;preset do tipo color de cor, a barra de encoder&nbsp;o catálogo de gelatinas será exibida.<br>
<br>
<img alt="" src="/Media/Image/Dot2_ViewsandWindows_ColorPresetTypeView07_1-1-3.png"><br>
<em>Figura 6: Barra de Encoder&nbsp;do Catálogo de Gelatinas</em></p>

<p><strong>Scroll Swatchbook:</strong><br>
Para percorrer pela tabela do catálogo de gelatinas, gire o encoder para a esquerda ou direita.</p>

<p><strong>Scroll Color:</strong><br>
Para percorrer pela tabela de cores, gire o encoder&nbsp;para a esquerda ou direta.<br>
Para selecionar uma cor, pressione o encoder.</p>


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
		<input data-val="true" data-val-number="The field Int32 must be a number." data-val-required="The Int32 field is required." id="ProductId" name="ProductId" type="hidden" value="7">
		<input id="CurrentGuid" name="CurrentGuid" type="hidden" value="0fd235c9-f6a5-4c9b-a2c0-b7f90045a63a">
	</span>
</form></div>&nbsp;	</span>
	<span class="pull-right" style="white-space: nowrap;">
			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/window_chooseupdatemethod/pt/1.3'; " title="Go to previous page 'Choose Update Method'">
				<i class="icon-arrow-left"></i> previous
			</button>

			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/view_commandline/pt/1.3';" title="Go to next page 'Command Line'">
				next <i class="icon-arrow-right"></i> 
			</button>
	</span>
</div>
	<div class="clear-fix"></div>
	<div class="pull-right">
	
			<button class="btn btn-mini" onclick="location.href='/Media/TopicPdf/18390/12';" title="Open/Save this topic as PDF document for viewing or printing">
				<img src="/Content/images/icons/filetype_pdf.png"> Open topic as PDF
			</button>
	</div>
<div class="clear-fix" style="margin-bottom: 10px"></div>
</div>

	