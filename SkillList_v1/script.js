
const newSkill = document.getElementById("skillInput");
const skillButton = document.getElementById("button")
const skillBox = document.getElementById("container")



    skillButton.addEventListener('click',()=>{
        const skillSpan = document.createElement('span');
        const skillStyle = skillSpan.classList;
            skillStyle.add("skillSpanStyle");
            skillSpan.innerHTML=newSkill.value;
            skillBox.appendChild(skillSpan);
            newSkill.value=''
    })


    newSkill.addEventListener('keydown',(event)=>{
    if(event.code=='Enter' && newSkill.value!='')
    {
        const skillSpan = document.createElement('span');
        const skillStyle = skillSpan.classList;
        skillStyle.add("skillSpanStyle");
        skillSpan.innerHTML=newSkill.value;
        skillBox.appendChild(skillSpan);
        newSkill.value=''
    }
    
})


const skillContainer = document.getElementById("container");

skillContainer.addEventListener('click', (event)=>{
    if(event.target!=skillContainer)
        skillContainer.removeChild(event.target);
})
