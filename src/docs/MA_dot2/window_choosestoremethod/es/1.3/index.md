---
originalUrl: 'https://help2.malighting.com/Page/MA_dot2/window_choosestoremethod/es/1.3'
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
		<input id="CurrentGuid" name="CurrentGuid" type="hidden" value="662173f7-aa38-4f78-b6da-7d357eace37d">
	</span>
</form></div>&nbsp;	</span>
	<span class="pull-right" style="white-space: nowrap;">
			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/window_ChooseDeleteMethod/es/1.3'; " title="Go to previous page 'Choose Delete Method'">
				<i class="icon-arrow-left"></i> previous
			</button>

			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/window_chooseupdatemethod/es/1.3';" title="Go to next page 'Choose Update Method'">
				next <i class="icon-arrow-right"></i> 
			</button>
	</span>
</div>
<div class="clear-fix" style="margin-bottom: 10px"></div>
</div>

			<div class="infobox"><b>Hint:</b><br><b>New English version</b><br>The language you selected is outdated. <a href="/Topic/662173f7-aa38-4f78-b6da-7d357eace37d/en">You may want to view the more up-to-date English version?</a></div>
		
			<div class="pull-right">
					<button class="btn btn-mini" style="margin-right: 10px; height: 30px;" onclick="location.href = '/Media/TopicPdf/16608/7'; " title="Open/Save this topic as PDF document for viewing or printing">
						<img src="/Content/images/icons/filetype_pdf.png" style="height: 24px;"> Open topic as PDF
					</button>
				<span class="badge badge-info">Version 1.2</span>
			</div>
		<h1>Ventana Elegir Método de Grabación</h1>

			<div class="topic-table-of-contents">
				<h2>Table of contents of this topic</h2>
				<div class="topic-toc-toggler topic-toc-toggler-hide"><a href="#" onclick="$('.topic-toc-ul').toggle(); $('.topic-toc-toggler-hide').hide(); $('.topic-toc-toggler-show').show(); return false;">hide</a></div>
				<div class="topic-toc-toggler topic-toc-toggler-show" style="display: none;"><a href="#" onclick="$('.topic-toc-ul').toggle(); $('.topic-toc-toggler-hide').show(); $('.topic-toc-toggler-show').hide(); return false;">show</a></div>
				<ul class="topic-toc-ul">
						<li>
							<a href="#toc_header_anchor_1">Normal</a>
						</li>
						<li>
							<a href="#toc_header_anchor_2">Cue Only</a>
						</li>
						<li>
							<a href="#toc_header_anchor_3">Mezclar</a>
						</li>
						<li>
							<a href="#toc_header_anchor_4">Eliminar</a>
						</li>
						<li>
							<a href="#toc_header_anchor_5">Sobrescribir</a>
						</li>
						<li>
							<a href="#toc_header_anchor_6">Crear Segunda Cue</a>
						</li>
						<li>
							<a href="#toc_header_anchor_7">Funciones Barra Encoders</a>
						</li>
				</ul>
			</div>

		<p>Si quieres almacenar nuevos valores del programador en un ejecutor con una cue existente en él o si quieres sobrescribir una cue existente en un ejecutor,&nbsp;la consola te pide que elijas el método de grabación.</p>

<p>Hay dos ventanas de opciones de grabación disponibles.</p>

<p>El método de grabación con las opciones: &nbsp;</p>

<ul>
	<li>Mezclar</li>
	<li>Eliminar</li>
	<li>Sobrescribir</li>
	<li>Crear Segunda Cue</li>
</ul>

<p>&nbsp;aparecen si grabas por primera vez la segunda cue en un ejecutor (= cue list)</p>

<p>&nbsp;</p>

<p><img alt="" src="/Media/Image/Dot2_ViewsandWindows_ChooseStoreMethod01_1-0.PNG">y</p>

<p><em>Imagen 1: Ventana seleccionar método de grabación - Segunda cue por primera vez</em></p>

<p>Hay cuatro modos de grabación disponibles:</p>

<div class="tip"><strong>Truco:</strong><br>
Usa las teclas&nbsp;<span class="hardkey">Prev</span>,&nbsp;<span class="hardkey">Next</span>,&nbsp;<span class="hardkey">Up</span>, y&nbsp;<span class="hardkey">Down</span>&nbsp;para navegar en este tipo de ventanas y presiona&nbsp;<span class="hardkey">Please</span>&nbsp;para confirmar.</div>

