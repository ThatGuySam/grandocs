---
originalUrl: 'https://help2.malighting.com/Page/MA_dot2/keyword_store/es/1.1'
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
		<input id="CurrentGuid" name="CurrentGuid" type="hidden" value="97af99ef-e454-442e-9abc-5b71bf8cc974">
	</span>
</form></div>&nbsp;	</span>
	<span class="pull-right" style="white-space: nowrap;">
			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/keyword_stomp/es/1.1'; " title="Go to previous page 'Stomp'">
				<i class="icon-arrow-left"></i> previous
			</button>

			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/keyword_storelook/es/1.1';" title="Go to next page 'StoreLook'">
				next <i class="icon-arrow-right"></i> 
			</button>
	</span>
</div>
<div class="clear-fix" style="margin-bottom: 10px"></div>
</div>

			<div class="infobox"><b>Hint:</b><br><b>New English version</b><br>The language you selected is outdated. <a href="/Topic/97af99ef-e454-442e-9abc-5b71bf8cc974/en">You may want to view the more up-to-date English version?</a></div>
		
			<div class="pull-right">
					<button class="btn btn-mini" style="margin-right: 10px; height: 30px;" onclick="location.href = '/Media/TopicPdf/13817/3'; " title="Open/Save this topic as PDF document for viewing or printing">
						<img src="/Content/images/icons/filetype_pdf.png" style="height: 24px;"> Open topic as PDF
					</button>
				<span class="badge badge-info">Version 1.1</span>
			</div>
		<h1>Comando Store</h1>

			<div class="topic-table-of-contents">
				<h2>Table of contents of this topic</h2>
				<div class="topic-toc-toggler topic-toc-toggler-hide"><a href="#" onclick="$('.topic-toc-ul').toggle(); $('.topic-toc-toggler-hide').hide(); $('.topic-toc-toggler-show').show(); return false;">hide</a></div>
				<div class="topic-toc-toggler topic-toc-toggler-show" style="display: none;"><a href="#" onclick="$('.topic-toc-ul').toggle(); $('.topic-toc-toggler-hide').show(); $('.topic-toc-toggler-show').hide(); return false;">show</a></div>
				<ul class="topic-toc-ul">
						<li>
							<a href="#toc_header_anchor_1">Descripción</a>
						</li>
						<li>
							<a href="#toc_header_anchor_2">Sintaxis</a>
						</li>
						<li>
							<a href="#toc_header_anchor_3">&nbsp;</a>
						</li>
						<li>
							<a href="#toc_header_anchor_4">Ejemplo 1</a>
						</li>
						<li>
							<a href="#toc_header_anchor_5">Ejemplo 2</a>
						</li>
						<li>
							<a href="#toc_header_anchor_6">Ejemplo 3</a>
								<ul>
										<li><a href="#toc_header_anchor_7">Ejemplo 4</a></li>
										<li><a href="#toc_header_anchor_8">Ejemplo 5</a></li>
								</ul>
						</li>
				</ul>
			</div>

		<p>Esta página describe la sintaxis y cómo usar el comando Store (grabar/almacenar)</p>

<p>Para acceder al comando Store presiona la tecla <span class="hardkey">Store</span>&nbsp;en la consola.</p>

<a name="toc_header_anchor_1" id="toc_header_anchor_1" class="topic-toc-item"></a><h2>Descripción</h2>

<p>Con el comando Store puedes grabar por ejemplo:</p>

<ul>
	<li>una cue en un ejecutor</li>
	<li>una selección de aparatos como un grupo en la&nbsp;<a href="/Topic/a28e845d-664a-4bff-8f81-d6039857b1de">vista de grupos</a></li>
	<li>un valor activo en un&nbsp;<a href="/Topic/c3fb198e-9577-4dae-981c-601829997529">pool de preset</a></li>
	<li>​un master de velocidad o rate en un ejecutor.</li>
</ul>

<p>Para más información sobre las cues puedes leer&nbsp;<a href="/Topic/511081dd-5ffb-4aaa-8d09-a0859b0d0a19">¿Cómo trabajar con Cues?</a></p>

<a name="toc_header_anchor_2" id="toc_header_anchor_2" class="topic-toc-item"></a><h2>Sintaxis</h2>

<p>Grabar una cue en un ejecutor.</p>

