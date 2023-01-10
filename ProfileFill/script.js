import {getCookie, setCookie, deleteCookie, allCookieList, hasCookie} from '/functions.js';

const d = new Date();
d.setMonth(d.getMonth()+2);

var inputs = document.getElementsByTagName('input');
var btn = document.getElementsByTagName('button');

btn[0].addEventListener('click', ()=>{
    for(let i=0; i<inputs.length; i++){
        console.log(inputs[i].name, inputs[i].value);
        
        if(inputs[i].name=='gender'&&!inputs[i].checked){
            continue;
        }else{
            setCookie(inputs[i].name, inputs[i].value, d);
        }
    }
    location.href="welcome.html";
})


