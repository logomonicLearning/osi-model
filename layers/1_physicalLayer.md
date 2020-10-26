<script src="formatter.js"></script>
<link rel="stylesheet" type="text/css" href="style.css">

#  PHYSICAL LAYER (LAYER 1)

<div id="TOC">
TABLE OF CONTENT:
</div>

---

## KEY TERMS

- Port number
- Network Topology
- Netork Architecture

---

This is the physical and electrical layer of the model. It includes all the hardware and physical as well as wireless devices needed to create a network such as power plugs, connectors, recievers, transcievers. It is responsible for transmitting data between hosts on a network either through electrical impulses throught copper wires, light impulses through fiberoptic cables or radio waves for wireless transmission or mechanical. The physical layer is usually the first layer to be investigaged when troubleshooting network problems. 


This layer does not have any associated protocols, but is crucial for creating a computer network.



--- 

## types of connections

<table>
<thead>
	<tr>
		<th>Connection</th>
		<th>Type</th>
		<th></th>
	</tr>
</thead>
<tbody>
	<tr>
		<td>Ethernet(802.3)</td>
		<td>Wired</td>
		<td></td>
	</tr>
	<tr>
		<td>USB</td>
		<td>Wired</td>
		<td></td>
	</tr>
	<tr>
		<td>Digital Subscriber Line (DSL)</td>
		<td>Wired</td>
		<td></td>
	</tr><tr>
		<td>Wireless (802.11)</td>
		<td>Wireless</td>
		<td></td>
	</tr>
	<tr>
		<td>LTE</td>
		<td>Wireless</td>
		<td></td>
	</tr><tr>
		<td>Bluetooth</td>
		<td>Wireless</td>
		<td></td>
	</tr><tr>
		<td>GSM</td>
		<td>Wireless</td>
		<td></td>
	</tr>
</tbody>
</table>

---

## Components of A network

Networks consist of 
<table>
	<thead>
		<tr>
			<th>Component</th>
			<th>Description</th>
		</tr>
	</thead>
	<tbody>
	<tr><td>Network Edge</td><td> end systems (Hosts) which use either Client/server (e.g. the web) model or peer to peer model. e.g. bit torrent. </td></tr>
	<tr><td> access networks</td> <td>DSL, cable, fiberoptic, 3g etc.</td></tr>
	<tr><td>Network Core</td> <td>data is transferred through the internet by:
<ul><li>	circuit switching: dedicated circuit for every connect between the sender and reciever</li>
<li>	packet switching: all the data is split into chunks and reaches the destination at different times.</li></ul>
</td>
</tr>
</tbody>
</table>

<embed src="https://www.youtube.com/embed/Itwk3BJ4GPY"></embed>

---

## [NETWORK Topologies](https://www.youtube.com/watch?v=uSKdjjw5zow)

there are two types of topologies

physical: placement of various nodes
Logical: data flow in the network.

<embed src="https://www.youtube.com/embed/zbqrNg4C98U"></embed>

<table class="ui table celled unstackable">
	<thead>
		<tr>
			<th>Topology</th>
			<th>Description</th>
			<th>Pros</th>
			<th>Cons</th>
			<th>Example (will be a picture)</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Bus</td>
			<td>All data between nodes in the network is transmitted over this common transmission medium and is able to be received by all nodes in the network. A signal containing the address of the intended receiving machine travels from a souce machine in both direction to all machines connected to the bus until it finds the intended recipient</td>
			<td>only wire-less expensive, suited for temporary network, node failures does not affect others</td>
			<td>Not fault tolerant (No redundancy), Limited cable length, no security</td>
		</tr>
		<tr>
			<td>Ring</td>
			<td>it is a bus topology in a closed loop, Peer-to-peer LAN topology, two connections: one to each of its nearest neighbors, unidirectional, Sending and receiving data takes place with the help of a TOKEN which is passed throughout the network and whichever machine has it can send data.</td>
			<td>Better than bus topology, can cause bottleneck due to weak links, all nodes with equal access</td>
			<td>unidirectional. single point failure will affect the whole network, the higher the load the lower the performance, no security</td>
		</tr>
		<tr>
			<td>Star</td>
			<td>Every node is connected to a central node called a hub/switch, centralised management, all traffic must pass through the hub/switch which is responsible for routing data to its intended destination. two or more star topologies can be connected via a repeater</td>
			<td>easy to design and implement, centralised administration, scalable</td>
			<td>Single point of failure in the hub/switch will affect the whole network, bottlenecks due to overloaded hub/switch, increased cost due to switch/hub</td>
		</tr>
		<tr>
			<td>Mesh</td>
			<td>Each node is directly connect3ed to every other node in the network and is fault tolerant and reliable</td>
			<td>Fault tolerant, reliable</td>
			<td>Issues with broadcasting messages, expensive and impractical for large networks</td>
		</tr>
		<tr>
			<td>Hybrid</td>
			<td>Combines different topologies together</td>
			<td></td>
			<td></td>
		</tr>
	</tbody>
</table>

---

## Network architectures
Network architecture is the design of a computer network. It is a framework for the specification of a network's physical components and their functional organization and configuration, its operational principles and procedures, as well as communication protocols used.The type of protocol used by an application depends on the type of application architecture being used. 


<embed src="https://www.youtube.com/embed/-0thZyLPoBM"></embed>

See the table below for a summary of the main types of network architectures

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



---

Extra goods

Optical
Fiberoptic SONET
IRDA

it also includes the types of networks. i.e. bus mesh star, ring topographies.

bitstream