<p><strong>Mezclar:</strong><br>
Selecciona para mezclar los valores del programador en la cue.</p>

<p><strong>Eliminar:</strong><br>
Selecciona para eliminar los valores del programador en la cue.</p>

<p><strong>Sobrescribir:</strong><br>
Selecciona para sobrescribir la cue existente con los valores del programador. Se eliminarán los valores anteriores.</p>

<p><strong>Crear Segunda Cue:</strong><br>
Selecciona para crear una segunda cue con los valores del programador. Esto creará un cuelist.</p>

<p>Si grabas nuevos valores del programador en una cue&nbsp;que ya existe, la ventana métodos de grabación tiene opciones adicionales.</p>

<ul>
	<li>Normal</li>
	<li>Cue Only</li>
</ul>

<p><img alt="" src="/Media/Image/Dot2_ViewsandWindows_ChooseStoreMethod07_1-0.png"></p>

<p><em>Imagen 2: Ventana seleccionar método de grabación - Grabar en una cue existente</em></p>

<p>Además de los métodos Mezclar, Eliminar y Sobrescribir puedes seleccionar el Modo de grabación.</p>

<p><strong>Modo de grabación Normal:</strong><br>
Pulsa para grabar la cue con protección de tracking. Consultar,&nbsp;<a href="/Topic/dbf1ee09-43cb-48a1-9e9d-6d0bc5c8feb6">¿Qué es Tracking?</a></p>

<p><strong>Modo de grabación Cue&nbsp;Only:</strong><br>
Pulsa para grabar la cue&nbsp;entre otras dos cues, la cue grabada no afectará a los valores de tracking de las siguientes cues</p>

<a name="toc_header_anchor_1" id="toc_header_anchor_1" class="topic-toc-item"></a><h2>Normal</h2>

<p>Supongamos que quieres grabar la cue 2.1 entre la cue 2 y la cue 3 con protección de tracking.</p>

<table border="1" cellpadding="5" cellspacing="5" style="width:500px">
	<thead>
		<tr>
			<th scope="col" style="background-color:rgb(131, 131, 131); vertical-align:bottom">Cue</th>
			<th scope="col" style="background-color:rgb(131, 131, 131); vertical-align:bottom">Fixture 1</th>
			<th scope="col" style="background-color:rgb(131, 131, 131); vertical-align:bottom">Fixture 2</th>
			<th scope="col" style="background-color:rgb(131, 131, 131); vertical-align:bottom">Fixture 1</th>
			<th scope="col" style="background-color:rgb(131, 131, 131); vertical-align:bottom">Fixture 2</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td style="background-color:rgb(255, 255, 238) !important; vertical-align:top">1</td>
			<td style="background-color:rgb(255, 255, 238) !important; vertical-align:top">Dimmer At 50</td>
			<td style="background-color:rgb(255, 255, 238) !important; vertical-align:top">Dimmer At 50</td>
			<td style="background-color:rgb(255, 255, 238) !important; vertical-align:top">Dimmer At 50</td>
			<td style="background-color:rgb(255, 255, 238) !important; vertical-align:top">Dimmer At 50</td>
		</tr>
		<tr>
			<td style="background-color:rgb(255, 255, 238) !important; vertical-align:top">2</td>
			<td style="background-color:rgb(255, 255, 238) !important; vertical-align:top">Dimmer At 0</td>
			<td style="background-color:rgb(255, 255, 238) !important; vertical-align:top">Dimmer At 100</td>
			<td style="background-color:rgb(255, 255, 238) !important; vertical-align:top">Dimmer At 0</td>
			<td style="background-color:rgb(255, 255, 238) !important; vertical-align:top">Dimmer At 100</td>
		</tr>
		<tr>
			<td style="background-color:rgb(255, 255, 238) !important; vertical-align:top">2.1</td>
			<td style="background-color:rgb(255, 255, 238) !important; vertical-align:top">&nbsp;</td>
			<td style="background-color:rgb(255, 255, 238) !important; vertical-align:top">&nbsp;</td>
			<td style="background-color:rgb(255, 255, 238) !important; vertical-align:top">Dimmer At 33</td>
			<td style="background-color:rgb(255, 255, 238) !important; vertical-align:top">Dimmer At 33</td>
		</tr>
		<tr>
			<td style="background-color:rgb(255, 255, 238) !important; vertical-align:top">3</td>
			<td style="background-color:rgb(255, 255, 238) !important; vertical-align:top">Dimmer At 0 (tracked)</td>
			<td style="background-color:rgb(255, 255, 238) !important; vertical-align:top">Dimmer At 80</td>
			<td style="background-color:rgb(255, 255, 238) !important; vertical-align:top">Dimmer At 33 (tracked)</td>
			<td style="background-color:rgb(255, 255, 238) !important; vertical-align:top">Dimmer At 80</td>
		</tr>
	</tbody>
