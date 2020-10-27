<script src="formatter.js"></script>
<link rel="stylesheet" type="text/css" href="style.css">

# 4 Transport layer

<div id="TOC">
TABLE OF CONTENT:
</div>

## KEY TERMS

- segment
- checksum
- transmission
- windowing
- socket	: interface for Transport layer protocols

---

<span style="display:none">
	This layer is separated by two protocols like Transport Control Protocol and User Datagram Protocol. TCP is following connection-oriented transmission. It's slower but provides feedback (HTTP, FTP, etc). UDP is following connectionless transmission. It's faster but doesn't provide feedback and used when we don't care about the fullness of data (video games, music, movies, etc.).
	Layer 4 is responsible for end-to-end communication between the two devices. This includes taking data from the session layer and breaking it up into chunks called segments (or datagrams in case of UDP) before sending it to layer 3. The transport layer on the receiving device is responsible for reassembling the segments into data the session layer can consume.
	The transport layer is also responsible for flow control and error control,. Flow control determines an optimal speed of transmission to ensure that a sender with a fast connection doesn’t overwhelm a receiver with a slow connection. The transport layer performs error control on the receiving end by ensuring that the data received is complete , and checks checksums of data units and make use of automatic repeat request if it isn’t.
</span>

the transport layer is at the center of the protocols between the upper layers and thelower layers. As the name suggests, it is responsible for transporting  data over a network by segmenting data into managable segments. the most common being TCP and UDP.  other protocols may provide additional capabilities. error recovery, data flow and retransmission.


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
</tbody>
</table>

<embed src="https://www.youtube.com/embed/fNyd6Vo8Dps">

---

## TCP
[requires diagram]
SYN
ACK + SYN
ACK

---

## UDP


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
			<td>Purpose</td>
			<td>Connecting to Web pages, sending emails</td>
			<td>Transmission of video and audio connection.
		</td>
		</tr>
	</tbody>
</table>

---
 
## Excercise:

to see the type of protocols established on your computer while connected to the internet type netstat on the command line.

can you identify what uses udp vs TCP?

email: TCP
streaming: UDP
	

resmon Network>Listening ports