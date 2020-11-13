window.addEventListener('DOMContentLoaded',function(){
		const headings=[...document.querySelectorAll('h2')]

	// const toc=document.getElementById('TOC');
	
	const links=[...document.querySelectorAll('a')];
	links.forEach((el,idx)=>{
		el.target='__blank'
	})

	let container=document.createElement('div');
	let wrapper=document.createElement('div');

	container.id="TOC";

	function prepend(tag, newEl) {
         var x =document.querySelector(tag); 
         x.insertBefore(newEl ,x.children[0]);  
    } 


	let h=document.createElement('h3');
	h.textContent="Table of Content :";
	
	wrapper.appendChild(h);
	// wrapper.appendChild(toc);
	// const toc=document.createElement('div');
	// toc.id='TOC'
	headings.forEach(el=>{
		// console.log(el)
			let link=document.createElement('a')
			link.textContent=el.innerText.replace('', '')
			link.href='#'.concat(el.id);
			wrapper.appendChild(link)
		}
	)

	container.appendChild(wrapper);		
	// document.body.appendChild(container);
    prepend('body',container);
	// document.body.insertBefore(container);
	// document.body.appendChild(toc);
})