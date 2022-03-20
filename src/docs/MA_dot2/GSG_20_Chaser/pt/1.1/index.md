---
originalUrl: 'https://help2.malighting.com/Page/MA_dot2/GSG_20_Chaser/pt/1.1'
---

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
		<input id="CurrentGuid" name="CurrentGuid" type="hidden" value="9b441763-1726-470c-80ce-7c26487a3c92">
	</span>
</form></div>&nbsp;	</span>
	<span class="pull-right" style="white-space: nowrap;">
			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/GSG_19_Macro/pt/1.1'; " title="Go to previous page '19 - Diversão com Macros'">
				<i class="icon-arrow-left"></i> previous
			</button>

			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/GSG_21_Effect/pt/1.1';" title="Go to next page '21 - Construindo efeitos dinâmicos'">
				next <i class="icon-arrow-right"></i> 
			</button>
	</span>
</div>
<div class="clear-fix" style="margin-bottom: 10px"></div>
</div>

					<div class="infobox"><b>Hint:</b><br><b>New help version</b><br>The help version you selected belongs to an older software version. <a href="/Topic/SetCurrentVersionNumber/29/9b441763-1726-470c-80ce-7c26487a3c92">You may want to view the latest help version.</a></div>

			<div class="pull-right">
					<button class="btn btn-mini" style="margin-right: 10px; height: 30px;" onclick="location.href = '/Media/TopicPdf/12729/3'; " title="Open/Save this topic as PDF document for viewing or printing">
						<img src="/Content/images/icons/filetype_pdf.png" style="height: 24px;"> Open topic as PDF
					</button>
				<span class="badge badge-info">Version 1.1</span>
			</div>
		<h1>Guia de Introdução - Construindo chasers</h1>

			<div class="topic-table-of-contents">
				<h2>Table of contents of this topic</h2>
				<div class="topic-toc-toggler topic-toc-toggler-hide"><a href="#" onclick="$('.topic-toc-ul').toggle(); $('.topic-toc-toggler-hide').hide(); $('.topic-toc-toggler-show').show(); return false;">hide</a></div>
				<div class="topic-toc-toggler topic-toc-toggler-show" style="display: none;"><a href="#" onclick="$('.topic-toc-ul').toggle(); $('.topic-toc-toggler-hide').show(); $('.topic-toc-toggler-show').hide(); return false;">show</a></div>
				<ul class="topic-toc-ul">
						<li>
							<a href="#toc_header_anchor_1">Construindo a lista de cue</a>
						</li>
						<li>
							<a href="#toc_header_anchor_2">Alterando isso para um chaser</a>
						</li>
						<li>
							<a href="#toc_header_anchor_3">Alterando as configurações de&nbsp;Chaser</a>
						</li>
						<li>
							<a href="#toc_header_anchor_4">Executando&nbsp;chasers&nbsp;de&nbsp;cues</a>
						</li>
				</ul>
			</div>

		<p>Ok, então agora nós sabemos como fazer algumas belas Cópias Circulares (Circular Copy), vamos tentar usar isso para fazer um chaser.&nbsp;</p>

<p>Vamos adicioná-la em uma nova página. Pressione&nbsp;<span class="hardkey">Page +</span>&nbsp; até que você esteja na página 3 e deixe "Tudo&nbsp;Off" usando as combinação das teclas&nbsp;<span class="hardkey"><img alt="ma" src="/Media/Mlg/ma_1.png"></span> + <span class="hardkey">Off</span>&nbsp;para abrir a janela Off.</p>

<a name="toc_header_anchor_1" id="toc_header_anchor_1" class="topic-toc-item"></a><h2>Construindo a lista de cue</h2>

<p>Chasers são uma lista de cue que é configurada para ser executada usando um tempo diferente do que está armazenado nos cues. Muitas vezes eles são executados como loops, mas há outras opções.&nbsp;</p>

<p>Então a primeira coisa que precisamos fazer é construir a lista de cue.&nbsp;</p>

<p>Selecione todas os seus X4's usando o grupo.&nbsp;</p>

<p>Ligue-os e dê a eles uma cor azul, exceto ao número 31 - que deve ser branco.</p>

<p>Armazene isso no executor número 1.&nbsp;</p>

<p>Certifique-se de que todos os fixtures estão selecionados (usando um grupo) e toque no macro <span class="softkey">Circular Copy &gt;</span> uma vez.&nbsp;</p>

<p>Armazena isso como cue número 2. Continue usando Circular Copy e armazenando cues até que você tenha 6 cues.&nbsp;</p>

<p>Esta é a nossa lista de cue com os diferentes steps no chaser.</p>

