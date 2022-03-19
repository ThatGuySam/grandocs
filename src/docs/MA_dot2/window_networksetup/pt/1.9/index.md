
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
		<input id="CurrentGuid" name="CurrentGuid" type="hidden" value="43894987-4e55-4de0-b124-c0bf3c2fd787">
	</span>
</form></div>&nbsp;	</span>
	<span class="pull-right" style="white-space: nowrap;">
			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/window_networkprotocols/pt/1.9'; " title="Go to previous page 'Network Protocols Configuration'">
				<i class="icon-arrow-left"></i> previous
			</button>

			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/window_newshow/pt/1.9';" title="Go to next page 'New Show'">
				next <i class="icon-arrow-right"></i> 
			</button>
	</span>
</div>
<div class="clear-fix" style="margin-bottom: 10px"></div>
</div>

		
			<div class="pull-right">
					<button class="btn btn-mini" style="margin-right: 10px; height: 30px;" onclick="location.href = '/Media/TopicPdf/18534/29'; " title="Open/Save this topic as PDF document for viewing or printing">
						<img src="/Content/images/icons/filetype_pdf.png" style="height: 24px;"> Open topic as PDF
					</button>
				<span class="badge badge-info">Version 1.9</span>
			</div>
		<h1>Janela Configuração de Rede</h1>

			<div class="topic-table-of-contents">
				<h2>Table of contents of this topic</h2>
				<div class="topic-toc-toggler topic-toc-toggler-hide"><a href="#" onclick="$('.topic-toc-ul').toggle(); $('.topic-toc-toggler-hide').hide(); $('.topic-toc-toggler-show').show(); return false;">hide</a></div>
				<div class="topic-toc-toggler topic-toc-toggler-show" style="display: none;"><a href="#" onclick="$('.topic-toc-ul').toggle(); $('.topic-toc-toggler-hide').show(); $('.topic-toc-toggler-show').hide(); return false;">show</a></div>
				<ul class="topic-toc-ul">
						<li>
							<a href="#toc_header_anchor_1">Área de Dispositivos Conectados</a>
						</li>
				</ul>
			</div>

		<p>Para ir para a <strong>Janela Configuração de Rede</strong>, pressione&nbsp;<span class="hardkey">Setup</span>&nbsp;e toque em&nbsp;<span class="softkey">Sessões</span>.</p>

<p><img alt="" src="/Media/Image/Dot2_ViewsandWindows_NetworkSetup01_1-2.png"><img alt="" height="15" src="data:image/gif;base64,R0lGODlhAQABAPABAP///wAAACH5BAEKAAAALAAAAAABAAEAAAICRAEAOw%3D%3D" width="15">​ <em>Figura 1: Janela de Configuração de Rede</em></p>

<p>Nessa janela você pode:</p>

<ul>
	<li>Iniciar, se juntar, parar, ou sair de uma sessão</li>
	<li>Adicionar ou remover dispositivos de uma sessão ou para uma sessão</li>
	<li>Atribuir um diferente universo de saída de DMX aos conectores&nbsp;(tab consoles&nbsp;e Nodes DMX)</li>
</ul>

<p>O status da sessão é independente do arquivo de show.</p>

<p>Abaixo da barra de título está o status da sessão exibida.<br>
Por padrão, o console é autônomo. Para conectar outros dispositivos ao console, você precisa iniciar uma sessão primeiro.</p>

<p>Para iniciar uma sessão, toque em&nbsp;<span class="softkey">Começar uma nova sessão ou juntar-se a uma existente</span>. A&nbsp;<a href="/Topic/ffb915c0-d1fd-41f2-a605-12a804b45c2d">janela Selecionar Número de Sessão</a>&nbsp;se abre.</p>

<p>Se o console está em uma sessão, o número da sessão é exibido no texto de status da sessão.</p>

<a name="toc_header_anchor_1" id="toc_header_anchor_1" class="topic-toc-item"></a><h2>Área de Dispositivos Conectados</h2>

<p>Na área de dispositivos conectados são exibidos todos os dispositivos conectados e previamente conectados.<br>
Os dispositivos são organizados em abas</p>

<ul>
	<li>Consoles</li>
	<li>OnPC</li>
	<li>3D</li>
	<li>DMX Nodes</li>
</ul>

<p>Para selecionar uma aba, toque no nome do dispositivo, por exemplo <span class="softkey">3D</span>.</p>

<p>A coluna exibe o endereço de&nbsp;IPv6, o nome de usuário&nbsp;e a versão no dispositivo conectado.</p>

<p>Para&nbsp;consoles&nbsp;e&nbsp;Nodes&nbsp;DMX,&nbsp;o tipo e os conectores&nbsp;XLR&nbsp;também são exibidos.</p>

