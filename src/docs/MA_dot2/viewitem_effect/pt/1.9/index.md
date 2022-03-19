
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
		<input id="CurrentGuid" name="CurrentGuid" type="hidden" value="0e539790-291a-4be0-be05-8f3e8d81c0eb">
	</span>
</form></div>&nbsp;	</span>
	<span class="pull-right" style="white-space: nowrap;">
			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/window_editcuenumbers/pt/1.9'; " title="Go to previous page 'Edit Cue Number(s) '">
				<i class="icon-arrow-left"></i> previous
			</button>

			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/window_emptyexecutor/pt/1.9';" title="Go to next page 'Empty Executor'">
				next <i class="icon-arrow-right"></i> 
			</button>
	</span>
</div>
<div class="clear-fix" style="margin-bottom: 10px"></div>
</div>

		
			<div class="pull-right">
					<button class="btn btn-mini" style="margin-right: 10px; height: 30px;" onclick="location.href = '/Media/TopicPdf/26136/29'; " title="Open/Save this topic as PDF document for viewing or printing">
						<img src="/Content/images/icons/filetype_pdf.png" style="height: 24px;"> Open topic as PDF
					</button>
				<span class="badge badge-info">Version 1.9</span>
			</div>
		<h1>Vista de Efeitos</h1>

			<div class="topic-table-of-contents">
				<h2>Table of contents of this topic</h2>
				<div class="topic-toc-toggler topic-toc-toggler-hide"><a href="#" onclick="$('.topic-toc-ul').toggle(); $('.topic-toc-toggler-hide').hide(); $('.topic-toc-toggler-show').show(); return false;">hide</a></div>
				<div class="topic-toc-toggler topic-toc-toggler-show" style="display: none;"><a href="#" onclick="$('.topic-toc-ul').toggle(); $('.topic-toc-toggler-hide').show(); $('.topic-toc-toggler-show').hide(); return false;">show</a></div>
				<ul class="topic-toc-ul">
						<li>
							<a href="#toc_header_anchor_1">Efeitos Off</a>
						</li>
						<li>
							<a href="#toc_header_anchor_2">Função&nbsp;Stomp nos Efeitos</a>
						</li>
						<li>
							<a href="#toc_header_anchor_3">Função Stomp Em Presets de Posição</a>
						</li>
						<li>
							<a href="#toc_header_anchor_4">Opções de Efeito</a>
						</li>
						<li>
							<a href="#toc_header_anchor_5">Efeitos de Dimmer</a>
						</li>
						<li>
							<a href="#toc_header_anchor_6">&nbsp;</a>
						</li>
						<li>
							<a href="#toc_header_anchor_7">Efeitos de Posição</a>
						</li>
						<li>
							<a href="#toc_header_anchor_8">Efeitos de Gobo</a>
						</li>
						<li>
							<a href="#toc_header_anchor_9">Efeitos de Cor</a>
						</li>
						<li>
							<a href="#toc_header_anchor_10">Efeitos de Beam</a>
						</li>
						<li>
							<a href="#toc_header_anchor_11">Efeitos de Foco</a>
						</li>
						<li>
							<a href="#toc_header_anchor_12">Funções da Barra de&nbsp;Encoder</a>
						</li>
						<li>
							<a href="#toc_header_anchor_13">Grupos e Blocos</a>
						</li>
						<li>
							<a href="#toc_header_anchor_14">Wings</a>
						</li>
				</ul>
			</div>

		<p>&nbsp;Para ir para a Vista de Editor de Efeitos na <strong>tela 1</strong>, pressione&nbsp;<span class="hardkey">Effect</span>&nbsp;no console ou pressione o loop&nbsp;<img alt="" src="/Media/Image/Dot2_ViewsandWindows_ControlElements_TitleBar17_1-0.PNG">&nbsp;na barra de título de uma vista de tipo de preset.</p>

<figure class="caption"><img alt="" src="/Media/Image/Dot2_ViewsandWindows_EffectsView01_1-0.PNG">
<figcaption><em>Figura 1: Vista Editor de Efeitos de Dimmer&nbsp;</em><em>na tela&nbsp;1</em></figcaption>
</figure>

