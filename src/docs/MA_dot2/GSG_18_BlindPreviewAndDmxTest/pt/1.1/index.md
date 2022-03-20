---
originalUrl: 'https://help2.malighting.com/Page/MA_dot2/GSG_18_BlindPreviewAndDmxTest/pt/1.1'
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
		<input id="CurrentGuid" name="CurrentGuid" type="hidden" value="2f250b7a-bf34-457e-bf9f-0aea2b2d9790">
	</span>
</form></div>&nbsp;	</span>
	<span class="pull-right" style="white-space: nowrap;">
			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/GSG_17_MoreAboutCuesAndPlayback/pt/1.1'; " title="Go to previous page '17 - Mais sobre cues e playback'">
				<i class="icon-arrow-left"></i> previous
			</button>

			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/GSG_19_Macro/pt/1.1';" title="Go to next page '19 - Diversão com Macros'">
				next <i class="icon-arrow-right"></i> 
			</button>
	</span>
</div>
<div class="clear-fix" style="margin-bottom: 10px"></div>
</div>

					<div class="infobox"><b>Hint:</b><br><b>New help version</b><br>The help version you selected belongs to an older software version. <a href="/Topic/SetCurrentVersionNumber/29/2f250b7a-bf34-457e-bf9f-0aea2b2d9790">You may want to view the latest help version.</a></div>

			<div class="pull-right">
					<button class="btn btn-mini" style="margin-right: 10px; height: 30px;" onclick="location.href = '/Media/TopicPdf/12688/3'; " title="Open/Save this topic as PDF document for viewing or printing">
						<img src="/Content/images/icons/filetype_pdf.png" style="height: 24px;"> Open topic as PDF
					</button>
				<span class="badge badge-info">Version 1.1</span>
			</div>
		<h1>Guia de Introdução - Dando uma olhada em Blind, Preview e tester de DMX</h1>

			<div class="topic-table-of-contents">
				<h2>Table of contents of this topic</h2>
				<div class="topic-toc-toggler topic-toc-toggler-hide"><a href="#" onclick="$('.topic-toc-ul').toggle(); $('.topic-toc-toggler-hide').hide(); $('.topic-toc-toggler-show').show(); return false;">hide</a></div>
				<div class="topic-toc-toggler topic-toc-toggler-show" style="display: none;"><a href="#" onclick="$('.topic-toc-ul').toggle(); $('.topic-toc-toggler-hide').show(); $('.topic-toc-toggler-show').hide(); return false;">show</a></div>
				<ul class="topic-toc-ul">
						<li>
							<a href="#toc_header_anchor_1">Blind</a>
						</li>
						<li>
							<a href="#toc_header_anchor_2">Vista de DMX</a>
						</li>
						<li>
							<a href="#toc_header_anchor_3">De volta a&nbsp;Blind</a>
						</li>
						<li>
							<a href="#toc_header_anchor_4">Preview</a>
						</li>
						<li>
							<a href="#toc_header_anchor_5">Tester&nbsp;de DMX</a>
						</li>
						<li>
							<a href="#toc_header_anchor_6">Fixture parking</a>
						</li>
				</ul>
			</div>

		<p>Neste capítulo vamos testra duas funções do console chamadas Blind e Preview.&nbsp;</p>

<p>Às vezes, você quer ver o conteúdo de um cue ou armazenar algo em um cue sem mudar a atual saída do console.&nbsp;</p>

<p>Há duas diferentes funções que podem nos ajudar com isso.</p>

<a name="toc_header_anchor_1" id="toc_header_anchor_1" class="topic-toc-item"></a><h2>Blind</h2>

<p>A função Blind efetivamente "esconde' o programador da saída. Você ativa a função blind pressionando a tecla <span class="hardkey">Blind</span>.</p>

<p>Se você tiver conteúdo em seu programador quando você insere blind, então isso não será mais uma parte da saída. Da mesma forma, se você tirar blind com algo em seu programador, então ele será enviado para a saída.&nbsp;</p>

