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
		<h1>Guia de Introdu????o - Selecionando e controlando dimmers</h1>

			<div class="topic-table-of-contents">
				<h2>Table of contents of this topic</h2>
				<div class="topic-toc-toggler topic-toc-toggler-hide"><a href="#" onclick="$('.topic-toc-ul').toggle(); $('.topic-toc-toggler-hide').hide(); $('.topic-toc-toggler-show').show(); return false;">hide</a></div>
				<div class="topic-toc-toggler topic-toc-toggler-show" style="display: none;"><a href="#" onclick="$('.topic-toc-ul').toggle(); $('.topic-toc-toggler-hide').show(); $('.topic-toc-toggler-show').hide(); return false;">show</a></div>
				<ul class="topic-toc-ul">
						<li>
							<a href="#toc_header_anchor_1">Assuntos de Sele????o</a>
						</li>
						<li>
							<a href="#toc_header_anchor_2">Controle de Atributo</a>
						</li>
						<li>
							<a href="#toc_header_anchor_3">Alinhar</a>
						</li>
				</ul>
			</div>

		<p>Bom, n??s temos nossos 12 dimmers&nbsp;prontos e&nbsp;patcheados. No console, eles est??o identificados como fixtures. Todos os fixtures devem ter um ID&nbsp;de fixture ??nico que permite que voc?? selecione cada um deles individualmente.</p>

<p>Vamos dar uma olhada neles. Pressione a tecla&nbsp;<span class="hardkey">Fixture</span>&nbsp;no console.</p>

<p>Sua tela 1 deve ter uma vista de Fixtures&nbsp;parecida com essa:<img alt="" src="/Media/Image/Dot2_GettingStarted_ControllingDimmers_01_1-2.png"> <em>Figura 1: Vista de Fixture</em></p>

<p>Cada ret??ngulo representa cada um dos nossos 12 fixtures. Podemos ver que tudo o que eles t??m no momento ?? um valor de 0% - ent??o eles est??o desligados. Este ?? o valor padr??o deles. Isso significa que, se eles n??o t??m informa????o, ent??o eles permanecer??o em 0%.</p>

<p>Legal, vamos tentar mudar o valor. Se voc?? mover a roda de n??vel, ent??o nada acontece com os nossos fixtures. A primeira coisa que precisamos fazer ?? selecionar quais fixtures queremos mudar.</p>

<p>Tente selecionar o n??mero 1 na tela. Isso deve mudar o redor do ret??ngulo para a cor amarela - como este:</p>

<p><img alt="" src="/Media/Image/Dot2_GettingStarted_ControllingDimmers_02_1-2.png"> <em>Figura 2: ??cone de Fixture.</em></p>

<p>Isto indica que este fixture&nbsp;est?? agora selecionado e se voc?? mover a roda de n??vel, voc?? ver?? que o valor muda.</p>

<p>Tudo bem, ent??o agora voc?? sabe como usar a roda de n??vel para alterar o valor.</p>

<p>Vamos explorar algumas outras maneiras. Ainda com o fixture&nbsp;1 selecionado, tente pressionar as seguintes teclas: <span class="hardkey">At</span>&nbsp;<span class="hardkey">5</span>&nbsp;<span class="hardkey">0</span>&nbsp;<span class="hardkey">Please</span>.&nbsp;Isto ir?? colocar o fixture em 50%. Agora pressione&nbsp;<span class="hardkey">At</span>&nbsp;<span class="hardkey">-</span>&nbsp;<span class="hardkey">1</span>&nbsp;<span class="hardkey">5</span>&nbsp;<span class="hardkey">Please</span>. Isso colocar?? seu fixture&nbsp;15% para baixo, por isso estamos agora em 35%. Agora tente pressionar <span class="hardkey">+</span> duas vezes. Isso adicionou 10% e pressionando <span class="hardkey">-</span> duas vezes, diminuir?? 10%.</p>

<p>Se voc?? pressionar duas vezes <span class="hardkey">&nbsp;. </span>&nbsp; voc?? coloca seu fixture em 0% e se voc?? pressionar a tecla <span class="hardkey">Full</span> voc?? chega a 100%.</p>

<p>Tente algumas combina????es diferentes at?? que voc?? se sinta confort??vel.</p>

<p>Se voc?? cometer um erro de digita????o ou talvez pressionar uma tecla errada, voc?? pode usar a tecla&nbsp;<span class="hardkey">Oops</span>&nbsp;como um Backspace (retrocesso). Se voc?? quiser abandonar a coisa toda (n??o o console em si, mas apenas o que voc?? come??ou a digitar) voc?? pode pressionar <span class="hardkey">Esc</span> para cancelar o comando que voc?? est?? digitando.</p>

