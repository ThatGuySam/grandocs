
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
		<input id="CurrentGuid" name="CurrentGuid" type="hidden" value="ec01d7b9-e0db-41e3-8371-b9f45736ed75">
	</span>
</form></div>&nbsp;	</span>
	<span class="pull-right" style="white-space: nowrap;">
			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/HT_Cues/pt/1.1'; " title="Go to previous page 'Trabalhar com Cues'">
				<i class="icon-arrow-left"></i> previous
			</button>

			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/HT_Effects/pt/1.1';" title="Go to next page 'Trabalhar com Efeitos'">
				next <i class="icon-arrow-right"></i> 
			</button>
	</span>
</div>
<div class="clear-fix" style="margin-bottom: 10px"></div>
</div>

					<div class="infobox"><b>Hint:</b><br><b>New help version</b><br>The help version you selected belongs to an older software version. <a href="/Topic/SetCurrentVersionNumber/29/ec01d7b9-e0db-41e3-8371-b9f45736ed75">You may want to view the latest help version.</a></div>

			<div class="pull-right">
					<button class="btn btn-mini" style="margin-right: 10px; height: 30px;" onclick="location.href = '/Media/TopicPdf/12971/3'; " title="Open/Save this topic as PDF document for viewing or printing">
						<img src="/Content/images/icons/filetype_pdf.png" style="height: 24px;"> Open topic as PDF
					</button>
				<span class="badge badge-info">Version 1.1</span>
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
							<a href="#toc_header_anchor_2">Alterando as configurações do chaser</a>
						</li>
						<li>
							<a href="#toc_header_anchor_3">Executando o&nbsp;chaser</a>
						</li>
				</ul>
			</div>

		<p>Chasers são listas de cue que são executadas em um modo especial.&nbsp;</p>

<p>Então você vai precisar de uma lista de cue com alguns cues. Se você não sabe como fazer isso, por favor dê uma olhada em&nbsp;<a href="/Topic/511081dd-5ffb-4aaa-8d09-a0859b0d0a19">Como trabalhar com Cues</a>.</p>

<a name="toc_header_anchor_1" id="toc_header_anchor_1" class="topic-toc-item"></a><h2>Configurando o executor no modo Chaser</h2>

<p>Uma vez que você tenha alguns cues em um executor, você pode colocá-lo no modo chaser. Para fazer isso, abra a vista da lista de cue do executor que você pretende alterar. Pressione a tecla&nbsp;<span class="hardkey"><img alt="view" src="/Media/Mlg/view.png" style="height:auto"></span>&nbsp;e, em seguida, uma das teclas associadas ao executor com a lista de cue que deseja mudar.&nbsp;</p>

<p>Isso abre a <a href="/Topic/b8ab1bbb-182d-41d6-9a1e-52f5267922c7">vista de Cues</a>. No canto superior direito desta vista, há um ícone de Tool (ferramenta)&nbsp;<img alt="" src="/Media/Image/Dot2_ViewsandWindows_ControlElements_TitleBar05_1-0.PNG" style="height:auto">&nbsp;- toque nele. Isso abre a janela<a href="/Topic/eea17a4c-1b42-406e-86d9-7e61b3a0bfdd"> Configurações&nbsp;do Executor</a>. A primeira configuração é "Is Chaser". Toque na área verde ao lado, até que você não tenha mais o sinal de pare, mas sim o sinal de correto.&nbsp;</p>

<p>Agora você alterou o modo do executor.&nbsp;</p>

<p>Uma lista de cue sendo executada como um chaser ignora os tempos de cue&nbsp;e os disparos armazenados na lista de cue. Então, as colunas de tempo ficam acinzentadas quando o modo de Chaser é selecionado.</p>

<p>Nas configurações do executor, você também pode configurar o tempo off (ou toque isso na barra de título da vista de cue). Se você configurar esse tempo, ele será usado para fazer o fade de&nbsp;chaser off&nbsp;se você usar a tecla&nbsp;<span class="hardkey">Off</span>&nbsp;ou o&nbsp;<a href="/Topic/da92259e-70de-4983-96bf-3cc99f52d576">comando Off</a>.</p>

