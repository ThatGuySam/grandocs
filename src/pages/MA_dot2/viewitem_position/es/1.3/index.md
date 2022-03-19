
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
		<input id="CurrentGuid" name="CurrentGuid" type="hidden" value="6cc94a63-1d90-4188-ab0c-d5ba5594b845">
	</span>
</form></div>&nbsp;	</span>
	<span class="pull-right" style="white-space: nowrap;">
			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/window_PatchAndFixtureSchedule/es/1.3'; " title="Go to previous page 'Patch and Fixture Schedule'">
				<i class="icon-arrow-left"></i> previous
			</button>

			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/ViewItem_Preset/es/1.3';" title="Go to next page 'Presets Pools'">
				next <i class="icon-arrow-right"></i> 
			</button>
	</span>
</div>
<div class="clear-fix" style="margin-bottom: 10px"></div>
</div>

					<div class="infobox"><b>Hint:</b><br><b>New help version</b><br>The help version you selected belongs to an older software version. <a href="/Topic/SetCurrentVersionNumber/29/6cc94a63-1d90-4188-ab0c-d5ba5594b845">You may want to view the latest help version.</a></div>

			<div class="pull-right">
					<button class="btn btn-mini" style="margin-right: 10px; height: 30px;" onclick="location.href = '/Media/TopicPdf/18212/12'; " title="Open/Save this topic as PDF document for viewing or printing">
						<img src="/Content/images/icons/filetype_pdf.png" style="height: 24px;"> Open topic as PDF
					</button>
				<span class="badge badge-info">Version 1.3</span>
			</div>
		<h1>Vista Tipo de Preset Posición</h1>

			<div class="topic-table-of-contents">
				<h2>Table of contents of this topic</h2>
				<div class="topic-toc-toggler topic-toc-toggler-hide"><a href="#" onclick="$('.topic-toc-ul').toggle(); $('.topic-toc-toggler-hide').hide(); $('.topic-toc-toggler-show').show(); return false;">hide</a></div>
				<div class="topic-toc-toggler topic-toc-toggler-show" style="display: none;"><a href="#" onclick="$('.topic-toc-ul').toggle(); $('.topic-toc-toggler-hide').show(); $('.topic-toc-toggler-show').hide(); return false;">show</a></div>
				<ul class="topic-toc-ul">
						<li>
							<a href="#toc_header_anchor_1">Vista Posición</a>
						</li>
						<li>
							<a href="#toc_header_anchor_2">Vista Raw Position</a>
						</li>
						<li>
							<a href="#toc_header_anchor_3">Funciones Barra Encoders</a>
						</li>
				</ul>
			</div>

		<p>Para ir a la Vista <strong>Tipo de Preset Posición</strong>, pulsa&nbsp;<span class="softkey">Posición</span>&nbsp;en la&nbsp;<a href="/Topic/60e350ef-d825-4072-a644-ed2430d82522">Barra Tipo de Preset</a>&nbsp;o presiona las teclas&nbsp;<span class="hardkey"><img alt="ma" src="/Media/Mlg/ma_1.png"></span>&nbsp; y el número&nbsp;<span class="hardkey">2</span>&nbsp;</p>

<p>La vista tipo de preset posición sólo está activa si el aparato seleccionado tiene atributos de posición.</p>

<p><img alt="" src="/Media/Image/Dot2_ViewsandWindows_PositionPresetTypeView11_1-0.PNG"></p>

<p>La vista preset tipo posición está dividida en la vista <strong>posición</strong> y en la vista <strong>raw posición</strong>.</p>

<p>Para abrir la vista de efectos de Posición en la pantalla 1 pulsa sobre el icono&nbsp;<img alt="" src="/Media/Image/Dot2_ViewsandWindows_ControlElements_TitleBar17_1-0.PNG">.&nbsp;Si un efecto se está ejecutando en un aparato seleccionado la vista para el tipo de&nbsp;preset&nbsp;cambia a modo efecto con un color azul en la barra de título.</p>

<a name="toc_header_anchor_1" id="toc_header_anchor_1" class="topic-toc-item"></a><h2>Vista Posición</h2>

<p>La vista posición es la primera pestaña de la vista tipo de preset posición.</p>

<p>En esta vista controlas los valores de la posición actual en grados.</p>

<p><strong>Deslizador de Pan:</strong> Para seleccionar el valor Pan, mueve el deslizador arriba o abajo.<br>
<strong>Deslizador de Tilt:</strong> Para seleccionar el valor tilt, mueve el deslizador arriba o abajo.<br>
Para llevar el tipo de aparato a la posición central, pulsa&nbsp;<span class="softkey">Center</span>.</p>

<p>La parte más a la derecha de la vista tiene varios botones para ajustar los valores de posición.<br>
Hay dos funciones para ajustar pan y tilt juntos.</p>

<p><br>
<img alt="" src="/Media/Image/Dot2_ViewsandWindows_PositionPresetTypeView01_1-0.PNG"><br>
<strong>Flip:</strong> Esta función se utiliza para indicar al aparato que se mueva hasta la misma posición pero por el camino contrario al que lo está haciendo. Los valores están activos en el programador.</p>

<p><img alt="" src="/Media/Image/Dot2_ViewsandWindows_PositionPresetTypeView02_1-0.PNG"><br>
<strong>Home:</strong>&nbsp;Para llevar pan y tilt a la posición por defecto, pulsa&nbsp;&nbsp;<span class="softkey">Home</span>. Los valores están activos en el programador.</p>

<p>Hay seis funciones diferentes de alineación.<br>
Align es una función para ajustar los valores de posición de los aparatos en el orden seleccionado.</p>

