[1mdiff --git a/historyOfOSIModel.md b/historyOfOSIModel.md[m
[1mdeleted file mode 100644[m
[1mindex b7b510f..0000000[m
[1m--- a/historyOfOSIModel.md[m
[1m+++ /dev/null[m
[36m@@ -1,17 +0,0 @@[m
[31m-## history of osi[m
[31m-In the early and mid-1970s, networking was either government-sponsored <span style="display:none">(NPL network in the UK, ARPANET in the US, CYCLADES in France)</span> or vendor-developed with proprietary standards<span style="display:none">, such as IBM's Systems Network Architecture and Digital Equipment Corporation's DECnet</span>. Public data networks emerge shortly after in the late 1970s, using the X.25 standard.[m
[31m-[m
[31m-<span style="display:none">The Experimental Packet Switched System in the UK circa 1973-5 identified the need for defining higher level protocols.[1] The UK National Computing Centre publication 'Why Distributed Computing' which came from considerable research into future configurations for computer systems,[3] resulted in the UK presenting the case for an international standards committee to cover this area at the ISO meeting in Sydney in March 1977.[4]</span>[m
[31m-[m
[31m-[m
[31m-Beginning in 1977, the International Organization for Standardization (ISO) conducted a program to develop general standards and methods of networking. Meanwhile in France, the International Telegraph and Telephone Consultative Committee (CCITT) were developing similar networking model. The OSI model was first defined in raw form in Washington, DC in February 1978 by Hubert Zimmermann of France and the refined but still draft standard was published by the ISO in 1980. Although not a standard itself, it was a framework in which future standards could be defined. as <span style="display:none"> The drafters of the reference model had to contend with many competing priorities and interests.</span> The rate of technological change made it necessary to define standards that new systems could converge to rather than standardizing procedures after the fact;<span style="display:none"> the reverse of the traditional approach to developing standards.[6]</span> [m
[31m-[m
[31m-In 1983, the CCITT and ISO documents were merged to form The Basic OSI Reference Model <span style="display:none">, OSI Reference Model, or simply OSI model,  </span> and was published in 1984 by both the ISO, as <a href="">standard ISO 7498</a>, and the CCITT as standard <a href="">X.200</a>. It promoted the idea of a consistent model of protocol layers, defining interoperability between network devices and software.[m
[31m-[m
[31m-<span style="display:none">OSI had two major components, an abstract model of networking, called the Basic Reference Model or seven-layer model, and a set of specific protocols. The OSI reference model was a major advance in the teaching of network concepts. </span>[m
[31m-[m
[31m-The concept of a seven-layer model was provided by the work of Charles Bachman at Honeywell Information Systems.[8] Various aspects of OSI design evolved from experiences with the NPL network, ARPANET, CYCLADES, EIN, and the International Networking Working Group (IFIP WG6.1). <span style="display:none">In this model, a networking system was divided into layers. Within each layer, one or more entities implement its functionality. Each entity interacted directly only with the layer immediately beneath it and provided facilities for use by the layer above it.</span>[m
[31m-[m
[31m----[m
[31m-[m
[31m-[m
[1mdiff --git a/osiIntro.md b/osiIntro.md[m
[1mdeleted file mode 100644[m
[1mindex 1b06ef7..0000000[m
[1m--- a/osiIntro.md[m
[1m+++ /dev/null[m
[36m@@ -1,75 +0,0 @@[m
[31m-# [Introduction to the Open Systems Interconnection Model](https://www.youtube.com/watch?v=Ilk7UXzV_Qc)[m
[31m-[m
[31m-[very good intro](https://www.youtube.com/watch?v=vv4y_uOneC0)[m
[31m-[m
[31m-## the internet[m
[31m-[m
[31m-the internet provides a communication infrastructure which enables distributed applications such as the web, voip, games etc. it also provides communication services between two hosts on a network.[m
[31m-[m
[31m-## 4 components of the internet.[m
[31m-<table>[m
[31m-<thead>[m
[31m-	<tr>[m
[31m-		<th>Component</th>[m
[31m-		<th>Description</th>[m
[31m-	</tr>[m
[31m-</thead>[m
[31m-<tbody>[m
[31m-	<tr>[m
[31m-		<td>Hosts</td>[m
[31m-		<td> devices on the internet (computers, smartphones, tablets, WAP). Hosts are able to communicate over a network due to Wireless access cards which provides the physical address of the device called a MAC address.</td>[m
[31m-	</tr>[m
[31m-<tr><td>Links</td>[m
[31m-	<td> connection between two hosts which can either be a physical link such as Ethernet and fiberoptic or wireless. This will be discussed on layer 1</td>[m
[31m-</tr>[m
[31m-<tr><td>Routers</td>[m
[31m-	<td> It is a type of host which making paths between computers within a complex network and ensures that the information reaches the right destination by forwarding IP addresses. which will be dealt with on the Network layer</td>[m
[31m-</tr>[m
[31m-<tr>[m
[31m-	<td>Protocols</td>[m
[31m-	<td> rules that define how the pieces interconnect.[m
[31m-		networking protocols are rules for how data is transmitted in a network so that it gets to the correct address safely, efficiently and named appropriately. All but the physical layer of the OSI has it's own set of protocols. the 2 most predominant protocols are TCP (layer 4) and IP (layer 3). [m
[31m-	</td>[m
[31m-</tr>[m
[31m-</tbody>[m
[31m-</table>[m
[31m-[m
[31m-# The OSI model[m
[31m-The Open Systems Interconnect (OSI) is a conceptual framework developed in the 1970s on how applications communicate over a network. The model partitions the flow of data into seven abstraction layers, from the physical implementation of transmitting <a title="0s and 1s">bits</a> across a communications medium such as copper wires to the highest-level representation of data in an application. Each layer provides functionality to the layer above it and is served by the layer below through standardised <a href="">protocols</a>.[m
[31m-[m
[31m-network card drivers, operating systems, applications and networking hardware that facilitate the transmission of data over a network.[m
[31m-[m
[31m-[m
[31m-## Main terms[m
[31m-[m
[31m-- Encapsulation is preparing & passing the data by any upper layer to the Lower layer. That basically means, going from the application layer all the way down to the physical layer.[m
[31m-- Decapsulation is vice-versa encapsulation. This decoding data while going Upwards from the physical layer until the application layer.[m
[31m-- L7-L5 are called Upper layers or Host layers. They usually work with an application and not with the hardware itself.[m
[31m-- L4-L1 are called Lower layers or Media layers. They usually work with the hardware.[m
[31m-- When data unit is traversing (encapsulating) from L7 to L1 units wrap by a header, puts on the top of a unit. So when it reaches to L1 this will look like this:[m
[31m-[m
[31m-[m
[31m-- [Bits] - L1[m
[31m-- [Frame Header] - L2[m
[31m-- [Network header] - L3[m
[31m-- [Transport header] - L4[m
[31m-- [Data] - L7-L5[m
[31m-[m
[31m-- Protocol Data Unit (PDU) refers to a group of information added or removed by a layer of the OSI model.[m
[31m-[m
[31m-The reverse happens when data units go from L1 to L7. Layers strip headers.[m
[31m-[m
[31m-In order for human-readable information to be transferred over a network from one device to another, the data must travel down the seven layers of the OSI model on the sending device and then travel up the seven layers on the receiving end.[m
[31m-[m
[31m-<iframe width="90vw" height="auto" src="./layers/osiSimple/index.html" frameborder="0"></iframe>[m
[31m-[m
[31m-[m
[31m-[m
[31m-This article will start off by exploring the history of the OSI, followed by a more detailed explanation of the purpose of each layer and it's associated protocols starting from layer 1, the physical layer working our way up to layer 7, the Application Layer.[m
[31m-[m
[31m-You will be given an excercise to perform in order to enhance your understaninding of each layer which will usually require you to use the command line terminal (cmd) or by using the browser's console. this can be quickly accessed by typing cmd in the windows search or via the run command (windows+R). [m
[31m-[m
[31m-<a href="">next</a> [m
[31m-[m
[31m----[m
[31m-[m
