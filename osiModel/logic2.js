window.onload=function(){
  for(let i in osi){
    init(osi[i])
  }
}

const osi=[]

//2 CONSTRUCTORS
const Protocol=(protocol,meaning,details="Requires Updating")=>{
  return {
    protocol,
    meaning,
    details
  }
}

const Layer=(name,url="",protocols,explanation="",pdu)=>{
  return (
    {
      name,
      protocols,
      url,
      explanation,
      pdu
    }
  )
}

// 3 ADD THE LAYERS TO THE DOM
function init(el){
  this.name=el.name;
  this.protocols=el.protocols;
  this.url=el.url;
  this.explanation=el.explanation
  this.pdu=el.pdu

  // echo(this.url)
//   console.log(this.name+""+this.url);

  let layer=$('<tr>')
  //1.1


  let layerName=$('<td>').append($('<a>',{
    href:this.url
  }).html(this.name))

  let cards=$('<td>',{
    class:"grid"
  });


  //1.2
  let explanation=$('<td>').html(`<div>${this.explanation}</div>`)

  //1.3 card creator
  //the card has front, back and meaning
  for(let i in this.protocols){

    let front=$('<div>',{
      class:"front"
    }).html(this.protocols[i].protocol)

    let back=$('<div>',{
      class:"back"
    }).html(this.protocols[i].meaning)

    let details=$('<div>',{
      class:"details hidden"
    }).html(this.protocols[i].details)

    let card=$('<div>',{
      class:"card"
    }).append([front,back,details]);

    let cardWrapper=$('<div>',{
      class:"card-wrapper"
    }).append(card)

    cards.append(cardWrapper);
  }

  //1.4
  let pdu=$('<td>').html(`<p>${this.pdu}</p>`)

  layer.append([layerName, explanation,cards,$('<td>'),pdu])

  $('tbody').append(layer)

}



//4 CREATE OSI LAYERS
//Each layer has the following
//Layer Name with URL to wiki
// Protocol cards(has: acronym, acronym meaning and explanation which is hidden),
// Purpose,
// Units
//this creates and adds the layers to the osi array

osi.push(
  Layer(
    'Application',
    "https://en.wikipedia.org/wiki/Application_layer",
    [
      Protocol(
        'HTTPS',
        'Hypertext transport protocol secure : 80',
        `HTTPS (aka HTTP over TLS) is a secure version of HTTP which transports and encrypts web pages written in <span>HTML</span> over a network with <<span></span>>TLS</span>(Trasport Layer Security)</span>.`
      ),

      Protocol(
	'FTP',
        'File transfer protocol 21',
        `File Transfer Protocol is used to <span>transfer files</span> between a client and a server. <span>Authentication</span> is usually done with a <span>user name</span> and <span>password</span>, but can connect anonymously if the server is configured to allow it. FTP is often <span>secured with TLS</span> in order to protect username and password`
      ),

      Protocol(
        'SMTP',
        'Simple mail transfer protocol:25',
        `Simple Mail Transfer Protocol deals with <span>mail tranmission</span>. Mail servers and other message transfer agencies such as  <span>Microsoft Exchange</span> and <span>Outlook.com, Gmail</span> etc use SMTP to send and receive mail outside their organisation. It uses <span>TCP on port 25</span>`
      ),

      Protocol('POP3','Post Office Protocol : 110'),

      Protocol(
        'DNS',
        'domain name server',
        `<a href="">DNS</a> is a hierarchical and decentralised naming system for computers,
         services or other resources connected to the Internet or a private network.
        It translates memorised domain names to a numerical IP addresses for locating and
        Identifying computer servers and devices.`
      ),

      Protocol(
        'DHCP',
        'dynamic host configuration protocol',
        `<a href="https://en.wikipedia.org/wiki/Dynamic_Host_Configuration_Protocol">DHCP</a> is a network managemt protocol used on <span>UDP/IP</span> networks to assigns an IP address and other network configuration parameters to each device
        on a network in order to communicate with other IP networks.<br><br>
        It enables a computer to <span>request IP addresses and network parameters automatically from the ISP</span>, eliminating the need to do so manually`
      ),
      // Protocol('rip','Routing Information Protocol'),
	// other protocols: SMB, NCP
   ],
    `<p>Serves as the window for users and application processes to access network services. It is involved in: </p>
      <div class="ui list">
      <div class="item">resourse sharing</div>
      <div class="item">remote file & printer access</div>
      <div class="item">Directory services</div>
      <div class="item">Network management</div>
      </div>`,
  "Data"
  )
)