<a name="toc_header_anchor_2" id="toc_header_anchor_2" class="topic-toc-item"></a><h2>Vista de DMX</h2>

<p>Antes de testarmos isso, há uma vista que nós não conversamos muito bem sobre que eu gostaria de apresentar corretamente a você. É chamada de <strong>vista de DMX</strong>. E se parece com essa:</p>

<p><img alt="" src="/Media/Image/Dot2_GettingStarted_BlindPreviewAndDmxTest_01_1-0.png"></p>

<p>Esta vista lhe mostra a saída do console. Ela mostra o valor atual de DMX&nbsp;de cada endereço de&nbsp;DMX. Se um endereço tiver o valor de 0, ele não é exibido. Se há algo patcheado para um canal de&nbsp;DMX, então ele terá uma moldura cinza. Se há um fixture que usa mais de um canal de&nbsp;DMX, então a moldura irá agrupar os canais de&nbsp;DMX que utiliza.</p>

<p>Eu não darei muitos detalhes sobre essa vista, mas eu vou lhe darei os destaques.</p>

<p>O plano de fundo de cada endereço torna-se mais verde conforme o valor fica maior.</p>

<p>No canto direito da barra de título, há um botão <img alt="" src="/Media/Image/Dot2_ViewsandWindows_ControlElements_TitleBar06_1-0.PNG" style="height:auto">&nbsp;que expande cada célula então&nbsp;ele não só mostra o valor mas também qual canal está.</p>

<p>A vista desliza para o fixture selecionado. &nbsp;Fixtures selecionados são mostrados com uma moldura amarela.&nbsp;</p>

<p>Canais parkeados têm um plano de fundo azul. E canais de DMX estando sob o controle do tester de DMX tem um fundo vermelho. Nós falaremos sobre parkear e testar mais tarde neste capítulo.&nbsp;</p>

<p>Isso será mais ou menos assim:</p>

<p><img alt="" src="/Media/Image/Dot2_GettingStarted_BlindPreviewAndDmxTest_02_1-0.png">&nbsp;</p>

<p>Se você pressionar e segurar a tecla&nbsp;<span class="hardkey"><img alt="ma" src="/Media/Mlg/ma.png"></span>, será exibido o endereço de DMX em vez do valor.</p>

<p>&nbsp;</p>

<p>Ok, já falamos o suficiente sobre a vista de DMX.&nbsp;</p>

<a name="toc_header_anchor_3" id="toc_header_anchor_3" class="topic-toc-item"></a><h2>De volta a&nbsp;Blind</h2>

<p>Tente ter as seguintes vistas visíveis: Vista de Fixtures no modo de símbolo, Vista de Fixture no modo de folha e Vista de DMX.</p>

<p>Execute o cue 1 na lista de cue principal. Isto irá ligar os fixture de 5 e 7 em 40%, isso é o mesmo que um valor de DMX de 102.&nbsp;</p>

<p>Em seguida, selecione o&nbsp;fixture 1 e lhe dê o valor de 50%. Agora, isso deve estar visível em todas as telas. Em ambas as vistas, fixtures e DMX (um valor de 127). Em seguida, toggle (alterne) o modo blind. Observe que você ainda pode ver os valores em seu programador na vista de fixture no modo de folha, mas o modo de símbolo da vista de fixture irá exibir o fixture em 0%. Assim como a vista de DMX - aqui o valor também desaparece.&nbsp;</p>

<p>Então, os valores do programador só podem ser vistos na vista de fixture no modo folha. As outras vistas lhe mostram a saída real.&nbsp;Além disso, observe a barra de título das duas folhas de fixture. O modo de símbolos 1 diz "(apenas Playback)" e o modo de folha diz "(Playback + Programador Blind)".</p>

