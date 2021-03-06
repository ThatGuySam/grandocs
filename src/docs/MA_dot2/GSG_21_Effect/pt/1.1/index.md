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
		<h1>Guia de Introdu????o - Efeitos</h1>

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
							<a href="#toc_header_anchor_3">Efeitos de Posi????o</a>
						</li>
				</ul>
			</div>

		<p>Neste cap??tulo veremos o mecanismo dos efeitos na &nbsp;MA&nbsp;dot2.</p>

<p>Vamos come??ar de zero. Desligue tudo e fa??a o reset de todos os masters especiais.</p>

<a name="toc_header_anchor_1" id="toc_header_anchor_1" class="topic-toc-item"></a><h2>Efeitos de dimmer e teoria de efeitos</h2>

<p>Vamos come??ar com alguns dos efeitos mais b??sicos. Selecione os fixtures de 1 a 10.&nbsp;</p>

<p>Selecione <span class="softkey">Dimmer</span> na Barra de Tipo de Preset e pressione a tecla <span class="hardkey">Effect</span>.&nbsp;</p>

<p>Isso abre a vista de Efeitos de Dimmer. Aqui voc?? tem uma sele????o de poss??veis efeitos para o atributo de dimmer. O lado esquerdo da tela mostra os poss??veis efeitos e o lado direito as diferentes ferramentas. como: "Sele????o Aleat??ria" e todos os tipos de "Alinhar".&nbsp;</p>

<p>Toque no efeito chamado <span class="softkey">Soft Dimmer</span> e olhe a vista de Fixture. Isso nos deu um efeito de curva sinuosa em movimento em nossos dez fixtures. Isso vai de 0% a 100%.&nbsp;</p>

<p>Os efeitos s??o a transi????o de um valor para outro. Ele sempre se move entre dois valores - e apenas dois. N??s podemos controlar a forma como ele deve ir de um valor para o outro, podemos controlar a velocidade, quando todos eles devem fazer algo ao mesmo tempo ou se eles devem se espalhar.</p>

<p>Vamos examinar algumas dessas configura????es. Vamos come??ar com os dois valores. Na barra de t??tulo de efeito azul, voc?? ir?? encontrar dois bot??es chamados <span class="softkey">Valor Baixo</span> e <span class="softkey">Valor Alto</span>. Estes s??o usados para acessar e alterar esses valores.</p>

<p><img alt="" src="/Media/Image/Dot2_GettingStarted_Effect_01_1-0.png"></p>

<p>Pressione onde se diz <span class="softkey">Valor Baixo</span>. Isto lhe d?? a apar??ncia padr??o para o valor de dimmer. Toque no bot??o chamado <span class="softkey">25%</span>. Observe como isso muda o valor mais baixo na vista de Fixture. Observe que a barra de t??tulo de Dimmer tamb??m ?? azul e h?? dois bot??es extras nesta vista:</p>

<p><img alt="" src="/Media/Image/Dot2_GettingStarted_Effect_02_1-0.png"></p>

<p>O bot??o mais ?? esquerda ?? uma pequena curva sinuosa. Isso n??o muda poies n??s mudamos o tipo de efeito. O bot??o <span class="softkey">Valor Normal</span> ir?? lev??-lo de volta para controlar o valor normal. Vamos examinar o que isto significa mais tarde.&nbsp;</p>

<p>Toque onde diz <span class="softkey">Valor Alto</span> e, em seguida, altere o valor para <span class="softkey">75%</span>. Agora que n??s limitamos o efeito para ser executado apenas de 25% para 75%. Esses s??o os valores Alto e Baixo. Agora toque no ??cone da curva sinuosa. Isso nos leva de volta a vista de efeito.&nbsp;</p>

<p>N??s tamb??m poder??amos ter configurado os Valores Baixos e Altos usando encoder esquerdo.&nbsp;</p>

<p>Gire o encoder n??mero 2. Isto altera a velocidade do efeito.</p>

