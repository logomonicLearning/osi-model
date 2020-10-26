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