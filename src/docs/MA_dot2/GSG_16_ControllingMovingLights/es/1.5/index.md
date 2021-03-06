---
originalUrl: 'http://help2.malighting.com/Page/MA_dot2/GSG_16_ControllingMovingLights/es/1.5'
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
		<input id="CurrentGuid" name="CurrentGuid" type="hidden" value="ae1232f0-c7d3-4e14-9be8-fba9f934c2ab">
	</span>
</form></div>&nbsp;	</span>
	<span class="pull-right" style="white-space: nowrap;">
			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/GSG_15_AddingMovingLights/es/1.5'; " title="Go to previous page '15 - Adding moving lights'">
				<i class="icon-arrow-left"></i> previous
			</button>

			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/GSG_17_MakingMoreGroupsAndPresets/es/1.5';" title="Go to next page '17 - Making more groups and Presets'">
				next <i class="icon-arrow-right"></i> 
			</button>
	</span>
</div>
<div class="clear-fix" style="margin-bottom: 10px"></div>
</div>

					<div class="infobox"><b>Hint:</b><br><b>New help version</b><br>The help version you selected belongs to an older software version. <a href="/Topic/SetCurrentVersionNumber/29/ae1232f0-c7d3-4e14-9be8-fba9f934c2ab">You may want to view the latest help version.</a></div>

			<div class="pull-right">
					<button class="btn btn-mini" style="margin-right: 10px; height: 30px;" onclick="location.href = '/Media/TopicPdf/17888/16'; " title="Open/Save this topic as PDF document for viewing or printing">
						<img src="/Content/images/icons/filetype_pdf.png" style="height: 24px;"> Open topic as PDF
					</button>
				<span class="badge badge-info">Version 1.5</span>
			</div>
		<h1>Gu??a de Introducci??n - Controlando Luces m??viles</h1>

			<div class="topic-table-of-contents">
				<h2>Table of contents of this topic</h2>
				<div class="topic-toc-toggler topic-toc-toggler-hide"><a href="#" onclick="$('.topic-toc-ul').toggle(); $('.topic-toc-toggler-hide').hide(); $('.topic-toc-toggler-show').show(); return false;">hide</a></div>
				<div class="topic-toc-toggler topic-toc-toggler-show" style="display: none;"><a href="#" onclick="$('.topic-toc-ul').toggle(); $('.topic-toc-toggler-hide').show(); $('.topic-toc-toggler-show').hide(); return false;">show</a></div>
				<ul class="topic-toc-ul">
						<li>
							<a href="#toc_header_anchor_1">Dimmer</a>
						</li>
						<li>
							<a href="#toc_header_anchor_2">Posici??n</a>
						</li>
						<li>
							<a href="#toc_header_anchor_3">Gobo</a>
						</li>
						<li>
							<a href="#toc_header_anchor_4">Color</a>
						</li>
						<li>
							<a href="#toc_header_anchor_5">Beam</a>
						</li>
						<li>
							<a href="#toc_header_anchor_6">Focus</a>
						</li>
						<li>
							<a href="#toc_header_anchor_7">Control</a>
						</li>
						<li>
							<a href="#toc_header_anchor_8">Shapers</a>
						</li>
				</ul>
			</div>

		<p>Hemos a??adido algunos aparatos nuevos con muchas funciones nuevas. Esto significa que nuestra barra Tipos de Preset&nbsp;situada en la parte derecha de la pantalla 1 ha aumentado. Ahora se muestra as??:</p>

<p><img alt="" src="/Media/Image/Dot2_GettingStarted_ControllingMovingLights_01_1-1-3.png"></p>

<p>Prueba a seleccionar el aparato 42 usando las teclas. F??jate c??mo la Vista de Hoja Aparatos y S??mbolo se desplaza para permitir ver el aparato seleccionado. Las vistas de Layout no se mueven.</p>

<p>Seleccionando los diferentes Tipos de Preset puedes comprobar las distintas formas de controlar las funciones de los aparatos.</p>

<p>Con la intenci??n de hacer esto lo m??s f??cil posible, MA ha creado una serie de vistas que te dan acceso r??pido a algunas de las funcionalidades m??s utilizadas. Tienes tambi??n acceso a los valores raw, por lo que si sabes exactamente qu?? valor deber??a tener un atributo espec??fico, entonces puedes usar los faders raw.</p>

<p>C??mo se organiza todo esto es una parte del perfil del aparato.&nbsp;</p>

<p>Ya vimos esto cuando estuvimos trabajando con colores en el cap??tulo 12. Introdujimos el Picker, el Fader, el Swatchbook y valores&nbsp;Raw.</p>

<p>Todos los diferentes tipos de preset tienen controles de valores Raw en la pesta??a de m??s a la derecha. En Raw deber??as saber que hay m??s de 4 canales pero est??n organizados en grupos de cuatro como m??ximo para hacer m??s f??cil su uso y control con los de los encoders. Normalmente est??n organizados en grupos m??s peque??os para separar funciones diferentes.</p>

