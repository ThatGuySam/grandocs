
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
		<input id="CurrentGuid" name="CurrentGuid" type="hidden" value="656501ea-6e36-417d-9774-b6ccc8e10e1a">
	</span>
</form></div>&nbsp;	</span>
	<span class="pull-right" style="white-space: nowrap;">
			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/GSG_16_MakingMoreGroupsAndPresets/pt/1.1'; " title="Go to previous page '16 - Fazendo mais Grupos e Presets'">
				<i class="icon-arrow-left"></i> previous
			</button>

			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/GSG_18_BlindPreviewAndDmxTest/pt/1.1';" title="Go to next page '18 - Dando uma olhada em Blind, Preview e tester de DMX'">
				next <i class="icon-arrow-right"></i> 
			</button>
	</span>
</div>
<div class="clear-fix" style="margin-bottom: 10px"></div>
</div>

					<div class="infobox"><b>Hint:</b><br><b>New help version</b><br>The help version you selected belongs to an older software version. <a href="/Topic/SetCurrentVersionNumber/29/656501ea-6e36-417d-9774-b6ccc8e10e1a">You may want to view the latest help version.</a></div>

			<div class="pull-right">
					<button class="btn btn-mini" style="margin-right: 10px; height: 30px;" onclick="location.href = '/Media/TopicPdf/13145/3'; " title="Open/Save this topic as PDF document for viewing or printing">
						<img src="/Content/images/icons/filetype_pdf.png" style="height: 24px;"> Open topic as PDF
					</button>
				<span class="badge badge-info">Version 1.1</span>
			</div>
		<h1>Guia de Introdução - Mais sobre cues e playback</h1>

			<div class="topic-table-of-contents">
				<h2>Table of contents of this topic</h2>
				<div class="topic-toc-toggler topic-toc-toggler-hide"><a href="#" onclick="$('.topic-toc-ul').toggle(); $('.topic-toc-toggler-hide').hide(); $('.topic-toc-toggler-show').show(); return false;">hide</a></div>
				<div class="topic-toc-toggler topic-toc-toggler-show" style="display: none;"><a href="#" onclick="$('.topic-toc-ul').toggle(); $('.topic-toc-toggler-hide').show(); $('.topic-toc-toggler-show').hide(); return false;">show</a></div>
				<ul class="topic-toc-ul">
						<li>
							<a href="#toc_header_anchor_1">Vamos atualizar nossos&nbsp;cues</a>
						</li>
						<li>
							<a href="#toc_header_anchor_2">O caminho alternativo</a>
						</li>
						<li>
							<a href="#toc_header_anchor_3">Mais alterações e pequenas correções</a>
						</li>
						<li>
							<a href="#toc_header_anchor_4">Master de Grupo</a>
						</li>
						<li>
							<a href="#toc_header_anchor_5">Master&nbsp;Rate (Ritmo Master) e Velocidade Magic</a>
						</li>
				</ul>
			</div>

		<p>Iremos&nbsp;adicionar os novos fixtures&nbsp;ao nosso show, veremos alguns tempos de cue&nbsp;e examinaremos tracking.&nbsp;Eu suponho que você tenha feito presets com os mesmos nomes que eu fiz.</p>

<a name="toc_header_anchor_1" id="toc_header_anchor_1" class="topic-toc-item"></a><h2>Vamos atualizar nossos&nbsp;cues</h2>

<p>Vá ao cue número cinco na lista de cue&nbsp;principal.</p>

<p>Selecione todos os&nbsp;X4s&nbsp;e coloque-os nos&nbsp;presets <span class="softkey">All Stage Wash</span>&nbsp;e&nbsp;<span class="softkey">Green</span>&nbsp;(você sempre deve ter um verde), <span class="softkey">Wide Zoom</span>&nbsp;e finalmente coloque-os em 60%.</p>

<p>Pressione a tecla&nbsp;<span class="hardkey">Update</span>&nbsp;seguida de&nbsp;<span class="hardkey">Please</span>. Selecione "Normal" e toque&nbsp;<span class="softkey">Ok&nbsp;</span>&nbsp;no pop-up. Isso irá adicionar os valores ao&nbsp;cue&nbsp;ativo - número 5.</p>

<p>Nós precisamos&nbsp;que o grupo&nbsp;<span class="softkey">All Vivid&nbsp;</span>esteja em&nbsp;20% no mesmo&nbsp;preset&nbsp;green. Isso pode ser atualizado para o&nbsp;cue&nbsp;5.</p>

