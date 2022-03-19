
<div class="topic-navigation">

<div class="pull-right">
	<span class="pull-left">


<div class="pull-left">
<form action="/Topic/SetCurrentVersionNumber" class="form-inline" id="frmTagSelector" method="post">	<span class="form-mini">
		<div class="input-prepend"><span class="add-on">Select different version</span><select autocomplete="off" id="versionNumberId" name="versionNumberId" onchange="$(this).closest('#frmTagSelector').submit();" style="width: 120px;"><option value="">- latest -</option>
<option value="3">1.1</option>
<option value="7">1.2</option>
<option value="12">1.3</option>
<option value="16">1.5</option>
<option selected="selected" value="29">1.9</option>
</select></div>
		<input data-val="true" data-val-number="The field Int32 must be a number." data-val-required="The Int32 field is required." id="ProductId" name="ProductId" type="hidden" value="7">
		<input id="CurrentGuid" name="CurrentGuid" type="hidden" value="45ade0be-f728-45d9-8f9b-78ea0cf0dbf8">
	</span>
</form></div>&nbsp;	</span>
	<span class="pull-right" style="white-space: nowrap;">
			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/HT_UseExternalScreen/pt/1.9'; " title="Go to previous page 'Usar uma tela externa'">
				<i class="icon-arrow-left"></i> previous
			</button>

			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/HT_ResettheConsole/pt/1.9';" title="Go to next page 'Reset do Console'">
				next <i class="icon-arrow-right"></i> 
			</button>
	</span>
</div>
<div class="clear-fix" style="margin-bottom: 10px"></div>
</div>

		
			<div class="pull-right">
					<button class="btn btn-mini" style="margin-right: 10px; height: 30px;" onclick="location.href = '/Media/TopicPdf/56702/29'; " title="Open/Save this topic as PDF document for viewing or printing">
						<img src="/Content/images/icons/filetype_pdf.png" style="height: 24px;"> Open topic as PDF
					</button>
				<span class="badge badge-info">Version 1.9</span>
			</div>
		<h1>Use o Web Remote</h1>

			<div class="topic-table-of-contents">
				<h2>Table of contents of this topic</h2>
				<div class="topic-toc-toggler topic-toc-toggler-hide"><a href="#" onclick="$('.topic-toc-ul').toggle(); $('.topic-toc-toggler-hide').hide(); $('.topic-toc-toggler-show').show(); return false;">hide</a></div>
				<div class="topic-toc-toggler topic-toc-toggler-show" style="display: none;"><a href="#" onclick="$('.topic-toc-ul').toggle(); $('.topic-toc-toggler-hide').show(); $('.topic-toc-toggler-show').hide(); return false;">show</a></div>
				<ul class="topic-toc-ul">
						<li>
							<a href="#toc_header_anchor_1">Web Remote Senha</a>
						</li>
				</ul>
			</div>

		<p>dot2 fornece um sistema operacional que é independente da interface do web remote. Para conectar o web remote ao seu console dot2, verifique se o seu tablet ou computador possuem a mesma sub-rede que o seu console.</p>

<div class="important"><strong>Importante:</strong><br>
Use uma das dessas versões de navegador da web para executar o web remote em seu PC, smartphone ou tablet:<br>
-Internet&nbsp;Explore10<br>
-Safari e iOS&nbsp;8.1<br>
-Opera 26<br>
-Chrome 31<br>
-Chrome para Android 39<br>
-Firefox 33<br>
Se o navegador usado não atender pelo menos o mínimo dos requisitos necessários para o uso do web remote, uma pagina de retorno HTML será exibida.</div>

<div class="tip"><strong>Hint:</strong><br>
É possível conectar até três web remotes a um console.</div>

<div class="tip"><strong>Hint:</strong><br>
Também é possível usar o web remote no dot2 onPC.</div>

<div style="page-break-after: always" class="ck_pagebreak"><span style="display:none">&nbsp;</span></div>

