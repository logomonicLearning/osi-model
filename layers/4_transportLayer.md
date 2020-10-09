## 4 Transport layer
[tcp](https://www.youtube.com/watch?v=DsQcX-7n6fY)
the transport layer is at the center of the protocols between the upper layers and thelower layers. responsible for transmission of data on a network. the most common being TCP and UDP.  other protocols may provide additional capabilities. error recovery, data flow and retransmission.


- Segmentation
- flow control: controls the amount of data being sent. e.g. if a mobile only processes 10mbs, it will tell the server to slow down so that data isnt lost.
- Error control: Automatic Repeat Request (ARR) to retransmit the data if some data doesnt arrive, the checksum used to check the integrity of the data. 
- connection and connectionless data transfer.


segmentation has a sequence number, port number. the port number helps to direct each segment to the correct application. and the sequence number helps to order the data in the correct sequence.

data is sent as Segments to the lower layers

TCP is a connected oriented protocol which is done is done in three way hanshaking and is reliable.

[requires diagram]
SYN
ACK + SYN
ACK

UDP
connectionless protocol

has less overhead, and is good for speed such as video and audio connection. it is unreliable

<table>
	<thead> 
		<tr>
		<th>TCP</th>
		<th>UDP</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Reliable</td>
			<td>Unreliable</td>
		</tr>
		<tr>
			<td>connection-oriented</td>
			<td>Connectionless</td>
		</tr>
		<tr>
			<td>Segment retransmission and control through windowing</td>
			<td>No windowing or retransmission</td>
		</tr>
		<tr>
			<td>Segment sequencing</td>
			<td>No sequencing</td>
		</tr>
		<tr>
			<td>Acknowledg segments</td>
			<td>No acknowledgement</td>
		</tr>
	</tbody>
</table>

Excercise:

to see the type of protocols established on your computer while connected to the internet type netstat on the command line.

can you identify what uses udp vs TCP?

email: TCP
streaming: UDP
	

resmon Network>Listening ports