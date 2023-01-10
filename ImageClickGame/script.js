


const img1 = document.getElementById("image1")

const img2 = document.getElementById("image2")

const img3 = document.getElementById("image3")


let c = document.querySelectorAll('#counter>span')

let counter1 = c[0].innerHTML = 0;
let counter2 = c[1].innerHTML = 0;
let counter3 = c[2].innerHTML = 0;

img1.addEventListener('click', ()=> {
    c[0].innerHTML = ++counter1;
})

img2.addEventListener('click', ()=> {
    c[1].innerHTML = ++counter2;
})

img3.addEventListener('click', ()=> {
    c[2].innerHTML = ++counter3;
})

let totalScore = document.querySelectorAll('#score>span');

setInterval(()=>{totalScore[1].innerHTML = counter1+counter2+counter3;},0)
