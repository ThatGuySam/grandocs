---
originalUrl: 'http://help2.malighting.com/Page/MA_dot2/WI_Executors/es/1.5'
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
		<input data-val="true" data-val-number="The field Int32 must be a number." data-val-required="The Int32 field is required." id="ProductId" name="ProductId" type="hidden" value="7">
		<input id="CurrentGuid" name="CurrentGuid" type="hidden" value="839f039d-2e75-4ed2-a4be-0ff458dec63d">
	</span>
</form></div>&nbsp;	</span>
	<span class="pull-right" style="white-space: nowrap;">
			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/WI_Cues/es/1.5'; " title="Go to previous page 'Cues'">
				<i class="icon-arrow-left"></i> previous
			</button>

			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/WI_Chasers/es/1.5';" title="Go to next page 'Chasers'">
				next <i class="icon-arrow-right"></i> 
			</button>
	</span>
</div>
<div class="clear-fix" style="margin-bottom: 10px"></div>
</div>

			<div class="infobox"><b>Hint:</b><br><b>New English version</b><br>The language you selected is outdated. <a href="/Topic/839f039d-2e75-4ed2-a4be-0ff458dec63d/en">You may want to view the more up-to-date English version?</a></div>
		
			<div class="pull-right">
					<button class="btn btn-mini" style="margin-right: 10px; height: 30px;" onclick="location.href = '/Media/TopicPdf/14755/3'; " title="Open/Save this topic as PDF document for viewing or printing">
						<img src="/Content/images/icons/filetype_pdf.png" style="height: 24px;"> Open topic as PDF
					</button>
				<span class="badge badge-info">Version 1.1</span>
			</div>
		<h1>Qué son Ejecutores</h1>

			<div class="topic-table-of-contents">
				<h2>Table of contents of this topic</h2>
				<div class="topic-toc-toggler topic-toc-toggler-hide"><a href="#" onclick="$('.topic-toc-ul').toggle(); $('.topic-toc-toggler-hide').hide(); $('.topic-toc-toggler-show').show(); return false;">hide</a></div>
				<div class="topic-toc-toggler topic-toc-toggler-show" style="display: none;"><a href="#" onclick="$('.topic-toc-ul').toggle(); $('.topic-toc-toggler-hide').show(); $('.topic-toc-toggler-show').hide(); return false;">show</a></div>
				<ul class="topic-toc-ul">
						<li>
							<a href="#toc_header_anchor_1">Cues</a>
						</li>
						<li>
							<a href="#toc_header_anchor_2">Chaser</a>
						</li>
						<li>
							<a href="#toc_header_anchor_3">Master de grupos</a>
						</li>
						<li>
							<a href="#toc_header_anchor_4">Master especiales</a>
								<ul>
										<li><a href="#toc_header_anchor_5">Master Speed (Master de Velocidad)</a></li>
										<li><a href="#toc_header_anchor_6">Master Rate</a></li>
										<li><a href="#toc_header_anchor_7">Master Executor Time</a></li>
										<li><a href="#toc_header_anchor_8">Programmer Time (Prog Time)</a></li>
								</ul>
						</li>
				</ul>
			</div>

		<p>Los Ejecutores son los Faders y Teclas que encontramos debajo de las pantallas (excepto en la pantalla derecha).</p>

<p>Aparecen en dos versiones. Una con dos teclas y un fader, y la otra es simplemente una tecla.&nbsp;</p>

<p>Las teclas tienen impreso un símbolo sobre ellas. El símbolo es&nbsp;<span class="hardkey"><img alt="go" src="/Media/Mlg/go_1.png"></span>&nbsp;&nbsp;y para las que poseen dos teclas aparece además este símbolo&nbsp;<span class="hardkey"><img alt="flash" src="/Media/Mlg/flash_1.png"></span>. Puedes cambiar las funciones de estas teclas usando&nbsp;<a href="https://mamanual.waduc.de/Topic/f613ca45-9cb0-43e7-bb0d-d75fdc5b0d39">Cambiar Funciones de Botones Ejecutores</a>&nbsp;o en el <a href="/Topic/eea17a4c-1b42-406e-86d9-7e61b3a0bfdd">Menú ajustes del ejecutor</a>.</p>

<p>Puedes tener muchas páginas con ejecutores. Los ejecutores activos necesitan estar visibles. Si tienes un ejecutor activo y cambias de página el ejecutor se fijará automáticamente y permanecerá visible. Cualquier cosa que pudiese estar sobre ese ejecutor en la nueva página no estará disponible antes de que el otro ejecutor (el de la página previa) deje de estar activo. Cuando cambia a inactivo automáticamente podemos acceder al contenido del asignado en la página actual. Esto se llama&nbsp;Autofix&nbsp;y puedes desactivarlo globalmente en el Setup -&gt;&nbsp;<a href="/Topic/13f3b4a4-bfc6-4893-9a29-b9e5c3a404ad">Ajustes Globales</a>.</p>

