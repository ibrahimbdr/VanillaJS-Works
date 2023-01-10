
const FullName = document.getElementById("fName")


FullName.addEventListener('focus', ()=>{
    FullName.style.cssText = `
    background-color: #d1d1d1;
    `
    
})

const nameError = document.createElement('span');

const errorNameContainer = document.getElementById("invalidName");

FullName.addEventListener('blur', ()=>{
    
    if(FullName.value.length < 3 && FullName.value!='')
    {
        FullName.style.cssText = `
        background-color: pink;
        border: 1px;
        border-style: solid;
        `
        
        nameError.innerHTML = "Invaild name less than 3 letters";
        nameError.style.cssText = `
        color: red;
        font-size: 10px;
        margin-bottom: 0px;`
        errorNameContainer.appendChild(nameError);
    }
    // else if(FullName.value=='')
    // {
    //     FullName.style.cssText = `
    //     background-color: pink;
    //     border: 1px;
    //     border-style: solid;
    //     `
    //     nameError.innerHTML = "* Required Field";
    //     nameError.style.cssText = `
    //     color: red;
    //     font-size: 10px;
    //     margin-bottom: 0px;`
    //     errorNameContainer.appendChild(nameError);
    // }
    else
    {
        FullName.style.cssText = `
        background-color: ;
        `
        nameError.innerHTML=''; 
    }
    
})



const PasswordKey = document.getElementById("pass")

const passwordError = document.createElement('span');
const errorPassContainer = document.getElementById("invalidPassword");
const PasswordValidate = /^[a-zA-Z0-9!@#\$%\^\&*\)\(+=._-]{8,16}$/;

PasswordKey.addEventListener('focus', ()=>{
    PasswordKey.style.cssText = `
    background-color: #d1d1d1;
    `
    
})

PasswordKey.addEventListener('blur', ()=>{
    if(!PasswordValidate.test(PasswordKey.value) && PasswordKey.value!='')
    {
        PasswordKey.style.cssText = `
        background-color: pink;
        border: 1px;
        border-style: solid;
        `
        
        passwordError.innerHTML = "Password must be between 8-16 characters with no spaces";
        passwordError.style.cssText = `
        color: red;
        font-size: 10px;
        margin-bottom: 0px;`
        errorPassContainer.appendChild(passwordError);
    }
    else if(PasswordKey.value=='')
    {
        PasswordKey.style.cssText = `
        background-color: pink;
        border: 1px;
        border-style: solid;
        `
        passwordError.innerHTML = "* Required Field";
        passwordError.style.cssText = `
        color: red;
        font-size: 10px;
        margin-bottom: 0px;`
        errorPassContainer.appendChild(passwordError);
    }
    else
    {
        PasswordKey.style.cssText = `
        background-color: ;
        `
        passwordError.innerHTML='';
    }
    
})

const errorContainer = document.getElementById("error");
const errorMsg = document.createElement('span');


const btn = document.getElementById("button");




const myDataContainer = document.getElementById("savedData");
const myData = document.createElement('span');


const checkBox1 = document.getElementById("remChecked");

checkBox1.checked = true;
checkBox1.disabled = false;
const date = new Date();
date.setMonth(date.getMonth() - 1);


btn.addEventListener('click', (event)=>{
    if(!((FullName.value.length > 3)&&
    (PasswordValidate.test(PasswordKey.value))))
    {
        event.preventDefault();
        errorMsg.innerHTML = "Your form has errors, please check and submit again";
        errorMsg.style.cssText = `
        color: red;
        font-size: 12px;
        margin-bottom: 0px;`
        errorContainer.appendChild(errorMsg);
        
    }
    else
    {
        const user = document.getElementById("fName");

        const pass = document.getElementById("pass");
        if(checkBox1.checked)
        {
            const info = localStorage.getItem("username");
            myData.innerHTML = info;
            myData.style.cssText = `
            color: blue;
            font-size: 12px;
            margin-bottom: 0px;`
            myDataContainer.appendChild(myData);
            myData.style.cssText=`
            `
            localStorage.setItem("username", user.value);
            localStorage.setItem("password", pass.value);
            document.cookie = `username=${user.value}`;
            document.cookie = `password=${pass.value}`;
            //to make the data active in the input field
            FullName.value = localStorage.getItem("username");
            PasswordKey.value = localStorage.getItem("password");
            errorMsg.innerHTML = "Data has been saved on Local Storage and Cookies";
            errorMsg.style.cssText = `
            color: green;
            font-size: 12px;
            margin-bottom: 0px;`
            errorContainer.appendChild(errorMsg);
        }
        else
        {
            localStorage.removeItem("username");
            localStorage.removeItem("password");
            document.cookie = 'username=; Expires='+date.toUTCString();
            document.cookie = 'password=; Max-Age=-1000;'

        }

        



    }
})
