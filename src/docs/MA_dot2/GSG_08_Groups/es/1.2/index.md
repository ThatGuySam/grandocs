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
		<h1>Gu??a de Introducci??n - Creando y trabajando con Grupos</h1>

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
							<a href="#toc_header_anchor_6">Vamos a hacer m??s grupos.</a>
						</li>
						<li>
							<a href="#toc_header_anchor_7">Combinando Selecciones</a>
						</li>
						<li>
							<a href="#toc_header_anchor_8">Previous, Set and Next - La edici??n del grupo</a>
						</li>
				</ul>
			</div>

		<p>Vamos a aprender como organizar nuestros aparatos. Ahora mismo s??lo tenemos 12, pero m??s adelante a??adiremos m??s.</p>

<p>As?? que deber??amos analizar la manera de organizar nuestros aparatos en grupos.</p>

<p>Los grupos contienen una selecci??n de aparatos aunque tambi??n podr??a ser uno solo. No tienen ninguna informaci??n sobre valores, es simplemente una selecci??n de aparatos y el orden con la que se realiza. Ten presente que el orden de selecci??n es muy importante.</p>

<p>Centr??monos en la vista de Grupos. Presiona la tecla&nbsp; <span class="hardkey">Group</span> y parecer?? una nueva vista vac??a en la pantalla 1.</p>

<p>Tiene 28 casillas visibles, cada casilla representa un grupo. Si desplazas el encoder que se encuentra m??s a la derecha, ver??s que hay m??s de 28 disponibles.&nbsp;</p>

<p>Vamos a crear uno pero antes aseg??rate que no tienes nada seleccionado en tu programador. Ahora selecciona todos tus aparatos, esta es la manera m??s r??pida:</p>

<p><span class="hardkey">Thru</span> <span class="hardkey">Please</span></p>

<p>En realidad, esto selecciona todos los aparatos desde el ID m??s bajo posible hasta el m??s alto. Ahora tenemos una selecci??n y podemos guardar esto como un grupo:</p>

<p><span class="hardkey">Store</span> <span class="hardkey">Group</span> <span class="hardkey">1</span>&nbsp;<span class="hardkey">Please</span></p>

<p>Esto cre?? el grupo n??mero 1 con los aparatos seleccionados y le dio un nombre: ???Dim???.</p>

<p>Para comprobarlo, puedes abrir una vista Grupos en la pantalla 2 y limpiar tu programador. Esto deber??a darte una vista Aparatos en la pantalla 1 y una vista Grupos en la pantalla 2.</p>

<p>Prueba a pulsar el grupo&nbsp;<span class="softkey">Dim</span>&nbsp;para&nbsp;seleccionar todos los aparatos. Si no lo hace, entonces deber??as eliminarlo comenzar de nuevo este cap??tulo desde el principio.</p>

<p>Vamos a dar al grupo un nombre mejor, presiona: <span class="hardkey">Label</span> <span class="hardkey">Group</span> <span class="hardkey">1</span> <span class="hardkey">Please</span></p>

<p>Esto abre una ventana <strong>Introducir&nbsp;Nombre</strong>&nbsp;que nos permite cambiar el nombre del grupo. Puedes llamarlo&nbsp;???All Dimmers???.</p>

<p>Cuando guardamos un grupo, en realidad podemos lograr esta ventana inmediatamente. Tan pronto como hayas guardado el grupo puedes empezar a teclear en un teclado externo para introducir el nombre. O cuando guardas el grupo, puedes pulsar esta peque??a ventana emergente&nbsp;y se mostrar?? la ventana para introducir nombre.</p>

<p><img alt="" src="/Media/Image/Dot2_GettingStarted_Groups_01_1-2.png"></p>

<p><em>Imagen 1: Ventana flotante para etiquetar</em></p>

<p>Vamos a hacer un grupo m??s que contenga los aparatos 1 y 2. Deber??a ser el grupo n??mero 2 y llamarse ???All FOH???..</p>

