
<!-- @import "[TOC]" {cmd="toc" depthFrom=1 depthTo=6 orderedList=false} -->
<script src="formatter.js"></script>
<link rel="stylesheet" type="text/css" href="style.css">

#  PHYSICAL LAYER (LAYER 1)

<div id="TOC">
TABLE OF CONTENT:
</div>

---

## KEY TERMS




- <em>Bit stream</em>:The DPU of the physical layer is bits transmitted as electrical impulses through a medium such as copper wire.
- Computer Network: Local Area network, Wide Area network, Personal Area Network
- Network Topology: Describe how networks are configured. Networks can be configured in various ways such as: Star; ring; bus; mesh.
- Network Architecture: Describes the relationship between hosts on a network. They can either be peer-to-peer or client-server 
- Network Access Point (NAP): a device used by a host machine to access the network
- fault tolerance: a networks capacity to remain functional as a result of faults in the network. some topologies such as mesh are more fault tolerant than others such as bus.
- links transmission capacity: the speed at which data can be transmitted over a network, usually measured in bits/second.
- Switching: Describes how network devices deliver data over a network. Circuit Switching is stable, whereas Packet Switching is more flexible


---

## Intro to L1 Physical Layer

The physical includes all the hardware and physical as well as wireless devices needed to create a network such as power plugs, connectors, receivers, transceivers. it defines how data is physically transmitted. i.e. electrical impulses through copper cables, as light through fiberoptic, or as wireless radio waves(bluetooth, GSM).
<span style="display:none"> It is responsible for transmitting data between hosts on a network either through electrical impulses through copper wires, light impulses through fiberoptic cables or radio waves for wireless transmission or mechanical. </span>The physical layer is usually the first layer to be investigated when troubleshooting network problems. This layer does not have any associated protocols, but is crucial for creating a computer network.

<embed src="https://www.youtube.com/embed/hRr20m10NLw">


<table>
	<caption><h3>Components of a Network</h3></caption>
	<thead>
		<tr>
			<th>Component</th>
			<th>Description</th>
			<th>Example</th>
		</tr>
	</thead>
	<tbody>
	<tr>
		<td>Edge</td>
		<td>a host on the network</td>
		<td>PC, Laptop, Tablet, Server</td>
	</tr>
	<tr>
		<td> Access networks</td> 
		<td>the medium through which data is transmitted </td>
		<td>such as DSL, Ethernet, fiberoptic, wireless, 5G etc.</td>
	</tr>
	<tr>
		<td>Core</td> 
		<td>Devices responsible for delivering data from from source to destination. </td>
<td>routers and switches.</td>
</tr>
</tbody>
</table>

