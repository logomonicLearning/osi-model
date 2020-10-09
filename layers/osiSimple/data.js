
const layers=[
  {
    name:"Application",
    description:"Serves as the window for users and application processes to access network services. It is involved in: resourse sharing remote file & printer access Directory services Network management",
    layerNum:7
  },
  {
    name:"Presentation",
    description:"the presentation layer is responsible for translating data from binary into ASCII, encrypting data for security and converting data from one format into another",
    layerNum:6
  },
  {
    name:"Session",
    description:"Session layer is important for connecting processeses running on diffrent stations over a network. Involved in: Establish maintain and termination of connections",
    layerNum:5
  },
  {
    name:"Transport",
    description:"Ensures that messages are delivered error-free, in sequence and with no losses of duplications. This layer It is involved in: message segmentation traffic control",
    layerNum:4
  },
  {
    name:"Network",
    description:"Controls the operations of the subnet, deciding which physical path the data takesRouting, Subnet traffic control, frame segmentation, Logical physical address mapping. subnet usage accounting",
    layerNum:3
  },
  {
    name:"Data link",
    description:"Provides error-free transfer of data frames from one node to another over the physical layer. it performs the following functions: Establishes and terminates the logical link between nodes frames traffic control frames sequencing frame acknowledgement frame delimiting frame error checking Media access control NIC -switche-NIC",
    layerNum:2
  },
  {
    name:"Physical",
    description:"Transmission and reception of raw bit streams (electrical impulses representing binary) over a physical medium. It therefore converts binary to electrical impulses to be sent out, and converts the recieved electrical impulses into binary to be sent to the upper layers",
    layerNum:1
  } 
];
