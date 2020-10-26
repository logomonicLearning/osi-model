<script src="formatter.js"></script>
<link rel="stylesheet" type="text/css" href="style.css">

# 2 Data Link - IEEE 802 (Data link and physical standards)

<div id="TOC">
TABLE OF CONTENT:
</div>

## KEY TERMS

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

- Frame: A frame is a DPU created on the Data Link layer and has source and destination MAC addresses,  FCS : Frame Check Sequence Stop frame : (Optional) when field length is not used 
- NIC: network interface card.
L2 Data Link Layer(DLL): It is considered to be the most complex layer in the OSI model. It consists of 2 sublayers which will be discussed separately in this article:
- Logic Link Controller(LLC): the mediator between the network layer above and the MAC sublayer below. 
- Media Access Controller( MAC) communicates with the physical layer below and the LLC sublayer above it;  

---

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




## Logic Link Control (LLC) 802.2 (implemented in software)
The LLC is the upper sublayer of the LLC which acts as an interface between the MAC sublayer and the network layer. <span style="display:none">LLC is very similar to several famous data link protocols, like Synchronous Data Link Control (SDLC) or High Level Data Link Control (HDLC) protocols. </span> The LLC includes the <span style="color:blue">service access points (SAP)</span> information in the frame to allow multiple applications to communicate simultaneously with other applications on the local machine or other stations on the network. 


It provides the following services:

<table>
<tr>
    <th>Function</th>
    <th>Description</th>
</tr>
<tr>
    <td>Frame flow control</td>
    <td>flow control is a speed matching mechanism that coordinates many frames a sender can transmit within a period (a window) before waiting for an acknowledgement from the receiver. This is important due to hardware limitations such as memory and bandwith. the sender before the limits are reached and request that the transmitter send fewer frames or stop temporarily. and without it will lead to data loss from the receiver. </td>
</tr>
<tr>
    <td>error detection: </td>
    <td>LLC uses the CRC field to detect errors When it provides a connection-oriented or an acknowledged connectionless service using the <a href="https://www.youtube.com/watch?v=LnbvhoxHn8M">Sliding window Automatic Repeat Request (ARQ)</a> Go Back N protocol. ARQ is a control protocols for transmission of data over noisy or unreliable communication network such as ethernet. They are named so because they provide for automatic retransmission of frames that are corrupted or lost during transmission. ARQ is also called Positive Acknowledgement with Retransmission (PAR).
</td>
</tr>
<tr>
    <td>multiplexing:</td>
    <td> makes it possible for several network protocols (e.g. IP, IPX, Decnet, . EtherType, 802.1Q VLAN and Appletalk) to coexist within a multipoint network and to be transported over the same network medium.</td>
</tr>
</table>

