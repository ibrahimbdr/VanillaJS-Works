var xhr = new XMLHttpRequest();
var lists = document.getElementsByTagName("select");
var link = document.querySelector(".row a");

xhr.open("get", "rockbands.json");

xhr.send();

xhr.addEventListener("load", () => {
  var xhrRes = xhr.response;
  var xhrParsed = JSON.parse(xhrRes);
  // console.log(xhrParsed);

  for (var band in xhrParsed) {
    var bandOption = document.createElement("option");
    bandOption.innerHTML = band;
    lists[0].appendChild(bandOption);
  }

  lists[0].addEventListener("change", (event) => {
    lists[1].innerHTML = "";
    var option = document.createElement("option");
    option.innerHTML = "Select artist";
    option.setAttribute("selected", "");
    option.setAttribute("disabled", "");
    lists[1].appendChild(option);
    link.style.visibility = "hidden";
    xhrParsed[event.target.value].forEach((artist) => {
      var artistOption = document.createElement("option");
      artistOption.innerHTML = artist.name;
      lists[1].appendChild(artistOption);
    });
  });

  for (key in xhrParsed) {
    xhrParsed[key].forEach((artist) =>
      lists[1].addEventListener("change", (event) => {
        if (event.target.value == artist.name) {
          //console.log(artist.value);
          //window.open(artist.value,'');
          link.style.visibility = "visible";
          link.setAttribute("href", artist.value);
        }
      })
    );
  }
});
