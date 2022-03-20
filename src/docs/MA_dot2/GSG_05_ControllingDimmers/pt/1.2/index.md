---
originalUrl: 'https://help2.malighting.com/Page/MA_dot2/GSG_05_ControllingDimmers/pt/1.2'
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
		<input id="CurrentGuid" name="CurrentGuid" type="hidden" value="c5ea70af-022b-4ef9-a560-7dc6b068a49f">
	</span>
</form></div>&nbsp;	</span>
	<span class="pull-right" style="white-space: nowrap;">
			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/GSG_04_PatchDimmers/pt/1.2'; " title="Go to previous page 'Adicionando e patcheando dimmers'">
				<i class="icon-arrow-left"></i> previous
			</button>

			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/GSG_06_FixtureView/pt/1.2';" title="Go to next page '6 - Vista de Fixture'">
				next <i class="icon-arrow-right"></i> 
			</button>
	</span>
</div>
<div class="clear-fix" style="margin-bottom: 10px"></div>
</div>

					<div class="infobox"><b>Hint:</b><br><b>New help version</b><br>The help version you selected belongs to an older software version. <a href="/Topic/SetCurrentVersionNumber/29/c5ea70af-022b-4ef9-a560-7dc6b068a49f">You may want to view the latest help version.</a></div>

			<div class="pull-right">
					<button class="btn btn-mini" style="margin-right: 10px; height: 30px;" onclick="location.href = '/Media/TopicPdf/17734/7'; " title="Open/Save this topic as PDF document for viewing or printing">
						<img src="/Content/images/icons/filetype_pdf.png" style="height: 24px;"> Open topic as PDF
					</button>
				<span class="badge badge-info">Version 1.2</span>
			</div>
		<h1>Guia de Introdução - Selecionando e controlando dimmers</h1>

			<div class="topic-table-of-contents">
				<h2>Table of contents of this topic</h2>
				<div class="topic-toc-toggler topic-toc-toggler-hide"><a href="#" onclick="$('.topic-toc-ul').toggle(); $('.topic-toc-toggler-hide').hide(); $('.topic-toc-toggler-show').show(); return false;">hide</a></div>
				<div class="topic-toc-toggler topic-toc-toggler-show" style="display: none;"><a href="#" onclick="$('.topic-toc-ul').toggle(); $('.topic-toc-toggler-hide').show(); $('.topic-toc-toggler-show').hide(); return false;">show</a></div>
				<ul class="topic-toc-ul">
						<li>
							<a href="#toc_header_anchor_1">Assuntos de Seleção</a>
						</li>
						<li>
							<a href="#toc_header_anchor_2">Controle de Atributo</a>
						</li>
						<li>
							<a href="#toc_header_anchor_3">Alinhar</a>
						</li>
				</ul>
			</div>

		<p>Bom, nós temos nossos 12 dimmers&nbsp;prontos e&nbsp;patcheados. No console, eles estão identificados como fixtures. Todos os fixtures devem ter um ID&nbsp;de fixture único que permite que você selecione cada um deles individualmente.</p>

<p>Vamos dar uma olhada neles. Pressione a tecla&nbsp;<span class="hardkey">Fixture</span>&nbsp;no console.</p>

<p>Sua tela 1 deve ter uma vista de Fixtures&nbsp;parecida com essa:<img alt="" src="/Media/Image/Dot2_GettingStarted_ControllingDimmers_01_1-2.png"> <em>Figura 1: Vista de Fixture</em></p>

<p>Cada retângulo representa cada um dos nossos 12 fixtures. Podemos ver que tudo o que eles têm no momento é um valor de 0% - então eles estão desligados. Este é o valor padrão deles. Isso significa que, se eles não têm informação, então eles permanecerão em 0%.</p>

<p>Legal, vamos tentar mudar o valor. Se você mover a roda de nível, então nada acontece com os nossos fixtures. A primeira coisa que precisamos fazer é selecionar quais fixtures queremos mudar.</p>

<p>Tente selecionar o número 1 na tela. Isso deve mudar o redor do retângulo para a cor amarela - como este:</p>

