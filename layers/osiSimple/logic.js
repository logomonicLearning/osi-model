// functions

window.addEventListener('DOMContentLoaded',()=>{
  const mkeEl=(el)=>document.createElement(el)

  const center=(items)=>items.forEach(el=>el.classList.add("flex","flex--center"))


  // elements

  const groups=mkeEl('div')
  const osi=mkeEl('div');
  osi.classList.add('osi','grid')


  layers.forEach(el=>{
    let layer=mkeEl('div')
    layer.classList.add('layer','grid')
  //   layers
    let name=mkeEl('div')
    name.classList.add('layer__name')
    let description=mkeEl('div')
    description.classList.add('layer__description')
    let layerNum=mkeEl('div')
    layerNum.classList.add('layer__number')
    center([name,description,layerNum])

  //   adding the content to element
    name.textContent=el.name
    description.textContent=el.description
    layerNum.textContent=el.layerNum

    layer.appendChild(layerNum)
    layer.appendChild(name)
    layer.appendChild(description)
    osi.appendChild(layer)
  })

  document.getElementById('root').appendChild(osi)

  // Events
  // description transition and interactivity
  // there was a bit of conflict between the data and the dom elements so remembered to use the $ to denote something in the dom. this is a really important concept to get accross to noobs.

  const $layers=[...document.querySelectorAll('.layer')];
  $layers.forEach(el=>{
    el.onmouseenter=()=>{
      el.children[2].classList.add('stretch');
    }
  })

  $layers.forEach(el=>{
    el.onmouseleave=()=>{
      el.children[2].classList.remove('stretch');
    }
  });


})
