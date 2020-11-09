<script src="formatter.js"></script>
<link rel="stylesheet" type="text/css" href="style.css">

# 4 Transport layer

<div id="TOC">
TABLE OF CONTENT:
</div>

## KEY TERMS

- segment: the PDU of the transport layer
- checksum
- transmission
- windowing
- socket : interface for Transport layer protocols
- PKI
- Port number

---

<span style="display:none">
	This layer is separated by two protocols like Transport Control Protocol and User Datagram Protocol. TCP is following connection-oriented transmission. It's slower but provides feedback (HTTP, FTP, etc). UDP is following connectionless transmission. It's faster but doesn't provide feedback and used when we don't care about the fullness of data (video games, music, movies, etc.).
	Layer 4 is responsible for end-to-end communication between the two devices. This includes taking data from the session layer and breaking it up into chunks called segments (or datagrams in case of UDP) before sending it to layer 3. The transport layer on the receiving device is responsible for reassembling the segments into data the session layer can consume.
	The transport layer is also responsible for flow control and error control,. Flow control determines an optimal speed of transmission to ensure that a sender with a fast connection doesn’t overwhelm a receiver with a slow connection. The transport layer performs error control on the receiving end by ensuring that the data received is complete , and checks checksums of data units and make use of automatic repeat request if it isn’t.
</span>

## Introduction to L4 Transport layer

The transport layer is at the center of the OSI model as it lies between the upper layers (L7-L5) and the lower  layers (L3-L1). As the name suggests, it is responsible for transporting  data over a network by dividing  data received from the upper layers into managable segments, before passing them on to lower layers for further processing. The most common protocols in this layer are TCP and UDP. Other protocols may provide additional capabilities for error recovery, data flow, retransmission and encryption.

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
	<td>Segmentation</td>
	<td>taking data from the session layer and breaking it up into chunks called segments (or datagrams in case of UDP) before sending it to layer 3. The transport layer on the receiving device is responsible for reassembling the segments into data the session layer can consume.segmentation has a sequence number, port number. the port number helps to direct each segment to the correct application. and the sequence number helps to order the data in the correct sequence.
</td> 
</tr>
<tr>
	<td>flow control</td>
	<td> Flow control determines an optimal speed of transmission to ensure that a sender with a fast connection doesn’t overwhelm a receiver with a slow connection.  controls the amount of data being sent. e.g. if a mobile only processes 10mbs, it will tell the server to slow down so that data isnt lost. </td>
</tr>
<tr>
	<td>Error control</td>
	<td> The transport layer performs error control on the receiving end by ensuring that the data received is complete , and checks checksums of data units and make use of automatic repeat request if it isn’t.Automatic Repeat Request (ARR) to retransmit the data if some data doesnt arrive, the checksum used to check the integrity of the data. </td>
</tr>
<tr>
	<td>Connection and connectionless data transfer.</td>
	<td>This layer is separated by two protocols like Transport Control Protocol and User Datagram Protocol. TCP is following connection-oriented transmission. It's slower but provides feedback (HTTP, FTP, etc). UDP is following connectionless transmission. It's faster but doesn't provide feedback and used when we don't care about the fullness of data (video games, music, movies, etc.).</td> 	
</tr>
<tr>
	<td>Encryption</td>
	<td>The transport layer has its own encryption protocol called TLS which provides end-to-end encryption. Meaning encryption is handled by the end devices as opposed to intermediary devices such as routers and switches.TLS is often used by L7 application layer protocols such as HTTPS and FTPS. </td>
</tr>
</tbody>
</table>

functions

- decides if data transmission should be parallel or single path.
- multiplexing, splitting on data.
- provides additional quality of service
- receives data from session layer and splits it into small units called segments and passes it onto the network layer.
- converting message to smaller units
- responsible for end-to-end deliver of complete message
- the heart of the osi Model.

Services provided by Transport layer

connection oriented services - establishing, maintaining connection for data transfer and terminating. (3 phases)
connetionless service: one phase= data transfer, fast

it is operated by the OS. 

the transport session and application and presentation layer is operated on by the operating system.


---



## TYPES OF CONNECTION (TCP vs UDP)

(requires intro!!!)

<embed src="https://www.youtube.com/embed/fNyd6Vo8Dps">

[requires diagram]
SYN
ACK + SYN
ACK



See the table below for a detailed comparison between TCP and UDP

<table>
	<thead> 
		<tr>
		<th></th>
		<th><a href="https://www.youtube.com/watch?v=DsQcX-7n6fY">TCP</a></th>
		<th>UDP</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Connection type</td>
			<td>connection-oriented requiring SYN and ACK handshaking and is thus more reliable</td>
			<td>Connectionless as it doesnt require handshaking making it less reliable</td>
		</tr>
		<tr>
			<td>Retransmission and windowing</td>
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
			<td>It's faster but doesn't provide feedback and used when we don't care about the fullness of data (video games, music, movies, etc.).it doesnt require handshaking so has less overhead making it fast and is good for transmission of large files such as video and audio.
		</td>
		</tr>
		<tr>
			<td>Main Application</td>
			<td>Connecting to Web pages, sending emails</td>
			<td>Transmission of video and audio.
		</td>
		</tr>
	</tbody>
</table>

---

## Ports

<embed src="https://www.youtube.com/embed/RDotMcs0Erg"></embed>


---

## SSL/TLS
SSL and TLS SSL and TLS are both cryptographic protocols that provide authentication and data encryption between servers, machines and applications operating over a network (e.g. a client connecting to a web server).
SSL is the predecessor to TLS
TLS was introduced in 1999 as a new version of SSL and was based on SSL 3.0:
Both SSL 2.0 and 3.0 have been deprecated by the IETF (in 2011 and 2015, respectively). Over the years vulnerabilities have been and continue to be discovered in the deprecated SSL protocols (e.g. POODLE, DROWN).
It’s worth noting here that SSL and TLS simply refer to the handshake that takes place between a client and a server. The handshake doesn’t actually do any encryption itself, it just agrees on a shared secret and type of encryption that is going to be used.
TLS consists of two parts: The TLS handshake layer manages which cipher (the type of encryption algorithm) will be used, the authentication (using a certificate specific to your domain name and organization), and the key exchange (based on the public-private key pair from the certificate). The handshake process is performed only once to establish a secure network connection for both parties. The TLS record layer gets data from the user applications, encrypts it, fragments it to an appropriate size (as determined by the cipher), and sends it to the network transport layer. TLS establishes an encrypted, bidirectional network tunnel for arbitrary data to travel between two hosts. TLS is most often used in conjunction with other Internet protocols such as HTTPS, SSH, FTPS, and secure email.
SSL is a general method for protecting data transported over a network, whereas SSH is a network application for logging in and sharing data with a remote computer.

---

## Excercise:

to see the type of protocols established on your computer while connected to the internet type netstat on the command line.

can you identify what uses udp vs TCP?

email: TCP
streaming: UDP
	

resmon Network>Listening ports