<p>Para abrir a vista de Efeitos na&nbsp;<strong>tela 2</strong>, toque em <span class="softkey">Mais...</span> na&nbsp;<a href="/Topic/aeb06b87-4def-4d5c-8ccd-fce24793de63">barra de vista</a>&nbsp;e depois&nbsp;<span class="softkey">Efeitos</span>.</p>

<figure class="caption"><img alt="" src="/Media/Image/Dot2_ViewsandWindows_EffectsView18_1-2.png">
<figcaption><em>Figura 2: Vista de Efeitos de Dimmer na tela </em><em>2</em></figcaption>
</figure>

<p>A vista de efeito depende do fixture selecionado na&nbsp;<a href="/Topic/989f0b88-de3d-4818-8c0b-a69fa90b2106">vista de fixture</a>&nbsp;e o tipo de preset&nbsp;selecionado na&nbsp;<a href="/Topic/60e350ef-d825-4072-a644-ed2430d82522">barra de tipo de preset</a>.</p>

<p>Para os seguintes tipos de presets, estão os efeitos de presets disponíveis:</p>

<ul>
	<li>Dimmer</li>
	<li>Position</li>
	<li>Gobo</li>
	<li>Color</li>
	<li>Beam</li>
	<li>Focus</li>
</ul>

<p>Para ir para a <strong>Vista de Efeito de Dimmer</strong>, selecione Dimmer na <a href="/Topic/60e350ef-d825-4072-a644-ed2430d82522">barra de tipo de preset</a>.</p>

<p>A barra de título exibe em qual vista de efeito você está, por exemplo, Efeitos de Dimmer.</p>

<p>Os azulejos no lado esquerdo da vista, são os efeitos disponíveis para o fixture&nbsp;e o tipo de preset selecionados.</p>

<p>A vista de efeitos na tela 2 exibe apenas os efeitos disponíveis.</p>

<p>Os botões do lado direito da vista são opções adicionais para o efeito.</p>

<p>O atual efeito selecionado tem uma moldura branca em torno dele.</p>

<p>No canto superior esquerdo está o número do objeto do efeito.</p>

<p>&nbsp;</p>

<a name="toc_header_anchor_1" id="toc_header_anchor_1" class="topic-toc-item"></a><h2>Efeitos Off</h2>

<p>Toda vista de efeito tem a função Off.<br>
Toque em off&nbsp;para descartar um efeito em execução a partir da seleção de fixture no programador.<br>
Se você tocar em Off na vista de efeitos de dimmer, todos os efeitos de&nbsp;dimmer serão descartados no programador.</p>

<p><strong>Exemplo:</strong><br>
Vamos supor que você tem um efeito de dimmer&nbsp;em execução no programador e valores de pan e tilt adicionais.</p>

<p><img alt="" src="/Media/Image/Dot2_ViewsandWindows_EffectsView02_1-2.png"> <em>Figura 3: Executando Efeitos de&nbsp; dimmer</em></p>

<p>Para descartar apenas os valores de efeito dos fixtures selecionados, abra a <strong>vista de efeito de dimmer</strong> e toque em&nbsp;<span class="softkey">Off</span>.</p>

<p><img alt="" src="/Media/Image/Dot2_ViewsandWindows_EffectsView03_1-2.png"> <em>Figura 4: Efeitos de Dimmer está desligado</em></p>

<p>O efeito de dimmer está descartado do programador.</p>

<p>&nbsp;</p>

<a name="toc_header_anchor_2" id="toc_header_anchor_2" class="topic-toc-item"></a><h2>Função&nbsp;Stomp nos Efeitos</h2>

<p>Toda vista de efeito tem a função de&nbsp;Stomp.<br>
Toque em stomp, para deixar mudo um efeito em execução armazenado em um executor.</p>

<p>Para desativar a função&nbsp;Stomp, pressione&nbsp;<span class="hardkey">Clear</span>.</p>

<p><strong>Exemplo:</strong><br>
Vamos supor que você tenha armazenado o cue 1 com um efeito de dimmer e você irá e você irá deixará esse efeito mudo no cue 2.</p>

