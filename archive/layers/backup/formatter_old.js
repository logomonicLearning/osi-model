window.addEventListener('DOMContentLoaded',function(){
	function prepend(tag, newEl) {
         var x =document.querySelector(tag);
         x.insertBefore(newEl ,x.children[0]);
    }

	const headings=[...document.querySelectorAll('h2')];
	const links=[...document.querySelectorAll('a')];

	const container=document.createElement('div');
	const wrapper=document.createElement('div');
	const h=document.createElement('h3');


	links.forEach((el,idx)=>{
		el.target='__blank'
	})

	container.id="TOC";
	h.textContent="Table of Content :";
	wrapper.appendChild(h);
	wrapper.classList.add('flex', 'flex--column','sticky');
	wrapper.id="TOC__wrapper"

	headings.forEach(el=>{
		// console.log(el)
			let item=document.createElement('div');
			item.classList.add('menu-item','relative');

			let link=document.createElement('a')
			link.textContent=el.innerText.replace('', '')
			link.href='#'.concat(el.id);
			link.classList.add('relative');
			item.appendChild(link)
			wrapper.appendChild(item)
		}
	)

	container.appendChild(wrapper);
    prepend('body',container);

})