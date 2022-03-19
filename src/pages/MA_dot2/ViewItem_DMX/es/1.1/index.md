
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
		<input id="CurrentGuid" name="CurrentGuid" type="hidden" value="2f939332-43b1-44f0-9a0e-3121d5083e70">
	</span>
</form></div>&nbsp;	</span>
	<span class="pull-right" style="white-space: nowrap;">
			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/ViewItem_Dimmer/es/1.1'; " title="Go to previous page 'Tipo de Preset Dimmer'">
				<i class="icon-arrow-left"></i> previous
			</button>

			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/window_editcuenumbers/es/1.1';" title="Go to next page 'Editar Número(s) de Cue'">
				next <i class="icon-arrow-right"></i> 
			</button>
	</span>
</div>
<div class="clear-fix" style="margin-bottom: 10px"></div>
</div>

					<div class="infobox"><b>Hint:</b><br><b>New help version</b><br>The help version you selected belongs to an older software version. <a href="/Topic/SetCurrentVersionNumber/29/2f939332-43b1-44f0-9a0e-3121d5083e70">You may want to view the latest help version.</a></div>

			<div class="pull-right">
					<button class="btn btn-mini" style="margin-right: 10px; height: 30px;" onclick="location.href = '/Media/TopicPdf/14372/3'; " title="Open/Save this topic as PDF document for viewing or printing">
						<img src="/Content/images/icons/filetype_pdf.png" style="height: 24px;"> Open topic as PDF
					</button>
				<span class="badge badge-info">Version 1.1</span>
			</div>
		<h1>Vista DMX</h1>

			<div class="topic-table-of-contents">
				<h2>Table of contents of this topic</h2>
				<div class="topic-toc-toggler topic-toc-toggler-hide"><a href="#" onclick="$('.topic-toc-ul').toggle(); $('.topic-toc-toggler-hide').hide(); $('.topic-toc-toggler-show').show(); return false;">hide</a></div>
				<div class="topic-toc-toggler topic-toc-toggler-show" style="display: none;"><a href="#" onclick="$('.topic-toc-ul').toggle(); $('.topic-toc-toggler-hide').show(); $('.topic-toc-toggler-show').hide(); return false;">show</a></div>
				<ul class="topic-toc-ul">
						<li>
							<a href="#toc_header_anchor_1">Dirección DMX</a>
						</li>
						<li>
							<a href="#toc_header_anchor_2">Funciones Barra Encoders</a>
						</li>
				</ul>
			</div>

		<p>Para ir a la <strong>Vista&nbsp;DMX&nbsp;</strong>en&nbsp;la pantalla&nbsp;1: Presiona&nbsp;&nbsp;<span class="hardkey">DMX</span>&nbsp;en la consola.</p>

<p>Para ir a la&nbsp;<strong>Vista&nbsp;DMX&nbsp;</strong>en&nbsp;la&nbsp;pantalla 2: Pulsa&nbsp;<span class="softkey">Más...</span>&nbsp;en la&nbsp;<a href="/Topic/aeb06b87-4def-4d5c-8ccd-fce24793de63">Barra de Vistas</a>&nbsp;y luego&nbsp;<span class="softkey">DMX</span>.</p>

<p><img alt="" src="/Media/Image/Dot2_ViewsandWindows_DMXView02_1-0.PNG"></p>

<p><em>Imagen 1: Vista DMX</em></p>

<p>Esta vista te muestra la salida actual de los aparatos y sus&nbsp;<a href="/Topic/bb882594-fcad-4b4a-b6c7-4ab7a20b088e">atributos</a>&nbsp;en los universos 1-8. El universo 9 muestra la entrada DMX y trabaja solo para el DMX remoto. Para más información consulta&nbsp;<a href="/Topic/abf8c6b2-dcd4-4f27-8381-8defa74eec66">Configuración de Entradas Remotas</a>.</p>

<p>Para fijar la vista y desactivar el modo dinámico, pulsa el<strong> pin <img alt="" src="/Media/Image/Dot2_ViewsandWindows_ControlElements_TitleBar04_1-0.PNG">&nbsp;</strong>en la barra de título.</p>

<p>Para desplazarte en la vista DMX, mueve arriba o abajo la barra de scroll vertical.</p>

<p>Mientras te desplazas con la barra de scroll&nbsp;se muestra una ventana flotante especificando la dirección en esa posición.</p>

<p><img alt="" src="/Media/Image/Dot2_ViewsandWindows_DMXView03_1-0.PNG"></p>

<p>Para mostrar los atributos DMX con su respectiva dirección DMX pulse el icono de vista&nbsp;<img alt="" src="/Media/Image/Dot2_ViewsandWindows_ControlElements_TitleBar06_1-0.PNG">&nbsp;en la&nbsp;<a href="/Topic/a9e3dcd7-1fb1-4dab-8e42-03f9e0de3e99">Barra de Título</a>.</p>