[:new](https://www.youtube.com/watch?v=_b4dXKB8Pt8)

provides services to the upper layers

controls the hardware responsible for interaction with the wired, optical or wireless transmission medium. 


<span style="display:none">
- allows upper layers to access media (Framing)
- Controls how data is placed and recieved from media (MAC) and Error detection
- it is involved in physical addressing using the MAC address. data units on this layer are called frames
</span>





---

## Media Access Control (abstraction to hardware) MAC: 

MAC is the lower sublayer of the DLL. It is responsible for the transmission of data packets to and from the  NIC, and to and from another remotely shared channel. It is also involved in flow control and multiplexing for the transmission medium. 

MAC sublayer provides a control abstraction of the physical layer such that the complexities of physical link control are invisible to the LLC and upper layers of the network stack. Thus any LLC sublayer (and higher layers) may be used with any MAC. In turn, the medium access control block is formally connected to the PHY via a media-independent interface. 



<table>
    <thead>
        <tr>
            <th>Funtion</th>
            <th>Description</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td> flow control media access?? </td>
            <td></td>
        </tr>
        <tr>
            <td>
                multiplexing
            </td>
            <td>
                for the transmission medium.
            </td>
        </tr>
        <tr>
            <td>
                halfduplex retransmission and backoff functions
            </td>
            <td></td>
        </tr>
        <tr>
            <td>Error Detection</td>
            <td>
                 append/check FCS, discard malformed frames <a href="">check header parts for more information</a>. collision recovery :csma/cd, csma/ca,Token Ring
            </td>
        </tr>
        <tr>
            <td>Media Access</td>
            <td><br> <br> For topologies with a collision domain (bus, ring, mesh, point-to-multipoint topologies), controlling when data is sent and when to wait is necessary to avoid collisions. Additionally, the MAC is also responsible for compensating for collisions by initiating retransmission if a jam signal is detected.
            </td>
        </tr>
        <tr>
            <td>
                Mac Addressiing for Ethernet 802.3
            </td>       
            <td></td>
        </tr>
        <tr>
            <td>
                Framing 
            </td>
            <td>
                It encapsulates and decapsulates packets into frames and back, by providing a Header (Preamble+SFD) and Trailer (FCS) (See header parts for more information). Then forwards the data to the physical layer as soon as the appropriate channel access method permits. <br> <br>
                When receiving data from the physical layer, the MAC block ensures data integrity by verifying the sender's frame check sequences, and strips off the sender's preamble and padding before passing the data up to the higher layers. it also provides the interframe gap (IFG).
            </td>
        </tr>
    </tbody>
</table>




---

## parts of a header
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

<table border="0" cellpadding="0" cellspacing="0" width="1157" style="border-collapse:
 collapse;table-layout:fixed;width:869pt">
 <colgroup><col class="xl65" width="108" style="mso-width-source:userset;mso-width-alt:3949;
 width:81pt">
 <col class="xl65" width="56" style="mso-width-source:userset;mso-width-alt:2048;
 width:42pt">
 <col class="xl65" width="86" style="mso-width-source:userset;mso-width-alt:3145;
 width:65pt">
 <col class="xl145" width="302" style="mso-width-source:userset;mso-width-alt:11044;
 width:227pt">
 <col class="xl65" width="79" style="mso-width-source:userset;mso-width-alt:2889;
 width:59pt">
 <col class="xl65" width="113" style="mso-width-source:userset;mso-width-alt:4132;
 width:85pt">
 <col class="xl65" width="413" style="mso-width-source:userset;mso-width-alt:15104;
 width:310pt">
 </colgroup><tbody><tr height="20" style="height:15.0pt">
  <td height="20" class="xl65" width="108" style="height:15.0pt;width:81pt"></td>
  <td class="xl65" width="56" style="width:42pt"></td>
  <td class="xl65" width="86" style="width:65pt"></td>
  <td class="xl144" width="302" style="width:227pt">Part</td>
  <td class="xl67" width="79" style="width:59pt">Size (Bytes)</td>
  <td class="xl67" width="113" style="width:85pt">Code</td>
  <td class="xl68" width="413" style="width:310pt">Description</td>
 </tr>
 <tr height="80" style="height:60.0pt">
  <td colspan="3" rowspan="2" height="120" class="xl159" width="250" style="border-right:
  .5pt solid black;border-bottom:.5pt solid black;height:90.0pt;width:188pt">Preamble
  (MAC)</td>
  <td class="xl69" width="302" style="border-left:none;width:227pt">PLCP</td>
  <td class="xl70" width="79" style="width:59pt">7</td>
  <td class="xl70" width="113" style="width:85pt">10101010</td>
  <td class="xl71" width="413" style="width:310pt">allows devices on the network to
  easily detect a new incoming frame. The alternating 1 and 0 bits allows
  devices on the network to easily synchronize their receiver clocks, providing
  bit-level synchronization.<span style="mso-spacerun:yes">&nbsp;</span></td>
 </tr>
 <tr height="40" style="height:30.0pt">
  <td height="40" class="xl72" width="302" style="height:30.0pt;border-left:none;
  width:227pt">Start Frame Delimiter (SFD)</td>
  <td class="xl73" width="79" style="width:59pt">1</td>
  <td class="xl73" width="113" style="width:85pt">10101011</td>
  <td class="xl74" width="413" style="width:310pt">Provides byte-level
  synchronization and to mark a new incoming frame.<span style="mso-spacerun:yes">&nbsp;</span></td>
 </tr>
 <tr height="52" style="mso-height-source:userset;height:39.0pt">
  <td rowspan="11" height="969" class="xl164" width="108" style="border-bottom:.5pt solid black;
  height:726.75pt;border-top:none;width:81pt">Ethernet Frame, 64-1518 Bytes</td>
  <td rowspan="7" class="xl164" width="56" style="border-bottom:.5pt solid black;
  border-top:none;width:42pt">Header<br>
    LLC</td>
  <td rowspan="2" class="xl164" width="86" style="border-bottom:.5pt solid black;
  border-top:none;width:65pt">Mac Addresses</td>
  <td class="xl75" width="302" style="border-left:none;width:227pt">Destintion (DA)</td>
  <td class="xl73" width="79" style="width:59pt">6</td>
  <td class="xl73" width="113" style="width:85pt">01:80:C2:00:00:01</td>
  <td class="xl74" width="413" style="width:310pt">Globally assigned multicast
  destination address</td>
 </tr>
 <tr height="65" style="mso-height-source:userset;height:48.75pt">
  <td height="65" class="xl76" width="302" style="height:48.75pt;border-left:none;
  width:227pt">Source (SA)</td>
  <td class="xl73" width="79" style="width:59pt">6</td>
  <td class="xl73" width="113" style="width:85pt">00:00:00:00:00</td>
  <td class="xl74" width="413" style="width:310pt">The machine the<span style="mso-spacerun:yes">&nbsp; </span>stuff is coming from</td>
 </tr>
 <tr height="84" style="mso-height-source:userset;height:63.0pt">
  <td height="84" class="xl146" width="86" style="height:63.0pt;border-top:none;
  border-left:none;width:65pt">802.1Q VLAN Tag (optional)<br>
    </td>
  <td class="xl152" width="302" style="border-top:none;border-left:none;width:227pt">Tag
  Protocol ID (TPID)</td>
  <td class="xl149" width="79" style="border-top:none;border-left:none;width:59pt">2</td>
  <td class="xl141" width="113" style="border-top:none;border-left:none;width:85pt">&nbsp;</td>
  <td class="xl141" width="413" style="border-top:none;border-left:none;width:310pt">set
  to 0x8100 for 802.1Q</td>
 </tr>
 <tr height="32" style="mso-height-source:userset;height:24.0pt">
  <td rowspan="3" height="86" class="xl147" width="86" style="border-bottom:.5pt solid black;
  height:64.5pt;width:65pt">Tag Control Information (TCI)</td>
  <td class="xl152" width="302" style="border-top:none;border-left:none;width:227pt">Priority
  Code Point (802.1p) 3bit</td>
  <td rowspan="3" class="xl164" width="79" style="border-bottom:.5pt solid black;
  border-top:none;width:59pt">2</td>
  <td class="xl141" width="113" style="border-top:none;border-left:none;width:85pt">&nbsp;</td>
  <td class="xl141" width="413" style="border-top:none;border-left:none;width:310pt">Quality
  of service class of service, if it needs priority</td>
 </tr>
 <tr height="25" style="mso-height-source:userset;height:18.75pt">
  <td height="25" class="xl153" width="302" style="height:18.75pt;border-top:none;
  border-left:none;width:227pt">DEI (Discard Eligibility Indicator)<span style="mso-spacerun:yes">&nbsp; </span>Canonical Format Indicator 1Bit</td>
  <td class="xl149" width="113" style="border-top:none;border-left:none;width:85pt">&nbsp;</td>
  <td class="xl141" width="413" style="border-top:none;border-left:none;width:310pt">Congestion</td>
 </tr>
 <tr height="29" style="mso-height-source:userset;height:21.75pt">
  <td height="29" class="xl153" width="302" style="height:21.75pt;border-top:none;
  border-left:none;width:227pt">VLAN ID (VID) 12Bit</td>
  <td class="xl149" width="113" style="border-top:none;border-left:none;width:85pt">&nbsp;</td>
  <td class="xl74" width="413" style="width:310pt">up to 4094 VLANs, 0x000 and
  0xFFF are reserved</td>
 </tr>
 <tr height="163" style="mso-height-source:userset;height:122.25pt">
  <td height="163" class="xl147" width="86" style="height:122.25pt;border-left:none;
  width:65pt">802.3 Ethertype (Length)</td>
  <td class="xl154" width="302" style="border-left:none;width:227pt">ARP;<br>
    Ethernet II (DIX) w IPv4/6;<br>
    Novell raw IEEE 802.3 non-standard variation;<br>
    IEEE 802.2 Logic Link Control (LLC);<br>
    IEEE 802.2 Subnetwork Access Protocol (SNAP) frame;</td>
  <td class="xl73" width="79" style="width:59pt">2</td>
  <td class="xl73" width="113" style="width:85pt">0x8808</td>
  <td class="xl74" width="413" style="width:310pt">0x0800: 1pv4<br>
    0x86DD: ipv6<br>
    0x0806: ARP<br>
    </td>
 </tr>
 <tr height="71" style="mso-height-source:userset;height:53.25pt">
  <td rowspan="2" height="114" class="xl159" width="56" style="border-bottom:.5pt solid black;
  height:85.5pt;border-top:none;width:42pt">Payload</td>
  <td rowspan="2" class="xl166" width="86" style="border-bottom:.5pt solid black;
  width:65pt">&nbsp;</td>
  <td class="xl150" width="302" style="width:227pt">Data</td>
  <td class="xl73" width="79" style="width:59pt">46-1500</td>
  <td class="xl73" width="113" style="width:85pt">varies</td>
  <td class="xl74" width="413" style="width:310pt">&nbsp;</td>
 </tr>
 <tr height="43" style="mso-height-source:userset;height:32.25pt">
  <td height="43" class="xl151" width="302" style="height:32.25pt;width:227pt">Padding</td>
  <td class="xl73" width="79" style="width:59pt">42</td>
  <td class="xl73" width="113" style="width:85pt">0x00</td>
  <td class="xl74" width="413" style="width:310pt">&nbsp;</td>
 </tr>
 <tr height="360" style="height:270.0pt">
  <td rowspan="2" height="405" class="xl164" width="56" style="border-bottom:.5pt solid black;
  height:303.75pt;border-top:none;width:42pt">Trailer MAC</td>
  <td class="xl148" width="86" style="border-left:none;width:65pt">&nbsp;</td>
  <td class="xl81" width="302" style="border-left:none;width:227pt">Frame Check
  Sequence (CRC) <br>
    MAC<br>
    Cyclic reduncdancy check</td>
  <td class="xl73" width="79" style="width:59pt">4</td>
  <td class="xl73" width="113" style="width:85pt">varies</td>
  <td class="xl74" width="413" style="width:310pt"><span style="mso-spacerun:yes">&nbsp;</span>allows detection of corrupted data within
  the entire frame as received on the receiver side. The standard states that
  the FCS value is computed as a function of the protected MAC frame fields:
  source and destination address, length/type field, MAC client data and
  padding (that is, all fields except the FCS) using the left shifting CRC32
  BZIP2 (poly = 0x4C11DB7, initial CRC = 0xFFFFFFFF, CRC is post complemented,
  verify value = 0x38FB2284). The standard states that data is transmitted
  least significant bit (bit 0) first, while the FCS is transmitted most
  significant bit (bit 31) first.[3]:section 3.2.9 An alternative is to
  calculate a CRC using the right shifting CRC32 (poly = 0xEDB88320, initial
  CRC = 0xFFFFFFFF, CRC is post complemented, verify value = 0x2144DF1C), which
  will result in a CRC that is a bit reversal of the FCS, and transmit both
  data and the CRC least significant bit first, <br>
    <br>
    A parity bit check. n bits + 1 exclusive or on the bits, if there isnt a
  match up there is an error.</td>
 </tr>
 <tr height="45" style="mso-height-source:userset;height:33.75pt">
  <td height="45" class="xl148" width="86" style="height:33.75pt;border-left:none;
  width:65pt">&nbsp;</td>
  <td class="xl142" width="302" style="border-left:none;width:227pt">Inter-frame
  gap</td>
  <td class="xl73" width="79" style="width:59pt">12</td>
  <td class="xl74" width="113" style="width:85pt">97 Nanoseconds</td>
  <td class="xl74" width="413" style="width:310pt"><span style="mso-spacerun:yes">&nbsp;</span>idle time between packets. After a packet
  has been sent, transmitters are required to transmit a minimum of 96 bits (12
  octets) of idle line state before transmitting the next packet.<span style="mso-spacerun:yes">&nbsp;</span></td>
 </tr>
 <!--[if supportMisalignedColumns]-->
 <tr height="0" style="display:none">
  <td width="108" style="width:81pt"></td>
  <td width="56" style="width:42pt"></td>
  <td width="86" style="width:65pt"></td>
  <td width="302" style="width:227pt"></td>
  <td width="79" style="width:59pt"></td>
  <td width="113" style="width:85pt"></td>
  <td width="413" style="width:310pt"></td>
 </tr>
 <!--[endif]-->
</tbody></table>

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