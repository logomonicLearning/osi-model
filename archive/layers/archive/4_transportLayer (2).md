<script src="formatter_old.js"></script>
<link rel="stylesheet" type="text/css" href="style.css">
<style type="text/css">
   
    #cipher-suite-table .xl96{
        width:100px;
        color:green;
    }
    
    #cipher-suite-table li{
        list-style:none;
    }
    


	#tcp-header td{
		text-align:center;
		font-size:0.8rem;
	}
    b,td,li{
        text-transform:capitalize;
    }
    .markdown-body table.xl96{
        span:23%;
    }

    /*cipher suite table*/
    .grid{
      display:grid;
      
      /* grid-column-gap:2px; */
    }
    .table{
      width:inherit;
      /* height:200px; */
      grid-template-rows:50px auto auto;
      
      
    }
    .table__row{
      width:inherit;
      height:auto;
      grid-template-columns:100px 1fr 1fr 1fr 1fr;
      /* border:1px dashed blue; */
    }

    .table__item{
      border:1px solid black;
      height:auto;
      display:flex;
      flex-direction:column;
    }

    .table__row:nth-child(1), .table__row:nth-child(3){
      text-align:center
    }

    .table__row:nth-child(1) .table__item{

      /*   display:flex;
      align-items:center;
      justify-content:center;
       */
    }
    .table__lable{
        display:flex;
      align-items:center;
      justify-content:center;

    }

</style>
# 4 Transport layer

## KEY TERMS

- <b>segment</b>: The PDU of the transport layer. TCP and UDP have different header structures.
- <b>checksum</b>: A small-sized datum derived from a block of  data for the purpose of detecting errors that may have been introduced during its transmission or storage. They are created by hash algorithms such as SHA1 takes an input and produces a string (a sequence of numbers and letters) of a fixed length. to verify data integrity but are not relied upon to verify data authenticity.
- <b>socket</b> : The triad of <b>transport protocol</b> (TCP/UDP), <b>IP address</b>, and <b>port number</b> that serves as an endpoint for sending and receiving data across a network. The structure and properties of a socket are defined by an application programming interface (API) for the networking architecture. Sockets are created only during the lifetime of a process of an application running in the node.
- <b>PKI</b>: A public key infrastructure (PKI) is a set of roles, policies, hardware, software and procedures needed to create, manage, distribute, use, store and revoke digital certificates and manage public-key encryption. The purpose of a PKI is to facilitate the secure electronic transfer of information for a range of network activities such as e-commerce, internet banking and confidential email.
- <b>Port</b>: it is a logical construct that identifies a specific process or a type of network service. In a client-server architecthre, the client is given an ephemeral port number which lasts as long as the connection to the server. The server on the other hand uses a well known port based on the protocol in use e.g. port 80 for http. 
- <b>3 way handshake</b>: is the method used by TCP set up a TCP/IP connection over a network. it involves three stages (SYN,SYN-ACK,ACK). see Types of connections for more information.
- <b>cipher suite</b>: a set of algorithms that help secure a network connection that uses Transport Layer Security (TLS). cipher suites usually contains a selection of the following algorithms:
    - <b>key exchange algorithm</b>
    - <b>bulk encryption algorithm</b>
    - <b>hashing algorithm</b>
    - <b>message authentication code (MAC) algorithm</b>

