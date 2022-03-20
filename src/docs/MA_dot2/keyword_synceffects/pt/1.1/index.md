---
originalUrl: 'http://help2.malighting.com/Page/MA_dot2/keyword_synceffects/pt/1.1'
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
		<input id="CurrentGuid" name="CurrentGuid" type="hidden" value="9975e836-d91c-4784-ba24-1ff914585759">
	</span>
</form></div>&nbsp;	</span>
	<span class="pull-right" style="white-space: nowrap;">
			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/keyword_storelook/pt/1.1'; " title="Go to previous page 'StoreLook'">
				<i class="icon-arrow-left"></i> previous
			</button>

			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/keyword_temp/pt/1.1';" title="Go to next page 'Temp'">
				next <i class="icon-arrow-right"></i> 
			</button>
	</span>
</div>
<div class="clear-fix" style="margin-bottom: 10px"></div>
</div>

					<div class="infobox"><b>Hint:</b><br><b>New help version</b><br>The help version you selected belongs to an older software version. <a href="/Topic/SetCurrentVersionNumber/29/9975e836-d91c-4784-ba24-1ff914585759">You may want to view the latest help version.</a></div>

			<div class="pull-right">
					<button class="btn btn-mini" style="margin-right: 10px; height: 30px;" onclick="location.href = '/Media/TopicPdf/7912/3'; " title="Open/Save this topic as PDF document for viewing or printing">
						<img src="/Content/images/icons/filetype_pdf.png" style="height: 24px;"> Open topic as PDF
					</button>
				<span class="badge badge-info">Version 1.1</span>
			</div>
		<h1>Comando SyncEffects</h1>

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

		<p>Esta página descreve a sintaxe e como usar o comando&nbsp;SyncEffects.</p>

<div class="important">Se você deseja digitar o comando SyncEffects no console, pressione e segure <span class="hardkey"><img alt="ma" src="/Media/Mlg/ma.png"></span>&nbsp;+&nbsp;<span class="hardkey">Effect</span>&nbsp;(= SyncEffects), o comando será executado diretamente.<br>
Você também pode usar a linha de comando junto com o teclado virtual e digitar a palavra SyncEffects.</div>

<p>Para ir ao comando&nbsp;SyncEffects, pressione e segure&nbsp;<span class="hardkey"><img alt="ma" src="/Media/Mlg/ma.png"></span>&nbsp;+&nbsp;<span class="hardkey">Effect</span>&nbsp;(=&nbsp;SyncEffects), o comando será executado diretamente.</p>

<a name="toc_header_anchor_1" id="toc_header_anchor_1" class="topic-toc-item"></a><h2>Descrição</h2>

<p>Com o comando&nbsp;SyncEffects&nbsp;você sincroniza todos os efeitos que estão sendo executados.</p>

<div class="tip">Você também pode usar o botão&nbsp;<span class="softkey">Sync</span>&nbsp;na&nbsp;<a href="/Topic/0e539790-291a-4be0-be05-8f3e8d81c0eb">Vista de Efeitos</a>.</div>

<a name="toc_header_anchor_2" id="toc_header_anchor_2" class="topic-toc-item"></a><h2>Sintaxe</h2>

<p>Sincronizar todos os efeitos sendo executados.</p>

<div class="cl_input">SyncEffects</div>

<a name="toc_header_anchor_3" id="toc_header_anchor_3" class="topic-toc-item"></a><h2>Exemplo</h2>

<p>Vamos supor que você tenha os fixtures de 1 a 8 sendo executados com um efeito de&nbsp;dimmer&nbsp;PWM&nbsp;(= modulação por largura de batimento) e fixtures de 11 a 18 também sendo executados com um efeito de dimmer&nbsp;PWM.<br>
Eles não estão sincronizados e você quer sincronizá-los.</p>

<p><span class="image_gray_border"><img alt="" src="/Media/Image/Dot2_Commands_SyncEffects01_1-0.PNG"></span></p>

<p>Pressione e segura&nbsp;<span class="hardkey"><img alt="ma" src="/Media/Mlg/ma.png"></span> + <span class="hardkey">Effect</span> (=SyncEffects).</p>

<p>O comando&nbsp;SyncEffects&nbsp;será executado diretamente. Todos os efeitos em execução estão sincronizados.</p>

<p><span class="image_gray_border"><img alt="" src="/Media/Image/Dot2_Commands_SyncEffects02_1-0.PNG"></span></p>

<a name="toc_header_anchor_4" id="toc_header_anchor_4" class="topic-toc-item"></a><h2>Links Relacionados</h2>

<ul>
	<li><a href="/Topic/0e539790-291a-4be0-be05-8f3e8d81c0eb">Vista de Efeitos</a></li>
	<li><a href="/Topic/ca034c9c-6b13-4948-8e83-c6e4f2ff4d21">O que são Efeitos?</a></li>
	<li><a href="/Topic/2457c63d-dd11-4171-b366-db5a6453f23d">Como trabalhar com Efeitos?</a></li>
	<li><a href="/Topic/204e781e-986f-4c9a-8af9-0022186dc7aa">Tecla MA</a></li>
</ul>


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
		<input id="CurrentGuid" name="CurrentGuid" type="hidden" value="9975e836-d91c-4784-ba24-1ff914585759">
	</span>
</form></div>&nbsp;	</span>
	<span class="pull-right" style="white-space: nowrap;">
			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/keyword_storelook/pt/1.1'; " title="Go to previous page 'StoreLook'">
				<i class="icon-arrow-left"></i> previous
			</button>

			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/keyword_temp/pt/1.1';" title="Go to next page 'Temp'">
				next <i class="icon-arrow-right"></i> 
			</button>
	</span>
</div>
	<div class="clear-fix"></div>
	<div class="pull-right">
	
			<button class="btn btn-mini" onclick="location.href='/Media/TopicPdf/7912/3';" title="Open/Save this topic as PDF document for viewing or printing">
				<img src="/Content/images/icons/filetype_pdf.png"> Open topic as PDF
			</button>
	</div>
<div class="clear-fix" style="margin-bottom: 10px"></div>
</div>

	
