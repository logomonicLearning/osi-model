window.addEventListener('DOMContentLoaded',()=>{
// const mkeEl=(el="div",classes=[],text="")=>{
//         let item=document.createElement(el);
//         classes.forEach(el=>item.classList.add(el));
//         item.innerHTML=text;
//         return item;
//     }


  const $body=mkeEl('div',['interactive-osi-model','grid'])
  const $col1=mkeEl('div',['interactive-osi-model__layers','grid']);
  const $col2=mkeEl('div',['interactive-osi-model__pdus','grid']);
  const $col3=mkeEl('div',['interactive-osi-model__descriptions','grid']);
  $col1.appendChild(mkeEl('b',['interactive-osi-model__heading','flex','flex--center'],'OSI Layers'))
  $col2.appendChild(mkeEl('b',['interactive-osi-model__heading','flex','flex--center'],'PDUs'))
  $col3.appendChild(mkeEl('b',['interactive-osi-model__heading','flex','flex--center'],'Description'))

//   events
const showElement=(el)=>{
  el.classList.remove('hidden');
}
const hideElements=(elements)=>{
  elements.forEach(el=>el.classList.add('hidden'));
}
const activateElement=(el)=>{
  el.classlist.add('active')
}
const deactivateElements=(elements)=>{
  elements.forEach(el=>el.classList.remove('active'));
}
const appendElements=(el,items)=>{
  items.forEach(item)=>{
    el.appendChild(item);
  }
}

// EVENTS
const handleOSILayerClick=(e)=>{
  let id=e.target.dataset.id;
  let $items=[...document.querySelectorAll('.interactive-osi-model__layer')];
  // hide([...document.querySelectorAll('.interactive-osi-model__layer')]);
  deactivateElements($items);
  let $descriptions=[...document.querySelectorAll('.interactive-osi-model__description')];
  hideElements($descriptions)
  // $descriptions.forEach((el,idx,arr)=>{
  //   el.classList.add('hidden')
  // })
  $descriptions[id].classList.remove('hidden');
  e.target.classList.add('active');

}

// DOM element Generation
OSILayers.forEach((layer,idx,arr)=>{
  let $layer=mkeEl('div',["interactive-osi-model__layer", "flex","flex--center","center"],`L${layer.layerNum}:${layer.name}`);
  $layer.dataset.id=idx;
  $layer.onclick=(e)=>  handleOSILayerClick(e)

  let $description=mkeEl('div',['interactive-osi-model__description','flex','hidden'],`${layer.description}`);
  $description.dataset.id=idx;

  $col1.appendChild($layer);
  $col3.appendChild($description);
})

pdus.forEach(pdu=>{
  $col2.appendChild(mkeEl('div',['interactive-osi-model__pdu','flex','flex--center','center'],pdu));
});
activateElement($col.children[1]);
// $col1.children[1].classList.add('active');
showElement($col3.children[1])
// $col3.children[1].classList.remove('hidden');
appendElements($body,[$col1,$col2,$col3]);
// $body.appendChild($col1)
// $body.appendChild($col2)
// $body.appendChild($col3)

document.getElementById('interactive-osi-model').appendChild($body)


})