<p>Nós também queremos adicionar alguns novos​ profiles. Fixtures 44 ao 49 precisam ir para 40% e o seguinte preset de posição: <span class="softkey">All Stage Profile</span> por favor, adicione um&nbsp;gobo&nbsp;e uma cor laranja ou quente. Então nós colocamos no​ <span class="softkey">Wide Zoom</span>&nbsp;e no preset&nbsp;<span class="softkey">Soft Gobo</span>. E, finalmente, adicionamos o preset de shaper​ <span class="softkey">Forrest</span>. Tudo isso também é atualizado no cue&nbsp;5.</p>

<p>Agora execute o cue 6. Observe que este não é&nbsp;mais um blackout. Os fixtures&nbsp;que acabamos de adicionar ainda estão ligados. Eu sei que o console automaticamente executa no&nbsp;cue 7 (o cue protegido), mas eles estão ligados no&nbsp;cue 6. E eles não estão no cue&nbsp;7. Isso porque o console é um console de tracking. Se pedimos para o fixture fazer alguma coisa, ele vai continuar fazendo essa coisa até que digamos a ele outra coisa.&nbsp;Cue 7 foi marcado como protegido, então todo o&nbsp;tracking&nbsp;que vem ao&nbsp;cue 6 não foi ao&nbsp;cue 7.</p>

<p>Então, temos que fixar o cue 6 e 7. Selecione todos os fixtures que nós ligamos no cue&nbsp;5 e ativamente demos a eles 0%. Agora isso precisa ser armazenado no cue 6 -&nbsp;<span class="hardkey">Store</span>&nbsp;<span class="hardkey">Cue</span>&nbsp;<span class="hardkey">6</span>&nbsp;<span class="hardkey">Please</span>&nbsp;<span class="softkey">Merge</span>.</p>

<p>Agora nós precisamos que o cue&nbsp;7 pareça-se com o cue 5 novamente. Nós podemos fazer isso copiando-o novamente&nbsp;-&nbsp;<span class="hardkey">Copy</span>&nbsp;<span class="hardkey">Cue</span>&nbsp;<span class="hardkey">5</span>&nbsp;<span class="hardkey">At7</span>&nbsp;<span class="hardkey">Please</span>&nbsp;<span class="softkey">Merge</span>.</p>

<a name="toc_header_anchor_2" id="toc_header_anchor_2" class="topic-toc-item"></a><h2>O caminho alternativo</h2>

<p>Esta foi uma maneira de fazer isso. Há uma outra maneira para arquivar o mesmo objetivo.&nbsp;</p>

<p>Poderíamos ter desligado a proteção no cue 7. ter feito todas as atualizações no cue 5 (trackeado nos cue 6 e 7), ter colocados os fixtures em 0% e armazenado os valores no cue 6, mas em vez de fazer o nosso armazenamento normal e selecionar o Modo de Armazenamento "Normal", podemos usar o Modo de Armazenamento "Cue Only".</p>

<p><span class="image_gray_border"><img alt="" src="/Media/Image/Janela_Escolher_Metodo_de_Store_2.png"></span></p>

<p>Isso certificaria de que nós não trackeamos os novos valores de 0% no cue 7.&nbsp;</p>

<p>Este é um exemplo de algumas das muitas maneiras que você pode trabalhar na dot2. Muitas vezes não há apenas uma maneira de fazer algo.</p>

<a name="toc_header_anchor_3" id="toc_header_anchor_3" class="topic-toc-item"></a><h2>Mais alterações e pequenas correções</h2>

<p>De qualquer maneira, isso deve ter fixado o final de nossa pequena lista de cue. Por favor tente isso.&nbsp;<span class="hardkey">Goto</span>&nbsp;<span class="hardkey">Cue</span><span class="hardkey">5</span>&nbsp;<span class="hardkey">Please</span>&nbsp; irá te levar de volta ao&nbsp;cue 5 com o tempo de fade de&nbsp;cue.</p>

<p>Ok, seguindo em frente, nós devemos mudar&nbsp;o cue número 4. Vá para o&nbsp;cue número 4. Neste cue, nós precisamos do preset de posição do fixture 41 <span class="softkey">Chair</span>&nbsp;e do 43 na posição <span class="softkey">Speaker</span>. Os dois em 80% e com uma cor azul claro.</p>

<p>Agora armazene isso como "Cue&nbsp;Only" no&nbsp;cue 4 e volte para o cue 3. Dê uma olhada em sua vista de fixture. Todos os fixtures&nbsp;que nós adicionamos estão em sua &nbsp;cor e posição padrão. Pressione&nbsp;<span class="hardkey">&nbsp;Go+&nbsp;</span>.</p>

