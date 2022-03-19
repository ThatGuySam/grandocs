
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
		<input id="CurrentGuid" name="CurrentGuid" type="hidden" value="f98480e2-f5e7-48f9-9eed-453881b3a6ba">
	</span>
</form></div>&nbsp;	</span>
	<span class="pull-right" style="white-space: nowrap;">
			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/Window_Backup/es/1.2'; " title="Go to previous page 'Backup'">
				<i class="icon-arrow-left"></i> previous
			</button>

			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/View_Calculator/es/1.2';" title="Go to next page 'Calculadora'">
				next <i class="icon-arrow-right"></i> 
			</button>
	</span>
</div>
<div class="clear-fix" style="margin-bottom: 10px"></div>
</div>

					<div class="infobox"><b>Hint:</b><br><b>New help version</b><br>The help version you selected belongs to an older software version. <a href="/Topic/SetCurrentVersionNumber/29/f98480e2-f5e7-48f9-9eed-453881b3a6ba">You may want to view the latest help version.</a></div>

			<div class="pull-right">
					<button class="btn btn-mini" style="margin-right: 10px; height: 30px;" onclick="location.href = '/Media/TopicPdf/18360/7'; " title="Open/Save this topic as PDF document for viewing or printing">
						<img src="/Content/images/icons/filetype_pdf.png" style="height: 24px;"> Open topic as PDF
					</button>
				<span class="badge badge-info">Version 1.2</span>
			</div>
		<h1>Vista Tipo de Preset Beam</h1>

			<div class="topic-table-of-contents">
				<h2>Table of contents of this topic</h2>
				<div class="topic-toc-toggler topic-toc-toggler-hide"><a href="#" onclick="$('.topic-toc-ul').toggle(); $('.topic-toc-toggler-hide').hide(); $('.topic-toc-toggler-show').show(); return false;">hide</a></div>
				<div class="topic-toc-toggler topic-toc-toggler-show" style="display: none;"><a href="#" onclick="$('.topic-toc-ul').toggle(); $('.topic-toc-toggler-hide').show(); $('.topic-toc-toggler-show').hide(); return false;">show</a></div>
				<ul class="topic-toc-ul">
						<li>
							<a href="#toc_header_anchor_1">Vista Shutter/Strobe/Iris</a>
						</li>
						<li>
							<a href="#toc_header_anchor_2">Strobe</a>
						</li>
						<li>
							<a href="#toc_header_anchor_3">Duración Strobe</a>
						</li>
						<li>
							<a href="#toc_header_anchor_4">Iris</a>
						</li>
						<li>
							<a href="#toc_header_anchor_5">Vista Prisma 1</a>
						</li>
						<li>
							<a href="#toc_header_anchor_6">Vista Raw Beam</a>
						</li>
						<li>
							<a href="#toc_header_anchor_7">Funciones Barra de Encoders</a>
						</li>
				</ul>
			</div>

		<p>Para ir a la<strong>&nbsp;Vista&nbsp;Tipo de Preset&nbsp;Beam</strong>&nbsp;pulsa&nbsp;<span class="softkey">Beam</span>&nbsp;en la&nbsp;<a href="/Topic/60e350ef-d825-4072-a644-ed2430d82522">Barra Tipos de Preset</a>&nbsp;o presiona la tecla <span class="hardkey"><img alt="ma" src="/Media/Mlg/ma.png"></span>&nbsp;&nbsp;y el número 5.</p>

<p>Esta vista sólo está activa si los aparatos seleccionados tienen atributos de Beam.</p>

<p>La&nbsp;Vista&nbsp;Tipo de&nbsp;Preset&nbsp;Beam&nbsp;está dividida en la vista <strong>Shutter/Strobe/Iris, </strong>la vista&nbsp;<strong>Prisma 1</strong>y las vistas&nbsp;<strong>Raw&nbsp;Beam </strong>(dependiendo de los tipos de aparatos).</p>

