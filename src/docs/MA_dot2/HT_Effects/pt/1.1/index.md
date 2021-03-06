---
originalUrl: 'https://help2.malighting.com/Page/MA_dot2/HT_Effects/pt/1.1'
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
		<input id="CurrentGuid" name="CurrentGuid" type="hidden" value="2457c63d-dd11-4171-b366-db5a6453f23d">
	</span>
</form></div>&nbsp;	</span>
	<span class="pull-right" style="white-space: nowrap;">
			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/HT_Chasers/pt/1.1'; " title="Go to previous page 'Trabalhar com Chasers'">
				<i class="icon-arrow-left"></i> previous
			</button>

			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/HT_WingsNodes3DOnPC/pt/1.1';" title="Go to next page 'Conectar nodes, wings, 3D e onPC'">
				next <i class="icon-arrow-right"></i> 
			</button>
	</span>
</div>
<div class="clear-fix" style="margin-bottom: 10px"></div>
</div>

					<div class="infobox"><b>Hint:</b><br><b>New help version</b><br>The help version you selected belongs to an older software version. <a href="/Topic/SetCurrentVersionNumber/29/2457c63d-dd11-4171-b366-db5a6453f23d">You may want to view the latest help version.</a></div>

			<div class="pull-right">
					<button class="btn btn-mini" style="margin-right: 10px; height: 30px;" onclick="location.href = '/Media/TopicPdf/13016/3'; " title="Open/Save this topic as PDF document for viewing or printing">
						<img src="/Content/images/icons/filetype_pdf.png" style="height: 24px;"> Open topic as PDF
					</button>
				<span class="badge badge-info">Version 1.1</span>
			</div>
		<h1>Como Trabalhar com Efeitos</h1>

			<div class="topic-table-of-contents">
				<h2>Table of contents of this topic</h2>
				<div class="topic-toc-toggler topic-toc-toggler-hide"><a href="#" onclick="$('.topic-toc-ul').toggle(); $('.topic-toc-toggler-hide').hide(); $('.topic-toc-toggler-show').show(); return false;">hide</a></div>
				<div class="topic-toc-toggler topic-toc-toggler-show" style="display: none;"><a href="#" onclick="$('.topic-toc-ul').toggle(); $('.topic-toc-toggler-hide').show(); $('.topic-toc-toggler-show').hide(); return false;">show</a></div>
				<ul class="topic-toc-ul">
						<li>
							<a href="#toc_header_anchor_1">Teoria de Efeito&nbsp;</a>
						</li>
						<li>
							<a href="#toc_header_anchor_2">Construa um efeito em seu programador</a>
						</li>
						<li>
							<a href="#toc_header_anchor_3">Armazenar um Efeito</a>
						</li>
						<li>
							<a href="#toc_header_anchor_4">Parar um Efeito</a>
						</li>
						<li>
							<a href="#toc_header_anchor_5">Pegar efeitos em execu????o</a>
						</li>
				</ul>
			</div>

		<a name="toc_header_anchor_1" id="toc_header_anchor_1" class="topic-toc-item"></a><h2>Teoria de Efeito&nbsp;</h2>

<p>Os efeitos s??o a transi????o din??mica de um valor para outro. Ele sempre se move entre dois valores - e apenas dois. N??s podemos controlar a forma como ele deve ir de um valor para o outro, podemos controlar a velocidade e quando todos os fixtures devem fazer isso ao mesmo tempo ou quando eles devem ser distribu??dos ao longo do tempo de looping.</p>

<p>Cada um dos diferentes Tipos de Preset tem alguns efeitos predefinidos que voc?? pode modificar.</p>

<p>Todos os diferentes valores de efeitos s??o valores do programador que voc?? pode armazenar em cues. Este ?? o ??nico lugar que pode reproduzir efeitos.</p>

<p>Vamos examinar algumas dessas configura????es. Vamos come??ar com os dois valores. Na barra de t??tulo azul de efeito, voc?? vai encontrar dois bot??es chamados <span class="softkey">Valor Baixo</span> e <span class="softkey">Valor Alto</span>. Eles s??o usados para acessar e alterar esses valores.</p>

<p>Alguns efeitos podem usar uma Largura e Suavidade.</p>

