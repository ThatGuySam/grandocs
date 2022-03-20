---
originalUrl: 'https://help2.malighting.com/Page/MA_dot2/GSG_08_Groups/es/1.2'
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
		<input id="CurrentGuid" name="CurrentGuid" type="hidden" value="9975cec5-6ec0-41b5-bfd8-606855d0d2ca">
	</span>
</form></div>&nbsp;	</span>
	<span class="pull-right" style="white-space: nowrap;">
			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/GSG_07_Programmer/es/1.2'; " title="Go to previous page '6 - El programador'">
				<i class="icon-arrow-left"></i> previous
			</button>

			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/GSG_09_StoreCueAndPlayback/es/1.2';" title="Go to next page '9 - Grabar una cue y reproducirla'">
				next <i class="icon-arrow-right"></i> 
			</button>
	</span>
</div>
<div class="clear-fix" style="margin-bottom: 10px"></div>
</div>

					<div class="infobox"><b>Hint:</b><br><b>New help version</b><br>The help version you selected belongs to an older software version. <a href="/Topic/SetCurrentVersionNumber/29/9975cec5-6ec0-41b5-bfd8-606855d0d2ca">You may want to view the latest help version.</a></div>

			<div class="pull-right">
					<button class="btn btn-mini" style="margin-right: 10px; height: 30px;" onclick="location.href = '/Media/TopicPdf/16600/7'; " title="Open/Save this topic as PDF document for viewing or printing">
						<img src="/Content/images/icons/filetype_pdf.png" style="height: 24px;"> Open topic as PDF
					</button>
				<span class="badge badge-info">Version 1.2</span>
			</div>
		<h1>Guía de Introducción - Creando y trabajando con Grupos</h1>

			<div class="topic-table-of-contents">
				<h2>Table of contents of this topic</h2>
				<div class="topic-toc-toggler topic-toc-toggler-hide"><a href="#" onclick="$('.topic-toc-ul').toggle(); $('.topic-toc-toggler-hide').hide(); $('.topic-toc-toggler-show').show(); return false;">hide</a></div>
				<div class="topic-toc-toggler topic-toc-toggler-show" style="display: none;"><a href="#" onclick="$('.topic-toc-ul').toggle(); $('.topic-toc-toggler-hide').show(); $('.topic-toc-toggler-show').hide(); return false;">show</a></div>
				<ul class="topic-toc-ul">
						<li>
							<a href="#toc_header_anchor_1">Mover, Copiar y Eliminar</a>
								<ul>
										<li><a href="#toc_header_anchor_2">Mover</a></li>
										<li><a href="#toc_header_anchor_3">Copiar</a></li>
										<li><a href="#toc_header_anchor_4">Delete</a></li>
								</ul>
						</li>
						<li>
							<a href="#toc_header_anchor_5">&nbsp;</a>
						</li>
						<li>
							<a href="#toc_header_anchor_6">Vamos a hacer más grupos.</a>
						</li>
						<li>
							<a href="#toc_header_anchor_7">Combinando Selecciones</a>
						</li>
						<li>
							<a href="#toc_header_anchor_8">Previous, Set and Next - La edición del grupo</a>
						</li>
				</ul>
			</div>

		<p>Vamos a aprender como organizar nuestros aparatos. Ahora mismo sólo tenemos 12, pero más adelante añadiremos más.</p>

<p>Así que deberíamos analizar la manera de organizar nuestros aparatos en grupos.</p>

<p>Los grupos contienen una selección de aparatos aunque también podría ser uno solo. No tienen ninguna información sobre valores, es simplemente una selección de aparatos y el orden con la que se realiza. Ten presente que el orden de selección es muy importante.</p>

<p>Centrémonos en la vista de Grupos. Presiona la tecla&nbsp; <span class="hardkey">Group</span> y parecerá una nueva vista vacía en la pantalla 1.</p>

<p>Tiene 28 casillas visibles, cada casilla representa un grupo. Si desplazas el encoder que se encuentra más a la derecha, verás que hay más de 28 disponibles.&nbsp;</p>

<p>Vamos a crear uno pero antes asegúrate que no tienes nada seleccionado en tu programador. Ahora selecciona todos tus aparatos, esta es la manera más rápida:</p>

