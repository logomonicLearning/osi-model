<script src="formatter.js"></script>
<link rel="stylesheet" type="text/css" href="style.css">

## [pim](https://www.youtube.com/watch?v=DlhCmqN2yBM)
- igmp: internet group management protocol, between host and router,
- pim:protocol independent multicast
- multicast. dense mode (implicit join, flood and prune, for small networks); sparse mode(explicit join, uses Randevous Point (RP) to process join request);

igmp
3 versions, 1,2,3
membership report message:requests membership to receive, sent periodically, still want membership? in version 2 the host sends a leave message
membership queriy message: routers send a query message to ask if host still wants to receive multicast, who respond with a mreport message
224.0.0.2

every host are by default multicast 224.0.0.1. every multicast router is part of 224.0.0.2
ssm: source specific multicast.


## [Cisco Multicast Routing for CCNA, CCNP, and CCIE Candidates](https://www.youtube.com/watch?v=Gjt2L9jAYNA)

multicasting addressing range: 244.0.0.0-239.255.255.255

Link local Address:224.0.0.0-224-0.0.255 used only on local network segment only on 1 link e.g.
igmp:224.0.0.1 & 224.0.0.2
ospf:224.0.0.5
RIP:224.0.0.9
EIGRP:224.0.0.10

globally scoped addresses:224.0.1.0-238.255.255.255
not limited to a single link
source specific multicast addresses: 232.0.0.0-232.255.255.255
GLOB Addresses: globally unique multicast, autonomuus sustem GBP 233.0.0.0-233.255.255.255
limited scpe address: 239.0.0.0-239.255.255.255



Reverse Path forwarding Check(RPF):
Distribution tree: source distribution tree, shared distribution tree. PIM doesnt care whether you're using rip or ospf. optimal tree.prune and graft messages in dense mode. flood and prune behavior can affect network performance. this occures about every 3 minutes! sparse mode is better as it uses a shared distribution tree using a rendevous point which prevents the flood and prune behavior.

## [igmp](https://www.youtube.com/watch?v=eBHwkyWgVaM)

the ip protocol supports two types of communication. Unicast and multicast: one to many sent this is done by igmp. ip datagram has an ip header (20 bytes) and an igmp message (8 bytes/32 bits) has: 
- types (8bits):membership query,membership report and leave report
- maximum response time (8bits): only used by membership query
- checksum (16bits): determines the entire payload of the ip datagram in which igmp message is encapsulated


---


eigrp:enhanced interior gateway routing protocol, designed for cisco routers specifically. similar to other distant vector protocols such as rip and ospf. however it is different in the sense that each router is only concerned with its neighbour and determines the best path based on feedback from their neighbours. exchange routing information, become neighbours by sending a hello message sent every 5 seconds by default. hold timer how long to wait before assuming the neighbour is dead (15 seconds). multicast address is 224.0.0.10. routing tables. eigrp doesnt use udp or tcp. but Reliable Transport Protocol (RTP). sequence numbers to identi. diffusing update algorith. route computations. uses syn, Ack. metric calculation formula

ospf:ospf is used way more than eigrp. there are several dimensions: category of routing protocol, administrative distance, metric calculation, timer, load balancing.#

rip+eigrp:
is-is
BGP: how routers in autonomous networks exchange information with what they should do with packets. allows autonomous sustems figure out who they can communicate with and helps them decide the best paths. e.g. 
a<->b
a<->c
c<->d
b<->d
each network has a routing table.