<p>Para saber mais sobre o que s??o os efeitos, por favor d?? uma olhada nas p??ginas de ajuda&nbsp;<a href="/Topic/ca034c9c-6b13-4948-8e83-c6e4f2ff4d21">O que s??o Efeitos</a>&nbsp;e na&nbsp;<a href="/Topic/0e539790-291a-4be0-be05-8f3e8d81c0eb">Vista de Efeitos</a>.</p>

<a name="toc_header_anchor_2" id="toc_header_anchor_2" class="topic-toc-item"></a><h2>Construa um efeito em seu programador</h2>

<p>Para construir um efeito em seu programador voc?? precisa selecionar os fixtures que pretendem utilizar o efeito, e voc?? precisa selecionar o Tipo de Preset&nbsp;que deseja que o efeito use. Em seguida, na barra de t??tulo do tipo de preset, toque no ??cone de efeitos&nbsp;<img alt="" src="/Media/Image/Dot2_ViewsandWindows_ControlElements_TitleBar17_1-0.PNG">&nbsp;- ou pressione a tecla <span class="hardkey">Effect</span>.</p>

<p>Isso abre a vista de efeitos para o&nbsp;Tipo de Preset selecionado.</p>

<p>Agora voc?? pode selecionar um dos modelos de efeito predefinido para o tipo de preset que voc?? selecionou (n??o "Off" ou "Stomp") - n??o h?? nenhum efeito para Control, Shaper e Video, ent??o por favor selecione alguma outra coisa.</p>

<p>O encoder esquerdo pode ser utilizado para ajustar a valor "Alto" e "Baixo". Voc?? tamb??m pode ajust??-los tocando nos respectivos bot??es na barra de t??tulo. Voc?? pode usar presets como os valores.</p>

<p>O encoder central esquerdo controla a velocidade do efeito. Um n??mero mais alto faz com que o efeito seja executado mais r??pido.</p>

<p>O encoder central direito controla a Fase. Esta ?? a difus??o dos fixtures ao longo do tempo do loop de efeito c??clico. Se h?? um valor aqui, ent??o todos os seus&nbsp;fixtures&nbsp;est??o ao mesmo tempo no ciclo de looping. E o resultado ?? que todos eles est??o mudando juntos. Mesmo que voc?? gire o encoder agora, nada realmente parece acontecer. Isso ocorre porque todos os fixtures ainda est??o no mesmo ponto no loop, estamos apenas movendo onde o loop&nbsp;est??. Se voc?? quer espalhar todos os fixtures&nbsp;uniformemente no ciclo, ent??o eles precisam ter uma fase de 0 a 360 graus. Se voc?? pressionar o encoder, ent??o voc?? pode ver algumas predefini????es. Um ?? chamado de <span class="softkey">0..360</span> e h?? um chamado <span class="softkey">0..-360</span>. Voc?? pode usar estes dois para espalhar uniformemente seus fixtures no loop. A diferen??a ?? a dire????o do efeito. A terceira fase predefinida ?? &nbsp;<span class="softkey">Espelho (0...360...0)</span>&nbsp;isso dividir?? sua sele????o em duas e far?? o efeito se executar no estilo wing ou espelho. Voc?? tamb??m pode digitar, por exemplo &nbsp;<span class="syntax">0&nbsp;Thru&nbsp;180</span>&nbsp;ou&nbsp;<span class="syntax">-360&nbsp;thru&nbsp;0&nbsp;thru&nbsp;-360</span>. Isso tamb??m podem ser feitos usando os diferentes modos da tecla Align em combina????o com o giro do encoder. Brinque com isso e tamb??m tentar ultrapassar o n??mero 360.</p>

<p>H?? muitos efeitos chamados &nbsp;"Soft" ou "Hard". Estes efeitos ir??o mudar entre os valores alto e baixo ou com uma curva soft (sinus) ou hard (PWM). Muitas vezes voc?? pode ajustar isso usando o encoder da direita enquanto voc?? pressionar a tecla&nbsp;<span class="hardkey"><img alt="ma" src="/Media/Mlg/ma_1.png"></span>&nbsp;.</p>

