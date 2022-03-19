
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
		<input id="CurrentGuid" name="CurrentGuid" type="hidden" value="ca034c9c-6b13-4948-8e83-c6e4f2ff4d21">
	</span>
</form></div>&nbsp;	</span>
	<span class="pull-right" style="white-space: nowrap;">
			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/WI_Chasers/pt/1.2'; " title="Go to previous page 'Chasers'">
				<i class="icon-arrow-left"></i> previous
			</button>

			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/WA_PreviewAndBlind/pt/1.2';" title="Go to next page 'Preview and Blind'">
				next <i class="icon-arrow-right"></i> 
			</button>
	</span>
</div>
<div class="clear-fix" style="margin-bottom: 10px"></div>
</div>

					<div class="infobox"><b>Hint:</b><br><b>New help version</b><br>The help version you selected belongs to an older software version. <a href="/Topic/SetCurrentVersionNumber/29/ca034c9c-6b13-4948-8e83-c6e4f2ff4d21">You may want to view the latest help version.</a></div>

			<div class="pull-right">
					<button class="btn btn-mini" style="margin-right: 10px; height: 30px;" onclick="location.href = '/Media/TopicPdf/12813/7'; " title="Open/Save this topic as PDF document for viewing or printing">
						<img src="/Content/images/icons/filetype_pdf.png" style="height: 24px;"> Open topic as PDF
					</button>
				<span class="badge badge-info">Version 1.2</span>
			</div>
		<h1>O que são Efeitos</h1>

			<div class="topic-table-of-contents">
				<h2>Table of contents of this topic</h2>
				<div class="topic-toc-toggler topic-toc-toggler-hide"><a href="#" onclick="$('.topic-toc-ul').toggle(); $('.topic-toc-toggler-hide').hide(); $('.topic-toc-toggler-show').show(); return false;">hide</a></div>
				<div class="topic-toc-toggler topic-toc-toggler-show" style="display: none;"><a href="#" onclick="$('.topic-toc-ul').toggle(); $('.topic-toc-toggler-hide').show(); $('.topic-toc-toggler-show').hide(); return false;">show</a></div>
				<ul class="topic-toc-ul">
						<li>
							<a href="#toc_header_anchor_1">Valor Alto / Baixo</a>
						</li>
						<li>
							<a href="#toc_header_anchor_2">Velocidade</a>
						</li>
						<li>
							<a href="#toc_header_anchor_3">Fase</a>
						</li>
						<li>
							<a href="#toc_header_anchor_4">Largura</a>
						</li>
						<li>
							<a href="#toc_header_anchor_5">Fade</a>
						</li>
				</ul>
			</div>

		<p>Efeitos na&nbsp;dot2 são atributos que mudam dinamicamente entre dois valores. A dot2 vem com um conjunto de efeitos embutidos que você pode modificar.</p>

<p>Os efeitos são executados nos diferentes tipos de preset. Você ainda não pode fazer efeitos sobre os tipos de preset&nbsp;de Controle, Shapers e Vídeo.</p>

<p>Os efeitos são armazenados nos cues. Quando você precisa parar um efeito, você precisa "Stomp" o efeito. Stomp é o que usamos para dizer ao console para parar o efeito em que escolhemos para stomp. Isso pode ser fixtures&nbsp;ou tipos de preset.</p>

<p>Off é geralmente usado para remover valores de nosso programador.</p>

<p>Efeitos são executados em um ciclo de&nbsp;loop. Ele altera entre valores Altos e Baixos.</p>

<p>Normalmente você seleciona algum fixture, então você seleciona o tipo de preset que você quer que os efeitos executem e, em seguida, pressiona a tecla <span class="hardkey">Effect</span>. Agora você pode escolher alguns dos efeitos pré-definidos.</p>

<p>Você pode ter vários efeitos sendo executados e se você precisar deles para estar em sincronia, você pode tocar no botão <span class="softkey">Sync</span>.</p>

<p>Se você quiser que os seus efeitos pareçam mais aleatórios, toque no botão&nbsp;<span class="softkey">Seleção Aleatória</span>.</p>

