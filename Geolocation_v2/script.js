//   navigator.geolocation.watchPosition((position) => {
//     console.log(position.coords.latitude, position.coords.longitude);
//   });

var mapBox = document.getElementById('map');
var countryList = document.getElementById('country');
var mapFrame = document.getElementsByTagName('iframe');
var info = document.getElementsByClassName('info');
var countryName = document.getElementById('countryName');
var inputs = document.getElementsByTagName('input');
var searchBtn = document.getElementById('search')


window.addEventListener('load', ()=>{
    navigator.geolocation.getCurrentPosition((position) => {
        var lat = position.coords.latitude;
        var long = position.coords.longitude;
        console.log(lat, long);
        mapBox.innerHTML=`
        <iframe
        width="500"
        height="500"
        frameborder="0"
        scrolling="no"
        marginheight="0"
        marginwidth="0"
        src="https://maps.google.com/maps?q=+${lat}+,+${long}+&hl=en&z=10&amp;output=embed"
      >
      </iframe>
        `

      });
})

countryList.addEventListener('change',(event)=>{
    mapBox.innerHTML=`
    <iframe
    width="500"
    height="500"
    frameborder="0"
    scrolling="no"
    marginheight="0"
    marginwidth="0"
    src="https://maps.google.com/maps?q=+${event.target.value}+&hl=en&z=4&amp;output=embed"
  >
  </iframe>
    `
    var countries= countryList.options;
    for(country of countries){
        if(country.value == event.target.value){
            countryName.innerHTML = `Country Name: ${country.innerHTML}`;
        }}
    
    //mapFrame[0].src=`https://maps.google.com/maps?q=+${event.target.value}+&hl=en&z=5&amp;output=embed`;
})

searchBtn.addEventListener('click', ()=>{
    
    var latitude = inputs[0].value;
    var longitude = inputs[1].value;
    // console.log(latitude, longitude);
    if(latitude!=''&&longitude!=''){
    mapBox.innerHTML=`
    <iframe
    width="500"
    height="500"
    frameborder="0"
    scrolling="no"
    marginheight="0"
    marginwidth="0"
    src="https://maps.google.com/maps?q=+${latitude}+,+${longitude}+&hl=en&z=10&amp;output=embed"
  >
  </iframe>
    `
    inputs[0].value = '';
    inputs[1].value = '';
    }else{
        alert('Invalid Inputs');
    }
})



