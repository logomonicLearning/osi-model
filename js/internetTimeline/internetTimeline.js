const internetTimeline=[
	{
		year:1954,
		title:"Time-Sharing",
		url:"https://en.wikipedia.org/wiki/Time-sharing",
		description:`The concept is claimed to have been first described by John Backus in the 1954 summer session at MIT,[5] and later by Bob Bemer in his 1957 article "How to consider a computer" in Automatic Control Magazine.[6][7] In a paper published in December 1958 by W. F. Bauer,[8] he wrote that "The computers would handle a number of problems concurrently...Timesharing replaced batch processing. share one computer with multiple users. it was used by scientists and researchers. good because if one computer went down the others wouldnt follow`,
	},
	{
		year:1962,
		title:"Time-sharing Network",
		url:"https://en.wikipedia.org/wiki/Time-sharing",
		description:`In October 1962, Licklider was appointed head of the Information Processing Techniques Office (IPTO) at ARPA, the United States Department of Defense Advanced Research Projects Agency,[14] an appointment he kept through July 1964.[15][16] In April 1963, he sent a memo to his colleagues in outlining the early challenges presented in establishing a time-sharing network of computers with the software of that time.[17] Ultimately, his vision led to ARPANet, the precursor of today's Internet.[18]...JCR Licklider proposed the idea of computers communicating over a network`,
	},
	{
		year:1966,
		title:"Arpanet",
		url:"https://en.wikipedia.org/wiki/ARPANET",
		description:`Building on the ideas of J. C. R. Licklider, Bob Taylor initiated the ARPANET project in 1966 to enable access to remote computers.[2] Taylor appointed Larry Roberts as program manager. Roberts made the key decisions about the network design.[3] He incorporated Donald Davies’ concepts and designs for packet switching,[4] and sought input from Paul Baran.[5] ARPA awarded the contract to build the network to Bolt Beranek & Newman who developed the first protocol for the network.[6] Roberts engaged Leonard Kleinrock at UCLA to develop mathematical methods for analyzing the packet network technology.[5]...Arpanet was made by the Defence Advanced Researcn Project Agency (DARPA). login Stanford to ucla, only recieved the 1st 2 letters. NCP was replaced by TCP `,
	},
	{
		year:"",
		title:"",
		description:`RAND Corporation military Network (America)`,
	},
	{
		year:"",
		title:"",
		description:`National Physical Laboratory (England)`,
	},
	{
		year:"",
		title:"",
		description:`Cyclades: scientifirc research (France)`,
	},
	{
		year:1971,
		title:"Email",
		url:"https://en.wikipedia.org/wiki/Email",
		description:`Ray Tomlinson is credited as the inventor of email at University of Hawaii in 1971. He developed the first system able to send mail between users on different hosts across the ARPANET, using the @ sign to link the user name with a destination server. By the mid-1970s, this was the form recognized as email.`,
	},
	{
		year:1993,
		title:"Browser",
		url:"https://en.wikipedia.org/wiki/Web_browser",
		description:`1993 was a landmark year with the release of Mosaic, credited as "the world's first popular browser".  Its innovative graphical interface influenced by Erwise first gui internet browser made the year before. The browser made the World Wide Web system easy to use and thus more accessible to the average person....Mosaic influenced netscape in 1994.`,
	},
	{
		year:1974,
		title:"TCP &amp; packet switching",
		url:"https://en.wikipedia.org/wiki/Transmission_Control_Protocol",
		description:`In May 1974, Vint Cerf and Bob Kahn described an internetworking protocol for sharing resources using packet switching among network nodes.[1] The authors had been working with Gérard Le Lann to incorporate concepts from the French CYCLADES project into the new network.[2] The specification of the resulting protocol, RFC 675 (Specification of Internet Transmission Control Program), was written by Vint Cerf, Yogen Dalal, and Carl Sunshine, and published in December 1974. It contains the first attested use of the term Internet, as a shorthand for internetworking.[3]...All these networks communicated with different protocols. so TCP was made to standardise communication.`,
	},
	{
		year:1989,
		title:"World Wide Web",
		url:"https://en.wikipedia.org/wiki/World_Wide_Web",
		description:`Timothy Berners-Lee brit, spent time with cern nuclear research. wantaed to manage dthe scientists information allowing them to share infor so that they could make quicker progress. made an interface using http, html and url that made internet browsers possible calling it the world wide web. he made the first website. site to the first website...Berners-Lee proposed an information management system on 12 March 1989,[5][6] then implemented the first successful communication between a Hypertext Transfer Protocol (HTTP) client and server via the Internet in mid-November...  accessible to anyone with an internet connection. The first web browser, called WorldWideWeb, was created in 1990 by Sir Tim Berners-Lee.[6] He then recruited Nicola Pellow to write the Line Mode Browser, which displayed web pages on dumb terminals; it was released in 1991.[7]`,
	},
	{
		year:1977,
		title:"OSI Model",
		url:"https://en.wikipedia.org/wiki/OSI_model",
		description:`Beginning in 1977, the International Organization for Standardization (ISO) conducted a program to develop general standards and methods of networking. Meanwhile in France, the International Telegraph and Telephone Consultative Committee (CCITT) were developing similar networking model. The OSI model was first defined in raw form in Washington, DC in February 1978 by Hubert Zimmermann of France and the refined but still draft standard was published by the ISO in 1980.`,
	},
	{
		year:1958,
		title:"DARPA",
		url:"https://en.wikipedia.org/wiki/DARPA",
		description:`Originally known as the Advanced Research Projects Agency (ARPA), the agency was created on February 7, 1958 by President Dwight D. Eisenhower in response to the Soviet launching of Sputnik 1 in 1957. By collaborating with academic, industry, and government partners, DARPA formulates and executes research and development projects to expand the frontiers of technology and science, often beyond immediate U.S. military requirements. DARPA planned to setup a large scale computer network to accelerate knowledge transfer, and to avoid data loss in case of a nuclear threat. DARPA-funded projects have provided significant technologies that influenced many non-military fields, such as computer networking, the basis for the modern Internet, and graphical user interfaces`,
	},
	{
		year:"",
		title:"",
		description:``,
	},

]

