---
originalUrl: 'https://help2.malighting.com/Page/MA_dot2/Widget_ExecutorLabelBar/pt/1.2'
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
		<input id="CurrentGuid" name="CurrentGuid" type="hidden" value="af87cdc8-b54b-41ee-b614-26065230c7ec">
	</span>
</form></div>&nbsp;	</span>
	<span class="pull-right" style="white-space: nowrap;">
			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/Widget_EncoderBar/pt/1.2'; " title="Go to previous page 'Barra de Encoder'">
				<i class="icon-arrow-left"></i> previous
			</button>

			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/Widget_PresetTypeBar/pt/1.2';" title="Go to next page 'Barra de Tipo de Preset'">
				next <i class="icon-arrow-right"></i> 
			</button>
	</span>
</div>
<div class="clear-fix" style="margin-bottom: 10px"></div>
</div>

					<div class="infobox"><b>Hint:</b><br><b>New help version</b><br>The help version you selected belongs to an older software version. <a href="/Topic/SetCurrentVersionNumber/29/af87cdc8-b54b-41ee-b614-26065230c7ec">You may want to view the latest help version.</a></div>

			<div class="pull-right">
					<button class="btn btn-mini" style="margin-right: 10px; height: 30px;" onclick="location.href = '/Media/TopicPdf/17753/7'; " title="Open/Save this topic as PDF document for viewing or printing">
						<img src="/Content/images/icons/filetype_pdf.png" style="height: 24px;"> Open topic as PDF
					</button>
				<span class="badge badge-info">Version 1.2</span>
			</div>
		<h1>Barra do Executor</h1>

			<div class="topic-table-of-contents">
				<h2>Table of contents of this topic</h2>
				<div class="topic-toc-toggler topic-toc-toggler-hide"><a href="#" onclick="$('.topic-toc-ul').toggle(); $('.topic-toc-toggler-hide').hide(); $('.topic-toc-toggler-show').show(); return false;">hide</a></div>
				<div class="topic-toc-toggler topic-toc-toggler-show" style="display: none;"><a href="#" onclick="$('.topic-toc-ul').toggle(); $('.topic-toc-toggler-hide').show(); $('.topic-toc-toggler-show').hide(); return false;">show</a></div>
				<ul class="topic-toc-ul">
						<li>
							<a href="#toc_header_anchor_1">Executor Principal</a>
						</li>
						<li>
							<a href="#toc_header_anchor_2">Fader Executor</a>
						</li>
						<li>
							<a href="#toc_header_anchor_3">Executor Normal</a>
						</li>
				</ul>
			</div>

		<p>A&nbsp;<strong>Barra do Executor</strong>&nbsp;est?? sempre vis??vel na parte de baixo da tela 2 e em todas as outras telas da wing.</p>

<p><img alt="" src="/Media/Image/Dot2_ViewsandWindows_ControlElements_ExecutorBar01_1-2.png">&nbsp;<em>Figura 1: P??gina 1 da Barra do Executor</em></p>

<p>A barra do executor exibe informa????es sobre o executor armazenado.</p>

<p>A parte superior da barra do executor exibe a p??gina atual e se um executor ?? fixado a partir de outra p??gina. Para desligar autofix global, consulte&nbsp;<a href="/Topic/13f3b4a4-bfc6-4893-9a29-b9e5c3a404ad">janela configura????es globais</a>.</p>

<p><img alt="" src="/Media/Image/Dot2_ViewsandWindows_ControlElements_ExecutorBar02_1-2.png">&nbsp;<em>Figura 2: P??gina 2 da Barra do Executor com executores fixados???</em></p>

<p>O executor pode ter at?? 999 p??ginas.</p>

<p>Para mudar de p??ginas: Pressione&nbsp;<span class="hardkey">Page +</span> ou&nbsp;<span class="hardkey">Page -</span>.</p>

<p>A&nbsp;<a href="/Topic/581eb40a-40db-4a6f-90ec-1a31d96acbcc">cor do executor</a>&nbsp;exibe que tipo de executor ele ??.</p>

<p>O barra do executor est?? fragmentada no executor principal (?? direita), 12 bot??es executores normais (as primeiras duas linhas) e 6 bot??es de&nbsp;fader executor (linha de baixo).</p>

<p>Se voc?? armazenar um cue em um executor, o console pede para etiquetar o executor.<br>
Se voc?? n??o tocar no pop-up para etiquetar, o executor ser?? chamado <strong>Exec</strong>.</p>

<p>A barra azul mostra o tempo de fade de um cue de 0% a 100%.</p>

<p>&nbsp;Se um&nbsp;timecode record&nbsp;estiver sendo executado para um executor, o ??cone vermelho&nbsp;<img alt="" src="/Media/Image/Dot2_ViewsandWindows_CuesView05_1-1-3.png">&nbsp;piscando estar?? dispon??vel.</p>

<p>A posi????o de um hardware fader ?? diferente para a posi????o no software, uma pequena barra de fader exibe a posi????o do fader no software. Voc?? precisa pegar o fader de hardware e traz??-lo ?? sua posi????o de software.<br>
O executor principal mostra tamb??m os faders, se um dos faders de hardware n??o est?? na posi????o correta.</p>

