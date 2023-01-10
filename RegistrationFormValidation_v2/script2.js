
const info = document.location.search;

const infoArr = info.split('&');

let Name = infoArr[0].substring(1,)

Name = Name.split('=')

Name = Name[1].replaceAll('+', ' ')

const str = `Thank You "${Name}" for Registeration ...`

const h1 = document.getElementById('container')
for(var i=0; i<str.length; i++){
    let j=i;
    setTimeout(function(){
        var x = document.createElement('span')
        x.innerHTML = str[j];
        h1.appendChild(x);

    }, 150 * (j+1));

}