<p>O tempo Off também funciona como um <strong>tempo On</strong> para os chasers. Isso significa que ele fará o fade dos parâmetros armazenados ao usar o tempo que você configurou quando&nbsp;iniciou o chaser.</p>

<a name="toc_header_anchor_2" id="toc_header_anchor_2" class="topic-toc-item"></a><h2>Alterando as configurações do chaser</h2>

<p>Existem diferentes configurações que ajustam como o chaser está sendo executado. Estas configurações podem ser alteradas quando olhamos novamente para os cues do executor. Então, se você fechar a janela Configurações tocando no botão <span class="softkey">Esc</span> no canto superior esquerdo, então você voltar à vista de&nbsp;Cues - caso não, pressione a tecla &nbsp;<span class="hardkey"><img alt="view" src="/Media/Mlg/view.png"></span>&nbsp;e, em seguida, uma das teclas associadas ao executor.</p>

<p>Na vista de cues&nbsp;você agora vê uma barra diferente na parte inferior da tela e os seus encoders tem alguns parâmetros diferentes.</p>

<p>Esta é a barra na parte inferior da vista de Cues:</p>

<p><img alt="" src="/Media/Image/Dot2_ViewsandWindows_CuesView03_1-0.PNG"></p>

<p>E esses são os parâmetros nos encoders:</p>

<p><img alt="" src="/Media/Image/Dot2_ViewsandWindows_CuesView04_1-0.PNG"></p>

<p>Com os dois encoders centrais você pode controlar a percentagem de Fade entre os steps (cues) e a velocidade do Chaser. O Fade é o tempo usado para fazer a transição de um step para o outro. Os tempos de fade armazenados na lista de cue&nbsp;são ignorados e o Fade é quem controla se os valores irão fazer o fade ou snap (altera instantaneamente). Quanto maior for o número, maior é o tempo usado para fade. É expressado com um número por cento. Isto é porque ele é expressado como um tempo disponível baseado na velocidade do chaser. A Velocidade é um número expresso em BPM (Batidas Por Minuto). Isto nos diz o número de steps (cues) executados por minuto.&nbsp;</p>

<p>A barra do chaser na parte inferior da vista de cues nos permite controlar como o chaser é executado. As duas áreas verdes no topo determinam se o chaser está em loop e a ordem executa os steps. A configuração da esquerda ajusta a direção. Pressionando os três pontos brancos você abrirá o menu. Você tem as seguintes opções:</p>

<ul>
	<li><strong>Avançar</strong>&nbsp;- irá executar os steps&nbsp;do menor número para o maior.​</li>
	<li><strong>Para trás</strong>&nbsp;- irá executar os&nbsp;steps&nbsp;do maior número para o menor​.&nbsp;</li>
	<li><strong>Bounce</strong>&nbsp;- começará como Avançar e, quando atingir o maior número, voltará todo o caminho percorrido até chegar ao menor número. O resultado é uma constante mudança de direção.</li>
	<li><strong>Aleatório</strong>&nbsp;- escolherá cues/steps aleatórios.</li>
</ul>

<p>As configurações da direita decidem como o é o loop do chaser.&nbsp;Pressionando os três pontos brancos você terá as seguintes opções:​</p>

<ul>
	<li><strong>Sem fim</strong>&nbsp;- o chaser será executado até que você o pare.</li>
	<li><strong>Shoot-Off</strong>&nbsp;-&nbsp;irá executar o chaser uma vez e, em seguida, o desligar. Se a ordem de execução for aleatória, ele irá executado a quantidade de steps/cues, mas não necessariamente todos os cues/steps diferentes!&nbsp;</li>
	<li><strong>Shoot-On</strong>&nbsp;- é o mesmo que Shoot-Off&nbsp;mas irá pausar depois do step/cue final.</li>
</ul>

