const arr=document.querySelectorAll('img')
undefined
arr[0].style="transform:translateY(20px) rotate(45deg)"
"transform:translateY(20px) rotate(45deg)"
arr[2].style="transform:translateY(-20px) rotate(-45deg)"
"transform:translateY(-20px) rotate(-45deg)"

const concepts=[...document.querySelectorAll('.item--concept')]
concepts[0].style.background="purple"
concepts[1].style.background="green"
concepts[2].style.background="red"

const dec=document.getElementById('dec'),
		bin=document.getElementById('bin'),
		hex=document.getElementById('hex')
        hex.contentEditable=true;


dec.addEventListener('keypress',(e)=>{
	if (e.which==13){
		num=Number(dec.value);
		bin.value=num.toString(2);
		hex.value=num.toString(16).toUpperCase();
	}
});		



bin.addEventListener('keypress',(e)=>{
  if (e.which==13){
    
    binPrefix='0b';
    var binNum;
//     num=bin.value;
	num=bin.value;
	if(!num.match(/^0[bB]/)){
    	console.log(`it doesnt have  ${binPrefix}`);
    	binNum=binPrefix+num
//     	console.log(hexNum)
    } 
    else{
    	binNum=num
    }

    dec.value=Number(binNum.toString(10));
    hex.value=Number(binNum.toString(10)).toString(16).toUpperCase()	;
  }
});


hex.addEventListener('keypress',(e)=>{
  if (e.which==13){
    hexPrefix='0x';
	var hexNum;
    //need to add a a prefix
//     num=Number(hex.value.toString(10));
	num=hex.value;
    if(!num.match(/^0[xX]/)){
    	console.log(`it doesnt have  ${hexPrefix}`);
    	hexNum=hexPrefix+num
    	console.log(hexNum)
    } 
    else{
    	hexNum=num
    }

    console.log(hexNum)
    dec.value=Number(hexNum.toString(10));
    bin.value=Number(hexNum.toString(10)).toString(2);
    
  }
});



for (i in 2**8){
	console.log(String.fromCharCode(i));
}


// </script>



// <style>
// let images=document.querySelectorAll("img");
// images[0].style.transform="rotate(45deg)";
// // images[1].style.transform="";
// images[2].style.transform="rotate(-45deg)";
// </style>
// </html>