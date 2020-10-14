## 2 Data Link - IEEE 802 (Data link and physical standards)

### Key Terms

- Mac Address: The MAC address is a unique 6 Bytes (48-bit) binary address written in hexadecimal for easier conversion. Each byte is either separated by a hyphen (-), colon (:) or dot (.). The first 3bytes identify the manufacturer of the device while the last 3 bytes are unique to every device. a computer will attempt to accept a packet if the MAC address in it's header matches it's own MAC address.
<table style="text-align:center">
<thead>
       <tr ><th colspan="2">MAC Address</th>
    </tr>
</thead>
<tbody>
 <tr >
  <td colspan="2"><span style="background:orange; color:white;">00-1A-7D</span>-<span style="background:green; color:white">DF-61-8B</span></td>
 </tr>
 <tr >
  <td >Manufacturer
  </td>
  <td>Unique Identifyer
  </td>
 </tr>
</tbody>
</table>

- header information: FCS : Frame Check Sequence Stop frame : (Optional) when field length is not used 
- NIC: network interface card.


L2 Data Link Layer(DLL): It is considered to be the most complex layer in the OSI model. It consists of 2 sublayers which will be discussed separately in this article:

- Logic Link Controller(LLC) connects to the network layer above. 
- Media Access Controller( MAC) communicates with the physical layer below;  


<span style="display:none">
The data link layer is very similar to the network layer, except the data link layer facilitates data transfer between two devices on the SAME network. The data link layer takes packets from the network layer and breaks them into smaller pieces called frames. Like the network layer, the data link layer is also responsible for flow control and error control in intra-network communication (The transport layer only does flow control and error control for inter-network communications).<br/><br/>
Duties usually are logical addressing (network layer), physical addressing (data link layer via MAC addresses of Network Interface Card, Switches), access media, controls how data is placed and received from the media (media access control, error detection). there are 2 types of protocols. Noiseless channels and noisy channel which is what stop and wait ARC and go-back-n ARQ.
</span>

<!-- no need for this table as each sublayer will be addressed accordingly.!!! -->

<table style="display:none">

<thead>
    <tr>
        <th>Function</th>
        <th>Description</th>
    </tr>
</thead>
<tbody>
<tr>
    <td>logical addressing (network layer)</td>
    <td></td>
</tr>
<tr>
    <td>physical addressing (data link layer via MAC addresses of Network Interface Card, Switches)</td>
    <td></td>
</tr>
<tr>
    <td> access media</td><td></td>
</tr>
<tr>
    <td>media access control (MAC) </td>
    <td> controls how data is placed and received from the media  e.g. 802.11 wireless, and ethernet. </td>
</tr>
<tr>
    <td> error detection). </td>
    <td>Like the network layer, the data link layer is also responsible for flow control and error control in intra-network communication </td>
</tr>
</tbody>
</table>



<span style="display:none">it sets up links accross the physical  network ti encapsulates bits into data frames to be sent over a network and decapsulates incoming data. switches are the most common network devices that exist at the data link layer. it is also involved in error detection</span>




### Logic Link Control (LLC) 802.2 (implemented in software)
The LLC is the upper sublayer of the LLC which acts as an interface between the MAC sublayer and the network layer. <span style="display:none">LLC is very similar to several famous data link protocols, like Synchronous Data Link Control (SDLC) or High Level Data Link Control (HDLC) protocols. </span> The LLC includes the service access points (SAP) information in the frame to allow multiple applications (programs) to communicate simultaneously with other applications on the local machine or other stations on the network. 


It provides the following services:
<table>
<tr>
    <th>Function</th>
    <th>Description</th>
</tr>
<tr>
    <td>Frame flow control: </td>
    <td>Speed matching mechanism where the reciever informs the sender the speed at which it can handle frames. it coordinates the amount of data that can be sent before receiving an acknowledgment. flow control is a set of procedures that tells the sender how much data it can transmit before it must wait for an acknowledgement from the receiver. receiver has a limited speed at which it can process incoming data and limited amount of memory. receiver must inform the sender before the limits are reached and request that the transmitter send fewer frames or stop temporarily.</td>
</tr>
<tr>
    <td>error detection: </td>
    <td>
        LLC uses the CRC field to detect errors When it provides a connection-oriented or an acknowledged connectionless service using the <a href="https://www.youtube.com/watch?v=LnbvhoxHn8M">Sliding window Automatic Repeat Request (ARQ)</a> Go Back N protocol to arrange for the transmitter to retransmit packets that do not arrive error free. >Automatic Repeat ReQuest (ARQ) is a group of error – control protocols for transmission of data over noisy or unreliable communication network. These protocols reside in the Data Link Layer and in the Transport Layer of the OSI (Open Systems Interconnection) reference model. They are named so because they provide for automatic retransmission of frames that are corrupted or lost during transmission. ARQ is also called Positive Acknowledgement with Retransmission (PAR).
    </td>
</tr>
<tr>
    <td>multiplexing:</td>
    <td> makes it possible for several network protocols (e.g. IP, IPX, Decnet, . EtherType, 802.1Q VLAN and Appletalk) to coexist within a multipoint network and to be transported over the same network medium.</td>
</tr>
</table>