<p>O terceiro encoder controla algo chamado Fase. Isto ?? o nome que usamos para a divulga????o dos fixtures ao longo do tempo do efeito de loop. Tente pressionar o encoder e coloque o valor em 0. Agora, todos os dez fixtures est??o fazendo a mesma sa??da. Em outras palavras, eles est??o ao mesmo tempo na fase de loop do efeito. Mesmo se voc?? colocar o encoder para cima, nada realmente parece acontecer. Isso ocorre pois todos os fixtures ainda est??o no mesmo ponto do loop, estamos apenas movendo onde eles est??o no loop. Se n??s quisermos refazer o efeito para ser o que ele era antes, ent??o precisamos espalhar o fixture pelo&nbsp;loop. Este loop tamb??m ?? frequentemente descrito como um c??rculo. ?? por isso que a fase ?? um grau. Existem 360 graus em um c??rculo, ent??o se quisermos espalhar todos os fixtures de forma uniforme atrav??s do loop, eles precisam ter uma fase de 0 a 360 graus. Por causa da matem??tica (um pouco complexo demais para come??ar a explicar aqui) isso precisa ser 0 para -360 para parecer que se move da esquerda para direita. Pressione o encoder e selecione o bot??o chamado&nbsp;<span class="softkey">0..-360</span>. E estamos de volta.</p>

<p>Antes de seguirmos, toque em <span class="softkey">Hard Dimmer</span>, por favor. Isso nos d?? um efeito de dimmer estilo chaser. O encoder da direita tem controle sobre algo chamado <strong>Largura </strong>e <strong>Suavidade</strong>. Tente lig??-lo. Uma pequena largura d??-lhe menos fixtures ligados ao mesmo tempo. Quanto maior o n??mero, mais fixtures estar??o ligados. Com uma largura de algo como 20%, tente pressionar e segurar a tecla&nbsp;<span class="hardkey"><img alt="ma" src="/Media/Mlg/ma_1.png"></span>&nbsp;enquanto liga o encoder. Isso faz com que os valores fa??am fade in e out ou snap. Dependendo do n??mero de pordentagem. Tente dar suavidade de 100% e largura de 50%. Reconhece o efeito?&nbsp;</p>

<p>Experimente os dois efeitos ramp e use largura.</p>

<p>Ok, vamos tentar usar isso. Escolha o efeito <span class="softkey">Hard Dimmer</span> e coloque a largura em 50%. Agora pressione <span class="softkey">Sele????o Aleat??ria</span>. Pressione <span class="hardkey">Store</span> e, em seguida, uma das teclas associadas executor n??mero 1 na p??gina 1. Limpe seu programador e tente executar o cue. Se voc?? tiver definido um tempo de cue padr??o, ent??o o efeito usa isso para fade no efeito.&nbsp;</p>

<p>Vamos fazer um cue n??mero dois em que o efeito faz o fade a uma parada. Selecione os 10&nbsp;fixtures novamente e pressione a tecla <span class="hardkey">Effect</span>. Agora deve ser l??gico voc?? pressionar <span class="softkey">Off</span> na vista Effect, mas isso tira o efeito do nosso programador e agora ele est?? no cue. A lista de cue ?? uma lista de cue de rastreamento, por isso precisamos de dizer aos fixtures para interromper o efeito - n??s precisamos programar um stop. Na MA, isso ?? chamado de "Stomp". Ent??o pressione onde se diz Stomp. Isso para o efeito. Vamos armazenar isso como um cue 2 com um tempo de fade de 5 segundos - voc?? sabe como fazer isso.</p>

<a name="toc_header_anchor_2" id="toc_header_anchor_2" class="topic-toc-item"></a><h2>Efeitos de Cor</h2>

<p>Vamos tentar fazer alguns efeitos de cor.&nbsp;</p>

<p>Selecione os X4's e toque em <span class="softkey">Color</span> na Barra de Tipo de Preset, em seguida, toque no ??cone sinuoso na barra de t??tulo.&nbsp;</p>

<p>Toque em <span class="softkey">2 Color Hard</span>. Isso se parece muito com o chaser que fizemos no cap??tulo anterior!&nbsp;</p>

<p>Agora, os valores Baixo e Alto controlam as duas cores que o seu efeito altera entre. Tente mud??-los. Tamb??m use mais com largura e suavidade.</p>

<p>Vamos fazer um efeito que se mova do exterior para o meio. Limpe seu programador. Selecione todo o X4 usando o grupo e execute o efeito <span class="softkey">2 Color Hard</span>. Use os valores Baixos e Altos para selecionar algumas cores com as quais voc?? est?? feliz. Pressione o encoder de Fase e defina a fase a 0 para todas os fixtures. Agora toque no bot??o <span class="softkey">Align &lt;&gt;</span> e gire o encoder Fase em sentido anti-hor??rio at?? que os efeitos se movam de fora para dentro. Se voc?? gir??-lo o suficiente, ent??o ele come??a a se mover para o outro lado. Configure o valor em algo que voc?? esteja feliz com. Armazene o resultado com o cue 1 no executor n??mero 2 na p??gina 1.</p>

