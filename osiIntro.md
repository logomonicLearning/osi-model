# [Introduction to the Open Systems Interconnection Model](https://www.youtube.com/watch?v=Ilk7UXzV_Qc)

[very good intro](https://www.youtube.com/watch?v=vv4y_uOneC0)

## the internet

the internet provides a communication infrastructure which enables distributed applications such as the web, voip, games etc. it also provides communication services between two hosts on a network.

## 4 components of the internet.
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
		<td> devices on the internet (computers, smartphones, tablets, WAP). Hosts are able to communicate over a network due to Wireless access cards which provides the physical address of the device called a MAC address.</td>
	</tr>
<tr><td>Links</td>
	<td> connection between two hosts which can either be a physical link such as Ethernet and fiberoptic or wireless. This will be discussed on layer 1</td>
</tr>
<tr><td>Routers</td>
	<td> It is a type of host which making paths between computers within a complex network and ensures that the information reaches the right destination by forwarding IP addresses. which will be dealt with on the Network layer</td>
</tr>
<tr>
	<td>Protocols</td>
	<td> rules that define how the pieces interconnect.
		networking protocols are rules for how data is transmitted in a network so that it gets to the correct address safely, efficiently and named appropriately. All but the physical layer of the OSI has it's own set of protocols. the 2 most predominant protocols are TCP (layer 4) and IP (layer 3). 
	</td>
</tr>
</tbody>
</table>

# The OSI model
The Open Systems Interconnect (OSI) is a conceptual framework developed in the 1970s on how applications communicate over a network. The model partitions the flow of data into seven abstraction layers, from the physical implementation of transmitting <a title="0s and 1s">bits</a> across a communications medium such as copper wires to the highest-level representation of data in an application. Each layer provides functionality to the layer above it and is served by the layer below through standardised <a href="">protocols</a>.

network card drivers, operating systems, applications and networking hardware that facilitate the transmission of data over a network.


## Main terms

- Encapsulation is preparing & passing the data by any upper layer to the Lower layer. That basically means, going from the application layer all the way down to the physical layer.
- Decapsulation is vice-versa encapsulation. This decoding data while going Upwards from the physical layer until the application layer.
- L7-L5 are called Upper layers or Host layers. They usually work with an application and not with the hardware itself.
- L4-L1 are called Lower layers or Media layers. They usually work with the hardware.
- When data unit is traversing (encapsulating) from L7 to L1 units wrap by a header, puts on the top of a unit. So when it reaches to L1 this will look like this:


- [Bits] - L1
- [Frame Header] - L2
- [Network header] - L3
- [Transport header] - L4
- [Data] - L7-L5

- Protocol Data Unit (PDU) refers to a group of information added or removed by a layer of the OSI model.

The reverse happens when data units go from L1 to L7. Layers strip headers.

In order for human-readable information to be transferred over a network from one device to another, the data must travel down the seven layers of the OSI model on the sending device and then travel up the seven layers on the receiving end.

<iframe width="90vw" height="auto" src="./layers/osiSimple/index.html" frameborder="0"></iframe>



This article will start off by exploring the history of the OSI, followed by a more detailed explanation of the purpose of each layer and it's associated protocols starting from layer 1, the physical layer working our way up to layer 7, the Application Layer.

You will be given an excercise to perform in order to enhance your understaninding of each layer which will usually require you to use the command line terminal (cmd) or by using the browser's console. this can be quickly accessed by typing cmd in the windows search or via the run command (windows+R). 

<a href="">next</a> 

---

