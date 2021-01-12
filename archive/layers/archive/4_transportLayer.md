<script src="formatter.js"></script>
<link rel="stylesheet" type="text/css" href="style.css">

# 4 Transport layer


## KEY TERMS

- segment: the PDU of the transport layer
- checksum
- transmission
- windowing
- socket : interface for Transport layer protocols
- PKI
- Port number
- 3 way handshake
- hash algorithms: they are hashing functions like SHA (has been broken )

---

<span style="display:none">
	This layer is separated by two protocols like Transport Control Protocol and User Datagram Protocol. TCP is following connection-oriented transmission. It's slower but provides feedback (HTTP, FTP, etc). UDP is following connectionless transmission. It's faster but doesn't provide feedback and used when we don't care about the fullness of data (video games, music, movies, etc.).
	Layer 4 is responsible for end-to-end communication between the two devices. This includes taking data from the session layer and breaking it up into chunks called segments (or datagrams in case of UDP) before sending it to layer 3. The transport layer on the receiving device is responsible for reassembling the segments into data the session layer can consume.
	The transport layer is also responsible for flow control and error control,. Flow control determines an optimal speed of transmission to ensure that a sender with a fast connection doesn’t overwhelm a receiver with a slow connection. The transport layer performs error control on the receiving end by ensuring that the data received is complete , and checks checksums of data units and make use of automatic repeat request if it isn’t.
</span>

## Introduction to L4 Transport layer

The transport layer is at the center of the OSI model as it lies between the upper layers (L7-L5) and the lower  layers (L3-L1). As the name suggests, it is responsible for transporting  data over a network by dividing  data received from the upper layers into managable segments, before passing them on to lower layers for further processing. The most common protocols in this layer are TCP and UDP. Other protocols may provide additional capabilities for error recovery, data flow, retransmission and encryption. This chapter will be primarily discussing TCP & UDP and TLS.

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
	<td>Segmentation & reassembly</td>
	<td>taking data from the session layer and breaking it up into smaller chunks called segments (or datagrams in case of UDP). The transport layer on the receiving device is responsible for reassembling the segments in the right order using the sequence number. the port number helps to direct each segment to the correct application.
</td> 
</tr>
<tr>
	<td>flow control - windowing</td>
	<td> Flow control is a mechanism to determine the optimal speed for data transmission between two devices. It ensures that the sender doesnt send more data than the receiving device can handle using windowing,  which is when the sender and receiver negotiate how much data they can process before any transmission takes place. e.g. if a mobile only processes 10mbs, it will tell the server to slow down so that data isnt lost.</td>
