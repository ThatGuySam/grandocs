---
originalUrl: 'http://help2.malighting.com/Page/MA_dot2/GSG_10_MakingMoreCues/es/1.5'
---

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
		<input data-val="true" data-val-number="The field Int32 must be a number." data-val-required="The Int32 field is required." id="ProductId" name="ProductId" type="hidden" value="28">
		<input id="CurrentGuid" name="CurrentGuid" type="hidden" value="fc53fe83-17e5-498e-9b19-df0f847d2300">
	</span>
</form></div>&nbsp;	</span>
	<span class="pull-right" style="white-space: nowrap;">
			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/GSG_09_StoreCueAndPlayback/es/1.5'; " title="Go to previous page '9 - Store a cue and play it back'">
				<i class="icon-arrow-left"></i> previous
			</button>

			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/GSG_11_AddingLedFixtures/es/1.5';" title="Go to next page '11 - Adding LED fixtures'">
				next <i class="icon-arrow-right"></i> 
			</button>
	</span>
</div>
<div class="clear-fix" style="margin-bottom: 10px"></div>
</div>

					<div class="infobox"><b>Hint:</b><br><b>New help version</b><br>The help version you selected belongs to an older software version. <a href="/Topic/SetCurrentVersionNumber/29/fc53fe83-17e5-498e-9b19-df0f847d2300">You may want to view the latest help version.</a></div>

			<div class="pull-right">
					<button class="btn btn-mini" style="margin-right: 10px; height: 30px;" onclick="location.href = '/Media/TopicPdf/17884/16'; " title="Open/Save this topic as PDF document for viewing or printing">
						<img src="/Content/images/icons/filetype_pdf.png" style="height: 24px;"> Open topic as PDF
					</button>
				<span class="badge badge-info">Version 1.5</span>
			</div>
		<h1>Guía de introducción - Agregando más cues al ejecutor principal</h1>

			<div class="topic-table-of-contents">
				<h2>Table of contents of this topic</h2>
				<div class="topic-toc-toggler topic-toc-toggler-hide"><a href="#" onclick="$('.topic-toc-ul').toggle(); $('.topic-toc-toggler-hide').hide(); $('.topic-toc-toggler-show').show(); return false;">hide</a></div>
				<div class="topic-toc-toggler topic-toc-toggler-show" style="display: none;"><a href="#" onclick="$('.topic-toc-ul').toggle(); $('.topic-toc-toggler-hide').show(); $('.topic-toc-toggler-show').hide(); return false;">show</a></div>
				<ul class="topic-toc-ul">
						<li>
							<a href="#toc_header_anchor_1">Editando el cuelist</a>
						</li>
				</ul>
			</div>

		<p>Ahora vamos a agregar más cues&nbsp;al&nbsp;cuelist principal y jugar con ellas.</p>

<p>Haz esto:</p>

<p><span class="hardkey">Group</span> <span class="softkey">Up Stage</span> <span class="hardkey">At</span> <span class="hardkey">5</span> <span class="hardkey">0</span> <span class="hardkey">Please</span></p>

<p><span class="hardkey">Store</span>&nbsp;<span class="hardkey">Time</span> <span class="hardkey">3</span> <span class="hardkey">Please</span></p>

<p>Esto debería abrirte una ventana con diferentes posibilidades.</p>

<p>Selecciona la que dice&nbsp;<span class="softkey">Create a second cue</span>.</p>

<p>Se ha creado la cue número 2 con un tiempo de fade de 3 segundos en vez del tiempo por defecto de 0 segundos.</p>

<p>Prueba a ejecutar la cue para ver aparecer gradualmente los aparatos del grupo 5</p>

<p>Ahora vamos a usar la Línea de comandos en vez de las teclas.</p>

<p>Sitúate aquí en la pantalla 1:</p>

<div class="cl_input">Command Line</div>

<p>Esta es la entrada de la Línea de Comandos. Aquí podemos teclear comandos usando el teclado (en la pantalla o externamente). Cuando lo pulsas, se mostrará la vista Línea de Comandos donde puedes ver comandos ejecutados con anterioridad y otros feedbacks de tu consola.</p>

