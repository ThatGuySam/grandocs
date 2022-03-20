---
originalUrl: 'https://help2.malighting.com/Page/MA_dot2/GSG_21_Effect/pt/1.1'
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
		<input id="CurrentGuid" name="CurrentGuid" type="hidden" value="0b640789-2f5f-4e40-bf31-2124c818c5b5">
	</span>
</form></div>&nbsp;	</span>
	<span class="pull-right" style="white-space: nowrap;">
			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/GSG_20_Chaser/pt/1.1'; " title="Go to previous page '20 - Construindo chasers'">
				<i class="icon-arrow-left"></i> previous
			</button>

			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/GSG_22_ConnectOnpc3dWingsAndNodes/pt/1.1';" title="Go to next page '22 - Conectar ao onPC, 3D, Wings e Nodes'">
				next <i class="icon-arrow-right"></i> 
			</button>
	</span>
</div>
<div class="clear-fix" style="margin-bottom: 10px"></div>
</div>

					<div class="infobox"><b>Hint:</b><br><b>New help version</b><br>The help version you selected belongs to an older software version. <a href="/Topic/SetCurrentVersionNumber/29/0b640789-2f5f-4e40-bf31-2124c818c5b5">You may want to view the latest help version.</a></div>

			<div class="pull-right">
					<button class="btn btn-mini" style="margin-right: 10px; height: 30px;" onclick="location.href = '/Media/TopicPdf/12764/3'; " title="Open/Save this topic as PDF document for viewing or printing">
						<img src="/Content/images/icons/filetype_pdf.png" style="height: 24px;"> Open topic as PDF
					</button>
				<span class="badge badge-info">Version 1.1</span>
			</div>
		<h1>Guia de Introdução - Efeitos</h1>

			<div class="topic-table-of-contents">
				<h2>Table of contents of this topic</h2>
				<div class="topic-toc-toggler topic-toc-toggler-hide"><a href="#" onclick="$('.topic-toc-ul').toggle(); $('.topic-toc-toggler-hide').hide(); $('.topic-toc-toggler-show').show(); return false;">hide</a></div>
				<div class="topic-toc-toggler topic-toc-toggler-show" style="display: none;"><a href="#" onclick="$('.topic-toc-ul').toggle(); $('.topic-toc-toggler-hide').show(); $('.topic-toc-toggler-show').hide(); return false;">show</a></div>
				<ul class="topic-toc-ul">
						<li>
							<a href="#toc_header_anchor_1">Efeitos de dimmer e teoria de efeitos</a>
						</li>
						<li>
							<a href="#toc_header_anchor_2">Efeitos de Cor</a>
						</li>
						<li>
							<a href="#toc_header_anchor_3">Efeitos de Posição</a>
						</li>
				</ul>
			</div>

		<p>Neste capítulo veremos o mecanismo dos efeitos na &nbsp;MA&nbsp;dot2.</p>

<p>Vamos começar de zero. Desligue tudo e faça o reset de todos os masters especiais.</p>

<a name="toc_header_anchor_1" id="toc_header_anchor_1" class="topic-toc-item"></a><h2>Efeitos de dimmer e teoria de efeitos</h2>

<p>Vamos começar com alguns dos efeitos mais básicos. Selecione os fixtures de 1 a 10.&nbsp;</p>

<p>Selecione <span class="softkey">Dimmer</span> na Barra de Tipo de Preset e pressione a tecla <span class="hardkey">Effect</span>.&nbsp;</p>

<p>Isso abre a vista de Efeitos de Dimmer. Aqui você tem uma seleção de possíveis efeitos para o atributo de dimmer. O lado esquerdo da tela mostra os possíveis efeitos e o lado direito as diferentes ferramentas. como: "Seleção Aleatória" e todos os tipos de "Alinhar".&nbsp;</p>

<p>Toque no efeito chamado <span class="softkey">Soft Dimmer</span> e olhe a vista de Fixture. Isso nos deu um efeito de curva sinuosa em movimento em nossos dez fixtures. Isso vai de 0% a 100%.&nbsp;</p>

