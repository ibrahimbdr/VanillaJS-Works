var imgs = document.getElementById("imgArr");
var i = 0;
var imgSlider;
var imgSliderOver;

var pBtn = document.getElementById("play");
var imgsArr = ["1.webp", "2.webp", "3.webp", "4.jpeg"];

imgs.addEventListener('mouseover', ()=>{
    imgSliderOver = setInterval(() => {
        if (i >= 3) {
          i = -1;
        }
        i++;
        imgs.children[0].src = "images/" + imgsArr[i];
      }, 1500);
});

imgs.addEventListener("mouseout", () => {
    clearInterval(imgSliderOver);
});

pBtn.addEventListener("click", () => {
  imgSlider = setInterval(() => {
    if (i >= 3) {
      i = -1;
    }
    i++;
    imgs.children[0].src = "images/" + imgsArr[i];
  }, 1500);
});
var sBtn = document.getElementById("stop");

sBtn.addEventListener("click", () => {
    clearInterval(imgSlider);
  });


  var prevBtn = document.getElementById("prev");

  prevBtn.addEventListener('click', ()=>{
    if (i <= 0) {
        i = 4;
      }
      i--;
      imgs.children[0].src = "images/" + imgsArr[i];
  })

  var nexBtn = document.getElementById("nex");

  nexBtn.addEventListener('click', ()=>{
    if (i >= 3) {
        i = -1;
      }
      i++;
      imgs.children[0].src = "images/" + imgsArr[i];
  })