<p><img alt="" src="/Media/Image/Dot2_GettingStarted_ControllingDimmers_02_1-2.png"> <em>Figura 2: Ícone de Fixture.</em></p>

<p>Isto indica que este fixture&nbsp;está agora selecionado e se você mover a roda de nível, você verá que o valor muda.</p>

<p>Tudo bem, então agora você sabe como usar a roda de nível para alterar o valor.</p>

<p>Vamos explorar algumas outras maneiras. Ainda com o fixture&nbsp;1 selecionado, tente pressionar as seguintes teclas: <span class="hardkey">At</span>&nbsp;<span class="hardkey">5</span>&nbsp;<span class="hardkey">0</span>&nbsp;<span class="hardkey">Please</span>.&nbsp;Isto irá colocar o fixture em 50%. Agora pressione&nbsp;<span class="hardkey">At</span>&nbsp;<span class="hardkey">-</span>&nbsp;<span class="hardkey">1</span>&nbsp;<span class="hardkey">5</span>&nbsp;<span class="hardkey">Please</span>. Isso colocará seu fixture&nbsp;15% para baixo, por isso estamos agora em 35%. Agora tente pressionar <span class="hardkey">+</span> duas vezes. Isso adicionou 10% e pressionando <span class="hardkey">-</span> duas vezes, diminuirá 10%.</p>

<p>Se você pressionar duas vezes <span class="hardkey">&nbsp;. </span>&nbsp; você coloca seu fixture em 0% e se você pressionar a tecla <span class="hardkey">Full</span> você chega a 100%.</p>

<p>Tente algumas combinações diferentes até que você se sinta confortável.</p>

<p>Se você cometer um erro de digitação ou talvez pressionar uma tecla errada, você pode usar a tecla&nbsp;<span class="hardkey">Oops</span>&nbsp;como um Backspace (retrocesso). Se você quiser abandonar a coisa toda (não o console em si, mas apenas o que você começou a digitar) você pode pressionar <span class="hardkey">Esc</span> para cancelar o comando que você está digitando.</p>

<p>Quando você estiver pronto para seguir em frente, você deve pressionar a tecla <span class="hardkey">Clear</span> duas vezes.</p>

<p>Note que isso remove o valor (se você tivesse algum) e a moldura em torno do fixture&nbsp;1 se tornou cinza novamente. O que isto significa? Se você acha que ele não está mais selecionado e volta para 0%, então você acertou!</p>

<p>É muito fácil selecionar os fixtures nas telas. Você pode selecionar um grupo maior de fixtures com seu próprio dedo. Quando você toca em um fixture na vista de Fixtures, ele alterna o status selecionado do fixture.</p>

<p>Você pode tocar fixtures individuais para cancelar a seleção, ou pressione&nbsp;<span class="hardkey">Clear</span>&nbsp;uma vez (quando você tem uma seleção) para limpar toda a seleção.</p>

<p>Agora iremos usar as teclas para selecionar os fixtures. Pressione o seguinte:</p>

<p><span class="hardkey">Clear</span>&nbsp;<span class="hardkey">Clear</span></p>

<p><span class="hardkey">Fixture</span> <span class="hardkey">1</span> <span class="hardkey">Thru</span> <span class="hardkey">1</span> <span class="hardkey">0</span> <span class="hardkey">Please</span></p>

<p><span class="hardkey">At</span> <span class="hardkey">4</span> <span class="hardkey">0</span> <span class="hardkey">Please</span></p>

<p>Isso deve selecionar os primeiros dez fixtures e colocá-los em 40%. Nós digitamos mais do que realmente precisávamos. Muitas vezes, esta operação pode ser feita mais rapidamente. Pressione a tecla <span class="hardkey">Clear</span> duas vezes novamente e, em seguida, pressione o seguinte:</p>

<p><span class="hardkey">1</span> <span class="hardkey">Thru</span> <span class="hardkey">1</span> <span class="hardkey">0</span> <span class="hardkey">At</span> <span class="hardkey">4</span> <span class="hardkey">0</span> <span class="hardkey">Please</span></p>