<p>Esta no es la ??nica forma para mostrar todo esto. Se adaptan dependiendo de los aparatos de tu show. La estructura es similar para la mayor??a de los diferentes tipos de preset.</p>

<p>Ahora me tomar?? un tiempo para explicar los controles m??s comunes basados en los aparatos que tenemos en nuestro show. Es un poco ???aburrido??? de leer, pero ??salo para comprobar todas las cosas sobre las que he escrito. No estamos guardando nada en este cap??tulo, as?? que si est??s c??modo con el control de los aparatos, pasa al siguiente.</p>

<a name="toc_header_anchor_1" id="toc_header_anchor_1" class="topic-toc-item"></a><h2>Dimmer</h2>

<p>Ya hemos trabajado esto en el cap??tulo 5. Si lo has olvidado, te sugiero que retrocedas y vuelvas a leerlo. Hay mucha informaci??n interesante en ese cap??tulo.</p>

<a name="toc_header_anchor_2" id="toc_header_anchor_2" class="topic-toc-item"></a><h2>Posici??n</h2>

<p>En posici??n normalmente tenemos dos faders. Uno para Pan y otro para Tilt. La mayor??a de los tipos de aparatos se construyen con la posici??n por defecto en el medio de su rango de movimiento. As?? que la posici??n por defecto del&nbsp;fader tambi??n se encuentra en el medio. Los valores mostrados como una escala para los faders se toman de los valores f??sicos en el perfil del aparato. Al lado de cada fader hay un bot??n que restablece la posici??n al centro (normalmente 0 grados).</p>

<p>En el lado derecho encontrar??s algunos botones m??s.</p>

<p><span class="softkey">Flip</span> se usa cuando una aparato&nbsp;apunta a una posici??n usando unos valores pan y tilt. Algunas veces puedes alcanzar la misma posici??n con otros valores diferentes. El bot??n&nbsp;??? <span class="softkey">Flip</span> permite elegir que camino queremos que utilicen los aparatos para llegar hasta su posici??n. Flip es una opci??n toggle por lo que podemos activarla o desactivarla y elegir la opci??n que m??s nos interese..</p>

<p><span class="softkey">Home</span> es como pulsar el bot??n del centro para Pan y Tilt. Coloca al aparato de nuevo en su posici??n por defecto.</p>

<p>Hay cinco botones para cada uno de los modos Align&nbsp;y un bot??n&nbsp;<span class="softkey">Wings</span> que permite dividir tu selecci??n de aparatos en dos grupos (por la mitad) &nbsp;siendo el segundo grupo un espejo de los valores del primer grupo en el atributo Pan. Wings s??lo funciona en Pan.&nbsp;</p>

<a name="toc_header_anchor_3" id="toc_header_anchor_3" class="topic-toc-item"></a><h2>Gobo</h2>

<p>La vista Tipo de Preset Gobo nos permite ver, seleccionar y controlar las ruedas de Gobos en tus aparatos. Esta vista puede cambiar mucho dependiendo de los aparatos que utilices en tu show. Algunos aparatos tienen muchos gobos y ruedas de animaci??n. Para nuestro Alpha Profile 700 s??lo tenemos una rueda de gobo.&nbsp;</p>

<p>En el lado izquierdo hay una barra de desplazamiento vertical que nos permite seleccionar el gobo que queremos. Al lado hay un grupo de botones. El que se encuentra m??s arriba se denomina&nbsp; <span class="softkey">Select</span>. Esto nos permite seleccionar uno de los gobos del lado izquierdo. Algunos tipos de aparatos tienen una rotaci??n continua de la rueda de gobos. El Alpha Profile 700 no lo tiene. Esto es adem??s el porqu?? de que los tres siguientes botones est??n deshabilitados. Se usan para controlar la direcci??n de la rotaci??n&nbsp; (<span class="softkey">Spin &gt;</span> va en la direcci??n de las manecillas del reloj y&nbsp;&nbsp;<span class="softkey">Spin &lt;</span>&nbsp;va en el sentido contrario) y para pararla&nbsp; (<span class="softkey">Stop</span>).&nbsp;Los ??ltimos botones se encuentran disponibles si el aparato tiene funci??n Gobo Shake.&nbsp;</p>

<p>Si la rueda de gobos tiene rotaci??n de gobos, entonces esto se controla normalmente mediante el segundo encoder y el fader en la pantalla. Normalmente la rotaci??n tiene dos modos. Index y rotaci??n. Esto se selecciona mediante los botones que se encuentran al lado de la pantalla fader. Hay un&nbsp; <span class="softkey">Spin &gt;</span>&nbsp;y&nbsp;<span class="softkey">Spin &lt;</span> que rota el gobo en la direcci??n seleccionada. El fader controla la velocidad,&nbsp;<span class="softkey">Stop</span> para la rotaci??n donde est??,&nbsp;<span class="softkey">Index</span> cambia el modo y puedes usar el fader para posicionar con precisi??n el gobo de la manera que quieras. <span class="softkey">Center</span> devuelve la posici??n gobo a la posici??n central por defecto.</p>