<p>Note que se você toggle (alternar) blind novamente, seus valores do programador estarão ativos novamente. Isso pode ser usado para pré-carregar um olhar em seu programador e sair de Blind para colocá-lo ao vivo no palco.</p>

<p>Agora você pode estar pensando "Isso é bom, mas ele só se encaixa no meio do show, pode ser que não fique muito bom". E você está certo. Deixe-me apresentar-lhe ao <strong>Master de Tempo do Programador</strong>. Este é um dos&nbsp;masters que nós podemos ver na <strong>vista de Velocidade Magic</strong>. Isso pode ser utilizado para alterar o tempo do programador.Pressione&nbsp;<span class="hardkey">Store</span>&nbsp;<span class="hardkey">Time</span>&nbsp;<span class="softkey">Prog&nbsp;Time</span>&nbsp;​e em seguida, uma das teclas associadas ao executor número 4.</p>

<p>Agora tente mover o novo fader para cima até que diga &nbsp;2.5 segundos e toggle (alterne) a tecla <span class="hardkey">Blind</span> novamente. Observe como os valores de fade desaparecem in e out. As duas teclas associadas ao fader permitem que você toggle (alterne) o Tempo do Programador entre ligado e desligado sem ter que mover o fader. Isso é muito bom para shows ao vivo, onde você deseja configurar o próximo olhar.</p>

<p>O lado negativo da função Blind é que você não pode ter qualquer coisa em seu programador que você gostaria de manter, enquanto você está trabalhando em outra coisa no background. É aí que Preview nos ajuda.</p>

<a name="toc_header_anchor_4" id="toc_header_anchor_4" class="topic-toc-item"></a><h2>Preview</h2>

<p>A outra opção para conseguir olhar para algo sem realmente ter a saída é a função Preview.&nbsp;</p>

<p>Com isso, podemos olhar e editar cues e podemos testar como os estão tempos de fade de um cue para o outro. Tudo sem realmente emitir qualquer tipo de saída.</p>

<p>Talvez isso seja melhor explicado por um cenário. Em nosso teatro, o designer está considerando a possibilidade de adicionar o fixture 1 em 50% no primeiro cue.&nbsp;</p>

<p>Então coloque tudo em "Off" e execute o cue 1, agora adicione o fixture 1 em 50% em seu programador. Então agora ele está sentado conversando com o cenógrafo. Mas você realmente deseja adicionar os Vivids&nbsp;com um brilho laranja no cue 3. Mas você não pode ir em blind, pois isso tiraria o fixture 1. Então o que podemos fazer?&nbsp;</p>

<p>Tente pressionar a tecla <span class="hardkey">Prvw</span> e, em seguida, a grande tecla&nbsp;<span class="hardkey">&nbsp;&nbsp;Go+ &nbsp;</span>&nbsp;em baixo do executor principal. Agora suas vistas de fixture obtém uma manchete em vermelho! Isso é para lhe mostrar que eles estão exibindo atualmente algo que não é a saída real.</p>

<p>Observe que o fixture número 1 ainda está ativo na saída. A vista de DMX ainda está mostrando a saída real do console. Mas o fixture 1 não está em nosso programador. Não está em nenhuma das vistas de Fixture.&nbsp;</p>

<p>No momento estamos olhando para o cue número 1, tanto na vida real e como também em Preview. Mas nós queremos editar o cue 3.&nbsp;</p>

<p>Tente pressionar o pequeno <span class="hardkey">Go+</span> na seção de comando (é importante <strong>não pressionar</strong> o grande Go+ abaixo dos executores principais) e, em seguida, o <span class="hardkey">Prvw</span>. Agora você pode ver o fade de cue 1 ao 2 e o seguinte no cue 3. Agora podemos adicionar os Vivids assim como faríamos normalmente.</p>

<p>Os fixtures&nbsp;de 21 ao 24 necessitam estar em 15% em uma cor alaranjada. Tudo isto está atualmente em seu <strong>programador de preview</strong>. Por favor, note que isso está visível em ambas as vistas de Fixtures, mas nenhum valor foi alterado na folha de DMX.</p>

