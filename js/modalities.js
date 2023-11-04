const buttons=document.querySelectorAll(".modalities__types-button")

function readMore(modeClicked){
   
        modeClicked.parentElement.childNodes[3].classList.add('active');
        modeClicked.remove()
    }
buttons.forEach((button)=>{
    button.addEventListener('click',(event)=>{
        readMore(event.target)
    })})