<p>H?? um efeito especial de cor. O efeito RGB Rainbow. Selecione todos os X4's e experimente-o. Armazena isso como cue 2 com um tempo de fade, e tente a transi????o do cue 1 ao 2.</p>

<p>O efeito "Colorwheel 2 Cor" ?? utilizado para efeitos de cor sobre rodas de cores. ?? um efeito entre duas cores em uma roda de cores.</p>

<p>N??o h?? realmente muito mais a dizer sobre os efeitos de cor. Vamos fazer algum movimento.</p>

<a name="toc_header_anchor_3" id="toc_header_anchor_3" class="topic-toc-item"></a><h2>Efeitos de Posi????o</h2>

<p>Lembra que prometi que iria explicar sobre o "Valor Normal"? Muitos efeitos de posi????o s??o apenas divertidos se os fixtures j?? tem uma posi????o inicial. Isso significa que podemos ter um cue onde os fixtures apontam para um vocalista em uma banda. No pr??ximo cue o fixture come??a a fazer um efeito circular em torno do vocalista. No pr??ximo cue os fixtures se movem para o guitarrista enquanto ainda faz o c??rculo. No pr??ximo cue os fixtures se movem para o vocalista enquanto o efeito para. Este cen??rio ?? a raz??o pela qual h?? tamb??m o Valor Normal e a raz??o pela qual os efeitos (valores) s??o colocados no topo dos &nbsp;valores normais.</p>

<p>Vamos tentar fazer isso. Primeiro fa??a dois presets com os Alpha Profiles. Eles devem ser chamados de "Singer" (Vocalista) e "Guitar" (Guitarrista). Ligue os fixtures e coloque-os sobre o vocalista. Armazene isso como cue 1 no executor 3 (P??gina 1).</p>

<p>Agora precisamos de um efeito em c??culo. Toque em <span class="softkey">Position</span> na Barra de Tipo de Preset e, em seguida, no ??cone sinuoso na barra de t??tulo. Aqui n??s com certeza encontraremos um efeito de c??rculo. Vamos torn??-lo um pouco mais aleat??rio. Use o macro <span class="softkey">Odd</span> para selecionar metade dos fixtures e voltar para a vista de Efeitos e toque no bot??o <span class="softkey">Dire????o &lt;&gt;</span>. Termine isso pressionando a tecla <span class="hardkey">Set</span> (selecione novamente todos os fixtures). Agora metade dos fixtures viram para o lado oposto. Vamos fazer em um tamanho um pouco menor. O encoder mais ?? esquerda controla o tamanho. Girando-o, voc?? faz o c??rculo menor ou maior. Ele mostra dois n??meros diferentes em porcentagem. Isso ocorre porque h?? dois tamanhos diferentes. Um para tilt e um para pan. Girando o encoder, voc?? mudar?? esses dois valores juntos. Fa??a o tamanho que voc?? quiser - Eu gosto de 3,6% .. 10%. Este ?? o nosso efeito de c??rculo. Armazene isso como cue 2 com um tempo de fade de 3 segundos.</p>

<p>O pr??ximo cue que precisamos mover ?? o fixtures para o guitarrista. Selecione o fixture e selecione o preset de posi????o "Guitar" (Guitarrista). Armazene isso como cue 3.</p>

<p>Com os fixtures selecionados, abra os efeitos de posi????o novamente e toque em <span class="softkey">Stomp</span> e, em seguida, a posi????o de preset <span class="softkey">Singer</span> (Vocalista). Guarde isso como cue 4.</p>

<p>Eu acho que voc?? deve adicionar um tempo de fade de 3 segundos para todos os cues. Limpe seu programador e teste isso.</p>

<p>Voc?? pode ver o movimento de c??rculo na vista de Fixture de S??mbolo e voc?? pode ver os presets de posi????o na vista de Fixture de Folha.</p>

<p>Efeitos de posi????o utilizam valores Size e Center, em vez de Baixo e Alto. Isto ?? porque n??s temos uma posi????o de base e fazemos um efeito de tamanho em torno da base. Voc?? pode usar o valor Center para compensar o efeito da posi????o de base.</p>

<p>&nbsp;</p>

<p>Esta foi a introdu????o b??sica aos efeitos. Antes de seguir em frente, passe por outros efeitos de posi????o. E teste mais alguns efeitos.</p>

<p>&nbsp;</p>

<p>Voc?? pode fazer efeitos sobre a maioria dos tipos de preset. Isto ?? apenas um demo de alguns dos mais comuns.</p>

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

	
