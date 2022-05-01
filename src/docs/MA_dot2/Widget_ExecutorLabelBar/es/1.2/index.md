---
originalUrl: 'https://help2.malighting.com/Page/MA_dot2/Widget_ExecutorLabelBar/es/1.2'
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
			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/Widget_EncoderBar/es/1.2'; " title="Go to previous page 'Barra de Encoders'">
				<i class="icon-arrow-left"></i> previous
			</button>

			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/Widget_PresetTypeBar/es/1.2';" title="Go to next page 'Barra tipos de Preset'">
				next <i class="icon-arrow-right"></i> 
			</button>
	</span>
</div>
<div class="clear-fix" style="margin-bottom: 10px"></div>
</div>

					<div class="infobox"><b>Hint:</b><br><b>New help version</b><br>The help version you selected belongs to an older software version. <a href="/Topic/SetCurrentVersionNumber/29/af87cdc8-b54b-41ee-b614-26065230c7ec">You may want to view the latest help version.</a></div>

			<div class="pull-right">
					<button class="btn btn-mini" style="margin-right: 10px; height: 30px;" onclick="location.href = '/Media/TopicPdf/16834/7'; " title="Open/Save this topic as PDF document for viewing or printing">
						<img src="/Content/images/icons/filetype_pdf.png" style="height: 24px;"> Open topic as PDF
					</button>
				<span class="badge badge-info">Version 1.2</span>
			</div>
		<h1>Barra de Ejecutores</h1>

			<div class="topic-table-of-contents">
				<h2>Table of contents of this topic</h2>
				<div class="topic-toc-toggler topic-toc-toggler-hide"><a href="#" onclick="$('.topic-toc-ul').toggle(); $('.topic-toc-toggler-hide').hide(); $('.topic-toc-toggler-show').show(); return false;">hide</a></div>
				<div class="topic-toc-toggler topic-toc-toggler-show" style="display: none;"><a href="#" onclick="$('.topic-toc-ul').toggle(); $('.topic-toc-toggler-hide').show(); $('.topic-toc-toggler-show').hide(); return false;">show</a></div>
				<ul class="topic-toc-ul">
						<li>
							<a href="#toc_header_anchor_1">Ejecutor principal</a>
						</li>
						<li>
							<a href="#toc_header_anchor_2">Fader Ejecutor</a>
						</li>
						<li>
							<a href="#toc_header_anchor_3">Ejecutor normal</a>
						</li>
				</ul>
			</div>

		<p>La barra de ejecutores está siempre visible en la parte de abajo de la pantalla 2 y el resto de pantallas de los wings.</p>

<p><img alt="" src="/Media/Image/Dot2_ViewsandWindows_ControlElements_ExecutorBar01_1-2.png"></p>

<p>&nbsp;</p>

<p><em>Imagen 1: Barra de ejecutores - Página 1</em></p>

<p>La barra de ejecutores muestra información sobre los ejecutores guardados</p>

<p>La parte de arriba muestra la página actual y si un ejecutor está fijo (Fix) desde otra página.o Para desactivar el Global Autofix consulta la&nbsp;<a href="/Topic/13f3b4a4-bfc6-4893-9a29-b9e5c3a404ad">ventana de ajustes globales</a>.</p>

<p><img alt="" src="/Media/Image/Dot2_ViewsandWindows_ControlElements_ExecutorBar02_1-2.png"></p>

<p>&nbsp;</p>

<p><em>Imagen 2: Barra Ejecutores - Página 2 con ejecutores fijados (fixed)</em></p>

<p>La barra de ejecutores puede tener hasta 999 páginas</p>

<p>Para cambiar entre páginas: Pulsa&nbsp;<span class="hardkey">Page +</span> o&nbsp;<span class="hardkey">Page -</span>.</p>

<p>El&nbsp;<a href="/Topic/581eb40a-40db-4a6f-90ec-1a31d96acbcc">Color del ejecutor</a>&nbsp;muestra qué clase de ejecutor es.</p>

<p>La barra de ejecutores está dividida en el ejecutor principal (derecha), 12 botones ejecutores normales (primeras dos líneas) y 6 faders/botones ejecutores &nbsp;(línea de abajo).</p>

<p>Si guardas una cue&nbsp;en un ejecutor, la consola te pide que lo nombres. Si no presionas la ventana pop-up, el ejecutor se llamará Exec.</p>

<p>La barra azul muestra el tiempo de Fade de una cue desde el 0% hasta el 100%</p>

<p>Si se está ejecutando una grabación de timecode&nbsp;para un ejecutor, se ilumina y es visible el&nbsp;<strong>icono de grabación</strong>&nbsp;<img alt="" src="/Media/Image/Dot2_ViewsandWindows_CuesView05_1-1-3.png">.</p>

<p>Si la posición del fader físico es diferente a la posición del fader virtual, una pequeña barra de fader muestra su posición en el software. Tienes que mover el fader físico hasta "atrapar" el valor de la posición del fader en el software.<br>
El ejecutor principal también muestra los faders si uno de los faders (físicos) no está en la posición correcta.</p>

