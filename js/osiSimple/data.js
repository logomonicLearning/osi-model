const pdus=[
  {
    name:'Data',
    url:'',
    description:`The PDU of layers 7-5 is called data. `
  },
  {
    name:'Segment',
    url:'',
    description:`Segments are the PDUs of the Transport Layer which attaches the Sequence number (if using TCP)`
  },
  {
    name:'Packets',
    url:'',
    description:`A Packet is the PDU of the network layer. This adds the source and destination IP addresses to the header used by Routers`
  },
  {
    name:'Frame',
    url:'',
    description:`A frame is the PDU of the Datalink layer. It contains the sender & receivers physical MAC address and the CRC in the trailer`
  },
  {
    name:'Bit stream',
    url:'',
    description:`A bit stream also known as binary sequence, is a sequence of bits.`
  }]
const OSILayers=[
  {
    name:"Application",
    url:'https://www.youtube.com/embed/-wzL3jcky-g',
    description:"Serves as the window for users and application processes to access network services. It is involved in: resourse sharing remote file & printer access Directory services Network management",
    layerNum:7,
    pdu:'Data'
  },
  {
    name:"Presentation",
    url:'https://www.youtube.com/embed/AtITX-U2mL4',
    description:"the presentation layer is responsible for translating data from binary into ASCII, encrypting data for security and converting data from one format into another",
    layerNum:6,
    pdu:'Data'
  },
  {
    name:"Session",
    url:'https://www.youtube.com/embed/aPcku3orRmI',
    description:"Session layer is important for connecting processeses running on diffrent stations over a network. Involved in: Establish maintain and termination of connections",
    layerNum:5,
    pdu:'Data'
  },
  {
    name:"Transport",
    url:'https://www.youtube.com/embed/DsQcX-7n6fY',
    description:"Ensures that messages are delivered error-free, in sequence and with no losses of duplications. This layer It is involved in: message segmentation traffic control",
    layerNum:4,
    pdu:'Segment'
  },
  {
    name:"Network",
    url:'https://www.youtube.com/embed/dNInnvmRivI',
    description:"Controls the operations of the subnet, deciding which physical path the data takesRouting, Subnet traffic control, frame segmentation, Logical physical address mapping. subnet usage accounting",
    layerNum:3,
    pdu:'Packet'
  },
  {
    name:"Data link",
    url:'https://www.youtube.com/embed/0b3h7CdJRpQ',
    description:"Provides error-free transfer of data frames from one node to another over the physical layer. it performs the following functions: Establishes and terminates the logical link between nodes frames traffic control frames sequencing frame acknowledgement frame delimiting frame error checking Media access control NIC -switche-NIC",
    layerNum:2,
    pdu:'Frame'
  },
  {
    name:"Physical",
    url:'https://www.youtube.com/embed/hRr20m10NLw',
    description:"Transmission and reception of raw bit streams (electrical impulses representing binary) over a physical medium. It therefore converts binary to electrical impulses to be sent out, and converts the recieved electrical impulses into binary to be sent to the upper layers",
    layerNum:1,
    pdu:'Bits'
  }
];