<p>Note que os fixtures fazem o fade da cor e posição. Isso também acontece quando executamos o cue 5. Isso não é realmente tão bonito. Nós podemos consertar isso usando uma função chamada Move In Black (MIB). Ele irá automaticamente olhar para a frente (avançado) em nossa lista de cue e colocar os fixtures na próxima posição necessária - não apenas posição, mas todos os atributos, exceto dimmer.</p>

<p>Então, vamos ativar esse recurso. Pressione &nbsp;<span class="hardkey">Cue</span>&nbsp;e, em seguida, toque no ícone de ferramenta &nbsp;<img alt="" src="/Media/Image/Dot2_ViewsandWindows_ControlElements_TitleBar05_1-0.PNG" style="height:auto">. Isso abre as Configurações para nosso executor principal. Há um monte de configurações aqui. A que estamos interessados é a chamada <strong>MIB</strong>. Ela está desativada como padrão. Por favor, toque na caixa de entrada verde para habilitá-lo e fechar a janela de configurações (<span class="softkey">Esc</span>&nbsp;no canto superior esquerdo).</p>

<p>Agora vamos tentar a nossa lista de cue novamente. Pressione&nbsp;<span class="hardkey">Off</span>&nbsp;e, em seguida, em um dos botões abaixo dos dois grandes executores. Isso desativa o executor principal. Agora pressione o &nbsp;<span class="hardkey">&nbsp;Go+&nbsp;</span>&nbsp;e execute o cue 1 - isto se parece com o de sempre. Cue 2 é executado e automaticamente executa o cue 3. Com o&nbsp;cue 3, podemos ver que os fixtures 41 e 43 fazem o fade em&nbsp;posição e cor. Então agora eles estão prontos para o&nbsp;cue 4</p>

<p>Tempos de Cue</p>

<p>Agora execute o cue 4. Isso dará valores a todos os fixtures&nbsp;que nós programamos no cue 5 então eles estão prontos. Perceba que os fixtures 41 e 43 se ligaram. Fique de olho neles quando você pressionar&nbsp;<span class="hardkey">&nbsp;Go&nbsp;+&nbsp;</span>.​ Veja como eles estão mudando de cor e movimento, enquanto eles tem um fade out. Então MIB resolve o problema de fazer o preset dos fixtures, mas como nós o armazenamos como Cue Only eles se movimentarão de volta a posição e cor padrão que tínhamos no cue 5. Isso não é o que queremos. Nós realmente queremos um delay de cor e movimento até que o fade out esteja terminado .</p>

<p>Dê uma olhada na lista de cue. Desde que nós adicionamos um monte de novos fixtures, podemos agora usar a maioria das colunas de tempo. Localize a coluna de Delay&nbsp;de Posição e pressione e segure a célula onde interage com o cue 5. Isso deve exibir a calculadora, onde você pode definir o tempo de delay para todos os momentos de posição na transação do&nbsp;cue 4 para 5. Configure o delay&nbsp;para 5 segundos. Faça o mesmo na coluna de Delay de Cor. Podemos até mesmo ajustá-lo um pouco mais. Já que agora temos que esperar até o dimmer&nbsp;ter terminado o fade out, nós não precisamos então fazer uma mudança de posição e de cor em 5 segundos. A cor é apenas uma pequena parte interna invisível dos fixtures, então eles podem mudar em zero segundos. O movimento pan/tilt é mais visível e nós devemos dar a ele um pouco mais de tempo para fazer o movimento. Dê-lhe um segundo. Este deve ser seu resultado final:</p>

<p><img alt="" src="/Media/Image/Dot2_GettingStarted_MoreCuesAndPlayback_02_1-0.png"></p>

<p>Isso funciona porque nada mais se move ou muda de cor neste cue. Caso contrário, teríamos que fazer um cue entre 4 e 5.</p>

<a name="toc_header_anchor_4" id="toc_header_anchor_4" class="topic-toc-item"></a><h2>Master de Grupo</h2>

<p>Agora, se nós imaginarmos que faremos esse show e que o público irá amar, talvez eles queiram múltiplas chamadas de cortina. Nosso pequeno teatro imaginário tem uma cortina e o gerente de palco quer usar isso em vez de voltar em nosso BO cue. Então, temos que ser capazes de remover todas as luzes dianteiras. A melhor maneira de fazer isso é usando um master de grupo que pode limitar a saída do grupo FOH.</p>