<p>Me gustar??a aclarar algo. Los grupos son simplemente maneras de seleccionar aparatos. No hay relaci??n desde una cue list&nbsp;con el grupo. Intentar?? explicarlo usando un ejemplo. Tomas un nuevo grupo con los aparatos 1 y 2 pulsando sobre ??l en la el Pool de grupos, luego le das a los dos aparatos un valor del 42% y lo guardas en una cue. En unos pocos segundos a??adiremos los aparatos 3 y 4 al grupo. Esto no quiere decir que la cue&nbsp;cambiar??. S??lo tiene informaci??n para los aparatos 1 y 2 e incluso borrando los grupos no afecta a la informaci??n guardada en las cues.</p>

<p>Vamos a a??adir los dos aparatos. Selecciona los aparatos 3 y 4 y luego pulsa:&nbsp; <span class="hardkey">Store</span> <span class="hardkey">Group</span> <span class="hardkey">2</span> <span class="hardkey">Please</span>.</p>

<p>Ahora aparece una ventana emergente que nos permite seleccionar el m??todo de almacenamiento a usar. Hay tres posibilidades: <strong>Sobrescribir, Mezclar y Eliminar</strong>. Estos son m??todos de almacenamiento generales que vas a encontrar en la consola as?? que me tomar?? mi tiempo para explicarlos.&nbsp;</p>

<p><strong>Sobrescribir </strong>siempre reemplazar?? lo que ya se encuentra guardado, por lo que se&nbsp;pierde&nbsp;el contenido original.</p>

<p><strong>Mezclar</strong> a??adir?? lo que est??s guardando al contenido existente.</p>

<p><strong>Eliminar</strong> borrar?? el contenido de tu programador en el destino. Si el destino no tiene ning??n contenido que eliminar, no har?? nada.</p>

<p>Dado que quer??amos a??adir aparatos a nuestro grupo, deber??amos pulsar&nbsp; <span class="softkey">Mezclar</span>&nbsp;(hazlo). Prueba a pulsar sobre el grupo para comprobar que tienes seleccionados los aparatos 1 al 4.</p>

<a name="toc_header_anchor_1" id="toc_header_anchor_1" class="topic-toc-item"></a><h2>Mover, Copiar y Eliminar</h2>

<p>Hay tres funciones que me gustar??a mostrarte. Son funciones generales que trabajan sobre muchas cosas, pero ahora es el momento adecuado para hablar sobre ellas.</p>

<a name="toc_header_anchor_2" id="toc_header_anchor_2" class="topic-toc-item"></a><h3>Mover</h3>

<p>Puedes mover los grupos para que est??n posicionados donde los quieras.&nbsp;</p>

<p>Presiona&nbsp;<span class="hardkey">Move</span>&nbsp;luego selecciona el grupo&nbsp;<span class="softkey">All Dimmers</span>. Ahora presiona en una casilla de grupos que est?? vac??a. Esto movi?? el grupo a esa nueva ubicaci??n. Ahora presiona&nbsp;<span class="hardkey">Move</span>&nbsp;y selecciona los grupos&nbsp;<span class="softkey">All Dimmers</span>&nbsp;y&nbsp;<span class="softkey">All FOH</span>. Esto a??n no mueve nada pues hemos seleccionado dos grupos para mover y la consola est?? esperando la nueva ubicaci??n. Pulsa en alg??n lugar donde hayan dos casillas libres. Hemos movido los dos grupos uno al lado del otro a la nueva ubicaci??n.</p>

<a name="toc_header_anchor_3" id="toc_header_anchor_3" class="topic-toc-item"></a><h3>Copiar</h3>

<p>Puedes tambi??n copiar un grupo y entonces tendr??s dos grupos id??nticos.&nbsp;</p>

<p>Presiona&nbsp;<span class="hardkey">Copy</span>&nbsp;y luego el grupo&nbsp;<span class="softkey">All Dimmers</span>&nbsp;seguido de un bot??n vac??o. Hemos creado un nuevo grupo. El contenido es exactamente el mismo que el del grupo All Dimmers. El nombre termina con un ???#2??? para que podamos distinguirlos. Los dos grupos no est??n conectados, es decir que si cambias el contenido en un grupo, el otro no se ve afectado.</p>

