---
originalUrl: 'https://help2.malighting.com/Page/MA_dot2/HT_Effects/es/1.1'
---

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
		<input id="CurrentGuid" name="CurrentGuid" type="hidden" value="2457c63d-dd11-4171-b366-db5a6453f23d">
	</span>
</form></div>&nbsp;	</span>
	<span class="pull-right" style="white-space: nowrap;">
			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/HT_Chasers/es/1.1'; " title="Go to previous page 'Trabajar con Chasers'">
				<i class="icon-arrow-left"></i> previous
			</button>

			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/HT_WingsNodes3DOnPC/es/1.1';" title="Go to next page 'Conectar nodos, wings, 3D y onPC'">
				next <i class="icon-arrow-right"></i> 
			</button>
	</span>
</div>
<div class="clear-fix" style="margin-bottom: 10px"></div>
</div>

					<div class="infobox"><b>Hint:</b><br><b>New help version</b><br>The help version you selected belongs to an older software version. <a href="/Topic/SetCurrentVersionNumber/29/2457c63d-dd11-4171-b366-db5a6453f23d">You may want to view the latest help version.</a></div>

			<div class="pull-right">
					<button class="btn btn-mini" style="margin-right: 10px; height: 30px;" onclick="location.href = '/Media/TopicPdf/13841/3'; " title="Open/Save this topic as PDF document for viewing or printing">
						<img src="/Content/images/icons/filetype_pdf.png" style="height: 24px;"> Open topic as PDF
					</button>
				<span class="badge badge-info">Version 1.1</span>
			</div>
		<h1>C??mo trabajar con Efectos</h1>

			<div class="topic-table-of-contents">
				<h2>Table of contents of this topic</h2>
				<div class="topic-toc-toggler topic-toc-toggler-hide"><a href="#" onclick="$('.topic-toc-ul').toggle(); $('.topic-toc-toggler-hide').hide(); $('.topic-toc-toggler-show').show(); return false;">hide</a></div>
				<div class="topic-toc-toggler topic-toc-toggler-show" style="display: none;"><a href="#" onclick="$('.topic-toc-ul').toggle(); $('.topic-toc-toggler-hide').show(); $('.topic-toc-toggler-show').hide(); return false;">show</a></div>
				<ul class="topic-toc-ul">
						<li>
							<a href="#toc_header_anchor_1">Teor??a del Efecto</a>
						</li>
						<li>
							<a href="#toc_header_anchor_2">Crear un efecto en tu programador</a>
						</li>
						<li>
							<a href="#toc_header_anchor_3">Almacenar un Efecto</a>
						</li>
						<li>
							<a href="#toc_header_anchor_4">Detener un Efecto</a>
						</li>
						<li>
							<a href="#toc_header_anchor_5">Capturar y almacenar Efectos activos</a>
						</li>
				</ul>
			</div>

		<a name="toc_header_anchor_1" id="toc_header_anchor_1" class="topic-toc-item"></a><h2>Teor??a del Efecto</h2>

<p>Los efectos son la transici??n din??mica de un valor a otro. Siempre se mueve entre dos valores. Podemos controlar c??mo deber??a ir de un valor a otro, la velocidad y si todos los aparatos deber??an hacerlo en el mismo punto en el tiempo o si deber??an desfasarse durante el ciclo del efecto.&nbsp;</p>

<p>Cada uno de los Tipos de Preset tiene algunos efectos predefinidos que puedes modificar.</p>

<p>Los diferentes valores de los efectos son valores que est??n en el programador y que puedes guardar en cues. Este es el ??nico lugar donde podemos poner reproducir los efectos.</p>

<p>Vamos a examinar algunos de estos ajustes. Vamos a empezar con dos valores. En la barra de t??tulo del efecto (color azul) encontrar??s dos botones llamados&nbsp;<span class="softkey">Valor bajo</span>&nbsp;y&nbsp;<span class="softkey">Valor alto</span>.&nbsp;Se usan para acceder y cambiar estos valores.</p>