<p>&nbsp;</p>

<p>A seguir, uma breve descrição dos diferentes valores que você pode ajustar.</p>

<a name="toc_header_anchor_1" id="toc_header_anchor_1" class="topic-toc-item"></a><h2>Valor Alto / Baixo</h2>

<p>Os efeitos estão se movendo entre dois valores. Chamados de Alto e Baixo.</p>

<a name="toc_header_anchor_2" id="toc_header_anchor_2" class="topic-toc-item"></a><h2>Velocidade</h2>

<p>O quão rápido o seu efeito é executado é definido por um parâmetro de velocidade. Isso é medido em Batimentos Por Minuto (BPM).&nbsp;A velocidade também é afetada pelo master especial Velocidade Master - se está ativo e ligou para o executor onde você armazenou o efeito.</p>

<a name="toc_header_anchor_3" id="toc_header_anchor_3" class="topic-toc-item"></a><h2>Fase</h2>

<p>Fase é o que também pode ser chamado de distribuição. É aqui que podemos espalhar os fixtures&nbsp;ao longo do ciclo do efeito.</p>

<p>Se todos seus fixtures tiverem o mesmo número em fase, então todos eles estarão no mesmo lugar no ciclo.</p>

<p>Nesta imagem há seis fixtures, todos no ponto verde na forma sinuosa:</p>

<p><img alt="" src="/Media/Image/WI_Effect_Phase_01_1-0.png"></p>

<p>Se espalhássemos&nbsp;uniformemente, eles ficariam assim:</p>

<p><img alt="" src="/Media/Image/WI_Effect_Phase_02_1-0.png"></p>

<p>Cada ponto verde é um fixture. Isso está utilizando uma das fases predefinidas chamada "0..360".</p>

<p>Você pode criar looks&nbsp;e agrupamentos pressionando a tecla <span class="hardkey">Align</span> e então, continue girando o encoder em uma direção. Quando você tiver valores na Fase com grande separação, você pode criar looks interessantes.</p>

<p>A função <strong>Align &lt;&gt;</strong> pode ser usada para criar efeitos "espelhados".</p>

<a name="toc_header_anchor_4" id="toc_header_anchor_4" class="topic-toc-item"></a><h2>Largura</h2>

<p>Em alguns efeitos, faz muito sentido ajustar a largura. Geralmente é um ajuste entre os fixtures que estão em um valor Alto e os que estão em um valor Baixo.</p>

<a name="toc_header_anchor_5" id="toc_header_anchor_5" class="topic-toc-item"></a><h2>Fade</h2>

<p>Em alguns efeitos, você pode ajustar a forma como os fixtures&nbsp;devem mudar para mais suave ou mais forte entre os valores Alto e Baixo. Quanto maior for a suavidade mais visível será o fade.</p>

<p>&nbsp;</p>

<p>Se você gostaria de dar uma olhada em como criar e usar efeitos, por favor, leia&nbsp;<a href="/Topic/2457c63d-dd11-4171-b366-db5a6453f23d">Como Trabalhar com Efeitos</a>.</p>


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
		<input id="CurrentGuid" name="CurrentGuid" type="hidden" value="ca034c9c-6b13-4948-8e83-c6e4f2ff4d21">
	</span>
</form></div>&nbsp;	</span>
	<span class="pull-right" style="white-space: nowrap;">
			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/WI_Chasers/pt/1.2'; " title="Go to previous page 'Chasers'">
				<i class="icon-arrow-left"></i> previous
			</button>

			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/WA_PreviewAndBlind/pt/1.2';" title="Go to next page 'Preview and Blind'">
				next <i class="icon-arrow-right"></i> 
			</button>
	</span>
</div>
	<div class="clear-fix"></div>
	<div class="pull-right">
	
			<button class="btn btn-mini" onclick="location.href='/Media/TopicPdf/12813/7';" title="Open/Save this topic as PDF document for viewing or printing">
				<img src="/Content/images/icons/filetype_pdf.png"> Open topic as PDF
			</button>
	</div>
<div class="clear-fix" style="margin-bottom: 10px"></div>
</div>

	