// let timeline=internetTimeline.sort((a,b)=>a.year-b.year)



window.addEventListener('DOMContentLoaded',()=>{
//     const timeline=internetTimeline.sort((a,b)=>a.year-b.year)
const timeline=internetTimeline.filter(el=>el.year).sort((a,b)=>a.year-b.year)
//         debugger;

//     console.table(timeline)

// EVENTS
    const handleYearClick=(e)=>{
    	let id=Number(e.target.dataset.id);
    	let $details=[...document.querySelectorAll('.interactive-timeline__description')]
//     	debugger
        let $items=[...document.querySelectorAll('.interactive-timeline__year__row')];

        $details.forEach(el=>{
        	el.classList.add('hidden');
        })
        $items.forEach(el=>{
        	el.classList.remove('active');
        })
        e.target.parentElement.classList.add('active');
    	$details[id].classList.remove('hidden');
    }

//  ELEMENTS GENERATION
    const $body=mkeEl('div',['grid','interactive-timeline'])
    const $col1=mkeEl('div',['grid','interactive-timeline__years','left-col__border']);
    $col1.appendChild(mkeEl('b',['flex','flex--center','item-bottom--border'],'Events'))
    const $col2=mkeEl('div',['grid','interactive-timeline__descriptions','right-col__border']);
    $col2.appendChild(mkeEl('b',['flex','flex--center','item-bottom--border'],'Details'))
    timeline.forEach((timeline,idx,arr)=>{
    	    let $row=mkeEl('div',['grid','interactive-timeline__year__row','item-bottom--border'])
// first item
    	    let $year=mkeEl('div',['interactive-timeline__year','flex','flex--center','item-right--border','item'],timeline.year)
    	    $year.dataset.id=idx;
    	    $year.onclick=(e)=>{
    	    	handleYearClick(e)
    	    }
//     	    2nd item
    	    let $title=mkeEl('b',['interactive-timeline__event','flex','flex--center','align-left'],timeline.title)
    	    $title.href=timeline.url;
    	    $title.target="blank";

// appending
    	    $row.appendChild($year)
    	    $row.appendChild($title)
// third item
    	    let $description=mkeEl('div',['grid','interactive-timeline__description','hidden','flex','flex--center'],timeline.description)

            $col1.appendChild($row)
            $col2.appendChild($description)
    })
    $col1.children[1].classList.add('active');
    $col2.children[1].classList.remove('hidden');
    $body.appendChild($col1);
    $body.appendChild($col2);
    document.getElementById('interactive-timeline').appendChild($body)

})