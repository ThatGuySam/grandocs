---
originalUrl: 'https://help2.malighting.com/Page/MA_dot2/window_networkprotocols/pt/1.9'
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
<option value="16">1.5</option>
<option selected="selected" value="29">1.9</option>
</select></div>
		<input data-val="true" data-val-number="The field Int32 must be a number." data-val-required="The Int32 field is required." id="ProductId" name="ProductId" type="hidden" value="7">
		<input id="CurrentGuid" name="CurrentGuid" type="hidden" value="43e4d061-59ad-465f-a57b-789c74f9d181">
	</span>
</form></div>&nbsp;	</span>
	<span class="pull-right" style="white-space: nowrap;">
			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/window_networkinterface/pt/1.9'; " title="Go to previous page 'Network Interface'">
				<i class="icon-arrow-left"></i> previous
			</button>

			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/window_networksetup/pt/1.9';" title="Go to next page 'Network Setup'">
				next <i class="icon-arrow-right"></i> 
			</button>
	</span>
</div>
<div class="clear-fix" style="margin-bottom: 10px"></div>
</div>

		
			<div class="pull-right">
					<button class="btn btn-mini" style="margin-right: 10px; height: 30px;" onclick="location.href = '/Media/TopicPdf/24428/29'; " title="Open/Save this topic as PDF document for viewing or printing">
						<img src="/Content/images/icons/filetype_pdf.png" style="height: 24px;"> Open topic as PDF
					</button>
				<span class="badge badge-info">Version 1.9</span>
			</div>
		<h1>Configuração dos Protocolos de Rede</h1>

			<div class="topic-table-of-contents">
				<h2>Table of contents of this topic</h2>
				<div class="topic-toc-toggler topic-toc-toggler-hide"><a href="#" onclick="$('.topic-toc-ul').toggle(); $('.topic-toc-toggler-hide').hide(); $('.topic-toc-toggler-show').show(); return false;">hide</a></div>
				<div class="topic-toc-toggler topic-toc-toggler-show" style="display: none;"><a href="#" onclick="$('.topic-toc-ul').toggle(); $('.topic-toc-toggler-hide').show(); $('.topic-toc-toggler-show').hide(); return false;">show</a></div>
				<ul class="topic-toc-ul">
						<li>
							<a href="#toc_header_anchor_1">Funções da Barra de Encoder</a>
						</li>
				</ul>
			</div>

		<p>Para abrir a Configuração dos Protocolos de Rede, pressione&nbsp;<span class="hardkey">Setup</span>&nbsp;e toque em <span class="softkey">Protocolos de Rede</span>&nbsp;na coluna&nbsp;<strong>DMX/Rede.</strong></p>

<p><img alt="" src="/Media/Image/Dot2_ViewsandWindows_NetworkProtocols01_1-1-3.png"><em>Figure 1: Configuração dos Protocolos de Rede​ - Art-Net</em><br>
<br>
Para editar as células nas colunas <strong>Subnet </strong>e <strong>Universe</strong>, toque na célula e pressione o encoder ou toque e pressione a célula.&nbsp;A calculadora abre exibindo o sistema de números hexadecimais - 0 a 9 e A a F.<br>
<img alt="" src="/Media/Image/dot2_views-and-windows_network-protocols_calculator_v1-3.png"> <em>Figura 2: Configuração dos Protocolos de Rede - Calculadora em Art-Net</em><br>
<br>
<img alt="" src="/Media/Image/dot2_views-and-windows_network-protocols_sacn_v1-3.png"> <em>Figura 3: Configuração dos Protocolos de Rede – sACN</em><br>
<br>
Para editar a coluna<strong> sACN Universe</strong>, toque na célula e pressione o encoder ou toque e pressione a célula. A calculadora se abre.<br>
<br>
<img alt="" src="/Media/Image/dot2_views-and-windows_network-protocols_sacn-calculator_v1-3.png"> <em>Figura 4: Configuração dos Protocolos de Rede – Calculadora em&nbsp;sACN</em><br>
&nbsp;</p>

<div class="important"><strong>Sessão requerida:</strong><br>
Para usar&nbsp;Art-Net ou&nbsp;sACN (=streaming&nbsp;ACN), é necessário estar em uma sessão. Para criar uma sessão, toque &nbsp;<span class="softkey">Sessões</span> no Setup. A janela&nbsp;<a href="/Topic/43894987-4e55-4de0-b124-c0bf3c2fd787">configuração de rede</a>&nbsp;se abre.<br>
Se você não está em uma sessão, Art-Net ou&nbsp;sACN&nbsp;não estará ativo.</div>

<div class="important"><strong>Protocolos de rede e&nbsp;dot2 onPC:</strong><br>
Quando usar&nbsp;Art-Net ou&nbsp;sACN&nbsp;com a&nbsp;dot2 onPC, o primeiro universo é livre. Se você quiser colocar mais de um universo, você tem que adicionar um&nbsp;Node4 (com o máximo de 1024 canais de DMX).</div>

<div class="important"><strong>Windows® 8 ou Windows® 8.1:</strong><br>
Para usar&nbsp;Art-Net&nbsp;no Windows® 8 ou Windows® 8.1, é necessário iniciar o aplicativo como administrador. &nbsp;Se você não&nbsp;iniciar o aplicativo como administrador​, Art-Net&nbsp;não é ativo.</div>

