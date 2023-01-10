// A1 ***************************************************************************

// function askUser() {
//     mobileValidate = /((010)|(011)|(015))\d{8}$/;
//     EmailValidate = /^[a-zA-Z]+@[a-zA-Z]+\.com$/;
//     EmailValidate2 = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z]+\.com$/;
//     do{
//         var fName = prompt("Enter your first name")
//     }while(isFinite(fName))
//     do{
//         var bYear = prompt("Enter your birth Year")
//     }while(parseInt(bYear) < 1995)
    
//     do{
//         var mob = prompt("Enter your mobile No.")
//     }while(!mobileValidate.test(mob))

//     do{
//         var email = prompt("Enter your Email Address")
//     }while(!EmailValidate.test(email))
    
//     do{
//         var col = prompt("Choose display color red, bule or green")
//     }while(col!="red" && col!="blue" && col!="green")
    
//     var Firstname = document.createElement("h2")
//     Firstname.innerHTML = "Welcome Dear: " + fName
//     document.body.appendChild(Firstname)
//     Firstname.style.color = col
//     var Birthdate = document.createElement("h2")
//     Birthdate.innerHTML = "Your Age is: " + bYear
//     document.body.appendChild(Birthdate)
//     Birthdate.style.color = col
//     var mobile = document.createElement("h2")
//     mobile.innerHTML = "Your Mobile is: " + mob
//     document.body.appendChild(mobile)
//     mobile.style.color = col
//     var EmailAdd = document.createElement("h2")
//     EmailAdd.innerHTML = "Your Email Address is: " + email
//     document.body.appendChild(EmailAdd)
//     EmailAdd.style.color = col
// }

// A2 ***************************************************************************
var childWindow;
function openChildWindow(){
    childWindow = window.open("http://127.0.0.1:5501/childWindow.html", "_blank", "width=200, height=100");
    childWindow.blur();
    var y = true;
    childWindow.setInterval(function moveWindow(){
        
            
            if(childWindow.screenY < 660 && y!=false)
                childWindow.moveBy(1,1);
            else
                y = false;
            
            if(childWindow.screenY > 0 && y==false)
                childWindow.moveBy(-1,-1);
            else
                y = true;
            

            
        
    }, 7)

}

function closeChildWindow(){
    childWindow.close();
}

// A3 ***************************************************************************

var childWindow;
// function openChildWindow(){
//     childWindow = window.open("http://127.0.0.1:5501/childWindow.html", "_blank", "width=400, height=300");
//     childWindow.blur();
// }



// function childMsg()
// {
//     openChildWindow();
//     var strMsg = "This is a message for assingment 3 on Day 3, The message is for testing purpose"
    
//     for(var i=0; i<strMsg.length; i++){
//         let j=i;
//         setTimeout(function(){
//             childWindow.document.write(strMsg[j]);
//         }, 200 * (j+1));

//     }

    

// }