<p>También puedes optar por fijar los ejecutores usando <a href="https://mamanual.waduc.de/Topic/3fa7be26-ead4-44c6-98d5-f9d0eda903ff">Comando Fix</a>&nbsp;y&nbsp;<a href="https://mamanual.waduc.de/Topic/c9075805-7dcb-4602-b639-4f999f195cf2">Tecla Fix</a>.</p>

<p>Los ejecutores activos tienen un marco coloreado más brillante que los faders inactivos. Puedes convertir un ejecutor en inactivo presionando la tecla &nbsp;<span class="hardkey">Off</span>&nbsp;y luego una tecla asociada con ese&nbsp;ejecutor. Muchos ejecutores cambiarán a inactivos cuando el fader alcance el 0%, pero no los master especiales (leer abajo para más información).</p>

<p>&nbsp;</p>

<p>Los ejecutores pueden tener diferentes roles. A continuación una descripción de los mismos.</p>

<a name="toc_header_anchor_1" id="toc_header_anchor_1" class="topic-toc-item"></a><h2>Cues</h2>

<p>Puedes tener cues y listas de cues. Cuando grabas cues en un ejecutor, entonces consigues una lista de cues (cuelist) con uno o más cues.</p>

<p>En ese momento puedes volver a reproducir esos cues usando los Botones y Faders Ejecutores.&nbsp;</p>

<p>Este es el uso por defecto para los Ejecutores.</p>

<a name="toc_header_anchor_2" id="toc_header_anchor_2" class="topic-toc-item"></a><h2>Chaser</h2>

<p>Una lista de cues puede funcionar/operar en modo Chaser. Entonces, ignora los tiempos establecidos entre cues y estas funcionan ejecutándose en loop con un mismo tiempo para todas.</p>

<a name="toc_header_anchor_3" id="toc_header_anchor_3" class="topic-toc-item"></a><h2>Master de grupos</h2>

<p>Puedes guardar grupos en ejecutores y conseguir Masters de grupo. Estos se pueden usar para limitar la salida del dimmer en los aparatos del grupo. Estos no afectan a otros atributos como Pan/Tilt, Color, Gobo, etc.</p>

<a name="toc_header_anchor_4" id="toc_header_anchor_4" class="topic-toc-item"></a><h2>Master especiales</h2>

<p>Hay cuatro Masters especiales disponibles. Puedes encontrarlos en la <a href="/Topic/7c1f0153-925d-477b-9b74-20bbc04acc98">Vista Magic Speed</a>&nbsp;y pueden ser también asignados a ejecutores. Sólo tiene sentido tenerlos en faders ejecutores.</p>

<p>Esta es una pequeña descripción de los cuatro:</p>

<a name="toc_header_anchor_5" id="toc_header_anchor_5" class="topic-toc-item"></a><h3>Master Speed (Master de Velocidad)</h3>

<p>Este Master controla la velocidad de los efectos grabados en las cues y la velocidad de los chasers.</p>

<p>Son tiempos globales y afectará a todos los ejecutores. Esto puedes desactivarlo en el <a href="/Topic/eea17a4c-1b42-406e-86d9-7e61b3a0bfdd">Menú Ajustes del Ejecutor</a>&nbsp;para cada ejecutor si no quieres que estén controlados por este Master.</p>

<p>Cuando está activo verás el icono&nbsp;<img alt="" src="/Media/Image/Dot2_ViewsandWindows_StatusMessages22_1-1-3.png">&nbsp;junto a la línea de comandos en la pantalla de la derecha.</p>

<a name="toc_header_anchor_6" id="toc_header_anchor_6" class="topic-toc-item"></a><h3>Master Rate</h3>

<p>El <strong>Master Rate </strong>&nbsp;se usa para modificar los tiempos de las cues usando lo que llamamos un divisor. El valor por defecto&nbsp;es 1. Esto significa que los valores temporales en la cue están divididos entre uno, es decir, con el mismo tiempo que se han guardado. Si mueves el fader por debajo del 50% (posición por defecto para el fader de transición) consigues un valor del fader más bajo de 1. Si el fader está al 25%, entonces consigues un valor del 0.5. Así que si el fade original de&nbsp;tu cue&nbsp;es 2 segundos, entonces se divide entre 0.5 y el resultado es 4 segundos. Si mueves el fader al 0% todos los fades pararán. Si mueves el fader por encima del 50% entonces consigues un valor de fader mayor. Si pones el fader al 75% entonces tu valor será de 2, y 2 dividido entre 2 es 1, así que tu tiempo de fade es 1 segundo. Si lo pones al 100%, tu fade time será de 0 segundos. La velocidad de cualquier efecto guardado en las cues se verá también afectada por este master.</p>

