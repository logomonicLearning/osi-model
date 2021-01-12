// const concepts=[...document.querySelectorAll('.item--concept')]
// concepts[0].style.background="purple"
// concepts[1].style.background="green"
// concepts[2].style.background="red"

const getDec=(num)=>Number(num);
const getHex=(num)=>num.toString(16);
const getOct=(num)=>num.toString(8);
const getBin=(num)=>num.toString(2);
const getCol=(num)=>'#'+num;
const getAscii=(num)=>String.fromCharCode(num);

function updateDec(val){
    document.getElementById('dec').value=val
}
function updateBin(val){
    document.getElementById('bin').value=val
}
function updateHex(val){
    document.getElementById('hex').value=val
}
function updateOct(val){}
document.getElementById('oct').value=val
function updateAscii(val){
    document.getElementById('ascii').value=val
}
function updateCol(val){
    document.getElementById('col').style.background=val
}

function main(){
    const input=[...document.querySelectorAll('input')];
    input.forEach(el=>{
        el.onkeypress=(e)=>{
            if(e.which===13){
                switch(this.id){
                    case 'dec':
                        bin=getBin(el.value);
                        hex=getHex(el.value);
                        col='#'+getHex(el.value);
                        oct=getHex(dec);
                        ascii=getAscii(el.value);
                        break;
                    case 'bin':
                        // bin=getBin(el.value);
                        dec=getDec('0b'+el.value);
                        hex=getHex(dec);
                        col='#'+hex;
                        ascii=getAscii(dec);
                        oct=getHex(dec);

                        break;
                    case 'hex':
                        dec=getDec('0x'+el.value);
                        bin=getBin(dec);
                        oct=getHex(dec);
                        col='#'+this.value;
                        ascii=getAscii(dec);
                        break;
                    case 'oct':
                        dec=getDec('0o'+el.value);
                        bin=getBin(dec);
                        hex=getHex(dec);
                        col='#'+hex;
                        ascii=getAscii(dec);
                        break;
                }
            }
        }
    })
}


main()

// -------------working!!---------------------
// const css=window.CSS;
// const dec=document.getElementById('dec'),
// 		bin=document.getElementById('bin'),
// 		hex=document.getElementById('hex'),
//         oct=document.getElementById('oct'),
//         col=document.getElementById('col'),
//         ascii=document.getElementById('ascii');
        
//         hex.contentEditable=true;


// dec.addEventListener('keypress',(e)=>{
// 	if (e.which==13){
// 		num=Number(dec.value);
// 		bin.value=num.toString(2);
// 		hex.value=num.toString(16).toUpperCase();
//         oct.value=num.toString(8);
//         ascii.value=String.fromCharCode(dec.value);
//         // val=Number(num.toString(16));
//         let color="#"+dec.value.toString(16);
//         if(css.supports(`background:${color}`)){
//             col.innerText="";
//             col.style.background=color;
//         }
//         else{
//             col.textContent="no color for this";
//             col.style.background="";
//         }
// 	}
// });		



// bin.addEventListener('keypress',(e)=>{
//   if (e.which==13){
    
//     binPrefix='0b';
//     var binNum;
// //     num=bin.value;
// 	num=bin.value;
// 	if(!num.match(/^0[bB]/)){
//     	console.log(`it doesnt have  ${binPrefix}`);
//     	binNum=binPrefix+num
// //     	console.log(hexNum)
//     } 
//     else{
//     	binNum=num
//     }

//     dec.value=Number(binNum.toString(10));
//     hex.value=Number(binNum.toString(10)).toString(16).toUpperCase();
//     oct.value=Number(binNum.toString(8));
//   }
// });


// hex.addEventListener('keypress',(e)=>{
//   if (e.which==13){
//     hexPrefix='0x';
// 	var hexNum;
// 	num=hex.value;
//     if(!num.match(/^0[xX]/)){
//     	console.log(`it doesnt have  ${hexPrefix}`);
//     	hexNum=hexPrefix+num
//     	console.log(hexNum)
//     } 
//     else{
//     	hexNum=num
//     }

//     console.log(hexNum)
//     dec.value=Number(hexNum.toString(10));
//     bin.value=Number(hexNum.toString(10)).toString(2);
//     oct.value=Number(hexNum.toString(10)).toString(8);
    
//   }
// });


// oct.addEventListener('keypress',(e)=>{
//   if (e.which==13){
//     octPrefix='0o';
//     var octNum;
//     //need to add a a prefix
// //     num=Number(hex.value.toString(10));
//     num=oct.value;
//     if(!num.match(/^0[oO]/)){
//         console.log(`it doesnt have  ${octPrefix}`);
//         octNum=octPrefix+num
//         console.log(octNum)
//     } 
//     else{
//         octNum=num
//     }

//     dec.value=Number(octNum.toString(10));
//     bin.value=Number(octNum.toString(10)).toString(2);
//     hex.value=Number(octNum.toString(10)).toString(16);
//   }
// });

$('.wrapper__numbers').sortable()

// for (i in 2**8){
// 	console.log(String.fromCharCode(i));
// }


// </script>



// <style>
// let images=document.querySelectorAll("img");
// images[0].style.transform="rotate(45deg)";
// // images[1].style.transform="";
// images[2].style.transform="rotate(-45deg)";
// </style>
// </html>