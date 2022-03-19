
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
							<a href="#toc_header_anchor_5">Pegar efeitos em execução</a>
						</li>
				</ul>
			</div>

		<a name="toc_header_anchor_1" id="toc_header_anchor_1" class="topic-toc-item"></a><h2>Teoria de Efeito&nbsp;</h2>

<p>Os efeitos são a transição dinâmica de um valor para outro. Ele sempre se move entre dois valores - e apenas dois. Nós podemos controlar a forma como ele deve ir de um valor para o outro, podemos controlar a velocidade e quando todos os fixtures devem fazer isso ao mesmo tempo ou quando eles devem ser distribuídos ao longo do tempo de looping.</p>

<p>Cada um dos diferentes Tipos de Preset tem alguns efeitos predefinidos que você pode modificar.</p>

<p>Todos os diferentes valores de efeitos são valores do programador que você pode armazenar em cues. Este é o único lugar que pode reproduzir efeitos.</p>

<p>Vamos examinar algumas dessas configurações. Vamos começar com os dois valores. Na barra de título azul de efeito, você vai encontrar dois botões chamados <span class="softkey">Valor Baixo</span> e <span class="softkey">Valor Alto</span>. Eles são usados para acessar e alterar esses valores.</p>

<p>Alguns efeitos podem usar uma Largura e Suavidade.</p>

<p>Para saber mais sobre o que são os efeitos, por favor dê uma olhada nas páginas de ajuda&nbsp;<a href="/Topic/ca034c9c-6b13-4948-8e83-c6e4f2ff4d21">O que são Efeitos</a>&nbsp;e na&nbsp;<a href="/Topic/0e539790-291a-4be0-be05-8f3e8d81c0eb">Vista de Efeitos</a>.</p>

<a name="toc_header_anchor_2" id="toc_header_anchor_2" class="topic-toc-item"></a><h2>Construa um efeito em seu programador</h2>

<p>Para construir um efeito em seu programador você precisa selecionar os fixtures que pretendem utilizar o efeito, e você precisa selecionar o Tipo de Preset&nbsp;que deseja que o efeito use. Em seguida, na barra de título do tipo de preset, toque no ícone de efeitos&nbsp;<img alt="" src="/Media/Image/Dot2_ViewsandWindows_ControlElements_TitleBar17_1-0.PNG">&nbsp;- ou pressione a tecla <span class="hardkey">Effect</span>.</p>

<p>Isso abre a vista de efeitos para o&nbsp;Tipo de Preset selecionado.</p>

<p>Agora você pode selecionar um dos modelos de efeito predefinido para o tipo de preset que você selecionou (não "Off" ou "Stomp") - não há nenhum efeito para Control, Shaper e Video, então por favor selecione alguma outra coisa.</p>

<p>O encoder esquerdo pode ser utilizado para ajustar a valor "Alto" e "Baixo". Você também pode ajustá-los tocando nos respectivos botões na barra de título. Você pode usar presets como os valores.</p>

<p>O encoder central esquerdo controla a velocidade do efeito. Um número mais alto faz com que o efeito seja executado mais rápido.</p>

<p>O encoder central direito controla a Fase. Esta é a difusão dos fixtures ao longo do tempo do loop de efeito cíclico. Se há um valor aqui, então todos os seus&nbsp;fixtures&nbsp;estão ao mesmo tempo no ciclo de looping. E o resultado é que todos eles estão mudando juntos. Mesmo que você gire o encoder agora, nada realmente parece acontecer. Isso ocorre porque todos os fixtures ainda estão no mesmo ponto no loop, estamos apenas movendo onde o loop&nbsp;está. Se você quer espalhar todos os fixtures&nbsp;uniformemente no ciclo, então eles precisam ter uma fase de 0 a 360 graus. Se você pressionar o encoder, então você pode ver algumas predefinições. Um é chamado de <span class="softkey">0..360</span> e há um chamado <span class="softkey">0..-360</span>. Você pode usar estes dois para espalhar uniformemente seus fixtures no loop. A diferença é a direção do efeito. A terceira fase predefinida é &nbsp;<span class="softkey">Espelho (0...360...0)</span>&nbsp;isso dividirá sua seleção em duas e fará o efeito se executar no estilo wing ou espelho. Você também pode digitar, por exemplo &nbsp;<span class="syntax">0&nbsp;Thru&nbsp;180</span>&nbsp;ou&nbsp;<span class="syntax">-360&nbsp;thru&nbsp;0&nbsp;thru&nbsp;-360</span>. Isso também podem ser feitos usando os diferentes modos da tecla Align em combinação com o giro do encoder. Brinque com isso e também tentar ultrapassar o número 360.</p>

