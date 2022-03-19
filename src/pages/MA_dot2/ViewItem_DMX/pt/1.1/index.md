
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
		<input id="CurrentGuid" name="CurrentGuid" type="hidden" value="2f939332-43b1-44f0-9a0e-3121d5083e70">
	</span>
</form></div>&nbsp;	</span>
	<span class="pull-right" style="white-space: nowrap;">
			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/ViewItem_Dimmer/pt/1.1'; " title="Go to previous page 'Tipo de Preset Dimmer'">
				<i class="icon-arrow-left"></i> previous
			</button>

			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/window_editcuenumbers/pt/1.1';" title="Go to next page 'Editar Número(s) de Cue'">
				next <i class="icon-arrow-right"></i> 
			</button>
	</span>
</div>
<div class="clear-fix" style="margin-bottom: 10px"></div>
</div>

					<div class="infobox"><b>Hint:</b><br><b>New help version</b><br>The help version you selected belongs to an older software version. <a href="/Topic/SetCurrentVersionNumber/29/2f939332-43b1-44f0-9a0e-3121d5083e70">You may want to view the latest help version.</a></div>

			<div class="pull-right">
					<button class="btn btn-mini" style="margin-right: 10px; height: 30px;" onclick="location.href = '/Media/TopicPdf/12566/3'; " title="Open/Save this topic as PDF document for viewing or printing">
						<img src="/Content/images/icons/filetype_pdf.png" style="height: 24px;"> Open topic as PDF
					</button>
				<span class="badge badge-info">Version 1.1</span>
			</div>
		<h1>Vista de DMX</h1>

			<div class="topic-table-of-contents">
				<h2>Table of contents of this topic</h2>
				<div class="topic-toc-toggler topic-toc-toggler-hide"><a href="#" onclick="$('.topic-toc-ul').toggle(); $('.topic-toc-toggler-hide').hide(); $('.topic-toc-toggler-show').show(); return false;">hide</a></div>
				<div class="topic-toc-toggler topic-toc-toggler-show" style="display: none;"><a href="#" onclick="$('.topic-toc-ul').toggle(); $('.topic-toc-toggler-hide').show(); $('.topic-toc-toggler-show').hide(); return false;">show</a></div>
				<ul class="topic-toc-ul">
						<li>
							<a href="#toc_header_anchor_1">Endereço de DMX</a>
						</li>
						<li>
							<a href="#toc_header_anchor_2">Funções da Barra de&nbsp;Encoder</a>
						</li>
				</ul>
			</div>

		<p>Para ir para a <strong>Vista de DMX</strong>&nbsp;na tela&nbsp;1: Pressione &nbsp;<span class="hardkey">DMX</span>&nbsp;no&nbsp;console.</p>

<p>Para ir para a <strong>Vista de DMX&nbsp;</strong>na tela 2: Toque em&nbsp;<span class="softkey">Mais...</span>&nbsp;na&nbsp;<a href="/Topic/aeb06b87-4def-4d5c-8ccd-fce24793de63">vista da barra</a>&nbsp;e depois&nbsp;<span class="softkey">DMX</span>.</p>

<p><span class="image_gray_border"><img alt="" src="/Media/Image/Dot2_ViewsandWindows_DMXView02_1-0.PNG" style="height:auto"></span><em>Figura 1: Vista de&nbsp;DMX</em></p>

<p>Essa vista exibe a atual saída de fixtures e os <a href="/Topic/bb882594-fcad-4b4a-b6c7-4ab7a20b088e">atributos</a>&nbsp;nos universos 1-8.<br>
O universo 9 exibe a entrada de DMX&nbsp;e trabalha apenas para&nbsp;DMX remote. Para mais informações, consulte&nbsp;<a href="/Topic/abf8c6b2-dcd4-4f27-8381-8defa74eec66">Configurações de Entradas Remotas</a>.</p>

<p>Para fixar essa vista e desativar o modo de vista dinâmico, toque no <strong>pino&nbsp;<img alt="" src="/Media/Image/Dot2_ViewsandWindows_ControlElements_TitleBar04_1-0.PNG">&nbsp;</strong>na barra de título.</p>

<p>Para percorres pela vista de DMX, deslize a barra vertical.</p>

<p>Enquanto você desliza pela barra, uma "bolha" exibe o endereço na vista.</p>

<p><img alt="" src="/Media/Image/Dot2_ViewsandWindows_DMXView03_1-0.PNG"></p>

<p>Você também pode deslizar para cima e para baixo na vista da tela para se deslocar.</p>

<p>Para mostrar aos atributos de&nbsp;DMX&nbsp;o respectivo endereço de&nbsp;DMX, pressione o í<strong>cone de vista</strong>&nbsp;<img alt="" src="/Media/Image/Dot2_ViewsandWindows_ControlElements_TitleBar06_1-0.PNG">&nbsp;na&nbsp;<a href="/Topic/a9e3dcd7-1fb1-4dab-8e42-03f9e0de3e99">barra de título</a>.</p>