<p>Para ver el número de ejecutor y el icono del fader mantén presionada la tecla <span class="hardkey"><img alt="ma" src="/Media/Mlg/ma_1.png"></span>. Para más información sobre los iconos de los faders&nbsp;y sus funciones puedes leer&nbsp;<a href="/Topic/7cf5839e-a357-48d3-b077-bf7f682606db">Seleccionar Función del ejecutor</a>.</p>

<p><img alt="" src="/Media/Image/Dot2_ViewsandWindows_ControlElements_ExecutorBar16_1-2.png"></p>

<p><em>Imagen 3: Barra de ejecutores con la tecla MA presionada.</em></p>

<p>Para abrir la&nbsp;<a href="/Topic/d8ca000e-cf13-448d-ac3e-129272e731d8">Ventana barra de ejecutores</a>, toca en la barra de ejecutores de la pantalla.</p>

<p>&nbsp;</p>

<a name="toc_header_anchor_1" id="toc_header_anchor_1" class="topic-toc-item"></a><h2>Ejecutor principal</h2>

<p>La parte más a la derecha de la barra de ejecutores muestra el ejecutor principal junto con los dos faders 100mm.</p>

<p><img alt="" src="/Media/Image/Dot2_ViewsandWindows_ControlElements_ExecutorBar13_1-2.png"></p>

<p><em>Imagen 4: Ejecutor principal activo</em></p>

<p><img alt="" src="/Media/Image/Dot2_ViewsandWindows_ControlElements_ExecutorBar12_1-2.png"></p>

<p><em>Imagen 5: Ejecutor principal inactivo</em></p>

<p>Primero muestra el <a href="/Topic/4bdf0092-9184-4d12-bcf4-42b7a49ef170">icono de trigger</a>, luego el número de cue junto al nombre de la cue.</p>

<p>La primera barra de fader muestra la posición del master fader y la segunda del XFader.</p>

<p>La cue actual se muestra en la segunda línea, por lo que la cue anterior y posterior son visibles.</p>

<p>Si el ejecutor está encendido, el botón del mismo está resaltado y la cue actual se muestra en la segunda línea en blanco.&nbsp;</p>

<p>Si el ejecutor está apagado, en la segunda línea se muestra un <strong>&nbsp;[Off]&nbsp;.</strong></p>

<p>&nbsp;</p>

<a name="toc_header_anchor_2" id="toc_header_anchor_2" class="topic-toc-item"></a><h2>Fader Ejecutor</h2>

<p>En la línea de abajo de la barra ejecutores están los seis faders ejecutores visibles</p>

<p><img alt="" src="/Media/Image/Dot2_ViewsandWindows_ControlElements_ExecutorBar14_1-0.PNG"></p>

<p><em>Imagen 6: Línea inferior de la barra de ejecutor muestra los ejecutores de fader.</em></p>

<p>Primero están visibles los dos <a href="/Topic/4bdf0092-9184-4d12-bcf4-42b7a49ef170">iconos de ejecutores</a>&nbsp;respectivos a cada botón ejecutor en la consola así como su nombre</p>

<p>Si un ejecutor tiene asignada una cue list, se muestra un número de cue.&nbsp;</p>

<p>&nbsp;</p>

<a name="toc_header_anchor_3" id="toc_header_anchor_3" class="topic-toc-item"></a><h2>Ejecutor normal</h2>

<p>Las dos primeras&nbsp;filas de la barra de ejecutores muestran los ejecutores normales.</p>

<p><img alt="" src="/Media/Image/Dot2_ViewsandWindows_ControlElements_ExecutorBar15_1-0.PNG"></p>

<p>Imagen 7: Primeras dos filas del ejecutor muestra los ejecutores normales.</p>

<p>Primero están visibles los dos&nbsp;<a href="/Topic/4bdf0092-9184-4d12-bcf4-42b7a49ef170">Iconos de ejecutores</a>&nbsp; respectivos a cada botón ejecutor en la consola así como su nombre</p>

<p>Si un ejecutor tiene asignada una&nbsp;cue&nbsp;list, se muestra un número de&nbsp;cue.&nbsp;</p>

<p>&nbsp;</p>

<a name="toc_header_anchor_4" id="toc_header_anchor_4" class="topic-toc-item"></a><h2>Links relacionados</h2>

<ul>
	<li><a href="/Topic/581eb40a-40db-4a6f-90ec-1a31d96acbcc">Sistema de colores - Barra de ejecutore</a></li>
	<li><a href="/Topic/d0a671eb-91c4-45b5-bba6-aa5138f0e343">¿Qué son cues?</a></li>
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
			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/Widget_EncoderBar/es/1.2'; " title="Go to previous page 'Barra de Encoders'">
				<i class="icon-arrow-left"></i> previous
			</button>

			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/Widget_PresetTypeBar/es/1.2';" title="Go to next page 'Barra tipos de Preset'">
				next <i class="icon-arrow-right"></i> 
			</button>
	</span>
</div>
	<div class="clear-fix"></div>
	<div class="pull-right">
	
			<button class="btn btn-mini" onclick="location.href='/Media/TopicPdf/16834/7';" title="Open/Save this topic as PDF document for viewing or printing">
				<img src="/Content/images/icons/filetype_pdf.png"> Open topic as PDF
			</button>
	</div>
<div class="clear-fix" style="margin-bottom: 10px"></div>
</div>

	