<p>Algunos efectos pueden utilizar tambi??n ajustes de Ancho (Width) y Suavidad (Softness)</p>

<p>Para aprender m??s sobre qu?? son los efectos, por favor acude a las p??ginas de ayuda&nbsp;<a href="/Topic/ca034c9c-6b13-4948-8e83-c6e4f2ff4d21">??Qu?? son Efectos?</a>&nbsp;y la&nbsp;<a href="/Topic/0e539790-291a-4be0-be05-8f3e8d81c0eb">vista Efectos</a>.</p>

<a name="toc_header_anchor_2" id="toc_header_anchor_2" class="topic-toc-item"></a><h2>Crear un efecto en tu programador</h2>

<p>Para dise??ar un efecto en tu programador necesitas seleccionar los aparatos que quieres que utilicen el efecto, y el tipo de preset que quieres que use. Luego, en la barra de t??tulo del tipo de preset presiona el icono&nbsp; <img alt="" src="/Media/Image/Dot2_ViewsandWindows_ControlElements_TitleBar17_1-0.PNG">&nbsp;o presiona la tecla&nbsp;<span class="hardkey">Effect</span>.</p>

<p>Esto abre la vista de efectos para el tipo de preset seleccionado.</p>

<p>Ahora puedes seleccionar una de las plantillas de efecto predefinidas para el tipo de preset que has seleccionado (no "Off" ni "Stomp"). No hay ning??n efecto para los tipos de preset Control, Shaper o V??deo as?? que por favor selecciona otra cosa.</p>

<p>El encoder izquierdo se puede usar para ajustar el valor "Alto" y "Bajo". Tambi??n puedes ajustarlos pulsando los respectivos botones en la barra de t??tulo. Puedes usar presets como valores.</p>

<p>El encoder central izquierdo controla la Velocidad del efecto. Un n??mero m??s alto hace que el efecto funcione m??s r??pido.</p>

<p>El encoder central derecho controla la Fase. Esto es el extensi??n de los aparatos en el tiempo del loop con efecto c??clico. Si hay un valor aqu??, entonces todos tus aparatos se encuentran al mismo tiempo en el ciclo de loop&nbsp;y el resultado es que todos van cambiando juntos. Incluso si ahora giras el encoder, parece no ocurrir nada. Esto es porque todos los aparatos se encuentran todav??a en el mismo punto en el ciclo. Si quieres distribuir todos los aparatos uniformemento en el ciclo, necesitas tener una fase desde 0 a 360 grados. Si presionas el encoder puedes ver algunas extensiones predefinidas.&nbsp;Una se llama&nbsp;<span class="softkey">0..360</span>&nbsp;y hay otra llamada&nbsp;<span class="softkey">0..-360</span>. Puedes utilizar estos dos para distribuir tus aparatos uniformemente en el loop. La diferencia es la direcci??n del efecto. Una tercera fase predefinida es el&nbsp;<span class="softkey">Mirror (0...360...0)</span>, Esto dividir?? tu selecci??n en dos y har?? que el efecto funcione con estilo wing o mirror. Tambi??n puedes teclear la tuya propia. Por ejemplo <span class="syntax">0 Thru 180</span>&nbsp;o&nbsp;<span class="syntax">-360 thru 0 thru -360</span>. Estas extensiones tambi??n se pueden hacer utilizando los diferentes modos de la tecla Align en combinaci??n con el giro del encoder. Haz pruebas e intenta tambi??n superar el n??mero 360.</p>

<p>A menudo hay efectos llamados algo como "Suave" o "Duro". Estos efectos cambiar??n entre los valores altos y bajos tanto con una curva suave (sinus) como dura (PWM). Puedes realizar ajustes usando el encoder derecho mientras pulsas la tecla &nbsp;<span class="hardkey"><img alt="ma" src="/Media/Mlg/ma_1.png"></span>.</p>

