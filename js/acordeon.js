const acordeonButtons=document.querySelectorAll('.differentials__toggler')


function openAcordeon(event){
    let targetAcordeon=event.target.parentNode.parentNode;
    
    if (targetAcordeon.classList.contains('active')){
        targetAcordeon.classList.remove('active')
    }else{
        targetAcordeon.classList.add('active')
    }

}

acordeonButtons.forEach((button)=>{button.addEventListener('click',(event)=>{openAcordeon(event)})})