<p><span class="hardkey">Thru</span> <span class="hardkey">Please</span></p>

<p>En realidad, esto selecciona todos los aparatos desde el ID más bajo posible hasta el más alto. Ahora tenemos una selección y podemos guardar esto como un grupo:</p>

<p><span class="hardkey">Store</span> <span class="hardkey">Group</span> <span class="hardkey">1</span>&nbsp;<span class="hardkey">Please</span></p>

<p>Esto creó el grupo número 1 con los aparatos seleccionados y le dio un nombre: “Dim”.</p>

<p>Para comprobarlo, puedes abrir una vista Grupos en la pantalla 2 y limpiar tu programador. Esto debería darte una vista Aparatos en la pantalla 1 y una vista Grupos en la pantalla 2.</p>

<p>Prueba a pulsar el grupo&nbsp;<span class="softkey">Dim</span>&nbsp;para&nbsp;seleccionar todos los aparatos. Si no lo hace, entonces deberías eliminarlo comenzar de nuevo este capítulo desde el principio.</p>

<p>Vamos a dar al grupo un nombre mejor, presiona: <span class="hardkey">Label</span> <span class="hardkey">Group</span> <span class="hardkey">1</span> <span class="hardkey">Please</span></p>

<p>Esto abre una ventana <strong>Introducir&nbsp;Nombre</strong>&nbsp;que nos permite cambiar el nombre del grupo. Puedes llamarlo&nbsp;“All Dimmers”.</p>

<p>Cuando guardamos un grupo, en realidad podemos lograr esta ventana inmediatamente. Tan pronto como hayas guardado el grupo puedes empezar a teclear en un teclado externo para introducir el nombre. O cuando guardas el grupo, puedes pulsar esta pequeña ventana emergente&nbsp;y se mostrará la ventana para introducir nombre.</p>

<p><img alt="" src="/Media/Image/Dot2_GettingStarted_Groups_01_1-2.png"></p>

<p><em>Imagen 1: Ventana flotante para etiquetar</em></p>

<p>Vamos a hacer un grupo más que contenga los aparatos 1 y 2. Debería ser el grupo número 2 y llamarse “All FOH”..</p>

<p>Me gustaría aclarar algo. Los grupos son simplemente maneras de seleccionar aparatos. No hay relación desde una cue list&nbsp;con el grupo. Intentaré explicarlo usando un ejemplo. Tomas un nuevo grupo con los aparatos 1 y 2 pulsando sobre él en la el Pool de grupos, luego le das a los dos aparatos un valor del 42% y lo guardas en una cue. En unos pocos segundos añadiremos los aparatos 3 y 4 al grupo. Esto no quiere decir que la cue&nbsp;cambiará. Sólo tiene información para los aparatos 1 y 2 e incluso borrando los grupos no afecta a la información guardada en las cues.</p>

<p>Vamos a añadir los dos aparatos. Selecciona los aparatos 3 y 4 y luego pulsa:&nbsp; <span class="hardkey">Store</span> <span class="hardkey">Group</span> <span class="hardkey">2</span> <span class="hardkey">Please</span>.</p>

<p>Ahora aparece una ventana emergente que nos permite seleccionar el método de almacenamiento a usar. Hay tres posibilidades: <strong>Sobrescribir, Mezclar y Eliminar</strong>. Estos son métodos de almacenamiento generales que vas a encontrar en la consola así que me tomaré mi tiempo para explicarlos.&nbsp;</p>

<p><strong>Sobrescribir </strong>siempre reemplazará lo que ya se encuentra guardado, por lo que se&nbsp;pierde&nbsp;el contenido original.</p>

<p><strong>Mezclar</strong> añadirá lo que estás guardando al contenido existente.</p>

<p><strong>Eliminar</strong> borrará el contenido de tu programador en el destino. Si el destino no tiene ningún contenido que eliminar, no hará nada.</p>

<p>Dado que queríamos añadir aparatos a nuestro grupo, deberíamos pulsar&nbsp; <span class="softkey">Mezclar</span>&nbsp;(hazlo). Prueba a pulsar sobre el grupo para comprobar que tienes seleccionados los aparatos 1 al 4.</p>

