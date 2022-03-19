
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
		<input id="CurrentGuid" name="CurrentGuid" type="hidden" value="76a4961b-8fb5-4482-b0af-894a4a931aa9">
	</span>
</form></div>&nbsp;	</span>
	<span class="pull-right" style="white-space: nowrap;">
			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/window_windowsettings/es/1.2'; " title="Go to previous page 'Window Settings'">
				<i class="icon-arrow-left"></i> previous
			</button>

			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/window_wingsandnodesdiagnosis/es/1.2';" title="Go to next page 'Wings &amp; Nodes Diagnosis'">
				next <i class="icon-arrow-right"></i> 
			</button>
	</span>
</div>
<div class="clear-fix" style="margin-bottom: 10px"></div>
</div>

					<div class="infobox"><b>Hint:</b><br><b>New help version</b><br>The help version you selected belongs to an older software version. <a href="/Topic/SetCurrentVersionNumber/29/76a4961b-8fb5-4482-b0af-894a4a931aa9">You may want to view the latest help version.</a></div>

			<div class="pull-right">
					<button class="btn btn-mini" style="margin-right: 10px; height: 30px;" onclick="location.href = '/Media/TopicPdf/14282/7'; " title="Open/Save this topic as PDF document for viewing or printing">
						<img src="/Content/images/icons/filetype_pdf.png" style="height: 24px;"> Open topic as PDF
					</button>
				<span class="badge badge-info">Version 1.2</span>
			</div>
		<h1>Ventana Wings/Nodos</h1>

			<div class="topic-table-of-contents">
				<h2>Table of contents of this topic</h2>
				<div class="topic-toc-toggler topic-toc-toggler-hide"><a href="#" onclick="$('.topic-toc-ul').toggle(); $('.topic-toc-toggler-hide').hide(); $('.topic-toc-toggler-show').show(); return false;">hide</a></div>
				<div class="topic-toc-toggler topic-toc-toggler-show" style="display: none;"><a href="#" onclick="$('.topic-toc-ul').toggle(); $('.topic-toc-toggler-hide').show(); $('.topic-toc-toggler-show').hide(); return false;">show</a></div>
				<ul class="topic-toc-ul">
						<li>
							<a href="#toc_header_anchor_1">&nbsp;</a>
						</li>
						<li>
							<a href="#toc_header_anchor_2">Estado</a>
						</li>
						<li>
							<a href="#toc_header_anchor_3">Funciones Barra Encoders</a>
						</li>
				</ul>
			</div>

		<p><strong>La&nbsp;Ventana Wings&nbsp;</strong>se encuentra en el&nbsp;<a href="/Topic/198599eb-ca20-4e60-b007-bb08cd2ce43b">Setup</a>, columna&nbsp;DMX/RED,&nbsp;<strong>dot2&nbsp;Wings</strong>.</p>

<p><img alt="" src="/Media/Image/Dot2_ViewsandWindows_WingsNodes03_1-1-3.png"></p>

<p><em>Imagen: Ventana Wings</em></p>

<p>La ventana&nbsp; Wings&nbsp;está abierta.</p>

<p>Esta ventana muestra todos los wing slots disponibles.</p>

<p>Además del&nbsp;core fader, hay dos&nbsp;F-wings y dos&nbsp;B-wings posibles, dependiendo de la consola.<br>
El core fader está siempre fijo y es mostrado con una barra de estado color rojo en el lado izquierdo.<br>
Si tienes una consola&nbsp; XL-F or XL-B, este wing es también mostrado como fijo interno con una barra de estado color rojo en el lado izquierdo..</p>

<p>Para asignar un wing externo selecciona en el respectivo wing slot libre &nbsp;<a href="/Topic/10b7a10b-d060-4b5e-86f7-ca31a95ab065">ventana configurar slot</a><br>
Para eliminar un wing&nbsp;selecciona en el respectivo wing slot&nbsp;<a href="/Topic/10b7a10b-d060-4b5e-86f7-ca31a95ab065">ventana configurar slot</a></p>