<p>Os efeitos são a transição de um valor para outro. Ele sempre se move entre dois valores - e apenas dois. Nós podemos controlar a forma como ele deve ir de um valor para o outro, podemos controlar a velocidade, quando todos eles devem fazer algo ao mesmo tempo ou se eles devem se espalhar.</p>

<p>Vamos examinar algumas dessas configurações. Vamos começar com os dois valores. Na barra de título de efeito azul, você irá encontrar dois botões chamados <span class="softkey">Valor Baixo</span> e <span class="softkey">Valor Alto</span>. Estes são usados para acessar e alterar esses valores.</p>

<p><img alt="" src="/Media/Image/Dot2_GettingStarted_Effect_01_1-0.png"></p>

<p>Pressione onde se diz <span class="softkey">Valor Baixo</span>. Isto lhe dá a aparência padrão para o valor de dimmer. Toque no botão chamado <span class="softkey">25%</span>. Observe como isso muda o valor mais baixo na vista de Fixture. Observe que a barra de título de Dimmer também é azul e há dois botões extras nesta vista:</p>

<p><img alt="" src="/Media/Image/Dot2_GettingStarted_Effect_02_1-0.png"></p>

<p>O botão mais à esquerda é uma pequena curva sinuosa. Isso não muda poies nós mudamos o tipo de efeito. O botão <span class="softkey">Valor Normal</span> irá levá-lo de volta para controlar o valor normal. Vamos examinar o que isto significa mais tarde.&nbsp;</p>

<p>Toque onde diz <span class="softkey">Valor Alto</span> e, em seguida, altere o valor para <span class="softkey">75%</span>. Agora que nós limitamos o efeito para ser executado apenas de 25% para 75%. Esses são os valores Alto e Baixo. Agora toque no ícone da curva sinuosa. Isso nos leva de volta a vista de efeito.&nbsp;</p>

<p>Nós também poderíamos ter configurado os Valores Baixos e Altos usando encoder esquerdo.&nbsp;</p>

<p>Gire o encoder número 2. Isto altera a velocidade do efeito.</p>

<p>O terceiro encoder controla algo chamado Fase. Isto é o nome que usamos para a divulgação dos fixtures ao longo do tempo do efeito de loop. Tente pressionar o encoder e coloque o valor em 0. Agora, todos os dez fixtures estão fazendo a mesma saída. Em outras palavras, eles estão ao mesmo tempo na fase de loop do efeito. Mesmo se você colocar o encoder para cima, nada realmente parece acontecer. Isso ocorre pois todos os fixtures ainda estão no mesmo ponto do loop, estamos apenas movendo onde eles estão no loop. Se nós quisermos refazer o efeito para ser o que ele era antes, então precisamos espalhar o fixture pelo&nbsp;loop. Este loop também é frequentemente descrito como um círculo. É por isso que a fase é um grau. Existem 360 graus em um círculo, então se quisermos espalhar todos os fixtures de forma uniforme através do loop, eles precisam ter uma fase de 0 a 360 graus. Por causa da matemática (um pouco complexo demais para começar a explicar aqui) isso precisa ser 0 para -360 para parecer que se move da esquerda para direita. Pressione o encoder e selecione o botão chamado&nbsp;<span class="softkey">0..-360</span>. E estamos de volta.</p>

<p>Antes de seguirmos, toque em <span class="softkey">Hard Dimmer</span>, por favor. Isso nos dá um efeito de dimmer estilo chaser. O encoder da direita tem controle sobre algo chamado <strong>Largura </strong>e <strong>Suavidade</strong>. Tente ligá-lo. Uma pequena largura dá-lhe menos fixtures ligados ao mesmo tempo. Quanto maior o número, mais fixtures estarão ligados. Com uma largura de algo como 20%, tente pressionar e segurar a tecla&nbsp;<span class="hardkey"><img alt="ma" src="/Media/Mlg/ma_1.png"></span>&nbsp;enquanto liga o encoder. Isso faz com que os valores façam fade in e out ou snap. Dependendo do número de pordentagem. Tente dar suavidade de 100% e largura de 50%. Reconhece o efeito?&nbsp;</p>

