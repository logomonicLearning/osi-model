// import {showElement, hideElements, activateElement, deactivateElement, deactivateElements, appendElements, mkeEl} from '../mkeEl.js';

// export default const handleItemClick=(e,$c,a=".item",b=".description")=>{
const handleItemClick=(e,$c,a=".item",b=".description")=>{
  let id=e.target.dataset.id;
  let $items=[...$c.querySelectorAll(a)];
  let $descriptions=[...$c.querySelectorAll(b)];

  deactivateElements($items);
  activateElement(e.target)
  hideElements($descriptions)
  showElement($descriptions[id])

}