<p>Son tiempos globales y afectará a todos los ejecutores. Esto puedes desactivarlo en el&nbsp;<a href="/Topic/eea17a4c-1b42-406e-86d9-7e61b3a0bfdd">Menú Ajustes del Ejecutor</a>&nbsp;para cada ejecutor si no quieres que estén controlados por este Master.</p>

<p>Cuando está activo verás el icono&nbsp;<img alt="" src="/Media/Image/Dot2_ViewsandWindows_StatusMessages23_1-1-3.png">&nbsp;junto a la línea de comandos en la pantalla de la derecha.</p>

<a name="toc_header_anchor_7" id="toc_header_anchor_7" class="topic-toc-item"></a><h3>Master Executor Time</h3>

<p>El Master&nbsp;Exec Time&nbsp;puedes utilizarlo para sobrescribir los tiempos de Fade grabados en las cue y usar el tiempo establecido con el Master. Los tiempos de delay grabados serán ignorados. Cuando mueves el fader hacia arriba obtienes un valor entre 0 y 10 segundos. Las dos teclas asociadas con el ejecutor pueden ser utilizadas para encender o apagar el Master Executor Time.</p>

<p>Cuando está activo verás el icono&nbsp;<img alt="" src="/Media/Image/Dot2_ViewsandWindows_StatusMessages24_1-1-3.png">&nbsp;junto a la línea de comandos en la pantalla de la derecha.</p>

<a name="toc_header_anchor_8" id="toc_header_anchor_8" class="topic-toc-item"></a><h3>Programmer Time (Prog Time)</h3>

<p>El <strong>master Prog T</strong> se usa para fijar un tiempo en tu programador. Esto es muy útil si operas en shows en directo y quieres establecer un tiempo de fade para el cambio de un valor del programador a otro. Cuando mueves el fader hacia arriba consigues un valor de entre 0 y 10 segundos. Las dos teclas asociadas con el ejecutor se pueden usar para activar o desactivar esta función. Cuando está On, todos los valores del programador usarán los tiempos fijados en tu fader, incluido cuando pulses <span class="hardkey">Clear</span>.&nbsp;</p>

<p>Cuando está activo verás el icono&nbsp;<img alt="" src="/Media/Image/Dot2_ViewsandWindows_StatusMessages25_1-1-3.png">&nbsp;junto a la línea de comandos en la pantalla de la derecha.</p>

<p>&nbsp;</p>

<a name="toc_header_anchor_9" id="toc_header_anchor_9" class="topic-toc-item"></a><h2>Links relacionados</h2>

<p><a href="/Topic/d0a671eb-91c4-45b5-bba6-aa5138f0e343">¿Qué son cues?</a></p>

<p><a href="/Topic/e740a39c-ef36-4081-9014-59e0a288711c">¿Qué es el Programador?</a></p>

<p><a href="/Topic/4c551247-c22e-4c8b-a255-c38c1caee863">Tecla Exec (Ejecutor)</a></p>

<p><a href="/Topic/956920be-cc03-4323-b261-45a8c7a229d0">Comando Ejecutor</a></p>

<p><a href="/Topic/51003507-17ad-42ae-bfa0-efbf2787c63e">Barra Ejecutor</a></p>

<p><a href="/Topic/c1cec312-0cbe-4824-aa2a-1b23a81f9d9f">Pool de Ejecutores</a></p>

<p><a href="/Topic/7c1f0153-925d-477b-9b74-20bbc04acc98">Vista Magic Speed</a></p>


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
		<input id="CurrentGuid" name="CurrentGuid" type="hidden" value="839f039d-2e75-4ed2-a4be-0ff458dec63d">
	</span>
</form></div>&nbsp;	</span>
	<span class="pull-right" style="white-space: nowrap;">
			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/WI_Cues/es/1.5'; " title="Go to previous page 'Cues'">
				<i class="icon-arrow-left"></i> previous
			</button>

			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/WI_Chasers/es/1.5';" title="Go to next page 'Chasers'">
				next <i class="icon-arrow-right"></i> 
			</button>
	</span>
</div>
	<div class="clear-fix"></div>
	<div class="pull-right">
	
			<button class="btn btn-mini" onclick="location.href='/Media/TopicPdf/14755/3';" title="Open/Save this topic as PDF document for viewing or printing">
				<img src="/Content/images/icons/filetype_pdf.png"> Open topic as PDF
			</button>
	</div>
<div class="clear-fix" style="margin-bottom: 10px"></div>
</div>

	