<p>Isso lhe dá o mesmo resultado. O caminho mais longo é o comando mais correto e é o que o console está realmente fazendo, mas muitas vezes você pode fazer com a versão curta. Se por algum motivo a versão curta nem sempre funcione para você, então você deve tentar os comandos mais longos e mais corretos antes de começar a atirar coisas ao redor da sala.</p>

<p>Nós não precisamos dar o&nbsp;mesmo valor a todos os fixtures - poderíamos espalhá-lo. Sem pressionar Clear, faça isso:</p>

<p><span class="hardkey">At</span> <span class="hardkey">1</span> <span class="hardkey">0</span> <span class="hardkey">Thru</span> <span class="hardkey">1</span> <span class="hardkey">0</span> <span class="hardkey">0</span> <span class="hardkey">Please</span></p>

<p>Isso espalhará os valores de 10% a 100%. Por favor, dê uma olhada na vista de Fixtures. Se você não tiver olhado, talvez queira ver a pequena barra de&nbsp;dimmer no lado esquerdo de cada retângulo e o grande quadrado. A barra de dimmer indica o valor de dimmer. O quadrado mostra uma combinação do dimmer, da intensidade, da cor e do gobo.</p>

<p>Você pode, na verdade, até mesmo espalhá-lo ao longo de três valores (ou até mais): <span class="hardkey">At</span> <span class="hardkey">1</span> <span class="hardkey">0</span> <span class="hardkey">Thru</span> <span class="hardkey">5</span> <span class="hardkey">0</span> <span class="hardkey">Thru</span> <span class="hardkey">1</span> <span class="hardkey">0</span> <span class="hardkey">Please</span>.</p>

<a name="toc_header_anchor_1" id="toc_header_anchor_1" class="topic-toc-item"></a><h2>Assuntos de Seleção</h2>

<p>Como você viu acima, você tem permissão para selecionar um fixture usando gamas. E você também pode usar&nbsp;<span class="hardkey">-</span>&nbsp;e&nbsp;<span class="hardkey">+</span>&nbsp;para remover ou adicionar fixtures para sua seleção. Tente fazer isso:</p>

<p><span class="hardkey">Fixture</span> <span class="hardkey">1</span> <span class="hardkey">Thru</span> <span class="hardkey">5</span> <span class="hardkey">-</span> <span class="hardkey">2</span> <span class="hardkey">+</span> <span class="hardkey">7</span> <span class="hardkey">Please</span>, você selecionou os fixtures 1, 3, 4, 5 e 7.</p>

<p>Mas a ordem da seleção também é importante. Pressione&nbsp;<span class="hardkey">Clear</span>&nbsp;uma vez e faça o seguinte:</p>

<p><span class="hardkey">1</span> <span class="hardkey">Thru</span> <span class="hardkey">1</span> <span class="hardkey">2</span> <span class="hardkey">At</span> <span class="hardkey">1</span> <span class="hardkey">0</span> <span class="hardkey">Thru</span> <span class="hardkey">1</span> <span class="hardkey">0</span> <span class="hardkey">0</span> <span class="hardkey">Please</span>,&nbsp;isso irá espalhar bem os valores com o fixture&nbsp;1 em 10% e fixture 12 em 100%. Mas vamos tentar outra coisa.​ Pressione&nbsp;<span class="hardkey">Clear</span>&nbsp;duas vezes e faça o seguinte:</p>

<p><span class="hardkey">1</span>&nbsp;<span class="hardkey">2</span>&nbsp;<span class="hardkey">Thru</span> <span class="hardkey">1</span> &nbsp;<span class="hardkey">At</span> <span class="hardkey">1</span> <span class="hardkey">0</span> <span class="hardkey">Thru</span> <span class="hardkey">1</span> <span class="hardkey">0</span> <span class="hardkey">0</span> <span class="hardkey">Please</span>, as coisas se invertem. Agora o fixture 12 está em 10% e o fixture 1 em 100%.</p>

<p>Nós selecionamos os fixtures&nbsp;na ordem inversa e depois aplicamos a mesma gama de valores.</p>