<p><span class="image_gray_border"><img alt="" src="/Media/Image/Dot2_ViewsandWindows_DMXView04_1-0.PNG" style="height:auto"></span><em>Figura 2: vista de&nbsp;DMX ​com Atributos</em></p>

<p>Se um atributo não tem saída de&nbsp;DMX, o valor 0 e a célula são exibidos em cinza.</p>

<p>Se um atributo tem uma saída de DMX, os valores começam com 1 (verde escuro) e vão até 255 (neon verde claro).</p>

<p>Para procurar por um fixture na vista de DMX e marcá-lo: Selecione o foxture na vista de fixture&nbsp;e o modo dinâmico vai para o respectivo endereço de&nbsp;DMX.</p>

<p>Se um ou mais fixtures&nbsp;estão selecionados na <a href="/Topic/989f0b88-de3d-4818-8c0b-a69fa90b2106">vista de fixture</a>, eles são exibidos na vista de DMX&nbsp;com uma moldura amarela.</p>

<p>Canais de DMX&nbsp;parkeados são exibidos com um plano de fundo azul.</p>

<div class="tip"><strong>Dica:</strong><br>
Para desparkear&nbsp;canais de DMX, abra a&nbsp;<a href="/Topic/e5c9bd78-bb42-4cb3-aa88-a844659b59cc">janela tools</a>.</div>

<p><span class="image_gray_border"><img alt="" src="/Media/Image/Dot2_ViewsandWindows_DMXView05_1-0.PNG" style="height:auto"></span><em>Figura 3: vista de&nbsp;DMX&nbsp;com Canais de DMX&nbsp;parkeados</em></p>

<p>Valores do tester de, inseridos&nbsp;via&nbsp;<a href="/Topic/21a9d724-8140-4731-a7f0-2b7c66ac8bb1">comando DMX</a>, são exibidos com um plano de fundo vermelho.</p>

<div class="tip"><strong>Dica:</strong><br>
Para desligar o tester de DMX, abra a <a href="/Topic/e5c9bd78-bb42-4cb3-aa88-a844659b59cc">janela tools</a>&nbsp;ou use o&nbsp;<a href="/Topic/21a9d724-8140-4731-a7f0-2b7c66ac8bb1">comando de DMX</a>.</div>

<p><span class="image_gray_border"><img alt="" src="/Media/Image/Dot2_ViewsandWindows_DMXView06_1-0.PNG" style="height:auto"></span><em>Figura 4: vista de&nbsp;DMX&nbsp;com Tester de DMX ativo</em></p>

<a name="toc_header_anchor_1" id="toc_header_anchor_1" class="topic-toc-item"></a><h2>Endereço de DMX</h2>

<p>Abaixo da barra de título e mais à esquerda da tela, estão as colunas de endereço de&nbsp;DMX.</p>

<p>A coluna de endereço horizontal mostra o endereço de&nbsp;DMX para a respectiva linha da folha.</p>

<p>A coluna vertical mais à esquerda mostra primeiramente o universo e, em seguida, com os quais endereços a primeira coluna começa.</p>

<p>Um universo de&nbsp;DMX tem 512 endereços de&nbsp;DMX.</p>

<p>Antes da folha de DMX de um universo inicar, o universo é exibido e qual&nbsp;XLR plug-in é usado.</p>

<p>Para mostrar os endereços DMX na vista de DMX, pressione a telca&nbsp;<span class="hardkey"><img alt="ma" src="/Media/Mlg/ma.png"></span>.</p>

<a name="toc_header_anchor_2" id="toc_header_anchor_2" class="topic-toc-item"></a><h2>Funções da Barra de&nbsp;Encoder</h2>

<p><span class="image_gray_border"><img alt="" src="/Media/Image/Dot2_ViewsandWindows_DMXView01_1-0.PNG" style="height:auto"></span><em>Figura 5: Barra de Encoder da vista de&nbsp;DMX na tela 1</em></p>

<p><strong>Encoder:</strong><br>
Para rolar pela vista de DMX para cima ou para baixo, gire o encoder&nbsp;para esquerda ou direita.</p>


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
		<input id="CurrentGuid" name="CurrentGuid" type="hidden" value="2f939332-43b1-44f0-9a0e-3121d5083e70">
	</span>
</form></div>&nbsp;	</span>
	<span class="pull-right" style="white-space: nowrap;">
			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/ViewItem_Dimmer/pt/1.1'; " title="Go to previous page 'Tipo de Preset Dimmer'">
				<i class="icon-arrow-left"></i> previous
			</button>

			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/window_editcuenumbers/pt/1.1';" title="Go to next page 'Editar Número(s) de Cue'">
				next <i class="icon-arrow-right"></i> 
			</button>
	</span>
</div>
	<div class="clear-fix"></div>
	<div class="pull-right">
	
			<button class="btn btn-mini" onclick="location.href='/Media/TopicPdf/12566/3';" title="Open/Save this topic as PDF document for viewing or printing">
				<img src="/Content/images/icons/filetype_pdf.png"> Open topic as PDF
			</button>
	</div>
<div class="clear-fix" style="margin-bottom: 10px"></div>
</div>

	