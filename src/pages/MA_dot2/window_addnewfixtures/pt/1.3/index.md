
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
		<input id="CurrentGuid" name="CurrentGuid" type="hidden" value="dce789eb-89d8-49f1-aedc-bd9fbd45afa0">
	</span>
</form></div>&nbsp;	</span>
	<span class="pull-right" style="white-space: nowrap;">
			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/views_and_windows_icons/pt/1.3'; " title="Go to previous page 'Icons'">
				<i class="icon-arrow-left"></i> previous
			</button>

			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/Window_Backup/pt/1.3';" title="Go to next page 'Backup'">
				next <i class="icon-arrow-right"></i> 
			</button>
	</span>
</div>
<div class="clear-fix" style="margin-bottom: 10px"></div>
</div>

					<div class="infobox"><b>Hint:</b><br><b>New help version</b><br>The help version you selected belongs to an older software version. <a href="/Topic/SetCurrentVersionNumber/29/dce789eb-89d8-49f1-aedc-bd9fbd45afa0">You may want to view the latest help version.</a></div>

			<div class="pull-right">
					<button class="btn btn-mini" style="margin-right: 10px; height: 30px;" onclick="location.href = '/Media/TopicPdf/17619/12'; " title="Open/Save this topic as PDF document for viewing or printing">
						<img src="/Content/images/icons/filetype_pdf.png" style="height: 24px;"> Open topic as PDF
					</button>
				<span class="badge badge-info">Version 1.3</span>
			</div>
		<h1>Janela Adicionar Novos Fixtures</h1>

			<div class="topic-table-of-contents">
				<h2>Table of contents of this topic</h2>
				<div class="topic-toc-toggler topic-toc-toggler-hide"><a href="#" onclick="$('.topic-toc-ul').toggle(); $('.topic-toc-toggler-hide').hide(); $('.topic-toc-toggler-show').show(); return false;">hide</a></div>
				<div class="topic-toc-toggler topic-toc-toggler-show" style="display: none;"><a href="#" onclick="$('.topic-toc-ul').toggle(); $('.topic-toc-toggler-hide').show(); $('.topic-toc-toggler-show').hide(); return false;">show</a></div>
				<ul class="topic-toc-ul">
						<li>
							<a href="#toc_header_anchor_1">Tipo</a>
						</li>
						<li>
							<a href="#toc_header_anchor_2">Quantidade</a>
						</li>
						<li>
							<a href="#toc_header_anchor_3">ID</a>
						</li>
						<li>
							<a href="#toc_header_anchor_4">Nome</a>
						</li>
						<li>
							<a href="#toc_header_anchor_5">Patch</a>
						</li>
						<li>
							<a href="#toc_header_anchor_6">Offset</a>
						</li>
						<li>
							<a href="#toc_header_anchor_7">Funções da Barra de Encoder</a>
						</li>
				</ul>
			</div>

		<p>A <strong>Janela Adicionar Novos&nbsp;Fixtures</strong>&nbsp;está localizada no&nbsp;<a href="/Topic/198599eb-ca20-4e60-b007-bb08cd2ce43b">Setup</a>, coluna&nbsp;<strong>Show</strong>, <a href="/Topic/272be3c8-e297-4e8a-902a-01916763f043">Menu de Patch</a>, <strong>Adicionar Novos&nbsp;Fixtures</strong>.</p>

<p><img alt="" src="/Media/Image/Dot2_ViewsandWindows_AddNewFixturesWindow05_1-1-3.png">&nbsp;<em>Figura 1: Janela Adicionar Novos&nbsp;Fixtures</em></p>

<p>Nessa vista, você pode selecionar:&nbsp;um&nbsp;<strong>tipo </strong>de Fixture, a&nbsp;<strong>quantidade</strong>, o <strong>ID&nbsp;de fixture</strong>, o&nbsp;<strong>nome do fixture,</strong>&nbsp;o&nbsp;<strong>endereço de patch</strong>&nbsp;e o <strong>offset</strong>.</p>

<p>Há seis linhas de edição.</p>

<p>Para confirmar suas configurações e adicionar novos fixtures, toque em&nbsp;<img alt="" src="/Media/Image/Dot2_ViewsandWindows_ControlElements_TitleBar13_1-0.PNG">&nbsp;na barra de título.<br>
Você está de volta ao Menu de Patch.</p>

