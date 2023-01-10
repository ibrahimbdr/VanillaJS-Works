var GradDate = new Date("11/02/2022 9:0 AM");
var timeContainer = document.querySelector(".row span");

var sec = 1000;
var min = sec * 60;
var hr = min * 60;
var dy = hr * 24;
var mth = dy * 30;
var counter;

counter = setInterval(() => {
  var today = new Date();
  var remaining = GradDate - today;
  if (remaining == 0) {
    clearInterval(timer);
    timeContainer.innerHTML = "Congratulations !!!";

    return;
  }
  var months = Math.floor(remaining / mth);
  var days = Math.floor((remaining % mth) / dy);
  var hours = Math.floor((remaining % dy) / hr);
  var minutes = Math.floor((remaining % hr) / min);
  var seconds = Math.floor((remaining % min) / sec);

  timeContainer.innerHTML = `Remaining: ${months} Months : ${days} Days : ${hours} Hours : ${minutes} Minutes : ${seconds} Seconds`;
}, 1000);
