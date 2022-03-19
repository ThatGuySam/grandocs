
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
		<input id="CurrentGuid" name="CurrentGuid" type="hidden" value="6cc94a63-1d90-4188-ab0c-d5ba5594b845">
	</span>
</form></div>&nbsp;	</span>
	<span class="pull-right" style="white-space: nowrap;">
			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/window_PatchAndFixtureSchedule/pt/1.9'; " title="Go to previous page 'Patch and Fixture Schedule'">
				<i class="icon-arrow-left"></i> previous
			</button>

			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/ViewItem_Preset/pt/1.9';" title="Go to next page 'Presets Pools'">
				next <i class="icon-arrow-right"></i> 
			</button>
	</span>
</div>
<div class="clear-fix" style="margin-bottom: 10px"></div>
</div>

		
			<div class="pull-right">
					<button class="btn btn-mini" style="margin-right: 10px; height: 30px;" onclick="location.href = '/Media/TopicPdf/18186/29'; " title="Open/Save this topic as PDF document for viewing or printing">
						<img src="/Content/images/icons/filetype_pdf.png" style="height: 24px;"> Open topic as PDF
					</button>
				<span class="badge badge-info">Version 1.9</span>
			</div>
		<h1>Vista de Tipo de Preset Posição</h1>

			<div class="topic-table-of-contents">
				<h2>Table of contents of this topic</h2>
				<div class="topic-toc-toggler topic-toc-toggler-hide"><a href="#" onclick="$('.topic-toc-ul').toggle(); $('.topic-toc-toggler-hide').hide(); $('.topic-toc-toggler-show').show(); return false;">hide</a></div>
				<div class="topic-toc-toggler topic-toc-toggler-show" style="display: none;"><a href="#" onclick="$('.topic-toc-ul').toggle(); $('.topic-toc-toggler-hide').show(); $('.topic-toc-toggler-show').hide(); return false;">show</a></div>
				<ul class="topic-toc-ul">
						<li>
							<a href="#toc_header_anchor_1">Vista de Posição</a>
						</li>
						<li>
							<a href="#toc_header_anchor_2">Vista de Posição&nbsp;Raw</a>
						</li>
						<li>
							<a href="#toc_header_anchor_3">Funções da Barra de&nbsp;Encoder</a>
						</li>
				</ul>
			</div>

		<p>Para ir para a <strong>Vista Tipo de Preset&nbsp;Posição</strong>, toque em&nbsp;<span class="softkey">Position</span>&nbsp;na&nbsp;<a href="/Topic/60e350ef-d825-4072-a644-ed2430d82522">Barra de Tipo de Preset</a>.<br>
- ou -<br>
Pressione e segure&nbsp;<span class="hardkey"><img alt="ma" src="/Media/Mlg/ma_1.png"></span>&nbsp;e pressione&nbsp;<span class="hardkey">2</span>, para o tipo de preset 2 (= Position).</p>

<p>A vista de tipo de Preset Posição só é ativa se o fixture selecionado tem atributos de posição.</p>

<p><img alt="" src="/Media/Image/Dot2_ViewsandWindows_PositionPresetTypeView11_1-0.PNG"></p>

<p>O tipo de preset&nbsp;posição é fragmentado na <strong>vista posição</strong> e na <strong>vista posição raw</strong>.</p>

<p>Para abrir a vista de efeitos de posição na tela 1, toque em&nbsp;<img alt="" src="/Media/Image/Dot2_ViewsandWindows_ControlElements_TitleBar17_1-0.PNG">&nbsp;na barra de título.<br>
Se um efeito está sendo executado em um fixture selecionado, a vista de tipo de preset&nbsp;posição muda para um modo de efeito e obtém uma &nbsp;<a href="/Topic/a9e3dcd7-1fb1-4dab-8e42-03f9e0de3e99">barra de título de modo de efeito</a>&nbsp;azul.</p>

<a name="toc_header_anchor_1" id="toc_header_anchor_1" class="topic-toc-item"></a><h2>Vista de Posição</h2>

<p>A vista de posição é a primeira guia do tipo da vista de tipo de preset&nbsp;posição.&nbsp;</p>

<p>Na vista de posição, você controla os valores de posição atuais em graus.&nbsp;</p>

<p><strong>Pan:</strong> Para selecionar o valor de pan, mova o controle deslizante para cima ou para baixo.&nbsp;<br>
<strong>Tilt:</strong> Para selecionar o valor de tilt, mova o controle deslizante para cima ou para baixo.&nbsp;<br>
Para trazer o tipo de fixture para a posição central, toque em <span class="softkey">Centro</span>.</p>

<p>Mais à direita da vista temos vários botões para ajustar os valores de posição. Existem duas funções para ajustar pan e tilt juntos.</p>

<p><img alt="" src="/Media/Image/Dot2_ViewsandWindows_PositionPresetTypeView01_1-0.PNG"><br>
<strong>Flip:</strong> Para alterar a combinação de pan e tilt e apontar o seu fixture na mesma direção, toque em <span class="softkey">Flip</span>. Os valores estão ativos no programador.</p>

<p><img alt="" src="/Media/Image/Dot2_ViewsandWindows_PositionPresetTypeView02_1-0.PNG"></p>

<p><strong>Início:</strong> Para trazer o pan e tilt para a posição central, toque em <span class="softkey">Início</span>. Os valores estão ativos no programador.&nbsp;</p>

<p>Há seis diferentes funções de alinhar.&nbsp;<br>
Alinhar é uma função para ajustar os valores de posição dos fixtures na ordem selecionada.&nbsp;</p>