<p>O único problema é que agora temos muita informação. Quando você usa circular copy, você pega todos os valores de fixture e copia. Isso é muito bom, mas não é isso o que queremos em nosso chaser - apenas dimmer e cor. Vamos remover o resto. Selecione todos os X4's pressione a tecla Please duas vezes. Isto lhe traz todos os atributos possíveis em seu programador. Nós queremos manter informações de&nbsp;dimmer e cor em nossos cue, então nós não colocamos isso em nosso programador agora. &nbsp;Pressione <span class="hardkey">Off</span> e depois <span class="softkey">Dimmer</span> na barra de preset (lado direito, tela direita) e novamente <span class="hardkey">Off</span> e depois <span class="softkey">Color</span> na barra. Isso deve remover os marcadores vermelhos próximos a eles. Ok, agora pressione&nbsp;<span class="hardkey">Store</span>&nbsp;<span class="hardkey">Cue</span>&nbsp;<span class="hardkey">Thru</span>&nbsp;e, em seguida, uma das duas teclas associadas ao executor. Na janela Store, toque onde se diz <span class="softkey">Remover</span>. Agora nós removemos todos os valores desnecessários de nossa lista de cue.</p>

<a name="toc_header_anchor_2" id="toc_header_anchor_2" class="topic-toc-item"></a><h2>Alterando isso para um chaser</h2>

<p>Agora nós precisamos alterar o modo da lista de cue. Nós precisamos dizer ao console que agora isso é um chaser.&nbsp;</p>

<p>Pressione a tecla&nbsp;<span class="hardkey"><img alt="view" src="/Media/Mlg/view.png"></span>&nbsp;e, em seguida, qualquer uma das teclas associadas ao executor onde você armazenou os cus.&nbsp;</p>

<p>No canto superior direito da janela de cue você verá o ícone de Tool (ferramenta)&nbsp;<img alt="" src="/Media/Image/Dot2_ViewsandWindows_ControlElements_TitleBar05_1-0.PNG">&nbsp;- Toque-o.&nbsp;</p>

<p>Isso abre as configurações do executor. Também vimos isso com o nosso executor principal, quando ativamos MIB. A primeira configuração parece-se com essa:</p>

<p><img alt="" src="/Media/Image/Dot2_GettingStarted_Chaser_01_1-0.png"></p>

<p>Neste momento, o sinal de marcação não está preenchido, por isso não é um chaser. Toque-o uma vez e em seguida, toque no canto superior esquerdo onde diz <span class="softkey">Esc</span>.&nbsp;</p>

<p>Observe que a cor do executor mudou na Barra do Executor. Ela agora se parece com esta:</p>

<p><img alt="" src="/Media/Image/Dot2_GettingStarted_Chaser_02_1-0.png"></p>

<p>Tente mover o fader para baixo e depois para cima até 100. Agora seu chaser começa a ser executado.</p>

<a name="toc_header_anchor_3" id="toc_header_anchor_3" class="topic-toc-item"></a><h2>Alterando as configurações de&nbsp;Chaser</h2>

<p>Se você não consegue ver a lista de cue, pressione a tecla&nbsp;<span class="hardkey"><img alt="view" src="/Media/Mlg/view.png"></span>&nbsp;novamente e, em seguida, qualquer uma das teclas associadas ao executor onde o chaser está em execução.</p>

<p>Agora, a parte inferior da tela 1 nos dá algumas novas configurações específicas do chaser. Elas se parecem com estas:</p>

<p><img alt="" src="/Media/Image/Dot2_GettingStarted_Chaser_03_1-0.png" style="height:auto"></p>

<p>A parte de cima que está dividida em dois, lhe dá duas configurações diferentes a respeito de como os diferentes cues e chasers devem ser executados. Pressionando os três pontos à&nbsp;esquerda, abre-se uma lista de pop-up com quatro opções.</p>

<ul>
	<li><strong>Avançar</strong>&nbsp;- irá executar os&nbsp;steps&nbsp;do menor número para o maior.​</li>
	<li><strong>Para trás</strong>&nbsp;- irá executar os&nbsp;steps&nbsp;do maior número para o menor​.&nbsp;</li>
	<li><strong>Bounce</strong>&nbsp;- começará como Avançar e, quando atingir o maior número, voltará todo o caminho percorrido até chegar ao menor número. O resultado é uma constante mudança de direção.</li>
	<li><strong>Aleatório</strong>&nbsp;- escolherá&nbsp;cues/steps&nbsp;aleatórios.</li>
</ul>

<p>Os três pontos da direita lhe dão as seguintes configurações:</p>

<ul>
	<li><strong>Sem fim</strong>&nbsp;- o&nbsp;chaser&nbsp;será executado até que você o pare.</li>
	<li><strong>Shoot-Off</strong>&nbsp;-&nbsp;irá executar o&nbsp;chaser&nbsp;uma vez e, em seguida, o desligar. Se a ordem de execução for aleatória, ele irá executado a quantidade de&nbsp;steps/cues, mas não necessariamente todos os&nbsp;cues/steps&nbsp;diferentes!&nbsp;</li>
	<li><strong>Shoot-On</strong>&nbsp;- é o mesmo que&nbsp;Shoot-Off&nbsp;mas irá pausar depois do step/cue&nbsp;final.</li>
</ul>

