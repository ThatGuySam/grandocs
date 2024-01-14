---
originalUrl: 'http://help2.malighting.com/Page/MA_dot2/HT_Effects/es/1.3'
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
		<input id="CurrentGuid" name="CurrentGuid" type="hidden" value="2457c63d-dd11-4171-b366-db5a6453f23d">
	</span>
</form></div>&nbsp;	</span>
	<span class="pull-right" style="white-space: nowrap;">
			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/HT_Chasers/es/1.3'; " title="Go to previous page 'Work with chasers'">
				<i class="icon-arrow-left"></i> previous
			</button>

			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/HT_WingsNodes3DOnPC/es/1.3';" title="Go to next page 'Connect nodes, wings, 3D and onPC'">
				next <i class="icon-arrow-right"></i> 
			</button>
	</span>
</div>
<div class="clear-fix" style="margin-bottom: 10px"></div>
</div>

			<div class="infobox"><b>Hint:</b><br><b>New English version</b><br>The language you selected is outdated. <a href="/Topic/2457c63d-dd11-4171-b366-db5a6453f23d/en">You may want to view the more up-to-date English version?</a></div>
		
			<div class="pull-right">
					<button class="btn btn-mini" style="margin-right: 10px; height: 30px;" onclick="location.href = '/Media/TopicPdf/18040/7'; " title="Open/Save this topic as PDF document for viewing or printing">
						<img src="/Content/images/icons/filetype_pdf.png" style="height: 24px;"> Open topic as PDF
					</button>
				<span class="badge badge-info">Version 1.2</span>
			</div>
		<h1>Cómo trabajar con Efectos</h1>

			<div class="topic-table-of-contents">
				<h2>Table of contents of this topic</h2>
				<div class="topic-toc-toggler topic-toc-toggler-hide"><a href="#" onclick="$('.topic-toc-ul').toggle(); $('.topic-toc-toggler-hide').hide(); $('.topic-toc-toggler-show').show(); return false;">hide</a></div>
				<div class="topic-toc-toggler topic-toc-toggler-show" style="display: none;"><a href="#" onclick="$('.topic-toc-ul').toggle(); $('.topic-toc-toggler-hide').show(); $('.topic-toc-toggler-show').hide(); return false;">show</a></div>
				<ul class="topic-toc-ul">
						<li>
							<a href="#toc_header_anchor_1">Teoría del Efecto</a>
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

		<a name="toc_header_anchor_1" id="toc_header_anchor_1" class="topic-toc-item"></a><h2>Teoría del Efecto</h2>

<p>Los efectos son la transición dinámica de un valor a otro. Siempre se mueve entre dos valores. Podemos controlar cómo debería ir de un valor a otro, la velocidad y si todos los aparatos deberían hacerlo en el mismo punto en el tiempo o si deberían desfasarse durante el ciclo del efecto.&nbsp;</p>

<p>Cada uno de los Tipos de Preset tiene algunos efectos predefinidos que puedes modificar.</p>

<p>Los diferentes valores de los efectos son valores que están en el programador y que puedes guardar en cues. Este es el único lugar donde podemos poner reproducir los efectos.</p>

<p>Vamos a examinar algunos de estos ajustes. Vamos a empezar con dos valores. En la barra de título del efecto (color morado) encontrarás dos botones llamados&nbsp;<span class="softkey">Valor bajo</span>&nbsp;y&nbsp;<span class="softkey">Valor alto</span>.&nbsp;Se usan para acceder y cambiar estos valores.</p>

<p>Algunos efectos pueden utilizar también ajustes de Ancho (Width) y Suavidad (Softness)</p>

<p>Para aprender más sobre qué son los efectos, por favor acude a las páginas de ayuda&nbsp;<a href="/Topic/ca034c9c-6b13-4948-8e83-c6e4f2ff4d21">¿Qué son Efectos?</a>&nbsp;y la&nbsp;<a href="/Topic/0e539790-291a-4be0-be05-8f3e8d81c0eb">vista Efectos</a>.</p>