<a name="toc_header_anchor_1" id="toc_header_anchor_1" class="topic-toc-item"></a><h2>Mover, Copiar y Eliminar</h2>

<p>Hay tres funciones que me gustaría mostrarte. Son funciones generales que trabajan sobre muchas cosas, pero ahora es el momento adecuado para hablar sobre ellas.</p>

<a name="toc_header_anchor_2" id="toc_header_anchor_2" class="topic-toc-item"></a><h3>Mover</h3>

<p>Puedes mover los grupos para que estén posicionados donde los quieras.&nbsp;</p>

<p>Presiona&nbsp;<span class="hardkey">Move</span>&nbsp;luego selecciona el grupo&nbsp;<span class="softkey">All Dimmers</span>. Ahora presiona en una casilla de grupos que esté vacía. Esto movió el grupo a esa nueva ubicación. Ahora presiona&nbsp;<span class="hardkey">Move</span>&nbsp;y selecciona los grupos&nbsp;<span class="softkey">All Dimmers</span>&nbsp;y&nbsp;<span class="softkey">All FOH</span>. Esto aún no mueve nada pues hemos seleccionado dos grupos para mover y la consola está esperando la nueva ubicación. Pulsa en algún lugar donde hayan dos casillas libres. Hemos movido los dos grupos uno al lado del otro a la nueva ubicación.</p>

<a name="toc_header_anchor_3" id="toc_header_anchor_3" class="topic-toc-item"></a><h3>Copiar</h3>

<p>Puedes también copiar un grupo y entonces tendrás dos grupos idénticos.&nbsp;</p>

<p>Presiona&nbsp;<span class="hardkey">Copy</span>&nbsp;y luego el grupo&nbsp;<span class="softkey">All Dimmers</span>&nbsp;seguido de un botón vacío. Hemos creado un nuevo grupo. El contenido es exactamente el mismo que el del grupo All Dimmers. El nombre termina con un “#2” para que podamos distinguirlos. Los dos grupos no están conectados, es decir que si cambias el contenido en un grupo, el otro no se ve afectado.</p>

<a name="toc_header_anchor_4" id="toc_header_anchor_4" class="topic-toc-item"></a><h3>Delete</h3>

<p>Puedes borrar un grupo presionando&nbsp;<span class="hardkey">Delete</span> y luego el grupo que quieres borrar. Recuerda que esto no afecta a tu programación. Puedes eliminar la copia que acabas de hacer.</p>

<a name="toc_header_anchor_5" id="toc_header_anchor_5" class="topic-toc-item"></a><h2>&nbsp;</h2>

<a name="toc_header_anchor_6" id="toc_header_anchor_6" class="topic-toc-item"></a><h2>Vamos a hacer más grupos.</h2>

<p>Ok, un vez vistas estas opciones vamos a crear más grupos. Todos los aparatos con numeración impar en nuestro plano tienen una gelatina de color cálido y todos los que tienen numeración par en color frío.</p>

<p>Sabes todo lo que necesitas para crear estos grupos, así que simplemente enumera todos los que necesitas en una tabla:</p>

<table border="1" cellpadding="1" cellspacing="1" style="width:500px">
	<thead>
		<tr>
			<th scope="col">Number:</th>
			<th scope="col">Fixtures:</th>
			<th scope="col">Name:</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>1</td>
			<td>1 to 12</td>
			<td>All Dimmers</td>
		</tr>
		<tr>
			<td>2</td>
			<td>1 to 4</td>
			<td>All FOH</td>
		</tr>
		<tr>
			<td>3</td>
			<td>5 to 12</td>
			<td>All Stage</td>
		</tr>
		<tr>
			<td>4</td>
			<td>5 to 8</td>
			<td>Down Stage</td>
		</tr>
		<tr>
			<td>5</td>
			<td>9 to 12</td>
			<td>Up Stage</td>
		</tr>
		<tr>
			<td>6</td>
			<td>1 + 2 + 5 + 6 + 9 + 10</td>
			<td>Stage Right</td>
		</tr>
		<tr>
			<td>7</td>
			<td>3 + 4 + 7 + 8 + 11 + 12</td>
			<td>Stage Left</td>
		</tr>
		<tr>
			<td>8</td>
			<td>1 + 3 + 5 + 7 + 9 + 11</td>
			<td>All Warm Dim</td>
		</tr>
		<tr>
			<td>9</td>
			<td>2 + 4 + 6 + 8 + 10 + 12</td>
			<td>All Cold Dim</td>
		</tr>
	</tbody>
