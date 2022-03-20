---
originalUrl: 'http://help2.malighting.com/Page/MA_dot2/GSG_12_WorkingWithColors/pt/1.2'
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
		<input id="CurrentGuid" name="CurrentGuid" type="hidden" value="ba0f3294-91ba-4c5d-9fff-154e31ac12b3">
	</span>
</form></div>&nbsp;	</span>
	<span class="pull-right" style="white-space: nowrap;">
			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/GSG_11_AddingLedFixtures/pt/1.2'; " title="Go to previous page '11 - Adicionando fixtures de LED'">
				<i class="icon-arrow-left"></i> previous
			</button>

			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/GSG_13_CreatingPresets/pt/1.2';" title="Go to next page '13 - Criando Presets'">
				next <i class="icon-arrow-right"></i> 
			</button>
	</span>
</div>
<div class="clear-fix" style="margin-bottom: 10px"></div>
</div>

					<div class="infobox"><b>Hint:</b><br><b>New help version</b><br>The help version you selected belongs to an older software version. <a href="/Topic/SetCurrentVersionNumber/29/ba0f3294-91ba-4c5d-9fff-154e31ac12b3">You may want to view the latest help version.</a></div>

			<div class="pull-right">
					<button class="btn btn-mini" style="margin-right: 10px; height: 30px;" onclick="location.href = '/Media/TopicPdf/17739/7'; " title="Open/Save this topic as PDF document for viewing or printing">
						<img src="/Content/images/icons/filetype_pdf.png" style="height: 24px;"> Open topic as PDF
					</button>
				<span class="badge badge-info">Version 1.2</span>
			</div>
		<h1>Guia de Introdução - Trabalhando com cores</h1>

			<div class="topic-table-of-contents">
				<h2>Table of contents of this topic</h2>
				<div class="topic-toc-toggler topic-toc-toggler-hide"><a href="#" onclick="$('.topic-toc-ul').toggle(); $('.topic-toc-toggler-hide').hide(); $('.topic-toc-toggler-show').show(); return false;">hide</a></div>
				<div class="topic-toc-toggler topic-toc-toggler-show" style="display: none;"><a href="#" onclick="$('.topic-toc-ul').toggle(); $('.topic-toc-toggler-hide').show(); $('.topic-toc-toggler-show').hide(); return false;">show</a></div>
				<ul class="topic-toc-ul">
						<li>
							<a href="#toc_header_anchor_1">Picker</a>
						</li>
						<li>
							<a href="#toc_header_anchor_2">Fader</a>
						</li>
						<li>
							<a href="#toc_header_anchor_3">Catálogo de Gelatinas</a>
						</li>
						<li>
							<a href="#toc_header_anchor_4">Raw</a>
						</li>
				</ul>
			</div>

		<p>Os fixtures&nbsp;que acabamos de adicionar tem seis diferentes LED's coloridos e um dimmer (há também um canal "curve" - mas nós não vamos falar disso agora).</p>

<p>Antes de fazer qualquer coisa, devemos fazer um grupo com todos eles. Chame-os de&nbsp;<span class="syntax">&nbsp;All Hex7</span>&nbsp;e faça-os o grupo número 10.</p>

<p>Vamos dar uma olhada no controle de cor. No lado direito da tela 1, você encontrará um botão chamado <span class="softkey">Color</span>. Certifique-se de que você selecionou o grupo All Hex7 e, em seguida, pressione este botão.</p>

<a name="toc_header_anchor_1" id="toc_header_anchor_1" class="topic-toc-item"></a><h2>Picker</h2>

<p>A primeira coisa que vemos é o&nbsp;<strong>Color Picker</strong>. Esta é uma grande área colorida sensível ao toque que você pode pressionar para alterar a saída de cor dos LED's.</p>

<p>Existem dois faders&nbsp;do lado direito da tela. O da esquerda controla o brilho dos fixtures. O da direita é chamado Qualidade.</p>

<p>O fader&nbsp;Qualidade merece explicação. Ele funciona com fixtures que têm mais de três cores. Você pode escolher como o console deve misturar as cores. No topo do fader ele diz que "Primary". Isto significa que o fixture só vai usar os LED's primários vermelho, verde e azul para criar a cor desejada. Na parte inferior do fader ele diz &nbsp;"Pure". Isto significa que o console vai tentar misturar a cor o mais próximo possível da cor desejada for possível, usando todos os LED's coloridos disponíveis no fixture. No meio destes dois temos "Max". Isto lhe dará saída máxima de luz, usando a maior quantidade de&nbsp;LED's&nbsp;for possível.</p>

<p>A melhor maneira de testar isso é escolhendo uma cor na área do picker (selecionador) de cor - não escolha as cores primárias saturadas, mas sim algo que esteja no meio. Agora mova o fader&nbsp;Qualidade, ao mesmo tempo que você tenha a vista de&nbsp;Folha de&nbsp;Fixture&nbsp;aberta. Observe como a cor é misturada olhando para as diferentes colunas de cor. Cada coluna&nbsp;é uma das cores disponíveis no fixture (R,G,B, Âmbar, Branco e UV). Observe que os encoders&nbsp;lhe dão controle sobre o&nbsp;Hue, Saturação, Brilho e Q (Qualidade). Esta é a função primária deles. Eles também têm uma função secundária. Isto pode ser alcançado por pressionar e segurar a tecla <span class="hardkey"><img alt="ma" src="/Media/Mlg/ma.png"></span>.</p>

