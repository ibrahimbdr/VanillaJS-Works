var submit = document.getElementById('submitBtn');
var username = document.getElementById('InputUsername');
var password = document.getElementById('InputPassword');
var checkBox = document.getElementsByName('rememberMe');

username.value=localStorage.getItem('username');
password.value=localStorage.getItem('password');
submit.addEventListener('click', ()=>{
    if(checkBox[0].checked){
        localStorage.setItem('remember', true);
        localStorage.setItem('username', username.value);
        localStorage.setItem('password', password.value);
        location.href='profile.html';
    }else{
        localStorage.setItem('remember', false);
        localStorage.setItem('username', username.value);
        localStorage.setItem('password', password.value);
        location.href='profile.html';
    }
    
})

