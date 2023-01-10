// A1 *********************************************************

var timer = document.getElementById("timerBody")

var counter = 0;

var key1, key2 = false
const fromStartTimer = setInterval(()=>{
        timer.innerHTML = counter++;
}, 1000)


document.addEventListener('keydown', (event) => {
    if (event.key == 'd') {key1 = true}
    if (event.key == 'Alt') {key2 = true}
        
    if(key1&&key2)
    {
        clearInterval(fromStartTimer);
        timer.innerHTML = 0;
    }
        
});

// A2 *********************************************************

//in the html file