Distance-vector:rip,eigrp: doesnt know the entire path, just knows the distance of next destination. 15 hops is the max, any more is unreachable. eigrp calculates the best path with cost=reference bw/interface BW. the default reference bandwith is 100,00,00 bits per second.x`
Link-state:ospf, is-is: uses dijkstras algorithm which has a map of the whole topology, assigning the cost of each path. calculate the next with least cost. LSA: link-state advertisement.
path state
path-vector:BGP: routing protocol of the internet. 



---


own summary

network protocols are more concerned about how to send data between different networks#

some protocols are:
BGP
EIGRP mainly for cisco systems, is-is, RIP, OSPF (90%)
there are four main types of routing protocols, eigrp and isis only know about their closest neighbour, whereas ospf has a global view of the whole network. 

BGP on the otherhand is how packets are sent between independent networks.


there is also pim and igmp. igmp hosts communicate with the router, and pim is how routers communicate with eacher. this deals with multicast and 


---



## [bgp overview](https://www.youtube.com/watch?v=_Z29ZzKeZHc)
it is what holds the internet together. independent networks. path vector protocol. exchange routing advertismentssd. you dont know from bgp how many routers are in a network, it uses tcp
igpg neighbour

## [bgp: border gateway protocol- comuterfile](https://www.youtube.com/watch?v=O6tCoD5c_U0)
it connects the service providers to glue the autonomous networks together. is this what is used at ixp? want these networks to interoperate dispite their configurations. shortest path routing. you dont want something to be passing through your network unless it is being paid either by the requester or server. so it is a way to restrict movement. BGP doesnt fit in any of the models for shortest paths. (dijkstra, bellman ford) they are semiring, an algebraic structure, linear algebra is based on rings. semirings and routing is a generalisation of it. there are opposites. e.g. + has -. a semring doesnt have this property. there are min and max. these have algebraic , replace the + with min and replace the min with max. distance, capacity can make a semiring and so you can use bellmanford or dijkstra. these algorithms are generic. however we cant use them with bgp.

different AS's need to exchange information despite 

differnt routing protocols
differnt metcrcs
they dont trust each other
no enforced hierarchy
250,000 routes and growing.

a new exterior gateway protorol(EGP obsolete) BGP is noww in version 4. 
optimised for scalability instead of convergence time
advanced filtering. ospf on the otherhand cant handle 250K routes like BGP but can 

bgp minutes to converge and can handle 250000 routes
uses AS-path list to avoid loops
uses number of as-hop as universal metric
BGP uses TCP#
There are only 4 messages types: 
- open
- keep alive
- update
- notification
only 6 protocol statess
many filtering/prioritisaation options, but each one is simple.
uses tcp 179 port router to router communication
services provided by tcp
tcp socket is always from socket isalways from one router to another. no broadcasts ro multicasts unlike RIP or ospf. their headers containg
AS number, bgp version , hold time (180 seconds cisco default)
bgp identifier (highest loopback IP address)


---

## [what is RIP and how it works| routing information protocol](https://www.youtube.com/watch?v=8jKNrWgFtUA)
Router Information Protocol (RIP)
ospf quick to converge but cant handle many routes.

rip counts how many devices it takes to get to the destination (hops). Tracert shows you the amount of hops. using the hops is not the best solution nowadays. rip is a distant vector protocll based on hop count matrix.
when a router forward a data packet to anetwork segment, it is counted as a single hop. int a network it will choose the least number of hops to get to the destination. if boths routes take the same number of hops, it will pass packets along both routes, which is load balancing.
it is only based on hop count matrix, so if there is a better route with more bandwidth i.e. 100kbs , RIP wont choose that route. more traffic will go to the quickest path which may overload the router slowing it down.
RIP is a class full routing protofol so doesnt support VLSM (Variable Lan Subnet Mask)
it broadcast the updates to the entire network and simply creates a lot of traffic
bandwith utilisation is very hig as ti broadcasts its updates every 30 seconds
Rip supports a maximum of 15 hops which is a maximum of 16 routes
slow convergence( means the time any link goes down it should  quickly choose an alternative route but in rip it takes long time)
its administrative distance is 120(Ad value). the less AD Value is more reilable but the RIP has the higest AD Value and it is not as reliable as other routing protocols. 

## [routing protocols overview](https://www.youtube.com/watch?v=CBDdM-imW7o)
very good table!!!
AS includes ISPs which is used by BGP 



link state (global) vs distance vector()
link state
routers communicate with neighbor routers advertising networks as measures of distance vector
best for simple, flat design non-heirarchical networks
minimum admi

---
UDP protocols
SNMP Simple Network Management Protocol 161, 162. currently on version 3 which enables user authentication and encrypton
NTP:network time protocol 123
SIP:session initiation protocol 
RTSP

TCP Protocols
FTP:20,21
SFTP:22
SSH:22
TFTP:69
IMAP 143 like pop3 but youre downloading a copy, the message is on the server
POP3 110 download data on local computer.
SMTP 25 mailserver to mailserver
DHCP 67,68
HTTP/S


Both TCP & UDP protocols
LDAP (uses both UDP and TCP)
RDP: 3389 remote desktop protocol.
DNS