</table>

<ol>
	<li>
	<p>Presiona&nbsp;<span class="hardkey">Store</span>&nbsp;<span class="hardkey">Cue</span>&nbsp;<span class="hardkey">2</span>&nbsp;<span class="hardkey">.</span>&nbsp;<span class="hardkey">1</span>&nbsp;y pulsa en el&nbsp;<span class="softkey">ejecutor principal</span>&nbsp;en la&nbsp;<a href="/Topic/d8ca000e-cf13-448d-ac3e-129272e731d8">vista barra ejecutores</a>.</p>
	</li>
	<li>
	<p>Pulsa&nbsp;<span class="softkey">Ok</span>. Normal está seleccionada por defecto.</p>
	</li>
	<li>La cue 2.1 se ha grabado&nbsp;entre las cues&nbsp;2 y 3. La&nbsp;Cue 3 arrastra valores de&nbsp;tracking&nbsp;de dimmer del aparato 1.</li>
</ol>

<p>&nbsp;</p>

<a name="toc_header_anchor_2" id="toc_header_anchor_2" class="topic-toc-item"></a><h2>Cue Only</h2>

<p>Supongamos que quieres grabar la cue 2.1 entre las cues 2 y 3 sin que afecte a los valores de tracking&nbsp;de las siguientes cues.</p>

<table border="1" cellpadding="5" cellspacing="5" style="width:500px">
	<thead>
		<tr>
			<th scope="col" style="background-color:rgb(131, 131, 131); vertical-align:bottom">Cue</th>
			<th scope="col" style="background-color:rgb(131, 131, 131); vertical-align:bottom">Fixture 1</th>
			<th scope="col" style="background-color:rgb(131, 131, 131); vertical-align:bottom">Fixture 2</th>
			<th scope="col" style="background-color:rgb(131, 131, 131); vertical-align:bottom">Fixture 1</th>
			<th scope="col" style="background-color:rgb(131, 131, 131); vertical-align:bottom">Fixture 2</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td style="background-color:rgb(255, 255, 238) !important; vertical-align:top">1</td>
			<td style="background-color:rgb(255, 255, 238) !important; vertical-align:top">Dimmer At 50</td>
			<td style="background-color:rgb(255, 255, 238) !important; vertical-align:top">Dimmer At 50</td>
			<td style="background-color:rgb(255, 255, 238) !important; vertical-align:top">Dimmer At 50</td>
			<td style="background-color:rgb(255, 255, 238) !important; vertical-align:top">Dimmer At 50</td>
		</tr>
		<tr>
			<td style="background-color:rgb(255, 255, 238) !important; vertical-align:top">2</td>
			<td style="background-color:rgb(255, 255, 238) !important; vertical-align:top">Dimmer At 0</td>
			<td style="background-color:rgb(255, 255, 238) !important; vertical-align:top">Dimmer At 100</td>
			<td style="background-color:rgb(255, 255, 238) !important; vertical-align:top">Dimmer At 0</td>
			<td style="background-color:rgb(255, 255, 238) !important; vertical-align:top">Dimmer At 100</td>
		</tr>
		<tr>
			<td style="background-color:rgb(255, 255, 238) !important; vertical-align:top">2.1</td>
			<td style="background-color:rgb(255, 255, 238) !important; vertical-align:top">&nbsp;</td>
			<td style="background-color:rgb(255, 255, 238) !important; vertical-align:top">&nbsp;</td>
			<td style="background-color:rgb(255, 255, 238) !important; vertical-align:top">Dimmer At 33</td>
			<td style="background-color:rgb(255, 255, 238) !important; vertical-align:top">Dimmer At 33</td>
		</tr>
		<tr>
			<td style="background-color:rgb(255, 255, 238) !important; vertical-align:top">3</td>
			<td style="background-color:rgb(255, 255, 238) !important; vertical-align:top">Dimmer At 0 (tracked)</td>
			<td style="background-color:rgb(255, 255, 238) !important; vertical-align:top">Dimmer At 80</td>
			<td style="background-color:rgb(255, 255, 238) !important; vertical-align:top">Dimmer At 0</td>
			<td style="background-color:rgb(255, 255, 238) !important; vertical-align:top">Dimmer At 80</td>
		</tr>
	</tbody>
