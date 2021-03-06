---
originalUrl: 'https://help2.malighting.com/Page/MA_dot2/HT_Chasers/pt/1.2'
---

<div class="topic-navigation">

<div class="pull-right">
	<span class="pull-left">


<div class="pull-left">
<form action="/Topic/SetCurrentVersionNumber" class="form-inline" id="frmTagSelector" method="post">	<span class="form-mini">
		<div class="input-prepend"><span class="add-on">Select different version</span><select autocomplete="off" id="versionNumberId" name="versionNumberId" onchange="$(this).closest('#frmTagSelector').submit();" style="width: 120px;"><option value="">- latest -</option>
<option value="3">1.1</option>
<option selected="selected" value="7">1.2</option>
<option value="12">1.3</option>
<option value="16">1.5</option>
<option value="29">1.9</option>
</select></div>
		<input data-val="true" data-val-number="The field Int32 must be a number." data-val-required="The Int32 field is required." id="ProductId" name="ProductId" type="hidden" value="7">
		<input id="CurrentGuid" name="CurrentGuid" type="hidden" value="ec01d7b9-e0db-41e3-8371-b9f45736ed75">
	</span>
</form></div>&nbsp;	</span>
	<span class="pull-right" style="white-space: nowrap;">
			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/HT_Cues/pt/1.2'; " title="Go to previous page 'Work with cues'">
				<i class="icon-arrow-left"></i> previous
			</button>

			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/HT_Effects/pt/1.2';" title="Go to next page 'Work with effects'">
				next <i class="icon-arrow-right"></i> 
			</button>
	</span>
</div>
<div class="clear-fix" style="margin-bottom: 10px"></div>
</div>

					<div class="infobox"><b>Hint:</b><br><b>New help version</b><br>The help version you selected belongs to an older software version. <a href="/Topic/SetCurrentVersionNumber/29/ec01d7b9-e0db-41e3-8371-b9f45736ed75">You may want to view the latest help version.</a></div>

			<div class="pull-right">
					<button class="btn btn-mini" style="margin-right: 10px; height: 30px;" onclick="location.href = '/Media/TopicPdf/12971/7'; " title="Open/Save this topic as PDF document for viewing or printing">
						<img src="/Content/images/icons/filetype_pdf.png" style="height: 24px;"> Open topic as PDF
					</button>
				<span class="badge badge-info">Version 1.2</span>
			</div>
		<h1>Como Trabalhar com Chasers</h1>

			<div class="topic-table-of-contents">
				<h2>Table of contents of this topic</h2>
				<div class="topic-toc-toggler topic-toc-toggler-hide"><a href="#" onclick="$('.topic-toc-ul').toggle(); $('.topic-toc-toggler-hide').hide(); $('.topic-toc-toggler-show').show(); return false;">hide</a></div>
				<div class="topic-toc-toggler topic-toc-toggler-show" style="display: none;"><a href="#" onclick="$('.topic-toc-ul').toggle(); $('.topic-toc-toggler-hide').show(); $('.topic-toc-toggler-show').hide(); return false;">show</a></div>
				<ul class="topic-toc-ul">
						<li>
							<a href="#toc_header_anchor_1">Configurando o executor no modo Chaser</a>
						</li>
						<li>
							<a href="#toc_header_anchor_2">Alterando as configura????es do chaser</a>
						</li>
						<li>
							<a href="#toc_header_anchor_3">Executando o&nbsp;chaser</a>
						</li>
				</ul>
			</div>

		<p>Chasers s??o listas de cue que s??o executadas em um modo especial.&nbsp;</p>

<p>Ent??o voc?? vai precisar de uma lista de cue com alguns cues. Se voc?? n??o sabe como fazer isso, por favor d?? uma olhada em&nbsp;<a href="/Topic/511081dd-5ffb-4aaa-8d09-a0859b0d0a19">Como trabalhar com Cues</a>.</p>