<p>Para ver o n??mero do executor e o ??cone de fader, pressione e segure&nbsp;<span class="hardkey"><img alt="ma" src="/Media/Mlg/ma_1.png"></span>. Para mais informa????es sobre os ??cones de fader e suas fun????es, consulte <a href="/Topic/7cf5839e-a357-48d3-b077-bf7f682606db">Selecionar Fun????o do Executor</a>.</p>

<figure class="caption"><img alt="" src="/Media/Image/Dot2_ViewsandWindows_ControlElements_ExecutorBar16_1-2.png">
<figcaption><em>Figura 3: Barra do Executor&nbsp;com a tecla&nbsp;MA pressionada</em></figcaption>
</figure>

<p>Para abrir a <a href="/Topic/d8ca000e-cf13-448d-ac3e-129272e731d8">janela da barra do executor</a>, toque na barra do executor.</p>

<a name="toc_header_anchor_1" id="toc_header_anchor_1" class="topic-toc-item"></a><h2>Executor Principal</h2>

<p>Mais ?? direita da barra do executor, ?? exibido o executor principal, juntamente com os dois faders de 100 mm.</p>

<p><img alt="" src="/Media/Image/Dot2_ViewsandWindows_ControlElements_ExecutorBar13_1-2.png">&nbsp;<em>Figura 4: Executor Principal Ligado</em></p>

<p><img alt="" src="/Media/Image/Dot2_ViewsandWindows_ControlElements_ExecutorBar12_1-2.png">&nbsp;<em>Figura 5: Executor Principal Desligado</em></p>

<p>Primeiramente ?? o exibido o&nbsp;<a href="/Topic/4bdf0092-9184-4d12-bcf4-42b7a49ef170">??cone de trigger</a>, e depois o n??mero do&nbsp;cue junto com o nome do cue.</p>

<p>A primeira barra de&nbsp;fader mostra a posi????o do fader master e a segunda do XFader.</p>

<p>O cue atual ?? exibido na segunda linha, assim, o cue anterior e o seguinte ficam vis??veis.</p>

<p>Se o executor est?? ligado, o bot??o executor fica real??ado e o cue atual ?? exibido na segunda linha em branco.</p>

<p>Se o executor est?? desligado, na segunda linha h?? um <strong>[Off]</strong> sendo exibido.</p>

<a name="toc_header_anchor_2" id="toc_header_anchor_2" class="topic-toc-item"></a><h2>Fader Executor</h2>

<p>Na linha inferior da barra de executor est??o os seus faders executores.</p>

<p><img alt="" src="/Media/Image/Dot2_ViewsandWindows_ControlElements_ExecutorBar14_1-0.PNG"> <em>Figura 6:&nbsp;</em><em>Linha inferior da barra do executor exibe os faders executores.</em></p>

<p>Primeiramente h?? dois&nbsp;<a href="/Topic/4bdf0092-9184-4d12-bcf4-42b7a49ef170">??cones do executor</a> vis??veis para o bot??o executor respectivo no console, e o nome do executor.</p>

<p>Se um executor ?? atribu??do com uma lista de cue, o n??mero de cue ?? exibido.</p>

<a name="toc_header_anchor_3" id="toc_header_anchor_3" class="topic-toc-item"></a><h2>Executor Normal</h2>

<p>As duas primeiras linhas do barra do executor exibem os executores normais.</p>

<p><img alt="" src="/Media/Image/Dot2_ViewsandWindows_ControlElements_ExecutorBar15_1-0.PNG"> <em>Figura 7: Primeiras duas linhas da barra do executor exibe os executores normais</em></p>

<p>Primeiramente est?? o&nbsp;<a href="/Topic/4bdf0092-9184-4d12-bcf4-42b7a49ef170">??cone do executor</a> vis??vel para o bot??o executor respectivo no console, e o nome do executor.</p>

<p>Se um executor ?? atribu??do com uma lista de&nbsp;cue, o n??mero de&nbsp;cue&nbsp;?? exibido.</p>

<a name="toc_header_anchor_4" id="toc_header_anchor_4" class="topic-toc-item"></a><h2>Links Relacionados</h2>

<ul>
	<li><a href="/Topic/581eb40a-40db-4a6f-90ec-1a31d96acbcc">Cores do Sistema - Barra do Executor</a></li>
	<li><a href="/Topic/d0a671eb-91c4-45b5-bba6-aa5138f0e343">O que s??o Cues?</a></li>
</ul>


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
		<input id="CurrentGuid" name="CurrentGuid" type="hidden" value="af87cdc8-b54b-41ee-b614-26065230c7ec">
	</span>
</form></div>&nbsp;	</span>
	<span class="pull-right" style="white-space: nowrap;">
			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/Widget_EncoderBar/pt/1.2'; " title="Go to previous page 'Barra de Encoder'">
				<i class="icon-arrow-left"></i> previous
			</button>

			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/Widget_PresetTypeBar/pt/1.2';" title="Go to next page 'Barra de Tipo de Preset'">
				next <i class="icon-arrow-right"></i> 
			</button>
	</span>
</div>
	<div class="clear-fix"></div>
	<div class="pull-right">
	
			<button class="btn btn-mini" onclick="location.href='/Media/TopicPdf/17753/7';" title="Open/Save this topic as PDF document for viewing or printing">
				<img src="/Content/images/icons/filetype_pdf.png"> Open topic as PDF
			</button>
	</div>
<div class="clear-fix" style="margin-bottom: 10px"></div>
</div>

	
