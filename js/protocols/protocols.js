const OSIProtocols=[
  {
    acronym:"HTTP/S",
    meaning:'Hypertext transport protocol secure',
    transportProtocol:"TCP",
    layer:7,
    description:`HTTP/S governs the rules for transferring Hypertext (web pages written in HTML) over a network. HTTPS is a secure version of HTTP as it encrypts web pages with layer 4 <span>SSL/TLS</span> before it transported over the network. The protocol is therefore also referred to as HTTP over SSL/TLS. HTTPS is used by applications such as the web browser to access web pages.`,
    port:"80/443",
    url:""
  },
  {
    acronym:"FTP",
    meaning:'File transfer protocol',
    transportProtocol:"TCP",
    layer:7,
    description:`FTP is a a standard network protocol used for the transfer of files between a client and server on a network. FTP is built on a client-server model architecture using separate control and data connections between the client and the server. FTP users may authenticate themselves with a clear-text sign-in protocol, normally in the form of a user name and password. FTP is often encrypted with SSL/TLS to protect the user name and password (FTPS) or replaced with SSH File Transfer Protocol (SFTP).`,
    port:"20/21",
    url:""
  },
  {
    acronym:"SMTP",
    meaning:'Simple mail transfer protocol:25',
    transportProtocol:"TCP",
    layer:7,
    description:`The Simple Mail Transfer Protocol (SMTP) is a communication protocol for electronic mail transmission. Mail servers and other message transfer agents use SMTP to send and receive mail messages. Mail servers and other message transfer agencies such as  <span>Microsoft Exchange</span> and <span>Outlook.com, Gmail</span> etc use SMTP to send and receive mail outside their organisation.`,
    port:25,
    url:""
  },
  {
    acronym:"POP3",
    meaning:"Post Office Protocol",
    transportProtocol:"TCP",
    layer:7,
    description:`Used by e-mail clients to retrieve e-mail from a mail server. The Post Office Protocol provides access via an Internet Protocol (IP) network for a user client application to a mailbox (maildrop) maintained on a mail server. The protocol supports download and delete operations for messages. POP3 clients connect, retrieve all messages, store them on the client computer, and finally delete them from the server`,
    port:110,
    url:""
  },
  {
    acronym:"DNS",
    meaning:'Domain Name Server',
    transportProtocol:"TCP &amp; UDP",
    layer:7,
    description:`DNS is a hierarchical and decentralized naming system for computers, services, or other resources connected to the Internet or a private network. It associates various information with domain names assigned to each of the participating entities. Its main responsibility is to translate more readily memorized domain names such as google.com to their numerical IP addresses. This process is analogous to a phone book which resolves names to their phone numbers. Without DNS, you would have to type ip addresses manually to access resources on the web.`,
    port:53,
    url:""
  },
  {
    acronym:"DHCP",
    meaning:'dynamic host configuration protocol',
    transportProtocol:"udp",
    layer:7,
    description:`A <a href="https://en.wikipedia.org/wiki/Dynamic_Host_Configuration_Protocol">DHCP</a> server enables computers to request IP addresses and networking parameters automatically from the Internet service provider (ISP), and dynamically assigns  IP address' and other network configuration parameters to each device on the local network. This reduces the need for a network administrator or a user to manually assign IP addresses to all network devices.`,
    port:"67/68",
    url:""
  },
  {
    acronym:"HTML",
    meaning:'hypertext markup language',
    transportProtocol:"",
    layer:6,
    description:`HTML is the default markup language for structuring documents designed to be <span>displayed in a web browser</span>. HTML is usually accompanied by other web languages such as Cascading Style Sheets (CSS) and scripting languages such as JavaScript which provides other functionality to web pages.`,
    port:"",
    url:""
  },
  {
    acronym:"ASCII",
    meaning:"American Standard Code for Information Interchange",
    transportProtocol:"",
    layer:6,
    description:`ASCII is a character encoding system which converts a 7 bit binary number to represent characters such as alphabets, numbers, symbols (e.g. &?#) and control characters( e.g. return, tab, esc). There is a total of 128 distinct combinations of 1s and 0s With 7 bits ( 2^7=128 ). However, more advanced encoding systems such as UTF-8 allows the addition of non latin characters such as chinese and gujuratti.<a href="https://en.wikipedia.org/wiki/ASCII">ASCII</a>
      <table>
          <caption><b>ASCII and their numerical equivalents:</b></caption>
      <thead>
          <tr><th>Character</th><th>Range</th></tr>
      </thead>
      <tbody><tr><td>0-9</td><td>48-57</td></tr>
      <tr><td>A-Z</td><td>65-90</td></tr>
      <tr><td>a-z</td><td>97-122</td></tr>
      </tbody>
      </table>
`,
    port:"",
    url:""
  },
  {
    acronym:"JPEG",
    meaning:' Joint Photographic Experts Group',
    transportProtocol:"",
    layer:6,
    description:"",
    port:"",
    url:""
  },
  {
    acronym:"SSH",
    meaning:'Secure Shell',
    transportProtocol:"",
    layer:5,
    description:`SSH is a cryptographic network protocol for operating network services securely over an unsecured network. Typical applications include remote command-line login and remote command execution, but any client-serve network service can be secured with SSH. It is usually accessed from the command line and requires authentication with username and password to access services such as Github.`,
    port:22,
    url:""
  },
  {
    acronym:"Telnet",
    meaning:"Telnet",
    transportProtocol:"TCP",
    layer:"5",
    description:`Telnet is considered obsolete and is not installed on newer versions of windows(7 and above) as information is unencrypted. It has been replaced by <span>SSH</span> provides bi-directional interactive text-oriented communication with a virtual termilnal connection over the internet or LAN with TCP via port 23.`,
    port:23,
    url:""
  },
  {
    acronym:"NetBios",
    meaning:'Network Basic Input output system',
    transportProtocol:"TCP &amp; UDP",
    layer:5,
    description:`It allows applications on separate computers to communicate over a local area network for sharing resources such as files and printers...Network Basic Input/Output System allows applications on separate computers to communicate over a  local area network.
        As strictly an API, NetBIOS is not a networking protocol. <br><br>
        In modern networks, NetBIOS normally runs over TCP/IP via the NetBIOS over TCP/IP (NBT) protocol.
        This results in each computer in the network having both an IP address and a NetBIOS name corresponding to a (possibly different) host name`,
    port:"135 &amp; 139",
    url:""
  },
  {
    acronym:"TCP",
    meaning:'Transmition Control Protocol',
    transportProtocol:"",
    layer:4,
    description:"TCP provides reliable, ordered, and error-checked delivery of a stream of octets (bytes) between applications running on hosts communicating via an IP network. Major internet applications such as the World Wide Web, email, remote administration, and file transfer rely on TCP. ",
    port:"",
    url:""
  },
  {
    acronym:"UDP",
    meaning:'User Datagram Protocol',
    transportProtocol:"",
    layer:4,
    description:`UDP can send Segments/Datagrams to other hosts on an IP network without the need for prior communication. It is used when reliability is not an issue such as streaming content. It emphasizes on reduced latency over reliability.`,
    port:"",
    url:""
  },
  {
    acronym:"TLS/SSL",
    meaning:'Transport Layer Security/Secure Socket Layer',
    transportProtocol:"TCP",
    layer:4,
    description:`TLS is a cryptographic protocol designed to provide security over a network.
      There are several versions of the protocol in various applications such as web browsers,
      email, instant messaging, and voice over IP(VoIP).
      Websites can use TLS to secure communication between their servers and web browsers
      read <a href="https://www.jscape.com/blog/ssl-vs-ssh-simplified">this article</a>
      to learn about the differences between TLS and SSH`,
    port:443,
    url:""
  },
  {
    acronym:"IPv4",
    meaning:'Internet Protocol version 4',
    transportProtocol:"",
    layer:3,
    description:`<p>An IPv4 address is a 32-bit numeric
      address written in decimal as four numbers separated by a dot. Each number
      can range between 0 to 255. There are four classes of IP addresses. e.g.
      <span>192.168.1.1</span></p><br>
   <p>There are four classes of IP addresses:<br>
           <div class="ui list">
                   <div class="item">A 0.0.0.0 to 127.255.255.255 0</div>
                   <div class="item">B 128.0.0.0 to 191.255.255.255 10</div>
                   <div class="item">C 192.0.0.0 to 223.255.255.255 110</div>
                   <div class="item">D 224.0.0.0 to 239.255.255.255 1110</div>
           </div>
           </p>
           <br>
        <p style="display:none">A <span>subnetmask</span> is what a router uses to determine whether a packet is destined for a computer on the LAN or whether it is to be forwarded to another computer outside of the LAN.
          Packets destined for a computer on the same network using a class C address will have a subnet mask of <span>255.255.255.0</span> whereas one with <span>255.255.0.0</span> indicates that it is destined for another device outside of the network
        </p>
        <br>
       <p> There is are a maximum of 4,294,967,296 IPv4 addresses.
                Computers on a LAN such as the one you are using use class C ip addresses.</p>`,
    port:"",
    url:""
  },
  {
    acronym:"IPv6",
    meaning:'Internet Protocol version 6',
    transportProtocol:"",
    layer:3
,    description:`
  <p>Ipv6 was  introduced due to the limited number of IPv4 addresses. It is a 128 bits
  written in hexadecimal number consisting of 32 hexadecimal numbers. e.g. <span>FDA3:BBCC:DCEE:0:6166:283F:29EA:5293:</span>
  </p> <br>
  <p>These numbers are grouped in 4's giving 8 groups or blocks. There is over 340 undecillion ipv6 addresses available.
  </p>`,
    port:"",
    url:""
  },
  {
    acronym:"ICMP",
    meaning:'Internet Control Message Protocol',
    transportProtocol:"PING",
    layer:3,
    description:`<p>ICMP is used by network devices such as <span>routers</span> to <span>send error messages and operational information</span> indicating, for example, that a request service is not available or that  a host or router could not be reached.</p><br><p>Unlike TCP and UDP, ICMP isnt typically used to exchange data between systems nor is it employed by end-user network applications with the exception of <span>ping and traceroute</span></p>`,
    port:1,
    url:""
  },
  {
    acronym:"EIGRP",
    meaning:'Enhanced Interior Gateway Routing Protocol',
    transportProtocol:"",
    layer:"3",
    description:`For cisco routers, each router
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
  protocol than a link-state routing protocol.[9][10]<span>&nbsp;</span>...<a href="https://en.wikipedia.org/wiki/Enhanced_Interior_Gateway_Routing_Protocol#Cisco_IOS_example">EIGRP</a> is a routing protocol like <a href="https://en.wikipedia.org/wiki/Open_Shortest_Path_First">OSPF</a>`,
    port:"",
    url:""
  },
  {
    acronym:"IGMP",
    meaning:'Internet Group Management Protocol',
    transportProtocol:"TCP",
    layer:3,
    description:`<p>IGMP is a communications protocol used by hosts and adjacent routers on IPv4 networks to establish multicast group memberships only to hosts that have requested them. IGMP can be used for one-to-many networking applications such as online streaming video and gaming, and allows more efficient use of resources. For IPv6 networks, this is handled by Multicast Listener Discovery (MLD) which is a part of ICMPv6. ICMP hase reached its 3 version however version 2 is the current standard (2021). IGMP supports 3 types of messages:</p>
    <br>
    <ul>
      <li>query 224.0.0.1 message</li>
      <li>membership report message:4.0.0.2</li>
      <li>leave message.</li>
    </ul>
    <p>IGMP is closely linked with PIM</p>
      <span style="display:none">Ip datagram has an ip header(20 bytes and an igmp message( 8 bytes/32 bits) which includes type(8bit): membership query, membership report and leave; max response time(8bit) only used by membership query, and checksum(16 bits) determines the entire payload of the datagram.</font>...IGMP is used by hosts and adjacent routers on IPv4 networks to establish multicast group memberships... That is IGMP will be within the local multicast router and the end host client... then to cross the L3 boundary (eg. a router) protocol like Protocol Independent Multicast (PIM) is then used between the local and remote multicast routers, to direct multicast traffic from the multicast server to many multicast clients.</span>`,
    port:"2",
    url:""
  },
  {
    acronym:"ARP",
    meaning:'Address Resolution Protocol',
    transportProtocol:"",
    layer:2,
    description:`ARP is a crucial communication protocol for mapping a 32-bit dynamic IP address (L3) to a permanent 48bit physical MAC address (L2) and creates a MAC address table within a local area network (LAN)<a href="https://en.wikipedia.org/wiki/Address_Resolution_Protocol">ARP</a>. The functionality of ARP is provided by the Neighbor Discovery Protocol (NDP) in IPv6 networks.`,
    port:3389,
    url:""
  },
  {
    acronym:"ADSL",
    meaning:'Asyncronious Digital Subscriber Line',
    transportProtocol:"",
    layer:1,
    description:`ADSL is a type of digital subscriber line (DSL) technology, a data communications technology that enables faster data transmission over copper telephone lines than a conventional voiceband modem can provide.
         ADSL, bandwidth and bit rate are said to be asymmetric, meaning greater toward the customer premises (downstream) than the reverse (upstream).
        Providers usually market ADSL as a service for consumers for Internet access for primarily downloading content from the Internet, but not serving content accessed by others.`,
    port:"",
    url:""
  },
  {
      acronym:"IEEE 802.2",
      meaning:"Logical Link Control",
      transportProtocol:"",
      layer:2,
      description:`
  <p>LLC is a software component that provides a uniform interface to the user of the data link service, usually the network layer. LLC may offer three types of services:</p>
  <br>
    <ul>
      <li>Unacknowledged connectionless mode services (mandatory)</li>
      <li>Connection mode services (optional)</li>
      <li>Acknowledged connectionless mode services (optional)</li>
    </ul>
    <br>
  <p>  Conversely, the LLC uses the services of the media access control (MAC), which is dependent on the specific transmission medium (Ethernet, Token Ring, FDDI, 802.11, etc.). Using LLC is compulsory for all IEEE 802 networks with the exception of Ethernet.
      </p>    `,
      port:"",
      url:""
    },
  {
    acronym:'IEEE 802.3',
    meaning:"Ethernet",
    transportProtocol:"",
    layer:2,
    description:`is a family of computer networking technologies commonly used in local area networks (LAN), metropolitan area networks (MAN) and wide area networks (WAN).[1] It was commercially introduced in 1980 and first standardized in 1983 as IEEE 802.3, and has since retained a good deal of backward compatibility and been refined to support higher bit rates and longer link distances. Over time, Ethernet has largely replaced competing wired LAN technologies such as Token Ring, FDDI and ARCNET.
          The original 10BASE5 Ethernet uses coaxial cable as a shared medium, while the newer Ethernet variants use twisted pair and fiber optic links in conjunction with switches. Over the course of its history, Ethernet data transfer rates have been increased from the original 2.94 megabits per second (Mbit/s)[2] to the latest 400 gigabits per second (Gbit/s). `,
    port:"",
    url:""
  },
  {
      acronym:'IEEE 802.11',
      meaning:"Wireless",
      transportProtocol:"",
      layer:2,
      description:`802.11 Wi-Fi uses multiple parts of the IEEE 802 protocol family and is designed to seamlessly interwork with its wired sister protocol Ethernet.
                <div class="ui bulleted list">
                  <div class="item"><a href="#">a</a></div>
                  <div class="item"><a href="#">b</a></div>
                  <div class="item"><a href="#">ac</a></div>
                  <div class="item"><a href="#">g</a></div>
                  <div class="item"><a href="#">n</a></div>
                </div>`,
      port:"",
      url:""
    },
  {
    acronym:"Voip",
    meaning:"Voice over Internet Protocol",
    transportProtocol:"",
    layer:"",
    description:`Used to make calls over the internet. used by applications such as <span>skype</span>`,
    port:"",
    url:""
  },
  {
    acronym:"UTF-8",
    meaning:"Unicode Transformation Format – 8-bit.",
    transportProtocol:"",
    layer:6,
    description:`UTF-8 extends ASCII and allows the use of non latin characters such as Chinese and Russian to be used. UTF-8 characters can be as big as 6bytes, ASCII only occupies 7bits. the first few numbers denotes how many bytes the character consists of followd by a 0 which marks the end of the header. it is then followed by the code for the character, the second byte always begins with 10, followed by the rest of the charcode. <br><br>The first four nums in the first one indicate how many bytes are to follow the first nums of each subsequent octet begins with 10=continuation byte chinese uses 3Bytes utf-8 encoding 2Bytes in utf-16`,
    port:"",
    url:""
  },
  {
    acronym:"XML",
    meaning:"Extensible Markup Language (XML) ",
    transportProtocol:"",
    layer:6,
    description:`It is a markup language that defines a set of rules for encoding documents in a format that is both human-readable and machine-readable. It has a similar syntax to HTML. Although the design of XML focuses on documents, the language is widely used for the representation of arbitrary data structures[7] such as those used in web services.`,
    port:"",
    url:""
  },
  {
    acronym:" H.323 for VOIP ",
    meaning:"Voice Over Internet Protocol",
    transportProtocol:"",
    layer:"",
    description:`
                H.323 is an ITU Telecommunication Standardization Sector (ITU-T) recommendation that describes protocols for the provision of audio-visual (A/V) communication sessions on all packet networks. H.323 provides standards for equipment, computers and services for multimedia communication across packet based networks and specifies transmission protocols for real-time video, audio and data details. used by applications such as Skype.
            `,
    port:"",
    url:""
  },
  {
    acronym:"NFS",
    meaning:"Network File System",
    transportProtocol:"",
    layer:"",
    description:`It is a distributed file system protocol allowing a user on a client computer to access files over a computer network much like local storage is accessed.`,
    port:"",
    url:""
  },
  {
    acronym:"RPC",
    meaning:" Remote Procedure Call ",
    transportProtocol:"TCP",
    layer:5,
    description:`RPC is a request–response protocol. An RPC is initiated by the client, which sends a request message to a known remote server to execute a specified procedure with supplied parameters. The remote server sends a response to the client, and the application continues its process. While the server is processing the call, the client is blocked (it waits until the server has finished processing before resuming execution), unless the client sends an asynchronous request to the server, such as an XMLHttpRequest. There are many variations and subtleties in various implementations, resulting in a variety of different (incompatible) RPC protocols...Session-layer services are commonly used in application environments that make use of remote procedure calls (<a href="">RPCs</a>) which is when a computer program causes a procedure (subroutine) to execute in a different address space (commonly on another computer on a shared network), which is coded as if it were a normal (local) procedure call. <span style="display:none">, without the programmer explicitly coding the details for the remote interaction. That is, the programmer writes essentially the same code whether the subroutine is local to the executing program, or remote. </span> Each message is addressed to an RPC daemon listening to a port  on the remote system and each contains an identifier of the function to execute and the parameters to pass to the function. This is a form of client–server interaction (caller is client, executor is server)`,
    port:135,
    url:""
  },
  {
    acronym:"API",
    meaning:"Application Programming Interface ",
    transportProtocol:"",
    layer:"",
    description:`An API is a computing interface which defines interactions between multiple software intermediaries. It defines the kinds of calls or requests that can be made, how to make them, the data formats that should be used, the conventions to follow, etc. `,
    port:"",
    url:""
  },
 {
    acronym:"PIM",
    meaning:"Protocol Independent Multicast",
    transportProtocol:"",
    layer:3,
    description:`
<p>
    (PIM) is a family of
  multicast routing protocols for Internet Protocol (IP) networks that provide
  one-to-many and many-to-many distribution of data over a LAN, WAN or the
  Internet. It is termed protocol-independent because PIM does not include its
  own topology discovery mechanism, but instead uses routing information
  supplied by other routing protocols.<span></p>
<br>
  <p>  After a host has  sent a multicast request with ICMP to the local router, PIM is then used
     between the local and remote multicast routers, to direct multicast traffic
     from hosts sending multicasts to hosts that have registered through IGMP to
     receive them.<span style="display:none"> Pim doesnt care if youre using  rip or ospf. Optimal tree.</span>
     PIM has two modes:
</p>
<br>
<ul>
  <li><span>Dense Mode</span>:Uses a Prune and graft algorithms occures every three minutes affecting performance </li>
  <li><span>Sparse mode</span>:uses shared distribution tree using
  a rendevous point which is more efficient</li>
</ul>
<br>
<p>
  PIM does not build its own routing tables but rather uses the unicast
  routing table for reverse path forwarding. PIM-SM is commonly used
  in IPTV systems for routing multicast streams between VLANs, Subnets or local
  area networks.</p>`,
    port:"",
    url:""
  },
 {
    acronym:"RIP",
    meaning:"Router Information Protocol",
    transportProtocol:"",
    layer:3,
    description:`<p>(RIP) is one of the oldest distance-vector routing protocols which employs the hop count as a routing metric. RIP Determines best path by number of hops which is not always optimal as it disregards other factors such as network traffic congestion and bandwith. RIP can Load balanced when two paths are the same distance. It is a classful protocol so doesnt support Variable LAN Subnet Mask (VLSM).
    </p>
    <br>
    <p>
    RIP broadcast update every 30 seconds. 120 Administrative Distance (AD) with a maximum of 15 hops and anything above 15 hops is unreachable.  This limits the size of networks that RIP can support</p>
    <br>
  <p>  RIP implements the split horizon, route poisoning and holddown mechanisms
    to prevent incorrect routing information from being propagated.<span>&nbsp; </span>Bellman–Ford algorithm and the
    </p>
    <span style="display:none">Ford–Fulkerson algorithm distant-vector routing protocols started to be
      implemented from 1969 onwards in data networks such as the ARPANET and
      CYCLADES.</span>`,
    port:"",
    url:""
  },
 {
    acronym:"OSPF",
    meaning:"",
    transportProtocol:"",
    layer:"",
    description:`Several factors determine best
  path including: category of routing protocol. Adminsistrative distance,
  metric calculatin, timer, load balancing. Etc. Quick to converge but cant
  handle many routes. Each router has the same picture of the network as each
  other. this is done with LSA (Link State Advertisements)<span>&nbsp; </span>keeping it in an LSDB (Database), routers
  exchange their LSDB. Each ahas a RID (Router ID, usually an ip address, can
  be set manually or automatically). It uses <span>Dijkstras algorithm</span>`,
    port:"",
    url:""
  },
 {
    acronym:"BGP",
    meaning:"Border Gateway Protocol",
    transportProtocol:"",
    layer:3,
    description:`<p> BGP determines how routers in Autonomous Systems (AS) communicate, exchange information, what to do with packets, determineS the best path for packets to take. BGP is considered to be the glue which connects service providers and ISPs. BGP Supoports 250,000 routes and growing. it is optimised for scalability rather than convergence time. BGP is currently in its 4 version (2021). BGP suports only 4  Types of messages: </p>
    <br>
  <ul>
  <li>open</li>
         <li>keep alive</li>
         <li>update</li>
         <li>notification</li>
       </ul>
      <span style="display:none">and has 6 protocols uses tcp on port 179</span>
      `,
    port:"179",
    url:""
  },
 {
    acronym:"ATM",
    meaning:"Asynchronous Transfer Mode",
    transportProtocol:"",
    layer:"3",
    description:`A
  telecommunications standard for digital transmission of multiple types of
  traffic, including telephony (voice), data, and video signals in one network
  without the use of separate overlay networks.`,
    port:"",
    url:""
  },
 {
    acronym:"L2TP",
    meaning:"Layer 2 Tunneling Protocol",
    transportProtocol:"",
    layer:"3",
    description:`A tunneling
  protocol used to support virtual private networks (VPNs) or as part of the
  delivery of services by ISPs. It encrypts its own control messages (using an
  optional pre-shared secret), and does not provide any encryption or
  confidentiality of content by itself. Rather, it provides a tunnel for Layer
  2 (which may be encrypted), and the tunnel itself may be passed over a Layer
  3 encryption protocol such as IPsec [1]`,
    port:"",
    url:""
  },
 {
    acronym:"HDLC",
    meaning:"High-Level Data Link Control",
    transportProtocol:"",
    layer:"2",
    description:`is a bit-oriented code-transparent synchronous data link layer protocol used to deliver error-free data to the intended destionation device. it doesnt have a type field, and is router specific, so two different  a cisco router.
  `,
    port:2,
    url:""
  },
 {
    acronym:"PPP",
    meaning:"Point to point Protocol",
    transportProtocol:"",
    layer:2,
    description:`
    <p> PPP bridges routers directly without any intermediary devices. It can provide connection authentication, transmission encryption, and compression. PPP is used over many types of physical networks, including serial cable, phone line, trunk line, cellular telephone, specialized radio links, and fiber optic links. It often employs other protocols such as Password Authentication Protocol (PAP) for authenticating user name and passwords.
    PPP is a layered protocol that has three components:
    </p>
<ul>
<li>An encapsulation component that is used to transmit datagrams over the specified physical layer. </li>
<li>A Link Control Protocol (LCP) to establish, configure, and test the link as well as negotiate settings, options and the use of features. </li>
<li>One or more Network Control Protocols (NCP) used to negotiate optional configuration parameters and facilities for the network layer. There is one NCP for each higher-layer protocol supported by PPP.</li>
</ul>
`,
    port:"",
    url:""
  },
 {
    acronym:"LLDP",
    meaning:"Link layer discovery protocol",
    transportProtocol:"",
    layer:2,
    description:`<p>LLDP is vendor neutral, and is commonly used as a component in network management and network monitoring applications. Information gathered with LLDP can be stored in the device management information base (MIB) and queried with the Simple Network Management Protocol (SNMP) as specified in RFC 2922.</p>
    <p>LLDP performs functions similar to several proprietary protocols, such as Cisco Discovery Protocol, Foundry Discovery Protocol, Nortel Discovery Protocol and Link Layer Topology Discovery.</p>`,
    port:"",
    url:""
  },
 {
    acronym:"CDP ",
    meaning:"Cisco Discovery Protocol",
    transportProtocol:"",
    layer:"2",
    description:`CDP is a Cisco proprietary protocol that support the IEEE 802.1ab version of LLDP, and is primarily used to share information between directly connected Cisco devices.`,
    port:"",
    url:""
  },
 {
    acronym:"IP route",
    meaning:"",
    transportProtocol:"",
    layer:"2",
    description:`This command contains information from the IP routing table that can be used to forward a packet through the best path towards its destination.`,
    port:"",
    url:""
  },
 {
    acronym:"FDB ",
    meaning:"Forwarding database",
    transportProtocol:"",
    layer:2,
    description:`The FDB (forwarding database) table is used by a Layer 2 device (switch/bridge) to store the MAC addresses that have been learned and which ports that MAC address was learned on. A Layer 3 switch performs both the routing and switching in a single device. It will typically have both an ARP and FDB table and it will perform both tasks depending on whether the packet/frame needs to be routed or switched.  This protocol is preferred for discovering switches. `,
    port:"",
    url:""
  },
 {
    acronym:"MLT",
    meaning:"Multi-link trunking Protocol",
    transportProtocol:"",
    layer:"2",
    description:`MLT provides high-speed, fault tolerant connection between servers, switches and routers by grouping all ethernet links into a single logical ethernet link.`,
    port:"",
    url:""
  },
 {
    acronym:"CAN",
    meaning:"Controller area network",
    transportProtocol:"",
    layer:"2",
    description:`CAN facilitates communication between the applications of microcontrollers and their devices without relying on a host computer.`,
    port:"",
    url:""
  },
{
    acronym:"RestAPI",
    meaning:"",
    transportProtocol:"",
    layer:"",
    description:"",
    port:"",
    url:""
  },

  {
    "acronym": "FTP",
    "meaning": "File Transfer Protocol ",
    "description": "It is a protocol that carries data guarantees that data will be delivered properly.",
    "port": "20 and 21",
    "layer": "",
    "url": "",
    "transportProtocol": "TCP"
  },
  {
    "acronym": "SSH",
    "meaning": "Secure Shell ",
    "description": "It is a cryptographic network protocol used to secure data communication.",
    "port": "22",
    "layer": "",
    "url": "",
    "transportProtocol": "TCP and UDP"
  },
  {
    "meaning": "Telnet",
    "description": "It is the used for remote management protocol for managing network devices.",
    "port": "23",
    "layer": "",
    "url": "",
    "transportProtocol": "TCP"
  },
  {
    "acronym": "SMTP",
    "meaning": "Simple Mail Transfer Protocol ",
    "description": "It is a communication protocol which is used to transmit email messages over the internet to the destination server.",
    "port": "25",
    "layer": "",
    "url": "",
    "transportProtocol": "TCP"
  },
  {
    "acronym": "DNS",
    "meaning": "Domian Name System ",
    "description": "It is used in the performance of one simple task of converting IP address\nTo domain names that everyone can easily understand.",
    "port": "53",
    "layer": "",
    "url": "",
    "transportProtocol": "TCP and UDP"
  },
  {
    "acronym": "TFTP",
    "meaning": "Trivial File Transfer Protocol ",
    "description": "TFTP is typically used by devices to upgrade software and firmware and that include cisco.",
    "port": "69",
    "layer": "",
    "url": "",
    "transportProtocol": "UDP"
  },
  {
    "acronym": "HTTP",
    "meaning": "Hyper Text Transfer Protocol ",
    "description": "It is a kind of protocol used to define how data is transmitted and formatted and also used by www as a channel for communication.",
    "port": "80",
    "layer": "",
    "url": "",
    "transportProtocol": "TCP"
  },
  {
    "acronym": "DHCP",
    "meaning": "Dynamic Host Configuration Protocol ",
    "description": "It is a kind of service used in the client and server model.",
    "port": "67 and 68",
    "layer": "",
    "url": "",
    "transportProtocol": "UDP"
  },
  {
    "acronym": "POP3",
    "meaning": "Post Office Protocol 3 ",
    "description": "It is a protocol used by e-mail client to retrieve e-mail from  the servers.",
    "port": "110",
    "layer": "",
    "url": "",
    "transportProtocol": "TCP"
  },
  {
    "acronym": "NNTP",
    "meaning": "Network News Transport Protocol ",
    "description": "nntp is an application protocol used for transporting USENET news articles between news servers and the end user client.",
    "port": "119",
    "layer": "",
    "url": "",
    "transportProtocol": "TCP"
  },
  {
    "acronym": "NTP",
    "meaning": "Network Time Protocol ",
    "description": "It is the synchronization of time between network devices in the network.",
    "port": "123",
    "layer": "",
    "url": "",
    "transportProtocol": "UDP"
  },
  {
    "meaning": "NetBIOS",
    "description": "NetBIOS itself is not a protocol but is typically used in combination with IP with the NetBIOS over TCP/IP protocol.",
    "port": "135 and 139",
    "layer": "",
    "url": "",
    "transportProtocol": "TCP and UDP"
  },
  {
    "acronym": "SNMP",
    "meaning": "Simple Network Management Protocol ",
    "description": "It has the ability to monitor, configure and control network devices.",
    "port": "161 and 162",
    "layer": "",
    "url": "",
    "transportProtocol": "TCP and UDP"
  },
  {
    "meaning": "Lightweight Directory Access Protocol",
    "description": "LDAP provides a mechanism of accessing and maintaining distributed directory information.",
    "port": "389",
    "layer": "",
    "url": "",
    "transportProtocol": "TCP and UDP"
  },
  {
    "acronym": "TLS",
    "meaning": "Transport Layer Security ",
    "description": "It is a protocol of a secured socket layer that uses asymmetric keys to transfer data over a network.",
    "port": "443",
    "layer": "",
    "url": "",
    "transportProtocol": "TCP"
  },
  {
    "acronym": "RTP",
    "meaning": "Real-Time Transport Protocol",
    "description": "It is used for delivering audio and video data over an IP network.",
    "port": "1023 TO 65535",
    "layer": "",
    "url": "",
    "transportProtocol": "UDP"
  },
  {
    "acronym": "HTTPS",
    "meaning": "Hyper Text Transfer Protocol Secure",
    "description": "It renders authentication and encryption that provides secure communication with the use of secure socket layer.",
    "port": "443",
    "layer": "",
    "url": "",
    "transportProtocol": "TCP"
  },
  {
    "acronym": "IMAP4",
    "meaning": "Internet Message Access Protocol",
    "description": "It is an application layer protocol and an internet standards for e-mail retrieval.",
    "port": "143",
    "layer": "",
    "url": "",
    "transportProtocol": "TCP and UDP"
  },
  {
    "acronym": "ARP",
    "meaning": "Address Resolution Protocol ",
    "description": "It is used to resolve the network layer address into the link address.",
    "port": "3389",
    "layer": "",
    "url": "",
    "transportProtocol": "TCP"
  },
  {
    "acronym": "BGP",
    "meaning": "Border Gateway Protocol ",
    "description": "It is used to maintain very large routing tables and traffic processing.",
    "port": "179",
    "layer": "",
    "url": "",
    "transportProtocol": "TCP"
  },
  {
    "acronym": "IRC",
    "meaning": "Internet Relay Chat ",
    "description": "It is an application layer protocol that facilitate communication in the form of text.",
    "port": "194",
    "layer": "",
    "url": "",
    "transportProtocol": "UDP"
  },
  {
    "acronym": "SLP",
    "meaning": "Session Initiation Protocol",
    "description": "It is used to establish, modify, and terminate multimedia communication session such as VoIP.",
    "port": "",
    "layer": "",
    "url": "",
    "transportProtocol": "TCP and UDP"
  },
  {
    "acronym": "SDP",
    "meaning": "Session Description Protocol",
    "description": "It describes the content of multimedia communication.",
    "port": "",
    "layer": "",
    "url": "",
    "transportProtocol": "TCP"
  },
  {
    "acronym": "RDP",
    "meaning": "Remote Desktop Protocol",
    "description": "It provides a user with a graphical interface to connect to another computer over a network connection.",
    "port": "3389",
    "layer": "",
    "url": "",
    "transportProtocol": "TCP"
  },
  {
    "acronym": "SMB",
    "meaning": "Server Message Block ",
    "description": "It is an application layer protocol that helps in accessing network resources, such as shared files and printers.",
    "port": "",
    "layer": "",
    "url": "",
    "transportProtocol": "TCP"
  },
  {
    "acronym": "SFTP",
    "meaning": "Secure File Transfer Protocol ",
    "description": "It uses the SSH protocol to access and transfer file over the network.",
    "port": "22",
    "layer": "",
    "url": "",
    "transportProtocol": "TCP and UDP"
  },
  {
    "acronym": "IGMP",
    "meaning": "Internet Group Management Protocol ",
    "description": "It is a communication protocol used by hosts and adjacent routers on IPv4 network to establish multicast group membership.",
    "port": "2",
    "layer": "",
    "url": "",
    "transportProtocol": "TCP"
  },
  {
    "acronym": "RAP",
    "meaning": "Route Access Protocol ",
    "description": "",
    "port": "38",
    "layer": "",
    "url": "",
    "transportProtocol": "TCP"
  },
  {
    "acronym": "RLP",
    "meaning": "Resource Location Protocol ",
    "description": "It is used for determining the location of higher level service from host on a network.",
    "port": "39",
    "layer": "",
    "url": "",
    "transportProtocol": "TCP"
  },
  {
    "acronym": "HNSP",
    "meaning": "Host Name Server Protocol ",
    "description": "",
    "port": "42",
    "layer": "",
    "url": "",
    "transportProtocol": "TCP"
  },
  {
    "acronym": "ICMP",
    "meaning": "Internet Control Messages Protocol ",
    "description": "It is used by a ping utility to check the reachability the device in a network.",
    "port": "1",
    "layer": "",
    "url": "",
    "transportProtocol": "PING"
  },
  {
    "acronym": "RDAS",
    "meaning": "Remote Directory Access Protocol ",
    "description": "It is used retrieves information about domain names from a central registry.",
    "port": "",
    "layer": "",
    "url": "",
    "transportProtocol": "TCP"
  },
  {
    "acronym": "LPP",
    "meaning": "Lightweight Presentation Protocol ",
    "description": "It is describe an approach for providing stream lined support of  OSI application services on top of TCP/IP –based network for some constrained environment.",
    "port": "",
    "layer": "",
    "url": "",
    "transportProtocol": "TCP and UDP"
  },
  {
    "acronym": "RPC",
    "meaning": "Remote Procedure Call Protocol ",
    "description": "It is a protocol for requesting a service from a program location in a remote computer through a network.",
    "port": "",
    "layer": "",
    "url": "",
    "transportProtocol": "TCP and UDP"
  },
  {
    "acronym": "NAT",
    "meaning": "Network Address Translation ",
    "description": "It is the method by which IP addresses are mapped from one group to another, transparent to end users.",
    "port": "3022",
    "layer": "",
    "url": "",
    "transportProtocol": "TCP and UDP"
  },
  {
    "acronym": "MADP",
    "meaning": "Microsoft Active Directory Protocol ",
    "description": "it is used by Microsoft server operating systems for client/server access and file and printer sharing.",
    "port": "445",
    "layer": "",
    "url": "",
    "transportProtocol": "TCP"
  },
  {
    "acronym": "CAP",
    "meaning": "Calender Access Protocol ",
    "description": "It is used by Novell GroupWise for its calendar access protocol and also used by windows task scheduler.",
    "port": "1026",
    "layer": "",
    "url": "",
    "transportProtocol": "TCP"
  },
  {
    "acronym": "L2TP",
    "meaning": " Layer Two Tunneling Protocol",
    "description": "It is used to connect two private business network together over an internet connection to create a virtual network.",
    "port": "1701",
    "layer":5 ,
    "url": "",
    "transportProtocol": "TCP"
  },
  {
    "acronym": "PPTP",
    "meaning": "Point To Point Tunneling Protocol ",
    "description": "A tunneling and encryption standard is used to connect two private business network together over an internet connection to create a virtual network.",
    "port": "1732",
    "layer": "",
    "url": "",
    "transportProtocol": "TCP"
  },
  {
    "acronym": "RPC",
    "meaning": "Remote Procedure Call ",
    "description": "It holds information regarding which ports and IP addresses the services are currently running .",
    "port": "135",
    "layer": "",
    "url": "",
    "transportProtocol": "TCP"
  },

{
    acronym:"PAP",
    meaning:"Password Authentication Protocol",
    transportProtocol:"",
    layer:5,
    description:"",
    port:"",
    url:""
  },
{
    acronym:"ZIP",
    meaning:"Zone Informaiton Protocol",
    transportProtocol:"",
    layer:5,
    description:"",
    port:"",
    url:""
  },
{
    acronym:"L2FP",
    meaning:"Layer 2 Forwarding Protocol",
    transportProtocol:"",
    layer:5,
    description:"",
    port:"",
    url:""
  },
{
    acronym:"SPX",
    meaning:"Sequenced Packet Exchange",
    transportProtocol:"",
    layer:4,
    description:"",
    port:"",
    url:""
  },
{
    acronym:"SST",
    meaning:"Structured Stream Transport",
    transportProtocol:"",
    layer:4,
    description:"",
    port:"",
    url:""
  },
{
    acronym:"SCTP",
    meaning:"Stream Control Transmission Protocol",
    transportProtocol:"",
    layer:4,
    description:"",
    port:"",
    url:""
  },
{
    acronym:"FCP",
    meaning:"Fiber Channel Protocol",
    transportProtocol:"",
    layer:"",
    description:"",
    port:"",
    url:""
  },
{
    acronym:"IL",
    meaning:"",
    transportProtocol:"",
    layer:"4",
    description:"",
    port:"",
    url:""
  },
{
    acronym:"",
    meaning:"",
    transportProtocol:"",
    layer:"",
    description:"",
    port:"",
    url:""
  }
]