<p>Se você usar a tela para selecionar os fixtures em uma ordem aleatória (você pode precisar pressionar <span class="hardkey">Clear</span> primeiro) e, em seguida, faça:&nbsp;<span class="hardkey">At</span> <span class="hardkey">1</span> <span class="hardkey">0</span> <span class="hardkey">Thru</span> <span class="hardkey">1</span> <span class="hardkey">0</span> <span class="hardkey">0</span> <span class="hardkey">Please</span>, você verá como os valores estão distribuídos.</p>

<p>Sendo assim, a ordem de seleção importa.</p>

<a name="toc_header_anchor_2" id="toc_header_anchor_2" class="topic-toc-item"></a><h2>Controle de Atributo</h2>

<p>Há mais duas maneiras de alterar o valor que eu quero falar para você.</p>

<p>Se você tiver pressionado clear, então por favor selecione os fixtures de 1 a 10 novamente.</p>

<p>Agora, no lado direito da tela 1 você precisa pressionar onde diz <span class="softkey">Dimmer</span>.</p>

<p>Isso abre uma vista que nos permite fazer mais coisas. Isso se torna muito útil no futuro, quando adicionamos fixtures&nbsp;mais complexos. Isso é a chamada vista de Tipo de Preset. Falaremos mais tarde sobre os tipos de preset.</p>

<p>É assim a vista para o dimmer:</p>

<p><img alt="" src="/Media/Image/Dot2_GettingStarted_ControllingDimmers_04_1-1-3.png"> <em>Figura 3: Controle de Atributo</em></p>

<p>Aqui você terá alguns valores predefinidos&nbsp;de dimmer que você poderá selecionar e alterar em mais e menos e intervalos de 5% e 10%. Você pode ver que o controle deslizante segue os valores, e você pode usar o controle deslizante para definir um valor.</p>

<p>Observe que agora você pode também usar o encoder mais à esquerda para alterar o valor de dimmer.</p>

<p>Talvez você queira abrir a vista de Fixtures em uma das outras telas. No lado superior direito da tela 2, você deve pressionar o botão <span class="softkey">Fixture</span>. Isto abrirá uma vista de Fixture na tela 2.</p>

<p>Agora pressione o encoder mais à esquerda. Isto irá abrir <strong>A Calculadora</strong>. Ela deve ser mais ou menos assim:</p>

<p><img alt="" src="/Media/Image/Dot2_GettingStarted_ControllingDimmers_03_1-1-3.png"> <em>Figura 4: Janela da Calculadora.</em></p>

<p>&nbsp;</p>

<p>Isso também permite que você digite um valor na tela. Mas você também pode usar alguns valores pré-definidos. Na foto acima, existem quatro botões: <span class="softkey">Aberto</span>, <span class="softkey">75%</span>, &nbsp;<span class="softkey">50%</span>&nbsp;and <span class="softkey">25%</span>.</p>

<p>'Aberto' é o mesmo que&nbsp;100% &nbsp;(full open).&nbsp;Pressionando uma das quatro opções fechará a calculadora e colocará os fixtures selecionados naquele valor.</p>

<a name="toc_header_anchor_3" id="toc_header_anchor_3" class="topic-toc-item"></a><h2>Alinhar</h2>

<p>Até agora, usamos as teclas para colocar valores em mais de um fixture. Mas, na verdade, esta é uma função que chamamos de&nbsp;Align. Você descobrirá nos próximos capítulos que a função Align pode ser usada em quase qualquer coisa. Mas, por enquanto, só temos dimmer. Portanto, tente selecionar os fixtures de 1 a 10 (nessa ordem) e, em seguida, dê a todos eles 50%. Por favor, pressione o botão <span class="softkey">Dimmer</span> na barra de tipo de Preset, então teremos o controle de&nbsp;dimmer no encoder esquerdo. Agora pressione a tecla <span class="hardkey">Align</span> uma vez. Agora, um pequeno&nbsp;pop-up diz que você está agora no modo "Align &lt;". Há cinco modos diferentes e agora iremos explorá-los um pouco. É importante que você mantenha a mesma ordem de seleção em todos os exemplos abaixo. Com este primeiro modo ativo, tente colocar o encoder&nbsp;de&nbsp;dimmer&nbsp;mais para baixo, observe como o valor fica em 50% para o fixture número 1, mas está distribuído uniformemente para o fixture número 10. Parecendo-se com isso:</p>