osi.push(
  Layer(
    'Presentation',
    "https://en.wikipedia.org/wiki/Presentation_layer",
    [
      Protocol(
        'html',
        'hypertext markup language',
        `HTML is the standard markup language for documents designed to be <span>displayed in a web browser</span>.
        It can be assisted by technologies such as Cascading Style Sheets <span>(CSS)</span> and scripting languages such as
        <span>JavaScript</span>.`
      ),
      Protocol(
        'ascii',
        '<div>american standard code for information interchange</div><div>1963</div>',
        `<a href="https://en.wikipedia.org/wiki/ASCII">ASCII</a> is a character encoding standard for electronic communication. It uses 7bits to represent a maximum of 2^7=128 characters such as:

        <div class="ui list">
                <div class="item"><span>letters</span>:[a-z A-Z]</div>
                <div class="item"><span>numbers</span>:[0-9]</div>
                <div class="item"><span>symbols</span>:[&?#$...]</div>
        </div>

        <p>128 characters is quite limited, so most modern character-encoding schemes such as <span>UTF-8</span> are built on top of ASCII to include more characters such as chinese and russian </p>`
      ),
      Protocol('jpeg',' Joint Photographic Experts Group'),
      // Protocol('XML','extensible markup language'),
      // Protocol('utf-8 ',' Unicode Transformation Format 8 bits'),
	//NCP
   ],
    `<p>It translates the data format (ASCII, Jpg, etc) into binary and vice versa so that it can be understood by the application/transported over the copper wire(physcal layer) as electrical impulses.
     It can also convert one character set into another such as ASCII to <span>EBCDIC</span>.</p>

      <div class="ui list"><div class=item>Translates() </div>
         <div class=item>Conversion</div>
         <div class=item>Encryption</div>
         <div class=item>Compression</div>
      </div>`,
  "Data"
  )
)

