<script src="formatter.js"></script>
<link rel="stylesheet" type="text/css" href="style.css">

# Application Layer (Layer 7)

<div id="TOC">
TABLE OF CONTENT:
</div>

---

## MAIN TERMS

- Port number

---

The application layer is the closest layer of the OSI model to the end user. It does not refer to the actual applications, but rather the protocols needed for network applications such as chrome, skype and outlook to communicate over a network. 

Each application is...the <span>port number</span> provided by the transport layer helps data to reach it's intended application. port is a way to uniquely identify a process on a system. each protocol has it's own associated port number.




Application Layer protocol Defines:
<table>
	<th>Purpose</th>
	<th>Description</th>
	<tr>
		<td>Message Type</td>
		<td> e.g is the message a request or a response
		</td>
	</tr>
	<tr>
		<td>Message Syntax</td>
		<td> what are the fields the subcomponents delinneate</td>
	</tr>
	<tr>
		<td>Message Semantics</td>
		<td>the meaning of the information of the structure(semantics)</td>
	</tr>
	<tr>
		<td>Message Rules</td>
		<td> the rules associated with sending messages, when and how to respond to </td>
	</tr>
</table>

---

<!-- <embed src="https://www.youtube.com/embed/Ni6K99-SXdw"></embed> -->
<embed src="https://www.youtube.com/embed/-wzL3jcky-g">

---

## PROTOCOLS
As we discussed in layer 1, the type of network architecture used ( client-server or peer-to-peer) determines what type of protocol can be used. See the table below for some common protocols and their purpose:


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
			<td>It is like a phone book which resolves domain names to thier numerical IP addresses e.g. google.com = 172.217.169.46
			 </td>
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

<span style="display:none">
	add the type of architecture?
</span>


---



## Quick Excercise: 

1. visit a website from your browser, then highlight the navigation bar(Ctrl+L). The website will either be prefixed with http or https which stands for hypertext transfer protocol, the s in the latter stands for secure.
1. Type "netstat -ano" in the command line terminal to see which applications are accessing the internet and their associated port numbers.
1. You can also use Resource monitor to view network traffic
1. You can use DNS from the command line with nslookup key word. e.g. "nslookup google.com". then copy and paste the IP address into the navbar of your browser.
1. can you think of some other network applications? <span style="display:none">[will be hidden until clicked]
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
</span>



<a href="">prev</a> <a href="">next</a>

---
