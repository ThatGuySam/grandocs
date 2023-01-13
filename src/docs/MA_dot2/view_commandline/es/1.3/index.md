---
originalUrl: 'https://help2.malighting.com/Page/MA_dot2/view_commandline/es/1.3'
---

<div class="topic-navigation">

<div class="pull-right">
	<span class="pull-left">


<div class="pull-left">
<form action="/Topic/SetCurrentVersionNumber" class="form-inline" id="frmTagSelector" method="post">	<span class="form-mini">
		<div class="input-prepend"><span class="add-on">Select different version</span><select autocomplete="off" id="versionNumberId" name="versionNumberId" onchange="$(this).closest('#frmTagSelector').submit();" style="width: 120px;"><option value="">- latest -</option>
<option value="3">1.1</option>
<option value="7">1.2</option>
<option selected="selected" value="12">1.3</option>
<option value="16">1.5</option>
<option value="29">1.9</option>
</select></div>
		<input data-val="true" data-val-number="The field Int32 must be a number." data-val-required="The Int32 field is required." id="ProductId" name="ProductId" type="hidden" value="7">
		<input id="CurrentGuid" name="CurrentGuid" type="hidden" value="fe39e160-71d3-45f6-8f27-fabbf03660a9">
	</span>
</form></div>&nbsp;	</span>
	<span class="pull-right" style="white-space: nowrap;">
			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/ViewItem_Color/es/1.3'; " title="Go to previous page 'Color Preset Type '">
				<i class="icon-arrow-left"></i> previous
			</button>

			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/window_configureslot/es/1.3';" title="Go to next page 'Configure Slot'">
				next <i class="icon-arrow-right"></i> 
			</button>
	</span>
</div>
<div class="clear-fix" style="margin-bottom: 10px"></div>
</div>

					<div class="infobox"><b>Hint:</b><br><b>New help version</b><br>The help version you selected belongs to an older software version. <a href="/Topic/SetCurrentVersionNumber/29/fe39e160-71d3-45f6-8f27-fabbf03660a9">You may want to view the latest help version.</a></div>

			<div class="pull-right">
					<button class="btn btn-mini" style="margin-right: 10px; height: 30px;" onclick="location.href = '/Media/TopicPdf/11686/12'; " title="Open/Save this topic as PDF document for viewing or printing">
						<img src="/Content/images/icons/filetype_pdf.png" style="height: 24px;"> Open topic as PDF
					</button>
				<span class="badge badge-info">Version 1.3</span>
			</div>
		<h1>Vista Línea de Comandos</h1>

			<div class="topic-table-of-contents">
				<h2>Table of contents of this topic</h2>
				<div class="topic-toc-toggler topic-toc-toggler-hide"><a href="#" onclick="$('.topic-toc-ul').toggle(); $('.topic-toc-toggler-hide').hide(); $('.topic-toc-toggler-show').show(); return false;">hide</a></div>
				<div class="topic-toc-toggler topic-toc-toggler-show" style="display: none;"><a href="#" onclick="$('.topic-toc-ul').toggle(); $('.topic-toc-toggler-hide').show(); $('.topic-toc-toggler-show').hide(); return false;">show</a></div>
				<ul class="topic-toc-ul">
						<li>
							<a href="#toc_header_anchor_1">Feedback (mensajes devueltos)</a>
						</li>
						<li>
							<a href="#toc_header_anchor_2">Funciones Barra Encoders</a>
						</li>
				</ul>
			</div>

		<p>Para ir a la vista de la Línea de Comandos, pulsa en&nbsp;<a href="/Topic/330c5d26-3bcd-4d9c-a448-d89cc7a6d5f1">Línea de Comandos</a>&nbsp;o pulsa&nbsp;<span class="softkey">Mas...</span>&nbsp;en la barra de vistas y pulsa <span class="softkey">Línea de comandos</span>.</p>

<p><span class="image_gray_border"><img alt="" src="/Media/Image/Dot2_ViewsandWindows_CommandLineView02_1-0.PNG"></span></p>

<p>La vista de Línea de Comandos muestra en la parte superior todos los comandos introducidos junto con la respuesta de la consola.</p>

<p>Los mensajes de error también son mostrados.</p>

<p>Todas las líneas de comando comienzan&nbsp;con la hora de reloj (sistema 24 horas) en horas, minutos, segundos y milisegundos.</p>

<p>Después del tiempo se muestra el historial de comandos.</p>

<p>Para desplazamiento vertical utiliza la barra de desplazamiento vertical.<br>
Para desplazamiento horizontal, pulsa en la vista y mueve la&nbsp;<a href="/Topic/1928cb7d-a39f-4ba4-8827-7bec6dce21d5">vista historial de comandos</a>&nbsp;a derecha o izquierda</p>

<p>Si no te encuentras al final del historial de comandos, hay una flecha de dirección&nbsp;&nbsp;<img alt="" src="/Media/Image/Dot2_ViewsandWindows_CommandHistoryView01_1-0.PNG">&nbsp;.</p>