osi.push(
  Layer(
    'Session',
    "https://en.wikipedia.org/wiki/Session_layer",

    [
      Protocol(
        'SSH',
        'Secure Shell:22',
        `SSH is a cryptographic network protocol for operating network services securely over an unsecured network. Typical applications include remote command-line login and remote command execution, but any client-serve network service can be secured with SSH.`
      ), //secure telnet

      Protocol(
        'telnet',
        'telnet:23',
        `Telnet is considered obsolete and is not installed on newer versions of windows(7 and above) as information is unencrypted. It has been replaced by <span>SSH</span> provides bi-directional interactive text-oriented communication with a virtual termilnal connection over the internet or LAN with TCP via port 23.`
      ),//this protocol is used to establish a connection to Transmission Control Protocol (TCP) port number 23,

      Protocol(
        'netbios',
        'Network Basic Input output system',
        `Network Basic Input/Output System allows applications on separate computers to communicate over a  local area network.
        As strictly an API, NetBIOS is not a networking protocol. <br><br>
        In modern networks, NetBIOS normally runs over TCP/IP via the NetBIOS over TCP/IP (NBT) protocol.
        This results in each computer in the network having both an IP address and a NetBIOS name corresponding to a (possibly different) host name`
      ),
      // Protocol('SQL','Structured Query Language'),
      // Protocol('nfs','hypertexttransport'),
      // Protocol('zip','file transfer protocol'),
      // Protocol('socket','file transfer protocol'),
	//other: Named Pipes
   ],

    `Session layer is important for connecting processeses running on diffrent stations over a network.  Involved in: <br>
    <div class="ui list">
        <div class="item">Establish maintain and termination of connections</div>
        <div class="item">Session support</div>
        <div class="item">Security</div>
        <div class="item">Logging</div>
    </div>`,
    "Data"
  )
)
osi.push(
  Layer(
    'Transport',
    "https://en.wikipedia.org/wiki/Transport_layer",
    [
      Protocol(
        'tcp',
        'Transmition Control Protocol',
        "TCP provides reliable, ordered, and error-checked delivery of a stream of octets (bytes) between applications running on hosts communicating via an IP network. Major internet applications such as the World Wide Web, email, remote administration, and file transfer rely on TCP. "
      ),

      Protocol(
        'udp',
        'User Datagram Protocol',
        `UDP can send Segments/Datagrams to other hosts on an IP network without the need for prior communication. It is used when reliability is not an issue such as streaming content. It emphasizes on reduced latency over reliability.`
      ),

      Protocol(
      'TLS/SSL',
      'Transport Layer Security/Secure Socket Layer',
      `TLS is a cryptographic protocol designed to provide security over a network.
      There are several versions of the protocol in various applications such as web browsers,
      email, instant messaging, and voice over IP(VoIP).
      Websites can use TLS to secure communication between their servers and web browsers
      read <a href="https://www.jscape.com/blog/ssl-vs-ssh-simplified">this article</a>
      to learn about the differences between TLS and SSH`

      // When you compare their security attributes, you'll find that SSH and SSL have very strong similarities. They both offer data-in-motion encryption, server authentication, client authentication, and data integrity mechanisms.
      ),
     //spans the session, presentation and application layer
      // Protocol('nwlink','Network Link'),
      // Protocol('spx','file transfer protocol'),
      // Protocol('rtcp','file transfer protocol'),
      // Protocol('srtp','file transfer protocol'),
	// other:NetBEUI
    ],
  `Ensures that messages are delivered error-free, in sequence and with no losses of duplications. This layer It is involved in:<br>
<div class="ui list">
  <div class="item">message segmentation</div>
  <div class="item">traffic control</div>
  <div class="item">multiplexing</div>
</div>
  `,
  "Segment"
  )
)

osi.push(
  Layer(
    'Network',
    "https://en.wikipedia.org/wiki/Network_layer",
    [
      Protocol(
        'ipv4',
        'Internet Protocol version 4',
        `An IP address is a 32-bit numeric address written in decimal as four numbers separated by periods. Each number can be zero to 255.

        There are four classes of IP addresses:<br>
        <div class="ui list">
                <div class="item">A 0.0.0.0 to 127.255.255.255 0</div>
                <div class="item">B 128.0.0.0 to 191.255.255.255 10</div>
                <div class="item">C 192.0.0.0 to 223.255.255.255 110</div>
                <div class="item">D 224.0.0.0 to 239.255.255.255 1110</div>
        </div>
        <p>A <span>subnetmask</span> is what a router uses to determine whether a packet is destined for a computer on the LAN or whether it is to be forwarded to another computer outside of the LAN.
          Packets destined for a computer on the same network using a class C address will have a subnet mask of <span>255.255.255.0</span> whereas one with <span>255.255.0.0</span> indicates that it is destined for another device outside of the network
        </p>
        <p>
        There is are a maximum of 4,294,967,296 IPv4 addresses.
         Computers on a LAN such as the one you are using use class C ip addresses.
        </p>`
      ),
      Protocol(
        'ipv6',
        'Internet Protocol version 6',
        `Ipv6 is a 128 bits written in hexadecimal number consisting of 32 hexadecimal numbers. These numbers are grouped in 4's giving 8 groups or blocks.
        There is over 340 undecillion ipv6 addresses available`
      ),

      Protocol(
        'icmp',
        'Internet Control Message Protocol',
        `ICMP is used by network devices, including <span>routers</span> to <span>send error messages and operational information</span> indicating, for example, that a request service is not available or that  a host or router could not be reached.
         Unlike TCP and UDP, ICMP isnt typically used to exchange data between systems nor is it employed by end-user network applications with the exception of <span>ping and traceroute</span>`
      ),

      Protocol('icmpv6','Internet Control Message Protocol version 6'),
      Protocol(
		'eigrp',
		'Enhanced Interior Gateway Routing Protocol',
		`<a href="https://en.wikipedia.org/wiki/Enhanced_Interior_Gateway_Routing_Protocol#Cisco_IOS_example">EIGRP</a> is a routing protocol like <a href="https://en.wikipedia.org/wiki/Open_Shortest_Path_First">OSPF</a>`
		),
      Protocol(
        'igmp',
        'Internet Group Management Protocol',
        `IGMP is used by hosts and adjacent routers on IPv4 networks to establish multicast group memberships...
        That is IGMP will be within the local multicast router and the end host client...
        then to cross the L3 boundary (eg. a router) protocol like Protocol Independent Multicast (PIM) is then used between the local and remote multicast routers,
        to direct multicast traffic from the multicast server to many multicast clients.`
      ),//Yes IGMP is L3 ,
      // Protocol('ipsec','file transfer protocol'),
      // Protocol('ipx','file transfer protocol'),
      // Protocol('ecn','file transfer protocol')
   ],
    "Controls the operations of the subnet, deciding which physical path the data takes"+
	"Routing, Subnet traffic control, frame segmentation, Logical physical address mapping. subnet usage accounting",
  "Packet"
  )
)