<p>Un slot seleccionado tiene un marco naranja alrededor de la celda.</p>

<p>Para abandonar la ventana, pulsa&nbsp;<img alt="" src="/Media/Image/Dot2_ViewsandWindows_ControlElements_TitleBar08_1-0.PNG">&nbsp;en la barra de título o presiona&nbsp;<span class="hardkey">Esc</span>&nbsp;en la consola.</p>

<a name="toc_header_anchor_1" id="toc_header_anchor_1" class="topic-toc-item"></a><h2>&nbsp;</h2>

<a name="toc_header_anchor_2" id="toc_header_anchor_2" class="topic-toc-item"></a><h2>Estado</h2>

<p>Un slot puede tener cuatro estados diferentes:</p>

<p><img alt="" src="/Media/Image/Dot2_ViewsandWindows_WingsNodes01_1-0.PNG"><strong>Fijo Interno:</strong></p>

<p>Este slot es fijo interno, por ejemplo, el&nbsp;core fader o el wing adicional de un dot2 XL-B o dot2 XL-F.<br>
Un slot fijo interno se muestra con un indicador de estado rojo</p>

<p><img alt="" src="/Media/Image/Dot2_ViewsandWindows_WingsNodes02_1-0.PNG"><strong>Libre:</strong><br>
Este slot está libre. Puedes asignar un wing.<br>
Un slot libre se muestra con una barra indicadora de estado amarilla.</p>

<p><img alt="" src="/Media/Image/Dot2_ViewsandWindows_WingsNodes04_1-0.png"><strong>Conectado:</strong><br>
Este slot está conectado a un wing.<br>
Además, se muestra la dirección&nbsp; IPv6 del wing.<br>
Un slot conectado se muestra con una barra indicadora de estado color verde lima.</p>

<p><img alt="" src="/Media/Image/Dot2_ViewsandWindows_WingsNodes05_1-0.png"><strong>Asignado:</strong><br>
Este slot está asignado a un wing externo pero no está conectado.<br>
Además se muestra la dirección&nbsp; IPv6 del wing.<br>
Un slot asignado se muestra con una barra indicadora de estado color verde.</p>

<a name="toc_header_anchor_3" id="toc_header_anchor_3" class="topic-toc-item"></a><h2>Funciones Barra Encoders</h2>

<p><img alt="" src="/Media/Image/Dot2_ViewsandWindows_WingsNodes06_1-0.png"></p>

<p>Wing:<br>
Para desplazarte en la columna de los wing slots arriba y abajo, gira el encoder&nbsp;a izquierda o derecha.Para abrir la&nbsp;<a href="/Topic/10b7a10b-d060-4b5e-86f7-ca31a95ab065">Ventana configurar slot</a>, presiona el&nbsp;encoder.</p>

<p>&nbsp;</p>


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
		<input id="CurrentGuid" name="CurrentGuid" type="hidden" value="76a4961b-8fb5-4482-b0af-894a4a931aa9">
	</span>
</form></div>&nbsp;	</span>
	<span class="pull-right" style="white-space: nowrap;">
			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/window_windowsettings/es/1.2'; " title="Go to previous page 'Window Settings'">
				<i class="icon-arrow-left"></i> previous
			</button>

			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/window_wingsandnodesdiagnosis/es/1.2';" title="Go to next page 'Wings &amp; Nodes Diagnosis'">
				next <i class="icon-arrow-right"></i> 
			</button>
	</span>
</div>
	<div class="clear-fix"></div>
	<div class="pull-right">
	
			<button class="btn btn-mini" onclick="location.href='/Media/TopicPdf/14282/7';" title="Open/Save this topic as PDF document for viewing or printing">
				<img src="/Content/images/icons/filetype_pdf.png"> Open topic as PDF
			</button>
	</div>
<div class="clear-fix" style="margin-bottom: 10px"></div>
</div>

	