<p>Agora pressione &nbsp;<span class="hardkey">Update</span>&nbsp;<span class="hardkey">Please</span>&nbsp;toque em <span class="softkey">OK</span> para atualizar o cue&nbsp;número 3. Limpe seu programador e execute o cue seguinte no preview.</p>

<p>Este é o cue 4. Aqui temos de desligar o Vivids e adicionar este valor zero para a pista. Por favor, faça isso.</p>

<p>Agora vamos dizer que o diretor e o cenógrafo terminaram de conversar e decidiram não adicionar o fixture número 1. Agora nós podemos sair do modo de preview. Pressione <span class="hardkey">Esc</span>. Se você tiver algo em sua linha de comando, talvez seja necessário pressioná-la duas vezes.</p>

<p>Agora, de volta ao mundo real, podemos executar nossos cues para verificar o que temos programado no modo preview. Limpe o programador e execute os cues.&nbsp;</p>

<p>A função Preview é uma boa ferramenta para o trabalhar no background e verificar os tempos de fade. Se você deseja o preview de outro executo, então você precisa pressionar <span class="hardkey">Preview</span> e, em seguida, uma tecla associada a esse executor.</p>

<a name="toc_header_anchor_5" id="toc_header_anchor_5" class="topic-toc-item"></a><h2>Tester&nbsp;de DMX</h2>

<p>No início deste capítulo, mencionei que canais de DMX que estavam sob a influência do testes de DMX tem um fundo vermelho na vista de DMX. Vamos dar uma olhada nos&nbsp;testers de DMX.&nbsp;</p>

<p>Às vezes é bom poder testar um canal de DMX sem ter que patchear nada. Ou talvez você tenha algumas luzes azuis que devem sempre estar ligadas.&nbsp;</p>

<p>Com a vista de DMX aberta, tente pressionar o seguinte: <span class="hardkey">DMX</span>&nbsp;<span class="hardkey">1</span>&nbsp;<span class="hardkey">3</span>&nbsp;<span class="hardkey">At</span>&nbsp;<span class="hardkey">5</span>&nbsp;<span class="hardkey">0</span>&nbsp;<span class="hardkey">Please</span>.&nbsp;Observe que o canal de DMX recebe o fundo vermelho e um valor de 127 (DMX é uma gama de 0 a 255 - 50% é igual a um valor de 127).</p>

<p>Você pode usar isso em qualquer canal de DMX. Patcheado ou despatcheado - não importa. Você não pode ver em quaisquer outras vistas que você tem este canal de DMX sob controle&nbsp;- exceto o ícone&nbsp;<img alt="" src="/Media/Image/Dot2_ViewsandWindows_StatusMessages18_1-0.png" style="height:auto">&nbsp;ao lado da entrada da linda de comando na tela da esquerda. O tester de DMX tem a mais alta prioridade. Isso significa que você não pode controlar a saída do canal de DMX do programador, executor ou por&nbsp;parking.&nbsp;</p>

<p>Se você quiser liberar um canal do tester de DMX, então você pode usar off. &nbsp;<span class="hardkey">Off</span>&nbsp;<span class="hardkey">DMX</span>&nbsp;<span class="hardkey">1</span>&nbsp;<span class="hardkey">3</span>&nbsp;<span class="hardkey">Please</span>.&nbsp;</p>

<p>Se você deseja liberar todos os canais sob a influência de o tester de DMX, você tem duas opções: &nbsp;<span class="hardkey">Off</span>&nbsp;<span class="hardkey">DMXThru</span>&nbsp;<span class="hardkey">Please</span>&nbsp;ou&nbsp;pressione&nbsp;<span class="hardkey">Tools</span>&nbsp;e então&nbsp;<span class="softkey">Desligar Tester&nbsp;de&nbsp;DMX</span>.</p>