// window.addEventListener('DOMContentLoaded',()=>{



// })

// window.onload=function(){
//   for(let i in osi){
//     init(osi[i])
//   }
// }

// const osi=[]

// //2 CONSTRUCTORS
// const Protocol=(protocol,meaning,details="Requires Updating")=>{
//   return {
//     protocol,
//     meaning,
//     details
//   }
// }

// const Layer=(name,url="",protocols,explanation="",pdu)=>{
//   return (
//     {
//       name,
//       protocols,
//       url,
//       explanation,
//       pdu
//     }
//   )
// }

// // 3 ADD THE LAYERS TO THE DOM
// function init(el){
//   this.name=el.name;
//   this.protocols=el.protocols;
//   this.url=el.url;
//   this.explanation=el.explanation
//   this.pdu=el.pdu

//   // echo(this.url)
// //   console.log(this.name+""+this.url);

//   let layer=$('<tr>')
//   //1.1


//   let layerName=$('<td>').append($('<a>',{
//     href:this.url
//   }).html(this.name))

//   let cards=$('<td>',{
//     class:"grid"
//   });


//   //1.2
//   let explanation=$('<td>').html(`<div>${this.explanation}</div>`)

//   //1.3 card creator
//   //the card has front, back and meaning
//   for(let i in this.protocols){