<ol>
	<li>Selecione os fixtures&nbsp;na vista de&nbsp;fixture&nbsp;que devem deixar mudo o efeito do cue 1.</li>
	<li>Abra a vista de efeitos de dimmer e toque em&nbsp;<span class="softkey">Stomp</span>.</li>
	<li>Pressione&nbsp;<span class="hardkey">Store</span> <span class="hardkey">Cue</span> <span class="hardkey">2</span> <span class="hardkey">Please</span>.</li>
</ol>

<p>Cue 1 inicia o efeito de dimmer e&nbsp;cue 2 cala o efeito de dimmer.</p>

<p>&nbsp;</p>

<a name="toc_header_anchor_3" id="toc_header_anchor_3" class="topic-toc-item"></a><h2>Função Stomp Em Presets de Posição</h2>

<p>Se você armazenar a função&nbsp;Stomp de efeitos em um&nbsp;preset, esse efeito será exibido com um ponto de exclamação vermelho no conjunto de preset.</p>

<p><br>
<img alt="" src="/Media/Image/dot2_stomp-effect_position-presets_v1-3.png"></p>

<p><em>Efeito&nbsp;Stomp&nbsp;em presets&nbsp;de posição</em></p>

<div class="important"><strong>Importante:</strong><br>
Para armazenar o efeito Stomp, execute primeiro um efeito.&nbsp;</div>

<a name="toc_header_anchor_4" id="toc_header_anchor_4" class="topic-toc-item"></a><h2>Opções de Efeito</h2>

<p>As opções de efeito são os sete botões no lado direito da tela.</p>

<p><strong>Direção &lt;&gt;: </strong><br>
O botão de direção &lt;&gt; estará disponível se você tiver fixtures com um efeito em execução no programador.<br>
Toque para alterar a direção do efeito da esquerda para a direita ou o contrário.</p>

<p><strong>Seleção Aleatória:</strong><br>
O botão Seleção Aleatória está disponível se você tiver selecionado fixtures no programador.<br>
Toque para misturar a ordem da seleção de fixture. É o mesmo que a "Seleção Aleatória", de Macro no&nbsp;<a href="/Topic/c2173bc1-c86a-4c4f-b2d7-05a83f0e9b2a">Agrupamento de Macros</a>.</p>

<p><strong>Sync:</strong><br>
O botão Sync está disponível se os efeitos estão sendo executados no programador.<br>
Toque para sincronizar efeitos no programador. Consulte, <a href="/Topic/9975e836-d91c-4784-ba24-1ff914585759">Comando SyncEffects</a>.</p>

<p><strong>Alinhar &gt;:</strong><br>
Seleciona o modo de alinhar &gt;. Consulte, <a href="/Topic/653b1e1b-2bcd-4065-b918-bef12958ceb3">Tecla Align</a>.</p>

<p><strong>Alinhar &lt;:</strong><br>
Seleciona o modo de alinhar​ &lt;. Consulte, <a href="/Topic/653b1e1b-2bcd-4065-b918-bef12958ceb3">Tecla Align</a>.</p>

<p><strong>Alinhar &gt;&lt;:</strong><br>
Seleciona o modo de alinhar​ &gt;&lt;. Consulte, <a href="/Topic/653b1e1b-2bcd-4065-b918-bef12958ceb3">Tecla Align</a>.</p>

<p><strong>Alinhar​ Off</strong> (padrão)<strong>:</strong><br>
Desliga o modo alinhar.&nbsp;Consulte, <a href="/Topic/653b1e1b-2bcd-4065-b918-bef12958ceb3">Tecla Align</a>.</p>

<p>&nbsp;</p>

<a name="toc_header_anchor_5" id="toc_header_anchor_5" class="topic-toc-item"></a><h2>Efeitos de Dimmer</h2>

<p>Na dot2, existem seis efeitos de dimmer&nbsp;predefinidos disponíveis.</p>

<p><strong>Soft Dimmer </strong>(objeto número&nbsp;1):<br>
Abre e fecha o dimmer&nbsp;com suavidade.</p>

<p><img alt="" src="/Media/Image/Dot2_ViewsandWindows_EffectsView04_1-2.png"> <em>Figura 5: Efeito Soft dimmer</em></p>

<p><strong>Hard Dimmer </strong>(objeto número​ 2):<br>
Abre e fecha o&nbsp;dimmer&nbsp;sem suavidade​.</p>

