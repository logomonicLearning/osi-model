window.addEventListener('DOMContentLoaded',()=>{

function prepend(tag, newEl) {
         var x =document.querySelector(tag);
         x.insertBefore(newEl ,x.children[0]);
    }

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


const container=mkeEl('div',['relative']);
	container.id="TOC";
	const menus=sections.map(el=>[...el.querySelectorAll('h2')])
	menus.forEach((menu,idx)=>{
			let wrap=mkeEl('div',['menu','sticky','hidden','white-bg','flex','flex--column'])
			let h=mkeEl('h3',[],"Table of Content :");
			wrap.appendChild(h);
			wrap.dataset.id=idx;
			menu.forEach(item=>{
				let link=mkeEl('a',['menu__item'],item.innerText.replace('', ''))
				link.href='#'.concat(item.id);
				wrap.appendChild(link)
			})
			container.appendChild(wrap);
	})
	container.children[0].classList.remove('hidden')
    prepend('body',container);

})