<p>Escribe esto:</p>

<div class="cl_input">g 2 - 9 at 75</div>

<p>Y termina pulsando Enter. En un futuro, puedes terminar los ejemplos que escribas simplemente con pulsar Enter o&nbsp; <span class="hardkey">Please</span>.</p>

<p>Ahora escribe esto:</p>

<div class="cl_input">g 4 - 9 + f 9 t 12 at + 20</div>

<p>Vamos a observar la respuesta de la consola y comentar lo que acabamos de hacer.</p>

<p>La respuesta al primer comando es:</p>

<div class="cl_response">Executing : Group&nbsp;2&nbsp;-&nbsp;9&nbsp;At&nbsp;75</div>

<p>Podemos ver que “g” es la abreviatura de “Grupo”. Así que hemos cogido los aparatos del grupo 2 excepto los que también se encuentran en el grupo 9 y los hemos puesto al 75%. La parte de “Executing” es simplemente la consola confirmando&nbsp;lo que has hecho.</p>

<p>La siguiente línea es más compleja:</p>

<div class="cl_response">Executing : Group&nbsp;4&nbsp;-&nbsp;9&nbsp;+&nbsp;Fixture&nbsp;9&nbsp;Thru&nbsp;12&nbsp;At&nbsp;+&nbsp;20</div>

<p>La primera parte es como la otra pero vemos que “f” se interpreta como “Fixture” y “t” como “Thru”. Así que tomamos los aparatos del grupo 4 excepto los que se encuentran también en el grupo 9 y los aparatos del 9 al 12 y les damos el 20% más de lo que tenían.</p>

<p>Vamos a guardar esto usando los comandos:</p>

<div class="cl_input">st&nbsp;c 3 fa 5</div>

<p>Esta es la respuesta:</p>

<div class="cl_response">Executing : Store&nbsp;Cue&nbsp;3&nbsp;Fade&nbsp;5</div>

<p>De nuevo hay abreviaturas para la mayoría de las palabras. Hemos creado la cue número 3 con un tiempo de fade de 5 segundos.</p>

<p>También podemos ver que&nbsp;dot2 está ejecutando una macro cuando grabas. Esta macro elimina valores innecesarios en tu cuelist.</p>

<p>La cue número 4 será una cue más oscura, así que vamos a quitar el 40% a todo lo que está funcionando en ese momento. Actualmente tenemos el grupo 5 y el 8 en funcionamiento.</p>

<p>Estas son las teclas que necesitas pulsar:&nbsp;</p>

<p><span class="hardkey">Group</span> <span class="hardkey">5</span> <span class="hardkey">+</span> <span class="hardkey">8</span> <span class="hardkey">At</span> <span class="hardkey">-</span> <span class="hardkey">4</span> <span class="hardkey">0</span> <span class="hardkey">Please</span></p>

<p>Vamos a crear una cue&nbsp;4 pulsando estas teclas:</p>

<p><span class="hardkey">Store</span> <span class="hardkey">4</span> <span class="hardkey">Time</span> <span class="hardkey">2</span> <span class="hardkey">Time</span> <span class="hardkey">6</span> <span class="hardkey">Please</span></p>

<p>Ahora ha ocurrido algo extra. Mira la respuesta de la consola:</p>

<div class="cl_response">Executing : Store&nbsp;Cue&nbsp;4&nbsp;Fade&nbsp;2&nbsp;OutFade&nbsp;6</div>

<p>Usando&nbsp;<span class="hardkey">Time</span> hemos guardado la cue con un tiempo de fade de 2 y un outfade de 6.</p>

<p>&nbsp;</p>

<p>La siguiente cue debería ser la misma que la cue 3, así que simplemente la copiamos:</p>

<p><span class="hardkey">Copy</span> <span class="hardkey">cue</span> <span class="hardkey">3</span> <span class="hardkey">at</span> <span class="hardkey">5</span> <span class="hardkey">Please</span></p>