</table>

<ol>
	<li>
	<p>Presiona&nbsp;<span class="hardkey">Store</span>&nbsp;<span class="hardkey">Cue</span>&nbsp;<span class="hardkey">2</span>&nbsp;<span class="hardkey">.</span>&nbsp;<span class="hardkey">1</span>&nbsp;y pulsa en el&nbsp;<span class="softkey">ejecutor principal</span>&nbsp;en la&nbsp;<a href="/Topic/d8ca000e-cf13-448d-ac3e-129272e731d8">vista barra ejecutores</a>.</p>
	</li>
	<li>
	<p>Pulsa&nbsp;<span class="softkey">Cue Only</span>&nbsp;y luego&nbsp;<span class="softkey">Ok</span>.</p>
	</li>
	<li>La cue 2.1 se ha grabado entre las cues 2 y 3. La cue 3 no arrastra valores de tracking&nbsp;desde la cue 2.1</li>
</ol>

<p>&nbsp;</p>

<a name="toc_header_anchor_3" id="toc_header_anchor_3" class="topic-toc-item"></a><h2>Mezclar</h2>

<p>Supongamos que agregas los valores actuales del programador a la cue 1 &nbsp;ejecutor principal.</p>

<p><img alt="" src="/Media/Image/Dot2_ViewsandWindows_ChooseStoreMethod03_1-2.png"></p>

<p><em>Imagen 3: Valores de la cue 1 antes de grabar mezclando</em></p>

<ol>
	<li>Presiona&nbsp;<span class="hardkey">Store</span>&nbsp;y pulsa en el&nbsp;&nbsp;<span class="softkey">Ejecutor principal</span>&nbsp;en la&nbsp;<a href="/Topic/af87cdc8-b54b-41ee-b614-26065230c7ec">Vista Barra Ejecutor</a>.</li>
	<li>Selecciona&nbsp;<span class="softkey">Mezclar</span>.</li>
</ol>

<p>&nbsp;</p>

<p><img alt="" src="/Media/Image/Dot2_ViewsandWindows_ChooseStoreMethod04_1-2.png"></p>

<p><em>Imagen 4: Valores de la cue 1 después de grabar mezclando</em></p>

<p>Los valores actuales del programador son añadidos a la cue 1.</p>

<p>&nbsp;</p>

<a name="toc_header_anchor_4" id="toc_header_anchor_4" class="topic-toc-item"></a><h2>Eliminar</h2>

<p>Supongamos que eliminas el aparato ID 2 de la cue 1 en el ejecutor principal.</p>

<p><img alt="" src="/Media/Image/Dot2_ViewsandWindows_ChooseStoreMethod04_1-2.png"></p>

<p><em>Imagen 5: Valores de la cue 1 antes de grabar eliminando</em></p>

<ol>
	<li>Selecciona el aparato&nbsp;ID 2 en la&nbsp;<a href="/Topic/989f0b88-de3d-4818-8c0b-a69fa90b2106">Vista de Aparatos</a>.</li>
	<li>Presiona dos veces&nbsp;<span class="hardkey">Please</span>. Todos los valores del aparato&nbsp;32 están en el programador.</li>
	<li>Presiona&nbsp;<span class="hardkey">Store</span>&nbsp;<span class="hardkey">Cue</span>&nbsp;<span class="hardkey">1</span>&nbsp;y pulsa en el&nbsp;&nbsp;<span class="softkey">Ejecutor principal</span>&nbsp;en la&nbsp;<a href="/Topic/af87cdc8-b54b-41ee-b614-26065230c7ec">Vista Barra Ejecutor</a>.</li>
	<li>Pulsa&nbsp;<span class="softkey">Eliminar</span>.</li>
