# Network layer

## terms

- Local forwarding table: examnes the header to determine the destination, lookup and send the packets on the appropriate outgoing link. the forwarding gets created by a routing algorithm
- routing algorithm: knows the global decisions and create the local decisions to support the global goals. it is used to create the forwarding table.

<span style="display:none">
    The network layer is responsible for facilitating data transfer between two different networks. If the two devices communicating are on the same network, then the network layer is unnecessary. The network layer breaks up segments from the transport layer into smaller units, called packets, on the sender’s device, and reassembling these packets on the receiving device. The network layer also finds the best physical path for the data to reach its destination; this is known as routing.
    Main duties of this layer usually are logical addressing (IPv4, IPv6, mask, IP), routing (to whom send packets), Path determination (Open Shortest Path First, Border Gateway Protocol, intermediate system-intermediate system).
</span>



The network layer is responsible for facilitating data transfer between two different networks throught a router. This layer is not needed however if the target machine is on the same local area network. The network layer breaks up segments from the transport layer into smaller units, called packets, on the sender’s device, and reassembling these packets on the receiving device. the network layer is point-to-point in contrast to the Transport layer which is an end-to-end. this basically means??? data is encapsulated with the sender and recievers ip addressed to be sent over WAN and decapsulated them to be sent to upper layers.


<span style="display:none">handles Routing of data. after data has arrived, each frame is examined to see if the data has reached its ultimate target. it recieves outgoing and incomming transmissions and ensures that it reaches the right target. for IP addressses this is achieved through ARP. Internet Protocol (IP) address is the adddress of your computer over a network. 
</span>

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
        <td> (Global hops across multiple routing)finding the best path to the destination as there are multiple paths to take.  Path determination (Open Shortest Path First, Border Gateway Protocol, intermediate system-intermediate system). </td>
    </tr>
    <tr>
        <td>Routing </td>
        <td>to whom send packets</td>
    </tr></tbody>
</table>

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
            <td>An IP address is a 32-bit numeric address written in decimal as four numbers separated by periods. Each number can be zero to 255. There are four classes of IP addresses:</td>
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
            <td>CMP is used by network devices, including routers to send error messages and operational information indicating, for example, that a request service is not available or that a host or router could not be reached. Unlike TCP and UDP, ICMP isnt typically used to exchange data between systems nor is it employed by end-user network applications with the exception of ping and traceroute</td>
        </tr>   
        <tr>    
            <td>Internet Group Messaging Protocol</td>
            <td>IGMP</td>
            <td>IGMP is used by hosts and adjacent routers on IPv4 networks to establish multicast group memberships... That is IGMP will be within the local multicast router and the end host client... then to cross the L3 boundary (eg. a router) protocol like Protocol Independent Multicast (PIM) is then used between the local and remote multicast routers, to direct multicast traffic from the multicast server to many multicast clients.</td>
        </tr>   
    </tbody>
</table>


---



## IP Addresses

In this tutorial for beginners I discuss the structure of the IPv6 address, the network portion, the interface ID, and the network prefix. The function of the different types of IPv6 addresses: global unicast, link-local, unique local, and anycast. How SLAAC works in IPv6 address auto-configuration along with EUI-64 to auto-configure the interface-id. The role of ICMPv6 in router and neighbor solicitation and advertisement (RS, RA, NS, NA). I also go over IPv6 addresses that are important to know like IPv6 all routes default gateway, loopback, and multicast addresses like the all solicited nodes multicast address

e.g. 192.168.1.9

127.0.0.1 is known as a loopback address.

![ipv6 parts](..\images\partsOfipv6.png)

---




---


### Quick excercise:
do the following to see all the current computers on your Local Area Network (LAN):


do the following check your current ip address do the 

> ipconfig
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