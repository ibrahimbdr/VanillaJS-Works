

const str = window.location.search;

const arr = str.split('&');


arr.pop();
arr[0] = arr[0].substring(1,)
arr[0] = arr[0].replaceAll('+', ' ')
arr[arr.length-1] = arr[arr.length-1].replace('%40', '@') 
console.log(arr);
let arr2;
let y;
let x;


const container = document.getElementById('card');


for (let index = 0; index < arr.length; index++) {

    arr2 = arr[index].split('=')
 
    const z = document.getElementById(`block${index+1}`);

    y = document.createElement('div');
    y.innerHTML = `<div><span>${arr2[0]}:</span></div>`;
    z.appendChild(y)



    x = document.createElement('div');
    x.innerHTML = `<div style="color:blue"><span>${arr2[1]}</span></div>`;
    z.appendChild(x);



    container.appendChild(z);
  
}