//     let front=$('<div>',{
//       class:"front"
//     }).html(this.protocols[i].protocol)

//     let back=$('<div>',{
//       class:"back"
//     }).html(this.protocols[i].meaning)

//     let details=$('<div>',{
//       class:"details hidden"
//     }).html(this.protocols[i].details)

//     let card=$('<div>',{
//       class:"card"
//     }).append([front,back,details]);

//     let cardWrapper=$('<div>',{
//       class:"card-wrapper"
//     }).append(card)

//     cards.append(cardWrapper);
//   }

//   //1.4
//   let pdu=$('<td>').html(`<p>${this.pdu}</p>`)

//   layer.append([layerName, explanation,cards,$('<td>'),pdu])

//   $('tbody').append(layer)

// }



// //4 CREATE OSI LAYERS
// //Each layer has the following
// //Layer Name with URL to wiki
// // Protocol cards(has: acronym, acronym meaning and explanation which is hidden),
// // Purpose,
// // Units
// //this creates and adds the layers to the osi array

// osi.push(
//   Layer(
//     'Application',
//     "https://en.wikipedia.org/wiki/Application_layer",
//     [
//       Protocol(
//         'HTTPS',
//         'Hypertext transport protocol secure : 80',
//         `HTTPS (aka HTTP over TLS) is a secure version of HTTP which transports and encrypts web pages written in <span>HTML</span> over a network with <<span></span>>TLS</span>(Trasport Layer Security)</span>.`
//       ),

