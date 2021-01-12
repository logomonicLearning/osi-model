window.addEventListener('DOMContentLoaded',function(){
	// HELPER FUNCS
	// function prepend(tag, newEl) {
 //         var x =document.querySelector(tag);
 //         x.insertBefore(newEl ,x.children[0]);
 //    }
    // const mkeEl=(el="div",classes=[],text="")=>{
    // 	let item=document.createElement(el);
    // 	classes.forEach(el=>item.classList.add(el));
    // 	item.textContent=text;
    // 	return item;
    // }

    // NAVIGATION
	const navigate=(e)=>{
		let parent=e.target.parentElement;
		let cur=parent.dataset.id;
		let menus=[...document.querySelectorAll('.menu')]
		if([...e.target.classList].includes('prev') && cur>0){
			sections.forEach(section=>section.classList.add('hidden'))
			sections[Number(cur)-1].classList.remove('hidden');
			menus.forEach((menu,idx,arr)=>menu.classList.add('hidden'));
			menus[Number(cur)-1].classList.remove('hidden');
			window.scrollTo(0,0)

		}
		if([...e.target.classList].includes('next') && cur<sections.length-1){
			sections.forEach(section=>section.classList.add('hidden'))
			sections[Number(cur)+1].classList.remove('hidden');
			menus.forEach((menu,idx,arr)=>menu.classList.add('hidden'));
			menus[Number(cur)+1].classList.remove('hidden');
			window.scrollTo(0,0)
		}
		return
	}


	// ADDS BUTTONS AND DATASET TO EACH SECTION
	const sections=Array.from(document.querySelectorAll('section'))
	sections.forEach((section,idx)=>{
		let navs=[mkeEl('button',['prev'],'Previous'),mkeEl('button',['next'],'Next')]
		section.dataset.id=idx;
		section.classList.add('hidden')
		navs.forEach(el=>{
			el.onclick=(e)=>navigate(e)
			section.appendChild(el);
		})
	});
	sections[0].classList.remove('hidden')

	// modifies links
	const links=[...document.querySelectorAll('a')];
	links.forEach((el,idx)=>{
		el.target='__blank'
	})

	// CREATE TOC MENUS
	// const container=mkeEl('div',['relative']);
	// container.id="TOC";
	// const menus=sections.map(el=>[...el.querySelectorAll('h2')])
	// menus.forEach((menu,idx)=>{
	// 		let wrap=mkeEl('div',['menu','sticky','hidden','white-bg','flex','flex--column'])
	// 		let h=mkeEl('h3',[],"Table of Content :");
	// 		wrap.appendChild(h);
	// 		wrap.dataset.id=idx;
	// 		menu.forEach(item=>{
	// 			let link=mkeEl('a',['menu__item'],item.innerText.replace('', ''))
	// 			link.href='#'.concat(item.id);
	// 			wrap.appendChild(link)
	// 		})
	// 		container.appendChild(wrap);
	// })
	// container.children[0].classList.remove('hidden')
 //    prepend('body',container);

})