<p><img alt="" src="/Media/Image/Dot2_ViewsandWindows_DMXView04_1-0.PNG"></p>

<p><em>Imagen 2: Vista DMX con atributos</em></p>

<p>Si un atributo no tiene salida DMX, el valor es 0 y la celda se muestra en gris.</p>

<p>Si un atributo tiene salida DMX, los valores que se muestran comienzan con 1&nbsp;(verde oscuro) y aumentan hasta 255&nbsp;(verde brillante).</p>

<p>Para buscar un aparato en la vista DMX y marcarlo selecciona el aparato en la vista de Aparatos y el modo dinámico te mostrará la dirección DMX del respectivo aparato.</p>

<p>Si uno o varios de los aparatos son seleccionados en la <a href="/Topic/989f0b88-de3d-4818-8c0b-a69fa90b2106">Vista de Aparatos</a>&nbsp;se mostrarán en la vista DMX con un marco amarillo alrededor.</p>

<p>Los canales DMX&nbsp;en&nbsp;Park (Parkeados / Pausados / Congelados) se muestran con fondo azul.</p>

<div class="tip">Para activar Canales DMX "Pausados" (Unpark) abra la&nbsp;<a href="/Topic/e5c9bd78-bb42-4cb3-aa88-a844659b59cc">ventana herramientas</a>.</div>

<p><img alt="" src="/Media/Image/Dot2_ViewsandWindows_DMXView05_1-0.PNG"></p>

<p><em>Imagen 3: Vista DMX con canales DMX pausados (Park/Parked)</em></p>

<p>Valores DMX en modo test introducidos vía <a href="/Topic/21a9d724-8140-4731-a7f0-2b7c66ac8bb1">Comando DMX</a>&nbsp;se muestran con fondo rojo.</p>

<div class="tip">Para desactivar la herramienta de Test DMX abra la ventana&nbsp;<a href="/Topic/e5c9bd78-bb42-4cb3-aa88-a844659b59cc">ventana herramientas</a>&nbsp;o usa el&nbsp;<a href="/Topic/21a9d724-8140-4731-a7f0-2b7c66ac8bb1">Comando DMX</a>.</div>

<p><img alt="" src="/Media/Image/Dot2_ViewsandWindows_DMXView06_1-0.PNG"></p>

<p><em>Imagen 4: Vista DMX con Test DMX activo</em></p>

<a name="toc_header_anchor_1" id="toc_header_anchor_1" class="topic-toc-item"></a><h2>Dirección DMX</h2>

<p>Debajo de la barra pequeña hacia el lado izquierdo de la pantalla, están las columnas de direcciones DMX.</p>

<p>La columna horizontal de dirección, muestra las direcciones DMX para la correspondiente línea en la página.</p>

<p>La columna vertical de dirección, muestra primero el universo y luego con qué dirección comienza la primer columna.&nbsp;</p>

<p>Un universo DMX tiene 512 direcciones DMX.</p>

<p>Antes de comenzar a mostrar las direcciones en la hoja DMX la tabla muestra en que universo nos encontramos y que salida física (XLR) de la consola está utilizando.</p>

<p>Para mostrar la dirección DMX en la vista DMX presiona la tecla&nbsp;<span class="hardkey"><img alt="ma" src="/Media/Mlg/ma.png"></span>.</p>

<a name="toc_header_anchor_2" id="toc_header_anchor_2" class="topic-toc-item"></a><h2>Funciones Barra Encoders</h2>

<p><img alt="" src="/Media/Image/Dot2_ViewsandWindows_DMXView01_1-0.PNG"></p>

<p><em>Imagen 5: Barra de Encoders&nbsp;- Vista DMX en pantalla 1</em></p>

<p><strong>Scroll:</strong><br>
Para desplazarte arriba y abajo en la vista gira el encoder a izquierda o derecha.</p>

<p>&nbsp;</p>


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
		<input id="CurrentGuid" name="CurrentGuid" type="hidden" value="2f939332-43b1-44f0-9a0e-3121d5083e70">
	</span>
</form></div>&nbsp;	</span>
	<span class="pull-right" style="white-space: nowrap;">
			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/ViewItem_Dimmer/es/1.1'; " title="Go to previous page 'Tipo de Preset Dimmer'">
				<i class="icon-arrow-left"></i> previous
			</button>

			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/window_editcuenumbers/es/1.1';" title="Go to next page 'Editar Número(s) de Cue'">
				next <i class="icon-arrow-right"></i> 
			</button>
	</span>
</div>
	<div class="clear-fix"></div>
	<div class="pull-right">
	
			<button class="btn btn-mini" onclick="location.href='/Media/TopicPdf/14372/3';" title="Open/Save this topic as PDF document for viewing or printing">
				<img src="/Content/images/icons/filetype_pdf.png"> Open topic as PDF
			</button>
	</div>
<div class="clear-fix" style="margin-bottom: 10px"></div>
</div>

	