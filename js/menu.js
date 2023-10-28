const menuButton=document.querySelector('.icon-menu');
const menuContainer=document.querySelector('.header__menu-item');

function abreMenu(event){
    console.log('click')
    if(menuContainer.classList.contains('active')){
        menuContainer.classList.remove('active')
    }else{
        menuContainer.classList.add('active')
    }
    event.stopImmediatePropagation();
}

menuButton.addEventListener('click',(event)=>{abreMenu(event)})