
<div class="topic-navigation">

<div class="pull-right">
	<span class="pull-left">


<div class="pull-left">
<form action="/Topic/SetCurrentVersionNumber" class="form-inline" id="frmTagSelector" method="post">	<span class="form-mini">
		<div class="input-prepend"><span class="add-on">Select different version</span><select autocomplete="off" id="versionNumberId" name="versionNumberId" onchange="$(this).closest('#frmTagSelector').submit();" style="width: 120px;"><option value="">- latest -</option>
<option value="3">1.1</option>
<option value="7">1.2</option>
<option value="12">1.3</option>
<option selected="selected" value="16">1.5</option>
<option value="29">1.9</option>
</select></div>
		<input data-val="true" data-val-number="The field Int32 must be a number." data-val-required="The Int32 field is required." id="ProductId" name="ProductId" type="hidden" value="7">
		<input id="CurrentGuid" name="CurrentGuid" type="hidden" value="ec01d7b9-e0db-41e3-8371-b9f45736ed75">
	</span>
</form></div>&nbsp;	</span>
	<span class="pull-right" style="white-space: nowrap;">
			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/HT_Cues/es/1.5'; " title="Go to previous page 'Work with cues'">
				<i class="icon-arrow-left"></i> previous
			</button>

			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/HT_Effects/es/1.5';" title="Go to next page 'Work with effects'">
				next <i class="icon-arrow-right"></i> 
			</button>
	</span>
</div>
<div class="clear-fix" style="margin-bottom: 10px"></div>
</div>

					<div class="infobox"><b>Hint:</b><br><b>New help version</b><br>The help version you selected belongs to an older software version. <a href="/Topic/SetCurrentVersionNumber/29/ec01d7b9-e0db-41e3-8371-b9f45736ed75">You may want to view the latest help version.</a></div>

			<div class="pull-right">
					<button class="btn btn-mini" style="margin-right: 10px; height: 30px;" onclick="location.href = '/Media/TopicPdf/13946/16'; " title="Open/Save this topic as PDF document for viewing or printing">
						<img src="/Content/images/icons/filetype_pdf.png" style="height: 24px;"> Open topic as PDF
					</button>
				<span class="badge badge-info">Version 1.5</span>
			</div>
		<h1>Cómo trabajar con Chasers</h1>

			<div class="topic-table-of-contents">
				<h2>Table of contents of this topic</h2>
				<div class="topic-toc-toggler topic-toc-toggler-hide"><a href="#" onclick="$('.topic-toc-ul').toggle(); $('.topic-toc-toggler-hide').hide(); $('.topic-toc-toggler-show').show(); return false;">hide</a></div>
				<div class="topic-toc-toggler topic-toc-toggler-show" style="display: none;"><a href="#" onclick="$('.topic-toc-ul').toggle(); $('.topic-toc-toggler-hide').show(); $('.topic-toc-toggler-show').hide(); return false;">show</a></div>
				<ul class="topic-toc-ul">
						<li>
							<a href="#toc_header_anchor_1">Ajustes del ejecutor en modo Chaser.</a>
						</li>
						<li>
							<a href="#toc_header_anchor_2">Cambios en los ajustes del chaser.</a>
						</li>
						<li>
							<a href="#toc_header_anchor_3">Ejecuta el Chaser.</a>
						</li>
				</ul>
			</div>

		<p>Chasers son cuelists que funcionan de un modo especial.</p>

<p>Necesitarás una cuelist con algunas cues. Si no sabes cómo hacer esto, por favor echa un vistazo a&nbsp;<a href="/Topic/511081dd-5ffb-4aaa-8d09-a0859b0d0a19">Cómo trabajar con cues</a>.</p>

<a name="toc_header_anchor_1" id="toc_header_anchor_1" class="topic-toc-item"></a><h2>Ajustes del ejecutor en modo Chaser.</h2>

<p>Una vez que tienes algunas cues en el ejecutor, puedes activar el modo chaser. Esto se hace abriendo primero la vista de&nbsp;cues para el ejecutor que quieres cambiar. Presiona la tecla <span class="hardkey"><img alt="view" src="/Media/Mlg/view.png"></span> y luego una de las teclas asociadas con el ejecutor del cuelist que quieres cambiar.</p>

<p>Esto abre la vista Cues. En la esquina superior derecha de esta vista se encuentra el icono Herramientas&nbsp;<img alt="" src="/Media/Image/Dot2_ViewsandWindows_ControlElements_TitleBar05_1-0.PNG">, púlsalo. Esto abre la ventana de ajustes para el ejecutor. El primer ajuste es “Es Chaser”. Pincha en el área verde justo al lado hasta que desaparezca la señal de prohibición y aparezca la marca de verificación.</p>

