window.addEventListener('DOMContentLoaded',()=>{
    const $targets=[...document.querySelectorAll('.interactive-protocols')]

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
    // const l1=OSIProtocols.filter(el=>el.layer===1)
    const l2=sort(OSIProtocols.filter(el=>el.layer===2))
//     console.log(l2)
    // debugger
    const l3=(OSIProtocols.filter(el=>el.layer===3)).sort((a,b)=>a.acronym-b.acronym)
    const l4=OSIProtocols.filter(el=>el.layer===4)
    const l5=OSIProtocols.filter(el=>el.layer===5)
    const l6=OSIProtocols.filter(el=>el.layer===6)
    const l7=OSIProtocols.filter(el=>el.layer===7)
    // const layers=[l1,l2,l3]
    const layers=[l7,l6,l5,l4,l3,l2]

    const handleAcronymClick=(e)=>{
        let id=e.target.dataset.id;
        let $details=[...e.target.parentElement.parentElement.children[1].querySelectorAll('.protocol__detail')];
        let $acronyms=[...e.target.parentElement.children]
        $acronyms.forEach(el=>{
            el.classList.remove('active');
        })
        e.target.classList.add('active');

        $details.forEach(el=>{
            el.classList.add('hidden');
        });
        $details[id].classList.remove('hidden');
    }

    layers.forEach((layer,idx)=>{
        let $body=mkeEl('template',['grid','protocols__body','relative'])
        let $acronyms=mkeEl('div',['protocol__acronyms','flex','flex--column','flex--start'])
        // $acronyms.appendChild(mkeEl('h3',['flex','flex--center'],`Layer ${layer[0].layer} Protocols`))
        let $details=mkeEl('div',['protocol__details','relative'])
        layer.forEach((protocol,idx,arr)=>{
            if(typeof protocol.layer==="number"){
                        let $acronym=mkeEl('div',['protocol__acronym','item','flex','flex--center','center'],protocol.acronym)
                        $acronym.onclick=(e)=>{
                            handleAcronymClick(e);
                        }
                        $acronym.dataset.id=idx
                        let $detail=mkeEl('div',['protocol__detail','flex','flex--column','hidden'])
                        $detail.dataset.id=idx
                        let $heading,  $port, $description;
                        $heading=mkeEl('h3',['protocol__meaning','flex','flex--center'],protocol.meaning);


                        $port=mkeEl('div',['protocol__port','flex','flex--center'],protocol.port?`Port:${protocol.port}`:"")
                        $description=mkeEl('div',['protocol__descripton'],protocol.description)
                        $detail.appendChild($heading)
                        $detail.appendChild($port)
                        $detail.appendChild($description)
                        $details.appendChild($detail)
                        $acronyms.appendChild($acronym)
                }
        })
        $details.children[0].classList.remove('hidden')
        $body.appendChild($acronyms)
        $body.appendChild($details)
        $targets[idx].appendChild($body)
    })
})