---
<span style="display:none">
[checksum]() A checksum is a sequence of numbers and letters used to check data for errors. If you know the checksum of an original file, you can use a checksum utility to confirm your copy is identical. To produce a checksum, you run a program that puts that file through an algorithm. Typical algorithms used for this include MD5, SHA-1, SHA-256, and SHA-512. The algorithm uses a cryptographic hash function that takes an input and produces a string (a sequence of numbers and letters) of a fixed length. The input file can be a small 1 MB file or a massive 4 GB file, but either way, you’ll end up with a checksum of the same length. Checksums may also be called “hashes.” [socket]() A socket is the triad of <b>transport protocol</b> (TCP/UDP), <b>IP address</b>, and <b>port number</b> that serves as an endpoint for sending and receiving data across a network. The structure and properties of a socket are defined by an application programming interface (API) for the networking architecture. Sockets are created only during the lifetime of a process of an application running in the node. [PKI]() A public key infrastructure (PKI) is a set of roles, policies, hardware, software and procedures needed to create, manage, distribute, use, store and revoke digital certificates and manage public-key encryption. The purpose of a PKI is to facilitate the secure electronic transfer of information for a range of network activities such as e-commerce, internet banking and confidential email. It is required for activities where simple passwords are an inadequate authentication method and more rigorous proof is required to confirm the identity of the parties involved in the communication and to validate the information being transferred. [port]()
a port is a communication endpoint. At the software level, within an operating system, a port is a logical construct that identifies a specific process or a type of network service. A port is identified for each transport protocol and address combination by a 16-bit unsigned number, known as the port number. The most common transport protocols that use port numbers are the <b>Transmission Control Protocol (TCP)</b> and the <b>User Datagram Protocol (UDP)</b>.
</span>
<!-- --- -->

<span style="display:none">
	This layer is separated by two protocols like Transport Control Protocol and User Datagram Protocol. TCP is following connection-oriented transmission. It's slower but provides feedback (HTTP, FTP, etc). UDP is following connectionless transmission. It's faster but doesn't provide feedback and used when we don't care about the fullness of data (video games, music, movies, etc.).
	Layer 4 is responsible for end-to-end communication between the two devices. This includes taking data from the session layer and breaking it up into chunks called segments (or datagrams in case of UDP) before sending it to layer 3. The transport layer on the receiving device is responsible for reassembling the segments into data the session layer can consume.
	The transport layer is also responsible for flow control and error control,. Flow control determines an optimal speed of transmission to ensure that a sender with a fast connection doesn’t overwhelm a receiver with a slow connection. The transport layer performs error control on the receiving end by ensuring that the data received is complete , and checks checksums of data units and make use of automatic repeat request if it isn’t.
</span>

## Introduction to L4 Transport layer

The L4 transport layer is at the center of the OSI model, lying between L7-L5 upper layers and L3-L1 lower  layers. As the name suggests, it is responsible for delivering data between two hosts on a network. It first divides data received from the upper layers into manageable sizes called segments and  adds header information before passing it on to lower layers for further processing. The most common protocols in this layer are <b>Transmission Control Protocol (TCP)</b> for reliable data transmission, and <b>User Datagram Protocol (UDP)</b> for fast but Unreliable data transmission. Other protocols may provide additional capabilities for error recovery, data flow, retransmission and encryption. This chapter will be primarily focus on TCP & UDP and TLS.

<embed src="https://www.youtube.com/embed/DsQcX-7n6fY"></embed>


See the table below for a list of its main functions:

<table>
<thead>
	<tr>
		<th>Purpose</th>
		<th>Description</th>
	</tr>
</thead>
<tbody>
<tr>
	<td><b>Segmentation & reassembly</b></td>
	<td>Takes data from the session layer and breaks it up into manageable chunks called segments (or datagrams in case of UDP). Segments can take different paths from source to destination. The transport layer on the receiving device reassembles the segments in the right order using the sequence number (TCP). The port number directs each segment to the associated application. </td>
</tr>
<tr>
	<td><b>flow control - windowing</b></td>
	<td> Flow control is a mechanism to determine the optimal speed for data transmission between two devices. It ensures that the sender doesn't overwhelm the receiving device with data that it cant handle due to hardware constraints. Windowing is a process to negotiate how much data a sender and receiver can process prior to  transmission. e.g. if a mobile only processes 10mbs, it will tell the server to slow down so to prevent data loss.- provides additional quality of service (QOS)</td>
