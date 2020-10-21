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

# HISTORY OF THE INTERNET

In the early and mid-1970s, networking was either government-sponsored <span style="display:none">(NPL network in the UK, ARPANET in the US, CYCLADES in France)</span> or vendor-developed with proprietary standards<span style="display:none">, such as IBM's Systems Network Architecture and Digital Equipment Corporation's DECnet</span>. Public data networks emerge shortly after in the late 1970s, using the X.25 standard.

<span style="display:none">The Experimental Packet Switched System in the UK circa 1973-5 identified the need for defining higher level protocols.[1] The UK National Computing Centre publication 'Why Distributed Computing' which came from considerable research into future configurations for computer systems,[3] resulted in the UK presenting the case for an international standards committee to cover this area at the ISO meeting in Sydney in March 1977.[4]</span>


Beginning in 1977, the International Organization for Standardization (ISO) conducted a program to develop general standards and methods of networking. Meanwhile in France, the International Telegraph and Telephone Consultative Committee (CCITT) were developing similar networking model. The OSI model was first defined in raw form in Washington, DC in February 1978 by Hubert Zimmermann of France and the refined but still draft standard was published by the ISO in 1980. Although not a standard itself, it was a framework in which future standards could be defined. as <span style="display:none"> The drafters of the reference model had to contend with many competing priorities and interests.</span> The rate of technological change made it necessary to define standards that new systems could converge to rather than standardizing procedures after the fact;<span style="display:none"> the reverse of the traditional approach to developing standards.[6]</span> 

In 1983, the CCITT and ISO documents were merged to form The Basic OSI Reference Model <span style="display:none">, OSI Reference Model, or simply OSI model,  </span> and was published in 1984 by both the ISO, as <a href="">standard ISO 7498</a>, and the CCITT as standard <a href="">X.200</a>. It promoted the idea of a consistent model of protocol layers, defining interoperability between network devices and software.

<span style="display:none">OSI had two major components, an abstract model of networking, called the Basic Reference Model or seven-layer model, and a set of specific protocols. The OSI reference model was a major advance in the teaching of network concepts. </span>

The concept of a seven-layer model was provided by the work of Charles Bachman at Honeywell Information Systems.[8] Various aspects of OSI design evolved from experiences with the NPL network, ARPANET, CYCLADES, EIN, and the International Networking Working Group (IFIP WG6.1). <span style="display:none">In this model, a networking system was divided into layers. Within each layer, one or more entities implement its functionality. Each entity interacted directly only with the layer immediately beneath it and provided facilities for use by the layer above it.</span>

---

<embed width=500 height=300 src="https://www.youtube.com/embed/9hIQjrMHTv4
"></embed>

---

## TIMELINE OF THE INTERNET

<table>
<tr>
    <td>1957</td>
<td> timesharing replaced batch processing. share one computer with multiple users. it was used by scientists and researchers. good because if one computer went down the others wouldnt follow</td></tr>
<tr>
    <td>1962</td> <td>JCR Licklider proposed the idea of computers communicating over a network</td></tr>
<tr>
    <td>1969</td>
<td>Arpanet was made by the Defence Advanced Researcn Project Agency (DARPA).  login Stanford to ucla, only recieved the 1st 2 letters. NCP was replaced by TCP</td>
</tr>
<tr><td></td><td>RAND Corporation military Network  (America)</td></tr>
<tr><td></td><td>National Physical Laboratory (England)</td></tr>
<tr><td></td><td>Cyclades: scientifirc research (France)</td></tr>
<tr>
    <td>1971</td>
    <td> university of hawaii, and Ray tomlinson made email introducing the @ symbol.</td>
</tr>
<tr>vinton cerf TCP/IP</tr>
<tr>
    <td>1991</td>
     <td>Tim Berner-lee the world wide web. accessible to anyone with an internet connection. </td>
</tr>
<tr>
    <td>1992</td>
    <td>Erwise first gui internet browser</td>
</tr>
<tr>
    <td>1993</td>
    <td> mosaic influenced netscape in 1994.</td>
</tr>
<tr>
    <td></td>
    <td> AOL at this point you couldnt use the internet and your phone at the same time. as it was dialup.</td>
</tr>
</table>


