<script src="formatter.js"></script>
<link rel="stylesheet" type="text/css" href="style.css">

# Network layer

<div id="TOC">
TABLE OF CONTENT:
</div>


## KEY TERMS

- <b>Router (gateway)</b>: a network device that forwards data packetsb etween computer networks using the sender and receiver's IP address. 
- <b>Packet</b>: is the DPU of the network layer which has the sender &amp; receiver's IP addresses.
- <b>[Local forwarding table](https://www.youtube.com/watch?v=QR4JHXaz7ss)</b> : examnes the header to determine the destination, lookup and send the packets on the appropriate outgoing link. the forwarding gets created by a routing algorithm. each router has a table which makes decisions to decide the best path for packets to take. Network ID (Dubai e.g. 5002), Metric thr routing metric of the path though whic the packet is to be sent (best path), Next Hop: the address of the next device to which the packet is to be sent on the way to its final destination.
- <b>routing algorithm</b>: knows the global decisions and create the local decisions to support the global goals. it is used to create the forwarding table.
- <b>ip address</b> : A numerical address used by devices to know where to send data. it includes the address of the device and the network it belongs to. it comes in two different flavours. IPv4 and IPv6. (see IP section for more details)
- <b>subnet mask</b> :
- unicast
- multicast

---

## introduction to the network layer

The network layer facilitates data transfer between two different networks throught a router. This layer is not needed however if the target machine is on the same local area network. The network layer encapsulates segments from the the transport layer into packets with the sender and receivers IP addressess. It also reassembling these packets on the receiving device. the network layer is point-to-point, meaning there are intermediary devices. i.e. routers. This is in contrast to the Transport layer which is an end-to-end. this basically means??? data is encapsulated with the sender and recievers ip addressed to be sent over WAN and decapsulated them to be sent to upper layers.


- End to end indicates a communication happening between two applications (maybe you and your friend using Skype). It doesn't care what's in the middle, it just consider that the two ends are taking with one another. It generally is a Layer 4 (or higher) communication
- Point to point is a Layer 2 link with two devices only on it. That is, two devices with an IP address have a cable going straight from a device into the other. A protocol used there is PPP, and HDLC is a legacy one.
- Hop by Hop indicates the flow the communication follows. Data pass through multiple devices with an IP address, and each is genetically named “hop”. Hop by Hop indicates analyzing the data flow at layer 3, checking all devices in the path

[E2E Principle](https://www.youtube.com/watch?v=3Iy4EQpGnpo)
e.g. if 2 devices wish to share info, much functioality as possible should be pushed to the edges rather than the internet (which is expensive). if a packet is missing the IP doesnt handle it, TCP will handle it and repair it. edge b will tell a that it didnt receive the apcket. it keeps the core internet simple
TCP (reliable) runs on the local machine, whereas IP (unreliable) runs in the core of the internet

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
    <td>IPv4, IPv6, mask, IP, using IP addresses to reach the right computer. </td>
    <td>Forwarding</td> 
    <td>(local process)</td>
</tr>
    <tr>
        <td>Routing</td> 
        <td> (Global hops across multiple routing)finding the best path to the destination as there are multiple paths to take.  Path determination (Open Shortest Path First, Border Gateway Protocol, intermediate system-intermediate system). determines best path to reach destination</td>
    </tr>
    <tr>
        <td>Error Handling</td>
        <td>ICMP is used to send Error messages and is utilised by ping and traceroute</td>
    </tr>    
    <tr>
        <td>Fragmentation and reassembly</td>
        <td> if the data is too large, it is fragmented and reassembled at arrival. maximum payload for ethernet is 1500Bytes</td>
    </tr>
    <tr>
        <td>Encapsulation</td>
        <td>to whom send packets</td>
    </tr>
    
</tbody>
</table>

---


---


## IP Addresses

<span style="display:none">In this tutorial for beginners I discuss the structure of the IPv6 address, the network portion, the interface ID, and the network prefix. The function of the different types of IPv6 addresses: global unicast, link-local, unique local, and anycast. How SLAAC works in IPv6 address auto-configuration along with EUI-64 to auto-configure the interface-id. The role of ICMPv6 in router and neighbor solicitation and advertisement (RS, RA, NS, NA). I also go over IPv6 addresses that are important to know like IPv6 all routes default gateway, loopback, and multicast addresses like the all solicited nodes multicast address
</span>

[vid](https://www.youtube.com/watch?v=v8aYhOxZuNg)
IP addresses are 2 addresses in 1. the ip address is the ip of the device and the network it is in. 

e.g. 

172.16.0.1

172.16 is the network

0.1 are the device

all devices in the network will begin  with 172.168 

if devices on another network e.g. 184.2 they will need a router to communicate.

is it always the 1st half? no


<table border="0" cellpadding="0" cellspacing="0" width="817" style="border-collapse:
 collapse;table-layout:fixed;width:614pt">
 <colgroup><col class="xl120" width="38" style="mso-width-source:userset;mso-width-alt:1389;
 width:29pt">
 <col class="xl120" width="75" style="mso-width-source:userset;mso-width-alt:2742;
 width:56pt">
 <col class="xl120" width="112" style="mso-width-source:userset;mso-width-alt:4096;
 width:84pt">
 <col class="xl120" width="97" style="mso-width-source:userset;mso-width-alt:3547;
 width:73pt">
 <col class="xl120" width="92" style="mso-width-source:userset;mso-width-alt:3364;
 width:69pt">
 <col class="xl120" width="147" style="mso-width-source:userset;mso-width-alt:5376;
 width:110pt">
 <col class="xl120" width="86" style="mso-width-source:userset;mso-width-alt:3145;
 width:65pt">
 <col class="xl120" width="74" style="mso-width-source:userset;mso-width-alt:2706;
 width:56pt">
 <col class="xl120" width="96" style="mso-width-source:userset;mso-width-alt:3510;
 width:72pt">
 </colgroup><tbody><tr height="40" style="height:30.0pt">
  <td height="40" class="xl120" width="38" style="height:30.0pt;width:29pt">Class</td>
  <td class="xl120" width="75" style="width:56pt">from</td>
  <td class="xl120" width="112" style="width:84pt">to<span style="mso-spacerun:yes">&nbsp;</span></td>
  <td class="xl120" width="97" style="width:73pt">Subnet Mask</td>
  <td class="xl120" width="92" style="width:69pt">Max host</td>
  <td class="xl120" width="147" style="width:110pt">No of networks</td>
  <td class="xl120" width="86" style="width:65pt">Organisation</td>
  <td class="xl120" width="74" style="width:56pt">first bit pattern</td>
  <td class="xl120" width="96" style="width:72pt">Network/Host portion</td>
 </tr>
 <tr height="20" style="height:15.0pt">
  <td height="20" class="xl96" width="38" style="height:15.0pt;width:29pt">A</td>
  <td class="xl66" width="75" style="width:56pt">1.0.0.0<span style="mso-spacerun:yes">&nbsp;</span></td>
  <td class="xl66" width="112" style="width:84pt">126.255.255.255</td>
  <td class="xl66" width="97" style="width:73pt">255.0.0.0</td>
  <td class="xl66" width="92" style="width:69pt">2^24-2= 16M<span style="mso-spacerun:yes">&nbsp;</span></td>
  <td class="xl66" width="147" style="width:110pt">2^7=128</td>
  <td class="xl66" width="86" style="width:65pt">Large</td>
  <td class="xl66" width="74" style="width:56pt">0xxxxxxx</td>
  <td class="xl66" width="96" style="width:72pt">N.H.H.H</td>
 </tr>
 <tr height="20" style="height:15.0pt">
  <td height="20" class="xl96" width="38" style="height:15.0pt;width:29pt">B</td>
  <td class="xl66" width="75" style="width:56pt">128.0.0.0</td>
  <td class="xl66" width="112" style="width:84pt">191.255.255.255</td>
  <td class="xl66" width="97" style="width:73pt">255.255.0.0</td>
  <td class="xl66" width="92" style="width:69pt">2^16-2=64K</td>
  <td class="xl66" width="147" style="width:110pt">2^14=16000</td>
  <td class="xl66" width="86" style="width:65pt">Mid size</td>
  <td class="xl66" width="74" style="width:56pt">10xxxxxx</td>
  <td class="xl66" width="96" style="width:72pt">N.N.H.H</td>
 </tr>
 <tr height="20" style="height:15.0pt">
  <td height="20" class="xl96" width="38" style="height:15.0pt;width:29pt">C</td>
  <td class="xl66" width="75" style="width:56pt">192.0.0.0</td>
  <td class="xl66" width="112" style="width:84pt">233.255.255.255</td>
  <td class="xl66" width="97" style="width:73pt">255.255.255.0</td>
  <td class="xl66" width="92" style="width:69pt">2^8-2=254</td>
  <td class="xl66" width="147" style="width:110pt">2^21=2M</td>
  <td class="xl66" width="86" style="width:65pt">small</td>
  <td class="xl66" width="74" style="width:56pt">110xxxxx</td>
  <td class="xl66" width="96" style="width:72pt">N.N.N.H</td>
 </tr>
 <tr height="40" style="height:30.0pt">
  <td height="40" class="xl96" width="38" style="height:30.0pt;width:29pt">D</td>
  <td class="xl66" width="75" style="width:56pt">244.0.0.0</td>
  <td class="xl66" width="112" style="width:84pt">239.255.255.255</td>
  <td class="xl66" width="97" style="width:73pt">Reserved for multicasting</td>
  <td class="xl66" width="92" style="width:69pt">N/A</td>
  <td class="xl66" width="147" style="width:110pt">reserved for multicast groups</td>
  <td class="xl66" width="86" style="width:65pt">N/A</td>
  <td class="xl66" width="74" style="width:56pt">1110xxxx</td>
  <td class="xl66" width="96" style="width:72pt">N/A</td>
 </tr>
 <tr height="40" style="height:30.0pt">
  <td height="40" class="xl96" width="38" style="height:30.0pt;width:29pt">E</td>
  <td class="xl66" width="75" style="width:56pt">240.0.0.0</td>
  <td class="xl66" width="112" style="width:84pt">254.255.255.255</td>
  <td class="xl66" width="97" style="width:73pt">Experimental</td>
  <td class="xl66" width="92" style="width:69pt">N/A</td>
  <td class="xl66" width="147" style="width:110pt">reserved for research and
  development</td>
  <td class="xl66" width="86" style="width:65pt">future use</td>
  <td class="xl66" width="74" style="width:56pt">1111xxxx</td>
  <td class="xl66" width="96" style="width:72pt">N/A</td>
 </tr>
 <tr height="20" style="height:15.0pt">
  <td height="20" colspan="9" class="xl120" style="height:15.0pt;mso-ignore:colspan"></td>
 </tr>
 <tr height="20" style="height:15.0pt">
  <td colspan="7" height="20" class="xl240" width="647" style="height:15.0pt;
  width:486pt">Note: Class A addresses 127.0.0.0 to 126.255.255.255 are
  reserved for loopback testing on the local machine</td>
  <td colspan="2" class="xl120" style="mso-ignore:colspan"></td>
 </tr>
 <!--[if supportMisalignedColumns]-->
 <tr height="0" style="display:none">
  <td width="38" style="width:29pt"></td>
  <td width="75" style="width:56pt"></td>
  <td width="112" style="width:84pt"></td>
  <td width="97" style="width:73pt"></td>
  <td width="92" style="width:69pt"></td>
  <td width="147" style="width:110pt"></td>
  <td width="86" style="width:65pt"></td>
  <td width="74" style="width:56pt"></td>
  <td width="96" style="width:72pt"></td>
 </tr>
 <!--[endif]-->
</tbody></table>

Note: Class A addresses 127.0.0.0 to 126.255.255.255 are reserved for loopback testing on the local machine


<span style="color:red">1</span>.<span style="color:green">2.3.4</span>


<embed src="https://www.youtube.com/embed/7_-qWlvQQtY"></embed>

e.g. 192.168.1.9

127.0.0.1 is known as a loopback address.

![ipv6 parts](..\images\partsOfipv6.png)

---

## network layer protocols
see the table below for a list of some network layer protocols.

<table>
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
            <td>An IP address is a 32-bit numeric address written in decimal as four numbers separated by periods. Each number can be zero to 255. it ranges from 0.0.0.0 to 255.255.255.255 There are four classes of IP addresses:</td>
        </tr>   
<tr>
            <td>Internet Protocol Version 6</td>
            <td>IPv6</td>
            <td>Ipv6 is a 128 bits written in hexadecimal number consisting of 32 hexadecimal numbers. These numbers are grouped in 4's giving 8 groups or blocks. There is over 340 undecillion ipv6 addresses available   
</td>
        </tr>   
        <tr>    
            <td>ATM</td>
            <td></td>
            <td></td>
        </tr>   
        <tr>    
            <td>Internet Control message protocol</td>
            <td>ICMP</td>
            <td>ICMP is used by network devices, including routers to send error messages and operational information indicating, for example, that a request service is not available or that a host or router could not be reached. Unlike TCP and UDP, ICMP isnt typically used to exchange data between systems nor is it employed by end-user network applications with the exception of ping and traceroute</td>
        </tr>   
        <tr>    
            <td>Internet Group Messaging Protocol</td>
            <td>IGMP</td>
            <td>IGMP is used by hosts and adjacent routers on IPv4 networks to establish multicast group memberships... That is IGMP will be within the local multicast router and the end host client... then to cross the L3 boundary (eg. a router) protocol like Protocol Independent Multicast (PIM) is then used between the local and remote multicast routers, to direct multicast traffic from the multicast server to many multicast clients.</td>
        </tr>   
    </tbody>
</table>





---


## Quick excercise:
do the following to see all the current computers on your Local Area Network (LAN):


do the following check your current ip address do the 

ipconfig

> 

do the following to see the ip address of a website

nslookup 

open the command line:
type ping  nameofwebsite.com

> windows+R and type cmd to access the command line:
> type arp
(is arp datalink layer?)


further reading: 
delivery schemes

---

[ip video](https://www.youtube.com/watch?v=z7Al3P8ShM8)