</table>

<p>Cuando termines, la vista Grupos debería aparecer así:</p>

<p><img alt="" src="/Media/Image/Dot2_GettingStarted_Groups_02_1-0.png"></p>

<p><em>Imagen 2: Todos los grupos</em></p>

<a name="toc_header_anchor_7" id="toc_header_anchor_7" class="topic-toc-item"></a><h2>Combinando Selecciones</h2>

<p>Con estos grupos podemos hacer muchas combinaciones diferentes.</p>

<p>Puedes combinar dos grupos simplemente pulsándoles. Si pulsas&nbsp; <span class="softkey">All FOH</span>&nbsp;y luego &nbsp;<span class="softkey">Down Stage</span>&nbsp;(automáticamente los suma) seleccionas los aparatos del 1 al 8.</p>

<p>También puedes usar la tecla&nbsp;&nbsp; <span class="hardkey">-</span> para borrar los aparatos superpuestos desde un grupo diferente. Si necesitas todos los warm dimmers salvo los que provienen de Front Of the House (FOH), puedes hacerlo de esta manera (haz un&nbsp; <span class="hardkey">Clear</span>&nbsp;primero):</p>

<p><span class="softkey">All Warm Dim</span> <span class="hardkey">-</span> <span class="softkey">All FOH</span></p>

<p>Primero hemos seleccionado todos los warm dimmers y luego hemos quitado los del&nbsp;FOH de nuestra selección.</p>

<a name="toc_header_anchor_8" id="toc_header_anchor_8" class="topic-toc-item"></a><h2>Previous, Set and Next - La edición del grupo</h2>

<p>Con una selección de aparatos puedes usar las teclas&nbsp; <span class="hardkey">Prev</span>&nbsp;y&nbsp;<span class="hardkey">Next</span> para revisar el grupo, justo como hacíamos&nbsp;cuando aún no teníamos una selección. La diferencia es que esto sólo revisará los aparatos del grupo.&nbsp;</p>

<p>Prueba a seleccionar grupo 2 (All FOH) y luego pulsa&nbsp;<span class="hardkey">Next</span>. Este debería ser el resultado:</p>

<p><img alt="" src="/Media/Image/Dot2_GettingStarted_Groups_03_1-2.png"></p>

<p><em>Imagen 3: Previous y next en grupos.</em></p>

<p>Si presionas next puedes ver que estás pasando de unos aparatos a otros dentro del grupo. Nunca seleccionas el aparato 5.</p>

<p>Si quieres volver a seleccionar el grupo entero pulsa la tecla&nbsp;<span class="hardkey">Set</span>&nbsp;.</p>

<p>&nbsp;</p>

<p>Cuando te encuentres con ganas (quizás necesitas más café o té) deberías continuar con el siguiente capítulo, donde vamos a guardar nuestra primera cue, ¡ya era hora!</p>


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
		<input id="CurrentGuid" name="CurrentGuid" type="hidden" value="9975cec5-6ec0-41b5-bfd8-606855d0d2ca">
	</span>
</form></div>&nbsp;	</span>
	<span class="pull-right" style="white-space: nowrap;">
			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/GSG_07_Programmer/es/1.2'; " title="Go to previous page '6 - El programador'">
				<i class="icon-arrow-left"></i> previous
			</button>

			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/GSG_09_StoreCueAndPlayback/es/1.2';" title="Go to next page '9 - Grabar una cue y reproducirla'">
				next <i class="icon-arrow-right"></i> 
			</button>
	</span>
</div>
	<div class="clear-fix"></div>
	<div class="pull-right">
	
			<button class="btn btn-mini" onclick="location.href='/Media/TopicPdf/16600/7';" title="Open/Save this topic as PDF document for viewing or printing">
				<img src="/Content/images/icons/filetype_pdf.png"> Open topic as PDF
			</button>
	</div>
<div class="clear-fix" style="margin-bottom: 10px"></div>
</div>

	