</tr>
<tr>
	<td><b>Error control</b></td>
	<td>It uses the <a href="https://www.youtube.com/watch?v=ppU41c15Xho">checksum</a> to inspect the data's integrity. If the receiving device identifies any missing segments, it will make an automatic repeat request (ARR) to the sender to retransmit the missing data. </td>
</tr>
<tr>
	<td><b>Connection and connectionless data transfer</b></td>
	<td>There are essentially 2 types of connections. connection oriented using Transport Control Protocol (TCP) and connectionless oriented with User Datagram Protocol(UDP). TCP is much slower but provides feedback to the server if data is incomplete or corrupt and so is more reliable which is good for transfering files (FTP/S) web pages (HTTP/S) and email (SMTP). establishing, maintaining connection for data transfer and terminating. (3 phases). UDP on the otherhand faster but less reliable so is ideal when we completeness of data is not an issue such as streaming video games, music and movies.</td> 	
</tr>
<tr>
	<td><b>Encryption</b></td>
	<td>The transport layer has its own encryption protocol called Transport Layer Security (TLS) and Secure Socket Layer (SSL) it's predecessor. TLS  provides end-to-end encryption, meaning encryption is handled by the end devices as opposed to intermediary devices such as routers and switches. TLS is often used by L7 application layer protocols such as HTTPS and FTPS. The S suffixed at the end of these protocol stands for secure </td>
</tr>
<tr>
	<td><b>Session Multiplexinng</b></td>
	<td>This is the ability to have multiple concurrent sessions open to one or many hosts using the IP addresses and port numbers known as a socket. Hence you can have multiple applications with established connections to multiple hosts on a network.</td>
</tr>
</tbody>
</table>