<a name="toc_header_anchor_1" id="toc_header_anchor_1" class="topic-toc-item"></a><h2>Configurando o executor no modo Chaser</h2>

<p>Uma vez que voc?? tenha alguns cues em um executor, voc?? pode coloc??-lo no modo chaser. Para fazer isso, abra a vista da lista de cue do executor que voc?? pretende alterar. Pressione a tecla&nbsp;<span class="hardkey"><img alt="view" src="/Media/Mlg/view.png" style="height:auto"></span>&nbsp;e, em seguida, uma das teclas associadas ao executor com a lista de cue que deseja mudar.&nbsp;</p>

<p>Isso abre a <a href="/Topic/b8ab1bbb-182d-41d6-9a1e-52f5267922c7">vista de Cues</a>. No canto superior direito desta vista, h?? um ??cone de Tool (ferramenta)&nbsp;<img alt="" src="/Media/Image/Dot2_ViewsandWindows_ControlElements_TitleBar05_1-0.PNG" style="height:auto">&nbsp;- toque nele. Isso abre a janela<a href="/Topic/eea17a4c-1b42-406e-86d9-7e61b3a0bfdd"> Configura????es&nbsp;do Executor</a>. A primeira configura????o ?? "Is Chaser". Toque na ??rea verde ao lado, at?? que voc?? n??o tenha mais o sinal de pare, mas sim o sinal de correto.&nbsp;</p>

<p>Agora voc?? alterou o modo do executor.&nbsp;</p>

<p>Uma lista de cue sendo executada como um chaser ignora os tempos de cue&nbsp;e os disparos armazenados na lista de cue. Ent??o, as colunas de tempo ficam acinzentadas quando o modo de Chaser ?? selecionado.</p>

<p>Nas configura????es do executor, voc?? tamb??m pode configurar o tempo off (ou toque isso na barra de t??tulo da vista de cue). Se voc?? configurar esse tempo, ele ser?? usado para fazer o fade de&nbsp;chaser off&nbsp;se voc?? usar a tecla&nbsp;<span class="hardkey">Off</span>&nbsp;ou o&nbsp;<a href="/Topic/da92259e-70de-4983-96bf-3cc99f52d576">comando Off</a>.</p>

<p>O tempo Off tamb??m funciona como um <strong>tempo On</strong> para os chasers. Isso significa que ele far?? o fade dos par??metros armazenados ao usar o tempo que voc?? configurou quando&nbsp;iniciou o chaser.</p>

<a name="toc_header_anchor_2" id="toc_header_anchor_2" class="topic-toc-item"></a><h2>Alterando as configura????es do chaser</h2>

<p>Existem diferentes configura????es que ajustam como o chaser est?? sendo executado. Estas configura????es podem ser alteradas quando olhamos novamente para os cues do executor. Ent??o, se voc?? fechar a janela Configura????es tocando no bot??o <span class="softkey">Esc</span> no canto superior esquerdo, ent??o voc?? voltar ?? vista de&nbsp;Cues - caso n??o, pressione a tecla &nbsp;<span class="hardkey"><img alt="view" src="/Media/Mlg/view.png"></span>&nbsp;e, em seguida, uma das teclas associadas ao executor.</p>

<p>Na vista de cues&nbsp;voc?? agora v?? uma barra diferente na parte inferior da tela e os seus encoders tem alguns par??metros diferentes.</p>

<p>Esta ?? a barra na parte inferior da vista de Cues:</p>

<p><img alt="" src="/Media/Image/Dot2_ViewsandWindows_CuesView03_1-0.PNG"></p>

<p>E esses s??o os par??metros nos encoders:</p>

<p><img alt="" src="/Media/Image/Dot2_ViewsandWindows_CuesView04_1-0.PNG"></p>

