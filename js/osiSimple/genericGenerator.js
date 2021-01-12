window.addEventListener('DOMContentLoaded',()=>{
const items=OSILayers;
// creating col1 & col3 data
const init=(items)=>{
  // const $container= document.getElementById('interactive-osi-model');
  // const $container=$c?$c:mkeEl('div',['root','grid'])
  // const $body=mkeEl('div',['interactive-body','grid'])
  const $container=mkeEl('div',['container','grid','grid--row'])
  $container.id='root';
  const $col1=mkeEl('div',['items','column__left--border','grid','grid--column']);
  const $col2=mkeEl('div',['descriptions','column__right--border','grid','grid--column']);
  $col1.appendChild(mkeEl('b',['items__heading','flex','flex--center','item--border-bottom'],'Items'))
  $col2.appendChild(mkeEl('b',['descriptions__heading','item--border-bottom','flex','flex--center'],'Description'))

  items.forEach((item,idx,arr)=>{
        let $item=mkeEl('div',["item","item--border-bottom", "flex","flex--center","center"],`${item.name}`);
        let $description=mkeEl('div',["description",'flex','flex--column','hidden'],`${item.description}`);
        $item.dataset.id=idx;
        $description.dataset.id=idx;
        $item.onclick=(e)=> handleItemClick(e,$container)
        appendElements($col1,[$item])
        appendElements($col2,[$description])
    })

    document.body.appendChild($container)
    appendElements($container,[$col1,$col2]);
    activateElement($col1.children[1]);
    showElement($col2.children[1])
}


init(items)




})


/*
all now in mkeEl.js
hideElements
activateElement
deactivateElement
deactivateElements
appendElements
mkeEl*/

// EVENTHandlers
// const handleOSIItemClick=(e)=>{
//   let id=e.target.dataset.id;
//   // let $items=[...document.querySelectorAll('.interactive-osi-model__item')];
//   let $items=[...$container.querySelectorAll('.item')];
//   deactivateElements($items);
//   activateElement(e.target)
//   // let $descriptions=[...$container.querySelectorAll('.interactive-osi-model__description')];
//   let $descriptions=[...$container.querySelectorAll('.description')];

//   hideElements($descriptions)
//   showElement($descriptions[id])
// }

// const handlePDUClick=()=>{
//   let id=e.target.dataset.id;
//   let $items=[...document.querySelectorAll('.interactive-osi-model__pdu')]
//   activateElement(e.target);
//   let $descriptions=[...document.querySelectorAll('.interactive-osi-model__description')];
//   hideElements($descriptions)
//   showElement($descriptions[id])
// }

// EXPERIMENTAL

// const handleOSILayerMouseenter=(e)=>{activateElement(e.target) }
// const handleOSILayerMouseleave=(e)=>{deactivateElement(e.target); }
// const addEventListeners=(el)=>{
    // eventListeners.foreach(addEvent=>addEvent(el));
    // el.onclick=(e)=>handleOSILayerClick(e)
    // el.onmouseenter=(e)=>handleOSILayerMouseenter(e);
    // el.onmouseleave=(e)=>handleOSILayerMouseleave(e);
  // handleOSILayerClick
  // handleMouseenter
  // handleMouseleave
// }