<p><img alt="" src="/Media/Image/Dot2_ViewsandWindows_EffectsView05_1-2.png"> <em>Figura 6: Efeito Hard dimmer</em></p>

<p><strong>Ramp Up Dimmer</strong> (objeto número​ 3):<br>
Dimmer snaps&nbsp;a 100% e vai lentamento com fade para &nbsp;0%.</p>

<p><img alt="" src="/Media/Image/Dot2_ViewsandWindows_EffectsView06_1-2.png"> <em>Figura 7: Efeito Ramp up dimmer</em></p>

<p><strong>Ramp Down Dimmer </strong>(objeto número​ 4):<br>
Dimmer snaps&nbsp;a 0% e vai lentamente com fade para 100%.</p>

<p><img alt="" src="/Media/Image/Dot2_ViewsandWindows_EffectsView07_1-2.png"> <em>Figura 8: Efeito Ramp down dimmer</em></p>

<p><strong>Dim/P/T Ballyhoo </strong>(objeto número​ 8):<a id="Dim/P/T Ballyhoo" name="Dim/P/T Ballyhoo"></a><br>
Efeito suave de dimmer e movimento pan e tilt.<br>
Esse efeito também está nos efeitos de posição.</p>

<p><img alt="" src="/Media/Image/Dot2_ViewsandWindows_EffectsView08_1-2.png"> <em>Figura 9: Dim/P/T Ballyoo</em></p>

<p><strong>Dim/Tilt Flyout </strong>(objeto número​ 9):<a id="Dim/Tilt Flyout" name="Dim/Tilt Flyout"></a><br>
Fixtures estão movendo da posição um para posição dois.<br>
Depois deles chegarem na posição dois, o dimmer vai com fade para 0% e os fixtures se movem de volta para a posição um.</p>

<p><img alt="" src="/Media/Image/Dot2_ViewsandWindows_EffectsView09_1-2.png"> <em>Figura 10: Dim/Tilt Flyout</em></p>

<a name="toc_header_anchor_6" id="toc_header_anchor_6" class="topic-toc-item"></a><h2>&nbsp;</h2>

<a name="toc_header_anchor_7" id="toc_header_anchor_7" class="topic-toc-item"></a><h2>Efeitos de Posição</h2>

<p>Na dot2 existem oito efeitos de posição predefinidos disponíveis.</p>

<p><strong>Circle</strong> (objeto número​ 5):<br>
Fixtures&nbsp;se movendo em círculo.</p>

<p><strong>Pan Sinus</strong> (objeto número​ 6):<br>
Efeito de pan suave. Pan do fixture se move em torno da posição atual, por exemplo, começando a partir da posição atual 0, o pan move de - 15 até 15.</p>

<p><strong>Tilt Sinus</strong> (objeto número​ 7)<br>
Efeito de tilt suave.&nbsp;Pan do fixture se move em torno da posição atual, por exemplo, começando a partir da posição atual 0, o pan move de - 15 até 15.</p>

<p><strong>Dim/P/T Ballyhoo</strong> (objeto número​ 8):<br>
Consulte, <a href="#Dim/P/T Ballyhoo">Dim/P/T Ballyhoo</a>&nbsp;nos efeitos de dimmer.</p>

<p><strong>Dim/Tilt Flyout </strong>(objeto número​ 9):<br>
Consulte, <a href="#Dim/Tilt Flyout">Dim/Tilt Flyout</a> nos efeitos de dimmer.<br>
<br>
<strong>Pan Half Sinus</strong>&nbsp;(objeto número​ 22):<br>
Efeito pan suave. Pan do fixture usa a posição atual como posição de início, por exemplo, começando a partir da posição atual 0 o pan se move até 30 e volta a 0.​<br>
<br>
<strong>Tilt Half Sinus</strong>&nbsp;(objeto número​ 23):<br>
Efeito tilt suave. Tilt do fixture usa a posição atual como posição de início, por exemplo, começando a partir da posição atual 0 o tilt se move até 30 e volta a 0.<br>
<br>
<strong>Figura 8</strong>&nbsp;(objeto número​ 24):<br>
O fixture se move como um oito. O centro é a posição atual.</p>

<p>&nbsp;</p>

<a name="toc_header_anchor_8" id="toc_header_anchor_8" class="topic-toc-item"></a><h2>Efeitos de Gobo</h2>

