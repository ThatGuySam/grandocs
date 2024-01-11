---
originalUrl: 'https://help2.malighting.com/Page/MA_dot2/Key_Preset/es/1.1'
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
		<input id="CurrentGuid" name="CurrentGuid" type="hidden" value="c8e38ca3-4da4-4a62-b631-099908716e53">
	</span>
</form></div>&nbsp;	</span>
	<span class="pull-right" style="white-space: nowrap;">
			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/Key_Plus/es/1.1'; " title="Go to previous page '[Plus] +'">
				<i class="icon-arrow-left"></i> previous
			</button>

			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/Key_Prev/es/1.1';" title="Go to next page 'Prev (Previous)'">
				next <i class="icon-arrow-right"></i> 
			</button>
	</span>
</div>
<div class="clear-fix" style="margin-bottom: 10px"></div>
</div>

					<div class="infobox"><b>Hint:</b><br><b>New help version</b><br>The help version you selected belongs to an older software version. <a href="/Topic/SetCurrentVersionNumber/29/c8e38ca3-4da4-4a62-b631-099908716e53">You may want to view the latest help version.</a></div>

			<div class="pull-right">
					<button class="btn btn-mini" style="margin-right: 10px; height: 30px;" onclick="location.href = '/Media/TopicPdf/7723/3'; " title="Open/Save this topic as PDF document for viewing or printing">
						<img src="/Content/images/icons/filetype_pdf.png" style="height: 24px;"> Open topic as PDF
					</button>
				<span class="badge badge-info">Version 1.1</span>
			</div>
		<h1>Tecla Preset</h1>

			<div class="topic-table-of-contents">
				<h2>Table of contents of this topic</h2>
				<div class="topic-toc-toggler topic-toc-toggler-hide"><a href="#" onclick="$('.topic-toc-ul').toggle(); $('.topic-toc-toggler-hide').hide(); $('.topic-toc-toggler-show').show(); return false;">hide</a></div>
				<div class="topic-toc-toggler topic-toc-toggler-show" style="display: none;"><a href="#" onclick="$('.topic-toc-ul').toggle(); $('.topic-toc-toggler-hide').show(); $('.topic-toc-toggler-show').hide(); return false;">show</a></div>
				<ul class="topic-toc-ul">
						<li>
							<a href="#toc_header_anchor_1">Vista Presets</a>
						</li>
						<li>
							<a href="#toc_header_anchor_2">Comando Preset</a>
						</li>
						<li>
							<a href="#toc_header_anchor_3">Funcionalidad Avanzada</a>
						</li>
				</ul>
			</div>

		<p>Cuando presionas la tecla&nbsp;<span class="hardkey">Preset</span>&nbsp;puedes ver la <a href="/Topic/c3fb198e-9577-4dae-981c-601829997529">ventana Pool de Presets</a>&nbsp;en la pantalla 1 y obtienes el&nbsp;<a href="/Topic/4e726532-88c5-4bb8-ac83-85baaa66e3f3">Comando Preset</a>&nbsp;en la línea de comandos.</p>

<div class="tip">Si necesitas aprender sobre los presets, por favor sigue los links a las páginas&nbsp;<a href="/Topic/740955a8-3b27-4e50-b35c-7a728c1d9c38">¿Qué son Presets?</a>&nbsp;y&nbsp;<a href="/Topic/1d3c4f8d-0d36-44da-9f6d-fa91f0db3024">Cómo trabajar con Presets</a>.</div>

<a name="toc_header_anchor_1" id="toc_header_anchor_1" class="topic-toc-item"></a><h2>Vista Presets</h2>

<p>Esta vista cambia acorde al tipo de preset seleccionado. Ej. si seleccionas el color en la barra tipo de presets a la derecha de la pantalla 1 la pantalla te mostrará todos los presets de color. Si seleccionas Position entonces te mostrará los presets de posición.</p>

<p>La vista de Preset te permite pulsar sobre los presets en la pantalla para cargar sus valores. Por favor lee <a href="/Topic/1d3c4f8d-0d36-44da-9f6d-fa91f0db3024">Cómo trabajar con Presets</a>&nbsp;para aprender más sobre este proceso.</p>

<a name="toc_header_anchor_2" id="toc_header_anchor_2" class="topic-toc-item"></a><h2>Comando Preset</h2>