<p>Experimente os dois efeitos ramp e use largura.</p>

<p>Ok, vamos tentar usar isso. Escolha o efeito <span class="softkey">Hard Dimmer</span> e coloque a largura em 50%. Agora pressione <span class="softkey">Seleção Aleatória</span>. Pressione <span class="hardkey">Store</span> e, em seguida, uma das teclas associadas executor número 1 na página 1. Limpe seu programador e tente executar o cue. Se você tiver definido um tempo de cue padrão, então o efeito usa isso para fade no efeito.&nbsp;</p>

<p>Vamos fazer um cue número dois em que o efeito faz o fade a uma parada. Selecione os 10&nbsp;fixtures novamente e pressione a tecla <span class="hardkey">Effect</span>. Agora deve ser lógico você pressionar <span class="softkey">Off</span> na vista Effect, mas isso tira o efeito do nosso programador e agora ele está no cue. A lista de cue é uma lista de cue de rastreamento, por isso precisamos de dizer aos fixtures para interromper o efeito - nós precisamos programar um stop. Na MA, isso é chamado de "Stomp". Então pressione onde se diz Stomp. Isso para o efeito. Vamos armazenar isso como um cue 2 com um tempo de fade de 5 segundos - você sabe como fazer isso.</p>

<a name="toc_header_anchor_2" id="toc_header_anchor_2" class="topic-toc-item"></a><h2>Efeitos de Cor</h2>

<p>Vamos tentar fazer alguns efeitos de cor.&nbsp;</p>

<p>Selecione os X4's e toque em <span class="softkey">Color</span> na Barra de Tipo de Preset, em seguida, toque no ícone sinuoso na barra de título.&nbsp;</p>

<p>Toque em <span class="softkey">2 Color Hard</span>. Isso se parece muito com o chaser que fizemos no capítulo anterior!&nbsp;</p>

<p>Agora, os valores Baixo e Alto controlam as duas cores que o seu efeito altera entre. Tente mudá-los. Também use mais com largura e suavidade.</p>

<p>Vamos fazer um efeito que se mova do exterior para o meio. Limpe seu programador. Selecione todo o X4 usando o grupo e execute o efeito <span class="softkey">2 Color Hard</span>. Use os valores Baixos e Altos para selecionar algumas cores com as quais você está feliz. Pressione o encoder de Fase e defina a fase a 0 para todas os fixtures. Agora toque no botão <span class="softkey">Align &lt;&gt;</span> e gire o encoder Fase em sentido anti-horário até que os efeitos se movam de fora para dentro. Se você girá-lo o suficiente, então ele começa a se mover para o outro lado. Configure o valor em algo que você esteja feliz com. Armazene o resultado com o cue 1 no executor número 2 na página 1.</p>

<p>Há um efeito especial de cor. O efeito RGB Rainbow. Selecione todos os X4's e experimente-o. Armazena isso como cue 2 com um tempo de fade, e tente a transição do cue 1 ao 2.</p>

<p>O efeito "Colorwheel 2 Cor" é utilizado para efeitos de cor sobre rodas de cores. É um efeito entre duas cores em uma roda de cores.</p>

<p>Não há realmente muito mais a dizer sobre os efeitos de cor. Vamos fazer algum movimento.</p>

<a name="toc_header_anchor_3" id="toc_header_anchor_3" class="topic-toc-item"></a><h2>Efeitos de Posição</h2>

<p>Lembra que prometi que iria explicar sobre o "Valor Normal"? Muitos efeitos de posição são apenas divertidos se os fixtures já tem uma posição inicial. Isso significa que podemos ter um cue onde os fixtures apontam para um vocalista em uma banda. No próximo cue o fixture começa a fazer um efeito circular em torno do vocalista. No próximo cue os fixtures se movem para o guitarrista enquanto ainda faz o círculo. No próximo cue os fixtures se movem para o vocalista enquanto o efeito para. Este cenário é a razão pela qual há também o Valor Normal e a razão pela qual os efeitos (valores) são colocados no topo dos &nbsp;valores normais.</p>

