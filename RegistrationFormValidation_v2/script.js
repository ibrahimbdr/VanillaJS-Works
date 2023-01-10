
const FullName = document.getElementById("fName")
const EmailAddress = document.getElementById("emailAdd")


FullName.addEventListener('focus', ()=>{
    FullName.style.cssText = `
    background-color: #d1d1d1;
    `
    
})

const nameError = document.createElement('span');
const emailError = document.createElement('span');


const EmailValidate = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z]+\.com$/;
const errorNameContainer = document.getElementById("invalidName");
const errorEmailContainer = document.getElementById("invalidEmail");

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

EmailAddress.addEventListener('focus', ()=>{
    EmailAddress.style.cssText = `
    background-color: #d1d1d1;
    `
    
})

EmailAddress.addEventListener('blur', ()=>{
    if(!EmailValidate.test(EmailAddress.value) && EmailAddress.value!='')
    {
        EmailAddress.style.cssText = `
        background-color: pink;
        border: 1px;
        border-style: solid;
        `
        
        emailError.innerHTML = "Invaild E-mail format";
        emailError.style.cssText = `
        color: red;
        font-size: 10px;
        margin-bottom: 0px;`
        errorEmailContainer.appendChild(emailError);
    }
    // else if(EmailAddress.value=='')
    // {
    //     EmailAddress.style.cssText = `
    //     background-color: pink;
    //     border: 1px;
    //     border-style: solid;
    //     `
    //     emailError.innerHTML = "* Required Field";
    //     emailError.style.cssText = `
    //     color: red;
    //     font-size: 10px;
    //     margin-bottom: 0px;`
    //     errorEmailContainer.appendChild(emailError);
    // }
    else
    {
        // EmailAddress.style.cssText = `
        // background-color: ;
        // `
        emailError.innerHTML='';
    }
    
})



const PasswordKey = document.getElementById("pass")
const PasswordConfirmation = document.getElementById("passC")

const passwordError = document.createElement('span');
const PasswordConfirmError = document.createElement('span');
const errorPassContainer = document.getElementById("invalidPassword");
const errorPassConfirmContainer = document.getElementById("invalidPasswordConfirm");
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
        // PasswordKey.style.cssText = `
        // background-color: ;
        // `
        passwordError.innerHTML='';
    }
    
})

PasswordConfirmation.addEventListener('focus', ()=>{
    PasswordConfirmation.style.cssText = `
    background-color: #d1d1d1;
    `
    
})

PasswordConfirmation.addEventListener('blur', ()=>{
    if(PasswordConfirmation.value != PasswordKey.value)
    {
        PasswordConfirmation.style.cssText = `
        background-color: pink;
        border: 1px;
        border-style: solid;
        `
        
        PasswordConfirmError.innerHTML = "Password and Password Conformation do not match";
        PasswordConfirmError.style.cssText = `
        color: red;
        font-size: 10px;
        margin-bottom: 0px;`
        errorPassConfirmContainer.appendChild(PasswordConfirmError);
    }

    else
    {
        PasswordConfirmation.style.cssText = `
        background-color: ;
        `
        PasswordConfirmError.innerHTML='';
    }
    
})

const errorContainer = document.getElementById("error");
const errorMsg = document.createElement('span');


const btn = document.getElementById("button");

btn.addEventListener('click', (event)=>{
    if(!((FullName.value.length > 3)&&
    EmailValidate.test(EmailAddress.value)&&
    (PasswordValidate.test(PasswordKey.value))&&
    (PasswordConfirmation.value == PasswordKey.value)))
    {
        event.preventDefault();
        errorMsg.innerHTML = "Your form has errors, please check and submit again";
        errorMsg.style.cssText = `
        color: red;
        font-size: 12px;
        margin-bottom: 0px;`
        errorContainer.appendChild(errorMsg);
    }
})