<p>Has cambiado el modo del ejecutor.</p>

<p>Un cueslist ejecutado como un chaser ignora los tiempos de las cues y disparadores (triggers) guardados en el cuelist. Así que las columnas de tiempos se deshabilitan cuando el modo Chaser está seleccionado. &nbsp;</p>

<p>En estos ajustes para el ejecutor también puedes establecer el tiempo de "Off time" (o pulsando sobre él en la barra de título de la vista de cue). Si ajustas este tiempo se usará para detener el chaser&nbsp;si usas la tecla&nbsp;<span class="hardkey">Off</span>&nbsp;o el&nbsp;<a href="/Topic/da92259e-70de-4983-96bf-3cc99f52d576">Comando Off</a>.</p>

<p>El Off time también trabaja como <strong>On time</strong>&nbsp;para chasers. Esto quiere decir que fundirá los parámetros almacenados utilizando el tiempo establecido cuando inicies el chaser.</p>

<a name="toc_header_anchor_2" id="toc_header_anchor_2" class="topic-toc-item"></a><h2>Cambios en los ajustes del chaser.</h2>

<p>Hay diferentes ajustes que configuran el funcionamiento chaser. Estos ajustes se pueden cambiar cuando veamos de nuevo las Cues en el ejecutor. Si cierras la ventana Ajustes pulsando el botón&nbsp;<span class="softkey">Esc</span> en la esquina superior izquierda, entonces vuelves a la vista Cues. Si no, entonces pulsa la tecla&nbsp;<span class="hardkey"><img alt="view" src="/Media/Mlg/view.png"></span>&nbsp;y luego una de las teclas asociadas con el ejecutor.&nbsp;</p>

<p>En la vista Cues puedes ver ahora una barra diferente en la parte inferior de la pantalla y tus encoders tienen también algunos parámetros diferentes.</p>

<p>Esta es la barra en la parte inferior de la vista Cues:</p>

<p><img alt="" src="/Media/Image/Dot2_ViewsandWindows_CuesView03_1-0.PNG"></p>

<p>Y estos son los nuevos parámetros en los encoders:</p>

<p><img alt="" src="/Media/Image/Dot2_ViewsandWindows_CuesView04_1-0.PNG"></p>

<p>Con los dos encoders centrales puedes controlar el porcentaje de Fade entre los pasos del chaser (cues) y la velocidad del Chaser. El Fade es el tiempo usado para fundir de un paso al siguiente. Los tiempos de fade guardados en la cue list son ignorados y el Fade es el que controla si los valores cambian en modo fade o snap (cambio instantáneo). Cuanto más alto es el número, más tiempo necesita para fundir. Se expresa como un porcentaje. Esto es porque se expresa como un tiempo disponible basado en la velocidad del chaser. La Velocidad es un número expresado en BPM (Beats por Minuto). Esto nos informa sobre el número de pasos (cues) que ejecuta por minuto.</p>

<p>La barra chaser en la parte inferior de la vista cues nos permite controlar cómo se está ejecutando el chaser. Las dos áreas verdes en la parte superior determinan si el chaser está en bucle y el orden para ejecutar los pasos. Los ajustes de la izquierda configuran la dirección. Pulsando el icono de los tres puntos blancos se abre el menú. Tienes las siguientes opciones:&nbsp;</p>

<ul>
	<li><strong>Forward</strong>&nbsp;- ejecutará los pasos desde el número más bajo hasta el más alto.</li>
	<li><strong>Backward</strong>&nbsp;- ejecutará los pasos desde el número más alto hasta el de más bajo.&nbsp;</li>
	<li><strong>Bounce</strong>&nbsp;- ejecutará hacia adelante y cuando llegue al número más alto comenzará a ejecutar hacia atrás. El resultado es un constante cambio de dirección</li>
	<li><strong>Random</strong>&nbsp;- elegirá cues/pasos al azar como siguiente cue/paso.</li>
</ul>

<p>Los ajustes situados a la derecha deciden la trayectoria del chaser. Pulsando el icono de los tres puntos blancos aparecerán las siguientes opciones:</p>

<ul>
	<li><strong>Endless</strong>&nbsp;- el chaser se estará ejecutando hasta que lo pares.</li>
	<li><strong>Shoot-Off</strong>&nbsp;- el chaser se ejecutará una vez y luego se apagará. Si el orden de ejecución es aleatorio, ejecutará la totalidad de pasos/cues pero no necesariamente todos los pasos/cues diferentes.</li>
	<li><strong>Shoot-On</strong>&nbsp;- es lo mismo que Shoot-Off pero se detendrá después del paso/cue final.&nbsp;</li>