<div class="important"><strong>Importante:</strong><br>
Los&nbsp;deslizadores&nbsp;trabajan igual que los&nbsp;encoders. Utilizándolos estableces nuevos valores que alterarán los valores actuales de la función sobre la que estés trabajando. Los respectivos&nbsp;encoders&nbsp;trabajan de manera relativa a los valores modificados.</div>

<p>Para abrir la vista de efectos Beam en la pantalla 1, pulsa&nbsp;<img alt="" src="/Media/Image/Dot2_ViewsandWindows_ControlElements_TitleBar17_1-0.PNG">&nbsp;en la barra de título. Si un efecto se está ejecutando en un aparato seleccionado la vista tipo del tipo de preset cambia a modo efecto con un color azul en la barra de título.</p>

<a name="toc_header_anchor_1" id="toc_header_anchor_1" class="topic-toc-item"></a><h2>Vista Shutter/Strobe/Iris</h2>

<p>La vista Sutter/Strobe/Iris es la primera pestaña de la vista&nbsp;Tipo de&nbsp;Preset&nbsp;Beam</p>

<p><img alt="" src="/Media/Image/Dot2_ViewsandWindows_BeamPresetType01_1-0.PNG"></p>

<p>En la vista shutter/strobe/iris&nbsp;, controlas el strobe en hertz (Hz), la duración del strobe en segundos y el iris en tanto por ciento (%).</p>

<a name="toc_header_anchor_2" id="toc_header_anchor_2" class="topic-toc-item"></a><h2>Strobe</h2>

<p>Para seleccionar la velocidad shutter en Hz, mueve el deslizador strobe arriba y abajo.</p>

<p>Hay cuatro botones de valores strobe junto al deslizador strobe (dependiendo del tipo de aparato).</p>

<p><strong>Open: </strong><br>
Pulsa para abrir el shutter.</p>

<p><strong>Close:</strong><br>
Pulsa para cerrar el shutter.</p>

<p><strong>Strobe:</strong><br>
Pulsa para usar el efecto strobe del aparato (abre y cierra el shutter).</p>

<p><strong>Pulse:</strong><br>
Pulsa para usar el efecto pulse desde el aparato.</p>

<p><strong>Random:</strong><br>
Pulsa para usar el efecto random del aparato. Los aparatos seleccionados tendrán strobe de manera aleatoria.</p>

<a name="toc_header_anchor_3" id="toc_header_anchor_3" class="topic-toc-item"></a><h2>Duración Strobe</h2>

<p>Para seleccionar la duración del strobe en segundos, mueve el deslizador de la duración del strobe arriba o abajo.</p>

<a name="toc_header_anchor_4" id="toc_header_anchor_4" class="topic-toc-item"></a><h2>Iris</h2>

<p>Para seleccionar el ancho del iris en porcentaje, mueve el deslizador de iris arriba y abajo.</p>

<p>Hay cinco botones de valores iris justo al lado del deslizador de iris (dependiendo del tipo de aparato).</p>

<p><strong>Open:</strong><br>
Pulsa para abrir el iris.</p>

<p><strong>Close:</strong><br>
Pulsa para cerrar el iris tanto como sea posible.</p>

<p><strong>Strobe:</strong><br>
Pulsa para usar el efecto strobe desde el aparato.</p>

<p><strong>Pulse Open:</strong><br>
Pulsa para usar el efecto pulse open desde el aparato.</p>

<p><strong>Pulse Close:</strong><br>
Pulsa para usar el efecto pulse close desde el aparato.</p>

<a name="toc_header_anchor_5" id="toc_header_anchor_5" class="topic-toc-item"></a><h2>Vista Prisma 1</h2>

<p>La vista Prisma 1 es la segunda pestaña de la&nbsp;Vista&nbsp;Tipo de&nbsp;Preset&nbsp;Beam</p>

