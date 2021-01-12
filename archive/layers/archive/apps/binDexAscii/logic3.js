
const getDec=(num)=>Number(num);
const checkHex=(num)=>typeof(Number(num))==="number"?true:false;

function updateDOM(val){
    const $dec=document.getElementById('dec'),
    $bin=document.getElementById('bin'),
    $hex=document.getElementById('hex'),
    $oct=document.getElementById('oct'),
    $col=document.getElementById('col'),
    $ascii=document.getElementById('ascii');

    $dec.value=val;
    $bin.value=val.toString(2);
    $hex.value=val.toString(16).toUpperCase();
    $oct.value=val.toString(8);
    // 16777215
    if($dec.value<=99 | $dec.value>16777215){
        $col.innerText="no such color";
        $col.style.background='white';
    }
    else{
        $col.innerText="";
        $col.style.background='#'+$dec.value.toString(16);
    }
    $ascii.value=String.fromCharCode(val);
}

function main(){
    // console.log('boo')
    const input=[...document.querySelectorAll('input')];
    input.forEach(el=>{
        el.onkeypress=(e)=>{
            if(e.which===13){
                switch(el.id){
                    case 'dec':
                        val=Number(el.value);
                        updateDOM(val);
                        break;
                    case 'bin':
                        prefix='0b'
                        val=el.value.match(/^0[bB]/)?getDec(el.value):getDec(prefix+el.value)
                        updateDOM(val);
                        break;
                    case 'hex':
                        if(checkHex(el.value)){
                            prefix='0x'
                            val=el.value.match(/^0[xX]/)?getDec(el.value):getDec(prefix+el.value)
                            updateDOM(val);
                            break;
                        }
                        else{
                            return;
                        }
                        
                    case 'oct':
                        prefix='0o'
                        val=el.value.match(/^0[oO]/)?getDec(el.value):getDec(prefix+el.value)
                        updateDOM(val);
                        break;
                    case 'ascii':
                        val=el.value.charCodeAt();
                        updateDOM(val);
                }
            }
        }
    })
}

$('.numbers-wrapper').sortable()
main()