<p>Conecte o web remote:</p>

<ol>
	<li>Ativar o web remote em&nbsp;<strong>Configuração – Configurações Globais</strong>.<br>
	Toque no sinal de proibição para verificar a caixa verde .</li>
	<li>Digite o endereço IP (consulte os colchetes) do console dot2 no seu navegador da web.</li>
	<li>A janela&nbsp;<strong>Web Remote</strong>&nbsp;é aberta.</li>
	<li>Digite a senha padrão "remote".</li>
</ol>

<figure class="caption"><img alt="" src="/Media/Image/dot2_vw_web-remote_password_v1-4.png">
<figcaption><em>Figura 1:</em><em>&nbsp;Insira a senha para o web remote</em></figcaption>
</figure>

<ol start="5">
	<li>Toque em&nbsp;<strong>Login</strong>.</li>
</ol>

<p>É possivel ajustar a exibição do web remote para o dispositivo que você usa.</p>

<p>Para fazer isso:</p>

<p>-Toque em&nbsp;<span class="softkey">Menu Principal</span>.<br>
-Toque em <span class="softkey">Configurações</span>.<br>
-Para exibir o web remote em um smartphone, toque em <span class="softkey">Telefone</span>.<br>
O web remote se encaixa agora na exibição do seu smartphone.</p>

<figure class="caption"><img alt="" src="/Media/Image/dot2_how-to_web-remote_phone_v1-4.png">
<figcaption><em>Figura 2: Web Remote – Configurações "Telefone"</em></figcaption>
</figure>

<p>&nbsp;-Para exibir o web remote em um tablet, toque em&nbsp;<span class="softkey">Tablet</span>.</p>

<p>O web remote se encaixa agora na exibição do seu tablet.</p>

<figure class="caption"><img alt="" src="/Media/Image/dot2_how-to_web-remote_tablet_v1-4.png">
<figcaption><em>Figura 3: Web Remote – Configurações "Tablet"</em></figcaption>
</figure>

<hr>
<a name="toc_header_anchor_1" id="toc_header_anchor_1" class="topic-toc-item"></a><h2>Web Remote Senha</h2>

<p>Para alterar a senha do web remote no console:</p>

<ol>
	<li>Pressione&nbsp;<span class="hardkey">Setup</span></li>
	<li>Toque em <span class="softkey">Configurações Globais</span>.</li>
</ol>

<p>Para mais informações sobre como alterar o IP no console veja o comando&nbsp;<a href="/Topic/0e2669d7-2811-4939-9742-40a379116826">SetIP</a>.&nbsp;</p>

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
<option value="16">1.5</option>
<option selected="selected" value="29">1.9</option>
</select></div>
		<input data-val="true" data-val-number="The field Int32 must be a number." data-val-required="The Int32 field is required." id="ProductId" name="ProductId" type="hidden" value="7">
		<input id="CurrentGuid" name="CurrentGuid" type="hidden" value="45ade0be-f728-45d9-8f9b-78ea0cf0dbf8">
	</span>
</form></div>&nbsp;	</span>
	<span class="pull-right" style="white-space: nowrap;">
			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/HT_UseExternalScreen/pt/1.9'; " title="Go to previous page 'Usar uma tela externa'">
				<i class="icon-arrow-left"></i> previous
			</button>

			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/HT_ResettheConsole/pt/1.9';" title="Go to next page 'Reset do Console'">
				next <i class="icon-arrow-right"></i> 
			</button>
	</span>
</div>
	<div class="clear-fix"></div>
	<div class="pull-right">
	
			<button class="btn btn-mini" onclick="location.href='/Media/TopicPdf/56702/29';" title="Open/Save this topic as PDF document for viewing or printing">
				<img src="/Content/images/icons/filetype_pdf.png"> Open topic as PDF
			</button>
	</div>
<div class="clear-fix" style="margin-bottom: 10px"></div>
</div>

	