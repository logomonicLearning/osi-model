<meta name="layer" content="7">
<script src="formatter_old.js"></script>
<link rel="stylesheet" type="text/css" href="style.css">

# Application Layer (Layer 7)

<!-- <div id="TOC">
<h3 style="font-weight:bold;">TABLE OF CONTENT :</h3>
</div> -->

---

## MAIN TERMS

- <b>Port number</b>:port is a way to uniquely identify a process on a system.
- <b>Application software</b>: (app) is a program or group of programs designed for end users.
- <b>Application-entities</b>: protocols used by an application

---
## introduction to application layer


The application layer is the closest layer of the OSI model to the end user. It does not refer to the actual applications software, but rather the protocols needed for network applications such as chrome, skype and outlook to communicate over a network. The most important distinction in the application layer is the distinction between the application-entity and the application. For example, an online banking system may have two application-entities: one using HTTPS to communicate with its users, and one for a remote database protocol to record transactions. Neither of these protocols have anything to do with calculating your bank balance. That logic is in the application itself.

Every application is given a random <em>port number</em> by L4 transport layer to identify the source application in order for data to reach it's intended application. The destination device on the other hand is identified by well known known port numbers reserved for specific protocol such as port 443 for https and port 23 for ftp. Port numbers will be discussed in more detail in the tansport layer.

<img src="../images/netstat.png">


<!-- <embed src="https://www.youtube.com/embed/Ni6K99-SXdw"></embed> -->
<embed src="https://www.youtube.com/embed/-wzL3jcky-g">


<table>
    <caption><b>Application Layer protocol Defines:</b></caption>
	<th>Purpose</th>
	<th>Description</th>
	<tr>
		<td>Message Type</td>
		<td> e.g. whether the message a request or a response.
		</td>
	</tr>
	<tr>
		<td>Message Syntax</td>
		<td> what are the fields the subcomponents delinneate</td>
	</tr>
	<tr>
		<td>Message Semantics</td>
		<td>the meaning of the information of the structure(semantics) e.g. image, text or audio</td>
	</tr>
	<tr>
		<td>Message Rules</td>
		<td> the rules associated with sending messages. i.e. When and how to respond</td>
	</tr>
</table>


---

## PROTOCOLS

The type of network architecture used ( client-server or peer-to-peer) determines what type of protocol can be used. Network architecture will be discussed in more detail in the physical layer. See the table below for some common protocols and their purpose:

<div id="l7-protocols" class="interactive-protocols flex flex--column"></div>


<table style="display:none">
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
			<td>It governs the rules for transferring Hypertext (web pages written in HTML) over a computer network. The S in HTTPS stands for Secure and uses L4 transport layer's SSL/TLS to encrypt data before it is sent. The protocol is therefore also referred to as HTTP over SSL/TLS.</td>
			<td>Web browser</td>
		</tr>
		<tr>
			<td>FTP/S</td>
			<td>21/23</td>
			<td>File Transfer Protocol Secure</td>
			<td> A standard network protocol used for the transfer of files between a client and server on a network. FTP is built on a client-server model architecture using separate control and data connections between the client and the server.[1] FTP users may authenticate themselves with a clear-text sign-in protocol, normally in the form of a user name and password, but can connect anonymously if the server is configured to allow it. FTP is often encrypted with SSL/TLS to protect the user name and password (FTPS) or replaced with SSH File Transfer Protocol (SFTP).</td>
			<td>Bit torrent</td>
		</tr>
		<tr>
			<td>SMTP</td>
			<td>25</td>
			<td>Simple Mail Transfer Protocol</td>
			<td>The Simple Mail Transfer Protocol (SMTP) is a communication protocol for electronic mail transmission. Mail servers and other message transfer agents use SMTP to send and receive mail messages.</td>
			<td>Outlook</td>
		</tr>
		<tr>
			<td>POP3</td>
			<td>110</td>
			<td>Post Office Protocol</td>
			<td>Used by e-mail clients to retrieve e-mail from a mail server. The Post Office Protocol provides access via an Internet Protocol (IP) network for a user client application to a mailbox (maildrop) maintained on a mail server. The protocol supports download and delete operations for messages. POP3 clients connect, retrieve all messages, store them on the client computer, and finally delete them from the server</td>
			<td>Outlook</td>
		</tr>
		<tr>
			<td>DNS</td>
			<td>53</td>
			<td>Domain Name Server</td>
			<td>The Domain Name Server (DNS) is a hierarchical and decentralized naming system for computers, services, or other resources connected to the Internet or a private network. It associates various information with domain names assigned to each of the participating entities. Its main responsibility is to translate more readily memorized domain names to the numerical IP addresses needed for locating and identifying computer services and devices with the underlying network protocols much like a phone book which resolves names to their phone numbers. e.g. google.com = 172.217.169.46 . Without DNS, one would have to enter ip addresses manually. DNS provides a worldwide, distributed directory service and has been an essential component of the functionality of the Internet since 1985. </td>
			<td>Browser</td>
		</tr>
		<tr>
			<td>DHCP</td>
			<td>67/68</td>
			<td>Dynamic Host Configuration Protocol</td>
			<td>A DHCP server enables computers to request IP addresses and networking parameters automatically from the Internet service provider (ISP), and dynamically assigns  IP address' and other network configuration parameters to each device on the network, so they can communicate with other IP networks. This reduces the need for a network administrator or a user to manually assign IP addresses to all network devices.</td>
			<td>Router</td>
		</tr>
		<tr>
			<td>VoIP</td>
			<td>Varies</td>
			<td>Voice over Internet Protocol</td>
			<td>Used to make calls over the internet</td>
			<td>Skype</td>
		</tr>
		
	</tbody>
</table>


---



## Quick Exercise: 

1. Visit a website from your browser, then highlight the navigation bar(Ctrl+L). The website will either be prefixed with http or https which stands for hypertext transfer protocol, the s in the latter stands for secure.
1. Open the command line in administrator mode and, Type "netstat -bon" to see which applications are accessing the internet and their associated port. You'll notice that the source (local address) numbers is random while the destination (foreign address) will use common port numbers such as 443 (https).
1. Open Resource monitor to view network traffic.
1. You can use DNS from the command line with nslookup key word. e.g. "nslookup google.com". You can access the website if you paste the IP address into the navbar of your browser.
1. can you think of some other network applications? <span style="display:none">[will be hidden until clicked]
- email
- web browsers [most common]
- web servers
- instant messaging
- remote login
- p2p file sharing
- multi-user network games
- streaming stored video clips
- social networks
- voice over IP
- real-time video conferencing
- grid computing
</span>



<div class="nav nav__bottom">
	<button id="btn__prev"><a href="">prev</a></button> 
	<button id="btn__next"><a href="apps\mcq\index.html">next</a></button>
	<!-- <button id="btn__next">next</button> -->
</div>

---
