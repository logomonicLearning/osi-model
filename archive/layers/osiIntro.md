<script src="formatter_old.js"></script>
<link rel="stylesheet" type="text/css" href="style.css">
<script src="js\osiSimple/data.js" type="text/javascript"></script>

<link rel="stylesheet" type="text/css" href="style/osiSimpleStyle.css">
<link rel="stylesheet" type="text/css" href="style/style.css">

# INTRODUCTION TO THE OPEN SYSTEMS INTERCONNECTION (OSI) MODEL

## Main terms

- <b>Encapsulation</b>: involves wrapping data with header information to be passed on to the Lower layer for transmission.
- <b>Decapsulation</b>: is the opposite of encapsulation where data is stripped of it's header information while traveling from the physical layer to the application layer.
- <b>Upper/Host layers</b>: L7-L5 usually work with an application and not with the hardware itself.
- <b>Lower/Media layers</b>: L4-L1 usually work with the hardware.
- <span style="color:red">Cross-layer functions are services that are not tied to a given layer, but may affect more than one layer.[25] Some orthogonal aspects, such as management and security, involve all of the layers (See ITU-T X.800 Recommendation[26]). These services are aimed at improving the CIA triad—confidentiality, integrity, and availability—of the transmitted data. Cross-layer functions are the norm, in practice, because the availability of a communication service is determined by the interaction between network design and network management protocols.</span>
- <b>Protocol Data Unit (PDU)</b>: refers to a group of information added or removed by a layer of the OSI model. The reverse happens when data units go from L1 to L7. Layers strip headers.
	- [Bits] - L1
	- [Frame Header] - L2
	- [Network header] - L3
	- [Transport header] - L4
	- [Data] - L7-L5

---

## COMPONENTS OF THE INTERNET.

The internet is the physical infrastructure which enables communication between distributed applications such as the web, voip and games. It also provides communication services between two hosts on a network. Outlined below are it's main components:

<table>
<thead>
	<tr>
		<th>Component</th>
		<th>Description</th>
	</tr>
</thead>
<tbody>
	<tr>
		<td>Hosts</td>
		<td> Devices on the internet (computers, smartphones, tablets, WAP). Hosts are able to communicate over a network due to Network Interface Card (NIC) which provides the physical address of the device called a MAC address.</td>
	</tr>
<tr>
	<td>Links</td>
	<td> The connections between hosts on a network. They can be physical links such as Ethernet, fiberoptic or wireless.</td>
</tr>
<tr>
	<td>Routers</td>
	<td> It is a type of host which directs traffic between computers within a complex network using IP addresses (L4). Its purpose is to ensure that data reaches its intended target destination.</td>
</tr>
<tr>
	<td>Protocols</td>
	<td> Networking protocols are rules that define how data is transmitted over a network and how the pieces interconnect. All but the physical layer of the OSI has it's own set of protocols. The 2 most well known are TCP (layer 4) and IP (layer 3). 
	</td>
</tr>
</tbody>
</table>

---

## The OSI Model
### Reasons for a layered model

- Change: When changes are made to one layer, the impact on the other layers is minimized. If the model consists of a single, all-encompassing layer, any change affects the entire model.
- Design: A layered model defines each layer separately. As long as the interconnections between layers remain constant, protocol designers can specialize in one area (layer) without worrying about how any new implementations affect other layers.
- Learning: The layered approach reduces a very complex set of topics, activities, and actions into several smaller, interrelated groupings. This makes learning and understanding the actions of each layer and the model generally much easier.
- Troubleshooting: The protocols, actions, and data contained in each layer of the model relate only to the purpose of that layer. This enables troubleshooting efforts to be pinpointed on the layer that carries out the suspected cause of the problem.
- Standards: Probably the most important reason for using a layered model is that it establishes a prescribed guideline for interoperability between the various vendors developing products that perform different data communications tasks. Remember, though, that layered models, including the OSI model, provide only a guideline and framework, not a rigid standard that manufacturers can use when creating their products.

The Open Systems Interconnect (OSI) is a conceptual framework developed in the 1970s as a a common frame of reference for discussing and developing Internet communications protocols. The model partitions the functions performed by communication protocols and the flow of data into seven abstraction layers stacked on top of each other, and describes the journey of data transmitted as <a href="" title="0s and 1s">bits</a> as electrical impulses through physical and wireless mediums such as copper cables and wifi, to the highest-level representation of data within an application. Each layer provides functionality to the layer above it and is served by the layer below through standardised <a href="">protocols</a>.