<div class="important"><strong>Importante:</strong><br>
Endereços de Art-Net&nbsp;e&nbsp;sACN&nbsp;não devem ser atribuídos a vários universos.</div>

<p>Se um endereço de Art-Net e sACN&nbsp;é atribuído a múltiplos universos, os valores serão marcados em vermelho, o que significa que eles são inválidos.</p>

<p><br>
<img alt="" src="/Media/Image/dot2_views-and-windows_network-protocols_invalid-vlaue_v1-3.png">&nbsp;<em>Figura 5: Valores Inválidos&nbsp;na Configuração dos Protocolos de Rede</em></p>

<p>Nesta janela, você pode ativar ou desativar Art-Net ou sACN.&nbsp;</p>

<p>Art-Net e sACN são uma adição ao protocolo de rede padrão dot2-Net.&nbsp;<br>
Os protocolos de rede transporta&nbsp;DMX via conexão de rede com fio (Ethernet).</p>

<div class="tip"><strong>Prioridade sACN:</strong><br>
A prioridade de sACN&nbsp;na dot2&nbsp;está configurada para 100.</div>

<p>O sinal verde simboliza que este protocolo de rede está habilitado.&nbsp;<br>
A sinal de proibição vermelho simboliza que este protocolo de rede está desativado.<br>
Para ativar ou desativar um protocolo de rede, toque o tipo de protocolo de rede.&nbsp;</p>

<p>O endereço de IP, que envia o protocolo de rede, é exibido abaixo do protocolo de rede.&nbsp;<br>
O endereço de IP Art-Net é visível assim que&nbsp;Art-Net&nbsp;for habilitado e uma sessão estar ativa.<br>
Para alterar o endereço de&nbsp;IP, use o&nbsp;<a href="/Topic/0e2669d7-2811-4939-9742-40a379116826">comando SetIP</a>.&nbsp;</p>

<p>As colunas a seguir estão disponíveis:</p>

<p><strong>Ativo:</strong><br>
Exibe se Art-Net ou&nbsp;sACN&nbsp;estão on ou&nbsp;off&nbsp;para o respectivo universo.<br>
Para ligar ou desligar&nbsp;Art-Net ou&nbsp;sACN&nbsp;para o respectivo universo, toque e segure na célula ou pressione o encoder&nbsp;Scroll Active</p>

<p><strong>Modo:</strong><br>
Exibe o modo suportado do protocolo de rede.<br>
Art-Net = Saída&nbsp;Broadcast (Art-Net 1)<br>
sACN = Saída&nbsp;Multicast</p>

<p><strong>Universo dot2:</strong><br>
Exibe os universos da dot2 de 1 a 8.</p>

<p><strong>Universo Art-Net&nbsp;/ Universo&nbsp;sACN:</strong><br>
Exibe o Universo Ethernet.<br>
Art-Net = 0:0 - 0:7<br>
sACN = 1 - 8</p>

<a name="toc_header_anchor_1" id="toc_header_anchor_1" class="topic-toc-item"></a><h2>Funções da Barra de Encoder</h2>

<p><img alt="" src="/Media/Image/Dot2_ViewsandWindows_NetworkProtocols02_1-1-3.png"><em>Figura 6: Protocolo de Rede –Barra de&nbsp;Encoder&nbsp;</em></p>

<p><strong>Protocolo de Rede:</strong><br>
Para selecionar um protocolo de rede, gire o encoder para a esquerda ou direita.<br>
Para ativar ou desativar um protocolo de rede, pressione o encoder. O status atual é exibido em colchetes.</p>

<p><strong>Scroll:</strong><br>
Para percorrer pelo quadro de foco branco,&nbsp;gire o&nbsp;encoder&nbsp;para a esquerda ou direita​.<br>
Para selecionar on ou off no quadro de foco branco ou para abrir a calculadora na coluna com universos, pressione o encoder.</p>

<p><strong>Select :</strong><br>
Para selecionar células múltiplas, pressione&nbsp;<span class="hardkey"><img alt="ma" src="/Media/Mlg/ma_1.png"></span>&nbsp;e&nbsp;gire o&nbsp;encoder&nbsp;para a esquerda ou direita​.<br>
Uma moldura azul ao redor da célula exibe a célula selecionada.</p>


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
		<input id="CurrentGuid" name="CurrentGuid" type="hidden" value="43e4d061-59ad-465f-a57b-789c74f9d181">
	</span>
</form></div>&nbsp;	</span>
	<span class="pull-right" style="white-space: nowrap;">
			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/window_networkinterface/pt/1.9'; " title="Go to previous page 'Network Interface'">
				<i class="icon-arrow-left"></i> previous
			</button>

			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/window_networksetup/pt/1.9';" title="Go to next page 'Network Setup'">
				next <i class="icon-arrow-right"></i> 
			</button>
	</span>
</div>
	<div class="clear-fix"></div>
	<div class="pull-right">
	
			<button class="btn btn-mini" onclick="location.href='/Media/TopicPdf/24428/29';" title="Open/Save this topic as PDF document for viewing or printing">
				<img src="/Content/images/icons/filetype_pdf.png"> Open topic as PDF
			</button>
	</div>
<div class="clear-fix" style="margin-bottom: 10px"></div>
</div>

	
