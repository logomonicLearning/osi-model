<script src="formatter_old.js"></script>
<link rel="stylesheet" type="text/css" href="style.css">

# Network layer

## KEY TERMS

- <b>Packet</b>:  The Protocol Data unit (PDU) of the network layer which has the sender &amp; receiver's IP addresses.
- <b>Routing</b>: refers to the network-wide process that determines the end-to-end paths that packets take from source to destination. performed by a router.
- <b>routing algorithm</b>: Knows the global decisions and create the local forwarding table to decide the best path for packets to take to reach their destination. 
- Forwarding refers to the router-local action of transferring packet from an input link interface to the appropriate output link interface.
- <b>[Local forwarding table](https://www.youtube.com/watch?v=QR4JHXaz7ss)</b> : When packets pass through a router, it will examine the header to determine the destination address, looks it up in the local forwarding table (created by the routing algorithm) and then send the packets on the appropriate outgoing link. 
- Network ID: Routing metric of the path though which the packet is to be sent (best path)(Dubai e.g. 5002),
- Next Hop: the address of the next device to which the packet is to be sent on the way to its final destination.
- <b>ip address</b> : A numerical address used by devices to know where to send data. it includes the address of the device and the network it belongs to. it comes in two different flavours. IPv4 and IPv6. (see IP section for more details)
- <b>subnet</b> : A subnetwork or subnet is a logical subdivision of an IP network. The practice of dividing a network into two or more networks is called subnetting. For IPv4, a network may also be characterized by its subnet mask or netmask, which is the bitmask that when applied by a bitwise AND operation to any IP address in the network, yields the routing prefix.
    - unicast
    - multicast
- <b>Tunneling</b>: performed by a communications protocol to allows data to move from one network to another. It involves allowing private network communications to be sent across a public network (such as the Internet) through a process called encapsulation. the best known are L2TP and PPTP(outmoded and weak).
  
---

## introduction to the network layer

The network layer facilitates data transfer between two separate networks throught a router using the sender and receiver's logical IP address. For devices on the same network however, this task is performed by the L2 switch using the sender and receiver's MAC address, and so the transport layer is not required. The network layer encapsulates segments from  the transport layer into packets with the sender and receivers IP addressess, and then reassembling these packets on the receiving device. Unlike the host-to-host communication of the upper layers(L7-L5), this layer uses <span style="color:green">point-to-point</span> principle and so much of the logic and error handling of routing is performed by intermediary devices such as routers and Layer 3 switches. 


<span style="display:none">handles Routing of data. after data has arrived, each frame is examined to see if the data has reached its ultimate target. it recieves outgoing and incomming transmissions and ensures that it reaches the right target. for IP addressses this is achieved through ARP. Internet Protocol (IP) address is the adddress of your computer over a network. 
</span>


<embed src="https://www.youtube.com/embed/dNInnvmRivI">

See the table below for a summary of the network layers main functions 

<table>
<thead>
    <tr>
        <th>Purpose</th>
        <th>Description</th>
    </tr>
</thead>      
<tbody><tr>
    <td>Logical Addressing</td> 
    <td>This layer uses IP addresses i.e.  IPv4, IPv6 to uniquely identify all devices on a network so that data reaches the right destination.  </td>
</tr>
    <tr>
        <td>Forwarding</td> 
        <td>(local process)</td>
    </tr>
    <tr>
        <td>Routing</td> 
        <td> (Global hops across multiple routing)finding the best path to the destination as there are multiple paths to take.  Path determination (Open Shortest Path First, Border Gateway Protocol, intermediate system-intermediate system). determines best path to reach destination</td>
    </tr>
    <tr>
        <td>Error Handling</td>
        <td>This layer uses ICMP  to send Error messages if a node on the network cannot be reached. ICMP is  utilised by command line tools such as ping and traceroute</td>
    </tr>    
    <tr>
        <td>Fragmentation and reassembly</td>
        <td> if the data is too large, it is fragmented and reassembled at arrival. maximum payload for ethernet is 1500Bytes</td>
    </tr>
    <tr>
        <td>Packaging</td>
        <td>It encapsulates data from higher layers with the sender and receiver's IP address</td>
    </tr>
    
</tbody>
</table>

---


## IP Addresses

<span style="display:none">In this tutorial for beginners I discuss the structure of the IPv6 address, the network portion, the interface ID, and the network prefix. The function of the different types of IPv6 addresses: global unicast, link-local, unique local, and anycast. How SLAAC works in IPv6 address auto-configuration along with EUI-64 to auto-configure the interface-id. The role of ICMPv6 in router and neighbor solicitation and advertisement (RS, RA, NS, NA). I also go over IPv6 addresses that are important to know like IPv6 all routes default gateway, loopback, and multicast addresses like the all solicited nodes multicast address
</span>

An IP address is the logical address assigned to each device on a network. This is usually assigned by a router using DHCP but can be assigned manually to remain static which is imortant for shared device such as printers and servers. With DHCP, the router leases the address to the device when it is connected and the address becomes available when the machine disconnects from the network. There are 2 types of IP addresses: IPv4 a 32 bit address with each byte separated by a dot; IPv6 is the newer version of IP addresses and is a 128 bit address written in hexadecimal notation. This article will elaborate more on IPv4 as it is the predominant of the two.


<embed src="https://www.youtube.com/embed/7_-qWlvQQtY"></embed>

<!-- [vid](https://www.youtube.com/watch?v=v8aYhOxZuNg) -->
An IPv4 addresses identifys 2 things: the address of a host (H) on a network, and the address of the network (N) it belongs to. The part of the IP address which indicate the network depends on the class of IP address it belongs to which is identified by the subnet mask. see the table below for more details:

<table border="0" cellpadding="0" cellspacing="0">
 <colgroup><col>
 <col width="200px">
 <col>
 <col>
 <col>
 <col>
 <col>
 <col>
 <col>
 </colgroup><tbody><tr>
  <td>Class</td>
  <td>from</td>
  <td>to<span>&nbsp;</span></td>
  <td>Subnet Mask</td>
  <td>Max host</td>
  <td>No of networks</td>
  <td>Organisation</td>
  <td>first bit pattern</td>
  <td>Network/Host portion</td>
 </tr>
 <tr>
  <td>A</td>
  <td>1.0.0.0<span>&nbsp;</span></td>
  <td>126.255.255.255</td>
  <td>255.0.0.0</td>
  <td>2^24-2= 16M<span>&nbsp;</span></td>
  <td>2^7=128</td>
  <td>Large</td>
  <td>0xxxxxxx</td>
  <td>N.H.H.H</td>
 </tr>
 <tr>
  <td>B</td>
  <td>128.0.0.0</td>
  <td>191.255.255.255</td>
  <td>255.255.0.0</td>
  <td>2^16-2=64K</td>
  <td>2^14=16000</td>
  <td>Mid size</td>
  <td>10xxxxxx</td>
  <td>N.N.H.H</td>
 </tr>
 <tr>
  <td>C</td>
  <td>192.0.0.0</td>
  <td>233.255.255.255</td>
  <td>255.255.255.0</td>
  <td>2^8-2=254</td>
  <td>2^21=2M</td>
  <td>small</td>
  <td>110xxxxx</td>
  <td>N.N.N.H</td>
 </tr>
 <tr>
  <td>D</td>
  <td>244.0.0.0</td>
  <td>239.255.255.255</td>
  <td>Reserved for multicasting</td>
  <td>N/A</td>
  <td>reserved for multicast groups</td>
  <td>N/A</td>
  <td>1110xxxx</td>
  <td>N/A</td>
 </tr>
 <tr>
  <td>E</td>
  <td>240.0.0.0</td>
  <td>254.255.255.255</td>
  <td>Experimental</td>
  <td>N/A</td>
  <td>reserved for research and
  development</td>
  <td>future use</td>
  <td>1111xxxx</td>
  <td>N/A</td>
 </tr>
 <tr>
  <td colspan="9"></td>
 </tr>
</tbody></table>

Note: Class A addresses 127.0.0.0 to 126.255.255.255 are reserved for loopback testing on the local machine
Class C addresses are the most familiar as they are used on the local network, ad usually begin with 192.168.xxx.xxx

<span style="color:red">1</span>.<span style="color:green">2.3.4</span>

---

## ROUTING &amp; Forwarding

every node has a routing algorithm and local forwarding table.
routing algorithm populates the local forwarding table at the node which determines the end to end path. Forwarding is the physical movement of packet from a nodes input interface to a nodes output interface.


![routing &amp local forwarding table](https://slideplayer.com/slide/16427581/96/images/3/Interplay+between+routing+and+forwarding.jpg)


---


## network layer protocols

see the table below for a list of some network layer protocols.

<div id="l3-protocols" class="interactive-protocols flex flex--column"></div>

<table style="display:none" border="0" cellpadding="0" cellspacing="0">
 <colgroup>
  <col span="2">
  <col>
  <col span="3">
 </colgroup>
 <tbody>
  <tr>
    <td>Meaning</td>
    <td>Acronym</td>
    <td>Description</td>
    <td>IP</td>
    <td>Category</td>
    <td>Algorithm</td>
 </tr>
 <tr>
  <td>internet Group Management Protocol</td>
  <td>IGMP</td>
  <td>Management Protocol (IGMP) is a
  communications protocol used by hosts and adjacent routers on IPv4 networks
  to establish multicast group memberships. IGMP is an integral part of IP
  multicast and allows the network to direct multicast transmissions only to
  hosts that have requested them.<br>
    <br>
    IGMP can be used for one-to-many networking applications such as online
  streaming video and gaming, and allows more efficient use of resources when
  supporting these types of applications.<br>
    <br>
    version 1,2,3. 2 is current standard. Has a quwry 224.0.0.1 message,
  membership report message 22<font>4.0.0.2</font><font>and leave message. Ip datagram has an ip header(20 bytes and an
  igmp message( 8 bytes/32 bits) which includes type(8bit): membership query,
  membership report and leave; max response time(8bit) only used by membership
  query, and checksum(16 bits) determines the entire payload of the datagram.</font></td>
  <td>224.0.0.1</td>
  <td></td>
  <td></td>
 </tr>
 <tr>
  <td>Protocol
  Independent Multicast</td>
  <td>PIM</td>
  <td>ppim doesnt care if youre using
  rip or ospf. Optimal tree. Prune and graft in dense mode, occures every three
  minutes affects performance. Sparse mode uses shared distribution tree using
  a rendevous point. Protocol-Independent Multicast (PIM) is a family of
  multicast routing protocols for Internet Protocol (IP) networks that provide
  one-to-many and many-to-many distribution of data over a LAN, WAN or the
  Internet. It is termed protocol-independent because PIM does not include its
  own topology discovery mechanism, but instead uses routing information
  supplied by other routing protocols.<span>&nbsp;&nbsp;
  </span>PIM does not build its own routing tables. PIM uses the unicast
  routing table for reverse path forwarding.[1]:56–57. PIM-SM is commonly used
  in IPTV systems for routing multicast streams between VLANs, Subnets or local
  area networks.[4]</td>
  <td></td>
  <td></td>
  <td></td>
 </tr>
 <tr>
  <td>Enhanced
  Interior Gateway routing Protocol</td>
  <td>EIGRP</td>
  <td>For cisco routers, each router
  only knows about its neighbour and isnt aware of global. Neighbours exchange
  routing information. Establish connections by sending a hello message sent
  every 5 seconds. Hold timer is time allowed for a response (15 seconds). Uses
  RTP not TCP/UDP. Unlike other well known routing protocols, such as RIP,
  EIGRP only sends incremental updates, reducing the workload on the router and
  the amount of data that needs to be transmitted. In addition to the routing
  table, EIGRP uses the following tables to store information:<br>
    <br>
    Neighbor Table: The neighbor table keeps a record of the IP addresses of
  routers that have a direct physical connection with this router. Routers that
  are connected to this router indirectly, through another router, are not
  recorded in this table as they are not considered neighbors.<br>
    Topology Table: The topology table stores routes that it has learned from
  neighbor routing tables. Unlike a routing table, the topology table does not
  store all routes, but only routes that have been determined by EIGRP. The
  topology table also records the metrics for each of the listed EIGRP routes,
  the feasible successor and the successors. Routes in the topology table are
  marked as "passive" or "active". Passive indicates that
  EIGRP has determined the path for the specific route and has finished
  processing. Active indicates that EIGRP is still trying to calculate the best
  path for the specific route. Routes in the topology table are not usable by
  the router until they are inserted into the routing table. The topology table
  is never used by the router to forward traffic. Routes in the topology table
  will not be inserted into the routing table if they are active, are a
  feasible successor, or have a higher administrative distance than an
  equivalent path.[2]<br>
    Information in the topology table may be inserted into the router's routing
  table and can then be used to forward traffic. EIGRP supports the following
  features:[3]<br>
    <br>
    Support for Classless Inter-Domain Routing (CIDR) and variable length
  subnet masking. Routes are not summarized at the classful network boundary
  unless auto summary is enabled.<br>
    Support for load balancing on parallel links between sites.<br>
    The ability to use different authentication passwords at different
  times.<br>
    MD5 and SHA-2 authentication between two routers.<br>
    Sends topology changes, rather than sending the entire routing table when a
  route is changed.<br>
    Periodically checks if a route is available, and propagates routing changes
  to neighboring routers if any changes have occurred.<br>
    Runs separate routing processes for Internet Protocol (IP), IPv6, IPX and
  AppleTalk, through the use of protocol-dependent modules (PDMs).<br>
    Backwards compatibility with the IGRP routing protocols.[4].<br>
    Cisco Systems now classifies EIGRP as a distance vector routing protocol,
  but it is normally said to be a hybrid routing protocol.[4][9] While EIGRP is
  an advanced routing protocol that combines many of the features of both
  link-state and distance-vector routing protocols, EIGRP's DUAL algorithm
  contains many features which make it more of a distance vector routing
  protocol than a link-state routing protocol.[9][10]<span>&nbsp;</span></td>
  <td>224.0.0.10</td>
  <td>distance vector</td>
  <td></td>
 </tr>
 <tr>
  <td>Router
  Information Protocol</td>
  <td>RIP</td>
  <td>Determines best path by number
  of hops. Not always optimal disregards otherfactors such as network traffic
  bandwith. Load balanced when two paths are the same distance. It is a
  classful protocol so doesnt support Variable LAN Subnet Mask (VLSM). broadcast
  update every 30 seconds. 120 Administrative Distance (AD). maximum of 15 hops
  anymore is unreachable. Information Protocol (RIP) is one of the oldest
  distance-vector routing protocols which employs the hop count as a routing
  metric. RIP prevents routing loops by implementing a limit on the number of
  hops allowed in a path from source to destination. The largest number of hops
  allowed for RIP is 15, which limits the size of networks that RIP can
  support.<br>
    <br>
    RIP implements the split horizon, route poisoning and holddown mechanisms
  to prevent incorrect routing information from being propagated.<span>&nbsp; </span>Bellman–Ford algorithm and the
  Ford–Fulkerson algorithm distant-vector routing protocols started to be
  implemented from 1969 onwards in data networks such as the ARPANET and
  CYCLADES.</td>
  <td>224.0.0.9</td>
  <td>distance vector</td>
  <td>Bellman-ford</td>
 </tr>
 <tr>
  <td>Open
  Shrotest path First</td>
  <td>OSPF</td>
  <td>sever factors determine best
  path including: category of routing protocol. Adminsistrative distance,
  metric calculatin, timer, load balancing. Etc. Quick to converge but cant
  handle many routes. Each router has the same picture of the network as each
  other. this is done with LSA (Link State Advertisements)<span>&nbsp; </span>keeping it in an LSDB (Database), routers
  exchange their LSDB. Each ahas a RID (Router ID, usually an ip address, can
  be set manually or automatically)</td>
  <td>224.0.0.5</td>
  <td>link state</td>
  <td>Dijkstra</td>
 </tr>
 <tr>
  <td></td>
  <td>IS-IS</td>
  <td></td>
  <td></td>
  <td>link state</td>
  <td></td>
 </tr>
 <tr>
  <td>reverse
  path forwarding</td>
  <td>RPF</td>
  <td>distribution tree: source
  distribituion tree, and shared distributuion tree. ( see PIM)</td>
  <td></td>
  <td></td>
  <td></td>
 </tr>
 <tr>
  <td>Link
  State Advertisment</td>
  <td>LSA</td>
  <td></td>
  <td></td>
  <td></td>
  <td></td>
 </tr>
 <tr>
  <td>Border
  Gateway Protocol</td>
  <td>BGP</td>
  <td>uses TCP, port 179. router to
  router communication. How routers in autonomous systems (AS) communicate. How
  the exchange information and what to do with packets determine best path. The
  glue which connects service providers and ISPs. Supoports 250,000 routes and
  growing. it is now in version 4. it is optimised for scalability rather than
  convergence time. it only has 4 messages: open; keep alive; update;
  notification and has 6 protocols uses tcp on port 179</td>
  <td></td>
  <td></td>
  <td></td>
 </tr>
 <tr>
  <td>Internet Protocol
  Version 4</td>
  <td>IPv4</td>
  <td>An IPv4 address is a 32-bit numeric
  address written in decimal as four numbers separated by a dot. Each number
  can range between 0 to 255. There are four classes of IP addresses. e.g.
  192.168.1.1</td>
  <td colspan="3"></td>
 </tr>
 <tr>
  <td>Internet
  Protocol Version 6</td>
  <td>IPv6</td>
  <td>Ipv6 was
  introduced due to the limited number of IPv4 addresses. It is a 128 bits
  written in hexadecimal number consisting of 32 hexadecimal numbers.
  e.g.&nbsp;<font>FDA3:BBCC:DCEE:0:6166:283F:29EA:5293:</font><font>&nbsp;These numbers are grouped in 4's giving 8 groups or
  blocks. There is over 340 undecillion ipv6 addresses available.</font></td>
  <td colspan="3"></td>
 </tr>
 <tr>
  <td>ATM</td>
  <td>Asynchronous
  Transfer Mode</td>
  <td>A
  telecommunications standard for digital transmission of multiple types of
  traffic, including telephony (voice), data, and video signals in one network
  without the use of separate overlay networks.</td>
  <td colspan="3"></td>
 </tr>
 <tr>
  <td>Internet
  Control message protocol</td>
  <td>ICMP</td>
  <td>ICMP is used by
  network devices, including routers to send error messages and operational
  information indicating, for example, that a request service is not available
  or that a host or router could not be reached. Unlike TCP and UDP, ICMP isnt
  typically used to exchange data between systems nor is it employed by
  end-user network applications with the exception of ping and traceroute</td>
  <td colspan="3"></td>
 </tr>
 <tr>
  <td>Internet
  Group Messaging Protocol</td>
  <td>IGMP/v6</td>
  <td>IGMP is a
  communications protocol used by hosts and adjacent routers on IPv4 networks
  to establish multicast group memberships only to hosts that have requested
  them. IGMP can be used for one-to-many networking applications such as online
  streaming video and gaming, and allows more efficient use of resources. For
  IPv6 networks, this is handled by Multicast Listener Discovery (MLD) which is
  a part of ICMPv6</td>
  <td colspan="3"></td>
 </tr>
 <tr>
  <td>Protocol
  Independent Multicast</td>
  <td>PIM</td>
  <td>After a host has
  sent a multicast request with ICMP to the local router, PIM is then used
  between the local and remote multicast routers, to direct multicast traffic
  from hosts sending multicasts to hosts that have registered through IGMP to
  receive them.</td>
  <td colspan="3"></td>
 </tr>
 <tr>
  <td>L2TP</td>
  <td>Layer 2 Tunneling
  Protocol</td>
  <td>A tunneling
  protocol used to support virtual private networks (VPNs) or as part of the
  delivery of services by ISPs. It encrypts its own control messages (using an
  optional pre-shared secret), and does not provide any encryption or
  confidentiality of content by itself. Rather, it provides a tunnel for Layer
  2 (which may be encrypted), and the tunnel itself may be passed over a Layer
  3 encryption protocol such as IPsec [1]</td>
  <td colspan="3"></td>
 </tr>
</tbody></table>

<table style="display:none">
    <thead>
    <tr>
        <th>Protocol</th>
        <th>Acronym</th>
        <th>Description</th>
    </tr>
</thead>
    <tbody>
        <tr>
            <td>Internet Protocol Version 4</td>
            <td>IPv4</td>
            <td>An IPv4 address is a 32-bit numeric address written in decimal as four numbers separated by a dot. Each number can range between  0 to 255. There are four classes of IP addresses. e.g. 192.168.1.1</td>
        </tr>   
<tr>
            <td>Internet Protocol Version 6</td>
            <td>IPv6</td>
            <td>Ipv6 was introduced due to the limited number of IPv4 addresses. It is a 128 bits written in hexadecimal number consisting of 32 hexadecimal numbers. e.g. <span style="color:green">FDA3:BBCC:DCEE:0:6166:283F:29EA:5293:</span> These numbers are grouped in 4's giving 8 groups or blocks. There is over 340 undecillion ipv6 addresses available.    
</td>
        </tr>   
        <tr>    
            <td>ATM</td>
            <td>Asynchronous Transfer Mode</td>
            <td> A telecommunications standard for digital transmission of multiple types of traffic, including telephony (voice), data, and video signals in one network without the use of separate overlay networks.</td>
        </tr>   
        <tr>    
            <td>Internet Control message protocol</td>
            <td>ICMP</td>
            <td>ICMP is used by network devices, including routers to send error messages and operational information indicating, for example, that a request service is not available or that a host or router could not be reached. Unlike TCP and UDP, ICMP isnt typically used to exchange data between systems nor is it employed by end-user network applications with the exception of ping and traceroute</td>
        </tr>   
        <tr>    
            <td>Internet Group Messaging Protocol</td>
            <td>IGMP/v6</td>
            <td>IGMP is a communications protocol used by hosts and adjacent routers on IPv4 networks to establish multicast group memberships only to hosts that have requested them. IGMP can be used for one-to-many networking applications such as online streaming video and gaming, and allows more efficient use of resources. For IPv6 networks, this is handled by Multicast Listener Discovery (MLD) which is a part of ICMPv6  <span style="display:none"> IGMP is used by hosts and adjacent routers on IPv4 networks to establish multicast group memberships... That is IGMP will be within the local multicast router and the end host client... then to cross the L3 boundary (eg. a router) protocol like Protocol Independent Multicast (PIM) is then used between the local and remote multicast routers, to direct multicast traffic from the multicast server to many multicast clients.</span></td>
        </tr>   
        <tr>
          <td>Protocol Independent Multicast</td>
          <td>PIM</td>
          <td>After a host has sent a multicast request with ICMP to the local router, PIM is then used between the local and remote multicast routers, to direct multicast traffic from hosts sending multicasts to hosts that have registered through IGMP to receive them.</td>
        </tr>
        <tr>
            <td>L2TP</td>
            <td>Layer 2 Tunneling Protocol </td>
            <td>A tunneling protocol used to support virtual private networks (VPNs) or as part of the delivery of services by ISPs. It  encrypts  its own control messages (using an optional pre-shared secret), and does not provide any encryption or confidentiality of content by itself. Rather, it provides a tunnel for Layer 2 (which may be encrypted), and the tunnel itself may be passed over a Layer 3 encryption protocol such as IPsec [1]</td>
        </tr>
    </tbody>
</table>


---


## Quick excercise:
- type the following command in your command line terminal to view information such as IP address and network information of your computer: ipconfig /all
- to use features of ICMP, type the following command from your command line terminal: 
  - ping sitename
  - traceroute sitename
- to view the routing table of your network type: route PRINT -4
further reading: 
delivery schemes

---

[ip video](https://www.youtube.com/watch?v=z7Al3P8ShM8)

further investigation:

packet tracer.