![internet](http://niau.org/wordpress/wp-content/uploads/2010/03/6arch.jpg)

--- 

<ul>
	<li><em>circuit switching</em>: dedicated circuit for every connect between the sender and receiver. connection oriented, e.g. traditional phone call. good for real-time communication</li>
<li>	<em>packet switching</em>: all the data is split into chunks and may traverse different routes to the target destination, arriving at different times. more flexible and efficient, fault tolerant.</li></ul>


## Types of Access Network

As discussed, data can be transmitted through various mediums. see the table below for a list of common mediums. The main mediums are wired (ethernet, fiberoptic) and wireless(802.11, 802.15, GSM).


<table>
<thead>
	<tr>
		<th>Connection</th>
		<th>Type</th>
		<th>Description</th>
	</tr>
</thead>
<tbody>
	<tr>
		<td>Ethernet(802.3)</td>
		<td>Wired</td>
		<td>This is generally a local area network (LAN) technology with some wide area network (WAN) applications. Physical connections are made between nodes and/or infrastructure devices (hubs, switches, routers) by various types of copper or fiber cable. 802.3 is a technology that supports the IEEE 802.1 network architecture. 802.3 also defines LAN access method using CSMA/CD.</td>
	</tr>
	<tr>
		<td>Universal Serial Bus (USB)</td>
		<td>Wired</td>
		<td>USB was designed to standardize the connection of peripherals to personal computers, both to communicate with and to supply electric power. It has largely replaced interfaces such as serial ports and parallel ports, and has become commonplace on a wide range of devices. </td>
	</tr>
	<tr>
		<td>Digital Subscriber Line (DSL)</td>
		<td>Wired</td>
		<td>a family of technologies that are used to transmit digital data over telephone lines. In telecommunications marketing, the term DSL is widely understood to mean asymmetric digital subscriber line (ADSL), the most commonly installed DSL technology, for Internet access.

DSL service can be delivered simultaneously with wired telephone service on the same telephone line since DSL uses higher frequency bands for data.</td>
	</tr><tr>
		<td>Wireless (802.11)</td>
		<td>Wireless</td>
		<td>IEEE 802.11 is part of the IEEE 802 set of local area network (LAN) protocols, and specifies the set of media access control (MAC) and physical layer (PHY) protocols for implementing wireless local area network (WLAN) Wi-Fi computer communication in various frequencies, including but not limited to 2.4 GHz, 5 GHz, 6 GHz, and 60 GHz frequency bands.</td>
	</tr>
	<tr>
		<td>Long-Term Evolution (LTE)</td>
		<td>Wireless</td>
		<td>a standard for wireless broadband communication for mobile devices and data terminals, based on the GSM/EDGE and UMTS/HSPA technologies. It increases the capacity and speed using a different radio interface together with core network improvements</td>
	</tr><tr>
		<td>Bluetooth (802.15)</td>
		<td>Wireless</td>
		<td></td>
	</tr><tr>
		<td>Global System for Mobile Communications (GSM)</td>
		<td>Wireless</td>
		<td>describe the protocols for second-generation (2G) digital cellular networks used by mobile devices such as mobile phones and tablets. It was first deployed in Finland in December 1991.[2] By the mid-2010s, it became a global standard for mobile communications achieving over 90% market share, and operating in over 193 countries and territories.[3]</td>
	</tr>
</tbody>
</table>

---


## [NETWORK Topologies](https://www.youtube.com/watch?v=uSKdjjw5zow)

Network Topology describes the layout of devices connected on a network. topologies can be described based on their physical layout, or logical layout (how data flows through the network:

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
			<td>Every node is connected to a central node called a hub/switch, centralised management, all traffic must pass through the hub/switch which is responsible for routing data to its intended destination. two or more star topologies can be connected via a repeater. wireless Networks use a star topology, benefits is if one computer fail, the rest can still access. disadvantage is if the device fails, all other devices cant access the network, called a single point of failure
</td>
			<td>easy to design and implement, centralised administration, scalable</td>
			<td>Single point of failure in the hub/switch will affect the whole network, bottlenecks due to overloaded hub/switch, increased cost due to switch/hub</td>
		</tr>
		<tr>
			<td>Mesh</td>
			<td>Each node is directly connected to every other node in the network and is fault tolerant and reliable</td>
			<td>Fault tolerant, reliable</td>
			<td>Issues with broadcasting messages, expensive and impractical for large networks</td>
		</tr>
		<tr>
			<td>Hybrid</td>
			<td>A combination of two or more topologies</td>
			<td></td>
			<td></td>
		</tr>
	</tbody>
</table>

---

## Networking Models 
<span style="display:none">Network architecture is a framework for the specification of a network's physical components and their functional organization and configuration, its operational principles and procedures, as well as communication protocols used.The type of protocol used by an application depends on the type of application architecture being used. 
</span>
Network architecture describes the structure and classification of a distributed application. For example, the applications architecture of the public switched telephone network (PSTN) has been termed the Intelligent Network. There are any number of specific classifications but all lie on a continuum between the dumb network (e.g. Internet) and the intelligent network (e.g. the telephone network).

A popular example of such usage of the term in distributed applications, as well as PVCs (permanent virtual circuits), is the organization of nodes in peer-to-peer (P2P) services and networks. P2P networks usually implement overlay networks running over an underlying physical or logical network. These overlay networks may implement certain organizational structures of the nodes according to several distinct models, the network architecture of the system

<embed src="https://www.youtube.com/embed/-0thZyLPoBM"></embed>

See the table below for a summary of the main types of network models

<table>
	<caption>Network Models</caption>
	<thead><tr>
		<th>Architecture</th>
		<th>Description</th>
	</tr></thead>
	<tbody>
		<tr>
			<td><a href="https://en.wikipedia.org/wiki/Client%E2%80%93server_model"> client-server</a></td>
			<td>The most common architecture in which many clients (remote processors) request and receive service from a centralized server (host computer). Client computers provide an interface to allow a computer user to request services of the server and to display the results the server returns. This is used by data centres/cloud computing. protocols used by this layer include DNS and DHCP. <a href="https://www.youtube.com/watch?v=MTzCUA4suPs">big data, internet of things, cloud</a></td>
		</tr>
		<tr>
			<td><a href="https://en.wikipedia.org/wiki/Peer-to-peer">Peer-to-peer(P2P)</a></td>
			<td>direct communication between individual computers without the need of a server. it is difficult to manage. e.g. torrenting using FTP.</td>
		</tr>
		<tr>
			<td>Hybrid</td>
			<td>combines the strengths of client-server and P2P while covering their weaknesses. e.g. skype using VoIP</td>
		</tr>
	</tbody>
</table>

---

## further investigations:

- [submarinecablemap](https://www.submarinecablemap.com/)
- ixp