<a name="toc_header_anchor_2" id="toc_header_anchor_2" class="topic-toc-item"></a><h2>Crear un efecto en tu programador</h2>

<p>Para diseñar un efecto en tu programador necesitas seleccionar los aparatos que quieres que utilicen el efecto, y el tipo de preset que quieres que use. Luego, en la barra de título del tipo de preset presiona el icono&nbsp; <img alt="" src="/Media/Image/Dot2_ViewsandWindows_ControlElements_TitleBar17_1-0.PNG">&nbsp;o presiona la tecla&nbsp;<span class="hardkey">Effect</span>.</p>

<p>Esto abre la vista de efectos para el tipo de preset seleccionado.</p>

<p>Ahora puedes seleccionar una de las plantillas de efecto predefinidas para el tipo de preset que has seleccionado (no "Off" ni "Stomp"). No hay ningún efecto para los tipos de preset Control, Shaper o Vídeo así que por favor selecciona otra cosa.</p>

<p>El encoder izquierdo se puede usar para ajustar el valor "Alto" y "Bajo". También puedes ajustarlos pulsando los respectivos botones en la barra de título. Puedes usar presets como valores.</p>

<p>El encoder central izquierdo controla la Velocidad del efecto. Un número más alto hace que el efecto funcione más rápido.</p>

<p>El encoder central derecho controla la Fase. Esto es el extensión de los aparatos en el tiempo del loop con efecto cíclico. Si hay un valor aquí, entonces todos tus aparatos se encuentran al mismo tiempo en el ciclo de loop&nbsp;y el resultado es que todos van cambiando juntos. Incluso si ahora giras el encoder, parece no ocurrir nada. Esto es porque todos los aparatos se encuentran todavía en el mismo punto en el ciclo. Si quieres distribuir todos los aparatos uniformemento en el ciclo, necesitas tener una fase desde 0 a 360 grados. Si presionas el encoder puedes ver algunas extensiones predefinidas.&nbsp;Una se llama&nbsp;<span class="softkey">0..360</span>&nbsp;y hay otra llamada&nbsp;<span class="softkey">0..-360</span>. Puedes utilizar estos dos para distribuir tus aparatos uniformemente en el loop. La diferencia es la dirección del efecto. Una tercera fase predefinida es el&nbsp;<span class="softkey">Mirror (0...360...0)</span>, Esto dividirá tu selección en dos y hará que el efecto funcione con estilo wing o mirror. También puedes teclear la tuya propia. Por ejemplo <span class="syntax">0 Thru 180</span>&nbsp;o&nbsp;<span class="syntax">-360 thru 0 thru -360</span>. Estas extensiones también se pueden hacer utilizando los diferentes modos de la tecla Align en combinación con el giro del encoder. Haz pruebas e intenta también superar el número 360.</p>

<p>A menudo hay efectos llamados algo como "Suave" o "Duro". Estos efectos cambiarán entre los valores altos y bajos tanto con una curva suave (sinus) como dura (PWM). Puedes realizar ajustes usando el encoder derecho mientras pulsas la tecla &nbsp;<span class="hardkey"><img alt="ma" src="/Media/Mlg/ma_1.png"></span>.</p>

<p>Los efectos Dimmer y Color normalmente se pueden ajustar en anchura. La anchura controla cuántos de los aparatos seleccionados están usando el valor "Alto" y cuántos el valor "Bajo". La anchura se puede ajustar con el encoder derecho (sin presionando la tecla&nbsp;<span class="hardkey"><img alt="ma" src="/Media/Mlg/ma_1.png"></span>). Si pulsas el encoder te da acceso a algunos valores predefinidos llamados&nbsp;<span class="softkey">Uno</span>, <span class="softkey">Dos</span>&nbsp;o&nbsp;<span class="softkey">Tres</span>. Se pueden usar para fijar la cantidad de aparatos que usan el valor alto.</p>