</ol>

<p><img alt="" src="/Media/Image/Dot2_ViewsandWindows_ChooseStoreMethod05_1-2.png"></p>

<p><em>Imagen 6: Valores de la cue 1 después de grabar eliminando</em></p>

<p>El aparato ID 2 se ha eliminado de la cue 1 en el ejecutor principal.</p>

<p>&nbsp;</p>

<a name="toc_header_anchor_5" id="toc_header_anchor_5" class="topic-toc-item"></a><h2>Sobrescribir</h2>

<p>Supongamos que quieres sobrescribir la cue 1 en el ejecutor principal con los valores actuales existentes en el programador.</p>

<ol>
	<li>Presiona&nbsp;<span class="hardkey">Store</span>&nbsp;y pulsa en el&nbsp;&nbsp;<span class="softkey">Ejecutor principal</span>&nbsp;en la&nbsp;<a href="/Topic/af87cdc8-b54b-41ee-b614-26065230c7ec">Vista Barra Ejecutor</a>.</li>
	<li>Pulsa&nbsp;<span class="softkey">Sobrescribir</span>.</li>
</ol>

<p>La cue 1 del ejecutor principal tiene ahora los valores actuales del programador. Se eliminan todos los valores anteriores de la cue.</p>

<p>&nbsp;</p>

<a name="toc_header_anchor_6" id="toc_header_anchor_6" class="topic-toc-item"></a><h2>Crear Segunda Cue</h2>

<p>Supongamos que creas un cuelist en el ejecutor principal.</p>

<p>&nbsp; <img alt="" src="/Media/Image/Dot2_ViewsandWindows_ChooseStoreMethod06_1-1.PNG"></p>

<p><em>Imagen 7: Cue list en ejecutor principal</em></p>

<ol>
	<li>Presiona&nbsp;<span class="hardkey">Store</span> y pulsa en el&nbsp;&nbsp;<span class="softkey">Ejecutor principal</span>&nbsp;en la&nbsp;<a href="/Topic/af87cdc8-b54b-41ee-b614-26065230c7ec">Vista Barra Ejecutor</a>.</li>
	<li>Pulsa&nbsp;<span class="softkey">Crear Segunda Cue</span>.</li>
</ol>

<p>Los valores actuales de programador se almacenan como una segunda cue en el ejecutor principal .</p>

<p>&nbsp;</p>

<a name="toc_header_anchor_7" id="toc_header_anchor_7" class="topic-toc-item"></a><h2>Funciones Barra Encoders</h2>

<p><img alt="" src="/Media/Image/Dot2_ViewsandWindows_ChooseStoreMethod02_1-0.PNG"></p>

<p><em>Imagen 8: Funciones Barra Encoders - Seleccionar método de grabación</em></p>

<p><strong>Seleccionar:</strong><br>
Para seleccionar una función , gira el encoder a izquierda o derecha.&nbsp;<br>
Para confirmar una función seleccionada , presiónalo.</p>

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
		<input id="CurrentGuid" name="CurrentGuid" type="hidden" value="662173f7-aa38-4f78-b6da-7d357eace37d">
	</span>
</form></div>&nbsp;	</span>
	<span class="pull-right" style="white-space: nowrap;">
			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/window_ChooseDeleteMethod/es/1.3'; " title="Go to previous page 'Choose Delete Method'">
				<i class="icon-arrow-left"></i> previous
			</button>

			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/window_chooseupdatemethod/es/1.3';" title="Go to next page 'Choose Update Method'">
				next <i class="icon-arrow-right"></i> 
			</button>
	</span>
</div>
	<div class="clear-fix"></div>
	<div class="pull-right">
	
			<button class="btn btn-mini" onclick="location.href='/Media/TopicPdf/16608/7';" title="Open/Save this topic as PDF document for viewing or printing">
				<img src="/Content/images/icons/filetype_pdf.png"> Open topic as PDF
			</button>
	</div>
<div class="clear-fix" style="margin-bottom: 10px"></div>
</div>

	