<a name="toc_header_anchor_4" id="toc_header_anchor_4" class="topic-toc-item"></a><h3>Delete</h3>

<p>Puedes borrar un grupo presionando&nbsp;<span class="hardkey">Delete</span> y luego el grupo que quieres borrar. Recuerda que esto no afecta a tu programaci??n. Puedes eliminar la copia que acabas de hacer.</p>

<a name="toc_header_anchor_5" id="toc_header_anchor_5" class="topic-toc-item"></a><h2>&nbsp;</h2>

<a name="toc_header_anchor_6" id="toc_header_anchor_6" class="topic-toc-item"></a><h2>Vamos a hacer m??s grupos.</h2>

<p>Ok, un vez vistas estas opciones vamos a crear m??s grupos. Todos los aparatos con numeraci??n impar en nuestro plano tienen una gelatina de color c??lido y todos los que tienen numeraci??n par en color fr??o.</p>

<p>Sabes todo lo que necesitas para crear estos grupos, as?? que simplemente enumera todos los que necesitas en una tabla:</p>

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

<p>Cuando termines, la vista Grupos deber??a aparecer as??:</p>

<p><img alt="" src="/Media/Image/Dot2_GettingStarted_Groups_02_1-0.png"></p>

<p><em>Imagen 2: Todos los grupos</em></p>

<a name="toc_header_anchor_7" id="toc_header_anchor_7" class="topic-toc-item"></a><h2>Combinando Selecciones</h2>

<p>Con estos grupos podemos hacer muchas combinaciones diferentes.</p>

<p>Puedes combinar dos grupos simplemente puls??ndoles. Si pulsas&nbsp; <span class="softkey">All FOH</span>&nbsp;y luego &nbsp;<span class="softkey">Down Stage</span>&nbsp;(autom??ticamente los suma) seleccionas los aparatos del 1 al 8.</p>

<p>Tambi??n puedes usar la tecla&nbsp;&nbsp; <span class="hardkey">-</span> para borrar los aparatos superpuestos desde un grupo diferente. Si necesitas todos los warm dimmers salvo los que provienen de Front Of the House (FOH), puedes hacerlo de esta manera (haz un&nbsp; <span class="hardkey">Clear</span>&nbsp;primero):</p>

<p><span class="softkey">All Warm Dim</span> <span class="hardkey">-</span> <span class="softkey">All FOH</span></p>

<p>Primero hemos seleccionado todos los warm dimmers y luego hemos quitado los del&nbsp;FOH de nuestra selecci??n.</p>

<a name="toc_header_anchor_8" id="toc_header_anchor_8" class="topic-toc-item"></a><h2>Previous, Set and Next - La edici??n del grupo</h2>

<p>Con una selecci??n de aparatos puedes usar las teclas&nbsp; <span class="hardkey">Prev</span>&nbsp;y&nbsp;<span class="hardkey">Next</span> para revisar el grupo, justo como hac??amos&nbsp;cuando a??n no ten??amos una selecci??n. La diferencia es que esto s??lo revisar?? los aparatos del grupo.&nbsp;</p>

<p>Prueba a seleccionar grupo 2 (All FOH) y luego pulsa&nbsp;<span class="hardkey">Next</span>. Este deber??a ser el resultado:</p>

<p><img alt="" src="/Media/Image/Dot2_GettingStarted_Groups_03_1-2.png"></p>

<p><em>Imagen 3: Previous y next en grupos.</em></p>

<p>Si presionas next puedes ver que est??s pasando de unos aparatos a otros dentro del grupo. Nunca seleccionas el aparato 5.</p>

<p>Si quieres volver a seleccionar el grupo entero pulsa la tecla&nbsp;<span class="hardkey">Set</span>&nbsp;.</p>

<p>&nbsp;</p>

<p>Cuando te encuentres con ganas (quiz??s necesitas m??s caf?? o t??) deber??as continuar con el siguiente cap??tulo, donde vamos a guardar nuestra primera cue, ??ya era hora!</p>


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

	
