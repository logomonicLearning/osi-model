const showElement=(el)=>  el.classList.remove('hidden');
const hideElements=(elements)=> elements.forEach(el=>el.classList.add('hidden'));
const activateElement=(el)=> el.classList.add('active');
const deactivateElement=(el)=>el.classList.remove('active');
const deactivateElements=(elements)=> elements.forEach(el=>el.classList.remove('active'));
const appendElements=(el,items)=> items.forEach(item=> el.appendChild(item));
const mkeEl=(el="div",classes=[],text="")=>{
        let item=document.createElement(el);
        classes.forEach(el=>item.classList.add(el));
        item.innerHTML=text;
        return item;
}
// new mkeEl
 // const mkeEl = (el,attribs)=>{
 //        let item = document.createElement(el);
 //        Object.entries(attribs).forEach((el,idx,arr)=>{
 //            item[arr[idx][0]] = arr[idx][1]
 //        }
 //        )
 //        return item;
 //    }

 // export {showElement, hideElements, activateElement, deactivateElement, deactivateElements, appendElements, mkeEl}