<p>Para ir hasta el final, toca la flecha de dirección&nbsp;<img alt="" src="/Media/Image/Dot2_ViewsandWindows_CommandHistoryView01_1-0.PNG">.</p>

<p>Debajo del historial de comandos, está la&nbsp;<a href="/Topic/330c5d26-3bcd-4d9c-a448-d89cc7a6d5f1">Línea de Comandos</a>.</p>

<p>Debajo de la línea de comandos está el teclado virtual.</p>

<p>Para salir de la vista de línea de comandos, pulsa&nbsp;<img alt="" src="/Media/Image/Dot2_ViewsandWindows_ControlElements_TitleBar08_1-0.PNG">&nbsp;en la barra de título o presiona&nbsp;<span class="hardkey">Esc</span>&nbsp;en la consola.</p>

<a name="toc_header_anchor_1" id="toc_header_anchor_1" class="topic-toc-item"></a><h2>Feedback (mensajes devueltos)</h2>

<p>El historial de comandos tiene diferentes mensajes de feedback.</p>

<p><strong>Error:</strong></p>

<p><span class="image_gray_border"><img alt="" src="/Media/Image/Dot2_ViewsandWindows_CommandHistory01_1-0.PNG" style="height:auto"></span><br>
El comnando introducido es erróneo.</p>

<p><strong>Executing:</strong></p>

<p><span class="image_gray_border"><img alt="" src="/Media/Image/Dot2_ViewsandWindows_CommandHistory02_1-0.PNG" style="height:auto"></span><br>
El comando introducido es ejecutado.</p>

<a name="toc_header_anchor_2" id="toc_header_anchor_2" class="topic-toc-item"></a><h2>Funciones Barra Encoders</h2>

<p><img alt="" src="/Media/Image/Dot2_ViewsandWindows_CommandLineView01_1-0.PNG"></p>

<p><strong>Cursor:</strong><br>
Para mover el cursor en la línea de comandos a izquierda o derecha, gira el encoder.</p>

<p><strong>Historial:</strong><br>
Para desplazarse entre los comandos adelante o atrás y mostrar los comandos en la línea de comandos, gira el encoder a izquierda o derecha.</p>

<p><strong>Scroll:</strong><br>
Para desplazarse en el historial de comandos arriba o abajo, gira el encoder&nbsp; a izquierda o derecha. Para desplazarse a izquierda o derecha en el historial de comandos, presiona y gira el encoder.</p>

<a name="toc_header_anchor_3" id="toc_header_anchor_3" class="topic-toc-item"></a><h2>Links relacionados</h2>

<ul>
	<li><a href="/Topic/27a6150b-90ed-4e27-913b-6724fe574768">Sistema de Colores - Linea Comandos</a></li>
	<li><a href="/Topic/330c5d26-3bcd-4d9c-a448-d89cc7a6d5f1">Elementos de Control - Línea de Comandos</a></li>
</ul>

<p>&nbsp;</p>


				<br>
<div class="topic-navigation">

<div class="pull-right">
	<span class="pull-left">


<div class="pull-left">
<form action="/Topic/SetCurrentVersionNumber" class="form-inline" id="frmTagSelector" method="post">	<span class="form-mini">
		<div class="input-prepend"><span class="add-on">Select different version</span><select autocomplete="off" id="versionNumberId" name="versionNumberId" onchange="$(this).closest('#frmTagSelector').submit();" style="width: 120px;"><option value="">- latest -</option>
<option value="3">1.1</option>
<option value="7">1.2</option>
<option selected="selected" value="12">1.3</option>
<option value="16">1.5</option>
<option value="29">1.9</option>
</select></div>
		<input data-val="true" data-val-number="The field Int32 must be a number." data-val-required="The Int32 field is required." id="ProductId" name="ProductId" type="hidden" value="7">
		<input id="CurrentGuid" name="CurrentGuid" type="hidden" value="fe39e160-71d3-45f6-8f27-fabbf03660a9">
	</span>
</form></div>&nbsp;	</span>
	<span class="pull-right" style="white-space: nowrap;">
			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/ViewItem_Color/es/1.3'; " title="Go to previous page 'Color Preset Type '">
				<i class="icon-arrow-left"></i> previous
			</button>

			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/window_configureslot/es/1.3';" title="Go to next page 'Configure Slot'">
				next <i class="icon-arrow-right"></i> 
			</button>
	</span>
</div>
	<div class="clear-fix"></div>
	<div class="pull-right">
	
			<button class="btn btn-mini" onclick="location.href='/Media/TopicPdf/11686/12';" title="Open/Save this topic as PDF document for viewing or printing">
				<img src="/Content/images/icons/filetype_pdf.png"> Open topic as PDF
			</button>
	</div>
<div class="clear-fix" style="margin-bottom: 10px"></div>
</div>

	