<div class="cl_input">Store Cue 1 ExecButton1</div>

<p>Grabar una selección de aparatos como un grupo en la vista de grupos.</p>

<div class="cl_input">Store Group 1</div>

<p>Grabar un valor activo de dimmer como un preset en su pool de presets correspondiente.</p>

<div class="cl_input">Store Preset 1.1</div>

<p>Grabar&nbsp;​un master de velocidad o rate en un ejecutor.</p>

<div class="cl_input">Store Rate Executor 1.3</div>

<a name="toc_header_anchor_3" id="toc_header_anchor_3" class="topic-toc-item"></a><h2>&nbsp;</h2>

<a name="toc_header_anchor_4" id="toc_header_anchor_4" class="topic-toc-item"></a><h2>Ejemplo 1</h2>

<p>Supongamos que quieres grabar la cue que has creado como cue 1 en el ejecutor principal.</p>

<p><img alt="" src="/Media/Image/Dot2_Commands_Store01_1-0.PNG"> <img alt="" src="/Media/Image/Dot2_Commands_Store02_1-0.PNG"></p>

<p>Hay tres maneras diferentes para hacer esto:</p>

<p>a) Presiona&nbsp;<span class="hardkey">Store</span> <span class="hardkey">1</span> (=Cue 1) <span class="hardkey">Please</span>.</p>

<p>b) Presiona&nbsp;<span class="hardkey">Store</span> <span class="hardkey">1</span> (=Cue 1) y pulsa sobre el&nbsp;<span class="softkey">ejecutor principal</span>&nbsp;en la&nbsp;<a href="/Topic/d8ca000e-cf13-448d-ac3e-129272e731d8">vista barra ejecutor</a>.</p>

<p>c) Presiona&nbsp;<span class="hardkey">Store</span>&nbsp;y presiona la tecla grande de&nbsp;<span class="hardkey">Go</span>&nbsp;en la consola.</p>

<p>Si es la segunda cue en el ejecutor, la consola te preguntará para que elijas un método de grabación.</p>

<p>Se ha grabado la cue 1 en el ejecutor principal.</p>

<a name="toc_header_anchor_5" id="toc_header_anchor_5" class="topic-toc-item"></a><h2>Ejemplo 2</h2>

<p>Supongamos que quieres grabar la cue que has creado en el ejecutor 1.</p>

<p><img alt="" src="/Media/Image/Dot2_Commands_Store03_1-0.PNG"> <img alt="" src="/Media/Image/Dot2_Commands_Store04_1-0.PNG"></p>

<p>Hay tres maneras diferentes para hacer esto:</p>

<p>a) Presiona&nbsp;<span class="hardkey">Store</span> <span class="hardkey">1</span> (=Cue 1)<span class="hardkey"> Exec</span> <span class="hardkey">1</span> <span class="hardkey">Please</span>.</p>

<p>b) Presiona&nbsp;<span class="hardkey">Store</span> <span class="hardkey">1</span> (=Cue 1) y pulsa sobre el&nbsp;<span class="softkey">ejecutor&nbsp;1</span>&nbsp;en la&nbsp;<a href="/Topic/d8ca000e-cf13-448d-ac3e-129272e731d8">vista barra ejecutor</a>.</p>

<p>c) Presiona&nbsp;<span class="hardkey">Store</span> <span class="hardkey">1</span> (=Cue 1) y presiona el respectivo botón ejecutor&nbsp;<span class="hardkey"><img alt="go" src="/Media/Mlg/go_1.png"></span>&nbsp;en la consola.</p>

<p>Se ha almacenado la cue en el ejecutor 1.</p>

<a name="toc_header_anchor_6" id="toc_header_anchor_6" class="topic-toc-item"></a><h2>Ejemplo 3</h2>

<p>Supongamos que quieres grabar la selección actual de aparatos como grupo 1 en la&nbsp;<a href="/Topic/a28e845d-664a-4bff-8f81-d6039857b1de">vista de grupos</a>.</p>

<p>Hay dos maneras diferentes para hacer esto:</p>

<p>a) Presiona <span class="hardkey">Store</span> <span class="hardkey">Group</span> <span class="hardkey">1</span> <span class="hardkey">Please</span>.</p>