//       Protocol(
// 	'FTP',
//         'File transfer protocol 21',
//         `File Transfer Protocol is used to <span>transfer files</span> between a client and a server. <span>Authentication</span> is usually done with a <span>user name</span> and <span>password</span>, but can connect anonymously if the server is configured to allow it. FTP is often <span>secured with TLS</span> in order to protect username and password`
//       ),

//       Protocol(
//         'SMTP',
//         'Simple mail transfer protocol:25',
//         `Simple Mail Transfer Protocol deals with <span>mail tranmission</span>. Mail servers and other message transfer agencies such as  <span>Microsoft Exchange</span> and <span>Outlook.com, Gmail</span> etc use SMTP to send and receive mail outside their organisation. It uses <span>TCP on port 25</span>`
//       ),

//       Protocol('POP3','Post Office Protocol : 110'),

//       Protocol(
//         'DNS',
//         'domain name server',
//         `<a href="">DNS</a> is a hierarchical and decentralised naming system for computers,
//          services or other resources connected to the Internet or a private network.
//         It translates memorised domain names to a numerical IP addresses for locating and
//         Identifying computer servers and devices.`
//       ),

//       Protocol(
//         'DHCP',
//         'dynamic host configuration protocol',
//         `<a href="https://en.wikipedia.org/wiki/Dynamic_Host_Configuration_Protocol">DHCP</a> is a network managemt protocol used on <span>UDP/IP</span> networks to assigns an IP address and other network configuration parameters to each device
//         on a network in order to communicate with other IP networks.<br><br>
//         It enables a computer to <span>request IP addresses and network parameters automatically from the ISP</span>, eliminating the need to do so manually`
//       ),
//       // Protocol('rip','Routing Information Protocol'),
// 	// other protocols: SMB, NCP
//    ],
//     `<p>Serves as the window for users and application processes to access network services. It is involved in: </p>
//       <div class="ui list">
//       <div class="item">resourse sharing</div>
//       <div class="item">remote file & printer access</div>
//       <div class="item">Directory services</div>
//       <div class="item">Network management</div>
//       </div>`,
//   "Data"
//   )
// )