<p>Quando voc?? estiver pronto para seguir em frente, voc?? deve pressionar a tecla <span class="hardkey">Clear</span> duas vezes.</p>

<p>Note que isso remove o valor (se voc?? tivesse algum) e a moldura em torno do fixture&nbsp;1 se tornou cinza novamente. O que isto significa? Se voc?? acha que ele n??o est?? mais selecionado e volta para 0%, ent??o voc?? acertou!</p>

<p>?? muito f??cil selecionar os fixtures nas telas. Voc?? pode selecionar um grupo maior de fixtures com seu pr??prio dedo. Quando voc?? toca em um fixture na vista de Fixtures, ele alterna o status selecionado do fixture.</p>

<p>Voc?? pode tocar fixtures individuais para cancelar a sele????o, ou pressione&nbsp;<span class="hardkey">Clear</span>&nbsp;uma vez (quando voc?? tem uma sele????o) para limpar toda a sele????o.</p>

<p>Agora iremos usar as teclas para selecionar os fixtures. Pressione o seguinte:</p>

<p><span class="hardkey">Clear</span>&nbsp;<span class="hardkey">Clear</span></p>

<p><span class="hardkey">Fixture</span> <span class="hardkey">1</span> <span class="hardkey">Thru</span> <span class="hardkey">1</span> <span class="hardkey">0</span> <span class="hardkey">Please</span></p>

<p><span class="hardkey">At</span> <span class="hardkey">4</span> <span class="hardkey">0</span> <span class="hardkey">Please</span></p>

<p>Isso deve selecionar os primeiros dez fixtures e coloc??-los em 40%. N??s digitamos mais do que realmente precis??vamos. Muitas vezes, esta opera????o pode ser feita mais rapidamente. Pressione a tecla <span class="hardkey">Clear</span> duas vezes novamente e, em seguida, pressione o seguinte:</p>

<p><span class="hardkey">1</span> <span class="hardkey">Thru</span> <span class="hardkey">1</span> <span class="hardkey">0</span> <span class="hardkey">At</span> <span class="hardkey">4</span> <span class="hardkey">0</span> <span class="hardkey">Please</span></p>

<p>Isso lhe d?? o mesmo resultado. O caminho mais longo ?? o comando mais correto e ?? o que o console est?? realmente fazendo, mas muitas vezes voc?? pode fazer com a vers??o curta. Se por algum motivo a vers??o curta nem sempre funcione para voc??, ent??o voc?? deve tentar os comandos mais longos e mais corretos antes de come??ar a atirar coisas ao redor da sala.</p>

<p>N??s n??o precisamos dar o&nbsp;mesmo valor a todos os fixtures - poder??amos espalh??-lo. Sem pressionar Clear, fa??a isso:</p>

<p><span class="hardkey">At</span> <span class="hardkey">1</span> <span class="hardkey">0</span> <span class="hardkey">Thru</span> <span class="hardkey">1</span> <span class="hardkey">0</span> <span class="hardkey">0</span> <span class="hardkey">Please</span></p>

<p>Isso espalhar?? os valores de 10% a 100%. Por favor, d?? uma olhada na vista de Fixtures. Se voc?? n??o tiver olhado, talvez queira ver a pequena barra de&nbsp;dimmer no lado esquerdo de cada ret??ngulo e o grande quadrado. A barra de dimmer indica o valor de dimmer. O quadrado mostra uma combina????o do dimmer, da intensidade, da cor e do gobo.</p>

<p>Voc?? pode, na verdade, at?? mesmo espalh??-lo ao longo de tr??s valores (ou at?? mais): <span class="hardkey">At</span> <span class="hardkey">1</span> <span class="hardkey">0</span> <span class="hardkey">Thru</span> <span class="hardkey">5</span> <span class="hardkey">0</span> <span class="hardkey">Thru</span> <span class="hardkey">1</span> <span class="hardkey">0</span> <span class="hardkey">Please</span>.</p>

<a name="toc_header_anchor_1" id="toc_header_anchor_1" class="topic-toc-item"></a><h2>Assuntos de Sele????o</h2>

<p>Como voc?? viu acima, voc?? tem permiss??o para selecionar um fixture usando gamas. E voc?? tamb??m pode usar&nbsp;<span class="hardkey">-</span>&nbsp;e&nbsp;<span class="hardkey">+</span>&nbsp;para remover ou adicionar fixtures para sua sele????o. Tente fazer isso:</p>

<p><span class="hardkey">Fixture</span> <span class="hardkey">1</span> <span class="hardkey">Thru</span> <span class="hardkey">5</span> <span class="hardkey">-</span> <span class="hardkey">2</span> <span class="hardkey">+</span> <span class="hardkey">7</span> <span class="hardkey">Please</span>, voc?? selecionou os fixtures 1, 3, 4, 5 e 7.</p>

