pdus=[
	{
	name:"segment",
	description:"",
	layer:"",
	parts:[
		{
			name:'Preamble',
			size:7,
			description:` 7 bytes 101010 of an Ethernet frame consists of a 56-bit (7-byte) pattern of alternating 1 and 0 bits, which allows devices on the network to easily detect a new incoming frame. The SFD is designed to break this pattern, and signal the start of the actual frame.`
		},
		{
			name:'SFD',
			size:1,
			description:`: 101011 is the 8-bit (1-byte) value marking the end of the preamble of an Ethernet frame. The SFD is immediately followed by the destination MAC address. It has the value 10101011.`
		},
		{
			name:'Dest MAC',
			size:6,
			description:`where to send to`
		},
		{
			name:'Src MAC',
			size:6,
			description:`where it came from`
		},
		{
			name:'TIPD',
			size:2,
			description:``
		},
		{
			name:'TCI',
			size:2,
			description:``
		},
		{
			name:'Payload',
			size:"46-1500",
			description:``
		},
		{
			name:'CRC/FCS',
			size:4,
			description:`ensure there is not errors between frames). a form of parity check, the bits sent is not the same as the one recieved`
		},
		{
			name:'Inter Packet Gap',
			size:"",
			description:``
		},

	]
	}

]