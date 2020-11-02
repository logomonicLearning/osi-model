// functions

window.addEventListener('DOMContentLoaded',()=>{
  const mkeEl=(el)=>document.createElement(el)

  const center=(items)=>items.forEach(el=>el.classList.add("flex","flex--center"))


  // elements

  const groups=mkeEl('div');
  const osi=mkeEl('div');
  const left=mkeEl('div');
  left.classList.add('left','grid');
  const right=mkeEl('div');
  right.classList.add('right','flex')
  osi.classList.add('osi','grid');
  


//   layers.forEach(el=>{
//     let layer=mkeEl('div')
//     layer.classList.add('layer','grid')
//   //   layers
//     let name=mkeEl('div')
//     name.classList.add('layer__name')
//     let description=mkeEl('div')
//     description.classList.add('layer__description')
//     let layerNum=mkeEl('div')
//     layerNum.classList.add('layer__number')
//     center([name,description,layerNum])

//   //   adding the content to element
//     name.textContent=el.name
//     description.textContent=el.description
//     layerNum.textContent=el.layerNum

//     layer.appendChild(layerNum)
//     layer.appendChild(name)
//     layer.appendChild(description)
//     osi.appendChild(layer)
//   })

// NEW STUFF

layers.forEach((el,idx)=>{
    let layer=mkeEl('div')
    layer.classList.add('layer', 'layer__left','grid');
    layer.dataset.idx=idx;
  //   layers
    let name=mkeEl('div')
    name.classList.add('layer__name')
    name.id=`layer__name${idx}`;
    name.dataset.idx=idx;
    let layerNum=mkeEl('div')
    layerNum.classList.add('layer__number');

    center([name,layerNum])

  //   adding the content to element
    name.textContent=el.name
    layerNum.textContent=el.layerNum

    layer.appendChild(layerNum)
    layer.appendChild(name)
    left.appendChild(layer)
  })


layers.forEach((el,idx)=>{
//     let layer=mkeEl('div')
//     layer.classList.add('layer')
  //   layers

    let description=mkeEl('div')
    description.classList.add('layer__description','absolute')
    description.id=`layer__description${idx}`;
    description.dataset.idx=idx;
    center([description])
    description.textContent=el.description
    right.appendChild(description)
})


osi.appendChild(left);
osi.appendChild(right);

//   END OF NEW



  document.getElementById('root').appendChild(osi)

  // Events
  // description transition and interactivity
  // there was a bit of conflict between the data and the dom elements so remembered to use the $ to denote something in the dom. this is a really important concept to get accross to noobs.

// OLD
//   const $layers=[...document.querySelectorAll('.layer')];
//   $layers.forEach(el=>{
//     el.onmouseenter=(e)=>{
//       el.children[2].classList.add('stretch');
//     }
//   })

// NEW

const $descriptions=[...document.querySelectorAll('.layer__description')];
 const $layers=[...document.querySelectorAll('.layer')];


  $layers.forEach(el=>{
    el.onmouseenter=(e)=>{
      let idx=e.target.dataset.idx;
      $descriptions.forEach(el=>{
        el.classList.remove('show');
      })
      $descriptions[idx].classList.add('show');
    }
  })

  $layers.forEach(el=>{
    el.onmouseleave=()=>{
       $descriptions.forEach(el=>{
        el.classList.remove('show');
      })
    }
  });

  
  
  

//   END OF NEW

// OLD
//   $layers.forEach(el=>{
//     el.onmouseleave=()=>{
//       el.children[2].classList.remove('stretch');
//     }
//   });


})
