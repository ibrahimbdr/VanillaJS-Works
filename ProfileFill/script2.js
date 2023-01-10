import {getCookie, setCookie, deleteCookie, allCookieList, hasCookie} from '/functions.js';


const d = new Date();
d.setMonth(d.getMonth()+2);

var counter;
// window.addEventListener('load', ()=>{
    if(hasCookie('name')){
        if(!hasCookie(getCookie('name'))){
            counter=1;
            setCookie(getCookie('name'),counter,d);
        }else{
            counter = Number(getCookie(getCookie('name')));
            counter+=1;
            setCookie(getCookie('name'),counter,d);
        }
    }else{
        location.href="index.html";
    }
// })
console.log(getCookie('name'));
console.log(counter);

var info = document.getElementsByClassName('info');
var image = document.getElementsByTagName('img');


var user = getCookie('name');
var color = getCookie('color');
var gender = getCookie('gender');



var welcome = document.createElement('h2');
welcome.innerHTML = `Welcome <span style="color:${color}">${user}</span>, you have visited this site ${counter} times :)`;
info[0].appendChild(welcome);
image[0].setAttribute('src', 'images/'+gender+'.webp');
image[0].setAttribute('width', '100px');