<p>A metade inferior disso lhe dá controle para dar o&nbsp;play&nbsp;ou para pausar o&nbsp;chaser&nbsp;(para qualquer um dos modos de&nbsp;shoot). Há também três botões que mudam a velocidade. Você pode dividir a velocidade pela metade, dobrá-la ou restaurá-la para as configurações iniciais do&nbsp;encoder.</p>

<p>Lembra quando eu disse que todos os tempos de cue são ignorados? Isto significa que, como padrão, os tempos de fade de cue é 0 e o resultado é que o chaser snaps entre os diferentes steps. Se nós gostaríamos que ele fizesse um fade mais agradável de um passo para o outro, nós podemos fazer isso usando o segundo do encoder da direita. Isto é atualmente chamado de "Fade" e é um número por cento. Isso pode ser usado para configurar quanto do tempo disponível deve ser usado, para fazer o fade de um step para o outro. Quanto mais você aumenta isso, mais tempo é usado para fade.&nbsp;</p>

<p>Ao lado do encoder Fade está o encoder Velocidade. Aqui você pode configurar uma velocidade mais detalhada. Mas se você está tentando combinar a batida de uma música, então você pode pressionar e segurar a tecla <span class="hardkey">Speed</span>&nbsp;enquanto você toca em uma das teclas associadas ao chaser. Isso mudará dinamicamente a velocidade do&nbsp;chaser à velocidade de seus toques - é uma função chamada learn e você também pode vê-la no Master de Velocidade na vista Velocidade Magic.&nbsp;</p>

<p>A MA dot2 está lidando com a velocidade como BPM (Batidas Por Minuto). Isto é usado para chasers e efeitos e ambos são ajustados pelo fader de Velocidade Master&nbsp;na vista de Velocidade&nbsp;Magic.&nbsp;</p>

<a name="toc_header_anchor_4" id="toc_header_anchor_4" class="topic-toc-item"></a><h2>Executando&nbsp;chasers&nbsp;de&nbsp;cues</h2>

<p>Um dos limites dos chasers é que eles não estão facilmente integrados com playback de cue.&nbsp;</p>

<p>A única maneira de fazer isso é adicionando comandos em sua lista de cue. Tente pressionar <span class="hardkey">Cue</span> para abrir a vista da lista de cue principal. Agora percorrer todo o caminho para a direita e localize a coluna "CMD".&nbsp;</p>

<p>Na célula de comando do cue 4 nós queremos adicionar um comando que executa o chaser. Primeiro verifique se o fader do chaser está baixo e, em seguida, observe a página do executor e o número do executor. Ele deve estar na página 3, executor número 1.</p>

<p>No comando de tipo de célula:&nbsp;&nbsp;<span class="syntax">fader 3.1 at 100 fade 2</span></p>

<p>E para desligar novamente no cue 5, você escreve: <span class="syntax">fader 3.1 at 0 fade 5</span></p>

<p>Agora você pode testar a lista de cue e, quando você executar o cue 4, o chaser inicia e com o cue 5 ele para. Observe como o fade in é bom. Mas o fade out não é tão bom assim. Isso porque os X4's ainda têm valores de dimmer do executor principal. Então após o fade de 5 segundos, as cores se tornam verde. Para corrigir isso, você vai precisar criar um novo e vazio&nbsp;cue 5.5 com um tempo de fade de 2 e, em seguida, adicionar os dimmers X4 em 0% apenas no cue 5. Em seguida, dê ao cue 5.5 um follow como o trigger. Eu sugiro que você faça isso :-)&nbsp;</p>

<p>&nbsp;</p>

<p>&nbsp;</p>

<p>Isso é quase tudo o que você precisa saber sobre chasers. Os cues podem ter qualquer tipo de conteúdo, pode haver quantos você quiser. É apenas uma questão de sua imaginação. Próximo capítulo vamos veremos alguns efeitos.</p>

<p>&nbsp;</p>


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
		<input id="CurrentGuid" name="CurrentGuid" type="hidden" value="9b441763-1726-470c-80ce-7c26487a3c92">
	</span>
</form></div>&nbsp;	</span>
	<span class="pull-right" style="white-space: nowrap;">
			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/GSG_19_Macro/pt/1.1'; " title="Go to previous page '19 - Diversão com Macros'">
				<i class="icon-arrow-left"></i> previous
			</button>

			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/GSG_21_Effect/pt/1.1';" title="Go to next page '21 - Construindo efeitos dinâmicos'">
				next <i class="icon-arrow-right"></i> 
			</button>
	</span>
</div>
	<div class="clear-fix"></div>
	<div class="pull-right">
	
			<button class="btn btn-mini" onclick="location.href='/Media/TopicPdf/12729/3';" title="Open/Save this topic as PDF document for viewing or printing">
				<img src="/Content/images/icons/filetype_pdf.png"> Open topic as PDF
			</button>
	</div>
<div class="clear-fix" style="margin-bottom: 10px"></div>
</div>

	