<p>Mas a ordem da sele????o tamb??m ?? importante. Pressione&nbsp;<span class="hardkey">Clear</span>&nbsp;uma vez e fa??a o seguinte:</p>

<p><span class="hardkey">1</span> <span class="hardkey">Thru</span> <span class="hardkey">1</span> <span class="hardkey">2</span> <span class="hardkey">At</span> <span class="hardkey">1</span> <span class="hardkey">0</span> <span class="hardkey">Thru</span> <span class="hardkey">1</span> <span class="hardkey">0</span> <span class="hardkey">0</span> <span class="hardkey">Please</span>,&nbsp;isso ir?? espalhar bem os valores com o fixture&nbsp;1 em 10% e fixture 12 em 100%. Mas vamos tentar outra coisa.??? Pressione&nbsp;<span class="hardkey">Clear</span>&nbsp;duas vezes e fa??a o seguinte:</p>

<p><span class="hardkey">1</span>&nbsp;<span class="hardkey">2</span>&nbsp;<span class="hardkey">Thru</span> <span class="hardkey">1</span> &nbsp;<span class="hardkey">At</span> <span class="hardkey">1</span> <span class="hardkey">0</span> <span class="hardkey">Thru</span> <span class="hardkey">1</span> <span class="hardkey">0</span> <span class="hardkey">0</span> <span class="hardkey">Please</span>, as coisas se invertem. Agora o fixture 12 est?? em 10% e o fixture 1 em 100%.</p>

<p>N??s selecionamos os fixtures&nbsp;na ordem inversa e depois aplicamos a mesma gama de valores.</p>

<p>Se voc?? usar a tela para selecionar os fixtures em uma ordem aleat??ria (voc?? pode precisar pressionar <span class="hardkey">Clear</span> primeiro) e, em seguida, fa??a:&nbsp;<span class="hardkey">At</span> <span class="hardkey">1</span> <span class="hardkey">0</span> <span class="hardkey">Thru</span> <span class="hardkey">1</span> <span class="hardkey">0</span> <span class="hardkey">0</span> <span class="hardkey">Please</span>, voc?? ver?? como os valores est??o distribu??dos.</p>

<p>Sendo assim, a ordem de sele????o importa.</p>

<a name="toc_header_anchor_2" id="toc_header_anchor_2" class="topic-toc-item"></a><h2>Controle de Atributo</h2>

<p>H?? mais duas maneiras de alterar o valor que eu quero falar para voc??.</p>

<p>Se voc?? tiver pressionado clear, ent??o por favor selecione os fixtures de 1 a 10 novamente.</p>

<p>Agora, no lado direito da tela 1 voc?? precisa pressionar onde diz <span class="softkey">Dimmer</span>.</p>

<p>Isso abre uma vista que nos permite fazer mais coisas. Isso se torna muito ??til no futuro, quando adicionamos fixtures&nbsp;mais complexos. Isso ?? a chamada vista de Tipo de Preset. Falaremos mais tarde sobre os tipos de preset.</p>

<p>?? assim a vista para o dimmer:</p>

<p><img alt="" src="/Media/Image/Dot2_GettingStarted_ControllingDimmers_04_1-1-3.png"> <em>Figura 3: Controle de Atributo</em></p>

<p>Aqui voc?? ter?? alguns valores predefinidos&nbsp;de dimmer que voc?? poder?? selecionar e alterar em mais e menos e intervalos de 5% e 10%. Voc?? pode ver que o controle deslizante segue os valores, e voc?? pode usar o controle deslizante para definir um valor.</p>

<p>Observe que agora voc?? pode tamb??m usar o encoder mais ?? esquerda para alterar o valor de dimmer.</p>

<p>Talvez voc?? queira abrir a vista de Fixtures em uma das outras telas. No lado superior direito da tela 2, voc?? deve pressionar o bot??o <span class="softkey">Fixture</span>. Isto abrir?? uma vista de Fixture na tela 2.</p>

<p>Agora pressione o encoder mais ?? esquerda. Isto ir?? abrir <strong>A Calculadora</strong>. Ela deve ser mais ou menos assim:</p>

<p><img alt="" src="/Media/Image/Dot2_GettingStarted_ControllingDimmers_03_1-1-3.png"> <em>Figura 4: Janela da Calculadora.</em></p>

<p>&nbsp;</p>

<p>Isso tamb??m permite que voc?? digite um valor na tela. Mas voc?? tamb??m pode usar alguns valores pr??-definidos. Na foto acima, existem quatro bot??es: <span class="softkey">Aberto</span>, <span class="softkey">75%</span>, &nbsp;<span class="softkey">50%</span>&nbsp;and <span class="softkey">25%</span>.</p>