<p>Os botões Align&nbsp;têm a mesma função da tecla <span class="hardkey">Align</span>. Para mais informação, consulte <a href="/Topic/653b1e1b-2bcd-4065-b918-bef12958ceb3">Tecla Align</a>.<br>
&nbsp;</p>

<p><strong>Alinhar&gt;</strong>: Para ajustar de alto para baixo.</p>

<p><img alt="" src="/Media/Image/Dot2_ViewsandWindows_PositionPresetTypeView04_1-0.PNG"></p>

<p><strong>Alinhar &lt;: </strong>Para ajustar de baixo para alto.</p>

<p><br>
<img alt="" src="/Media/Image/Dot2_ViewsandWindows_PositionPresetTypeView05_1-0.PNG"></p>

<p><strong>Alinhar &gt;&lt;:</strong> Para ajustar a partir do alto ao baixo para o meio e, a partir do meio, do baixo a alto.</p>

<p><img alt="" src="/Media/Image/Dot2_ViewsandWindows_PositionPresetTypeView06_1-0.PNG"></p>

<p><strong>Alinhar &lt;&gt;: </strong>Para ajustar a partir do baixo ao alto para o meio, e a partir do meio, do alto a baixo.</p>

<p><img alt="" src="/Media/Image/Dot2_ViewsandWindows_PositionPresetTypeView07_1-0.PNG"><br>
<strong>Wings:</strong> Isso é apenas para atributos de pan para dividir a partir do meio em dois grupos.&nbsp;<br>
O primeiro tipo de fixture está no grupo 1 e segue os valores pan inseridos.&nbsp;<br>
O último tipo de fixture está no grupo 2 e age como um espelho invertido.</p>

<p><img alt="" src="/Media/Image/Dot2_ViewsandWindows_PositionPresetTypeView08_1-0.PNG"></p>

<p><strong>Alinhar Off:</strong>&nbsp;Para ajustar igualmente. A função Alinhar é desligada.</p>

<a name="toc_header_anchor_2" id="toc_header_anchor_2" class="topic-toc-item"></a><h2>Vista de Posição&nbsp;Raw</h2>

<p>A vista de posição raw está localizada na segunda guia da vista de tipo de preset&nbsp;posição.</p>

<p><img alt="" src="/Media/Image/Dot2_ViewsandWindows_PositionPresetTypeView10_1-0.PNG"></p>

<p>Na vista de posição raw, você controla os valores dos canais de posição raw&nbsp;em <a href="/Topic/bb882594-fcad-4b4a-b6c7-4ab7a20b088e">valores naturais</a>&nbsp;de seus fixtures selecionados.</p>

<a name="toc_header_anchor_3" id="toc_header_anchor_3" class="topic-toc-item"></a><h2>Funções da Barra de&nbsp;Encoder</h2>

<p>A velocidade padrão do encoder&nbsp;é sem casa decimal.<br>
Para alterar a velocidade do encoder para devagar, pressione a tecla&nbsp;<span class="hardkey"><img alt="encoder" src="/Media/Mlg/encoder.png"></span>&nbsp;encoder .<br>
Para alterar a velocidade do encoder para ultra devagar​, pressione segure a tecla&nbsp;<span class="hardkey"><img alt="ma" src="/Media/Mlg/ma.png"></span>&nbsp;e pressione a tecla&nbsp;<span class="hardkey"><img alt="encoder" src="/Media/Mlg/encoder.png"></span>&nbsp;encoder. A velocidade do encoder é igual a um step de DMX.</p>

<p><img alt="" src="/Media/Image/Dot2_ViewsandWindows_PositionPresetTypeView09_1-0.PNG"></p>

<p><strong>Pan (°)/Pan:</strong><br>
Para selecionar o valor de Pan, gire o&nbsp;encoder&nbsp;para a esquerda ou direita.​<br>
Para abrir a&nbsp;<a href="/Topic/014d961b-8de1-4f48-92de-e6da3cc6a15f">calculadora</a>, pressione o encoder.</p>

<p><strong>Tilt (°)/Tilt:</strong><br>
Para selecionar o valor de Tilt, gire o&nbsp;encoder&nbsp;para a esquerda ou direita.<br>
Para abrir a <a href="/Topic/014d961b-8de1-4f48-92de-e6da3cc6a15f">calculadora</a>, pressione o&nbsp;encoder.</p>

<a name="toc_header_anchor_4" id="toc_header_anchor_4" class="topic-toc-item"></a><h2>Links Relacionados</h2>

<ul>
	<li><a href="/Topic/740955a8-3b27-4e50-b35c-7a728c1d9c38">O que são Presets?</a></li>
	<li><a href="/Topic/1d3c4f8d-0d36-44da-9f6d-fa91f0db3024">Como trabalhar com Presets?</a></li>
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
		<input id="CurrentGuid" name="CurrentGuid" type="hidden" value="6cc94a63-1d90-4188-ab0c-d5ba5594b845">
	</span>
</form></div>&nbsp;	</span>
	<span class="pull-right" style="white-space: nowrap;">
			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/window_PatchAndFixtureSchedule/pt/1.9'; " title="Go to previous page 'Patch and Fixture Schedule'">
				<i class="icon-arrow-left"></i> previous
			</button>

			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/ViewItem_Preset/pt/1.9';" title="Go to next page 'Presets Pools'">
				next <i class="icon-arrow-right"></i> 
			</button>
	</span>
</div>
	<div class="clear-fix"></div>
	<div class="pull-right">
	
			<button class="btn btn-mini" onclick="location.href='/Media/TopicPdf/18186/29';" title="Open/Save this topic as PDF document for viewing or printing">
				<img src="/Content/images/icons/filetype_pdf.png"> Open topic as PDF
			</button>
	</div>
<div class="clear-fix" style="margin-bottom: 10px"></div>
</div>

	