<p>En la ventana emergente selecciona&nbsp;<span class="softkey">Copy</span>&nbsp;y pulsa&nbsp;<span class="hardkey">Please</span>&nbsp;para confirmar.</p>

<p>Ahora necesitamos un black out:</p>

<p><span class="hardkey">Group</span> <span class="hardkey">1</span> <span class="hardkey">&nbsp;. </span>&nbsp;<span class="hardkey"> . </span>&nbsp;(recuerda que pulsar dos veces en la tecla punto nos da el acceso directo “Zero”)&nbsp;</p>

<p><span class="hardkey">Store</span> <span class="hardkey">Please</span> (esto guarda la siguiente cue disponible con el tiempo por defecto de 0 segundos)&nbsp;</p>

<p>Esta es la cue 6.</p>

<p>&nbsp;</p>

<p>La última cue que vamos a crear (por ahora) es una cue que devuelve la luz. Básicamente es la cue 5 otra vez. Pero en vez de copiarla, vamos a intentar algo diferente.</p>

<p>Utiliza las teclas&nbsp;<span class="hardkey">Go-</span>&nbsp;y&nbsp;<span class="hardkey">Go+</span> que se encuentran debajo del ejecutor principal para moverte a la cue número 5. Date cuenta que la cue activa tiene un fondo verde en la vista de las&nbsp;cues y un fondo azul en la vista del pequeño ejecutor sobre los ejecutores.</p>

<p>Aquí están los valores que necesitamos en la nueva cue 7. Vamos a usar una función llamada “StoreLook”. Aparece cuando mantienes pulsadas las teclas&nbsp; <span class="hardkey">MA</span>&nbsp;y&nbsp;<span class="hardkey">Store</span>. Estos son los comandos:</p>

<p><span class="hardkey"><img alt="ma" src="/Media/Mlg/ma.png"></span>+<span class="hardkey">Store</span> <span class="hardkey">Cue</span> <span class="hardkey">7</span> <span class="hardkey">Time</span> <span class="hardkey">3</span> <span class="hardkey">Please</span></p>

<p>Pulsa Go+ para ver las cues 6 y 7 funcionando.</p>

<p>Date cuenta que esta vez hemos especificado qué número de cue queremos (hemos hecho esto ya previamente). Si no lo especificas, entonces automáticamente usa el siguiente número disponible (nosotros necesitamos hacerlo en este ejemplo).</p>

<p>Observa también que cuando utilizamos StoreLock se crea una cue protegida (Hay un "sí" en la columna de "protegido"). Las cues protegidas tienen una línea blanca sobre ellas. Esto es para indicar que los valores que podamos grabar en una de las cues anteriores no afectarán (cambios en el tracking) a la cue protegida. Por ejemplo añadimos un aparato en la cue 2 al 50% y automáticamente también estará al 50% en las cues 3 a la 6 pero en la cue 7 cambiará a 0% (o al valor que haya sido grabado).</p>

<a name="toc_header_anchor_1" id="toc_header_anchor_1" class="topic-toc-item"></a><h2>Editando el cuelist</h2>

<p>¿Recuerdas cuando editamos el nombre de la primera cue? Ahora necesitamos cambiar el nombre del resto de cues:</p>

<table border="1" cellpadding="1" cellspacing="1" style="width:300px">
	<thead>
		<tr>
			<th scope="col">Number:</th>
			<th scope="col">Name:</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>1</td>
			<td>Behind Curtain</td>
		</tr>
		<tr>
			<td>2</td>
			<td>Curtain Up</td>
		</tr>
		<tr>
			<td>3</td>
			<td>Build</td>
		</tr>
		<tr>
			<td>4</td>
			<td>Solo</td>
		</tr>
		<tr>
			<td>5</td>
			<td>Return</td>
		</tr>
		<tr>
			<td>6</td>
			<td>BO</td>
		</tr>
		<tr>
			<td>7</td>
			<td>Curtain Call</td>
		</tr>
	</tbody>
</table>