<p>A metade inferior disso lhe dá controle para dar o play&nbsp;ou para pausar o chaser&nbsp;(para qualquer um dos modos de shoot). Há também três botões que mudam a velocidade. Você pode dividir a velocidade pela metade, dobrá-la ou restaurá-la para as configurações iniciais do encoder.</p>

<p>​Você pode alterar dinamicamente a velocidade do chaser. Pressione e segure a tecla <span class="hardkey">Speed</span>, enquanto você toque em uma das teclas associadas ao chaser. Isso ajustar a velocidade para você tocar. Esta é uma função chamada "Learn". Isto pode ser atribuído a uma das teclas associadas ao chaser. Pressione e segure a tecla&nbsp;<span class="hardkey"><img alt="ma" src="/Media/Mlg/ma_1.png"></span>&nbsp;e, em seguida, pressione a tecla <span class="hardkey">Label</span> (= comando assign), solte a tecla&nbsp;<span class="hardkey"><img alt="ma" src="/Media/Mlg/ma_1.png"></span>&nbsp;e pressione <span class="hardkey">Speed</span> (perceba o que sua linha de comando diz</p>

<div class="cl_input">Assign Learn</div>

<p>Agora pressione a tecla que você deseja ao Learn. Isso também pode ser feito usando a&nbsp;<a href="/Topic/f613ca45-9cb0-43e7-bb0d-d75fdc5b0d39">janela Alterar Função dos Botões Executores</a>&nbsp;ou na janela <a href="/Topic/eea17a4c-1b42-406e-86d9-7e61b3a0bfdd">Configurações do Executor</a>.</p>

<a name="toc_header_anchor_3" id="toc_header_anchor_3" class="topic-toc-item"></a><h2>Executando o&nbsp;chaser</h2>

<p>Você pode iniciar um chaser movendo o de 0% para algum número acima de 0%, isso irá executar o chaser. Você também pode usar o comando&nbsp;<a href="/Topic/09fcbb48-813b-45e2-b737-a652eb042d06">Go</a> ou o&nbsp;<a href="/Topic/d85eba0d-711b-4b27-87a5-0e1c05148074">On</a>&nbsp;para executá-lo na direção configurada. Se você usar o comando <a href="/Topic/612a0d43-97da-4835-a05e-95811917bb38">GoBack</a>&nbsp;o chaser é executado, porém na direção oposta. O comando&nbsp;<a href="/Topic/2353b9cf-8ea2-4feb-bf50-274f5abbd6ca">Toggle</a>&nbsp;irá alternar o status atual de execução do chaser. O comando <a href="/Topic/da92259e-70de-4983-96bf-3cc99f52d576">Off</a>&nbsp;irá parar o chaser. O comando&nbsp;<a href="/Topic/3195c958-6148-4b47-b388-28d83eadeaf2">Flash</a>&nbsp;executará o chaser, contanto que você esteja pressionando a tecla.</p>

<p>Você pode atribuir todos esses comandos à&nbsp;teclas associadas ao chaser&nbsp;ou você pode usá-las temporariamente pressionando a tecla de função na dot2&nbsp;e a tecla associada ao chaser.</p>


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
		<input id="CurrentGuid" name="CurrentGuid" type="hidden" value="ec01d7b9-e0db-41e3-8371-b9f45736ed75">
	</span>
</form></div>&nbsp;	</span>
	<span class="pull-right" style="white-space: nowrap;">
			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/HT_Cues/pt/1.1'; " title="Go to previous page 'Trabalhar com Cues'">
				<i class="icon-arrow-left"></i> previous
			</button>

			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/HT_Effects/pt/1.1';" title="Go to next page 'Trabalhar com Efeitos'">
				next <i class="icon-arrow-right"></i> 
			</button>
	</span>
</div>
	<div class="clear-fix"></div>
	<div class="pull-right">
	
			<button class="btn btn-mini" onclick="location.href='/Media/TopicPdf/12971/3';" title="Open/Save this topic as PDF document for viewing or printing">
				<img src="/Content/images/icons/filetype_pdf.png"> Open topic as PDF
			</button>
	</div>
<div class="clear-fix" style="margin-bottom: 10px"></div>
</div>

	