<div class="important"><strong>Importante:</strong><br>
Apenas o nome de usuário dos&nbsp;Node4s são mutáveis. Todos os outros nomes são apenas leitura.</div>

<p>Para alterar o nome do&nbsp;usuário de um Node4, pressione e segure a célula do nome de usuário ou pressione o encoder de tela. O teclado virtual se abre.<br>
O nome de usuário atribuído é exibido no visor frontal do Node4.</p>

<p>Para alterar o universo de saída de DMX, pressione e segure uma célula do conector XLR ou pressione o encoder de tela.&nbsp;A <a href="/Topic/014d961b-8de1-4f48-92de-e6da3cc6a15f">Calculadora</a> abre.<br>
Se apenas&nbsp;1 universo&nbsp;no total&nbsp;está patcheado, mas diferentes saídas XLR são necessárias, você pode atribuir o mesmo universo para mais de uma saída XLR.</p>

<div class="important"><strong>Importante:</strong><br>
Para mudar o universo, NÃO é necessária uma sessão.&nbsp;</div>

<p>Para adicionar um dispositivo, toque em&nbsp;<span class="softkey">Adicionar</span>. A&nbsp;<a href="/Topic/a37aaf87-aca9-4dab-98fd-2ea655a80018">janela Selecionar Estação...</a>&nbsp;se abre.</p>

<div class="tip"><strong>Dica:</strong><br>
Para adicionar um dispositivo, não é necessário selecionar a coluna dispositivo primeiro.</div>

<div class="important"><strong>Importante:</strong><br>
Os dispositivos conectados e os nomes de host dos 4 Node's&nbsp;serão salvos no arquivo de show.</div>

<p>Para remover um dispositivo, selecione o dispositivo na tabela, toque em <span class="softkey">Remover</span>. O dispositivo é removido da sessão.</p>

<p>Um dispositivo pode ter&nbsp;quatro status diferentes:</p>

<p><img alt="" src="/Media/Image/Dot2_ViewsandWindows_NetworkSetup02_1-0.PNG"><img alt="" height="15" src="data:image/gif;base64,R0lGODlhAQABAPABAP///wAAACH5BAEKAAAALAAAAAABAAEAAAICRAEAOw%3D%3D" width="15">​<br>
<strong>Verde Claro:</strong><br>
Essa é a sua estação</p>

<p><img alt="" src="/Media/Image/Dot2_ViewsandWindows_NetworkSetup03_1-0.PNG"><img alt="" height="15" src="data:image/gif;base64,R0lGODlhAQABAPABAP///wAAACH5BAEKAAAALAAAAAABAAEAAAICRAEAOw%3D%3D" width="15">​<br>
<strong>Verde Escuro:</strong><br>
Esse dispositivo é membro da sessão.</p>

<p><img alt="" src="/Media/Image/Dot2_ViewsandWindows_NetworkSetup04_1-2.png"><img alt="" height="15" src="data:image/gif;base64,R0lGODlhAQABAPABAP///wAAACH5BAEKAAAALAAAAAABAAEAAAICRAEAOw%3D%3D" width="15">​<br>
<strong>Plano de fundo Vermelho:</strong><br>
Este dispositivo não está conectado.<br>
O dispositivo&nbsp;estava conectado e agora está desligado.</p>

<p><img alt="" src="/Media/Image/Dot2_ViewsandWindows_NetworkSetup05_1-2.png"><br>
<strong>Número da Versão Vermelho:</strong><br>
O dispositivo não pode se conectar. Se o número da versão está vermelho, você tentou ligar dispositivos com diferentes versões. Faça o update da&nbsp;dot2, onPC ou dot2 3D para a versão mais recente.&nbsp;</p>


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
		<input id="CurrentGuid" name="CurrentGuid" type="hidden" value="43894987-4e55-4de0-b124-c0bf3c2fd787">
	</span>
</form></div>&nbsp;	</span>
	<span class="pull-right" style="white-space: nowrap;">
			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/window_networkprotocols/pt/1.9'; " title="Go to previous page 'Network Protocols Configuration'">
				<i class="icon-arrow-left"></i> previous
			</button>

			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/window_newshow/pt/1.9';" title="Go to next page 'New Show'">
				next <i class="icon-arrow-right"></i> 
			</button>
	</span>
</div>
	<div class="clear-fix"></div>
	<div class="pull-right">
	
			<button class="btn btn-mini" onclick="location.href='/Media/TopicPdf/18534/29';" title="Open/Save this topic as PDF document for viewing or printing">
				<img src="/Content/images/icons/filetype_pdf.png"> Open topic as PDF
			</button>
	</div>
<div class="clear-fix" style="margin-bottom: 10px"></div>
</div>

	