<p>Los efectos Dimmer y Color normalmente se pueden ajustar en anchura. La anchura controla cu??ntos de los aparatos seleccionados est??n usando el valor "Alto" y cu??ntos el valor "Bajo". La anchura se puede ajustar con el encoder derecho (sin presionando la tecla&nbsp;<span class="hardkey"><img alt="ma" src="/Media/Mlg/ma_1.png"></span>). Si pulsas el encoder te da acceso a algunos valores predefinidos llamados&nbsp;<span class="softkey">Uno</span>, <span class="softkey">Dos</span>&nbsp;o&nbsp;<span class="softkey">Tres</span>. Se pueden usar para fijar la cantidad de aparatos que usan el valor alto.</p>

<a name="toc_header_anchor_3" id="toc_header_anchor_3" class="topic-toc-item"></a><h2>Almacenar un Efecto</h2>

<p>Una vez que has dise??ado el efecto a tu medida, puedes guardarlo. Puedes hacerlo en una cue existente o en una nueva.</p>

<p>Los efectos comenzar??n cuando ejecutes la cue y har??n ???fade in??? usando el tiempo fade de la cue.</p>

<a name="toc_header_anchor_4" id="toc_header_anchor_4" class="topic-toc-item"></a><h2>Detener un Efecto</h2>

<p>Puedes detener un efecto que se est?? ejecutando en una cue deteniendo el ejecutor, o puedes programar una cue d??nde detenerse.</p>

<p>Para programar una cue d??nde deben detenerse los efectos necesitas tener algunos valores activos "stop" en tu programador. Usamos un efecto especial llamado "Stomp" para detener valores de efectos.</p>

<p>Selecciona el aparato que quieres que detenga un efecto y selecciona el Tipo de Preset de un efecto que est?? funcionando. Ahora abre el editor de efectos presionando la tecla&nbsp;<span class="hardkey">Effect</span>. Aqu?? puedes pulsar el bot??n&nbsp;<span class="softkey">Stomp</span>. No pulses el bot??n Off. Esto sacar?? los valores fuera de tu programador. No detiene el efecto. Necesitas tener el valor Stomp en tu programador y guardar esto como una cue despu??s de aquella donde el efecto comenz??.</p>

<p>Si no tienes ning??n aparato seleccionado cuando pulsas Stomp, entonces est??s deteniendo todos los aparatos que usan un efecto en ese Tipo de Preset.</p>

<p>Los efectos se detendr??n con el tiempo fade de la cue.</p>

<a name="toc_header_anchor_5" id="toc_header_anchor_5" class="topic-toc-item"></a><h2>Capturar y almacenar Efectos activos</h2>

<p>Si necesitas "capturar" un efecto desde otra cue y grabarlo en una nueva cue, entonces necesitas tener activa la cue original (donde se est?? ejecutando el efecto). Podr??a ser por ejemplo en modo vista previa (<a href="/Topic/9cc33d25-5cfa-426c-95dc-a43a03672f2f">??Qu?? es Preview y Blind</a>). Selecciona los aparatos que est??n ejecutando el efecto y activa el tipo de preset correspondiente al efecto. Ahora tienes esos valores en tu programador y puedes almacenarlos en otro lugar.</p>


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
		<input id="CurrentGuid" name="CurrentGuid" type="hidden" value="2457c63d-dd11-4171-b366-db5a6453f23d">
	</span>
</form></div>&nbsp;	</span>
	<span class="pull-right" style="white-space: nowrap;">
			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/HT_Chasers/es/1.1'; " title="Go to previous page 'Trabajar con Chasers'">
				<i class="icon-arrow-left"></i> previous
			</button>

			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/HT_WingsNodes3DOnPC/es/1.1';" title="Go to next page 'Conectar nodos, wings, 3D y onPC'">
				next <i class="icon-arrow-right"></i> 
			</button>
	</span>
</div>
	<div class="clear-fix"></div>
	<div class="pull-right">
	
			<button class="btn btn-mini" onclick="location.href='/Media/TopicPdf/13841/3';" title="Open/Save this topic as PDF document for viewing or printing">
				<img src="/Content/images/icons/filetype_pdf.png"> Open topic as PDF
			</button>
	</div>
<div class="clear-fix" style="margin-bottom: 10px"></div>
</div>

	