<p>Vamos tentar fazer isso. Primeiro faça dois presets com os Alpha Profiles. Eles devem ser chamados de "Singer" (Vocalista) e "Guitar" (Guitarrista). Ligue os fixtures e coloque-os sobre o vocalista. Armazene isso como cue 1 no executor 3 (Página 1).</p>

<p>Agora precisamos de um efeito em cículo. Toque em <span class="softkey">Position</span> na Barra de Tipo de Preset e, em seguida, no ícone sinuoso na barra de título. Aqui nós com certeza encontraremos um efeito de círculo. Vamos torná-lo um pouco mais aleatório. Use o macro <span class="softkey">Odd</span> para selecionar metade dos fixtures e voltar para a vista de Efeitos e toque no botão <span class="softkey">Direção &lt;&gt;</span>. Termine isso pressionando a tecla <span class="hardkey">Set</span> (selecione novamente todos os fixtures). Agora metade dos fixtures viram para o lado oposto. Vamos fazer em um tamanho um pouco menor. O encoder mais à esquerda controla o tamanho. Girando-o, você faz o círculo menor ou maior. Ele mostra dois números diferentes em porcentagem. Isso ocorre porque há dois tamanhos diferentes. Um para tilt e um para pan. Girando o encoder, você mudará esses dois valores juntos. Faça o tamanho que você quiser - Eu gosto de 3,6% .. 10%. Este é o nosso efeito de círculo. Armazene isso como cue 2 com um tempo de fade de 3 segundos.</p>

<p>O próximo cue que precisamos mover é o fixtures para o guitarrista. Selecione o fixture e selecione o preset de posição "Guitar" (Guitarrista). Armazene isso como cue 3.</p>

<p>Com os fixtures selecionados, abra os efeitos de posição novamente e toque em <span class="softkey">Stomp</span> e, em seguida, a posição de preset <span class="softkey">Singer</span> (Vocalista). Guarde isso como cue 4.</p>

<p>Eu acho que você deve adicionar um tempo de fade de 3 segundos para todos os cues. Limpe seu programador e teste isso.</p>

<p>Você pode ver o movimento de círculo na vista de Fixture de Símbolo e você pode ver os presets de posição na vista de Fixture de Folha.</p>

<p>Efeitos de posição utilizam valores Size e Center, em vez de Baixo e Alto. Isto é porque nós temos uma posição de base e fazemos um efeito de tamanho em torno da base. Você pode usar o valor Center para compensar o efeito da posição de base.</p>

<p>&nbsp;</p>

<p>Esta foi a introdução básica aos efeitos. Antes de seguir em frente, passe por outros efeitos de posição. E teste mais alguns efeitos.</p>

<p>&nbsp;</p>

<p>Você pode fazer efeitos sobre a maioria dos tipos de preset. Isto é apenas um demo de alguns dos mais comuns.</p>

<p>&nbsp;</p>

<p>Estamos chegando bem perto do final deste guia. Antes de tudo acabar, devemos dar uma olhada em como conectar equipamentos externos.</p>


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
		<input id="CurrentGuid" name="CurrentGuid" type="hidden" value="0b640789-2f5f-4e40-bf31-2124c818c5b5">
	</span>
</form></div>&nbsp;	</span>
	<span class="pull-right" style="white-space: nowrap;">
			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/GSG_20_Chaser/pt/1.1'; " title="Go to previous page '20 - Construindo chasers'">
				<i class="icon-arrow-left"></i> previous
			</button>

			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/GSG_22_ConnectOnpc3dWingsAndNodes/pt/1.1';" title="Go to next page '22 - Conectar ao onPC, 3D, Wings e Nodes'">
				next <i class="icon-arrow-right"></i> 
			</button>
	</span>
</div>
	<div class="clear-fix"></div>
	<div class="pull-right">
	
			<button class="btn btn-mini" onclick="location.href='/Media/TopicPdf/12764/3';" title="Open/Save this topic as PDF document for viewing or printing">
				<img src="/Content/images/icons/filetype_pdf.png"> Open topic as PDF
			</button>
	</div>
<div class="clear-fix" style="margin-bottom: 10px"></div>
</div>

	
