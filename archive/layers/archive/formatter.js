window.addEventListener('DOMContentLoaded',function(){
	// helper funcs
	function prepend(tag, newEl) {
         var x =document.querySelector(tag);
         x.insertBefore(newEl ,x.children[0]);
    }
    const mkeEl=(el="div",classes=[],text="")=>{
    	let item=document.createElement(el);
    	classes.forEach(el=>item.classList.add(el));
    	// item.classList.add(classes);
    	item.textContent=text;
    	return item;
    }
	// const headings=[...document.querySelectorAll('h2')];
	// dom manipulation and creation
	const sections=Array.from(document.querySelectorAll('section'))
	// adds buttons and dataset to each section
	sections.forEach((section,idx)=>{
		let navs=[mkeEl('button',['prev'],'Previous'),mkeEl('button',['next'],'Next')]
		section.dataset.id=idx
		navs.forEach(el=>{
			el.onclick=(e)=>navigate(e)
			section.appendChild(el);
		})
	});



// NAVIGATION
	const navigate=(e)=>{
		// console.log([...e.target.classList])
		let parent=e.target.parentElement;
		let cur=parent.dataset.id;
		let menus=[...document.querySelectorAll('.menu')]
		if([...e.target.classList].includes('prev') && cur>0){
			sections.forEach(section=>section.classList.add('hidden'))
			sections[Number(cur)-1].classList.remove('hidden');
			// menus.forEach(menu=>menu[0].parentElement.classList.add('hidden'));
			// menus[Number(cur)+1].classList.remove('hidden');
			menus.forEach((menu,idx,arr)=>menu.classList.add('hidden'));
			menus[Number(cur)-1].classList.remove('hidden');
		}
		if([...e.target.classList].includes('next') && cur<sections.length-1){
			sections.forEach(section=>section.classList.add('hidden'))
			sections[Number(cur)+1].classList.remove('hidden');
			// menus.forEach(menu=>menu[0].parentElement.classList.add('hidden'));
			// menus[Number(cur)+1].classList.remove('hidden');
			// menus.forEach((menu,idx,arr)=>arr[idx][0].parentElement.classList.add('hidden'));
			// menus[Number(cur)+1][0].parentElement.classList.remove('hidden');
			menus.forEach((menu,idx,arr)=>menu.classList.add('hidden'));
			menus[Number(cur)+1].classList.remove('hidden');
		}
		return
	}

	const links=[...document.querySelectorAll('a')];
	links.forEach((el,idx)=>{
		el.target='__blank'
	})

	const container=document.createElement('div');
	container.id="TOC";
	const wrapper=mkeEl('div',['flex', 'flex--column','sticky']);
	wrapper.id="TOC__wrapper"


	// const sections=[...document.querySelectorAll('section')];
	// sections.forEach((el,idx)=>{
	// 	let links=[...document.querySelectorAll('h2')];
	// })

	// toc stuff
	// wrapper.classList.add('flex', 'flex--column','sticky');
	const menus=sections.map(el=>[...el.querySelectorAll('h2')])
	menus.forEach((menu,idx)=>{
		// console.log(el)
			let wrap=mkeEl('div',['menu','absolute','white-bg'])
			// wrap.classList.add('menu','absolute','white-bg');
			let h=mkeEl('h3',[],"Table of Content :");
			// h.textContent="Table of Content :";
			wrap.appendChild(h);
			wrap.dataset.id=idx;
			// let item=document.createElement('div');
			// item.classList.add('menu-item','relative');
			menu.forEach(item=>{
				let link=document.createElement('a')
				link.textContent=item.innerText.replace('', '')
				link.href='#'.concat(item.id);
				link.classList.add('relative');
				wrap.appendChild(link)
				// wrap.appendChild(item)
			})

			wrapper.appendChild(wrap);
		}
	)

	container.appendChild(wrapper);
    prepend('body',container);

})