<p>Há muitos efeitos chamados &nbsp;"Soft" ou "Hard". Estes efeitos irão mudar entre os valores alto e baixo ou com uma curva soft (sinus) ou hard (PWM). Muitas vezes você pode ajustar isso usando o encoder da direita enquanto você pressionar a tecla&nbsp;<span class="hardkey"><img alt="ma" src="/Media/Mlg/ma_1.png"></span>&nbsp;.</p>

<p>Dimmer e efeitos de cor muitas vezes podem ser ajustados na largura. A largura controla quantos de seus fixtures selecionados estão usando o valor "Alto" e quantos estão usando o valor "Baixo". A Largura pode ser ajustada no encoder&nbsp;da direita (sem pressionar a tecla&nbsp;<span class="hardkey"><img alt="ma" src="/Media/Mlg/ma_1.png"></span>&nbsp;). Tocando no encoder&nbsp;você terá acesso a alguns valores predefinidos chamados <span class="softkey">Um</span>, <span class="softkey">Dois</span> ou <span class="softkey">Três</span>. Eles podem ser usados para definir a quantidade de fixtures utilizando o valor Alto.</p>

<a name="toc_header_anchor_3" id="toc_header_anchor_3" class="topic-toc-item"></a><h2>Armazenar um Efeito</h2>

<p>Depois de ter construído o efeito a seu gosto, você pode armazená-lo. Você pode armazená-lo em um cue existente ou você pode armazená-lo em um novo cue.</p>

<p>Os efeitos irão começar quando você executar o cue, e ele vai desaparecer usando o tempo de fade do cue.</p>

<a name="toc_header_anchor_4" id="toc_header_anchor_4" class="topic-toc-item"></a><h2>Parar um Efeito</h2>

<p>Você pode parar um efeito que está sendo executado em um cue&nbsp;parando um executor, ou você pode programar um cue onde ele para.</p>

<p>Para programar um cue onde os efeitos param você precisa ter alguns valores de "stop" ativos em seu programador. Nós usamos um efeito especial chamado "Stomp" para parar a valores de efeitos.</p>

<p>Selecione o fixture no qual você deseja parar de executar um efeito e selecione o Tipo de&nbsp;Preset&nbsp;do efeito em execução. Agora, abra o editor de efeitos pressionando a tecla <span class="hardkey">Effect</span>. Aqui você pode tocar no botão <span class="softkey">Stomp</span>. Não toque no botão Off. Isso só vai tirar valores do seu programador. Ele não vai parar o seu efeito. Você precisa ter o valor Stomp em seu programador e armazená-lo como um cue após aquele em que o efeito é iniciado.</p>

<p>Se você não tiver nenhum fixture&nbsp;selecionado quando você tocar em&nbsp;Stomp, então você está parando todos os fixtures que utilizam um efeito nesse tipo de preset.</p>

<p>Efeitos vão parar de usar o tempo de fade no cue.</p>

<a name="toc_header_anchor_5" id="toc_header_anchor_5" class="topic-toc-item"></a><h2>Pegar efeitos em execução</h2>

<p>Se você necessita pegar um efeito de um cue e armazená-lo em um novo cue, então você precisa ter um cue&nbsp;"source" em execução - poderia ser em preview&nbsp;(<a href="/Topic/9cc33d25-5cfa-426c-95dc-a43a03672f2f">o que são preview e blind</a>) - selecione os fixtures que executam o efeito e ative o tipo de preset que está executando o efeito. Agora você tem esses valores de efeitos em seu programador e pode armazená-lo em outro lugar.</p>


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

	