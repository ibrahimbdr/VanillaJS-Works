var btnOpen = document.getElementById("windowBtnOpen");

var btnClose = document.getElementById("windowBtnClose");

var counter = document.querySelector(".counter h2");

var paraWin;
var paraTimeFunc;

btnOpen.addEventListener("click", () => {
  for (let i = 0; i < 3; i++) {
    setTimeout(() => {
      counter.innerHTML = "oppening window in " + (3 - i);
    }, 1000 * i);
  }
  setTimeout(() => {
    paraWin = window.open(
      "http://127.0.0.1:5500/paraWin.html",
      "",
      "width=400, height=300"
    );
    window.focus();
  }, 3000);
});

var str =
  " Lorem ipsum dolor sit amet elit.\n Aliquid, doloribus aspunde corporis \nplaceat odio illo assumenda am repellendus,\n nam cum porro natus id sint quod tempore cumque?";

for (let i = 0; i < str.length; i++) {
  paraTimeFunc = setTimeout(() => {
    paraWin.document.write(str[i]);
  }, 200 * (i + 1));
}

btnClose.addEventListener("click", () => {
  clearTimeout(paraTimeFunc);
  paraWin.close();
});