// osi.push(
//   Layer(
//     'Presentation',
//     "https://en.wikipedia.org/wiki/Presentation_layer",
//     [
//       Protocol(
//         'html',
//         'hypertext markup language',
//         `HTML is the standard markup language for documents designed to be <span>displayed in a web browser</span>.
//         It can be assisted by technologies such as Cascading Style Sheets <span>(CSS)</span> and scripting languages such as
//         <span>JavaScript</span>.`
//       ),
//       Protocol(
//         'ascii',
//         '<div>american standard code for information interchange</div><div>1963</div>',
//         `<a href="https://en.wikipedia.org/wiki/ASCII">ASCII</a> is a character encoding standard for electronic communication. It uses 7bits to represent a maximum of 2^7=128 characters such as:

//         <div class="ui list">
//                 <div class="item"><span>letters</span>:[a-z A-Z]</div>
//                 <div class="item"><span>numbers</span>:[0-9]</div>
//                 <div class="item"><span>symbols</span>:[&?#$...]</div>
//         </div>

//         <p>128 characters is quite limited, so most modern character-encoding schemes such as <span>UTF-8</span> are built on top of ASCII to include more characters such as chinese and russian </p>`
//       ),
//       Protocol('jpeg',' Joint Photographic Experts Group'),
//       // Protocol('XML','extensible markup language'),
//       // Protocol('utf-8 ',' Unicode Transformation Format 8 bits'),
// 	//NCP
//    ],
//     `<p>It translates the data format (ASCII, Jpg, etc) into binary and vice versa so that it can be understood by the application/transported over the copper wire(physcal layer) as electrical impulses.
//      It can also convert one character set into another such as ASCII to <span>EBCDIC</span>.</p>

