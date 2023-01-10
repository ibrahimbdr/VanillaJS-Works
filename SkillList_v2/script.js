const skill = document.querySelector('.skillAdd form input');
const addBtn = document.querySelector('.btnAdd');
const skillBox = document.querySelector('.skillContainer');

let skillValue;
let skillBlock;
let skillDel;

addBtn.addEventListener('click', ()=>{
    if(skill.value!=''){
        skillValue = skill.value;
        skillBlock = document.createElement('div');
        skillBlock.innerHTML = skillValue+'<span class="material-symbols-outlined md12">close</span>';
        // skillBlock.setAttribute('draggable','true');
        skillBlock.classList.add('skillBlockStyle');
        skillBox.appendChild(skillBlock);
        skill.value='';
    }
})


skillBox.addEventListener('click', (event)=>{
    skillDel = document.querySelectorAll('.skillContainer div span');
    skillDel.forEach(element => {
        if(event.target==element){
            event.target.parentNode.remove();
        }
    }); 
 
    skillBlock = document.querySelectorAll('.skillContainer div');
    skillBlock.forEach(block => {
        if(event.target==block){
            block.onmousedown = function(event) 
            {

                //1. Determine the dimention of the block.
                let shiftX = event.clientX - block.getBoundingClientRect().left;
                let shiftY = event.clientY - block.getBoundingClientRect().top;
              
                //2. change the position to absolute.
                block.style.position = 'absolute';
                
                //3. Setup move funciton
                function moveAt(pageX, pageY) {
                  block.style.left = pageX - shiftX + 'px';
                  block.style.top = pageY - shiftY + 'px';
                }
                
                //4. Setup mouse move function
                function onMouseMove(event) {
                  moveAt(event.pageX, event.pageY); 
                }
              
                //5. event for moving on mousemove
                skillBox.addEventListener('mousemove', onMouseMove);
              
                //6. drop, remove unneeded handlers (stop the event).
                block.onmouseup = function() {
                    skillBox.removeEventListener('mousemove', onMouseMove);
                  block.onmouseup = null;
                  skillBlock.forEach(b =>{
                      if(block.style.left<=b.style.left || 
                        block.style.top>=b.style.top){
                            var temp = block.innerHTML;
                            block.innerHTML = b.innerHTML;
                            b.innerHTML = temp;
                            block.style.position = 'static';
                        }else{
                            block.style.position = 'static';
                        }
                  })
                };
              
              };
              
              block.ondragstart = function() {
                return false;
              };

            
        }
    }); 

})


