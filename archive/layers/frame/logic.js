// functions

window.addEventListener('DOMContentLoaded',()=>{
  const mkeEl=(el)=>document.createElement(el)

  const center=(items)=>items.forEach(el=>el.classList.add("flex","flex--center"))


  // elements

  // const groups=mkeEl('div');
  const osi=mkeEl('div');
  osi.classList.add('osi','grid');
  const col1=mkeEl('div');
  const col2=mkeEl('div');
  const col3=mkeEl('div');

//   col1 gategories
  col1.style.cssText="grid-template-rows:4fr 3fr";

  [
    {
      name:'Host Layers',
      color:'blue'
    },
    {
      name:'Media Layers',
      color:"red"
    }
  ].forEach(el=>{
    let row=mkeEl('div');
    row.textContent=el.name;
    row.classList.add('flex','flex--center');
    row.style.background=el.color
    col1.appendChild(row)
  });

  col1.classList.add('grid')
//   col1.style.cssText=

// layernum and layer name
  col2.classList.add('left','grid');
  const right=mkeEl('div');
  right.classList.add('right','flex')




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
    layer.style.cssText="border:1px solid grey;";
    layer.classList.add('layer', 'layer__left','grid');
    layer.dataset.idx=idx;
  //   layers
    let name=mkeEl('div')
    name.classList.add('layer__name')
    name.id=`layer__name${idx}`;
    name.dataset.idx=idx;
//    layer Num
    let layerNum=mkeEl('div')
    layerNum.classList.add('layer__number');

// layer PDU
//     let pdu=mkeEl('div');
//     pdu.classList.add('pdu')
//     pdu.textContent=el.pdu;


    center([name,layerNum])

  //   adding the content to element
    name.textContent=el.name
    layerNum.textContent=el.layerNum

    layer.appendChild(layerNum)
    layer.appendChild(name)
//     layer.appendChild(pdu)
    col2.appendChild(layer)
  })

// col3 (PDU)
//    [
//     {
//       pdu:'Data'
//     },
//     {
//       pdu:'Segment'

//     },
//     {
//       pdu:'Packets'

//     },
//     {
//       pdu:'Frame'

//     },
//     {
//       pdu:'Bit stream'

//     }
//   ]

   const pdus=[
    {
      pdu:'Data'
    },
    {
      pdu:'Segment'

    },
    {
      pdu:'Packets'

    },
    {
      pdu:'Frame'

    },
    {
      pdu:'Bit stream'

    }
  ]


pdus.forEach(el=>{
    let row=mkeEl('div');
    row.textContent=el.pdu;
    row.style.cssText="border:1px solid grey;"
    center([row])
//     row.classList.add('flex','flex--center');
//     row.style.background=el.color
    col3.appendChild(row)
  });

 col3.classList.add('grid');
 col3.style.cssText="grid-template-rows:3fr 1fr 1fr 1fr 1fr;";


// description (col4)
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




  col1.classList.add('grid')

//


osi.appendChild(col1);
osi.appendChild(col2);
osi.appendChild(col3);
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
    el.onclick=(e)=>{
      $layers.forEach(el=>el.children[1].classList.remove('highlight'))
      e.target.classList.add('highlight')
      let idx=e.target.dataset.idx;
      $descriptions.forEach(el=>{
        el.classList.remove('show');
      })
      $descriptions[idx].classList.add('show');
    }
  })

//   $layers.forEach(el=>{
//     el.onmouseleave=()=>{
//        $descriptions.forEach(el=>{
//         el.classList.remove('show');
//       })
//     }
//   });





//   END OF NEW

// OLD
//   $layers.forEach(el=>{
//     el.onmouseleave=()=>{
//       el.children[2].classList.remove('stretch');
//     }
//   });


})