<p>Los botones de Align tienen la misma función que la tecla&nbsp;<span class="hardkey">Align</span>. Para más información consulta&nbsp;<a href="/Topic/653b1e1b-2bcd-4065-b918-bef12958ceb3">Tecla Align</a>.</p>

<p><br>
<strong>Align &gt;:</strong>&nbsp;Para ajustar desde nivel alto a bajo.</p>

<p><img alt="" src="/Media/Image/Dot2_ViewsandWindows_PositionPresetTypeView04_1-0.PNG"></p>

<p><strong>Align &lt;: </strong>Para ajustar desde nivel bajo a alto.</p>

<p><br>
<img alt="" src="/Media/Image/Dot2_ViewsandWindows_PositionPresetTypeView05_1-0.PNG"></p>

<p><strong>Align &gt;&lt;:</strong> Para ajustar desde nivel alto al bajo en medio, y desde el medio del nivel bajo al alto.</p>

<p><img alt="" src="/Media/Image/Dot2_ViewsandWindows_PositionPresetTypeView06_1-0.PNG"></p>

<p><strong>Align &lt;&gt;: </strong>Para ajustar desde nivel bajo al alto en medio, y desde el medio del nivel alto al bajo.</p>

<p><img alt="" src="/Media/Image/Dot2_ViewsandWindows_PositionPresetTypeView07_1-0.PNG"><br>
<strong>Wings:</strong>&nbsp;Esto es solo para el atributo de pan dividiendo la selección desde la mitad en dos grupos.<br>
El primer aparato se encuentra en el grupo 1 y sigue los valores de pan introducidos.<br>
El ultimo aparato se encuentra en el grupo 2 y actúa como un espejo invertido.</p>

<p><img alt="" src="/Media/Image/Dot2_ViewsandWindows_PositionPresetTypeView08_1-0.PNG"></p>

<p><strong>No align:</strong> Para ajustar sin alineación, la función Align debe estar desactivada.</p>

<a name="toc_header_anchor_2" id="toc_header_anchor_2" class="topic-toc-item"></a><h2>Vista Raw Position</h2>

<p>La vista raw position está localizada en la segunda pestaña de la vista tipo preset posición.</p>

<p><img alt="" src="/Media/Image/Dot2_ViewsandWindows_PositionPresetTypeView10_1-0.PNG"></p>

<p>En la vista raw position controlas los valores del canal raw posición en&nbsp;<a href="/Topic/bb882594-fcad-4b4a-b6c7-4ab7a20b088e">valores naturales</a>&nbsp;de los aparatos seleccionados.</p>

<a name="toc_header_anchor_3" id="toc_header_anchor_3" class="topic-toc-item"></a><h2>Funciones Barra Encoders</h2>

<p>La velocidad del encoder por defecto no tiene cifras decimales.<br>
Para cambiar la velocidad del encoder a lenta, pulsa la tecla encoder&nbsp;<span class="hardkey"><img alt="encoder" src="/Media/Mlg/encoder.png"></span>.<br>
Para cambiar la velocidad del encoder a ultra lenta pulsa las teclas&nbsp;&nbsp;<span class="hardkey"><img alt="ma" src="/Media/Mlg/ma.png"></span>&nbsp;y&nbsp;<span class="hardkey"><img alt="encoder" src="/Media/Mlg/encoder.png"></span>.</p>

<p><img alt="" src="/Media/Image/Dot2_ViewsandWindows_PositionPresetTypeView09_1-0.PNG"></p>

<p><strong>Pan (°)/Pan:</strong><br>
Para seleccionar el valor de Pan, gira el encoder a izquierda o derecha.<br>
Para abrir la&nbsp;<a href="/Topic/014d961b-8de1-4f48-92de-e6da3cc6a15f">calculadora</a>&nbsp;presiona el encoder.</p>

<p><strong>Tilt (°)/Tilt:</strong><br>
Para seleccionar el valor de Tilt, gira el encoder a izquierda o derecha.<br>
Para abrir la&nbsp;<a href="/Topic/014d961b-8de1-4f48-92de-e6da3cc6a15f">calculadora</a>&nbsp;presiona el encoder.</p>

<a name="toc_header_anchor_4" id="toc_header_anchor_4" class="topic-toc-item"></a><h2>Links relacionados</h2>

<ul>
	<li><a href="/Topic/740955a8-3b27-4e50-b35c-7a728c1d9c38">¿Qué son Presets?</a></li>
	<li><a href="/Topic/1d3c4f8d-0d36-44da-9f6d-fa91f0db3024">¿Cómo trabajar con Presets?</a></li>
</ul>


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
		<input id="CurrentGuid" name="CurrentGuid" type="hidden" value="6cc94a63-1d90-4188-ab0c-d5ba5594b845">
	</span>
</form></div>&nbsp;	</span>
	<span class="pull-right" style="white-space: nowrap;">
			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/window_PatchAndFixtureSchedule/es/1.3'; " title="Go to previous page 'Patch and Fixture Schedule'">
				<i class="icon-arrow-left"></i> previous
			</button>

			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/ViewItem_Preset/es/1.3';" title="Go to next page 'Presets Pools'">
				next <i class="icon-arrow-right"></i> 
			</button>
	</span>
</div>
	<div class="clear-fix"></div>
	<div class="pull-right">
	
			<button class="btn btn-mini" onclick="location.href='/Media/TopicPdf/18212/12';" title="Open/Save this topic as PDF document for viewing or printing">
				<img src="/Content/images/icons/filetype_pdf.png"> Open topic as PDF
			</button>
	</div>
<div class="clear-fix" style="margin-bottom: 10px"></div>
</div>

	