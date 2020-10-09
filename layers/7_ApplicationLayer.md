
# Application Layer (Layer 7)
The application layer is the closest OSI layer to the end user as it is the only one that users directly interact with. It provides user interfaces and protocols for applications to communicate over a network such as email, remote file access and transfer, shared database management and other types of distributed information services. the port number provided by the transport layer helps data to reach it's intended application. port is a way to uniquely identify a process on a system. each protocol has it's own associated port number.

Application Layer protocol Defines:
<table>
	<th>Purpose</th>
	<th>Description</th>
	<tr>
		<td>	Message Type</td>
		<td> e.g request/response
		</td>
	</tr>
	<tr>
		<td>	Message Syntax</td>
		<td> what are the fields the subcomponents delinneated</td>
	</tr>
	<tr>
		<td>	Message Semantics</td>
		<td>the meaning of the information of the structure(semantics)</td>
	</tr>
	<tr>
		<td>	Message Rules</td>
		<td> the rules associated with sending messages, when and how to respond to </td>
	</tr>
</table>
See the table below for some common protocols and their purpose:

<table>
	<thead>
		<tr>
			<th>Protocol</th>
			<th>Port Number</th>
			<th>Meaning</th>
			<th>Purpose</th>
			<th>Application</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>HTTP/S</td>
			<td>80/443</td>
			<td>Hypertext Transfer Protocol Secure</td>
			<td>For viewing web pages </td>
			<td>Web browser</td>
		</tr>
		<tr>
			<td>FTP/S</td>
			<td>21/23</td>
			<td>File Transfer Protocol Secure</td>
			<td>Transfer of files</td>
			<td>Bit torrent</td>
		</tr>
		<tr>
			<td>SMTP</td>
			<td>25</td>
			<td>Simple Mail Transfer Protocol</td>
			<td>Sending Mail</td>
			<td>Outlook</td>
		</tr>
		<tr>
			<td>DNS</td>
			<td>53</td>
			<td>Domain Name Server</td>
			<td>resolves domain names to a numerical IP addresses</td>
			<td>Browser</td>
		</tr><tr>
			<td>VoIP</td>
			<td>Varies</td>
			<td>Voice over Internet Protocol</td>
			<td>Used to make calls over the internet</td>
			<td>Skype</td>
		</tr>
	</tbody>
</table>


---


## Application architectures
The type of protocol depends on the type of application architecture being used. 

<table>
	<thead><tr>
		<th>Architecture</th>
		<th>Description</th>
	</tr></thead>
	<tbody>
		<tr>
			<td> client-server</td>
			<td>The most common architecture in which many clients (remote processors) request and receive service from a centralized server (host computer). Client computers provide an interface to allow a computer user to request services of the server and to display the results the server returns. This is used by data centers/cloud computng. protocols used by this layer include DNS and DHCP.</td>
		</tr>
		<tr>
			<td>Peer-to-peer(P2P)</td>
			<td>direct communication between individual computers without the need of a server. it is difficult to manage. e.g. torrenting using FTP.</td>
		</tr>
		<tr>
			<td>Hybrid: </td>
			<td>combines the strengths of client-server and P2P while covering their weaknesses. e.g. skype using VoIP</td>
		</tr>
	</tbody>
</table>



## Quick Excercise: 

1. visit a website from your browser, then highlight the navigation bar(Ctrl+L). the website will either be prefixed with http or https which stands for hypertext transfer protocol, the s in the latter stands for secure.
1. to see which applications are accessing the internet. type the following in the command line terminal:
netstat
1. resource monitor
1. DNS using nslookup. copy the address and paste it into the navbar
1. can you think of some other network applications? <span style="display:none">[will be hidden until clicked]</span>
- email
- web browsers [most common]
- web servers
- instant messaging
- remte login
- p2p file sharing
- multi-user network games
- strewaming stored video clips
- social networks
- voice over IP
- real-time video conferencing
- grid computing


<a href="">prev</a> <a href="">next</a>

---