<p>Recuerda que pulsando los encoders se abre la vista de Calculadora donde puedes tambi??n seleccionar los diferentes gobos.</p>

<a name="toc_header_anchor_4" id="toc_header_anchor_4" class="topic-toc-item"></a><h2>Color</h2>

<p>Hablamos sobre el control de color en el cap??tulo 12. Espero que no lo hayas olvidado.</p>

<a name="toc_header_anchor_5" id="toc_header_anchor_5" class="topic-toc-item"></a><h2>Beam</h2>

<p>El Tipo de Preset Beam abarca diferentes cosas que afectan a la apariencia del beam. Pueden ser atributos como Iris, Prisma, Shutters, Frost e incorporar Efectos.</p>

<p>Vamos a ver qu?? pueden hacer nuestros aparatos. La pesta??a que se encuentra m??s a la izquierda tiene Shutter, Strobo e Iris. El fader del Strobo controla la velocidad del strobo. Los botones que se encuentran al lado del fader te permiten seleccionar si el shutter debe estar abierto o cerrado. Los otros tres botones nos permiten seleccionar los diferentes modos de strobo que los Alpha Profile y los GLP pueden hacer. Existe el modo strobe standard, un Pulse y un Random.</p>

<p>El segundo fader no tiene ninguna funcionalidad con nuestros aparatos.</p>

<p>El tercer fader es el Iris para los Alpha Profiles. De nuevo el fader controla la apertura del iris y hay algunos botones al lado del fader que trabajan como los botones para el Shutter. Los dos primeros son Abrir y Cerrar. Los tres siguientes te dan diferentes modos de&nbsp;strobo con&nbsp;el Iris. Los otros dos son diferentes patrones pulse.</p>

<p>Ten en cuenta que hay una pesta??a extra llamada&nbsp;<span class="softkey">Prisma&nbsp;1</span>. Aqu?? puedes elegir si utilizar o no el prisma de 3 caras. Lo colocas dentro seleccion??ndolo y lo sacas fuera pulsando <span class="softkey">Off</span>.??? El prisma que tenemos no tiene rotaci??n as?? que el segundo fader no hace nada.</p>

<p>Otras funciones de algunos aparatos est??n s??lo accesibles mediante los atributos Raw. Esto incluye el Frost.</p>

<a name="toc_header_anchor_6" id="toc_header_anchor_6" class="topic-toc-item"></a><h2>Focus</h2>

<p>En Focus normalmente encontramos los controles de Zoom y Focus. Los dos controles son muy similares. Los fader controlan el tama??o del beam o el punto de enfoque del&nbsp;aparato. A su lado hay tres botones. Cada uno representa la posici??n de arriba, medio y abajo del fader. Algunos aparatos tienen un sistema de enfoque m??s complejo. S??lo se puede acceder a estos atributos extra en los atributos Raw.&nbsp;</p>

<a name="toc_header_anchor_7" id="toc_header_anchor_7" class="topic-toc-item"></a><h2>Control</h2>

<p>El control nos permite acceder a las caracter??sticas de la l??mpara y a diferentes resets de los aparatos. Estos atajos no funcionan si tus aparatos no tienen estos canales de control porque han puesto estas funciones dentro de un canal diferente. Como el Martin Rush MH3 ??? aqu?? puedes encontrar los controles de aparato dentro del canal ???Curve??? en el Tipo de Preset Dimmer.</p>

<a name="toc_header_anchor_8" id="toc_header_anchor_8" class="topic-toc-item"></a><h2>Shapers</h2>

<p>Shapers no tienen ninguna vista de ayuda especial. Aqu?? s??lo tienes los valores de control Raw.</p>

<p>&nbsp;</p>

<p>Ok, suficiente informaci??n aburrida, vamos a usarla para algo. En el siguiente cap??tulo vamos a crear algunos grupos m??s y alg??n otro preset.</p>


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
		<input id="CurrentGuid" name="CurrentGuid" type="hidden" value="ae1232f0-c7d3-4e14-9be8-fba9f934c2ab">
	</span>
</form></div>&nbsp;	</span>
	<span class="pull-right" style="white-space: nowrap;">
			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/GSG_15_AddingMovingLights/es/1.5'; " title="Go to previous page '15 - Adding moving lights'">
				<i class="icon-arrow-left"></i> previous
			</button>

			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/GSG_17_MakingMoreGroupsAndPresets/es/1.5';" title="Go to next page '17 - Making more groups and Presets'">
				next <i class="icon-arrow-right"></i> 
			</button>
	</span>
</div>
	<div class="clear-fix"></div>
	<div class="pull-right">
	
			<button class="btn btn-mini" onclick="location.href='/Media/TopicPdf/17888/16';" title="Open/Save this topic as PDF document for viewing or printing">
				<img src="/Content/images/icons/filetype_pdf.png"> Open topic as PDF
			</button>
	</div>
<div class="clear-fix" style="margin-bottom: 10px"></div>
</div>

	