osi.push(
  Layer(
    'Data Link<div>LLC</div><div>MAC</div>',
    "https://en.wikipedia.org/wiki/Data_link_layer",
    [
      // Protocol('rarp','Reverse Address Resolution Protocol'),
      // Protocol('ndp','Neighbor Discovery Protocol'),
      // Protocol('atm','Asynchronous transfer mode 53 bytes'),
      // Protocol('PPPoE','Point-to-Point Protocol over Ethernet'),
     Protocol(
      'arp',
      'Address Resolution Protocol',
      `<a href="https://en.wikipedia.org/wiki/Address_Resolution_Protocol">ARP</a> is a crucial communication protocol used for discovering the link layer address, such as a MAC address and its associated IP address by creating a MAC address table`
     ),//arp
     Protocol(
        'llc',
        'Logic Link Control',
        `The LLC is the upper sublayer of the LLC which acts as an <span>interface</span> between the <span>MAC</span> sublayer and the <span>network layer</span>. It provides the following services: <br>

        <div class="ui list">
                <div class="item"><a href="https://en.wikipedia.org/wiki/Automatic_repeat_request">ARQ</a> <span>(automatic repeat request)</span>, </div>
                <div class="item"><span>Frame flow control</span> </div>
                <div class="item"><span>error management</span></div>
                <div class="item"><span>multiplexing</span> </div>
        </div>
        Multiplexing makes it possible for several network protocols (e.g. IP, IPX, Decnet and Appletalk) to coexist within a multipoint network and to be transported over the same network medium.<br>
        `
     ),//arp
     Protocol(
     'mac',
     'Media Access Controller',
     `<a href="https://en.wikipedia.org/wiki/Medium_access_control">MAC</a> is the lower sublayer of the DLL. It is responsible for the transmission of data packets to and from the <a href="">NIC</a>,
      and to and from another remotely shared channel. It also flow control and multiplexing for the transmission medium. The MAC address is a unique 48-bit binary address written in hexadecimal notation.
	a computer will attempt to accept a packet if the MAC address in it's header matches it's own MAC address
	`
     ),//arp
   ],
    `Provides error-free transfer of data frames from one node to another over the physical layer. it performs the following functions:<br>
     <div class="ui bulleted list">
          <div class="item ">Establishes and terminates the logical link between nodes </div>
          <div class="item">frames traffic control</div>
          <div class="item">frames sequencing</div>
          <div class="item">frame acknowledgement</div>
          <div class="item">frame delimiting</div>
          <div class="item">frame error checking</div>
          <div class="item">Media access control</div>
          <div class="item">NIC -switche-NIC </div>
     </div>
     `,
  "Frame"
  )
)

