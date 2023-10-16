---
originalUrl: 'https://help2.malighting.com/Page/MA_dot2/window_emptyexecutor/es/1.2'
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
		<input id="CurrentGuid" name="CurrentGuid" type="hidden" value="6bb6eb55-85ee-40b3-8670-672394179c6f">
	</span>
</form></div>&nbsp;	</span>
	<span class="pull-right" style="white-space: nowrap;">
			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/viewitem_effect/es/1.2'; " title="Go to previous page 'Effects '">
				<i class="icon-arrow-left"></i> previous
			</button>

			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/window_EnterNameForWindow/es/1.2';" title="Go to next page 'Enter Name for'">
				next <i class="icon-arrow-right"></i> 
			</button>
	</span>
</div>
<div class="clear-fix" style="margin-bottom: 10px"></div>
</div>

					<div class="infobox"><b>Hint:</b><br><b>New help version</b><br>The help version you selected belongs to an older software version. <a href="/Topic/SetCurrentVersionNumber/29/6bb6eb55-85ee-40b3-8670-672394179c6f">You may want to view the latest help version.</a></div>

			<div class="pull-right">
					<button class="btn btn-mini" style="margin-right: 10px; height: 30px;" onclick="location.href = '/Media/TopicPdf/14371/7'; " title="Open/Save this topic as PDF document for viewing or printing">
						<img src="/Content/images/icons/filetype_pdf.png" style="height: 24px;"> Open topic as PDF
					</button>
				<span class="badge badge-info">Version 1.2</span>
			</div>
		<h1>Ventana Ejecutor Vacío</h1>

			<div class="topic-table-of-contents">
				<h2>Table of contents of this topic</h2>
				<div class="topic-toc-toggler topic-toc-toggler-hide"><a href="#" onclick="$('.topic-toc-ul').toggle(); $('.topic-toc-toggler-hide').hide(); $('.topic-toc-toggler-show').show(); return false;">hide</a></div>
				<div class="topic-toc-toggler topic-toc-toggler-show" style="display: none;"><a href="#" onclick="$('.topic-toc-ul').toggle(); $('.topic-toc-toggler-hide').show(); $('.topic-toc-toggler-show').hide(); return false;">show</a></div>
				<ul class="topic-toc-ul">
						<li>
							<a href="#toc_header_anchor_1">Ejemplo de Ejecutor:</a>
						</li>
						<li>
							<a href="#toc_header_anchor_2">Ejemplo Master de Grupo</a>
						</li>
						<li>
							<a href="#toc_header_anchor_3">Ejemplo de Ejecutor&nbsp;Master Rate</a>
						</li>
						<li>
							<a href="#toc_header_anchor_4">Ejemplo Ejecutor Master Program Time</a>
						</li>
				</ul>
			</div>

		<p>Para acceder a la <strong>Ventana&nbsp;Ejecutor Vacío</strong>, pulsa en un ejecutor vacío en la&nbsp;<a href="/Topic/d8ca000e-cf13-448d-ac3e-129272e731d8">ventana&nbsp;barra de ejecutores</a>.</p>

<p><img alt="" src="/Media/Image/Dot2_ViewsandWindows_EmptyExecutor01_1-1-3.png"></p>

<p><em>Imagen 1: Ventana Ejecutor Vacío</em></p>

<p>Hay cuatro opciones disponibles para los ejecutores:</p>

<p><strong>Grabar Ejecutor [Executor]:</strong><br>
Selecciona para almacenar los valores activos del programador como una cue.</p>

<p><strong>Grabar Master de Grupo [Group Executor]</strong><strong>:</strong><br>
Selecciona para almacenar los tipos de aparatos seleccionados como un master de grupo en el ejecutor.</p>

<p><strong>Grabar Master de Velocidad [Speed Executor]:</strong><br>
Selecciona para establecer este ejecutor como un Master&nbsp;de Velocidad o Master Rate.<br>
El Master&nbsp;de Velocidad controla la velocidad de los efectos en las cues&nbsp;y la velocidad de reproducción de los chasers.&nbsp;<br>
El&nbsp;Master&nbsp;de Rate multiplica los tiempos de las cues por un factor.&nbsp;</p>

<p><strong>Grabar Master&nbsp;Time [Time Executor]:</strong><br>
Selecciona para establecer este ejecutor como un Master&nbsp;de Fade Time o un Master Program Time<br>
El Master de Fade Time ignora los tiempos fade de las cues, los tiempos on/off y establece el delay de la cue a cero.</p>

<p>El&nbsp;Master&nbsp;Program&nbsp;Time controla los tiempos del&nbsp;fade&nbsp;de todos los valores en el&nbsp;programador entre 0 y 10 segundos.</p>

<p>Esto afecta a ambos, la suma de nuevos valores al programador y la liberación de los mismos del programador con la tecla&nbsp;&nbsp;<span class="hardkey">Clear</span>.</p>

<p>Para salir de la Ventana del Ejecutor Vacío, pulsa&nbsp;&nbsp;<span class="softkey">Esc</span>&nbsp;en la barra de título o presiona&nbsp;<span class="hardkey">Esc</span>&nbsp;en la consola.</p>

<a name="toc_header_anchor_1" id="toc_header_anchor_1" class="topic-toc-item"></a><h2><strong>Ejemplo de Ejecutor:</strong></h2>

