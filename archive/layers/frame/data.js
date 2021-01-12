
const frame=[
  {
    name:"Preamble",
    description:": 7 bytes 101010 of an Ethernet frame consists of a 56-bit (7-byte) pattern of alternating 1 and 0 bits, which allows devices on the network to easily detect a new incoming frame. The SFD is designed to break this pattern, and signal the start of the actual frame.",
    size:7
  },
  {
    name:"SFD",
    description:": 101011 is the 8-bit (1-byte) value marking the end of the preamble of an Ethernet frame. The SFD is immediately followed by the destination MAC address. It has the value 10101011.",
    size:"1"
  },
  {
    name:"Dest MAC",
    description:": 6 bytes where to send to",
    size:"6"
  },
  {
    name:"Src MAC",
    description:": 6 bytes where it came from",
    size:"6"
  },
  {
    name:"TPID",
    description:"Tag Protocol Identifier",
    size:"2"
  },
  {
    name:"TCI",
    description:"Tag Control Information",
    size:"2"
  },
  {
    name:"EtherType",
    description:"Aka the Length lets the header know what is being sent",
    size:"2"
  },
  {
    name:"Payload",
    description:" the actual data being sent",
    size:"46-1500"
  },
  {
    name:"CRC/FCS",
    description:"Cyclic Redundancy Chech or Frame check Sequence is a  (4 bytes) ensure there is not errors between frames). a form of parity check, the bits sent is not the same as the one recieved",
    size:"4"
  }
];
