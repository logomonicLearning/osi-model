<link rel="stylesheet" type="text/css" href="style/style.css">
<!-- <link rel="stylesheet" type="text/css" href="style/interactiveFunctionsStyle.css"> -->
<link rel="stylesheet" type="text/css" href="style/interactiveTimelineStyle.css"><link rel="stylesheet" type="text/css" href="style/osiSimpleStyle.css">
<script src="js/mkeEl.js"></script>
<script src="js/formatter/navigation.js"></script>
<script src="js/osiSimple/data.js"></script>
<script src="js/osiSimple/eventListeners.js"></script>
<script src="js/internetTimeline/internetTimeline.js"></script>
<script src="js/osiSimple/osiSimpleGenerator.js" type="text/javascript"></script>
<section>
# INTRODUCTION TO THE OPEN SYSTEMS INTERCONNECTION (OSI) MODEL

## Main terms

- <b>Encapsulation</b>: involves wrapping data with header information to be passed on to the Lower layer for transmission.
- <b>Decapsulation</b>: is the opposite of encapsulation where data is stripped of it's header information while traveling from the physical layer to the application layer.
- <b>Upper/Host layers</b>: L7-L5 usually work with an application and not with the hardware itself.
- <b>Lower/Media layers</b>: L4-L1 usually work with the hardware.
- <b >Cross-layer functions</b>:  Services that are not tied to a given layer, but may affect more than one layer. <span style="display:none">Some orthogonal aspects, such as management and security, involve all of the layers (See ITU-T X.800 Recommendation[26]). These services are aimed at improving the CIA triad—confidentiality, integrity, and availability—of the transmitted data. Cross-layer functions are the norm, in practice, because the availability of a communication service is determined by the interaction between network design and network management protocols.</span>
- <b>Protocol Data Unit (PDU)</b>: refers to a group of information added or removed by a layer of the OSI model. The reverse happens when data units go from L1 to L7. Layers strip headers.
- <b>The Internet</b>:A global network of billions of computers, electronic devices and network devices such as routers and switches. The Internet enables you to access information, communicate with others, and much more.
- <b>World Wide Web</b>: An application that runs on internet. It refers to the large connection of <span>web pages</span>. These pages are linked together using hyperlinks. Therefore, the user can visit from one page to another to access the required information easily. A combination of related web pages is called a website.

---

## HISTORY OF THE INTERNET

<span style="display:none">The Experimental Packet Switched System in the UK circa 1973-5 identified the need for defining higher level protocols.[1] The UK National Computing Centre publication 'Why Distributed Computing' which came from considerable research into future configurations for computer systems,[3] resulted in the UK presenting the case for an international standards committee to cover this area at the ISO meeting in Sydney in March 1977.[4]</span>

<embed width=500 height=300 src="https://www.youtube.com/embed/h8K49dD52WA
"></embed>

---

## INTERNET TIMELINE

<div id="interactive-timeline"></div>

<table style="display:none">
<tr>
    <td>1957</td>
<td> timesharing replaced batch processing. share one computer with multiple users. it was used by scientists and researchers. good because if one computer went down the others wouldnt follow</td></tr>
<tr>
    <td>1962</td> <td>JCR Licklider proposed the idea of computers communicating over a network</td></tr>
<tr>
    <td>1969</td>
<td>Arpanet was made by the Defence Advanced Researcn Project Agency (DARPA).  login Stanford to ucla, only recieved the 1st 2 letters. NCP was replaced by TCP</td>
</tr>
<tr><td></td><td>RAND Corporation military Network  (America)</td></tr>
<tr><td></td><td>National Physical Laboratory (England)</td></tr>
<tr><td></td><td>Cyclades: scientifirc research (France)</td></tr>
<tr>
    <td>1971</td>
    <td> university of hawaii, and Ray tomlinson made email introducing the @ symbol.</td>
</tr>
<tr><td>vinton cerf TCP/IP</td></tr>
<tr>
    <td>1991</td>
     <td>Tim Berner-lee the world wide web. accessible to anyone with an internet connection. </td>
