
const burgerBtn = document.querySelector('.menu__burger');
const burgerLines = document.querySelector('.menu__burger .menu__burger-lines');
const menuHome = document.querySelector('.menu__home');


burgerBtn.addEventListener('click', ()=> {
    menuHome.classList.toggle('active');
    burgerBtn.classList.toggle('active');
    burgerLines.classList.toggle('active');
});



function scrollToHeader(){
    window.scrollTo({top:0, behavior: 'smooth'})
}