<p>Limpe seu programador e ative o grupo <span class="softkey">All FOH</span> - que bom que já tínhamos ele :-) Com esta seleção em nosso programador, pressione&nbsp;<span class="hardkey">Store</span>&nbsp;<span class="hardkey">Group</span>&nbsp;e, em seguida uma das teclas associadas executor número 6. Agora, isso funciona como um inibidor de grupo. Isto significa que a saída dos fixtures FOH estão limitadas pelo master. Quando está em 100%, todos eles têm uma gama completa de saída. Se você colocar esse master em 50%, então este é o seu limite de saída. A saída é escalada. Isto significa que, se um fixture for armazenado em 50% no cue e você mover o master em 50%, então a saída vai para 50% de 50% - o que é 25%. Portanto, é muito importante que você lembre-se de colocar todos os masters de Grupo de volta a 100% para o seu show.</p>

<a name="toc_header_anchor_5" id="toc_header_anchor_5" class="topic-toc-item"></a><h2>Master&nbsp;Rate (Ritmo Master) e Velocidade Magic</h2>

<p>Bom, às vezes é bom poder modificar dinamicamente o tempo de cue. Talvez você queira combinar a velocidade de um performer com o tempo de cue armazenado. Ou talvez você tenha longos fades que você deseja ver, mas sem esperar meia hora no lindo sunset que você programou. Então você pode usar o Master Rate (Ritmo Master). Pressione&nbsp;<span class="hardkey">Store</span>&nbsp;<span class="hardkey">Speed</span>&nbsp;e, em seguida, qualquer tecla associada ao executor número 5. Na janela de pop-up que se abrir você deve selecionar <span class="softkey">Master Rate</span>. Isso nos dá um fader&nbsp;master rate.</p>

<p>A posição normal do master é no meio da faixa de fade. Aqui estão todos os tempos de cue de 1 a 1. Então, um fade de 5 segundos será executado em 5 segundos. O valor do fader no master é dividido com os tempos de cue. Portanto, se o tempo de fade de cue é de 5 segundos e você move o master rate&nbsp;para cima, então ele diz 2, e você tem o tempo de fade de cue de 5 segundos que será dividido por 2 e o resultado é um fade de cue de 2.5 segundos. Por outro lado, se você mover o fader para baixo até 0.5, então você terá 5 dividido por 0.5 - o resultado é um fade de cue de 10 segundos.</p>

<p>Pressione a tecla&nbsp;<span class="hardkey">Magic</span>. Isso abre uma janela como essa:</p>

<p><span class="image_gray_border"><img alt="" src="/Media/Image/Dot2_ViewsandWindows_MagicSpeed_1-1-3.png" style="height:auto"></span></p>

<p>Isso pode ser selecionado como uma vista em suas telas.</p>

<p>Tente executar seus cues com o Master&nbsp;Rate (Ritmo Master) em posições diferentes. Quando você tiver terminado, você deve mover o fade ao meio e pressione a tecla&nbsp;<span class="hardkey"><img alt="flash" src="/Media/Mlg/flash_1.png"></span>&nbsp;para redefinir o Master&nbsp;Rate para 1: 1.</p>

<p>&nbsp;</p>

<p>No próximo capítulo nós daremos uma olhada na programação blind.</p>


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
		<input id="CurrentGuid" name="CurrentGuid" type="hidden" value="656501ea-6e36-417d-9774-b6ccc8e10e1a">
	</span>
</form></div>&nbsp;	</span>
	<span class="pull-right" style="white-space: nowrap;">
			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/GSG_16_MakingMoreGroupsAndPresets/pt/1.1'; " title="Go to previous page '16 - Fazendo mais Grupos e Presets'">
				<i class="icon-arrow-left"></i> previous
			</button>

			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/GSG_18_BlindPreviewAndDmxTest/pt/1.1';" title="Go to next page '18 - Dando uma olhada em Blind, Preview e tester de DMX'">
				next <i class="icon-arrow-right"></i> 
			</button>
	</span>
</div>
	<div class="clear-fix"></div>
	<div class="pull-right">
	
			<button class="btn btn-mini" onclick="location.href='/Media/TopicPdf/13145/3';" title="Open/Save this topic as PDF document for viewing or printing">
				<img src="/Content/images/icons/filetype_pdf.png"> Open topic as PDF
			</button>
	</div>
<div class="clear-fix" style="margin-bottom: 10px"></div>
</div>

	