

const btn = document.getElementById('button')
const images = document.getElementsByTagName('img')
const sliderImages = document.getElementById("slideContainer")

var j=0;

btn.addEventListener('click',()=>{
    if(j>=5000)
    {
        sliderImages.scroll(0,0);
        j=0;
    }
    else
    {
        for(var i=0; i<=1249; i++){
            setTimeout(function(){
                // sliderImages.scroll(i,0);
                sliderImages.scrollBy(i,0);
            }, 100);       
        console.log(i);
        }
        console.log(j);
        j+=i;
    }
    

})

// sliderImages.scrollWidth