<p>b) Presiona <span class="hardkey">Store</span>&nbsp;y pulsa sobre el&nbsp;<span class="softkey">botón del grupo 1</span>&nbsp;en la vista de grupos.</p>

<p>Se ha grabado la selección de aparatos como grupo 1 en la vista de grupos</p>

<a name="toc_header_anchor_7" id="toc_header_anchor_7" class="topic-toc-item"></a><h3>Ejemplo 4</h3>

<p>Supongamos que quieres grabar los valores de activos de dimmer como el preset de dimmer 1.</p>

<p>Hay dos maneras diferentes para hacer esto:</p>

<p>a) Presiona <span class="hardkey">Store</span> <span class="hardkey">Preset</span> <span class="hardkey">1</span> (= pool de presets de dimmer) <span class="hardkey">.</span> <span class="hardkey">1</span> (= objeto de preset&nbsp;1) <span class="hardkey">Please</span>.</p>

<p>b) Presiona <span class="hardkey">Store</span>&nbsp;y pulsa sobre el&nbsp;<span class="softkey">botón 1</span><strong>&nbsp;</strong>en el pool de presets de dimmer.</p>

<p>Se ha grabado el valor de dimmer como preset de dimmer 1</p>

<a name="toc_header_anchor_8" id="toc_header_anchor_8" class="topic-toc-item"></a><h3>Ejemplo 5</h3>

<p>Supongamos que quieres grabar un Master de velocidad en el ejecutor 3.</p>

<p>Hay tres maneras diferentes para hacer esto:</p>

<p>a) Presiona&nbsp;<span class="hardkey">Store</span>&nbsp;<span class="hardkey">Speed</span>&nbsp;(= Rate)&nbsp;<span class="hardkey">Exec</span>&nbsp;<span class="hardkey">3</span>&nbsp;<span class="hardkey">Please</span>.</p>

<p>b) Presiona&nbsp;<span class="hardkey">Store</span>&nbsp;<span class="hardkey">Speed</span>&nbsp;(= Rate) y pulsa sobre el&nbsp;<span class="softkey">executor 3</span>&nbsp;en la&nbsp;<a href="/Topic/d8ca000e-cf13-448d-ac3e-129272e731d8">vista barra de ejecutores</a></p>

<p><span id="cke_bm_430C" style="display:none">&nbsp;</span>c) Presiona&nbsp;<span class="hardkey">Store</span>&nbsp;<span class="hardkey">Speed</span>&nbsp;(= Rate) y presiona el respectivo botón ejecutor ej.<span class="hardkey"><img alt="go" src="/Media/Mlg/go_1.png"></span></p>

<p><span class="hardkey"><span style="line-height:0" tabindex="-1"><span style="background-image:url(https://help2.malighting.com/Scripts/ckeditor/plugins/widget/images/handle.png); background:rgba(220,220,220,0.5)"><img draggable="true" height="15" src="data:image/gif;base64,R0lGODlhAQABAPABAP///wAAACH5BAEKAAAALAAAAAABAAEAAAICRAEAOw%3D%3D" title="Click and drag to move" width="15"></span></span></span>&nbsp;en la consola.</p>

<p>La consola preguntará para seleccionar el tipo de Master de velocidad, pulsa&nbsp;<span class="softkey">Master Speed</span>.</p>

<p>El fader master velocidad se ha grabado en el ejecutor 3.</p>


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
		<input id="CurrentGuid" name="CurrentGuid" type="hidden" value="97af99ef-e454-442e-9abc-5b71bf8cc974">
	</span>
</form></div>&nbsp;	</span>
	<span class="pull-right" style="white-space: nowrap;">
			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/keyword_stomp/es/1.1'; " title="Go to previous page 'Stomp'">
				<i class="icon-arrow-left"></i> previous
			</button>

			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/keyword_storelook/es/1.1';" title="Go to next page 'StoreLook'">
				next <i class="icon-arrow-right"></i> 
			</button>
	</span>
</div>
	<div class="clear-fix"></div>
	<div class="pull-right">
	
			<button class="btn btn-mini" onclick="location.href='/Media/TopicPdf/13817/3';" title="Open/Save this topic as PDF document for viewing or printing">
				<img src="/Content/images/icons/filetype_pdf.png"> Open topic as PDF
			</button>
	</div>
<div class="clear-fix" style="margin-bottom: 10px"></div>
</div>

	