<p>Cuando un aparato está bajo la influencia de un efecto, hay una marca magenta junto al ID de Aparato.</p>

<a name="toc_header_anchor_3" id="toc_header_anchor_3" class="topic-toc-item"></a><h2>Almacenar un Efecto</h2>

<p>Una vez que has diseñado el efecto a tu medida, puedes guardarlo. Puedes hacerlo en una cue existente o en una nueva o incluso en un preset.</p>

<p>Los efectos comenzarán cuando ejecutes la cue y harán “fade in” usando el tiempo fade de la cue.</p>

<a name="toc_header_anchor_4" id="toc_header_anchor_4" class="topic-toc-item"></a><h2>Detener un Efecto</h2>

<p>Puedes detener un efecto que se está ejecutando en una cue deteniendo el ejecutor, o puedes programar una cue dónde detenerse.</p>

<p>Para programar una cue dónde deben detenerse los efectos necesitas tener algunos valores activos "stop" en tu programador. Usamos un efecto especial llamado "Stomp" para detener valores de efectos.</p>

<p>Selecciona el aparato que quieres que detenga un efecto y selecciona el Tipo de Preset de un efecto que está funcionando. Ahora abre el editor de efectos presionando la tecla&nbsp;<span class="hardkey">Effect</span>. Aquí puedes pulsar el botón&nbsp;<span class="softkey">Stomp</span>. No pulses el botón Off. Esto sacará los valores fuera de tu programador. No detiene el efecto. Necesitas tener el valor Stomp en tu programador y guardar esto como una cue después de aquella donde el efecto comenzó.</p>

<p>Si no tienes ningún aparato seleccionado cuando pulsas Stomp, entonces estás deteniendo todos los aparatos que usan un efecto en ese Tipo de Preset.</p>

<p>Los efectos se detendrán con el tiempo fade de la cue.</p>

<a name="toc_header_anchor_5" id="toc_header_anchor_5" class="topic-toc-item"></a><h2>Capturar y almacenar Efectos activos</h2>

<p>Si necesitas "capturar" un efecto desde otra cue y grabarlo en una nueva cue, entonces necesitas tener activa la cue original (donde se está ejecutando el efecto). Podría ser por ejemplo en modo vista previa (<a href="/Topic/9cc33d25-5cfa-426c-95dc-a43a03672f2f">¿Qué es Preview y Blind</a>). Selecciona los aparatos que están ejecutando el efecto y activa el tipo de preset correspondiente al efecto. Ahora tienes esos valores en tu programador y puedes almacenarlos en otro lugar.</p>

<p>Una de las ventajas de grabar tus efectos en presets y luego utilizar el preset de efecto en la cue es que es mucho más facil&nbsp;de agarrar los valores. Simplemente pulsa sobre el preset.</p>


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
		<input id="CurrentGuid" name="CurrentGuid" type="hidden" value="2457c63d-dd11-4171-b366-db5a6453f23d">
	</span>
</form></div>&nbsp;	</span>
	<span class="pull-right" style="white-space: nowrap;">
			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/HT_Chasers/es/1.3'; " title="Go to previous page 'Work with chasers'">
				<i class="icon-arrow-left"></i> previous
			</button>

			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/HT_WingsNodes3DOnPC/es/1.3';" title="Go to next page 'Connect nodes, wings, 3D and onPC'">
				next <i class="icon-arrow-right"></i> 
			</button>
	</span>
</div>
	<div class="clear-fix"></div>
	<div class="pull-right">
	
			<button class="btn btn-mini" onclick="location.href='/Media/TopicPdf/18040/7';" title="Open/Save this topic as PDF document for viewing or printing">
				<img src="/Content/images/icons/filetype_pdf.png"> Open topic as PDF
			</button>
	</div>
<div class="clear-fix" style="margin-bottom: 10px"></div>
</div>

	