//       <div class="ui list"><div class=item>Translates() </div>
//          <div class=item>Conversion</div>
//          <div class=item>Encryption</div>
//          <div class=item>Compression</div>
//       </div>`,
//   "Data"
//   )
// )

// osi.push(
//   Layer(
//     'Session',
//     "https://en.wikipedia.org/wiki/Session_layer",

//     [
//       Protocol(
//         'SSH',
//         'Secure Shell:22',
//         `SSH is a cryptographic network protocol for operating network services securely over an unsecured network. Typical applications include remote command-line login and remote command execution, but any client-serve network service can be secured with SSH.`
//       ), //secure telnet

//       Protocol(
//         'telnet',
//         'telnet:23',
//         `Telnet is considered obsolete and is not installed on newer versions of windows(7 and above) as information is unencrypted. It has been replaced by <span>SSH</span> provides bi-directional interactive text-oriented communication with a virtual termilnal connection over the internet or LAN with TCP via port 23.`
//       ),//this protocol is used to establish a connection to Transmission Control Protocol (TCP) port number 23,

//       Protocol(
//         'netbios',
//         'Network Basic Input output system',
//         `Network Basic Input/Output System allows applications on separate computers to communicate over a  local area network.
//         As strictly an API, NetBIOS is not a networking protocol. <br><br>
//         In modern networks, NetBIOS normally runs over TCP/IP via the NetBIOS over TCP/IP (NBT) protocol.
//         This results in each computer in the network having both an IP address and a NetBIOS name corresponding to a (possibly different) host name`
//       ),
//       // Protocol('SQL','Structured Query Language'),
//       // Protocol('nfs','hypertexttransport'),
//       // Protocol('zip','file transfer protocol'),
//       // Protocol('socket','file transfer protocol'),
// 	//other: Named Pipes
//    ],

