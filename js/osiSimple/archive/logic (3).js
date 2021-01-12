window.addEventListener('DOMContentLoaded',()=>{
  const $container= document.getElementById('interactive-osi-model');
  const $body=mkeEl('div',['interactive-osi-model','grid'])
  const $col1=mkeEl('div',['interactive-osi-model__layers','grid','left']);
  const $col2=mkeEl('div',['interactive-osi-model__pdus','grid']);
  const $col3=mkeEl('div',['interactive-osi-model__descriptions','grid']);
  $col1.appendChild(mkeEl('b',['interactive-osi-model__heading','flex','flex--center'],'OSI Layers'))
  $col2.appendChild(mkeEl('b',['interactive-osi-model__heading','flex','flex--center'],'PDUs'))
  $col3.appendChild(mkeEl('b',['interactive-osi-model__heading','flex','flex--center'],'Description'))

/*
all now in mkeEl.js
hideElements
activateElement
deactivateElement
deactivateElements
appendElements
mkeEl*/

// EVENTHandlers
const handleOSIItemClick=(e)=>{
  let id=e.target.dataset.id;
  // let $items=[...document.querySelectorAll('.interactive-osi-model__item')];
  let $items=[...$container.querySelectorAll('.item')];
  deactivateElements($items);
  activateElement(e.target)
  // let $descriptions=[...$container.querySelectorAll('.interactive-osi-model__description')];
  let $descriptions=[...$container.querySelectorAll('.description')];

  hideElements($descriptions)
  showElement($descriptions[id])
}

// const handlePDUClick=()=>{
//   let id=e.target.dataset.id;
//   let $items=[...document.querySelectorAll('.interactive-osi-model__pdu')]
//   activateElement(e.target);
//   let $descriptions=[...document.querySelectorAll('.interactive-osi-model__description')];
//   hideElements($descriptions)
//   showElement($descriptions[id])
// }


// creating col1 & col3 data
const init=()=>{
    const newArr=[...OSILayers,...pdus];
    newArr.forEach((el,idx,arr)=>{
      if(el.layerNum){
        let $layer=mkeEl('div',["interactive-osi-model__item","item", "flex","item-bottom--border","flex--center","center"],`L${el.layerNum}:${el.name}`);
        $layer.dataset.id=idx;
        $layer.onclick=(e)=> handleOSIItemClick(e)

        let $description=mkeEl('div',['interactive-osi-model__description',"description",'flex','hidden'],`${el.description}`);
        $description.dataset.id=idx;

        appendElements($col1,[$layer])
        appendElements($col3,[$description])
      }
      else if(el){
        let $pdu=mkeEl('div',['interactive-osi-model__item',"item","item-bottom--border",'flex','flex--center','center'],el.name)
        $pdu.dataset.id=idx;
        $pdu.onclick=(e)=>handleOSIItemClick(e);
        let $description=mkeEl('div',['interactive-osi-model__description',"description",'flex','hidden'],`${el.description}`);
        $description.dataset.id=idx;

        appendElements($col2,[$pdu]);
        appendElements($col3,[$description])
      }
    })


    appendElements($body,[$col1,$col2,$col3]);
    activateElement($col1.children[1]);
    showElement($col3.children[1])

    // document.getElementById('interactive-osi-model').appendChild($body)
    appendElements($container,[$body])

}

init()

})

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