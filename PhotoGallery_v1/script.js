var imgArr = document.querySelectorAll('.container img');

for(let i=0; i<imgArr.length; i++){
    imgArr[i].addEventListener('contextmenu', (event)=>{
            event.preventDefault();
        }
    )
}