//     `Session layer is important for connecting processeses running on diffrent stations over a network.  Involved in: <br>
//     <div class="ui list">
//         <div class="item">Establish maintain and termination of connections</div>
//         <div class="item">Session support</div>
//         <div class="item">Security</div>
//         <div class="item">Logging</div>
//     </div>`,
//     "Data"
//   )
// )
// osi.push(
//   Layer(
//     'Transport',
//     "https://en.wikipedia.org/wiki/Transport_layer",
//     [
//       Protocol(
//         'tcp',
//         'Transmition Control Protocol',
//         "TCP provides reliable, ordered, and error-checked delivery of a stream of octets (bytes) between applications running on hosts communicating via an IP network. Major internet applications such as the World Wide Web, email, remote administration, and file transfer rely on TCP. "
//       ),

//       Protocol(
//         'udp',
//         'User Datagram Protocol',
//         `UDP can send Segments/Datagrams to other hosts on an IP network without the need for prior communication. It is used when reliability is not an issue such as streaming content. It emphasizes on reduced latency over reliability.`
//       ),

//       Protocol(
//       'TLS/SSL',
//       'Transport Layer Security/Secure Socket Layer',
//       `TLS is a cryptographic protocol designed to provide security over a network.
//       There are several versions of the protocol in various applications such as web browsers,
//       email, instant messaging, and voice over IP(VoIP).
//       Websites can use TLS to secure communication between their servers and web browsers
//       read <a href="https://www.jscape.com/blog/ssl-vs-ssh-simplified">this article</a>
//       to learn about the differences between TLS and SSH`

//       // When you compare their security attributes, you'll find that SSH and SSL have very strong similarities. They both offer data-in-motion encryption, server authentication, client authentication, and data integrity mechanisms.
//       ),
//      //spans the session, presentation and application layer
//       // Protocol('nwlink','Network Link'),
//       // Protocol('spx','file transfer protocol'),
//       // Protocol('rtcp','file transfer protocol'),
//       // Protocol('srtp','file transfer protocol'),
// 	// other:NetBEUI
//     ],
//   `Ensures that messages are delivered error-free, in sequence and with no losses of duplications. This layer It is involved in:<br>
// <div class="ui list">
//   <div class="item">message segmentation</div>
//   <div class="item">traffic control</div>
//   <div class="item">multiplexing</div>
// </div>
//   `,
//   "Segment"
//   )
// )

// osi.push(
//   Layer(
//     'Network',
//     "https://en.wikipedia.org/wiki/Network_layer",
//     [
//       Protocol(
//         'ipv4',
//         'Internet Protocol version 4',
//         `An IP address is a 32-bit numeric address written in decimal as four numbers separated by periods. Each number can be zero to 255.

//         There are four classes of IP addresses:<br>
//         <div class="ui list">
//                 <div class="item">A 0.0.0.0 to 127.255.255.255 0</div>
//                 <div class="item">B 128.0.0.0 to 191.255.255.255 10</div>
//                 <div class="item">C 192.0.0.0 to 223.255.255.255 110</div>
//                 <div class="item">D 224.0.0.0 to 239.255.255.255 1110</div>
//         </div>
//         <p>A <span>subnetmask</span> is what a router uses to determine whether a packet is destined for a computer on the LAN or whether it is to be forwarded to another computer outside of the LAN.
//           Packets destined for a computer on the same network using a class C address will have a subnet mask of <span>255.255.255.0</span> whereas one with <span>255.255.0.0</span> indicates that it is destined for another device outside of the network
//         </p>
//         <p>
//         There is are a maximum of 4,294,967,296 IPv4 addresses.
//          Computers on a LAN such as the one you are using use class C ip addresses.
//         </p>`
//       ),
//       Protocol(
//         'ipv6',
//         'Internet Protocol version 6',
//         `Ipv6 is a 128 bits written in hexadecimal number consisting of 32 hexadecimal numbers. These numbers are grouped in 4's giving 8 groups or blocks.
//         There is over 340 undecillion ipv6 addresses available`
//       ),

//       Protocol(
//         'icmp',
//         'Internet Control Message Protocol',
//         `ICMP is used by network devices, including <span>routers</span> to <span>send error messages and operational information</span> indicating, for example, that a request service is not available or that  a host or router could not be reached.
//          Unlike TCP and UDP, ICMP isnt typically used to exchange data between systems nor is it employed by end-user network applications with the exception of <span>ping and traceroute</span>`
//       ),