<p>Na dot2, existem três efeitos de gobo predefinidos disponíveis:</p>

<p><strong>2 Gobo</strong> (objeto número&nbsp;10):<br>
Altera entre dois gobos no gobowheel.<br>
Selecione os gobos com alto valor e baixo valor na&nbsp;<a href="/Topic/16b6da99-c52a-4ff8-a746-ecdacda313ff">vista de tipo de preset de gobo</a>, modo de efeito.</p>

<p><img alt="" src="/Media/Image/Dot2_ViewsandWindows_EffectsView10_1-2.png"> <em>Figura 11: efeito 2 Gobo</em></p>

<p><strong>Gobo &lt;&gt; </strong>(objeto número 11):<br>
Efeito de velocidade de rotação de gobo.</p>

<p><strong>Gobo Index</strong> (objeto número​ 12):<br>
Efeito de posição de gobo.</p>

<p>&nbsp;</p>

<a name="toc_header_anchor_9" id="toc_header_anchor_9" class="topic-toc-item"></a><h2>Efeitos de Cor</h2>

<p>Na dot2, existem quatro efeitos de cor predefinidos disponíveis:</p>

<p><strong>2 Color Soft</strong> (objeto número​ 13):<br>
Altera entre duas cores com suavidade.<br>
Este é um efeito de mistura de cor.</p>

<p><img alt="" src="/Media/Image/Dot2_ViewsandWindows_EffectsView11_1-2.png"> <em>Figura 12: efeito 2 Color Soft</em></p>

<p><strong>2 Color Hard </strong>(objeto número​ 14):<br>
Altera entre duas cores sem suavidade.<br>
Este é um efeito de mistura de cor.</p>

<p><img alt="" src="/Media/Image/Dot2_ViewsandWindows_EffectsView12_1-2.png"> <em>Figura 13: 2 efeito Color Hard</em></p>

<p><strong>RGB Rainbow</strong> (objeto número​ 15):<br>
Um efeito azul verde vermelho de arco-íris com suavidade​.<br>
Este é um efeito de mistura de cor.</p>

<p><img alt="" src="/Media/Image/Dot2_ViewsandWindows_EffectsView13_1-2.png"> <em>Figura 14: efeito RGB Rainbow</em></p>

<p><strong>Colorwheel 2 color</strong> (objeto número​ 16):<br>
Altera entre duas cores.<br>
Este é um efeito da roda de cores.</p>

<a name="toc_header_anchor_10" id="toc_header_anchor_10" class="topic-toc-item"></a><h2>Efeitos de Beam</h2>

<p>Na dot2, existem três efeitos de beam predefinidos disponíveis.</p>

<p><strong>Iris </strong>(objeto número​ 17):<br>
Abre e fecha a íris.</p>

<p><img alt="" src="/Media/Image/Dot2_ViewsandWindows_EffectsView14_1-2.png"> <em>Figura 15: efeito Iris</em></p>

<p><strong>Shutter </strong>(objeto número​ 18):<br>
Abre e fecha o shutter.</p>

<p><img alt="" src="/Media/Image/Dot2_ViewsandWindows_EffectsView16_1-2.png"> <em>Figura 16: efeito Shutter</em></p>

<p><strong>Strobe </strong>(objeto número​ 19):<br>
Altera entre strobe rápido e devagar.</p>

<p><img alt="" src="/Media/Image/Dot2_ViewsandWindows_EffectsView15_1-2.png"> <em>Figura 17: efeito Strobe</em></p>

<a name="toc_header_anchor_11" id="toc_header_anchor_11" class="topic-toc-item"></a><h2>Efeitos de Foco</h2>

<p>Na dot2, existem dois efeitos de foco predefinidos disponíveis.</p>

<p><strong>Zoom </strong>(objeto número&nbsp;20):<br>
Altera entre grande e estreito.</p>

<p><strong>Focus </strong>(objeto número&nbsp;21):<br>
Altera entre foco mínimo e máximo.</p>

<p>&nbsp;</p>

<a name="toc_header_anchor_12" id="toc_header_anchor_12" class="topic-toc-item"></a><h2>Funções da Barra de&nbsp;Encoder</h2>