<span style="display:none">
	[check+sum](https://www.youtube.com/watch?v=ppU41c15Xho): sender creates the checksum, the receiver  validates the checksum, similar to parity bit, if you have a burst error it will be detected, and if bits that change in a column will be caught. it cuts off the sum to 8 bits and sends them as the checksum, its like sending the remainder of a sum. the left most bits are chopped off and added to the checksum to retain some of the information. after this we reverse all the numbers called the 1s complement addition. if you take the whole sum and divide by 255, add the remainder. then flip it e.g. if the bits add up to 11111111 it will be flipped to 00000000 which will be the checksum. the limitations is that the order that the bits dont matter if the letters are in the wrong order it wont be detected. if data is removed or added, e.g. adding 0s were inserted, the checksum will be the same. and if the 0s are removed it wont detect it. \n\n the receiver collects all the data blocks including the checksum. and the receiver sums all the datablocks including the checksum. if the results are all 1s, it accepts, otherwise it rejects.\n\n it can detect all errors involving an odd number of bits and even number of bits. but if one or more bits of a segments are damaged and the corresponding bit or bits of opposite value in a second segment are also damaged, the sum of those columns will not change and the receiver wont detect the error(s).\n\n the checksum is part of the UDP\n\n
	msg="Hello, world!"
	"Hello, world!"
	sum=msg.split("").map(el=>el.charCodeAt()).reduce((acc,curr)=>acc + curr)
	//1161
	checksum=(Math.floor(sum/255)*255) | (sum%255)
	//1021\n\n 1. break the original message into  k number of blocks with n bits in each block. e.g. break a 20 bit msg into 4 blocks (k) which will have 5 bits (n) in each block
	2. sum all the k data blocks.
	3. Add the carry to the sum if any
	4. Do 1's complement to the sum=checksum
</span>


---

## TYPES OF CONNECTION (TCP vs UDP)

There are essentially two types of connections:

- <b>TCP (Connection oriented)</b>: where the client and server esatablish a connection with a three way handshake. Ideal for reliable data transmission.
- <b>UDP (Connectionless oriented)</b>: where the client and server dont establish a connection. ideal for fast data delivery, but is unreliable.

<embed src="https://www.youtube.com/embed/fNyd6Vo8Dps">

See the table below for a detailed comparison between TCP and UDP

<table>
	<thead> 
		<tr>
		<th></th>
		<th width="40%"><a href="https://www.youtube.com/watch?v=DsQcX-7n6fY">TCP</a></th>
		<th width="40%">UDP</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Connection type</td>
			<td>connection-oriented requiring SYN and ACK handshaking and is thus more reliable</td>
			<td>Connectionless as it doesnt require handshaking making it less reliable</td>
		</tr>
		<tr>
			<td>Retransmission &amp; windowing</td>
			<td>If data transmitted as segments dont reach their final destination for whatever reason, they will be retransmitted and control through windowing</td>
			<td>No windowing or retransmission</td>
		</tr>
		<tr>
			<td>Sequencing</td>
			<td>Segments are sequenced and reassembled in the right order.</td>
			<td>Data can arrive in any order as there is no sequencing</td>
		</tr>
		<tr>
			<td>Speed</td>
			<td>Due to handshaking it has more overheads and so is slower than UDP</td>
			<td>It is fast and has less overhead making as it doesnt require handshaking or provide feedback so.
		</td>
		</tr>
		<tr>
			<td>Services</td>
			<td>Connecting to Web pages (HTTP), sending emails (SMTP) and files (FTP)</td>
			<td>Transmission of video and audio, TFTP, and network services such as DNS & DHCP.
		</td>
		</tr>
		<tr>
			<td>Diagram</td>
			<td colspan="2"><img src="../images/tcpvudp.jpeg" width="656px"></td>
		</tr>
	</tbody>
</table>

<!-- <img src="../images/EN-tcp.png" alt=""> -->


!!! make tcp header and udp header

---

## TCP HEADER

[each term explained](https://www.lifewire.com/tcp-headers-and-udp-headers-explained-817970)

<embed src="https://www.youtube.com/embed/F27PLin3TV0"></embed>

<table id="tcp-header" border="0" cellpadding="0" cellspacing="0" width="636" style="border-collapse:
 collapse;table-layout:fixed;width:477pt">
 <colgroup><col width="80" style="mso-width-source:userset;mso-width-alt:2925;width:60pt">
 <col width="76" style="mso-width-source:userset;mso-width-alt:2779;width:57pt">
 <col width="80" span="6" style="mso-width-source:userset;mso-width-alt:2925;
 width:60pt">
 </colgroup><tbody>
 <tr height="48" style="mso-height-source:userset;height:36.0pt">
  <td colspan="8" height="48" class="xl232" width="636" style="height:36.0pt;
  width:477pt">TCP Header (4 bits long)</td>
 </tr>
 <tr height="48" style="mso-height-source:userset;height:36.0pt">
  <td colspan="4" height="48" class="xl233" width="316" style="height:36.0pt;
  width:237pt">Source Port (2 bytes)</td>
  <td colspan="4" class="xl233" width="320" style="border-left:none;width:240pt">Destination
  Port (2 bytes)</td>
 </tr>
 <tr height="48" style="mso-height-source:userset;height:36.0pt">
  <td colspan="8" height="48" class="xl233" width="636" style="height:36.0pt;
  width:477pt">Sequence Num (4 bytes)</td>
 </tr>
 <tr height="48" style="mso-height-source:userset;height:36.0pt">
  <td colspan="8" height="48" class="xl233" width="636" style="height:36.0pt;
  width:477pt">Acknowledgement Num (4 bytes)</td>
 </tr>
 <tr height="48" style="mso-height-source:userset;height:36.0pt">
  <td height="48" class="xl233" width="80" style="height:36.0pt;border-top:none;
  width:60pt">Data offset (1 byte)</td>
  <td class="xl233" width="76" style="border-top:none;border-left:none;width:57pt">reserved
  <br>
    (3 bits)</td>
  <td colspan="2" class="xl233" width="160" style="border-left:none;width:120pt">Control
  Flags<br>
    (9 bits)</td>
  <td colspan="4" class="xl233" width="320" style="border-left:none;width:240pt">Window
  Size (2 bytes)</td>
 </tr>
 <tr height="48" style="mso-height-source:userset;height:36.0pt">
  <td colspan="4" height="48" class="xl233" width="316" style="height:36.0pt;
  width:237pt">Checksum (2 bytes)</td>
  <td colspan="4" class="xl233" width="320" style="border-left:none;width:240pt">Urgent
  Pointer (2 bytes)</td>
 </tr>
 <tr height="48" style="mso-height-source:userset;height:36.0pt">
  <td colspan="8" height="48" class="xl234" width="636" style="height:36.0pt;
  width:477pt">Optional Data (0-40 bytes)</td>
 </tr>
 
</tbody></table>


<!-- <img src="../images/tcp-headers-f2c0881ea4c94e919794b7c0677ab90a.webp"> -->

//the below descriptions will be embedded in the diagram
Source TCP port number (2 bytes or 16 bits): The source TCP port number represents the sending device.
Destination TCP port number (2 bytes or 16 bits): The destination TCP port number is the communication endpoint for the receiving device.
Sequence number (4 bytes or 32 bits): Message senders use sequence numbers to mark the ordering of a group of messages.
Acknowledgment number (4 bytes or 32 bits): Both senders and receivers use the acknowledgment numbers field to communicate the sequence numbers of messages that are either recently received or expected to be sent.
TCP data offset (4 bits): The data offset field stores the total size of a TCP header in multiples of four bytes. A header not using the optional TCP field has a data offset of 5 (representing 20 bytes), while a header using the maximum-sized optional field has a data offset of 15 (representing 60 bytes).
Reserved data (3 bits): Reserved data in TCP headers always has a value of zero. This field aligns the total header size as a multiple of four bytes, which is important for the efficiency of computer data processing.
Control flags (up to 9 bits): TCP uses a set of six standard and three extended control flags—each an individual bit representing On or Off—to manage data flow in specific situations.
Window size (2 bytes or 16 bits): TCP senders use a number, called window size, to regulate how much data they send to a receiver before requiring an acknowledgment in return. If the window size is too small, network data transfer is unnecessarily slow. If the window size is too large, the network link may become saturated, or the receiver may not be able to process incoming data quickly enough, resulting in slow performance. Windowing algorithms built into the protocol dynamically calculate size values and use this field of TCP headers to coordinate changes between senders and receivers.
TCP checksum (2 bytes or 16 bits): The checksum value inside a TCP header is generated by the protocol sender as a mathematical technique to help the receiver detect messages that are corrupted or tampered with.
Urgent pointer (2 bytes or 16 bits): The urgent pointer field is often set to zero and ignored, but in conjunction with one of the control flags, it can be used as a data offset to mark a subset of a message as requiring priority processing.
TCP optional data (0 to 40 bytes): Usages of optional TCP data include support for special acknowledgment and window scaling algorithms.


---

## Port Numbers

A port number is simply a number assigned to an application by the transport layer which allows data to reach its intended application. If you think of the IP address is the road, then the port number would be the house number.

<embed src="https://www.youtube.com/embed/RDotMcs0Erg"></embed>


---

## SSL/TLS

Transport Layer Security (TLS), and Secure Sockets Layer (SSL) are cryptographic protocols designed to provide authentication, data encryption communications and security between servers, machines and applications operating over a network. TLS was introduced in 1999 due to vulnerabilities discovered in SSL protocols (e.g. POODLE, DROWN) which is now-deprecated. TLS is most often used in conjunction with other Internet protocols such as HTTPS, SSH, FTPS, and secure email. 

<b>TLS LAYERS:</b>

1. The TLS handshake layer:
	-  manages which cipher (the type of encryption algorithm) will be used, agree on cryptographic protocols (Cipher suite)
	-  authenticate server to client using the digital certificate(public key, issuing entity, the entity issued, a serial number, dates, and a digital fingerprint), using a certificate specific to the domain name and organization.
	-   The key exchange (based on the public-private key pair from the certificate). establish shared session key
2. The TLS record layer:
	- gets data from the user applications, encrypts it, 
	- fragments it to an appropriate size (as determined by the cipher), and sends it to the network transport layer.
	- secure communication using session key

TLS doesnt actually do any encryption itself, it simply refer to the handshake that takes place between a client and a server which agrees on a shared secret and type of encryption that is going to be used. The handshake process is performed only once to establish a secure network connection for both parties. 

<embed src="https://www.youtube.com/embed/cuR05y_2Gxc"></embed>
[TLS sub layers](https://www.youtube.com/watch?v=9-yonkeiq5A)


Different parts of the cipher suite handle are used at different stages of the handshake. e.g. Key exchange may use RSA while bulk data encryption may use AES.
<img src="../images/tls.svg" />

---


You may recall that the L5 session layer also has its own encryption protocol called Secure Shell. The main difference between SSH and SSL/TLS is that SSL is a general method for protecting data transported over a network, whereas SSH is used for logging in and sharing data with a remote computer usually through a terminal.


<span style="display:none">
	TLS consists of two parts: The TLS handshake layer manages which cipher (the type of encryption algorithm) will be used, the authentication (using a certificate specific to your domain name and organization), and the key exchange (based on the public-private key pair from the certificate). The handshake process is performed only once to establish a secure network connection for both parties. The TLS record layer gets data from the user applications, encrypts it, fragments it to an appropriate size (as determined by the cipher), and sends it to the network transport layer. TLS establishes an encrypted, bidirectional network tunnel for arbitrary data to travel between two hosts. TLS is most often used in conjunction with other Internet protocols such as HTTPS, SSH, FTPS, and secure email.
	SSL is a general method for protecting data transported over a network, whereas SSH is a network application for logging in and sharing data with a remote computer.
</span>

---

## Data link Protocols

<div id="l4-protocols" class="interactive-protocols flex flex--column"></div>

## cipher SUITE

The cipher suite is the list of supported encryption and hashing algorithms that a client machine can support. This is sent to the server with the initial hello message, and the server chooses the algorithms that will be used based on this list. 

<div class="table grid">
    <div class="table__row grid center">
      <div class="table__item"></div>
      <div class="table__item table__lable">Key Exchange</div>
      <div class="table__item table__lable">Authentication</div>
      <div class="table__item table__lable">Cipher</div>
      <div class="table__item table__lable">MAC</div>
    </div>
    <div class="table__row grid">
      <div class="table__item table__lable">Description</div>
      <div class="table__item">Enables The Exchange Of The Symetric Key Using PKI</div>
      <div class="table__item">After The Key Exchange, You Want To Authenticate That The Site You're Visiting Is Authentic Using A Certificate Which Has A Pub
        c Key</div>
      <div class="table__item">Used For Bulk Encryption After The Symetric Key Has Been Sent.</div>
      <div class="table__item">Hash Algorithms Which Takes The Content Of The Certificate And Performs A Hash Function Used For Digital Certificate</div>
    </div>
    <div class="table__row grid">
      <div class="table__item table__lable">Suites</div>
      <div class="table__item">
    <div>RSA: being phased out</div>
    <div>DH:forward secret ciphers</div>
    <div>DHE:ephemeral (short lived</div>
    <div>ECDHE:Elyptic curve perfect forward secret</div>
</div>
<div class="table__item">
  <div>RSA </div>
  <div>ECDSA</div>
</div>
<div class="table__item">
    <div>AES: Advanced encryption standard</div>
<div>GCM:mode of AES</div>
<div>CBC: mode of AES</div>
    <div>Camellia: not used much</div>
      </div>
      <div class="table__item">
        <div>SHA1</div>
        <div>SHA128</div>
        <div>SHA256</div>
        <div>SHA384</div>
        <div>MD5</div>
    </div>
</div>
</div>

<div style="display:none" id="cipher-suite-table">
<div class="thead row">
   <div class="xl120"></div>
   <div class="xl96" >Key Exchange</div>
   <div class="xl96">Audiventication</div>
   <div class="xl96">Cipher</div>
   <div class="xl96">MAC</div>
 </div> 
 <!-- row1 end -->
 <div class="table__row" >
  <td class="xl96"><b>Description</b></td>
  <td class="xl120" >enables the exchange of the
  symetric key using PKI</td>
  <td class="xl120"  >after the key exchange, you
  want to authenticate that the site you're visiting is authentic using a
  certificate which has a public key</td>
  <td class="xl120" >used for bulk encryption after
  the symetric key has been sent.</td>
  <td class="xl120">Hash algorithms which takes the
  content of the certificate and performs a hash function used for digital
  certificate</td>
 </div>
 <!-- row2 -->
 
 <div class="table__row" >
  <td class="xl96"  ><b>Suites</b></td>
  <td class="xl120" >
<ul>
    <li>RSA: being phased out</li>
    <li>DH:forward secret ciphers</li>
    <li>DHE:ephemeral(short lived)</li>
    <li>ECDHE:Elyptic curve perfect forward secret</li>
</ul>
</td>
  <td class="xl120" >
<ul>
<li>RSA </li>
<li>ECDSA</li>
</ul>
</td>
  <td class="xl120" >
    <ul>
        <li>AES: Advanced encryption standard</li>
        <li>GCM:mode of AES</li>
        <li>CBC: mode of AES</li>
        <li>Camellia: not used much</li>
        </ul>
</td>
  <td class="xl120" >
    <ul>
        <li>SHA1</li>
        <li>SHA128</li>
        <li>SHA256</li>
        <li>SHA384</li>
        <li>MD5</li>
    </ul>
</td>
 </div>
</tbody>
</div>

The following is an example of a typical cipher suite

<pre><span title='key exchange'>ECDHE</span>-<span title='authentication'>RSA</span>-<span title='encryption'>AES128</span>-<span title='an optional AES mode'>GCM</span>-<span title='hashing algorithm'>SHA256</span></pre>



<span style="display:none"> v1 f65c942fd1773022145418083094568ee34d131933bfdf0c2f200bcc4ef164e3 ‎05 ‎August ‎2020 07:56:39 SHA256 ECDSA 304402201751da5a863ed99c4ed391b0f1e3cb3c1edbb59ddb59d9b6712f10abd97df37b022039a4d96665aa9ec1928038c3e807e5fb2d2fc52311510a27ceb60290a9f4b3ec Key exchange Diffe Helman DH, Diffe Helman Ephemeral (DHE), Elyptical Curve Diffe Helman Ephemeral(ECDHE) : becoming the primary key exchange protocol, allows smaller sizes to get the same security RSA: Authentication: RSA ECDSA: elyptical curve Digital signature algorithm Cipher (Bulk encryption): AES: advanced Encryption Standard AES can stand on its own but may often use GCM & CBC Camelia: not used that much introduced by in 2000, was used by firefox. DES: old RC4: old GCM:Gawork Counter Mode CBC:, cipherblock chaining. Message Authentication Code MAC hash algorithm hash the digital certificate. SHA(1,128,256,384): secure hash Algorithm MD5; not secure ECDHE-RSA-AES128-GCM-SHA256 </span>

---

## Excercise:
- Do the following to see the certificate and cypher suite used by a website:
    - visit a website, click on the padlock in the navbar and select certificate>Detail. This will allow you to view a website's certificate which includes information such as public key and the cipher suite used. 
    - Note that if the website does not have a padlock, the  the website is insecure.
- Can you identify what uses udp vs TCP?