For information to be transferred over a network from one device to another, data must travel down the seven layers of the OSI model on the sending device, and then travel up the seven layers on the receiving end. Each layer processes and wraps data with header information on its way out known as encapsulation. The receiving device removes this header information as the data journeys up the layers known as decapsulation.


---

<embed src="https://www.youtube.com/embed/nFnLPGk8WjA">	</embed>
<!-- <embed src="https://www.youtube.com/embed/vv4y_uOneC0" width=500 height=300></embed> -->

---

## LAYERS OF THE OSI MODEL

It is important to know that Layer 7-4 protocols works on the local machine and is works on an end to end principle while layers 3-1 operate over the network on a using the point to point princple. these ter work on the 

- End to end indicates a communication happening between two applications (maybe you and your friend using Skype). It doesn't care what's in the middle, it just consider that the two ends are taking with one another. It generally is a Layer 4 (or higher) communication. [E2E Principle](https://www.youtube.com/watch?v=3Iy4EQpGnpo)
e.g. if 2 devices wish to share info, much functioality as possible should be pushed to the edges rather than the internet (which is expensive). if a packet is missing the IP doesnt handle it, TCP will handle it and repair it. edge b will tell a that it didnt receive the apcket. it keeps the core internet simple
TCP (reliable) runs on the local machine, whereas IP (unreliable) runs in the core of the internet
- Point to point is a Layer 2 link with two devices only on it. That is, two devices with an IP address have a cable going straight from a device into the other. A protocol used there is PPP, and HDLC is a legacy one.
- Hop by Hop indicates the flow the communication follows. Data pass through multiple devices with an IP address, and each is genetically named “hop”. Hop by Hop indicates analyzing the data flow at layer 3, checking all devices in the path

---
p2p:transport layer encryption e.g. https
directly links system 1( the point of payment card acceptance) to system 2( the point of payment processing). Without the involvement of any other systems, this makes it quick and highly secure and confidential

e2ee: encryption before transort e.g. PGP
has multiple systems in between and this increases hacker opportunity, uses PKI

[3 possibilities:](https://www.youtube.com/watch?v=8YF4xmn4xOY)

1. data is encrypted on the senders device but can be decrypted by the service provider, and then reencryptedd to the receiver's device. encryption between client and server and vice versa. if the hacker hacks the server, data will be exposed.
2. data is encrypted but the service provider cant read the message but knows who the message was sent to.
3. the data is encrypted and the service provider cant read the message or knows who the message was sent to. (E2EE). this is used by messsaging apps such as wotsapp, messanger. uses Diffie-helman  mathematics (1976) for PKI. they only share public key

pro: data security
con: it can still be attacked if an attacker steals the key.

[end to end diffie hellman](https://www.youtube.com/watch?v=JnZQMUL8GcQ)

gives a good animation .


[p2pe]()
instore payment protection solution. converts card data into meaningless code. as soon as the customer taps in store, data is meaningless and makes it impossible to breach. only when details receive at the channel gateway will it be decrypted and sent to the bank for authorisation. the channel willl then pass a token to the merchant  making repeat customer interaction easier and quicker.
Tokenization is the substitution of confidential data with a randomly generated symbol, or token, that has no meaning or value. It is typically used for static data like credit cards or social security numbers, and is a strong candidate for small databases that don’t require sending and receiving data. However, once your business scales and the amount of information you must protect grows, tokenization alone isn’t your best option.


---

<div id="interactive-osi-model"></div>
<!-- <embed width="90vw" height="auto" src="./layers/osiSimple/index.html" frameborder="0"></embed> -->

---



<!-- [very good intro](https://www.youtube.com/watch?v=vv4y_uOneC0) -->



<a href="">next</a> 



[source 1](read://https_www.cisco.com/?url=https%3A%2F%2Fwww.cisco.com%2FE-Learning%2Fbulk%2Fpublic%2Ftac%2Fcim%2Fcib%2Fusing_cisco_ios_software%2Flinked%2Ftcpip.htm)

<script src="js\osiSimple/logic.js" type="text/javascript"></script>