<p>Tenha cuidado com o tester de DMX. Use-o apenas quando for apropriado. Você pode acabar gastando muito tempo tentando descobrir por que um fixture não está fazendo o que era para ele fazer, apenas para perceber que é o tester de DMX que está mantendo o controle.</p>

<a name="toc_header_anchor_6" id="toc_header_anchor_6" class="topic-toc-item"></a><h2>Fixture parking</h2>

<p>Podemos optar por bloquear um fixture para que não mudemos o seu valor por acidente. Isso é chamado de parking. Tente colocar seu fixture 1 em 50%. Agora pressione&nbsp;<span class="hardkey"><img alt="ma" src="/Media/Mlg/ma_1.png"></span>+<span class="hardkey">Pause</span>&nbsp;(isso lhe dará o comando Park)&nbsp;<span class="hardkey">Fixture</span>&nbsp;<span class="hardkey">1</span>&nbsp;<span class="hardkey">Please</span>.&nbsp;​Agora limpe o programador. Você não pode vê-lo em sua vista de fixtures, mas o fixture ainda está em 50%. Dê uma olhada na vista de DMX. Aqui você pode ver que o fixture está em um valor de DMX de 127. Estes valores não irão mudar, não importa o que o programador ou os cues dizem ao fixture. É também ignorado pelo grand master e pela tecla blackout.</p>

<p>Há também um pequeno ícone de parking&nbsp;<img alt="" src="/Media/Image/Dot2_ViewsandWindows_StatusMessages10_1-0.png" style="height:auto">&nbsp;ao lado de sua entrada da linha de comando.</p>

<p>Para desparkear novamente o fixture, você pode pressionar&nbsp;<span class="hardkey"><img alt="ma" src="/Media/Mlg/ma_1.png"></span>+<span class="hardkey">Go+</span>&nbsp;(o pequeno - isso lhe dará o comando Unpark)&nbsp;<span class="hardkey">Fixture</span>&nbsp;<span class="hardkey">1</span>&nbsp;<span class="hardkey">Please</span>. Agora o fixture está de volta à operação normal.&nbsp;</p>

<p>Se lembra de quando pressionamos a tecla <span class="hardkey">Tools</span>? Um dos botões nesse menu diz&nbsp;<span class="softkey">Desparkear todos os canais de DMX</span>. Isto irá desparkear todos os fixtures parkeados.&nbsp;</p>

<p>Se fixtures não estão respondendo aos seus comandos, então você deve checar se há um ícone de parking&nbsp;ou&nbsp;tester de DMX&nbsp;ao lado da linha de comando.&nbsp;</p>

<p>&nbsp;</p>

<p>&nbsp;</p>

<p>No próximo capítulo, daremos uma olhada em macros.</p>


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
		<input id="CurrentGuid" name="CurrentGuid" type="hidden" value="2f250b7a-bf34-457e-bf9f-0aea2b2d9790">
	</span>
</form></div>&nbsp;	</span>
	<span class="pull-right" style="white-space: nowrap;">
			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/GSG_17_MoreAboutCuesAndPlayback/pt/1.1'; " title="Go to previous page '17 - Mais sobre cues e playback'">
				<i class="icon-arrow-left"></i> previous
			</button>

			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/GSG_19_Macro/pt/1.1';" title="Go to next page '19 - Diversão com Macros'">
				next <i class="icon-arrow-right"></i> 
			</button>
	</span>
</div>
	<div class="clear-fix"></div>
	<div class="pull-right">
	
			<button class="btn btn-mini" onclick="location.href='/Media/TopicPdf/12688/3';" title="Open/Save this topic as PDF document for viewing or printing">
				<img src="/Content/images/icons/filetype_pdf.png"> Open topic as PDF
			</button>
	</div>
<div class="clear-fix" style="margin-bottom: 10px"></div>
</div>

	