</tr>
<tr>
    <td>1992</td>
    <td>Erwise first gui internet browser</td>
</tr>
<tr>
    <td>1993</td>
    <td> mosaic influenced netscape in 1994.</td>
</tr>
<tr>
    <td></td>
    <td> AOL at this point you couldnt use the internet and your phone at the same time. as it was dialup.</td>
</tr>
</table>


---

## COMPONENTS OF THE INTERNET.

The internet is the physical infrastructure which enables communication between distributed applications such as the web, voip and games. It also provides communication services between two hosts on a network. Outlined below are it's main components:

<table >
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

The Open Systems Interconnect (OSI) is a conceptual framework developed in the 1970s as a common frame of reference for discussing and developing Internet communications protocols. The model partitions the functions performed by communication protocols and the flow of data into seven abstraction layers stacked on top of each other, and describes the journey of data transmitted as <a href="" title="0s and 1s">bits</a> as electrical impulses through physical and wireless mediums such as copper cables and wifi, to the highest-level representation of data within an application. Each layer provides functionality to the layer above it and is served by the layer below through standardised <a href="">protocols</a>.

For information to be transferred over a network from one device to another, data must travel down the seven layers of the OSI model on the sending device, and then travel up the seven layers on the receiving end. Each layer processes and wraps data with header information on its way out known as encapsulation. The receiving device removes this header information as the data journeys up the layers known as decapsulation. <span style="display:none"> - Change: When changes are made to one layer, the impact on the other layers is minimized. If the model consists of a single, all-encompassing layer, any change affects the entire model.\n\n - Design: A layered model defines each layer separately. As long as the interconnections between layers remain constant, protocol designers can specialize in one area (layer) without worrying about how any new implementations affect other layers.\n\n - Learning: The layered approach reduces a very complex set of topics, activities, and actions into several smaller, interrelated groupings. This makes learning and understanding the actions of each layer and the model generally much easier.\n\n - Troubleshooting: The protocols, actions, and data contained in each layer of the model relate only to the purpose of that layer. This enables troubleshooting efforts to be pinpointed on the layer that carries out the suspected cause of the problem.\n\n - Standards: Probably the most important reason for using a layered model is that it establishes a prescribed guideline for interoperability between the various vendors developing products that perform different data communications tasks. Remember, though, that layered models, including the OSI model, provide only a guideline and framework, not a rigid standard that manufacturers can use when creating their products. </span>

<embed src="https://www.youtube.com/embed/nFnLPGk8WjA"> </embed>

---

## LAYERS OF THE OSI MODEL

<div id="interactive-osi-model"></div>

<!-- <embed src="https://www.youtube.com/embed/vv4y_uOneC0" width=500 height=300></embed> -->

<!-- ## LAYERS OF THE OSI MODEL -->
<span style="display:none">
It is important to know that Layer 7-4 protocols works on the local machine and is works on an end to end principle while layers 3-1 operate over the network on a using the point to point princple. these ter work on the - End to end indicates a communication happening between two applications (maybe you and your friend using Skype). It doesn't care what's in the middle, it just consider that the two ends are taking with one another. It generally is a Layer 4 (or higher) communication. [E2E Principle](https://www.youtube.com/watch?v=3Iy4EQpGnpo) e.g. if 2 devices wish to share info, much functioality as possible should be pushed to the edges rather than the internet (which is expensive). if a packet is missing the IP doesnt handle it, TCP will handle it and repair it. edge b will tell a that it didnt receive the apcket. it keeps the core internet simple TCP (reliable) runs on the local machine, whereas IP (unreliable) runs in the core of the internet - Point to point is a Layer 2 link with two devices only on it. That is, two devices with an IP address have a cable going straight from a device into the other. A protocol used there is PPP, and HDLC is a legacy one. - Hop by Hop indicates the flow the communication follows. Data pass through multiple devices with an IP address, and each is genetically named “hop”. Hop by Hop indicates analyzing the data flow at layer 3, checking all devices in the path
</span>

In the following sections will explore each layer of the OSI model in depth, covering subjects such as their functions and protocols.


<!-- <script type="module" src="./js/main.js"></script> -->
</section>