<p>Nos gustaría que la tercera cue&nbsp;se ejecute&nbsp;automáticamente cuando la segunda&nbsp;termine. Esta función se llama "Follow". En vez de que el trigger sea GO necesitamos seleccionar Follow. Edita la celda "Trig" en la tercera cue. La ventana que se abre te permite seleccionar un trigger diferente. Pulsa Follow y haz una prueba. Pulsa&nbsp; <span class="hardkey">Go+</span> hasta que consigas la cue 2. Cuando termine, automáticamente se ejecutará la cue 3.</p>

<p>Vamos a conocer otra opción. Queremos que la cue 7 opere cuatro segundos después del black out (cue 6). Así que necesitamos cambiar este trigger a "Time". Cuando haces esto, consigues un número en la columna "Trig Time". La cambiaremos a 4. Haz una prueba con el&nbsp; <span class="hardkey">Go+</span>.</p>

<p>Ahora piensa que soy el diseñador de luces de este pequeño show y he cambiado de opinión sobre la cue número 5. Quiero que la cambiemos para que use colores fríos en vez de colores cálidos. Así que haz esto:</p>

<p><span class="hardkey">Goto</span> <span class="hardkey">Cue</span> <span class="hardkey">5</span> <span class="hardkey">Please</span></p>

<p><span class="hardkey">Group</span> <span class="hardkey">2</span> <span class="hardkey">+</span> <span class="hardkey">4</span>&nbsp;<span class="hardkey"> . </span>&nbsp;<span class="hardkey"> . </span>&nbsp;</p>

<p><span class="hardkey">Fixture</span> <span class="hardkey">2</span> <span class="hardkey">+</span> <span class="hardkey">4</span>&nbsp;<span class="hardkey">At</span> <span class="hardkey">7</span> <span class="hardkey">5</span> <span class="hardkey">Please</span></p>

<p><span class="hardkey">Fixture</span> <span class="hardkey">6</span> <span class="hardkey">+</span> <span class="hardkey">8</span> <span class="hardkey">At</span> <span class="hardkey">6</span> <span class="hardkey">0</span> <span class="hardkey">Please</span></p>

<p>Estos eran los cambios que necesitábamos, ahora podemos guardar esto en la cue número 5:</p>

<p><span class="hardkey">Store</span> <span class="hardkey">Cue</span> <span class="hardkey">5</span> <span class="hardkey">Please</span></p>

<p>En la ventana emergente tienes que seleccionar&nbsp; <span class="softkey">Mezclar</span>&nbsp;para confirmar esta elección.</p>

<p>Esto es todo por ahora.</p>

<p>Recuerda salvar tu show (a menudo).</p>

<p>&nbsp;</p>

<p>En el siguiente capítulo vamos a añadir algunos otros aparatos interesantes.</p>

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
		<input data-val="true" data-val-number="The field Int32 must be a number." data-val-required="The Int32 field is required." id="ProductId" name="ProductId" type="hidden" value="28">
		<input id="CurrentGuid" name="CurrentGuid" type="hidden" value="fc53fe83-17e5-498e-9b19-df0f847d2300">
	</span>
</form></div>&nbsp;	</span>
	<span class="pull-right" style="white-space: nowrap;">
			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/GSG_09_StoreCueAndPlayback/es/1.5'; " title="Go to previous page '9 - Store a cue and play it back'">
				<i class="icon-arrow-left"></i> previous
			</button>

			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/GSG_11_AddingLedFixtures/es/1.5';" title="Go to next page '11 - Adding LED fixtures'">
				next <i class="icon-arrow-right"></i> 
			</button>
	</span>
</div>
	<div class="clear-fix"></div>
	<div class="pull-right">
	
			<button class="btn btn-mini" onclick="location.href='/Media/TopicPdf/17884/16';" title="Open/Save this topic as PDF document for viewing or printing">
				<img src="/Content/images/icons/filetype_pdf.png"> Open topic as PDF
			</button>
	</div>
<div class="clear-fix" style="margin-bottom: 10px"></div>
</div>

	