//       Protocol('icmpv6','Internet Control Message Protocol version 6'),
//       Protocol(
// 		'eigrp',
// 		'Enhanced Interior Gateway Routing Protocol',
// 		`<a href="https://en.wikipedia.org/wiki/Enhanced_Interior_Gateway_Routing_Protocol#Cisco_IOS_example">EIGRP</a> is a routing protocol like <a href="https://en.wikipedia.org/wiki/Open_Shortest_Path_First">OSPF</a>`
// 		),
//       Protocol(
//         'igmp',
//         'Internet Group Management Protocol',
//         `IGMP is used by hosts and adjacent routers on IPv4 networks to establish multicast group memberships...
//         That is IGMP will be within the local multicast router and the end host client...
//         then to cross the L3 boundary (eg. a router) protocol like Protocol Independent Multicast (PIM) is then used between the local and remote multicast routers,
//         to direct multicast traffic from the multicast server to many multicast clients.`
//       ),//Yes IGMP is L3 ,
//       // Protocol('ipsec','file transfer protocol'),
//       // Protocol('ipx','file transfer protocol'),
//       // Protocol('ecn','file transfer protocol')
//    ],
//     "Controls the operations of the subnet, deciding which physical path the data takes"+
// 	"Routing, Subnet traffic control, frame segmentation, Logical physical address mapping. subnet usage accounting",
//   "Packet"
//   )
// )

// osi.push(
//   Layer(
//     'Data Link<div>LLC</div><div>MAC</div>',
//     "https://en.wikipedia.org/wiki/Data_link_layer",
//     [
//       // Protocol('rarp','Reverse Address Resolution Protocol'),
//       // Protocol('ndp','Neighbor Discovery Protocol'),
//       // Protocol('atm','Asynchronous transfer mode 53 bytes'),
//       // Protocol('PPPoE','Point-to-Point Protocol over Ethernet'),
//      Protocol(
//       'arp',
//       'Address Resolution Protocol',
//       `<a href="https://en.wikipedia.org/wiki/Address_Resolution_Protocol">ARP</a> is a crucial communication protocol used for discovering the link layer address, such as a MAC address and its associated IP address by creating a MAC address table`
//      ),//arp
//      Protocol(
//         'llc',
//         'Logic Link Control',
//         `The LLC is the upper sublayer of the LLC which acts as an <span>interface</span> between the <span>MAC</span> sublayer and the <span>network layer</span>. It provides the following services: <br>

//         <div class="ui list">
//                 <div class="item"><a href="https://en.wikipedia.org/wiki/Automatic_repeat_request">ARQ</a> <span>(automatic repeat request)</span>, </div>
//                 <div class="item"><span>Frame flow control</span> </div>
//                 <div class="item"><span>error management</span></div>
//                 <div class="item"><span>multiplexing</span> </div>
//         </div>
//         Multiplexing makes it possible for several network protocols (e.g. IP, IPX, Decnet and Appletalk) to coexist within a multipoint network and to be transported over the same network medium.<br>
//         `
//      ),//arp
//      Protocol(
//      'mac',
//      'Media Access Controller',
//      `<a href="https://en.wikipedia.org/wiki/Medium_access_control">MAC</a> is the lower sublayer of the DLL. It is responsible for the transmission of data packets to and from the <a href="">NIC</a>,
//       and to and from another remotely shared channel. It also flow control and multiplexing for the transmission medium. The MAC address is a unique 48-bit binary address written in hexadecimal notation.
// 	a computer will attempt to accept a packet if the MAC address in it's header matches it's own MAC address
// 	`
//      ),//arp
//    ],
//     `Provides error-free transfer of data frames from one node to another over the physical layer. it performs the following functions:<br>
//      <div class="ui bulleted list">
//           <div class="item ">Establishes and terminates the logical link between nodes </div>
//           <div class="item">frames traffic control</div>
//           <div class="item">frames sequencing</div>
//           <div class="item">frame acknowledgement</div>
//           <div class="item">frame delimiting</div>
//           <div class="item">frame error checking</div>
//           <div class="item">Media access control</div>
//           <div class="item">NIC -switche-NIC </div>
//      </div>
//      `,
//   "Frame"
//   )
// )

// osi.push(
//   Layer(
//     'Physical',
//     "https://en.wikipedia.org/wiki/Physical_layer",
//     [
//       Protocol(
//         'isdn (obsolete)',
//         'Integrated Services Digital Network',
//         `ISDN (obsolete)is a set of communication standards for simultaneous digital transmission of voice, video, data, and other network services over the traditional circuits of the public switched telephone network.
//         The key feature of ISDN is that it integrates speech and data on the same lines, adding features that were not available in the classic telephone system.
//         The ISDN standards define several kinds of access interfaces, such as Basic Rate Interface (BRI), Primary Rate Interface (PRI), Narrowband ISDN (N-ISDN), and Broadband ISDN (B-ISDN).`
//       ),//spans the bottom three layers
//       Protocol(
//         'adsl',
//         'Asyncronious Digital Subscriber Line',
//         `ADSL is a type of digital subscriber line (DSL) technology, a data communications technology that enables faster data transmission over copper telephone lines than a conventional voiceband modem can provide.
//          ADSL, bandwidth and bit rate are said to be asymmetric, meaning greater toward the customer premises (downstream) than the reverse (upstream).
//         Providers usually market ADSL as a service for consumers for Internet access for primarily downloading content from the Internet, but not serving content accessed by others.`
//         ),
//       Protocol('cat5/6','Category 5/6 cables'),
//       Protocol('rj11/45','Registered Jack phone/networking'),
//       Protocol(
//         'IEEE 802.11',
//         'wireless',
//         `802.11 Wi-Fi uses multiple parts of the IEEE 802 protocol family and is designed to seamlessly interwork with its wired sister protocol Ethernet.
//               <div class="ui bulleted list">
//                 <div class="item"><a href="#">a</a></div>
//                 <div class="item"><a href="#">b</a></div>
//                 <div class="item"><a href="#">ac</a></div>
//                 <div class="item"><a href="#">g</a></div>
//                 <div class="item"><a href="#">n</a></div>
//               </div>`
//         ),
//       Protocol(
//         'IEEE 802.3',
//         'Ethernet',
//         `is a family of computer networking technologies commonly used in local area networks (LAN), metropolitan area networks (MAN) and wide area networks (WAN).[1] It was commercially introduced in 1980 and first standardized in 1983 as IEEE 802.3, and has since retained a good deal of backward compatibility and been refined to support higher bit rates and longer link distances. Over time, Ethernet has largely replaced competing wired LAN technologies such as Token Ring, FDDI and ARCNET.
//           The original 10BASE5 Ethernet uses coaxial cable as a shared medium, while the newer Ethernet variants use twisted pair and fiber optic links in conjunction with switches. Over the course of its history, Ethernet data transfer rates have been increased from the original 2.94 megabits per second (Mbit/s)[2] to the latest 400 gigabits per second (Gbit/s). `
//         ),
//    ],
//    `Transmission and reception of raw bit streams (electrical impulses representing binary) over a physical medium. It therefore converts binary to electrical impulses to be sent out, and converts the recieved electrical impulses into binary to be sent to the upper layers`,
//    "Bits"
//   )
// )


// //5 EVENTS
// //not working anymore
// $(document).ready(function(){
//   // $('.card').on('click',function(){

//     // $(document).on('click','.card',function(){
//     // // let details=$(this).children('.details').val();
//     // let details=$(this).children('.details').html();
//     // $(this).parent().next('td').html(details);
//     // // alert('hello')
//     // })
//     $(document).on('click','.card-wrapper',function(){
//     // let details=$(this).children('.details').val();
//     let details=$(this).children('.card').children('.details').html();
//     // echo(details);
//     $(this).parent().next('td').html(details);
//     // alert('hello')
//     })


// })



// function echo (el){
//   console.log(el);
// }