<p>La función principal del comando preset es asignar presets a aparatos. Es posible que sea más facil utilizando las pantallas pero también puedes hacerlo utilizando las teclas y por consiguiente sus comandos.</p>

<p>Si necesitas utilizar el preset de posición número 1 para el aparato 1, puedes teclear lo siguiente:</p>

<p><span class="hardkey">Fixture</span> <span class="hardkey">1</span> <span class="hardkey">At</span> <span class="hardkey">Preset</span> <span class="hardkey">2</span> <span class="hardkey">&nbsp;. </span>&nbsp;<span class="hardkey">1</span> <span class="hardkey">Please</span></p>

<p>En este ejemplo usamos el "2.1" para decirle a la consola que es el primer preset del tipo de preset Position. El número 2 en este comando le dice a la consola que es una posición y el 1 que es el primero de los presets.</p>

<p>En la parte derecha de la pantalla 1 puedes ver todos los diferentes tipos de presets. El de arriba es el 1, el segundo el número 2, etc. Esta no es una lista fija, los cambios depende de los aparatos patcheados. Por lo general siguen un orden específico. Por ejemplo Dimmer siempre está antes de Position. Así, en el ejemplo de antes podemos ver que la posición es el segundo tipo de preset.</p>

<a name="toc_header_anchor_3" id="toc_header_anchor_3" class="topic-toc-item"></a><h2>Funcionalidad Avanzada</h2>

<p>Cuando mantienes presionadas las teclas&nbsp;<span class="hardkey"><img alt="ma" src="/Media/Mlg/ma.png"></span>&nbsp;y&nbsp;<span class="hardkey">Preset</span>&nbsp;obtienes el&nbsp;<a href="/Topic/b1effa05-c848-4eff-8844-e06a3cd1ebb4">Comando PresetType</a></p>

<p>Este se puede utilizar para activar diferentes tipos de preset. Es lo mismo que pulsar los diferentes botones en la pantalla.</p>

<p>Dado que el número puede cambiar dependiendo de tus aparatos patcheados, entonces es preferible utilizar el nombre de tipo de preset. Pero no necesitas escribirlo en la línea de comandos.</p>

<p><span class="hardkey"><img alt="ma" src="/Media/Mlg/ma.png"></span>+<span class="hardkey">Preset</span> <span class="hardkey">1</span>&nbsp;suele ser lo mismo que&nbsp;<span class="syntax">PresetType "Dimmer"</span>.</p>

<a name="toc_header_anchor_4" id="toc_header_anchor_4" class="topic-toc-item"></a><h2>Links relacionados</h2>

<p><a href="/Topic/740955a8-3b27-4e50-b35c-7a728c1d9c38">¿Qué son Presets?</a></p>

<p><a href="/Topic/1d3c4f8d-0d36-44da-9f6d-fa91f0db3024">¿Cómo trabajar con Presets?</a></p>

<p><a href="/Topic/c3fb198e-9577-4dae-981c-601829997529">vista Pool de Presets</a></p>

<p><a href="/Topic/4e726532-88c5-4bb8-ac83-85baaa66e3f3">Comando Preset</a></p>

<p><a href="/Topic/b1effa05-c848-4eff-8844-e06a3cd1ebb4">Comando PresetType</a></p>


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
		<input id="CurrentGuid" name="CurrentGuid" type="hidden" value="c8e38ca3-4da4-4a62-b631-099908716e53">
	</span>
</form></div>&nbsp;	</span>
	<span class="pull-right" style="white-space: nowrap;">
			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/Key_Plus/es/1.1'; " title="Go to previous page '[Plus] +'">
				<i class="icon-arrow-left"></i> previous
			</button>

			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/Key_Prev/es/1.1';" title="Go to next page 'Prev (Previous)'">
				next <i class="icon-arrow-right"></i> 
			</button>
	</span>
</div>
	<div class="clear-fix"></div>
	<div class="pull-right">
	
			<button class="btn btn-mini" onclick="location.href='/Media/TopicPdf/7723/3';" title="Open/Save this topic as PDF document for viewing or printing">
				<img src="/Content/images/icons/filetype_pdf.png"> Open topic as PDF
			</button>
	</div>
<div class="clear-fix" style="margin-bottom: 10px"></div>
</div>

	