<p><img alt="" src="/Media/Image/Dot2_Keys_Align_Left.png"> <em>Figura 5: Alinhar &lt;.</em></p>

<p>Agora vamos resetar e dar a todos os fixtures&nbsp;50% novamente&nbsp;(<span class="hardkey">At</span>&nbsp;<span class="hardkey">5</span>&nbsp;<span class="hardkey">0</span>&nbsp;<span class="hardkey">Please</span>).&nbsp;Agora pressione a tecla <span class="hardkey">Align</span> até aparecer um&nbsp;pop-up&nbsp;dizendo que está no modo "Align&gt;". E agora tente abaixar o encoder&nbsp;de&nbsp;dimmer novamente. Agora, o resultado é que nós mudamos o fixture&nbsp;1 e o valor está se espalhando para o fixture 10, que não muda. Isso ficaria assim:</p>

<p><img alt="" src="/Media/Image/Dot2_Keys_Align_Right.png"> <em>Figura 6: Alinhar &gt;.</em></p>

<p>Resete novamente com 50% em todos os fixtures. Agora pressione a tecla <span class="hardkey">Align</span> até que seja o modo "Align&gt; &lt;" e, em seguida, gire o encoder. Agora é como se nós tivéssemos um ponto de pivô no meio dos nossos 10 fixtures e podemos inclinar os valores de uma maneira ou de outra. Isso ficaria assim:</p>

<p><img alt="" src="/Media/Image/Dot2_Keys_Align_Center.png"> <em>Figura 7: Alinhar &gt;&lt;.</em></p>

<p>Resete mais uma vez com todos os fixtures em 50%. Pressione a tecla <span class="hardkey">Align</span> até que o modo seja "Align &lt;&gt;" e, em seguida, gire o encoder. Agora o primeiro e o último fixture ficam em 50% e o meio se move mais. Isso ficaria assim:</p>

<p><img alt="" src="/Media/Image/Dot2_Keys_Align_Sides.png"> <em>Figura 8: Alinhar &lt;&gt;.</em></p>

<p>Você notou que cada vez que você resetar o valor de 50%, a tecla align não acende mais, e quando você a pressiona, você precisa passar por todos os modos que já tentamos. Este é o quinto modo e o padrão chamado "Alinhar Off". Toda vez que você faz algo diferente do que girar o encoder (depois de ter ativado um dos modos de&nbsp;align ativos), ele reseta o modo align para off.</p>

<p>Ok, talvez você queira brincar um pouco com os controles. Quando você se sentir feliz e confortável, você deve pressionar <span class="hardkey">Clear</span> duas vezes e passar para o próximo capítulo,&nbsp;onde iremos&nbsp;conhecer&nbsp;melhor a&nbsp;Vista de Fixture.</p>


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
		<input id="CurrentGuid" name="CurrentGuid" type="hidden" value="c5ea70af-022b-4ef9-a560-7dc6b068a49f">
	</span>
</form></div>&nbsp;	</span>
	<span class="pull-right" style="white-space: nowrap;">
			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/GSG_04_PatchDimmers/pt/1.2'; " title="Go to previous page 'Adicionando e patcheando dimmers'">
				<i class="icon-arrow-left"></i> previous
			</button>

			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/GSG_06_FixtureView/pt/1.2';" title="Go to next page '6 - Vista de Fixture'">
				next <i class="icon-arrow-right"></i> 
			</button>
	</span>
</div>
	<div class="clear-fix"></div>
	<div class="pull-right">
	
			<button class="btn btn-mini" onclick="location.href='/Media/TopicPdf/17734/7';" title="Open/Save this topic as PDF document for viewing or printing">
				<img src="/Content/images/icons/filetype_pdf.png"> Open topic as PDF
			</button>
	</div>
<div class="clear-fix" style="margin-bottom: 10px"></div>
</div>

	