<p>Com os dois encoders centrais voc?? pode controlar a percentagem de Fade entre os steps (cues) e a velocidade do Chaser. O Fade ?? o tempo usado para fazer a transi????o de um step para o outro. Os tempos de fade armazenados na lista de cue&nbsp;s??o ignorados e o Fade ?? quem controla se os valores ir??o fazer o fade ou snap (altera instantaneamente). Quanto maior for o n??mero, maior ?? o tempo usado para fade. ?? expressado com um n??mero por cento. Isto ?? porque ele ?? expressado como um tempo dispon??vel baseado na velocidade do chaser. A Velocidade ?? um n??mero expresso em BPM (Batidas Por Minuto). Isto nos diz o n??mero de steps (cues) executados por minuto.&nbsp;</p>

<p>A barra do chaser na parte inferior da vista de cues nos permite controlar como o chaser ?? executado. As duas ??reas verdes no topo determinam se o chaser est?? em loop e a ordem executa os steps. A configura????o da esquerda ajusta a dire????o. Pressionando os tr??s pontos brancos voc?? abrir?? o menu. Voc?? tem as seguintes op????es:</p>

<ul>
	<li><strong>Avan??ar</strong>&nbsp;- ir?? executar os steps&nbsp;do menor n??mero para o maior.???</li>
	<li><strong>Para tr??s</strong>&nbsp;- ir?? executar os&nbsp;steps&nbsp;do maior n??mero para o menor???.&nbsp;</li>
	<li><strong>Bounce</strong>&nbsp;- come??ar?? como Avan??ar e, quando atingir o maior n??mero, voltar?? todo o caminho percorrido at?? chegar ao menor n??mero. O resultado ?? uma constante mudan??a de dire????o.</li>
	<li><strong>Aleat??rio</strong>&nbsp;- escolher?? cues/steps aleat??rios.</li>
</ul>

<p>As configura????es da direita decidem como o ?? o loop do chaser.&nbsp;Pressionando os tr??s pontos brancos voc?? ter?? as seguintes op????es:???</p>

<ul>
	<li><strong>Sem fim</strong>&nbsp;- o chaser ser?? executado at?? que voc?? o pare.</li>
	<li><strong>Shoot-Off</strong>&nbsp;-&nbsp;ir?? executar o chaser uma vez e, em seguida, o desligar. Se a ordem de execu????o for aleat??ria, ele ir?? executado a quantidade de steps/cues, mas n??o necessariamente todos os cues/steps diferentes!&nbsp;</li>
	<li><strong>Shoot-On</strong>&nbsp;- ?? o mesmo que Shoot-Off&nbsp;mas ir?? pausar depois do step/cue final.</li>
</ul>

<p>A metade inferior disso lhe d?? controle para dar o play&nbsp;ou para pausar o chaser&nbsp;(para qualquer um dos modos de shoot). H?? tamb??m tr??s bot??es que mudam a velocidade. Voc?? pode dividir a velocidade pela metade, dobr??-la ou restaur??-la para as configura????es iniciais do encoder.</p>

