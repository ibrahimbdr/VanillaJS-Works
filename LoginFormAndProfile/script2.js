var username = document.getElementsByTagName('h1');

var user = localStorage.getItem('username');

if(localStorage.getItem('remember')=='false'){
    localStorage.removeItem('username');
    localStorage.removeItem('password');
    localStorage.removeItem('remember');
}

username[0].innerHTML = user;