</ul>

<p>La mitad inferior te proporciona el control para hacer funcionar el chaser (para cualquiera de los modos de disparo) o pausarlo. Hay además tres botones que cambian la velocidad. Puedes reducir la velocidad a la mitad, doblarla o restablecer la velocidad que el encoder tiene fijada originalmente.&nbsp;</p>

<p>Puedes cambiar dinámicamente la velocidad del chaser. Mantén presionada la tecla&nbsp;<span class="hardkey">Speed</span> mientras presionas una de las teclas asociadas con el chaser. Esto ajusta la velocidad a tus pulsaciones. Es una función llamada Learn (“Aprender”). Puede asignarse a una de las teclas asociadas con el chaser. Presiona las teclas&nbsp;<span class="hardkey"><img alt="ma" src="/Media/Mlg/ma_1.png"></span>&nbsp;y&nbsp;<span class="hardkey">Label</span>&nbsp; (=comando assign), libera la tecla&nbsp;<span class="hardkey"><img alt="ma" src="/Media/Mlg/ma_1.png"></span>&nbsp;y presiona&nbsp;<span class="hardkey">Speed</span> (date cuenta lo que dice tu línea de comandos).</p>

<div class="cl_input">Assign Learn</div>

<p>Ahora pulsa la tecla que quieres que sea&nbsp;Learn. También lo puedes hacer usando la&nbsp;<a href="/Topic/f613ca45-9cb0-43e7-bb0d-d75fdc5b0d39">Ventana Cambiar Funciones de Botones Ejecutores</a>&nbsp;o en la ventana&nbsp;<a href="/Topic/eea17a4c-1b42-406e-86d9-7e61b3a0bfdd">Ajustes del ejecutor</a>.</p>

<p>&nbsp;</p>

<a name="toc_header_anchor_3" id="toc_header_anchor_3" class="topic-toc-item"></a><h2>Ejecuta el Chaser.</h2>

<p>Puedes iniciar el chaser moviendo el fader desde el 0% y sobre el 0%, esto ejecutará el chaser. También puedes usar el comando&nbsp;<a href="/Topic/09fcbb48-813b-45e2-b737-a652eb042d06">Go</a>&nbsp;u&nbsp;<a href="/Topic/d85eba0d-711b-4b27-87a5-0e1c05148074">On</a>&nbsp;para ejecutarlo en la dirección que hayas fijado. Si usas el comando&nbsp;<a href="/Topic/612a0d43-97da-4835-a05e-95811917bb38">GoBack</a> entonces el chaser se ejecuta, pero en la dirección opuesta. El comando&nbsp;<a href="/Topic/2353b9cf-8ea2-4feb-bf50-274f5abbd6ca">Toggle</a>&nbsp;cambiará el estado actual de ejecución del chaser. El comando&nbsp;<a href="/Topic/da92259e-70de-4983-96bf-3cc99f52d576">Off</a>&nbsp;detendrá el chaser. El comando&nbsp;<a href="/Topic/3195c958-6148-4b47-b388-28d83eadeaf2">Flash</a>&nbsp;ejecutará el chaser mientras mantengas la tecla presionada.</p>

<p>Puedes asignar todos estos comandos a teclas asociadas con el chaser o puedes usarlos temporalmente pulsando la tecla de función en la dot2 y luego una de las teclas asociadas con el chaser.</p>

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
<option value="12">1.3</option>
<option selected="selected" value="16">1.5</option>
<option value="29">1.9</option>
</select></div>
		<input data-val="true" data-val-number="The field Int32 must be a number." data-val-required="The Int32 field is required." id="ProductId" name="ProductId" type="hidden" value="7">
		<input id="CurrentGuid" name="CurrentGuid" type="hidden" value="ec01d7b9-e0db-41e3-8371-b9f45736ed75">
	</span>
</form></div>&nbsp;	</span>
	<span class="pull-right" style="white-space: nowrap;">
			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/HT_Cues/es/1.5'; " title="Go to previous page 'Work with cues'">
				<i class="icon-arrow-left"></i> previous
			</button>

			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/HT_Effects/es/1.5';" title="Go to next page 'Work with effects'">
				next <i class="icon-arrow-right"></i> 
			</button>
	</span>
</div>
	<div class="clear-fix"></div>
	<div class="pull-right">
	
			<button class="btn btn-mini" onclick="location.href='/Media/TopicPdf/13946/16';" title="Open/Save this topic as PDF document for viewing or printing">
				<img src="/Content/images/icons/filetype_pdf.png"> Open topic as PDF
			</button>
	</div>
<div class="clear-fix" style="margin-bottom: 10px"></div>
</div>

	