const layerFunctions=[
{
	layer:1,
	functions:[
	{
		name:"Network layout",
		description:`Defines the network layout and topology i.e. star; ring; bus; mesh`
	},
	{
		name:"Interface for transmission",
		description:`The physical layer provides an electrical, mechanical, and procedural interface to the transmission medium.
`
	},
	{
		name:"Transmission of bits",
		description:`The physical layer defines the means of transmitting raw bits[1] over a physical data link connecting network nodes. `
	}
	]
},
{
	layer:"2LLC",
	functions:[
	{
		name:"Frame flow control",
		description:"flow control is a speed matching mechanism that coordinates many frames a sender can transmit within a period (a window) before waiting for an acknowledgement from the receiver. This is important due to hardware limitations such as memory and bandwith. the sender before the limits are reached and request that the transmitter send fewer frames or stop temporarily. and without it will lead to data loss from the receiver."
	},
	{
		name:"Error detection",
		description:"LLC uses the CRC field to detect errors When it provides a connection-oriented or an acknowledged connectionless service using the Sliding window Automatic Repeat Request (ARQ) Go Back N protocol. ARQ is a control protocols for transmission of data over noisy or unreliable communication network such as ethernet. They are named so because they provide for automatic retransmission of frames that are corrupted or lost during transmission. ARQ is also called Positive Acknowledgement with Retransmission (PAR)."
	},
	{
		name:"Multiplexing",
		description:"makes it possible for several network protocols (e.g. IP, IPX, Decnet, . EtherType, 802.1Q VLAN and Appletalk) to coexist within a multipoint network and to be transported over the same network medium."
	},
	{
		name:"Hardware control",
		description:"controls the hardware responsible for interaction with the wired, optical or wireless transmission medium."
	}
	]
},
{
	layer:"2MAC",
	functions:[
	{
		name:"flow control",
		description:"it determines the speed at which data can be transfered between two devices on the local network measured in bits/second"
	},
	{
		name:"multiplexing",
		description:"Allowing multiple protocols to run on the same medium "
	},
	{
		name:"full-duplex logical communication channel	",
		description:"The MAC layer emulates a full-duplex logical communication channel in a multi-point network. This channel may provide unicast, multicast or broadcast communication service. "
	},
	{
		name:"Error Detection",
		description:"Generates and checks the Frame Check Sequence (FCS) in the header for errors and discard malformed frames check header parts for more information. "
	},
	{
		name:"Media Access",
		description:`It controls when devices on a network can send data and when to wait with mechanisms such as csma/cd, csma/ca and Token Ring For topologies with a collision domain (bus, ring, mesh, point-to-multipoint topologies). This necessary to avoid collisions of data which corrupts its integrity. Additionally, the MAC is also responsible for compensating for collisions by initiating retransmission if a jam signal is detected. retransmission and backoff functions`
	},
	{
		name:"Mac Addressiing for Ethernet 802.3	",
		description:"Uses the device's MAC address to identify devices on a network "
	}
]
},
	{
		name:"Framing",
		description:`
			<p>It encapsulates and decapsulates packets into frames and back, by providing a Header (Preamble+SFD) and Trailer (FCS) (See header parts for more information). Then forwards the data to the physical layer as soon as the appropriate channel access method permits.</p>
<br>
<p>			When receiving data from the physical layer, the MAC block ensures data integrity by verifying the sender's frame check sequences, and strips off the sender's preamble and padding before passing the data up to the higher layers. it also provides the interframe gap (IFG).
		</p>`
},
{
	layer:3,
	functions:[
	{
		name:"Logical Addressing",
		description:"This layer uses IP addresses i.e. IPv4, IPv6 to uniquely identify all devices on a network so that data reaches the right destination."
	},
	{
		name:"Forwarding",
		description:"(Local process)"
	},
	{
		name:"Routing",
		description:"(Global hops across multiple routing)finding the best path to the destination as there are multiple paths to take. Path determination (Open Shortest Path First, Border Gateway Protocol, intermediate system-intermediate system). determines best path to reach destination"
	},
	{
		name:"Error Handling",
		description:"This layer uses ICMP to send Error messages if a node on the network cannot be reached. ICMP is utilised by command line tools such as ping and traceroute"
	},
	{
		name:"Fragmentation and reassembly",
		description:"If the data is too large, it is fragmented and reassembled at arrival. maximum payload for ethernet is 1500Bytes"
	},
	{
		name:"Packaging",
		description:"It encapsulates data from higher layers with the sender and receiver's IP address"
	}
	]
},
{
	layer:4,
	functions:[
	{
		name:"Segmentation & Reassembly",
		description:` The transport layer takes data from the session layer and breaks it up into manageable chunks called segments (or datagrams in case of UDP). Segments can take different paths from source to destination. The transport layer on the receiving device reassembles the segments in the right order using the sequence number (TCP). The port number directs each segment to the associated application.`
	},
	{
		name:"Flow Control - Windowing",
		description:`Flow Control Is A Mechanism To Determine The Optimal Speed For Data Transmission Between Two Devices. It Ensures That The Sender Doesn't Overwhelm The Receiving Device With Data That It Cant Handle Due To Hardware Constraints. Windowing Is A Process To Negotiate How Much Data A Sender And Receiver Can Process Prior To Transmission. E.G. If A Mobile Only Processes 10mbs, It Will Tell The Server To Slow Down So To Prevent Data Loss.- Provides Additional Quality Of Service (QOS)`
	},
	{
		name:"Error Control",
		description:`It Uses The Checksum To Inspect The Data's Integrity. If The Receiving Device Identifies Any Missing Segments, It Will Make An Automatic Repeat Request (ARR) To The Sender To Retransmit The Missing Data.`
	},
	{
		name:"Encryption",
		description:`The Transport Layer Has Its Own Encryption Protocol Called Transport Layer Security (TLS) And Secure Socket Layer (SSL) It's Predecessor. TLS Provides End-To-End Encryption, Meaning Encryption Is Handled By The End Devices As Opposed To Intermediary Devices Such As Routers And Switches. TLS Is Often Used By L7 Application Layer Protocols Such As HTTPS And FTPS. The S Suffixed At The End Of These Protocol Stands For Secure`
	},
	{
		name:"Session Multiplexinng",
		description:`This Is The Ability To Have Multiple Concurrent Sessions Open To One Or Many Hosts Using The IP Addresses And Port Numbers Known As A Socket. Hence You Can Have Multiple Applications With Established Connections To Multiple Hosts On A Network.`
	}]
},
{
	layer:5,
	functions:[
	{
		name:"Establishing, maintaining and terminating connections",
		description:`Ensures that the session stays open long enough to transfer all the data being exchanged, and then promptly closes the session in order to avoid wasting resources.`
	},
	{
		name:"Data transfer synchronisation	",
		description:`It does this by creating checkpoints so that data transfer can resume in case the connection is terminated unexpectedly. without the checkpoints the whole process must start again.`
	},
	{
		name:"Authentication and Authorisation	",
		description:`It checks user credentials such as username and password usually with Secure Shell (SSH)`
	}]
},
{
	layer:6,
	functions:[
	{
		name:"Convertion",
		description:`It converts data recieved as bits (0s and 1s) from the lower layers and converts it into its associated file format. For example, textual data may be converted to ASCII, images to png and audio to mp3. It also converting media into binary so that it can be converted into electrical signals over the physical layer (Layer 1).`
	},
	{
		name:"Translation",
		description:
		`
			<p>Different machines may use different encoding schemes, so the applicaiton layer may need to translate data into a format that the Application Layer can consume.</p>
        <ul>
            <li>UTF8 -&gt; ASCII </li>
            <li>ASCII -&gt; EBCDIC).</li>
        </ul>`
	},
	{
		name:"Encryption / Decrypt",
		description:`Layer 6 is able to encrypt messages to be sent, and decode encrypted messages it recieves for data privacy.This is usually through L4 Transport (SSL/TLS protocol)`
	},
	{
		name:"Compression / Decompression",
		description:`<p>This layer uses <a hre="" target="__blank">compression algorithms</a> to reduce the size of data recieved from L7 Application Layer to be sent over the network. This is especially important when sending large files such as video and large applications as it reduces the overheads needed to transfer data. It also decompresses data recieved from the sender.
        compression may be further subdivided as:</p>
        <br>
<ul>
    <li>
        <a href="" target="__blank">lossy (data integrity isn't guaranteed)</a>
    </li>
    <li>
        <a href="" target="__blank">lossless lossless (data integrity is guaranteed).</a>
    </li>
</ul>`
	}]
},
{
	layer:7,
	functions:[
	{
		name:"Message Type",
		description:"E.g. whether the message a request or a response."
	},
	{
		name:"Message Syntax",
		description:"What are the fields the subcomponents delinneate"
	},
	{
		name:"Message Semantics",
		description:"The meaning of the information of the structure(semantics) e.g. image, text or audio"
	},
	{
		name:"Message Rules",
		description:"The rules associated with sending messages. i.e. When and how to respond"
	}
	]
}
]