<p>Supongamos que vas a almacenar los valores activos del programador como una cue en el ejecutor 1.</p>

<p><img alt="" src="/Media/Image/Dot2_Commands_Store04_1-0.PNG"></p>

<p><em>Imagen 2: Ejecutor con una cue</em></p>

<ol>
	<li>Selecciona el ejecutor 1 vacío en la&nbsp;<a href="/Topic/d8ca000e-cf13-448d-ac3e-129272e731d8">Ventana Barra de Ejecutores</a>. La ventana de ejecutor vacío se abre.</li>
	<li>Pulsa&nbsp;<span class="softkey">Grabar Ejecutor 1</span>.</li>
</ol>

<p>Los valores activos del programador se almacenan en el Ejecutor 1 como un cue&nbsp;</p>

<p>&nbsp;</p>

<a name="toc_header_anchor_2" id="toc_header_anchor_2" class="topic-toc-item"></a><h2><strong>Ejemplo Master de Grupo</strong></h2>

<p>Supongamos que vas a almacenar los aparatos dimmer de la izquierda seleccionados como un master de grupo en el ejecutor 6 vacío.</p>

<p><img alt="" src="/Media/Image/Dot2_ViewsandWindows_EmptyExecutor03_1-0.PNG"></p>

<p><em>Imagen 3: Master&nbsp;de Grupo</em></p>

<ol>
	<li>Selecciona todos los dimmer de la izquierda en la&nbsp;<a href="/Topic/989f0b88-de3d-4818-8c0b-a69fa90b2106">Vista de Aparatos</a>.</li>
	<li>Selecciona el ejecutor 6 vacío en&nbsp;la <a href="/Topic/d8ca000e-cf13-448d-ac3e-129272e731d8">Ventana Barra de Ejecutores</a>. La ventana de ejecutor vacío se abre.</li>
	<li>Pulsa&nbsp;<span class="softkey">Grabar Master de Grupo 6</span>.</li>
</ol>

<p>El Ejecutor 6 es un Master de Grupo.</p>

<a name="toc_header_anchor_3" id="toc_header_anchor_3" class="topic-toc-item"></a><h2><strong>Ejemplo de Ejecutor&nbsp;Master Rate</strong></h2>

<p>Supongamos que configuramos&nbsp;un Master&nbsp;Rate en el ejecutor vacío 6.</p>

<p><img alt="" src="/Media/Image/Dot2_ViewsandWindows_EmptyExecutor04_1-1-3.png"></p>

<p><em>Imagen 4: Master Rate</em></p>

<ol>
	<li>Pulsa en el ejecutor vacío 6 en la&nbsp;<a href="/Topic/d8ca000e-cf13-448d-ac3e-129272e731d8">ventana barra ejecutores</a>.&nbsp; Se abre la ventana de ejecutores vacíos.</li>
	<li>Pulsa&nbsp;<span class="softkey">Store Speed Executor</span>.<br>
	Se abre la ventana de selección de tipo de Master.</li>
	<li>Pulsa&nbsp;<span class="softkey">Master Rate</span>.</li>
</ol>

<p>El Ejecutor 6 es un Master&nbsp;Rate.</p>

<p>&nbsp;</p>

<a name="toc_header_anchor_4" id="toc_header_anchor_4" class="topic-toc-item"></a><h2><strong>Ejemplo Ejecutor Master Program Time</strong></h2>

<p>Supongamos que vas a hacer un Master&nbsp;Program Time&nbsp;en el ejecutor 1 vacío.</p>

<p><img alt="" src="/Media/Image/Dot2_ViewsandWindows_EmptyExecutor02_1-0.PNG"></p>

<p><em>Imagen 5: Master Program Time</em></p>

<ul>
	<li>Pulsa en el ejecutor vacío 1 en la&nbsp;<a href="/Topic/d8ca000e-cf13-448d-ac3e-129272e731d8">ventana barra ejecutores</a>. Se abre la ventana de ejecutores&nbsp;vacíos.</li>
	<li>Pulsa&nbsp;<span class="softkey">Store Time&nbsp;Executor</span>.<br>
	Se abre la ventana de selección de tipo de Master.</li>
	<li>Pulsa&nbsp;<span class="softkey">Prog Time</span>.</li>
</ul>

<p>El Ejecutor 1 es un Master Program Time.</p>

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
		<input id="CurrentGuid" name="CurrentGuid" type="hidden" value="6bb6eb55-85ee-40b3-8670-672394179c6f">
	</span>
</form></div>&nbsp;	</span>
	<span class="pull-right" style="white-space: nowrap;">
			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/viewitem_effect/es/1.2'; " title="Go to previous page 'Effects '">
				<i class="icon-arrow-left"></i> previous
			</button>

			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/window_EnterNameForWindow/es/1.2';" title="Go to next page 'Enter Name for'">
				next <i class="icon-arrow-right"></i> 
			</button>
	</span>
</div>
	<div class="clear-fix"></div>
	<div class="pull-right">
	
			<button class="btn btn-mini" onclick="location.href='/Media/TopicPdf/14371/7';" title="Open/Save this topic as PDF document for viewing or printing">
				<img src="/Content/images/icons/filetype_pdf.png"> Open topic as PDF
			</button>
	</div>
<div class="clear-fix" style="margin-bottom: 10px"></div>
</div>

	