osi.push(
  Layer(
    'Physical',
    "https://en.wikipedia.org/wiki/Physical_layer",
    [
      Protocol(
        'isdn (obsolete)',
        'Integrated Services Digital Network',
        `ISDN (obsolete)is a set of communication standards for simultaneous digital transmission of voice, video, data, and other network services over the traditional circuits of the public switched telephone network.
        The key feature of ISDN is that it integrates speech and data on the same lines, adding features that were not available in the classic telephone system.
        The ISDN standards define several kinds of access interfaces, such as Basic Rate Interface (BRI), Primary Rate Interface (PRI), Narrowband ISDN (N-ISDN), and Broadband ISDN (B-ISDN).`
      ),//spans the bottom three layers
      Protocol(
        'adsl',
        'Asyncronious Digital Subscriber Line',
        `ADSL is a type of digital subscriber line (DSL) technology, a data communications technology that enables faster data transmission over copper telephone lines than a conventional voiceband modem can provide.
         ADSL, bandwidth and bit rate are said to be asymmetric, meaning greater toward the customer premises (downstream) than the reverse (upstream).
        Providers usually market ADSL as a service for consumers for Internet access for primarily downloading content from the Internet, but not serving content accessed by others.`
        ),
      Protocol('cat5/6','Category 5/6 cables'),
      Protocol('rj11/45','Registered Jack phone/networking'),
      Protocol(
        'IEEE 802.11',
        'wireless',
        `802.11 Wi-Fi uses multiple parts of the IEEE 802 protocol family and is designed to seamlessly interwork with its wired sister protocol Ethernet.
              <div class="ui bulleted list">
                <div class="item"><a href="#">a</a></div>
                <div class="item"><a href="#">b</a></div>
                <div class="item"><a href="#">ac</a></div>
                <div class="item"><a href="#">g</a></div>
                <div class="item"><a href="#">n</a></div>
              </div>`
        ),
      Protocol(
        'IEEE 802.3',
        'Ethernet',
        `is a family of computer networking technologies commonly used in local area networks (LAN), metropolitan area networks (MAN) and wide area networks (WAN).[1] It was commercially introduced in 1980 and first standardized in 1983 as IEEE 802.3, and has since retained a good deal of backward compatibility and been refined to support higher bit rates and longer link distances. Over time, Ethernet has largely replaced competing wired LAN technologies such as Token Ring, FDDI and ARCNET.
          The original 10BASE5 Ethernet uses coaxial cable as a shared medium, while the newer Ethernet variants use twisted pair and fiber optic links in conjunction with switches. Over the course of its history, Ethernet data transfer rates have been increased from the original 2.94 megabits per second (Mbit/s)[2] to the latest 400 gigabits per second (Gbit/s). `
        ),
   ],
   `Transmission and reception of raw bit streams (electrical impulses representing binary) over a physical medium. It therefore converts binary to electrical impulses to be sent out, and converts the recieved electrical impulses into binary to be sent to the upper layers`,
   "Bits"
  )
)


//5 EVENTS
//not working anymore
$(document).ready(function(){
  // $('.card').on('click',function(){

    // $(document).on('click','.card',function(){
    // // let details=$(this).children('.details').val();
    // let details=$(this).children('.details').html();
    // $(this).parent().next('td').html(details);
    // // alert('hello')
    // })
    $(document).on('click','.card-wrapper',function(){
    // let details=$(this).children('.details').val();
    let details=$(this).children('.card').children('.details').html();
    // echo(details);
    $(this).parent().next('td').html(details);
    // alert('hello')
    })


})



function echo (el){
  console.log(el);
}