<p>Para sair da <strong>Janela Adicionar Novos Fixtures</strong>, toque <img alt="" src="/Media/Image/Dot2_ViewsandWindows_ControlElements_TitleBar14_1-0_1.PNG">&nbsp;na barra de título ou <span class="hardkey">Esc</span>&nbsp;no&nbsp;console.<br>
Você está de volta ao&nbsp;<a href="/Topic/272be3c8-e297-4e8a-902a-01916763f043">Menu de Patch</a>.</p>

<a name="toc_header_anchor_1" id="toc_header_anchor_1" class="topic-toc-item"></a><h2>Tipo</h2>

<p>A linha de edição do tipo contém uma lista para baixo com quatro tipos de fixture padrão.</p>

<ul>
	<li>2 Dimmer 00</li>
	<li>3 LED - RGB 8 bit</li>
	<li>4 LED - RGBA 8 bit</li>
	<li>5 LED - RGBW 8 bit</li>
</ul>

<p>e aqueles que já estão no show file atual.<br>
Para abrir a lista, toque nos três pontos na linha de edição&nbsp;<img alt="" src="/Media/Image/Dot2_ViewsandWindows_AddNewFixturesWindow01_1-0.PNG">.</p>

<p><img alt="" src="/Media/Image/Dot2_ViewsandWindows_AddNewFixturesWindow03_1-0.PNG"><em>Figura 2: Drop down&nbsp;com tipos de fixtures padrão e os tipos de fixture&nbsp;no arquivo de show.</em></p>

<p>Para importar outro tipo de fixture da biblioteca para o show file, que não esteja na lista, toque em <span class="softkey">Selecionar Outro...</span>.<br>
Isso abre a <a href="/Topic/a924561a-b1eb-4661-aa5f-99867413e4ea">janela Importar Tipo de Fixture</a>.</p>

<a name="toc_header_anchor_2" id="toc_header_anchor_2" class="topic-toc-item"></a><h2>Quantidade</h2>

<p>A linha de edição de quantidade mostra quantos fixtures serão criados.<br>
Para selecionar a quantidade, toque no mais ou no menos.</p>

<a name="toc_header_anchor_3" id="toc_header_anchor_3" class="topic-toc-item"></a><h2>ID</h2>

<p>A linha de edição de ID exibe o próximo ID de fixture disponível.<br>
Para selecionar um ID de fixture, toque no mais ou no menos.<br>
Para obter uma visão geral sobre os IDs de fixture atribuídos e os disponíveis, toque em&nbsp;<span class="softkey">Selecionar...</span><br>
Isso abre a&nbsp;<a href="/Topic/01949542-9b01-4052-b2c5-ac718d5dbdfe">janela Selecionar IDs de Fixtures</a>.</p>

<a name="toc_header_anchor_4" id="toc_header_anchor_4" class="topic-toc-item"></a><h2>Nome</h2>

<p>A linha de edição de nome exibe o nome do fixture.</p>

<p>Para editar o nome, toque no teclado&nbsp;<img alt="" src="/Media/Image/Dot2_ViewsandWindows_ImportFixtureType01_1-0.PNG">. A janela de edição nome se abre.<br>
Se você criar vários fixtures com o mesmo nome, o nome terá um número consecutivo no final.</p>

<a name="toc_header_anchor_5" id="toc_header_anchor_5" class="topic-toc-item"></a><h2>Patch</h2>

<p>A linha de edição de patch exibe o próximo endereço de&nbsp;patch disponível.<br>
Para selecionar um outro universo ou o endereço, toque os três pontos&nbsp;<img alt="" src="/Media/Image/Dot2_ViewsandWindows_AddNewFixturesWindow01_1-0.PNG">&nbsp;na linha de edição. Isso abre a lista para baixo.</p>

<p><img alt="" src="/Media/Image/Dot2_ViewsandWindows_AddNewFixturesWindow04_1-1-3.png"><em>Figura 3: Selecione o endereço e o universo de DMX.</em></p>

<p>&nbsp;</p>

<p>Para obter uma visão geral sobre os&nbsp;endereços de DMX atribuídos e os disponíveis, toque em&nbsp;<span class="softkey">Selecionar...</span><br>
Isso abre a&nbsp;<a href="/Topic/bfc8868e-9fe1-4364-be83-5f81994da9e8">janela Selecionar Endereço de DMX...</a>.</p>

<a name="toc_header_anchor_6" id="toc_header_anchor_6" class="topic-toc-item"></a><h2>Offset</h2>