<p>A velocidade padrão do encoder é sem casa decimal.<br>
Para alterar a velocidade do encoder para devagar, pressione a tecla encoder​ <span class="hardkey"><img alt="encoder" src="/Media/Mlg/encoder.png"></span> . A velocidade do encoder está com casa decimal.<br>
Para alterar a velocidade do&nbsp;encoder&nbsp;para​ ultra devagar, pressione e segure a tecla&nbsp;<span class="hardkey"><img alt="ma" src="/Media/Mlg/ma.png"></span>&nbsp;e pressione a tecla encoder&nbsp;<span class="hardkey"><img alt="encoder" src="/Media/Mlg/encoder.png"></span>. A velocidade do encoder é igual a um passo de DMX.</p>

<p><img alt="" src="/Media/Image/dot2_views-and-windows_effect-view_encoder-bar_v1-3.png"> <em>Figura 18: barra de encoder de Efeito</em></p>

<p>Para usar a segunda função de um encoder, pressione e segure a tecla&nbsp;<span class="hardkey"><img alt="ma" src="/Media/Mlg/ma.png"></span>.<br>
Para abrir a <a href="/Topic/014d961b-8de1-4f48-92de-e6da3cc6a15f">calculadora</a>, pressione o encoder.</p>

<p>Para informações detalhadas sobre configurações, consulte <a href="/Topic/ca034c9c-6b13-4948-8e83-c6e4f2ff4d21">O que são Efeitos?</a>.</p>

<p><strong>Valor Alto ou Valor Baixo:</strong><br>
Para selecionar o valor alto ou baixo, gire o encoder para a esquerda ou direita​.</p>

<p><strong>Velocidade:</strong><br>
Para selecionar a velocidade em&nbsp;BPM (batidas por minuto), gire o&nbsp;encoder&nbsp;para a esquerda ou direita​​.</p>

<p><strong>Fase:</strong><br>
Para selecionar a fase,&nbsp;gire o&nbsp;encoder&nbsp;para a esquerda ou direita​.</p>

<p><strong>Largura ou Suavidade:</strong><br>
Para selecionar largura ou suavidade,&nbsp;gire o&nbsp;encoder&nbsp;para a esquerda ou direita​.</p>

<a name="toc_header_anchor_13" id="toc_header_anchor_13" class="topic-toc-item"></a><h2>Grupos e Blocos</h2>

<p>É possível ativar <strong>Grupos</strong> e <strong>Blocos </strong>na barra de encoder de efeitos..</p>

<div class="important"><strong>Importante:</strong><br>
Para fazer&nbsp;<strong>Grupos</strong>&nbsp;e&nbsp;<strong>Blocos</strong>&nbsp;visíveis, pressione&nbsp;<span class="hardkey">MA</span>.&nbsp;</div>

<p><em>Figura 19: Barra de encoder de efeito –&nbsp;grupos e&nbsp;</em><em>blocos</em></p>

<ul>
	<li>Para inserir números na calculadora, toque em&nbsp;<strong>Grupos&nbsp;</strong>ou&nbsp;<strong>Blocos</strong>.&nbsp;</li>
</ul>

<p><strong>Grupos:</strong></p>

<p>Os grupos dividem os fixtures selecionados em grupos que se movem na mesma direção.</p>

<p><strong>Exemplo:</strong></p>

<p>Se você criar 2 grupos :</p>

<ul>
	<li>O primeiro fixture será adicionado ao primeiro grupo.&nbsp;</li>
	<li>O segundo fixture&nbsp;será adicionado ao segundo grupo.&nbsp;</li>
	<li>O terceiro fixture será adicionado ao primeiro grupo.&nbsp;</li>
	<li>O quarto fixture será adicionado ao segundo grupo e assim por diante.&nbsp;</li>
</ul>

<p><strong>Blocos:</strong></p>

<p>Os blocos dividem os fixtures selecionados em pequenos grupos que funcionam individualmente.</p>

<p><strong>Exemplo:</strong></p>

<p>&nbsp;Se você criar um simples&nbsp;dimmer chase contendo 10 fixtures:</p>

<ul>
	<li>Defina o valor do bloco como 2.&nbsp;</li>
	<li>Você verá então que os fixtures um e dois estão se movendo juntos na mesma direção.&nbsp;</li>
	<li>O mesmo princípio se aplica aos&nbsp;fixtures 3 e 4.&nbsp;</li>
