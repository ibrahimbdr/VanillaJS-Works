//1.////////////////////////////////////////////

// var txtBox = document.getElementById('textBox');

// document.addEventListener('keypress', (event)=>{
//     alert(event.keyCode);
//     //alert(event.code);
// })

// txtBox.addEventListener('mousedown', (event)=>{
//     alert(event.button);
// })

//2.////////////////////////////////////////////

var timeBox = document.getElementById('timeBox');

timeBox.innerHTML='00 : 00 : 00'

var clockBtn = document.getElementById('timeBtn');
var tInterval;
clockBtn.addEventListener('click', ()=>{
    alert('Clock Started')
    tInterval = setInterval(
        ()=>{
            var t = new Date();
            var h, m, s;
            if(t.getHours()<10){
                h='0'+t.getHours();
            }else{
                h=t.getHours();
            }
            if(t.getMinutes()<10){
                m='0'+t.getMinutes();
            }else{
                m=t.getMinutes();
            }
            if(t.getSeconds()<10){
                s='0'+t.getSeconds();
            }else{
                s=t.getSeconds();
            }
            timeBox.innerHTML=h+' : '+m+' : '+s;
            // timeBox.innerHTML=t.toTimeString
        },1000)
})

var onBox = false;

timeBox.addEventListener('mouseover', () => {
    onBox = true;
});

timeBox.addEventListener('mouseout', () => {
    onBox = false;
});

document.addEventListener('keydown', (event) => {

    if(event.key == 'w'&&!onBox){
        clearInterval(tInterval);
        timeBox.innerHTML='00 : 00 : 00';
        alert('Clock Stopped');
    }else{
        alert(event.key);
        event.stopPropagation();
    }
  });




//3.////////////////////////////////////////////

// var inputBox = document.getElementById('textarea');
// var numRegex = /^[A-Za-z]+$/;
// inputBox.addEventListener('keydown', (event)=>{
//     if(!numRegex.test(event.key)){
//         event.preventDefault();
//     }
// })

//5.////////////////////////////////////////////

// var imageGal = document.querySelectorAll('.photoGal');

// function imageFading(event){
//     event.target.style.cursor='pointer';
//     event.target.style.animation='fade 0.5s forwards';
//     }

// function imageShowing(event){
//     event.target.style.cursor='pointer';
//     event.target.style.animation='appear 0.5s forwards';
//     }
 


//     imageGal[0].addEventListener('mouseover', imageFading)

//     imageGal[0].addEventListener('mouseout', imageShowing)