</tr>
<tr>
	<td>Error control</td>
	<td>If the receiving device identifies any missing segments, it will make an automatic repeat request (ARR) to the sender to retransmit the missing data. and checks checksums of data units and  the checksum used to check the integrity of the data. 

	[check+sum](https://www.youtube.com/watch?v=ppU41c15Xho): sender creates the checksum, the receiver  validates the checksum, similar to parity bit, if you have a burst error it will be detected, and if bits that change in a column will be caught. it cuts off the sum to 8 bits and sends them as the checksum, its like sending the remainder of a sum. the left most bits are chopped off and added to the checksum to retain some of the information. after this we reverse all the numbers called the 1s complement addition. if you take the whole sum and divide by 255, add the remainder. then flip it e.g. if the bits add up to 11111111 it will be flipped to 00000000 which will be the checksum. the limitations is that the order that the bits dont matter if the letters are in the wrong order it wont be detected. if data is removed or added, e.g. adding 0s were inserted, the checksum will be the same. and if the 0s are removed it wont detect it.

	the receiver collects all the data blocks including the checksum. and the receiver sums all the datablocks including the checksum. if the results are all 1s, it accepts, otherwise it rejects.

	it can detect all errors involving an odd number of bits and even number of bits. but if one or more bits of a segments are damaged and the corresponding bit or bits of opposite value in a second segment are also damaged, the sum of those columns will not change and the receiver wont detect the error(s).

	the checksum is part of the UDP



	msg="Hello, world!"
	"Hello, world!"
	sum=msg.split("").map(el=>el.charCodeAt()).reduce((acc,curr)=>acc + curr)
	//1161
	checksum=(Math.floor(sum/255)*255) | (sum%255)
	//1021

	1. break the original message into  k number of blocks with n bits in each block. e.g. break a 20 bit msg into 4 blocks (k) which will have 5 bits (n) in each block
	2. sum all the k data blocks.
	3. Add the carry to the sum if any
	4. Do 1's complement to the sum=checksum
	</td>
</tr>
<tr>
	<td>Connection and connectionless data transfer.</td>
	<td>This layer is separated by two protocols like Transport Control Protocol and User Datagram Protocol. TCP is following connection-oriented transmission. It's slower but provides feedback (HTTP, FTP, etc). UDP is following connectionless transmission. It's faster but doesn't provide feedback and used when we don't care about the fullness of data (video games, music, movies, etc.).</td> 	
</tr>
<tr>
	<td>Encryption</td>
	<td>The transport layer has its own encryption protocol called TLS which provides end-to-end encryption. Meaning encryption is handled by the end devices as opposed to intermediary devices such as routers and switches.TLS is often used by L7 application layer protocols such as HTTPS and FTPS. </td>
</tr>
<tr>
	<td>Session Multiplexinng</td>
	<td>The ability to have multiple concurrent sessions open to one or many hosts using the IP addresses and port numbers known as a socket.</td>
</tr>
</tbody>
</table>

functions

- provides additional quality of service
- receives data from session layer and splits it into small units called segments and passes it onto the network layer.
- responsible for end-to-end deliver of complete message

Services provided by Transport layer

connection oriented services - establishing, maintaining connection for data transfer and terminating. (3 phases)

the transport session and application and presentation layer is operated on by the operating system.


---

## TYPES OF CONNECTION (TCP vs UDP)

(requires intro!!!)

<embed src="https://www.youtube.com/embed/fNyd6Vo8Dps">

[requires diagram]
SYN
ACK + SYN
ACK

TLS TRANSPORT LAYER TCP

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
			<td>No windowing or retransmission</td>TLS TRANSPORT LAYER TCP
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
			<td>Services</td>
			<td>Connecting to Web pages (HTTP), sending emails (SMTP) and files (FTP)</td>
			<td>Transmission of video and audio, TFTP, and network services such as DNS & DHCP.
		</td>
		</tr>
	</tbody>
</table>

---

## Ports

<embed src="https://www.youtube.com/embed/RDotMcs0Erg"></embed>

[Transport Layer headers](https://www.youtube.com/watch?v=F27PLin3TV0)
[each term explained](https://www.lifewire.com/tcp-headers-and-udp-headers-explained-817970)
TCP header
more complex than UDP header
source port Destination Port
Sequence Number
Acknowledgement Number
HLEN Reserved URG ACK PSH RST SYN FIN Window size
checksum urgent Pointer
Options+padding

of the source host is the server, then the port is where on that host to go.



UDP header

---

## SSL/TLS

<span style="display:none">
Transport Layer Security (TLS), and its now-deprecated predecessor, Secure Sockets Layer (SSL),[1] are cryptographic protocols designed to provide communications security over a computer network. It provides authentication and data encryption between servers, machines and applications operating over a network (e.g. a client connecting to a web server).
TLS was introduced in 1999 due to vulnerabilities have been and continue to be discovered in the deprecated SSL protocols (e.g. POODLE, DROWN).


[TLS sub layers](https://www.youtube.com/watch?v=9-yonkeiq5A)
TLS consists of two parts: 
1. The TLS handshake layer manages which cipher (the type of encryption algorithm) will be used and authentication (using a certificate specific to the domain name and organization) The key exchange (based on the public-private key pair from the certificate). 
	- authenticate server to client using the digital certificate(public key, issuing entity, the entity issued, a serial number, dates, and a digital fingerprint)
	- agree on cryptographic protocols (Cipher suite)
	- establish shared session key
2. The TLS record layer gets data from the user applications, encrypts it, fragments it to an appropriate size (as determined by the cipher), and sends it to the network transport layer.
	- secure communication using session key


It’s worth noting here that SSL and TLS simply refer to the handshake that takes place between a client and a server. The handshake doesn’t actually do any encryption itself, it just agrees on a shared secret and type of encryption that is going to be used.

The handshake process is performed only once to establish a secure network connection for both parties. The TLS record layer gets data from the user applications, encrypts it, fragments it to an appropriate size (as determined by the cipher), and sends it to the network transport layer. TLS establishes an encrypted, bidirectional network tunnel for arbitrary data to travel between two hosts. TLS is most often used in conjunction with other Internet protocols such as HTTPS, SSH, FTPS, and secure email.


[SSH vs TLS]
SSL is a general method for protecting data transported over a network, whereas SSH is a network application for logging in and sharing data with a remote computer.

SSL is a general method for protecting data transported over a network, whereas SSH is a network application for logging in and sharing data with a remote computer.



<span style="display:none">
	TLS consists of two parts: The TLS handshake layer manages which cipher (the type of encryption algorithm) will be used, the authentication (using a certificate specific to your domain name and organization), and the key exchange (based on the public-private key pair from the certificate). The handshake process is performed only once to establish a secure network connection for both parties. The TLS record layer gets data from the user applications, encrypts it, fragments it to an appropriate size (as determined by the cipher), and sends it to the network transport layer. TLS establishes an encrypted, bidirectional network tunnel for arbitrary data to travel between two hosts. TLS is most often used in conjunction with other Internet protocols such as HTTPS, SSH, FTPS, and secure email.
	SSL is a general method for protecting data transported over a network, whereas SSH is a network application for logging in and sharing data with a remote computer.
</span>



Can be implemented on top of other protocls most commonly HTTPS 

Client----1.hello, cipher, hash----> 							Server
client<------2.cipher, hash certificate (domain & public key, signed by certificate authority)-----Server
client selects a random value {0,1}n random used to generate the session key
client--- 


RSA
[SHA1]()
[hash function](https://www.youtube.com/watch?v=DMtFhACPnTY)
NSA, md5 had problems, and sha1 was made as an improvement.

sha1 hash: takes any length of string and outputs 160 bits long value, appears random, used in message authentication and digital signatures. it is sudo random. you enter some code e.g. ABC, and it converts it into a hash 

SHA1 takes a message of 512 bits block, if it is only 1 block,i t will be run once and output the hash at the end. It starts with an internal internal state, and updates it with the message using a compression function (Merkel Down guard construction) until the message has finished. then it outputs the internal state. it has an internal state of 160 bits. 



SHA1 is irreversable. it is not encryption so doesnt need to be reversed anyway. 

[hash calculator](https://www.pelock.com/products/hash-calculator)


DHECElyptic curve diffe hellman

[AES](https://www.youtube.com/watch?v=O4xNJsjtN6E)
GCM


different parts of the cypher suite handle are used at different parts of the handshake. i.e. key exchange using RSA, while other parts deal with the bulk (secure connection using AES)

[crash course](https://www.youtube.com/watch?v=jhXCTbFnK8o)
types of cyphers

Ceaser cypher part of substitution cypher, but letter frequencies are preserved which is a weakness.

permutation cypher
Enigma (substitution cypher) used 3 or more rotors which substituted letters

first software cyphers:Data encryption Standard (DES) 1977  used 56 bit binary keys. 
2001 Advanced Encryption Standard AES uses bigger keys 128, 192 and 256 bits, making brute force harder. it would 	 take trillions of years to crack a 128 bit key even using all the computers on earth.

Diffe-Helman key exchange: one way function=modular exponentiation, 
B=Base (public)
M=Modulus (public)
x=exponent (secret)
B^x % M
e.g.
3^5 %31=26

base and modulus are public

make private key with B, M and secret X

this is sent to the server, which also select a secret exponent Y and sends it to the client. the client then raises the servers key by x, and the server does the same raising the clients value by Y. they now both have the same values. which is a secret shared key. this is used as a shared key using something Like AES. They are symetric keys.

there is also asymetric 
there are 2 different keys, 1 public and the other private. knowing the public key lets you encrypt but not decrypt. 

e.g. 

you send a box and a lock to someone, they put a message in it and lock it. they send it back and only you can open it with private key

the most popular asymmetric is RSA used for online banking
---


[TLS handshake detailed](https://iponwire.com/ssl-tls-handshake-detailed-for-version-1-2/)

---


RSA

2 prime numbers p&q are multiplied wich is only known by the sender forming n 
along with another prime number k, the two form the public key (n, k). 
this is sent to the receiver who uses it to encrypt the message M with M**k %n=c. 
this is sent back and the original sender now uses e to decrypt the message. 
e is the modular multiplicative inverse of k

ek % phi n =1
phi n=(p-1)(q-1)
c**e %n=M


RSA 1000 times slower than Symetric crypto like AES. 



---

## Excercise:

to see the type of protocols established on your computer while connected to the internet type netstat on the command line.

can you identify what uses udp vs TCP?

email: TCP
streaming: UDP
	

resmon Network>Listening ports

visit a website, click on the padlock and select certificate from the drop down menu, and check the certificate signature Algorithm

PKCS #1 SHA-256 With RSA Encryption

SHA: Secure Hash Algorithm------------