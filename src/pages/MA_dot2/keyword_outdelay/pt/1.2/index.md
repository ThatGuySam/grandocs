
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
		<input id="CurrentGuid" name="CurrentGuid" type="hidden" value="7ad80e32-da21-4abd-a15a-8f34546c84ad">
	</span>
</form></div>&nbsp;	</span>
	<span class="pull-right" style="white-space: nowrap;">
			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/keyword_on/pt/1.2'; " title="Go to previous page 'On'">
				<i class="icon-arrow-left"></i> previous
			</button>

			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/keyword_outfade/pt/1.2';" title="Go to next page 'OutFade'">
				next <i class="icon-arrow-right"></i> 
			</button>
	</span>
</div>
<div class="clear-fix" style="margin-bottom: 10px"></div>
</div>

					<div class="infobox"><b>Hint:</b><br><b>New help version</b><br>The help version you selected belongs to an older software version. <a href="/Topic/SetCurrentVersionNumber/29/7ad80e32-da21-4abd-a15a-8f34546c84ad">You may want to view the latest help version.</a></div>

			<div class="pull-right">
					<button class="btn btn-mini" style="margin-right: 10px; height: 30px;" onclick="location.href = '/Media/TopicPdf/7881/7'; " title="Open/Save this topic as PDF document for viewing or printing">
						<img src="/Content/images/icons/filetype_pdf.png" style="height: 24px;"> Open topic as PDF
					</button>
				<span class="badge badge-info">Version 1.2</span>
			</div>
		<h1>Comando OutDelay</h1>

			<div class="topic-table-of-contents">
				<h2>Table of contents of this topic</h2>
				<div class="topic-toc-toggler topic-toc-toggler-hide"><a href="#" onclick="$('.topic-toc-ul').toggle(); $('.topic-toc-toggler-hide').hide(); $('.topic-toc-toggler-show').show(); return false;">hide</a></div>
				<div class="topic-toc-toggler topic-toc-toggler-show" style="display: none;"><a href="#" onclick="$('.topic-toc-ul').toggle(); $('.topic-toc-toggler-hide').show(); $('.topic-toc-toggler-show').hide(); return false;">show</a></div>
				<ul class="topic-toc-ul">
						<li>
							<a href="#toc_header_anchor_1">Descrição</a>
						</li>
						<li>
							<a href="#toc_header_anchor_2">Sintaxe</a>
						</li>
						<li>
							<a href="#toc_header_anchor_3">Exemplo</a>
						</li>
				</ul>
			</div>

		<p>​Esta página descreve a sintaxe e como usar o comando OutDelay.</p>

<p>Para ir para o comando OutDelay é necessário pressionar outra tecla de função antes, por exemplo&nbsp;<span class="hardkey">Store</span>&nbsp;e depois quatro vezes&nbsp;<span class="hardkey">Time</span>.</p>

<a name="toc_header_anchor_1" id="toc_header_anchor_1" class="topic-toc-item"></a><h2>Descrição</h2>

<p>Com o comando OutDelay você pode armazenar um cue e definir um tempo de out&nbsp;delay.<br>
Out&nbsp;delay é um tempo de espera para obtenção de valores de dimmer&nbsp;menores.</p>

<a name="toc_header_anchor_2" id="toc_header_anchor_2" class="topic-toc-item"></a><h2>Sintaxe</h2>

<p>Armazena um cue e define um tempo de out delay.</p>

<div class="cl_input">Store Cue 1 OutDelay 4</div>

<a name="toc_header_anchor_3" id="toc_header_anchor_3" class="topic-toc-item"></a><h2>Exemplo</h2>

<p>Vamos supor que você irá armazenar um novo cue 1 no executor principal e definir seu tempo de out delay de 4 segundos.</p>

<p>Há três maneiras de fazer isso:</p>

<p>a) Pressione&nbsp;<span class="hardkey">Store</span> <span class="hardkey">1</span> (= Cue 1) quatro vezes&nbsp;<span class="hardkey">Time</span> (= OutDelay) <span class="hardkey">4</span> <span class="hardkey">Please</span>.</p>

<p>b) Pressione&nbsp;<span class="hardkey">Store</span> <span class="hardkey">1</span> (= Cue 1) quatro vezes​ <span class="hardkey">Time</span> (= OutDelay) <span class="hardkey">4</span>&nbsp;e o grande&nbsp;<span class="hardkey">Go</span>.</p>

<p>c) Pressione&nbsp;<span class="hardkey">Store</span> <span class="hardkey">1</span> (= Cue 1) quatro vezes​ <span class="hardkey">Time</span> (= OutDelay) <span class="hardkey">4</span>&nbsp;e toque no executor principal na&nbsp;<a href="/Topic/d8ca000e-cf13-448d-ac3e-129272e731d8">vista da barra do executor</a>.</p>

<p>Cue 1 está armazenado no executor principal com um tempo de out&nbsp;delay de 4 segundos.</p>

<div class="tip">Verifique o tempo de out&nbsp;delay na&nbsp;<a href="/Topic/b8ab1bbb-182d-41d6-9a1e-52f5267922c7">vista de cues</a>.</div>

<a name="toc_header_anchor_4" id="toc_header_anchor_4" class="topic-toc-item"></a><h2>Links Relacionados</h2>

<ul>
	<li><a href="/Topic/fc47e5b3-2597-4b3f-ad85-c1690440e399">Tecla Time</a></li>
	<li><a href="/Topic/b8ab1bbb-182d-41d6-9a1e-52f5267922c7">Vista de Cues</a></li>
	<li><a href="/Topic/d8ca000e-cf13-448d-ac3e-129272e731d8">Janela da Barra do Executor</a></li>
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
		<input id="CurrentGuid" name="CurrentGuid" type="hidden" value="7ad80e32-da21-4abd-a15a-8f34546c84ad">
	</span>
</form></div>&nbsp;	</span>
	<span class="pull-right" style="white-space: nowrap;">
			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/keyword_on/pt/1.2'; " title="Go to previous page 'On'">
				<i class="icon-arrow-left"></i> previous
			</button>

			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/keyword_outfade/pt/1.2';" title="Go to next page 'OutFade'">
				next <i class="icon-arrow-right"></i> 
			</button>
	</span>
</div>
	<div class="clear-fix"></div>
	<div class="pull-right">
	
			<button class="btn btn-mini" onclick="location.href='/Media/TopicPdf/7881/7';" title="Open/Save this topic as PDF document for viewing or printing">
				<img src="/Content/images/icons/filetype_pdf.png"> Open topic as PDF
			</button>
	</div>
<div class="clear-fix" style="margin-bottom: 10px"></div>
</div>

	