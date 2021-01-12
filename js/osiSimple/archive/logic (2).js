window.addEventListener('DOMContentLoaded',()=>{

  const $body=mkeEl('div',['interactive-osi-model','grid'])
  const $col1=mkeEl('div',['interactive-osi-model__layers','grid']);
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
const handleOSILayerClick=(e)=>{
  let id=e.target.dataset.id;
  let $items=[...document.querySelectorAll('.interactive-osi-model__layer')];
  deactivateElements($items);
  activateElement(e.target)

  let $descriptions=[...document.querySelectorAll('.interactive-osi-model__description')];
  hideElements($descriptions)
  showElement($descriptions[id])
}

const handlePDUClick=()=>{
  let id=e.target.dataset.id;
  let $items=[...document.querySelectorAll('.interactive-osi-model__pdu')]
  activateElement(e.target);
  let $descriptions=[...document.querySelectorAll('.interactive-osi-model__description')];
  hideElements($descriptions)
  showElement($descriptions[id])
}


// creating col1 & col3 data
const init=()=>{
    const newArr=[...OSILayers,...pdus];
    newArr.forEach((el,idx,arr)=>{
      if(el.layerNum){
        let $layer=mkeEl('div',["interactive-osi-model__layer", "flex","flex--center","center"],`L${el.layerNum}:${el.name}`);
        $layer.dataset.id=idx;
        $layer.onclick=(e)=> handleOSILayerClick(e)
        // addEventListeners($layer)

        let $description=mkeEl('div',['interactive-osi-model__description','flex','hidden'],`${el.description}`);
        $description.dataset.id=idx;

        appendElements($col1,[$layer])
        appendElements($col3,[$description])
      }
      else{
        let $pdu=mkeEl('div',['interactive-osi-model__pdu','flex','flex--center','center'],el)
        // $el.onclick=(e)=>handlePDUClick(e);
        appendElements($col2,[$pdu]);
      }
    })
    // OSILayers.forEach((layer,idx,arr)=>{
    //   let $layer=mkeEl('div',["interactive-osi-model__layer", "flex","flex--center","center"],`L${layer.layerNum}:${layer.name}`);
    //   $layer.dataset.id=idx;
    //   $layer.onclick=(e)=> handleOSILayerClick(e)
    //   // addEventListeners($layer)

    //   let $description=mkeEl('div',['interactive-osi-model__description','flex','hidden'],`${layer.description}`);
    //   $description.dataset.id=idx;

    //   appendElements($col1,[$layer])
    //   appendElements($col3,[$description])
    // })

    // creating col2 data
    // pdus.forEach(pdu=>{
    //   let $el=mkeEl('div',['interactive-osi-model__pdu','flex','flex--center','center'],pdu)
    //   // $el.onclick=(e)=>handlePDUClick(e);
    //   appendElements($col2,[$el]);
    // });

    appendElements($body,[$col1,$col2,$col3]);
    activateElement($col1.children[1]);
    showElement($col3.children[1])

    document.getElementById('interactive-osi-model').appendChild($body)

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