<p>Dimmer e efeitos de cor muitas vezes podem ser ajustados na largura. A largura controla quantos de seus fixtures selecionados est??o usando o valor "Alto" e quantos est??o usando o valor "Baixo". A Largura pode ser ajustada no encoder&nbsp;da direita (sem pressionar a tecla&nbsp;<span class="hardkey"><img alt="ma" src="/Media/Mlg/ma_1.png"></span>&nbsp;). Tocando no encoder&nbsp;voc?? ter?? acesso a alguns valores predefinidos chamados <span class="softkey">Um</span>, <span class="softkey">Dois</span> ou <span class="softkey">Tr??s</span>. Eles podem ser usados para definir a quantidade de fixtures utilizando o valor Alto.</p>

<a name="toc_header_anchor_3" id="toc_header_anchor_3" class="topic-toc-item"></a><h2>Armazenar um Efeito</h2>

<p>Depois de ter constru??do o efeito a seu gosto, voc?? pode armazen??-lo. Voc?? pode armazen??-lo em um cue existente ou voc?? pode armazen??-lo em um novo cue.</p>

<p>Os efeitos ir??o come??ar quando voc?? executar o cue, e ele vai desaparecer usando o tempo de fade do cue.</p>

<a name="toc_header_anchor_4" id="toc_header_anchor_4" class="topic-toc-item"></a><h2>Parar um Efeito</h2>

<p>Voc?? pode parar um efeito que est?? sendo executado em um cue&nbsp;parando um executor, ou voc?? pode programar um cue onde ele para.</p>

<p>Para programar um cue onde os efeitos param voc?? precisa ter alguns valores de "stop" ativos em seu programador. N??s usamos um efeito especial chamado "Stomp" para parar a valores de efeitos.</p>

<p>Selecione o fixture no qual voc?? deseja parar de executar um efeito e selecione o Tipo de&nbsp;Preset&nbsp;do efeito em execu????o. Agora, abra o editor de efeitos pressionando a tecla <span class="hardkey">Effect</span>. Aqui voc?? pode tocar no bot??o <span class="softkey">Stomp</span>. N??o toque no bot??o Off. Isso s?? vai tirar valores do seu programador. Ele n??o vai parar o seu efeito. Voc?? precisa ter o valor Stomp em seu programador e armazen??-lo como um cue ap??s aquele em que o efeito ?? iniciado.</p>

<p>Se voc?? n??o tiver nenhum fixture&nbsp;selecionado quando voc?? tocar em&nbsp;Stomp, ent??o voc?? est?? parando todos os fixtures que utilizam um efeito nesse tipo de preset.</p>

<p>Efeitos v??o parar de usar o tempo de fade no cue.</p>

<a name="toc_header_anchor_5" id="toc_header_anchor_5" class="topic-toc-item"></a><h2>Pegar efeitos em execu????o</h2>

<p>Se voc?? necessita pegar um efeito de um cue e armazen??-lo em um novo cue, ent??o voc?? precisa ter um cue&nbsp;"source" em execu????o - poderia ser em preview&nbsp;(<a href="/Topic/9cc33d25-5cfa-426c-95dc-a43a03672f2f">o que s??o preview e blind</a>) - selecione os fixtures que executam o efeito e ative o tipo de preset que est?? executando o efeito. Agora voc?? tem esses valores de efeitos em seu programador e pode armazen??-lo em outro lugar.</p>


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
		<input id="CurrentGuid" name="CurrentGuid" type="hidden" value="2457c63d-dd11-4171-b366-db5a6453f23d">
	</span>
</form></div>&nbsp;	</span>
	<span class="pull-right" style="white-space: nowrap;">
			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/HT_Chasers/pt/1.1'; " title="Go to previous page 'Trabalhar com Chasers'">
				<i class="icon-arrow-left"></i> previous
			</button>

			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/HT_WingsNodes3DOnPC/pt/1.1';" title="Go to next page 'Conectar nodes, wings, 3D e onPC'">
				next <i class="icon-arrow-right"></i> 
			</button>
	</span>
</div>
	<div class="clear-fix"></div>
	<div class="pull-right">
	
			<button class="btn btn-mini" onclick="location.href='/Media/TopicPdf/13016/3';" title="Open/Save this topic as PDF document for viewing or printing">
				<img src="/Content/images/icons/filetype_pdf.png"> Open topic as PDF
			</button>
	</div>
<div class="clear-fix" style="margin-bottom: 10px"></div>
</div>

	