</ul>

<p><strong>Nenhum</strong>:</p>

<p>Os&nbsp;efeitos são executados através de todos os fixtures.&nbsp;</p>

<div class="important"><strong>Importante:</strong><br>
O plano de fundo sombreado simboliza que <strong>Grupos</strong> e <strong>Blocos </strong>não são transferidos para o editor de efeitos ao editar cues&nbsp;ou presets.&nbsp;</div>

<a name="toc_header_anchor_14" id="toc_header_anchor_14" class="topic-toc-item"></a><h2>Wings</h2>

<p>Os wings&nbsp;dividem os fixtures selecionados em um grupo menor. Esses grupos são espelhados.</p>

<p><strong>Exemplo:</strong></p>

<p>Se você criou um simples&nbsp;dimmer chase&nbsp;contendo 10 fixtures. Eles se movem da esquerda para a direita:</p>

<ul>
	<li>Coloque o&nbsp;wing&nbsp;para 2.&nbsp;</li>
	<li>Os primeiros 5&nbsp;fixtures movem da esquerda para a direita.&nbsp;</li>
	<li>Os próximos 5 fixtures&nbsp;movem da direita para a esquerda.&nbsp;</li>
	<li>Os&nbsp;fixtures&nbsp;movem em sincronia um com o outro.​&nbsp;</li>
</ul>

<ol>
	<li>Selecione&nbsp;fixtures.&nbsp;</li>
	<li>Pressione&nbsp;<span class="hardkey">Effect</span>.&nbsp;</li>
	<li>Escolha um efeito.&nbsp;</li>
	<li>Toque em&nbsp;<span class="softkey">Phase</span>&nbsp;e a calculadora&nbsp;ffectPhase se abre.</li>
</ol>

<p><br>
<img alt="" src="/Media/Image/dot2_effect-phase-calculator_v1-3.png"></p>

<p><em>Figura 20: Calculadora&nbsp;effect phase</em></p>

<p>Para usar o comando&nbsp;wing, toque em um dos seis botões de wings predefinidos com os seguintes números:</p>

<p>O efeito começa no meio e move-se para cada lado de uma maneira paralela​.&nbsp;</p>

<p><strong>-360...0:</strong></p>

<p>O efeito começa em cada lado e move-se para o meio em uma maneira paralela.​&nbsp;</p>

<hr>
<p>&nbsp;</p>

<a name="toc_header_anchor_15" id="toc_header_anchor_15" class="topic-toc-item"></a><h2>Links Relacionados</h2>

<ul>
	<li><a href="/Topic/e740a39c-ef36-4081-9014-59e0a288711c">O que é o Programador?</a></li>
	<li><a href="/Topic/c2173bc1-c86a-4c4f-b2d7-05a83f0e9b2a">Agrupamento de Macros</a></li>
	<li><a href="/Topic/16b6da99-c52a-4ff8-a746-ecdacda313ff">Vista de Tipo de Preset Gobo</a></li>
	<li><a href="/Topic/2457c63d-dd11-4171-b366-db5a6453f23d">Como trabalhar com Efeitos?</a></li>
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
		<input id="CurrentGuid" name="CurrentGuid" type="hidden" value="0e539790-291a-4be0-be05-8f3e8d81c0eb">
	</span>
</form></div>&nbsp;	</span>
	<span class="pull-right" style="white-space: nowrap;">
			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/window_editcuenumbers/pt/1.9'; " title="Go to previous page 'Edit Cue Number(s) '">
				<i class="icon-arrow-left"></i> previous
			</button>

			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/window_emptyexecutor/pt/1.9';" title="Go to next page 'Empty Executor'">
				next <i class="icon-arrow-right"></i> 
			</button>
	</span>
</div>
	<div class="clear-fix"></div>
	<div class="pull-right">
	
			<button class="btn btn-mini" onclick="location.href='/Media/TopicPdf/26136/29';" title="Open/Save this topic as PDF document for viewing or printing">
				<img src="/Content/images/icons/filetype_pdf.png"> Open topic as PDF
			</button>
	</div>
<div class="clear-fix" style="margin-bottom: 10px"></div>
</div>

	