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
  let explanation=$('<td>').html(`<p>${this.explanation}</p>`)
  
  //1.3 card creator
  //the card has front, back and meaning
  for(let i in this.protocols){
    
    let front=$('<div>',{
      class:"front"
    }).html(this.protocols[i].protocol)
    
    let back=$('<div>',{
      class:"back"
    }).text(this.protocols[i].meaning)
    
    let details=$('<div>',{
      class:"details hidden"
    }).html(this.protocols[i].details)

    let card=$('<div>',{
      class:"card"
    }).append([front,back,details]);    
    cards.append(card); 
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
        `Hypertext Transfer Protocol Secure is a secure version of <span>HTTP</span>. This protocol is used to transport<span> webpages</span> written in <span> HTML</span> It is encrypted using <span>TLS</span>(Trasport Layer Security). It is therefore often refered to as <span>HTTP over TLS</span>`
        ),
      Protocol('FTP',
        'File transfer protocol 21',
        `File Transfer Protocol is used to <span>transfer files</span> between a client and a server. <span>Authentication</span> is usually done with a <span>user name</span> and <span>password</span>, but can connect anonymously if the server is configured to allow it. FTP is often <span>secured with TLS</span> in order to protect username and password`
        ),
      Protocol(
        'SMTP',
        'Simple mail transfer protocol:25',
        `Simple Mail Transfer Protocol deals with <span>mail tranmission</span>. Mail servers and other message transfer agencies such as  <span>Microsoft Exchange</span> and <span>Outlook.com, Gmail</span> etc use SMTP to send and receive mail outside their organisation. It uses <span>TCP on port 25</span>`
        ),
      Protocol('POP3','Post Office Protocol : 110'),
      Protocol('DNS','domain name server'),
      Protocol('DHCP','dynamic host configuration protocol'),
      // Protocol('rip','Routing Information Protocol'),
   ],
    `Serves as the window for users and application processs to access the network services\n\n
      Involved in: <ul>
      <li>resourse sharing</li>
      <li>remote file & printer access</li>
      <li>Directory servies</li>
      <li>Network management</li>
      </ul>`,
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
        "Hypertext Markup Language (HTML) is the standard markup language for documents designed to be <span>displayed in a web browser</span>. It can be assisted by technologies such as Cascading Style Sheets <span>(CSS)</span> and scripting languages such as <span>JavaScript</span>."
      ),
      Protocol(
        'ascii',
        'american standard code for information interchange',
        "ASCII is a character encoding standard for electronic communication. ASCII codes <span>represent characters</span> in computers, telecommunications equipment, and other devices. Most modern character-encoding schemes such as <span>UTF-8</span> are based on ASCII"
      ),
      Protocol('jpeg',' Joint Photographic Experts Group'),
      // Protocol('XML','extensible markup language'),
      // Protocol('utf-8 ',' Unicode Transformation Format 8 bits'),
   ],
    "Formats the data to be presented to the application layer. It can be viewed as the translator for the network."
	+"Translation, conversion, Encryption, Compression",
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
        "Secure Shell (SSH) is a cryptographic network protocol for operating network services securely over an unsecured network. Typical applications include remote command-line login and remote command execution, but any client-serve network service can be secured with SSH."
      ), //secure telnet
      
      Protocol(
        'telnet',
        'telnet:23',
        "Telnet provides bi-directional interactive text-oriented communication with a virtual termilnal connection over the internet or LAN with TCP via port 23."
      ),//this protocol is used to establish a connection to Transmission Control Protocol (TCP) port number 23,
      Protocol('netbios','Network Basic Input output system'),
      // Protocol('SQL','Structured Query Language'), 
      // Protocol('nfs','hypertexttransport'),
      // Protocol('zip','file transfer protocol'),
      // Protocol('socket','file transfer protocol'),
   ],

    "Allows session establishment between processeses running on diffrent stations"+"Session Establishment maintenance and termination, Session support, Security, Logging",
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
        "With User Datagram Protocol, computer applications can send messages i.e. Segments/Datagrams to other hosts on an IP network. Prior communications are not required in order to set up communication channels or data paths. Iti is used when reliability is not an issue such as streaming content. emphasizes reduced latency over reliability."
      ),
      
      Protocol(
      'TLS/SSL',
      'Transport Layer Security/Secure Socket Layer',
      "Transported Layer Security is a cryptographic protocol designed to provide security over a network. There are several versions of the protocol in various applications such as web browsers, email, instant messaging, and voice over IP(VoIP). Websites can use TLS to secure communication between their servers and web browsers"
    ),
     //spans the session, presentation and application layer
      // Protocol('nw link','Network Link'),
      // Protocol('spx','file transfer protocol'),
      // Protocol('rtcp','file transfer protocol'),
      // Protocol('srtp','file transfer protocol'),
    ],
  "Ensures that messages are delivered error-free, in sequence and with no losses of duplications"+
	"message segmentation, traffic control, multiplexing",
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
        "An IP address is a 32-bit numeric address written in decimal as four numbers separated by periods. Each number can be zero to 255."+ 

        "There are four classes of IP addresses:"+
        "A 0.0.0.0 to 127.255.255.255 0<br>"+
        "B 128.0.0.0 to 191.255.255.255 10<br>"+
        "C 192.0.0.0 to 223.255.255.255 110<br>"+
        "D 224.0.0.0 to 239.255.255.255 1110<br>"+
        "<br>there is a  maximum of 4,294,967,296 IPv4 addresses.<br>"+
        "computers on a LAN such as the one you are using use class C ip addresses."
      ),
      Protocol(
        'ipv6',
        'Internet Protocol version 6',
        "Ipv6 is a 128 bits written in hexadecimal number consisting of 32 hexadecimal numbers. These numbers are grouped in 4's giving 8 groups or blocks."+
        "There is over 340 undecillion ipv6 addresses available"
      ),
      
      Protocol('icmp','Internet Control Message Protocol'),
      Protocol('icmpv6','Internet Control Message Protocol version 6'),
      Protocol('isdn','Integrated Services Digital Network'),//spans the bottom three layers
      Protocol('igmp','Internet Group Management Protocol'),//Yes IGMP is L3 , IGMP is used by hosts and adjacent routers on IPv4 networks to establish multicast group memberships... That is IGMP will be within the local multicast router and the end host client...then to cross the L3 boundary (eg. a router) protocol like Protocol Independent Multicast (PIM) is then used between the local and remote multicast routers, to direct multicast traffic from the multicast server to many multicast clients.
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
      "The Address Resolution Protocol (ARP) is a crucial communication protocol used for discovering the link layer address, such as a MAC address, associated with a given internet layer address, by creating a MAC address table"
     ),//arp
     Protocol(
        'llc',
        'Logic Link Control',
        "The LLC  is the upper sublayer of the data link layer which provides flow control, automatic repeat request (ARQ), error management mechanisms"+
        "and multiplexing mechanisms that make it possible for several network protocols (e.g. IP, IPX, Decnet and Appletalk) to coexist within a multipoint network and to be transported over the same network medium.<br>"+ 
        "The LLC sublayer acts as an interface between the media access control (MAC) sublayer and the network layer."
     ),//arp
     Protocol(
     'mac',
     'Media Access Card',
     "Media access control (MAC) is a sublayer of the data link layer (DLL) responsible for the transmission of data packets to and from the network-interface card (NIC), and to and from another remotely shared channel. while the MAC provides flow control and multiplexing for the transmission medium."
     ),//arp
   ],
    "Provides error-free trnasfer of data frames from one node to another over the physical layer. Establishes and terminates the logival link between nodes, frames traffic control, frames sequencing, frame acknowledgement, frame delimiting, frame error checking, Media access control"+
	"NIC -switche-NIC ",
  "Frame"
  )
)

osi.push(
  Layer(
    'Physical',
    "https://en.wikipedia.org/wiki/Physical_layer",
    [
      Protocol('adsl','Asyncronious Digital Subscriber Line'),
      Protocol('cat5/6','Category 5/6 cables'),
      Protocol('rj11/45','Registered Jack phone/networking'),
      Protocol('IEEE 802.11a, b,ac,g,n','wireless'),
      Protocol('IEEE 802.3','Ethernet'),
   ],
   "Transmission and reception of raw bit streams over a physical medium",
   "Bits"
  )
)


//5 EVENTS
//not working anymore
$(document).ready(function(){
  // $('.card').on('click',function(){
    $(document).on('click','.card',function(){
    // let details=$(this).children('.details').val();
    let details=$(this).children('.details').html();
    $(this).parent().next('td').html(details);
    // alert('hello')
  })
})



function echo (el){
  console.log(el);
}