<p>Dê uma olhada na foto abaixo. É o mesmo encoder, mas no lado esquerda é a função primária. O do meio é a função secundária:</p>

<p><img alt="" src="/Media/Image/Dot2_GettingStarted_WorkingWithColors_01_1-0.png"></p>

<p>O terceiro exemplo na imagem está mostrando que é possível alterar a resolução ou a velocidade do encoder. O pequeno ícone com um círculo e um ponto nele, é a tecla&nbsp;Encoder&nbsp;que se parece com esta:&nbsp;<span class="hardkey"><img alt="encoder" src="/Media/Mlg/encoder.png"></span>.&nbsp;Pressionando- a, você alterna (toggle) a resolução. Ela pode ser lenta ou normal. O terceiro exemplo acima lhe mostra como ele fica quando está lento, os outros dois primeiros lhe mostram a velocidade normal.</p>

<p>Vamos tentar algo divertido no Color Picker. Selecione todos os fixtures&nbsp;All Hex7&nbsp;e selecione uma cor usando o seletor (picker). Agora pressione a tecla <span class="hardkey">Align</span> e pressione e segure uma cor diferente, observe como a cor se espalha. Então o selecionador (picker) de cor está trabalhando com a funcionalidade Align, nós vimos com os dimmers. Experimente os diferentes modos de align.</p>

<a name="toc_header_anchor_2" id="toc_header_anchor_2" class="topic-toc-item"></a><h2>Fader</h2>

<p>Vamos dar uma olhada em algumas das outras maneiras de seleção de&nbsp;uma cor. Na parte superior da tela 1, existem várias opções para controlar as cores. Neste momento o chamado <span class="softkey">Picker</span>&nbsp;está selecionado. Tente tocar&nbsp;<span class="softkey">Fader</span>. Isso altera a vista a fim de mostrar-nos três sistemas de fader diferentes para misturar uma cor. São eles: "Hue, Saturação, Brilho", "Ciano, Magenta, Amarelo" e "Vermelho, Verde, Azul". No lado direito você tem o fader Qualidade (Q) novamente.</p>

<p>Estas três seções&nbsp;estão conectadas. Ou seja, se você mudar a cor em um deles, os outros também se movem. Você pode alterar quais sistemas seus encoders&nbsp;estão conectados a, tocando cada seção. Experimente. Além disso, observe as funções primárias e secundárias dos encoders.</p>

<a name="toc_header_anchor_3" id="toc_header_anchor_3" class="topic-toc-item"></a><h2>Catálogo de Gelatinas</h2>

<p>Em seguida, veremos o <span class="softkey">Catálogo de gelatinas</span> - por favor toque-o.</p>

<p>Isso nos permite escolher uma cor do catálogo de muitos dos principais fabricantes de Gelatinas. Esse não é um sistema preciso, mas ele te dará uma cor que seja bem parecida.</p>

<p>No lado esquerdo, você pode escolher um fabricante. O lado direito lhe dará a lista de gelatinas deles. Você pode usar o encoder da esquerda e da direita para percorrer pelas duas listas.</p>

<a name="toc_header_anchor_4" id="toc_header_anchor_4" class="topic-toc-item"></a><h2>Raw</h2>

<p>A última maneira de controlar as cores é com o controle raw, com os canais de cores atuais do fixture. Pressione&nbsp;<span class="softkey">Raw: MixColor A</span>. Isto lhe dará os primeiros 4 canais de cor. Próximo a ele está&nbsp;MixColor B. Este é o próximo conjunto de 4 canais.</p>

<p>Aqui você pode alterar o valor na tela ou pelo encoder.</p>

<p>Quando temos outros fixtures com menos opções de cores, ele pode continuar mostrando os faders&nbsp;raw color, mas se a cor não estiver disponível, então o Fader diz que "Não há fixture correspondente selecionado".</p>

<p>&nbsp;</p>

<p>Essas são as diferentes maneiras que podemos controlar as cores.</p>

<p>O próximo capítulo será sobre algo chamado "Presets".</p>


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
		<input id="CurrentGuid" name="CurrentGuid" type="hidden" value="ba0f3294-91ba-4c5d-9fff-154e31ac12b3">
	</span>
</form></div>&nbsp;	</span>
	<span class="pull-right" style="white-space: nowrap;">
			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/GSG_11_AddingLedFixtures/pt/1.2'; " title="Go to previous page '11 - Adicionando fixtures de LED'">
				<i class="icon-arrow-left"></i> previous
			</button>

			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/GSG_13_CreatingPresets/pt/1.2';" title="Go to next page '13 - Criando Presets'">
				next <i class="icon-arrow-right"></i> 
			</button>
	</span>
</div>
	<div class="clear-fix"></div>
	<div class="pull-right">
	
			<button class="btn btn-mini" onclick="location.href='/Media/TopicPdf/17739/7';" title="Open/Save this topic as PDF document for viewing or printing">
				<img src="/Content/images/icons/filetype_pdf.png"> Open topic as PDF
			</button>
	</div>
<div class="clear-fix" style="margin-bottom: 10px"></div>
</div>

	
