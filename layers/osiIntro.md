<script type="text/javascript">
	window.addEventListener('DOMContentLoaded',function(){
		const headings=[...document.querySelectorAll('h2')]
		
	const toc=document.getElementById('TOC');

	headings.forEach(el=>{
		// console.log(el)
			let link=document.createElement('a')
			link.textContent=el.innerText.replace('', '')
			link.href='#'.concat(el.id);
			toc.appendChild(link)
		}
	)
	const links=[...document.querySelectorAll('a')];
	links.forEach((el,idx)=>{
		el.target='__blank'
	})
})
</script>
<script src="osiSimple/data.js" type="text/javascript"></script>
<script src="osiSimple/logic.js" type="text/javascript"></script>
<style type="text/css">
	h1,h2,h3,h4{
		color:#167ac6;		
		text-transform: uppercase;
		/*margin-top:50px;*/
	}
	
	#TOC{
		display:flex;
		flex-direction:column;
	}

	.markdown-body h1, .markdown-body h2, .markdown-body h3, .markdown-body h4, .markdown-body h5, .markdown-body h6 {
	    margin-top: 50px;
	    margin-bottom: 15px;
	    line-height: 1.1;
	}

</style>
<link rel="stylesheet" type="text/css" href="osiSimple/style.css">

# INTRODUCTION TO THE OPEN SYSTEMS INTERCONNECTION (OSI) MODEL

<div id="TOC">
TABLE OF CONTENT:
</div>

## Main terms

- <b>Encapsulation</b>: involves wrapping data with header information to be passed on to the Lower layer for transmission.
- <b>Decapsulation</b>: is the opposite of encapsulation where data is stripped of it's header information while traveling from the physical layer to the application layer.
- <b>Upper/Host layers</b>: L7-L5 usually work with an application and not with the hardware itself.
- <b>Lower/Media layers</b>: L4-L1 usually work with the hardware.
- <b>Protocol Data Unit (PDU)</b>: refers to a group of information added or removed by a layer of the OSI model. The reverse happens when data units go from L1 to L7. Layers strip headers.
	- [Bits] - L1
	- [Frame Header] - L2
	- [Network header] - L3
	- [Transport header] - L4
	- [Data] - L7-L5


---

## COMPONENTS OF THE INTERNET.

The internet is the physical infrastructure which enables communication between distributed applications such as the web, voip, games etc. it also provides communication services between two hosts on a network. Outlined below are it's main components:

<table>
<thead>
	<tr>
		<th>Component</th>
		<th>Description</th>
	</tr>
</thead>
<tbody>
	<tr>
		<td>Hosts</td>
		<td> Devices on the internet (computers, smartphones, tablets, WAP). Hosts are able to communicate over a network due to Network Interface Card (NIC) which provides the physical address of the device called a MAC address.</td>
	</tr>
<tr>
	<td>Links</td>
	<td> The connections between hosts on a network. They can be physical links such as Ethernet, fiberoptic or wireless.</td>
</tr>
<tr>
	<td>Routers</td>
	<td> It is a type of host which directs traffic between computers within a complex network using IP addresses (L4). Its purpose is to ensure that data reaches its intended target destination.</td>
</tr>
<tr>
	<td>Protocols</td>
	<td> Networking protocols are rules that define how data is transmitted over a network and how the pieces interconnect. All but the physical layer of the OSI has it's own set of protocols. The 2 most well known are TCP (layer 4) and IP (layer 3). 
	</td>
</tr>
</tbody>
</table>

---

## The OSI Model

The Open Systems Interconnect (OSI) is a conceptual framework developed in the 1970s to standardise communication between computers on a network. The model partitions the flow of data into seven abstraction layers to represent the transmission of <a href="" title="0s and 1s">bits</a> as electrical impulses through physical and wireless mediums such as copper cables and wifi, to the highest-level representation of data within an application. Each layer provides functionality to the layer above it and is served by the layer below through standardised <a href="">protocols</a>.

For information to be transferred over a network from one device to another, data must travel down the seven layers of the OSI model on the sending device, and then travel up the seven layers on the receiving end. Each layer processes and wraps data with header information on its way out known as encapsulation. The receiving device removes this header information as the data journeys up the layers known as decapsulation.

---

<embed src="https://www.youtube.com/embed/vv4y_uOneC0" width=500 height=300></embed>

---

## LAYERS OF THE OSI MODEL

<div id="root"></div>
<!-- <embed width="90vw" height="auto" src="./layers/osiSimple/index.html" frameborder="0"></embed> -->

---



<!-- [very good intro](https://www.youtube.com/watch?v=vv4y_uOneC0) -->



<a href="">next</a> 


