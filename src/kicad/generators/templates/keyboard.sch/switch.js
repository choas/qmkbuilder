module.exports = `
<%
const x = 1500 + (data.key.col * 1000);
const y = 1000 + (data.key.row * 1000);
%>$Comp
L keyboard_parts:KEYSW K_<%= data.name %>
U 1 1 <%= data.id %>1
P <%= x %> <%= y %>
F 0 "<%= data.name %>" H <%= x %> <%= y + 233 %> 60  0000 C CNN
F 1 "KEYSW" H <%= x %> <%= y - 100 %> 60  0001 C CNN
F 2 "MX_Alps_Hybrid:MX-<%= data.key.size.w %>U-NoLED" H <%= x %> <%= y %> 60  0001 C CNN
F 3 "" H <%= x %> <%= y %> 60  0000 C CNN
	1    <%= x %> <%= y %>
	1    0    0    -1
$EndComp
$Comp
L Device:D D_<%= data.name %>
U 1 1 <%= data.id %>0
P <%= x - 350 %> <%= y + 250 %>
F 0 "D_<%= data.key.name %>" V <%= x - 304 %> <%= y + 250 - 79 %> 50  0000 R CNN
F 1 "D" V <%= x - 405 %> <%= y + 250 - 79 %> 50  0000 R CNN
F 2 "keyboard_parts:D_SOD123_axial" H <%= x - 350 %> <%= y + 250 %> 50  0001 C CNN
F 3 "~" H <%= x - 350 %> <%= y + 250 %> 50  0001 C CNN
	1    <%= x - 350 %>  <%= y + 250 %>
	0    -1   -1   0
$EndComp
<% if (data.key.col === 0) { %>
Text GLabel <%= x - 600 %> <%= y + 400 %> 0    50   Input ~ 0
row<%= data.key.row %>
Wire Wire Line
	<%= x - 600 %> <%= y + 400 %> <%= x - 350 %> <%= y + 400 %>
<% } %>
<% if (data.key.col > 0) { %>
Wire Wire Line
	<%= x - 1350 %> <%= y + 400 %> <%= x - 350 %> <%= y + 400 %>
<% } %>
<% if (data.key.row === 0) { %>
Text GLabel <%= x + 300 %> <%= y - 350 %> 0    50   Input ~ 0
col<%= data.key.col %>
Wire Wire Line
	<%= x + 300 %> <%= y - 350 %> <%= x + 300 %> <%= y %>
<% } %>
<% if (data.key.row > 0) { %>
Wire Wire Line
	<%= x + 300 %> <%= y - 1000 %> <%= x + 300 %> <%= y %>
<% } %>
Wire Wire Line
	<%= x - 300 %> <%= y %> <%= x - 350 %> <%= y %>
Wire Wire Line
	<%= x - 350 %> <%= y %> <%= x - 350 %> <%= y + 100 %>
Connection ~ <%= x + 300 %> <%= y %>
Connection ~ <%= x - 350 %> <%= y + 400 %>
`;