[:new](https://www.youtube.com/watch?v=_b4dXKB8Pt8)

provides services to the upper layers
flow control
multiplexing for the logical link: EtherType, 802.1Q VLAN tags



<span style="display:none">
- allows upper layers to access media (Framing)
- Controls how data is placed and recieved from media (MAC) and Error detection
- it is involved in physical addressing using the MAC address. data units on this layer are called frames
</span>
controls the hardware responsible for interaction with the wired, optical or wireless transmission medium. 





---

### Media Access Control (abstraction to hardware) MAC: 

MAC is the lower sublayer of the DLL. It is responsible for the transmission of data packets to and from the  NIC, and to and from another remotely shared channel. It is also involved in flow control and multiplexing for the transmission medium. 

MAC sublayer provides a control abstraction of the physical layer such that the complexities of physical link control are invisible to the LLC and upper layers of the network stack. Thus any LLC sublayer (and higher layers) may be used with any MAC. In turn, the medium access control block is formally connected to the PHY via a media-independent interface. Although the MAC block is today typically integrated with the PHY within the same device package, historically any MAC could be used with any PHY, independent of the transmission medium.

the MAC adds a syncword preamble and also padding if necessary), adds a frame check sequence to identify transmission errors, and then forwards the data to the physical layer as soon as the appropriate channel access method permits it. For topologies with a collision domain (bus, ring, mesh, point-to-multipoint topologies), controlling when data is sent and when to wait is necessary to avoid collisions. Additionally, the MAC is also responsible for compensating for collisions by initiating retransmission if a jam signal is detected. 

When receiving data from the physical layer, the MAC block ensures data integrity by verifying the sender's frame check sequences, and strips off the sender's preamble and padding before passing the data up to the higher layers.



- flow control
- multiplexing for the transmission medium.
- The MAC sublayer controls device interaction. control how devices access the medium
- collision recovery :csma/cd, csma/ca,Token Ring
- Mac Addressiing for Ethernet 802.3
- Framing (encapsulating and decapsulating packets into frames and  back), providing Start Frame delimiter( SFD) and padding. check <a href="">diagram</a>.
- half-duplex retransmission and backoff functions
- Error detection: append/check FCS, discard malformed frames <a href="">check header parts for more information</a>
- interframe gap enforcement,


---

### parts of a header
<table>
<tr><td>Start Frame Delimiter (SFD) </td><td>is the 8-bit (1-byte) value marking the end of the preamble of an Ethernet frame. The SFD is immediately followed by the destination MAC address. It has the value 10101011.</td>
</tr>
<tr><td>preamble</td> <td>of an Ethernet frame consists of a 56-bit (7-byte) pattern of alternating 1 and 0 bits, which allows devices on the network to easily detect a new incoming frame. The SFD is designed to break this pattern, and signal the start of the actual frame.</td>
</tr>


<tr>
    <td>header startFrame</td> 
    <td>8ytes(signals the reciever that data is on its way), Address=12bytes(source and destionation of file), type=2bytes(type of data) trailer</td> 
</tr>
<tr><td>FCS</td><td>=4bytes(frame check sequence)</td></tr>
<tr> 
    <td>stop frame=optional </td>
    <td>LLC: prepares data for transmission frames the network layer packet identifies network layer protocols</td>
</tr> 
<tr>MAC: addresses the frame marks the beginning and end of a frame</tr>
</table>

![ethernetFrame](..\images\EthernetFrameFormat.png)

parts:

<table>
<tr><td>Preamble</td><td>: 7 bytes 101010 of an Ethernet frame consists of a 56-bit (7-byte) pattern of alternating 1 and 0 bits, which allows devices on the network to easily detect a new incoming frame. The SFD is designed to break this pattern, and signal the start of the actual frame.</td>
</tr><tr><td>SFD 1 byte</td><td>: 101011 is the 8-bit (1-byte) value marking the end of the preamble of an Ethernet frame. The SFD is immediately followed by the destination MAC address. It has the value 10101011.</td>
</tr><tr><td>Dest Mac</td><td>: 6 bytes where to send to </td>
</tr><tr><td>Source Mac</td><td>: 6 bytes where it came from </td>
</tr><tr><td>Ether type</td><td>: is it ipv4=0x0800, ipv6=Ox86DD or arp=0x0806?</td>
</tr><tr><td>Payload</td><td>: 46-1500 bytes</td>
</tr><tr><td>Cyclic Redundancy Check(CRC)/frame check sequenceFCS</td><td>:  (4 bytes) ensure there </td>is not errors between frames). a form of parity check, the bits sent is not the same as the one recieved
</tr><tr><td>Interpacket gap</td><td>: UPDATE</td>
</tr><tr><td>TPID (2 Bytes) </td><td>: UPDATE</td>
</tr><tr><td>Tag Control Information</td><td>: PCP (3bits), DEI (1bit), VID(12 Bits)</td>
</tr>

</table>


---

## Datalink protocols

![Ethernet Field Protocols](..\images\EthernetFieldProtocolNumbers.png)
- ARP
- HDLC
- PPP
- frame relay
- 802.3
- 802.11


---

## excercise
to check the mac address of your network interface card

getmac


to get an address table of all machines on the local network type the following in the command line

ARP -a



---

[questions](https://www.sanfoundry.com/computer-networks-questions-answers-data-link-layer/)