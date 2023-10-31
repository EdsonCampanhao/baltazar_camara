const menuButton=document.querySelector('.icon-menu');
const menuContainer=document.querySelector('.header__nav');

function abreMenu(event){
    console.log('click')
    if(menuContainer.childNodes[3].classList.contains('active')){
        menuContainer.childNodes[3].classList.remove('active')
    }else{
        menuContainer.childNodes[3].classList.add('active')
    }
    event.stopImmediatePropagation();
}

menuButton.addEventListener('click',(event)=>{abreMenu(event)})