<p><img alt="" src="/Media/Image/Dot2_ViewsandWindows_BeamPresetType02_1-0.PNG"></p>

<p>En la vista prisma puedes seleccionar un prisma y usar las funciones prisma desde el aparato seleccionado.</p>

<p>Para seleccionar un prisma, pulsa sobre él.</p>

<p>Para desactivar&nbsp;el prisma, pulsa <strong>Off</strong>.</p>

<a name="toc_header_anchor_6" id="toc_header_anchor_6" class="topic-toc-item"></a><h2>Vista Raw Beam</h2>

<p>Las vistas raw beam están localizadas después de las vistas prisma.</p>

<p><img alt="" src="/Media/Image/Dot2_ViewsandWindows_BeamPresetType03_1-0.PNG"></p>

<p>En la vista raw beam tú controlas los valores raw beam en&nbsp;<a href="/Topic/bb882594-fcad-4b4a-b6c7-4ab7a20b088e">valores naturales</a>&nbsp;de los tipos de aparato seleccionados.</p>

<a name="toc_header_anchor_7" id="toc_header_anchor_7" class="topic-toc-item"></a><h2>Funciones Barra de Encoders</h2>

<p>La velocidad por defecto del encoder no tiene cifras decimales.<br>
Para cambiar la velocidad del encoder a lenta, pulsa la tecla encoder&nbsp; <span class="hardkey"><img alt="encoder" src="/Media/Mlg/encoder.png"></span> .&nbsp;El&nbsp;encoder&nbsp;adquiere una resolución más fina.<br>
Para cambiar la velocidad del encoder a ultra lenta, pulsa y mantén la tecla&nbsp;&nbsp;<span class="hardkey"><img alt="ma" src="/Media/Mlg/ma.png"></span> &nbsp;y pulsa la tecla encoder&nbsp; <span class="hardkey"><img alt="encoder" src="/Media/Mlg/encoder.png"></span>. El encoder adquiere una resolución ultra fina.</p>

<p><img alt="" src="/Media/Image/Dot2_ViewsandWindows_BeamPresetType04_1-0.PNG"></p>

<p>Para selecionar el valor, gira el encoder a izquierda y derecha.<br>
Para abrir la&nbsp;<a href="/Topic/014d961b-8de1-4f48-92de-e6da3cc6a15f">calculadora</a>&nbsp;presiona el encoder.</p>

<a name="toc_header_anchor_8" id="toc_header_anchor_8" class="topic-toc-item"></a><h2>Links relacionados</h2>

<ul>
	<li><a href="/Topic/014d961b-8de1-4f48-92de-e6da3cc6a15f">Calculadora</a></li>
	<li><a href="/Topic/1d3c4f8d-0d36-44da-9f6d-fa91f0db3024">¿Cómo trabajar con Presets?</a></li>
	<li><a href="/Topic/740955a8-3b27-4e50-b35c-7a728c1d9c38">¿Qué son Presets</a></li>
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
		<input id="CurrentGuid" name="CurrentGuid" type="hidden" value="f98480e2-f5e7-48f9-9eed-453881b3a6ba">
	</span>
</form></div>&nbsp;	</span>
	<span class="pull-right" style="white-space: nowrap;">
			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/Window_Backup/es/1.2'; " title="Go to previous page 'Backup'">
				<i class="icon-arrow-left"></i> previous
			</button>

			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/View_Calculator/es/1.2';" title="Go to next page 'Calculadora'">
				next <i class="icon-arrow-right"></i> 
			</button>
	</span>
</div>
	<div class="clear-fix"></div>
	<div class="pull-right">
	
			<button class="btn btn-mini" onclick="location.href='/Media/TopicPdf/18360/7';" title="Open/Save this topic as PDF document for viewing or printing">
				<img src="/Content/images/icons/filetype_pdf.png"> Open topic as PDF
			</button>
	</div>
<div class="clear-fix" style="margin-bottom: 10px"></div>
</div>

	