<p>O offset&nbsp;exibe o&nbsp;patch offset selecionado.</p>

<p>O offset é o espaço livre do endereço de&nbsp;DMX entre um fixture e outro. Um patch offset&nbsp;lhe dará uma visão geral melhor sobre os fixtures e seus endereços de patch.</p>

<p>Para&nbsp;patchear alguns&nbsp;fixtures&nbsp;e com um endereço inicial de&nbsp;x.xx1, selecione o&nbsp;patch offset&nbsp;de&nbsp;10.</p>

<p>Para selecionar a quantidade, toque o mais ou menos. Por padrão o&nbsp;offset&nbsp;é 1.</p>

<p><img alt="" src="/Media/Image/Dot2_ViewsandWindows_AddNewFixturesWindow06_1-1-3.png"><em>Figura 4: Menu de&nbsp;Patch&nbsp;com&nbsp;Offset&nbsp;de&nbsp;10</em></p>

<a name="toc_header_anchor_7" id="toc_header_anchor_7" class="topic-toc-item"></a><h2>Funções da Barra de Encoder</h2>

<p>​<img alt="" src="/Media/Image/Dot2_ViewsandWindows_AddNewFixturesWindow02_1-1-3.png"><em>Figura 5: Barra de&nbsp;Encoder&nbsp;da Janela&nbsp;Adicionar Novos&nbsp;Fixtures</em></p>

<p><strong>Tipo:</strong><br>
Para percorrer pela lista da linha de edição de Tipo, gire o encoder para direita ou esquerda.<br>
Para abrir a&nbsp;<a href="/Topic/a924561a-b1eb-4661-aa5f-99867413e4ea">janela Importar Tipo de Fixture</a>, pressione ou toque no&nbsp;encoder.</p>

<p><strong>Quantidade:</strong><br>
Para selecionar a quantidade na linha de edição de Quantidade, gire o&nbsp;encoder&nbsp;para direita ou esquerda.</p>

<p><strong>ID de Fixture:</strong><br>
Para selecionar o ID&nbsp;de fixture&nbsp;na linha de edição ID,&nbsp;gire o&nbsp;encoder&nbsp;para direita ou esquerda​.<br>
Para abrir a​ <a href="/Topic/01949542-9b01-4052-b2c5-ac718d5dbdfe">janela Selecionar ID(s) de Fixture</a>, pressione ou toque no&nbsp;encoder​.</p>

<p><strong>Patch Break 1:</strong><br>
Para selecionar o endereço de DMX, gire o&nbsp;encoder&nbsp;para direita ou esquerda​.<br>
Para abrir a​ <a href="/Topic/bfc8868e-9fe1-4364-be83-5f81994da9e8">janela Selecionar Endereço de DMX...</a>, pressione ou toque no&nbsp;encoder​.</p>

<p><strong>Patch Offset:</strong><br>
Para selecionar o&nbsp;patch offset, pressione e segure&nbsp;<span class="hardkey"><img alt="ma" src="/Media/Mlg/ma_1.png"></span> e gire o&nbsp;encoder&nbsp;para a esquerda ou direita.<br>
Para abrir a <a href="/Topic/014d961b-8de1-4f48-92de-e6da3cc6a15f">calculadora</a>&nbsp;para selecionar o patch offset, pressione e segure&nbsp;<span class="hardkey"><img alt="ma" src="/Media/Mlg/ma_1.png"></span> e&nbsp;pressione o encoder.</p>


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
		<input id="CurrentGuid" name="CurrentGuid" type="hidden" value="dce789eb-89d8-49f1-aedc-bd9fbd45afa0">
	</span>
</form></div>&nbsp;	</span>
	<span class="pull-right" style="white-space: nowrap;">
			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/views_and_windows_icons/pt/1.3'; " title="Go to previous page 'Icons'">
				<i class="icon-arrow-left"></i> previous
			</button>

			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/Window_Backup/pt/1.3';" title="Go to next page 'Backup'">
				next <i class="icon-arrow-right"></i> 
			</button>
	</span>
</div>
	<div class="clear-fix"></div>
	<div class="pull-right">
	
			<button class="btn btn-mini" onclick="location.href='/Media/TopicPdf/17619/12';" title="Open/Save this topic as PDF document for viewing or printing">
				<img src="/Content/images/icons/filetype_pdf.png"> Open topic as PDF
			</button>
	</div>
<div class="clear-fix" style="margin-bottom: 10px"></div>
</div>

	