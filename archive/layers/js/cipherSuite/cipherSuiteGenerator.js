window.addEventListener('DOMContentLoaded',()=>{
	const mkeEl=(el="div",classes=[],text="")=>{
        let item=document.createElement(el);
        classes.forEach(el=>item.classList.add(el));
        item.innerHTML=text;
        return item;
    }

const handleCipherSuiteClick=(e)=>{
//   console.log(e.target.parentElement.parentchildren[1].innerHTML)
  let id=e.target.dataset.id;
  let $parent=e.target.parentElement.parentElement;
  let $descriptions=[...$parent.children[1].children];
  let $ciphers=[...$parent.children[2].children];
  $descriptions.forEach(($description,idx,arr)=>{
    $description.classList.add('hidden')
  })
  $descriptions[id].classList.remove('hidden')
  $ciphers.forEach(($cipherSet,idx,arr)=>{
    $cipherSet.classList.add('hidden')
  })
  $ciphers[id].classList.remove('hidden')

//   e.target.parentElem
//   console.log($algorithms.innerHTML)
}

const $body=document.getElementById('cipher-suite__body')
const $categories=mkeEl('div',["cipher-suite__types","grid"])
const $descriptions=mkeEl('div',["cipher-suite__descriptions", "flex", "flex--center"])
const $suites=mkeEl('div',["cipher-suite__suites", "flex", "flex--center"])

cipherSuites.forEach((category,idx,arr)=>{
  let $category=mkeEl('div',["cipher-suite__type", "flex", "flex--center", "center"],category.type)
  $category.dataset.id=idx;
  $category.onclick=(e)=>{
    handleCipherSuiteClick(e)
  }
  let $description=mkeEl('div',["cipher-suite__description", "flex", "flex--column","hidden"],category.description)
  $description.dataset.id=idx;
  let $algorithms=mkeEl('div',["cipher-suite__algorithms", "flex", "flex--column","hidden"])
  $algorithms.dataset.id=idx;

  category.algorithms.forEach((el,idx,arr)=>{
    let $algorithm=mkeEl('div',["cipher-suite__algorithm", "flex", "flex--center", "center"],el);
    $algorithms.appendChild($algorithm)
  })
  $categories.appendChild($category)
  $descriptions.appendChild($description);
  $descriptions.children[0].classList.remove('hidden')
  $suites.appendChild($algorithms)
  $suites.children[0].classList.remove('hidden');
})

$body.appendChild($categories)
$body.appendChild($descriptions)
$body.appendChild($suites)
})