<p>???Voc?? pode alterar dinamicamente a velocidade do chaser. Pressione e segure a tecla <span class="hardkey">Speed</span>, enquanto voc?? toque em uma das teclas associadas ao chaser. Isso ajustar a velocidade para voc?? tocar. Esta ?? uma fun????o chamada "Learn". Isto pode ser atribu??do a uma das teclas associadas ao chaser. Pressione e segure a tecla&nbsp;<span class="hardkey"><img alt="ma" src="/Media/Mlg/ma_1.png"></span>&nbsp;e, em seguida, pressione a tecla <span class="hardkey">Label</span> (= comando assign), solte a tecla&nbsp;<span class="hardkey"><img alt="ma" src="/Media/Mlg/ma_1.png"></span>&nbsp;e pressione <span class="hardkey">Speed</span> (perceba o que sua linha de comando diz</p>

<div class="cl_input">Assign Learn</div>

<p>Agora pressione a tecla que voc?? deseja ao Learn. Isso tamb??m pode ser feito usando a&nbsp;<a href="/Topic/f613ca45-9cb0-43e7-bb0d-d75fdc5b0d39">janela Alterar Fun????o dos Bot??es Executores</a>&nbsp;ou na janela <a href="/Topic/eea17a4c-1b42-406e-86d9-7e61b3a0bfdd">Configura????es do Executor</a>.</p>

<a name="toc_header_anchor_3" id="toc_header_anchor_3" class="topic-toc-item"></a><h2>Executando o&nbsp;chaser</h2>

<p>Voc?? pode iniciar um chaser movendo o de 0% para algum n??mero acima de 0%, isso ir?? executar o chaser. Voc?? tamb??m pode usar o comando&nbsp;<a href="/Topic/09fcbb48-813b-45e2-b737-a652eb042d06">Go</a> ou o&nbsp;<a href="/Topic/d85eba0d-711b-4b27-87a5-0e1c05148074">On</a>&nbsp;para execut??-lo na dire????o configurada. Se voc?? usar o comando <a href="/Topic/612a0d43-97da-4835-a05e-95811917bb38">GoBack</a>&nbsp;o chaser ?? executado, por??m na dire????o oposta. O comando&nbsp;<a href="/Topic/2353b9cf-8ea2-4feb-bf50-274f5abbd6ca">Toggle</a>&nbsp;ir?? alternar o status atual de execu????o do chaser. O comando <a href="/Topic/da92259e-70de-4983-96bf-3cc99f52d576">Off</a>&nbsp;ir?? parar o chaser. O comando&nbsp;<a href="/Topic/3195c958-6148-4b47-b388-28d83eadeaf2">Flash</a>&nbsp;executar?? o chaser, contanto que voc?? esteja pressionando a tecla.</p>

<p>Voc?? pode atribuir todos esses comandos ??&nbsp;teclas associadas ao chaser&nbsp;ou voc?? pode us??-las temporariamente pressionando a tecla de fun????o na dot2&nbsp;e a tecla associada ao chaser.</p>


				<br>
<div class="topic-navigation">

<div class="pull-right">
	<span class="pull-left">


<div class="pull-left">
<form action="/Topic/SetCurrentVersionNumber" class="form-inline" id="frmTagSelector" method="post">	<span class="form-mini">
		<div class="input-prepend"><span class="add-on">Select different version</span><select autocomplete="off" id="versionNumberId" name="versionNumberId" onchange="$(this).closest('#frmTagSelector').submit();" style="width: 120px;"><option value="">- latest -</option>
<option value="3">1.1</option>
<option selected="selected" value="7">1.2</option>
<option value="12">1.3</option>
<option value="16">1.5</option>
<option value="29">1.9</option>
</select></div>
		<input data-val="true" data-val-number="The field Int32 must be a number." data-val-required="The Int32 field is required." id="ProductId" name="ProductId" type="hidden" value="7">
		<input id="CurrentGuid" name="CurrentGuid" type="hidden" value="ec01d7b9-e0db-41e3-8371-b9f45736ed75">
	</span>
</form></div>&nbsp;	</span>
	<span class="pull-right" style="white-space: nowrap;">
			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/HT_Cues/pt/1.2'; " title="Go to previous page 'Work with cues'">
				<i class="icon-arrow-left"></i> previous
			</button>

			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/HT_Effects/pt/1.2';" title="Go to next page 'Work with effects'">
				next <i class="icon-arrow-right"></i> 
			</button>
	</span>
</div>
	<div class="clear-fix"></div>
	<div class="pull-right">
	
			<button class="btn btn-mini" onclick="location.href='/Media/TopicPdf/12971/7';" title="Open/Save this topic as PDF document for viewing or printing">
				<img src="/Content/images/icons/filetype_pdf.png"> Open topic as PDF
			</button>
	</div>
<div class="clear-fix" style="margin-bottom: 10px"></div>
</div>

	
