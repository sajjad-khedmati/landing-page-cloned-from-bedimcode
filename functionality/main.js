const navToggle = document.querySelector('.nav__toggle'),
      navMenu = document.querySelector('.nav__menu'),
      navClose = document.querySelector('.nav__close');


const showNav = ()=>{
navMenu.style.top = '0'
}

const hideNav = ()=>{
    navMenu.style.top = '-1000%'
}

// show nav when click the function icon
navToggle.addEventListener("click" , () => {
    showNav();
})

// hide nav when click the close icon
navClose.addEventListener("click" , () => {
    hideNav();
})

// close nav when ckick items
const navList = document.querySelectorAll('.nav__link');
navList.forEach(element => {
    element.addEventListener("click" , hideNav)
});