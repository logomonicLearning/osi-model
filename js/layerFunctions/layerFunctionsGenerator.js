window.addEventListener('DOMContentLoaded',()=>{
    const $targets=[...document.querySelectorAll('.interactive-functions')]

    // const mkeEl=(el="div",classes=[],text="")=>{
    //     let item=document.createElement(el);
    //     classes.forEach(el=>item.classList.add(el));
    //     item.innerHTML=text;
    //     return item;
    // }
    const sort=(arr)=>{
        // debugger
        return arr.sort((a,b)=>b.acronym-a.acronym)
    }
    const l1=layerFunctions.filter(el=>el.layer===1)
    const l2LLC=layerFunctions.filter(el=>el.layer==="2LLC")
    const l2MAC=layerFunctions.filter(el=>el.layer==="2MAC")
    const l3=layerFunctions.filter(el=>el.layer===3)
    const l4=layerFunctions.filter(el=>el.layer===4)
    const l5=layerFunctions.filter(el=>el.layer===5)
    const l6=layerFunctions.filter(el=>el.layer===6)
    const l7=layerFunctions.filter(el=>el.layer===7)
    // const layers=[l1,l2,l3]
    const layers=[l7,l6,l5,l4,l3,l2LLC,l2MAC,l1];

    const handleFunctionClick=(e)=>{
        let id=e.target.dataset.id;
        let $details=[...e.target.parentElement.parentElement.children[1].children]
        // querySelectorAll('.protocol__detail')];
        let $functions=[...e.target.parentElement.children]
        $functions.forEach(el=>{
            el.classList.remove('active');
        })
        e.target.classList.add('active');

        $details.forEach(el=>{
            el.classList.add('hidden');
        });
        $details[id].classList.remove('hidden');
    }
//
    layers.forEach((layer,idx)=>{
//         console.log(layer.layer)
        let $body=mkeEl('div',['grid','functions__body','relative'])
        let $col1=mkeEl('div',['layer__functions','flex','flex--column','flex--start'])
        // $col1.appendChild(mkeEl('h3',['flex','flex--center'],`Layer ${layer[0].layer} Functions`))
//         debugger
        let $col2=mkeEl('div',['layer__function__details','flex','flex--center'])
        layer.forEach((el,idx,arr)=>{
            // if(typeof func.layer==="number"){
            el.functions.forEach((el,idx,arr)=>{
                let $func=mkeEl('div',['layer__function__name','item','flex','flex--center','center'],el.name)
                $func.onclick=(e)=>{
                    handleFunctionClick(e);
                }
                $func.dataset.id=idx
                let $detail=mkeEl('div',['layer__function__detail','flex','flex--column','hidden'],el.description)
                $detail.dataset.id=idx;
                // $detail.
                // let $heading,  $port, $description;
                // $heading=mkeEl('h3',['protocol__meaning','flex','flex--center'],protocol.meaning);


                // $port=mkeEl('div',['protocol__port','flex','flex--center'],protocol.port?`Port:${protocol.port}`:"")
                // $description=mkeEl('div',['layer__function__descripton2'],func.description)
                // $detail.appendChild($heading)
                // $detail.appendChild($port)
                // $detail.appendChild($description)
                $col1.appendChild($func)
                $col2.appendChild($detail)
            })

                // }
        })
        $col1.children[0].classList.add('active')
        $col2.children[0].classList.remove('hidden')
        $body.appendChild($col1)
        $body.appendChild($col2)
        $targets[idx].appendChild($body)
    })
})