<p>'Aberto' ?? o mesmo que&nbsp;100% &nbsp;(full open).&nbsp;Pressionando uma das quatro op????es fechar?? a calculadora e colocar?? os fixtures selecionados naquele valor.</p>

<a name="toc_header_anchor_3" id="toc_header_anchor_3" class="topic-toc-item"></a><h2>Alinhar</h2>

<p>At?? agora, usamos as teclas para colocar valores em mais de um fixture. Mas, na verdade, esta ?? uma fun????o que chamamos de&nbsp;Align. Voc?? descobrir?? nos pr??ximos cap??tulos que a fun????o Align pode ser usada em quase qualquer coisa. Mas, por enquanto, s?? temos dimmer. Portanto, tente selecionar os fixtures de 1 a 10 (nessa ordem) e, em seguida, d?? a todos eles 50%. Por favor, pressione o bot??o <span class="softkey">Dimmer</span> na barra de tipo de Preset, ent??o teremos o controle de&nbsp;dimmer no encoder esquerdo. Agora pressione a tecla <span class="hardkey">Align</span> uma vez. Agora, um pequeno&nbsp;pop-up diz que voc?? est?? agora no modo "Align &lt;". H?? cinco modos diferentes e agora iremos explor??-los um pouco. ?? importante que voc?? mantenha a mesma ordem de sele????o em todos os exemplos abaixo. Com este primeiro modo ativo, tente colocar o encoder&nbsp;de&nbsp;dimmer&nbsp;mais para baixo, observe como o valor fica em 50% para o fixture n??mero 1, mas est?? distribu??do uniformemente para o fixture n??mero 10. Parecendo-se com isso:</p>

<p><img alt="" src="/Media/Image/Dot2_Keys_Align_Left.png"> <em>Figura 5: Alinhar &lt;.</em></p>

<p>Agora vamos resetar e dar a todos os fixtures&nbsp;50% novamente&nbsp;(<span class="hardkey">At</span>&nbsp;<span class="hardkey">5</span>&nbsp;<span class="hardkey">0</span>&nbsp;<span class="hardkey">Please</span>).&nbsp;Agora pressione a tecla <span class="hardkey">Align</span> at?? aparecer um&nbsp;pop-up&nbsp;dizendo que est?? no modo "Align&gt;". E agora tente abaixar o encoder&nbsp;de&nbsp;dimmer novamente. Agora, o resultado ?? que n??s mudamos o fixture&nbsp;1 e o valor est?? se espalhando para o fixture 10, que n??o muda. Isso ficaria assim:</p>

<p><img alt="" src="/Media/Image/Dot2_Keys_Align_Right.png"> <em>Figura 6: Alinhar &gt;.</em></p>

<p>Resete novamente com 50% em todos os fixtures. Agora pressione a tecla <span class="hardkey">Align</span> at?? que seja o modo "Align&gt; &lt;" e, em seguida, gire o encoder. Agora ?? como se n??s tiv??ssemos um ponto de piv?? no meio dos nossos 10 fixtures e podemos inclinar os valores de uma maneira ou de outra. Isso ficaria assim:</p>

<p><img alt="" src="/Media/Image/Dot2_Keys_Align_Center.png"> <em>Figura 7: Alinhar &gt;&lt;.</em></p>

<p>Resete mais uma vez com todos os fixtures em 50%. Pressione a tecla <span class="hardkey">Align</span> at?? que o modo seja "Align &lt;&gt;" e, em seguida, gire o encoder. Agora o primeiro e o ??ltimo fixture ficam em 50% e o meio se move mais. Isso ficaria assim:</p>

<p><img alt="" src="/Media/Image/Dot2_Keys_Align_Sides.png"> <em>Figura 8: Alinhar &lt;&gt;.</em></p>

<p>Voc?? notou que cada vez que voc?? resetar o valor de 50%, a tecla align n??o acende mais, e quando voc?? a pressiona, voc?? precisa passar por todos os modos que j?? tentamos. Este ?? o quinto modo e o padr??o chamado "Alinhar Off". Toda vez que voc?? faz algo diferente do que girar o encoder (depois de ter ativado um dos modos de&nbsp;align ativos), ele reseta o modo align para off.</p>

<p>Ok, talvez voc?? queira brincar um pouco com os controles. Quando voc?? se sentir feliz e confort??vel, voc?? deve pressionar <span class="hardkey">Clear</span> duas vezes e passar para o pr??ximo cap??tulo,&nbsp;onde iremos&nbsp;conhecer&nbsp;melhor a&nbsp;Vista de Fixture.</p>


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

	
